import { Injectable } from '@angular/core';

import { NdpDLLNode, NdpDoubleLinkedList } from '../models/collections.model';
import { NdpAutoResetNumber } from '../models/realtime-numbers.model';

/**
 * Interface definissant les elements se mettant a jour
 */
interface _NdpRealtimeUpdateData {
  updateValue: (ms: number) => void;
}

/**
 * Classe definissant les nombres qui se mettent à jour automatiquement
 */
class _NdpAutoResetNumber implements _NdpRealtimeUpdateData,NdpAutoResetNumber {

  private _currentValue: number;
  private _value: number;
  private _resetSpeed: number;
  private _resetDelay: number;
  private _timeSinceUpdate: number;
  private _attachReference: any;
  private _attachToRealtimeService: (item: _NdpRealtimeUpdateData) => any;
  private _detachFromRealtimeService: (ref: any) => void;
  private _updateValue: (ms: number) => void;

  constructor(attachToRealtimeService: (item: _NdpRealtimeUpdateData) => any, detachFromRealtimeService:(ref: any) => void) {
    this._attachToRealtimeService = attachToRealtimeService;
    this._detachFromRealtimeService = detachFromRealtimeService;
  }

  // ------------------------- NdpRealtimeUpdateData ----------------------
  public updateValue(ms: number): void {
    this._timeSinceUpdate += ms;
    if (this._timeSinceUpdate >= this._resetDelay) {
      this._updateValue(ms);
    }
    if (this.currentValue == this._value) {
      this._selfDetach();
    }
  }

  public detachFromRealtimeService(): void {
    this._attachReference = null;
  }

  // ----------------------- Getters / Setters -----------------------------
  public get currentValue(): number {
    return this._currentValue;
  }

  public set currentValue(v: number) {
    this._currentValue = v;
    if (this._currentValue < this._value) {
      this._updateValue = this._incUpdate;
    }
    else {
      this._updateValue = this._decUpdate;
    }
    this._timeSinceUpdate = 0;
    if (!this._attachReference){
      this._attachReference = this._attachToRealtimeService(this);
    }
  }

  public get value(): number {
    return this._value;
  }

  public set value(v: number) {
    this._value = v;
    this._currentValue = v;
  }

  public get resetSpeed(): number {
    return this._resetSpeed;
  }

  public set resetSpeed(v: number) {
    this._resetSpeed = v;
  }

  public get resetDelay(): number {
    return this._resetDelay;
  }

  public set resetDelay(v: number) {
    this._resetDelay = v;
  }

  // ------------------------------------- Privees ------------------------------
  private _incUpdate(ms: number): void {
    this._currentValue += (ms * this._resetSpeed);
    if (this._currentValue > this._value) {
      this._currentValue = this._value;
    }
  }

  private _decUpdate(ms: number): void {
    this._currentValue -= (ms * this._resetSpeed);
    if (this._currentValue < this._value) {
      this._currentValue = this._value;
    }
  }

  private _selfDetach(): void {
    this._detachFromRealtimeService(this._attachReference);
    this._attachReference = null;
  }
}

interface _NdpRealtimeUpdaterItem {

  updateData?: _NdpRealtimeUpdateData
  node?: NdpDLLNode<_NdpRealtimeUpdaterItem>;
}

const ITEMS_GROWING_SIZE = 20;
const REFRESH_INTERVAL_MS = 5;

@Injectable({
  providedIn: 'root'
})
export class RealtimeUpdaterService {

  private _itemsGrowingSize: number = ITEMS_GROWING_SIZE;
  private _freeItemsList: NdpDoubleLinkedList<_NdpRealtimeUpdaterItem> = new NdpDoubleLinkedList();
  private _currentItemsList: NdpDoubleLinkedList<_NdpRealtimeUpdaterItem> = new NdpDoubleLinkedList();
  private _detachList: _NdpRealtimeUpdaterItem[] = [];
  private _previousLoopTime: number;
  private _refreshIntervalMs: number = REFRESH_INTERVAL_MS;
  private _currentTimeout: number;

  constructor() {
    this._createFreeNodes();
  }

  // ------------------------------------------------ Public ------------------------------------------------
  public createAutoResetNumber(value:number,resetSpeed:number,resetDelay:number = 0): NdpAutoResetNumber {
    let result: NdpAutoResetNumber = new _NdpAutoResetNumber(data => this._attach(data),ref => this._detach(ref));
    result.value = value;
    result.resetDelay = resetDelay;
    result.resetSpeed = resetSpeed;
    return result;
  }

  // -------------------------------------------------- Prives ----------------------------------------------
  private _createFreeNodes(): void {
    for(let i=0; i < this._itemsGrowingSize; i++){
      let item: _NdpRealtimeUpdaterItem = {};
      item.node = this._freeItemsList.append(item);
    }
  }

  private _attach(data: _NdpRealtimeUpdateData): any {
    if (this._freeItemsList.isEmpty()) {
      this._createFreeNodes();
    }
    let item: _NdpRealtimeUpdaterItem = this._freeItemsList.removeHead();
    item.updateData = data;
    this._currentItemsList.appendNode(item.node);
    if (!this._currentTimeout) {
      this._startMainLoop();
    }
    return item;
  }

  private _detach(reference: _NdpRealtimeUpdaterItem): void {
    this._detachList.push(reference);
  }

  private _processAllDetach(): void {
    for (let toDetach of this._detachList) {
      this._currentItemsList.removeNode(toDetach.node);
      toDetach.updateData = null;
      this._freeItemsList.appendNode(toDetach.node);
    }
  }

  private _startMainLoop(): void {
    this._previousLoopTime = Date.now();
    this._currentTimeout = window.setTimeout(() => this._processMainLoop(), this._refreshIntervalMs);
  }

  private _processMainLoop(): void {
    let loopTime: number = Date.now();
    let elapsed: number = loopTime - this._previousLoopTime;
    for (let item of this._currentItemsList) {
      item.updateData.updateValue(elapsed);
    }
    this._processAllDetach();
    this._currentTimeout = null;
    this._previousLoopTime = loopTime;
    if (!this._currentItemsList.isEmpty()){
      this._currentTimeout = window.setTimeout(() => this._processMainLoop(), this._refreshIntervalMs);
    }
  }
}

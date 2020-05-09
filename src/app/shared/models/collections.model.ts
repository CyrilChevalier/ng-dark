export interface NdpDLLNode<T> {
  item?: T;
  previous?: NdpDLLNode<T>;
  next?: NdpDLLNode<T>;
  list?: NdpDoubleLinkedList<T>;
}

export class NdpDoubleLinkedList<T> {

  private _root: NdpDLLNode<T> = {
    list: this
  };
  private _size: number;

  constructor() {
    this._root.previous = this._root;
    this._root.next = this._root;
    this._size = 0;
  }

  public isEmpty(): boolean {
    return this._root.next === this._root;
  }

  public appendNode(node: NdpDLLNode<T>): NdpDoubleLinkedList<T> {
    if (node == null) {
      return this;
    }
    node.list = this;
    node.next = this._root;
    node.previous = this._root.previous;
    if (this.isEmpty()) {
      this._root.next = node;
      this._root.previous = node;
    }
    else {
      this._root.previous.next = node;
      this._root.previous = node;
    }
    this._size++;
    return this;
  }

  public insertNode(node: NdpDLLNode<T>): NdpDoubleLinkedList<T> {
    if (node == null) {
      return this;
    }
    node.list = this;
    node.previous = this._root;
    node.next = this._root.next;
    if (this.isEmpty()) {
      this._root.next = node;
      this._root.previous = node;
    }
    else {
      this._root.next.previous = node;
      this._root.next = node;
    }
    this._size++;
    return this;
  }

  public removeNode(node:NdpDLLNode<T>): NdpDoubleLinkedList<T> {
    if (!node || node.list !== this || !node.next || !node.previous) {
      return this;
    }
    node.previous.next = node.next;
    node.next.previous = node.previous;
    this._size--;
  }

  public removeHeadNode(): NdpDLLNode<T> {
    if (this.isEmpty()) {
      return null;
    }
    let node: NdpDLLNode<T> = this._root.next;
    this.removeNode(node);
    return node;
  }

  public removeTailNode(): NdpDLLNode<T> {
    if (this.isEmpty()) {
      return null;
    }
    let node: NdpDLLNode<T> = this._root.previous;
    this.removeNode(node);
    return node;
  }

  public removeHead(): T {
    return this.isEmpty() ? null: this.removeHeadNode().item;
  }

  public removeTail(): T {
    return this.isEmpty() ? null : this.removeTailNode().item;
  }

  public append(item: T): NdpDLLNode<T> {
    let node:NdpDLLNode<T> = {
      item: item
    };
    this.appendNode(node);
    return node;
  }

  public insert(item: T): NdpDLLNode<T> {
    let node:NdpDLLNode<T> = {
      item: item
    };
    this.insertNode(node);
    return node;

  }

  public *[Symbol.iterator]() {

    let node = this._root.next;
    while (node !== this._root) {
      yield node.item;
      node = node.next;
    }
  }

  public get size(): number {
    return this._size;
  }

}

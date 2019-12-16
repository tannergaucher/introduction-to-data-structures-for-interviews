class Queue {
  constructor() {
    this._storage = {};
    this._length = 0;
    this._headIndex = 0;
  }

  // Enqueues a new value at the end of the queue.
  enqueue(value) {
    const lastIndex = this._length + this._headIndex;
    this._storage[lastIndex] = value;
    this._length++;
  }

  // Dequeues the value from the beginning of the queue and returns it.
  dequeue() {
    if (this._length) {
      const firstValue = this._storage[this._headIndex];
      delete this._storage[this._headIndex];
      this._length--;
      this._headIndex++;

      return firstValue;
    }
  }

  // Returns the value from the beginning of the queue without deleting it.
  peek() {
    return this._storage[this._headIndex];
  }
}

const myQueue = new Queue();

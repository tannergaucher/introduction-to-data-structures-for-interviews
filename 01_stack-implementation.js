/* 
Implement a class representing a stack
*/

class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
  }

  push(value) {
    this._storage[this._length] = value;
    this.length++;
  }

  pop() {
    if (this.length) {
      const lastValue = this._storage[this._length - 1];
      delete this._storage[lastValue];
      this._length--;

      return lastValue;
    }
  }

  peek() {
    if (this._length) {
      return this._storage[this._length - 1];
    }
  }
}

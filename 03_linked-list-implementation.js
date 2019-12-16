class LinkedList {
  constructor() {
    this._storage = {};
    this._length = 0;
  }

  //   Inserts a new value at the end of the linked list. Constant  time.
  insert() {
    // insert value at [storage.length]: value
    // how to link it to previous value
    this._storage[this.length] = value;
  }

  //   Deletes a node. Constant time.
  remove(value) {
    delete this._storage[value];
  }

  // Is  a  linear time operation, bc need to loop through all the nodes.
  contains(searchValue) {
    const found = false;

    for (let value in this._storage) {
      if (this._storage[value] === searchValue) {
        found = true;
      }
    }

    return found;
  }
}

const myLinkedList = new LinkedList();

console.log(myLinkedList);

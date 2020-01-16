class LinkedList {
  constructor(value) {
    this.head = { value, next: null }
    this.tail = this.head
  }

  // Inserts a new value to the end of the linked list.
  insert(value) {
    const node = { value, next: null }
    // Set the next value of the current tail to our new node
    this.tail.next = node
    // Update the tail to be the real tail, which is the new node.
    this.tail = node
  }

  // Deletes a node, given a reference to a node.
  remove() {}

  // Removes the value at the end of the linked list.
  removeTail() {
    // Loop through and get to the node right before the tail.
    // THIS IS HOW TO TRAVERSE A LINKED LIST.
    let currentNode = this.head
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next
    }

    currentNode.next = null
    this.tail = currentNode
  }

  isHead(node) {
    return node === this.head
  }

  isTail(node) {
    return node === this.tail
  }

  // Searches linked list and returns true of it contains the value passed.

  contains(value) {
    let currentNode = this.head
    while (currentNode.value !== value) {
      currentNode = currentNode.next
    }

    return currentNode.value === value
  }
}

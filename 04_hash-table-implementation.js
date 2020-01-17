class HashTable {
  constructor(val) {
    this._storage = []
    this._tableSize = val
  }

  // Inserts a new key-value pair in constant time.
  insert(key, value) {
    const index = this._hash(key, this._tableSize)

    // Handle collisions.
    if (!this._storage[index]) {
      this._storage[index] = []
    }
    this._storage[index].push([key, value])
  }

  // Deletes a key-value pair in constant time.
  remove(key) {
    const index = this._hash(key, this._tableSize)
    let arrayAtIndex = this._storage[index]

    if (arrayAtIndex) {
      for (let i = 0; i < arrayAtIndex.length; i++) {
        const keyValueArray = arrayAtIndex[i]

        if (keyValueArray[0] === key) {
          arrayAtIndex = arrayAtIndex.splice(i, 1)
        }
      }
    }
  }

  // Returns a value associated with a key in constant time.
  retrieve(key) {
    const index = this._hash(key, this._tableSize)
    const arrayAtIndex = this._storage[index]

    if (arrayAtIndex) {
      for (let i = 0; i < arrayAtIndex.length; i++) {
        const keyValueArray = arrayAtIndex[i]

        if (keyValueArray[0] === key) {
          return keyValueArray[1]
        }
      }
    }
  }

  // Hashes a string value into an integer that can be mapped to an array index.
  _hash(str, n) {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i)
    }
    return sum % n
  }
}

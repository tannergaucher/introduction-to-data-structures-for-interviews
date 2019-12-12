# Introduction to Data Structures for Interviews: Course Notes

Why care about data structures?

Common data structures:

- Arrays and strings
- Hash Tables
- Linked Lists
- Stacks / queues
- Trees / heaps
- Graphs

**Application versus implementation.** Be able to implement them, but more importantly, be able to apply the correct ones to problems / interview questions.

**How To Prepare Effectively**

- Don't just memorize
- Find themes but don't jump to conclusions
- Practice with a timer. Being able to solve things quickly matters
- Actually practice. Reading doesn't count
- Communicate and be nice

## Stacks & Queues

Ordered data structures that have opinions about how things can be inserted and removed.

**Stack:** Last in, first out. Push and pop methods.

**Queue** First in, first out. Enqueue and dequeue methods.

Pros: Fast operations

Common Examples: Linked lists, hash table, array / string.

Example interview question: Implement a browser's back button using a stack.

### Linked List

Organizes items sequentially, with each item storing a pointer to the next.

(JS has dynamic arrays, more important in languages that don't have dynamic arrays.)

Each item has a property next that points to another object.

When we assign values to an object, we are really just pointing to that object. That object doesn't live inside that variable, the variable is just a pointer to the object in memory. If you assign another variable to that object, now have 2 variables pointing to the same object. But there's only one object. That's what we mean by reference. Pointers points to nodes (objects).

Linked lists are often the underlaying data structure for a stack or a queue.

```js
const linkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null
      }
    }
  }
};
```

This example has no reference to previous. If it did, it would be a **doubly linked list.**

Common Use Case: Least recently used cache. Keep track of new searches. As we get new input, have to take things out. Least recenty used cache removes oldest one.

Hash tables often use linked lists under the hood.

## Hash Tables

Organizes data for quick lookup on a value for a given key.

Best for fast lookups + having keys that are flexible. (Array indexes are numerically constrained.)

Keys can be strings. With ES6, keys can be functions too if using set or map.

In JS, object, set, map are hash table data structures.

**Pros:**

- Fast Lookups
- Flexible Keys

**Cons:**

- Slow worst case lookups
- Unordered
- Single directional lookups

Concepts:

- Hashing function
- Collisions
- Resizing

**Hashing function:** Takes key, hashes it. For every input, always gives the same output.

For hash tables, we think about the average case, rather than worst, because chance of worst case happening is very slim.

When thinking about optimizing a problem that resuires a fast lookup, should always think hashtable.

Be able to choose appropriate data structure.

- Object?
- Map?
- Set?

## Arrays & Strings

Array organizeds items sequentially in memory.

Pros:

- Fast lookups
- Fast appends

Cons:

- Slow insert
- Slow deletes

(Because when inserting / deleting from the middle, must shift everything over)

> Exercise: Draw a hash table, array, string

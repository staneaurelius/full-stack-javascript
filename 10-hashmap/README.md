# HashMap

This project is part of **The Odin Project's** JavaScript course of the Full Stack JavaScript path. This project contains 3 JavaScript files (`hashMap.mjs`, `linkedList.mjs` and `hashNode.mjs`), which contains factory functions for creating [HashMap](https://en.wikipedia.org/wiki/Hash_table) object.

## LinkedList Factory Function

The `LinkedList` factory function can be used to create [Linked List](https://en.wikipedia.org/wiki/Linked_list#:~:text=In%20computer%20science%2C%20a%20linked,which%20together%20represent%20a%20sequence.) object for avoiding collisions in the HashMap. This factory function is similar to the one mentioned in my another (Linked List Project)[https://github.com/staneaurelius/full-stack-javascript/tree/main/09-linked-lists], with some slight modifications to accomodate `key` attribute in its Nodes.

The `LinkedList` object has the following built-in functions:

1. `append(value)`: adds a new node containing *value* to the end of the list.
2. `size`: returns the total number of nodes in the list.
3. `at(index)`: returns the node at the given *index*.
4. `contains(value)`: returns true if the passed in *value* is in the list and otherwise returns false.
5. `find(value)`: returns the index of the node containing *value*, or null if not found.
6. `toString`: represents the LinkedList objects as strings with the format of `( value ) -> ( value ) -> ( value ) -> null`.
7. `removeNode(index)`: removes the node at the given *index*.
8. `getKeys()`: returns every node's key present in the linked list.
9. `getValues()`: returns every node's value present in the linked list.
10. `getKeyValuePairs()`: returns every node's key value pair present in the linked list.


## HashMap Factory Function

The `HashMap` factory function has the following built-in functions:

1. `set(key, value)`: takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is updated by the new value.
2. `get(key)`: takes a key and returns the value that is assigned to this key. If a key is not found, return `null`.
3. `has(key)`: takes a key and returns `true` or `false` based on whether or not the key is in the hash map.
4. `remove(key)`: takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return `true`. If the key isn’t in the hash map, it should return `false`.
5. `length()`: returns the number of stored keys in the hash map.
6. `clear()`: removes all entries in the hash map.
7. `keys()`: returns an array containing all the keys inside the hash map.
8. `values()`: returns an array containing all the values.
9. `entries()`: returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]

> Check out `main.mjs` to see how to use the HashMap object!
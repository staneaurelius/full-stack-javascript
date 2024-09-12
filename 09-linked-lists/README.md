# Linked Lists

This project is part of **The Odin Project's** JavaScript course of the Full Stack JavaScript path. This project contains 2 JavaScript files (`linkedList.mjs` and `node.mjs`), which contains factory functions for creating [Linked List](https://en.wikipedia.org/wiki/Linked_list#:~:text=In%20computer%20science%2C%20a%20linked,which%20together%20represent%20a%20sequence.) object with the following built-in functions:

1. `append(value)`: adds a new node containing *value* to the end of the list
2. `prepend(value)`: adds a new node containing *value* to the start of the list
3. `size`: returns the total number of nodes in the list
4. `head`: returns the first node in the list
5. `tail`: returns the last node in the list
6. `at(index)`: returns the node at the given *index*
7. `pop`: removes the last element from the list
8. `contains(value)`: returns true if the passed in *value* is in the list and otherwise returns false.
9. `find(value)`: returns the index of the node containing *value*, or null if not found.
10. `toString`: represents the LinkedList objects as strings with the format of `( value ) -> ( value ) -> ( value ) -> null`
11. `insertAt(value, index)`: inserts a new node with the provided *value* at the given *index*.
12. `removeAt(index)`: removes the node at the given *index*.

> Check out `main.mjs` to see how to use the LinkedList object!
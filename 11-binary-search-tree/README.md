# Binary Search Tree

This project is part of **The Odin Project's** JavaScript course of the Full Stack JavaScript path. This project contains 3 JavaScript files (`mergeSort.mjs`, `node.mjs` and `binaryTree.mjs`), which contains factory functions for creating [Binary Search Tree](https://en.wikipedia.org/wiki/Binary_search_tree) object.

## Merge Sort Function

The `mergeSort` function can be used to sort an array of numbers using the [Merge Sort](https://en.wikipedia.org/wiki/Merge_sort) algorithm. The sorting process will be conducted before the binary tree building process.

## Binary Tree Factory Function

The `Tree` factory function can be used to create a *Binary Search Tree* object. The object has the following built-in functions:

1. `buildTree(array)`: takes an array of data (*defaults to the array passed as argument that was passed when creating the `Tree` constructor*) and turns it into a balanced binary tree full of `Node` objects appropriately placed, return the level-0 root node
2. `insert(value)`: insert a node containing the given value
3. `deleteItem(value)`: delete the node containing the given value
4. `find(value)`: returns the node containing the given value
5. `levelOrder(callback)`: traverse the tree in [breadth-first level order](https://en.wikipedia.org/wiki/Breadth-first_search) and call the callback on each node as it traverses, passing the whole node as an argument
6. `inOrder(callback)`: traverse the tree in [depth-first in-order](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/#inorder-traversal) and call the callback on each node as it traverses, passing the whole node as an argument
7. `preOrder(callback)`: traverse the tree in [depth-first pre-order](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/#preorder-traversal) and call the callback on each node as it traverses, passing the whole node as an argument
8. `postOrder(callback)`: traverse the tree in [depth-first post-order](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/#postorder-traversal) and call the callback on each node as it traverses, passing the whole node as an argument
9. `height(node)`: returns the given node’s height (the number of edges in the longest path from a given node to a leaf node)
10. `depth(node)`: returns the given node’s depth (the number of edges in the path from a given node to the tree’s root node)
11. `isBalanced`: checks if the tree is balanced (the difference between heights of the left subtree and the right subtree of every node is not more than 1)
12. `rebalance`: rebalances an unbalanced tree

> Check out `main.mjs` to see how to use the Tree object!
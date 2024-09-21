# Knight Travails

This project is part of **The Odin Project's** JavaScript course of the Full Stack JavaScript path. This project contains a JavaScript file `knight.mjs`, which contains a factory function for creating an [Adjacency List](https://en.wikipedia.org/wiki/Adjacency_list) of unique [Chess Knight Movement](https://en.wikipedia.org/wiki/Knight_(chess)).

## Chess Board Mapping

Note that the square used in the `Knight` factory function follows the following coordinate. For the sake of simplicity, however, the adjacency list transforms every squares' coordinate into a number.

The bottom-left square is assigned number 0, with an increment of 1 moving to the adjacent right square, up until it reaches square 63 on the top-right corner of the board.

![](static/chess-board.png)

## Traversal Algorithm

The algorithm used to create the `knightMoves(origin, destination)` function for determining the minimum path required to travel from a square to another is a modified BFS function with the following pseudocode:

1. Initiate a parent array containing 64 elements (corresponds to the number of available squares), this array will contain the previous square that was visited before reaching a particular square
2. Set `array[origin]` value to *origin*, let the rest of the elements be *null*
3. Initiate a queue containing the *origin* square
4. Queue iteration, for each square in the queue:
    - Get the next squares knight can travel to and iterate over this array of next squares:
        - if the next square does not has a parent yet (in the parrent array), add to queue and change its parent to the current square
    - If the destination array already contains a parent, break the iteration
5. Backtrack the origin from the destination, using the parrent array filled from iteration in steps (4)

The `knightMove(origin, destination)` function returns an object with the following properties:
- `move`: the number of minimum move to travel from origin to destination
- `path`: array containing optimum path from origin to destination

> Check out `main.mjs` to see how to use the knightMoves function!
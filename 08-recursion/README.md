# Recursion

This project is part of **The Odin Project's** JavaScript course of the Full Stack JavaScript path. This project contains 2 JavaScript scripts which recursively:
- generates [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_sequence)
- perform [Merge Sort](https://en.wikipedia.org/wiki/Merge_sort) to an array

## Fibonacci Sequence

The functions in `fibonacci.js` takes a number via command-line argument and returns an array containing that many numbers from the Fibonacci sequence. As an example, an input of `8` will return the array `[0, 1, 1, 2, 3, 5, 8, 13]`.

> To run the script, execute the command `node path-to-fibonacci.js num-input` from the terminal; e.g. `node ~/Downloads/fibonacci.js 8`

## Merge Sort

The function in `mergeSort.js` takes a number array via command-line argument as an input and returns a sorted array. As a few examples:

- an input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13]
- an input of [105, 79, 100, 110] should return [79, 100, 105, 110]

> To run the script, execute the command `node path-to-mergeSort.js numbers` from the terminal, with each of the number separated by a whitespace. E.g. `node ~/Downloads/mergeSort.js 105 79 100 110`
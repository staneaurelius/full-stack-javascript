/*
This script contains 2 functions which takes a number and returns an array containing that many numbers from the Fibonacci sequence:
    - fibs function generates Fibonacci sequence using iterator
    - fibsRec function generates Fibonacci sequence recursively
*/

function fibs (number) {
    const fibonacciSequence = [0, 1];

    if (number <= 2) {
        return fibonacciSequence.slice(0, number);
    };

    for (let i = 2; i < number; i++) {
        const nextNumber = fibonacciSequence[i-1] + fibonacciSequence[i-2];
        fibonacciSequence.push(nextNumber);
    };

    return fibonacciSequence;
};

function fibsRec (number) {
    const initialSequence = [0, 1];

    if (number <= 2) {
        return initialSequence.slice(0, number);
    };

    const fibonacciSequence = fibsRec(number - 1),
        nextNumber = fibonacciSequence[number - 2] + fibonacciSequence[number - 3];

    fibonacciSequence.push(nextNumber);
    return fibonacciSequence;
};

const numArg = parseInt(process.argv[2]);
console.log(`
    --- This sequence is generated using iterator ---
    [ ${fibs(numArg)} ]

    --- This sequence is generated recursively ---
    [ ${fibsRec(numArg)} ]
`);
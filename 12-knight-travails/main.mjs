import { Knight } from './knight.mjs';

const knight = Knight();

// Test 1: knightMoves([0, 0], [3, 3]) should produce 2 moves
const firstTest = knight.knightMoves([0, 0], [3, 3]);

console.log(`
First test : moving from [0, 0] to [3, 3] should produce 2 moves
Knight can make it in ${firstTest.move} moves!
`);

for (let i = 0; i < firstTest.path.length; i++) {
    console.log(firstTest.path[i]);
};

// Test 2: knightMoves([0, 0], [7, 7]) should produce 6 moves
const secondTest = knight.knightMoves([0, 0], [7, 7]);

console.log(`
Second test : moving from [0, 0] to [7, 7] should produce 6 moves
Knight can make it in ${secondTest.move} moves!
`);

for (let i = 0; i < secondTest.path.length; i++) {
    console.log(secondTest.path[i]);
};

// Test 3: knightMoves([3, 3], [4, 3]) should produce 3 moves
const thirdTest = knight.knightMoves([3, 3], [4, 3]);

console.log(`
Second test : moving from [3, 3] to [4, 3] should produce 3 moves
Knight can make it in ${thirdTest.move} moves!
`);

for (let i = 0; i < thirdTest.path.length; i++) {
    console.log(thirdTest.path[i]);
};
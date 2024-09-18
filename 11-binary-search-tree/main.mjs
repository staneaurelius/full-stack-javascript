import { Tree } from "./binaryTree.mjs";

const myArray = [18, 91, 47, 57, 14, 45, 78],
    binaryTree = Tree(myArray);
binaryTree.buildTree();

// Initial print
console.log('\n--- Tree Initialization ---\n');
binaryTree.print();
console.log(`Is tree balanced: ${binaryTree.isBalanced()}`);

// Node insertion and deletion
console.log('\n--- Inserting and Deleting Nodes ----\n');
[30, 25, 20, 40, 80, 92, 95].forEach(num => {
    binaryTree.insert(num);
});
[45, 78].forEach(num => {
    binaryTree.deleteItem(num);
});
binaryTree.print();
console.log(`is tree balanced: ${binaryTree.isBalanced()}`);

// Rebalancing
console.log('\n--- Tree Rebalancing ----\n');
binaryTree.rebalance();
binaryTree.print();
console.log(`is tree balanced: ${binaryTree.isBalanced()}`);

// Travelsals
console.log('\n--- Level Order Travelsal (BFS) ----\n');
console.log(binaryTree.levelOrder(num => num));

console.log('\n--- In Order Travelsal (BFS) ----\n');
console.log(binaryTree.inOrder(num => num));

console.log('\n--- Pre Order Travelsal (BFS) ----\n');
console.log(binaryTree.preOrder(num => num));

console.log('\n--- Post Order Travelsal (BFS) ----\n');
console.log(binaryTree.postOrder(num => num));
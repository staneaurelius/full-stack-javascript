import { Node } from "./node.mjs";
import { mergeSort } from "./mergeSort.mjs";

const Tree = function (array) {
    let root;

    const sortedArray = mergeSort(array),
        uniqueArray = sortedArray.filter(
            (number, index) => sortedArray.indexOf(number) === index
        );

    const buildTree = function (array = uniqueArray) {
        const middleIndex = Math.floor(array.length / 2);
        
        if (array.length === 0) {
            return null;
        } else if (array.length === 1) {
            return Node(array[0]);
        };
        
        const treeRoot = Node(array[middleIndex]);
        treeRoot.left = buildTree(array.slice(0, middleIndex));
        treeRoot.right = buildTree(array.slice(middleIndex + 1));

        root = treeRoot;
        return treeRoot;
    };

    const insert = function (value, root = this.root) {
        if (root === null) {
            return Node(value);
        } else if (root.data <= value) {
            root.right = insert(value, root.right);
        } else {
            root.left = insert(value, root.left);
        };

        return root;
    };

    const deleteItem = function (value, root = this.root) {
        if (root.data < value) {
            root.right = deleteItem(value, root.right);
        } else if (root.data > value) {
            root.left = deleteItem(value, root.left);
        } else {
            if (root.left === null && root.right === null) {
                // Leaf node -> simple deletion
                return null;
            } else if (root.left === null) {
                // Node with a child -> swap with child and delete node
                return root.right;
            } else if (root.right === null) {
                // Node with a child -> swap with child and delete node
                return root.left;
            } else {
                // Node with 2 children -> Swap with leftmost children of right subtree and delete
                let currentNode = root.right;
                while (currentNode.left != null) {
                    currentNode = currentNode.left;
                };

                root.data = currentNode.data;
                root.right = deleteItem(currentNode.data, root.right);
                return root;
            };
        };
        
        return root;
    };

    const find = function (value, root = this.root) {
        if (root.data === value) {
            return root;
        };

        return root.data < value
            ? find(value, root.right)
            : find(value, root.left);
    };

    const levelOrder = function (callback) {
        if (typeof callback != 'function') {
            throw new Error('Callback function is required!');
        };

        const queue = [root],
            result = new Array();
        
        while (queue.length > 0) {
            const currentNode = queue.shift();
            result.push(callback(currentNode.data));

            if (currentNode.left != null) {
                queue.push(currentNode.left);
            };
            
            if (currentNode.right != null) {
                queue.push(currentNode.right);
            };
        };

        return result
    };

    const inOrder = function (callback, root = this.root) {
        if (typeof callback != 'function') {
            throw new Error('Callback function is required!');
        };

        const result = [];
        if (root === null) {
            return [];
        };

        result.push(...inOrder(callback, root.left));
        result.push(callback(root.data));
        result.push(...inOrder(callback, root.right));

        return result;
    };

    const preOrder = function (callback, root = this.root) {
        if (typeof callback != 'function') {
            throw new Error('Callback function is required!');
        };

        const result = [];
        if (root === null) {
            return [];
        };

        result.push(callback(root.data));
        result.push(...preOrder(callback, root.left));
        result.push(...preOrder(callback, root.right));

        return result;
    };

    const postOrder = function (callback, root = this.root) {
        if (typeof callback != 'function') {
            throw new Error('Callback function is required!');
        };

        const result = [];
        if (root === null) {
            return [];
        };

        result.push(...postOrder(callback, root.left));
        result.push(...postOrder(callback, root.right));
        result.push(callback(root.data));

        return result;
    };

    const height = function (node = this.root) {
        const subtreeHeights = new Array();

        if (node.left === null && node.right === null) {
            return 0;
        };

        if (node.left != null) {
            subtreeHeights.push(height(node.left) + 1);
        };
        
        if (node.right != null) {
            subtreeHeights.push(height(node.right) + 1);
        };

        return Math.max(...subtreeHeights);
    };

    const depth = function (node, root = this.root) {
        const nodeDepth = 0;

        if (node.data === root.data) {
            return 0
        };

        return root.data <= node.data
            ? depth(node, root.right) + 1
            : depth(node, root.left) + 1;
    };

    const isBalanced = function (root = this.root) {
        let isTreeBalanced = true;
        const leftHeight = root.left != null
            ? height(root.left)
            : 0,

            rightHeight = root.right != null
            ? height(root.right)
            : 0;

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        };

        if (root.left != null) {
            isTreeBalanced = isTreeBalanced && isBalanced(root.left);
        };

        if (root.right != null) {
            isTreeBalanced = isTreeBalanced && isBalanced(root.right);
        };

        return isTreeBalanced;
    };

    const rebalance = function () {
        if (!isBalanced(root)) {
            const treeArray = inOrder(num => num, root);
            root = buildTree(treeArray);
        };
        return root;
    };

    const print = function (node = this.root, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        };
        if (node.right !== null) {
            print(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        };
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            print(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        };
    };

    return {
        get root () { return root },
        buildTree,
        insert,
        deleteItem,
        find,
        levelOrder,
        inOrder,
        preOrder,
        postOrder,
        height,
        depth,
        isBalanced,
        rebalance,
        print
    };
};

export { Tree };
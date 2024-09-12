import { Node } from './node.mjs';

const LinkedList = function () {
    let listHead = null;

    const append = function (value) {
        const newNode = Node(value);
        if (listHead) {
            let tempNode = listHead;

            while (tempNode.nextNode) {
                tempNode = tempNode.nextNode;
            };
            
            tempNode.nextNode = newNode;
        } else {
            listHead = newNode;
        };
    };

    const prepend = function (value) {
        const newNode = Node(value);
        if (listHead) {
            newNode.nextNode = listHead;
            listHead = newNode;
        } else {
            listHead = newNode;
        };
    };

    const size = function () {
        let nodeCounter = 0;
        
        if (listHead) {
            nodeCounter += 1;

            let tempNode = listHead;
            while (tempNode.nextNode) {
                nodeCounter += 1;
                tempNode = tempNode.nextNode;
            };
        };

        return nodeCounter;
    };

    const head = function () { return listHead };

    const tail = function () {
        let lastNode = listHead;

        if (lastNode) {
            while (lastNode.nextNode) {
                lastNode = lastNode.nextNode;
            };
        };

        return lastNode;
    };

    const at = function (index) {
        if (index > size() - 1) {
            return 'Index element out of bound!';
        };

        let indexCounter = 0,
            currentNode = listHead;

        while (indexCounter != index) {
            currentNode = currentNode.nextNode;
            indexCounter += 1;
        };

        return currentNode;
    };

    const pop = function () {
        let currentNode = listHead;

        if (currentNode === tail()) {
            listHead = null;
        } else {
            while (currentNode.nextNode != tail()) {
                currentNode = currentNode.nextNode;
            };

            currentNode.nextNode = null;
        };
    };

    const contains = function (value) {
        if (listHead) {
            let currentNode = listHead;
            while (currentNode) {
                if (currentNode.value === value) {
                    return true;
                };
                currentNode = currentNode.nextNode;
            };
        };

        return false;
    };

    const find = function (value) {
        if (listHead) {
            let currentNode = listHead,
                indexCounter = 0;

            while (currentNode) {
                if (currentNode.value === value) {
                    return indexCounter;
                };

                currentNode = currentNode.nextNode;
                indexCounter += 1;
            };
        };

        return null;
    };

    const toString = function () {
        let currentNode = listHead,
            listString = 'null';

        if (currentNode) {
            listString = `( ${currentNode.value} )`;

            while (currentNode != tail()) {
                currentNode = currentNode.nextNode;
                listString = listString + ` -> ( ${currentNode.value} )`;
            };

            listString = listString + ' -> null';
        };

        return listString;
    };

    const insertAt = function (value, index) {
        if (index > size()) {
            return 'Index out of bound!';
        } else if (index === 0) {
            prepend(value);            
            return;
        } else if (index === size()) {
            append(value);
            return;
        };

        let currentNode = listHead,
            currentIndex = 0;
        
        while (currentIndex != index - 1) {
            currentNode = currentNode.nextNode;
            currentIndex += 1;
        };

        currentNode.nextNode = Node(value, currentNode.nextNode);
    };

    const removeNode = function (index) {
        if (index >= size()) {
            return 'Index out of bound!';
        } else if (index === 0) {
            listHead = listHead.nextNode;
            return;
        };

        let currentNode = listHead,
            currentIndex = 0;
        
        while (currentIndex != index - 1) {
            currentNode = currentNode.nextNode;
            currentIndex += 1;
        };

        currentNode.nextNode = currentNode.nextNode.nextNode;
    };

    return { append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeNode };
};

export { LinkedList };
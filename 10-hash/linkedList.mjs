import { Node } from './hashNode.mjs';

const LinkedList = function () {
    let listHead = null;

    const append = function (key, value) {
        const newNode = Node(key, value);
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

    const at = function (index) {
        if (index > size() - 1) {
            throw new Error('Index element out of bound!');
        };

        let indexCounter = 0,
            currentNode = listHead;

        while (indexCounter != index) {
            currentNode = currentNode.nextNode;
            indexCounter += 1;
        };

        return currentNode;
    };

    const contains = function (key) {
        if (listHead) {
            let currentNode = listHead;
            while (currentNode) {
                if (currentNode.key === key) {
                    return true;
                };
                currentNode = currentNode.nextNode;
            };
        };

        return false;
    };

    const find = function (key) {
        if (listHead) {
            let currentNode = listHead,
                indexCounter = 0;

            while (currentNode) {
                if (currentNode.key === key) {
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
            listString = `( ${currentNode.key}, ${currentNode.value} )`;

            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
                listString = listString + ` -> ( ${currentNode.key}, ${currentNode.value} )`;
            };

            listString = listString + ' -> null';
        };

        return listString;
    };

    const removeNode = function (index) {
        if (index >= size()) {
            throw new Error('Index out of bound!');
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

    const getKeys = function () {
        const keyArray = new Array();

        if (listHead) {
            let currentNode = listHead;
            keyArray.push(currentNode.key);

            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
                keyArray.push(currentNode.key);
            };
        };

        return keyArray;
    };

    const getValues = function () {
        const valueArray = new Array();

        if (listHead) {
            let currentNode = listHead;
            valueArray.push(currentNode.value);

            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
                valueArray.push(currentNode.value);
            };
        };

        return valueArray;
    };

    const getKeyValuePairs = function () {
        const keyValueArray = new Array();

        if (listHead) {
            let currentNode = listHead;
            keyValueArray.push([currentNode.key, currentNode.value]);

            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
                keyValueArray.push([currentNode.key, currentNode.value]);
            };
        };

        return keyValueArray;
    };

    return { append, size, at, contains, find, toString, removeNode, getKeys, getValues, getKeyValuePairs };
};

export { LinkedList };
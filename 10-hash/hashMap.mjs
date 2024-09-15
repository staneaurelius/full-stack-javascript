import { LinkedList } from "./linkedList.mjs";

const HashMap = function (size, loadFactor) {
    const buckets = new Array(size).fill(null);

    const hash = function (key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = hashCode * primeNumber + key.charCodeAt(i);
            hashCode = hashCode % buckets.length;
        };

        return hashCode;
    };

    const rehash = function () {
        const hashEntries = entries(),
            bucketExtension = new Array(buckets.length).fill(null);
        
        clear();
        buckets.push(...bucketExtension);
        
        for (let i = 0; i < hashEntries.length; i++) {
            set(hashEntries[i][0], hashEntries[i][1]);
        };
    };

    const set = function (key, value) {
        const keyHash = hash(key),
            nodeLimit = buckets.length * loadFactor;

        if (buckets[keyHash]) {
            const nodeIndex = buckets[keyHash].find(key);

            if (nodeIndex != null) {
                buckets[keyHash].at(nodeIndex).value = value;
            } else {
                buckets[keyHash].append(key, value);
            };

        } else {
            buckets[keyHash] = LinkedList();
            buckets[keyHash].append(key, value);
        };

        if (length() > nodeLimit) {
            rehash();
        };
    };

    const get = function (key) {
        const keyHash = hash(key);

        if (buckets[keyHash]) {
            const nodeIndex = buckets[keyHash].find(key);

            if (nodeIndex != null) {
                return buckets[keyHash].at(nodeIndex).value;
            };
        };

        return null;
    };

    const has = function (key) {
        const keyHash = hash(key);

        if (buckets[keyHash]) {
            return buckets[keyHash].contains(key);
        };

        return false
    };

    const remove = function (key) {
        if (has(key)) {
            const keyHash = hash(key),
                keyIndex = buckets[keyHash].find(key);
            
            buckets[keyHash].removeNode(keyIndex);
            return true;
        };

        return false;
    };

    const length = function () {
        let keyCounter = 0;
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i]) {
                keyCounter += buckets[i].size();
            };
        };

        return keyCounter;
    };

    const clear = function () {
        for (let i = 0; i < buckets.length; i++) {
            buckets[i] = null;
        };
    };

    const keys = function () {
        const hashMapKeys = new Array();
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i]) {
                const bucketKeys = buckets[i].getKeys();
                hashMapKeys.push(...bucketKeys);
            };
        };

        return hashMapKeys;
    };

    const values = function () {
        const hashMapValues = new Array();
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i]) {
                const bucketValues = buckets[i].getValues();
                hashMapValues.push(...bucketValues);
            };
        };

        return hashMapValues;
    };

    const entries = function () {
        const keyValuePairs = new Array();
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i]) {
                const bucketKeyValuePairs = buckets[i].getKeyValuePairs();
                keyValuePairs.push(...bucketKeyValuePairs);
            };
        };

        return keyValuePairs;
    };

    return { buckets, set, get, has, remove, length, clear, keys, values, entries };
};

export { HashMap };
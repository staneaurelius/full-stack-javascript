const mergeSort = function (array) {
    // Base case: array of length 1 is ready to be merged
    if (array.length <= 1) {
        return array;
    };

    // Split array and sort if length > 1
    let mergedArray = [];

    const splitIndex = Math.ceil(array.length / 2),
        leftArray = array.slice(0, splitIndex),
        rightArray = array.slice(splitIndex);
    
    const sortedLeftArray = mergeSort(leftArray),
        sortedRightArray = mergeSort(rightArray);

    // Compare 2 halves value starting from the minimum until a half is empty
    while (sortedLeftArray.length != 0 && sortedRightArray.length != 0) {
        if (sortedLeftArray[0] < sortedRightArray[0]) {
            mergedArray.push(sortedLeftArray[0]);
            sortedLeftArray.splice(0, 1);
        } else {
            mergedArray.push(sortedRightArray[0]);
            sortedRightArray.splice(0, 1);
        };
    };

    // Once a half is empty copy the entire non-empty array
    if (sortedRightArray.length === 0) {
        mergedArray = mergedArray.concat(sortedLeftArray);
    } else {
        mergedArray = mergedArray.concat(sortedRightArray)
    };

    return mergedArray;
};

export { mergeSort };
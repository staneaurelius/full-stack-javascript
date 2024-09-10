/*
The following function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology:
    - an input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13]
    - an input of [105, 79, 100, 110] should return [79, 100, 105, 110]
*/

function mergeSort (numberArray) {
    // Base case: array of length 1 is ready to be merged
    if (numberArray.length === 1) {
        return numberArray;
    };

    // Split array and sort if length > 1
    let mergedArray = [];

    const splitIndex = Math.ceil(numberArray.length / 2),
        leftArray = numberArray.slice(0, splitIndex),
        rightArray = numberArray.slice(splitIndex);
    
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

const arrayArg = process.argv
    .slice(2)
    .map(num => Number(num));

console.log(`
    Input array: [${arrayArg}]
    Recursively sorted array: [${mergeSort(arrayArg)}]
`);
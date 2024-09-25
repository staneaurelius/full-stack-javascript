const analyzeArray = function (array) {
    let length = array.length,
        sum = 0,
        min = array[0],
        max = array[0];
    
    if (length === 0) {
        throw new Error('Array is empty!');
    };

    for (let i = 0; i < array.length; i++) {
        if (isNaN(+array[i])) {
            throw new Error('Array contains non-number!');
        } else if (array[i] < min) {
            min = array[i];
        } else if (array[i] > max) {
            max = array[i];
        };

        sum += array[i];
    };

    return { average : sum / length, min, max, length };
};

module.exports = analyzeArray;
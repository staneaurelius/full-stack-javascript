const { describe, test, expect } = require('@jest/globals');
const analyzeArray = require('../analyzeArray');

describe('With the function analyzeArray', () => {
    test('[3, 1, 4, 4, 5] should return { average : 3.4, min : 1, max : 5, length : 5 }', () => {
        expect(analyzeArray([3, 1, 4, 4, 5])).toEqual({ average : 3.4, min : 1, max : 5, length : 5});
    });

    test('[-2, 1, 4, -5] should return { average : -0.5, min : -5, max : 4, length : 4 }', () => {
        expect(analyzeArray([-2, 1, 4, -5])).toEqual({ average : -0.5, min : -5, max : 4, length : 4});
    });

    test('[3, a, 4, b, 5] should throw Error', () => {
        expect(() => analyzeArray([3, 'a', 4, 'b', 5])).toThrow('Array contains non-number!');
    });
});
const { describe, test, expect } = require('@jest/globals');
const reverseString = require('../reverseString');

describe('With the reverseString function', () => {
    test('Sentence should return gnirtS', () => {
        expect(reverseString('Sentence')).toBe('ecnetneS');
    });

    test('"Multiple Word" should return "droW elpitluM"', () => {
        expect(reverseString('Multiple Word')).toBe('droW elpitluM');
    });

    test('Number123 should return 321rebmuN', () => {
        expect(reverseString('Number123')).toBe('321rebmuN');
    });

    test('"Special ch@ract3rs!" should return "!sr3tcar@hc laicepS"', () => {
        expect(reverseString('Special ch@ract3rs!')).toBe('!sr3tcar@hc laicepS');
    });

    test('Number inputs should throw Error "Please input a string"', () => {
        expect(() => reverseString(123456)).toThrow(Error);
    });

    test('Boolean inputs should throw Error "Please input a string"', () => {
        expect(() => reverseString(true)).toThrow('Please input a string!');
    });
});
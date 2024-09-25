const { describe, test, expect } = require('@jest/globals');
const capitalize = require('../capitalize.js');

describe('Using the capitalize function', () => {
    test('Test should become Test', () => {
        expect(capitalize('Test')).toBe('Test');
    });

    test('test should become Test', () => {
        expect(capitalize('test')).toBe('Test');
    });

    test('TEST should become TEST', () => {
        expect(capitalize('TEST')).toBe('TEST');
    });

    test('"multiple word test" should become "Multiple word test"', () => {
        expect(capitalize('multiple word test')).toBe('Multiple word test');
    });

    test('test123 should become Test123', () => {
        expect(capitalize('test123')).toBe('Test123');
    });

    test('123test should become 123test', () => {
        expect(capitalize('123test')).toBe('123test');
    });

    test('@test should become @test', () => {
        expect(capitalize('@test')).toBe('@test');
    });

    test('123 should return "Please input a string!"', () => {
        expect(() => capitalize(123)).toThrow(Error);
    });

    test('true (bool) should return "Please input a string!"', () => {
        expect(() => capitalize(true)).toThrow('Please input a string!');
    });
});
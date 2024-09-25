const { describe, test, expect } = require('@jest/globals');
const caesarCipher = require('../caesarCipher');

describe('With the caesarCipher function', () => {
    test('(abc, 3) should become def', () => {
        expect(caesarCipher('abc', 3)).toBe('def');
    });

    test('(abc, 79) should become bcd', () => {
        expect(caesarCipher('abc', 79)).toBe('bcd');
    });

    test('(HeLLo, 3) should become KhOOr', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('(Ch@r!, 5) should become Hm@w!', () => {
        expect(caesarCipher('Ch@r!', 5)).toBe('Hm@w!');
    });
});
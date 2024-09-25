const { describe, test, expect } = require('@jest/globals');
const calculator = require('../calculator');

describe('Using the calculator object', () => {
    describe('add() should return addition between 2 numbers', () => {
        test('add(3, 5) should return 8', () => {
            expect(calculator.add(3, 5)).toBe(8);
        });

        test('add(0, -5) should return -5', () => {
            expect(calculator.add(0, -5)).toBe(-5);
        });

        test('add(1.2, 4.8) should return 6.0', () => {
            expect(calculator.add(1.2, 4.5)).toBeCloseTo(5.7);
        });
    });

    describe('subtract() should return subtraction between 2 numbers', () => {
        test('subtract(9, 4) should return 5', () => {
            expect(calculator.subtract(9, 4)).toBe(5);
        });

        test('subtract(6, -9) should return 15', () => {
            expect(calculator.subtract(6, -9)).toBe(15);
        });

        test('subtract(-7, 15) should return -22', () => {
            expect(calculator.subtract(-7, 15)).toBe(-22);
        });

        test('subtract(-7, 15) should return -22', () => {
            expect(calculator.subtract(8.54, 6.23)).toBeCloseTo(2.31);
        });
    });

    describe('multiply() should return multiplication between 2 numbers', () => {
        test('multiply(13, 7) should return 91', () => {
            expect(calculator.multiply(13, 7)).toBe(91);
        });

        test('multiply(6, -9) should return -54', () => {
            expect(calculator.multiply(6, -9)).toBe(-54);
        });

        test('multiply(0, 112) should return 0', () => {
            expect(calculator.multiply(0, 112)).toBe(0);
        });

        test('multiply(-17.4, 3) should return -52.2', () => {
            expect(calculator.multiply(-17.4, 3)).toBeCloseTo(-52.2);
        });
    });

    describe('divide() should return division between 2 numbers', () => {
        test('divide(12, 4) should return 3', () => {
            expect(calculator.divide(12, 4)).toBe(3);
        });

        test('divide(-35, -7) should return 5', () => {
            expect(calculator.divide(-35, -7)).toBe(5);
        });

        test('divide(105, 0) should return Infinity', () => {
            expect(calculator.divide(105, 0)).toBe(Infinity);
        });

        test('divide(120, 25) should return 4.8', () => {
            expect(calculator.divide(120, 25)).toBeCloseTo(4.8);
        });
    });
});
const calculator = function () {
    const add = function (firstNum, secondNum) {
        return firstNum + secondNum;
    };

    const subtract = function (firstNum, secondNum) {
        return firstNum - secondNum;
    };

    const divide = function (firstNum, secondNum) {
        return firstNum / secondNum;
    };

    const multiply = function (firstNum, secondNum) {
        return firstNum * secondNum;
    };

    return { add, subtract, divide, multiply };
};

module.exports = calculator();
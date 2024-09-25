const capitalize = function (string) {
    if (typeof string !== 'string') {
        throw new Error('Please input a string!');
    };

    return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = capitalize;
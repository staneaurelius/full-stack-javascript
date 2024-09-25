const encryptIndex = function (index, shiftFactor) {
    const encryptionIndex = index + shiftFactor;
    if (encryptionIndex > 25) {
        return encryptionIndex - 26 * Math.floor(encryptionIndex / 26);
    };

    return encryptionIndex;
};

const caesarCipher = function (string, shiftFactor) {
    const characters = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'.split(' ');

    let encryptedString = '';
    for (let i = 0; i < string.length; i++) {
        let isLowerCase = string[i] === string[i].toLowerCase();
        const char = string[i].toLowerCase(),
            charIndex = characters.indexOf(char);

        if (charIndex >= 0) {
            const encryptionIndex = encryptIndex(charIndex, shiftFactor),
                encryptedChar = isLowerCase
                    ? characters[encryptionIndex]
                    : characters[encryptionIndex].toUpperCase();
            
            encryptedString += encryptedChar;
        } else {
            encryptedString += string[i];
        };
    };

    return encryptedString;
};

module.exports = caesarCipher;
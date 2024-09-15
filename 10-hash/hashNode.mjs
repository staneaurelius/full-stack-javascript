const Node = function (key, value, nextNode = null) {
    return { key, value, nextNode };
};

export { Node };
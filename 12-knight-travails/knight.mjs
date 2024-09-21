const Knight = function () {
    // Function for converting a coordinate into square number (see image in README)
    const mapCoordinate = function (x, y) {
        return 8 * y + x;
    };

    // Function for converting a square number into coordinate (see image in README)
    const getCoordinate = function (square) {
        return [square % 8, Math.floor(square / 8)];
    };

    /*
        Function for creating knight movement adjacency list
            Index 0: all possible movement from square 0
            Index 1: all possible movement from square 1
            etc
    */
    const generateKnightGraph = function () {
        const graph = new Array(),
            possibleMove = [
                [-1, -2], [1, -2], [-2, -1], [2, -1],
                [-2, 1], [2, 1], [-1, 2], [1, 2]
            ];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const edge = new Array();

                possibleMove.forEach(move => {
                    const destinationCoordinate = [j, i].map((num, index) => {
                        return num + move[index];
                    });

                    if (destinationCoordinate.every(num => num >= 0 && num <= 7)) {
                        const destination = mapCoordinate(...destinationCoordinate);
                        edge.push(destination);
                    };
                });

                graph.push(edge);
            };
        };

        return graph;
    };

    const knightGraph = generateKnightGraph();

    // Algorithm for determining shortest path between 2 squares -- Modified BFS
    const knightMoves = function (originArray, destinationArray) {
        const parentArray = new Array(64).fill(null),
            originSquare = mapCoordinate(...originArray),
            destinationSquare = mapCoordinate(...destinationArray),
            queue = new Array();

        parentArray[originSquare] = 'origin';
        queue.push(originSquare);
        
        while (queue.length != 0) {
            const currentSquare = queue.shift(),
                nextSquares = knightGraph[currentSquare];

            nextSquares.forEach(square => {
                if (square !== currentSquare && parentArray[square] === null) {
                    queue.push(square);
                    parentArray[square] = currentSquare;
                };
            });

            if (parentArray[destinationSquare] !== null) {
                break;
            };
        };

        // Backtracking origin from destination
        let currentSquare = destinationSquare,
            parentSquare = parentArray[currentSquare],
            edgeCounter = 1,
            optimumPath = [getCoordinate(parentSquare), getCoordinate(currentSquare)];
        
        while (parentSquare !== originSquare) {
            currentSquare = parentSquare;
            parentSquare = parentArray[currentSquare];
            optimumPath.unshift(getCoordinate(parentSquare));
            edgeCounter += 1;
        };

        return { move : edgeCounter, path : optimumPath };
    };

    return { knightMoves };
};

export { Knight };
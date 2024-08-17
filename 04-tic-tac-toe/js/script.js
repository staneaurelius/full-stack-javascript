// IIFE function for managing tic-tac-toe board
const gameBoard = (function () {
    const board = Array(9);

    const setSquareSign = function (index, sign) {
        board[index] = sign;
    };

    const getSquare = (index) => board[index];

    const getBoard = () => board;
    
    const resetBoard = function () {
        for (let i = 0; i < board.length; i++) {
            board[i] = null;  
        };
    };

    return {setSquareSign, getSquare, getBoard, resetBoard};
})();

// Function for generating X and O SVG
function generateXSvg () {
    const XSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    XSvg.setAttribute('width', '24px');
    XSvg.setAttribute('height', '24px');
    XSvg.setAttribute('viewBox', '0 0 24 24');

    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('fill', '#78BC35');

    // Create rectangles
    const firstRectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    firstRectangle.setAttribute('width', '24');
    firstRectangle.setAttribute('height', '6');
    firstRectangle.setAttribute('x', '0');
    firstRectangle.setAttribute('y', '9');
    firstRectangle.setAttribute('rx', '3');
    firstRectangle.setAttribute('ry', '3');
    firstRectangle.setAttribute('transform', 'rotate(45 12 12)');

    const secondRectangle = firstRectangle.cloneNode();
    secondRectangle.setAttribute('transform', 'rotate(-45 12 12)');

    // Combine
    group.appendChild(firstRectangle);
    group.appendChild(secondRectangle);
    XSvg.appendChild(group);

    return XSvg;
};

function generateOSvg () {
    const OSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    OSvg.setAttribute('width', '24px');
    OSvg.setAttribute('height', '24px');
    OSvg.setAttribute('viewBox', '0 0 24 24');

    // Create cirlce
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('r', '10');
    circle.setAttribute('cx', '12');
    circle.setAttribute('cy', '12');
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', '#FF9B8D');
    circle.setAttribute('stroke-width', '2');

    // Combine
    OSvg.appendChild(circle);

    return OSvg;
};

// Function for adding SVG to div square
function displaySquareSign (square, sign) {
    let svg;

    if (sign === 'x') {
        svg = generateXSvg();
    } else {
        svg = generateOSvg();
    };

    square.appendChild(svg);
    square.classList.toggle('enable');
};

// IIFE function for controlling display
const displayController = (function () {
    // Get squares, message, and  player name
    const squares = document.querySelectorAll('.square'),
        gameMessage = document.querySelector('#game-message'),
        playerScore = document.querySelector('#player-score'),
        computerScore = document.querySelector('#computer-score'),
        resetButton = document.querySelector('#reset');
    
    // Add listener to tic tac toe boxes
    squares.forEach((button) => {
        button.addEventListener('click', (e) => {
            const playerName = inputRecorder.getPlayerName(),
                playerSign = inputRecorder.getPlayerSign(),
                squareIndex = parseInt(e.target.getAttribute('data-index'));

            if (e.target.classList.contains('enable')) {
                displaySquareSign(e.target, playerSign);
                gameBoard.setSquareSign(squareIndex, playerSign);
                gameMessage.textContent = `${playerName} selected square ${parseInt(squareIndex) + 1}`;
                const winnerName = checkWinner();

                if (!winnerName) {
                    emptySquare = gameBoard.getBoard().filter(
                        (square) => square != null
                    );
                    
                    if (emptySquare.length != 9) {
                        gameController.moveComputer();
                        checkWinner();
                    };
                } else {
                    gameMessage.textContent = `The winner is ${winnerName}`;
                    if (winnerName === 'Computer') {
                        computerScore.textContent = parseInt(computerScore.textContent) + 1;
                    } else {
                        playerScore.textContent = parseInt(playerScore.textContent) + 1;
                    };
                };
            } else {
                gameMessage.textContent = 'Please select another square';
            };
        });
    });

    resetButton.addEventListener('click', (e) => {
        gameBoard.resetBoard();
        squares.forEach((square) => {
            if (square.firstElementChild) {
                square.removeChild(square.firstElementChild);
            };

            if (!square.classList.contains('enable')) {
                square.classList.toggle('enable');
            };
        });
    });
})();

// IIFE Function for retrieving name and sign from modal
const inputRecorder = (function () {
    const newGameDialog = document.querySelector('#new-game'),
        playForm = document.querySelector('form'),
        playerName = document.querySelector('#player-name'),
        playerBox = document.querySelector('#player-sign'),
        computerBox = document.querySelector('#computer-sign');

    // Add listener for dialog
    newGameDialog.showModal();
    playForm.addEventListener('submit', (e) => {
        const inputName = document.querySelector('#name-input').value;
        const inputSign = document.querySelector('input[type="radio"]:checked').value;

        // Update display
        playerName.textContent = inputName;
        playerBox.removeChild(playerBox.firstElementChild);
        computerBox.removeChild(computerBox.firstElementChild);

        if (inputSign === 'x') {
            playerBox.insertBefore(generateXSvg(), playerBox.firstElementChild);
            playerBox.setAttribute('data-index', 'x');
            computerBox.insertBefore(generateOSvg(), computerBox.firstElementChild);
        } else {
            playerBox.insertBefore(generateOSvg(), playerBox.firstElementChild);
            playerBox.setAttribute('data-index', 'o');
            computerBox.insertBefore(generateXSvg(), computerBox.firstElementChild);
            gameController.moveComputer();
        }
    });

    // For returning inputs
    const getPlayerName = () => playerName.textContent;
    const getPlayerSign = () => playerBox.getAttribute('data-index');

    return {getPlayerName, getPlayerSign};
})();

// IIFE Function for controlling computer and monitoring board
const gameController = (function () {
    const moveComputer = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * 9);
        } while (gameBoard.getSquare(randomIndex));

        const computerSign = inputRecorder.getPlayerSign() === 'x' ?
            'o' :
            'x';

        const computerSquare = document.querySelector(`.square[data-index="${randomIndex}"]`);
        displaySquareSign(computerSquare, computerSign);
        gameBoard.setSquareSign(randomIndex, computerSign);
    };

    const winningPattern = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal winning condition
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical winning condition
        [0, 4, 8], [2, 4, 6] // diagonal winning condition
    ];

    const checkBoard = () => {
        let winner;
        const board = gameBoard.getBoard();
        const xPattern = [],
            oPattern = [];

        for (let i = 0; i < board.length; i++) {
            if (board[i] === 'x' && !xPattern.includes(i)) {
                xPattern.push(i);
                xPattern.sort();
            } else if (board[i] === 'o' && !oPattern.includes(i)) {
                oPattern.push(i)
                oPattern.sort();
            };
        };

        for (let i = 0; i < winningPattern.length; i++) {
            const pattern = winningPattern[i];
            if (pattern.every((num) => xPattern.includes(num))) {
                winner = 'x';
                break;
            } else if (pattern.every((num) => oPattern.includes(num))) {
                winner = 'o';
                break;
            };
        };

        return winner;
    };

    return {moveComputer, checkBoard};
})();

// Function to check winner
function checkWinner() {
    // Check for winner
    const winner = gameController.checkBoard();

    if (winner) {
        const winnerName = winner === inputRecorder.getPlayerSign() ?
            inputRecorder.getPlayerName() :
            'Computer';

        return winnerName;
    };
};
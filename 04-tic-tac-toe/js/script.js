// Constructor for creating player object
function createPlayer (name, sign) {
    let score = 0;
    const getScore = () => score;
    const addScore = () => score++;
    return {name, sign, getScore, addScore};
};

// IIFE function for managing tic-tac-toe board
const gameBoard = (function () {
    const board = Array(9);

    const setSquareSign = function (index, sign) {
        board[index] = sign;
    };

    const getSquare = (index) => board[index];
    
    const resetBoard = function () {
        for (let i = 0; i < board.length; i++) {
            board[i] = null;  
        };
    };

    return {setSquareSign, getSquare, resetBoard};
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

    if (sign === 'o') {
        svg = generateOSvg();
    } else {
        svg = generateXSvg();
    };

    square.appendChild(svg);
    square.classList.toggle('enable');
};

// IIFE function for controlling display
const displayController = (function () {
    const squares = document.querySelectorAll('.square');
    const gameMessage = document.querySelector('#game-message')
    
    squares.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.classList.contains('enable')) {
                const squareIndex = parseInt(e.target.getAttribute('data-index'));
                gameBoard.setSquareSign(squareIndex, 'x');
                displaySquareSign(e.target, 'x');
                gameMessage.textContent = "It's computer's turn"
            } else {
                gameMessage.textContent = 'Please select another square'
            };
        });
    });
})();
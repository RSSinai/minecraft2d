function goToStart()
{
    window.location.href = './main.html'
    
}
const boardSize = 7; // Adjust the size of the board
const gameBoard = document.getElementById('game-board');

// Sample map array - replace this with your own logic
const map = [
    [1, 1, 3,1,1,1,1],
    [1, 1, 3,1,1,1,1],
    [1, 1, 3,1,1,1,1],
    [1, 1, 3,1,1,1,1],
    [8, 8, 3,3,3,3,8],
    [8, 8, 8,8,8,8,8],
    [1, 1, 1,1,1,1,1],
];

function createBoard() {
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;
            const imgNumber = map[row][col];
            cell.style.backgroundImage = `url('cube_images/${imgNumber}.png')`;
            gameBoard.appendChild(cell);
        }
    }
}

createBoard();

// clicking a cell will delete cell

function checkback(imgNumber, callback) {
    const elementsCell = Array.from(document.querySelectorAll('.cell'));

    elementsCell.forEach(function(element) {
        element.addEventListener('click', function() {
            var computedStyle = window.getComputedStyle(element);
            var backgroundImage = computedStyle.getPropertyValue('background-image');

            if (backgroundImage.includes(`cube_images/${imgNumber}.png`)) {
                callback(true);
            } else {
                callback(false);
            }
        });
    });
}

const elementsToolAxe = Array.from(document.querySelectorAll('.card.tool.axe'));

elementsToolAxe.forEach(function(element) {
    element.addEventListener('click', function() {
        checkback(1, function(isMatch) {
            if (isMatch) {
                console.log('righttt');
            }
        });
    });
});

const elementsToolShovel = Array.from(document.querySelectorAll('.card.tool.shovel'));
elementsToolShovel.forEach(function(element) {
    element.addEventListener('click', function() {
        localStorage.setItem('shovel',1)
    });
});

const elementsToolPickaxe = Array.from(document.querySelectorAll('.card.tool.pickaxe'));
elementsToolPickaxe.forEach(function(element) {
    element.addEventListener('click', function() {
        localStorage.setItem('pickaxe',1)
    });
});



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
    [7, 8, 1,1,1,3,1],
    [7, 8, 1,1,1,3,3],
    [7, 8, 1,1,1,3,3],
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

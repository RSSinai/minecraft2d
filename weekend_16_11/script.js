/* -------------------------------------------------------------------------- */
/*                               GO TO MAIN PAGE                              */
/* -------------------------------------------------------------------------- */
function goToStart() {
  window.location.href = "./main.html";
}

/* -------------------------------------------------------------------------- */
/*                                GENERATE MAP                                */
/* -------------------------------------------------------------------------- */
const boardSize = 12; // Adjust the size of the board
const gameBoard = document.getElementById("game-board");

// Sample map array - replace this with your own logic
const map = [
  [3, 3, 3, 3, 3, 3, 3,3,3,3,3,6],
  [3, 3, 3, 3, 3, 3, 3,3,3,3,6,6],
  [3, 3, 3, 3, 3, 3, 3,3,3,6,6,6],
  [3, 3, 3, 3, 3, 3, 3,3,3,3,9,9],
  [3, 3, 3, 3, 3, 3, 3,3,3,3,9,9],
  [3, 3, 3, 3, 3, 3, 3,3,3,5,2,2],
  [3, 3, 3, 3, 3, 3, 3,3,5,2,2,2],
  [12, 12, 12, 12, 12, 12, 12,12,2,2,2,2],
  [8, 8, 8, 12, 12, 12, 12,12,8,8,8,8],
  [11, 8, 8, 8, 8, 8, 8,8,8,8,8,8],
  [11, 11, 1, 1, 1, 1, 1,1,1,1,1,1],
  [11, 11, 11, 1, 1, 4, 4,4,4,4,4,4],
];

function createBoard() {
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = row;
      cell.dataset.col = col;
      const imgNumber = map[row][col];
      cell.style.backgroundImage = `url('cube_images/${imgNumber}.png')`;
      gameBoard.appendChild(cell);
    }
  }
}

createBoard();

/* -------------------------------------------------------------------------- */
/*                                  INVENTORY                                 */
/* -------------------------------------------------------------------------- */


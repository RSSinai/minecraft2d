function goToStart() {
  window.location.href = "./main.html";
}
const boardSize = 7; // Adjust the size of the board
const gameBoard = document.getElementById("game-board");

// Sample map array - replace this with your own logic
const map = [
  [1, 1, 3, 1, 1, 1, 1],
  [1, 1, 3, 1, 1, 1, 1],
  [1, 1, 3, 1, 1, 1, 1],
  [1, 1, 3, 1, 1, 1, 1],
  [8, 8, 3, 3, 3, 3, 8],
  [8, 8, 8, 8, 8, 8, 8],
  [1, 1, 1, 1, 1, 1, 1],
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

// check that right tool is selected clicked on
// click on the right cell with the right tool, if match delete, else nothing

const elementsToolAxe = Array.from(document.querySelectorAll(".card.tool.axe"));
elementsToolAxe.forEach(function (element) {
  element.addEventListener("click", function () {
    listenTo(1);
  });
});

const elementsToolShovel = Array.from(document.querySelectorAll(".card.tool.shovel"));
elementsToolShovel.forEach(function (element) {
  element.addEventListener("click", function () {
    listenTo(3);
  });
});

const elementsToolPickaxe = Array.from(document.querySelectorAll(".card.tool.pickaxe"));
elementsToolPickaxe.forEach(function (element) {
  element.addEventListener("click", function () {
    listenTo(8);
  });
});

function listenTo(imgNumber) {
  const elementsCell = Array.from(document.querySelectorAll(".cell"));
  elementsCell.forEach(function (element) {
    element.addEventListener("click", function () {
      let computedStyle = window.getComputedStyle(element);

      let backgroundImage = computedStyle.getPropertyValue("background-image");
      if (
        backgroundImage.includes(`cube_images/${imgNumber}.png`)
      ) {
        element.style.backgroundImage = `url('./cube_images/white.PNG')`;
      } else {
        
      }
      // element.style.backgroundImage = `url('./cube_images/1.PNG')`;
    });
  });
}


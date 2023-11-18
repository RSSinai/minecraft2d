/* -------------------------------------------------------------------------- */
/*                               GO TO MAIN PAGE                              */
/* -------------------------------------------------------------------------- */
function goToStart() {
  window.location.href = "./main.html";
}

/* -------------------------------------------------------------------------- */
/*                                GENERATE MAP                                */
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */
/*                             TOOLS FUNCTIONALITY                            */
/* -------------------------------------------------------------------------- */

// check that right tool is selected clicked on
// click on the right cell with the right tool, if match delete, else nothing

const elementsToolAxe = Array.from(
    document.querySelectorAll(".card.tool.axe")
);
const elementsToolShovel = Array.from(
  document.querySelectorAll(".card.tool.shovel")
);
const elementsToolPickaxe = Array.from(
  document.querySelectorAll(".card.tool.pickaxe")
);
const elementsCell = Array.from(document.querySelectorAll(".cell"));

let selectedTool = null;

elementsToolAxe.forEach(function (element) {
  element.addEventListener("click", function () {
    handleToolSelection(1);
  });
});

elementsToolShovel.forEach(function (element) {
  element.addEventListener("click", function () {
    handleToolSelection(3);
  });
});

elementsToolPickaxe.forEach(function (element) {
  element.addEventListener("click", function () {
    handleToolSelection(8);
  });
});

function handleToolSelection(imgNumber) {
  // Reset background images for all tools
  elementsToolAxe.forEach((tool) => (tool.style.backgroundImage = ""));
  elementsToolShovel.forEach((tool) => (tool.style.backgroundImage = ""));
  elementsToolPickaxe.forEach((tool) => (tool.style.backgroundImage = ""));

  // Set the background image for the selected tool
  const selectedElement = event.target;
  selectedElement.style.backgroundImage = `url('./cube_images/${imgNumber}.png')`;

  // Update the selected tool
  selectedTool = imgNumber;

  // Remove event listeners from all cells
  elementsCell.forEach((element) =>
    element.removeEventListener("click", handleCellClick)
  );

  // Add event listener to cells for the selected tool
  elementsCell.forEach((element) => {
    element.addEventListener("click", function () {
      handleCellClick(element);
    });
  });
}

function handleCellClick(element) {
  let computedStyle = window.getComputedStyle(element);
  let backgroundImage = computedStyle.getPropertyValue("background-image");

  if (backgroundImage.includes(`cube_images/${selectedTool}.png`)) {
    element.style.backgroundImage = `url('./cube_images/white.PNG')`;
  }
}


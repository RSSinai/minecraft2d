
/* -------------------------------------------------------------------------- */
/*                               DOM EXTRACTION                               */
/* -------------------------------------------------------------------------- */

const elementsToolAxe = Array.from(document.querySelectorAll(".card.tool.axe"));
const elementsToolShovel = Array.from(document.querySelectorAll(".card.tool.shovel"));
const elementsToolPickaxe = Array.from(document.querySelectorAll(".card.tool.pickaxe"));
const elementsToolfish = Array.from(document.querySelectorAll(".card.tool.fish"));
const elementsToolSafe = Array.from(document.querySelectorAll(".card.tool.safe"));
const elementsCell = Array.from(document.querySelectorAll(".cell"));
const elementInventory = Array.from(document.querySelectorAll(".last-cell"));

let selectedTool = null;


/* -------------------------------------------------------------------------- */
/*                               EVENT LISTENERS                              */
/* -------------------------------------------------------------------------- */

elementsToolAxe.forEach(function (element) {
  element.addEventListener("click", function () {
    handleToolSelection(9);
  });
});

elementsToolShovel.forEach(function (element) {
  element.addEventListener("click", function () {
    handleToolSelection(8);
  });
});

elementsToolPickaxe.forEach(function (element) {
  element.addEventListener("click", function () {
    handleToolSelection(4);
  });
});

elementsToolfish.forEach(function (element) {
    element.addEventListener("click", function () {
      handleToolSelection(12);
    });
  });

  elementsToolSafe.forEach(function (element) {
    element.addEventListener("click", function () {
      handleToolSelection(11);
    });
  });


/* -------------------------------------------------------------------------- */
/*                           HANDLE TOOLS SELECTION                           */
/* -------------------------------------------------------------------------- */

function handleToolSelection(imgNumber) {
    // Ask a question before allowing the user to continue
    const answer = window.prompt("Answer the question to continue: Give an HTML element that starts with the letter 'D'");
    
    if (answer && answer.toLowerCase() === "div") {
      // Reset background images for all tools
      elementsToolAxe.forEach((tool) => (tool.style.backgroundImage = ""));
      elementsToolShovel.forEach((tool) => (tool.style.backgroundImage = ""));
      elementsToolPickaxe.forEach((tool) => (tool.style.backgroundImage = ""));
      elementsToolfish.forEach((tool) => (tool.style.backgroundImage = ""));
      elementsToolSafe.forEach((tool) => (tool.style.backgroundImage = ""));

  
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
    } else {
      // If the answer is incorrect, do not proceed
      alert("Incorrect answer. You cannot continue with the game.");
    }
  }
  

function handleCellClick(element) {
  let computedStyle = window.getComputedStyle(element);
  let backgroundImage = computedStyle.getPropertyValue("background-image");

  if (backgroundImage.includes(`cube_images/${selectedTool}.png`)) {
    element.style.backgroundImage = `url('./cube_images/white.PNG')`;
    
  }
  
}

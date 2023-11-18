

function checkback(imgNumber , toolName) {
  const elementsCell = Array.from(document.querySelectorAll(".cell"));
  elementsCell.forEach(function (element) {
    element.addEventListener("click", function () {
      let computedStyle = window.getComputedStyle(element);

      let backgroundImage = computedStyle.getPropertyValue("background-image");
      if (backgroundImage.includes(`cube_images/${imgNumber}.png`) && localStorage.getItem(`${toolName}`) == 1) {
        isMatch = true; // Set the variable to true if there is a match
      } else {
        isMatch = false; // Set the variable to false otherwise
      }
      return console.log(isMatch);
      // element.style.backgroundImage = `url('./cube_images/1.PNG')`;
    });
  });
}

checkback(1, 'axe');

// Clicking on Tools

const elementsToolAxe = Array.from(document.querySelectorAll(".card.tool.axe"));
elementsToolAxe.forEach(function (element) {
  element.addEventListener("click", function () {
    localStorage.setItem("axe", 1);
  });
});

const elementsToolShovel = Array.from(
  document.querySelectorAll(".card.tool.shovel")
);
elementsToolShovel.forEach(function (element) {
  element.addEventListener("click", function () {
    localStorage.setItem("shovel", 1);
  });
});

const elementsToolPickaxe = Array.from(
  document.querySelectorAll(".card.tool.pickaxe")
);
elementsToolPickaxe.forEach(function (element) {
  element.addEventListener("click", function () {
    localStorage.setItem("pickaxe", 1);
  });
});
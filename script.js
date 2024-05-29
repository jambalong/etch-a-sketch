// Function to handle mouseover event
function handleMouseOver(square) {
  // Change the background color when hovered
  square.style.backgroundColor = "black";
}

// Function to create squares and attach event listeners
function createSquares(gridSize) {
  let container = document.querySelector("#container");

  // Loop to create square divs
  for (i = 0; i < gridSize ** 2; i++) {
    // Create a new square element and set attribute class to square
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    
    // Adjust the squares to fit container dynamically
    let squareWidth = `calc(100% / ${gridSize} - 1px)`
    square.style.flexBasis = squareWidth;
    square.style.paddingTop = squareWidth;

    // Add event listener to each square for mouseover event
    square.addEventListener("mouseover", function() {
      handleMouseOver(square);
    });

    // Append the square to the container
    container.appendChild(square);
  }
}

// Function to remove #container children (deleting the grid)
function deleteGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);

    if (!container.firstChild) {
      break;
    }
  }
}

// Function to prompt user for number of squares
function promptUser() {
  let userInput;

  // Loop till user inputs accepted amount (breaks when input is string)
  do {
    userInput = prompt("Enter the number of squares per side for the new grid (Max: 100)");

    if (userInput > 100 || userInput < 1) {
      alert("Invalid number of squares. Please try again.");
    }
  } while (userInput > 100 || userInput < 1);

  return userInput;
}

// Function to create new grid
function createNewGrid() {
  let gridSize = promptUser();

  deleteGrid();
  createSquares(gridSize);
}

createSquares(16)

// Add event listener to button, passing createNewGrid as reference to addEventListener
let button = document.querySelector("#grid-size-btn")
button.addEventListener("click", createNewGrid);

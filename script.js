let container = document.querySelector("#container");

// Function to handle mouseover event
function handleMouseOver(square) {
  // Change the background color when hovered
  square.style.backgroundColor = "black";
}

// Function to create squares and attach event listeners
function createSquares() {
  let container = document.querySelector("#container");

  // Loop to create 256 squares
  for (i = 0; i < 256; i++) {
    // Create a new square element and set attribute class to square
    let square = document.createElement("div");
    square.setAttribute("class", "square");

    // Add event listener to each square for mouseover event
    square.addEventListener("mouseover", function() {
      handleMouseOver(square);
    });

    // Append the square to the container
    container.appendChild(square);
  }
}

createSquares();

function deleteGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);

    if (!container.firstChild) {
      break;
    }
  }
}

function createNewGrid() {
  let gridSize = prompt("Enter the number of squares per side for the new grid (Max: 100)");

  deleteGrid();
}

let button = document.querySelector("#grid-size-btn")

button.addEventListener("click", createNewGrid);

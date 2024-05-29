// Function to get an Array with RGBA values from a backgroundColor
function getRGBA(color) {
  // Slice color string to get rgba values within () parenthesis
  let rgba = color.slice(color.indexOf('(') + 1, color.indexOf(')')).split(',');

  // Add an alpha channel (appends an element to rgba Array)
  if (rgba.length != 4) {
    rgba.push('1.0');
  }

  // Map through rgba and parse into Int or Float for futher use
  rgba = rgba.map(function (n, index) {
    if (index < 3) {
      return parseInt(n);
    } else {
      return parseFloat(n);
    }
  });

  return rgba;
}

// Function to generate a random RGBA color
function getRandomColor(rgba) {
  // Map through rgba and assign random RGB values, leave alpha channel alone
  rgba = rgba.map(function (n, index) {
    if (index < 3) {
      return Math.floor(Math.random() * 256);
    } else {
      return n;
    }
  })

  return rgba;
}

// Function to darken a square color by 10%
function darkenColor(rgba) {
  // Map through rgba and reduce alpha channel (last element in array) by 10%
  rgba = rgba.map(function (n, index) {
    if (index < 3) {
      return n;
    } else {
      return Math.max(0, n - 0.1); // Ensure alpha doesn't go below 0
    }
  });

  return rgba;
}

// Function to handle mouseover event
function handleMouseOver(square) {
  let color = square.style.backgroundColor;
  let rgba = getRGBA(color);
  rgba = getRandomColor(rgba);
  rgba = darkenColor(rgba);

  // Change the background color when hovered
  square.style.backgroundColor = `rgba(${rgba.join(', ')})`;
}

// Function to create squares and attach event listeners
function createSquares(gridSize) {
  let container = document.querySelector("#container");

  // Loop to create square divs
  for (i = 0; i < gridSize ** 2; i++) {
    // Create a new square element and set attribute class to square
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    square.style.backgroundColor = "rgba(255, 255, 255, 1)";
    
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
  // Delete children element and breaks if container.firstChild is falsy
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

  // Loop till user inputs accepted amount (not able to handle string inputs)
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

createSquares(16);

// Add event listener to button, passing createNewGrid as reference to addEventListener
let button = document.querySelector("#grid-size-btn")
button.addEventListener("click", createNewGrid);

let container = document.querySelector("#container");

function createSquares() {
  let container = document.querySelector("#container");

  for (i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");

    container.appendChild(square);
  }
}

createSquares();

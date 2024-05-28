let container = document.querySelector("#container");

let square = document.createElement("div");
square.setAttribute("class", "square");

for (i = 0; i < 256; i++) {
  container.appendChild(square.cloneNode(true))
}

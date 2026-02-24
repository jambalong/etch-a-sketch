# Etch-A-Sketch

This project is part of The Odin Project: [Etch-A-Sketch](https://www.theodinproject.com/lessons/foundations-etch-a-sketch), where I create a simple Etch-A-Sketch-like web app using JavaScript and Flexbox.

Users can interact with a grid, change its dimensions, and apply hover effects.

Live Demo: [https://jambalong.github.io/etch-a-sketch/](https://jambalong.github.io/etch-a-sketch/)

## Features

- Creates a 16x16 grid of square divs dynamically using JavaScript.
- Utilizes Flexbox to arrange the divs in a grid layout.
- Hover effect: Grid divs change color as the mouse passes over them.
- Includes a button to adjust the grid size by user input (up to 100x100 grid).

### Extra Credit Features:
- Randomized RGB values applied to squares on hover.
- Progressive darkening effect with each interaction, turning the square fully black after 10 interactions.

## Assignment Breakdown

1. **Initial Setup**
    - Create a GitHub repository.
    - Create an HTML document and link an external JavaScript file.
    - Use JavaScript to dynamically generate a 16x16 grid of square divs within a container.

2. **Flexbox Layout**
    - Use Flexbox to arrange the divs into a grid. Ensure no borders or margins disrupt the size and layout of the squares.

3. **Hover Effect**
    - Implement an event listener to change the background color of a div when hovered over by the mouse, leaving a trail on the grid.

4. **Dynamic Grid Resizing**
    - Add a button that prompts the user to enter the number of squares per side for a new grid. The grid size will adjust while keeping the same total width (960px).

5. **Random Color and Darkening (Extra Credit)**
    - Randomize the RGB value for each square interaction or apply a progressive darkening effect.

## Installation & Preview

1. Clone the repository:
   ```bash
   git clone https://github.com/jambalong/etch-a-sketch.git
   cd etch-a-sketch
   ```

2. Open the `index.html` file in a web browser to run the application.

3. (Optional) To view or edit the source code, open the project folder in a text editor like [VS Code](https://code.visualstudio.com/).

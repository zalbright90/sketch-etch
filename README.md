# Sketch-Etch

## What is this :raised_eyebrow:?

SketchEtch is a cool web app that's like a mix between a sketchpad and an Etch-A-Sketch. It lets you draw by hovering your mouse over a grid of squares.

## How to use

Visit my [GitPage](zalbright90.github.io/sketch-etch/) for the project
Move your mouse over the grid to draw
Click the "Reset Sketch" button to change the grid size

> [!TIP]
> When setting a canvas size choose 16, 32, 64, or 96 for pixel perfection

### Features
- 16x16 grid to start
- Hover to draw
- Opacity gets darker as you interact with the same grid cell
- Change grid size (up to 100x100)

### How it's made:
I built this using
- HTML
- CSS (with Flexbox, no grid)
- JavaScript
  
> [!NOTE]
> The grid is created dynamically with JavaScript, not hardcoded in HTML. I used Flexbox to make the grid layout work.

### Challenges I faced:

Getting the grid to show up. This was honestly the hardest part, forming a grid without using CSS grid.
I first set the hover effect outside the container and linked it to document instead of the container.
Figuring out how to clear the old grid and make a new one with a user's specified input, fortunately there is a lot out there on using the prompt and applying user input.

### What I learned and expanded on:

- How to use JavaScript to create and modify HTML elements
- How to use event listeners
- How to use Flexbox for layouts

#### Future improvements

- Add color options (ability for user to select a different color, or a palette even)
- Make it work on mobile devices (Must implement; most people use mobile devices and it's how I show projects to friends and family)
- Add an eraser tool 

If you have any questions or suggestions, let me know!

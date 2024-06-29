const button = document.querySelector('button');
const container = document.querySelector('#container');

button.addEventListener('click', function() {
    let userInput 
    do{
        userInput = parseInt(prompt('Pick the size of your canvas (16-100):'), 10);
    } while (isNaN(userInput) || userInput < 16 || userInput > 100);

    clearGrid();
    createGrid(userInput, userInput);
});

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function createGrid(rows, columns) {

    const cellWidth = container.clientWidth / columns;
    const cellHeight = container.clientHeight / rows;
    for (let i = 0; i < (rows * columns); i++) {
        const gridCell = document.createElement('div');
        gridCell.style.width = `${cellWidth}px`;
        gridCell.style.height = `${cellHeight}px`;
        gridCell.className = "grid";
        gridCell.addEventListener("mouseover", (event) => {
            gridCell.style.backgroundColor = "blue";
        });
        container.appendChild(gridCell);
    }
}

createGrid(16, 16);
//function to build grid in the container
const container = document.querySelector('#container');

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
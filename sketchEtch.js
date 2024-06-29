//function to build grid in the container
const container = document.querySelector('#container');

function createGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    for (let i = 0; i < (rows * columns); i++) {
        const gridCell = document.createElement('div');
        gridCell.innerText = ' ';
        container.appendChild(gridCell).className = "grid";
    }
}
createGrid(16, 16);
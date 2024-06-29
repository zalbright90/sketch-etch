//function to build grid in the container
function createGrid(size) {

const container = document.querySelector('#container');

for (let x = 0; x < rows; x++) {
    for (let y = 0; y < columns; y++) {
        const gridCell = document.createElement('div');
        gridCell.className = 'grid';
        gridCell.textContent = `Cell ${x+1}-${y+1}`;

        createGrid.appendChild(gridCell);
    }
}
createGrid(16);
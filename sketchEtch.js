//function to build grid in the container
const rows = 16;
const columns = 16;

const createGrid = document.querySelector('#container');

for (let x = 0; x < rows; x++) {
    for (let y = 0; y < columns; y++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'grid';
        gridDiv.textContent = `Cell ${x+1}-${y+1}`;

        createGrid.appendChild(gridDiv);
    }
}
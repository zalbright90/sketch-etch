//function to build grid in the container
function createGrid(size) {
    const container = document.querySelector('#container');
    container.textContent = '';
    for (let i = 0; i < size * size; i++) {
        const gridCell = document.createElement('div');
        gridCell.className = 'grid';
        container.appendChild(gridCell);
    }
}
createGrid(16);
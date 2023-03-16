console.log("Javascript Document Running...")

let columns = 16;
let rows = 16;
let grid = document.createElement('div');
let color = [, "#3C9EE7", "#E7993C",
    "#E73C99", "#3CE746", "#E7993C"];

grid.className = 'grid';

for (let i = 0; i < columns; i++) {
    let column = document.createElement('div'); // create column
    column.className = 'column';
    for (let j = 0; j < rows; j++) {
        let row = document.createElement('div'); // create row
        row.className = 'row';
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = "black";
        });
        column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
}
document.body.appendChild(grid);
console.log("Javascript Document Running...")

let columns = 16;
let rows = 16;
let grid = document.createElement('div');

populateGrid(columns, rows);

function populateGrid(columns, rows) {
    let grid = document.createElement('div');
    grid.className = "grid";
    
    for (let i = 0; i < columns; i++) {
        let column = document.createElement('div'); // create column
        column.className = 'column';
        for (let j = 0; j < rows; j++) {
            let row = document.createElement('div'); // create row
            row.className = 'row';
            row.addEventListener('mouseover', () => {
                row.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);;
            });
            column.appendChild(row); // append row in column
        }
        grid.appendChild(column); // append column inside grid
    }
    document.body.appendChild(grid);

}

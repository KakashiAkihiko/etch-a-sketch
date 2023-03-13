console.log("Javascript Document Running...")

var columns = 16;
var rows = 16;
var grid = document.createElement('div');
var color = [, "#3C9EE7", "#E7993C",
    "#E73C99", "#3CE746", "#E7993C"];


var grid = document.createElement('div');
grid.className = 'grid';
for (var i = 0; i < columns; ++i) {
    var column = document.createElement('div'); // create column
    column.className = 'column';
    for (var j = 0; j < rows; ++j) {
        var row = document.createElement('div'); // create row
        row.className = 'row';
        row.textContent = i + '-' + j; // set text
        
        column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
}
document.body.appendChild(grid);

/*
document.querySelectorAll("row").addEventListener(
    "mouseover", function () {

        row.style.background
            = color[Math.floor(Math.random() * color.length)];
    })

    */
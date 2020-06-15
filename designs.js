// Select color input
const sizePicker = document.getElementById('sizePicker');
// let color = getElementsById('colorPicker').value;
// Select size input
let _N_ = document.getElementById('inputHeight').value;
let _M_ = document.getElementById('inputWidth').value;

function makeGrid(_N_, _M_) {
  // Select pixelCanvas id
  const canvas = document.getElementById('pixelCanvas');
  // Create a new table
  for (let i = 0; i < _N_; i++) {
    let newRow = document.createElement('tr');
    canvas.appendChild(newRow);
    for (let i = 0; i < _M_; i++) {
      let newCell = document.createElement('td');
      newRow.appendChild(newCell);
    }
  }
};

function clearGrid() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstElementChild);
  }
};

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function (event) {
  event.preventDefault();
//  erase any existing table
  clearGrid();
  makeGrid();
});

const canvas = document.getElementById('pixelCanvas');

function colorCell(event) {
  if (event.target.tagName === 'TD') 
    event.target.style.backgroundColor = color;
};

canvas.addEventListener('click', colorCell);
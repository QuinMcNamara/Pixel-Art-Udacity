const size = document.getElementById('sizePicker');
const color = document.getElementById('colorPicker');
const grid = document.getElementById('pixelCanvas');


function makeGrid(height, width) {
	for (let row = 0; row < height; row++) {
		const gridRow = grid.insertRow(row);
			for (let column = 0; column < width; column++) {
				const pixel = gridRow.insertCell(column);
				pixel.addEventListener('click', function () {
					pixel.style.backgroundColor = color.value;
				});
				/* Creates individual cells with event listener
				that selects color based on current colorPicker value */
			}
	}
}


// Add listener to size variable for submit event
size.addEventListener('submit', function() {
	event.preventDefault();
	// Prevents default submit event action
	grid.innerHTML = "";
	// Clears table element to reset grid
	const width = document.getElementById('inputWidth').value;
	const height = document.getElementById('inputHeight').value;
	makeGrid(height, width);
})
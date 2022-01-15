const gridContainer = document.querySelector('.grid-container');
const resetContainer = document.querySelector('.reset-container');
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
buttonContainer.textContent = 'Choose your colour';

let canvasSize = 0;
let colour = 'black'; // Colour in which you will paint
console.log(colour);


while (canvasSize <= 0 || canvasSize > 51 || isNaN(canvasSize) == true) {
	canvasSize = prompt('Canvas size? (maximum size: 50)');
}

// Initial size
gridContainer.style.gridTemplateColumns = `repeat(${canvasSize}, 1fr)`;

// Colour change by setting attribute. Working with colour change now.
for (let i = 0; i < canvasSize * canvasSize; i++) {
	let div = document.createElement('div');
	div.classList.add('tile');
	gridContainer.appendChild(div);
	div.addEventListener('mouseenter', update);
	function update() {
		div.setAttribute('style', `background: ${colour}`);
	}
}

//creating all buttons and adding classses to them
const resetButton = document.createElement('button');
const colourInput = document.createElement('input');

resetButton.classList.add('reset-button');
colourInput.classList.add('colour-button');
colourInput.type = 'color';

// Putting all buttons on the page
resetContainer.appendChild(resetButton);
resetContainer.appendChild(buttonContainer);

// Reseting the canvas
resetButton.textContent = 'Reset the canvas';
resetButton.addEventListener('click', resetCanvas); 
function resetCanvas() {
	let children = gridContainer.children;
	for (let i = 0; i < children.length; i++) {
		let child = children[i];
		child.setAttribute('style', 'background: white');
	}
}

// Input to choose your own colour
colourInput.type = 'color';
colourInput.addEventListener('input', changeColour);
function changeColour() {
	colour = colourInput.value;
}
buttonContainer.appendChild(colourInput);

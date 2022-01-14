const gridContainer = document.querySelector('.grid-container');

let canvasSize = 0;

while (canvasSize <= 0 || canvasSize > 16 || isNaN(canvasSize) == true) {
	canvasSize = prompt('Canvas size? ');
	console.log(typeof canvasSize);
}
gridContainer.style.gridTemplateColumns = `repeat(${canvasSize}, 1fr)`;
console.log(canvasSize);


for (let i = 0; i < canvasSize * canvasSize; i++) {
	let div = document.createElement('div');
	div.classList.add('tile');
	gridContainer.appendChild(div);
	div.addEventListener('mouseenter', update);
	function update() {
		div.classList.add('div-hovered');
		div.classList.remove('div');
		console.log(div);
	}
}

const resetContainer = document.querySelector('.reset-container');
const resetButton = document.createElement('button');

resetContainer.appendChild(resetButton); //adding the button to inside the container
resetButton.textContent = 'Reset the canvas';

resetButton.addEventListener('click', resetCanvas); //When clicked reseting canvas

function resetCanvas() {
	let children = gridContainer.children;
	for (let i = 0; i < children.length; i++) {
		let child = children[i];
		child.classList.remove('div-hovered');
		child.classList.add('div');
	}
}



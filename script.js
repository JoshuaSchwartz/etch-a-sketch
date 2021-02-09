const container = document.querySelector('.container');
const btn = document.querySelector('.button');

btn.addEventListener('click', updateGrid);

// default grid size
createGrid(16);

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    for(let i = 1; i <= size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', colorGrid)
        container.appendChild(square);
    }
}

function colorGrid(e) {
    e.target.style.backgroundColor = 'black';
}

function updateGrid() {
    let newSize = +prompt('Enter a number between 1 and 100', 16); 

    if (newSize < 1 || newSize > 100 || Number.isNaN(newSize)) {
        alert('I can only handle so much'); 
    } else {
        while (container.firstChild) { container.removeChild(container.lastChild) } //clear the grid...
    }
    
    createGrid(newSize);
}
const container = document.querySelector('.container');

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

// default grid size
createGrid(16);
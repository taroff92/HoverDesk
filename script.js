loadTiles();
document.querySelector(".container").addEventListener("mouseover", mouseOver);
document.querySelector(".container").addEventListener("mouseout", mouseOut); function loadTiles() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 2156; i++) {
        const square = document.createElement('div');
        square.innerHTML = '<div class="square"></div>';
        container.appendChild(square);
    }
}




function mouseOver(event) {
    if (event.target.classList == 'square') {
        event.target.style.background = `rgb(${random(245, 255)},${random(200, 255)},${random(50, 150)})`;
    }
}
function mouseOut(event) {
    if (event.target.classList == 'square') {
        event.target.style.background = 'rgb(14, 68, 99)';
    }
}
function random(min, max) {
    const diff = max - min;
    return Math.round(Math.random() * diff) + min;
}


const container = document.querySelector("#container");
const button = document.querySelector("#sizePrompt");


function fillGrid(numSquares) {
    let squareSize = 400 / numSquares;
    numSquares = numSquares ** 2;
    for (i = 1; i <= numSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
    return;
}

fillGrid(16);

container.addEventListener("mouseover",(e) => {
    let target = e.target;
    if (target.classList.contains("square")) {
        target.style.backgroundColor = "black";
    }
})

button.addEventListener("click",() => {
    prompt("Enter grid size (e.g., 16 for 16 x 16) must not exceed 100:", 16);

})
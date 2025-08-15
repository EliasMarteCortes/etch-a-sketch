const container = document.querySelector("#container");

function fillGrid(numSquares) {

    numSquares = numSquares ** 2;
    for (i = 1; i <= numSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
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
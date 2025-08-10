const container = document.querySelector("#container");

for (i = 0; i <= 255; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
}

container.addEventListener("mouseover",(e) => {
    let target = e.target;
    if (target.classList.contains("square")) {
        target.style.backgroundColor = "black";
    }
})
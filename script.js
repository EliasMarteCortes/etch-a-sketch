const container = document.querySelector("#container");

for (i = 0; i <= 255; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
}
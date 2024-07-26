let body = document.querySelector("body");

let container = document.createElement("div");
container.setAttribute("class", "grid-container");
body.appendChild(container);

// Create grid 16x16
let k = 0;
for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "grid-row");
    row.setAttribute("id", `row-${i+1}`);
    container.appendChild(row);

    for (let j = 0; j < 16; j++) {
        let box = document.createElement("div");
        box.setAttribute("class", "grid-box");
        box.setAttribute("id", `box-${(i+1)*(j+1)}`);
        row.appendChild(box);
        k++;
    }
}
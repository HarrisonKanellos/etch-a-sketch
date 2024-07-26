let body = document.querySelector("body");

let buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");

let container = document.createElement("div");
container.classList.add("grid-container");
body.appendChild(container);

// Create grid 16x16
let k = 0;
for (let i = 0; i < 20; i++) {
    let row = document.createElement("div");
    row.classList.add("grid-row");
    row.setAttribute("id", `row-${i+1}`);
    container.appendChild(row);

    for (let j = 0; j < 20; j++) {
        let box = document.createElement("div");
        box.classList.add("grid-box");
        box.setAttribute("id", `box-${(i+1)*(j+1)}`);
        row.appendChild(box);
        k++;
    }
}

// Hover effect
container.addEventListener('mouseover', (event) => {
    let target = event.target;
    target.classList.add("dark");
})

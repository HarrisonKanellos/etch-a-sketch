let body = document.querySelector("body");

// Create button container
let buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
body.appendChild(buttonContainer);

// Create resize button
let buttonResize = document.createElement("button");
buttonResize.setAttribute("id", "button-resize");
buttonResize.classList.add("action-button");
buttonResize.textContent = "Resize";
buttonContainer.appendChild(buttonResize);

// Create erase button
let buttonErase = document.createElement("button");
buttonErase.setAttribute("id", "button-erase");
buttonErase.classList.add("action-button");
buttonErase.textContent = "Erase";
buttonContainer.appendChild(buttonErase);

// Clear button
let buttonClear = document.createElement("button");
buttonClear.setAttribute("id", "button-clear");
buttonClear.classList.add("action-button");
buttonClear.textContent = "Clear";
buttonContainer.appendChild(buttonClear);

// Create grid container
let gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
body.appendChild(gridContainer);

// Create grid 16x16
makeGrid(16);

// Hover effect
gridContainer.addEventListener('mouseover', handleHover);

// Click button events
buttonContainer.addEventListener('click', handleButtonClick);

function handleHover(event) {
    let target = event.target;
    target.classList.add("change-color");
}

function handleButtonClick(event) {
    let target = event.target;
    switch (target.id) {
        case "button-resize":
            let size = prompt("Enter preferred size of grid: ");
            while (size < 1 || size > 100) {
                size = prompt("Enter preferred size of grid: ");
            }
            makeGrid(size);
            break;
        case "button-clear":
            clearGrid();
            break;
        case "button-erase":
            enableErase();
            break;
    }
}

function makeGrid(dimension) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    for (let i = 0; i < dimension; i++) {
        let row = document.createElement("div");
        row.classList.add("grid-row");
        row.setAttribute("id", `row-${i+1}`);
        gridContainer.appendChild(row);

        for (let j = 0; j < dimension; j++) {
            let box = document.createElement("div");
            box.classList.add("grid-box");
            box.setAttribute("id", `box-${dimension * i + j + 1}`);
            row.appendChild(box);
        }
    }
}

function clearGrid() {
    let colorBoxes = document.querySelectorAll(".change-color");
    for (let i = 0, len = colorBoxes.length; i < len; i++) {
        colorBoxes.item(i).classList.remove("change-color");
    }
}

function enableErase() {
    let mouseIsDown = false;
    function mouseDown() {
        mouseIsDown = true;
    }
    function mouseUp() {
        mouseIsDown = false;
    }
    function mouseMoving(event) {
        if (mouseIsDown) {
            let target = event.target;
        target.classList.remove("change-color");
        }
    }
    gridContainer.removeEventListener('mouseover', handleHover);
    document.addEventListener('keydown', (event) => {
        if (event.key == "Escape") {
            gridContainer.removeEventListener('mousedown', mouseDown);
            gridContainer.removeEventListener('mouseup', mouseUp);
            gridContainer.removeEventListener('onmousemove', mouseMoving);
            gridContainer.addEventListener('mouseover', handleHover);
            return false;
        }
    })
    gridContainer.addEventListener('mousedown', mouseDown);
    gridContainer.addEventListener('mouseup', mouseUp);
    gridContainer.addEventListener('mousemove', mouseMoving);
}
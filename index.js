const container = document.querySelector(".container");
const resizeButton = document.querySelector("#resize");

function createGrid(size) {
  container.innerHTML = "";
  for (let i = 0; i < size ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "black";
    });
    container.appendChild(square);
  }
}

resizeButton.addEventListener("click", () => {
    createGrid(16);
});

createGrid(16);
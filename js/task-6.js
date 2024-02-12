function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createDivs() {
  divBoxes.innerHTML = "";
  for (let i = 1; i <= +numberOfBoxes.value; i++) {
    const divs = document.createElement("div");
    divs.style.backgroundColor = getRandomHexColor();
    divs.style.height = 20 + 10 * i + "px";
    divs.style.width = 20 + 10 * i + "px";
    divBoxes.append(divs);
  }
  numberOfBoxes.value = "";
}

const divBoxes = document.getElementById("boxes");
const numberOfBoxes = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const creatingFoo = (event) => {
  if (+numberOfBoxes.value >= 1 && +numberOfBoxes.value <= 100) {
    createDivs();
  }
};

const removingFoo = (event) => {
  divBoxes.innerHTML = "";
};

createBtn.addEventListener("click", creatingFoo);
destroyBtn.addEventListener("click", removingFoo);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function creatinfOfDivs() {
  for (let i = 1; i <= numberOfBoxes.value; i++) {
    const divs = document.createElement("div");
    divs.classList.add("data-new");
    divs.style.backgroundColor = getRandomHexColor();
    divs.style.height = 20 + 10 * i + "px";
    divs.style.width = 20 + 10 * i + "px";
    divBoxes.append(divs);
  }
}
const divBoxes = document.getElementById("boxes");
const numberOfBoxes = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const creatingFoo = (event) => {
  if (numberOfBoxes.value <= 100) {
    creatinfOfDivs();
  }
};

const removingFoo = (event) => {
  const boxesToRemove = divBoxes.getElementsByClassName("data-new");
  const boxesToRemoveArray = Array.from(boxesToRemove);
  boxesToRemoveArray.forEach(function (element) {
    element.remove();
  });
};

createBtn.addEventListener("click", creatingFoo);
destroyBtn.addEventListener("click", removingFoo);

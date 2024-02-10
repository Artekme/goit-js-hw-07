function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

const hendleClick = (event) => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.style.color = randomColor;
  return;
};

button.addEventListener("click", hendleClick);

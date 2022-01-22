function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');

let initialBoxWidth = 20;
let initialBoxHeight = 20;

const createBoxes = (amount) => {
  for (let i = 0; i < inputNumber.value; i += 1) {
    const divBoxesNew = document.createElement('div');
    divBoxesNew.style.width = `${ initialBoxWidth += 10 }px`;
    divBoxesNew.style.height = `${initialBoxHeight += 10}px`;
    divBoxesNew.style.backgroundColor = getRandomHexColor();
    console.log(divBoxesNew);
    divBoxes.append(divBoxesNew);
  }
}

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", () => {
  divBoxes.innerHTML = "";
  inputNumber.value = "";
});
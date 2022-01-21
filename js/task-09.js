function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonChangeColor = document.querySelector(".change-color");
const bodyChangeColor = document.querySelector('body');
const titleChangeColor = document.querySelector('.color');

buttonChangeColor.addEventListener('click', (event) => {
bodyChangeColor.style.backgroundColor = getRandomHexColor(event);
 
titleChangeColor.textContent = getRandomHexColor(event);
  
console.log(bodyChangeColor);
});
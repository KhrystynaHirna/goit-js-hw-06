
let counterValue = 0;
const step = 1;

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counterValues = document.querySelector("#value");


buttonDecrement.addEventListener('click', () => {
    counterValue -= step;
    console.log(counterValue);
});
 
buttonIncrement.addEventListener('click', () => {
     counterValue += step;
     console.log(counterValue);
});



// const updateCounterValues = function () {
//     counterValues.textContent = this.counterValue;
// }

counterValues.addEventListener( () => {
    buttonDecrement.bind(counterValue);

});


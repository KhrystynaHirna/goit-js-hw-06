
let counterValue = 0; 
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counterValues = document.querySelector("#value");

buttonDecrement.addEventListener('click', onButtonDecrement => {
    for (let i = 0; i = 'click'; i += 1) {

        counterValue += i;
    }
});

function onButtonDecrement(event) {
console.log(event);
counterValue -= 1;  
}
console.log(counterValue);


// buttonIncrement.addEventListener('click', event => {

// console.log(event);
// counterValue += 1;

// });

// console.log(counterValue);
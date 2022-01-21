
let counterValue = 0;
let step = 1;

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counterValues = document.querySelector("#value");


buttonDecrement.addEventListener('click', (event) => {
    counterValue -= step;
    counterValues.textContent = event.target.value;
    console.log(counterValue);

});
 
buttonIncrement.addEventListener('click', (event) => {
    counterValue += step;
    counterValues.textContent = event.target.value;
     console.log(counterValue);
    
});


// CounterPlugin.prototipe.updateCounterValue = function () {
//      counterValues.textContent = counterValue;
// }

// CounterPlugin.prototipe.buttonDecrement = function () {
//      counterValue -= step;
// }

// CounterPlugin.prototipe.buttonIncrement = function () {
//     counterValue += step;
// }

// const updateCounterValues = function () {
//     counterValues.textContent = buttonDecrement.bind(counterValue);
// }

// function showTargets(counterValues) {
//     console.log("div target", counterValues.target);

// }
// counterValues.addEventListener( () => {
//     buttonDecrement.bind(counterValue);

// });


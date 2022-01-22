
let initialCounterValue = 0;
let step = 1;

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counterValueUpdate = document.querySelector("#value");


buttonDecrement.addEventListener('click', (event) => {
  
    initialCounterValue -= step;
    event.currentTarget.value = initialCounterValue;
 
    counterValueUpdate.textContent = event.currentTarget.value;

    console.log(counterValueUpdate);
});
 

buttonIncrement.addEventListener('click', (event) => {
  
    initialCounterValue += step;
    event.currentTarget.value = initialCounterValue;
 
    counterValueUpdate.textContent = event.currentTarget.value;

    console.log(counterValueUpdate);
});



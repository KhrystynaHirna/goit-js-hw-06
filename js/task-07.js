const inputRange = document.querySelector("#font-size-control");
const inputTextSize = document.querySelector("#text");

inputRange.addEventListener('input', (event) => {
    inputTextSize.style.fontSize = `${event.currentTarget.value}px`;
});
     
 


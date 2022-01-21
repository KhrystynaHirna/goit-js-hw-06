const textInput = document.querySelector("#validation-input");


textInput.addEventListener ('blur', (event) => {
    event.target.value.length === Number(textInput.dataset.length)
        ? textInput.setAttribute('class', 'valid')
        : textInput.setAttribute('class', 'invalid');
    
    console.log(textInput.value.length);
    console.log(textInput);
});


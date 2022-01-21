const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    let value = event.currentTarget.value;
    
    if (output.textContent = value) {
        return value;
   } 
    else {
    return output.textContent = "Anonymous";
}
});




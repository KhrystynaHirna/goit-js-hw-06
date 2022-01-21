const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "") {
     return alert('please fill the form');
    }
    
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
});


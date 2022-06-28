function handlePassword() {

    let password = document.getElementById("password")
    let passwordConfirm = document.getElementById("passwordConfirm")

    password.addEventListener('keyup', function() {
        if (password.value.length < 6) {
            password.classList.add("is-invalid");
        } else {
            password.classList.remove("is-invalid");
        }
    })

    passwordConfirm.addEventListener('keyup', function() {
        if (passwordConfirm.value.length < 6 && password.value === passwordConfirm.value) {
            password.classList.add("is-invalid");
            passwordConfirm.classList.add("is-invalid");
        } else {
            password.classList.remove("is-invalid");
            passwordConfirm.classList.remove("is-invalid");
        }
    })
}

handlePassword();
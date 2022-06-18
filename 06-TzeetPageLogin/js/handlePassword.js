function handlePassword() {

    let password = document.getElementById("password")
    let passwordConfirm = document.getElementById("passwordConfirm")

    password.addEventListener('keyup', function() {
        if (password.value.length < 6) {
            console.log(password.value)
        }
    })
}

handlePassword();
function verifyBtnLogin() {
    
    let inputEmail = document.getElementById("floatingEmail");
    let inputPassword = document.getElementById("floatingPassword");
    let button = document.getElementById("btn-send-login");

    document.addEventListener('keyup', function() {
        if (inputEmail.value.length > 0 && inputPassword.value.length > 0) {
            button.disabled = false;
        }
    });
}

verifyBtnLogin();
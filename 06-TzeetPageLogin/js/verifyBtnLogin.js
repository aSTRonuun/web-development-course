function verifyBtnLogin() {
    
    var inputEmail = document.getElementById("floatingEmail");
    var inputPassword = document.getElementById("floatingPassword");
    var button = document.getElementById("btn-send-login");

    document.addEventListener('keyup', function() {
        if (inputEmail.value.length > 0 && inputPassword.value.length > 0) {
            button.disabled = false;
        }
    });
}

verifyBtnLogin();
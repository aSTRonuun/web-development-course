function verifyBtnSignin() {

    let btnSignin = document.getElementById("btn-signin-send");
    let check = document.getElementById("flexRadioDefault2");

    document.addEventListener("change", function() {
        if (check.checked) {
            btnSignin.disabled = true;
        } else {
            btnSignin.disabled = false;
        }
    })

}


verifyBtnSignin();
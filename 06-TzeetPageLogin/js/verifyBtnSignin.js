function verifyBtnSignin() {

    var btnSignin = document.getElementById("btn-signin-send");
    var check = document.getElementById("flexRadioDefault2");

    console.log(btnSignin);
    console.log(check);

    document.addEventListener("change", function() {
        if (check.checked) {
            btnSignin.disabled = true;
        } else {
            btnSignin.disabled = false;
        }
    })

}


verifyBtnSignin();
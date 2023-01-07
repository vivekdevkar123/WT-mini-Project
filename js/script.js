function myFunction() {
    var at = document.getElementById("email").value.indexOf("@");
    var fname = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var add = document.getElementById("address").value;
    submitOK = "true";

    if (fname.length < 6) {
        document.getElementById("final").innerHTML = "Name leangth is less than 6";
        submitOK = "false";
    }

    if (pass.length < 6) {
        document.getElementById("final").innerHTML = "Password leangth is less than 6";
        submitOK = "false";
    }

    let num = 0;
    let spe = 0;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    for (let i = 0; i < pass.length; i++) {
        if (Number.isInteger(pass[i])) {
            num += 1;
        }
        else if (format.test(pass[i])) {
            spe += 1;
        }

    }
    if (spe == 0) {
        document.getElementById("final").innerHTML = "Password should contain charector and numbers" + spe;
        submitOK = "false";

    }

    if (phone.length != 10) {
        document.getElementById("final").innerHTML = "Mobile number is of 10 digits";
        submitOK = "false";
    }
    if (add.length == 0) {
        document.getElementById("final").innerHTML = "Write some address";
        submitOK = "false";
    }

    if (submitOK == "false") {
        return false;
    }
    else {
        document.getElementById("final").innerHTML += "Form is valid";
    }
}
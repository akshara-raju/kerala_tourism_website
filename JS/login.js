let mail = document.getElementById("mail");
let pwd = document.getElementById("pwd");
let Check1 = document.getElementById("Check1");

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("check1");


let regexpmail= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
let regexppwd= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;;

function mailValidation() {
    if(regexpmail.test(mail.value)){
        return passValidation();
    }

    else {
        error1.innerHTML = "Invalid mail";
        error1.style.color = "red";
        return false;
    }

}

function passValidation() {
    if (regexppwd.test(pwd.value)){
        return true;
    }

    else {
        error2.innerHTML = "wrong password";
        error2.style.color = "red";
        return false;
    }
}


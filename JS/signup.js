let username = document.getElementById("username");
let num = document.getElementById("num");
let mail = document.getElementById("mail");
let pwd1 = document.getElementById("pwd1");
let pwd2 = document.getElementById("pwd2");
let Check1 = document.getElementById("Check1");




let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");
let error5 = document.getElementById("error5");
let error6 = document.getElementById("error6");

// username
let regexpname= /^([A-Za-z0-9\._]+)$/;
// number
let regexpnum1= /^([0-9]{10})$/;
let regexpnum2= /^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/;
let regexpnum3= /^([0-9]{3}).([0-9]{3}).([0-9]{4})$/;
let regexpnum4= /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/;
// mail
let regexpemail= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
// password
let regexppwd= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
// password Strength 
let regexpStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{12,}$/;
let regexpMedium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/;
let regexpEnough = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

// username validation

function nameValidation() {
        if (regexpname.test(username.value)){
            error1.innerHTML="valid username";
            error1.style.color="green";
            return numValidation();
        }
    
        else {
            error1.innerHTML="username can have include A-Z , a-z , 0-9 , _ , and . only ";
            error1.style.color="red";
            return false;
        }
    }


// phone number validation
function numValidation() {
    if(regexpnum1.test(num.value) || regexpnum2.test(num.value) ||  regexpnum3.test(num.value) || regexpnum4.test(num.value) ){
        error2.innerHTML = "valid phone number";
        error2.style.color = "green";
        return mailValidation() ;
        }

    else {
        error2.innerHTML = "Accepted formats are: XXXXXXXXXX, XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX";
        error2.style.color = "red";
        return false;

    }    
}

// mail validation

function mailValidation()   {
    if(regexpemail.test(mail.value))
    {
        error3.innerHTML = "valid mail-id";
        error3.style.color = "green";
        return passValidation();
    }

    else {
        error3.innerHTML = "invalid mail-id";
        error3.style.color = "red";
        return false;
    }
}


function passValidation() {
    if(regexppwd.test(pwd1.value))
    {
        error4.innerHTML = "valid password";
        error4.style.color = "green";
        return passStrength();
    }

    else {
        error4.innerHTML = "must include: minimum 8 characters, atleast one uppercase, and one lower case, must contain atleast one number";
        error4.style.color = "red";
        return false;
    }
}

function passStrength() {
    if(regexpStrong.test(pwd1.value))
    {
        error4.innerHTML = "strong password";
        error4.style.color = "green";
        return passConfirm();

    }

    if(regexpMedium.test(pwd1.value))
    {
        error4.innerHTML = "medium strong password";
        error4.style.color = "yellow";
        return passConfirm();

    }

    if(regexpEnough.test(pwd1.value))
    {
        error4.innerHTML = "poor strength for password";
        error4.style.color = "orange";
        return passConfirm();

    }

    else {
        error4.innerHTML = "weak password";
        error4.style.color = "red";
        return false;
    }
    
}

function passConfirm() {
    if(pwd1.value == pwd2.value){
        error5.innerHTML = "password confirmed";
        error5.style.color = "green";
        return checkBox();
    }

    else {
        error5.innerHTML = "wrong password";
        error5.style.color = "red";
        return false;


    }
    
}

function checkBox() {
    if(Check1.checked ==1)
    {
        return true;
    }

    else{
  
        error6.innerHTML="Accept the terms of services.";
        error6.style.color="red";
        
        return false;
    
         }

    
}
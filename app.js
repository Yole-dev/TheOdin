//password validation script
const firstError = document.querySelector('.error1').vlaue;
const secondError = document.querySelector('.error2').value;
const firstMessage = document.querySelector('.message1');
const secondMessage = document.querySelector('.message2');

//for check empty passsword field
if(firstError=="") {
    firstMessage.innerHTML= "**Fill the password please!";
    return false;
}

if(secondError=="") {
    secondMessage.innerHTML= "**Enter the password please!";
    return false;
}

//maximum length of password validation
if(firstError.length<8) {
    firstMessage.innerHTML= "**Password length must be atleast 8 characters";
    return false;
}

if(firstError.length>15) {
    firstMessage.innerHTML= "**Password length not exceed 15 characters";
    return false;
}

//confirm password validation
if(secondError != firstError) {
    secondMessage.innerHTML= "**Passwords are not identical";
    return false;
} else {
    secondMessage.innerHTML= "Password confirmed";
    secondMessage.style.color = 'green';
}
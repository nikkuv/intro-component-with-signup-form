const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const firstName = document.querySelector('.firstname').value;
    const lastName = document.querySelector('.lastname').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;

    if(firstName === ''){
        addError("firstname", "firstname can't be empty");
    }else{
        removeError("firstname");
    }

    if(lastName === ''){
        addError("lastname", "lastname can't be empty");
    }else{
        removeError("lastname");
    }

    if(email === ''){
        addError("email", "email can't be empty");
    }
    else if(!validateEmail(email)){
        addError("email", "looks like email isn't valid");
    }
    else{
        removeError("email");
    }

    if(password === ''){
        addError("password", "password can't be empty");
    }else{
        removeError("password");
    }
});

function addError(field, msg){
    const selectForm = document.querySelector("."+field).parentNode;
    selectForm.classList.add('error');

    const errorMsg = document.querySelector('.error-msg');
    errorMsg.innerHTML =  msg;
    
}

function removeError(field){
    const selectForm = document.querySelector("."+field).parentNode;
    selectForm.classList.remove('error');
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
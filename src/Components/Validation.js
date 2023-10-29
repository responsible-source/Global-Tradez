

function Validation(inputValue){
    let error={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*a-z)(?=.*A-Z)[A-Za-z0-9]{8,}/


    if(inputValue.email === ''){
        error.email= 'Email should not be empty'
    }

    if(!email_pattern.test(inputValue.email)){
        error.email= "Email Didn't match"
    }

    if(inputValue.password === ""){
        error.password = "Password shouldn't be empty"
    }

    if(!password_pattern.test(inputValue.password)){
        error.password = "Password Didn't Match" 
    }

    else{
        return error;
    }
}

export default Validation
export const nameValidation = (userName) => {
    const nameRegixExpression = /^[a-z0-9_-]{3,16}$/
    if(nameRegixExpression.test(userName)){
        return true
    }else{
        return false
    }
}

export const isValidPassword =(passwordCapture) => {
    const passwordRegixExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/
        if(passwordRegixExpression.test(passwordCapture)){
            return true
        } else {
           return false
        }
}

export const isValidemail  =(emailCapture) => {
    const emailRegixExpression = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i ;
    if((emailRegixExpression.test(emailCapture)) ){
        return true
    }else{
        return false
    }
}
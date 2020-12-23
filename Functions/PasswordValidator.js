function passwordValidator(password) {
    function length(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return "Password must be between 6 and 10 characters";
            
        }
    }

    function chars(password) {
        let isValidPass = true;
        for (let i = 0; i < password.length; i++) {
            let isValid = true;
            let code = password[i].charCodeAt(0);
            if (code >= 65 && code <= 90 ||
                code >= 97 && code <= 122 ||
                code >= 48 && code <= 57) {
                isValid = true;
            } else {
                isValid = false;
                isValidPass = false;
                break;
            }
        }
        return isValidPass ? true : "Password must consist only of letters and digits";
    }

    function digits(password) {
        let digits = 0;
        for (let i = 0; i < password.length; i++) {
            let code = password[i].charCodeAt(0);
            if (code >= 48 && code <= 57) {
                digits++
            }
        }
        return digits >= 2 ? true : "Password must have at least 2 digits";
    }
    let result = [];
    if (length(password) !== true) {
        result.push(length(password));
    } if (chars(password) !== true) {
        result.push(chars(password));
    } if (digits(password !== true)) {
        result.push(digits(password));
    } if (length(password)=== true &&chars(password) === true &&digits(password)=== true ) {
        result.push('Password is valid.')
    }
    return result.join('\n');
}
console.log(passwordValidator('logIn'));

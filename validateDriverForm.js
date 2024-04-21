const checkPhone = (value, pattern) => {
    if(value.trim()) {
        if(pattern.test(value)) return undefined;
        else return 'Please enter correct input format';
    }
    
    else return 'Please enter this input';
}

const checkLicense = value => {
    let licenseType = [];
    let arr = document.querySelector('#license-type').children;
    for(let i = 0; i < arr.length; i++) {
        licenseType.push(arr[i].value);
    }

    if(value.trim()) {
        if(licenseType.some(type => type == value)) return undefined;
        else return 'Please choose one of types below';
    }
    
    else return 'Please enter this input';
}

const checkAge = value => {
    let minAge = document.querySelector('#age').min;
    let maxAge = document.querySelector('#age').max;

    if(value.trim()) {
        if(value >= minAge) {
            if(value > maxAge) return 'The driver is too old. Maximum is 60';
            else return undefined;
        }
        else return 'The driver is too young. Minimum is 18';
    }
    else return 'Please enter this input';
}

var age = document.querySelector('#age');
age.onblur = () => {
    let message = checkAge(age.value);
    showMessage(age, message);
}


var licenseType = document.querySelector('#licenseType');
licenseType.onblur = () => {
    let message = checkLicense(licenseType.value);
    showMessage(licenseType, message);
}

var phone = document.querySelector('#phone'); 
phone.onblur = () => {
    let message = checkPhone(phone.value, /[0-9]{3}-[0-9]{3}-[0-9]{4}/);
    showMessage(phone, message);
}
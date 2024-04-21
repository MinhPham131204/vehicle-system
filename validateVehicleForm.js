const checkFormat = (value, pattern) => {
    if(value.trim()) {
        if(pattern.test(value)) return undefined;
        else return 'Please enter correct input format';
    }
    
    else return 'Please enter this input';
}

const checkTruckType = value => {
    let truckType = [];
    let arr = document.querySelector('#truck-type').children;
    for(let i = 0; i < arr.length; i++) {
        truckType.push(arr[i].value);
    }

    if(value.trim()) {
        if(truckType.some(type => type == value)) return undefined;
        else return 'Please choose one of types below';
    }
    
    else return 'Please enter this input';
}

const checkPayload = value => {
    let minPayload = document.querySelector('#payload').min;

    if(value.trim()) {
        if(value >= minPayload) return undefined;
        else return 'The payload is under 200kg. Please enter right payload';
    }
    
    else return 'Please enter this input';
}

function showMessage(item, message) {
    if(message) {
        item.parentElement.querySelector('.form-message').innerText = message;
        item.parentElement.classList.add('invalid');
    }
    else {
        item.parentElement.querySelector('.form-message').innerText = '';
        item.parentElement.classList.remove('invalid');
    }
}

var licensePlate = document.querySelector('#licensePlate'); 
licensePlate.onblur = () => {
    let message = checkFormat(licensePlate.value, /[0-9]{3}-[0-9]{3}-[0-9]{3}/);
    showMessage(licensePlate, message);
}

var typeOfTruck = document.querySelector('#truck');
typeOfTruck.onblur = () => {
    let message = checkTruckType(typeOfTruck.value);
    showMessage(typeOfTruck, message);
}

var payload = document.querySelector('#payload');
payload.onblur = () => {
    let message = checkPayload(payload.value);
    showMessage(payload, message);
}
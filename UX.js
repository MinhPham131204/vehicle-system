var mainElement = document.querySelector('main'); 

// display element
const displayBox = (parentElement, childElement) => {
    let directChildren = parentElement.children;

    for (let i = 0; i < directChildren.length; i++) {
        let child = directChildren[i];
        if (child.id === childElement) {
            document.getElementById(child.id).style.display = "block";
        }
        else document.getElementById(child.id).style.display = "none";
    }
}

// create table from vehicle info
function generateTableFromVehicle() {  
    let table = '<table>';  
    table += `<tr>
                <th>ID</th>
                <th>License Plate</th>
                <th>Type</th>
                <th>Payload</th>
                <th>Status</th>
                <th>Available in garage</th>
            </tr>`;  
    vehicles.forEach(item => {  
        if(item.available == 'Yes') {
            table += `<tr style='background-color:rgb(0, 255, 0)'>
                    <td>${item.id}</td>
                    <td>${item.licensePlate}</td>
                    <td>${item.type}</td>
                    <td>${item.payload}</td>
                    <td>${item.status}</td>
                    <td>${item.available}</td>
                </tr>`;  
        }
        else {
            table += `<tr style='background-color:rgb(255, 60, 60)'>
                    <td>${item.id}</td>
                    <td>${item.licensePlate}</td>
                    <td>${item.type}</td>
                    <td>${item.payload}</td>
                    <td>${item.status}</td>
                    <td>${item.available}</td>
                </tr>`;  
        }
    });
    table += '</table>';  
    return table;  
}

// action after clicking vehicle management button
document.getElementById("vehicle").addEventListener('click', () => displayBox(mainElement, 'vehicle-list'));

var vehicleButton = document.querySelector('#vehicle-show');

const showVehicleList = () => {
    document.getElementById("show-vehicle-list").innerHTML = generateTableFromVehicle();
    displayBox(vehicleButton, 'show-vehicle-list');
}

const addVehicle = () => {
    displayBox(vehicleButton, 'vehicle-form');
}

// create table from driver info
function generateTableFromDriver() {  
    let table = '<table>';  
    table += `<tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>License Type</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Status</th>
            </tr>`;  
    drivers.forEach(item => {  
        if(item.status == 'Ready'){
            table += `<tr style='background-color: rgb(0, 255, 0)'>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.licenseType}</td>
                    <td>${item.phone}</td>
                    <td>${item.address}</td>
                    <td>${item.status}</td>
                </tr>`;  
        }
        
        else{
            table += `<tr style='background-color: rgb(255, 60, 60)'>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.licenseType}</td>
                    <td>${item.phone}</td>
                    <td>${item.address}</td>
                    <td>${item.status}</td>
                </tr>`;  
        }
    });  
    table += '</table>';  
    return table;  
}  

// action after clicking driver management button
document.getElementById("driver").addEventListener('click', () => displayBox(mainElement, 'driver-list'));

var driverButton = document.querySelector('#driver-show');

const showDriverList = () => {
    document.getElementById("show-driver-list").innerHTML = generateTableFromDriver();
    displayBox(driverButton, 'show-driver-list');
}

const addDriver = () => {
    displayBox(driverButton, 'driver-form');
}

// create table from trip info
function generateTableFromTrip(data) {  
    let table = '<table>';  
    table += `<tr>
                <th>Route</th>
                <th>Driver</th>
                <th>License Plate of vehicle</th>
                <th>Estimated Cost</th>
                <th>Departure Time</th>
                <th>Expected Arrival Time</th>
                <th>Date</th>
                <th>Status</th>
            </tr>`;  
    let temp = item => {
        let tmp = `<td>${item.route}</td>
                    <td>${item.driver}</td>
                    <td>${item.vehicle}</td>
                    <td>${item.estimatedCost}</td>
                    <td>${item.departureTime}</td>
                    <td>${item.expectedArrivalTime}</td>
                    <td>${item.date}</td>
                    <td>${item.status}</td>`;
        return tmp;
    }
    data.forEach(item => {  
        if(item.status === 'Completed') {
            table += `<tr style='background-color: rgb(0, 255, 0)'>`
            table += temp(item);
            table += `</tr>`
        }
        else if(item.status === 'In progress'){
            table += `<tr style='background-color: pink'>`
            table += temp(item);
            table += `</tr>`
        }
        else {
            table += `<tr>`
            table += temp(item);
            table += `</tr>`
        }
    });  
    table += '</table>';  
    return table;  
}

// action after clicking trip management button
document.getElementById("show-trip-list").addEventListener('click', () => displayBox(mainElement, 'trip-list'));

var tripButton = document.querySelector('.trip');
const showAllTrip = () => {
    displayBox(tripButton, 'all-trip');
    document.getElementById("all-trip").innerHTML = generateTableFromTrip(trips);
};

const completeTrip = trips.filter(trip => trip.status.includes('Completed'));
const inProgressTrip = trips.filter(trip => trip.status.includes('In progress'));
const scheduleTrip = trips.filter(trip => trip.status.includes('Scheduled'));

const showCompleteTrip = () => {
    displayBox(tripButton, 'complete-trip');
    document.getElementById("complete-trip").innerHTML = generateTableFromTrip(completeTrip);
};

const showInProgressTrip = () => {
    displayBox(tripButton, 'progress-trip');
    document.getElementById("progress-trip").innerHTML = generateTableFromTrip(inProgressTrip);
};

const showScheduleTrip = () => {
    displayBox(tripButton, 'schedule-trip');
    document.getElementById("schedule-trip").innerHTML = generateTableFromTrip(scheduleTrip);
};

const addTrip = () => displayBox(mainElement, "trip-form");

// create ready driver list
const readyDriverList = document.getElementById('ready-driver');
for(let i in drivers) {
    if(drivers[i].status == 'Ready') {
        let option = document.createElement('option');
        option.value = drivers[i].name;
        readyDriverList.appendChild(option);
    }
}

// create ready vehicle list
const readyVehicleList = document.getElementById('ready-vehicle');
for(let i in vehicles) {
    if(vehicles[i].available == 'Yes') {
        let option = document.createElement('option');
        option.value = vehicles[i].licensePlate;
        readyVehicleList.appendChild(option);
    }
}

// action after clicking history button
document.getElementById('history').addEventListener('click', () => displayBox(mainElement, 'history-list'));

// create option in datalist history
const list = document.getElementById('driving-history');
drivers.forEach(driver => {
    let option = document.createElement('option');
    option.value = driver.name;
    list.appendChild(option);
})

document.getElementById('search-history').addEventListener('click', () => {
    let name = document.getElementById('driver-history').value;
    let table = '<table>';  
    table += `<tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>License Type</th>
            <th>Phone</th>
            <th>Address</th>
        </tr>`;
    let info = drivers.find(driver => driver.name == name);
    
    table += `<tr>
                    <td>${info.id}</td>
                    <td>${info.name}</td>
                    <td>${info.age}</td>
                    <td>${info.licenseType}</td>
                    <td>${info.phone}</td>
                    <td>${info.address}</td>
                </tr>`;  

    table += `</table>`;

    document.getElementById('driver-info').innerHTML = "Driver Info";
    document.getElementById('show-info').innerHTML = table;
    
    let history = `<table>`;  
    history += `<tr>
                <th>Route</th>
                <th>Driver</th>
                <th>License Plate of vehicle</th>
                <th>Estimated Cost</th>
                <th>Departure Time</th>
                <th>Expected Arrival Time</th>
                <th>Date</th>
            </tr>`;  

    const drivingHistory = completeTrip.filter(trip => trip.driver.includes(name));

    drivingHistory.forEach(item => {
        history += `<tr>
                    <td>${item.route}</td>
                    <td>${item.driver}</td>
                    <td>${item.vehicle}</td>
                    <td>${item.estimatedCost}</td>
                    <td>${item.departureTime}</td>
                    <td>${item.expectedArrivalTime}</td>
                    <td>${item.date}</td>
                </tr>`;
    })

    history += `</table>`;

    document.getElementById('show-text').innerHTML = "Driving History";
    document.getElementById('show-drivingHistory').innerHTML = history;
});
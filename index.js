const drivers=['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function firstTwoDrivers(driversList){
    let myDrivers =[drivers.slice(0,2)];
    return firstTwoDrivers(myDrivers);
}
const returnLastTwoDrivers = function lastTwoDrivers(driversList) {
     let otherDrivers=[drivers.slice(drivers.length-2)]
     return lastTwoDrivers(otherDrivers);
}
const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(fare=3){
        return fare *integer;
    }
}

const fareDoubler= function (fare) {
    return createFareMultiplier(2)(fare);
}
const fareTripler= function (fare) {
    return createFareMultiplier(3)(fare);
    
}

function selectDifferentDrivers(driversList,func) {
    return func(driversList);
}
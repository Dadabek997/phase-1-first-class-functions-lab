const returnFirstTwoDrivers = () => ['Antonia','Nuru']

const returnLastTwoDrivers = () => ['Amari','Mo']

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
let firstElement = selectingDrivers[0]
let secondElement = selectingDrivers[1]

const createFareMultiplier = function(num1){
    return function (num2){
        return num1 * num2
    }
}

const fareDoubler = createFareMultiplier (2)

const fareTripler = createFareMultiplier (3)

function selectDifferentDrivers(driversArray, fn){
    return fn(driversArray)
}
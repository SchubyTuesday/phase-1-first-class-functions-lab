// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
    let newArr = [arr[0], arr[1]]
    return newArr
} 

function  returnLastTwoDrivers(arr) {
    let newArr = [arr[arr.length - 2], arr[arr.length - 1]]
    return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(mult) {
    return function (fare) {
        return mult*fare
    }
}

function fareDoubler(fare) {
    return fare*2
}

function fareTripler(fare) {
    return fare*3
}

function selectDifferentDrivers(arr, callback) {
    return callback(arr)
}
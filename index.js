// Code your solution in this file!

//returnFirstTwoDrivers
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function([named1, named2, named3, named4]){
    return [ named1, named2];
}
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

//returnLastTwoDrivers

const returnLastTwoDrivers = function([named1, named2, named3, named4]){
    return [ named3, named4];
}
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

//selectingDrivers

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

console.log(selectingDrivers)
//createFareMultiplier

function createFareMultiplier(integer){
    return function(fare){
        return fare * integer;
    };
}

const fareMultiplier = createFareMultiplier(4);

console.log(fareMultiplier(400));
//fareDoubler

function fareDoubler(num) {
    //const doubler = fareMultiplier(num);
        return num * 2;
    
}
 console.log(fareDoubler(4));

 //fareTripler

 function fareTripler(fare){
    return fare*3;
 }
console.log(fareTripler(90));

//selectDifferentDrivers

function selectDifferentDrivers(arrayOfDrivers, functio){
    if(functio === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    } else{
        return returnLastTwoDrivers(arrayOfDrivers);
    }

}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
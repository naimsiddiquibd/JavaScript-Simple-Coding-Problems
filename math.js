// Negative to positive
const myNumber = -5;
const convirtPositive = Math.abs(myNumber);
console.log(convirtPositive);

// Bring a floating number top
const myNumber2 = 21.34545;
const itsTopNumber = Math.ceil(myNumber2);
console.log(itsTopNumber);

// Bring a floating number down
const myNumber3 = 21.34545;
const itsDownNumber = Math.floor(myNumber3);
console.log(itsDownNumber);

// Bring a float number to a nearest integer
const myNumber4 = 21.64;
const nearestIntegerNumber = Math.round(myNumber4);
console.log(nearestIntegerNumber);

// Get a random number from 0 to 1
const randomNumber = Math.random();
console.log(randomNumber);

// Get a random number from 0 to 10
const randomNumber0to10 = Math.random() * 10;
console.log(randomNumber0to10);

// Get a random number from 0 to 15 integers
const randomNumber0to15 = Math.random() * 15;
const integerRandomNumber0to15 = Math.round(randomNumber0to15);
console.log(integerRandomNumber0to15);

// Get a random number from 0 to 20 integers suing For Loop
for (i = 0; i<20; i++){
    const randomNumber0to20 = Math.random() * 20;
    const integerRandomNumber0to20 = Math.round(randomNumber0to20);
    console.log(integerRandomNumber0to20);
}
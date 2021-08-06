// Find max number (compare 2)
const business = 320;
const minister = 290;
if (business > minister){
    console.log("business is big");
}
else{
    console.log("minister is big");
}

// Find max number (compare 3)
const ceo = 320;
const manager = 290;
const owner = 380;
if (ceo>manager && ceo>owner){
    console.log("ceo is big");
}
else if(manager>ceo && manager>owner){
    console.log("manager is big");
}
else{
    console.log("owner is big");
}

// Find max number using Math (compare 3)
const engineer = 400;
const doctor = 390;
const lawer = 380;
var maxProfession = Math.max(engineer, doctor, lawer);
console.log('larger is', maxProfession);

// Find max number using Function (compare 2)
function findLargerNumber(first, second){
    if (first>second){
        return first;
    }
    else{
        return second;
    }
}
var result = findLargerNumber(12,54);
console.log(result);

// Find max number using Function (compare 3)
function findLargerNumberIn3(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if( num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}
var maxResult = findLargerNumberIn3(2,5,7);
console.log(maxResult);

// Find min number using Function (compare 3)
function findMinimumNumberIn3(numb1,numb2,numb3){
    if(numb1<numb2 && numb1<numb3){
        return numb1;
    }
    else if( numb2 < numb1 && numb2 < numb3){
        return numb2;
    }
    else{
        return numb3;
    }
}
var minResult = findMinimumNumberIn3(2,5,7);
console.log(minResult);
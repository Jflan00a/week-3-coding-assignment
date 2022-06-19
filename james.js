// Question 1
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

//a.
let firstValue = ages.shift()
console.log(firstValue);
let lastValue = ages[ages.length - 1];
console.log(lastValue);
function subSolution(){
    console.log(lastValue - firstValue);
}
subSolution();


//b.
const newAges = [ages.push(4)];
console.log(ages);
lastValue = ages[ages.length -1];
subSolution();
console.log(ages);

//c
function meanAge(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        sum += ages[i]
    }
    console.log({sum});
    let mean = sum / arr.length;
    console.log(mean);
}
meanAge(ages)
//****************************/
//2
//a
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);
let total = 0;
for (let i = 0; i < names.length; i++) {
    total += names[i].length;
}
let average = total / names.length;
console.log(average);
//b
let result = ' ';
for  (let i = 0; i < names.length; i++) {
    result = result.concat(names[i]);
    if (i < names.length - 1) {
        result = result.concat(", ");
    }
}
console.log(result);

//3. and 4. access first and last elements of array for names array

function findElements() {
    let first = names[0];
    let last = names[names.length - 1];
    console.log(first);
    console.log(last);
}
findElements();

//5.
for (let i = 0; i < names.length; i++) {
    console.log(names[i].length);
}
const nameLengths = [3, 5, 3, 5, 4, 3];
//6.
let nameLengthsSum = 0;
for (let i =0; i < nameLengths.length; i++) {
    nameLengthsSum += nameLengths[i];
}
console.log(nameLengthsSum);
//7.
function listWords(word, n) {
    if (n > 0) {
        console.log(word.repeat(n));
}}
listWords("Circle", 4);
//8.
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
let newName = fullName("Kevin", "Flanagan");
console.log(newName);
//9.
function greatSum(array) {
    if (array.sum >= 100) {
        return true;
    } else return false;
};
console.log(greatSum(nameLengths));
//Used the array from question 5 for the input
//10.
function newAverage(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += nameLengths[i]
}
    console.log({sum});
    let mean = sum / arr.length;
    console.log(mean);
    }
newAverage(nameLengths);
//Used array from question 5 again
//11.

//12.
function willBuyDrink (isHotOutside, moneyInPocket) {
    if (moneyInPocket > 10.50 && isHotOutside === true) {
        return true;
    }else {return false};
}
console.log(willBuyDrink(true, 11));

//13.
function dogYears(dogName, age) {
    let years = age * 7;
    console.log(dogName + " is " + years + " years old");
}
let myDog = "Pancake";
dogYears(myDog, 4);
//This function takes the name and years old of my dog, and outputs a sentence
//with my dog's name and age in "dog years"
// 1. Random single digit
let singleDigit = Math.floor(Math.random() * 10);
console.log("Random Single Digit:", singleDigit);

// 2. Dice number between 1 to 6
let dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice Number:", dice);

// 3. Add two random dice numbers
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let diceSum = dice1 + dice2;

console.log("Dice 1:", dice1);
console.log("Dice 2:", dice2);
console.log("Dice Sum:", diceSum);

// 4. Read 5 random 2 digit values, find sum and average
let sum = 0;

for (let i = 1; i <= 5; i++) {
    let num = Math.floor(Math.random() * 90) + 10;
    console.log("Random 2 Digit Number " + i + ":", num);
    sum += num;
}

let average = sum / 5;

console.log("Sum:", sum);
console.log("Average:", average);

// 5a. Unit Conversion: 42 inches = ? feet
let inches = 42;
let feet = inches / 12;
console.log("42 inches in feet:", feet);

// 5b. Rectangular plot 60 feet x 40 feet in meters
let lengthFeet = 60;
let widthFeet = 40;

let lengthMeter = lengthFeet * 0.3048;
let widthMeter = widthFeet * 0.3048;

console.log("Length in meter:", lengthMeter);
console.log("Width in meter:", widthMeter);

// 5c. Area of 25 such plots in acres
let areaOnePlotSqMeter = lengthMeter * widthMeter;
let totalAreaSqMeter = areaOnePlotSqMeter * 25;
let totalAreaAcres = totalAreaSqMeter / 4046.86;

console.log("Area of 25 plots in acres:", totalAreaAcres);

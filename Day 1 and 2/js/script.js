/* let and var hello world 
// let firstName = 'hello world';
// console.log(firstName);
// var firstNamePerson = 'hello world!';

// console.log(firstNamePerson);

// let first_name = 'hello world';
// let first_name = 'hello world!';

*/

/* Data types

// let javascriptIsFun = true;
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Geboss');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1999;
// console.log(typeof yaer);

// console.log(typeof null);

////////////////////
// let, const and var 

// let age = 30;
// age = 31;
// const birthYear = 1991;
// birthYear = 1990;

// const job;
// var job = 'student';
// job = 'programmer';

*/

/* math operator
const now = 2021;
const ageGemechu = now - 1999;
const ageMerobi = now - 2000;
console.log(ageGemechu, ageMerobi);

const firstName = 'Gemechu';
const lastName = 'Hirpassa';
console.log(firstName + ' ' + lastName);
*/

/* Assignment operator
let x = 10 + 5; // x = 10 + 5 = 15 
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);
*/

/* comparision operator
console.log(ageGemechu > ageMerobi);
console.log(ageGemechu >= 18);

const isFullAge = ageGemechu >= 18;
console.log(isFullAge);
console.log(now - 1999 > now - 2000)
*/

/* challange 1 BMI Calculation

// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tall.


const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark  ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = massMark > massJohn;

console.log(BMIJohn, BMIMark, markHigherBMI);

*/

/* Template literals
const firstName = 'Gemechu';
const job = 'Software Engineer';
const birthYear = 1999;
const year = 2022;

const gemechu = " I'm " + firstName + ' a ' + (year - birthYear) + ' year old ' +  job + '!';
console.log(gemechu);

const gemechu2 = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;
console.log(gemechu2);
*/

/* if else

const age = 14;
if (age >= 18) {
    console.log('Congrats! Gemechu is ready for driving a car! 🚙');
} else {
    const yearsLeft = (18 - age);
    console.log(`Unfortunatly Gemechu is too young. wait another ${yearsLeft} years! :)`)
}
*/

/*  Challange 2 BMI Calculation
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall.

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark  ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = massMark > massJohn;

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn} !`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark} !`);
}
*/

/* type conversions and coercion 
// type conversions
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) - 18);

console.log(Number('Gemechu'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am' + 23 + 'years old');
console.log('23' - '10' - 3)
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; 
n = n - 1;
console.log(n);
*/


/* 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Gemechu'));
console.log(Boolean({}))
console.log(Boolean(''))

const money = 0;
if (money) {
    console.log("Don't spend it all;");
} else {
    console.log("you shuld get a job!");
}

let height = 0;
if (height) {
    console.log('YAY! height is defined');
} else {
    console.log('Height is UNDEFINED!');
}
*/

/* Equality operators == or ===
const age = 18;
if (age === 18) console.log('you just become an adult :D(strict)');
if (age == 18) console.log(`you just become an adult (loose)`);
*/

/* const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log(`cool! 23 is an amazing number!`)
} else if (favourite === 7) {
    console.log(`7 is also cool a number`)
} else if (favourite === 9) {
    console.log(` 9 is also cool a number`)
} else {
    console.log(`Number is not 23, 7 or 9`)
}
*/

/* Boolean Operators
const hasDriverLicence = true; //A
const hasGoodVision = true; //B

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);

// if (hasDriverLicence && hasGoodVision) {
//     console.log(`sarah is able to drive!`);
// } else {
//     console.log(`someone else whould drive...`);
// }

const isTired = false; //C
console.log(hasDriverLicence && hasGoodVision && isTired);

if (hasDriverLicence && hasGoodVision) {
    console.log(`sarah is able to drive!`);
} else {
    console.log(`someone else whould drive...`);
}
*/

// Conding challange 3
const DolphinsScore = (96 + 108 + 89);
const koalasScore = (88 + 91 + 110);
console.log(DolphinsScore, koalasScore);

if (DolphinsScore > koalasScore) {
    console.log('Dolphins Score is greater than koalas Score');
} else if (koalasScore > DolphinsScore) {
    console.log('koalas Score is greater than Dolphins Score');
}

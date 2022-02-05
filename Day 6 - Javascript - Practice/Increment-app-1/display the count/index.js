/* Reassigning and incrementing

let count = 5
count = 3
count = 1

// increment 

count = count + 1
count = count + 5
count = count + 10
count = count - 4

console.log(count)


// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

let bonusPoints = 50;
bonusPoints = bonusPoints + 50;
bonusPoints = bonusPoints - 75
bonusPoints = bonusPoints + 45;
console.log(bonusPoints);
*/
/*
function increment() {
    console.log("The button was clicked")
}
*/

/* Display the count

document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase

let countEl = document.getElementById("count-el") // pass in arguments

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
 */

// creat a save button 

/*
let countEl = document.getElementById('count-el')
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}
*/

/*
let message = "You have three new notifications"
console.log(message);



let username = "per"
let message = "You have tree new notifications"
console.log("username + ", " + message + "!" ")

// Create a variable, messageToUser, that contains the message we have logged

let messageToUser = message + ", " + username + "!"
console.log(messageToUser)
*/

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

/* log greetings to console

let name = "Gemechu Taye"
let greetings = "Hey there, my name is "

let myGreetings = greetings + name
console.log(myGreetings);

*/

/* String vs Number
let name = 42
let greeting = "Hi, my name is "
let myGreeting = greeting + name
// console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

console.log(4 + 5) // "9"
console.log("2" + "4") // "24"
console.log("5" + 1) // "51"
console.log(100 + "100") // "100100"
*/

/* render a welcome message
// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let name = "Gemechu Taye"
let greetings = "Welcome Back dear "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = (greetings + name)

////// Improve the message with string concatenation
// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText = welcomeEl.innerText + "👋"
welcomeEl.innerText += "👋"

*/

/*

// create a save feature
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
// set the count to 0
    countEl.textContent = 0
    count = 0
}
*/

/* Debuging online for sfixing spacing

// Google:
// innerText alternative mdn
// use textContent instead of innerText for fixing the spacing issue in alternative way.
*/

/* variable practice

// Create two variables, firstName and lastName

// Concatenate the two variables into a third variable called fullName

// Log fullName to the console

let firstName = "Gemechu "
let lastName = "Taye"
let fullName = firstName + lastName
console.log(fullName);

*/

/* incrementing and decrementing

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points() {
    myPoints += 3
}

function remove1Points() {
    myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()

// Call the functions to that the line below logs out 10
console.log(myPoints)

*/

/* String and Numbers
// Try to predict what each of the lines will log out
console.log("2" + 2) // "22" 
console.log(11 + 7) //  18
console.log(6 + "5") // "65"
console.log("My points: " + 5 + 9) // "My points: 59"
console.log(2 + 2) // 4
console.log("11" + "14") //  "1114"
*/


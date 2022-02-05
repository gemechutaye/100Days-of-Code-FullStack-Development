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

let countEl = document.getElementById('count-el')
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}
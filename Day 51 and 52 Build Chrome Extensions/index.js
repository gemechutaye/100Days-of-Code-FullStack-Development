/*
// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

function saveLead() {
    console.log("Button clicked!")
}
*/


// Refactor to addEventListener
/*

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button clicked from addEventListener")
})
*/


/*
// I Wrote my first addEventListener() 

// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

let box = document.getElementById("box")

box.addEventListener("click", function() {
    console.log("I want to open the box!")
})
*/

/*
// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

let inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function() {
    console.log("Button clicked!")
})
*/


/*
// When to use let and const

// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)
*/


/*
// Pushe the myLeads array[]
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function() {
    myLeads.push("www.awesomelead.com")
    console.log(myLeads)
})
*/

/*
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
*/
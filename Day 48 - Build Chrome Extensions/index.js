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

// I Wrote my first addEventListener() 

// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

let box = document.getElementById("box")

box.addEventListener("click", function() {
    console.log("I want to open the box!")
})


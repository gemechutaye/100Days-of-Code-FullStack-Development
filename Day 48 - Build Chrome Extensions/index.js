/*
// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

function saveLead() {
    console.log("Button clicked!")
}

*/

// Refactor to addEventListener

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button clicked from addEventListener")
})
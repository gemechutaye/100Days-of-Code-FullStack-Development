let password = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passport = "!@#$%^&*()0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let passbook = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
let passlook = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// let letter = ""
let passall = "password" + "passport" + "passbook" + "passlook"
let chars = 12
let pass = []
let num = ""

function Generatepw() {
    let randomNumber = password[Math.floor( Math.random() * passall.length ) ]; 
            for (let i = 0; i < password.length; i++) {
                genPassword1.textContent = randomNumber  
            }
    let randomNumber2 = passport[Math.floor( Math.random() * passall.length ) ]; 
            for (let i = 0; i < passport.length; i++) {
                genPassword2.textContent = randomNumber2   
            }
    let randomNumber3 = passbook[Math.floor( Math.random() * passall.length ) ]; 
            for (let i = 0; i < passbook.length; i++) {
                genPassword3.textContent = randomNumber3   
            }
    let randomNumber4 = passlook[Math.floor( Math.random() * passall.length ) ]; 
            for (let i = 0; i < passlook.length; i++) {
                genPassword4.textContent = randomNumber4   
            }
}
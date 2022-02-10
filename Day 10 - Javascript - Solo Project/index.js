let password = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let chars = 12
let pass = []
let num = ""
// let thePassword = document.getElementById("password")
// var newPassWd = [];
// let genPassword1 = document.getElementById("genPassword1")
// let genPassword1 = document.getElementById("genPassword1")
// let genPassword2 = document.getElementById("genPassword2")
// let genPassword3 = document.getElementById("genPassword3")
// let genPassword4 = document.getElementById("genPassword1")


function Generatepw() {
    let randomNumber = password[Math.floor( Math.random()* password.length ) ] ;
            for (let i = 0; i < password.length; i++) {
                genPassword1.textContent = (password[i])
                document.getElementById("genPassword1").innerHTML = password;
                genPassword1.textContent = randomNumber
            }

}

// function Generatepw() {
//     let genPassword1 = randomPassword()
//     let genPassword2 = randompassword()
//     let genPassword3 = randomPassword()
//     let genPassword4 = randomPassword()
//     pass = [genPassword1, genPassword2, genPassword3, genPassword4]
//     renderPassword()
// }

// function renderPassword() { 
//     password.textContent = pass
//     for (let i = 0; i < password.length; i++)
//     genPassword1.textContent = cards[i]
// }






/*
function renderGame() {
cardsEl.textContent = "Cards: "
for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
}

sumEl.textContent = "Sum: " + sum
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}
messageEl.textContent = message
}
*/








////////





// var newPWstr = newPassWd.join("");

// var password = "";

// for (var i = 0; i < pWlenght; i++) {
// var genChr = newPWstr.charAt(Math.floor(Math.random() * newPWstr.length));
// password = password.concat(genChr);

// }
//////

// function Generatepw() {
//    document.getElementById("passWD-text").textContent = password;
// }



// function genPassword1(count) {
//   let num = 0
//   const crypto = window.crypto || window.msCrypto
//   const min = 2 ** 32 % count
//   const rand = new Uint32Array(1)

//   do {
//     num = crypto.getRandomValues(rand)[0]
//   } while (num < min)

//   return num % count
// }

// function generate(length = 12) {
//   let chars = ''
//   let password = ''

//   for (let i = 0; i < 94; i++) {
//     chars += String.fromCharCode(33 + i)
//   }

//   for (let i = 0; i < length; i++) {
//     password += chars[genPassword1(chars.length)]
//   }

//   return password
// }

// function generate() {
//    document.getElementById("genPassword1").textContent = password;
// }


















// let password = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let chars = 12
// let thePassword = document.getElementById("password")
// var newPassWd = [];

// function genPassword1() {
// for (let i = 0; i < password.length; i++) {
//     let randomNumber = Math.floor(Math.random() * password.length);
// }
//     document.getElementById("password").value = password;
// }


// ////////

// var newPWstr = newPassWd.join("");

// var password = "";

// for (var i = 0; i < pWlenght; i++) {
// var genChr = newPWstr.charAt(Math.floor(Math.random() * newPWstr.length));
// password = password.concat(genChr);

// }
// //////

// function Generatepw() {
// document.getElementById("passWD-text").textContent = password;
// }



// // function genPassword1(count) {
// //   let num = 0
// //   const crypto = window.crypto || window.msCrypto
// //   const min = 2 ** 32 % count
// //   const rand = new Uint32Array(1)

// //   do {
// //     num = crypto.getRandomValues(rand)[0]
// //   } while (num < min)

// //   return num % count
// // }

// // function generate(length = 12) {
// //   let chars = ''
// //   let password = ''

// //   for (let i = 0; i < 94; i++) {
// //     chars += String.fromCharCode(33 + i)
// //   }

// //   for (let i = 0; i < length; i++) {
// //     password += chars[genPassword1(chars.length)]
// //   }

// //   return password
// // }

// // function generate() {
// //    document.getElementById("genPassword1").textContent = password;
// // }
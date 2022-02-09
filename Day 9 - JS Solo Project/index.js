let password = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let chars = 12
let thePassword = document.getElementById("password")
var newPassWd = [];

function genPassword1() {
for (let i = 0; i < password.length; i++) {
    let randomNumber = Math.floor(Math.random() * password.length);
}
    document.getElementById("password").value = password;
}


////////

var newPWstr = newPassWd.join("");

var password = "";

for (var i = 0; i < pWlenght; i++) {
var genChr = newPWstr.charAt(Math.floor(Math.random() * newPWstr.length));
password = password.concat(genChr);

}
//////

function Generatepw() {
document.getElementById("passWD-text").textContent = password;
}



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
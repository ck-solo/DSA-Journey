// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number "));
// Solution 35 Right Angle Triangle✅
// for(let i = 1; i<=n; i++){
//     for(let j = 1; j<=i;j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }

// Solution 36✅
// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number "));
// for(let i = 1; i<=n; i++){
//     for(let j = 1; j<=i;j++){
//         process.stdout.write(j+ " ")
//     }
//     console.log();
// }

// Solution 37✅
// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number "));
// for(let i = 1; i<=n; i++){
//     for(let j = 0; j < i;j++){
//         process.stdout.write(String.fromCharCode(65 + j) + " ")
//     }
//     console.log();
// }

// Solution 38 ✅
// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n-i; j++) {
//     process.stdout.write("* ");
//   }
// console.log();
// }

//Solution 39✅
// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number "));
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n-i; j++) {
//       process.stdout.write(" ");
//     }
//     for(let j=1; j<=i; j++){
//       process.stdout.write("*"); // in this agar ek space bhi jyada hoga to pattern change ho jayega
//     }
//   console.log();
//   }

// Solution 20✅
// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number "));
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n-i; j++) {
//       process.stdout.write(" ");
//     }
//     for(let j =1; j<=i; j++){
//       process.stdout.write("* ");
//     }

//   console.log();
//   }


// Solution 21✅
// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number "));
// for(let i = 1; i <=n; i++){
//     for(let j = 1; j<=(n*2); j++)
//     if(i==j || i+j === n*2){
//         process.stdout.write("*")
//     }else{
//         process.stdout.write(" ")

//     }
//     console.log()
// }

// Solution 22
// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n+1; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
// }
// console.log()
// }
 
let count = 0;
for (let i = 2; i<=20; i+=3){
    count++
}
console.log(count)
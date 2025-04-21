const prompt = require("prompt-sync")() 
let n = prompt("Enter a number")
console.log(n)
// Ask prompt and show in terminal

user prompt ki tarah use hota hai terminal pr
kese check kre 
install command = npm install prompt-sync
check command  = npm list


Solution 39
for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n-i; j++) {
//       process.stdout.write(" "); in this agar ek space bhi jyada hoga to pattern change ho jayega
//     } 
//     for(let j=1; j<=i; j++){
//       process.stdout.write("*"); // in this agar ek space bhi jyada hoga to pattern change ho jayega
//     }
//   console.log();
//   }
Output
    *
   **
  ***
 ****
*****


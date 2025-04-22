// Q1.   Strong number (the number 145 after adding factorial same number 145)
let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a strong Number "));
let copy = n;
let ans = 0;
while (n > 0) {
  let rem = n % 10; //Gives you the digit to work on 
  let fact = 1;
  for (let i = 1; i <= rem; i++) {
    fact = fact * i;
  }
  ans = ans + fact;
  n = Math.floor(n/10);  //Removes the last digit so you can move to the next one 
}
if (copy == ans) console.log("This is a strong number");
else console.log("This is not a strong number");

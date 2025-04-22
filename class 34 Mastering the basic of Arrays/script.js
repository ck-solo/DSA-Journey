// Q1.   Strong number (the number 145 after adding factorial same number 145)
// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a strong Number "));
// let copy = n;
// let ans = 0;
// while (n > 0) {
//   let rem = n % 10; //Gives you the digit to work on
//   let fact = 1;
//   for (let i = 1; i <= rem; i++) {
//     fact = fact * i;
//   }
//   ans = ans + fact;
//   n = Math.floor(n/10);  //Removes the last digit so you can move to the next one
// }
// if (copy == ans) console.log("This is a strong number");
// else console.log("This is not a strong number");

// Q2. Accept value from user and assign in the array

// let prompt = require("prompt-sync")()
// let size = Number(prompt("Enter a length of Array "));
// let arr = new Array(size)

// for(let i = 0; i<arr.length; i++){
//   arr[i] = Number(prompt("Enter the value"))
// }
// console.log(arr)

// — Q 23. Sum of array’s element
// let prompt = require("prompt-sync")();
// let size = Number(prompt("Enter a lenght of Array "));
// let arr = new Array(size)
// let sum = 0;
// for(let i = 0; i <arr.length; i++){
//   arr[i] = Number(prompt("Enter the value "))
//   sum = sum + arr[i]
// }
// console.log("sum = " + sum)

// // — Q 24. Max element from array
// let arr = [12, 34, 24, 5, 2, 45, 32];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   } }
//   console.log("max element " + max);


// Q25. Min element from Array 
// let arr = [12,23,4,3,2,44,222,1,34]
// let min = arr[0]
// for(let i =1; i <arr.length;i++){
//   if(arr[i] < min){
//     min = arr[i]
//   } }
// console.log("Min element " + min )


// Q1.Problem Statement : Indian Currency Notes Breakdown
// Denominations Available(Indian Rupees)
// 2000 , 500, 200, 100, 50, 20, 10,5,1

// let input = Number(prompt("Enter the amount to be paid in rupees"));
// let notes = [2000 , 500, 200, 100, 50, 20, 10,5,1]
// let count = [];

// for(let i = 2000 ; i <=0; i--){
//   console.log("Hello")
  
// }

// Q2.Write a program to accept rating of the movie as double and Movie name as String.
// let moviename = prompt("Enter Movie Name ?").toLowerCase();
// let rating = Number(prompt("Enter the rating"));
// if(isNaN(rating)){
//     console.log("Invalid rating.")
// }
// if (rating >= 0 && rating <= 2.0) {
//   console.log("Flop");
// } else if (rating > 2.1 && rating <= 3.4) {
//   console.log("Semi-Hit");
// } else if (rating > 3.5 && rating <= 4.5) {
//   console.log("Hit");
// } else if (rating > 4.6 && rating <= 5.0) {
//   console.log("Super-Hit"); 
// } else{
//     console.log("rating only come between 0 to 5");
// }


// Q3. Write a program to calculate the salary of as per the following table
//  Gender  = Male  / Female
//  Year of Service = >=10 >=10 <10 <10   >=10 >=10 <10 <10
//  Qualification = Post Graduate / Graduate /Post Graduate / Graduate / Post Graduate / Graduate / Post Graduate / Graduate
//  Salary =  15000 / 10000 / 10000 / 7000 / 12000 / 9000 / 10000 / 6000 

// let gender = prompt("Enter Gender (Male/Female) ?").toLowerCase();
// let yearOfService =Number(prompt("Enter Year of Service ?"));
// let qualification = prompt("Enter Qualification (Post Graduate/Graduate) ?").toLowerCase();
// let salary = 0;
// if (gender !== "male" && gender !== "female") {
//   console.log("Invalid gender entered. Please enter Male or Female.");
//   return;
// }
// if (qualification !== "post graduate" && qualification !== "graduate") {
//   console.log("Invalid qualification entered. Please enter 'Post Graduate' or 'Graduate'.");
//   return;
// }
// if (qualification === "post graduate") {
//   salary = yearOfService >= 10 ? (gender === "male" ? 15000 : 12000) : 10000;
// } else if (qualification === "graduate") {
//   salary = yearOfService >= 10  ? (gender === "male" ? 10000 : 9000) : (gender === "male" ? 7000 : 6000);
// }
// console.log(`Salary is ${salary}`);
 

 
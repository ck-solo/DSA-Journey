// Q. Repeat hello
// let input;
// do {
//   console.log("Hello");
//   input = prompt("Want to Continue ? yes/no").toLowerCase();

//   if(input){
//     input - input.toLowerCase();
//   }else{
//     input = 'no'
//   }
// } while (input === "yes");

// ----------------------------------------------------------
// Q. Guess the number✅
// let number = Math.floor(Math.random() * 100) + 1;
// let guess = Number(prompt("Guess the number between 1 to 100"));
// while (guess !== number) {
//  if(isNaN(guess) || guess < 1 || guess > 100) {
//     alert("Please enter a valid number between 1 and 100!")
//  }
//    else if (guess < number) {
//         alert("To Low")
//     } else if (guess > number) {
//         alert("To High")
//     }
//     else{
//     }
//     guess = Number(prompt("Try again: Guess the number between 1 to 100"));
// }
// alert("You Won");

// ----------------------------------------------------
// Q. sasta Calculator✅

// let continueCalc;
// do {
//   let num1 = Number(prompt("Enter first number"));
//   let num2 = Number(prompt("Enter second number"));
//   let operator = prompt("Enter operator (+, -, *, /, %)");
//   let sum;
//    (isNaN(num1) || isNaN(num2)) ? alert("Please enter valid Numbers.")
//   : operator === "+" ? sum = num1 + num2
//   : operator === "-" ? sum = num1 - num2
//   : operator === "*" ? sum = num1 * num2
//   : operator === "/" ? sum = num1 / num2
//   : operator === "%" ? sum = num1 % num2
//   : alert("Invalid operator");
//   sum !== undefined && alert("Result: " + sum);
//   continueCalc = prompt("Do you want to calculate again? (yes/no)").toLowerCase();
// } while (continueCalc === "yes");
// alert("Thanks for using the calculator! 👋");





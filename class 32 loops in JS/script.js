// Q. Repeat hello
// let input;
// do {
//   console.log("Hello");
//   input = prompt("Want to Continue ? yes/no").toLowerCase();
// } while (input === "yes");

// ----------------------------------------------------------
// Q. Guess the number✅
let guess = Math.floor(Math.random() * 100) + 1;
let inp;
do{
    inp = Number(prompt("Guess a number between 1 to 100"))
    if(isNaN(inp) || inp < 0 || inp > 100 ) {
        console.log("Enter a valid number")
        continue
    }
    if(inp > guess) console.log("Too High , Try Again ")
    else if(inp < guess) console.log("Too Low , Try Again ")
    else console.log("Congratulation 🎉, You Won" + guess)
    
}
while(inp !== guess)



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





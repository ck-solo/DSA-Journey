// Q1. ISBN Number




// Q3. A Number is divisible by the sum of its digits
// let a = Number(prompt("Enter a number"))
// let temp = a;
// let sum = 0
// while(temp >0){
//     let rem = temp % 10;
//     sum = sum + rem;
//     temp = Math.floor(temp/10)
// }
// if(a % sum == 0){
//     console.log("completely divisible by the sum of its digits");
// }else{
//     console.log("The number is not divisible by the sum of its digits");
// }
// ---------------------------------------------------------------
// Q4. Perfect Square
// let c = Number(prompt("Enter a number"));
// let d = Math.sqrt(c);
// if(d == Math.floor(d)){
//     console.log(`${c} is a perfect square`);
// } else{
//     console.log(`${c} is not a perfect square`);
// }
// ---------------------------------------------------------------

// Q5. Abudant Number
// let a = Number(prompt("Enter a number"));
// let sum = 0
// for (let i = 1; i < a; i++) {
//   if (a % i === 0)
//     sum += i
// }
// if (sum > a) {
//     console.log( a ," is an abundant number ")
// } else{
//     console.log(a ," is not an abundant number")
// }
// ---------------------------------------------------------------

// Q6. Print Fibonacci Series Using Loops
// let n = Number(prompt("Enter the number of terms in the Fibonacci series: "));
// let a = 0;
// let b = 1;
// let sum = a + b;

// for(let i = 2; i<n ; i++){
//     let next  = a + b;
//     console.log(next)
//     sum += next;
//     a = b;
//     b = next;
// }
// console.log("Sum of Fibonacci Series is ", sum);
// ---------------------------------------------------------------

// Q7. Find Numbers with Exactly X Divisors
// let digit = Number(prompt("Enter a positive number to find its divisors (excluding itself):"));
// let divisors = [];
// for(let i = 1; i < digit; i++)
// { if(digit % i === 0)
//      divisors.push(i)
//     }
// console.log(`The divisors of ${digit} are ${divisors}`);

// ---------------------------------------------------------------

// Q8. Fint the Prime number
// function isPrime(n){
//     if (isNaN(n)) return false;
//     if (n <= 1) return false;
//     if (n == 2) return true;
//     if (n % 2 == 0) return false;
//     for (let i = 3; i <= Math.sqrt(n); i += 2) {
//         if (n % i == 0) return (false);
//     }
//     return true;
// }
// let n = Number(prompt("Enter a number"));
// alert(isPrime(n))

// --------------------------------------------------------------------

// Q9. Calculate Area using switch statement
// const choose = Number(
//   prompt("Choose the Shape:\n1. Circle\n2. Triangle\n3. Square\n4. Rectangle")
// );

// if (![1, 2, 3, 4].includes(choose)) {
//   console.log("Invalid Input! Please select 1, 2, 3, or 4.");
// } else {
//   let area;
//   switch (choose) {
//     case 1:
//       const r = Number(prompt("Enter radius:"));
//       area =
//         r > 0 ? Math.PI * r * r : "Invalid Input! Radius must be positive.";
//       break;
//     case 2:
//       const b = Number(prompt("Enter base:")),
//         h = Number(prompt("Enter height:"));
//       area =
//         b > 0 && h > 0
//           ? 0.5 * b * h
//           : "Invalid Input! Base and height must be positive.";
//       break;
//     case 3:
//       const s = Number(prompt("Enter side:"));
//       area = s > 0 ? s * s : "Invalid Input! Side must be positive.";
//       break;
//     case 4:
//       const l = Number(prompt("Enter length:")),
//         w = Number(prompt("Enter width:"));
//       area =
//         l > 0 && w > 0
//           ? l * w
//           : "Invalid Input! Length and width must be positive.";
//       break;
//   }
//   console.log(area);
// }


// --------------------------------------------------------------------

// Q10. Neon Number 

// --------------------------------------------------------------------

// Q11. Sum of Even indexed fibonacci Numbers

// --------------------------------------------------------------------

// Q12. Find the largest digit in a number
 
// let n = Number(prompt("Enter a number"));
// let n = 45;
// let max = 0; 
// while(a>0){
//     let rem = a % 10;
//     sum = sum + rem;
//     s = Math.floor(a/10);
// }
// console.log(sum)


// --------------------------------------------------------------------


// Q13. Find the LCM of Two number
// --------------------------------------------------------------------


// Q14. Find the Sum of Even Digit in a number
// --------------------------------------------------------------------


// Q15. Numbers of Days in a Month

// --------------------------------------------------------------------





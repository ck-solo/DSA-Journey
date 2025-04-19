// Q1. Accept an integer and Print hello world n times
// let numb = Number(prompt("Enter a number"));
// for (let i = 0; i < numb; i++) {
//     console.log("Hello world")
// } 
// --------------------------------------------------------
// Q2. Print natural number up to n.
// let numb = Number(prompt("Enter a number"));
// for(let i = 1 ; i <= numb; i++){
//     console.log(i)
// }
// --------------------------------------------------------

// Q3. Reverse for loop. Print n to 1.
// let numb = Number(prompt("Enter a number"))
// for(let i = numb; i >= 1; i--){
//     console.log(i)
// }
// --------------------------------------------------------
// Q4.Take a number as input and print its table
    //  5 * 1 = 5
    //  5 * 2 = 10 ... up to 10 terms
// let numb = Number(prompt("Enter a number"));
// for (let i = 1; i <= 10; i++) {
//     console.log(`${numb} * ${i} = ${numb * i}`)
// } 
// --------------------------------------------------------


//Q5. Sum up to n terms.

        // let number = Number(prompt("Enter a number"));
        // let sum =0;
        // if(isNaN(number)) return
        // for(let i = 0; i <=number; i++){
        //     sum = sum + i
        // }
        // console.log(sum);
// --------------------------------------------------------

//Q6. Factorial of a number
// let number = Number(prompt("Enter a number"));
// let fact =1;
// if(isNaN(number)) {
//     console.log("Invalid Input")
// }
// for(let i = 1; i <=number; i++){
//     fact = fact * i
// }
// console.log(fact);

// --------------------------------------------------------

//Q7. Print the sum of all even & odd numbers in a range seperately.
// let numb = Number(prompt("Enter a number"))
// let sumEven = 0
// let sumOdd = 0
// if (isNaN(numb) || numb < 1) {
//     console.log("Please enter a valid positive number.");
//     return;
// }
// for(let i = 1; i <= numb; i++){
//     if(i % 2 == 0) sumEven = sumEven + i
//     else  sumOdd = sumOdd + i
//     }
//     console.log("the sum of even numbers is: ", sumEven);
//     console.log("the sum of odd numbers is: ", sumOdd);

 
// --------------------------------------------------------

//Q8. Print all the factors of a number.
// let number = Number(prompt("Enter a number"));
// if(isNaN(number)){
//     console.log("Invalid Input")
//     return
// }
// for(let i =1 ; i <= number/2 ; i++){
//     if(number % i == 0) console.log(i)
// }
// console.log(number)
// --------------------------------------------------------

 
// Q9. Check if the number is Prime or not.

// let n = Number(prompt("Enter a number"));
// First Approact
//let isPrimee = true 
// if(isNaN(number)){
//     console.log("Invalid Input") 
// } 
// for(let i = 2; i <= number/2; i++){
//     if(number % i == 0) {
//         isPrime = false;
//         break;
// }
// }
// if(isPrime) console.log("Prime Number")
// else console.log("Not a Prime Number")
 
// Second Apprach
// let isPrime = isprimefun(n);
// if(isPrime) console.log("Prime Number")
// else console.log("Not a Prime Number")
// function isprimefun(n){
//     if (n<=1) return false
//     if(n ==2 ) return true
//     if(n % 2 == 0) return false
//     for(let i = 3; i <= Math.floor(Math.sqrt(n)); i+=2){
//         if(n % i == 0 ) return false
//     }
//     return true
// }

// --------------------------------------------------------

//Q10.Write a program to take two inputs a, b & find the value of a  raised to the power of b.
    //  Ex - a = 2, b = 5 
    //  OP - 2^5 = 32

//     let a = Number(prompt("Enter the base number"));
//     let b = Number(prompt("Enter the power"));
//     let sum = 1;
//     for(let i =1; i <= b; i++){
//         sum = sum * a;
//     }
//     console.log(sum);
// // --------------------------------------------------------

 
// // Q1. Calcualte compund interest
let p = Number(prompt("Enter the principle value"));
let r = Number(prompt("Enter the rate of interest"));
let t = Number(prompt("Enter the time in years"));

// A = p * (1 + r/100)^t
// cp = A - p
console.log(p*Math.pow(1 + r/100,t) - p);

// Q2. Generate OTP.
console.log(Math.floor(Math.random()*9000));

// Q3. Area of triagnle by heron's formula
let a = Number(prompt("Enter the first side"));
let b = Number(prompt("Enter the second side"));
let c = Number(prompt("Enter the third side"));
let s = (a + b + c) / 2
if(a+b <= c || b + c <= a || c + a <= b){
    console.log("Not Possible")
} else{
    console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)))
}

// Q4.  Circumeference of circle
let rad = Number(prompt("Enter value of radius"));
console.log(2 * Math.PI* rad)

// -----------------------------------------------------------------
// IF ELSE
// Q1. Accept two numebers and print the greatest between them.
let aa = Number(prompt("Enter the first number"));
let bb = Number(prompt("Enter the second number"));
if (aa > bb) {
  console.log("The first number is greater than second");
} else {
  console.log("The second number is greater than first");
}

// Q2. Accept an integer and check whether it is an even number or odd.
let n = Number(prompt("Enter the number"));
if (n % 2 == 0) {
    console.log(n + " is an even number");
}else{
    console.log( n + " is an odd number")
}

// Q3. Accept three numbers and print the greatest among them.
let a1 = Number(prompt("Enter the first number"));
let b1 = Number(prompt("Enter the second number"));
let c1 = Number(prompt("Enter the third number"));

if(a1 > b1 && a1 > c1){
    console.log(a1 + " is the greatest");
} else if(b1 > a1 && b1 > c1){
    console.log(b1 + " is the greatest");
} else{
    console.log(c1 + " is the greatest");
}

// Q4.Accept a year and check if it is a leap year or not .
let year = Number(prompt("Enter the year"));
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log(year + " is a leap year.")
}
else{
    console.log(year +" is not a leap year.")
}

// Q5. Shop Discount - Description on Graphic.
let amount = Number(prompt("Enter the price of the product"));
let disc = 0;

if (amount <= 0) { 
  console.log("Invalid Input");
} else if (amount <= 5000) disc = 0;
else if (amount > 5000 && amount <= 7000) disc = 5;
else if (amount > 7000 && amount <= 9000) disc = 10;
else if (amount > 9000) disc = 20;
else console.log("Invalid Input");
console.log(amount - (disc * amount) / 100);


// Q6 Bijli bill - Description on Graphic
// let unit = Number(prompt("Enter the units of electricity consumed"));
// let amount = 0;
// //First Approach
//  if(unit>0 && unit <= 100){
//     amount = unit * 4.2;
//  }else if(unit >100 && unit <= 200){
//     amount = (100*4.2) + ((unit-100)*6);
//  }else if(unit > 200 && unit <= 400){
//     amount = (100*4.2) + (100*6) + ((unit-200)*8)
//  }else if(unit>400){
//     amount = (100*4.2) + (100*6) + (200 * 8) + ((unit-400)*13)
// }
//  console.log(amount)

//  second approach
 
if(unit> 400){
    amount = (unit - 400) * 13
    unit = 400
}if (unit > 200 && unit <=400){
    amount = amount + (unit - 200) * 8
    unit = 200
}if (unit > 100 && unit <=200){
    amount = amount + (unit - 100) * 6
    unit = 100
}
 amount = amount + unit * 4.2;

console.log(amount)
 
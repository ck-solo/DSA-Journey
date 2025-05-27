// Q.sum of digit
// let a = Number(prompt("Enter a number"));
//  let sum = 0;
//  while(a>0){
//     let rem = a % 10
//     sum = sum + rem
//     a = Math.floor(a/10) ;
// }  
// console.log(sum)

// Q2.reverse of number
// let b = Number(prompt("Enter a number"))
// let rev = 0;
// while(b>0){
//     let rem = b % 10
//     rev = (rev * 10) + rem
//     b = Math.floor(b/10)
// }
// console.log(rev) 

// Q3.Automorphic number
 let c = Number(prompt("Enter a number"))   
 let copy = c;
 let sqr = c * c;
 let count = 0;
 while(c>0){
    count++
    c = Math.floor(c/10)
 }
if(sqr%Math.pow(10, count)== copy) console.log("Automorphic Number")
    else console.log("Not a Automorphic Number")
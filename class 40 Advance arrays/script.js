// — Q 29. Array left rotation by K elements
// Not Efficient because agar 7 ya 8 baar check krna hoga tab har baar iteration chalega
// let arr = [1,2,3,4,5]
// console.log(arr)
// let k = 2;
// k = k % arr.length
// for(let j = 1; j<=k; j++){
//     let temp = arr[0]
//     for(let i = 0 ; i < arr.length-1; i++){
//         arr[i] = arr[i+1]
//     }
//     arr[arr.length -1] = temp
// }
// console.log(arr)

// Kind of Efficient Way but Not proper
// let arr = [1,2,3,4,5,6]
// let temp = new Array(arr)
// let k = 4
// k = k % arr.length
// for(let i = 0; i < arr.length ; i++){
//     temp[i] = arr[(i+k)% arr.length]
// }
// console.log(temp)

// Proper but not understood
// let prompt = require("prompt-sync")();
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter a number "));
// k = k % arr.length;
// reverse(arr, 0, k - 1);
// reverse(arr, k, arr.length-1);
// reverse(arr, 0, arr.length-1);

// console.log(arr)
// function reverse(arr, i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

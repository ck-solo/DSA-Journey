// Q 25. Second max element from array
// let arr = [12,33,23,233,43,22,11,233,40]
// let max1 = arr[0];
// let max2 = arr[1];
// for(let i = 2; i < arr.length;i++){
//     if(arr[i] >max1){
//        max2 = max1;
//        max1 = arr[i]
//     }else if (arr[i] > max2 && arr[i] < max1) {
//         max2 = arr[i];
// }}
// console.log("The max1 number is " + max1)
// console.log("The max2 number is " + max2)

// -------------------------------------

// — Q 26. Reverse the array
// let arr = [1,2,3,4,5,6]
// let temp = new Array(arr.length)
// let i = 0;
// for(let j = arr.length-1;j>=0; j--){
//     temp[i] = arr[j]
//     i++
// }
// console.log(temp)

// let arr = [1, 2, 3, 4, 5, 6];
// let i = 0,
//   j = arr.length - 1;

// while (i < j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--
// }
// console.log(arr);

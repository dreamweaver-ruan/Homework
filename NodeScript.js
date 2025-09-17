// #1.

// let sumOfN = (n) => {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumOfN(10));


// #2.

// function oddeven(n) {
// 	if (n%2 == 0){
//         console.log(n + ' is even.')
//     }
//     else {
//         console.log(n + ' is odd.')
//     }
// }

// oddeven(7)


// #4.

// function findMax(a, b, c){
//     if (a >= b && a >= c){
//         console.log(a + ' (a) is the largest number.')
//         return a
//     } 
//     else if (b >= a && b >= c){
//         console.log(b + ' (b) is the largest number.')
//         return b
//     } 
//     else {
//         console.log(c + ' (c) is the largest number.')
//         return c
//     }
// }

// findMax(2, 5, 8)


// #5.


function getOdd(arr){
    let oddNum = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 != 0) {
            oddNum.push(arr[i]);
        }
    }
    console.log(oddNum)
}

getOdd([1, 3, 6, 3, 8, 0, 9, 35 ,72, 133, 5])
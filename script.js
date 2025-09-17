// #1.

// let prompt = require('prompt-sync')()
// let num = Number(prompt("Enter a number:"));
// if (num > 0) {
//     console.log(num + " is a positive number.");
// }
// else if (num == 0) {
//     console.log(num + " is zero.");
// }
// else {
//     console.log(num + " is a negative number.");
// }


// #2.

// let result;

// let a = 4;
// let b = 2;

// result = (a + b < 4) ? 'Less' : 'More';

// console.log(result);


// #3.

// for (let i = 1; i <= 40; i+=2) {
//     if (i / 10 >= 1)
//         console.log(i);
// }


// #4.

// let num = 8;

// for (let i = 0; i <= 9; i++) {
//     console.log(num + "*" + i + "=" + (num*i));
// }


// #5.

// let sum = 0
// for (let i = 1; i <= 14; i++) {
//     sum += i; 
// }
// console.log(sum);


// #6.

// let sum = 0
// for (let i = 1; i <= 40; i++) {
//     if (i % 2 == 0)
//         sum += i;     
// }
// console.log(sum);


// #7.

// let i = 1;
// let sum = 0;
// while(i < 40){
//     if (i % 2 != 0){
//         sum += i;
//     }
//     i++; 
// }
// console.log(sum);


// #8.

// let mult = 1;
// for (let i = 1; i <= 60; i++) {
//     if (i % 6 == 0) {
//         mult *= i;
//     }
// }
// console.log(mult);




// Gortsnakan 17.09.2025


// #1.

// function oddeven(n) {
// 	if (n%2 == 0){
//         console.log(n + ' is even.')
//     }
//     else {
//         console.log(n + ' is odd.')
//     }
// }

// oddeven(7)


// #2.

// let getMin = function(a, b){
//     if (a < b){
//         console.log(a + ' (a) is the smallest number.')
//         return a
//     } 
//     else {
//         console.log(b + ' (b) is the smallest number.')
//         return b
//     }

// }

// getMin(2, 5)


// #3.

// let getFactorial = (n) => {
//     let fac = 1;
//     for (let i = 1; i <= n; i++){
//         fac *= i;
//     }
//     console.log(fac)
// }

// getFactorial(8)


// #4.

// sum = 0;
// function evenSum(n){
//     for(let i = 1; i <= n; i++){
//         if (i % 2 == 0){
//             sum+=i;
//         }
//     }
//     console.log(sum)
// }

// evenSum(10)


// #5.

// let checkGrade = function(n){
//     if(n < 0 || n > 10){
//         console.log('Error')
//         return
//     }
//     else if (n >= 9){
//         console.log('Excellent')
//     }
//     else if (n >= 7 && n < 9){
//         console.log('Good')
//     }
//      else if (n <= 6){
//         console.log('OK')
//     }

// }

// checkGrade(9)


// #6.

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


// #7.

// let getPrime = (n) => {
//     if (n <= 1) {
//         console.log(n + ' is not a prime number.');
//     }
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             console.log(n + ' is not a prime number.');
//             return;
//         } else {
//             console.log(n + ' is a prime number.');
//             return;
//         }
//     }
    
// }

// getPrime(101)


// #8.

// function calc(a, b, op){
//     if (op == '+'){
//         console.log(a + b)
//     }
//     else if (op == '-'){
//         console.log(a - b)
//     }
//     else if (op == '*'){
//         console.log(a * b)
//     }
//     else if (op == '/'){
//         if (b == 0){
//             console.log('Error')
//             return
//         }
//         console.log(a / b)
//     }
//     else {
//         console.log('Error')
//     }
// }

// calc(5, 0, '/')


// #9.

// a = '';
// function reverseNum(n){
//     while(n != 0){
//         let num = n % 10;
//         a += num;
//         n = Math.floor(n / 10);
//     }
//     console.log(a)
// }

// reverseNum(123)
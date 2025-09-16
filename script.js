let prompt = require('prompt-sync')()
let num = Number(prompt("Enter a number:"));
if (num > 0) {
    console.log(num + " is a positive number.");
}
else if (num == 0) {
    console.log(num + " is zero.");
}
else {
    console.log(num + " is a negative number.");
}

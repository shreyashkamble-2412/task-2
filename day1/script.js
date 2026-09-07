let name = "Shreyash";
const age = 20;
let student = true;

console.log(name, age, student);

let a = 10, b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a > b);
console.log(a === b);

if (age >= 21) {
    console.log("Adult");
} else {
    console.log("Minor");
}

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    default:
        console.log("Other Day");
}

const prices = [500, 1200, 800, 1500, 900];

for (let price of prices) {
    if (price > 1000) {
        console.log("Above ₹1000:", price);
    }
}
const products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Mouse", price: 800, category: "Electronics" },
    { name: "Shoes", price: 2000, category: "Fashion" },
    { name: "Bag", price: 1000, category: "Fashion" },
    { name: "Watch", price: 1500, category: "Accessories" }
];

function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("Shreyash"));

const totalPrice = (items) =>
    items.reduce((total, item) => total + item.price, 0);

console.log("Total Price:", totalPrice(products));

const { name, price } = products[0];

console.log("Product:", name);
console.log("Price:", price);

const newProducts = [
    ...products,
    { name: "Keyboard", price: 1200, category: "Electronics" }
];

console.log(newProducts);

function showProducts(...items) {
    console.log(items);
}

showProducts(...products);
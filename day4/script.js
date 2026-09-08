import { products } from "./data.js";

const cheap = products.filter(p => p.price < 1000);

const names = cheap.map(p => p.name);

const total = products.reduce((sum, p) => sum + p.price, 0);

const product = products.find(p => p.name === "Mouse");

products.forEach(p => console.log(p.name));

const { name, price } = products[0];

const city = products[0]?.details?.city ?? "Not Available";

document.getElementById("output").innerHTML = `
    Cheap Products: ${names.join(", ")} <br>
    Total Price: ₹${total} <br>
    Found Product: ${product.name} <br>
    First Product: ${name} - ₹${price} <br>
    City: ${city}
`;
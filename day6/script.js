const phones = document.getElementById("phones");
const status = document.getElementById("status");

async function getPhones() {
    try {
        const response = await fetch(
            "https://dummyjson.com/products/category/smartphones"
        );

        if (!response.ok) {
            throw new Error("API Error");
        }

        const data = await response.json();

        phones.innerHTML = data.products.slice(0, 5).map(phone => `
            <div class="card">
                <img src="${phone.thumbnail}" alt="${phone.title}">
                <h2>${phone.title}</h2>
                <p>Price: $${phone.price}</p>
                <p>Brand: ${phone.brand || "N/A"}</p>
            </div>
        `).join("");

        status.textContent = "5 Mobile Phones Loaded Successfully!";

    } catch (error) {
        status.textContent = "Unable to load mobile phones!";
        console.log(error);
    }
}

getPhones();
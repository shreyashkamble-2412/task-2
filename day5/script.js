function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received successfully!");
        }, 2000);
    });
}

async function loadData() {
    const result = document.getElementById("result");

    result.textContent = "Loading...";

    try {
        const data = await getData();
        result.textContent = data;
    } catch (error) {
        result.textContent = "Something went wrong!";
        console.log(error);
    }
}
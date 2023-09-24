const counter = document.querySelector(".counter-number");
async function updateCounter() {
    const urls = [
        //"https://bnycltzcvjucapaouddc6o3wg40kmvpu.lambda-url.us-west-1.on.aws/",
        "https://e3bun64jkxybyyfi3lcq7ivr4q0nhixc.lambda-url.us-west-1.on.aws/"
    ];

    for (const url of urls) {
        let response = await fetch(url);
        let data = await response.json();
        counter.innerHTML += `👀 Views: ${data}<br>`;
    }
}
updateCounter();

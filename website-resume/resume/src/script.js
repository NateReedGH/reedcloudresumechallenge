const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://e3bun64jkxybyyfi3lcq7ivr4q0nhixc.lambda-url.us-west-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `👀 Views: ${data}`;
}
updateCounter();
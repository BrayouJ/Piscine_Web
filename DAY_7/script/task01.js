div = document.querySelector("footer div");

let counter = 0;

div.addEventListener("click", () => {
    counter += 1
    div.textContent = counter;
})
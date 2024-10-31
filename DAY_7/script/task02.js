div = document.querySelector("footer div");

div.addEventListener("click", () => {
    let name = window.prompt("What's your name?");
    if (confirm("Are you sure that " + name + " is your name?")) {
        alert("Hello " + name + " !");
        div.textContent = name;
    }
})
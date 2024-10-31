div = document.querySelector("footer div");

let str = ""

let count = 0

window.addEventListener("keyup", (e) => {
    str += e.key
    count++
    div.textContent = str
    if (count >= 42){
        str = str.substring(1)
    }
})
body = document.querySelector("body")
plus = document.querySelector("footer div :nth-child(1)")
minus = document.querySelector("footer div :nth-child(2)")
color = document.querySelector("select")

size = 16
clicked = ""

plus.addEventListener("click", () => {
    size++
    clicked = body.style.fontSize = size + "px"
})

minus.addEventListener("click", () => {
    size -= 1
    clicked = body.style.fontSize = size + "px"
})

color.addEventListener("change", () => {
    body.style.backgroundColor = color.value
})
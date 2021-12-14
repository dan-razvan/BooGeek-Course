const container = document.getElementById("container")
const button = document.getElementById("button")

const colors = ["yellow", "red", "blue", "green", "black", "orange", "pink"]

const randColor = arr => {
    return Math.floor(Math.random()*arr.length)
}

button.addEventListener("click", () => {
    container.style.background = colors[randColor(colors)]
    

})



const loadData = (cb) => {
    let xhr = new XMLHttpRequest();

    xhr.open(
        "GET", 
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=50f5fce0632d826ec7e4875d23c17ac1&units=metric`
    )
    

    xhr.send()
    xhr.onload = () => {
        let data = JSON.parse(xhr.responseText)
        console.log(">>", data)
        cb(data)
    }
}


const render = (data) => {
    let temp = document.getElementById("temperature")
    let airHumidity = document.getElementById("humidity")
    let windSpeed = document.getElementById("wind")

    temp.innerHTML= ` Temperature = <span>${data.main.temp}</span>`
    airHumidity.innerHTML= `Air humidity = <span>${data.main.humidity}</span>`
    windSpeed.innerHTML= `Wind speed = <span>${data.wind.speed }</span>`
}

const submitButton = document.getElementById("submit")
const inputValue = document.getElementById("input")

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    if(inputValue.value) {
        loadData(render)
    }
})



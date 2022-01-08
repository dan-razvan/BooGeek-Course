const submit = document.getElementById("submit")
const input = document.getElementById("input")
const errorContainer = document.getElementById("error")

const renderError = (errorMessage) => {
    errorContainer.insertAdjacentText("beforeend", errorMessage)
}

const formSubmit = submit.addEventListener("click",(e) => {
    e.preventDefault();
    loadData(render)
})


const loadData = (cb) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=50f5fce0632d826ec7e4875d23c17ac1&units=metric`)
    .then((response) => {
        if(!response.ok) {
            throw new Error("CITY NOT FOUND! Try again!")
        }
        return response.json()
    } )
    .then(data => cb(data))
    .catch(err=>{
        renderError(`Something went wrong: ${err} `)
    })
    
}

const render = (data) => {
    let {main: {temp, humidity}, wind: {speed}} = data

    document.getElementById("temperature").innerText = temp
    document.getElementById("humidity").innerText = humidity
    document.getElementById("wind").innerText = speed

}
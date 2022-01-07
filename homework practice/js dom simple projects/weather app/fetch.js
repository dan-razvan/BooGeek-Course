const submit = document.getElementById("submit")
const input = document.getElementById("input")

const formSubmit = submit.addEventListener("click",(e) => {
    e.preventDefault();
    loadData(render)
})


const loadData = (cb) => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=50f5fce0632d826ec7e4875d23c17ac1&units=metric`)
    .then((response) => response.json())
    .then(data => cb(data))
    .catch( ()=>{
        console.error("We have an error")
    })
    
}

const render = (data) => {
    let {main: {temp, humidity}, wind: {speed}} = data

    document.getElementById("temperature").innerText = temp
    document.getElementById("humidity").innerText = humidity
    document.getElementById("wind").innerText = speed

}
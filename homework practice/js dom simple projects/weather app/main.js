
const loadDataFromAPI = (cb) => {
    let xhr = new XMLHttpRequest();
    // console.log(JSON.parse(xhr.responseText))

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

// manages data
const load = (cb) => {
    // 1.check the cache
    let data = null
    let timestamp = new Date().getHours()
    if(checkDataCache(`data-${timestamp}-${inputValue.value}`)) {
        // 2. take from cache
        data = loadDataFromCache(`data-${timestamp}-${inputValue.value}`)
        cb(data)
    }else {
        // 3. take from API
        loadDataFromAPI((data) => {
            saveDataToCache(`data-${timestamp}-${inputValue.value}`, data)
            cb(data)
        })
    }
    
}

const saveDataToCache = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

const loadDataFromCache = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

const checkDataCache = (key) => {
    return JSON.parse(localStorage.getItem(key))
}



const render = (data) => {
    let temp = document.getElementById("temperature")
    let airHumidity = document.getElementById("humidity")
    let windSpeed = document.getElementById("wind")

    temp.innerHTML= ` Temperature = <span>${data.main.temp}</span>`
    airHumidity.innerHTML= `Air humidity = <span>${data.main.humidity}</span>`
    windSpeed.innerHTML= `Wind speed = <span>${data.wind.speed }</span>`

    // saveDataToCache(data)
}

const submitButton = document.getElementById("submit")
const inputValue = document.getElementById("input")
// const inputCalc = document.getElementById("sort")

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    if(inputValue.value) {
        load(render)
        // loadDataFromAPI(render)
        
    
    }
})


// load()


// loadDataFromAPI(render)

// ${inputValue.value}

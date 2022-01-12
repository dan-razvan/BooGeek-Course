const getDataFromAPI = cb => {
    let xhr = new XMLHttpRequest();
// console.log(JSON.parse(xhr.responseText))

    xhr.open(
        "GET", 
        `https://api.openweathermap.org/data/2.5/weather?q=chisinau&appid=50f5fce0632d826ec7e4875d23c17ac1&units=metric`
    )


    xhr.send()
    xhr.onload = () => {
        let data = JSON.parse(xhr.responseText)
        console.log(">>", data)
        cb(data)
    }
}

// manages data
const load = ( cb) => {
    // 1.check the cache
    let data = null;
    if(checkDataCache("data")) {
        // 2. take from cache
        data = loadDataFromCache("data")
        cb(data)
    }else {
        // 3. take from API      
        loadDataFromAPI(cb)
    }
}

const saveDataToCache = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data) )
}

const loadDataFromCache = (key) => {
   return JSON.parse(localStorage.getItem(key))
}

const checkDataCache = (key) => {
    return localStorage.getItem(key)
}

const render = data => {
    console.log(data)
  
}

// getDataFromAPI(render)
// loadDataFromCache()

load(render)

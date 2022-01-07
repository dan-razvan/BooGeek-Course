// const xhr = new XMLHttpRequest();
// xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=chisinau&appid=50f5fce0632d826ec7e4875d23c17ac1&units=metric`);
// xhr.send();

// xhr.addEventListener("load", ()=>{
//     const data= JSON.parse(xhr.responseText)
//     console.log(data)
// })


//managed to fetch
const xhr = fetch(`https://api.openweathermap.org/data/2.5/weather?q=chisinau&appid=50f5fce0632d826ec7e4875d23c17ac1&units=metric`)
.then(response => {
    // console.log(response.json())
    return response.json()
})
.then(data => {
    console.log(data.name)
})
// console.log(xhr.base)



// ...to be continued
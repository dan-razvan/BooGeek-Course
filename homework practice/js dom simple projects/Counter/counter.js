const button1 = document.getElementById("first-button")
const button2 = document.getElementById("second-button")
const counter = document.getElementById("counter")


let temp = 1;


button1.addEventListener("click", ()=> {
    temp++
    counter.innerHTML  = temp;
    
})

button2.addEventListener("click", () => {
    if(temp > 1){
        temp--;
        counter.innerHTML = temp;
    }
})
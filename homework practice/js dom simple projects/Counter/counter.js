const button1 = document.getElementById("first-button")
const button2 = document.getElementById("second-button")
const counter = document.getElementById("counter")
let counterValue = counter.innerHTML;
console.log(counterValue+1)

let temp = 1;


button1.addEventListener("click", ()=> {
    temp++
    counterValue = temp;
    
})

button2.addEventListener("click", () => {
    if(temp > 1){
        temp--;
        counterValue = temp;
    }
})
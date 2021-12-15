const bill = document.getElementById("bill-input")
const serviceLevels = document.getElementsByClassName("radio")
const options = document.getElementById("number-of")
const calculate = document.getElementById("calculate")
const tipDisplay = document.querySelector(".display-tip")


calculate.addEventListener("click", () => {
    tip = calculateTip(billAmount, numOfPersons())
    console.log(calculateTip(billAmount, numOfPersons()))
    tipDisplay.innerText = tip;
})

let billAmount = 0;
bill.addEventListener("input", ()=>{
    billAmount = parseFloat(bill.value)
    
})

let numOfPersons = () => {
    for(let i = 0; i < options.children.length-1; i++) {
        console.log(options.children[i])
        if(options.children[i].selected){
            console.log(i)
            return i+1
        }
    }
}

let currentServiceLevel = () => {
    for(let i = 0; i<serviceLevels.length; i++){
        if(serviceLevels[i].checked){
            return serviceLevels[i].id
        }
    }
}

const calculateTip = (bill,  persons) =>{
    switch(currentServiceLevel()){
        case "outstanding":
            return `$${((bill  * 0.3) / persons).toFixed(2)}`
            break;
        case "good":
            return `$${(bill  * 0.2 / persons).toFixed(2)}`
            break;
        case "okish":
            return `$${(bill  * 0.15 / persons).toFixed(2)}`
            break;
        case "bad":
            return `$${(bill  * 0.1 / persons).toFixed(2)}`
            break;
        case "never":
            return `$${(bill  * 0 / persons).toFixed(2)}`
            break;
    }
}


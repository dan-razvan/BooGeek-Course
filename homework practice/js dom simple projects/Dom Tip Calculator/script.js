const bill = document.getElementById("bill-input")
const serviceLevels = document.getElementsByClassName("radio")
const options = document.getElementById("number-of")
const calculate = document.getElementById("calculate")
const tipDisplay = document.querySelector(".display-tip")


calculate.addEventListener("click", () => {
    tip = calculateTip(billAmount, currentServiceLevel(), options.value)
    tipDisplay.innerText = tip;
})

let billAmount = 0;
bill.addEventListener("input", ()=>{
    billAmount = parseFloat(bill.value)
    
})


let currentServiceLevel = () => {
    for(let i = 0; i<serviceLevels.length; i++){
        if(serviceLevels[i].checked){
            return serviceLevels[i].value
        }
    }
}

const calculateTip = (bill, value, persons) => {
    return `$${(bill * value / persons).toFixed(2)}`
}


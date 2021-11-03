
class Button {
    constructor(text, type, action) {
        this.text = text
        this.type = type
        this.action = function(){
            console.log("1")
        }
    }

    render(parrent_id) {
        // ???
        // hint: html representation of the button - <button class="???" onclick="???">???</button> 
        parrent_id.innerHTML += `<button class="success" style="color:red";> OK</button>`
    }

}

function okAction() {
    alert("You've accepted")
}
function cancelAction() {
    alert("You've canceled")
}

//  ???
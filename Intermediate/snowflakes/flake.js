// FLAKE COMPONENT
class Flake {  

    // * APPEAR
    constructor( n, left, top, speed, size ) {
        this.n     = n
        this.top   = top
        this.left  = left
        this.speed = speed
        this.size  = size
        
    }

    // I added colorful method that takes a random number as parameter and with the switch statement this random number will add 
    // a different class which will set a different flake color 
    colorful(num){
        let flake = document.querySelector(`#flake__${this.n}`)

        switch(num){
            case 1:
                return flake.classList.add("flakeColor")
                break;
            case 2:
                return flake.classList.add("anotherFlakeColor")
                break;
            default:
                break
        }

    }

    fall(cw, ch, cb) {
         this.timerId = setInterval(()=> {
            this.top += this.speed 
            this.update()
            // if(this.top >= ch){
            //     this.disappear(cb)
            // }
        }, 20 )
    }

    // *DISSAPEAR
    disappear(cb) {
        clearInterval(this.timerId)
        // document.querySelector("#flake__${this.n").classList.remove(".flake")
        // console.log(`FLAKE ${this.n}: DISAPPEARED`, this) 
        window[`flake__${this.n}`].style.display = "none"
        cb()
    }
    update() {
        // SEARCH THE DIV OF THE CURRENT FLAKE
        window[`flake__${this.n}`].style.top = `${this.top}px`
    }
   
    //PRESENTATION
    render(root){

        root.innerHTML += `<div id="flake__${this.n}" class="flake" style="transform: scale(${this.size});left: ${this.left}px; top: ${this.top}px;">${this.n}</div>`
    }
}

//OOP: Classes -> Object / constructor

class Flake {  //PascalCase (cu itera mare)

    // *APPEAR
    constructor( n, left, top, speed ) {
        this.n = n
        this.top = top
        this.left = left
        this.speed = speed
        console.info(`FLAKE ${this.n}: APPEARED`)



    
    }
    fall(cw, ch) {
         this.timerId = setInterval(()=> {
            this.top += this.speed 
            console.log(`FLAKE ${this.n}: FALL`, this) 

            // // SEARCH THE DIV OF THE CURRENT
            // window[`flake__${this.n}`].style.top = `${this.top}px`
            this.update()
            if(this.top >= 700){
                this.disappear()
            }
        }, 20 )
    }

    // *DISSAPEAR
    disappear() {
        clearInterval(this.timerId)
        console.log(`FLAKE ${this.n}: DISAPPEARED`, this) 

    }
    update() {
        // SEARCH THE DIV OF THE CURRENT
        window[`flake__${this.n}`].style.top = `${this.top}px`
    }
   
    //PRESENTATION
    render(root){

        root.innerHTML += `<div id="flake__${this.n}" class="flake" style="left: ${this.left}px; top: ${this.top}px;">${this.n}</div>`
    }
}



/*
    LIFECYCLE (for a flake)

    * APPEAR
    |
    |
    falling phase
    |
    |
    * DISAPPEAR
*/
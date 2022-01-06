class NumberProvider {
    constructor(min=-100,max=100){
        // 1. Validation - DONE
        if(Number.isInteger(min / max) ){
            this.min = min
            this.max = max
        }else {
            console.error("Numbers must be integers")
        }
        
        
        this.start()
    }
    
    // 2. arrow notation - DONE
    generate = () => {
        return Math.round(Math.random() * (this.max - this.min) + this.min)
    }

    whenPositive(positiveCB) {
        this.positiveCB = positiveCB

    }

    //DONE
    whenNegative(negativeCB) {
        this.negativeCB = negativeCB;
    }

    start() {
        setInterval(()=>{
            let number = this.generate()
            if(number>=0) {
                // III. primim eroare deoarece deocamdata aceasta functie nu este declarata. 
                // ea urmeaza sa primeasca o valoare abia cand chemam functia whenPositive()
                this.positiveCB(number)
                
            }
            /* 3. ??? */
        },1000)
    }

}


// Viii. Eroarea a disparut pentru ca acum this.positiveCB = positiveAction(). 
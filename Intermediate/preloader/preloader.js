class BasePreloader {

    constructor(rootDiv, interval, speed) {
        this.rootDiv = rootDiv
        this.interval = interval
        this.speed = speed


        
        this.init()
        this.onload()
    }

        get timer () {
            return this.timerId
        }

        set timer(timer){
            this.timerId = timer
        }
        
        onload() {
            let timerId = setInterval(() => {
                this.step()
                if(this.condition()){
                    clearInterval(timerId)
                }
                
                this.rootDiv.innerHTML = this.render()

            }, this.interval);
        }

        // abstract methods
        condition() {
            throw new ReferenceError("You must implement the condition() method inside the inheriting class");

        }
        step() {
            throw new ReferenceError("You must implement the condition() method inside the inheriting class")
        }
        render() {
            throw new ReferenceError("You must implement the condition() method inside the inheriting class")
        }
        init () {}

}
//////////////////////////////////////////
class ProgressPreloader extends BasePreloader{

    constructor(rootDiv, interval, speed ) {
        super(rootDiv, interval, speed)
    }

    init() {
        this.progress = 0
    }

    condition (){
        return this.progress >= 100
    }
    step () {
        return this.progress += this.speed
    }

    render() {
         return `[${this.progress}%]`
    }

}

///////////////////////////////////////////
class CircularPreloader extends BasePreloader{

    constructor(rootDiv, interval, speed) {
        super(rootDiv, interval, speed)
    }
        
    init() {
        this.duration = 3000
        this.frames = ['|', '/', '--', '\\'];

    }

    condition (){
        return this.duration <= 0
    }

    // step () {
    //     this.duration -= this.decreasedDuration
    //     let frame = this.frames.pop()
    //     this.frames.unshift(frame)
    //     }

    step () {
        this.duration -= this.speed
        let frame = this.frames.shift()  
        this.frames.push(frame)
    }

    // step () {
    //     this.duration -= this.decreasedDuration
    //     for(let i = 0; i< this.frames.length; i++){
    //         this.frames[i] = this.frames[i+1]
    //     }
    //     this.frames[this.frames.length-1] = this.frames[0]
    // }

    render() {
        
         return `[${this.frames[0]}]`
    }

}

///////////////////////////////////////

class IncompletePreloader extends BasePreloader{

    constructor(rootDiv, interval,speed) {
        super(rootDiv, interval,speed)
    }

    init() {
        this.progress = 0
    }

    // condition (){
    //     return this.progress >= 100
    // }
    step () {
        return this.progress += this.speed
    }

    render() {
         return `[${this.progress}%]`
    }
}
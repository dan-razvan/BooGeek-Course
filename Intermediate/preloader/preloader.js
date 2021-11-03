class BasePreloader {

    constructor(rootDiv, interval, speed) {
        this.rootDiv = rootDiv
        this.interval = interval
        this.speed = speed
        this.init()
        this.onload()
    }

    onload() {
        this.timerId = setInterval(() => {
            this.step()
            if(this.condition()){
                clearInterval(this.timerId)
            }
            
            this.rootDiv.innerHTML = this.render()

        }, this.interval);
    }

    // abstract methods
    condition() {
        throw new ReferenceError("You must implement the condition() method inside the inheriting class");
        console.log("1")
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

    constructor(rootDiv, interval , speed) {
        super(rootDiv, interval, speed)
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

///////////////////////////////////////////
class CircularPreloader extends BasePreloader{

    constructor(rootDiv, interval, speed) {
        super(rootDiv, interval, speed)
    }
        
    init() {
        this.duration = 3000
        // this.frames = ['/', '--', '|', '\\'];
            this.frames = ['1', '2', '3', '4']
    }

    condition (){
        return this.duration <= 0
    }
    step () {
        this.duration -= this.speed
        // let frame = this.frames.shift()  
        // this.frames.push(frame)
        let frame = this.frames[0]
        for(let i = 0; i< this.frames.length; i++){
            this.frames[i] = this.frames[i+1]
        }
        this.frames[this.frames.length-1] = frame


    }

    render() {
        
         return `[${this.frames[0]}]`
    }

}

///////////////////////////////////////

class IncompletePreloader extends BasePreloader{

    constructor(rootDiv, interval , speed) {
        super(rootDiv, interval, speed)
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
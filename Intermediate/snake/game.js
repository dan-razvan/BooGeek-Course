

class Component {
    
    constructor (x, y, w, h, key, frames, rootElement) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.frames = frames
        this.key = key
        

        this.currentFrame = this.getFrame(this.key)
        // this.currentFrame = this.frames[Object.keys(this.frames)[0]]
        console.log(this.currentFrame)
        
        this.rootElement = rootElement

        this.children = []

        this.render()

        

    }

    getFrame(key) {
        if(key >= 0 ) {
            return Object.values(this.frames)[key]
        }else if(key < 0){
            let x = Object.values(this.frames)
            return x[x.length + key]
        
        }else if(this.key.length > 0){
            return this.frames[key]
    
        }

}

    addChild(obj){
        this.children.push(obj)
    }
    removeChild(){

    }

    render() {
        

        // HW1: refactor the next 2 lines with destructuring
        let xOffset = this.currentFrame.x
        let yOffset = this.currentFrame.y

    //     let a  = Object.keys(this.frames)[1]
    //     console.log(typeof(a))

    //    let {a: {x: xOffset}, a: {y : yOffset}} = this.frames

        
        this.rootElement.innerHTML += `
            <div 
                id="component" 
                class="component" 
                style="background-position: ${xOffset}px ${yOffset}px";
                > 
                </div>
                `
    }

}


class SnakeHead extends Component{

} 

class SnakeBody extends Component {

}

class SnakeTail extends Component{

}

class Snake extends Component {
    constructor(rootElement) {
        super(0,0,0,0, 0, {x:0, y:0}, rootElement)
        

        this.children.push(new SnakeHead(0, 0, 64, 64,1, { 
                up: {x: -192, y: 0}, 
                right: { x: -256, y: 0}, 
                down: {x: -256, y: -64 }, 
                left: {x: -192, y: -64} }, window["test"]))

        this.children.push(new SnakeBody(0, 0, 64, 64,4, { 
            br: {x: 0, y: 0}, 
            tl: { x: -128, y: -128}, 
            tr: {x: -128, y: 0 }, 
            hor: {x: -64, y: 0},
            ver: {x: -128, y: -64},
            bl: {x: 0, y: -64} },
             window["test"]))
    

                
        this.children.push(new SnakeTail(0, 0, 64, 64,1, { 
            up: {x: -192, y: -128}, 
            right: { x: -256, y: -128}, 
            down: {x: -256, y: -192 }, 
            left: {x: -192, y: -192} }, window["test"]))

    console.log(this.currentFrame)
    console.log(typeof(this.currentFrame))

    }

}

class Apple extends Component {

}

class Map extends Component {


}

let head = new SnakeHead(0, 0, 64, 64, "left",{ 
    up: {x: -192, y: 0}, 
    right: { x: -256, y: 0}, 
    down: {x: -256, y: -64 }, 
    left: {x: -192, y: -64} }, window["test"])
//     console.log(head)


// let apple = new Apple(0, 0, 64, 64, {default: {x: 0, y: -192}}, window["test"])

// let tail = new SnakeTail(0,0,64,64,3, {
//         up: {x: -192, y: -128}, 
//         right: { x: -256, y: -128}, 
//         down: {x: -256, y: -192 }, 
//         left: {x: -192, y: -192} }, window["test"]
//     )

// let snake = new Snake(window["test"])
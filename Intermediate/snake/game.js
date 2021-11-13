

class Component {
    
    constructor (x, y, w, h, frames, rootElement) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.direction = "up"
        this.frames = frames
        this.currentFrame = this.getFrame(0)
        // this.currentFrame = this.frames[Object.keys(this.frames)[0]]
        this.rootElement = rootElement
        this.children = []
        this.render() 
    }

    createDiv(rootElement, className, style) {

    }

    update() {

    }

    getFrame(key) {
        if(key >= 0 ) {
            return Object.values(this.frames)[key]
        }else if(key < 0){
            let x = Object.values(this.frames)
            return x[x.length + key]
        
        }else if(typeof(this.key === "string")){
            return this.frames[key]
    
        }
}

    addChild(obj){
        // console.log(this.children.includes(obj.getFrame(this.key)))
        if(!this.children.includes(obj.getFrame(this.key)) && obj instanceof Component){
            // console.log(obj)
            this.children.push(obj)
        }

    }
    removeChild(obj , frame){
        console.log(obj instanceof Component)
        if(obj instanceof Component){

            let index;
            this.children.some(function(obj,i) {
                if(obj.currentFrame = frame){
                    index = i
                }
            })
            console.log(index)
            this.children.splice(index, 1)


            // this.div.remove(obj)
        
        }
    }
  

    render() {
        
        let componentClassName = this.constructor.name    // it reveals in dom elements which class is this object from

        //before render

        // right now currentFrame is declared in the construction as the frame on the first position within frames object
        // now we want to check if there is a frame with the value of this.direction
        // and if there is this.currentFrame will take the value of this direction ("right", "up" etc)

        let dirFrame = this.frames[this.direction]
        if(dirFrame) {
            this.currentFrame = dirFrame
        }

        let {x: xOffset, y: yOffset} = this.currentFrame

            // remembers the link to DOM element
            // basically what happens is that by having this.div, we turn the variable div into a property for the component object
            // whenever we want to refer back to the element that is tied to this property we write "component.div", instead of looking for it through the id
            this.div = document.createElement('div')               
                this.div.className = `component ${componentClassName}` // HW - 
                this.div.style = `background-position: ${xOffset}px ${yOffset};
                top:  ${this.y+10};
                left: ${this.x+10};
                `
            this.rootElement.appendChild(this.div)
    }
}


class SnakeSegment extends Component {

    movement() {
        switch(this.direction){
            case "up":
                if(this.y >= 64) {
                    this.y -= 64
                    this.div.style.top = `${this.y+10}px`  
                }
                break;
            case "right":
                if(this.x <= 758){
                    this.x += 64
                    this.div.style.left = `${this.x+10}px`
                }
                break;
            case "left":
                if(this.x >= 64){
                    this.x -= 64
                    this.div.style.left = `${this.x+10}px`
                }    
                break
            case "down":
                if(this.y <= 364){
                    this.y += 64
                    this.div.style.top = `${this.y+10}px`
                }
                break
            default: 
                break;
        }

        //update the div inside dom
        this.dirFrame = this.frames[this.direction]   // *IDEA Try to see what happens if you turn this into this.dirFrame
            if(this.dirFrame) {
                this.currentFrame = this.dirFrame
            }
            let {x: xOffset, y: yOffset} = this.currentFrame
            this.div.style.backgroundPosition =  `${xOffset}px ${yOffset}px`

    }


}


class SnakeHead extends SnakeSegment {

    update (e) {

        if(e != undefined) {
            if(e.key == "ArrowUp") {
                this.direction  = "up"
                }   
            else if(e.key == "ArrowRight") {
                this.direction = "right"
            }else if(e.key == "ArrowLeft") {
                this.direction = "left"
            }else if(e.key == "ArrowDown") {
                this.direction = "down"
            }
        }
        this.movement()

 
    }
} 

class SnakeBody extends SnakeSegment {
    
    update(){

        this.movement()

     

    }
}

class SnakeTail extends SnakeSegment{
    update () {   

        this.movement()
        
    }
}

class Snake extends Component {
    constructor(rootElement) {
        super(0,0,0,0, {x:0, y:0}, rootElement)


        this.addChild(new SnakeHead(0, 256, 64, 64, { 
            up: {x: -192, y: 0}, 
            right: { x: -256, y: 0}, 
            down: {x: -256, y: -64 }, 
            left: {x: -192, y: -64} }, rootElement))

        this.addChild(new SnakeBody(0, 320, 64, 64, { 
            ver: {x: -128, y: -64},
            br: {x: 0, y: 0}, 
            tl: { x: -128, y: -128}, 
            tr: {x: -128, y: 0 }, 
            hor: {x: -64, y: 0},
            bl: {x: 0, y: -64} },
            rootElement))
    

                
        this.addChild(new SnakeTail(0, 384, 64, 64, { 
            up: {x: -192, y: -128}, 
            right: { x: -256, y: -128}, 
            down: {x: -256, y: -192 }, 
            left: {x: -192, y: -192} }, rootElement))
    }

    update (e) {
            // for(let i = 0; i<this.children.length;i++){
            //     this.children[i].update(e)

            // }
        this.children.forEach(child => child.update(e))
    }


    render(){

    }

}

class Apple extends Component {

}

class Map extends Component {

    start() {

        document.body.addEventListener('keydown', this.update.bind(this))  // HW learn about bind, apply etc

        setInterval(() =>{
            this.update()

        },1000)
    }

    update(e) {
        // console.log(e,this)

        this.children.forEach(element => element.update(e))

    }

    render() {
        
        let div = document.createElement('div')
        // div.className = "component"

        div.style = 
            `border: 10px solid black;
            position:absolute;
            width: ${this.w}px;
            height: ${this.h}px;
            background-image: linear-gradient(transparent 99%, gray), linear-gradient(90deg, transparent 99%, gray);
            background-size: 64px 64px;
            `
       
        this.rootElement.appendChild(div)
    }

}



let gameMap = new Map(0,0, 832, 448, {default:{x:0, y:0}}, window["map"])



let apple = new Apple(256, 128, 64, 64, {default: {x: 0, y: -192}}, window["map"])

gameMap.children.push(new Snake(window["map"]))
gameMap.addChild(new Apple(256, 128, 64, 64, {default: {x: 0, y: -192}}, window["map"]))
// gameMap.removeChild(new Apple(256, 128, 64, 64, {default: {x: 0, y: -192}}, window["map"]))



gameMap.start()

gameMap.addChild(new Apple(300, 128, 64, 64, {default: {x: 0, y: -192}}, window["map"]))
gameMap.addChild(new Apple(300, 128, 64, 64, {default: {x: 0, y: -192}}, window["map"]))
gameMap.removeChild(new Apple(300, 128, 64, 64, {default: {x: 0, y: -192}}, window["map"]), {x: 0, y: -192})
// gameMap.removeChild(new Apple(300, 128, 64, 64, {default: {x: 0, y: -192}}, window["map"]), {x: 0, y: -256})
// gameMap.removeChild(new Apple(300, 128, 64, 64, {default: {x: 0, y: -192}}, window["map"]), {x: 0, y: -193})

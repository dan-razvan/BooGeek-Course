1.Execute the entire example from the MEET recording and try to understand the code, test it.

    Done this many many many times before I even read the homework requirements :)

2. In the class "CircularPreloader", change the way the frames are "shifted", this time from the back to the beginning

   - OLD

   step () {
   this.duration -= this.speed
   let frame = this.frames.shift()
   this.frames.push(frame)
   }

   - NEW

   step () {
   this.duration -= this.speed
   let frame = this.frames.pop()
   this.frames.unshift(frame)
   }

3. In the class "CircularPreloader", find another way to "iterate" the frames without using: push, pop, unshift, or shift

   - OLD

     step () {
     this.duration -= this.speed
     let frame = this.frames.shift()  
      this.frames.push(frame)
     }

   - NEW (mai anevoios, dar merge exact la fel. am verificat)

     step () {
     this.duration -= this.speed
     let frame = this.frames[0]

     for(let i = 0; i< this.frames.length; i++){
     this.frames[i] = this.frames[i+1]
     }

     this.frames[this.frames.length-1] = frame
     }

4. Improve the init() + onload() methods, so both descendant classes can use different "speed" of animation

class BasePreloader {

    constructor(rootDiv, INTERVAL, speed) {
        this.rootDiv = rootDiv
        this.INTERVAL = INTERVAL
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

        }, this.INTERVAL);
    }

    * To solve this I added the "interval" parameter to the parent class constructor. Then I replaced the interval in the onload() method with this.interval. I also added the interval as a parameter to the inheriting classes.
    Next whenever I start a new preloader I make sure to add a number as a second parameter, in miliseconds (this is probably is to obvious but I decided to say it anyway to make sure you know that I understand how it works)

    PS: I also added speed parameter (as an experimet) to use as an incrementer in the step method of the inheriting classes


    5. Add another class called IncompletePreloader (named this way because you are not going to provide all the methods required ), this class should be an exact copy of the ProgressPreloader class, but you have to remove the "condition" method definition from it

    DONE

    6. Start a preloader of this type and check it's behaviour, what changed? why? - explain in details!

    * The thing that changed here is that now the preloader is setto run forever. This is because the condition was meant to trigger the clearInterval() method, which in turn would cancel the repeating action established by the setInterval() method. Without the condition, the clearInterval() method will never be caller.

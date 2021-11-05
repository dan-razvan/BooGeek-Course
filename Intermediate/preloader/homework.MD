1.Execute the entire example from the MEET recording and try to understand the code, test it.

    Done many times.

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

     for(let i = 0; i< this.frames.length; i++){
     this.frames[i] = this.frames[i+1]
     }

     this.frames[this.frames.length-1] = this.frames[0]
     }

4. Improve the init() + onload() methods, so both descendant classes can use different "speed" of animation

class BasePreloader {

    * To solve this I added the "interval" parameter to the parent class constructor.

    constructor(rootDiv, INTERVAL) {
        this.rootDiv = rootDiv
        this.INTERVAL = INTERVAL
        this.init()
        this.onload()
    }

    * Then I replaced the interval in the onload() method with this.interval. I also added the interval as a parameter to the inheriting classes.


    onload() {
        this.timerId = setInterval(() => {
            this.step()
            if(this.condition()){
                clearInterval(this.timerId)
            }
            this.rootDiv.innerHTML = this.render()

        }, this.INTERVAL);
    }
        * Now whenever I start a new preloader I make sure to add a number as a second parameter, in miliseconds

        let pp1 = new ProgressPreloader(window["prel-1"], 500)

        * I wanted to improve the init() method and add a new propriety called progressSpeed for the first class and durationDecrease for the second class. I realized that these proprieties do not require to be in the init method, and therefore I decided to add an argument to the constructor, which I called speed. Both inheriting classes are able to use it. Progress preloader can use it as a progress increase, while CircularPreloader can use it as a duration decrease. If feels like it's offering more mobility this way. I don't need to change anything inside the class itself, if I want to increase or decrease speed.
        Please let me know if I should have done anything else better.

        class BasePreloader {

            constructor(rootDiv, interval, speed) {
                this.rootDiv = rootDiv
                this.interval = interval
                this.speed = speed
            }


    5. Add another class called IncompletePreloader (named this way because you are not going to provide all the methods required ), this class should be an exact copy of the ProgressPreloader class, but you have to remove the "condition" method definition from it

    DONE

    6. Start a preloader of this type and check it's behaviour, what changed? why? - explain in details!

    * The thing that changed here is that now the preloader is set to run forever. This is because the condition was meant to trigger the clearInterval() method, which in turn would cancel the repeating action established by the setInterval() method. Without the condition, the clearInterval() method will never be caller.


    7. We will modify the BasePreloader in such a manner that it will indirectly "check" if the descendant implemented the "condition" logic, to do this, add this code


     throw new ReferenceError("You must implement the condition() method inside the inheriting class")


     inside the "condition" method of the BasePreloader


    * I added this to the condition as required. It feels like I am missing something though because this one feels to easy to be true.

        condition() {
            throw new ReferenceError("You must implement the condition() method inside the inheriting class")
        }

    8. Run the modified code and explain what happens, explain detailed: what is "throw", why we used new ReferenceError and not simply Error? What is ReferenceError?

    * What happens is that the program stops running after throwing the error. The error is defined by the programmer, for the purpose of throwing an exception. In this case we use RefferenceError meaning that the program is refferencing a function that isn't declared. I assume we are using RefferenceError instead of simply using error because we want to be more specific when it comes to throwing errors, so that we instantly know what's going on. In this example it's easier to figure it out, but I guess that when we are handling huge projects this will be very helpful.
    Bottom line, I am not sure if I used this correctly. I know that we usually have to throw the error in an if statement, but here I really didn't know what condition to use, so it would be really helpful if you could expand on this topic during the meeting. Also I know there is catch, try, finally and I would love to learn more about those also.

    9. Apply the same "pattern" to the other abstract methods that have to be checked for implementation inside the descending classes

     *
        step() {
            throw new ReferenceError("You must implement the condition() method inside the inheriting class");
        }
        render() {
            throw new ReferenceError("You must implement the condition() method inside the inheriting class");
        }

    10. None of our classes apply the "encapsulation" principle, is it bad? - yes, let's imagine this scenario:
    - we create a preloader object    let p = new ProgressPreloader(....), after which it starts, and somewhere lower in the code by accident the coder writes " if( p.timerId = null ) " - instead of comparison, his code can accidentally make the preloader "forget" it's timer, which will result in an never clearing interval (forever looped timer).

    Your job is by using set/get and the encapsulation principle, to make it so the "timerId" property can be set only inside the class (any of the classes), but so it can be ONLY READ from the outside code

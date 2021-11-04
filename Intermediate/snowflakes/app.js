//SETTING
const containerW = 1700
const containerH = 900



let count = 1 

// initial WAVE
setInterval(() => {
    if(count < 200 ) {
        addAnotherFlake()
    }
}, 100) 
// Am pus interval 100, deoarece am observat ca asta face o trecere mai frumoasa. Nu mai lasa gap-ul intre initial wave si restul
// De asemenea am adaugat mai multi fulgi deoarece am marit coordonatele.

    


function addAnotherFlake () {
    count++
    let scale = randFloat(0.5, 1.5)
    let f = new Flake(count, randCoord(0, containerW), 0, scale, scale)
    f.render(scene)

    // inserting flake colors using the colorful() method declared in flake.js and the randColor() method declared in random.js
    f.colorful(randColor())
    f.fall(containerW, containerH, addAnotherFlake)
}


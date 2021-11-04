//SETTING
const containerW = 1500
const containerH = 700



let count = 1 

// initial WAVE
setInterval(() => {
    if(count < 150 ) {
        addAnotherFlake()
    }
}, 100)

    


function addAnotherFlake () {
    count++
    let scale = randFloat(0.5, 1.5)
    let f = new Flake(count, randCoord(0, containerW), 0, scale, scale)
    f.render(scene)
    f.colorful(randColor())
    f.fall(containerW, containerH, addAnotherFlake)
}


//SETTING
const containerW = 800
const containerH = 700


let f1 = new Flake(1, 200, 0, 1)
f1.render(scene)
f1.fall()

let f2 = new Flake(2, 350, 0, 1.5)
f2.render(scene)
f2.fall()

// for(let n =1; n <=50; n++){
//     setTimeout(() => {
//         let f2 = new Flake(2, randCoord(0, containerW), 0, 2)
//         f2.render(scene)
//         f2.fall(containerW, containerH)
    
//     },randDelay(5000))
// }


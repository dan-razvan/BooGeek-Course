function randCoord(min, max) {
    return Math.floor(min + (max - min) * Math.random())
}

function randDelay(delay) {
    return Math.floor(delay * Math.random())
}

function randFloat(min, max) {
    return min+(max-min) * Math.random()
}

//the function that helps with setting the flake color
function randColor(){
    return Math.ceil(3 * Math.random())
}
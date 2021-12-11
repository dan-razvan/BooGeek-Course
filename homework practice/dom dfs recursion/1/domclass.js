let findByClass = (root, className, arr = new Array()) => {

    
    if(root.className.length > className.length 
        && root.className[className.length] == " "){
        root.className = root.className.slice(0, className.length)
    }
    if(root.className == className){
        arr.push(root.className)


    } 

    for(let i = 0; i< root.children.length; i++) {
        let foundClass = findByClass(root.children[i], className,arr)
    }

    return arr
} 

let array = []
console.log(findByClass(root, "div", array));
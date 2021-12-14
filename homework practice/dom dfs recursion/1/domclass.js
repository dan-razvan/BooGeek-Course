let findByClass = (root, className) => {

    
    if(root.className.length > className.length 
        && root.className[className.length] == " "){
        root.className = root.className.slice(0, className.length)
    }
    if(root.className == className){
        array.push(root.className)


    } 

    // for(let i = 0; i< root.children.length; i++) {
    //     let foundClass = findByClass(root.children[i], className,arr)
    // }

    let children = [...root.children]

    children.forEach(child => {
        findByClass(child, className)
    })

    return array
} 

let array = []
console.log(findByClass(root, "dom", array));
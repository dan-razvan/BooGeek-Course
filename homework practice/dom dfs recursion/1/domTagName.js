

const findElementsByTagName = (root, tagName) => {
    // console.log(`visiting ${root.childNodes[0].textContent.trim()}`)
    // let tag = root.tagName.toLowerCase()
    let arr = []
    if(root.tagName.toLowerCase() == tagName) {
    
        arr.push(root.tagName)
        console.log(arr)
        if(arr.length == root.childNodes.length){
            return arr
        }
    }
    

    for(let i = 0; i< root.children.length; i++){
        let foundArr = findElementsByTagName(root.children[i], tagName)

        if(foundArr){
            foundArr.push(root.children[i])
            if(foundArr.length == root.childNodes.length){
                console.log("i")
                return foundArr
            }

            
        }
    }

    
}


debugger;
console.log(findElementsByTagName(root, "div"))
const findElementById = (root, id) => {
    console.log(`visiting ${root.childNodes[0].textContent.trim()}`)
    if(id == root.id){

        return root
    }

    // for(let i = 0; i<root.children.length; i++){
    //     let foundId = findElementById(root.children[i], id)

    //     if(foundId != undefined) {
    //     console.log("aa")
    //         return foundId
    //     }
    // }
    let children = [...root.children]
    children.forEach(child => {
        
        let foundId = findElementById(child, id)
        
        if(foundId != undefined){
            console.log(foundId)
            // aceeasi treaba ca si la find.js. Ceva misterios la mijloc
            return foundId
        }
    })

    return null
}

console.log(findElementById(root,"6"));
 
const findElementById = (root, id) => {
    console.log(`visiting ${root.childNodes[0].textContent.trim()}`)
    if(id == root.id){

        return root
    }

    // for(let i = 0; i<root.children.length; i++){
    //     let foundId = findElementById(root.children[i], id)

    //     if(foundId != undefined) {
    //         return foundId
    //     }
    // }

    let foundId = null
    let children = [...root.children]
    children.forEach(child => 
        
        foundId = findElementById(child, id) ?? foundId
    );

    return foundId
}

let found = findElementById(root,"4")

console.log(`Found in `, found);
 
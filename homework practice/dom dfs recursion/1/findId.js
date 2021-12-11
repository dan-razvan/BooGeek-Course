

const findElementById = (root, id) => {

    if(id == root.id){
        console.log("inside if")
        return root
    }

    for(let i = 0; i<root.children.length; i++){
        let foundId = findElementById(root.children[i], id)

        if(foundId != undefined) {
            return foundId
        }
    }
    return null
}

console.log(findElementById(root,"third-floor"))

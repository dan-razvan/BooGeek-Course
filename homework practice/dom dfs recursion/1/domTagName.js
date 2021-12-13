

const findElementsByTagName = (element, tagName, arr = new Array()) => {
    
    let rootTag = root.tagName.toLowerCase()
    if(rootTag == tagName) {

        // console.log(`visiting ${element.childNodes[0].textContent.trim()}`)

        arr.push(rootTag)
    }

    // for(let i = 0; i< element.children.length; i++){
    //     let foundArr = findElementsByTagName(element.children[i], tagName, arr)

    // }

    let tagChildren = [...element.children]

    tagChildren.forEach(child => {
        findElementsByTagName(child, tagName, arr)
    })
    
    return arr

}

let array =[]
console.log(findElementsByTagName(root, "div", array));
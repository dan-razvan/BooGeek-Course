const find = (element, what) => {
    // console.log(element)
    let content = element.childNodes[0].textContent.trim()
    // console.log(element.childNodes[0])
    console.log(
        `visiting '${content}'`
        
    )
    // console.log(element)
    




    if(what == content) {

        return element;
        
    }
    // let childrenList = [...element.children]

    // childrenList.forEach(child => {
    //     console.log(child)
    //     let found = find(child, what)

    //     if(found != undefined) {
    //         return found;
    //     }
    // })

    for(let index = 0; index < element.children.length; index++) {
        let found = find(element.children[index], what)
        // console.log("a"+element.children[index])
        if(found != undefined) {
            return found;
        }
    }
}

let found = find(root, "1.2.1")
console.log(`FOUND it in element: `, found)

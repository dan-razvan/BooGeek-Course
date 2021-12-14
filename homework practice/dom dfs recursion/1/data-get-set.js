const setData = (element, key, value) => {
    element.dataset[key] = value
}


const getData = (element, key) => {
    return element.dataset[key]
}

const removeData = (element, key)=>{
    element.removeAttribute(key)
}

const bubbleEvent = (element, root, key, value) => {
    let parent = element.parentElement

    setData(parent, key, value)
    if(parent  == root){
        return root
    }
    bubbleEvent(parent, root, key, value)
        
    
}
  
    

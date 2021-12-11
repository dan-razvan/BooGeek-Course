const visit = (element) => {

    // childNodes reprezinta o lista cu noduri copil ce apartin root-ului. 
    // Una din proprietati nodului de tip text este textContent
    // Aceasta are ca valoare atat textul cat si spatiul liber, dar si /n acolo unde
    // este mai mult de un rand. Din acest motiv s-a folosit metoda trim() care
    // sterge tot ce nu e strict text care e necesar.
    console.log(`visiting ${element.childNodes[0].textContent.trim()}`)

    // for(let i=0;i<element.children.length;i++){
    //     visit(element.children[i])

    // }

    let childrenList = [...element.children]
    childrenList.forEach((child) => {
        visit(child)
    })
}
visit(root) ;
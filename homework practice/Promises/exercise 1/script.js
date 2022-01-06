const data = {
    first: 1000,
    second: 2000   
}

// function getValueOf ( property, callback) {
//     setTimeout(() => {
//         if(data.hasOwnProperty(property)) {
//             return callback(data[property])
//         }else {
//             return callback(new ReferenceError("No such property in Data!"))
//         }
//     }, 3000 * Math.random());
// }

// getValueOf("first",(result)=>{
//     if( typeof result != ReferenceError ){
//         console.log( "Succes! Data: ", result )
//         getValueOf("second",(result)=>{
//             if( typeof result != ReferenceError ){
//                 console.log( "Succes! Data: ", result )
//             }else{
//                 console.log( "Data NOT available: ", result )
//             }
//         })
//     }else{
//         console.log( "Data NOT available: ", result )
//     }
// })

function getValueOf(property ) {
    return new Promise ((resolve, reject) => { 
        setTimeout(() => {
            if(data.hasOwnProperty(property)) {
                resolve(data[property])
            }else {
                reject(new ReferenceError("No such property in Data!"))
            }
        }, 3000 * Math.random());
    })

    
}

getValueOf("first")
    .then((result) => {
    console.log("Success! Data: ", result)
    return getValueOf("second")
    .then((result) => {
        console.log("Success! Data: ", result)
    })
})
.catch(err => {
    console.log("Data NOT available: " + err.message )
})
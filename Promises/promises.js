
let promiseToCleanTheRoom = new Promise(function(resolve, reject){
    // Cleaning the room

    let isClean = false;
    if(isClean) {
        resolve("Cleaned");
    } else {
        reject("not cleaned");
    }

});


promiseToCleanTheRoom.then(function(r){ // r cathces watver was sent back from the resolve
    console.log(`The room is ${r}` );
}).catch(function(r){
    console.log(`The room is ${r}` );
})

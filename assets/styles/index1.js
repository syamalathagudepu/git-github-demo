function first(callback) {
    console.log("starting first...");
// wait for 2 sec

setTimeout(() => {
console.log("ending first...")
callback()
}, 2000);

}

function second(callback) {
    console.log("starting second...");
// wait for 2 sec

setTimeout(() => {
console.log("ending second...")
callback()
}, 3000);

}

function third(callback) {
    console.log("starting third...");
// wait for 2 sec

setTimeout((resolve) => {
console.log("ending third...")
callback(resolve)
}, 5000);

}

first(() => {
    second ( () => {
        third ( ()=>{
        console.log("finished executing all");

        })
    })

})

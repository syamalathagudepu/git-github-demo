function first() {
  return new Promise((resolve) =>{
      console.log("starting first...");
// wait for 2 sec

setTimeout(() => {
console.log("ending first...")
resolve()
}, 2000);

  })

}

function second() {
    new Promise((resolve)=>{
        console.log("starting second...");
// wait for 2 sec

setTimeout(() => {
console.log("ending second...")
resolve();
}, 3000);
    })

}

function third() {
   new Promise((resolve)=> {
     console.log("starting third...");
// wait for 2 sec

setTimeout(() => {
console.log("ending third...")
resolve();
}, 5000);

})

}

first()
    .then(second)
    .then(third)
    .then(()=>{
        console.log("finished executing all functions")
    })
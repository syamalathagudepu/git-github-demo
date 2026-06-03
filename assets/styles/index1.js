function first() {
  return new Promise((resolve) =>{
      console.log("starting first...");
// wait for 2 sec

setTimeout(() => {
console.log("ending first...")
resolve();
}, 2000);

  })

}

function second() {
   return new Promise((resolve)=>{
        console.log("starting second...");
// wait for 3 sec

setTimeout(() => {
console.log("ending second...")
resolve();
}, 3000);
    })

}

function third() {
  return new Promise((resolve)=> {
     console.log("starting third...");
// wait for 5 sec

setTimeout(() => {
console.log("ending third...")
resolve();
}, 5000);

})

}

   await first();
   await second();
   await third();
   console.log("finished executing all functions")

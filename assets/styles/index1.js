// if the async function (executor) succeeds -> what we want the promise to do?
// if the async function fails -> what we want the promise to do?
let promise = new Promise((resolve, reject) => {
    console.log('promise is initializing...');

    // logic for the executor, async function within the promise
    console.log('async function executed!');

    // const data = [3, 4, 5, 6, 7];

    const error = 'fetching data failed';

    // after 3 seconds, let's resolve the async function
    setTimeout(() => {
        reject(error);
    }, 3000);
}); 

promise
    .then((data) => {
            // success callback -> resolve argument
            // onfullfilled
            console.log('the promise is resolved');
            console.log(data);
        })
    .catch((error) => {
            // failure callback -> reject argument
            // onrejected
            console.log('the promise is rejected');
            console.log('error:', error);
        })

        console.log(Promise);
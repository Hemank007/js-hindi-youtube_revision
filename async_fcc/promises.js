// Promises

// const promise = new Promise((reslove, reject) => {
//     reslove('Well Done! Promise One is Resolved')
// });
// const promiseTwo = new Promise((reslove, reject) => {
//     reslove('Well Done! Promise Two is Resolved')
// });
// const promiseThree = new Promise((reslove, reject) => {
//     reject('Well Done! Promise Three is Resolved')
// });

// promise
// .then((value) => {
//     console.log(value);
//     return promiseTwo
// })
// .then((value) => {
//     console.log(value);
//     return promiseThree
// })
// .catch((error) => {
//     console.log(error);
// })


// .catch((error) => {
//     console.log(error);
// })


const promiseOne = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise One Resolved!')
    }, 2000)
});

const promiseTwo = new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject('Promise Two Reject!')
    }, 1500)
});

Promise.all([promiseOne, promiseTwo])
.then((data) => console.log(data[0], data[1]))
.catch((error) => console.log(error));
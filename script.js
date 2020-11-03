//making promises

//colorChangeRemakeFromCallBackHell

const changeColor = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

changeColor("red", 1000)
  .then(() => changeColor("blue", 1000))
  .then(() => changeColor("green", 1000))
  .then(() => changeColor("lightblue", 1000))
  .then(() => changeColor("crimson", 1000))
  .then(() => changeColor("black", 1000));

// const anotherFakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       Math.random() < 0.7 ? resolve("Good Stuff") : reject("Damn..");
//     }, 1500);
//   });
// };

// anotherFakeRequest()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject();
//     }, 1000);
//   });
// };

// fakeRequest("dogs/d1")
//   .then(() => {
//     console.log("Done qith request");
//   })
//   .catch(() => {
//     console.log("Woopsie");
//   });
// // // THE CALLBACK VERSION
// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("Connection Timeout :(");
//     } else {
//       success(`Here is your fake data from ${url}`);
//     }
//   }, delay);
// };

// // THE PROMISE VERSION
// const fakeRequestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("Connection Timeout :(");
//       } else {
//         resolve(`Here is your fake data from ${url}`);
//       }
//     }, delay);
//   });
// };

// const fakeFetchingData = (url) => {
//   return new Promise((resolve, reject) => {
//     const delayTime = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delayTime > 4000) {
//         reject("Connection time out");
//       } else {
//         resolve("Fetched fake data successfully!");
//       }
//     }, delayTime);
//   });
// };

// fakeFetchingData("books.com")
//   .then(() => {
//     console.log("it worked 111111111111");
//     fakeFetchingData("books.com/page1")
//       .then(() => {
//         console.log("it worked  2222222222222");
//         fakeFetchingData("books.com/page2")
//           .then(() => {
//             console.log("it worked  3333333333333");
//           })
//           .catch(() => {
//             console.log("Failed 333333333333");
//           });
//       })
//       .catch(() => {
//         console.log("Failed 22222222222");
//       });
//   })
//   .catch(() => {
//     console.log("Failed 111111111111111");
//   });

// const fakeFetchingData = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("Woops, data fetching failed.");
//       } else {
//         const data = ["Harry Pottes", "Lord of the strings"];
//         resolve(data);
//       }
//     }, delay);
//   });
// };

// fakeFetchingData("youmedia.com/books")
//   .then((data) => {
//     console.log(`[1] with ::: ${data}`);
//     return fakeFetchingData("youmedia.com/books");
//   })
//   .then((data) => {
//     console.log(`[2] with ::: ${data}`);
//     return fakeFetchingData("youmedia.com/books");
//   })
//   .then((data) => {
//     console.log(`[3] with ::: ${data}`);
//     return fakeFetchingData("youmedia.com/books");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

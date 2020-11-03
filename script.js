// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

const fakeFetchingData = (url) => {
  return new Promise((resolve, reject) => {
    const delayTime = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delayTime > 4000) {
        reject("Connection time out");
      } else {
        resolve("Fetched fake data successfully!");
      }
    }, delayTime);
  });
};

fakeFetchingData("books.com")
  .then(() => {
    console.log("it worked 111111111111");
    fakeFetchingData("books.com/page1")
      .then(() => {
        console.log("it worked  2222222222222");
        fakeFetchingData("books.com/page2")
          .then(() => {
            console.log("it worked  3333333333333");
          })
          .catch(() => {
            console.log("Failed 333333333333");
          });
      })
      .catch(() => {
        console.log("Failed 22222222222");
      });
  })
  .catch(() => {
    console.log("Failed 111111111111111");
  });

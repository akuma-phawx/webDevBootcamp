const body = document.body;

// setTimeout(() => {
//   body.style.backgroundColor = "orange";
//   setTimeout(() => {
//     body.style.backgroundColor = "yellow";

//     setTimeout(() => {
//       body.style.backgroundColor = "green";
//       setTimeout(() => {
//         body.style.backgroundColor = "blue";
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};

delayedColorChange("olive", 1000, () => {
  delayedColorChange("green", 1000, () => {
    delayedColorChange("blue", 1000, () => {
      delayedColorChange("red", 1000, () => {
        delayedColorChange("orange", 1000, () => {
          delayedColorChange("magenta", 1000, () => {});
        });
      });
    });
  });
});

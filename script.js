const button = document.querySelector("button");
const input = document.querySelector("input");
const makeRandColor = () => {
  const randomRed = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  return `rgb(${randomRed},${randomBlue},${randomGreen})`;
};

button.addEventListener("click", (evt) => {
  console.log(evt);
});

input.addEventListener("keydown", (e) => {
  console.log(e);
  console.log(e.key);
  console.log(e.code);
  makeRandColor();
});
function colorize() {
  this.style.background = makeRandColor();
}

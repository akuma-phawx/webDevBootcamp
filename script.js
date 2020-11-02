const allButtons = document.querySelectorAll("button");
const makeRandColor = () => {
  const randomRed = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  return `rgb(${randomRed},${randomBlue},${randomGreen})`;
};

for (const button of allButtons) {
  button.addEventListener("click", colorize);
}

function colorize() {
  this.style.background = makeRandColor();
}

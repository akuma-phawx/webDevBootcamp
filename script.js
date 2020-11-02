const colorButton = document.querySelector("#colorButton");
const body = colorButton.parentElement.parentElement;
colorButton.addEventListener("click", () => {
  const randomRed = Math.floor(Math.random() * 255) + 1;
  const randomBlue = Math.floor(Math.random() * 255) + 1;
  const randomGreen = Math.floor(Math.random() * 255) + 1;
  body.style.background = `rgb(${randomRed},${randomBlue},${randomGreen})`;
});

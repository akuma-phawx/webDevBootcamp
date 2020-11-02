const input = document.querySelector("input");
const h1 = document.querySelector("h1");

input.addEventListener("input", (e) => {
  if (input.value.length === 0) {
    h1.innerText = "Enter your Username";
  } else {
    h1.innerText = `Welcome, ${input.value}`;
  }
});

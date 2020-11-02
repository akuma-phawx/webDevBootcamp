const log = console.log.bind(console);

const banner = document.getElementById("banner");
console.dir(banner);
const toc = document.getElementById("toc");
console.dir(toc);
const imgs = document.getElementsByTagName("img");
console.dir(imgs);
console.log(imgs[0]);

for (let i = 0; i < imgs.length; i++) {
  imgs[i].src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const sqr = document.getElementsByClassName("square");
console.dir(sqr);

const h1 = document.querySelector("h1");
const byid = document.querySelector("#banner");
const different = document.querySelector("img:nth-of-type(2)");
log(different);

const doneTodos = document.querySelectorAll(".doneTodos");
const checkbox = document.querySelector("input[checkbox]");

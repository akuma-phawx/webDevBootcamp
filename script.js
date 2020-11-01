const log = console.log.bind(console);

let die1 = Math.floor(Math.random() * 6) + 1;

const square = function (num) {
  return Math.pow(num, 2);
};

const cat = {
  name: "Nick",
  color: "Grey",
  breed: "Scottish",
  meow() {
    console.log(`Meow meow said ${this.name}`);
  },
};

cat.meow();

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return "EGG";
  },
};

try {
  hello.toUpperCase();
} catch {
  log("it doesnt exist");
}

const log = console.log.bind(console);

let die1 = Math.floor(Math.random() * 6) + 1;

const square = function (num) {
  return Math.pow(num, 2);
};

const square = {
  area(len) {
    return len * len;
  },
  perimeter(len) {
    return len * 4;
  },
};

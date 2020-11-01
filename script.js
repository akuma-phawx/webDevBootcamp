const log = console.log.bind(console);

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

const seatingChart = [
  ["Kristen", "Erik", "Domna"],
  ["Christopher", "Pegasus", "Fearwell"],
  ["Ariel", "Yamaha", "Teddy"],
];

for (let i = 0; i < seatingChart.length; i++) {
  for (let j = 0; j < seatingChart[i].length; j++) {
    log(seatingChart[i][j]);
  }
}

let count = 0;
while (count < 10) {
  count++;
  console.log(count);
}

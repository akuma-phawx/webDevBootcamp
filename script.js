const log = console.log.bind(console);

let maximum = parseInt(prompt("Enter your max number:"));

while (!maximum) {
  maximum = parseInt(prompt("Invalid. Again:"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
log(targetNum);
log(targetNum);
log(targetNum);
log(targetNum);

let guess = prompt("Enter your first guess:");

let tries = 1;
while (parseInt(guess) !== targetNum) {
  if (guess === "q") {
    break;
  }
  tries++;
  if (parseInt(guess) > targetNum) {
    guess = prompt("Higher try again");
  } else {
    guess = prompt("Lower try again");
  }
}

if (guess === "q") {
  log("Ok, quitting");
} else {
  log(`You got it right. It took you ${tries} tries`);
}

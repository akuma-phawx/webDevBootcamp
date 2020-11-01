const log = console.log.bind(console);

let input = prompt("What would you like to do?");
const toDo = ["Collect Eggs", "Eat Dinner"];

while (input !== "quit" && input !== "q") {
  //Listing the tasks
  if (input === "list") {
    log("********");
    for (let i = 0; i < toDo.length; i++) {
      log(`[${i}] - ${toDo[i]}`);
    }
    log("********");
  } else if (input === "new") {
    const toAdd = prompt("Give task to add to the list");
    toDo.push(toAdd);
    log("Task successfully added to the list :)");
  } else if (input === "delete") {
    const indexGiven = parseInt(prompt("Enter index to delete"));
    if (!Number.isNaN(indexGiven)) {
      toDo.splice(indexGiven, 1);
      log("Task successfully deleted");
    } else {
      log("Unknown index");
    }
  }

  input = prompt("What would you like to do?");
}

log("Exiting...");

const log = console.log.bind(console);
// Objects

const person = {
  firstName: "Christopher",
  lastName: "Vradis",
  age: 25,
};

//Accessing Data
log(person["firstName"]);
log(person.lastName);
log(person.age);

const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};

const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;
log(fullAddress);

const comments = [
  {
    username: "Tammy",
    text: "ewwww",
    votes: 9,
  },
  {
    username: "Fishboy",
    text: "glub glub glub",
    votes: 391931,
  },
];

log(comments[1].text);

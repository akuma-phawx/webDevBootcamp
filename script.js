const req = new XMLHttpRequest();

req.onload = function () {
  console.log("Requets completed");
  console.log(this);
};

req.onerror = function () {
  console.log("Error");
  console.log(this);
};

req.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd");
req.send();

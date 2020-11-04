// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
//   .then((res) => {
//     console.log("Response Successfull - Parsing Data:", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Data parsed: ", data);
//   })
//   .catch((err) => console.log(err));

const fetchBitcoinPrice = async () => {
  try {
    const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
//   .then((res) => {
//     console.log("Response Successfull - Parsing Data:", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Data parsed: ", data);
//   })
//   .catch((err) => console.log(err));

// const fetchBitcoinPrice = async () => {
//   try {
//     const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
//     const data = await res.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// };

const fetchBitcoinPrice = async () => {
  try {
    const res = await axios.get(
      "https://api.cryptonator.com/api/ticker/btc-usd"
    );
    const headers = res.headers;
    const data = res.data;
    const req = res.request;
    console.log(headers);
    console.log(data);
    console.log(req.status);
  } catch (e) {
    console.log(e);
  }
};

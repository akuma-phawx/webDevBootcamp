const form = document.querySelector("#registrationForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.elements.username;
  const tweet = form.elements.tweet;
  addTweet(username.value, tweet.value);
  username.value = "";
  tweet.value = "";
});

const addTweet = (username, tweet) => {
  const list = document.querySelector("#listTweet");
  const liToAppend = document.createElement("li");
  const bold = document.createElement("b");
  bold.append(username);
  liToAppend.append(bold);
  liToAppend.append(` - ${tweet}`);
  list.appendChild(liToAppend);
};

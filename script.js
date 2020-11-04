const form = document.querySelector("#searchForm");
const showToSearch = document.querySelector("#showSearch");
const imgContainer = document.querySelector(".container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = form.elements.query.value;
  fetchMovies(input);

  form.elements.query.value = "";
});

const fetchMovies = async (title) => {
  const config = {
    params: {
      q: title,
    },
  };
  const res = await axios.get(`http://api.tvmaze.com/search/shows?`, config);
  console.log(res.data);
  for (const movie of res.data) {
    if (movie.show.image) {
      const img = document.createElement("img");
      img.src = movie.show.image.medium;
      imgContainer.append(img);
    }
  }
};

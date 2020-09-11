// jshint esversion: 9
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const movieEl = document.createElement("li");
    // movieEl.textContent = movie.info.title;
    let text = movie.info.title + "-";
    // With that we can go through all keys in an object
    for (const key in movie.info) {
      // this has to be a string because otherwise if you write it like this, Javascript would look for a variable named title which it won't find in this function and it would then use the value stored in this variable for this comparison. So instead since keys are strings as you learned, we compared it to a string here and if the key is not title, then we know we're looking at the property the user entered. Well and this is then what I want to add to my text.
      if (key !== "title") {
        text = text + `${key}: ${movie.info[key]}`;
        movieEl.textContent = text;
      }
    }
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  // we access extra name.value because again this yields us access to this input DOM node and this will have a value property which holds user input
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    // if key name and value name are the same, you can use that. If you hardcoded the value of title as a string here, then you can't omit this this can really only be used if your value is derived dynamically from some variable and that variable name is equal to your key name, then you can use this notation.
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  renderMovies();
};

addMovieBtn.addEventListener("click", addMovieHandler);

// jshint esversion: 9
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    // you have to enter a key name here which exists there. In array destructuring, you could use any names between the square brackets you had there because in arrays, you access values by index and not by name and therefore you could assign any name because the order was important there for pulling elements out of the array. For pulling properties out of objects, the order does absolutely not matter, instead the key matters.
    if ("info" in movie) {
      alert("info");
    }
    if (!("hello" in movie)) {
      alert("hello");
    }
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    // const { title: movieTitle } = info;
    let { getFormattedTitle } = movie;
    // we can also use bind to not only preconfigure arguments a function will get but also to preconfigure what this will refer to.
    // this to refer to it inside of that function.
    // getFormattedTitle = getFormattedTitle.bind(movie);
    //  how is call different from bind then? Well bind prepares a function for future execution, bind returns a new function object in the end which we then store here in get formatted title, call does not do that, call instead goes ahead and executes the function right away. So it's like if you added parentheses here but with that extra twist of allowing you to overwrite what this inside of the function refers to, so it executes a function for you when you want to change what this refers to, that's where call is important.
    // let text = getFormattedTitle.call(movie) + "-";
    // the difference is call allows you to pass additional arguments as a comma separated list, apply allows you to pass additional arguments as an array.
    let text = getFormattedTitle.apply(movie) + "-";
    // With that we can go through all keys in an object
    for (const key in info) {
      // this has to be a string because otherwise if you write it like this, Javascript would look for a variable named title which it won't find in this function and it would then use the value stored in this variable for this comparison. So instead since keys are strings as you learned, we compared it to a string here and if the key is not title, then we know we're looking at the property the user entered. Well and this is then what I want to add to my text.
      if (key !== "title") {
        text = text + `${key}: ${info[key]}`;
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
    id: Math.random().toString(),
    // getFormattedTitle: function () {
    //   // Inside of a function, no matter if that function is part of an object or not, the this keyword will refer to whatever calls that function, whatever was responsible for executing that function you could say. this is the keyword to tell Javascript look into the object where this function is part of, though to be precise as you learned, look at the thing which is responsible for executing the function which typically is this object since this function is part of that object and then dive into some info property, into some title property and try to call toUppercase on this. this does not automatically refer to the object that kind of surrounds it, it instead refers to who or what was responsible for calling this function
    //   return this.info.title.toUpperCase();
    // },
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  renderMovies();
};

// const searchMovieHandler = function()  {
//   // the browser binds "this" for you (on event listeners) to the DOM element that triggered to the event. this inside of a function that's triggered based on an event listener refers to the element or to the thing that is responsible for triggering this event.
//   console.log(this);
//   const filterTerm = document.getElementById("filter-title").value;
//   renderMovies(filterTerm);
// };

const searchMovieHandler = () => {
  // arrow functions don't bind this to anything. arrow functions don't bind this to anything, instead they keep the context or the binding this has to the binding it would have outside of the function and that will become interesting
  console.log(this);//window
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);

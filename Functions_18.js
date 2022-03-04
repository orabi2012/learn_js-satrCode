


var favoriteMovie = function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
  };
  movies(favoriteMovie, "Finding Nemo");
  // Function declaration that has two parameters: a function for displaying
  // a message, along with a name of a movie
  function movies(messageFunction, name) {
    messageFunction(name);
  }

  // Call the movies function, pass in the favoriteMovie function and name of movie
 
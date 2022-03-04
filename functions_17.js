var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow \n";
    }
    return catMessage;
  };

  console.log(catSays(10))
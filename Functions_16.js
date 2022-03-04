
console.log(buildTriangle(50));


function buildTriangle(num){

    var result = "";

    for (var i = 0 ; i <= num ; i++){

        result += makeLine(i);

    }

    return result + "\n";


}



function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
      line += "* "
    }
    return line + "\n";
  }
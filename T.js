
console.log(RT("100"));

function RT (OT){

    var RT = ""
for(var i = 0 ;i <= OT.length -1 ; i++){

   // RT += OT[i]+ "  ASCII = " + OT[i].charCodeAt(0) + "\n";
    RT += OT[i].charCodeAt(0)+"|";
}
return RT;
}


var reverseMe = ["h", "e", "l", "l", "o"];

console.log(reverseMe.reverse());
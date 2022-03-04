console.log (laugh(7));

function laugh (num){
    
    let result = ""
    
    for(var i = 0 ;i <= num ; i++){
        
        result += "ha";
    }
    
    return result+"!" ;
}


var t1 = "red";
var t2 = "blue";

console.log = (t1 + "" + t2);

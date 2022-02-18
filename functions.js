

function printlist ( i ){

    if (i >10) return;

for(let a = 1; a<= i ;a++){


    console.log(a);
    console.log('---')

}

}


function add(n1 , n2){

    return n1+n2;
}

printlist(add(5,15))

function myFunc(number) {
    console.log(`${number} x ${number} = ` + number * number)
    return number * number
  }
  myFunc(5)
function sub (n1 , n2) {

    return n1-n2
}

function add (n1 , n2) {

    return n1+n2
}
function mult (n1 , n2) {

    return n1*n2
}

function op (n1,n2, opreation){

    return opreation(n1,n2)
}

let n1 = 10;
let n2 = 10;

console.log(op(n1,n2 ,add))
console.log(op(n1,n2 ,sub))
console.log(op(n1,n2 ,mult))
console.log(op(n1*2 ,n2*2 ,mult))


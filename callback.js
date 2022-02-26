function sub (n1 , n2) {

    return  'substraction = ' + (n1-n2)
}

function add (n1 , n2) {

    return 'addition = ' +   (n1+n2)
}
function mult (n1 , n2) {

    return 'Multiplication  = ' +  n1*n2
}

function op (n1,n2, opreation){

    return opreation(n1,n2)
    console.log('------------')
}

let n1 = 50;
let n2 = 100;

console.log(op(n1,n2 ,add))
console.log(op(n1,n2 ,sub))
console.log(op(n1,n2 ,mult))


const s = (f1,f2)=> f1+f2
console.log(op(100,50, s))


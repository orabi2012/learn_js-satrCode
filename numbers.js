const numbers = [10.35,45,12,5,3.7,10,7,6.1,55,70.3,14.2]

var i = getRndInteger(0 , numbers.length)


console.log('array index = ' +  i)
var x = numbers[i];

console.log(Number.isInteger(x))
console.log(Number.isNaN(x))
console.log(x)
console.log('round ' +  Math.round(x));
console.log('floor ' + Math.floor(x));

console.log('ceil ' + Math.ceil(x));

console.log('abs ' + Math.abs(x));


console.log('max ' + Math.max(...numbers))

console.log('min ' + Math.min(...numbers))

console.log('typeof x ; ' + typeof x)
console.log(x)
var strx = x.toString();

console.log('typeof strx ; ' + typeof strx)
console.log(strx)
var fx = parseFloat(strx)

console.log('typeof fx ; ' + typeof fx)
console.log(fx)

var intx = parseInt(x);
console.log('typeof intx ; ' + typeof intx)
console.log(intx)


var truncx = Math.trunc(x);
console.log('typeof truncx ; ' + typeof truncx)
console.log(truncx)

console.log(i.toString(2))

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
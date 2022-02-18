let colors = ["red", "green", "blue"];

console.log(colors);
console.log(colors[0]);
console.log(colors.includes('black'));
colors[0] = 'black' ;
console.log(colors);
console.log(colors[0]);
console.log(colors.includes('black'));

console.log(colors.length)

colors.push('pink');

console.log(colors);
console.log(colors.length);

let lastcolor = colors.pop();

console.log(colors);
console.log(lastcolor) ;

colors.unshift(lastcolor);
console.log(colors);

let pink = colors.shift();
console.log(pink);
console.log(colors);


console.log(Array.isArray(colors));

let t = 'my name is ahmed';

let tarray = t.split(' ');

console.log(tarray);
console.log(tarray[3]);

console.log(tarray.join('_-_'));







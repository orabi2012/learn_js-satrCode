for (let i = 1; i <= 50; i++) {
    console.log(i);
}

console.log('--------Desc Loop------------')
for (let i = 5; i >= 0; i--) {
    console.log(i);
}
console.log('----------Array----------')

let A = [0,1,2,3,4,50,100,200];


for (let i = 0 ;i < A.length ; i++){

console.log(A[i]);

}

console.log('----------For Of----------')

for(let i of A){

console.log(i);

}

let msg = 'welcome to js ' ;

for(let m of msg){

console.log(m)

}
console.log('----------While----------')

let c = 0;
while(c < A.length){

    console.log(A[c])
    c++;
}
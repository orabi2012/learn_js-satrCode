let A = [1,6,2,3,4,6,7,8,9,10,1];


A.forEach(function(cvalue , index ,array){

console.log(index ,'*', cvalue , '= ' , index*cvalue)
})


const f = A.some(function(item){

return item = 10

})

console.log(f)

const all = A.every(function(item){

    return item >= 10
    
    })
    
    console.log(all)

    const inc = A.includes(100)
        
        console.log(inc)


        console.log(A.indexOf(2))

        console.log(A.lastIndexOf(2 ,-1))


        const index = A.findIndex(function (e){

           return   e >= 10
        })

    console.log('index = ' + index)    

    const e = A.find(function (element){
return element != 1

    })
    console.log(e)


    const EvenNum = A.filter(function(value){
return value % 2 == 0 ;

    })

    console.log(EvenNum)
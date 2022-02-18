
 var Books = [
    ['Book Id', 'Book Title' , 'Author' ,'Price' ,'Quantity' ]
    
    ]

   


   

function AddBook(BookId, BookTitle ,Author ,Price ,Quantity){
    var Book = []
Book.push(BookId, BookTitle ,Author ,Price ,Quantity) ;

Books.push(Book);
}

AddBook(1,'js','satr code',100,150);
AddBook(2,'html','satr code',10,20);
AddBook(3,'css','satr code',25,10);

function findbybookid(id){


    for(let i of Books){

       let result =  Books.includes(id);
        
       if(result==true){

        return 'book with id ' + id + ' is exist'
        break;
       }else{

        return 'book with id ' + id + ' is NOT found'
       }

        }


    


}

function arrayLookup(searchValue,array,searchIndex,returnIndex) // Posted on Tathyika.com (also refer for more codes there)
{
  var returnVal = 'Not Found';
  var searchField = array[0][searchIndex];
  var i;

  for(i=0; i<array.length; i++)
  {
    if(array[i][searchIndex]==searchValue)
    {
      returnVal =  array[i][returnIndex];
      break;
    }
  }
  
  return 'Result of search about ' + searchField + ' by ' + searchValue +' is : ' + returnVal ;
}
//for(let i of Books){

    //console.log(Books.length);
    
    
  
    console.log(arrayLookup('js',Books,1,0));
  //  }


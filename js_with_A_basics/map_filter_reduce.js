/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                               Map & Filter & Reduce



let arr =[]
let val = []
// for (let i = 0; i <=20; i++) 
//     {
    
//   val.push(i) ;

//   console.log(val);
    
//   }
    
    // console.log(arr);

    // console.log(val);


arr = [1,2,3,4,5,6,7,8,9,10]

// let values;
// let val2=arr.map(
//     function(values)
// {return values*10}
// )


// console.log(val2);

/* 

[
    10, 20, 30, 40,  50,
    60, 70, 80, 90, 100
]

*/

/* 

Map is used for make changes in array of there element 

*/
let numeric_num = [2,4,6,8,10]


// binary

let binary = numeric_num.map(
    function conversion(values)
{
return values.toString(2)
}) 

// console.log(binary);

/*
[ '10', '100', '110', '1000', '1010' ]
*/






//link with any other function
arr = [1,2,3,4,5,6,7,8,9,10]

function sq(square)
{
return square * square;
}


//  val2 = arr.map(sq)

//  console.log(val2);

/* output
[
   1,  4,  9, 16,  25,
  36, 49, 64, 81, 100
]
*/





let library = [
{book:"wings of fire",genre:"autobiography",publish:2000},
{book:"world around 80 days",genre:"adventure",publish:1999},
{book:"rich dad poor dad",genre:"financial",publish:2001},
{book:"48 laws of power",genre:"self control",publish:2003}

]

mybook = library.filter(function(bk)
{
   return bk.publish > 2000 && bk.genre == "financial"

}
)

// console.log(mybook);
//[ { book: 'rich dad poor dad', genre: 'financial', publish: 2001 } ]



// chaining

arr = [1,2,3,4,5,6,7,8,9,10]

let values;
 val2=arr.map((values)=>values*10).map((values2)=> values2 + 1).filter((values3)=>values3 >=50 )

// console.log(val2); //[ 51, 61, 71, 81, 91, 101 ]

let arr2 = [10,20,30,40,50]
sum  = arr2.reduce(
    function(loop,store)
    {
        // console.log(loop , values);
/* 
0 10
10 20
30 30
60 40
100 50
150
*/
        loop = loop + values;
        
        return loop
    },
0)

// console.log(sum);




/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                  practice 


//find max number from array
let array = [0,22,3,2,54,44,37,76]


function max_to_min(array)
{
    let i=0;
    let max =0;
for ( i = 0; i < array.length; i++) 
    {
if(array[i]>max)
    {
        max=array[i];    
    }
}
// sorting = 
return `The maximum value is ${max} `
} 

// console.log(maximum(array)); 
 // The maximum value is 76 and sorted into maximum to minimum  76,54,44,37,22,3,2,0.64,0


//  console.log(array.filter(()=>{
//      return array.sort((a,b)=>
// {
//         return  b-a ;
// } 

// )

// }

// )

// )


/*
[
   0, 54, 44, 37,
  22,  3,  2,  0
]
*/

//                                     ❗ REDUCE ❗


let reduce_array = [0,22,3,2,54,44,37,76];
            
                reduce_array.reduce((acc,curr)=>{

                    curr //represent the values of r
                },0)
            
       








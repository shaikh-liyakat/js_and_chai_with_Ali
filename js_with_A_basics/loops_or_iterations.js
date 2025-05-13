/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                               Loops & Iterations


/* 

// Types of symbol condition

< , > , <= , >= , == ,!= , === ,!== 


*/



// for (let i = 1; i <=10 ; i++) 
// {
//     console.log(i);    //1,2,3,4,5,6,7,8,9,10
    
// }




let my_arr=[1,2,3,4,5]
// for (let i = 0; i <= my_arr.length ; i++) 
// {
//     console.log(my_arr[i]);   // 1,2,3,4,5 
    
// }



let num =  [1,2,3,4,5,6,7,8,,9,10]
// for (let i = 0; i < num.length; i++) {
//     if(i==7)
//         {
//          console.log(`my favourite  number ${i} detected`);  
//          //0,1,3,4,5,6,my favourite  number 7 detected
//          break;
//         }
        
//         console.log(i);
    
// }



let num2 =  [1,2,3,4,5,6,7,8,,9,10]
// for (let i = 0; i < num2.length; i++) {
//     if(i==7)
//         {
//          console.log(`my favourite  number ${i} detected`);  
//          //0,1,3,4,5,6, my favourite  number 7 detected ,8,9,10
//          continue;
//         }
        
//         console.log(i);
    
// }


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                               loops for Arrays & Objects 



/* 
//                                          For arrays  

for each
for of 
for in

//Returns boolean values
some  
every

*/


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

let values = [1,2,3,4,5]

console.log( values.forEach( function( val , i , arr)
{
     
// console.log(val *10 ,i , arr);

}
   
)
)

/*
new values   index_num          OG array values
 10             0              [ 1, 2, 3, 4, 5 ]
 20             1              [ 1, 2, 3, 4, 5 ]
 30             2              [ 1, 2, 3, 4, 5 ]
 40             3              [ 1, 2, 3, 4, 5 ]
 50             4              [ 1, 2, 3, 4, 5 ]

 */


 values = [1,2,3,4,5]

// for (const val  of values) 
//     {
//       if(val % 2 === 0)
//        {
//         console.log(`even num ${val}`);
//        }
//        else if(val % 2 === 1)
//  {
//     console.log(`odd num ${val}`)
//  }
// }

// this loop is not return any return values



values = [
    {c_name:"js",
     price:"999",
     c_instructor:"smookey" },
{book:"wings of fire",genre:"autobiography",publish:2000},
{book:"world around 80 days",genre:"adventure",publish:1999},
{book:"rich dad poor dad",genre:"financial",publish:2001},
{book:"48 laws of power",genre:"self control",publish:2003}

]


//  for (const val of values) {
//    //  console.log(Object.entries(val));
//  }

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                for in loop 
/*
for...in is used to iterate over all enumerable properties of an object, including inherited enumerable properties. This iteration statement can be used with arrays strings or plain objects, but not with Map or Set objects.

in simple work with iterable means incrementable such as array or string 

*/ 

// for (let prop in ['a', 'b', 'c'])
//     console.log(prop);  // 0,1,2

let objects={a:1, b:2, c:3};
let obj1_keys= Object.keys(objects)

// for (let keys of obj1_keys){
//     console.log(`keys:${keys} ` ,"values :",objects[keys]); }   //op is

    
    // keys:a  values : 1
    // keys:b  values : 2
    // keys:c  values : 3
    
//  with for in 
// for (let keys in objects){
//     console.log(`keys:${keys} ` ,"values :",objects[keys]); } //same as above
    

    // for (let keys of obj1_keys){
    //     console.log(`keys:${keys} ` ,"values :",objects[keys]); }
    

// for (let prop in "try")
// console.log(prop);  


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                        for of 
/*
for...of is used to iterate over iterable objects, iterating over their values instead of their properties. This iteration statement can be used with arrays, strings, Map or Set objects, but not with plain objects.
*/

// for (let val of ['a', 'b', 'c'])
// console.log(val);            // a, b, c (array values)


// for (let val of 'str')
// console.log(val);            // s, t, r (string characters)
  
// for (let val of {a: 1, b: 2, c: 3})
// console.log(prop);           // TypeError (not iterable)

// for (let val of new Set(['a', 'b', 'a', 'd']))
// console.log(val);            // a, b, d (Set values)



//                                    ❗  REDUCE ❗

let reduce_array = [0,22,3,2,54,44,37,76];

// reduce_array.reduce((acc,curr)=>{

//      acc //work as empty variable
//      curr //represent here the value of reduce array 
//      acc=acc+curr
//      console.log("accumulator",acc);
//      console.log("current",curr);
//      return acc ;
// },0)





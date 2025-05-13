/*                            Arrays & Methods                                   */



// Types declaration of array
// let arr=["h","e"] // we local declare we can  use it as Square brackets
// console.log(typeof arr);// o/p is object 
// let arr2=Array("h","e","l","l","o");

// console.log(arr);

// let array0=[11,22,33,44,("a","c","d",("ironman","spiderman","thor","hulk")),(1,2,3,4,5,6,7)]
// console.log(array0);




// let mcu = new Array("ironman","thor","spiderman","hulk","ironman");// when we declare array object we have proper use round bracket have to use instead of SQ bracket

// let mcu2 =("ironman","thor","spiderman","hulk","ironman")
// console.log(typeof mcu2);//string

// let mcu3 =(1,5,9,8)
// // console.log(typeof mcu3);//number

// let mcu4 =["ty","g"]
// console.log(typeof mcu2);//undefined



let dc = new Array("superman","batman","flash","aquaman");  




/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                          ARRAY METHOD                                        //

// add a new value in simple array without any                      method

const alphabets = ["a","b","c","d","e"]
alphabets[alphabets.length]="f"
// console.log(alphabets);  //[ 'a', 'b', 'c', 'd', 'e', 'f' ]

//Object.seal(alphabets)// array is also a object

// !! tip for add any new value in array without enter the index num of an array !!



alphabets[7]="g"
// console.log("before seal object",alphabets);//[ 'a', 'b', 'c', 'd', 'e', <1 empty item>, 'f' ]
// console.log("after seal object",alphabets);//after seal object [ 'a', 'b', 'c', 'd', 'e' ]


// add a new value in simple array with nested with object inside array
const nested_arr=[1,
  {
name : "smookey",
roll_no:"152",
  },
  "a","b"
]
// console.log(nested_arr);

nested_arr[1].name="s"
nested_arr[1].mob=1234576878  // this new key and also value is added in it

// console.log(nested_arr);//[ 1, { name: 's', roll_no: '152', mob: 1234576878 }, 'a', 'b' ]







// mcu.push(9)
// console.log(mcu);//[ 'iron_man', 'thor', 'spider_man', 'hulk', 9 ] it is added the element at last index num of an array

// dc.pop("h")
// console.log(dc);//[ 'superman', 'batman', 'flash' ] pop removed there last element of an array even you passed a argument 

// dc.push(mcu)
// console.log(dc);// o/p is   [ 'superman',
//     'batman',
//     'flash',
//     [ 'iron_man', 'thor', 'spider_man', 'hulk', 9 ]
// ]


// mcu.unshift("hulk")
// console.log(mcu);// o/p is [ 'hulk', 'iron_man', 'thor', 'spider_man', 'hulk' ] here the element is add at 0 index directly to the array it not good when it is many values in single array then it has shifed all values from there og index number

// mcu.shift("hulk")
// console.log(mcu);// [ 'thor', 'spider_man', 'hulk' ] the first element has removed from an at 0 index num of an array


// console.log(mcu.includes("9"));// false it always give out in boolean values includes  method has search all elements from array that we want to search from an array 

// console.log(mcu.indexOf("ironman") )// "0" it finds the value from a array from 0 index num and it find that element then return the index num of that element and returned from that place not check further or for more elements similar exist or not in array




let myarr=["a","b","c","d"]
let myarr2=[1,2,3,4,5,6]
// const newarr= myarr.join(myarr2.join()) //OP is  a1,2,3,4,5,6b1,2,3,4,5,6c1,2,3,4,5,6d


// newarr= myarr.join()+myarr2.join()//OP is  a,b,c,d1,2,3,4,5,6
  myarr2 = myarr
// console.log(myarr2);//OP is a,b,c,d old value is removed or replaced by this value 

// console.log(newarr);
// console.log(typeof newarr);//op is "string"



let arry1= new Array(1,2,3,4,5,6)
let arry2=["a","b","c","d"]

let newarry=arry1.slice(0,3)
// console.log("new",newarry);// O/P is [ 1, 2, 3 ] in this the last index no is not involved in it and to slice means cut the the array between given ranges .also is works on stack means work omn copy provided not reference location  

// console.log("old",arry1);// o/p is [ 1, 2, 3, 4, 5, 6 ]

// console.log( typeof arry1);//op is object



// newarry=arry1.splice(1,2)

// console.log("new",newarry);// O/P  is
                      //[ 2, 3 ]
                      //[ 1, 4, 5, 6 ] when we use splice method then it removed that selected index range and removed all element covered in that index range of array .also it work at reference location  means actual location provided by "heap" not on copy location means provided by "stack" 
// console.log("old",arry1);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// newarry = arry1.splice(1,2,55,77,99)

// console.log(newarry);//[ 2, 3 ]

// console.log("original array",arry1);
// // [
// //   1, 55, 77, 99,
// //   4,  5,  6
// // ]

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const even=[2,4,6,8,10,100,32,5,120];



const alphabet=["a","b","c","d","e","f","g","h","i","j","k"]
//reverse method
// console.log(even.reverse());//[ 10, 8, 6, 4, 2 ] this is method work on reference memory location means change the OG array value
// console.log(even);


//sort method
let rev=alphabet.reverse();
// [
//   'k', 'j', 'i', 'h',
//   'g', 'f', 'e', 'd',
//   'c', 'b', 'a'
// ]

// console.log(rev);
// console.log(rev.sort());// this method help to sort the array by default alphabetical order  loop hole is first it is converted into ascii  code then compare mix of capital and small may not sorted by them
// [
//   'a', 'b', 'c', 'd',
//   'e', 'f', 'g', 'h',
//   'i', 'j', 'k'
// ]

// console.log(rev.sort((function(a, b){return b-a})));// 

// //Number sorting 
// A negative value indicates that a should come before b. (a to b)
// A positive value indicates that a should come after b. (b to a)
// Zero or NaN indicates that a and b are considered equal.

// console.log(even.sort()); // sort by alphabetical

// [
//   10, 100, 120, 2, 32,
//    4,   5,   6, 8
// ] 

// [
//   2,  4,   5,   6, 8,
//  10, 32, 100, 120
// ]

// console.log(even.sort((function(a, b){return -a-b})));//sort by descending
// console.log(even.sort((function(a, b){return b-a})));//sort by descending

// [
//   120, 100, 32, 10, 8,
//     6,   5,  4,  2
// ]

// console.log(even.sort((function(a, b){return a,b ===0 })));//keep OG value




/*   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++   */
//                    NESTED ARRAY with investigation study

//!!type_1!!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let array0=[11,22,33,44,("a","c","d",("ironman","spiderman","thor","hulk")),(1,2,3,4,5,6,7)]
// console.log(array0.flat(Infinity).includes("ironman"));//o/p is true by type2 declaration of array it possible

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//!! type_2!! 
// let array0=[11,22,33,44,["a","c","d",["ironman","spiderman","thor","hulk"]],[1,2,3,4,5,6,7]]


// console.log(array0);
// console.log(array0.includes());//o/p is false
// console.log(array0.flat(Infinity).includes("ironman"));//o/p is false
// console.log(array0[4][3][0].includes("ironman"));//o/p is true

// console.log(array0.indexOf("ironman"));//-1  
// console.log(array0[-1]);//undefined

// console.log(array0[0],array0[4][3][0],array0[5]);//  output is 
// 11 ironman [
//   1, 2, 3, 4,
//   5, 6, 7
// ]

//!! Note !!
// array if we want to search or output something in nested array then we have features of 1 layer of searching abstraction only and only if we declare like this types of array declareration in this type declaration then accept the other array as an element not like "array" but it can be change by declartion type check above both declartion type 


// let array01=[11,22,33,44,...["a","c","d",...["ironman","spiderman","thor","hulk"]],...[1,2,3,4,5,6,7]]
// console.log(array01);
// // [
// //   11,     22,        33,
// //   44,     'a',       'c',
// //   'd',    'ironman', 'spiderman',
// //   'thor', 'hulk',    1,
// //   2,      3,         4,
// //   5,      6,         7
// // ]

// console.log(array01.includes());//o/p is false

let com_arr1= Array(11,22,33,44,["a","b",["aa","bb"]],["A","b","c"])
// console.log(com_arr1.);//O/P is [ 11, 22, 33, 44, 'bb', 'c' ]
// console.log(com_arr1.flat(Infinity));//O/P is 

// // console.log(com_arr1[4][0].includes("b"));//true
// console.log((com_arr1.includes("b")));//false
// console.log((com_arr1.flat(Infinity).includes("b")));//true

// console.log((com_arr1.find().includes("b")));// undefined is not a function


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//                     ++++++++++++ NOTE THIS ++++++++++++++
// console.log (typeof com_arr1);//object
// console.log( typeof (typeof com_arr1));// string
// console.log(typeof (typeof (typeof com_arr1)));// string
// console.log(typeof (typeof (typeof (typeof com_arr1))));// string

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const EX_array=[2,4,6,8,10];
// EX_array.reduceRight()
// console.log(EX_array);
// console.log(EX_array[3]);


//reverse method
// console.log(EX_array.reverse());//[ 10, 8, 6, 4, 2 ] this is method work on reference memory location means change the OG array value
// console.log(EX_array);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let arr0=[1,2,3,4]
let arr1=["a","b","c"]
let all_arr=[...arr0,...arr1]
// console.log(all_arr); // o/p  is 
// [
//   1,   2,   3,   4,
//   'a', 'b', 'c'
// ]
// console.log(all_arr.flat(Infinity));








/*+++++++++++++++++++ ARRAY of combination of diff datatypes ++++++++++++++++++++++++++++*/

// let com_arr = Array(1,2,"hello",4,5,6)
// console.log(typeof com_arr);//object

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let symb0=Symbol('key')
//  let obj_arr=Array({
//   name:"smokey",
//   email:"xyz@gamil.com",
//   mob:123456789,
//   [symb0]: "key"
// })

// console.log(obj_arr); //OP is [ { name: 'smokey', email: 'xyz@gamil.com', mob: 123456789 } ]

// console.log(obj_arr[0][symb0]);// O/P is key
// console.log(obj_arr[0][0]);// OP is undefined
// console.log(obj_arr[0]["email"]);// OP is  xyz@gamil.com
// console.log(obj_arr[0].email);// OP is  xyz@gamil.com

//  let array = [1,2,3,4]

// console.log(Array.isArray(array));//O/P is true this isarray function used to check for the array or not

// type 1
// let obj_arr2=Array({
//   name:"smookey",
//   email:"xyz@gamil.com",
//   mob:123456789,
// //   [symb0]: "key"
//  })

// console.log(Array.isArray(obj_arr));// op is false
// console.log(Array.from(obj_arr2.email));// op is  
// [
//   'x', 'y', 'z', '@',
//   'g', 'a', 'm', 'i',
//   'l', '.', 'c', 'o',
//   'm'
// ]
// this from method is create or convert values into array format  



// console.log(typeof Array.from("smookey"));object
// console.log(Array.from({name:"smookey"}));// op is empty array object []


// console.log(Array.from(obj_arr2));// op is [ { name: 'smookey', email: 'xyz@gamil.com', mob: 123456789 } ]


//  type 2
// let obj_arr2={
//   name:"smookey",
//   email:"xyz@gamil.com",
//   mob:123456789,
// //   [symb0]: "key"
//  }
//  console.log(Array.from(obj_arr2))//O/p  is empty array []



let score=100
let score2=250
let score3=375
// console.log(Array.of(score,score2,score3));// op is [ 100, 250, 375 ]
//this also "of" method is create or convert values into array format by takes variables_names   





// console.log((mcu[0]).charAt === (dc[0].charAt))
// tic tac toe game 

let tic_tac =Array(
  ["X",null,null,],
  [null,null,"O",],
  ["X",null,"X"])

// console.log(tic_tac);


//new 


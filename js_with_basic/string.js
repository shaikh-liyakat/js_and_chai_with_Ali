//string modern way to use string and format

// let str="hello"
// let str2=" smookey"
// console.log(str + str2);
// console.log(str + str2 +" this is normal string operation");
// console.log('hello india'[7]);// op is "n"


// console.log(`hello this my name ${str2}`);//string inperpolation option is feature in this single code


//declartion of string 
// let str3= new String("liyakat")//new keyword is where we use objects of java script
// let str4="liyakat";
// // console.log(str3);
// // console.log(str3[0]);//key value we access by this

// // console.log(str3.__proto__);//we access prototype by this 

// // console.log(str3.length);// we access prototype function by this method such as lenght any many more 
// console.log([str4.toUpperCase]);  

//!! "string and there types of methods>>(build in function)" !!

//all these way to declare string  
let str = new String("Liyakat")//by the "new" keyword is help to access object of js
let email ='xyz@gmail.com'
const score="777"
// console.log(str);
// console.log(email);
// console.log(score);

// console.log(/*str.toUpperCas*/(`${str.toLowerCase(str)}`));// this is also we use by this method  

// console.log(str.toUpperCase(`${str.toLowerCase(str)}`));// here only upper is working which method came first

// console.log(str.anchor(str));//this to make any thing in to link format


// console.log(email.charAt(7));//if we give "character" at place of "num" also empty argument then by default they take first letter or if out of range value then it also same it cannot print any thing  

// console.log(email[7]);//same as above

// console.log(str.length );//by this we know the length of string 

// types or syntax to use of string 
// let char=new String ("lenght");
// let len=char.length
// console.log(len);


// str="  liyakat  ";  
// console.log(str);
// console.log(str.trim());// this fun or method help to remove unwanted spaces from stat or back_side



// str="the quick brown fox jump over the lazy dog.";  
// console.log(str);
// console.log(str.slice(/*this startb index*/ 10,31 /* this last index num*/ ));//this reqired input such index num of position of char at place which index num we know by charat fun 


//  str="the quick brown fox jump over the lazy dog.";  
//  index=7
// // console.log(str);
// // console.log(str.charCodeAt(index));//this display the character or ascii code of that char all  in utf-16

// console.log(str.charCodeAt(index) == str.charAt(index));

str="https://liyakat.com/ liyakat %20 shaikh";
// console.log(str.replace(' ','/'));//this method replace help to filter or clear the  input data remove or replace unwanted signs or things from that

// const comma=" ";
const garb="%20";
// const slash="/"
// console.log(str.replace(" | %20","/"));
// console.log(str.replace(/.com/gi,"-"));


// let string=-23234578578n
// let num = Number(string) ;
// console.log((Math.abs(num))); //maths function it is not worked with bigint number


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// revise 


const name01 = "smookey"
const mob01 = 123456789
const email_01 = "xyz@gmail.com"
const garbage_value ="hello my name is    "
const AC_no = 1422





// REMAINING METHODS

// console.log(AC_no.toString().padStart(16,"*")); // op is ************1422 this is uses in banking safety features 

// console.log(AC_no.toString().padEnd(16,"*"));// op is  1422************ this is uses in banking safety features 

// console.log(email_01.search("."));// op is if value is true then 0

// console.log(garbage_value.repeat(2));//hello my name is    hello my name is 

// const op0 =(AC_no.toString().match("1"));
// console.log(op0); // o/p is  
// // [ '1', index: 0, input: '1422', groups: undefined ]

// console.log(name01.matchAll("smookey")); // this method is for a worked on objects 

// console.log(garbage_value.strike());




// console.log(garbage_value.trim().split(" "));//[ 'hello', 'my', 'name', 'is' ]

// console.log(garbage_value.trim().split(" ").join(" "));//hello my name is






/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//                            INVESTIGATION

// const op =console.log(AC_no.toString().padStart(16,"*"));
// console.log(op); // output is undefined for investigation study





//methods difference
// console.log(garbage_value.trim().split(" "));[ 'hello', 'my', 'name', 'is' ]

//error
// console.log(garbage_value.trim(garbage_value.split(" "))); // hello my name is

//unwanted op 
// console.log(garbage_value.split(garbage_value.trim()));// op is [ '', '    ' ]

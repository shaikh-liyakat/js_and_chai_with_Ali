/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/               

// let num1= new Number(56);
// let num2=777;
// num3 = 897;
// console.log(typeof num1.toString());//this help to convert num to string and we access all string methods also
// console.log(num1.toString());


const balance = new Number(1100);
let num= 3.1478;

// console.log(balance.toFixed(2));//!! output 100.00 !! no of decimal after point 

// console.log(balance.toExponential(1));//O/P is 1.1e+3 exponential 
// console.log(balance.toString().length);//o/p is 4
// console.log(balance.toString());//o/p is 1100 in string type

// console.log(num.toPrecision(4));//O/p 3.148 means how much you want to add want precise number afer decimal point 
let num2= new Number (4345465)
// console.log(num2.toLocaleString('en-IN'));//to count for easy counting of same types of number and also easy to read able !! O/P !! 1,00,00,00

// console.log(Number.MAX_VALUE);// O/P is 1.79769 
// console.log(Number.MIN_VALUE);// O/P is 5e-324
// console.log(Number.MIN_SAFE_INTEGER);// O/P is -9007199254740991
// console.log(Number.MAX_SAFE_INTEGER);//output is 9007199254740991


/*+++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++*/ 

//!! maths operation is done only with number not with bigint 

let n1=new Number(786.086)
let n2= Math.round(n1)
let n3= -5554644646465n

// let n4= new Math.abs("53554")
// console.log(n4);ex of bigint not work with math function
// console.log(Number(n2));

// console.log(Math.abs(Math.round(n1)));// o/p is 786
// console.log(Math.abs(Math.round(n1)));// o/p is 786.486


// let val =-6.666436
// let val2 = 6.666436
// console.log(Math.ceil(val));//ceil has work inverse when we gave -ve value its takes lower value instead of  higher value !! o/p is -6 !!
// console.log(Math.ceil(val2));// O/P 7

//sames condition happens with math.floor also when gave -ve value it act different like math.ceil


// console.log(Math.round(Math.random()*10)+1);//we  got single digit random numbers 1 ,5, 7 

// let min=-11;
// let max=-22;
// console.log(Math.abs(Math.round((Math.random(n3)*10)+1*(max-min))));//we got our desireable results 10 and 20 btw 11, 15 , 17  if  we want to  only  wants in +ve values etc

// let ex = Number(78,8,77);// in number ther not takes multiple values in it
let ex= 6534;
let ex2 = -55
let ex3 = 54.5642

console.log(Math.sign(ex2));//!! o/p is !! when we gave -ve values then op is -1
//when we gave +ve values then op is 1
//when we gave 0 values then op is 0

console.log(Math.max(1,78,89,22,223,44));// o/p is 223
console.log(Math.min(1,78,89,22,223,44));// op is 1

 
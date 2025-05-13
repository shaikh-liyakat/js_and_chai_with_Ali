//comparison 
//!!note!! // comparison and equality check  is two diff thing in js

//unexpected result came when we compare two diff data types and compare btw them 


// normal comparison 
//result came in boolean values means true or false
// console.log(2==1);
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);


// console.log("2"==1);
// console.log("2">1);
// console.log("2">=1);
// console.log("2"<=1);
// console.log("2"<=1);

//confusing comparison btw two diff data types
// console.log(null==0);
// console.log(null>0);
// console.log(null<0);
// console.log(null<=0);//null is converted into 0 by js and then compared 
// console.log(null>=0);


// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);
// console.log(undefined<=0);//all are false
// console.log(undefined>=0);

// console.log(typeof( true == 1)); ///boolean
// console.log( ( true == 1));true
// console.log( ( true === 1));false
//console.log(typeof (1 == true));boolean
// console.log(null == false );//result is false
// console.log(null <= false);// result is true because of conversion
// console.log(null >= false);// here is also true because of conversion

// console.log(  null=== false )//result is false

// console.log(  undefined== false );//result is false
// console.log(undefined <= false);// result is false 
// console.log(undefined >= false);// false


// strict check means
//===  here check by there datatype and values also here conversion is not perform mostly
// console.log(2==="2");//result is false strict check 
// console.log("2"==2);//result is true converasion check
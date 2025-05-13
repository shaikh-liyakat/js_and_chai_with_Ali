/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!  HOSTINGS  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

// Remember This
/*
In javascript there two phase has done before execution the code that 

memory allocation phase 
In this phase js first scan whole code then they assigned memory to the variable also value be undefined into it and there data type also undefined 
and in time of functions js assigned memory with there source code also assigned into it


code execution phase

In this phase js assigned value to assigned declare variable  and perform given task and execute successfully the code

*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// short summary 

/*  hosting is a behavior where we call the func or variables want access the that before declaration   " line "

*/

// this also we say hosting we try to access that variables before declaration " line "

// console.log(var1); // undefined 

// ++++++++++++++++++++++++++++++ Explanation +++++++++++++++++++++++++++++++++++++++++++++

/* variables declared with var are "hoisted" to the top of their containing function or global scope. This means that they are technically available from the beginning of that scope, but their value will be undefined until the code where they are assigned is executed 

The console.log statement successfully returned a value (undefined) because JavaScript automatically assigns undefined to a hoisted var variable in memory execution phase.

*/





// console.log(var2); // Cannot access 'var2' before initialization
// console.log(var3); // Cannot access 'var3' before initialization

// +++++++++++++++++++++++++++ Explanation +++++++++++++++++++++++++++++++++++++++++++++
/* 
variable declare by let and const are not hosted in global but it is inside of local scope
therefore declare by them are putted into "TEMPORAL DEAD ZONE"

"TEMPORAL DEAD ZONE" (TDZ)
A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.

* A block is a pair of braces ({...}) used to group multiple statements.

* Initialization occurs when you assign an initial value to a variable.

A block’s temporal dead zone starts at the beginning of the block’s local scope. It ends when the computer fully initializes your variable with a value.

*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


var var1 = "this variable 1"
let var2 = "this variable 2"
const var3 = "this variable 3"

// console.log(var1);//this variable 1
// console.log(var2);//this variable 2
// console.log(var3);//this variable 3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//type 1 function declaration 
// anonymous_func() // this is anonymous func

 function anonymous_func()
{
    console.log("this is anonymous func");
}

// anonymous_func() // this is anonymous func



// type 2 function expression

// anonymous_func2() // anonymous_func2 is not a function 
var anonymous_func2 = function ()
{
    console.log("this is anonymous func2");
}
// anonymous_func2() // this is anonymous func2

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                  investigation part

//  new Object (
//    { name1: "hello",
//     // clg:console.log(Object.name1) //undefined
//    },
//    {mob:1234567890},

// //    console.log(Object.name1)//undefined
// )

// // console.log(Object.name1)//undefined

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

new Object
{
    name1: "hello"
    // console.log("hello");
}
// console.log(Object);

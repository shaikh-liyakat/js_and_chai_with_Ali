/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                   Higher-order & callback function

// Note that
/*
  function is also behind the scene is also a object 

*/

//summary 
/*
callback :
this is a technique or method to pass function as a argument in simple 
when we call any func an pass another func as argument then that func which has passes
as argument that is called a callback function

higher order function :
a function who received function as a parameter towards him or return any function  then that function who receive as a parameter as a func and call that received parameter func inside who received as a parameter by using variable where parameterized func store in a variable it is called higher order function 



*/


//normal func
function a_fun()
{
    console.log("this function a_fun");
}


// a_fun() // this function a_fun

// addding object inside func 
a_fun.nameof ="smoodhies";
a_fun.mob =1234567890;
a_fun.logged_in_status =true;

// console.log(a_fun());//this function a_fun

// console.dir(a_fun);


//[Function: a_fun] { mob: 1234567890, logged_in_status: true }
// this is inside node_js

// [[Prototype]] : Object     //in web devtools




// console.log(a_fun.logged_in_status);  //true




/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//this a_fun becomes a higher order func 
function a_fun1(receiver)
{
    console.log("this function a_fun1");

    receiver()
}

//this a_fun2 becomes a callback func which was passes as argument
// console.log(a_fun1(a_fun2));       //this function a_fun1  this function a_fun2    



function a_fun2()
{
console.log("this function a_fun2");
}


/*
the thing was here happen was the concept of anonymous func declaration was happening here where we declare by with that func with variable then when we want call that func then we called that variable name
*/



let a_fun3=function()
{
    console.log("this function a_fun3 or anonymous or function expression");
}

// console.log(a_fun1(a_fun3)); //this function a_fun1 this function a_fun3 or anonymous or function reference 


// a_fun3() // this function a_fun3 or anonymous or function reference



//Anonymous func calling by callback func 

// console.dir(a_fun1(function()
// {
//     console.log("this is anonymous or function reference");
// }

// ));  
//in call_stack there was there store as name of anonymous func

//Arrow func calling by callback func 

// a_fun1(()=>
// {
//     console.log("this is anonymous or function reference");
// }

// );  
// in call_stack there was there store as name of anonymous func

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                             Investigation
function Invest_fun1(receiver)
{
    console.log("this function a_fun1");

    // receiver()
}




// let func_result = Invest_fun1(Invest_fun2())



console.log(func_result);//undefined

// let { func_result : short}= Invest_fun1(Invest_fun2())
// short()         // Cannot destructure property 'func_result' of 'Invest_fun1(...)' as it is undefined





function Invest_fun2()
{
    console.log("this function a_fun3 or anonymous or function expression");
}



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/










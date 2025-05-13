/*++++++++++++++++++++++++++++++ SCOPE +++++++++++++++++++++++++++++*/
// This is {} scope use in func object, loop , if else, 
//there types are local and global scope 
//means local can access global all properties but global cannot access local properties

//child func can access every property of parent func but parent func cannot access child property

/*

variables created by let and const it goes into script scope 

variable created using var goes into windows object (global scope)
also any function without using let and const goes windows object 

we can access of window object by window.name

both are global scope accessible into entire programme

+++++++++++++++++++++++++++++ Types of scope ++++++++++++++++++++++++++++++++++++++++++++++

❗ process are ❗
global scope ➡️  windows and script scope 
    ⬇️
local scope ➡️ function inside function and the created property first (this object or function) created then variables 
   ⬇️
lexical scope  


* script scope 
This scope is created when variable is created using let and const
and created by this variables is not accessible before declaration because created by that let and  const putted into temporal dead zone. It is not accessible outside scope{}  


* global scope
This scope is created when variable is created using var and also created but only function declaration not by a anonymous function or arrow function and creted by var properties accessible it can by-pass one layer scope .


* local scope
this is created when function is called inside a function when it is executed then this scope is destroyed mostly here lexical scope property is applicable

!!!!!!!!!!!!!! NOTE 
variables are not created by let const and var using this then there properties are accessible even outside scope it can by pass ever layer of scope
to avoid this type of behavior we use " use strict "


*lexical scope
It is feature that child function that access parent function values and global also

properties able access that are 
*There_own
*parent
*if parent have parent 
*global 

* block scope 
It is feature that values are not accessible outside scope{} this is used in if-else
loops,switch




* module scope
*/






// debugger

// console.log(new this); //  this is not a constructor


var v1 ="value 1" 
const v2 = "value 2"
let global_scope = "this is global scope"

function example()
{

let l_scope="this is local scope"
return global_scope="this is update global scope inside example func "; 

}

// console.log(example());

// console.log(l_scope);// !! l_ scope is not defined because !! of scope this is defined inside example function that was it is accessible only that scope only


function example2()
{
let l_scope2="this is local scope"

// console.log(this);// out is this 

/*

*/

function mini()
{
let mini_scope = "this is mini scope"
// console.log(this); //same as above output this keyword shows the current context here also show about this mini func and show global func inside of him 


return `this inside the mini func ,this is ${ l_scope2}  ,this ${ global_scope}` 

}

// mini() 


//console.log(mini_scope); // mini_scope is not defined  parent func but parent func cannot access child property

 
return global_scope="this is update global scope inside example func ";
}
// example2()

// console.log(mini()); //mini is not defined because it is defined inside example func scope 
 







let a = "created by let and inside global"
const b = "created by const inside global"
var  c = "created by const inside global"
d = "created without using variables inside global"



function fun0()
{
  let fun0_a = "created by let and inside fun0"
const fun0_b = "created by const inside fun0"
var  fun0_c = "created by const inside fun0"
 d0 ="created by fun0" 


console.log(`This is inside a fun0 properties ${fun0_a,fun0_b,fun0_c}  This is inside a global properties ${a,b,c}`);


{
  function block()
{
  let block_a = "created by let and inside global"
  const block_b = "created by const inside global"
  var  block_c = "created by const inside global"

  console.log(`This is inside a fun0 properties ${fun0_a,fun0_b,fun0_c}  This is inside a global properties ${a,b,c} This is inside a block properties ${block_a}`);

}

}

function fun1 ()
{
  let fun1_a = "created by let and inside fun1"
const fun1_b = "created by const inside fun1"
var  fun1_c = "created by const inside fun1"
 d1 ="created by fun1" 

  console.log(`${this} This is inside a fun0 properties ${fun0_a,fun0_b,fun0_c}  This is inside a global properties ${a,b,c} this is inside fun1 ${fun1_a}`  );

function fun2 ()
{
  let fun2_a = "created by let and inside fun2"
  const fun2_b = "created by const inside fun2"
  var  fun2_c = "created by const inside fun2"
  d2 ="created by fun2" 

 console.log(`${this} This is inside a fun0 properties ${fun0_a,fun0_b,fun0_c}  This is inside a global properties ${a,b,c} this is inside fun1 ${fun1_a} This is inside a fun0 properties ${fun2_a}`);

  
}

fun2()

// console.log(d2);//working

// console.log(d2,fun2_c);//fun2_c is not defined


}

fun1()

// console.log(d2);//working

}

fun0()

// console.log(d2);//working









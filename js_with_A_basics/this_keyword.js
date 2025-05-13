/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// ❗  NOTE THAT ❗

// THIS in global 
// This inside a function
// This in strict mode -(this substitution)
// This value depends on how this is called
// This inside a object methods
// Call Apply Bind methods -(sharing methods)
// This inside arrow function
// This inside nested arrow function
// This inside dom

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/ 

/*
THIS in global :
this keyword in global scope is always pointing to global object but it is change according to environment in browser it is "windows" and in node.js its  



// THIS in global :

// console.log(this); // global : browser = windows

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/





/* 
// This inside a function :

This keyword inside a function that is change according to strict-mode and non-strict-mode.In strict-mode that is undefined because the value of this is a undefined but in non-strict-mode that is global because (this substitution)  



*/
// "use strict"

function notethat()
{
    //the value isconsole depends on strict-mode and non-strict-mode 

// console.log(this);// the value is "global_object" but without strict mode 
// console.log(this);// the value is "undefined" with strict mode 


};

// notethat()



/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/* 

This ketword value is depends on how this is called :

how you are call that this then they point to that func such as 

ex : windows.this   //then here this is point to windows object 

*/

//This keyword value is depends on how this is calling and diff environment also

// console.log(notethat.this);  // undefined
// console.log({}.this);  // undefined


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/* 
This inside a object methods :
this keyword inside object then it is pointing to that


*/
// "use strict"
let obj ={
    name :"smoodhies",
    roll_no:152,
    t:function ()
    {
        console.log(this)
    },


}

console.log(obj.t);  //{ name: 'smoodhies', roll_no: 152, t: [Function: t] }

// console.log(this.this); //undefined




/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// This inside arrow function

/* 
Arrow functions differ in their handling of this: they inherit this from the parent scope at the time they are defined. This behavior makes arrow functions particularly useful for callbacks and preserving context. However, arrow functions do not have their "own this binding". Therefore, their this value cannot be set by bind(), apply() or call() methods, nor does it point to the current object in object methods

because of lexical context
*/

// "use strict"
let obj2 ={
    name :"smoodhies",
    roll_no:152,
    t:()=>
    {
        console.log(this)
    },


}

// console.log(obj.t());  // { name: 'smoodhies', roll_no: 152, t: [Function: t] }
// because the outer or parent function here is obj2 

// console.log(obj.t());   // with strict mode is also same output


// "use strict"
let nested_obj ={
    name :"smoodhies",
    roll_no:152,
    t:function papa()
    {
                // parent
        ()=>
            {
                   
                // son

                console.dir(this)
            }
    },


}

// console.log(nested_obj.t());//undefined  same in strict or non-strict mode also









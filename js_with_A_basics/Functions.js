/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++ FUNCTION & METHODS ++++++++++++++++++++++++++++++++++++++*/

//function is a collection of instruction which perform sepecific task help us to avoid repeatative task by only simple by calling a function


//DECLARATION OF FUNCTION
// type_1

//without parameter and argument function declaration

// function saymyname()
// {   

//     console.log("hello");

//     console.log("My Name Is ");    //this part opf function is called is definition or 
//                                    // function scope 
//     console.log("smookey");
    
// };

// saymyname();       //function calling or execution
                           // o/p is 
                          // hello
                         // My Name Is
                        // smookey




// type_2

// with parameter and argument function declaration

// function add(n1,n2)
// {

// console.log(n1+n2);

// }

// // add();   //o/p is NaN because cannot pass any argument

// add(5,6);  //o/p is 11 
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                investigation study

function add2(n1,n2)
{

console.log(n1+n2);

}

// add2(undefined,5); // O/p is NaN

// add2("4",5); // O/p is 45

// add2("4",NaN); // O/p is 4NaN

// add2(4,null); // O/p is 4

// let num=13
// add2(1,num); // O/p is 14




let num1=[1,2,3,5]
function add2(n1,...n2)
{

console.log(n1+n2);

}

// add2(1,num1); // O/p is  11,2,3,5

// add2(num1,num1); // O/p is  1,2,3,51,2,3,5

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//function with variable 

 function calculator(n1,n2)
{
let n3=n1+n2;
return n3

}

// calculator(5,7);  // function has been ececute and also return the calculated value but 
                 // there is no variable to store and not any function  to display the value
                 
        
function calculator2(n1,n2)
{
let n3=n1+n2;
return n3
}  

// let fun =  calculator2(5,8);  // o/p is 13

// console.log(fun);
// console.log(calculator2(9,6));  // o/p is 15


function login(username)
{
    return `Hey ${username} you just logged_In `
}

let status=login("smookey")
// console.log(status);// op is   Hey smookey you just logged_In

// console.log(login("smookey"));// op is   Hey smookey you just logged_In

// console.log(login());// op is  Hey undefined you just logged_In 




function login(username)
{
    if(username==undefined)
    {
        return console.log("please enter your user name");
        
    }
           return `Hey ${username} you just logged_In `

        

}


// console.log(login()); // please enter your user name
                         // undefined

// console.log(login("smookey"));// Hey smookey you just logged_In ;


function add(n1,...n2)
{
return `this is add ${n1} and ${n2}`

}

// console.log(add(1,2,3,4,5,6,7)); // op is this is add 1 and 2,3,4,5,6,7




//anonymous function also we called this function expression  declaration use as a variable

var anonymous_func = function anonymous()
{
    console.log("this is anonymous func");
}

// anonymous()//anonymous is not defined even if name of the is not given also it work by there variable name



// anonymous_func()//output is this is anonymous func

//anonymous function  also we called this function expression declaration use as a variable without func name 


var anonymous_func2 = function ()
{
    console.log("this is anonymous func2");
}

// anonymous_func2() // this is anonymous func2




















/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

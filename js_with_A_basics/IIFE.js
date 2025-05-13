/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                       Immediate invoked function expression (IIFE)

//why we used this to avoid or protect from global scope pollutant

// same name but diff IIFE
((function fun1(receiver)
{
    // console.log("this is anonymous or function definition");
    
}

))();  // this semicolon is very imp to execute after execute the code and run to multiple iife in single file







(function fun01(message)
{
    // console.log(`this is anonymous or function definition ${message}`);
}

)("!! This way we pass argument !!");






/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                               investigation

( (message)=>
{
    // console.log(`this is arrow function ${message}`);
}

)("!! This way we pass argument !!");





((function fun1(receiver)
{
    // console.log("this is anonymous or function definition");
    receiver()
}

))(Invest_fun2);  

//this is anonymous or function definition
// this function a_fun3 or anonymous or function expression


function Invest_fun2()
{
    // console.log("this function a_fun3 or anonymous or function expression");
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                             Arrow function


// function declaration
function fun ()
{
return console.log("This is  fun function");//explicit type return means not automatic return
}

// fun()



//anonymous function or function expression
const fun2= function ()
{
return console.log("This is  fun2 function");//explicit type return means not automatic return
}

// fun2()



const arrow = () => {}
// console.log(arrow());//undefined



const arrow1 = (num) => 
    
    value1= 2 * 2 //This is implicit type return with using return keyword we use this when we have a single line of code because by default it execute only single line of code

    // value2 =num * num // num is not defined
    value2 =5*5

console.log(arrow1());// op is 4  also This is implicit type return




const arrow2 = () => 
{value = 2 * 2} 
// console.log(arrow2());// undefined




const arrow3 = () => 
{return value = 2 * 2} //explicit type return means not automatic return value without using of return keyword

// console.log(arrow3());// 4


const arrow4 = num => 
    {return value = `${num*num}`} //explicit type return means not automatic return value without using of return keyword
    
    // console.log(arrow4(3));// 9



    const arrow5 = num =>  value = `${num*num}` // we this type when we have only one parameter if many then we do not able to use this type
    // console.log(arrow5(5));//25


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                  Investigation

var AR_fun1 =() => {

     const AR_fun2 =function() 
    {
    return console.log("This is arrow and function combination");//This is arrow and function combination

    }

    return AR_fun2()  //undefined
} 

    // console.log( AR_fun1());//This is arrow and function combination 
    //undefined

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

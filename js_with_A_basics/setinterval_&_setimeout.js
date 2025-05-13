/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                      Setinterval & Settimeout

/*

❗❗ NOTE That❗❗
There are two of func are there 

* Synchronomous :
In this the  programme execute the code line by line one after another there not interference of web-api or callball queue and or a loop event  

* Asynchronomous
In this the  programme execute the code place in other place to hold there in web-api where that want to execute what ever they takes time to execute after complete there required time them send in call-back queue anfter that loop event check that any func or programme is there in callback queue after that they check callstack is free or empty or not if then sen in callstack not remains in callbacl queue

*/


// setTimeout(hi,5000); //this line is execute after 5 second when callstack is free





// for(var i=1;i<=2;i++)
//     {
//         console.log("line 21 executed");
//     }

    
// (function hi()
// {
// console.log("line 26 inside iife");
// }
//  )();
 
function hi()
{
console.log("line 26 outside iife");
}
 

// console.log("line 34 executed");

setInterval(hi,5000) //after ever 5 second this func is called  by this set interval for unlimited time 













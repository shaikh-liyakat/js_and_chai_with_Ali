/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                  Events & Dom

/* 
Events 
Something happen or happening 

ex : click , double-click , form submit
*/


//                                  Topics we covered 
/* 
handler 
element.Onclick=func()


eventlistner
element.addeventlistner("click",function(e){
})

inside eventlistner
bubbling  //  child to parent traversing or execution ,false
capturing  //  parent to child traversing or execution ,true
stoppropagation() // stop bubbling
stopImmediatePropogation() // use for when the multiple same events on same element 
preventdefault()  // default behavior of elements or a browser


*/






// let E_on_h1 =document.querySelector("h1");   // type 2 adding event
// E_on_h1.onclick=greet2    
// this will overwrite the html event property or modify

//E_on_h1.onclick=greet    // this will execute

function greet()
{
    console.log("this is 2nd method of event call by html");
}

function greet2()
{
    console.log("this is 2nd method of event call by js");
}




//type 3 and most recommended type
// let typ_3 =document.querySelector("h2")
// typ_3.addEventListener("click",console.log("type 3 method event"))


// disadvantages all above 2_method are html and js of onclick that this event_listner 



// let e_ltns = document.querySelector("h1")
// e_ltns.addEventListener("click",function(e){
   
   
//  // return console.log(`X:${e.clientX}, Y:${e.clientY}`);
//  //this will show the x and y coordinate of mouse you clicked

//  //  console.log(e.srcElement);   //clicked element 
//  //  console.log(e.srcElement.parentNode); //parent of clicked element  
// },false)






//link propagation   //means stop or manipulate to redirect to that link

let link1 =document.querySelector("h1")

link1.addEventListener("click",function(e){
    // e.preventDefault();
    // console.log(e);
    console.log("clicked ");
    

})





















// Change background color of body

// const btn = document.querySelector("h1");
// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }
// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });




























































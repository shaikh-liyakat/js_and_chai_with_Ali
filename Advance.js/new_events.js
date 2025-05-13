/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                     ❗ Browser Events ❗

// ❗ What is events in js ❗
/* 
event means something happening or happen 

*/


// ❗ Event handler vs Eventlistener ❗
/* 
event handler :
a.
element.onClick=function 

b.
element.onClick=function 

//summary
but if there same event on same element then the after or next one handler will overwrite the previous one  

also there is not much feature provided in the this method 



event-listener :
a.
element.addEventListener("click",function(e){

console.log(e);
console.log("this is event listener");
})


b.
element.addEventlistener("click",function(){
console.log("hello users");
})


*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                               ❗    event handler   ❗


// !! concept of hosting !!

// let handler=document.querySelector("button");
// handler.onclick=hi
// var hi=function (){
//     console.log("hii");  


    //not working  because of hosting call before definition line


// }

// let handler=document.querySelector("button");
// handler.onclick=hi        

// function hi(){
//     console.log("hii");   
// }

// let handler2=document.querySelector("button");
// handler2.onclick=hi2        // ❗ this will overwrite the above one event ❗

// function hi2(){
//     console.log("hii2");
// }

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//                                    ❗ eventlistener ❗

// let lst=document.querySelector("button")
// lst.addEventListener("click",function(e){
//     console.log(e);
// console.log("hello users");            // hello users
// },false)      


// let lst2=document.querySelector("button")
// lst2.addEventListener("click",function(e){
//     console.log(e);
// console.log("hello users2");            // hello users2
// },false)              


// both executed simultaneously




/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/




// ❗ Bubbling / propagation  or Capturing or Stoppropagation and preventdefault ❗
/* 
                  child to parent 

*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//                                     ❗ bubbling ❗

// type 1  false bubbling
// let buble=document.querySelector("div")
// buble.addEventListener("click",function(e){
// console.log("div");
// },false)

// let buble2=document.querySelector("span")
// buble2.addEventListener("click",function(e){
// console.log("span");
// },false)

// let ch_buble=document.querySelector("button")
// ch_buble.addEventListener("click",function(e){
//     console.log("button");
// },false)

//  output
//button
//span
//div


// type 2    true                        ❗ capturing ❗

// let buble=document.querySelector("div")
// buble.addEventListener("click",function(e){
// console.log("div");
// },true)

// let buble2=document.querySelector("span")
// buble2.addEventListener("dblclick",function(e){
// console.log("span");
// },true)

// let ch_buble=document.querySelector("button")
// ch_buble.addEventListener("dblclick",function(e){
//     console.log("button");
// },true)

//output
//div
//span
//button


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// ❗ without stoppropagation ❗

// let buble=document.querySelector("div")
// buble.addEventListener("click",function(e){
// console.log("div");
// },false)

// let buble2=document.querySelector("span")
// buble2.addEventListener("click",function(e){
// console.log("span");
// },false)

// let ch_buble=document.querySelector("button")
// ch_buble.addEventListener("click",function(e){
//     console.log("button");
//     // e.stopPropagation()   //working 

// },false)

// all elements are showing in one click 
//


//❗ stoppropagation ❗

// let buble=document.querySelector("div")
// buble.addEventListener("click",function(e){
// console.log("div");
// },false)

// let buble2=document.querySelector("span")
// buble2.addEventListener("click",function(e){
// console.log("span");
// },false)

// let ch_buble=document.querySelector("button")
// ch_buble.addEventListener("click",function(e){
//     console.log("button");
    // e.stopPropagation()   //working 

// },false)

//if click on button show only that  one and click on other show element then the other one only
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                               ❗  prevent default  ❗ 

// let def=document.querySelector("a")
// def.addEventListener("click",function(e){
// console.log("link");
// e.preventDefault()           // working
// },false)

//op is link

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 



// ❗ types of events ❗

/* 
click
mouse
keyboard
form
touch
wheel
scroll
drag
pointer
browser events 

*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                ❗  form  ❗

// let form1 = document.querySelector("form")

// let sub_btn = document.querySelector("button#submit")

let input = document.querySelector("input#input_txt")


// input.addEventListener("click",function(e){
// console.log(e);
// },false)
 

// input = document.querySelector("input#input_txt")
// input.addEventListener("input",function(e){
// console.log( e.target());
// },false)

//op is whole input element


// input = document.querySelector("input#input_txt")
// input.addEventListener("input",function(e){
//     console.log( e.target.value);
//     },false)

//op is what we type inside a text box that text show


// let para=document.querySelector("p#new_para")
// input = document.querySelector("input#input_txt")
// input.addEventListener("input",function(e){
// console.log( e.target.value);
// para.innerText=e.target.value
// para.classList.add("universal")
// },false)

//op is what we write that show in paragraph text 


// let para=document.querySelector("p#new_para")
// input = document.querySelector("input#input_txt")
// input.addEventListener("change",function(e){
// console.log( e.target.value);
// para.innerText=e.target.value
// para.classList.add("universal")
// },false)

//op is when we change or write some thing in it and when the focus from element is change then it show output change of the text in it  


// let para=document.querySelector("p#new_para")
// input = document.querySelector("input#input_txt")
// input.addEventListener("focus",function(e){
// console.log( e.target.value);
// para.innerText=e.target.value
// para.classList.add("universal")
// },false)

// op is when we clicked on some element then it will came in to focus then the out is show what we written into it is shown


// let para=document.querySelector("p#new_para")
// input = document.querySelector("input#input_txt")
// input.addEventListener("blur",function(e){
// console.log( e.target.value);
// para.innerText=e.target.value
// para.classList.add("universal")
// },false)

// op is when we clicked on some element then it will came in to focus and click some other part except that element then it will came into blur means focus is change then the out is show what we written into it is shown


//❗ form with button ❗ 

//want to know more

// let form =document.querySelector("form")
// form.classList.add("universal")
// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     console.log(e);
//     let my_form=new FormData(form)
//     for (const val of my_form.entries()) 
//   {
//     console.log(val);
//   }
//   }
// )



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                  ❗   keyboard   ❗

//❗instructions❗
/* 
when we want take that element which not able to focus such as h1 etc then add this attribute into that element tabindex="0"  in browser there use tab button then it will come int focus
*/

// let heading=document.querySelector("#last_heading")
// heading.addEventListener("keypress",(e)=>{
    //     console.log( "code",e.code);   
    //         console.log("key",e.key);
    //         heading.innerText= `key:${e.key} code:${e.code}`
    //         heading.classList.add("universal")
    //     })
    
//op is what we type here then there show code and key will means such as                        code(minus) or key(-) this the values 
    
// but in this  there no show this keys caps,shift,up arrow,down arrow,alt,ctrl,WINDOWS,TABS,SCROLL LOCK,home,end 
    
    
    
    // let heading=document.querySelector("#last_heading")
    // heading.addEventListener("keyup",(e)=>{
        //     console.log( "code",e.code);   
        //         console.log("key",e.key);
        //         heading.innerText= `key:${e.key} code:${e.code}`
        //         heading.classList.add("universal")
        //     })

 //ALL keys are supported here and show there output
//  Keyup occurs when the user after clicked a key
        

        

// let heading=document.querySelector("#last_heading")
        // heading.addEventListener("keydown",(e)=>{
            //     console.log( "code",e.code);   
            //         console.log("key",e.key);
//         heading.innerText= `key:${e.key} code:${e.code}`
//         heading.classList.add("universal")
//     })

// keydown
/* 
// KeyDown occurs when the user presses a key.
*/




/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                        Mouse-Event

// let card = document.querySelector("div.card")
//  card.classList.add("card2") 

// Card func

// add card button

// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0
// let card = document.createElement("div")               //create new card
// card.classList.add("card2")
  
// add_card.addEventListener("click",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);
// })

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//                            mouse down
/* 
// mouseDown occurs when the user presses a mouse.
*/


// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0
// let card = document.createElement("div")               //create new card
// card.classList.add("card2")
  
// add_card.addEventListener("mousedown",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);
// })



//                        mouseup

// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0
// let card = document.createElement("div")               //create new card
// card.classList.add("card2")
  
// add_card.addEventListener("mouseup",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);
// })

// mouseup occurs when the user after clicked a key


//                         mouse wheel 

// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0
// let card = document.createElement("div")               //create new card
// card.classList.add("card2")
  
// add_card.addEventListener("wheel",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);

// let coordinates =`X:${e.clientX } Y:${e.clientY}`
// console.log(coordinates);
// })



//                        mouse leave

// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0
// let card = document.createElement("div")               //create new card
// card.classList.add("card2")
  
// add_card.addEventListener("mouseleave",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);

// let coordinates =`X:${e.clientX } Y:${e.clientY}`
// console.log(coordinates);
// })

// op is when mouse leave the that button then show output only work on where eventlistener is added on that element not there children in present inside that  


//                            mouseout

// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0

// let card = document.createElement("div")               //create new card
// card.classList.add("card2")

// let mini_div =  document.createElement("div")          //create new child div
// mini_div.classList.add("mini_div")
// mini_div.innerText="+"
// add_card.append(mini_div)

// add_card.addEventListener("mouseout",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);

// let coordinates =`X:${e.clientX } Y:${e.clientY}`
// console.log(coordinates);
// })

//mouseout is work on when they leave any element work on both parent element and there children inside also 



//                         mousemove 

// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0

// let card = document.createElement("div")               //create new card
// card.classList.add("card2")

// let mini_div =  document.createElement("div")          //create new child div
// mini_div.classList.add("mini_div")
// mini_div.innerText="+"
// add_card.append(mini_div)

// add_card.addEventListener("mousemove  ",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);

// let coordinates =`X:${e.clientX } Y:${e.clientY}`
// console.log(coordinates);
// })

//mousemove  work on movement of mouse




//                      mouseover

// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0

// let card = document.createElement("div")               //create new card
// card.classList.add("card2")

// let mini_div =  document.createElement("div")          //create new child div
// mini_div.classList.add("mini_div")
// mini_div.innerText="+"
// add_card.append(mini_div)

// add_card.addEventListener("mouseover",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);

// let coordinates =`X:${e.clientX } Y:${e.clientY}`
// console.log(coordinates);
// })

//it almost similar as mouseout but not almost as that when change position between one element to another element 


//                           mouseenter 
// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0

// let card = document.createElement("div")               //create new card
// card.classList.add("card2")

// let mini_div =  document.createElement("div")          //create new child div
// mini_div.classList.add("mini_div")
// mini_div.innerText="+"
// add_card.append(mini_div)

// add_card.addEventListener("mouseenter",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);

// let coordinates =`X:${e.clientX } Y:${e.clientY}`
// console.log(coordinates);
// })


//this mouseenter active when mouse is entered to that particular element  not affected by there children


//                           scroll
 
// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0

// let card = document.createElement("div")               //create new card
// card.classList.add("card2")

// let mini_div =  document.createElement("div")          //create new child div
// mini_div.classList.add("mini_div")
// mini_div.innerText="+"
// add_card.append(mini_div)

// add_card.addEventListener("scroll",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);

// let coordinates =`X:${e.clientX } Y:${e.clientY}`
// console.log(coordinates);
// })



//                                      touch

// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0

// let card = document.createElement("div")               //create new card
// card.classList.add("card2")

// let mini_div =  document.createElement("div")          //create new child div
// mini_div.classList.add("mini_div")
// mini_div.innerText="+"
// add_card.append(mini_div)

// add_card.addEventListener("touch",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);

// let coordinates =`X:${e.clientX } Y:${e.clientY}`
// console.log(coordinates);
// })

// touch occurs when the user clicked a key not after clicked


// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0

// let card = document.createElement("div")               //create new card
// card.classList.add("card2")

// let mini_div =  document.createElement("div")          //create new child div
// mini_div.classList.add("mini_div")
// mini_div.innerText="+"
// add_card.append(mini_div)

// add_card.addEventListener("touchend",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);

// let coordinates =`X:${e.clientX } Y:${e.clientY}`
// console.log(coordinates);
// })

//  touchend occurs when the user after clicked a key


//                  touchcancel
// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0

// let card = document.createElement("div")               //create new card
// card.classList.add("card2")

// let mini_div =  document.createElement("div")          //create new child div
// mini_div.classList.add("mini_div")
// mini_div.innerText="+"
// add_card.append(mini_div)

// add_card.addEventListener("touchcancel",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);

// let coordinates =`X:${e.clientX } Y:${e.clientY}`
// console.log(coordinates);
// })


//                                   touchmove 
// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0

// let card = document.createElement("div")               //create new card
// card.classList.add("card2")

// let mini_div =  document.createElement("div")          //create new child div
// mini_div.classList.add("mini_div")
// mini_div.innerText="+"
// add_card.append(mini_div)

// add_card.addEventListener("touchmove",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);

// let coordinates =`X:${e.clientX } Y:${e.clientY}`
// console.log(coordinates);
// })

//touchmove occurs when the user touch and move there  finger here and there inside particular element or outside 


//                        detail property

// function myFunction(event) {
//     let num = event.detail;
//     document.getElementById("tagname").innerHTML = num;
//   }
// op is 0

//                              event view 

// function myFunction(event) { 
//     let myObject = event.view;
//     document.getElementById("demo").innerHTML = myObject.name;
//   }

//op is object window

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//                               Drag

//instruction   if make any element draggable use this attribute inside that that tag draggable="true" 

// ex 1

// let heading=document.querySelector("#drag_heading")
//         heading.addEventListener("drag",(e)=>{
//         heading.classList.add("universal")
//     })

// ex 2

// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0

// let card = document.createElement("div")               //create new card
// card.classList.add("card2")

// let mini_div =  document.createElement("div")          //create new child div
// mini_div.classList.add("mini_div")
// mini_div.innerText="+"
// add_card.append(mini_div)

// add_card.addEventListener("drag",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);

// let coordinates =`X:${e.clientX } Y:${e.clientY}`
// console.log(coordinates);
// })


// drag occurs when the user drag that particular element

 /*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                           pointer


// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0

// let card = document.createElement("div")               //create new card
// card.classList.add("card2")

// let mini_div =  document.createElement("div")          //create new child div
// mini_div.classList.add("mini_div")
// mini_div.innerText="+"
// add_card.append(mini_div)

// add_card.addEventListener("pointermove",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);

// let coordinates =`X:${e.clientX } Y:${e.clientY}`
// console.log(coordinates);
// })

//pointer move similar as touch move but faster then them occurs when when we move pointer



//                              pointerenter
// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0

// let card = document.createElement("div")               //create new card
// card.classList.add("card2")

// let mini_div =  document.createElement("div")          //create new child div
// mini_div.classList.add("mini_div")
// mini_div.innerText="+"
// add_card.append(mini_div)

// add_card.addEventListener("pointerenter",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);

// let coordinates =`X:${e.clientX } Y:${e.clientY}`
// console.log(coordinates);
// })

// pointer move similar as mouseenter but faster then them occurs when when we enter pointer not affected by there children



//                         pointerleave
// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0

// let card = document.createElement("div")               //create new card
// card.classList.add("card2")

// let mini_div =  document.createElement("div")          //create new child div
// mini_div.classList.add("mini_div")
// mini_div.innerText="+"
// add_card.append(mini_div)

// add_card.addEventListener("pointerleave",(e)=>{
//     let card2 = card.cloneNode()                       //clone the card new card
// card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);

// let coordinates =`X:${e.clientX } Y:${e.clientY}`
// console.log(coordinates);
// })


//this pointereaave active when pointer is leave to that particular element  not affected by there children

 /*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                             event simulations
/*
actually we click then some events are fire are performed 

make or simulate like there perform a event .but here we perform these events without any human intervention 

// */

// let h1 = document.querySelector("input#input_txt")
// h1.focus()


// setTimeout(()=>{
//     let h1 = document.querySelector("input#input_txt")
//     h1.focus()
//  console.log("input box is on focused");
// },500)


// setInterval(()=>{
//     let h1 = document.querySelector("input#input_txt")
//     h1.focus()
//  console.log("input box is on focused");
// },500)

//help me auto focus on input box 


// setInterval(()=>{
//     let h1 = document.querySelector("input#input_txt")
//     h1.blur()
//  console.log("input box is on blur");
// },1000)


// setInterval(()=>{
//         let h1 = document.querySelector("input#input_txt")
//         h1.click()
//      console.log("input box is clicked");
// setInterval(()=>{
//     let h1 = document.querySelector("input#input_txt")
//     h1.focus()
//  console.log("input box is on focused");
// },500)
// if(h1.focus)
//     {
//         setInterval(()=>{
//             let h1 = document.querySelector("input#input_txt")
//             h1.blur()
//          console.log("input box is on blur");
//         },1000)
//     }
//     },500)

//here we first take input box make click then that take into focused then if they  was in focused then make them blur


// ex
// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0

// let card = document.createElement("div")         //create new card
// card.classList.add("card2")

// let mini_div =  document.createElement("div")//create new child div
// mini_div.classList.add("mini_div")
// mini_div.innerText="+"
// add_card.append(mini_div)

// let id=setInterval(()=>{let card2 = card.cloneNode()         //clone the card new card
//     card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);
// if(1000<flag)
//     {
// clearInterval(id)
//     }
// },10)

     
        
//also we can use into submit or reset into form


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                              event delegation
/* 
means access there parent through there children and after get access of parent then perform operation on children inside present them
*/

// let add_card=document.querySelector("div#add_card")
// add_card.classList.add("add_card2")
// let flag =0

// let card = document.createElement("div")         //create new card
// card.classList.add("card2")

// let mini_div =  document.createElement("div")   //create new child div
// mini_div.classList.add("mini_div")
// mini_div.innerText="+"
// add_card.append(mini_div)
// let child=add_card.child

// add_card.addEventListener("click",
//     function(e){let card2 = card.cloneNode()            //clone the card new card
//     card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     let tar= e.target
//     console.log("targeted ",e.target);  
    
//     div2=document.querySelector("div.card_container") 
//     div2.addEventListener("click",(e)=>{
//        tar= e.target;
//        par=tar.parentElements
//         console.log(e.target);
//         console.log(par);

//         if (tar != div2) {      
//             tar.remove()
//         }
//     })
// }) 

//click to remove particular card



// let id=setInterval(()=>{let card2 = card.cloneNode()         //clone the card new card
//     card2.innerText=flag++                                    
//     let div=document.querySelector("div.card_container")
//     div.append(card2)
//     console.log(card2);
// if(1000>flag)
//     {
// clearInterval(id)
//     }
// },10)

     
// let element=document.querySelector("")




/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// ❗ objects of events listener or methods of its ❗

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                             ❗ custom event ❗ 
/*

// Three ways
// type 1

let event_ex=new event("")




// type 2

let event_ex2=new customEvent("",{});


//type 3

let event_ex3 = document.createEvent("Event");

event_ex3.initEvent("event_name",true,true);

element.addeventlistener("build",(e)=>{
      },false);

element.dispatchEvent(event_ex3);
*/

//                            ❗created an event❗

// let new_e= new Event("custom_click",{bubbles:true,cancelable:true});

// document.addEventListener("custom_click",(e)=>{
//     console.log("hello");
// })

// document.dispatchEvent(new_e)                         //hello

// console.log(document.dispatchEvent(new_e));           //hello


 


// let event1= new CustomEvent("ownEvent",{bubbles:false,cancelable:true,detail:{print:console.log("this custom event")}});

// let elem=document.querySelector("#container")

// elem.addEventListener("ownEvent",(e)=>{
    
//     e.dispatchEvent(event1);
// console.log(e.detail.print); //this custom event also undefine show in return value
    
// })


// ❗ without this also working ❗ //but there is undefined is also show in  op

// document.dispatchEvent(event1);
 



//                             cancelable 
/*
to stop default behavior 

cancelable:true     then we control default behavior

cancelable:false    then we cannot control default behavior

for a preventdefault 
*/



// // let event1= new CustomEvent("ownEvent",{bubbles:true,cancelable:true,detail:{print:console.log("this custom event")}});

// // let elem=document.querySelector("form")
// // let btn=document.querySelector("button#submit")

// // elem.addEventListener("ownEvent",(e)=>{
    
// //     e.dispatchEvent(event1);
// //     e.preventDefault();
// // console.log(e.detail.print); //this custom event also undefine show in return value

// })
// btn.onclick();                              //currently not working



// ❗ cancelable:false    then we cannot control default behavior ❗

// let event1= new CustomEvent("ownEvent",{bubbles:true,cancelable:false,detail:{print:console.log("this custom event")}});

// let elem=document.querySelector("form")
// let btn=document.querySelector("button#submit")

// elem.addEventListener("ownEvent",(e)=>{
    
//     e.dispatchEvent(event1);
//     e.preventDefault();             //not stopped by prevent default 
// console.log(e.detail.print); //this custom event also undefine show in return value

// })




// custom click event is created

// const max=500;
// let last_click=0;
// let btn=document.querySelector("button#last_btn");

// btn.addEventListener("click",(e)=>{
//     console.log("timestamp",e.timeStamp," ","lastclick",last_click);
// const time_btw_click=e.timeStamp-last_click;
// console.log("time btw click",time_btw_click);
// if(time_btw_click>max)
//     {
//          last_click=e.timeStamp
//          console.log("single click is working");
//          console.log("time_btw_click",time_btw_click);
//          console.log("lastclick",last_click);
//          return
//     }
//     const cus_dbclick =new CustomEvent("custom_click",{
//         bubble:true,
//         cancelable:true,
//         composed:true,
//         details:{time_btw_click}
//     })
//     e.target.dispatchEvent(cus_dbclick)
//     console.log("dobleclick is working click is working");
//     console.log(time_btw_click);
//     console.log(last_click);
//     last_click=0
// })






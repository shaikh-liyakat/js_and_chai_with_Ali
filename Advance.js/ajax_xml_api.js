//xml is special type of object 


let xhr=new XMLHttpRequest()
xhr.open("GET","https://jsonplaceholder.typicode.com/",true)
//this will accept the method argument and api link last boolean value help for synchronous execution of code

xhr.send() //this will send the send request on particular provided api link

xhr.response //this will show which type of data will send toward us in respond 

xhr.onreadystatechange = ()=>{
     console.log(xhr.readyState);
}  
//this show the state of respond 

// xhr.responseType='json' 
// this will decide the type to convert the received response from them want to convert






// console.log(xml.response); 
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/* 
//diff types of states  

0 unsent

1 opened

2 header received

3 loading 

4 done

*/

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//softwares we use for this postman or vscode extension thunder client

/*
types of methods commonly

GET:
for gather the info from the requested api

POST:
for create some post on requested api

DELETE:
for delete the required content from the requested api 

PUT:
for update the value

patch:
similar to put but some different



*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


// ❗ this will clear the concept of callback hell ❗

//task to do is to create a dynamic function where we can send any type of request with also we can perform some operations on received in response data

//perform with buttons also 

let resp_data;

function create_api_req(method,api_link,high_fun){
let xhr_req=new XMLHttpRequest()
resp_data=xhr_req;

 xhr_req.responseType="json"
 
    
xhr_req.addEventListener("load",()=>{ 
   
          high_fun(xhr_req.response);
     
})


xhr_req.open(method,api_link)
xhr_req.send()
console.log(typeof xhr_req.response);
// console.log(xhr_req.response);


    
}

create_api_req('GET','https://dummyjson.com/carts',function(data){console.log(data.carts[0]);})
create_api_req("GET","https://dummyjson.com/carts",function(data){console.log(data.carts[0].products);})
create_api_req("GET","https://dummyjson.com/carts",function(data){console.log(data.carts[0].products[1].title);})



// ❗  without eventlistener got api data   ❗

// let resp_data2;

// function create_api_req(method,api_link,high_fun){
// let xhr_req=new XMLHttpRequest()
// resp_data2=xhr_req;

//  xhr_req.responseType="json"

// xhr_req.onreadystatechange=function(){
//      console.log( xhr_req.readyState);
// if (xhr_req.readyState == 4) {
//           high_fun(xhr_req.response);
//      }
// }
 

// xhr_req.open(method,api_link)
// xhr_req.send()
// console.log(typeof xhr_req.response);


    
// }

// create_api_req('GET','https://dummyjson.com/carts',function(data){console.log(data.carts[0]);})

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// random dog picture and showcase then 

//                              ❗  DOG API ❗
//                                WORKING 

let dog_img=document.querySelector("img")
let search_btn=document.querySelector("#fetch")


function fetch_dog_img(method,api_link,return_fun){
     let xhr=new XMLHttpRequest()
     xhr.responseType="json";
     
     xhr.open(method,api_link)
     xhr.send()
     
     xhr.addEventListener("load",function(e){
     
          console.log(xhr.response.message);
          dog_img.src=String(xhr.response.message);
         console.log( "src",dog_img.src);
         return_fun( xhr.response.message)
     },false)
     
      }

      search_btn.addEventListener("click",function(e){
    
          fetch_dog_img("GET","https://dog.ceo/api/breeds/image/random",function(data){
               dog_img.src= String(typeof xhr.response.message);
               console.log("response",data);
           })
      
     })



     // same with async await also with try and catch


     // async function asynchronous(e) {
     //       try{
     //         console.log(a);
     //       }
     //       catch(errors){
     //           console.log("normal error \n",errors);
     //           console.dir("error with description \n",errors);
     //           console.log("only message \n",errors.message);
     //       }
     // }

     // asynchronous()



//       dog_img=document.querySelector("img")
//       search_btn=document.querySelector("#fetch")
//      async function  asynchronous_2(){
//                 try{

//                     function fetch_dog_img(method,api_link,return_fun){
//                          let xhr=new XMLHttpRequest()
//                          xhr.responseType="json";
                         
//                          xhr.open(method,api_link)
//                          xhr.send()

//                          xhr.addEventListener("load",function(e){
//                               console.log(xhr.response.message);
//                               dog_img.src=String(xhr.response.message);
//                              console.log( "src",dog_img.src);
//                              return_fun( xhr.response.message)
//                          },false)
                         
//                           }
//                                 fetch_dog_img("GET","https://dog.ceo/api/breeds/image/random",function(data){
//                                    dog_img.src= String(typeof xhr.response.message);
//                                    console.log("response",data);
//                                })
//                 }
//                 catch(error)
//                 {
// console.log(error);
//                 }
//                }

//                search_btn.addEventListener("click",function(e){
//                     asynchronous_2()
//                })
                




















// let name_ele=document.querySelector("#name_tag")
// let age_ele=document.querySelector("#age_tag")
// let name_text=document.querySelector("span#name_text")
// let age_text =document.querySelector("span#age_text")


// name_ele.addEventListener("input",(e)=>{
//      console.log(e.target.value);
//      
//      // name_text.textContent=e.target.value
// },false)

// age_ele.addEventListener("input",(e)=>{
//      console.log(e.target.value);
//      age_text.textContent=e.target.value

// },false)



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                    ❗  LOCALSTORAGE  ❗

//here we only store string in localstorage

// here we set name dynamically from user input then store in local storage after that display that  store data from local storage

// let name_ele=document.querySelector("#name_tag")
// let age_ele=document.querySelector("#age_tag")
// let name_text=document.querySelector("span#name_text")
// let age_text =document.querySelector("span#age_text")

// name_ele.addEventListener("input",(e)=>{
//           console.log(e.target.value);
//           let local_str=localStorage
//      local_str.name=e.target.value
//      name_text.textContent=local_str.name
//      },false)


// age_ele.addEventListener("input",(e)=>{
//      console.log(e.target.value);
//      let local_str=localStorage
//      local_str.age=e.target.value
//      age_text.textContent=local_str.age
// },false)


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                       ❗ Store array and object in local_storage ❗

/* 
                                            ❗  Remember ❗

let local_str_item=localStorage.getItem("first")  //this will also find that text inside the local storage  but op is null

local_str_item=localStorage.first //this will also find that text inside the local storage  but op is undefined

local_str_item.first=name_text.textContent //this will set value inside the localstorage in front of first

local_str_item.setItem("key",value)  //this will set value inside the localstorage in front of key

*/

// let name_ele=document.querySelector("#name_tag")
// let age_ele=document.querySelector("#age_tag")
// let name_text=document.querySelector("span#name_text")
// let age_text =document.querySelector("span#age_text")

//  localStorage.getItem("first")  //this will also find that text inside the local storage  but op is null

// name_ele.addEventListener("input",(e)=>{
//      name_text.textContent=localStorage.getItem("first")
//           console.log(e.target.value);
//      let local_str=localStorage
//      //type 1
//      // local_str.name=e.target.value    //set the value inside name key

//      //type 2
//      local_str.setItem("name",e.target.value)
   
//      //old
//      // name_text.textContent=local_str.name
//     //new
//     name_text.textContent=local_str.getItem("name")

//      },false)

// age_ele.addEventListener("input",(e)=>{
//      console.log(e.target.value);
//      let local_str=localStorage

//      //type 1
//      // local_str.age=e.target.value    //set the value inside age key

//      //type 2
//      local_str.setItem("age",e.target.value)  //set the value inside age key

//      //old
//      // local_str.age=e.target.value
//      // age_text.textContent=local_str.age

//      //new
//      age_text.textContent=local_str.getItem("age") 
// },false)


//                                ❗ json ❗  

//store array or object into local storage

// JSON.stringify()  //for convert into string format such array or object 
// JSON.parse()  //for convert string into a array or object again


// let name_ele=document.querySelector("#name_tag")
// let age_ele=document.querySelector("#age_tag")
// let name_text=document.querySelector("span#name_text")
// let age_text =document.querySelector("span#age_text")

// let customer={
// name:"SMOoDHY",
// age:18,
// gender:"male",
// logging_status:true,
// arr:["h","e","l","l","o",()=>{"function inside arr"},]
// // greet:function(name){ console.log("Wellcome ",name);}  this will be ignore not added in local storage
// }
// name_ele.addEventListener("input",(e)=>{
//       console.log(e.target.value);
//      let local_str=localStorage
//      local_str.setItem("customer",JSON.stringify(customer.arr))
//      //op is ["h","e","l","l","o",null]


//     name_text.textContent=local_str.getItem("customer")
//      },false)

     
//      age_ele.addEventListener("input",(e)=>{
//           console.log(e.target.value);
//           let local_str=localStorage
//           local_str.setItem("age",JSON.stringify(customer.age))
//           // local_str.setItem("age",JSON.stringify(customer.arr))
//           age_text.textContent=local_str.getItem("age") 
//      },false)
     
//      console.log(JSON.parse('{"name":"SMOoDHY","age":18,"gender":"male","logging_status":true}'));

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// want add what is factory function and details also


// let user={
//      name:"smoodh",
//      age:19,
//      logged_in:true,
//      available:true,
//      func:()=>{
//           console.log(`hii my name is ${this.name}`);
//       }

// }
//  user.func() //hii my name is smoodh


function user_details(name,age,logged_in){
let user2={
    name,
    age,
    logged_in,
    // get_name: get_name(name),   //type 1  hii my name is smoodhy  smoodhy



    // get_name:()=>{        //type 2
    //     console.log(`hii my name is ${user2.name}`);
    //     return  `${user2.name}` ;
    // },

    // get_name: get_name(name), //type 3  //every time take diff memory locations
    
    //but name we passed in parameters it is parameter of function not a key value of object 

    get_name,  //smoodh
    
}

return user2;
}

//type 1
// function get_name(name){
//     console.log(`hii my name is ${name}`);
//     return  `${name}` ;  
// }

//type 3
function get_name(current_cont){
    console.log(`hii my name is ${"user2 object context",current_cont}`);
    // point to global 

//console.log(`hii my name is ${current_cont.user2}`);//giving error on one condition

    console.log(`hii my name is ${current_cont}`);
    // console.log(`hii my name is ${"get_name function this",this}`); //global
    // point to global 


    return  `${current_cont}` ;  
}




//type 1
let user_info=user_details("smoodhy",19,true);
// console.log(user_info); 

let user_info2=user_details("smoodhy",19,true);
// console.log(user_info); 

// console.log(user_info.get_name("smoodh")); 
// console.log(user_info === user_info2); false


//type 1 op is 
/* 
hii my name is smoodhy
{ name: 'smoodhy', age: 19, logged_in: true, get_name: 'smoodhy' }
*/


// console.log(user_info.get_name );  //hii my name is smoodhy  smoodhy

//type 2
// let user_info=user_details("smoodhy",19,true);
// console.log(user_info.get_name());

/*
❗  Note that  ❗

this function has receive a parameters and this key work point to current context pointed to (this means "jisneh bhi") new work like constructor when we call function using new keyword it will return always empty object 
*/


function user_fun(name,age,login)
{

// type 1

// info=
// {
// name:name,
// age:age,           
// login:login,
// }

// type 2

// info=
// {
// name,
// age,         //similar like above initialization when both key and values are same 
// login,
// fun:function(){
//     console.log(`\n my name ${this.name} and my age is ${this.age}`);
// }
// }

// return info; 



//  type 3

// info=
// {
// [this.name]:name,
// [this.age]:age,            //this type return the undefine keys and values
// [this.login]:login,
// // fun:function(){
// //   console.log(`\n my name ${this.name} and my age is ${this.age}`);
// // }
// }
                          
// return info;   


}


//type 3
// let data1 = new user_fun("smookey",19,true)
// console.log(data1);



// let data2=  user_fun("smookey",19,true)  

// console.log(data1 === data2); //  false not takes place in same memory locations 

// ❗ doing same work but takes diff memory location is not good practice ❗ 

// arr.length === arr2.length  // true means the function in this is location in same memory locations 

// user_fun.fun() because here only function def is present here // error  user_fun.fun is not a function



// console.log(data); // { name: 'smookey', age: 19, login: true }

// console.log(data.fun());  // function def is present here also return the object thats why data variables can access the object property also



// function find_age(name,age,login)
// {

//      this.name=name
//      this.age=age
//      this.login=login

// }



function find_age(name,age,login)
{

    info={
        name,
        age,
        login,

        age_finder:age_finder(age),

        // calc_age:find_age.commonMethods. age_finder(age),

    }

    return info;
    
     

}

function age_finder(age)
    {
        // console.log(age);
        // console.log(new Date().getFullYear() - age);
        return  new Date().getFullYear() - age
    }


    // let data =  find_age("liyakat",19,true)
    //{ name: 'liyakat', age: 19, login: true, age_finder: 2005 } 

    // let new_data = find_age("smookey",22,true)
    // { name: 'smookey', age: 22, login: true, age_finder: 2002 }

    // console.log(data ,"\n", new_data);  //
    // console.log(data.age_finder ,"\n", new_data.age_finder);  

    // console.log(data.age_finder === new_data.age_finder);  //false


/* op of above one

{ name: 'liyakat', age: 19, login: true, age_finder: 2005 } 
{ name: 'smookey', age: 22, login: true, age_finder: 2002 }
2005 
2002 

 */




// find_age.commonMethods ={
    // age_finder(age)
    // {
    //     console.log(age);
    //     // console.log(new Date().getFullYear() - age);
    //     // return  new Date().getFullYear() - age
    // }
// }



// let data = new find_age("liyakat",19,true)
// let new_data = new find_age("smookey",19,true)
// console.log(data.calc_age === new_data.calc_age);  //true
// console.log(data ,"\n", new_data);  //true













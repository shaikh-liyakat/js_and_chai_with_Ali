/*

asynchronous function is where execution takes place in thread where given or provided by browser the execution of programs happens on there 

synchronous function was execute on main thread of js script . js is single threaded language in synchronous function executes on main thread is execute line by line 

*/

//type 1

async function async_fun()
{
await setTimeout(() => {
     console.log("asyncfunction is called here "); //this will execute later because will executes on thread provided by a browser execute on that 
}, 2000);
}

// async_fun() 


// console.log(5+6);//this will execute first 






//type 2

// async function async_fun2()
// {
//      let url='https://dummyjson.com/users'
//  let resp =await fetch(url,{
//      method:"GET",
// })

// console.log(resp);

// }
// async_fun2() 

// console.log("after line is executed ");


// type 3
function sync_fun2()
{
     let url='https://dummyjson.co/users'
 let resp = fetch(url,{
     method:"GET",
}).then((data)=>{ return data.json()}).then((data)=>{console.log(data);}).catch((error)=>{console.log(error);})

console.log(resp);

}
// sync_fun2() 

// console.log("after line is executed ");



//type 3

function make_req()
{
 let url='https://dummyjson.com/users'
 let resp = fetch(url,{
     method:"GET",
})


console.log(resp);

return resp;
}

// make_req().then((data)=>{console.log(data);}).catch((error)=>{console.log(error);})





// function make_req()
// {
//      try{
//           let url='https://dummyjson.com/users'
//           let resp = fetch(url,{
//           method:"GET",})

//           console.log(resp);

//           return resp;
//      }
//       catch(err)
//        {
//         console.log(err);
//        }
// }

// make_req().then((data)=>{console.log(data);})


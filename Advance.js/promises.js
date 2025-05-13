// ❗ promise have 3 states pending resolve or rejected ❗


//                      type 1 declaration
// let promised=new Promise(function(resolve,reject){
// setTimeout(function()
// {
//      console.log("async is completed");
//      resolve()
// },1000)

// })

// promised.then(function(){
// console.log("promise consumed");
// })


//                      type 2 declaration
// new Promise(function(resolve,reject){
// setTimeout(function(){
//      let flag=false;
//      if(!flag)
//      {
//         console.log("async2 is completed");
//         resolve({name:"smoodh",age:18})
//      }
//      else
//      {
//       console.log("error: there was error occur");
//       reject("error")
//      }
// },1000)

// }).then(function(e){
// console.log("promise2 is consumed",e);
// }).catch(function(e){
//      console.log(e);
// }).finally(()=>{console.log("everything done ");})

//op is 
// async2 is completed
// promise2 is consumed { name: 'smoodh', age: 18 }
// everything done




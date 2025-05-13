
let api_link='https://dummyjson.com/users'


//type 1
fetch(api_link)
.then((data)=>{return data.json()})
.then((data)=>{console.log(data);})



//with async  type 2
async function asy_fun(){
     let respond=await fetch(api_link);
     let resp= await  respond.json()   //this mtd is slow one
      console.log(resp.json());


     //find fastest way to convert this 
     //  respond=JSON.parse(respond)
     //  console.log(respond);
      
}
asy_fun()




//type 3
// fetch with async & await with try and catch 
async function sync_fun(att){
     try{

          let url='https://dog.ceo/api/breeds/image/random'
          url='https://dummyjson.com/users'  //updated one

          let resp = await fetch(url,{method:"GET"
          })

          console.log("first one",resp);
          console.log("after func");

          resp=await resp.json()

          console.log("second ", resp);
     }
     catch(err)
     {
          console.log(err); 
     }
     
}

sync_fun()






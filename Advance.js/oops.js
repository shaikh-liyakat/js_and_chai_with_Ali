/*
constructor function
prototype
classes
instances (this , new)


oops pillar :

abstraction
encapsulation
polymorphism
inheritances  

*/

// let user_details={
//      name:"smoodhy",
//      age:19,
//      gender:"male",
//      dob:function birth(){
//           console.log(this);
//    console.log(new Date().getFullYear()-this.age);    
//    return  new Date().getFullYear()-this.age;  
//      }

// }

// console.log(user_details);
//{ name: 'smoodhy', age: 19, gender: 'male', dob: [Function: birth] } 


// console.log(user_details.dob());
// 2005

function get_birth_year(name,age,gender)
{
     this.name=name;
     this.age=age;
     this.gender=gender;

     return this;  //return window in web
}

// let user_info =   get_birth_year("smoodh",19,"male")

// console.dir(user_info);  


/*
Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],       
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: value],
  navigator: [Getter],
  crypto: [Getter],
  name: 'smoodh',   ❗
  age: 19,          ❗
  gender: 'male'    ❗
}
*/


// with new keyword
// user_info = new  get_birth_year("smoodh",19,"male")

// console.dir(user_info);  
//get_birth_year { name: 'smoodh', age: 19, gender: 'male' }


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//                                 ❗ INSTANCES  ❗






/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                 ❗  classes ❗

class user_details 
{

     // Class constructor user_details cannot be invoked without 'new'  

     // default constructor invoke when we call func with new 

     // name="smoodh"
     // age=19
     // gender="male"



    // user define constructor
    constructor(name,age,gender,password)
    {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.password =password;


      // this.password =this.password;  //  [Function: password]

      // this.password = function secure_Password()  //function fat_gaya
      // {
      //   return `${this.password}abc `     
      // };

    }

    // password()
    // {
    //   return `${password}this is encrypt`
    // }
    
    secure_pass()
    {
      return `${this.password}this is encrypt` //123this is encrypt
    }

    
}


// const secure_pass= new user_details("smoodhy",19,"male","123")
// console.log(secure_pass)

// console.log(secure_pass.secure_pass())  // 123this is encrypt



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// behind the scene 
// this method of applied on class and class keyword is wrapper on this combination of constructor and prototype methods

// diff memory address

function encrypt_pass(password){
  return`${password} encrypt one`
}

function user_details2 (name,age,gender,password)
{
  this.name=name;
  this.age=age;
  this.gender=gender;
  this.password= password;

  //passes the value of password
  this.password= encrypt_pass(this.password); //same memory address

  return this;

 


  // this.password= secure_pass;  // same memory address
  
}

//same memory address
//settled in prototype of user_details func and this function show same address in all function calls
// user_details2.prototype.secure_pass=function (){
//   return`${this.password} encrypt one`
// }






const secure_pass= new user_details2("smoodhy",19,"male","123")
const secure_pass2= new user_details2("smoodhy",19,"male","123")

console.log(secure_pass);
// user_details2 {   
//   name: 'smoodhy',
//   age: 19,        
//   gender: 'male', 
//   password: '123' 
// }

// console.log(secure_pass.secure_pass());  // 123 encrypt one
// console.log(secure_pass.password); //123 encrypt one
// console.log(secure_pass.password === secure_pass2.password );
// true


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//  inspection study
// class user_details 
// {

     

//     // user define constructor
//     constructor(name,age,gender,password)
//     {
//       this.name = name;
//       this.age = age;
//       this.gender = gender;
//       this.password =password;


//       // this.password =this.password;  //  [Function: password]

//       // this.password = function secure_Password()  //function fat_gaya
//       // {
//       //   return `${this.password}abc `     
//       // };

//     }

//     // password()
//     // {
//     //   return `${password}this is encrypt`
//     // }
    
//     secure_pass()
//     {
//       return `${this.password}this is encrypt` //123this is encrypt
//     }

    
// }


//op of them

// console.log( new user_details("smoodhy",19,"male",123));
// user_details { name: 'smoodhy', age: 19, gender: 'male' }

// let data= new user_details("smoodhy",19,"male");
// console.log(data.encryption("liyakat"));

// const secure_pass2= new user_details("smoodhy",19,"male","123")
// console.log(secure_pass2.password)


// console.log(secure_pass2.secure_pass())  // 123this is encrypt

/*
function secure_Password()
      {
        return `${this.password}abc `
      }abc
*/


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

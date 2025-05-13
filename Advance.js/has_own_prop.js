//                            ❗     HAS_OWN_PROPERTY     ❗

/* 
A property descriptor is a record with some of the following attributes:

value
The value associated with the property (data descriptors only).

writable
true if and only if the value associated with the property may be changed (data descriptors only).

get
A function which serves as a getter for the property, or undefined if there is no getter (accessor descriptors only).

set
A function which serves as a setter for the property, or undefined if there is no setter (accessor descriptors only).

configurable
true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.

enumerable
true if and only if this property shows up during enumeration of the properties on the corresponding object.

*/

class secret_info_two 
{

     constructor(name,age,gender)
     {
          this.name=name;
          this.age=age;
          this.gender=gender;
     }
  
     

     }




// let val= new secret_info_two("liyakat",18,"male");


// let property = Object.getOwnPropertyDescriptors(val)

// property.val.writable;

// console.log(property.val.writable());




// op is
 
/* 
ORIGINAL NAME : liyakat
{
_name: {
  value: 'SMOOKEY',
  writable: true,
  enumerable: true,
  configurable: true
},
age: { value: 18, writable: true, enumerable: true, configurable: true },
gender: {
  value: 'male',
  writable: true,
  enumerable: true,
  configurable: true
}
}
*/






// for example 

let math_pi_prop= Object.getOwnPropertyDescriptor(Math,"PI");

// console.log(math_pi_prop);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }








let details=
{
     name:"smoodhy",
     age:19,
     profession:"student"

}

// let prop 
// prop = Object.getOwnPropertyDescriptors(details,"name");
// console.log(prop);

/* 
{
  name: {
    value: 'smoodhy',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 19, writable: true, enumerable: true, configurable: true },
  profession: {
    value: 'student',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/

// Object.defineProperty(details,'name',{
// configurable:false,
// writable:false,
// enumerable:false,
// })

// console.log(Object.getOwnPropertyDescriptors(details,"name"));
/*
{
  name: {
    value: 'smoodhy',
    writable: false,
    enumerable: false,
    configurable: false
  },

*/

// writeable or not 

// details.name="liyakat"
// console.log(details.name);//smoodhy no changes happen 

//enumerable or not means loop or not
for( let [key , val] of details){
     console.log(key,`values are` ,val); //details is not iterable

}
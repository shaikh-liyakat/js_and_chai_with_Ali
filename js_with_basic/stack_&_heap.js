//working of memory ||stack and heap memory

//primitive type data //!!(stack)!! here is copy provided and changes happend in that copy not in there og place

//non_primitive type data //!!(heap)!! here is reference is provided means location is provided here    

//stack ex 
// let num=1111;
// let num2 =num;
// console.log(num);

// num2= 2222// stack concept changes happen in copy not in actual variable 
// console.log(num2);


//Heap ex 
let usr1={
    email:"xyz@gmail.com",
    mob:123456789,
}
let usr2=usr1
usr2.email="liyakat@gmail.com"

console.log(usr1.email);
console.log(usr2.email);

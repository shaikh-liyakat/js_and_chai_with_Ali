const id="7821" //this not change when we want new value assingent to that
let city="mumbai"
var email="xyz@gmail.com"
liyakat="name"
console.log("only output",id,city,email)//see output on console  
console.table(["this is only values with index no",id,city,email,liyakat])

/*
prefer not use var
because of block scope and functional scope
*/

function values(f,s)//this addition not  part of var ,let and const 
{
this.f=f
this .s=s
this.first="first name"
this.second="second name"
}

let me = new values ("md","liyakat");
console.table(me);
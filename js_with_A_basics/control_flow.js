/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                  Control-flow
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                   IF-else statement




/* 
 types of conditions 

< , > , <= , >= , == , != , === , !== 

*/

let num ;

// if (num === undefined)
//      {
//     console.log("It is equal "); // It is equal 
// } 
// else
// {
//     console.log("not equal");
// }



let user_name = "smoodhies";
let login_status = true;
let age = 18;


// multiple condition checking or nested control statement


// type 1
// this is working like an and && here is any is false then not show the values

// if (user_name )  // this condition means there is any user value is there then enter
//      {
//     
    //  if (login_status === true) 
//      {
//    if (age >=18)
//      {
//       console.log(`Access Granted `); //Access Granted 
//      }

//     }
   
// }

// else
// {
//     console.log("Access not granted");

// }


let cash_in_hand = 5000;
let cash_in_online = 6000

// It works like a or || condition if any is true then show that

// if( cash_in_hand > 6000 )
// {
// console.log(`Able to purchase a tea`); // 
// }
// else if(cash_in_online > 7000)
// {
//  console.log(`Able to purchase a coffee`);   
// }
// else if(cash_in_hand + cash_in_online >= 13000)
// {
// console.log(`Able to purchase both tea and coffee`);
// }

// else if(cash_in_hand == 4000)
// {
//     console.log("Able to purchase cold tea");  // Able to purchase cold coffee
// }
// else if(cash_in_online == 6000)
// {
//     console.log("Able to purchase cold coffee");
// }
// // }
// 
// else
// {
//     console.log(`unable to purchase because of insufficient balance `);
//     console.log(` Balance in hand ${cash_in_hand} Balance in online ${cash_in_online}`);
// 
// }


 user_name = "smoodhies";
 login_status = true;
 age = 19;
// if(user_name && login_status == true && age >= 18) // in this ever condition has to true if not then not able to access 
//  {
//     console.log("Access granted");
//  }
//  else
//  {
//     console.log("Not able to access");
//  }
 
 
 
 
 cash_in_hand = 5000;
 cash_in_online = 6000

// if(cash_in_hand  >6000 || cash_in_online > 7000 || cash_in_hand + cash_in_online >=10000) //in this ever condition has to be true but if any one is true then able purchase but if ever condition is false not even single is true then not able to purchase 
    // {
    //     console.log(`Able to purchase what you want`);
    // }
    // else 
    // {
    //     console.log(`unable to purchase because of insufficient cash `);
    // }

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                    switch case

let month_num = 7
// switch (month_num) {
//     case 1: console.log("jan");
        
//         break;

//     case 2:console.log("feb");
        
//         break;
//     case 3:console.log("mar");
        
//         break;
//     case 4:console.log("april");
        
//         break;
//     case 5:console.log("may");
        
//         break;
//     case 6:console.log("june");
        
//         break;
//     case 7:console.log("july");
        
//         break;
//     case 8:console.log("august");
        
//         break;
//     case 9:console.log("september");
        
//         break;
//     case 10:console.log("oct");
        
//         break;
//     case 11:console.log("nov");
        
//         break;

//     case 12:console.log("dec");
        
//         break;
    

//     default:console.log("enter correct option");
//         break;
// }

//july





/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                 Investigation

let val = 7

// if ((val>=1 && val<=10) ||  (val <="A" && val>="Z" )||(val>="a" && val<="z") ) 
// {
// console.log("1 to 10 num or jan to dec months");  //1 to 10 num or jan to dec months
// }
// else
// {
//     console.log(`not the correct option`);
// }


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                  Truthy value or falsy value

/* 
❗ Truthy values ❗
// means assuming there is any value in it

"0" , "false" , {} , [] ,() => {} , function(){}

❗ values comparison❗
false == 0

false == ""
 0 == ""


*/



let value = ""
if (value )       // empty string is value is equal to the value = "" ==  !value means not equal to there is any value
{
//  console.log("value is valid");   
}
else
{
    // console.log("not valid value ");  //not valid value 
}

value = ""
if (value == false)       // empty string is value is equal to the value = "" ==  !value means not equal to there is any value
{
//  console.log("value is valid");  //value is valid 
}
else
{
    // console.log("not valid value ");  
}


let value2 ="a"
// if (value2  )    // value is truthy means value2 == means is the value is there in it 
// {
//  console.log("value is truthy");   
// }
// else
// {
//     console.log("value is falsy");  //not valid value 
// }

let value3 = 0
// if (value3 == false) //value is truthy means "value3 == false" means is the value is there in it 
// {
//  console.log("value is truthy");   //value is truthy
// }
// else
// {
//     console.log("value is falsy");  
// }


value3 = 1
// if (value3 == true) //value is truthy means "value3 == false" means is the value is there in it 
// {
//  console.log("value is truthy");   //value is truthy
// }
// else
// {
//     console.log("value is falsy");  
// }



let value4 ="0"

// if (value4 === false) //value is truthy means "value3 == false" means is the value is there in it
// {
//  console.log("value is truthy");   //value is truthy
// }
// else
// {
//     console.log("value is falsy");  //value is falsy
// }

if (false == "") {
    // console.log("correct");
}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                       Nullish Coalescing Operator ?? 

/* 
USAGE :
 
use for assigned  any value instead of assigned undefined or null

*/

 val =  null ?? undefined ?? 7
//  console.log(val);  //op is 7

 val = 8 ?? undefined
//  console.log(val);  // op is 8

 val = null ?? undefined
//  console.log(val);  // op is undefined
 
 val = undefined ?? null
//  console.log(val);  // op is null

val = undefined ?? null ?? 10 ?? 20
// console.log(val); // op is 10



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                            Ternary operator
/* 
condition ? true : false

*/

const bank_balance = 7000

// bank_balance >= 6000 || bank_balance !==  (undefined || null) ? console.log(`greater then 6000`)  : console.log("less then 6000") 

//greater then 6000


//   (!bank_balance == (undefined || null) )? console.log(`greater then 6000`) : console.log("less then 6000") 
  //Cannot access 'bank_balance' before initialization


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

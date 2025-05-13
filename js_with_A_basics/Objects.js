/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                OBJECTS-DECLARTION
 
let unique = Symbol("key")
let num= Number(7821)
// let namaste
;



let obj0={

    greeting: new function()
    {
        // console.log("hello welcome to you all");
    },

    "comp":"access",  //how we access this object property by using this obj.comp
                      // it is in investigation study
    
    full_name:{
        f_name:"md",                        
        m_name:"smookey",    
        l_name:"shaikh",
    },
    roll_no: 152,
    email:"xyz@gmail.com",
    age: 18,
    mob:123456789,
    [unique]:1223,
    [num]:num,
    logged_days:["mon","tue"],
    logged_in:false
}


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*++++++++++++++++++++++++++++++ UPDATE THE VALUE OF OBJECT +++++++++++++++++++++++++++++*/
//type 1
// obj0["comp"]="NEW ACCESS"

// //type 2
// obj0.age=19

// Object.freeze(obj0["comp"])// after this freeze we cannot update the values

// console.log(obj0);// updated output



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//TYPES to access objects
// console.log(obj0.full_name.f_name);
// console.log(obj0["full_name"]); //O/P is {f_name:'md',m_name:'smookey',l_name:'shaikh'} 
//why we write into inverted commas is because it takes  the key value as string

// console.log(obj0);
// '7821': 7821,
//   comp: 'access',
//   full_name: { f_name: 'md', m_name: 'smookey', l_name: 'shaikh' },
//   roll_no: 152,
//   email: 'xyz@gmail.com',
//   age: 18,
//   mob: 123456789,
//   logged_days: [ 'mon', 'tue' ],
//   logged_in: false,
//   [Symbol(key)]: 1223
// }

// console.log(typeof obj0[num]);// op is number
// console.log(typeof obj0[unique]);// op is string
// console.log(obj0["full_name"]);//op is {f_name:'md',m_name:'smookey',l_name:'shaikh'}
// console.log(Object.entries(["full_name"]));// this method is use for convert to present values into array format 


// console.log(Object.keys(obj0));

//all  key contains in obj0 is displayed
// [
//     '7821',        'greeting',
//     'comp',        'full_name',
//     'roll_no',     'email',
//     'age',         'mob',
//     'logged_days', 'logged_in' 
// ]

// console.log(Object.values(obj0));

// all values contains in obj0 is displayed

// [
//     7821,
//     {},
//     'access',
//     { f_name: 'md', m_name: 'smookey', l_name: 'shaikh' },
//     152,
//     'xyz@gmail.com',
//     18,
//     123456789,
//     [ 'mon', 'tue' ],
//     false
//   ]

// console.log(Object.entries(obj0));

// all entries with there keys and values contains in obj0 is displayed
// [
//     [ '7821', 7821 ],
//     [ 'greeting', {} ],
//     [ 'comp', 'access' ],
//     [
//       'full_name',
//       { f_name: 'md', m_name: 'smookey', l_name: 'shaikh' }
//     ],
//     [ 'roll_no', 152 ],
//     [ 'email', 'xyz@gmail.com' ],
//     [ 'age', 18 ],
//     [ 'mob', 123456789 ],
//     [ 'logged_days', [ 'mon', 'tue' ] ],
//     [ 'logged_in', false ]
//   ]

// console.log(obj0.hasOwnProperty("logged_in"));//op is true
// console.log(obj0.hasOwnProperty("logged_days"));//op is true


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                INVESTIGATION STUDY

// console.log(obj.comp);//no output
// console.log(obj."comp");//error
// console.log(obj0["comp"]);// we got output by this format and O/P is access

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


//NOTE
/*In object there is two things only key and value here is (roll_no is (key) and (value is (152) and by default roll_no tht is key take as a string type  */



/*+++++++++++++++++++++++++++++++++METHODS of OBJECTS+++++++++++++++++++++++++++++++++++ */

let target ={1:"a",2:"b"}
let source ={3:"c",4:"d"}
let obj3={...target,...source}


// console.log("normal",obj3);//O/p is { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



let obj01 ={1:"a",2:"b"}
let obj02 ={3:"c",4:"d"}

let f_obj = Object.assign({},obj01,obj02)// GOOD practice  { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// console.log(f_obj);

// console.log(obj3==target);// op iis true

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                 JSON

{
    // in this api are written object format 
    // but in this when we write api both key and values wite in string type  


     //want know more go unknown jason formatter

     //ex
    //  {
    //     "message": "Not Found",
    //     "documentation_url": "https://docs.github.com/rest",
    //     "status": "404"
    // }
}

[
    // this also a api is in array
]

[
{},{}
// this also a api is in array but have many objects in it

]

           
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// !! ...rest !! this rest operator use to take many inputs this is also act as spread operator

let course={
    c_name:"js",
    price:"999",
    c_instructor:"smookey"

}

//object destructuring this method 
const {c_instructor } = course

console.log(c_instructor);// o/p is smookey

const {c_instructor:short } = course //here is destructuring created for c_instructor and new name is short and here the course act as reference for a objects in it 

// console.log(short);// o/p is smookey


const {c_instructor:short1, c_name: name1,course:c } = course 

// console.log(c);// object name is cannot be destructuring . o/p is undefined

// console.log(name1);// o/p is js
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                          Call & Apply & Bind

/* 

These are function or technique thats help us to borrowing from other function or method reference to actual ful implemented function


*/



let user_info ={ 
    name:"smoodhies",
    age : 18,

    print:function()
    {
    console.log(`${this.name}  ${this.age}`);
    }
   

    
}

// user_info.print(); //iron_man  57

let user_info2 = 
{
    name : "iron_man",
    age:57,
    

}

 //for understanding 
    /*
    this keyword inside a function is change on strict or non-strict mode and this substitution  undefined replace by global object and the global is pointing to these two function then also there property can be also be accessible and both also have same key name in there inside
   
    */




//function borrowing

// user_info.print.call(user_info2) //iron_man

/* 

if we want use function  borrowing then key name is have to same in both the object

*/



/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//                                     Investigation

let info;
let authentication ={
    login_status : true,
    name : function(...update)
    {
             //this.name=update;
            // console.log(this.name); 
    },
    team_name :"Avengers",
    display_by : "mcu",
//     summary: function(...update) 
//         // console.log(this); 
//         console.log(this.name);     
// }
}


// authentication.summary("smookey","hulk","iron_man") 
//[ 'smookey', 'hulk', 'iron_man' ]

// info =



let authentication2 ={
    login_status : true,
    name : function(...update)
    {
           this.name=update;
            console.log(this.name);          
    },
    team_name :"justice league",
    display_by : "dc",
}

// authentication.name.call(authentication2.name("s","m","o","o","k")) 
// [ 's', 'm', 'o', 'o', 'k' ]


let user_detail ={
    login_status : true,
    user_name : "iron_man",
    heros_team_name :"Avengers",
    work_display_by : "mcu",
}



let sharing = function (arg1,arg2)
{
console.table([`${this.user_name}  ${this.heros_team_name}  ${this.work_display_by}  
    ${arg1}  ${arg2}`]);

// console.log(this);
}
// sharing()

//fUnction borrowing

//call
// sharing.call(user_detail,"liyakat_1","ali_1")
//iron_man  Avengers  mcu  liyakat_1  ali_1



//apply

// sharing.apply(user_detail,["liyakat_1","ali_1"])
//iron_man  Avengers  mcu  liyakat_1  ali_1  


let user_detail2 ={
    login_status : true,
    user_name : "superman",
    heros_team_name :"justice_league",
    work_display_by : "dc",
}

// sharing.call(user_detail2,"liyakat_2","ali_2")
//iron_man  Avengers  mcu  liyakat_1  ali_1   

// sharing.apply(user_detail,["liyakat_1","ali_1"])
//iron_man  Avengers  mcu  liyakat_1  ali_1   


// Bind
let details = sharing.bind(user_detail,"liyakat_1","ali_1")

// details()
// ┌─────────┬───────────────────────────────────────────────────┐
// │ (index) │ Values                                            │
// ├─────────┼───────────────────────────────────────────────────┤
// │ 0       │ 'iron_man  Avengers  mcu  \n    liyakat_1  ali_1' │
// └─────────┴───────────────────────────────────────────────────┘









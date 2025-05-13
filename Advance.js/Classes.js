
// ❗ classes behind the scene ❗ 
// this method of applied on class and class keyword is wrapper on this combination of constructor and prototype methods


class person_info{
     constructor(name,age,profession)
     {

          this.name=name;
          this.age=age;
          this.profession=profession;


     }

     secret_info ()
     {
          let contact_no= 1234567899;
          let email="smoodh@gmail.com"

          return [contact_no,email]
     }

}

/*
                                 ❗  Remain this ❗

constructor invoke when we call func with new 

*/

// let info= new person_info("smookey",19,"student")
// console.log(info)

// let secret_info=info.secret_info();
// console.log(secret_info);








//                     ❗  Behind the how class is applied   ❗ 

function person_info2 (name,age,profession)
{
     this.name=name;
     this.age=age;
     this.profession=profession;

     // return this

}

person_info2.prototype.secret_info=function()
{
     let contact_no= 8976044891;
     let email="liyakat@gmail.com"

     return [contact_no,email]
}




// info= new person_info2("liyakat",19,"student")
// console.log(info) //person_info2 { name: 'liyakat', age: 19, profession: 'student' }

 

// secret_info= info.secret_info();
// console.log(secret_info); // [ 8976044891, 'liyakat@gmail.com' ]



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                               ❗  Instances ❗

class user_info
{

     // let m="male"
     // let f="female"
     constructor(name,age,profession,gender={male:"m",female:"f"})
     {
          this.name=name;
          this.age=age;
          this.profession=profession;
          this.gender=gender;
     
     
     }

     //without static keyword
     // credential_info()
     // {
     //      let contact_no= 8976044891;
     //      let email="liyakat@gmail.com"
     
     //      return [contact_no,email] 
     // }




     //with static keyword
     //  static credential_info()
     // {
     //      let contact_no= 8976044891;
     //      let email="liyakat@gmail.com"
     
     //      return [contact_no,email] 
     // }

}

let info= new user_info("smookey",18.5,"student","m");
// console.log(info);


//                    without static

// secret_info= info.credential_info();
// console.log(secret_info); //[ 8976044891, 'liyakat@gmail.com' ]


//                      with static

// secret_info= info.credential_info();
// console.log(info.credential_info()); //[ 8976044891, 'liyakat@gmail.com' ]



class additional_info extends user_info
{
     constructor(name )
     {
          super(name)
        let password=`onetime password ${String(Math.round(Math.random()*10 + Math.random()*10) + Math.random()*10 + Math.random()*10 )}`

          
 


let new_personalized_random_key =
`master key :${arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)]}`
//random master key generation




console.log(password);
console.log(new_personalized_random_key);
console.log(name);

return [password,new_personalized_random_key]
// console.log( super(this.profession));

     }
}


// let exm_class= new additional_info("liyakat")
// console.log(exm_class);

// console.log( additional_info instanceof user_info);

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                     ❗ Instances ❗

class user {
     constructor(username) {
          this.username=username
     }
   
     introduce_me()
     {
          console.log(`user name is :${this.username}`);
     }
    
}

let user_info2 = new user("smoodhy")
// user_info2.introduce_me() // user name is :smoodhy
// console.log(user_info2 === user); // false
// console.log(user_info2 instanceof user); // true
// console.log("old user info",user_info2);



class newuser extends user {
     constructor(username,email,password)
     {
          super(username)
          this.email=email;
          this.password=password;

     }
     addcourse()
     {
          console.log(`new course added by ${this.username}`);
     }
}



let user_data= new newuser("liyakat","smoodhy@gmail.com",13242)
// user_data.addcourse()  //new course added by liyakat


let user_info3 = new user("smoodhy")
// user_info3.introduce_me() // user na

// console.log(user_info3 === user_info2 ); //false
// console.log(user_info2 instanceof  newuser ); 

// console.log(user_data);
// console.log();
// console.log(user instanceof  newuser);





/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// investigation study and problem 

class customer_info{
    constructor(name,age,gender)
    {
    this.name=name,
    this.age=age,
    this.gender=gender
    }

    user_authentication(email,password)
    {

     let authentic_user= [{
          apple:250,
          strawberry:200,
          banana:20
       },
       
       {
            tomato:80,
            potato:40,
            onion:40
  
       }
       ,
       {
            sweeper:300,
            liquid_cleaner:200,
  
       }
  ];
     return authentic_user;




     // if(email =="admin@gmail.com" && password=="password")
     //      {
          
     //      }
     //      return "not valid a password"
    }

      

}

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//  outputs operations


// let register=new customer_info("smoodh",19,"male")
// console.log(register)

// let user_details = register.user_authentication()
// console.log(user_details)

// for (const data of user_details) {

     // console.log(data);

     // console.log(Object.keys(user_details));
     
//    item_info= user_details.filter((val)=>{
         
//      return val === "apple"
          
//      })

//      console.log("item_info ",item_info);
     
// }


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                          ❗ Private class fields ❗

class secret_info 
{
#password  
#contact_info//all this cannot access by user because it because it become private  
#user_email
#private_info

     constructor(name,age,gender,email,password,private_info)
     {
          this.name=name;
          this.age=age;
          this.gender=gender;

          //type 3

          let arr=["a",1,2,3,4,5,6,7,8,9,"b","c","d","e","f","g","A","B","C","D","E","F","G"]

          this.#password=`master key :${arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)]}`

          this.#contact_info=8976044891;

          //type2 
          // this.#password=function password_generater()
          // {
          //      let arr=["a",1,2,3,4,5,6,7,8,9,"b","c","d","e","f","g","A","B","C","D","E","F","G"]

          //           this.#password = `master key :${arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)]}`

          //          console.log(this.#password);
          //           return this.#password;

          // }


          //type 1
          //  this.private_info={
          //      email:email,
          //      password:function(){

          //           let arr=["a",1,2,3,4,5,6,7,8,9,"b","c","d","e","f","g","A","B","C","D","E","F","G"]

          //           this.password = `master key :${arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)] + arr[Math.floor(Math.random(0,6) *arr.length)]}`
                   
          //           return password

          //      },
          // }

     }
}

let details = new secret_info("liyakat",19,"male","liyakat@gmail.com","password")
// console.log(details.password);//undefined
// console.log( details.private_info.password()); //password
// console.log(details)

// console.log(details.contact_info)  // undefined
// console.log(details instanceof secret_info); // true
// console.log(details.private_info);//undefined type 1 ka output



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                                ❗ GETTER & SETTER ❗


class secret_info_two 
{

     constructor(name,age,gender)
     {
          // check setter operation
          // this.name; // without assigning the value //value no settled ino it 

          this.name=name;
          this.age=age;
          this.gender=gender;
     }
  
     get name() //grab the name from constructor
     {
          // return `first letter of name : ${this._name[0]}`
     }

     set name (value) // set the value of name in constructor or created one 
     {
           console.log("ORIGINAL NAME :",value);
     this._name="smookey".toUpperCase()  //this will change the value in constructor value
          //  console.log("UPDATED NAME :", this._name);

     }

}


let val= new secret_info_two("liyakat",18,"male");
// console.log(val.name);  //ORIGINAL NAME : liyakat
//UPDATED NAME : SMOOKEY

// console.log(val);// secret_info_two { _name: 'SMOOKEY', age: 18, gender: 'male' }




/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
//                            ❗     HAS_OWN_PROPERTY     ❗

  let property = Object.getOwnPropertyDescriptors(val)
  console.log(property);  
  

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







/*++++++++++++++++++++++++++++++ DATE & TIME +++++++++++++++++++++++++++++++++++++++++++ */
// Before know about date please gather info about

// Time zone there are 15 diff types of time zones 

// GMT (greenwich mean time ) time zone  

// UTC (coordinate universal time ) // universal time of earth denoted by (Z) in world time zone // falls in england time zone
 
// ISO (international organization for standardization)
 
// How computers keep track of time // time start from 1 jan 1970 12;00pm  

// Unix time or unix epoch // time start from 1 jan 1970 12;00pm  


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Methods and types to declare date and time 

const date= Date();
// console.log(date);//Fri Jun 14 2024 17:20:19 GMT-0400 (Eastern Daylight Time)
// console.log(typeof date);//string


//                       But Date is a Object based method



const date1= new Date()

// console.log(date1);// date is in UTC time zone 2024-06-14T21:44:08.879Z
// console.log(typeof date1);// object
// console.log(date1.toLocaleString("en-GB"));//14/06/2024, 17:49:41


// console.log(date1.getTime());// time stamp from 1970 to till todays time 1718402197085
// console.log(date1.toLocaleString(1718402197085));//6/14/2024, 5:59:39 PM



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//                                    INVESTIGATION STUDY
// !! NOTE THAT !!
// FORMAT 
//DD/MM/YYYY  Not accepted
//MM/DD/yyyy  accepted
//YYYY/MM/DD  accepted

//type 1

const myown_date= new Date("12-02-24")
// console.log(myown_date.toString());//Mon Dec 02 2024 00:00:00 GMT-0500 (Eastern Standard Time)
// console.log(myown_date.toLocaleString());//12/2/2024, 12:00:00 AM



// type 2

const myown_date2=new Date("12/02/24")
// console.log(myown_date2.toString());//Mon Dec 02 2024 00:00:00 GMT-0500 (Eastern Standard Time)
// console.log(myown_date2.toLocaleString());//12/2/2024, 12:00:00 AM




// type 3

let myown_date3 =new Date("Mon Dec 02 2024")
// console.log(myown_date3);// 2024-12-02T05:00:00.000Z

// console.log(myown_date2.toString());// Mon Dec 02 2024 00:00:00 GMT-0500 (Eastern Standard Time) gave output into indian time_stamp 

// console.log(myown_date3.toLocaleString("en-GB")); //02/12/2024, 19:01:00 great britain
// console.log(myown_date3.toLocaleString("en-IN")); //2/12/2024, 7:01:00 pm indian format

myown_date3=new Date("Mon Dec 02 2024 19:01:00")
// console.log(myown_date3);// 2024-12-03T00:01:00.000Z

// console.log(myown_date3.toString());// Mon Dec 02 2024 19:01:00 GMT-0500 (Eastern Standard Time)Mon Dec 02 2024 19:01:00 GMT-0500 (Eastern Standard Time) 

// console.log(myown_date3.toLocaleString("en-GB")); //02/12/2024, 19:01:00 great britain
// console.log(myown_date3.toLocaleString("en-IN")); //2/12/2024, 7:01:00 pm indian format





//type 4

const myown_date4=Date.parse("Mon Dec 02 2024")
// console.log(myown_date4);// convert any into timestamps 1733115600000
// console.dir(Date(1733115600000));//'Fri Jun 14 2024 19:22:05 GMT-0400 (Eastern Daylight Time)' unwanted output

// console.log(myown_date.toString(1733115600000));//Mon Dec 02 2024 00:00:00 GMT-0500 (Eastern Standard Time) 
// to convert any timestamp into date and time format first create or convert into date object not date string type



const my_date5= new Date()

// console.log(my_date5.getDate());// 14/06/2024, 18:13:41  and (op is 14)
// console.log(my_date5.getDay());//14/06/2024, 18:18:00  and (op is 5)
// console.log(my_date5.getFullYear()); // (op is 2024)
// console.log(my_date5.getMilliseconds());// (op is 2024)
// console.log(my_date5.getMinutes());// (op is 34)
// console.log(my_date5.getMonth());// (op is 5)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




const my_datee= Date.now()   // It is a static date method no required opf new keyword 
// console.dir(my_datee);                            // 1718403773205
// console.log(1718403773205/1000);                 // one second = 1000 millisecond
// console.log(1718403773205/1000/60);             //one min = 60 seconds
// console.log(1718403773205/1000/60/60);         //one hour =60 min
// console.log(1718403773205/1000/60/60/24);     // one day = 24 hours
// console.log(1718403773205/1000/60/60/24/365);//one year =365 days or 364 days



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//All methods with there type also

let new_date= new Date()

// let isodate ="2024-06-15T00:49:22.730Z"



// console.log(new_date);//2024-06-15T00:52:01.628Z

// NO ARGUMENT METHODS

// console.log(new_date.getDate());// 14
// console.log(new_date.getDay()); //5 days of week today is friday
// console.log(new_date.getFullYear()); // 2024
// console.log(new_date.getHours());//20 means 8 a clock
// console.log(new_date.getMilliseconds());// 911 in  1second =1000 millisecond
// console.log(new_date.getMinutes()); //2 min
// console.log(new_date.getMonth());//5 means month start from 0 = jan , 5=june
// console.log(new_date.getTime());//1718414646158 it gives timestamps
// console.log(new_date.getTimezoneOffset());//240



// Below UTC methods shows about UTC Time zone which falls in england  

// console.log(new_date.getUTCDate());// 15
// console.log(new_date.getUTCDay()); //6 days of week today is friday
// console.log(new_date.getUTCFullYear()); // 2024
// console.log(new_date.getUTCHours());// 1 means 1 a clock
// console.log(new_date.getUTCMilliseconds());// 423 in  1second =1000 millisecond
// console.log(new_date.getUTCMinutes()); //37 min
// console.log(new_date.getUTCMonth());//5 means month start from 0 = jan , 5=june
// console.log(new_date.getTimezoneOffset() /*/60*/);// 240



//DD/MM/YYYY  Not accepted
//MM/DD/yyyy  accepted
//YYYY/MM/DD  accepted

//set all methods 


// console.log(new_date.setDate(2024/5/7));// it create timestamps from input date 1722995153290

// console.log(new_date.setFullYear(2024,5,15));//it create timestamps from input date 1718468408940

// console.log(new_date.setFullYear(99999));//it create timestamps from input 3093510760133926

// new_date=new Date(3093510760133926)
//  console.log(new_date.getFullYear());//99999  as we this way we get our required data 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                              //All to methods without argument 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

new_date= new Date()

// console.log(new_date.toDateString());//Sat Jun 15 2024

// console.log(new_date.toISOString());// 2024-06-15T16:40:49.522Z  this is iso format or utc also

// console.log(new_date.toJSON());// this jason format or iso ,UTC ,API also we called 2024-06-15T16:41:49.452Z

// console.log(typeof new_date.toJSON());// this jason format or iso ,UTC ,API also we called 2024-06-15T16:41:49.452Z //string


// console.log(new_date.toString());//Sat Jun 15 2024 12:43:01 GMT-0400 (Eastern Daylight Time) and gave into GMT format means our region or time zone format 

// console.log(typeof new_date.toString());// string

// console.log(new_date.toTimeString());// 12:44:38 GMT-0400 (Eastern Daylight Time)and gave into GMT format means our region or time zone format 

// console.log(new_date.toUTCString());//Sat, 15 Jun 2024 16:46:42 GMT in utc format there is after no added add of time after GMT 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                // To all methods with argument this methods are regular use
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//date methods

//console.log(new_date.toLocaleDateString("en-IN"));// Default  16/06/24

// console.log(new_date.toLocaleDateString({},{dateStyle:"full"}));// op is Sunday 16 June, 2024 

// console.log(new_date.toLocaleDateString("en-IN",{dateStyle:"long"}));// op is 16 June 2024

// console.log(new_date.toLocaleDateString("en-IN",{dateStyle:"medium"}));// op is 16 Jun 2024

// console.log(new_date.toLocaleDateString("en-IN",{dateStyle:"short"})); // 16/06/24


// time method


// console.log(new_date.toLocaleTimeString({hourCycle:"h12"},{timeStyle:"full"})); // 12:28:28 pm Eastern Daylight Time

// console.log(new_date.toLocaleTimeString("en-IN",{timeStyle:"full"})); // 12:28:28 pm Eastern Daylight Time

// console.log(new_date.toLocaleTimeString("en-IN",{timeStyle:"long"})); //12:29:24 pm GMT-4

// console.log(new_date.toLocaleTimeString("en-IN",{timeStyle:"medium"})); //12:29:58 pm

// console.log(new_date.toLocaleTimeString("en-IN",{timeStyle:"short"})); // 12:30 pm

// console.log(new_date.toLocaleString()); //6/16/2024, 12:42:00 PM

// console.log(new_date.toLocaleString({},{})); // don't  know

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//task find who is greater and get only full name from date such as weekday name, month name

// 1st gt full month name of weekdays ,month 



//month name
let m = new Date("6/20/2024")
let month = fullmonth(m)
// console.log(month);

function fullmonth(m)
{
return m.toLocaleDateString("en-IN",{month:"long"})//June
}

//weekdays
function fullweekday(w)
{
return w.toLocaleDateString("en-IN",{weekday:"long"})
}

let w = new Date("6/20/2024")
let weekday = fullweekday(w)
// console.log(weekday); // Thursday













//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let mydate=new Date()
// console.log(mydate);// o/p is 2024-06-05T22:28:25.457Z
// console.log(mydate.toLocaleDateString());// o/p is 6/5/2024 this
// console.log(mydate.toLocaleTimeString());// o/p is 6:30:41 PM

// console.log(mydate.toString());//o/p is Wed Jun 05 2024 18:32:35 GMT-0400 (Eastern Daylight Time)
// console.log();

// let d1= new Date(2024,0,1)
// console.log(d1.toDateString());
//!! op is !! Thu Feb 01 2024 || here (0 ='jan' represent months) and (1 represent date)

// let d2= new Date(2024/2/1)
// let d3= new Date(2024-2-1)
// let d4= new Date("2024-02-01")
// // console.log(d3.toDateString());//op is Wed Dec 31 1969
// // console.log(d3.toTimeString());//op is 19:00:02 GMT-0500 (Eastern Standard Time)
// // console.log(d4.toUTCString());// op is Thu, 01 Feb 2024 00:00:00 GMT

// let created_date= new Date(20-1-2024)
// let timestamp= Date.now()
// console.log(Date(timestamp));



//d2.toLocaleDateString(   
// weekday:"45625"
// )



console.log("hello world")  //print statement 

//Variable declaration var,let,const
var a=5; 
var a=7;  //var can be redeclared not prefer to use

let b=5;
b=7; //let can be reinitialzed 

const c=0; //cannot be reinitalized directly , initialzation during declaration, best to use

// 7 Data Types boolean,number,string,null,undefined,object,symbol
let booleans=true;
let x=8;
let name="archana"
let novalue=null; //intentionally we make a value null
let y; //declared but not initiazed- undefined
const obj={
    name:"Archana",
    age:21,
}  //array comes under object , symbol looks like object-study later

//Strings 
//Note:- Strings are immutable 
let fname="Archana";
let lname="Kumari";

//1. concatination
let names=fname+lname; //simple
names=`${fname} ${lname}` //template literals

//2. Getting String characters
console.log(names[0])

//3. Methods
   // LowerCase and UpperCase
     names.toUpperCase()
   //indexOf
   console.log(names.indexOf('h')) //this is case sensitive
   //slice()
   let rslice=names.slice(0,6); //excluding last one 
   //split()
   let rsplit=names.split("a") //is used to split a string into an array of substrings based on a specified separator. 
   
//Number and String
let i="2"
let j=3;
console.log(i+j)   
console.log(i*j)





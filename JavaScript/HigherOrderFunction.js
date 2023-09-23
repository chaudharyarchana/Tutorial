// A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result 
 // 1. Callback function and 2. Closure function

 //1.Callback function- Passing function as a argument
   let uppercase = function(x){
    return x.toUpperCase()
   }
   let lowercase = function(x){
    return x.toLowerCase()
   }
   let transform= function(str,fun){
    return fun(str)
   }
   //console.log(transform("heLLlo",lowercase))

// 2. Closure - function returning another function 
   let compliment = function(name="Archana"){
    return function(msg="to my party"){
        console.log(`welcome ${name} ${msg}`)
    }
   }
   //compliment("Dev")("to my home");
   // to get the default values we uses this method where compliment() returns the inner funtion in greet and when calling great calls the inner function
   let greet=compliment()
   greet();
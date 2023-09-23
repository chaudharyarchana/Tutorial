// used to store lines of code,reusable component
//Declaration of function
  // 1. Simple way
     function function_name(){
        console.log("I am Simple function")
     }
    // function_name() //call 

  // 2. Function Expression also called anonymous function
    let function_name2 = function(x=5){
        console.log("I am Function expression- Passing function to a variable");
        return x;
    }   
   //let y=  function_name2() //x=5 is default value in case if we do not pass anything it will give undefined 
   //console.log(y)

// 3. Arrow Function - special form of function expression
    let arrowfun_1 = name => console.log(`I am single line arrow function, no need to use () for single parameter and {} for single line of code${name}`);
   // arrowfun_1("Archana")
   
   let arrowfun_2 =(name,age) => {
       console.log(`I am ${name} and my age is ${age}`);
   }
   arrowfun_2("Archana",22)
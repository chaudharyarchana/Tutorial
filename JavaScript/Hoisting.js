//Hoisting means that you can use variables and functions before they are declared in your code without causing errors. 
  
  // 1 variable hoisting is seen in var
  x=5;
  console.log(x);
  var x;

  // 2. function hoisting - shown in simple functions not in arrow and function expression
  fun(5);
  function fun(x){
    console.log(x);
  }

 

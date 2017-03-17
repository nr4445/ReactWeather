var names = ['John','Matt','Ben'];

var person = {
  name: 'Naresh',
  greet: function (){
    name = 'LocalNaresh',//if I declare like  name: 'LocalNaresh' then it is printing 'undefined' inplace of 'this.name'
    names.forEach(function(name){
      console.log(this === global); // Will print true with ES5 function
      console.log(this.name + ' says hai to '+ name)
    });
  }
};

person.greet();


// function add(a, b){
//   return a + b;
// }
//
// // console.log(add(1,3));
// // console.log(add(9, 0));
//
// //add statement
// var addStatement = (a, b) => {
//   return a + b;
// }
//
// console.log(addStatement(4, 7));
//
// //add expression based on ES6
//
// var addExpression = (a,b) => a + b;
// console.log(addExpression(2,3));
// console.log(addExpression(2, -3));

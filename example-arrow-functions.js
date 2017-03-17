var names = ['John','Matt','Ben'];
//
// names.forEach(function (name) {
//   console.log('forEach',name);
// })
//
// names.forEach((name) =>{
//   console.log('arrowFunc',name);
//   console.log('something else');
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Naresh'));

var person = {
  name: 'Naresh',
  greet: function (){
    names.forEach((name) => {
      console.log(this.name + ' says hai to '+ name)
    });
  }
};

// var person = {
//   name: 'Naresh',
//   greet: function (){
//     names.forEach(function(name){
//       console.log(this === global); // Will print true with ES5 function
//       console.log(this+ 'says hai to '+ name)
//     });
//   }
// };

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
// //add expression
//
// var addExpression = (a,b) => a + b;
// console.log(addExpression(2,3));
// console.log(addExpression(2, -3));

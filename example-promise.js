// function getTempCallback(location, callback){
//   callback(undefined,78);
//   callback('city not found');
// }
//
// getTempCallback('philadelphia',function(err, temp){
//   if(err){
//     console.log('error',err);
//   }else{
//     console.log('success', temp);
//   }
//
// });
//
// function getTempPromise(location){
//   return new Promise(function (resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('city not found');
//     }, 1000);
//
//   });
// }
//
// getTempPromise('philadelphia').then(function(){
//   console.log('promise success');
// }, function(err){
//    console.log('promise error',err);
// }) ;


//challenge Area
function addPromise(a, b){
  return new Promise( function (resolve, reject){
    setTimeout(function() {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      }
      else{
        reject('a & b both need to be numbers');
      }
     },1000);

  });
}

addPromise(2, 3).then(function (sum){
  console.log('promise success',sum)
},function(err){
  console.log('Promise error', err);
});

addPromise('naresh',9).then(function(sum){
  console.log('this should not show up');
},function(err){
  console.log('This should appear .ie.',err);
});

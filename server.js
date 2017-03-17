var express =require('express');

//create our app
var app = express();
const PORT = process.env.PORT || 3000;

//it's the commo patteren for express middleware, that it do with every request
app.use(function (req, res){

});

app.use(express.static('public'));
app.listen(PORT, function(){
  console.log('Express server is up on port '+ PORT);
});

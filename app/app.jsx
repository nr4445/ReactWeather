var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load foundation library
require('style!css!foundation-sites/dist/foundation.min.css')//to style these html we need embed the chain with style loader
//firup foundation
$(document).foundation();

//App css
require('!style!css!sass!applicationStyles')

//common DOM method
ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>
    <Route path="about" component={About}/>
    <Route path="examples" component={Examples}/>
    <IndexRoute component={Weather}/>
  </Route>
</Router>,
document.getElementById('app')
);

var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//         <h3>About Components</h3>
//     );
//   }
// });


// var About = function (props) {
//   return (
//     <h3>About Component</h3>
//   )
// };

var About = (props) => {
  return (
    <div>

      <h2 className="text-center page-title">Welcome to About page</h2>
    </div>

  )
};

//var About = (props) => { return <h3>About</h3>}
module.exports = About;

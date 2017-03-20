var React = require('react');

var WeatherForm = React.createClass({
onFormSubmit: function(e){
  e.preventDefault();//Prevents entire page from relaoding

  var location = this.refs.location.value;
  if(location.length > 0){
    this.refs.location.value = '';
    this.props.onSearch(location);
  }
},

  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text"ref="location" placeholder="Enter search location"/>
          <button className="button expanded">Get Weather</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;

var React = require('react');
var {Link} = require('react-router');
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples Component!</h1>
      <p>Try out some example locations here</p>
      <ol>
        <li>
          <Link to='/?location=Lafayette,LA'>Lafayette,LA</Link>
        </li>
        <li>
          <Link to='/?location=Minneapolis,MN'>Minneapolis,MN</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;

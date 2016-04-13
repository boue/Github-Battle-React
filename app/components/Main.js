var React = require('react');

//Main needs to take responsibility for rendering child component
var Main = React.createClass({
  render: function(){
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
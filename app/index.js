var USER_DATA = {
  name: 'Germain Boue',
  username: 'gboue',
  image: 'https://avatars2.githubusercontent.com/u/5375979?v=3&s=460'

}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function(){
    return (
      return <img src="{this.props.imageUrl" style={{height: 100, width: 100}}/>
    )
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});



ReactDOM.render(
  <HelloWorld name="Germain"/>,
  document.getElementById('app')
)
var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  //once ConfirmBattle renders to the view we can go fetch users info github api
  componentDidMount: function(){
    var query = this.props.location.query;
    //fetch info from github then update the state
  },
  render: function(){
    return (
      <ConfirmBattle 
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo} />
    );
  }
});

module.exports = ConfirmBattleContainer;
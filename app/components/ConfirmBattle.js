var React = require('react');

function ConfirmBattle(props){
  return props.isLoading === true
    ? <p> IS LOADING... </p>
    : <p> CONFIRM BATTLE! </p>
}

module.exports = ConfirmBattle;
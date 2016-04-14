var axios = require('axios');

function getUserInfo(username){
  return axios.get('https://api.github.com/users/' + username)
}

var helpers = {
  getPlayersInfo: function(players) {
    //axios.all is given an array of promises and when each are done resolving
    //.then function is going to run
    return axios.all(players.map(function(username){
      return getUserInfo(username)
    })).then(function (info) {
      return info.map(function (user) {
        return user.data;
      })
    }).catch(function(err){
      console.warn('ERROR in getPlayersInfo', err);
    })
  }
};

module.exports = helpers;
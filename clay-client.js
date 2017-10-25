var axios = require('axios');

const clayApi = (process.env.CLAY_DEV) ? 'http://localhost:4500' : 'https://exec.clay.run';

module.exports = {
  run: function (serviceName, data) {
    var clayOptions = {
      method: 'POST',
      url: clayApi + '/' + serviceName,
      data: data,
      timeout: 0,
      responseType: 'json'
    }
    return new Promise(function(resolve, reject){
      axios(clayOptions).then(function(result){
        resolve(result.data);
      })
      .catch(function(err){
        reject(err);
      })
    })
  }
}

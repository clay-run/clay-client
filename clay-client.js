var axios = require('axios');

const clayApi = (process.env.CLAY_DEV) ? 'http://localhost:4500' : 'https://exec.clay.run';

module.exports = {
  run: function (serviceName, data) {
    var clayOptions = {
      method: 'POST',
      url: `${clayApi}/${serviceName}`,
      data: data,
      timeout: 0,
      responseType: 'json'
    }
    return new Promise((resolve, reject) => {
      axios(clayOptions).then((result) => {
        resolve(result.data);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }
}


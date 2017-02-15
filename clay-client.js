var axios = require('axios');

const clayApi = (process.env.CLAY_DEV) ? 'http://localhost:4500' : 'https://clay.run';
const servicePage = `${clayApi}/services`;

module.exports = {
  run: function (serviceName, data) {
    var clayOptions = {
      method: 'POST',
      url: `${servicePage}/${serviceName}`,
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


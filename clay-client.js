var rp = require('request-promise-native');

const clayApi = (process.env.CLAY_DEV) ? 'http://localhost:4500' : 'https://clay.run';
const servicePage = `${clayApi}/services`;

module.exports = {
  run: function (serviceName, data) {
    var clayOptions = {
      method: 'POST',
      uri: `${servicePage}/${serviceName}`,
      body: data,
      timeout: 0,
      json: true
    }
    return rp(clayOptions)
  }
}


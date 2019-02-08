const pingRoute = require('./ping');
const Books = require('./Books');

module.exports = [
  ...pingRoute,
  ...Books,
];

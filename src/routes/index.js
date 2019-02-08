const pingRoute = require('./ping');
const Books = require('./Books');
const BooksDB = require('./enterBooksDB');

module.exports = [
  ...pingRoute,
  ...Books,
  ...BooksDB,
];

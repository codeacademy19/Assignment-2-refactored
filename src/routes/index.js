const pingRoute = require('./ping');
const Books = require('./Books');
const BooksDB = require('./enterBooksDB');
const BookLike = require('./enterLikeColumn');

module.exports = [
  ...pingRoute,
  ...Books,
  ...BooksDB,
  ...BookLike,
];

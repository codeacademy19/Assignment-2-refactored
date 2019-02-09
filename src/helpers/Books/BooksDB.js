const model = require('../../../models');

const BookDetails = async (booksArray) => {
  const promises = [];
  booksArray.forEach(async (book) => {
    await promises.push(model.Book.generate(book.id, book.Author, book.Name, book.rating));
  });
  return Promise.all(promises).then(result => result);
};

const BookLike = async (id, Like) => model.Book.addLike(id, Like).then(result => result);
module.exports = {
  BookDetails, BookLike,
};

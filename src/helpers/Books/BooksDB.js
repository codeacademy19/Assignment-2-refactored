const model = require('../../../models');

module.exports = async (booksArray) => {
  const promises = [];
  booksArray.forEach(async (book) => {
    await promises.push(model.Book.generate(book.id, book.Author, book.Name, book.rating));
  });
  return Promise.all(promises).then(result => result);
};

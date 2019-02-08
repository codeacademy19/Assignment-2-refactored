const Books = require('../helpers/Books');

module.exports = [{
  method: 'GET',
  path: '/books',
  handler: async (request, h) => {
    const result = await Books.getBooksGroupByAuthor();
    return h.response(result).code(200);
  },
}];

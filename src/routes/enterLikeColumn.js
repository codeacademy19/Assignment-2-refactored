const Books = require('../helpers/Books');

module.exports = [{
  method: 'PUT',
  path: '/{id}',
  handler: async (request) => {
    const res = await Books.likeColumnEntry(request.params.id, request.payload.Like);
    // console.log(res);
    return res;
  }
  ,
}];

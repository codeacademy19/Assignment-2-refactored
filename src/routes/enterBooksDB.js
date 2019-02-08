const Books = require('../helpers/Books');

module.exports = [{
  method: 'POST',
  path: '/enterBooksDB',
  // await Books.enterBooksToDB().then((results) => {
  // console.log(results);
  handler: async () => {
    const res = await Books.enterBooksToDB();
    // console.log(res);
    return res;
  }
  // });
  // console.log(result);
  // return h.response(result).code(200);
  ,
}];

const { Axios } = require('../axiosGet');

module.exports = {
  getBooksWithoutRating: () => {
    const allBooksUrl = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
    return Axios(allBooksUrl).then(result => result.data);
  },
};

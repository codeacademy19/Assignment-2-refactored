const axios = require('axios');
const { Axios } = require('../axiosGet');


const getBooksWithoutRating = () => {
  const externalUrl = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
  return Axios(externalUrl).then(result => result.data);
};
const getRatingFromBookId = (id) => {
  const externalUrl = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${id}`;
  return Axios(externalUrl).then(result => result.data);
};
  // console.log('test');
const getBooksWithRating = () => getBooksWithoutRating().then((allBooks) => {
  const allBooksCopy = allBooks.books;
  const allIds = allBooksCopy.map(book => book.id);
  const allPromises = allIds.map(id => getRatingFromBookId(id));
  return axios.all(allPromises)
    .then(allRatings => allRatings
      .map((rating, index) => Object.assign(allBooksCopy[index], rating)));
});
const getBooksGroupByAuthor = () => getBooksWithRating()
  .then(allBooksWithRating => allBooksWithRating.reduce((result, current) => {
    result[current.Author] = result[current.Author] || [];
    result[current.Author].push(current);
    return result;
  }, {}));

module.exports = {
  getBooksWithoutRating,
  getRatingFromBookId,
  getBooksWithRating,
  getBooksGroupByAuthor,
};

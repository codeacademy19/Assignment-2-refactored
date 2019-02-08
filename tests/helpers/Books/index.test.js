/**
 * @jest-environment node
 */

const {
  getBooksWithoutRating, getRatingFromBookId, getBooksWithRating, getBooksGroupByAuthor,
} = require('../../../src/helpers/Books');


describe('getBooksWithoutRating', () => {
  it('should fetch an array of all the books from the given URL', async () => {
    const allBooks = await getBooksWithoutRating();
    expect(Array.isArray(allBooks.books)).toEqual(true);
  });
});
describe('getRatingFromBookId', () => {
  it('should fetch rating of a book with a given id', async () => {
    const rating = await getRatingFromBookId(10);
    expect(typeof (rating.rating)).toEqual('number');
  });
});
describe('getBooksWithRating', () => {
  it('should fetch books with their rating', async () => {
    const booksWithRatings = await getBooksWithRating();
    expect(booksWithRatings[0].rating).not.toEqual(null);
  });
});
describe('getBooksGroupByAuthor', () => {
  it('should return All books grouped by authors', async () => {
    const booksWithRatingsByAuthor = await getBooksGroupByAuthor();
    const authors = Object.keys(booksWithRatingsByAuthor);
    expect((authors.length > 0)).toEqual(true);
    expect(Array.isArray(booksWithRatingsByAuthor[authors[0]])).toEqual(true);
  });
});

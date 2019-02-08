/**
 * @jest-environment node
 */

const { getBooksWithoutRating } = require('../../../src/helpers/Books');


describe('getBooksWithoutRating', () => {
  it('should fetch an array of all the books from the given URL', async () => {
    const allBooks = await getBooksWithoutRating();
    expect(Array.isArray(allBooks.books)).toEqual(true);
  });
});

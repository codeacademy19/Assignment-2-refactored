const model = require('../../models');

describe('book generate', () => {
  beforeEach(async () => {
    await model.Book.truncate();
  });
  it('should make an entry in the database with the  given information', async () => {
    await model.Book.generate(1, 'Author1', 'book1', 'rate1');
    await model.Book.generate(2, 'Author2', 'book2', 'rate2');
    expect(await model.Book.count()).toEqual(2);
  });
  it('should make an entry in the database with the  given information', async () => {
    const bookDetail = await model.Book.generate(1, 'Author1', 'book1', 'rate1');
    expect(bookDetail).toEqual('created successfully');
  });
  it('shouldgive an error on Primary key conflict', async () => {
    await model.Book.generate(1, 'Author1', 'book1', 'rate1');
    expect(await model.Book.generate(1, 'Author1', 'book1', 'rate1')).toEqual('Already exists');
  });
});

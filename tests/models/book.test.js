const model = require('../../models');

describe('book generate', () => {
  beforeEach(async () => {
    await model.Book.truncate();
  });
  it('should make an entry in the database with the  given information', async () => {
    await model.Book.generate(1, 'Author1', 'book1', 3.72);
    await model.Book.generate(2, 'Author2', 'book2', 4.1);
    expect(await model.Book.count()).toEqual(2);
  });
  it('should make an entry in the database with the  given information', async () => {
    const bookDetail = await model.Book.generate(1, 'Author1', 'book1', 3.72);
    expect(bookDetail).toEqual('created successfully');
  });
  it('should give an error on Primary key conflict', async () => {
    await model.Book.generate(1, 'Author1', 'book1', 3.72);
    expect(await model.Book.generate(1, 'Author1', 'book1', 3.72)).toEqual('Already exists');
  });
  it('should make an entry to "Like" column for the given ID', async () => {
    await model.Book.generate(1, 'Author1', 'book1', 3.72);
    await model.Book.generate(2, 'Author2', 'book2', 3.74);
    await (model.Book.addLike(1, true));
    expect(await (model.Book.addLike(1, true))).toEqual('Updated Successfully');
    expect(await (model.Book.addLike(1, false))).toEqual('Updated Successfully');
  });
});

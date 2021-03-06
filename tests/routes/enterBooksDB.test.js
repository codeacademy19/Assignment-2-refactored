/**
 * @jest-environment node
 */
const Server = require('../../server');
const model = require('../../models');

describe('Test for books POST route', () => {
  beforeEach(async () => {
    await model.Book.truncate();
  });
  it('should enter all the books with rating to a database', async () => {
    const options = {
      method: 'POST',
      url: '/enterBooksDB',
    };

    const response = await Server.inject(options);
    expect(response.statusCode).toEqual(200);
    expect(response.result[0]).toEqual('created successfully');
    const response2 = await Server.inject(options);
    expect(response2.result[0]).toEqual('Already exists');
  });
});

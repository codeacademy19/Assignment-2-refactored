/**
 * @jest-environment node
 */
const Server = require('../../server');
const model = require('../../models');

describe('Test for books PUT route', () => {
  beforeEach(async () => {
    await model.Book.truncate();
  });
  it('should enter  the books with rating to a database', async () => {
    const options = {
      method: 'PUT',
      url: '/10',
      payload: {
        Like: true,
      },
    };
    const optionsForDbEntry = {
      method: 'POST',
      url: '/enterBooksDB',
    };
    await Server.inject(optionsForDbEntry);
    const response = await Server.inject(options);
    expect(response.statusCode).toEqual(200);
    expect(response.result).toEqual('Updated Successfully');
  });
});

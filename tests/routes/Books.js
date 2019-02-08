const Server = require('../../server');

describe('Test for books GET route', () => {
  it('should return all the books with rating grouped by author', async () => {
    const options = {
      method: 'GET',
      url: '/books',
    };
    const response = await Server.inject(options);
    expect(response.statusCode).toEqual(200);
    expect(Object.keys(response.result).length).toEqual(2);
  });
});

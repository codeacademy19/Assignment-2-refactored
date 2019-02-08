const { Axios } = require('../../../src/helpers/axiosGet');

describe('"Axios" axios get function', () => {
  it('should return a promise', () => {
    const returnedObject = Axios('www.google.com');
    expect(typeof (returnedObject.then)).toEqual('function');
  });
});

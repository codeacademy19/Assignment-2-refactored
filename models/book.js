

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    Author: DataTypes.STRING,
    Name: DataTypes.STRING,
    rating: DataTypes.FLOAT,
  }, {});
  Book.generate = (id, Author, Name, rating) => Book.findOrCreate({
    where: {
      id, Author, Name, rating,
    },
  }).spread((userResult, created) => {
    if (created) {
      return 'created successfully';
    }

    return 'Already exists';
  });
  return Book;
};

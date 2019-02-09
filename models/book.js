

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    Author: DataTypes.STRING,
    Name: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    Like: DataTypes.BOOLEAN,
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
  Book.addLike = (id, Like) => Book.update(
    { Like },
    { where: { id } },
  )
    .then(() => 'Updated Successfully')
    .catch(err => err);
  return Book;
};

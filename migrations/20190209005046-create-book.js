

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Books',
    'Like', {
      type: Sequelize.BOOLEAN,
      default: null,
    },

  ),

  down: queryInterface => queryInterface.removeColumn(
    'Books',
    'Like',
  ),
};

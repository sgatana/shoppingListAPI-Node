module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('user', 'password', {
      type: Sequelize.STRING,
      field: 'password',
    })
  },

  down: queryInterface => queryInterface.removeColumn('user', 'password'),
}

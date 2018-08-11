module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('shoppilists', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      ownerId: {
        type: Sequelize.STRING,
        field: 'owner_id',
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
      },
    }),
  down: queryInterface => queryInterface.dropTable('shoppilists'),
}

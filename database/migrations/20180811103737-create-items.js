module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('items', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      shoppinglistId: {
        type: Sequelize.STRING,
        field: 'shopping_id',
      },
      quantity: {
        type: Sequelize.STRING,
        allowNull: true,
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
  down: queryInterface => queryInterface.dropTable('items'),
}

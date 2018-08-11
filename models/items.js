module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define(
    'items',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      shoppinglistId: {
        type: DataTypes.STRING,
        field: 'shopping_id',
      },
      quantity: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {
      tableName: 'items',
    },
  )
  return items
}

module.exports = (sequelize, DataTypes) => {
  const shoppingList = sequelize.define(
    'shoppingList',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      ownerId: {
        type: DataTypes.STRING,
        field: 'owner_id',
        allowNull: false,
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
      tableName: 'shoppinglists',
    },
  )
  shoppingList.associate = models => {
    shoppingList.hasMany(models.items, {
      foregnKey: 'shoppinglistId',
      as: 'items',
    })
  }
  return shoppingList
}

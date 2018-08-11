module.exports = (sequelize, DataTypes) => {
  const shoppingList = sequelize.define(
    'shoppinglist',
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
      tableName: 'shoppinglist',
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

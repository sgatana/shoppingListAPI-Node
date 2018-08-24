module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: 'email cannot be empty',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        field: 'password',
      },
      firstName: {
        type: DataTypes.STRING,
        field: 'first_name',
      },
      lastName: {
        type: DataTypes.STRING,
        field: 'last_name',
      },
      name: {
        type: DataTypes.STRING,
        field: 'name',
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
      tableName: 'user',
    },
  )
  user.associate = models => {
    user.hasMany(models.shoppingList, {
      foreignKey: 'ownerId',
      as: 'shoppinglists',
    })
  }
  return user
}

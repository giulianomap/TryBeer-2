const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  user.associate = (models) => {
    user.hasMany(models.Sale, { as: 'Sales', foreignKey: 'userId' });
  };

  return user;
};

module.exports = User;
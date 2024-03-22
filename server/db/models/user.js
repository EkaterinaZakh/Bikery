const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.Product, { through: 'Cart', foreignKey: 'userId' });
      this.belongsToMany(models.Product, { through: 'Favourite', foreignKey: 'userId' });
      this.hasMany(models.Race, { foreignKey: 'userId' });
      this.hasMany(models.RaceRating, { foreignKey: 'userId' });
      this.hasMany(models.Fest, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

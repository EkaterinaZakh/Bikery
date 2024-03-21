const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }
  Favourite.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favourite',
  });
  return Favourite;
};

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }
  Cart.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};

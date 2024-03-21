const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
      this.belongsToMany(models.User, { through: 'Favourite', foreignKey: 'productId' });
      this.belongsToMany(models.User, { through: 'Cart', foreignKey: 'productId' });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    price: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    static associate(models) {
      this.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }
  ProductImage.init({
    image: DataTypes.STRING,
    productId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ProductImage',
  });
  return ProductImage;
};

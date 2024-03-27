const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Fest extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.hasMany(models.CommentFest, { foreignKey: 'festId' });
    }
  }
  Fest.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    image: DataTypes.STRING,
    date: DataTypes.DATE,
    place: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Fest',
  });
  return Fest;
};

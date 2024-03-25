'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentFest extends Model {
    static associate({User, Fest}) {
      this.belongsTo (User, { foreignKey: 'userId' })
      this.belongsTo (Fest, { foreignKey: 'festId' })
    }
  }
  CommentFest.init({
    userId: DataTypes.INTEGER,
    festId: DataTypes.INTEGER,
    text: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CommentFest',
  });
  return CommentFest;
};
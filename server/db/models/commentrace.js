// 'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CommentRace extends Model {
    static associate({ User, Race }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Race, { foreignKey: 'raceId' });
    }
  }
  CommentRace.init(
    {
      userId: DataTypes.INTEGER,
      raceId: DataTypes.INTEGER,
      text: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'CommentRace',
    },
  );
  return CommentRace;
};

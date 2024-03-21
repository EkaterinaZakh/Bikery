const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RaceRating extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Race, { foreignKey: 'raceId' });
    }
  }
  RaceRating.init({
    userId: DataTypes.INTEGER,
    raceId: DataTypes.INTEGER,
    starsCount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'RaceRating',
  });
  return RaceRating;
};

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Race extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.hasMany(models.RaceRating, { foreignKey: 'raceId' });
      this.hasMany(models.CommentRace, { foreignKey: 'raceId' });
    }
  }
  Race.init(
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      desc: DataTypes.TEXT,
      image: DataTypes.STRING,
      date: DataTypes.DATE,
      length: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Race',
    },
  );
  return Race;
};

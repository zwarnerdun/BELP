module.exports = function(sequelize, DataTypes) {
  var Bar = sequelize.define("Bar", {
    name: DataTypes.STRING,
    timeStart: DataTypes.TIME,
    timeEnd: DataTypes.TIME,
    address: DataTypes.STRING,
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: {
        min: -90,
        max: 90
      }
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: {
        min: -180,
        max: 180
      }
    },
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  });
  return Bar;
};

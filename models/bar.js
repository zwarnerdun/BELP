module.exports = function(sequelize, DataTypes) {
  // create values for city so we can display in menu
  //   create values for user count, rating and rating average
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

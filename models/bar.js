module.exports = function (sequelize, DataTypes) {
    var Bar = sequelize.define("bar", {
        name: DataTypes.STRING,
        timeStart: DataTypes.TIME,
        timeEnd: DataTypes.TIME,
        address: Sequelize.STRING,
        latitude: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null,
            validate: {
                min: -90,
                max: 90
            }
        },
        longitude: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: null,
            validate: {
                min: -180,
                max: 180
            }
        },
        price: DataTypes.INTEGER,
        rating: DataTypes.INTEGER,
    });
    return Bar;
};
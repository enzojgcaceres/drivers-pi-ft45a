const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Team",
    {
      id:{
        type: DataTypes.UUID,
        primaryKey:true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      teams: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false} // crear tabla en singular
  );
};
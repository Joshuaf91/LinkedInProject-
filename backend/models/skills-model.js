"use strict";

module.exports = function(sequelize, DataTypes) {
  var Skills = sequelize.define("skill", {
    name: DataTypes.STRING,
    images:DataTypes.ARRAY
  }, 
  {
    classMethods: {
      associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        Skills.belongsTo(models.profile, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
    
  });

  return Skills;
};
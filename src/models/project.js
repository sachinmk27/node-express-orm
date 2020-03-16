const Sequelize = require("sequelize");

const { sequelize } = require("../config/db");
const { Item } = require("./item");

class Project extends Sequelize.Model {}

Project.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    underscored: true,
    sequelize,
    modelName: "project"
  }
);

Project.hasMany(Item);
Item.belongsTo(Project);

module.exports.Project = Project;

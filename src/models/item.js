const Sequelize = require("sequelize");

const { sequelize } = require("../config/db");

class Item extends Sequelize.Model {}

Item.init(
  {
    content: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    underscored: true,
    sequelize,
    modelName: "item"
  }
);

module.exports.Item = Item;

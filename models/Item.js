// type/slot? id, name
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// type/slot? id, name

class Item extends Model { };
Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    armor:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    link_to_photo:{
      type: DataTypes.STRING,
      allowNull: false,
    },
 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Item',
  }
);

module.exports = Item;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// type/slot? id, name

class Item extends Model { };
Item.init(
{
    id: {

    },

},
{
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'Item'
  }
);

module.exports = Item;
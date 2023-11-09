const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// type/slot? id, name

class Item extends Model { };
Item.init(
{

},
{

}
);

module.exports = Item;
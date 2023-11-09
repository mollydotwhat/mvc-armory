// id Pk, img link, stats
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// type/slot? id, name

class Torso extends Model { };
Torso.init(
{
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true       
  },
  img: {
    
  },
  armor: {
    type: DataTypes.INTEGER
  },
  attack: {
    type: DataTypes.INTEGER
  },
  defense: {
    type: DataTypes.INTEGER
  },
  speed: {
    type: DataTypes.INTEGER
  }

},
{

}
);

module.exports = Torso;
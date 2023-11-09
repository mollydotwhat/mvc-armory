// id, stats, img link.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// type/slot? id, name

class Helm extends Model { };
Helm.init(
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

module.exports = Helm;
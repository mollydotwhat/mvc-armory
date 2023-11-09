// type? name? id, stats, img link. 

// inherit stats w/foreign keys
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// type/slot? id, name

class Weapon extends Model { };
Weapon.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true       
          },
          img: {
            
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
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'Weapon'
  }
);

module.exports = Weapon;
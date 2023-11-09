const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//id, columns for items by type. name? stats
// foreign keys for items
// foreign key for user 
class Character extends Model {}

Character.init(
  {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true

  },
    user_id: {
        allowNull: false,
        references: {
            model: "user",
            key: "id",
            unique: false
          },
    },
    char_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    health: {

      },
    helm_id: {

    },
    torso_id: {

    },
    hand1_id: {

    },
    hand2_id: {

    },
    legs_id: {

    },
    feet_id: {

    }
  },

  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'Character'
  }
);

module.exports = Character;
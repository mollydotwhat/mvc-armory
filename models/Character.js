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
        references: {
            model: "helm",
            key: "id",
            unique: false
          },
    },
    torso_id: {
        references: {
            model: "torso",
            key: "id",
            unique: false
          },
    },
    hand1_id: {
        references: {
            model: "weapon",
            key: "id",
            unique: false
          },
    },
    hand2_id: {
        references: {
            model: "weapon",
            key: "id",
            unique: false
          },
    },
    legs_id: {
        references: {
            model: "legs",
            key: "id",
            unique: false
          },
    },
    feet_id: {
        references: {
            model: "feet",
            key: "id",
            unique: false
          },
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
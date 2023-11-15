const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// foreign keys for items
//Helmet, Torso, Boots, Weapons, Shields, Gems
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
        type: DataTypes.INTEGER,
        references: {
            model: "User",
            key: "id",
            unique: false
          },
      },
    char_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    helmet_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Item",
        key: "id",
        unique: false
        },
      },
    torso_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Item",
        key: "id",
        unique: false
        },
      },
    weapon_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Item",
        key: "id",
        unique: false
        },
      },
    shield_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Item",
        key: "id",
        unique: false
        },
      },
    boots_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Item",
        key: "id",
        unique: false
        },
      },
    gem_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Item",
        key: "id",
        unique: false
        },
      }
  },

  {
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    modelName: 'Character'
  }
);

module.exports = Character;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CharacterItem extends Model {}

CharacterItem.init(
    {
    character_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Character",
            key: "id",
            unique: false
          },
      },
      item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Item",
            key: "id",
            unique: false
          },
      },
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        modelName: 'CharacterItem'
      }
)

module.exports = CharacterItem;
//character id
//item id

//foreign ids and that's all
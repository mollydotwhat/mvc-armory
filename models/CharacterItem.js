const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CharacterItem extends Model {}

CharacterItem.init(
    {
    user_id: {
        allowNull: false,
        references: {
            model: "User",
            key: "id",
            unique: false
          },
      },
      item_id: {
        allowNull: false,
        references: {
            model: "Item",
            key: "id",
            unique: false
          },
      },
    }
)
//character id
//item id

//foreign ids and that's all
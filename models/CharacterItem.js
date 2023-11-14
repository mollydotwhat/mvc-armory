const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CharacterItem extends Model {}

CharacterItem.init(
    {
    User_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: "User",
            key: "id",
            unique: false
          },
      },
      Item_id: {
        type: DataTypes.STRING,
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
        modelName: 'Character'
      }
)
//character id
//item id

//foreign ids and that's all
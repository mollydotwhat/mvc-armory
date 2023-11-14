const User = require('./User');

const Character = require('./Character');
const Item = require('./Item');
const CharacterItem = require('./CharacterItem')
// const sequelize = require('sequelize');

// const CharacterItem = sequelize.define('CharacterItem', {
//   CharacterId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Character,
//       key: 'id'
//     }},
//   ItemId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Item,
//       key: 'id'
//     }}
// } 
// );

User.hasMany(Character, {
  // it looks to me like the foreign id specified here is what this model gives to the character model but I may be confused.
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})


// 
Character.belongsTo(User, {
  // in the docs it looks like this one doesn't need a foreign id specified? But maybe it doesn't mean it can't have one. leaving for now.
  foreignKey: 'character_id',
  onDelete: 'UPDATE',
})


Character.belongsToMany(Item, { through: 'CharacterItem', foreignKey: "character_id" }, );
Item.belongsToMany(Character, { through: 'CharacterItem', foreignKey: "character_id"  });


module.exports = { User, Character, Item, CharacterItem}
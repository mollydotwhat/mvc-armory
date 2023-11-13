const User = require('./User');
const Character = require('./Character');
// think I need to fix fields in User model, because of how one-to-many works.

// User hasMany(character), character belongsTo(user)
User.hasMany(Character, {
  foreignKey: 'userId'
});
Character.belongsTo(User);

// items & characters are belongsToMany, using a through table written in sequelize.define statement. Statement can take objects, which will reference the models & keys.



// module.exports = { User, Character, Item }
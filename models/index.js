const User = require('./User');

const Charecter = require('./Character');
const Item = require('./Item');

// gems when made--


User.hasMany(Charecter, {
  foreignKey: 'charecter_id',

  onDelete: 'CASCADE',
})


Charecter.hasOne(User, {
  foreignKey: 'User_id',

  onDelete: 'UPDATE',
})

// Charecter.hasMany(Helms, Torso, Weapons, {
//   foreignKey: 'charecter_id',

//   onDelete: 'UPDATE',
// })

// const User = require('./User');
// ONE-to-ONE OR One-to-Many
// ==============================
// hasOne always goes on the model that does NOT have the foreign key
/*
  ModelA.hasOne(ModelB, {
    foreignKey: 'A_id',
    onDelete: 'CASCADE'
  })
*/
// belongsTp always goes on the model that DOES have the foreign key
/*
  ModelB.belongsTo(ModelA, {
    foreignKey: 'A_ids',
    onDelete: 'CASCADE'
  })

*/


// module.exports = { User }
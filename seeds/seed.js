// TODO: Update this file
const sequelize = require('../config/connection');
const { Item, User } = require('../models');

// const sequelize = require('../config/connection');
// const { User } = require('../models');

 const userSeedData = require('./userData.json');
 const itemSeedData = require('./itemSeeds.json');
 

 const seedDatabase = async () => {
   await sequelize.sync({ force: true });



   await User.bulkCreate(userSeedData, {
     individualHooks: true,
     returning: true,
   });
   await Item.bulkCreate(itemSeedData, {
    individualHooks: true,
    returning: true,
  });

   process.exit(0);
 };

 seedDatabase();

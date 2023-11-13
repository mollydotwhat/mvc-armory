const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
};

// will need relationship to Characters
User.init(
  {
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  },

  {
      hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
        },
      },
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'User'
  }
);

module.exports = User;
module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define('user', {
    username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
});
  return User;
};

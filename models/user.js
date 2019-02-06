module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      realName: DataTypes.STRING,
      Username: { type: DataTypes.STRING, unique: true },
      image: {type: DataTypes.STRING},
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      passCon: DataTypes.STRING
   
    });
   
   
    return User;
   };
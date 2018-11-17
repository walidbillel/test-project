var db = require('../models');

module.exports = function(app) {


    app.get("api/users", function(req, res) {
        db.User.findAll({}).then(function(dbUser){
            res.json(dbUser)
        });
    });



    app.post("/api/users", function(req, res) {
        // Create an User with the data available to us in req.body
        console.log(req.body);
        db.User.create(req.body).then(function(dbUser) {
          res.json(dbUser);
        }).catch(function(err){
          console.log(err)
           res.json(err)
        });
      });
}
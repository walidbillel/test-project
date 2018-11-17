var db = require('../models');

module.exports = function (app) {


    app.get("api/users", function (req, res) {
        db.User.findAll({}).then(function (dbUser) {
            res.json(dbUser)
        });
    });

    app.get("/api/users/:username/:password", function (req, res) {
        // Find one User with the id in req.params.id and return them to the user with res.json

        db.User.findOne({
            where: {
                Username: req.params.username,
                password: req.params.password
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        })
    });

    app.get("/api/users/password/:realname/:email", function (req, res) {
        // Find one User with the id in req.params.id and return them to the user with res.json

        db.User.findOne({
            where: {
                realName: req.params.realname,
                email: req.params.email
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        })
    });



    app.post("/api/users", function (req, res) {
        // Create an User with the data available to us in req.body
        console.log(req.body);
        db.User.create(req.body).then(function (dbUser) {
            res.json(dbUser);
        }).catch(function (err) {
            console.log(err)
            res.json(err)
        });
    });
}
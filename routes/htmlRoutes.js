var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/pages/login.html"));
    });

    app.get("/register", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/pages/register.html"));
    });
}
var express = require("express");
var bodyParser = require("body-parser");
var helmet = require("helmet");
var morgan = require("morgan");
var db = require('./models')
var app = express();
var PORT = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(helmet());
app.use(morgan('dev'));

// Static directory
app.use(express.static("public"));

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});


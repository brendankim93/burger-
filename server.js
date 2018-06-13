var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 3900;

var app = express();

//static conetent for the app from the "public" directory in the application directory
app.use(express.static(__dirname + "/public"));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

app.use(methodOverride("_method"));

//parse application json
app.use(bodyParser.json());

//handlebars set up 
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//route import and allows server access to them
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});
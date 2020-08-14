const express = require("express"); // import express package

var PORT = process.env.PORT || 8080;

var app = express();

// use static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars"); //import handlebars package

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give the server access to them.
var routes = require("controllers/burgers_controllers.js");
app.use(routes);

// start server to begin listening to requests
app.listen(PORT, function() {
  // send server-side message with URL when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

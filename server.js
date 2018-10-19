var express = require("express");
var bodyParser= require("body-parser")

var app = express();
var PORT = process.env.PORT ||8080;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/html'}));

//enables public folders to be used via express
app.use(express.static("public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// app.get("/", function(req, res){
 
// })

//starts the server connection 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  

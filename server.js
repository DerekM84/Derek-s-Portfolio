
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 3000;

require("./routes/htmlRoutes.js")(app);

app.use(express.static("public"));

app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
    );
    app.set("view engine", "handlebars");
    

  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

module.exports = app;

module.exports = function(app) {

  app.get("/", function(req, res) {
      res.render("index")
  });

  app.get("/QandA", function(req, res) {
    res.render("QandA")
  });

  app.get("/contact", function(req, res) {
    res.render("contact")
  });

  app.get("*", function(req, res) {
    res.render("index")
});
};

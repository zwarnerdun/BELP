var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Bar.findAll({}).then(function(dbBar) {
      res.render("index", {
        msg: "Welcome!",
        Bar: dbBar
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/view", function(req, res) {
    db.Bar.findAll({}).then(function(dbBar) {
      res.render("view", {
        Bar: dbBar
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

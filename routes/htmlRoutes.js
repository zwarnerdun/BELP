var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Bar.findAll({}).then(function(bars) {
      res.render("index", {
        msg: "Welcome!",
        bars: bars
      });
    });
  }); 

  // Load example page and pass in an example by id
  app.get("/view", function(req, res) {
    db.Bar.findAll({}).then(function(bars) {
      res.render("view", {
        bars: bars
      });
    });
  });

  app.get("/add", function(req, res) {
    res.render("add");
    });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

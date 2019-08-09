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
  app.get("/bars/:id", function(req, res) {
    db.Bar.findOne({ 
      where: { 
        id: req.params.id 
      } 
    }).then(function(dbBar) {
      res.render("bars", {
      Bar: dbBar
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

var db = require("../models");

module.exports = function(app) {
  // Get all bars
  app.get("/api/bars", function(req, res) {
    db.Bar.findAll({}).then(function(dbBar) {
      res.json(dbBar);
    });
  });

  // Create a new bar
  app.post("/api/bars", function(req, res) {
    db.Bar.create({
      text: req.body.text
    }).then(function(dbBar) {
      res.json(dbBar)
    }).catch(function(err) {
      res.json(err)
    });
  });

  // Delete a bar by id
  app.delete("/api/bars/:id", function(req, res) {
    db.Bar.destroy({ 
      where: { 
        id: req.params.id 
      } 
    }).then(function(dbBar) {
      res.json(dbBar);
    });
  });
};

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
      name: req.body.name,
      timeStart: req.body.timeStart,
      timeEnd: req.body.timeEnd,
      address: req.body.address,
      price: req.body.price,
      rating: req.body.rating
    }).then(function(dbBar) {
      console.log("new bar added")
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

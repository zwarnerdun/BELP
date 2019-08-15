var db = require("../models");
var moment = require("moment");

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
        bars: bars.map(function(item) {
          return Object.assign({}, item, {
            name: item.name,
            timeStart: moment(item.timeStart, "HH:mm").format("hh:mm a"),
            timeEnd: moment(item.timeEnd, "HH:mm").format("hh:mm a"),
            price: item.price,
            rating: item.rating
          });
        })
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

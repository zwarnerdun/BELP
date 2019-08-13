var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe(" POST /api/bars", function() {
  // create a req and delete the examples in the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should save an example", function(done) {
    var reqBody = {
      name: "some name",
      timeStart: "12:00",
      timeEnd: "01:00",
      address: "some address",
      price: 1,
      rating: 1
    };

    request
      .post("/api/bars")
      .send(reqBody)
      .end(function(err, res) {
        // var responseStatus = res.status;
        // var responseBody = res.body;

        // assertions

        expect(err).to.be.null;

        // expect(responseStatus).to.equal(200);

        // expect(responseBody)
        //   .to.be.an("object")
        //   .that.includes(reqBody);

        done();
      });
  });
});

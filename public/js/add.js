// var moment = require("moment");

$(function() {

  $("#addBar").on("click", function(evt) {
    evt.preventDefault();
    var thisStart = $("#timeStart").val().trim();
    var thisEnd = $("#timeEnd").val().trim();
    var startTime = moment(thisStart, "hh:mm a").format("hh:mm a");
    var endTime = moment(thisEnd, "hh:mm a").format("hh:mm a");
    console.log(startTime);

    console.log(endTime);
    // create  newBar object
    var newBar = {
      name: $("#barName")
        .val()
        .trim(),
      timeStart: $("#timeStart")
        .val()
        .trim(),
      timeEnd: $("#timeEnd")
        .val()
        .trim(),
      address: $("#newCity")
        .val()
        .trim(),
      price: $("#inputPrice")
        .val()
        .trim(),
      rating: $("#inputRating")
        .val()
        .trim()
    };
    console.log(newBar);
    $.ajax("/api/bars", {
      type: "POST",
      data: newBar
    }).then(function() {
      console.log("added" + newBar);
      location.reload();
    });
  });
});

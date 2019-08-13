$(function () {
  $("#addBar").on("click", function(evt) {
    evt.preventDefault();
    // create  newBar object
    let newBar = {
      name: $("#barName").val().trim(),
      timeStart: $("#timeStart").val().trim(),
      timeEnd: $("#timeEnd").val().trim(),
      address: $("#newCity").val().trim(),
      price: $("#inputPrice").val().trim(),
      rating: $("#inputRating").val().trim(),
    };
    console.log(newBar);
    $.ajax("/api/bars", {
      type: "POST",
      data: newBar
    }).then(function(){
      console.log("added" + newBar);
      location.reload();
    });
  });
});
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 39.953, lng: -75.165 }
  });
}
var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var markers = locations.map(function(location, i) {
  return new google.maps.Marker({
    position: location,
    label: labels[i % labels.length]
  });
});

var markerCluster = new MarkerClusterer(map, markers, {
  imagePath: "/images/m"
});

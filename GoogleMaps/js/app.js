// Add a IIFE later for seucring the app.
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'),{
      center: {lat: 33.955654, lng:-118.416721},
      zoom: 10

    });

    var location = {lat: 33.955654, lng:-118.416721};
    var marker = new google.maps.Marker({
      position: location,
      map:map,
      title: 'My location'
    });

    var info = new google.maps.InfoWindow({
      content:"Hello this is where I live"
    });

    // this is an event listerm

    marker.addListener("click", function(){
      info.open(map, marker);
    })
  }

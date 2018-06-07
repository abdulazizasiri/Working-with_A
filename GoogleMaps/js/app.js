// Add a IIFE later for seucring the app.
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'),{
      center: {lat: 33.955654, lng:-118.416721},
      zoom: 10

    });
  }

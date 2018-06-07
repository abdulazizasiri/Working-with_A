# Google Maps API on the Web.

#### This repo shows some Implementation for Google Maps APIs such as.

1- <code> Maps javascripts API </code>

2- <code> Maps Static API </code>

3- <code> Street View API </code>

4- <code> Roads API </code>

5- <code> Geocoding API </code>

6- <code> Elevation API </code>

6- <code> Distance Matrix API </code>

7- <code> Directions API </code>


## 1- Maps javascript API

First of all, you need to get the API key. It something that tells google that a developer wants to use this service. To get the API Key follow the instruction on this link  https://developers.google.com/maps/documentation/javascript/get-api-key

Second, Create in you javascript file an object the create a google maps.


```javascript
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: 33.955654, lng:-118.416721},
    zoom: 10

  });



```

Make sure you have a tag with an id of 'map' so that the map loads to that tag.


Notice that the map is genera;, there is no marker or points to show something. Let's create a marker on the map.


### Adding a marker on the map.


We need to create another marker object on our javascript that access the map we just cretaed, and adds the marker.



```javascript
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
  }


```

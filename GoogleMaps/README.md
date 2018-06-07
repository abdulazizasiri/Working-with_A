# Google Maps API on the Web.

#### This repo shows some Implementation for Google Maps APIs such as.

1- <code> Maps javascripts API </code>

2- <code> Maps Static API </code>

3- <code> Street View API </code>

4- <code> Geocoding API </code>

5- <code> Roads API </code>

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


### Giving a user more information about some markers on maps.

this feature is helpful for users who want to get some information about some points/marks on the maps with clicking or zooming in to find out what this marks is or points at.


To create an info window in google maps, it requires following two steps.


1- you need to create "InfoWindow" object.

```javascript

var info = new google.maps.InfoWindow({
  content:"Hello this is where I live"
});

```

2- Bind this object to an event lister so that it listens when clicking on the marker.

```javascript
// marker refers to the previously created marker.
marker.addListener("click", function(){
  info.open(map, marker);  

```


### Applying styling.

You can create an array of styles , and then add/enable it in the map object option.


```javascript
style: style

```


The array looks like:



```javascript
var styles = [
  {
    featureType: 'water', // this referes to the things on the map.
    stylers: [   
      { color: '#0000d8' }
    ]
  },{
    featureType: 'administrative',
    elementType: 'labels.text.stroke',
    stylers: [
      { color: '#ffffff' },
      { weight: 6 }
    ]
  },{
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      { color: '#e85113' }
    ]
  },{
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      { color: '#efe9e4' },
      { lightness: -40 }
    ]
  },{
    featureType: 'transit.station',
    stylers: [
      { weight: 9 },
      { hue: '#e85113' }
    ]
  },{
    featureType: 'road.highway',
    elementType: 'labels.icon',
    stylers: [
      { visibility: 'off' }
    ]
  },{
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      { lightness: 100 }
    ]
  },{
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      { lightness: -100 }
    ]
  },{
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      { visibility: 'off' },
      { color: '#f0e4d3' }
    ]
  },{
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#efe94' },
      { lightness: -25 }
    ]
  }
];

```

## 2- Maps Static API

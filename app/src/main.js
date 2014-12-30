var apiKey = process.env.GOOGLE_MAPS_API_KEY;

var address = '177 Linkside Circle';
var cuisine = 'Chinese';

var GMaps = require('gmaps');

var map = new GMaps({
  el: '#map1',
  lat: 30.239974,
  lng: -81.394679
});

GMaps.geocode({
  address: address,
  callback: function(results, status) {
    if (status === 'OK') {
      var latlng = results[0].geometry.location;
      var lat = latlng.lat();
      var lng = latlng.lng();
      map.setCenter(lat, lng);
      map.addMarker({
        lat: lat,
        lng: lng
      });
    }
  }
});
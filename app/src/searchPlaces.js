var GMaps = require('gmaps');

var SearchPlaces = {};

SearchPlaces.submitSearch = function(params) {
  this.findAddress(params);
};

SearchPlaces.raiseAddressNotFound = function() {
  console.log("address not found or input is invalid");
};

SearchPlaces.findAddress = function(params) {
  var self = this;
  GMaps.geocode({
    address: params.address,
    callback: function(results, status) {
      // if the address exists,
      if (status === 'OK') {
        // then we can move onto making the map
        var map = self.buildMap(results);
        self.createPlacesLayer(map, params.keyword);
      } else {
        // complain if the address is invalid
        self.raiseAddressNotFound();
      }
    }
  });
}

SearchPlaces.buildMap = function(results) {
  var self = this;
  var latlng = results[0].geometry.location;
  var lat = latlng.lat();
  var lng = latlng.lng();
  return self.createMap(lat, lng);
};

SearchPlaces.createMap = function(lat, lng) {
  var map = new GMaps({
    el: '#map1',
    lat: lat,
    lng: lng,
    zoom: 13
  });
  return map;
};

SearchPlaces.addPlaceMarker = function(map, place) {
  map.addMarker({
    lat: place.geometry.location.lat(),
    lng: place.geometry.location.lng(),
    title: place.name,
    infoWindow : {
      content : '<h2>'+place.name+'</h2><p>'+(place.vicinity ? place.vicinity : place.formatted_address)+'</p><img src="'+place.icon+'"" width="100"/>'
    }
  });
}

SearchPlaces.createPlacesLayer = function(map, keyword) {
  var self = this;
  map.addLayer('places', {
    location: map.getCenter(),
    radius: 5000,
    keyword: keyword,
    nearbySearch: function(results, status) {
      if(status === 'OK') {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          console.log(place);
          self.addPlaceMarker(map, place);
        }
      } else {
        console.log('no good results found');
      }
    }
  });
};

module.exports = SearchPlaces;
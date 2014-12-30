var $ = require('jquery');
var apiKey = process.env.GOOGLE_MAPS_API_KEY;

var address = '177 Linkside Circle';
var cuisine = 'Chinese';

var user = {
  username: "rebecca",
  mealHistory: [
    "Chinese",
    "Indian",
    "Italian",
    "Pizza",
    "Burgers"
  ]
};

var searchParams = {
  address: null,
  cuisine: null
};

var GMaps = require('gmaps');

var map;

var submitSearch = function(params) {
  findAddress(params);
};

var raiseAddressNotFound = function() {
  console.log("address not found or input is invalid");
};

var findAddress = function(params) {
  GMaps.geocode({
    address: params.address,
    callback: function(results, status) {
      // if the address exists,
      if (status === 'OK') {
        // then we can move onto making the map
        var map = buildMap(results);
        createPlacesLayer(map, params.keyword);
      } else {
        // complain if the address is invalid
        raiseAddressNotFound();
      }
    }
  });
}

var buildMap = function(results) {
  var latlng = results[0].geometry.location;
  var lat = latlng.lat();
  var lng = latlng.lng();
  return createMap(lat, lng);
};

var createMap = function(lat, lng) {
  var map = new GMaps({
    el: '#map1',
    lat: lat,
    lng: lng,
    zoom: 13
  });
  return map;
};

var addPlaceMarker = function(map, place) {
  map.addMarker({
    lat: place.geometry.location.lat(),
    lng: place.geometry.location.lng(),
    title: place.name,
    infoWindow : {
      content : '<h2>'+place.name+'</h2><p>'+(place.vicinity ? place.vicinity : place.formatted_address)+'</p><img src="'+place.icon+'"" width="100"/>'
    }
  });
}

var createPlacesLayer = function(map, keyword) {
  map.addLayer('places', {
    location: map.getCenter(),
    radius: 5000,
    keyword: keyword,
    nearbySearch: function(results, status) {
      if(status === 'OK') {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          addPlaceMarker(map, place);
        }
      }
    }
  });
};

$('#cuisine-input').on('change', function(event) {
  event.preventDefault();

  searchParams.cuisine = $('#cuisine-input').val();
  console.log(searchParams);
});

$('#address-input').on('change', function(event) {
  event.preventDefault();

  searchParams.address = $('#address-input').val();
  console.log(searchParams);
});

$('#search-button').on('click', function(event) {
  event.preventDefault();

  submitSearch({
    address: searchParams.address,
    keyword: searchParams.cuisine
  });
});
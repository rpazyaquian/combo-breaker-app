var GMaps = require('gmaps');

var SearchPlaces = {};

SearchPlaces.submitSearch = function(params) {

  var results = {
    places: [],
    map: null,
    errors: null
  };

  GMaps.geocode({
    address: params.address,
    callback: function(results, status) {
      if (status === 'OK') {
        var latlng = results[0].geometry.location;
        var lat = latlng.lat();
        var lng = latlng.lng();

        var map = new GMaps({
          el: '#map',
          lat: lat,
          lng: lng,
          zoom: 13
        });

        // ok i have a problem here
        // i need to create a map before i can
        // get places results,
        // but i need all the search results before i can actually


        // map.addLayer('places', {
        //   location: map.getCenter(),
        //   radius: 5000,
        //   keyword: params.keyword,
        //   nearbySearch: function(results, status) {
        //     if(status === 'OK') {
        //       for (var i = 0; i < results.length; i++) {
        //         var place = results[i];
        //         console.log(place);
        //         self.addPlaceMarker(map, place);
        //       }
        //     } else {
        //       console.log('no good results found');
        //     }
        //   }
        // });

      } else {
        console.log('address not found or invalid');
      }
    }
  });

};

// SearchPlaces.raiseAddressNotFound = function() {
//   console.log("address not found or input is invalid");
// };

// SearchPlaces.findAddress = function(params) {
//   var self = this;
//   GMaps.geocode({
//     address: params.address,
//     callback: function(results, status) {
//       if (status === 'OK') {
//         var map = self.buildMap(results);
//         self.createPlacesLayer(map, params.keyword);
//       } else {
//         self.raiseAddressNotFound();
//       }
//     }
//   });
// }

// SearchPlaces.buildMap = function(results) {
//   var self = this;
//   var latlng = results[0].geometry.location;
//   var lat = latlng.lat();
//   var lng = latlng.lng();
//   return self.createMap(lat, lng);
// };

// SearchPlaces.createMap = function(lat, lng) {
//   var map = new GMaps({
//     el: '#map',
//     lat: lat,
//     lng: lng,
//     zoom: 13
//   });
//   return map;
// };

// SearchPlaces.addPlaceMarker = function(map, place) {
//   map.addMarker({
//     lat: place.geometry.location.lat(),
//     lng: place.geometry.location.lng(),
//     title: place.name
//   });
// }

// SearchPlaces.createPlacesLayer = function(map, keyword) {
//   var self = this;
//   map.addLayer('places', {
//     location: map.getCenter(),
//     radius: 5000,
//     keyword: keyword,
//     nearbySearch: function(results, status) {
//       if(status === 'OK') {
//         for (var i = 0; i < results.length; i++) {
//           var place = results[i];
//           console.log(place);
//           self.addPlaceMarker(map, place);
//         }
//       } else {
//         console.log('no good results found');
//       }
//     }
//   });
// };

module.exports = SearchPlaces;
var $ = require('jquery');
var SearchPlaces = require('./searchPlaces.js');

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

$('#cuisine-input').on('change', function(event) {
  event.preventDefault();
  searchParams.cuisine = $('#cuisine-input').val();
});

$('#address-input').on('change', function(event) {
  event.preventDefault();
  searchParams.address = $('#address-input').val();
});

$('#search-button').on('click', function(event) {
  event.preventDefault();
  SearchPlaces.submitSearch({
    address: searchParams.address,
    keyword: searchParams.cuisine
  });
});
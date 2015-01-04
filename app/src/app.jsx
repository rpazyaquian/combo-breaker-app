/** @jsx React.DOM */

var React = require('react');
var GMaps = require('gmaps');

var SearchPlaces = require('./searchPlaces.js');

var SearchForm = require('./searchForm.jsx');
var SearchResults = require('./searchResults.jsx');

var AppHeader = React.createClass({
  render: function() {
    return <h1>C-C-C-Combo Breaker!</h1>;
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      searchAddress: "51 Melcher Street, Boston, MA",
      searchKeyword: "Chinese",
      mapCoords: null
    };
  },
  handleSearch: function(event) {
    event.preventDefault();

    var keyword = this.state.searchKeyword;

    // get the search results

    var self = this;

    GMaps.geocode({
      address: this.state.searchAddress,
      callback: function(results, status) {

        self.setState({
          searchResults: keyword
        });

        if (status === 'OK') {
          console.log('address was found');

          // if it works,
          // then you can create a map
          // then search for places
          var latlng = results[0].geometry.location;
          var lat = latlng.lat();
          var lng = latlng.lng();

          self.setState({
            mapCoords: {
              lat: lat,
              lng: lng
            }
          });
        }

      }
    });
  },
  handleAddressChange: function(event) {
    this.setState({
      searchAddress: event.target.value
    });
  },
  handleCuisineChange: function(event) {
    this.setState({
      searchKeyword: event.target.value
    });
  },
  render: function() {
    var data = {
      address: this.state.searchAddress,
      cuisine: this.state.searchKeyword
    };
    return (
      <div>
        <AppHeader />
        <SearchForm
          data={data}
          handleSubmit={this.handleSearch}
          onAddressChange={this.handleAddressChange}
          onCuisineChange={this.handleCuisineChange}
        />
        <SearchResults
          results={this.state.searchResults}
          mapCoords={this.state.mapCoords}
        />
      </div>
    );
  }
});

module.exports = App;
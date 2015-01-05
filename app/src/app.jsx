/** @jsx React.DOM */

var React = require('react');
var GMaps = require('gmaps');

var SearchPlaces = require('./searchPlaces.js');

var SearchForm = require('./searchForm.jsx');
var SearchResults = require('./searchResults.jsx');

var user = {
  mealHistory: [
    'Indian',
    'Japanese',
    'Barbeque',
    'Pizza'
  ]
};

var AppHeader = React.createClass({
  render: function() {
    return <h1>C-C-C-Combo Breaker!</h1>;
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      location: null,
      keyword: null
    };
  },
  handleFormSubmit: function(params) {
    this.setState({
      location: params.location,
      keyword: params.keyword
    });
  },

  // all this commented crap down here
  // goes in Search Results

  // handleSubmit: function(event) {
  //   // this only ever changes the top-level
  //   // state of the app
  //   // anything involving the map itself
  //   // or the results is done in the GoogleMap
  //   // component
  //   event.preventDefault();

  //   var keyword = this.state.searchKeyword;

  //   var self = this;

  //   GMaps.geocode({
  //     address: this.state.searchAddress,
  //     callback: function(results, status) {

  //       self.setState({
  //         searchResults: keyword
  //       });

  //       if (status === 'OK') {
  //         var latlng = results[0].geometry.location;
  //         var lat = latlng.lat();
  //         var lng = latlng.lng();

  //         self.setState({
  //           mapCoords: {
  //             lat: lat,
  //             lng: lng
  //           }
  //         });
  //       } else {
  //         self.setState({
  //           errors: ['address not found']
  //         });
  //       }

  //     }
  //   });
  // },
  render: function() {
    var data = {
      location: this.state.location,
      keyword: this.state.keyword
    };
    return (
      <div>
        <AppHeader />
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
        />
        <SearchResults
          data={data}
        />
      </div>
    );
  }
});

module.exports = App;
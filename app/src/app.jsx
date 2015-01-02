/** @jsx React.DOM */

var React = require('react');
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
      searchResults: null
    };
  },
  handleSearch: function(event) {
    event.preventDefault();
    console.log(this.state);
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
        />
      </div>
    );
  }
});

module.exports = App;
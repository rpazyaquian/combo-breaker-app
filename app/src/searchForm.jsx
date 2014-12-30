/** @jsx React.DOM */

var React = require('react');
var SearchPlaces = require('./searchPlaces.js');

var InputFields = require('./inputFields.jsx');

var AddressField = InputFields.AddressField;
var CuisineField = InputFields.CuisineField;

var SearchButton = React.createClass({
  render: function () {
    return (
      <button id="search-button">I'm hungry!</button>
    );
  }
});

var SearchForm = React.createClass({
  getInitialState: function() {
    return {
      address: "51 Melcher Street, Boston, MA",
      cuisine: "Chinese"
    };
  },
  handleAddressChange: function(event) {
    this.setState({
      address: event.target.value
    });
  },
  handleCuisineChange: function(event) {
    this.setState({
      cuisine: event.target.value
    });
  },
  handleSubmit: function(event) {
    event.preventDefault();

    SearchPlaces.submitSearch({
      address: this.state.address,
      keyword: this.state.cuisine
    });
  },
  render: function() {
    return (
      <form id="search-form" onSubmit={this.handleSubmit}>
        <AddressField
          address={this.state.address}
          handleChange={this.handleAddressChange}
        />
        <CuisineField
          cuisine={this.state.cuisine}
          handleChange={this.handleCuisineChange}
        />
        <SearchButton />
      </form>
    );
  }
});

module.exports = SearchForm;
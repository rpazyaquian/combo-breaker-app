/** @jsx React.DOM */

var React = require('react');

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
  render: function() {
    return (
      <form id="search-form"
        onSubmit={this.props.handleSubmit}>
        <AddressField
          address={this.props.data.address}
          handleChange={this.props.onAddressChange}
        />
        <CuisineField
          cuisine={this.props.data.cuisine}
          handleChange={this.props.onCuisineChange}
        />
        <SearchButton />
      </form>
    );
  }
});

module.exports = SearchForm;
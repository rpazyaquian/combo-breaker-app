/** @jsx React.DOM */

var React = require('react');

var InputFields = require('./inputFields.jsx');
var AddressField = InputFields.AddressField;
var CuisineField = InputFields.CuisineField;

var SearchButton = require('./searchButton.jsx');

var SearchForm = React.createClass({
  getInitialState: function() {
    return {
      address: '',
      cuisine: ''
    };
  },
  handleSubmit: function(event) {
    event.preventDefault();

    this.props.handleFormSubmit({
      location: this.state.address,
      keyword: this.state.cuisine
    });
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
  render: function() {
    return (
      <form id="search-form"
        onSubmit={this.handleSubmit}>
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
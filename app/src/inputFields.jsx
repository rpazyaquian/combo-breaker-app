/** @jsx React.DOM */

var React = require('react');

var InputFields = {};

InputFields.AddressField = React.createClass({
  render: function () {
    return (
      <div>
        <label
          htmlFor="address-input">
          What's your current location?
        </label>
        <input
          type='text'
          value={this.props.address}
          id="address-input"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
});

InputFields.CuisineField = React.createClass({
  render: function () {
    return (
      <div>
        <label htmlFor="cuisine-input">cuisine</label>
        <input
          type='text'
          value={this.props.cuisine}
          id="cuisine-input"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
});

module.exports = InputFields;
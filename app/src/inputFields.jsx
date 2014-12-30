/** @jsx React.DOM */

var React = require('react');

var InputFields = {};

InputFields.AddressField = React.createClass({
  getInitialState: function() {
    return {
      value: this.props.address
    };
  },
  handleChange: function(event) {
    return this.props.handleChange(event);
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
        <label htmlFor="address-input">What's your current location?</label>
        <input
          type='text'
          value={value}
          id="address-input"
          onChange={this.handleChange}
        />
      </div>
    );
  }
});

InputFields.CuisineField = React.createClass({
  getInitialState: function() {
    return {
      value: this.props.cuisine
    };
  },
  handleChange: function(event) {
    return this.props.handleChange(event);
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
        <label htmlFor="cuisine-input">cuisine</label>
        <input
          type='text'
          value={value}
          id="cuisine-input"
          onChange={this.handleChange}
        />
      </div>
    );
  }
});

module.exports = InputFields;
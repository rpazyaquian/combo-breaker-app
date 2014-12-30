/** @jsx React.DOM */

var React = require('react');

var SearchForm = require('./searchForm.jsx');

var AppTitle = React.createClass({
  render: function() {
    return <h1>C-C-C-Combo Breaker!</h1>;
  }
});

var MapDisplay = React.createClass({
  render: function() {
    return (
      <div className='map' id='map'></div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <AppTitle />
        <SearchForm />
        <MapDisplay />
      </div>
    );
  }
});

module.exports = App;
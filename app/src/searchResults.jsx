/** @jsx React.DOM */

var React = require('react');

var GoogleMap = require('./googleMap.jsx');

var SearchResults = React.createClass({
  render: function() {
    return (
      <div>
        <div>you searched for {this.props.results}</div>
        {this.props.mapCoords ? <GoogleMap mapCenterLat={this.props.mapCoords.lat} mapCenterLng={this.props.mapCoords.lng} /> : null}
      </div>
    );
  }
});

module.exports = SearchResults;
/** @jsx React.DOM */

var React = require('react');

var SearchResults = React.createClass({
  render: function() {
    return (
      <div>
        <div>you searched for {this.props.results}</div>
        <div className='map' id='map'>map goes here</div>
      </div>
    );
  }
});

module.exports = SearchResults;
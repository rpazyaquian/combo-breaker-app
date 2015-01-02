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
      searchResults: null
    };
  },
  handleSearch: function(query) {

    // var results = SearchPlaces.submitSearch(query);

    // console.log(results);

    this.setState({
      searchResults: query
    });
  },
  render: function() {
    return (
      <div>
        <AppHeader />
        <SearchForm
          handleSearch={this.handleSearch}
        />
        <SearchResults
          results={this.state.searchResults}
        />
      </div>
    );
  }
});

module.exports = App;
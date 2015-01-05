/** @jsx React.DOM */

var React = require('react');
var GMaps = require('gmaps');

var GoogleMap = require('./googleMap.jsx');

// about the map:
// the map is a black box
// that takes latitude and longitude
// and creates a map out of it
// once this map is created in <GoogleMap />,
// we need to be able to access it
// in the PlaceResults component.
// ...or should PlaceResults
// be a sub component of GoogleMap?
// hmmmmmm....that's not a bad idea.

var Error = React.createClass({
  render: function() {
    return (
      <li>
        {this.props.error}
      </li>
    );
  }
});

var SearchResults = React.createClass({
  getInitialState: function() {
    return {
      geocode: null,
      errors: []
    };
  },
  getLocationGeocode: function() {

    var setGeocode = this.setGeocode;
    var addErrors = this.addErrors;

    var errors = [];

    GMaps.geocode({
      address: this.props.data.location,
      callback: function(results, status) {
        if (status === 'OK') {
          var geocode = results[0].geometry.location;
          setGeocode(geocode);
        } else {
          var error = "location not found";
          errors.push(error);
          setGeocode(null);
        }
        addErrors(errors);
      }
    });

  },
  setGeocode: function(geocode) {
    this.setState({
      geocode: geocode
    });
  },
  addErrors: function(errors) {
    this.setState({
      // concatenate this.state.errors with the input array
      // effectively "adding" it to the err array
      errors: this.state.errors.concat([errors])
    });
  },
  // if the component gets new props,
  // i.e. the user input changes,
  // call getLocationGeocode
  // before rendering.
  componentWillReceiveProps: function() {
    this.getLocationGeocode();
  },
  render: function() {
    var location = this.props.data.location;
    var keyword = this.props.data.keyword;

    var geocode = this.state.geocode;

    var errors = this.state.errors.map(function (error) {
      return <Error key={error.id} error={error} />
    });

    return (
      <div>
        <ul>
          {errors}
        </ul>
        <div>
          You searched for: {this.props.data.keyword}
        </div>
        {geocode ? <GoogleMap geocode={geocode} /> : null}
      </div>
    );
  }
});

module.exports = SearchResults;
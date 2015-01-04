var React = require('react');

var GoogleMap = React.createClass({
  getDefaultProps: function() {
    return {
      zoom: 17,
      lat: 42.3493307,
      lng: -71.0500077
    }
  },
  getCenter: function() {
    return new google.maps.LatLng(this.props.lat, this.props.lng);
  },
  componentDidMount: function() {
    var map = this.buildMap();
    this.setState({
      map: map
    });
  },
  buildMap: function() {
    var mapOptions = {
      center: this.getCenter(),
      zoom: this.props.zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var rootNode = this.getDOMNode();
    var map = new google.maps.Map(rootNode, mapOptions);
    return map;
  },
  componentDidUpdate: function() {
    var map = this.state.map;
    map.panTo(this.getCenter());
  },
  render: function() {
    return <div className='map'></div>;
  },
});

module.exports = GoogleMap;
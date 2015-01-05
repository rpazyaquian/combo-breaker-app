var React = require('react');

var GoogleMap = React.createClass({
  componentDidMount: function() {
    var map = this.buildMap();
    this.setState({
      map: map
    });
  },
  buildMap: function() {
    var mapOptions = {
      // this.props.geocode is a LatLng object,
      // so no need to convert it
      center: this.props.geocode,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var rootNode = this.getDOMNode();
    var map = new google.maps.Map(rootNode, mapOptions);
    return map;
  },
  componentDidUpdate: function() {
    var map = this.state.map;
    map.panTo(this.props.geocode);
  },
  render: function() {
    return (
      <div className='map'>
        map goes here
        <div>
          results go here
        </div>
      </div>
      );
  },
});

module.exports = GoogleMap;
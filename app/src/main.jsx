var $ = require('jquery');
var React = require('react');

var App = require('./app.jsx');

var user = {
  username: "rebecca",
  mealHistory: [
    "Chinese",
    "Indian",
    "Italian",
    "Pizza",
    "Burgers"
  ]
};

React.render(<App />, document.getElementById('app'));
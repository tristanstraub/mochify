var through;
var browserify = require('browserify');
var coffeeify = require('coffeeify');
var jadify = require('jadify');

var b = browserify();
b.transform([jadify, coffeeify]);

module.exports = function(file) {
  if (!/\.coffee$/.test(file)) {
    return through();
  }

  return b.bundle(file);
};


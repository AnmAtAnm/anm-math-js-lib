// To use via node.js...
// var Anm = require('Anm-math')(Anm || {});


var __Anm_math_decorator = (function(Anm) {
  Anm.TAU = Anm.TWO_PI = Math.PI * 2;

  Anm.interpolate = function(start, end, ratio) {
    return (start * (1 - ratio)) + (end * ratio);
  }

  Anm.radToDeg = function(radians) {
    return 180 * radians / Math.PI;
  }

  Anm.degToRad = function(degrees) {
    return Math.PI * degrees / 180;
  }

  Anm.normalizeRad = function(radians) {
    if (radians < 0) {
      var addRotations = Math.floor(-radians / Anm.TAU) + 1;
      radians += addRotations * Anm.TAU;
    }
    return radians % Anm.TAU;
  }

  return Anm;
});

if (module && typeof module.exports !== 'undefined') {
  // Loaded as a node module
  module.exports = __Anm_math_decorator;
} else {
  Anm = __Anm_math_decorator(Anm || {});
}


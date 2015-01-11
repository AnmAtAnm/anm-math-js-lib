// To use via node.js...
// var Anm = require('Anm-math')(Anm || {});


var __Anm_math_constructor = (function(Anm) {
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
});

if (module && typeof modules.exports !== 'undefined') {
  // Loaded as a node module
  module.exports = __Anm_math_constructor;
} else {
  Anm = __Anm_math_constructor(Anm || {});
}


(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Map"] = factory(require("react"));
	else
		root["Map"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coloring = function () {
  function Coloring(IDList, IDKey, weightKey, scale, data, colorKey, colorRange, colorCatgories) {
    _classCallCheck(this, Coloring);

    this.IDList = IDList;
    this.IDKey = IDKey;
    this.weightKey = weightKey;
    this.scale = scale;
    this.colorKey = colorKey;
    this.colorRange = colorRange;
    this.colorCatgories = colorCatgories;
    this.data = data.sort(function compare(a, b) {
      if (a.area < b.area) return -1;
      if (a.area > b.area) return 1;
      return 0;
    });
  }

  /* Chose the right function based on props */


  _createClass(Coloring, [{
    key: "generate",
    value: function generate() {
      if (this.colorKey) {}
      if (this.colorRange) {
        var range = this.getRange();
        // let count = this.getCount()
        var count = 100;
        this.colorGradient = this.generateColor(this.colorRange[0], this.colorRange[1], count, range);
        return this.matchColorsToValues(this.colorGradient);
      }
      if (this.colorCatgories) {}
    }
  }, {
    key: "getRange",
    value: function getRange() {
      var max = this.data[0].weight;
      var min = this.data[0].weight;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var dataPoint = _step.value;

          if (dataPoint.weight > max) {
            max = dataPoint.weight;
          }
          if (dataPoint.weight < min) {
            min = dataPoint.weight;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return { min: min, max: max };
    }
  }, {
    key: "hex",
    value: function hex(c) {
      var s = "0123456789abcdef";
      var i = parseInt(c);
      if (i == 0 || isNaN(c)) return "00";
      i = Math.round(Math.min(Math.max(0, i), 255));
      return s.charAt((i - i % 16) / 16) + s.charAt(i % 16);
    }

    /* Convert an RGB triplet to a hex string */

  }, {
    key: "convertToHex",
    value: function convertToHex(rgb) {
      return this.hex(rgb[0]) + this.hex(rgb[1]) + this.hex(rgb[2]);
    }

    /* Remove '#' in color hex string */

  }, {
    key: "trim",
    value: function trim(s) {
      return s.charAt(0) == '#' ? s.substring(1, 7) : s;
    }

    /* Convert a hex string to an RGB triplet */

  }, {
    key: "convertToRGB",
    value: function convertToRGB(hex) {
      var color = [];
      color[0] = parseInt(this.trim(hex).substring(0, 2), 16);
      color[1] = parseInt(this.trim(hex).substring(2, 4), 16);
      color[2] = parseInt(this.trim(hex).substring(4, 6), 16);
      return color;
    }
  }, {
    key: "generateColor",
    value: function generateColor(colorStart, colorEnd, colorCount, weightRange) {

      // The beginning of your gradient
      var start = this.convertToRGB(colorStart);

      // The end of your gradient
      var end = this.convertToRGB(colorEnd);

      // The number of colors to compute
      var len = colorCount;

      //Alpha blending amount
      var alpha = 0.0;
      var saida = [];
      var minWeight = weightRange.min;
      var weight = void 0,
          valueRatio = void 0,
          pow10 = void 0;
      if (this.scale === "lin") {
        valueRatio = (weightRange.max - weightRange.min) / (colorCount - 1);
      } else if (this.scale === "log") {
        if (weightRange.min === 0) {
          valueRatio = Math.log10(weightRange.max) / (colorCount - 1);
        } else {
          valueRatio = (Math.log10(weightRange.max) - Math.log10(weightRange.min)) / (colorCount - 1);
        }
      }

      for (var i = 0; i < len; i++) {
        var c = [];
        alpha += 1.0 / len;

        c[0] = start[0] * alpha + (1 - alpha) * end[0];
        c[1] = start[1] * alpha + (1 - alpha) * end[1];
        c[2] = start[2] * alpha + (1 - alpha) * end[2];

        if (this.scale === "lin") {
          weight = parseFloat((minWeight + i * valueRatio).toFixed(8));
        } else if (this.scale === "log") {
          if (weightRange.min === 0) {
            pow10 = i * valueRatio;
          } else {
            pow10 = Math.log10(weightRange.min) + i * valueRatio;
          }
          weight = parseFloat(Math.pow(10, pow10).toFixed(8));
        }

        saida.push({
          color: '#' + this.convertToHex(c),
          weight: weight
        });
      }
      return saida;
    }
  }, {
    key: "matchColorsToValues",
    value: function matchColorsToValues(colors) {
      var mapped = [];
      var area = {};
      var weight = 0;
      var dataIndex = 0;

      for (var i = 0; i < this.IDList.length; i++) {
        area = {};
        if (dataIndex < this.data.length && this.IDList[i] === this.data[dataIndex].area) {
          weight = this.data[dataIndex].weight;
          for (var j = 0; j <= colors.length; j++) {
            if (weight <= colors[j].weight) {
              mapped.push({
                weight: weight,
                key: this.IDList[i],
                color: colors[j].color,
                raw: this.data[dataIndex].raw
              });
              dataIndex += 1;
              break;
            }
          }
        } else {
          mapped.push({
            weight: 0,
            key: this.IDList[i],
            color: colors[0].color
          });
        }
      }

      return mapped;
    }
  }]);

  return Coloring;
}();

exports.default = Coloring;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(2);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__(8);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _map2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mapping = __webpack_require__(13);

var _mapping2 = _interopRequireDefault(_mapping);

var _replotCore = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map() {
    _classCallCheck(this, Map);

    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this));

    _this.state = {
      tooltipContents: null,
      mouseOver: false,
      mouseX: null,
      mouseY: null
    };
    return _this;
  }

  _createClass(Map, [{
    key: "activateTooltip",
    value: function activateTooltip(data, title) {
      var newContents = "No data supplied";
      if (data) {
        if (this.props.tooltipContents) {
          newContents = this.props.tooltipContents(title, data);
        } else {
          newContents = _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "span",
              null,
              "Location: ",
              title
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "span",
              null,
              this.props.weightKey,
              ": ",
              data[this.props.weightKey]
            )
          );
        }
      }
      this.setState({
        tooltipContents: newContents,
        mouseOver: true
      });
    }
  }, {
    key: "deactivateTooltip",
    value: function deactivateTooltip() {
      this.setState({
        mouseOver: false
      });
    }
  }, {
    key: "updateMousePos",
    value: function updateMousePos(e) {
      this.setState({
        mouseX: e.pageX,
        mouseY: e.pageY - 10
      });
    }
  }, {
    key: "extractValues",
    value: function extractValues() {
      // extrac the values and keys to create colors
      var data = [];
      for (var i = 0; i < this.props.data.length; i++) {
        data.push({
          area: this.props.data[i][this.props.IDKey],
          weight: this.props.data[i][this.props.weightKey],
          raw: this.props.data[i]
        });
      }
      return data;
    }
  }, {
    key: "render",
    value: function render() {

      var region = this.props.region;

      // call this function only in case of colorRange
      var data = this.extractValues();

      var map = (0, _mapping2.default)(region, data, this.props.IDKey, this.props.weightKey, this.props.scale, this.props.colorKey, this.props.colorRange, this.props.colorCatgories, this.props.width, this.props.height, this.activateTooltip.bind(this), this.deactivateTooltip.bind(this));

      return _react2.default.createElement(
        "div",
        { onMouseMove: this.props.tooltip ? this.updateMousePos.bind(this) : null },
        this.props.tooltip && _react2.default.createElement(_replotCore.Tooltip, {
          x: this.state.mouseX, y: this.state.mouseY,
          active: this.state.mouseOver,
          contents: this.state.tooltipContents,
          colorScheme: this.props.tooltipColor
        }),
        map
      );
    }
  }]);

  return Map;
}(_react2.default.Component);

Map.defaultProps = {
  region: "World",
  IDKey: "ID",
  weightKey: "weight",
  colorRange: ["#000000", "#e8e8e8"],
  scale: "lin",
  tooltip: true
  // initialAnimation: true,
};

Map.propTypes = {
  data: _propTypes2.default.array.isRequired,
  region: _propTypes2.default.string,
  IDKey: _propTypes2.default.string,
  weightKey: _propTypes2.default.string,
  colorKey: _propTypes2.default.string,
  colorRange: _propTypes2.default.array,
  colorCatgories: _propTypes2.default.string,
  scale: _propTypes2.default.string,
  tooltip: _propTypes2.default.bool,
  tooltipColor: _propTypes2.default.string,
  tooltipContents: _propTypes2.default.func
};

exports.default = Map;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(10)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(12)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(3);
var warning = __webpack_require__(6);

var ReactPropTypesSecret = __webpack_require__(4);
var checkPropTypes = __webpack_require__(11);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(3);
  var warning = __webpack_require__(6);
  var ReactPropTypesSecret = __webpack_require__(4);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(3);
var ReactPropTypesSecret = __webpack_require__(4);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _US = __webpack_require__(14);

var _US2 = _interopRequireDefault(_US);

var _Chile = __webpack_require__(15);

var _Chile2 = _interopRequireDefault(_Chile);

var _World = __webpack_require__(16);

var _World2 = _interopRequireDefault(_World);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getMap(region, data, IDKey, weightKey, scale, colorKey, colorRange, colorCatgories, width, height, activateTooltip, deactivateTooltip) {

  var curMap = void 0;
  if (region === "US") {
    curMap = _react2.default.createElement(_US2.default, { width: width, height: height, data: data, IDKey: IDKey, weightKey: weightKey, scale: scale,
      colorKey: colorKey, colorRange: colorRange, colorCatgories: colorCatgories,
      activateTooltip: activateTooltip, deactivateTooltip: deactivateTooltip });
  } else if (region === "Chile") {
    curMap = _react2.default.createElement(_Chile2.default, { width: width, height: height, data: data, IDKey: IDKey, weightKey: weightKey, scale: scale,
      colorKey: colorKey, colorRange: colorRange, colorCatgories: colorCatgories,
      activateTooltip: activateTooltip, deactivateTooltip: deactivateTooltip });
  } else if (region === "World") {
    curMap = _react2.default.createElement(_World2.default, { width: width, height: height, data: data, IDKey: IDKey, weightKey: weightKey, scale: scale,
      colorKey: colorKey, colorRange: colorRange, colorCatgories: colorCatgories,
      activateTooltip: activateTooltip, deactivateTooltip: deactivateTooltip });
  }

  return curMap;
}

exports.default = getMap;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _coloring = __webpack_require__(5);

var _coloring2 = _interopRequireDefault(_coloring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var US = function (_React$Component) {
  _inherits(US, _React$Component);

  function US() {
    _classCallCheck(this, US);

    var _this = _possibleConstructorReturn(this, (US.__proto__ || Object.getPrototypeOf(US)).call(this));

    _this.IDList = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"];
    _this.IDDict = {
      "AK": "Alaska",
      "AL": "Alabama",
      "AR": "Arkansas",
      "AZ": "Arizona",
      "CA": "California",
      "CO": "Colorado",
      "CT": "Connecticut",
      "DC": "District of Columbia",
      "DE": "Delaware",
      "FL": "Florida",
      "GA": "Georgia",
      "HI": "Hawaii",
      "IA": "Iowa",
      "ID": "Idaho",
      "IL": "Illinois",
      "IN": "Indiana",
      "KS": "Kansas",
      "KY": "Kentucky",
      "LA": "Louisiana",
      "MA": "Massachusetts",
      "MD": "Maryland",
      "ME": "Maine",
      "MI": "Michigan",
      "MN": "Minnesota",
      "MO": "Missouri",
      "MS": "Mississippi",
      "MT": "Montana",
      "NC": "North Carolina",
      "ND": "North Dakota",
      "NE": "Nebraska",
      "NH": "New Hampshire",
      "NJ": "New Jersey",
      "NM": "New Mexico",
      "NV": "Nevada",
      "NY": "New York",
      "OH": "Ohio",
      "OK": "Oklahoma",
      "OR": "Oregon",
      "PA": "Pennsylvania",
      "RI": "Rhode Island",
      "SC": "South Carolina",
      "SD": "South Dakota",
      "TN": "Tennessee",
      "TX": "Texas",
      "UT": "Utah",
      "VA": "Virginia",
      "VT": "Vermont",
      "WA": "Washington",
      "WI": "Wisconsin",
      "WV": "West Virginia",
      "WY": "Wyoming"
    };
    return _this;
  }

  _createClass(US, [{
    key: "getLegend",
    value: function getLegend(colors) {
      var legend = [];

      for (var i = 0; i < 10; i++) {
        legend.push(_react2.default.createElement("rect", { key: "rect" + i, x: i * 40, y: 8, height: 20, width: 40, fill: colors.colorGradient[i * 10].color }));
        if (i % 2 === 0) {
          legend.push(_react2.default.createElement(
            "text",
            { key: "label" + i, x: i * 40, y: 0, textAnchor: "middle" },
            parseFloat(colors.colorGradient[i * 10].weight.toFixed(2))
          ));
        }
      }
      legend.push(_react2.default.createElement(
        "text",
        { key: "endLabel", x: 400, y: 0, textAnchor: "middle" },
        parseFloat(colors.colorGradient[99].weight.toFixed(2))
      ));

      return _react2.default.createElement(
        "g",
        { transform: "translate(440,20)" },
        legend
      );
    }
  }, {
    key: "render",
    value: function render() {

      var xScale = 1;
      var yScale = 1;
      if (this.props.width && this.props.height) {
        xScale = this.props.width / 959;
        yScale = this.props.height / 593;
      } else if (this.props.width) {
        xScale = this.props.width / 959;
        yScale = xScale;
      } else if (this.props.height) {
        yScale = this.props.height / 593;
        xScale = yScale;
      }

      var colors = new _coloring2.default(this.IDList, this.props.IDKey, this.props.weightKey, this.props.scale, this.props.data, this.props.colorKey, this.props.colorRange, this.props.colorCatgories);
      var mapColors = colors.generate();
      var legend = this.getLegend(colors);

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "svg",
          { width: 959 * xScale, height: 593 * yScale },
          _react2.default.createElement(
            "g",
            { transform: "scale(" + xScale + " " + yScale + ")" },
            _react2.default.createElement("path", { id: "AK", fill: mapColors[0].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[0].raw, this.IDDict["AK"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M161.1,453.7 l-0.3,85.4 1.6,1 3.1,0.2 1.5,-1.1 h2.6 l0.2,2.9 7,6.8 0.5,2.6 3.4,-1.9 0.6,-0.2 0.3,-3.1 1.5,-1.6 1.1,-0.2 1.9,-1.5 3.1,2.1 0.6,2.9 1.9,1.1 1.1,2.4 3.9,1.8 3.4,6 2.7,3.9 2.3,2.7 1.5,3.7 5,1.8 5.2,2.1 1,4.4 0.5,3.1 -1,3.4 -1.8,2.3 -1.6,-0.8 -1.5,-3.1 -2.7,-1.5 -1.8,-1.1 -0.8,0.8 1.5,2.7 0.2,3.7 -1.1,0.5 -1.9,-1.9 -2.1,-1.3 0.5,1.6 1.3,1.8 -0.8,0.8 c0,0 -0.8,-0.3 -1.3,-1 -0.5,-0.6 -2.1,-3.4 -2.1,-3.4 l-1,-2.3 c0,0 -0.3,1.3 -1,1 -0.6,-0.3 -1.3,-1.5 -1.3,-1.5 l1.8,-1.9 -1.5,-1.5 v-5 h-0.8 l-0.8,3.4 -1.1,0.5 -1,-3.7 -0.6,-3.7 -0.8,-0.5 0.3,5.7 v1.1 l-1.5,-1.3 -3.6,-6 -2.1,-0.5 -0.6,-3.7 -1.6,-2.9 -1.6,-1.1 v-2.3 l2.1,-1.3 -0.5,-0.3 -2.6,0.6 -3.4,-2.4 -2.6,-2.9 -4.8,-2.6 -4,-2.6 1.3,-3.2 v-1.6 l-1.8,1.6 -2.9,1.1 -3.7,-1.1 -5.7,-2.4 h-5.5 l-0.6,0.5 -6.5,-3.9 -2.1,-0.3 -2.7,-5.8 -3.6,0.3 -3.6,1.5 0.5,4.5 1.1,-2.9 1,0.3 -1.5,4.4 3.2,-2.7 0.6,1.6 -3.9,4.4 -1.3,-0.3 -0.5,-1.9 -1.3,-0.8 -1.3,1.1 -2.7,-1.8 -3.1,2.1 -1.8,2.1 -3.4,2.1 -4.7,-0.2 -0.5,-2.1 3.7,-0.6 v-1.3 l-2.3,-0.6 1,-2.4 2.3,-3.9 v-1.8 l0.2,-0.8 4.4,-2.3 1,1.3 h2.7 l-1.3,-2.6 -3.7,-0.3 -5,2.7 -2.4,3.4 -1.8,2.6 -1.1,2.3 -4.2,1.5 -3.1,2.6 -0.3,1.6 2.3,1 0.8,2.1 -2.7,3.2 -6.5,4.2 -7.8,4.2 -2.1,1.1 -5.3,1.1 -5.3,2.3 1.8,1.3 -1.5,1.5 -0.5,1.1 -2.7,-1 -3.2,0.2 -0.8,2.3 h-1 l0.3,-2.4 -3.6,1.3 -2.9,1 -3.4,-1.3 -2.9,1.9 h-3.2 l-2.1,1.3 -1.6,0.8 -2.1,-0.3 -2.6,-1.1 -2.3,0.6 -1,1 -1.6,-1.1 v-1.9 l3.1,-1.3 6.3,0.6 4.4,-1.6 2.1,-2.1 2.9,-0.6 1.8,-0.8 2.7,0.2 1.6,1.3 1,-0.3 2.3,-2.7 3.1,-1 3.4,-0.6 1.3,-0.3 0.6,0.5 h0.8 l1.3,-3.7 4,-1.5 1.9,-3.7 2.3,-4.5 1.6,-1.5 0.3,-2.6 -1.6,1.3 -3.4,0.6 -0.6,-2.4 -1.3,-0.3 -1,1 -0.2,2.9 -1.5,-0.2 -1.5,-5.8 -1.3,1.3 -1.1,-0.5 -0.3,-1.9 -4,0.2 -2.1,1.1 -2.6,-0.3 1.5,-1.5 0.5,-2.6 -0.6,-1.9 1.5,-1 1.3,-0.2 -0.6,-1.8 v-4.4 l-1,-1 -0.8,1.5 h-6.1 l-1.5,-1.3 -0.6,-3.9 -2.1,-3.6 v-1 l2.1,-0.8 0.2,-2.1 1.1,-1.1 -0.8,-0.5 -1.3,0.5 -1.1,-2.7 1,-5 4.5,-3.2 2.6,-1.6 1.9,-3.7 2.7,-1.3 2.6,1.1 0.3,2.4 2.4,-0.3 3.2,-2.4 1.6,0.6 1,0.6 h1.6 l2.3,-1.3 0.8,-4.4 c0,0 0.3,-2.9 1,-3.4 0.6,-0.5 1,-1 1,-1 l-1.1,-1.9 -2.6,0.8 -3.2,0.8 -1.9,-0.5 -3.6,-1.8 -5,-0.2 -3.6,-3.7 0.5,-3.9 0.6,-2.4 -2.1,-1.8 -1.9,-3.7 0.5,-0.8 6.8,-0.5 h2.1 l1,1 h0.6 l-0.2,-1.6 3.9,-0.6 2.6,0.3 1.5,1.1 -1.5,2.1 -0.5,1.5 2.7,1.6 5,1.8 1.8,-1 -2.3,-4.4 -1,-3.2 1,-0.8 -3.4,-1.9 -0.5,-1.1 0.5,-1.6 -0.8,-3.9 -2.9,-4.7 -2.4,-4.2 2.9,-1.9 h3.2 l1.8,0.6 4.2,-0.2 3.7,-3.6 1.1,-3.1 3.7,-2.4 1.6,1 2.7,-0.6 3.7,-2.1 1.1,-0.2 1,0.8 4.5,-0.2 2.7,-3.1 h1.1 l3.6,2.4 1.9,2.1 -0.5,1.1 0.6,1.1 1.6,-1.6 3.9,0.3 0.3,3.7 1.9,1.5 7.1,0.6 6.3,4.2 1.5,-1 5.2,2.6 2.1,-0.6 1.9,-0.8 4.8,1.9z m-115.1,28.9 2.1,5.3 -0.2,1 -2.9,-0.3 -1.8,-4 -1.8,-1.5 h-2.4 l-0.2,-2.6 1.8,-2.4 1.1,2.4 1.5,1.5z m-2.6,33.5 3.7,0.8 3.7,1 0.8,1 -1.6,3.7 -3.1,-0.2 -3.4,-3.6z m-20.7,-14.1 1.1,2.6 1.1,1.6 -1.1,0.8 -2.1,-3.1 v-1.9z m-13.7,73.1 3.4,-2.3 3.4,-1 2.6,0.3 0.5,1.6 1.9,0.5 1.9,-1.9 -0.3,-1.6 2.7,-0.6 2.9,2.6 -1.1,1.8 -4.4,1.1 -2.7,-0.5 -3.7,-1.1 -4.4,1.5 -1.6,0.3z m48.9,-4.5 1.6,1.9 2.1,-1.6 -1.5,-1.3z m2.9,3 1.1,-2.3 2.1,0.3 -0.8,1.9 h-2.4z m23.6,-1.9 1.5,1.8 1,-1.1 -0.8,-1.9z m8.8,-12.5 1.1,5.8 2.9,0.8 5,-2.9 4.4,-2.6 -1.6,-2.4 0.5,-2.4 -2.1,1.3 -2.9,-0.8 1.6,-1.1 1.9,0.8 3.9,-1.8 0.5,-1.5 -2.4,-0.8 0.8,-1.9 -2.7,1.9 -4.7,3.6 -4.8,2.9z m42.3,-19.8 2.4,-1.5 -1,-1.8 -1.8,1z" }),
            _react2.default.createElement("path", { id: "AL", fill: mapColors[1].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[1].raw, this.IDDict["AL"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M628.5,466.4 l0.6,0.2 1.3,-2.7 1.5,-4.4 2.3,0.6 3.1,6 v1 l-2.7,1.9 2.7,0.3 5.2,-2.5 -0.3,-7.6 -2.5,-1.8 -2,-2 0.4,-4 10.5,-1.5 25.7,-2.9 6.7,-0.6 5.6,0.1 -0.5,-2.2 -1.5,-0.8 -0.9,-1.1 1,-2.6 -0.4,-5.2 -1.6,-4.5 0.8,-5.1 1.7,-4.8 -0.2,-1.7 -1.8,-0.7 -0.5,-3.6 -2.7,-3.4 -2,-6.5 -1.4,-6.7 -1.8,-5 -3.8,-16 -3.5,-7.9 -0.8,-5.6 0.1,-2.2 -9,0.8 -23.4,2.2 -12.2,0.8 -0.2,6.4 0.2,16.7 -0.7,31 -0.3,14.1 2.8,18.8 1.6,14.7z" }),
            _react2.default.createElement("path", { id: "AR", fill: mapColors[2].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[2].raw, this.IDDict["AR"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M587.3,346.1 l-6.4,-0.7 0.9,-3.1 3.1,-2.6 0.6,-2.3 -1.8,-2.9 -31.9,1.2 -23.3,0.7 -23.6,0.3 1.5,6.9 0.1,8.5 1.4,10.9 0.3,38.2 2.1,1.6 3,-1.2 2.9,1.2 0.4,10.1 25.2,-0.2 26.8,-0.8 0.9,-1.9 -0.3,-3.8 -1.7,-3.1 1.5,-1.4 -1.4,-2.2 0.7,-2.4 1.1,-5.9 2.7,-2.3 -0.8,-2.2 4,-5.6 2.5,-1.1 -0.1,-1.7 -0.5,-1.7 2.9,-5.8 2.5,-1.1 0.2,-3.3 2.1,-1.4 0.9,-4.1 -1.4,-4 4.2,-2.4 0.3,-2.1 1.2,-4.2 0.9,-3.1z" }),
            _react2.default.createElement("path", { id: "AZ", fill: mapColors[3].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[3].raw, this.IDDict["AZ"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M135.1,389.7 l-0.3,1.5 0.5,1 18.9,10.7 12.1,7.6 14.7,8.6 16.8,10 12.3,2.4 25.4,2.7 6,-39.6 7,-53.1 4.4,-31 -24.6,-3.6 -60.7,-11 -0.2,1.1 -2.6,16.5 -2.1,3.8 -2.8,-0.2 -1.2,-2.6 -2.6,-0.4 -1.2,-1.1 -1.1,0.1 -2.1,1.7 -0.3,6.8 -0.3,1.5 -0.5,12.5 -1.5,2.4 -0.4,3.3 2.8,5 1.1,5.5 0.7,1.1 1.1,0.9 -0.4,2.4 -1.7,1.2 -3.4,1.6 -1.6,1.8 -1.6,3.6 -0.5,4.9 -3,2.9 -1.9,0.9 -0.1,5.8 -0.6,1.6 0.5,0.8 3.9,0.4 -0.9,3 -1.7,2.4 -3.7,0.4z" }),
            _react2.default.createElement("path", { id: "CA", fill: mapColors[4].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[4].raw, this.IDDict["CA"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M122.7,385.9 l-19.7,-2.7 -10,-1.5 -0.5,-1.8 v-9.4 l-0.3,-3.2 -2.6,-4.2 -0.8,-2.3 -3.9,-4.2 -2.9,-4.7 -2.7,-0.2 -3.2,-0.8 -0.3,-1 1.5,-0.6 -0.6,-3.2 -1.5,-2.1 -4.8,-0.8 -3.9,-2.1 -1.1,-2.3 -2.6,-4.8 -2.9,-3.1 h-2.9 l-3.9,-2.1 -4.5,-1.8 -4.2,-0.5 -2.4,-2.7 0.5,-1.9 1.8,-7.1 0.8,-1.9 v-2.4 l-1.6,-1 -0.5,-2.9 -1.5,-2.6 -3.4,-5.8 -1.3,-3.1 -1.5,-4.7 -1.6,-5.3 -3.2,-4.4 -0.5,-2.9 0.8,-3.9 h1.1 l2.1,-1.6 1.1,-3.6 -1,-2.7 -2.7,-0.5 -1.9,-2.6 -2.1,-3.7 -0.2,-8.2 0.6,-1.9 0.6,-2.3 0.5,-2.4 -5.7,-6.3 v-2.1 l0.3,-0.5 0.3,-3.2 -1.3,-4 -2.3,-4.8 -2.7,-4.5 -1.8,-3.9 1,-3.7 0.6,-5.8 1.8,-3.1 0.3,-6.5 -1.1,-3.6 -1.6,-4.2 -2.7,-4.2 0.8,-3.2 1.5,-4.2 1.8,-0.8 0.3,-1.1 3.1,-2.6 5.2,-11.8 0.2,-7.4 1.69,-4.9 38.69,11.8 25.6,6.6 -8,31.3 -8.67,33.1 12.63,19.2 42.16,62.3 17.1,26.1 -0.4,3.1 2.8,5.2 1.1,5.4 1,1.5 0.7,0.6 -0.2,1.4 -1.4,1 -3.4,1.6 -1.9,2.1 -1.7,3.9 -0.5,4.7 -2.6,2.5 -2.3,1.1 -0.1,6.2 -0.6,1.9 1,1.7 3,0.3 -0.4,1.6 -1.4,2 -3.9,0.6z m-73.9,-48.9 1.3,1.5 -0.2,1.3 -3.2,-0.1 -0.6,-1.2 -0.6,-1.5z m1.9,0 1.2,-0.6 3.6,2.1 3.1,1.2 -0.9,0.6 -4.5,-0.2 -1.6,-1.6z m20.7,19.8 1.8,2.3 0.8,1 1.5,0.6 0.6,-1.5 -1,-1.8 -2.7,-2 -1.1,0.2 v1.2z m-1.4,8.7 1.8,3.2 1.2,1.9 -1.5,0.2 -1.3,-1.2 c0,0 -0.7,-1.5 -0.7,-1.9 0,-0.4 0,-2.2 0,-2.2z" }),
            _react2.default.createElement("path", { id: "CO", fill: mapColors[5].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[5].raw, this.IDDict["CO"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M380.2,235.5 l-36,-3.5 -79.1,-8.6 -2.2,22.1 -7,50.4 -1.9,13.7 34,3.9 37.5,4.4 34.7,3 14.3,0.6z" }),
            _react2.default.createElement("path", { id: "CT", fill: mapColors[6].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[6].raw, this.IDDict["CT"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M852,190.9 l3.6,-3.2 1.9,-2.1 0.8,0.6 2.7,-1.5 5.2,-1.1 7,-3.5 -0.6,-4.2 -0.8,-4.4 -1.6,-6 -4.3,1.1 -21.8,4.7 0.6,3.1 1.5,7.3 v8.3 l-0.9,2.1 1.7,2.2z" }),
            _react2.default.createElement("path", { id: "DC", fill: mapColors[7].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[7].raw, this.IDDict["DC"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M801.8,253.8 l-1.1-1.6 -1-0.8 1.1-1.6 2.2,1.5z" }),
            _react2.default.createElement("path", { id: "DE", fill: mapColors[8].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[8].raw, this.IDDict["DE"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M834.4,247.2 l-1,0.5 -3.6,-2.4 -1.8,-4.7 -1.9,-3.6 -2.3,-1 -2.1,-3.6 0.5,-2 0.5,-2.3 0.1,-1.1 -0.6,0.1 -1.7,1 -2,1.7 -0.2,0.3 1.4,4.1 2.3,5.6 3.7,16.1 5,-0.3 6,-1.1z" }),
            _react2.default.createElement("path", { id: "FL", fill: mapColors[9].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[9].raw, this.IDDict["FL"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M750.2,445.2 l-5.2,-0.7 -0.7,0.8 1.5,4.4 -0.4,5.2 -4.1,-1 -0.2,-2.8 h-4.1 l-5.3,0.7 -32.4,1.9 -8.2,-0.3 -1.7,-1.7 -2.5,-4.2 h-5.9 l-6.6,0.5 -35.4,4.2 -0.3,2.8 1.6,1.6 2.9,2 0.3,8.4 3.3,-0.6 6,-2.1 6,-0.5 4.4,-0.6 7.6,1.8 8.1,3.9 1.6,1.5 2.9,1.1 1.6,1.9 0.3,2.7 3.2,-1.3 h3.9 l3.6,-1.9 3.7,-3.6 3.1,0.2 0.5,-1.1 -0.8,-1 0.2,-1.9 4,-0.8 h2.6 l2.9,1.5 4.2,1.5 2.4,3.7 2.7,1 1.1,3.4 3.4,1.6 1.6,2.6 1.9,0.6 5.2,1.3 1.3,3.1 3,3.7 v9.5 l-1.5,4.7 0.3,2.7 1.3,4.8 1.8,4 0.8,-0.5 1.5,-4.5 -2.6,-1 -0.3,-0.6 1.6,-0.6 4.5,1 0.2,1.6 -3.2,5.5 -2.1,2.4 3.6,3.7 2.6,3.1 2.9,5.3 2.9,3.9 2.1,5 1.8,0.3 1.6,-2.1 1.8,1.1 2.6,4 0.6,3.6 3.1,4.4 0.8,-1.3 3.9,0.3 3.6,2.3 3.4,5.2 0.8,3.4 0.3,2.9 1.1,1 1.3,0.5 2.4,-1 1.5,-1.6 3.9,-0.2 3.1,-1.5 2.7,-3.2 -0.5,-1.9 -0.3,-2.4 0.6,-1.9 -0.3,-1.9 2.4,-1.3 0.3,-3.4 -0.6,-1.8 -0.5,-12 -1.3,-7.6 -4.5,-8.2 -3.6,-5.8 -2.6,-5.3 -2.9,-2.9 -2.9,-7.4 0.7,-1.4 1.1,-1.3 -1.6,-2.9 -4,-3.7 -4.8,-5.5 -3.7,-6.3 -5.3,-9.4 -3.7,-9.7 -2.3,-7.3z m17.7,132.7 2.4,-0.6 1.3,-0.2 1.5,-2.3 2.3,-1.6 1.3,0.5 1.7,0.3 0.4,1.1 -3.5,1.2 -4.2,1.5 -2.3,1.2z m13.5,-5 1.2,1.1 2.7,-2.1 5.3,-4.2 3.7,-3.9 2.5,-6.6 1,-1.7 0.2,-3.4 -0.7,0.5 -1,2.8 -1.5,4.6 -3.2,5.3 -4.4,4.2 -3.4,1.9z" }),
            _react2.default.createElement("path", { id: "GA", fill: mapColors[10].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[10].raw, this.IDDict["GA"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M750.2,444.2 l-5.6,-0.7 -1.4,1.6 1.6,4.7 -0.3,3.9 -2.2,-0.6 -0.2,-3 h-5.2 l-5.3,0.7 -32.3,1.9 -7.7,-0.3 -1.4,-1.2 -2.5,-4.3 -0.8,-3.3 -1.6,-0.9 -0.5,-0.5 0.9,-2.2 -0.4,-5.5 -1.6,-4.5 0.8,-4.9 1.7,-4.8 -0.2,-2.5 -1.9,-0.7 -0.4,-3.2 -2.8,-3.5 -1.9,-6.2 -1.5,-7 -1.7,-4.8 -3.8,-16 -3.5,-8 -0.8,-5.3 0.1,-2.3 3.3,-0.3 13.6,-1.6 18.6,-2 6.3,-1.1 0.5,1.4 -2.2,0.9 -0.9,2.2 0.4,2 1.4,1.6 4.3,2.7 3.2,-0.1 3.2,4.7 0.6,1.6 2.3,2.8 0.5,1.7 4.7,1.8 3,2.2 2.3,3 2.3,1.3 2,1.8 1.4,2.7 2.1,1.9 4.1,1.8 2.7,6 1.7,5.1 2.8,0.7 2.1,1.9 2,5.7 2.9,1.6 1.7,-0.8 0.4,1.2 -3.3,6.2 0.5,2.6 -1.5,4.2 -2.3,10 0.8,6.3z" }),
            _react2.default.createElement("path", { id: "HI", fill: mapColors[11].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[11].raw, this.IDDict["HI"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M233.1,519.3 l1.9,-3.6 2.3,-0.3 0.3,0.8 -2.1,3.1z m10.2,-3.7 6.1,2.6 2.1,-0.3 1.6,-3.9 -0.6,-3.4 -4.2,-0.5 -4,1.8z m30.7,10 3.7,5.5 2.4,-0.3 1.1,-0.5 1.5,1.3 3.7,-0.2 1,-1.5 -2.9,-1.8 -1.9,-3.7 -2.1,-3.6 -5.8,2.9z m20.2,8.9 1.3,-1.9 4.7,1 0.6,-0.5 6.1,0.6 -0.3,1.3 -2.6,1.5 -4.4,-0.3z m5.3,5.2 1.9,3.9 3.1,-1.1 0.3,-1.6 -1.6,-2.1 -3.7,-0.3z m7,-1.2 2.3,-2.9 4.7,2.4 4.4,1.1 4.4,2.7 v1.9 l-3.6,1.8 -4.8,1 -2.4,-1.5z m16.6,15.6 1.6,-1.3 3.4,1.6 7.6,3.6 3.4,2.1 1.6,2.4 1.9,4.4 4,2.6 -0.3,1.3 -3.9,3.2 -4.2,1.5 -1.5,-0.6 -3.1,1.8 -2.4,3.2 -2.3,2.9 -1.8,-0.2 -3.6,-2.6 -0.3,-4.5 0.6,-2.4 -1.6,-5.7 -2.1,-1.8 -0.2,-2.6 2.3,-1 2.1,-3.1 0.5,-1 -1.6,-1.8z" }),
            _react2.default.createElement("path", { id: "IA", fill: mapColors[12].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[12].raw, this.IDDict["IA"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M556.8,183.6 l2.1,2.1 0.3,0.7 -2,3 0.3,4 2.6,4.1 3.1,1.6 2.4,0.3 0.9,1.8 0.2,2.4 2.5,1 0.9,1.1 0.5,1.6 3.8,3.3 0.6,1.9 -0.7,3 -1.7,3.7 -0.6,2.4 -2.1,1.6 -1.6,0.5 -5.7,1.5 -1.6,4.8 0.8,1.8 1.7,1.5 -0.2,3.5 -1.9,1.4 -0.7,1.8 v2.4 l-1.4,0.4 -1.7,1.4 -0.5,1.7 0.4,1.7 -1.3,1 -2.3,-2.7 -1.4,-2.8 -8.3,0.8 -10,0.6 -49.2,1.2 -1.6,-4.3 -0.4,-6.7 -1.4,-4.2 -0.7,-5.2 -2.2,-3.7 -1,-4.6 -2.7,-7.8 -1.1,-5.6 -1.4,-1.9 -1.3,-2.9 1.7,-3.8 1.2,-6.1 -2.7,-2.2 -0.3,-2.4 0.7,-2.4 1.8,-0.3 61.1,-0.6 21.2,-0.7z" }),
            _react2.default.createElement("path", { id: "ID", fill: mapColors[13].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[13].raw, this.IDDict["ID"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M175.3,27.63 l-4.8,17.41 -4.5,20.86 -3.4,16.22 -0.4,9.67 1.2,4.44 3.5,2.66 -0.2,3.91 -3.9,4.4 -4.5,6.6 -0.9,2.9 -1.2,1.1 -1.8,0.8 -4.3,5.3 -0.4,3.1 -0.4,1.1 0.6,1 2.6,-0.1 1.1,2.3 -2.4,5.8 -1.2,4.2 -8.8,35.3 20.7,4.5 39.5,7.9 34.8,6.1 4.9,-29.2 3.8,-24.1 -2.7,-2.4 -0.4,-2.6 -0.8,-1.1 -2.1,1 -0.7,2.6 -3.2,0.5 -3.9,-1.6 -3.8,0.1 -2.5,0.7 -3.4,-1.5 -2.4,0.2 -2.4,2 -2,-1.1 -0.7,-4 0.7,-2.9 -2.5,-2.9 -3.3,-2.6 -2.7,-13.1 -0.1,-4.7 -0.3,-0.1 -0.2,0.4 -5.1,3.5 -1.7,-0.2 -2.9,-3.4 -0.2,-3.1 7,-17.13 -0.4,-1.94 -3.4,-1.15 -0.6,-1.18 -2.6,-3.46 -4.6,-10.23 -3.2,-1.53 -2,-4.95 1.3,-4.63 -3.2,-7.58 4.4,-21.52z" }),
            _react2.default.createElement("path", { id: "IL", fill: mapColors[14].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[14].raw, this.IDDict["IL"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M618.7,214.3 l-0.8,-2.6 -1.3,-3.7 -1.6,-1.8 -1.5,-2.6 -0.4,-5.5 -15.9,1.8 -17.4,1 h-12.3 l0.2,2.1 2.2,0.9 1.1,1.4 0.4,1.4 3.9,3.4 0.7,2.4 -0.7,3.3 -1.7,3.7 -0.8,2.7 -2.4,1.9 -1.9,0.6 -5.2,1.3 -1.3,4.1 0.6,1.1 1.9,1.8 -0.2,4.3 -2.1,1.6 -0.5,1.3 v2.8 l-1.8,0.6 -1.4,1.2 -0.4,1.2 0.4,2 -1.6,1.3 -0.9,2.8 0.3,3.9 2.3,7 7,7.6 5.7,3.7 v4.4 l0.7,1.2 6.6,0.6 2.7,1.4 -0.7,3.5 -2.2,6.2 -0.8,3 2,3.7 6.4,5.3 4.8,0.8 2.2,5.1 2,3.4 -0.9,2.8 1.5,3.8 1.7,2.1 1.6,-0.3 1,-2.2 2.4,-1.7 2.8,-1 6.1,2.5 0.5,-0.2 v-1.1 l-1.2,-2.7 0.4,-2.8 2.4,-1.6 3.4,-1.2 -0.5,-1.3 -0.8,-2 1.2,-1.3 1,-2.7 v-4 l0.4,-4.9 2.5,-3 1.8,-3.8 2.5,-4 -0.5,-5.3 -1.8,-3.2 -0.3,-3.3 0.8,-5.3 -0.7,-7.2 -1.1,-15.8 -1.4,-15.3 -0.9,-11.7z" }),
            _react2.default.createElement("path", { id: "IN", fill: mapColors[15].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[15].raw, this.IDDict["IN"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M622.9,216.1 l1.5,1 1.1,-0.3 2.1,-1.9 2.5,-1.8 14.3,-1.1 18.4,-1.8 1.6,15.5 4.9,42.6 -0.6,2.9 1.3,1.6 0.2,1.3 -2.3,1.6 -3.6,1.7 -3.2,0.4 -0.5,4.8 -4.7,3.6 -2.9,4 0.2,2.4 -0.5,1.4 h-3.5 l-1.4,-1.7 -5.2,3 0.2,3.1 -0.9,0.2 -0.5,-0.9 -2.4,-1.7 -3.6,1.5 -1.4,2.9 -1.2,-0.6 -1.6,-1.8 -4.4,0.5 -5.7,1 -2.5,1.3 v-2.6 l0.4,-4.7 2.3,-2.9 1.8,-3.9 2.7,-4.2 -0.5,-5.8 -1.8,-3.1 -0.3,-3.2 0.8,-5.3 -0.7,-7.1 -0.9,-12.6 -2.5,-30.1z" }),
            _react2.default.createElement("path", { id: "KS", fill: mapColors[16].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[16].raw, this.IDDict["KS"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M485.9,259.5 l-43.8,-0.6 -40.6,-1.2 -21.7,-0.9 -4.3,64.8 24.3,1 44.7,2.1 46.3,0.6 12.6,-0.3 0.7,-35 -1.2,-11.1 -2.5,-2 -2.4,-3 -2.3,-3.6 0.6,-3 1.7,-1.4 v-2.1 l-0.8,-0.7 -2.6,-0.2 -3.5,-3.4z" }),
            _react2.default.createElement("path", { id: "KY", fill: mapColors[17].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[17].raw, this.IDDict["KY"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M607.2,331.8 l12.6,-0.7 0.1,-4.1 h4.3 l30.4,-3.2 45.1,-4.3 5.6,-3.6 3.9,-2.1 0.1,-1.9 6,-7.8 4.1,-3.6 2.1,-2.4 -3.3,-2 -2.5,-2.7 -3,-3.8 -0.5,-2.2 -2.6,-1.4 -0.9,-1.9 -0.2,-6.1 -2.6,-2 -1.9,-1.1 -0.5,-2.3 -1.3,0.2 -2,1.2 -2.5,2.7 -1.9,-1.7 -2.5,-0.5 -2.4,1.4 h-2.3 l-1.8,-2 -5.6,-0.1 -1.8,-4.5 -2.9,-1.5 -2.1,0.8 -4.2,0.2 -0.5,2.1 1.2,1.5 0.3,2.1 -2.8,2 -3.8,1.8 -2.6,0.4 -0.5,4.5 -4.9,3.6 -2.6,3.7 0.2,2.2 -0.9,2.3 -4.5,-0.1 -1.3,-1.3 -3.9,2.2 0.2,3.3 -2.4,0.6 -0.8,-1.4 -1.7,-1.2 -2.7,1.1 -1.8,3.5 -2.2,-1 -1.4,-1.6 -3.7,0.4 -5.6,1 -2.8,1.3 -1.2,3.4 -1,1 1.5,3.7 -4.2,1.4 -1.9,1.4 -0.4,2.2 1.2,2.4 v2.2 l-1.6,0.4 -6.1,-2.5 -2.3,0.9 -2,1.4 -0.8,1.8 1.7,2.4 -0.9,1.8 -0.1,3.3 -2.4,1.3 -2.1,1.7z" }),
            _react2.default.createElement("path", { id: "LA", fill: mapColors[18].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[18].raw, this.IDDict["LA"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M526.9,485.9 l8.1,-0.3 10.3,3.6 6.5,1.1 3.7,-1.5 3.2,1.1 3.2,1 0.8,-2.1 -3.2,-1.1 -2.6,0.5 -2.7,-1.6 0.8,-1.5 3.1,-1 1.8,1.5 1.8,-1 3.2,0.6 1.5,2.4 0.3,2.3 4.5,0.3 1.8,1.8 -0.8,1.6 -1.3,0.8 1.6,1.6 8.4,3.6 3.6,-1.3 1,-2.4 2.6,-0.6 1.8,-1.5 1.3,1 0.8,2.9 -2.3,0.8 0.6,0.6 3.4,-1.3 2.3,-3.4 0.8,-0.5 -2.1,-0.3 0.8,-1.6 -0.2,-1.5 2.1,-0.5 1.1,-1.3 0.6,0.8 0.6,3.1 4.2,0.6 4,1.9 1,1.5 h2.9 l1.1,1 2.3,-3.1 v-1.5 h-1.3 l-3.4,-2.7 -5.8,-0.8 -3.2,-2.3 1.1,-2.7 2.3,0.3 0.2,-0.6 -1.8,-1 v-0.5 h3.2 l1.8,-3.1 -1.3,-1.9 -0.3,-2.7 -1.5,0.2 -1.9,2.1 -0.6,2.6 -3.1,-0.6 -1,-1.8 1.8,-1.9 1.9,-1.7 -2.2,-6.5 -3.4,-3.4 1,-7.3 -0.2,-0.5 -1.3,0.2 -33.1,1.4 -0.8,-2.4 0.8,-8.5 8.6,-14.8 -0.9,-2.6 1.4,-0.4 0.4,-2 -2.2,-2 0.1,-1.9 -2,-4.5 -0.4,-5.1 0.1,-0.7 -26.4,0.8 -25.2,0.1 0.4,9.7 0.7,9.5 0.5,3.7 2.6,4.5 0.9,4.4 4.3,6 0.3,3.1 0.6,0.8 -0.7,8.3 -2.8,4.6 1.2,2.4 -0.5,2.6 -0.8,7.3 -1.3,3 0.2,3.7z" }),
            _react2.default.createElement("path", { id: "MA", fill: mapColors[19].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[19].raw, this.IDDict["MA"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M887.5,172.5 l-0.5,-2.3 0.8,-1.5 2.9,-1.5 0.8,3.1 -0.5,1.8 -2.4,1.5 v1 l1.9,-1.5 3.9,-4.5 3.9,-1.9 4.2,-1.5 -0.3,-2.4 -1,-2.9 -1.9,-2.4 -1.8,-0.8 -2.1,0.2 -0.5,0.5 1,1.3 1.5,-0.8 2.1,1.6 0.8,2.7 -1.8,1.8 -2.3,1 -3.6,-0.5 -3.9,-6 -2.3,-2.6 h-1.8 l-1.1,0.8 -1.9,-2.6 0.3,-1.5 2.4,-5.2 -2.9,-4.4 -3.7,1.8 -1.8,2.9 -18.3,4.7 -13.8,2.5 -0.6,10.6 0.7,4.9 22,-4.8 11.2,-2.8 2,1.6 3.4,4.3 2.9,4.7z m12.5,1.4 2.2,-0.7 0.5,-1.7 1,0.1 1,2.3 -1.3,0.5 -3.9,0.1z m-9.4,0.8 2.3,-2.6 h1.6 l1.8,1.5 -2.4,1 -2.2,1z" }),
            _react2.default.createElement("path", { id: "MD", fill: mapColors[20].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[20].raw, this.IDDict["MD"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M834.8,264.1 l1.7,-3.8 0.5,-4.8 -6.3,1.1 -5.8,0.3 -3.8,-16.8 -2.3,-5.5 -1.5,-4.6 -22.2,4.3 -37.6,7.6 2,10.4 4.8,-4.9 2.5,-0.7 1.4,-1.5 1.8,-2.7 1.6,0.7 2.6,-0.2 2.6,-2.1 2,-1.5 2.1,-0.6 1.5,1.1 2.7,1.4 1.9,1.8 1.3,1.4 4.8,1.6 -0.6,2.9 5.8,2.1 2.1,-2.6 3.7,2.5 -2.1,3.3 -0.7,3.3 -1.8,2.6 v2.1 l0.3,0.8 2,1.3 3.4,1.1 4.3,-0.1 3.1,1 2.1,0.3 1,-2.1 -1.5,-2.1 v-1.8 l-2.4,-2.1 -2.1,-5.5 1.3,-5.3 -0.2,-2.1 -1.3,-1.3 c0,0 1.5,-1.6 1.5,-2.3 0,-0.6 0.5,-2.1 0.5,-2.1 l1.9,-1.3 1.9,-1.6 0.5,1 -1.5,1.6 -1.3,3.7 0.3,1.1 1.8,0.3 0.5,5.5 -2.1,1 0.3,3.6 0.5,-0.2 1.1,-1.9 1.6,1.8 -1.6,1.3 -0.3,3.4 2.6,3.4 3.9,0.5 1.6,-0.8 3.2,4.2 1,0.4z m-14.5,0.2 1.1,2.5 0.2,1.8 1.1,1.9 c0,0 0.9,-0.9 0.9,-1.2 0,-0.3 -0.7,-3.1 -0.7,-3.1 l-0.7,-2.3z" }),
            _react2.default.createElement("path", { id: "ME", fill: mapColors[21].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[21].raw, this.IDDict["AK"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M865.8,91.9 l1.5,0.4 v-2.6 l0.8,-5.5 2.6,-4.7 1.5,-4 -1.9,-2.4 v-6 l0.8,-1 0.8,-2.7 -0.2,-1.5 -0.2,-4.8 1.8,-4.8 2.9,-8.9 2.1,-4.2 h1.3 l1.3,0.2 v1.1 l1.3,2.3 2.7,0.6 0.8,-0.8 v-1 l4,-2.9 1.8,-1.8 1.5,0.2 6,2.4 1.9,1 9.1,29.9 h6 l0.8,1.9 0.2,4.8 2.9,2.3 h0.8 l0.2,-0.5 -0.5,-1.1 2.8,-0.5 1.9,2.1 2.3,3.7 v1.9 l-2.1,4.7 -1.9,0.6 -3.4,3.1 -4.8,5.5 c0,0 -0.6,0 -1.3,0 -0.6,0 -1,-2.1 -1,-2.1 l-1.8,0.2 -1,1.5 -2.4,1.5 -1,1.5 1.6,1.5 -0.5,0.6 -0.5,2.7 -1.9,-0.2 v-1.6 l-0.3,-1.3 -1.5,0.3 -1.8,-3.2 -2.1,1.3 1.3,1.5 0.3,1.1 -0.8,1.3 0.3,3.1 0.2,1.6 -1.6,2.6 -2.9,0.5 -0.3,2.9 -5.3,3.1 -1.3,0.5 -1.6,-1.5 -3.1,3.6 1,3.2 -1.5,1.3 -0.2,4.4 -1.1,6.3 -2.2,-0.9 -0.5,-3.1 -4,-1.1 -0.2,-2.5 -11.7,-37.43z m36.5,15.6 1.5,-1.5 1.4,1.1 0.6,2.4 -1.7,0.9z m6.7,-5.9 1.8,1.9 c0,0 1.3,0.1 1.3,-0.2 0,-0.3 0.2,-2 0.2,-2 l0.9,-0.8 -0.8,-1.8 -2,0.7z" }),
            _react2.default.createElement("path", { id: "MI", fill: mapColors[22].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[22].raw, this.IDDict["MI"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M644.5,211 l19.1,-1.9 0.2,1.1 9.9,-1.5 12,-1.7 0.1,-0.6 0.2,-1.5 2.1,-3.7 2,-1.7 -0.2,-5.1 1.6,-1.6 1.1,-0.3 0.2,-3.6 1.5,-3 1.1,0.6 0.2,0.6 0.8,0.2 1.9,-1 -0.4,-9.1 -3.2,-8.2 -2.3,-9.1 -2.4,-3.2 -2.6,-1.8 -1.6,1.1 -3.9,1.8 -1.9,5 -2.7,3.7 -1.1,0.6 -1.5,-0.6 c0,0 -2.6,-1.5 -2.4,-2.1 0.2,-0.6 0.5,-5 0.5,-5 l3.4,-1.3 0.8,-3.4 0.6,-2.6 2.4,-1.6 -0.3,-10 -1.6,-2.3 -1.3,-0.8 -0.8,-2.1 0.8,-0.8 1.6,0.3 0.2,-1.6 -2.6,-2.2 -1.3,-2.6 h-2.6 l-4.5,-1.5 -5.5,-3.4 h-2.7 l-0.6,0.6 -1,-0.5 -3.1,-2.3 -2.9,1.8 -2.9,2.3 0.3,3.6 1,0.3 2.1,0.5 0.5,0.8 -2.6,0.8 -2.6,0.3 -1.5,1.8 -0.3,2.1 0.3,1.6 0.3,5.5 -3.6,2.1 -0.6,-0.2 v-4.2 l1.3,-2.4 0.6,-2.4 -0.8,-0.8 -1.9,0.8 -1,4.2 -2.7,1.1 -1.8,1.9 -0.2,1 0.6,0.8 -0.6,2.6 -2.3,0.5 v1.1 l0.8,2.4 -1.1,6.1 -1.6,4 0.6,4.7 0.5,1.1 -0.8,2.4 -0.3,0.8 -0.3,2.7 3.6,6 2.9,6.5 1.5,4.8 -0.8,4.7 -1,6 -2.4,5.2 -0.3,2.7 -3.2,3.1z m-33.3,-72.4 -1.3,-1.1 -1.8,-10.4 -3.7,-1.3 -1.7,-2.3 -12.6,-2.8 -2.8,-1.1 -8.1,-2.2 -7.8,-1 -3.9,-5.3 0.7,-0.5 2.7,-0.8 3.6,-2.3 v-1 l0.6,-0.6 6,-1 2.4,-1.9 4.4,-2.1 0.2,-1.3 1.9,-2.9 1.8,-0.8 1.3,-1.8 2.3,-2.3 4.4,-2.4 4.7,-0.5 1.1,1.1 -0.3,1 -3.7,1 -1.5,3.1 -2.3,0.8 -0.5,2.4 -2.4,3.2 -0.3,2.6 0.8,0.5 1,-1.1 3.6,-2.9 1.3,1.3 h2.3 l3.2,1 1.5,1.1 1.5,3.1 2.7,2.7 3.9,-0.2 1.5,-1 1.6,1.3 1.6,0.5 1.3,-0.8 h1.1 l1.6,-1 4,-3.6 3.4,-1.1 6.6,-0.3 4.5,-1.9 2.6,-1.3 1.5,0.2 v5.7 l0.5,0.3 2.9,0.8 1.9,-0.5 6.1,-1.6 1.1,-1.1 1.5,0.5 v7 l3.2,3.1 1.3,0.6 1.3,1 -1.3,0.3 -0.8,-0.3 -3.7,-0.5 -2.1,0.6 -2.3,-0.2 -3.2,1.5 h-1.8 l-5.8,-1.3 -5.2,0.2 -1.9,2.6 -7,0.6 -2.4,0.8 -1.1,3.1 -1.3,1.1 -0.5,-0.2 -1.5,-1.6 -4.5,2.4 h-0.6 l-1.1,-1.6 -0.8,0.2 -1.9,4.4 -1,4 -3.2,6.9z m-29.6,-56.5 1.8,-2.1 2.2,-0.8 5.4,-3.9 2.3,-0.6 0.5,0.5 -5.1,5.1 -3.3,1.9 -2.1,0.9z m86.2,32.1 0.6,2.5 3.2,0.2 1.3,-1.2 c0,0 -0.1,-1.5 -0.4,-1.6 -0.3,-0.2 -1.6,-1.9 -1.6,-1.9 l-2.2,0.2 -1.6,0.2 -0.3,1.1z" }),
            _react2.default.createElement("path", { id: "MN", fill: mapColors[23].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[23].raw, this.IDDict["MN"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M464.6,66.79 l-0.6,3.91 v10.27 l1.6,5.03 1.9,3.32 0.5,9.93 1.8,13.45 1.8,7.3 0.4,6.4 v5.3 l-1.6,1.8 -1.8,1.3 v1.5 l0.9,1.7 4.1,3.5 0.7,3.2 v35.9 l60.3,-0.6 21.2,-0.7 -0.5,-6 -1.8,-2.1 -7.2,-4.6 -3.6,-5.3 -3.4,-0.9 -2,-2.8 h-3.2 l-3.5,-3.8 -0.5,-7 0.1,-3.9 1.5,-3 -0.7,-2.7 -2.8,-3.1 2.2,-6.1 5.4,-4 1.2,-1.4 -0.2,-8 0.2,-3 2.6,-3 3.8,-2.9 1.3,-0.2 4.5,-5 1.8,-0.8 2.3,-3.9 2.4,-3.6 3.1,-2.6 4.8,-2 9.2,-4.1 3.9,-1.8 0.6,-2.3 -4.4,0.4 -0.7,1.1 h-0.6 l-1.8,-3.1 -8.9,0.3 -1,0.8 h-1 l-0.5,-1.3 -0.8,-1.8 -2.6,0.5 -3.2,3.2 -1.6,0.8 h-3.1 l-2.6,-1 v-2.1 l-1.3,-0.2 -0.5,0.5 -2.6,-1.3 -0.5,-2.9 -1.5,0.5 -0.5,1 -2.4,-0.5 -5.3,-2.4 -3.9,-2.6 h-2.9 l-1.3,-1 -2.3,0.6 -1.1,1.1 -0.3,1.3 h-4.8 v-2.1 l-6.3,-0.3 -0.3,-1.5 h-4.8 l-1.6,-1.6 -1.5,-6.1 -0.8,-5.5 -1.9,-0.8 -2.3,-0.5 -0.6,0.2 -0.3,8.2 -30.1,-0.03z" }),
            _react2.default.createElement("path", { id: "MO", fill: mapColors[24].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[24].raw, this.IDDict["MO"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M593.1,338.7 l0.5,-5.9 4.2,-3.4 1.9,-1 v-2.9 l0.7,-1.6 -1.1,-1.6 -2.4,0.3 -2.1,-2.5 -1.7,-4.5 0.9,-2.6 -2,-3.2 -1.8,-4.6 -4.6,-0.7 -6.8,-5.6 -2.2,-4.2 0.8,-3.3 2.2,-6 0.6,-3 -1.9,-1 -6.9,-0.6 -1.1,-1.9 v-4.1 l-5.3,-3.5 -7.2,-7.8 -2.3,-7.3 -0.5,-4.2 0.7,-2.4 -2.6,-3.1 -1.2,-2.4 -7.7,0.8 -10,0.6 -48.8,1.2 1.3,2.6 -0.1,2.2 2.3,3.6 3,3.9 3.1,3 2.6,0.2 1.4,1.1 v2.9 l-1.8,1.6 -0.5,2.3 2.1,3.2 2.4,3 2.6,2.1 1.3,11.6 -0.8,40 0.5,5.7 23.7,-0.2 23.3,-0.7 32.5,-1.3 2.2,3.7 -0.8,3.1 -3.1,2.5 -0.5,1.8 5.2,0.5 4.1,-1.1z" }),
            _react2.default.createElement("path", { id: "MS", fill: mapColors[25].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[25].raw, this.IDDict["MS"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M604.3,472.5 l2.6,-4.2 1.8,0.8 6.8,-1.9 2.1,0.3 1.5,0.8 h5.2 l0.4,-1.6 -1.7,-14.8 -2.8,-19 1,-45.1 -0.2,-16.7 0.2,-6.3 -4.8,0.3 -19.6,1.6 -13,0.4 -0.2,3.2 -2.8,1.3 -2.6,5.1 0.5,1.6 0.1,2.4 -2.9,1.1 -3.5,5.1 0.8,2.3 -3,2.5 -1,5.7 -0.6,1.9 1.6,2.5 -1.5,1.4 1.5,2.8 0.3,4.2 -1.2,2.5 -0.2,0.9 0.4,5 2,4.5 -0.1,1.7 2.3,2 -0.7,3.1 -0.9,0.3 0.6,1.9 -8.6,15 -0.8,8.2 0.5,1.5 24.2,-0.7 8.2,-0.7 1.9,-0.3 0.6,1.4 -1,7.1 3.3,3.3 2.2,6.4z" }),
            _react2.default.createElement("path", { id: "MT", fill: mapColors[26].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[26].raw, this.IDDict["MT"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M361.1,70.77 l-5.3,57.13 -1.3,15.2 -59.1,-6.6 -49,-7.1 -1.4,11.2 -1.9,-1.7 -0.4,-2.5 -1.3,-1.9 -3.3,1.5 -0.7,2.5 -2.3,0.3 -3.8,-1.6 -4.1,0.1 -2.4,0.7 -3.2,-1.5 -3,0.2 -2.1,1.9 -0.9,-0.6 -0.7,-3.4 0.7,-3.2 -2.7,-3.2 -3.3,-2.5 -2.5,-12.6 -0.1,-5.3 -1.6,-0.8 -0.6,1 -4.5,3.2 -1.2,-0.1 -2.3,-2.8 -0.2,-2.8 7,-17.15 -0.6,-2.67 -3.5,-1.12 -0.4,-0.91 -2.7,-3.5 -4.6,-10.41 -3.2,-1.58 -1.8,-4.26 1.3,-4.63 -3.2,-7.57 4.4,-21.29 32.7,6.89 18.4,3.4 32.3,5.3 29.3,4 29.2,3.5 30.8,3.07z" }),
            _react2.default.createElement("path", { id: "NC", fill: mapColors[27].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[27].raw, this.IDDict["NC"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M786.7,357.7 l-12.7,-7.7 -3.1,-0.8 -16.6,2.1 -1.6,-3 -2.8,-2.2 -16.7,0.5 -7.4,0.9 -9.2,4.5 -6.8,2.7 -6.5,1.2 -13.4,1.4 0.1,-4.1 1.7,-1.3 2.7,-0.7 0.7,-3.8 3.9,-2.5 3.9,-1.5 4.5,-3.7 4.4,-2.3 0.7,-3.2 4.1,-3.8 0.7,1 2.5,0.2 2.4,-3.6 1.7,-0.4 2.6,0.3 1.8,-4 2.5,-2.4 0.5,-1.8 0.1,-3.5 4.4,0.1 38.5,-5.6 57.5,-12.3 2,4.8 3.6,6.5 2.4,2.4 0.6,2.3 -2.4,0.2 0.8,0.6 -0.3,4.2 -2.6,1.3 -0.6,2.1 -1.3,2.9 -3.7,1.6 -2.4,-0.3 -1.5,-0.2 -1.6,-1.3 0.3,1.3 v1 h1.9 l0.8,1.3 -1.9,6.3 h4.2 l0.6,1.6 2.3,-2.3 1.3,-0.5 -1.9,3.6 -3.1,4.8 h-1.3 l-1.1,-0.5 -2.7,0.6 -5.2,2.4 -6.5,5.3 -3.4,4.7 -1.9,6.5 -0.5,2.4 -4.7,0.5 -5.1,1.5z m49.3,-26.2 2.6,-2.5 3.2,-2.6 1.5,-0.6 0.2,-2 -0.6,-6.1 -1.5,-2.3 -0.6,-1.9 0.7,-0.2 2.7,5.5 0.4,4.4 -0.2,3.4 -3.4,1.5 -2.8,2.4 -1.1,1.2z" }),
            _react2.default.createElement("path", { id: "ND", fill: mapColors[28].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[28].raw, this.IDDict["ND"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M471,126.4 l-0.4,-6.2 -1.8,-7.3 -1.8,-13.61 -0.5,-9.7 -1.9,-3.18 -1.6,-5.32 v-10.41 l0.6,-3.85 -1.8,-5.54 -28.6,-0.59 -18.6,-0.6 -26.5,-1.3 -25.2,-2.16 -0.9,14.42 -4.7,50.94 56.8,3.9 56.9,1.7z" }),
            _react2.default.createElement("path", { id: "NE", fill: mapColors[29].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[29].raw, this.IDDict["NE"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M470.3,204.3 l-1,-2.3 -0.5,-1.6 -2.9,-1.6 -4.8,-1.5 -2.2,-1.2 -2.6,0.1 -3.7,0.4 -4.2,1.2 -6,-4.1 -2.2,-2 -10.7,0.6 -41.5,-2.4 -35.6,-2.2 -4.3,43.7 33.1,3.3 -1.4,21.1 21.7,1 40.6,1.2 43.8,0.6 h4.5 l-2.2,-3 -2.6,-3.9 0.1,-2.3 -1.4,-2.7 -1.9,-5.2 -0.4,-6.7 -1.4,-4.1 -0.5,-5 -2.3,-3.7 -1,-4.7 -2.8,-7.9 -1,-5.3z" }),
            _react2.default.createElement("path", { id: "NH", fill: mapColors[30].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[30].raw, this.IDDict["NH"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M881.7,141.3 l1.1,-3.2 -2.7,-1.2 -0.5,-3.1 -4.1,-1.1 -0.3,-3 -11.7,-37.48 -0.7,0.08 -0.6,1.6 -0.6,-0.5 -1,-1 -1.5,1.9 -0.2,2.29 0.5,8.41 1.9,2.8 v4.3 l-3.9,4.8 -2.4,0.9 v0.7 l1.1,1.9 v8.6 l-0.8,9.2 -0.2,4.7 1,1.4 -0.2,4.7 -0.5,1.5 1,1.1 5.1,-1.2 13.8,-3.5 1.7,-2.9 4,-1.9z" }),
            _react2.default.createElement("path", { id: "NJ", fill: mapColors[31].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[31].raw, this.IDDict["NJ"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M823.7,228.3 l0.1,-1.5 2.7,-1.3 1.7,-2.8 1.7,-2.4 3.3,-3.2 v-1.2 l-6.1,-4.1 -1,-2.7 -2.7,-0.3 -0.1,-0.9 -0.7,-2.2 2.2,-1.1 0.2,-2.9 -1.3,-1.3 0.2,-1.2 1.9,-3.1 v-3.1 l2.5,-3.1 5.6,2.5 6.4,1.9 2.5,1.2 0.1,1.8 -0.5,2.7 0.4,4.5 -2.1,1.9 -1.1,1 0.5,0.5 2.7,-0.3 1.1,-0.8 1.6,3.4 0.2,9.4 0.6,1.1 -1.1,5.5 -3.1,6.5 -2.7,4 -0.8,4.8 -2.1,2.4 h-0.8 l-0.3,-2.7 0.8,-1 -0.2,-1.5 -4,-0.6 -4.8,-2.3 -3.2,-2.9 -1,-2z" }),
            _react2.default.createElement("path", { id: "NM", fill: mapColors[32].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[32].raw, this.IDDict["NM"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M270.2,429.4 l-16.7,-2.6 -1.2,9.6 -15.8,-2 6,-39.7 7,-53.2 4.4,-30.9 34,3.9 37.4,4.4 32,2.8 -0.3,10.8 -1.4,-0.1 -7.4,97.7 -28.4,-1.8 -38.1,-3.7 0.7,6.3z" }),
            _react2.default.createElement("path", { id: "NV", fill: mapColors[33].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[33].raw, this.IDDict["NV"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M123.1,173.6 l38.7,8.5 26,5.2 -10.6,53.1 -5.4,29.8 -3.3,15.5 -2.1,11.1 -2.6,16.4 -1.7,3.1 -1.6,-0.1 -1.2,-2.6 -2.8,-0.5 -1.3,-1.1 -1.8,0.1 -0.9,0.8 -1.8,1.3 -0.3,7.3 -0.3,1.5 -0.5,12.4 -1.1,1.8 -16.7,-25.5 -42.1,-62.1 -12.43,-19 8.55,-32.6 8.01,-31.3z" }),
            _react2.default.createElement("path", { id: "NY", fill: mapColors[34].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[34].raw, this.IDDict["NY"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M843.4,200 l0.5,-2.7 -0.2,-2.4 -3,-1.5 -6.5,-2 -6,-2.6 -0.6,-0.4 -2.7,-0.3 -2,-1.5 -2.1,-5.9 -3.3,-0.5 -2.4,-2.4 -38.4,8.1 -31.6,6 -0.5,-6.5 1.6,-1.2 1.3,-1.1 1,-1.6 1.8,-1.1 1.9,-1.8 0.5,-1.6 2.1,-2.7 1.1,-1 -0.2,-1 -1.3,-3.1 -1.8,-0.2 -1.9,-6.1 2.9,-1.8 4.4,-1.5 4,-1.3 3.2,-0.5 6.3,-0.2 1.9,1.3 1.6,0.2 2.1,-1.3 2.6,-1.1 5.2,-0.5 2.1,-1.8 1.8,-3.2 1.6,-1.9 h2.1 l1.9,-1.1 0.2,-2.3 -1.5,-2.1 -0.3,-1.5 1.1,-2.1 v-1.5 h-1.8 l-1.8,-0.8 -0.8,-1.1 -0.2,-2.6 5.8,-5.5 0.6,-0.8 1.5,-2.9 2.9,-4.5 2.7,-3.7 2.1,-2.4 2.4,-1.8 3.1,-1.2 5.5,-1.3 3.2,0.2 4.5,-1.5 7.4,-2.2 0.7,4.9 2.4,6.5 0.8,5 -1,4.2 2.6,4.5 0.8,2 -0.9,3.2 3.7,1.7 2.7,10.2 v5.8 l-0.6,10.9 0.8,5.4 0.7,3.6 1.5,7.3 v8.1 l-1.1,2.3 2.1,2.7 0.5,0.9 -1.9,1.8 0.3,1.3 1.3,-0.3 1.5,-1.3 2.3,-2.6 1.1,-0.6 1.6,0.6 2.3,0.2 7.9,-3.9 2.9,-2.7 1.3,-1.5 4.2,1.6 -3.4,3.6 -3.9,2.9 -7.1,5.3 -2.6,1 -5.8,1.9 -4,1.1 -1,-0.4z" }),
            _react2.default.createElement("path", { id: "OH", fill: mapColors[35].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[35].raw, this.IDDict["OH"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M663.8,211.2 l1.7,15.5 4.8,41.1 3.9,-0.2 2.3,-0.8 3.6,1.8 1.7,4.2 5.4,0.1 1.8,2 h1.7 l2.4,-1.4 3.1,0.5 1.5,1.3 1.8,-2 2.3,-1.4 2.4,-0.4 0.6,2.7 1.6,1 2.6,2 0.8,0.2 2,-0.1 1.2,-0.6 v-2.1 l1.7,-1.5 0.1,-4.8 1.1,-4.2 1.9,-1.3 1,0.7 1,1.1 0.7,0.2 0.4,-0.4 -0.9,-2.7 v-2.2 l1.1,-1.4 2.5,-3.6 1.3,-1.5 2.2,0.5 2.1,-1.5 3,-3.3 2.2,-3.7 0.2,-5.4 0.5,-5 v-4.6 l-1.2,-3.2 1.2,-1.8 1.3,-1.2 -0.6,-2.8 -4.3,-25.6 -6.2,3.7 -3.9,2.3 -3.4,3.7 -4,3.9 -3.2,0.8 -2.9,0.5 -5.5,2.6 -2.1,0.2 -3.4,-3.1 -5.2,0.6 -2.6,-1.5 -2.2,-1.3z" }),
            _react2.default.createElement("path", { id: "OK", fill: mapColors[36].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[36].raw, this.IDDict["OK"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M411.9,334.9 l-1.8,24.3 -0.9,18 0.2,1.6 4,3.6 1.7,0.9 h0.9 l0.9,-2.1 1.5,1.9 1.6,0.1 0.3,-0.2 0.2,-1.1 2.8,1.4 -0.4,3.5 3.8,0.5 2.5,1 4.2,0.6 2.3,1.6 2.5,-1.7 3.5,0.7 2.2,3.1 1.2,0.1 v2.3 l2.1,0.7 2.5,-2.1 1.8,0.6 2.7,0.1 0.7,2.3 4.4,1.8 1.7,-0.3 1.9,-4.2 h1.3 l1.1,2.1 4.2,0.8 3.4,1.3 3,0.8 1.6,-0.7 0.7,-2.7 h4.5 l1.9,0.9 2.7,-1.9 h1.4 l0.6,1.4 h3.6 l2,-1.8 2.3,0.6 1.7,2.2 3,1.7 3.4,0.9 1.9,1.2 -0.3,-37.6 -1.4,-10.9 -0.1,-8.6 -1.5,-6.6 -0.6,-6.8 0.1,-4.3 -12.6,0.3 -46.3,-0.5 -44.7,-2.1 -41.5,-1.8 -0.4,10.7z" }),
            _react2.default.createElement("path", { id: "OR", fill: mapColors[37].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[37].raw, this.IDDict["OR"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M67.44,158.9 l28.24,7.2 27.52,6.5 17,3.7 8.8,-35.1 1.2,-4.4 2.4,-5.5 -0.7,-1.3 -2.5,0.1 -1.3,-1.8 0.6,-1.5 0.4,-3.3 4.7,-5.7 1.9,-0.9 0.9,-0.8 0.7,-2.7 0.8,-1.1 3.9,-5.7 3.7,-4 0.2,-3.26 -3.4,-2.49 -1.2,-4.55 -13.1,-3.83 -15.3,-3.47 -14.8,0.37 -1.1,-1.31 -5.1,1.84 -4.5,-0.48 -2.4,-1.58 -1.3,0.54 -4.68,-0.29 -1.96,-1.43 -4.84,-1.77 -1.1,-0.07 -4.45,-1.27 -1.76,1.52 -6.26,-0.24 -5.31,-3.85 0.21,-9.28 -2.05,-3.5 -4.1,-0.6 -0.7,-2.5 -2.4,-0.5 -5.8,2.1 -2.3,6.5 -3.2,10 -3.2,6.5 -5,14.1 -6.5,13.6 -8.1,12.6 -1.9,2.9 -0.8,8.6 -1.3,6 2.71,3.5z" }),
            _react2.default.createElement("path", { id: "PA", fill: mapColors[38].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[38].raw, this.IDDict["PA"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M736.6,192.2 l1.3,-0.5 5.7,-5.5 0.7,6.9 33.5,-6.5 36.9,-7.8 2.3,2.3 3.1,0.4 2,5.6 2.4,1.9 2.8,0.4 0.1,0.1 -2.6,3.2 v3.1 l-1.9,3.1 -0.2,1.9 1.3,1.3 -0.2,1.9 -2.4,1.1 1,3.4 0.2,1.1 2.8,0.3 0.9,2.5 5.9,3.9 v0.4 l-3.1,3 -1.5,2.2 -1.7,2.8 -2.7,1.2 -1.4,0.3 -2.1,1.3 -1.6,1.4 -22.4,4.3 -38.7,7.8 -11.3,1.4 -3.9,0.7 -5.1,-22.4 -4.3,-25.9z" }),
            _react2.default.createElement("path", { id: "RI", fill: mapColors[39].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[39].raw, this.IDDict["RI"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M885.14,173.67 L874.11,180.83 L874.24,177.35 L870.84,165.41 L877.66,163.27 L880.47,168.67 L883.75,170.46z" }),
            _react2.default.createElement("path", { id: "SC", fill: mapColors[40].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[40].raw, this.IDDict["SC"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M759,413.6 l-2.1,-1 -1.9,-5.6 -2.5,-2.3 -2.5,-0.5 -1.5,-4.6 -3,-6.5 -4.2,-1.8 -1.9,-1.8 -1.2,-2.6 -2.4,-2 -2.3,-1.3 -2.2,-2.9 -3.2,-2.4 -4.4,-1.7 -0.4,-1.4 -2.3,-2.8 -0.5,-1.5 -3.8,-5.4 -3.4,0.1 -3.9,-2.5 -1.2,-1.2 -0.2,-1.4 0.6,-1.6 2.7,-1.3 -0.8,-2 6.4,-2.7 9.2,-4.5 7.1,-0.9 16.4,-0.5 2.3,1.9 1.8,3.5 4.6,-0.8 12.6,-1.5 2.7,0.8 12.5,7.4 10.1,8.3 -5.3,5.4 -2.6,6.1 -0.5,6.3 -1.6,0.8 -1.1,2.7 -2.4,0.6 -2.1,3.6 -2.7,2.7 -2.3,3.4 -1.6,0.8 -3.6,3.4 -2.9,0.2 1,3.2 -5,5.3 -2.3,1.6z" }),
            _react2.default.createElement("path", { id: "SD", fill: mapColors[41].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[41].raw, this.IDDict["SD"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M471,181.1 l-0.9,3.2 0.4,3 2.6,2 -1.2,5.4 -1.8,4.1 1.5,3.3 0.7,1.1 -1.3,0.1 -0.7,-1.6 -0.6,-2 -3.3,-1.8 -4.8,-1.5 -2.5,-1.3 -2.9,0.1 -3.9,0.4 -3.8,1.2 -5.3,-3.8 -2.7,-2.4 -10.9,0.8 -41.5,-2.4 -35.6,-2.2 1.5,-24.8 2.8,-34 0.4,-5 56.9,3.9 56.9,1.7 v2.7 l-1.3,1.5 -2,1.5 -0.1,2.2 1.1,2.2 4.1,3.4 0.5,2.7 v35.9z" }),
            _react2.default.createElement("path", { id: "TN", fill: mapColors[42].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[42].raw, this.IDDict["TN"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M670.8,359.6 l-13.1,1.2 -23.3,2.2 -37.6,2.7 -11.8,0.4 0.9,-0.6 0.9,-4.5 -1.2,-3.6 3.9,-2.3 0.4,-2.5 1.2,-4.3 3,-9.5 0.5,-5.6 0.3,-0.2 12.3,-0.2 13.6,-0.8 0.1,-3.9 3.5,-0.1 30.4,-3.3 54,-5.2 10.3,-1.5 7.6,-0.2 2.4,-1.9 1.3,0.3 -0.1,3.3 -0.4,1.6 -2.4,2.2 -1.6,3.6 -2,-0.4 -2.4,0.9 -2.2,3.3 -1.4,-0.2 -0.8,-1.2 -1.1,0.4 -4.3,4 -0.8,3.1 -4.2,2.2 -4.3,3.6 -3.8,1.5 -4.4,2.8 -0.6,3.6 -2.5,0.5 -2,1.7 -0.2,4.8z" }),
            _react2.default.createElement("path", { id: "TX", fill: mapColors[43].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[43].raw, this.IDDict["TX"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M282.8,425.6 l37,3.6 29.3,1.9 7.4,-97.7 54.4,2.4 -1.7,23.3 -1,18 0.2,2 4.4,4.1 2,1.1 h1.8 l0.5,-1.2 0.7,0.9 2.4,0.2 1.1,-0.6 v-0.2 l1,0.5 -0.4,3.7 4.5,0.7 2.4,0.9 4.2,0.7 2.6,1.8 2.8,-1.9 2.7,0.6 2.2,3.1 0.8,0.1 v2.1 l3.3,1.1 2.5,-2.1 1.5,0.5 2.1,0.1 0.6,2.1 5.2,2 2.3,-0.5 1.9,-4 h0.1 l1.1,1.9 4.6,0.9 3.4,1.3 3.2,1 2.4,-1.2 0.7,-2.3 h3.6 l2.1,1 3,-2 h0.4 l0.5,1.4 h4.7 l1.9,-1.8 1.3,0.4 1.7,2.1 3.3,1.9 3.4,1 2.5,1.4 2.7,2 3.1,-1.2 2.1,0.8 0.7,20 0.7,9.5 0.6,4.1 2.6,4.4 0.9,4.5 4.2,5.9 0.3,3.1 0.6,0.8 -0.7,7.7 -2.9,4.8 1.3,2.6 -0.5,2.4 -0.8,7.2 -1.3,3 0.3,4.2 -5.6,1.6 -9.9,4.5 -1,1.9 -2.6,1.9 -2.1,1.5 -1.3,0.8 -5.7,5.3 -2.7,2.1 -5.3,3.2 -5.7,2.4 -6.3,3.4 -1.8,1.5 -5.8,3.6 -3.4,0.6 -3.9,5.5 -4,0.3 -1,1.9 2.3,1.9 -1.5,5.5 -1.3,4.5 -1.1,3.9 -0.8,4.5 0.8,2.4 1.8,7 1,6.1 1.8,2.7 -1,1.5 -3.1,1.9 -5.7,-3.9 -5.5,-1.1 -1.3,0.5 -3.2,-0.6 -4.2,-3.1 -5.2,-1.1 -7.6,-3.4 -2.1,-3.9 -1.3,-6.5 -3.2,-1.9 -0.6,-2.3 0.6,-0.6 0.3,-3.4 -1.3,-0.6 -0.6,-1 1.3,-4.4 -1.6,-2.3 -3.2,-1.3 -3.4,-4.4 -3.6,-6.6 -4.2,-2.6 0.2,-1.9 -5.3,-12.3 -0.8,-4.2 -1.8,-1.9 -0.2,-1.5 -6,-5.3 -2.6,-3.1 v-1.1 l-2.6,-2.1 -6.8,-1.1 -7.4,-0.6 -3.1,-2.3 -4.5,1.8 -3.6,1.5 -2.3,3.2 -1,3.7 -4.4,6.1 -2.4,2.4 -2.6,-1 -1.8,-1.1 -1.9,-0.6 -3.9,-2.3 v-0.6 l-1.8,-1.9 -5.2,-2.1 -7.4,-7.8 -2.3,-4.7 v-8.1 l-3.2,-6.5 -0.5,-2.7 -1.6,-1 -1.1,-2.1 -5,-2.1 -1.3,-1.6 -7.1,-7.9 -1.3,-3.2 -4.7,-2.3 -1.5,-4.4 -2.6,-2.9 -1.7,-0.5z m174.4,141.7 -0.6,-7.1 -2.7,-7.2 -0.6,-7 1.5,-8.2 3.3,-6.9 3.5,-5.4 3.2,-3.6 0.6,0.2 -4.8,6.6 -4.4,6.5 -2,6.6 -0.3,5.2 0.9,6.1 2.6,7.2 0.5,5.2 0.2,1.5z" }),
            _react2.default.createElement("path", { id: "UT", fill: mapColors[44].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[44].raw, this.IDDict["UT"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M228.4,305.9 l24.6,3.6 1.9,-13.7 7,-50.5 2.3,-22 -32.2,-3.5 2.2,-13.1 1.8,-10.6 -34.7,-6.1 -12.5,-2.5 -10.6,52.9 -5.4,30 -3.3,15.4 -1.7,9.2z" }),
            _react2.default.createElement("path", { id: "VA", fill: mapColors[45].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[45].raw, this.IDDict["VA"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M834.7,265.2 l-0.2,2.8 -2.9,3.8 -0.4,4.6 0.5,3.4 -1.8,5 -2.2,1.9 -1.5,-4.6 0.4,-5.4 1.6,-4.2 0.7,-3.3 -0.1,-1.7z m-60.3,44.6 -38.6,5.6 -4.8,-0.1 -2.2,-0.3 -2.5,1.9 -7.3,0.1 -10.3,1.6 -6.7,0.6 4.1,-2.6 4.1,-2.3 v-2.1 l5.7,-7.3 4.1,-3.7 2.2,-2.5 3.6,4.3 3.8,0.9 2.7,-1 2,-1.5 2.4,1.2 4.6,-1.3 1.7,-4.4 2.4,0.7 3.2,-2.3 1.6,0.4 2.8,-3.2 0.2,-2.7 -0.8,-1.2 4.8,-10.5 1.8,-5.2 0.5,-4.7 0.7,-0.2 1.1,1.7 1.5,1.2 3.9,-0.2 1.7,-8.1 3,-0.6 0.8,-2.6 2.8,-2.2 1.1,-2.1 1.8,-4.3 0.1,-4.6 3.6,1.4 6.6,3.1 0.3,-5.2 3.4,1.2 -0.6,2.9 8.6,3.1 1.4,1.8 -0.8,3.3 -1.3,1.3 -0.5,1.7 0.5,2.4 2,1.3 3.9,1.4 2.9,1 4.9,0.9 2.2,2.1 3.2,0.4 0.9,1.2 -0.4,4.7 1.4,1.1 -0.5,1.9 1.2,0.8 -0.2,1.4 -2.7,-0.1 0.1,1.6 2.3,1.5 0.1,1.4 1.8,1.8 0.5,2.5 -2.6,1.4 1.6,1.5 5.8,-1.7 3.7,6.2z" }),
            _react2.default.createElement("path", { id: "VT", fill: mapColors[46].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[46].raw, this.IDDict["VT"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M832.7,111.3 l2.4,6.5 0.8,5.3 -1,3.9 2.5,4.4 0.9,2.3 -0.7,2.6 3.3,1.5 2.9,10.8 v5.3 l11.5,-2.1 -1,-1.1 0.6,-1.9 0.2,-4.3 -1,-1.4 0.2,-4.7 0.8,-9.3 v-8.5 l-1.1,-1.8 v-1.6 l2.8,-1.1 3.5,-4.4 v-3.6 l-1.9,-2.7 -0.3,-5.79 -26.1,6.79z" }),
            _react2.default.createElement("path", { id: "WA", fill: mapColors[47].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[47].raw, this.IDDict["WA"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M74.5,67.7 l-2.3,-4.3 -4.1,-0.7 -0.4,-2.4 -2.5,-0.6 -2.9,-0.5 -1.8,1 -2.3,-2.9 0.3,-2.9 2.7,-0.3 1.6,-4 -2.6,-1.1 0.2,-3.7 4.4,-0.6 -2.7,-2.7 -1.5,-7.1 0.6,-2.9 v-7.9 l-1.8,-3.2 2.3,-9.4 2.1,0.5 2.4,2.9 2.7,2.6 3.2,1.9 4.5,2.1 3.1,0.6 2.9,1.5 3.4,1 2.3,-0.2 v-2.4 l1.3,-1.1 2.1,-1.3 0.3,1.1 0.3,1.8 -2.3,0.5 -0.3,2.1 1.8,1.5 1.1,2.4 0.6,1.9 1.5,-0.2 0.2,-1.3 -1,-1.3 -0.5,-3.2 0.8,-1.8 -0.6,-1.5 v-2.6 l1.8,-3.6 -1.1,-2.6 -2.4,-4.8 0.3,-0.8 1.4,-0.8 4.4,1.5 9.7,2.7 8.6,1.9 20,5.7 23,5.7 15,3.49 -4.8,17.56 -4.5,20.83 -3.4,16.25 -0.4,9.18 v0 l-12.9,-3.72 -15.3,-3.47 -14.5,0.32 -1.1,-1.53 -5.7,2.09 -3.9,-0.42 -2.6,-1.79 -1.7,0.65 -4.15,-0.25 -1.72,-1.32 -5.16,-1.82 -1.18,-0.16 -4.8,-1.39 -1.92,1.65 -5.65,-0.25 -4.61,-3.35z m9.6,-55.4 2,-0.2 0.5,1.4 1.5,-1.6 h2.3 l0.8,1.5 -1.5,1.7 0.6,0.8 -0.7,2 -1.4,0.4 c0,0 -0.9,0.1 -0.9,-0.2 0,-0.3 1.5,-2.6 1.5,-2.6 l-1.7,-0.6 -0.3,1.5 -0.7,0.6 -1.5,-2.3z" }),
            _react2.default.createElement("path", { id: "WI", fill: mapColors[48].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[48].raw, this.IDDict["WI"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M541.4,109.9 l2.9,0.5 2.9,-0.6 7.4,-3.2 2.9,-1.9 2.1,-0.8 1.9,1.5 -1.1,1.1 -1.9,3.1 -0.6,1.9 1,0.6 1.8,-1 1.1,-0.2 2.7,0.8 0.6,1.1 1.1,0.2 0.6,-1.1 4,5.3 8.2,1.2 8.2,2.2 2.6,1.1 12.3,2.6 1.6,2.3 3.6,1.2 1.7,10.2 1.6,1.4 1.5,0.9 -1.1,2.3 -1.8,1.6 -2.1,4.7 -1.3,2.4 0.2,1.8 1.5,0.3 1.1,-1.9 1.5,-0.8 0.8,-2.3 1.9,-1.8 2.7,-4 4.2,-6.3 0.8,-0.5 0.3,1 -0.2,2.3 -2.9,6.8 -2.7,5.7 -0.5,3.2 -0.6,2.6 0.8,1.3 -0.2,2.7 -1.9,2.4 -0.5,1.8 0.6,3.6 0.6,3.4 -1.5,2.6 -0.8,2.9 -1,3.1 1.1,2.4 0.6,6.1 1.6,4.5 -0.2,3 -15.9,1.8 -17.5,1 h-12.7 l-0.7,-1.5 -2.9,-0.4 -2.6,-1.3 -2.3,-3.7 -0.3,-3.6 2,-2.9 -0.5,-1.4 -2.1,-2.2 -0.8,-3.3 -0.6,-6.8 -2.1,-2.5 -7,-4.5 -3.8,-5.4 -3.4,-1 -2.2,-2.8 h-3.2 l-2.9,-3.3 -0.5,-6.5 0.1,-3.8 1.5,-3.1 -0.8,-3.2 -2.5,-2.8 1.8,-5.4 5.2,-3.8 1.6,-1.9 -0.2,-8.1 0.2,-2.8 2.4,-2.8z" }),
            _react2.default.createElement("path", { id: "WV", fill: mapColors[49].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[49].raw, this.IDDict["WV"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M758.9,254.3 l5.8,-6 2.6,-0.8 1.6,-1.5 1.5,-2.2 1.1,0.3 3.1,-0.2 4.6,-3.6 1.5,-0.5 1.3,1 2.6,1.2 3,3 -0.4,4.3 -5.4,-2.6 -4.8,-1.8 -0.1,5.9 -2.6,5.7 -2.9,2.4 -0.8,2.3 -3,0.5 -1.7,8.1 -2.8,0.2 -1.1,-1 -1.2,-2 -2.2,0.5 -0.5,5.1 -1.8,5.1 -5,11 0.9,1.4 -0.1,2 -2.2,2.5 -1.6,-0.4 -3.1,2.3 -2.8,-0.8 -1.8,4.9 -3.8,1 -2.5,-1.3 -2.5,1.9 -2.3,0.7 -3.2,-0.8 -3.8,-4.5 -3.5,-2.2 -2.5,-2.5 -2.9,-3.7 -0.5,-2.3 -2.8,-1.7 -0.6,-1.3 -0.2,-5.6 0.3,0.1 2.4,-0.2 1.8,-1 v-2.2 l1.7,-1.5 0.1,-5.2 0.9,-3.6 1.1,-0.7 0.4,0.3 1,1.1 1.7,0.5 1.1,-1.3 -1,-3.1 v-1.6 l3.1,-4.6 1.2,-1.3 2,0.5 2.6,-1.8 3.1,-3.4 2.4,-4.1 0.2,-5.6 0.5,-4.8 v-4.9 l-1.1,-3 0.9,-1.3 0.8,-0.7 4.3,19.3 4.3,-0.8 11.2,-1.3z" }),
            _react2.default.createElement("path", { id: "WY", fill: mapColors[50].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[50].raw, this.IDDict["WY"]), onMouseOut: this.props.deactivateTooltip.bind(this),
              d: "M353,161.9 l-1.5,25.4 -4.4,44 -2.7,-0.3 -83.3,-9.1 -27.9,-3 2,-12 6.9,-41 3.8,-24.2 1.3,-11.2 48.2,7 59.1,6.5z" }),
            legend
          )
        )
      );
    }
  }]);

  return US;
}(_react2.default.Component);

exports.default = US;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _coloring = __webpack_require__(5);

var _coloring2 = _interopRequireDefault(_coloring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chile = function (_React$Component) {
  _inherits(Chile, _React$Component);

  function Chile() {
    _classCallCheck(this, Chile);

    var _this = _possibleConstructorReturn(this, (Chile.__proto__ || Object.getPrototypeOf(Chile)).call(this));

    _this.IDList = ["AI", "AN", "AP", "AR", "AT", "BI", "CO", "LI", "LL", "LR", "MA", "ML", "RM", "TA", "VS"];
    _this.IDDict = {
      "AI": "Aisen del General Carlos Ibanez del Campo",
      "AN": "Antofagasta",
      "AP": "Arica y Parinacota",
      "AR": "Araucania",
      "AT": "Atacama",
      "BI": "Bio-Bio",
      "CO": "Coquimbo",
      "LI": "Libertador General Bernardo O'Higgins",
      "LL": "Los Lagos",
      "LR": "Los Rios",
      "MA": "Magallanes y Antartica Chilena",
      "ML": "Maule",
      "RM": "Region Metropolitana de Santiago",
      "TA": "Tarapaca",
      "VS": "Valparaiso"
    };
    return _this;
  }

  _createClass(Chile, [{
    key: "getLegend",
    value: function getLegend(colors) {
      var legend = [];

      for (var i = 0; i < 10; i++) {
        legend.push(_react2.default.createElement("rect", { key: "rect" + i, x: i * 40, y: 8, height: 20, width: 40, fill: colors.colorGradient[i * 10].color }));
        if (i % 2 === 0) {
          legend.push(_react2.default.createElement(
            "text",
            { key: "label" + i, x: i * 40, y: 0, textAnchor: "middle" },
            parseFloat(colors.colorGradient[i * 10].weight.toFixed(2))
          ));
        }
      }
      legend.push(_react2.default.createElement(
        "text",
        { key: "endLabel", x: 400, y: 0, textAnchor: "middle" },
        parseFloat(colors.colorGradient[99].weight.toFixed(2))
      ));

      return _react2.default.createElement(
        "g",
        { transform: "translate(30, 675)" },
        legend
      );
    }
  }, {
    key: "render",
    value: function render() {

      var xScale = 1;
      var yScale = 1;
      if (this.props.width && this.props.height) {
        xScale = this.props.width / 650;
        yScale = this.props.height / 725;
      } else if (this.props.width) {
        xScale = this.props.width / 650;
        yScale = xScale;
      } else if (this.props.height) {
        yScale = this.props.height / 725;
        xScale = yScale;
      }

      var colors = new _coloring2.default(this.IDList, this.props.IDKey, this.props.weightKey, this.props.scale, this.props.data, this.props.colorKey, this.props.colorRange, this.props.colorCatgories);
      var mapColors = colors.generate();
      var legend = this.getLegend(colors);

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "svg",
          { width: 650 * xScale, height: 725 * yScale },
          _react2.default.createElement(
            "g",
            { transform: "scale(" + xScale + " " + yScale + ")" },
            _react2.default.createElement("path", { id: "CL-AI", title: "Ais\xE9n del General Carlos Ib\xE1\xF1ez del Campo", fill: mapColors[0].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[0].raw, this.IDDict["AI"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M520.19,472.64l0.22,-0.05l0.46,-0.97l-0.15,-0.4l-0.87,-0.18l-0.31,0.32l-0.38,0.06l-1.42,-0.67l-0.76,-0.91l-0.68,-0.71l-1.13,-0.91l-0.46,-0.18l-0.31,0.09l-0.42,0.48l-0.27,0.37l-0.53,0.07l-0.67,-0.08l-0.35,-0.08l-0.26,-0.23l-0.06,-0.46l0.21,-1.04l0.36,-0.09l0.86,-0.04l0.28,-0.13l0.51,-0.81l-0.98,-1.47l-0.41,-0.87l0.1,-0.73l0.31,-0.53l0.42,-0.19l0.29,-0.03l0.89,0.2l0.44,0l1.26,-0.45l2.85,-1.59l0.77,-0.67l1.73,-1.57l0.56,-1.19l0.42,-1.08l1.19,-3.31l0.09,-1.87l-0.78,0.72l-1.13,0.82l-1.49,-1.14l-1.14,-1.03v-0.56l-1.32,-0.62l-0.91,-0.29l-0.45,-0.06l-0.59,-0.12l-0.39,-0.23l-1.39,-1.47l-0.1,-0.62l0.14,-0.63l0.98,-0.92l1.04,-0.89l0.01,-0.75l0.49,-1.04l1.2,-2.42l0.37,0.01l0.64,-0.16l1.43,-0.49l-0.09,-0.54l0,0l0.94,0.02l0.29,0.23l0.89,0.23l2.75,0.47l0.2,-0.78l0.47,-0.7l0.61,-0.63l0.47,-0.33l0.68,0.27l0.07,0.83l1.09,1.82l0.3,0.13l0.64,0.06l0.42,0.29l0.47,0.6l0.26,0.53l0.11,0.77l1.99,-0.22l0.2,-0.79l2,-0.98l0.48,-0.02l1.07,0.5l0,0l0.71,0.97l0.03,0.43l-0.13,0.36l-1.3,2.02l-0.46,0.49l-0.55,1.55l0.25,0.55l0.09,0.5l-0.05,2.23l-0.65,0.47l-0.15,0.4l0.37,0.55l0.7,0.16l2.17,0.04l1.15,0l0.92,-0.15l1.13,-0.04l2.92,0.59l0.48,0.42l0.75,1.67l-0.18,0.67l-0.33,0.36l-0.64,0.1l-0.6,1.42l0.06,0.5l0.1,0.57l-0.08,0.59l-0.74,1.03l-0.39,0.11l-0.49,0l-0.43,-0.14l-0.37,-0.19l-0.67,-0.51l-0.41,-0.29l-0.29,-0.07l-0.38,0l-0.53,0.21l-0.75,0.4l-0.29,0.11l-0.35,0.06l-0.28,-0.11l-0.29,-0.14l-0.3,-0.12l-0.81,-0.18l-0.34,0.16l-0.26,0.44l-0.39,0.15l-1.57,-0.19l-0.32,-0.14l-0.29,-0.14l-0.36,-0.2l-0.4,-0.1l-0.4,0.25l-0.09,0.41l0.21,2.29l1.88,0.41l1.82,0.17l0.94,0.13l2.25,0.77l0.48,0.48l0.73,1.53l2.4,3.13l0.44,1.49l-2.4,3.48l-1.97,0.91l-0.33,-0.02l-0.29,0.05l-0.32,0.08l-0.57,0.22l-0.54,0.4l-0.45,1.95l-0.15,1.5l0.55,2.44l0.42,0.26l0.43,0.14l0.64,0.3l0.29,0.41l0.35,1.5l-0.49,0.41l-0.09,0.05l-0.3,0.27l-0.48,0.65l-0.3,0.49l-0.28,0.58l-0.36,0.42l-0.38,0.17l-0.44,0.1l-0.38,0.04l-0.72,0.34l0.95,1.06l0.49,0.18l0.48,0.24l0.29,0.52l0.08,0.5l0.23,3.27l0.5,1.24l0.27,0.98l0.06,2.36l-0.09,0.65l-0.19,0.39l-1.81,1.72l-0.52,0.22l-0.96,0.07l-0.31,0.33l-0.53,4.53l1.19,1.69l0.43,0.5l0.14,0.69l-0.22,0.96l-0.21,0.3l-1.91,0.93l-0.91,1.58l-1.1,1.22l-0.5,0.16l-0.51,-0.17l-0.38,0.01l-0.52,0.19l-0.29,0.13l-0.31,0.19l-0.21,0.31l-0.13,0.59l0.25,0.25l0.48,0.33l-0.3,1.9l-0.14,0.46l-0.19,0.4l-0.73,1.16l-0.35,0.61l-0.39,0.89l-1.13,3.22l0.05,0.55l0.23,0.42l0.52,0.58l0.4,0.27l0.61,0.15l1.21,1.49l0.31,2.38l0.12,3.35l-1.91,1.23l-0.92,0.37l-0.94,0.52l-0.3,0.21l-0.25,0.35l-0.12,0.45l0.34,1.51l0.09,0.48l0.18,1.38l0.13,1.71l0,0.98l-0.13,0.49l-0.37,0.54l-1.73,1.71l-0.4,0.35l-0.26,0.18l-0.37,0.21l-0.42,0.17l-0.65,0.13l-0.56,-0.03l-0.28,0.08l-0.51,0.22l-0.44,0.3l-0.34,0.43l-1.01,1.5l-1.41,3.34l0.03,0.46l0.1,0.21l0,0l-0.24,-0.17l-4.21,-3.63l-3.39,-2.93l-4.92,-4.28l0,0l-0.04,-0.2l-0.69,-0.44l-0.78,-0.16l-0.39,0.02l-0.52,0.2l-0.3,0.14l-0.31,0.13l-0.52,-0.04l-0.82,-1.08l-0.37,-1.4l0.64,-0.93l1.4,-1.45l0.75,-0.52l0.73,0.44l1.47,1.08l0.28,-0.3l0.09,-2.57l-1.26,-0.41l-0.37,-0.48l-0.25,-0.25l-0.32,-0.06l-0.81,-0.12l0.36,-0.38l1.25,-0.3l-2.07,-0.79l-1.91,-1.73l-1.29,-1.49l-1.33,-0.98l-0.54,-0.01l-0.37,-0.16l-0.15,-1l0.36,-0.62l1.5,-0.92l1.59,0.65l0.93,0.74l0.29,0.5l0.2,0.44l0.26,0.8l0.28,1.8l0.88,0.91l0.43,-0.13l-1.09,-2.71l-0.87,-1.57l-0.08,-0.41l0.37,-0.21l1.47,-0.06l1.75,0.07l0.36,0.26l0.44,0.54l0.8,0.31l1.5,-0.02l1.22,-0.36l2.54,2.29l0.05,1.02l0.51,1.29l0.2,-0.79l0.67,-0.7l0.69,0.06l0.33,0.12l0.37,0.24l0.64,0.04l0.69,-0.63l0.23,-0.29l0.11,-0.58l0.04,-0.71l-0.19,-0.47l-0.11,1.14l-0.27,0.4l-0.58,0.45l-0.28,0.06l-0.37,-0.16l-1.22,-0.8l-1.32,-1.53l-0.94,-1.39l-0.13,-1.61l1.19,0l0.12,0.68l0.47,0.62l0.26,0.18l0.31,0.14l0.72,0.2l2.99,0.18l-0.62,-0.53l-0.99,-0.31l-0.49,-0.02l-0.37,0.05l-0.5,0.13l-0.54,-0.1l-0.62,-0.46l-2.81,-3.47l-0.42,-1.06l0.08,-0.55l0.29,-0.43l0.44,-0.44l0.41,-0.61l-0.27,-1.39l-0.7,-0.75l-0.65,1.34l0.55,0.4l0.08,0.47l-0.61,3.16l-0.28,0.31l-0.35,0.23l-1.69,0.74l-1.15,-0.23l-0.27,-0.14l-0.36,-0.89l-0.45,-0.08l-0.7,-0.03l-2.39,-0.49l-1.13,-0.26l-1.22,0.35l-0.36,0.21l-0.69,0.12l-1.02,-0.16l-0.39,-0.14l-0.96,-0.5l-0.39,-0.63l1.95,-2.96l0.62,-0.42l0.29,-0.05l1.23,0.13l0.39,0.14l0.78,0.66l0.32,1.08l0.5,1.34l0.58,0.69l0.5,0.25l0.53,0.07l0.34,-0.15l-0.4,0.01l-0.72,-0.23l-0.39,-0.41l-0.23,-0.8l0.59,-1.01l1.27,-0.33l0.75,0.32h0.37l0.61,-0.26l-0.22,-1.69l-0.98,0.51l-0.52,0.54l-1.67,0.36l-0.28,-0.07l-3.01,-3.16l-0.16,-0.39l0.78,-1.41l1.47,-1.47l0.32,-0.65l0.2,-0.46l0.19,-0.49l1.79,-0.29l0.3,0.16l0.14,0.58l0.02,0.72l0.67,1.37l0.12,0.12l-0.12,-0.3l-0.39,-1.25l0,-0.53l0.14,-0.7l0.18,-0.34l1.04,-1.02l1.53,-2.4l-1.09,-1.09l-0.32,-0.14l-0.32,-0.03l-0.28,0.15l-0.42,0.26l-0.42,-0.14l-1.55,-2.39l-0.25,-1.23l-0.02,-0.51l-1.05,-0.44l-3.97,0.4l-0.05,1.17l0.44,-0.11l0.58,-0.02l1.61,0.49l-0.17,0.56l-0.4,0.32l-0.38,0.02l-0.9,-0.11l-1.12,-0.5l-3.43,-1.64l-1.72,-0.87l-0.95,-1.94l-0.04,-0.6l0.19,-0.48l0.77,-0.98l0.99,-1.01l-0.07,-1.38l-0.32,0.52l-0.23,0.66l-1.39,1.52l-0.54,0.45l-0.98,0.64l-2.31,0.66l-0.58,-0.13l-0.57,-0.05l-1.04,0.33l-0.93,0.45l-0.39,0.32l-0.78,1.32l0.29,0.32l0.69,-0.58l1.56,-1.07l0.39,0.03l0.38,0.24l1.1,3.39l-0.13,0.52l-0.87,0.62l-0.77,0.34l-0.3,0.12l-0.12,0.02l-0.14,-0.02l-0.87,-0.29l-1.05,-1.26l-0.98,-1.81l-0.1,-1.41l0.18,-1.88l0.89,-1.33l0.28,-0.05l0.35,0.03l0.46,0.07l0.66,-0.35l1.77,-1.56l-0.1,-0.72l0.65,-0.76l0.34,-0.31l0.95,-0.51l0.63,0.59l0.03,0.25l0.06,-1.23l0.22,-1l1.58,-1.74l0.59,-0.06l1.28,0.05l1.92,-2.1l0.47,-1.14l0.93,-2.73l0.49,-1.67l0.21,-0.29l3.1,-0.39l1.26,-0.31l0.48,0.17l0.27,0.71l0.74,-0.5l1.53,-0.24l0.28,0.22l0.36,0.53l0.75,2.25l-0.39,2.15l-0.21,0.59l-0.33,0.62l-0.31,0.33l-0.24,0.23l0.32,-0.04l0.9,-0.74l0.27,-1.07l-0.03,-0.43l-0.12,-0.45l0.18,-0.38l1.11,1.09l0.1,0.44l-0.04,0.59l-0.19,0.54l-0.19,0.32l-0.37,0.41l-0.71,0.63l-0.75,0.44l-0.94,0.44l-1.67,0.5l-0.44,0.04l-0.43,-0.19l-0.62,-0.46l-0.34,-0.3l-0.63,-0.42l1.19,1.23l0.32,0.25l0.27,0.17l0.38,0.02l1.41,-0.37l1.13,-0.33l0.45,-0.25l0.74,-0.36l0.34,-0.07l0.59,1.89l1.48,0.98l0.41,0.18l0.13,0.02l0.15,-0.21l-0.39,-0.59l-0.35,-0.23l-0.46,-0.33l-1.15,-1.39l0.47,-1.13l0.33,-0.31l0.97,-0.09l1.85,2.1l-0.06,1.13l-0.14,0.76l-0.21,0.6l-0.24,0.49l-1.02,1.28l-0.45,0.48l-1.17,1.8l1.16,0.89l0.54,0.02l0.4,-0.24l0.22,-0.29l0.75,-1.66l0.18,-0.47l0.32,-1.1l2.44,-3.04l0.56,-1.72l1.52,-2.35l-0.25,-0.23l-1.37,1.94l-0.58,1.01l-0.25,0.69l-0.43,0.87l-0.38,0.47l-0.48,0.17l-0.05,-0.91l0.1,-0.42l0.49,-1.05l0.22,-0.8l0.17,-0.87l0.04,-0.68l-0.36,-1.22l-0.29,-0.9l1.74,-3.47l1.45,-1.68l0.27,-0.29l0.45,-0.39l0.38,-0.17l0.29,-0.04l0.72,0l0.79,0.09l0.45,-0.09l0.3,-0.32l-1.95,-0.66l-0.55,0.06l-0.61,0.21l-0.49,0.41l-0.4,0.75l-0.2,0.3l-1.14,1.1l-0.29,0.07l0.14,-1.87l0.79,-4.67l1.67,-1.57l1.46,-1.06l1.13,-0.48l0.44,0.42l0.1,0.64l0.44,0.46l0.6,0.52l1.26,0.93l0.91,0.32L520.19,472.64zM520.26,457.88l-0.06,0.08l-0.7,0.54l-0.66,0.35l-0.96,1.03l-0.15,0.31l-0.16,0.26l-0.13,0.14l-0.95,0.76l-0.87,0.41l-0.4,0.14l-0.51,0.08l-0.23,-0.04l-0.21,-0.14l-1.51,-1.75l-0.11,-0.22l-0.03,-0.23l0.1,-0.19l1.4,-0.51l0.25,0.1l0.15,0.12l0.23,0.25l0.6,-0.14l0.13,-0.1l-0.38,-0.35l-0.92,-0.4l-0.59,0.37l-0.16,0.19l-0.15,0.13l-0.17,0.01l-0.22,-0.13l-0.15,-0.19l-0.46,-0.95l-0.19,-0.48l-0.26,-1.27l0.56,-0.84l0.12,-0.15l0.43,-0.09l0.16,0.03l1.39,-0.26l0.18,-0.92l0.06,-0.78l-0.03,-0.29l0.05,-0.24l0.28,-0.78l0.15,-0.2l0.18,-0.08l1.81,-0.6l1.27,-0.31l0.16,0.05l1.69,1.38l1.13,0.4l0.27,0.22l0.62,1.06l0.1,0.23l-0.04,0.23l-1.1,1.61l-0.13,0.14l-0.16,0.11l-0.27,0.06l-0.9,-0.09l-0.16,-0.12l-0.19,-0.22l-0.75,-0.28l0.02,0.27l0.13,0.21l0.86,0.59l0.43,0.14l0.57,0.12l0.12,0.31l-0.2,0.43l-0.22,0.34L520.26,457.88zM487.11,539.87l-0.17,0.12l-0.34,0.1l-0.64,-1.54l-0.21,-1.04l-0.31,-2.03l0.04,-0.34l0.31,-0.9l-1.44,-0.86l-0.91,0.47l-0.21,0.07l-0.34,0.08L482.6,534l-0.19,-0.05l-0.27,-0.18l-0.1,-0.19l-0.03,-0.25l0.07,-0.25l0.28,-0.24l0.26,-0.18l0.4,-0.17l0.51,-0.04l0.36,-0.05l0.22,-0.07l0.28,-0.15l0.23,-0.21l0.24,-0.36l0.17,-0.34l-0.19,-0.06l-0.66,0.4l-1.88,0.23l-0.16,-0.25l-0.52,-4.63l0.09,-0.24l0.59,-0.75l0.41,-0.32l2.07,-0.58l0.25,0.05l0.17,0.2l0.87,2.74l0.1,0.37l0.1,1.25l0.51,1.64l0.34,0.94l0.41,0.47l0.52,0.92l0.74,2.11l0.16,1.85l-0.1,0.4l-0.12,0.19L487.11,539.87zM495.33,539.71l-1.74,-1.25h-0.25l-0.24,0.12l-0.22,0.07l-0.27,0.01l-1.66,-0.35l-0.92,-0.53l-0.2,-0.17l-0.08,-0.21l-0.23,-1.57l0.06,-0.4l0.13,-0.25l0.12,-0.18l1.02,-1.14l0.23,-0.13l0.93,-0.11l0.17,0.04l0.12,0.29l0.3,0.49l0.06,0.29l0.12,0.24l0.63,0.53l0.68,-0.84l0.04,-0.23l-0.18,-0.26l-0.14,-0.09l-0.41,-0.09l-0.49,-0.93l-0.11,-0.25l-0.17,-0.8l0,-0.27l0.03,-0.29l0.61,-3.16l0.13,-0.33l0.11,-0.19l0.18,-0.18l0.17,0.09l0.27,0.38l0.1,0.19l0.06,0.35l0,0.4l0.08,0.83l0.17,1.5l1.3,2.32l-0.29,1.01l0,1.24l0.07,0.96l0.09,0.37l0.7,0.95l0.2,0.05l0.13,-0.17l0,-0.21l-0.08,-0.21l0.01,-0.25l0.18,-0.08l0.15,0.07l0.17,0.13l0.13,0.16l0.03,0.31l-0.11,0.6l-0.09,0.38l-0.12,0.18l-0.16,0.14l-0.73,0.46l-0.26,0.1l-0.3,0.02L495.33,539.71zM489.6,534.4l-0.2,-0.01l-0.19,-0.1l-2.02,-4.49l-0.89,-2.71l0.05,-0.62l0.48,-0.05l0.92,0.2l1.66,0.41l0.39,0.21l1.19,0.97l1.6,0.41l0.16,0.2l0.03,0.35l-0.04,0.44l-0.48,3.08l-0.12,0.18l-0.21,0.08l-0.4,-0.02l-0.74,0.5l-0.34,0.25l-0.4,0.33L489.6,534.4zM508.01,468.84l-0.87,-0.28l-0.53,-0.63l-0.6,-0.02l-0.8,0.21l-0.25,0.01l-0.55,-0.04l-0.19,-0.09l-0.16,-0.12l-0.15,-0.26l-1.28,-1.49l-0.44,0.24l-0.96,0.22l-0.23,-0.05l-0.14,-0.14l-0.09,-0.5l-0.08,-0.64l0.01,-0.2l0.1,-0.41l0.21,-0.28l0.49,-0.49l0.19,-0.16l0.27,-0.06l0.33,0.02l0.14,0.08l0.26,0.09l0.65,-0.06l1.11,-0.2l0.31,-0.09l0.53,-0.34l0.17,-0.13l0.22,-0.05l0.31,0.05l0.26,0.09l0.15,0.08l0.87,0.67l0.14,0.14l0.13,0.15l0.11,0.16l0.57,0.93l0.22,0.58l0.02,0.24l-0.01,0.26l-0.04,0.55L508.01,468.84zM499.67,524.6l-0.53,-0.28l-1.75,-0.72l-0.27,-0.24l-0.01,-0.24l1.15,-1.28l0.15,-0.15l0.26,-0.16l1.35,-0.72l0.28,-0.07l3.2,1.07l1.71,0.7l0.38,0.05l0.21,-0.07l0.43,-0.37l0.18,-0.11l0.15,0.01l0.18,0.12l0.23,0.28l0.06,0.22l-0.08,0.3l-0.27,0.8l-0.26,0.17l-0.47,0.17l-0.2,0.02l-0.53,0.02l-1.53,-0.01l-0.28,-0.04l-0.33,-0.13l-0.2,-0.11l-0.31,-0.06l-0.19,0.02l-2.3,0.66L499.67,524.6zM500.45,459.27l-0.26,-0.04l-0.39,-0.14l-0.26,-0.16l-0.15,-0.12l-0.21,-0.21l-0.31,-0.41l-0.56,-1.22l-0.01,-0.25l0.04,-0.85l0.17,-0.17l1.94,-0.51l0.22,-0.04l1.25,0.01l2.27,0.13l0.48,0.16l0.19,0.09l0.34,0.22l0.14,0.13l0.19,0.22l0.37,0.58l0.08,0.3l-2.02,0.55l-2.41,1.07l-0.35,0.19L500.45,459.27zM488.95,485.34l-0.17,-0.18l-0.1,-0.24l-0.16,-0.64l0.08,-0.22l0.16,-0.12l1.68,-0.47l0.2,0.09l-0.11,-0.44l-0.36,-0.09l-0.39,0.15l-0.52,0.04l-0.23,-0.06l-0.13,-0.29l-0.52,-1.83l0.08,-0.2l0.23,-0.19l0.31,-0.09l1.3,0.52l0.19,0.1l0.24,0.19l0.88,-0.5l1.21,-1.11l0.74,-0.36l0.33,-0.05l0.15,0.34v0.33l-0.06,0.32l-0.66,2.83l-0.09,0.2l-0.11,0.18l-0.38,0.48l-1.52,1.47l-0.23,0.12l-1.01,0.08l-0.34,-0.04l-0.51,-0.17L488.95,485.34zM481.36,539.64l0.37,-0.51l0.44,0.09l0.4,-0.12l0.22,-0.05l0.38,-0.2l0.16,-0.13l0.27,-0.33l0.08,-0.29l-0.13,-0.13l-0.26,0.25l-0.24,0.21l-0.19,0.1l-0.3,0.05l-0.2,0l-0.97,-0.11l-0.67,-0.34l-0.28,-0.64l0.27,-2.29l0.42,-0.76l0.28,-0.07l3.03,-0.29l0.69,0.14l0.08,0.31l0.28,3.03l-0.07,0.23l-0.66,0.6l-0.32,0.27l-0.91,0.71l-0.43,0.3l-0.19,0.1l-0.22,0.07l-0.43,0.05l-0.51,-0.04l-0.28,-0.11L481.36,539.64zM497.67,478.85l-0.22,-0.08l-0.16,-0.27l-0.15,-0.38l-0.03,-0.27l0.12,-0.24l0.33,-0.38l0.25,-0.36l0.01,-0.78l-0.14,-0.86l-0.14,-0.64l0,-0.32l0.03,-0.28l0.07,-0.37l0.06,-0.23l0.15,-0.44l0.19,-0.39l0.23,-0.37l0.32,-0.12l1.31,0.63l0.24,0.19l0.15,0.19l0.29,0.59l0.14,0.41l0.33,1.05l0.17,0.83l-0.27,0.75l-0.12,0.17l-2.2,1.72l-0.17,0.11L497.67,478.85zM491.57,526.43l-0.2,-0.01l-0.77,-0.24l-0.87,-0.39l-0.19,-0.11l-0.11,-0.25l0.21,-0.42l-0.29,-0.25l-0.38,-0.09l-0.38,0.03l-0.28,0.17l-0.32,0.39l-0.24,0.37l-0.21,0.07l-0.35,0.07l-0.49,0.05l-0.3,-0.06l-0.2,-0.19l0.82,-1.19l0.4,-0.33l0.17,-0.12l0.97,-0.29l0.45,-0.11l0.28,0.01l1.28,-0.88l0.98,-1.39l0.83,-0.42l0.21,0.15l0.11,0.72l0.02,0.25l0.02,0.79l-0.03,2.98l-0.75,0.57l-0.14,0.08L491.57,526.43zM509.13,478.48l-0.13,-0.02l-0.25,-0.15l-1.47,-1.67l-0.07,-2.15l0,-0.32l0.04,-0.33l0.08,-0.22l0.15,-0.28l0.77,-1.14l0.15,-0.12l0.29,-0.05l0.25,0.02l1.04,0.34l0.15,0.23l0.04,0.71l-0.47,3.87l-0.33,1.06l-0.15,0.21L509.13,478.48zM500.25,463.74l-0.14,-0.01l-1.04,-0.28l-0.07,-0.18l0.2,-0.51l2.15,-2.08l0.21,-0.15l0.26,-0.08l0.26,0.01l2.57,0.67l0.18,0.17l0.54,0.69l0.1,0.24l-0.16,0.18l-0.51,0.31l-0.3,0.1l-0.88,0.25l-0.24,0.02l-1.13,-0.01l-0.73,-0.06l-0.26,0.08l-0.17,0.09L500.25,463.74zM507.81,457.99l-0.19,-0.01l-0.9,-1.26l-0.05,-1.9l0.06,-0.31l0.21,-0.19l1.38,-0.34l0.24,0.02l0.24,0.12l0.23,0.22l0.45,1.15l0.54,1.66l-0.03,0.21l-0.16,0.11l-1.55,0.48L507.81,457.99zM504.29,442.06l-0.38,-0.44l-1.42,-0.43l-0.66,-0.26l-0.11,-0.16l0.29,-1.07l0.18,-0.19l0.23,-0.11l0.86,0.11l0.23,0.06l1.88,-0.28l0.79,-0.7l1,1.13l0.29,0.89l0.08,0.44l-1.28,0.11l-0.19,-0.18l-0.24,-0.1l-0.07,-0.2l0.21,-0.17l0.14,-0.18l-0.21,-0.15l-0.38,-0.05l-0.83,0.21l-0.08,0.43l0.17,0.2l0.05,0.22l0.35,0.2l-0.45,0.56l-0.24,0.09L504.29,442.06zM504.18,470.3l-0.19,-0.03l-1.7,-0.65l-0.15,-0.19l-0.32,-1.28l0.32,-0.42l0.87,-0.38l0.22,-0.02l0.2,0.09l0.13,0.15l0.18,0.55l0.13,0.15l0.17,0.11l0.23,0.06l0.25,0.04l0.53,0.02l0.25,-0.01l0.51,-0.1l0.4,-0.06l0.38,0.06l0.19,0.1l0.14,0.13l0.2,0.35l0.13,0.4l0.03,0.38l-0.15,0.31l-0.14,0.06l-1.04,0.01l-1.23,0.04L504.18,470.3zM496.71,532.17l-0.13,-0.09l-0.88,-1.9l-0.04,-0.24l-0.02,-0.38l-0.01,-0.53l0.02,-0.8l0.49,-0.72l0.24,0l0.28,0.24l0.45,0.44l1.54,1.56l0.34,0.69l-0.58,0.85l-0.16,0.14L496.71,532.17zM507.42,487.68l-0.46,-0.43l-0.13,-0.15l-1.71,-2.29l0.01,-0.34l0.19,-0.55l0.16,-0.19l0.2,-0.07l0.67,-0.03l0.26,0.03l1.27,0.56l0.61,0.46l0.2,0.23l0.08,0.35l-0.1,0.37l-0.77,1.53l-0.2,0.38l-0.17,0.11L507.42,487.68zM498.48,454.15l-1.58,-0.38l-0.25,-0.23l-0.08,-0.19l-0.18,-0.67l0.09,-0.29l0.31,-0.34l0.2,-0.14l2.72,-0.83l0.71,0.24l0.49,0.81l0.16,0.31l-0.01,0.21l-0.34,0.12l-1.26,0.32l-0.96,0.21l-0.19,0.08L498.48,454.15zM504.38,477.74h-0.13l-0.75,-0.14l-0.18,-0.17l-0.44,-1.13l-0.27,-0.74l-0.01,-0.42l0.71,-0.89l0.47,-0.29l0.24,-0.02l0.68,0.36l0.66,0.67l0.29,0.6l0.01,0.32l-0.12,0.62l-0.28,0.77L504.38,477.74zM481.25,541.96l-0.13,-0.02l-0.17,-0.08l-0.22,-0.25l-0.07,-0.31l0.1,-1.31l0.34,-0.04l0.64,0.29l0.64,0.16l0.28,0.04l0.23,-0.05l0.16,-0.13l0.85,-0.78l1.11,-0.98l0.67,0.47l0.2,0.58l0.06,0.23l0.03,0.31l-0.28,0.42l-0.24,0.2l-2.46,0.91L481.25,541.96zM502.21,474.8l-0.07,-0.13l0.02,-0.23l0.07,-0.54l0.07,-0.31l0.13,-0.16l0.21,-0.16l0.01,-0.43l0.12,-0.27l0.19,-0.26l0.14,-0.26l0.08,-0.22l0.17,-0.18l0.21,-0.03l0.2,0.13l0.19,0.1l0.26,0.03l0.32,-0.01l0.16,0.06l0.16,0.12l0.13,0.15l0.39,0.19l0.19,0.16l0.19,0.1l0.21,-0.05l0.35,-0.28l0.24,-0.09l0.22,0.17l0.06,0.31l-0.1,0.41l-0.15,0.35l-0.1,0.27l-0.25,0.42l-0.08,0.4l-0.19,0.05l-0.29,-0.2l-0.14,-0.01l-0.22,-0.07l-0.25,-0.37l-0.29,-0.08l-0.28,-0.02l-0.46,-0.2l-0.47,-0.11l-0.15,0.05l-0.23,0.19l-0.32,0.09l-0.22,0.23l-0.15,0.39l-0.13,0.23L502.21,474.8zM501.76,507.58l-0.18,-0.12l-0.63,-0.81l-0.02,-0.28l0.02,-0.28l0.46,-1.35l0.13,-0.23l0.15,-0.13l0.16,-0.05l1.85,0.1l0.81,0.63l-1.16,1.65l-0.32,0.34l-0.16,0.13l-0.18,0.1l-0.71,0.25L501.76,507.58zM506.4,462.27l-0.54,-0.53l-0.45,-0.52l-0.15,-0.26l-0.08,-0.18l-0.1,-1.48l0.09,-0.31l0.22,-0.26l0.21,-0.13l0.21,-0.05l0.31,-0.02l0.29,0.13l0.14,0.2l0.9,2.31l0.07,0.61l-0.08,0.27l-0.1,0.19l-0.22,0.19l-0.28,0.05l-0.18,-0.04l-0.19,-0.09L506.4,462.27zM500.31,534.9l-0.2,-0.3l-0.15,-0.14l-0.26,-0.19l-1,-0.67l-0.3,-0.16l-0.72,-0.28l-0.2,-0.17l-0.21,-0.3l-0.06,-0.22l1.84,-1.4l0.24,-0.12l0.19,-0.02l0.31,0.08l0.2,0.24l-0.01,0.35l-0.2,0.61l-0.01,0.26l0.17,0.33l0.41,0.63l0.27,0.31l0.3,0.23l0.2,0.21l-0.07,0.29l-0.16,0.14l-0.4,0.25L500.31,534.9zM494.21,477.89l-0.04,-0.23l-0.01,-0.38l0.05,-0.25l0.26,-1.07l0.09,-0.2l0.1,-0.19l0.19,-0.24l0.15,-0.12l0.18,-0.1l0.8,-0.38l0.34,0.01l0.16,0.13l0.06,0.21l-0.19,1.93l-0.43,1.07l-0.19,0.17l-0.17,0.11l-0.28,0.05l-0.19,-0.02l-0.73,-0.17l-0.14,-0.14L494.21,477.89zM505.49,483.13l-0.16,-0.06l-0.13,-0.21l-0.22,-0.65l-0.02,-0.31l0.13,-0.32l0.09,-0.19l0.39,-0.62l0.22,-0.27l2.08,-1.24l0.2,0.04l0.18,0.31l0.07,0.2l0.07,0.33l0.06,1.04l-0.22,-0.15l-0.13,-0.15l-0.23,-0.05l-0.6,0.06l-0.28,0.12l-0.26,0.96l-0.46,0.89L505.49,483.13zM487.36,521.51l0.06,-0.36l-0.04,-0.24l-0.13,-0.16l-0.61,-0.23l-0.26,-0.05l-0.29,-0.03l-0.25,-0.07l-0.17,-0.25l0.54,-0.58l1.77,-0.98l0.25,0.12l0.43,0.58l0.18,0.39l0.26,0.84l-0.07,0.32l-0.21,0.36l-0.13,0.16l-0.19,0.18l-0.41,0.23l-0.98,0.19L487.36,521.51zM503.86,481.69l-0.66,-1.57l-0.34,-0.6l-0.17,-0.51l0.16,-0.36l0.12,-0.16l0.52,-0.44l0.2,-0.05l0.98,0.35l0.04,0.69l-0.05,1.5l-0.07,0.3l-0.2,0.52l-0.44,0.31L503.86,481.69zM498.71,460.32l-0.26,-0.04l-0.88,-0.56l-0.88,-1.39l-0.02,-0.29l0.15,-0.24l0.16,-0.11l0.85,-0.28l0.28,0.13l1.62,2.32l-0.01,0.21l-0.9,0.23L498.71,460.32zM498.67,471.12l-1.34,-0.8l-0.15,-0.12l-0.21,-0.21l-0.26,-0.36l-0.06,-0.21l0.1,-0.28l0.19,-0.19l0.29,-0.11l0.23,-0.03l0.25,-0.01h0.64l0.28,0.09l0.19,0.17l0.24,0.31l0.17,0.31l0.54,1.35l-0.15,0.16l-0.24,0.1l-0.28,0.06l-0.36,-0.11L498.67,471.12zM503.55,454.29l-0.35,-0.08l-0.45,-0.13l-0.28,-0.15l-0.13,-0.14l-0.07,-0.26l0.07,-1.41l1.48,0.21l0.37,0.07l0.29,0.13l0.15,0.12l0.15,0.19l0.09,0.24l0.08,0.31l0.03,0.36l-0.06,0.3l-0.2,0.14L503.55,454.29zM516.06,443.82l-0.42,-0.09l-1.1,-0.55l-0.17,-0.27l-0.08,-0.38l0.04,-0.32l0.24,-0.52l0.18,-0.24l0.94,-0.51l0.28,-0.05l0.18,0.04l0.15,0.12l0.11,0.15l0.04,0.34l-0.21,2.09L516.06,443.82zM504.09,449.81l-0.25,-0.02l-0.17,-0.08l-0.55,-0.48l-0.24,-0.33l-0.46,-1.71l0.87,-0.96l0.21,0.05l0.89,1.07l0.5,0.64l-0.82,0.3l-0.05,0.31l0.01,0.25L504.09,449.81zM509.08,445.96l-1,-1.8l-0.41,-0.97l-0.01,-0.32l0.08,-0.31l0.19,-0.36l0.12,-0.15l0.32,0.01l1.02,1.39l0.31,1.38l-0.08,0.52l-0.4,0.5L509.08,445.96zM498.01,536.13l-0.29,-0.71l-0.71,-1.3l-0.07,-0.21l-0.02,-0.23l0.25,-0.27l0.23,0.01l0.37,0.17l1.06,0.61l0.71,0.49l0.25,0.2l0.12,0.24l-0.02,0.24l-0.19,0.18l-0.28,0.15l-0.77,0.39l-0.36,0.15l-0.18,-0.03L498.01,536.13zM499.41,469.12l-0.74,-0.6l-0.22,-0.2l-0.13,-0.15l-0.11,-0.22l0.02,-0.31l0.2,-1.06l0.18,-0.35l0.37,-0.03l0.19,0.1l1.15,1.08l-0.43,1.77l-0.16,0.12l-0.18,-0.04L499.41,469.12zM497.55,457.11l-0.54,-0.03l-1.77,0.01l-0.65,-0.33l0.01,-0.26l0.08,-0.2l0.57,-0.6l0.21,-0.13l0.28,-0.05l0.2,0.01l0.36,0.07l1.07,0.24l0.23,0.12l0.11,0.96L497.55,457.11zM497.57,507.29l-0.34,-0.72l0,-0.74l0.11,-0.18l0.86,-0.48l0.21,-0.07l0.48,-0.06l0.43,0.04l0.31,0.08l0.12,0.16l-0.04,0.31l-0.13,0.4l-0.12,0.18l-1.57,1.3l-0.23,0.14l-0.12,-0.23L497.57,507.29zM488.75,461.66l-0.14,-0.01l-0.21,-0.14l-0.47,-1.39l-0.06,-0.2l-0.03,-0.22l0.04,-0.26l0.15,-0.27l0.31,-0.43l0.33,-0.09l0.21,0.14l0.77,1.29V461l-0.66,0.62L488.75,461.66zM504.66,451.84l-1.48,-0.79l-0.21,-0.23l-0.29,-1.12l0.25,-0.1l2.25,0.71l0.07,1.63l-0.09,0.19l-0.28,-0.07L504.66,451.84zM499.56,454.76l-0.12,-0.03l-0.16,-0.14l-0.21,-0.27l-0.11,-0.22l-0.01,-0.24l0.09,-0.19l1,-0.47l1.42,-0.12l0.76,1.07l-0.72,0.2L499.56,454.76zM503.25,535.4l-0.12,-0.01l-0.3,-0.19l-1.21,-0.83l-0.86,-0.88l-0.13,-0.34l0.09,-0.3l0.29,-0.11l0.26,-0.01l0.15,0.01l0.31,0.08l1.38,0.96l0.17,0.13l0.14,0.22l0.06,0.23L503.25,535.4zM508.62,483.96l-0.14,-0.01l-1.38,-0.39l-0.35,-0.27l-0.11,-0.26l0.02,-0.28l0.68,-1.34l0.2,-0.15l0.16,-0.05l0.63,0.61l0.41,2.02L508.62,483.96zM508.57,459.86l-0.5,-0.31l-0.27,-0.22l-0.11,-0.81l0.1,-0.28l1.6,-0.41l0.2,0l0.19,0.16l0.04,0.22l-0.22,1.48l-0.25,0.27l-0.27,0.06l-0.36,-0.06L508.57,459.86zM506.09,447.18l-1.09,-0.21l-0.49,-0.15l-0.2,-0.15l-0.13,-0.15l-0.09,-0.17l-0.06,-0.25l0.53,-0.55l0.37,-0.3l0.31,-0.06l0.15,0.06l0.61,0.43l0.63,0.8l-0.1,0.37l-0.09,0.19l-0.16,0.08L506.09,447.18zM503.59,460.29l-0.36,-0.03l-1.47,-0.61l-0.2,-0.23l0.26,-0.18l0.8,-0.12l0.43,-0.09l0.2,-0.07l0.35,-0.19l0.25,-0.17l0.26,-0.07l0.57,0.14l0.13,0.24l-0.09,0.79l-0.16,0.19l-0.17,0.1l-0.51,0.23L503.59,460.29zM490.01,520.42l-0.12,-0.01l-0.56,-0.47l-0.12,-0.17l-0.34,-1.23l0.15,-0.14l0.33,-0.01l1.16,0.25l0.14,0.08l0.26,0.32l0.32,0.54l0.08,0.25l-0.16,0.29l-0.56,0.22L490.01,520.42zM493.01,456.88l-0.14,-0.08l-0.29,-0.46l-0.06,-0.2l-0.07,-0.45l-0.01,-0.37l0.03,-0.78l0.1,-0.26l0.13,-0.15h0.21l0.76,0.46l0.13,0.21l0.05,0.28l-0.02,0.27l-0.2,1.21l-0.33,0.22l-0.17,0.09L493.01,456.88zM505.32,471.86l-1.01,-0.3l-0.38,-0.13l-0.08,-0.19l0.08,-0.27l0.2,-0.15l0.64,-0.23l0.29,-0.04l1.45,0.03l0.18,0.1l0.04,0.29l-0.03,0.37l-1,0.5l-0.16,0.03L505.32,471.86zM506.24,449.93l-1.41,-0.27l-0.17,-0.2l-0.07,-0.68l2.2,-0.21l0.23,0.07l0.11,0.73l-0.03,0.3l-0.2,0.14l-0.21,0.05l-0.33,0.06L506.24,449.93zM517.82,438.01l0.62,-0.43l0.71,-0.14l0.54,0.57l0.36,0.14l0.24,0.02l0,0l-0.21,0.2l-0.9,0.08L517.82,438.01z" }),
            _react2.default.createElement("path", { id: "CL-AN", title: "Antofagasta", fill: mapColors[1].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[1].raw, this.IDDict["AN"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M582.34,51.41L582.72,51.47L583.08,51.43L583.5,51.42L586.27,55.88L586.85,56.85L586.89,61.6L587.12,61.88L587.56,62.48L587.8,62.95L588.04,63.67L588.25,64.81L588.29,65.15L588.31,65.72L588.29,66.22L588.32,66.96L589.58,68.27L589.92,68.47L590.33,69.15L590.63,71.2L590.63,71.73L590.49,72.13L591.09,74.06L591.67,76.03L591.18,78.45L591.29,80.22L592.47,80.98L595.52,81.34L598.99,80.6L601.15,80.12L602.27,81.33L603.75,82.9L603.08,84.77L602.43,86.57L601.79,88.37L601.61,88.89L598.98,98.62L594.66,100.57L590.97,102.22L586.83,104.04L585.93,104.46L585.59,105.22L585,105.99L584.33,105.88L583.98,106.1L582.95,107.67L582.31,108.69L581.84,109.61L581.46,110.43L581.41,110.92L581.74,111.79L582.42,112.19L584.48,115.72L583.56,116.21L582.62,116.36L582.47,116.5L582.21,116.93L581.93,118.04L581.93,118.04L581.16,118.03L580.58,118.18L580.13,118.46L579.55,118.95L579.07,119.4L578.73,119.65L578.38,119.73L577.67,119.69L577.12,119.61L576.66,119.68L576.16,119.88L575.75,120.1L575.44,120.31L574.72,120.88L574.43,121.66L574.29,122.75L574,123.3L573.69,123.31L573.83,126.07L569.66,126.07L569.1,127.74L567.71,128.02L566.32,129.69L564.09,128.02L562.96,126.5L562.77,126.52L561.81,126.43L561.39,126.35L560.87,126.31L560.36,126.52L560.09,126.67L559.56,127.01L559.23,127.3L557.42,128.39L556.41,128.49L555.09,128.69L554.48,128.81L554.08,128.91L553.72,129.04L553.45,129.18L553.19,129.34L552.4,129.93L551.72,130.87L551.72,130.87L552.11,130.17L552.17,129.86L552.12,129.35L551.84,128.49L551.44,128.07L551.16,127.75L550.69,126.6L551.14,124.95L551.38,124.22L552.08,122.7L552.93,121.58L553.45,121.19L554.68,119.54L554.92,117.89L554.93,116.99L554.61,116.13L553.94,115.21L554.02,113.14L553.57,112.22L553.31,111.37L552.79,109.4L553.02,106.94L553.3,104.44L553.42,103.69L553.24,103.37L553.49,102.09L553.71,101.3L553.87,101L553.98,99.93L553.91,99L553.67,98.45L553.66,97.92L553.8,95.99L553.99,94.93L554.42,94.36L554.79,94.07L555.02,93.65L555.31,92.93L555.44,92.51L555.53,92.15L555.52,91.51L555.4,91.03L555.22,90.55L555.03,90.32L554.55,89.98L554.15,89.78L553.84,89.91L553.45,90.77L552.24,90.55L552.56,88.68L552.63,86.43L552.91,83.89L553.41,83.32L553.92,83.09L554.03,83.77L554.31,84.14L555.16,83.98L555.62,83.75L555.9,83.5L556.14,83.21L556.31,82.94L556.72,81.97L557.02,81.12L556.94,80.67L556.82,80.34L556.68,79.64L557.06,77.42L557.42,74.45L557.64,72.34L557.92,70.03L558.13,69.06L558.43,67.93L558.97,64.07L558.91,63.6L558.89,62.57L559.14,61.75L559.79,61.19L559.87,60.43L560.33,58.81L560.33,58.81L560.54,58.73L562.09,58.65L562.45,58.68L564.05,58.86L564.93,59.01L565.92,59.37L566.99,59.13L571.55,58.06L575.37,56.91L577.15,56.72L578.47,56.15L578.47,55.67L578.56,55.24L578.74,54.85L578.97,54.49L579.55,53.42L579.69,53.01L579.8,52.36L579.63,51.98L579.22,51.88L578.44,52.05L578.08,52.08L577.69,52.08L576.57,51.64L576.17,51.4L575.96,51.1L576.11,50.74L576.38,50.58L576.7,50.5L577.95,50.34L580.53,50.68L581.6,50.75L581.6,50.75L581.67,50.91L581.97,51.24z" }),
            _react2.default.createElement("path", { id: "CL-AP", title: "Arica y Parinacota", fill: mapColors[2].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[2].raw, this.IDDict["AP"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M575.98,21.14L573.83,21.14L572.44,22.53L572.16,24.2L569.94,24.48L567.71,22.81L563.81,22.81L561.59,24.48L559.36,25.87L557.07,25.98L557.07,25.98L557.09,25.37L557.26,25L557.22,24.37L556.49,20.32L556.26,19.71L556.11,16.79L556.25,15.93L556.65,13.86L556.28,13.31L555.92,12.94L555.45,12.58L555.32,12.53L555.54,12.33L555.87,12.15L556.42,12.1L557.54,12.22L558.23,12.26L558.55,12.24L559.2,12.12L561.22,11.36L561.68,11.05L562.97,9.69L563.3,9.31L563.98,7.93L564.29,7.13L564.36,6.64L563.75,4.39L563.62,4.11L563.39,3.89L563.22,3.62L563.28,3.01L563.44,2.61L563.72,2.18L564.35,2.25L565.58,2.35L568.2,0L568.38,1.89L569.96,3.29L570.25,3.56L570.65,4.34L570.78,4.75L570.74,5.74L570.83,6.26L570.96,6.69L571.17,7.04L573.41,7.77L574.29,7.92L574.27,8.36L574.14,8.64L573.62,8.96L573.33,9.21L573.19,9.58L573.38,10.02L573.68,10.33L574.02,10.74L574.25,13.18L574.45,13.51L574.75,13.91L574.88,14.18L574.98,14.54L574.95,14.9L574.85,15.68L574.9,16.45L574.96,17.15L575.3,18.41L576,19.95L576.27,20.5z" }),
            _react2.default.createElement("path", { id: "CL-AR", title: "Araucan\xEDa", fill: mapColors[3].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[3].raw, this.IDDict["AR"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M511.23,336.25L511.29,336.26L511.57,336.4L512.01,336.64L513.18,337.42L516.92,333.74L517.15,333.29L517.25,332.94L517.36,332.39L517.1,331.96L516.6,331.71L516.08,330.3L517.78,327.7L518.19,327.21L518.35,325.59L518.16,325.23L517.26,325.15L516.95,324.77L518.26,323.13L520.21,322.84L520.81,323.17L521.41,323.56L521.92,323.86L523.87,324.33L525.08,324.3L525.95,325.32L526.35,326.3L527.23,327.56L527.88,327.96L528.18,328.08L528.66,328.16L529.17,328.29L529.53,328.47L530.75,329.52L530.92,329.95L531.38,330.52L531.68,330.73L533.82,331.09L535.58,330.92L536,330.8L536.49,330.99L536.95,331.66L536.95,332.4L536.89,332.95L536.86,333.54L536.92,333.96L537.2,335.02L537.38,335.38L537.89,335.75L538.12,335.29L538.31,334.84L538.54,334.59L539.8,333.99L540.73,333.5L540.97,333.27L541.19,332.66L542.67,332.34L545.96,332.27L546.87,332.42L546.87,332.42L546.85,333.24L546.67,334.56L546.82,335.6L547.27,337.95L547.57,338.59L548.18,339.23L548.56,339.46L549.08,339.88L549.34,340.49L549.28,341.08L548.83,342.93L547.95,343.85L547.63,344L546.94,343.98L546.49,343.93L546.1,343.99L545.47,344.31L543.46,345.49L542.11,346.3L541.73,346.54L541.26,346.99L541.02,347.39L540.91,347.85L540.85,348.82L540.86,349.29L541,349.77L541.14,350.93L541.35,352.95L541.13,354.6L540.46,356.53L539.96,358.84L539.85,359.53L539.65,359.87L538.34,359.94L537.97,359.77L537.38,358.94L537.16,358.95L537.16,358.95L537.12,358.55L537.03,358.09L536.86,357.65L536.56,357.6L535.6,357.58L534.8,357.02L534.41,356.64L533.96,356.33L533.6,356.21L531.33,356.01L530.95,356.08L530.59,356.26L530.17,356.66L529.89,356.97L529.53,357.17L528.18,357.69L527.64,357.61L526.98,357.28L524.88,356.55L524.46,356.54L523.39,356.74L522.98,356.76L522.54,356.72L522.13,356.63L521.77,356.38L521.35,355.91L520.93,355.14L520.78,354.09L520.46,353.84L518.4,353.88L517.7,354.75L517.42,355.23L517.04,355.62L516.6,355.85L516.16,355.9L515.76,355.85L515.4,355.76L514.92,355.62L514.92,355.62L515.28,354.98L515.18,352.96L514.38,350.12L511.87,342.94L511.04,340.16L510.7,338L510.72,337.42L510.97,336.37z" }),
            _react2.default.createElement("path", { id: "CL-AT", title: "Atacama", fill: mapColors[4].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[4].raw, this.IDDict["AT"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M581.39,119.24L581.1,120.45L581.04,120.76L581,121.24L581.05,121.62L581.66,123.49L582.41,125.07L582.52,125.46L583.07,128.01L583.85,132.01L583.57,132.46L582.71,133.25L582.14,133.65L581.78,133.94L581.51,134.29L581.32,135.03L581.27,135.52L581.21,136.39L581.21,136.71L581.23,137.47L581.31,137.79L581.45,138.11L581.84,138.72L583.33,140.49L585.33,143.59L585.44,143.92L584.94,145.68L584.5,145.95L583.96,146.24L583.69,146.37L580.35,147.51L579.65,147.05L579.02,146.95L578.41,146.99L578.05,147.19L577.48,148.11L577.2,148.64L577.04,149.13L577.17,149.74L576.68,151.1L574.67,154.89L574.27,155.35L573.7,156.99L573.6,157.65L573.1,159.7L572.97,160.07L572.78,160.49L572.56,160.79L572.15,160.89L571.63,160.94L571.1,161.21L570.67,162.21L570.51,162.92L570.32,163.28L569.64,164.15L567.74,166.3L566.7,167.17L565.99,167.7L565.89,169.96L565.79,170.51L565.34,170.76L564.7,172.03L564.69,172.83L564.79,173.19L564.93,173.55L565.02,174.09L564.54,175.53L564.09,177.64L564.12,178.51L564.03,178.91L563.85,179.2L563.39,179.51L562.49,179.61L561.65,180.62L560.67,182.08L560.59,183.07L560.67,183.44L561.04,184.24L561.58,186.05L561.63,186.24L561.63,186.24L559.92,186.08L557.41,184.97L556.3,184.41L554.33,183.85L554.41,183.41L554.44,182.78L554.24,182.11L554.07,181.85L552.2,179.67L551.87,179.33L551.48,178.96L551.02,178.65L550.61,178.4L550.15,178.27L549.06,179.12L548.5,180.24L547.39,183.02L545.16,183.3L544.05,181.63L543.12,179.61L542.92,179.73L542.63,179.86L540.91,180.25L540.37,180.36L539.84,180.34L539.84,180.34L540.06,179.11L539.64,176.96L539.6,175.66L539.72,175.26L540.21,174.71L541.5,173.46L542.65,172.05L542.77,171.19L542.84,170.22L543.19,169.52L543.59,168.89L544.54,166.87L544.62,165.03L544.63,163.73L544.87,160.64L545.37,158.76L545.69,157.82L546.22,156.83L546.75,156.09L547.36,155.8L548.09,155.25L548.4,153.07L548.16,152.22L547.77,150.62L547.34,148.16L547.46,147.77L547.64,147.34L547.96,147.09L548.8,146.91L549.51,145.93L549.92,145.13L549.69,144.15L549.45,143.62L549.37,143.2L551.09,138.91L551.23,138.37L551.38,136.38L552.01,134.25L551.58,132.65L551.58,132.12L551.72,130.87L551.72,130.87L552.4,129.93L553.19,129.34L553.45,129.18L553.72,129.04L554.08,128.91L554.48,128.81L555.09,128.69L556.41,128.49L557.42,128.39L559.23,127.3L559.56,127.01L560.09,126.67L560.36,126.52L560.87,126.31L561.39,126.35L561.81,126.43L562.77,126.52L562.96,126.5L564.09,128.02L566.32,129.69L567.71,128.02L569.1,127.74L569.66,126.07L573.83,126.07L573.69,123.31L574,123.3L574.29,122.75L574.43,121.66L574.72,120.88L575.44,120.31L575.75,120.1L576.16,119.88L576.66,119.68L577.12,119.61L577.67,119.69L578.38,119.73L578.73,119.65L579.07,119.4L579.55,118.95L580.13,118.46L580.58,118.18L581.16,118.03L581.93,118.04L581.93,118.04L581.86,118.11L581.57,118.75z" }),
            _react2.default.createElement("path", { id: "CL-BI", title: "B\xEDo-B\xEDo", fill: mapColors[5].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[5].raw, this.IDDict["BI"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M521.53,294.3L523.12,295.01L523.34,295.25L523.44,295.86L525.5,297.68L528.22,299.1L528.58,299.22L530.33,299.27L531.35,298.12L531.32,297.68L531.43,297.14L532.53,298.3L532.72,298.74L532.82,299.07L533.07,299.29L533.84,299.47L534.16,299.49L534.52,299.34L534.86,299.24L535.79,299.39L536.15,300.17L536.33,300.61L536.68,300.95L537.2,301.28L538.09,301.63L539.28,301.99L540.81,303.25L541.1,303.54L542.51,304.32L543.09,304.4L543.5,303.94L543.54,303.56L543.65,303.11L544.78,301.67L545.05,301.47L545.38,301.42L545.87,301.67L545.97,302.19L546.12,302.81L546.54,303.3L546.63,303.35L546.63,303.35L546.37,303.49L546.08,304.6L544.91,308.04L544.21,309.87L544.75,312.17L545.26,314.64L545.01,316.02L544.76,316.8L544.26,317.38L544.07,317.98L544.49,319.35L544.79,319.82L545.18,320.35L545.32,320.77L545.11,323.08L544.62,323.45L544.36,323.76L544.27,324.35L544.3,325.02L544.57,325.9L544.91,326.71L545.1,327.55L545.51,328.35L546.89,331.73L546.87,332.42L546.87,332.42L545.96,332.27L542.67,332.34L541.19,332.66L540.97,333.27L540.73,333.5L539.8,333.99L538.54,334.59L538.31,334.84L538.12,335.29L537.89,335.75L537.38,335.38L537.2,335.02L536.92,333.96L536.86,333.54L536.89,332.95L536.95,332.4L536.95,331.66L536.49,330.99L536,330.8L535.58,330.92L533.82,331.09L531.68,330.73L531.38,330.52L530.92,329.95L530.75,329.52L529.53,328.47L529.17,328.29L528.66,328.16L528.18,328.08L527.88,327.96L527.23,327.56L526.35,326.3L525.95,325.32L525.08,324.3L523.87,324.33L521.92,323.86L521.41,323.56L520.81,323.17L520.21,322.84L518.26,323.13L516.95,324.77L517.26,325.15L518.16,325.23L518.35,325.59L518.19,327.21L517.78,327.7L516.08,330.3L516.6,331.71L517.1,331.96L517.36,332.39L517.25,332.94L517.15,333.29L516.92,333.74L513.18,337.42L512.01,336.64L511.57,336.4L511.29,336.26L511.23,336.25L511.23,336.25L511.01,335.31L511.23,334.86L511.51,334.56L511.69,334.19L511.94,331.49L511.76,330.75L511.44,329.81L510.8,328.27L509.79,326.53L508.91,325.56L508.66,323.36L508.84,322.89L509.37,322.21L509.8,321.78L509.97,321.09L509.9,320.42L509.63,319.87L509.3,319.45L508.93,319.12L508.78,318.78L509.32,316.15L509.48,315.75L510.07,315.32L510.69,316.03L511.06,316.27L512.2,316.79L512.81,316.78L513.1,316.77L513.47,316.71L514.24,316.48L514.83,316.21L515.18,315.94L515.52,315.48L515.73,315L516.08,313.63L516.35,310.41L516.57,306.99L517.08,307.22L517.41,307.55L517.85,307.66L518.2,307.66L518.48,307.53L518.68,307.28L518.96,305.95L519.5,303.98L520.14,302.27L520.74,300.7L521.04,297.11L521.32,294.55z" }),
            _react2.default.createElement("path", { id: "CL-CO", title: "Coquimbo", fill: mapColors[6].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[6].raw, this.IDDict["CO"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M539.84,180.34L540.37,180.36L540.91,180.25L542.63,179.86L542.92,179.73L543.12,179.61L544.05,181.63L545.16,183.3L547.39,183.02L548.5,180.24L549.06,179.12L550.15,178.27L550.61,178.4L551.02,178.65L551.48,178.96L551.87,179.33L552.2,179.67L554.07,181.85L554.24,182.11L554.44,182.78L554.41,183.41L554.33,183.85L556.3,184.41L557.41,184.97L559.92,186.08L561.63,186.24L561.63,186.24L561.66,186.38L561.7,187.11L561.6,187.56L561.53,188L561.62,188.37L561.8,188.63L562.26,188.94L562.3,189.06L562.44,190.35L562.4,192.29L562.24,193.2L562.15,193.62L563.03,195.32L563.34,195.59L563.52,195.98L563.48,196.74L562.52,198.94L561.96,199.72L561.11,200.09L560.66,200.14L560.35,200.09L559.18,200.83L558.08,202.79L557.5,204.08L557.26,204.75L556.59,207.16L556.43,208.25L556.37,208.92L556.42,209.34L556.94,209.98L556.89,210.54L555.94,211.59L554.97,211.93L554.67,211.61L553.68,212.68L553.53,213.05L553.12,215.38L553.01,217.82L552.85,218.83L552.74,219.39L554.56,223.86L554.73,224.13L554.97,224.46L555.23,224.63L555.78,224.75L556.76,224.69L557.04,224.85L557.71,225.62L557.78,226.07L557.32,227.36L556.72,227.45L556.12,228.1L556.58,230.47L556.52,231.09L556.52,231.09L555.18,231.26L554.78,231.02L554.66,230.63L554.44,229.83L554.04,229.49L553.65,229.37L553.36,229.36L552.97,229.37L552.32,229.26L551.66,228.78L551.64,228.37L551.59,227.82L550.61,227.22L546.27,227.35L545.83,228.06L545.15,228.82L544.85,229.02L541.89,229.7L541.29,229.67L541.29,229.67L540.9,229.53L540.25,229.2L540.25,229.2L539.85,229.21L539.52,229.43L539.21,229.77L539.21,229.77L539.3,228.18L539.45,227.38L539.54,226.99L539.66,226.32L539.67,224.88L539.59,222.86L539.18,221.88L538.83,220.19L538.82,219.16L538.76,218.72L538.03,215.27L537.48,213.05L537.38,212.74L537.38,212.22L537.56,211.33L537.63,209.82L537.46,209.24L537.24,208.85L537.17,208.48L536.86,206.12L536.87,204.41L536.92,202.8L536.96,201.92L537.21,199.23L537.68,198.1L538.11,197.94L538.28,198.21L538.75,198.39L539.09,198.41L539.6,198.16L541.09,196.66L541.37,196.16L542.03,192.87L542.74,192.15L542.71,190.92L542.28,190.47L542.02,189.5L542.08,186.3L542.29,185.07L542.47,184.52L542.46,184.15L542,182.62L541.8,182.28L541.45,181.94L540.69,181.39L540.34,181.19L540.04,180.96L539.88,180.6z" }),
            _react2.default.createElement("path", { id: "CL-LI", title: "Libertador General Bernardo O'Higgins", fill: mapColors[7].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[7].raw, this.IDDict["LI"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M537.64,258.78L539.05,259.36L541.35,259.23L542.25,260.89L544.04,261.66L545.2,263.36L545.24,263.38L546.6,263.34L547.77,263.07L547.72,262.35L547.78,261.96L549.65,259.79L550.82,259.06L551.21,259.19L552.25,259.11L552.81,258.76L554.48,258.11L554.98,258.11L555.48,258.28L555.8,258.57L556.36,260.42L556.23,261.29L557.23,261.63L557.57,261.54L557.97,261.25L558.36,261.22L558.61,261.41L558.78,262.11L558.73,263.24L558.8,263.59L559.26,264.08L559.94,264.35L560.3,264.61L560.4,264.95L560.41,265.31L560.41,265.31L560.34,265.48L560.34,266.49L560.44,267.27L558.96,269.52L557.78,271.76L556.85,275.07L555.97,277.54L555.97,277.54L555.86,277.55L555.02,277.49L552.44,277.23L550.84,276L550.24,275.39L549.96,275.22L545.97,274.03L545.43,273.89L545.03,273.89L542.5,274.09L541.32,275.11L541.37,275.49L541.43,276.08L539.25,275.69L537.09,275.55L535.64,275.11L533.68,274.31L533.19,273.57L532.37,272.56L532.11,272.38L531.69,272.21L531.69,272.21L531.83,271.54L532.04,269.25L531.93,268.24L531.89,267.57L532.19,267.08L532.72,266.78L532.86,266.34L532.85,265.46L532.76,264.19L532.46,263.79L532.35,263.45L532.4,262.88L534.1,259.79L534.49,259.29L534.49,259.29L535.16,259.27L535.53,259.58L536.07,259.7L536.56,259.78L537.06,259.16L537.06,259.16z" }),
            _react2.default.createElement("path", { id: "CL-LL", title: "Los Lagos", fill: mapColors[8].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[8].raw, this.IDDict["LL"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M495.16,435.42l-0.27,0.26l-0.32,0.03l-0.38,-0.05l-0.21,0.05l-0.28,0.11l-0.17,0.09l-0.51,0.42l-0.12,-0.02l-0.22,-0.13l-0.49,-0.78l-0.09,-0.17l-0.08,-0.19l-0.06,-0.19l0.04,-0.32l1.2,-0.6l0.17,0.01l1.21,0.61l0.14,0.13l0.32,0.35L495.16,435.42zM512.5,414.5l-0.03,0.66l-0.27,-0.05l-0.13,-0.51l-0.07,-0.19l-0.09,-0.17l-0.22,-0.18l-1.33,-0.7l-0.19,-0.08l-0.46,-0.1l-0.2,-0.14l-0.39,-1.11l0.04,-0.19l0.23,-0.09l0.33,-0.04l0.49,-0.01l0.34,0.08l0.27,0.2L512.5,414.5zM505.81,401.11l-0.28,0.39l-0.4,0l-0.36,-0.26l-0.29,-0.09l-0.22,0.4l0.49,0.54l1.26,0.45l0.37,-0.29l0.58,-0.4l1.5,-0.93l1.4,-0.19l0.42,0.05l0.99,0.67l-0.32,2.5l1.09,1.71l-0.23,0.63l-0.39,0.15l-0.1,0.42l0.17,0.53l0.96,0.65l0.37,0.09l0.36,1.1l-0.16,0.69l-0.18,0.43l-1.49,0.35l-0.78,-0.11l-0.34,0.03l-0.97,0.52l-0.32,0.2l-0.23,0.37l-0.1,1.62l0.45,0.47l0.38,0.2l0.23,0.26l-1.54,0.64l-0.79,-0.71l0.27,-0.76l-0.46,0.14l-0.38,0.77l0.17,1.76l2.68,2.69l0.69,0.24l0.78,0.56l0.24,0.26l0.2,1.03l-0.11,0.44l-1.1,0.18l-0.54,-0.05l-0.47,0.26l-0.13,0.75l0.44,0.55l0.73,0.59l0.08,0.3l0.49,0.94l0.37,0.52l0.17,0.6l-0.33,0.28l-3.19,-0.28l-0.58,0.23l0.21,1.63l0.34,0.39l0.4,0.28l0.26,0.7l-0.29,1.73l-0.28,0.12l-1.88,0.43l-0.5,-0.38l-0.38,-0.37l-0.37,-0.12l-1.32,-0.06l-1.5,-0.2l-1.83,-0.53l-1.27,-0.68l-0.26,-0.22l-0.24,-0.41l1.03,-2.66l1.35,-1.65l-0.2,-0.63l0.44,-0.43l0.62,-1.59l0.47,-4.61l-0.08,-1.36l-0.27,-1l-0.25,-0.21l-0.35,-0.25l0.25,-1.63l0.29,-3.49l0.14,-0.34l0.27,-0.4l0.29,-0.37l0.67,-0.65l0.44,-1.5l0.48,-2.88l-0.55,-1.11l-0.16,-0.41l0.01,-0.38l0.47,-0.75l1.66,0.15L505.81,401.11zM507.77,371.91l4.27,0.36l0.84,1.39l1.39,0.28l2.23,-1.67l2.23,0.83l1.39,2.5l1.95,1.39l2.5,2.23l2.78,1.11l1.67,-1.95l1.11,-1.67l2.23,-0.28l2.59,0.35l0,0l-0.05,0.79l0.02,0.51l-0.28,0.8l-0.28,0.4l-0.3,0.31l-0.43,0.37l-0.28,0.48l0.51,1.48l0.91,1.99l0.17,0.81l-0.3,1.05l0.27,0.89l-0.3,3.44l-0.06,0.46l-0.25,0.53l-0.22,1.18l0.08,0.57l0.36,0.87l0.25,2.21l-0.6,1.03l-0.32,0.37l0,0.54l0.91,2.17l0.89,1.8l0.15,0.49l0.2,1.12l0.05,1.02l0.4,0.57l0.07,1.25l-0.72,0.67l-1.85,0.88l-0.44,-0.08l-0.14,-0.49l-0.2,-0.33l-0.46,-0.09l-0.34,0.18l-0.3,0.29l-1.31,2.61l0.3,0.58l0.74,0.64l0.17,0.38l-0.95,3.03l-0.21,0.4l-0.13,0.42l-0.06,0.41l0.15,1.5l0.25,1l0.05,0.77l0.07,1.82l-0.04,0.52l-0.13,0.63l-0.18,0.43l-0.1,0.38l-0.05,0.96l0.26,0.65l0.57,0.96l0.36,0.31l0.76,0.33l0.57,-0.01l0.4,0.02l0.89,0.09l0.46,0.12l1.36,0.84l0.09,1.99l-0.1,0.37l-0.27,0.19l-0.52,-0.13l-1.43,0.48l-0.48,1.2l-0.08,1.3l1.23,0.92l2.09,1.98l0.16,1.26l-0.18,0.45l-0.9,0.6l-0.28,0.11l-0.3,0.17l0,0.57l0.73,1.1l0.82,0.93l0,0l-1.07,-0.5l-0.48,0.02l-2,0.98l-0.2,0.79l-1.99,0.22l-0.11,-0.77l-0.26,-0.53l-0.47,-0.6l-0.42,-0.29l-0.64,-0.06l-0.3,-0.13l-1.09,-1.82l-0.07,-0.83l-0.68,-0.27l-0.47,0.33l-0.61,0.63l-0.47,0.7l-0.2,0.78l-2.75,-0.47l-0.89,-0.23l-0.29,-0.23l-0.94,-0.02l0,0l0,-0.81l-0.22,0.67l0,0l-0.24,-0.02l-0.36,-0.14l-0.54,-0.57l-0.71,0.14l-0.62,0.43l0,0l-0.06,-0.68l0.1,-2.3l-0.95,-2.27l-0.14,-0.45l0.49,-2.51l0.3,-0.35l0.55,-0.37l0.41,-0.25l0.33,-0.19l0.29,-0.1l0.5,-0.22l-0.02,-1.42l-0.25,-0.82l0.11,-0.48l0.57,-1.06l0.51,-0.58l0.47,0.02l1,0.68l0.04,-2.63l-0.44,-0.55l-0.42,-0.26l-0.41,-0.42l-0.22,-0.56l-0.2,-1.13l-0.02,-1.03l0.07,-2.72l0.5,-1.27l0.32,-0.13l1.27,0.07l0.41,0.08l0.3,0.39l1.11,0.73l0.42,0.12l0.18,-0.24l-0.36,-0.59l-0.67,-0.18l-0.46,-0.22l-0.57,-0.47l-2.34,-3.64l0.69,-0.82l0.7,-0.51l2.09,-0.67l0.45,0.25l0.41,0.75l-0.01,0.42l1.29,3.75l0.25,0.19l0.2,-0.35l-0.12,-1.43l-0.5,-2.54l-0.19,-0.82l-0.18,-1.4l0.03,-0.53l0.09,-0.73l0.1,-0.51l0.13,-0.48l0.04,-0.61l-0.26,-0.2l-0.61,0.01l-0.49,0.56l-0.93,0.55l-1.79,-0.27l-1.1,-0.6l-0.59,-0.84l0.12,-0.49l0.76,-1.21l2.15,-2.19l0.59,0.02l0.48,0.1l1.47,-0.35l1,-0.5l0.79,-0.71l0.25,-0.31l0.32,-3.79l-0.52,0.19l-0.5,3.38l-0.32,0.6l-1.02,0.51l-1.46,0.48l-0.48,0.01l-0.33,-0.14l-0.57,-0.45l-0.42,-1.27l-0.48,-0.68l-0.94,-1.12l-0.55,-0.31l-1.31,-0.33l-1.09,0.33l-0.47,0.2l-0.88,1.39l0.2,0.75l0.27,0.25l0.2,1.11l-1,1.05l-0.94,0.71l-0.48,0.08l-1,-0.23l-0.46,-0.15l-0.94,0.03l-0.28,0.12l-0.69,0.33l-0.38,0.13l-0.24,0.01l-0.91,-0.58l-1.69,-0.34l-0.74,-0.04l0.22,-1.45l0.64,-0.97l0.26,-0.18l0.47,-0.02l0.47,0.07l0.53,-0.16l0.93,-1.73l-0.44,0.42l-0.29,0.65l-0.28,0.38l-0.41,0.13l-1.71,-0.17l-0.87,-0.56l-1.32,-1.61l-0.03,-0.7l0.26,-0.61l-0.05,-1.27l-0.17,-0.73l-0.49,-1.38l-0.45,-0.57l-0.22,-0.48l-0.29,-1.8l-0.31,-2.11l0.68,-2.05l1.63,-4.4l0.65,-0.85l0.58,-1.25l-0.11,-0.69l-0.4,-1.02L507.77,371.91z" }),
            _react2.default.createElement("path", { id: "CL-LR", title: "Los R\xEDos", fill: mapColors[9].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[9].raw, this.IDDict["LR"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M534.95,376.79L532.36,376.44L530.13,376.72L529.02,378.39L527.35,380.34L524.57,379.22L522.06,377L520.11,375.6L518.72,373.1L516.5,372.27L514.27,373.94L512.88,373.66L512.04,372.27L507.77,371.91L507.77,371.91L508.07,370.17L509.03,369.01L508.96,367.93L508.81,367.44L508.44,366.99L508.25,366.59L508.54,366.13L508.75,365.89L511.43,364.58L512.67,364.8L513.04,364.24L513.01,362.06L514.06,359.37L514.28,358.96L514.79,357.65L515.23,356.19L514.92,355.62L514.92,355.62L515.4,355.76L515.76,355.85L516.16,355.9L516.6,355.85L517.04,355.62L517.42,355.23L517.7,354.75L518.4,353.88L520.46,353.84L520.78,354.09L520.93,355.14L521.35,355.91L521.77,356.38L522.13,356.63L522.54,356.72L522.98,356.76L523.39,356.74L524.46,356.54L524.88,356.55L526.98,357.28L527.64,357.61L528.18,357.69L529.53,357.17L529.89,356.97L530.17,356.66L530.59,356.26L530.95,356.08L531.33,356.01L533.6,356.21L533.96,356.33L534.41,356.64L534.8,357.02L535.6,357.58L536.56,357.6L536.86,357.65L537.03,358.09L537.12,358.55L537.16,358.95L537.16,358.95L537.05,359.1L536.78,360.04L536.83,361.9L537.34,364.24L537.85,366.01L537.38,367.8L536.19,368.58L535.61,369.05L535.23,370.71L535.61,371.48L536.63,372.53L536.87,372.1L537.35,372.43L537.42,373.13L536.88,374.43L536.68,374.78L536.4,374.86L536.07,374.54L535.77,374.51z" }),
            _react2.default.createElement("path", { id: "CL-MA", title: "Magallanes y Ant\xE1rtica Chilena", fill: mapColors[10].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[10].raw, this.IDDict["MA"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M515.79,615.45l-0.32,-0.03l-0.48,-0.14l-0.49,-1.25l-0.25,-2.57l-0.1,-2.51l-0.28,-1.97l-0.22,-0.55L513,605.7l0.14,0.54l0.44,1.21l0.16,1.16l0.73,7.56l-0.13,0.8l-0.42,0.24l-0.46,-0.26l-2.79,-2.37l-0.28,-0.36l-0.21,-0.68l0.06,-0.88l-0.44,-1.51l-0.61,-1.68l0.71,-0.44l0.15,0.54l1.15,2.49l1.08,1.77l0.46,-0.16l-1.1,-2.43l-1.57,-3.57l0.54,-0.26l0.46,-0.32l0.64,-0.84l-2.06,0.59l-1.2,1.59l-0.88,-1.72l-0.41,-1.61l-0.91,-0.23l-0.72,-0.26l-0.33,-4.28l0.06,-0.54l0.28,-0.76l1.3,0.41l1.46,1.68l0.39,0.91l0.73,1.83l0.19,1.01l0.19,-0.13l0.09,-0.59l-1.38,-4.17l-1.2,-4.51l0.57,-0.39l0.54,0.85l0.15,0.64l-0.29,-2.49l-0.32,-0.37l-0.35,0.23l-1.38,1.66l-0.35,0.27l-0.29,0.08l-2.61,-0.76l-0.64,-0.51l-0.34,-2.55l-0.86,-0.62l-0.33,-0.26l-0.16,-2.41l0.34,-0.57l0.62,-0.46l0.59,-0.23l3.27,-0.01l0.32,0.22l0.49,0.81l1.02,-2.83l-0.02,-2.29l0.42,-0.6l1.22,-0.38l0.46,0l0.82,0.56l0.19,0.7l0.42,0.3l0.43,-0.99l-0.87,-0.88l-0.68,-0.13l-0.58,-0.18l-0.95,-1.09l-0.04,-0.5l0.27,-0.52l0.34,-0.11l0.48,-0.11l0.37,-0.24l0.25,-0.3l0.45,-1.88l-2.64,2.61l-0.23,0.48l-0.37,1.42l-0.4,1.9l0.12,0.55l0.09,0.64l-0.15,0.41l-1.5,1.46l-0.27,0.15l-1.37,-0.16l-1.08,-1.27l-0.58,-1.46l-1.02,-2.29l-0.8,-2.75l1.07,-0.37l1.3,0.5l0.36,0.26l0.32,0.31l0.34,0.28l0.42,0.21l1.85,0.3l-0.71,-0.5l-0.72,-0.24l-1.21,-0.9l-0.62,-0.76l-2.44,-0.22l-2.59,-1.85l-3.06,-3.09l-0.06,-0.66l0.33,-0.58l0.5,-0.58l0.7,-0.5l1.34,-0.45l0.84,0.29l1.19,-0.14l0.79,1.02l0.29,0.71l0.98,1.13l3.42,1.56l0.91,0.19l0.26,0.01l0.2,-0.18l-3.77,-1.79l-0.31,0.02l-0.33,-0.15l-0.44,-0.48l-2.32,-4.17l0.14,-0.91l0.33,-0.51l0.98,0.13l0.67,0.21l1.38,1.53l3.33,1.38l0.05,-0.66l-0.19,-0.62l-1.54,-0.68l-1.28,-0.55l-2.82,-1.47l-0.39,-0.58l-0.34,-1.47l1.46,-0.84l0.75,-0.27l0.69,-0.12l0.44,0.17l0.58,-0.14l0.14,-0.68l-1.81,0.26l-1.26,0.34l-0.28,-0.08l-0.32,-0.91l-0.09,-1.11l0.09,-0.53l1.11,-1.13l1.87,-0.64l0.34,-0.1l1.99,0.48l0.25,0.47l0.31,1.25l0.38,0.65l0.52,0.26l0.42,0.13l0.93,0.96l0.37,1.3l0.16,-0.7l-0.29,-0.99l-0.35,-0.83l-0.27,-0.26l-1.08,-0.1l-0.36,-1.5l0.05,-1.25l-0.58,-0.42l-1.08,0.14l-1.48,-0.49l-0.23,-0.3l-0.16,-1.51l0.55,-2.96l0.21,-0.33l0.44,0.01l0.52,0.47l0.17,0.45l0.3,0.48l0.72,0.43l0.44,0.14l0.55,-0.15l-0.64,-0.38l-0.45,-0.11l-0.26,-0.2l-0.8,-1.32l-0.43,-3.5l0.17,-0.42l0.45,-0.61l0.25,-0.27l0.34,-0.17l0.45,-0.02l0.41,0.28l0.28,0.31l0.49,0.06l-0.04,-0.48l-0.88,-0.47l-2.14,0.24l-0.11,0.89l0.14,1.96l-0.95,1.77l-0.59,1.83l-0.14,1.21l-0.49,2.97l-0.31,0.46l-0.33,0.06l-0.36,-0.25l-1.55,-2.09l-0.33,-1.86l-0.03,-3.92l0.05,-4.29l-0.22,-0.72l-0.3,-0.69l-0.25,-1.09v-0.68l0.15,-0.47l0.87,-1.43l0.58,0.39l0.43,0.16l0.34,-0.08l0.56,-0.43l0.44,-0.15l1.17,0.11l0.94,0.37l0,0l4.92,4.28l3.39,2.93l4.21,3.63l0.24,0.17l0,0l1.15,0.32l-0.7,0.8l-4.08,0.12l-0.59,0.04l-1.07,2.87l-0.6,2.13l0.19,0.4l0.76,1.01l0.98,4.07l-0.28,0.4l-0.51,0.48l-0.39,0.48l-0.36,1.94l0.56,0.62l0.35,0.33l0.28,0.4l-0.06,0.67l-0.39,0.54l-0.33,0.69l-0.16,0.72l0.2,0.63l1.23,0.95l1.24,1l0.24,0.3l0.21,0.39l0.57,1.36l0.16,0.6l0.24,3.22l0.29,2.18l0.75,3.17l0.26,0.43l0.3,0.25l0.4,0.06l0.36,-0.09l0.45,-0.16l0.49,-0.27l0.49,-0.44l0.83,-1.13l0.28,-0.26l0.47,-0.29l1.52,-0.75l0.41,0l0.4,0.38l0.25,0.34l0.28,0.25l0.46,0.18l0.46,-0.06l0.28,-0.21l0.32,-0.63l0.31,-0.39l0.35,-0.18l0.38,-0.06l1.72,0.25l1.09,0.86l-0.09,0.55l-0.54,1.21l0.06,0.55l0.45,0.55l0.32,0.45l0.37,0.7l0.16,0.51l-0.33,3.51l-0.23,0.45l-0.74,0.09l-0.87,1.67l0.27,1.15l0.34,0.48l0.36,0.27l0.51,0.28l0.58,0.76l-0.19,0.62l-0.42,0.44l-0.27,0.61l-0.02,1.09l0.05,0.9l-0.54,1.95l-0.31,0.32l-0.44,0.33l1.58,4.17l0.44,0.25l0.71,0.12l0.38,0.18l0.29,0.19l0.36,0.27l0.68,0.56l1.82,2.07l0.25,0.61v0.76l0.45,1.88l3.07,0.03l6.56,0.01h11.36l4.61,-0.03h1.59l0.79,0.33l2.52,1.15l4.33,1.92l2.47,0.01l0.77,-0.01l2.86,1.19l0.59,0.26l0.79,0.57l1.52,1.14l1.44,0.24l1.12,0.17l1.04,0.19l1.99,0.54l-0.08,1.14l-0.52,-1.02l-0.44,-0.2l-2.43,-0.41l-1.7,-0.09l-0.29,0.03l-1.76,-0.34l-0.57,-0.23l-0.29,-0.2l-0.58,-0.53l-0.35,-0.29l-0.69,-0.43l-0.5,-0.23l-0.51,-0.05l-0.32,-0.01l-0.82,0.08l-2.51,1.13l-0.36,0.28l-0.18,0.39l-0.04,0.66l-0.07,1.61l-0.95,1.59l-0.35,0.46l-0.74,0.74l-0.25,0.36l-0.33,0.23l-1.51,-0.23l-0.41,-0.41l-1.47,0.33l-3.23,1.43l-0.42,0.22l-4.63,2.79l-0.45,0.04l-2.22,0.28l-1.81,0.33l-0.45,3.43l0.19,0.67l0.27,0.31l-0.01,1.72l-1.1,3.23l-0.27,0.48l-0.31,0.36l-0.23,0.51l-0.13,0.71l-0.53,4.03l0.02,0.77l0.05,0.58l0.16,0.79l0.22,0.61l0.19,0.78l0.11,0.68l0.07,0.89l-0.07,0.76l-0.5,3.06l-0.3,0.62l-0.7,0.88l-2.67,1.25l-0.71,0.27l-2.39,-1.22l-0.43,-0.13l-0.61,-0.08l-0.65,-0.05h-0.32l-0.57,-0.07l-0.92,-0.28l-2.2,-1.63l-1.16,-0.31l-1.64,-0.5l-0.92,-0.51l-2.46,-2.56l-0.85,-1.27l-0.68,-1.11l-0.34,-0.63l-0.46,-1.21l0.42,-2.02l1.98,-1.76l2.44,0.3l0.41,1.11l0.09,0.54l-0.06,0.87l-0.19,0.57l-0.91,0.62l-0.99,0.53l0.55,0.23l1.19,-0.36l0.49,-0.32l0.83,-0.62l0.09,-0.5l-0.08,-0.78l-0.13,-0.97l-0.04,-0.51l0.13,-0.76l0.34,-0.45l1.76,0l0.42,0.51l0.72,4.4l-0.17,0.58l-0.28,0.29l-0.45,0.38l-1.34,0.77l-0.39,0.17l-0.5,0.36l-0.01,0.69l0.13,0.12l0.7,-0.44l1.69,-0.65l0.44,-0.29l0.6,-1.2l-0.08,-1.57l-0.19,-1.15l0.09,-1.46l0.41,-1.69l3.72,-1.95l0.43,0.04l0.38,-0.01l0.44,-0.12l0.3,-0.18l0.29,-0.22l0.27,-0.3l2.85,-4.98l0.15,-0.59l-0.69,-1.25l-1.25,-0.37l-1.36,-0.09l-3.62,1.98l-3.02,1.93l-1.17,0.98l-0.23,0.64l-1.49,2.31l-0.8,0.23l-0.41,-0.03l-0.52,-0.35l-0.3,-0.39l-0.29,-0.55l-0.26,-0.46l-0.28,-0.29l-1.17,-0.41l-3.04,0.78l-0.4,0.47l1.15,-0.15l1.42,0.01l2.19,1.89l0.3,0.62l-0.17,0.44l-1.99,0.61l-0.46,-0.1l-0.55,-0.49l-1.03,-0.32l-0.69,0.36l0.36,0.62l0.52,0.23l0.3,0.01l0.44,0.23l-1.4,2.75l-0.45,0.19l-0.74,-0.24l-0.42,-0.59l-0.25,-0.29l0.12,0.9l1.19,1.4l0.39,-0.35l0.41,-0.09l1.45,2.22l0.21,0.59l-0.25,0.44l-1.37,0.22l-0.15,0.01l-0.39,-0.47l-2.78,-2.3l-1.9,-1.07l-1.09,-0.77l-0.32,-0.45l-1.5,-1.22l-0.29,-0.13l-0.43,-0.02l-0.36,-0.14l-0.97,-0.92l-1.23,-1.75l3.17,0.2l1.12,-0.24l0.76,0.12l1.37,1.13l1.01,1.7l0.32,0.33l0.62,-0.08l0.23,-1.24l-0.8,-0.72l-0.59,-0.65l0.49,-0.98l0.64,0.15l0.81,0l-0.68,-0.48l-0.97,-0.19l-0.4,0.12l-0.36,0.42l-0.37,0.12l-1.23,-1.07l0.37,-0.45l0.17,-0.24l0.31,-1.07l-0.58,-0.8l-0.43,-1.38l-0.12,-1.85l0.6,-0.77l2.79,-1.84l1.94,1.19l1.66,0.55l0.64,-0.18l1.69,-1.45l1.68,-1.98l0.2,-0.46l2.33,-0.34l1.6,1.15l0.68,0.16l0.79,0.05l1.04,-0.04l0.55,-0.07l0.41,-0.06l0.47,-0.16l2.03,-1.01l-0.61,-1.45l-0.36,-0.29l-0.56,-0.02l-0.35,0.12l-0.44,-0.01l-1.84,-0.3l-2.12,-0.48l-3.04,-0.38l-2.07,0.1l-0.5,0.11l-0.46,0.59l-0.36,0.88l-0.73,1.65l-1.79,-1.52l0.68,-1l0.39,-0.29l0.44,0.03l0.64,-0.34l-0.3,-0.4l-1.53,0.5l-0.3,0.26l-1.2,0.15l-2.28,-0.01l-1.55,1.93l0.25,0.29l1.02,-0.67l1.83,0.7l0.04,0.54l-1.08,1.58l-0.64,0.65l-0.94,0.83l-0.86,0.18l-0.36,0.11l-0.42,0.55l-0.35,0.61l0.46,1.46l0.38,1.58l-0.05,1.02l-0.42,0.91l-1.5,0.54l-0.09,0.08l-0.47,0.26l-1.12,0.11l-1.64,-0.69l-1.86,-1.77l1.96,-1.49l1.09,-1.16l-1.74,-0.25l-2.83,-1.81l0.72,-0.58l1.32,0.1l0.35,0.4l2.23,-0.27l-0.3,-0.73l-0.05,-0.89l2.21,-4.93l0.6,-0.34l1.22,0.23l0.75,0.23l0.43,0.11l-0.39,-0.54l-1.35,-0.3l-0.44,-0.06l-0.42,0.04l-1.08,0.22l-0.38,0.39l0.21,1.24l-0.12,0.45l-1.36,2.12l-0.54,0.02l-0.34,-0.23l-0.11,-0.47l-0.04,-1.02l-0.39,-0.23l-0.35,0.15l-1.6,1.39l-0.8,0.83l-0.52,0.88l-0.23,0.47l-1.17,-0.56l0.15,-2.87l0.76,-0.95l0.57,-0.17l0.38,0.19l0.18,-0.4l-0.68,-0.22l-0.25,-0.45l-0.72,-2.12l0.01,-0.7l0.23,-0.43l0.42,0.11l0.42,0.07l0.37,-1.23l-0.26,-2.17l-0.86,-1.52l-1.12,-1.67l-0.23,-0.62l0.11,-0.76l0.4,-0.33l0.37,0.41l0.22,0.85l1.7,2.66l0.43,0.06l0.67,-0.53l1.7,1.1l0.33,0.09l0.83,-0.18l0.32,-0.27l0.36,-1.01l0.72,-1.13l0.96,-0.51l1.04,-0.52l0.54,0.08l0.04,1.64l-0.05,1.07l1.07,1.44l0.64,0.33l0.49,-0.56l0.83,-3.24l-0.16,-0.86l-0.46,0.48l-0.45,1.23l0.02,0.58l-0.41,0.97l-0.95,-0.69l-0.01,-1.98l1.17,-2.97l0.85,-0.44l1.53,1.13l-0.06,1.31l0.56,0.98l0.56,0.29l0.26,0.26l0.69,1.35l0.28,0.69l-0.59,2.81l-0.48,0.57l-1.88,0.77l-2.66,1.68l0.42,0.16l1.12,-0.41l2.64,-1.05l0.77,-0.5l1.28,-1.33l0.33,-2.62l-0.21,-0.5l-0.96,-1.18l-1.41,-1.85l-0.25,-1.98l0.46,-0.43l1.64,0.26l0.37,-0.18l0.31,-0.32l0.2,-0.37l-0.17,-3.01l-0.54,-1.39l-2.16,-2.57l-0.77,-0.73l-0.37,-0.2l-0.62,-0.11l-0.67,-0.02l-1.23,-0.55l-1.96,-1.33l-0.31,-0.54l-0.57,-0.46l-0.61,0.11l-1.18,0.34l-0.39,0.47l0.19,0.4l0.56,0.24l0.35,-0.11l0.56,-0.41l1.25,0.38l1.24,0.67l1.8,1.59l2.02,2.05l0.32,0.16l1.64,0.46l0.3,0.4l-0.23,1.14l-0.86,0.99l-1.33,0.12l-1,-0.69l-0.35,-0.75l-2.34,-1.06l-2.83,-2.12l-0.91,-0.59l-0.6,0.08l0.81,2.2l0.47,0.29l0.55,0.11l0.39,-0.01l0.5,-0.25l0.51,0.32l0.38,0.41l0.47,0.81l-0.88,1.48l-0.33,0.22l-0.56,0.12l-0.97,0.32l1.71,-0.25l0.89,-0.73l0.52,-0.32l0.48,0.34l0.15,0.61l-0.47,0.5l-0.98,0.41l-0.87,0.44l-0.72,0.47l-0.23,0.59L515.79,615.45zM580.49,679.66l-0.02,2.38l-0.08,0.09l-0.1,0.03l-0.24,-0.02l-0.17,-0.09l-0.3,-0.3l-0.51,-0.59l-0.29,-0.22l-1.91,-0.93l0.57,1l0.15,0.19l0.19,0.23l0.35,0.25l0.6,0.25l0.15,0.49l-0.3,0.41l-0.46,0.22l-2.25,0.45l-1.51,0.17l-0.34,-0.01l-0.29,-0.06l-5.25,-1.93l-0.98,-0.39l-1.49,-0.81l-0.14,-0.56l0.08,-0.27l0.42,-0.46l0.07,-0.27l-0.06,-1.53l-0.15,0.02l-1.09,0.75l-0.1,1.46l-0.26,0.54l-4.96,1.09l-1.75,0.12l-0.47,0.02l-0.48,-0.13l-0.36,-0.24l-0.2,-0.48l-0.05,-0.81l0.23,-0.37l0.3,-0.38l0.75,-1.3l0.06,-0.33l-0.17,-0.14l-1.23,1.58l-0.38,0.83l-0.14,0.4l-0.01,0.25l-0.43,0.16l-0.54,-0.15l-2.79,-0.18l-1.55,0.8l-0.2,0.05l-0.17,-0.01l-0.55,-0.14l-0.3,-0.21l-0.2,-0.33l0.68,-0.87l0.24,-0.19l0.22,-0.08l0.57,-0.12l0.43,-0.16l0.86,-0.51l1.22,-0.8l0.26,-0.24l0.83,-1.21l0.08,-0.29l-0.12,-0.13l-0.29,-0.03l-0.86,0.04l-0.19,0.06l-0.95,1.05l0.22,0.22l0.36,0.23l-0.1,0.21l-0.66,0.42l-1.28,0.45l-1.02,0.27l-1.38,-0.06l-0.32,-0.77l0.2,-0.13l0.63,0.01l1.12,-0.37l0.15,-0.17l-0.16,-0.17l-0.21,-0.05l-0.15,0.01l-0.89,0.27l-0.92,0.75l-1.09,1.4l-0.36,0.1l-0.14,-0.18l0.01,-0.3l0.13,-0.3l0.13,-0.21l0.21,-0.29l0.13,-0.22l0.11,-0.25l0.38,-1.59l-0.03,-0.52l-0.62,-0.14l-0.38,0.29l0.05,0.35l-0.08,0.27l-0.21,0.3l-1.51,0.87l-0.23,0.11l-1.31,-0.58l-0.28,-0.15l-0.14,-0.2l-0.01,-0.27l0.18,-0.16l0.21,-0.03l0.2,-0.76l-0.06,-0.91l-1.01,-1.36l-0.27,0.02l-0.68,0.77l-1.07,2.8l-0.1,0.54l-0.15,-0.02l-0.22,-0.13l-2.26,-1.71l-0.17,-0.22l-0.4,-0.05l-0.42,0.15l-0.6,0.54l-0.3,0.42l-0.27,0.11l-1.36,0.09l-0.15,-0.02l-0.34,-0.1l-0.22,-0.24l-0.15,-0.46l-0.33,-1.43l-0.11,-1.44l0.11,-1.14l0.17,-0.17l0.21,-0.03l0.76,0.29l0.67,0.75l0.2,0.52l0.05,0.27l0.19,0.31l0.27,0.16l1.06,0.42l0.89,0.31l0.17,0.01l1.33,-0.69l-1.65,-1.92l-0.32,-0.18l-0.19,0.04l-0.49,0.25l-0.23,0.01l-0.62,-0.39l-0.18,-0.25l-0.11,-0.76l0.81,-0.47l0.37,-0.04l0.32,0.03l0.15,0.03l0.26,0.27l0.15,0.63l0.98,1.43l0.24,0.19l0.23,0.11l0.53,0.13l1.02,-0.41l0.07,-0.24l-0.25,-0.25l-0.84,-0.12l-0.23,-0.12l-0.16,-0.17l-0.23,-0.43l-0.15,-0.54l0.23,-0.3l0.19,-0.02l2,0.88l1.01,-0.47l-0.67,-0.4l0.27,-0.38l0.54,-0.39l0.22,0.01l2.37,1.44l3.11,0.95l0.47,-1.31l0.01,-0.33l-0.02,-0.3l-0.04,-0.28l-0.13,-0.61l0.15,-0.28l0.6,-0.38l0.56,-0.18l0.62,-0.03l0.49,0.03l1.54,0.16l0.15,0.03l0.55,0.21l0.08,0.21l-0.83,1.28l-0.57,1.37l-0.3,1.45l-0.29,1.95l0.49,-0.58l1.08,0.95l-0.65,-1.22l-0.11,-0.22l-0.14,-0.55l0.06,-0.41l0.46,-1.45l0.11,-0.23l0.3,-0.46l0.19,-0.23l0.55,-0.54l0.24,-0.01l0.18,0.44l0.2,0.34l1.49,1.29l0.49,0.22l0.18,0.12l0.16,0.15l0.75,0.63l0.15,0.19l0.13,0.2l0.16,0.34l0.19,0.31l0.3,0.13l0.29,0.03l1.58,-0.69l-1.32,-1l-0.34,-0.25l-0.6,-0.33l-0.35,-0.16l-0.71,-0.38l-0.26,-0.15l-0.31,-0.21l-0.56,-0.4l-0.17,-0.25l-0.71,-1.26l0.13,-0.47l-0.05,-0.37l-0.21,-0.37l-0.18,-0.24l-0.23,-0.27l-0.35,-0.24l-0.84,-0.28l-0.28,-0.05l-0.62,-0.07l-1.22,0.07l-0.5,-0.02l-0.26,-0.07l-0.2,-0.14l-0.27,-0.27l-0.2,-0.34l-0.55,-2.27l0.54,-0.17l0.35,0.31l1.07,0.79l1.88,0.98l4.31,2.44l2.67,2.49l0.25,0.12l0.98,-1.12l0.05,-0.25l-0.17,-0.17l-1.02,-0.25l-0.25,-0.09l-0.33,-0.34l-0.13,-0.28l0.03,-0.27l0.92,-0.9l0.53,-0.47l0.24,-0.18l0.2,-0.04l0.15,0.02l0.69,0.49l0.49,0.68l1.45,3.18l1.04,2.69l0.35,0.44l0.26,-0.13l0.2,-1.77l-0.94,-2.3l-0.54,-1.24l-0.24,-0.18l-0.31,-0.32l0.23,-0.61l0.13,-0.12l0.32,-0.01l0.57,0.16l1.6,0.84l0.33,0.34l0.37,0.5l3.5,0.87l1.89,1.13l0.2,0.14l0.13,0.2l0.07,0.35l-0.04,0.27l-1.06,1.31l-0.15,0.11l-0.53,0.31l-0.2,0.23l-0.57,1.21l-0.17,0.42l0.45,1.32l0.15,0.16l0.15,-0.85l0.51,-1.28l0.37,-0.82l0.16,-0.35l0.18,-0.24l0.44,-0.33l0.3,-0.09l0.17,0.07l0.13,0.2l0.19,0.47l0.23,0.61l0.07,-0.07l0.34,-0.59l-0.21,-0.84l-0.15,-0.35l-0.02,-0.5l0.1,-0.37l0.2,-0.39l0.16,-0.09l0.64,0.01l0.15,0.02l0.42,0.18l0.53,0.47l0.19,-0.03l0.19,-0.21l0.02,-0.89l-0.21,-0.25l-0.2,-0.14l-0.93,-0.58l-2.64,-1.55l-1.95,-0.92l-0.38,-0.13l-1.18,-0.51l-0.2,-0.14l-0.19,-0.23l-0.29,-0.47l-1.56,-0.63l-0.4,-0.11l-0.28,-0.05l-0.32,-0.03l-0.28,-0.05l-0.38,-0.13l-1.26,-0.5l-2.33,-1.64l-0.25,-0.27l-0.12,-0.29l-1.11,-3.71l-0.4,-2.07l-0.09,-0.56l-0.04,-0.45l0.05,-0.49l0.28,-0.52l0.25,-0.24l3.24,-2.09l0.19,-0.05l0.44,0.06l0.31,0.02l0.17,0.01l0.29,-0.03l0.74,-0.25l5.7,-3.19l0.19,-0.14l0.19,-0.35l0.07,-0.47l0,-0.25l-0.23,-2.44l-0.13,-0.32l-0.27,-0.26l-2.72,-0.23l-0.46,0.02l-4.11,0.63l-0.14,0.04l-0.59,0.22l-0.51,0.32l-0.58,0.48l-0.18,0.23l-0.32,0.55l-0.27,0.17l-1.84,0.84l-0.21,0.04l-0.15,-0.02l-0.23,-0.11l-0.29,-0.21l-2.6,-2.18l-0.09,-0.24l-0.4,-1.84l-0.09,-1.18l0.01,-0.32l0.42,-4.26l0.08,-0.33l0.09,-0.24l0.2,-0.28l1.08,-1.3l0.18,0.17l-0.21,0.56l-0.03,0.37l0.28,1.15l0.24,0.06l1.64,-0.53l0.23,-0.09l0.3,-0.19l0.17,-0.16l0.15,-0.17l0.13,-0.19l0.1,-0.23l0.38,-1.35l0.04,-0.29l-0.03,-0.38l-0.14,-0.25l-1.48,-0.26l-0.67,-1.07l-0.02,-0.29l-0.13,-0.34l-0.26,-0.29l-0.34,-0.16l-0.43,-0.07h-0.16l-0.28,0.04l-0.39,0.08l-0.2,-0.05l-0.08,-0.21l0.33,-0.48l0.4,-0.24l2.61,-0.48l0.27,-0.04l0.35,0.07l0.36,0.21l0.15,0.16l0.19,0.29l0.21,0.51l0.48,0.72l0.22,0.27l0.35,0.3l0.35,0.14l0.29,0.04l0.29,-0.03l0.34,-0.14l2.47,-1.47l0.3,-0.27l0.26,-0.38l1.29,-2.2l0.13,-0.44l0.02,-0.31l-0.08,-1.88l0.3,-0.35l0.31,-0.25l1.61,-0.86l0.5,-0.16l0.8,1.04l0.13,0.19l0.09,0.23l0.06,0.26l0.03,0.29l0.12,0.28l1.58,2.17l0.16,0.16l0.43,0.38l0.38,0.26l0.39,0.1l0.23,-0.01l0.39,-0.17l1.61,-0.8l1.85,-1.22l0.18,-0.14l0.2,-0.29l1.66,0.67l1.1,0.85l-0.01,0.21l-0.03,3.38l-0.05,11.36l0.01,1.47l-0.02,4.09l-0.04,7.91l-0.03,3.8l-0.04,8.16l0.02,0.5l-0.02,4.66L580.49,679.66zM493.34,569.41l-0.17,-0.04l-1.07,-0.6l-0.28,-0.36l0.4,-0.77l0.44,-0.41l0.9,-0.6l0.37,-0.16l0.31,0.21l0.49,0.34l-0.68,-0.92l-0.38,-0.08l-0.41,0.18l-1.17,0.96l-0.49,0.1l-0.36,-0.63l0.09,-1.04l0.28,-2.06l-0.5,-2.25l0.5,-3.26l0.59,-0.62l0.84,-0.68l1.83,-2.55l-0.56,0.2l-0.87,1.16l-1.58,1.86l-1.14,0.76l-0.22,-0.45l-0.11,-0.89l-0.5,0.64l-0.05,0.6l0.02,1.12l0.03,0.84l0.24,0.56l0.36,0.5l-0.31,2.9l-0.44,1.99l-0.48,-0.11l-1.32,-1l-1.03,-2.08l-1.15,-2.66l0.34,-1.29l-0.28,-1.54l-0.49,-0.89l-0.6,-0.62l-0.49,0.23l-0.44,0.26l-0.35,-1.17l-0.07,-0.67l-0.02,-1.22l0.54,-0.69l0.32,-0.12l0.31,0.07l0.75,1.34l0.17,0.59l0.51,1.07l1.14,1.48l0.41,0.29l0.12,0.04l0.02,-0.18l-0.53,-0.94l-0.51,-0.71l-0.26,-0.34l-0.3,-0.48l-0.61,-1.45l0.05,-1.04l0.67,-0.17l0.31,0.37l0.77,1.28l0.44,0.15l1.21,-1.65l0.15,-0.42l-0.33,-0.9l0.48,0.36l1.14,1.4l0.83,1.1l0.41,-1l0.88,-4.21l-0.89,-1.06l-0.52,-0.55l-0.32,-0.22l-0.29,-0.48l-0.77,-1.73l-0.53,-1.48l0.17,-0.95l1.03,-0.78l1.95,-1.36l1.4,-0.36l2.85,0.68l0.25,0.88l0.35,3.21l0.34,0.95l0.06,0.45l-0.11,2.71l0.45,2.34l0.07,0.47l-0.01,1.85l-0.38,2.65l-0.27,1l-0.34,0.59l-0.13,0.84l0.33,0.98l-0.71,0.78l-0.7,1.51l0.04,0.64l0.94,-0.96l-0.06,-0.43l0.04,-0.46l0.89,-0.19l0.35,0.41l0.33,0.7l0.08,1.38l-0.73,4.25l-0.19,0.35l-0.9,1.1l-1.22,1.09l-0.45,0.13L493.34,569.41zM581.48,692.68l-0.31,-0.04l-0.33,-0.1l-0.29,-0.4l-0.27,-0.67l-0.35,-0.33l-0.42,0.01l-0.5,0.4l1.99,2.14l0.79,-0.23l0.42,-0.27l0.35,-0.16l0.44,-0.07l0.7,0.13l0.96,0.42l2.57,1.26l0.26,0.51l-0.11,0.7l-0.23,0.51l0.6,0.19l0.85,-0.11l-0.59,1.32l0.88,1.48l0.43,0.18l0.69,0.09l-0.17,2.01l-1.05,1.02l-0.18,0.15l-0.07,0.03l-0.39,-0.09l-0.19,-0.37l-0.47,-0.74l-1.12,-1.29l-0.56,-1.24l0.17,-0.93l-1.56,-1.32l-0.28,-0.09l-0.48,0.6l-0.82,0.06l-0.96,-0.87l-0.98,-0.06l-1.72,0.02l-0.57,0.71l-0.78,0.34l-0.36,-0.01l-0.63,-0.49l-0.64,-0.76l-0.41,-0.82l0.47,-0.71l0.95,-0.29l0.37,-0.06l0.35,0.15l0.48,-0.11l0.2,-1.26l-1.82,0.65l-0.21,-0.48l0.27,-1.42l0.43,-1.26l0.58,-0.63l0.14,-0.47l-2.24,1.74l-0.89,0.22l-1.61,-0.5l-0.36,-0.22l-0.39,-0.38l-0.32,-0.54l-0.4,-1.64l-1.84,0.34l-0.38,0.13l-0.32,0.23l0.9,-0.08l0.98,0.11l0.4,1.49l-1.51,0.57l-0.22,1.03l1.22,1.89l0.04,1.53l1.25,0.29l0.99,0.07l-0.12,1.48l-0.25,0.26l-2.21,-0.57l-1.47,0.28l-0.93,-2.18l0.38,-0.87l0.75,-0.18l0.26,-0.24l-1.01,-0.56l-0.39,-0.03l-1.14,1l-0.55,-1.07l-1.29,-0.59l0.08,-0.77l0.43,-0.84l1.1,-0.87l0.39,-0.12l0.47,-0.21l0.34,-0.49l-0.58,0l-0.63,0.39l-1.3,1l-2.13,0.62l-0.36,0.02l-0.88,-0.85l0.78,-0.14l0.3,-0.25l-0.87,-0.94l-1.58,-0.08l-0.24,-0.26l0.31,-0.71l1.12,-1.27l0.51,-0.25l1.46,-0.34l2.13,-0.24l3.98,-0.75l2.41,-0.63l2.88,-0.25l2.27,0.09l0.33,-0.07l1,-0.78l1.14,-0.21l2.09,-0.22l1.51,0.6l0.89,1.21l0.23,0.98l-0.17,0.65l-3.26,1.51l-0.25,0.38l-0.84,0.22l-1.75,-0.48l-0.73,-0.47l-0.51,-0.52l-0.45,-0.4l-0.29,-0.22l-1.6,-1.12l-0.3,0l-0.27,0.6l1.36,1.53l1,0.62l1.67,0.98l2.55,0.11l2.14,0.04l0.94,0.07l1.47,0.98l0.98,1.09l-0.08,0.48l-4.23,0.63L581.48,692.68zM514.02,656.32l0.7,-0.49l0.14,-2.31l-1.88,0.11l-0.61,0.45l-0.52,0.25l-0.42,0.13l-1.23,0.03l0.65,-0.53l0.41,-0.24l0.27,-0.32l-0.13,-0.97l-0.42,-0.03l-0.57,0.06l-0.44,-0.06l-0.31,-0.31l0.02,-0.96l0.19,-0.49l0.25,-0.24l0.61,-0.1l0.37,0.3l0.29,0.03l0.33,-0.24l0.45,-0.44l0.29,0.03l1.09,0.59l0.27,0.38l0.18,0.46l0.36,0.61l0.41,0.26l1.24,0.39l0.41,0.03l1.32,-0.04l1.29,-0.22l-0.02,-0.63l-0.43,0.01l-0.3,0.28l-0.97,0.08l-0.94,-0.11l-0.46,-0.07l-1.02,-0.27l-0.45,-0.31l-1.75,-2.83l-0.32,-0.92l0.62,-0.07l0.5,0.18l0.79,0.4l2.62,0.51l-0.38,-1.22l-0.61,-0.89l1.38,-0.46l1.07,0.12l1.26,0.52l0.54,2.6l-0.23,1.08l-0.26,0.92l0.45,1.35l0.85,-2.51l0.12,-0.75l-0.39,-0.89l-0.34,-0.91l1.04,0.38l0.74,0.93l0.87,2l1.22,-0.98l1.45,0.21l0.65,0.42l0.55,0.95l-0.06,0.67l-0.43,-0.05l-0.41,0.15l-0.26,0.49l0.6,1.6l0.48,-0.7l0.52,-0.64l1.57,0.64l0.33,0.26l1.36,1.77l-0.5,0.35l-0.25,0.07l-0.27,0.99l-0.47,0.31l-0.36,-0.04l-1.13,-0.25l-0.92,0.79l0.02,1.72l0.27,0.23l0.58,0.27l0.46,0.14l-0.06,1.12l-1.46,0.15l-1.5,1.3l-0.36,0l-0.31,-0.14l-0.59,-0.73l-1.21,0.64l-1.62,1.06l-0.73,-0.01l-1.71,-0.86l-0.43,-0.48l0.29,-0.41l1.62,-0.03l1.64,-1.09l0.7,-4.14l-1.05,-0.56l-0.39,0.25l-0.92,0.81l-0.45,0.2l-1.25,-0.08l-0.09,-0.55l-0.05,-0.63l-0.52,-0.22l-0.6,2.51l-0.02,0.59l-0.43,1.67l-1.29,-0.59l-0.5,-1.25l-0.49,-1.35l-0.31,-0.95L514.02,656.32zM588.59,682.59l1.37,0.01l1.46,0.17l1.24,0.12l1.97,0.09l0.9,-0.09l0.32,-0.02l1.8,-0.01l0.61,0.06l0.97,0.23l0.53,0.15l0.48,0.2l0.34,0.17l0.55,0.3l0.26,0.25l1.59,2.45l0.03,1.59l-0.37,1.08l-0.19,0.4l-0.13,0.21l-1.87,2.49l-0.14,0.11l-0.62,0.08h-0.17l-1.44,-0.44l-0.24,-0.1l-0.31,-0.2l-0.19,-0.24l-0.09,-0.25l0.04,-0.41l0.29,-0.36l0.16,-0.26l0.04,-0.27l-0.1,-0.23l-0.29,-0.31l-0.29,-0.22l-0.37,-0.13l-0.42,-0.1l-0.29,-0.01l-0.27,0.07l-0.48,0.21l-0.17,0.17l-0.13,0.21l-0.15,0.36l-0.14,0.62l0.04,0.62l-0.16,0.18l-0.22,0.04l-2.04,-0.15l-0.25,-0.09l-0.76,-0.46l0.21,-0.27l0.19,0l-0.02,-0.44l-0.43,-0.77l-0.27,0.1l-1.87,1.01l-0.46,0.28l-0.1,0.01l-0.31,-0.04l-0.24,-0.1l-0.21,-0.14l-0.26,-0.26l-0.1,-0.24l-0.56,-2.66l0.09,-0.42l-0.32,-2.35l-0.28,0.07l-1.3,0.07l-0.43,-0.54l-0.19,-0.86l0.23,-0.32l0.16,-0.09l1.89,-0.32L588.59,682.59zM513.18,642.96l0.95,-0.18l0.17,0.06l1.04,0.7l1.61,1.14l0.16,0.27l-0.15,0.34l-0.21,0.12l-0.15,0.01l-1.62,-0.1l-3.54,-0.94l-0.13,-0.65l-0.09,-0.28l-0.98,-0.45l-0.41,-0.87l-1.64,-1.57l-0.23,0.06l-1.38,-1.37l-0.88,-1.14l-1.2,0.27l-0.6,0.32l-0.68,0.43l-3.34,-0.13l-0.33,-0.2l-0.35,-1.39l-1.05,-1.31l-0.28,-0.01l-0.89,-0.23l-1.15,-0.91l-0.12,-0.27l0.12,-0.41l0.27,-1.13l-0.39,-0.63l-0.14,-0.1l-0.36,-0.08l-0.67,-0.33l-0.2,-0.13l-0.73,-0.98l0.6,-0.91l0.18,-0.02l0.66,0.45l2.05,2.01l0.8,0.95l0.55,1.29l0.62,0.71l1.58,0.36l0.18,-0.32l0.58,-0.16l0.96,-0.18l1.49,0.58l1.82,1.07l0.89,0.78l0.59,0.37l1.07,0.54l0.89,0.03l0.02,-0.45l0.68,0.17l0.6,0.8l0.1,0.19l0.25,1.01l-0.14,0.28l-0.22,0.28l-0.13,0.32l0.52,1.42l0.15,0.25l0.22,0.12l0.54,-0.98l-0.15,-0.44l-0.14,-0.53l-0.14,-0.82l0.18,-0.25l0.21,-0.02l0.26,0.08l0.41,0.18l1.56,1.95l0.06,0.27L513.18,642.96zM542.86,660.77l0.34,1.51l1.15,0.25l1.27,-0.56l0.97,0.68l0.13,0.28l0.26,1.84l0.06,2.22l-1.72,2.66l-0.17,0.16l-0.26,-0.02l-0.25,-0.25l-0.54,-0.71l-0.81,-0.19l-1.34,-0.62l-1.36,-2.55l-0.07,-0.41l0.11,-0.4l0.17,-0.16l0.45,-0.04l0.21,-0.12l0.1,-0.19l-0.55,-0.9l-1.17,0.97l-0.54,1.6l-0.08,0.26l-0.04,0.54l-1.44,-0.33l-0.25,-0.17l-0.3,-0.76l-0.15,-0.51l-0.11,-0.46l0.06,-0.33l0.84,-1.02l-0.36,-2.8l0.17,-0.54l0.3,-0.37l0.23,-0.18l0.6,-0.12l1.43,0.03l1.32,0.58l1.09,0.6l0.13,0.12L542.86,660.77zM553.63,665.98l-0.13,-0.04l-1.2,-0.49l-0.58,-0.27l-0.54,-0.3l-0.18,-0.15l-1.29,-1.21l-0.27,-0.31l-0.84,-1.56l-0.27,-2.43l-0.02,-0.3l0.02,-1.36l0.11,-0.23l0.77,-0.57l0.71,-0.27l0.23,0.04l1.23,0.42l0.31,0.28l0.18,0.07l0.15,0.02l0.26,-0.15l0.19,-0.32l0.01,-0.3l-0.14,-0.35l-0.25,-0.32l-0.19,-0.14l-0.62,-0.3l-0.13,-0.2l-0.08,-0.32l-0.06,-1.57l0.08,-0.34l0.43,-0.13l0.2,-0.13l0.19,-0.14l0.25,-0.24l0.32,-0.35l0.2,-0.29l0.11,-0.23l0.12,-0.39l0.11,-0.48l0.11,-0.31l0.12,-0.21l0.22,-0.19l0.66,-0.11l0.22,0.23l-0.07,1.77l-0.06,0.27l-0.08,0.27l-0.04,0.29l-0.02,0.49l0.01,0.31l0.04,0.29l0.7,3.34l0.82,2.1l0.52,1.44l-0.05,0.37l-0.29,0.33l-0.3,0.1l-0.53,0.03l-0.15,-0.02l-0.27,-0.07l-0.23,-0.11l-0.39,-0.28l-0.44,-0.4l-0.38,-0.61l-0.18,-0.23l-1.34,-1.33l-0.09,0.26l0,0.31l0.17,0.8l0.09,0.24l0.11,0.21l0.29,0.38l0.25,0.25l0.14,0.19l0.28,0.46l0.61,1.99l0.1,0.39l0.23,1.82L553.63,665.98zM537.32,659.09l-0.71,0.74l0.15,0.27l0.31,0.32l0.51,1.99l-0.05,0.39l-0.83,1.23l-0.26,0.33l-0.2,0.05l-0.15,-0.02l-0.53,-0.16l-0.21,-0.13l-0.18,-0.16l-0.22,-0.28l-1.2,-1.92l-0.03,-0.38l0.06,-0.52l-0.12,-0.21l-0.22,0.01l-0.16,0.35l-0.02,0.32l0.07,0.33l0.49,1.7l0.52,0.65l0.2,0.12l0.34,0.19l1.39,1.76l0.01,0.37l-0.13,0.29l-1.13,1.85l-0.15,0.1l-0.21,-0.01l-1.21,-0.28l-0.26,-0.5l0.19,-1.31l-2.24,-2.27l-1.29,-1.4l-0.19,-0.23l-0.14,-0.27l-0.09,-0.24l-0.41,-2.56l-0.06,-0.54l0.07,-0.39l0.6,-0.12l0.15,-0.01l0.15,0.03l0.87,0.37l0.2,0.22l0.17,0.48l0.6,-0.01l0.74,-1.77l0.23,-0.67l0.37,-0.2l0.29,-0.12l3.14,1.16l0.97,0.5l-0.06,0.39L537.32,659.09zM489.18,574.81l-0.3,0.47l-1.74,2.34l-0.18,0.21l-0.32,0.12l-1.04,-0.08l-0.15,-0.06l-0.06,-0.21l0,-0.33l0.16,-0.36l0.5,-0.32l0.4,-0.5l0.63,-0.92l-0.2,-0.19l-0.96,0.27l-0.7,0.46l-1.45,0.63l-0.19,0l-0.15,-0.15l0.01,-0.36l0.19,-1.55l0.35,-1.23l0.38,-1.08l0.11,-0.29l0.17,-0.22l0.19,-0.1l0.26,-0.02l0.24,0.09l0.95,0.4l0.06,0.22l-0.15,0.24l-0.14,0.09l-0.4,0.08l-0.57,0l-0.09,0.18l0.21,0.39l0.21,0.18l0.6,0.32l1.14,0.28l0.76,-0.12l-0.05,-1.09l-0.16,-0.68l-0.98,-0.31l-1.07,-0.69l-1.13,-0.96l-0.25,-0.8l1.16,-0.92l0.24,-0.03l2.25,0.56l0.17,0.14l1.87,2.28l-0.7,0.69l-0.21,0.25l-0.11,0.23l0.61,0.03l2.34,-0.57l0.25,-0.56L492,571l0.6,-0.27l0.21,0.25l0.14,0.48l-0.04,0.75l-0.25,0.7l-2.73,1.61l-0.2,0.11L489.18,574.81zM493.94,593.01l-2.34,-1.12l-1.07,-1.94l-0.06,-0.24l0,-0.36l0.06,-0.35l0.38,-1l0.17,-0.13l0.82,0.07l1.66,0.44l0.79,0.32l1.07,-0.59l0.08,-1.77l-0.04,-0.44l-0.14,-0.32l-0.38,-0.4l-0.17,-0.08l-0.24,-0.15l-0.09,-0.21l0.07,-0.24l0.31,-0.19l0.51,0.12l0.98,0.46l0.89,0.6l1.14,1.15l0.12,0.29l0.06,0.38l0.36,3.68l-0.29,1.3l-0.15,0.17l-0.18,-0.09l-0.06,-0.45l-0.22,-0.81l-0.4,-0.61l-0.22,-0.09l-0.16,0.05l-1.62,0.98l-0.28,0.94l-0.11,0.19l-1.17,0.41L493.94,593.01zM556.1,682.38l0.4,0.05l0.14,0.15l-1.85,0.86l-0.61,0.06l-0.28,0.24l-0.04,0.4l0.05,0.42l-0.13,0.23l-1.57,0.25l-0.49,-0.04l-0.38,-0.13l-0.32,-0.2l-0.17,0.1l-0.17,0.42l1.13,0.48l2.31,0.3l1.82,-0.3l0.22,-0.02l0.74,-0.03l0.14,0.08l0.09,0.49l0.21,1.5l-0.42,0.41l-0.38,0.04l-0.19,-0.07l-0.17,-0.16l-0.13,-0.38l-0.36,-0.4l-0.29,-0.06l-0.15,-0.06l-0.48,0.39l-0.05,0.57l0.13,0.21l0.38,0.21l0.31,0.05l0.16,0.1l0.09,0.24l-0.15,0.35l-2.1,0.97l-0.26,-0.03l-0.14,-0.2l-0.08,-0.34l-0.04,-0.46l0,-0.63l0.25,-0.55l-0.81,-0.96l-1.32,1.11l-0.31,-0.07l-3.08,-1.17l-1.01,-0.83l-0.11,-1.94l0.19,-0.24l0.21,-0.13l1.57,-0.34l1.17,0.27l0.6,0.19l0.66,0.33l1.77,0.06l0.25,-0.14l-0.78,-0.34l0.1,-0.25l1.44,-0.83l0.19,-0.06l0.87,-0.04L556.1,682.38zM501.21,587.15l-0.38,-1.04l-0.17,-0.21l-0.31,-0.23l-0.64,0.34l-0.07,0.24l-1.23,-0.47l-1.41,-1.13l-0.14,-0.17l-0.68,-1.52l-0.11,-0.33l-0.07,-0.44l0.06,-0.26l1.07,-1.04l1,-1.03l-1.07,-0.45l-0.15,-0.01l-0.5,0.18l-0.21,0l-1.51,-0.78l0.85,-0.78l0.18,-0.14l0.46,-0.3l0.26,-0.11l0.19,0.03l2.38,1.58l1.27,2.92l0.53,1.26l0.79,2.05l0.07,0.45l-0.03,0.53l-0.17,0.73l-0.14,0.1L501.21,587.15zM562.42,685.95l0.11,-0.71l-0.02,-0.3l-0.25,-0.55l-0.42,-0.14l-0.08,-0.37l0.32,-1.55l0.14,-0.11l0.85,-0.31l0.14,-0.03l1.57,-0.27l0.76,0.03l4.02,0.86l0.41,0.1l2.4,0.77l0.54,0.51l-0.25,0.17l-0.46,0.04l-2.66,0.67l-1.39,0.42l-2.1,0.38l-1.57,0.27L562.42,685.95zM505.37,630.17l-0.13,-0.01l-0.2,-0.13l-1.85,-2.17l-0.12,-0.27l0.01,-0.23l0.31,-0.86l0.14,-0.18l0.82,-0.96l2.27,-2.15l0.88,-0.58l0.2,-0.03l0.2,0.06l0.18,0.15l0.15,0.26l0.61,1.29l-0.82,2.91l-0.79,1.73l-0.11,0.22l-0.2,0.29l-0.25,0.12l-0.24,-0.08l-0.15,0.02l-0.48,0.29L505.37,630.17zM490.12,601.28l-0.13,-0.01l-0.32,-0.22l0.08,-0.59l1,-0.79l0.74,-0.33l0.3,-0.16l1.05,-1.16l0.12,-0.28l-0.15,-0.04l-1.53,0.86l-0.3,0.24l-0.29,-0.1l-0.16,-0.26l-0.06,-0.31l0.05,-0.27l0.12,-0.21l2.27,-2.44l1.11,-0.32l1.45,-0.06l0.64,0.76l0.11,0.2l0.36,1.01l-0.11,1.88l-0.18,0.31l-0.59,0.68l-0.14,0.09h-0.33l-0.18,-0.14l-0.5,-1.67l-0.58,0.31l-0.3,0.68l-0.62,1.33l-0.2,0.11l-0.61,0.13l-0.54,0.04l-0.78,0.1l-0.25,0.14L490.12,601.28zM485.3,585.82l-1.38,-0.38l-0.29,-0.12l-0.15,-0.17l-0.83,-2.31l0.12,-0.28l0.65,-0.67l0.46,-0.29l0.2,-0.02l0.21,0.04l0.36,0.25l0.08,-0.64l-0.44,-1.06l-0.41,-0.35l-0.49,-0.35l0.03,-0.31l0.68,-0.62l0.32,-0.04l2.9,0.64l1.23,0.07l0.14,0.15l-0.09,0.3l-1.42,1.88l-0.23,0.06l-0.16,-0.02l-0.26,-0.07l-0.22,-0.1l-0.25,-0.22l-0.04,0.63l0.06,1.45l0.06,1.65l-0.23,0.71l-0.25,0.17l-0.23,0.08L485.3,585.82zM487.41,566.08l-0.24,-0.42l-0.82,-1l-0.34,-0.12l0.12,0.67l0.11,0.4l0.01,0.23l-0.19,0.1l-0.34,-0.13l-0.45,-0.46l-0.27,-0.33l-0.37,-0.74l-0.01,-0.27l0.06,-0.27l-0.81,-0.63l-1.59,1.52l-0.28,-0.11l-0.39,-0.89l-0.07,-0.22l-0.16,-2.68l0.58,-0.77l2.55,-0.24l0.17,0.05l0.17,0.14l0.21,0.25l0.52,0.75l1.57,3.22l0.07,0.22l0.29,1.59L487.41,566.08zM490.4,616l-0.25,-0.47l-1.04,-2.93l1.24,-3.35l0.24,-0.33l0.43,0.47l0.05,0.24l-0.17,0.32l0.03,0.25l0.35,0.07l0.47,-0.07l0.3,-0.1l0.33,-0.4l-0.43,-2.76l-0.42,-1.14l-0.38,-0.19l-0.2,-0.19l-0.03,-0.25l0.16,-0.25l0.27,-0.2l0.2,-0.1l0.29,-0.07l0.9,0.34l0.23,0.31l0.06,0.24l0.21,2.03l0.07,0.75l-0.22,0.96l-0.71,2.81l-0.75,2.34l-0.71,1.26l-0.21,0.27l-0.17,0.14L490.4,616zM486.3,548.11l-0.79,-2.45l-0.13,-0.31l-1.42,0.71l-0.46,0.89l-0.12,0.18l-0.21,0.17l-0.31,0.04l-1.99,-1.56l-0.1,-0.19l-0.08,-0.2l-0.05,-0.37l0,-0.26l0.03,-0.3l0.05,-0.26l0.25,-0.69l0.16,-0.22l1.1,-0.37l2.5,0.17l0.23,0.08l0.54,0.23l0.17,0.14l0.3,0.43l1.13,3.1l0,0.27l-0.54,0.59l-0.16,0.13L486.3,548.11zM490.65,552.37l-1.33,-1.58l-2.1,-0.71l-0.64,-0.44l0.03,-0.36l0.13,-0.29l0.39,-0.7l0.19,-0.27l0.93,-1.18l2.06,0.13l0.38,0.3l0.78,0.88l0.06,0.77l-0.01,0.28l-0.51,3.59l-0.2,-0.16L490.65,552.37zM485.55,604.88l-0.11,-0.34l0.04,-1.78l0.59,-0.64l0.61,-0.97l0.13,-1.14l0.04,-1.6l-0.02,-0.38l0.03,-0.32l0.07,-0.26l0.11,-0.21l0.66,-0.6l0.23,-0.16l0.18,-0.01l1.79,1.59l0.12,0.69l-0.05,0.66l-0.07,0.26l-0.22,0.17h-0.19l-0.21,-0.19l-0.26,-0.05l-0.14,0.1L488,601.7l0.06,0.39l0.02,0.41l-0.03,0.37l-0.1,0.32l-0.17,0.4l-1.92,1.23l-0.16,0.06L485.55,604.88zM502.13,622.37l-0.64,-0.5l-0.53,-1.03l-0.1,-1.82l0.1,-0.23l0.22,-0.17l0.16,-0.07l0.3,0.04l0.34,0.17l0.16,0.16l0.36,0.21l0.17,-0.06l-0.57,-1.25l-0.15,-0.17l-0.36,-0.28l-1.24,-0.42l-0.81,0.12l-0.23,0.08l-0.33,-0.03l-0.28,-0.13l-0.4,-0.33l-0.03,-0.3l0.96,-0.91l0.25,-0.14l0.28,-0.1l0.15,-0.01l0.21,0.12l0.18,0.14l1.12,0.97l0.94,0.97l0.59,0.69l2.16,2.66l-0.01,0.32l-0.6,0.45l-1.8,0.94l-0.46,0.02L502.13,622.37zM482.65,552.24l-0.13,-0.02l-1.59,-0.87l-0.22,-0.16l-0.08,-0.21l0.78,-1.55l0.76,-0.52l0.2,-0.05l0.27,0.13l0.72,-0.68l0.4,-1.09l0.67,-0.87l0.25,-0.2l0.25,-0.11l0.17,0.06l0.21,0.51l0.54,1.54l0.06,0.3l-0.28,0.58l-0.24,0.37l-0.13,0.16l-2.03,2.21L482.65,552.24zM494.25,588.03l-1.14,-0.1l-0.57,-0.17l-1.5,-0.53l-0.18,-0.28l-0.36,-1.56l0.07,-0.76l0.08,-0.25l0.86,-1.11l0.99,-0.35l0.21,0.07l0.88,0.84l1.17,2.6l0.03,0.26l-0.15,0.84l-0.2,0.45L494.25,588.03zM501.87,612.19l-0.97,-0.18l-2.03,-1.24l-0.76,-0.97l-1.07,-3.13l1.84,0.62l2.87,2.35l1.16,0.8l-0.02,0.25l-0.6,1.28l-0.15,0.17L501.87,612.19zM546,683.78l-0.24,-0.02l-1.04,-0.5l-0.79,-0.68l-1.7,1.08l-0.22,0.11l-0.95,-0.27l-0.67,-1.49l0.75,-1.4l0.68,0.06l2.19,0.47l0.92,0.29l0.39,0.29l0.48,0.21l0.35,-0.07l0.31,-0.19l0.22,-0.29l0.17,-0.04l0.74,0.55l0.44,1.17l-0.29,0.13l-0.47,0.01L546,683.78zM508.11,618.46l-0.08,-0.2l-0.39,-0.72l-0.65,-1l-0.98,-1.04l-0.27,-0.21l-0.86,-0.6l-1.83,-1.1l-0.2,-0.13l-0.25,-0.22l-0.02,-0.81l0.26,-0.93l0.5,-0.38l0.18,0.04l0.27,0.21l2.41,2.21l0.74,0.71l0.51,0.52l0.13,0.26l0.73,1.67l0.31,1.26l0.01,0.37l-0.08,0.42l-0.22,-0.01L508.11,618.46zM503.87,608.72l-0.32,-0.09l-0.21,-0.11l-1.98,-1.47l-0.3,-0.26l-0.23,-0.31l-0.02,-0.42l0.11,-0.21l0.66,-0.14l0.62,0.01l0.74,-1.27l-0.23,-1.38l0.09,-0.23l0.13,-0.1l0.21,0.04l0.23,0.21l1.89,4.79l-0.01,0.36l-0.2,0.24l-0.18,0.13l-0.36,0.19l-0.3,0.08l-0.15,0.01L503.87,608.72zM598.94,704.65l0.02,-0.77l-0.13,-0.13l-0.76,-0.2l-0.85,0.22l-1.32,-0.47l-0.06,-0.64l0.19,-1.22l1.62,-1.79l0.83,-0.43l0.25,-0.01l1.21,3.68l0.23,1l-0.07,0.28l-0.32,0.28l-0.31,0.12L598.94,704.65zM491.81,616.54l-0.09,-0.04l-0.29,-0.55l1.46,-4.96l0.11,-0.31l0.3,-0.69l0.16,-0.34l0.16,-0.24l0.18,-0.02l1.85,0.26l-0.06,0.35l-2.34,5.18l-0.15,0.18l-1.19,1.1L491.81,616.54zM528.45,662.35l0.79,0.73l0.43,0.88l-0.62,1.34l-0.71,1.28l-0.29,0.11l-1.53,0.09l-0.54,-0.08l-0.31,-0.2l-0.16,-0.18l-0.14,-0.98l1.77,-2.7l0.29,-0.29l0.49,-0.25l0.37,0.03l0.13,0.11L528.45,662.35zM506.46,622.39l-0.59,-0.75l-0.47,-1.35l-1.22,-1.04l-1.1,-1.43l-0.11,-0.2l-0.12,-0.5l0.21,-0.31l0.45,-0.26l0.16,0.01l0.67,0.45l0.59,0.95l1.97,1.09l0.29,0.34l0.17,0.3l0.06,0.25l0.36,1.58l-0.06,0.37l-0.19,0.25l-0.61,0.34l-0.35,-0.01L506.46,622.39zM512.3,645.99l0.31,0.14l0.18,0.3l-1.01,1.37l0.91,1.29l0.1,0.36l-1.34,0.75l-0.29,-0.11l-1.91,-1.14l-1.75,-1.33l-0.22,-0.34l-0.25,-0.47l0.05,-0.25l0.24,0.01l0.51,0.56l0.47,0.36l0.3,0.21l0.24,0.1l0.15,0.03l0.59,0.05l1.21,-0.46l-0.02,-0.25l-0.13,-0.12l-0.44,-0.23l0.2,-0.91l1.63,0.04l0.16,0.01L512.3,645.99zM487.03,546.23l-0.28,-0.6l-1.18,-3.6l0.46,-0.03l0.71,0.23l0.21,0.1l0.4,0.21l0.48,0.3l0.48,0.36l0.17,0.19l0.12,0.17l0.2,0.38l0.07,0.22l0.26,1.09l-0.04,0.25l-0.12,0.19l-1.45,0.62l-0.25,0.01L487.03,546.23zM498.1,595.15l-1.9,-0.91l-0.2,-0.19l-0.42,-1.23l0.06,-0.64l1.51,-1.11l0.24,-0.03l0.16,0.08l0.17,0.29l0.88,1.83l0.08,0.22l0.04,0.26l0,0.63l-0.34,0.79l-0.18,0.04L498.1,595.15zM500.18,595.42l-0.59,-3.01l-0.2,-1.27l-0.15,-2.13l0.1,-0.22l0.37,-0.02l0.28,0.6l0.85,2.75l0.5,2.03l0.11,0.83l-0.81,1.01l-0.2,0.11l-0.2,-0.02l-0.11,-0.2l0.03,-0.38L500.18,595.42zM557.08,667.12h-0.17l-0.3,-0.05l-1.91,-0.79l-0.27,-0.15l-0.56,-0.85l-0.11,-0.22l-0.03,-0.3l0.09,-0.43l0.13,-0.29l0.19,-0.05l0.28,0.06l2.5,1l0.83,0.53l0.25,0.4l-0.04,0.38l-0.17,0.29l-0.36,0.39l-0.19,0.06L557.08,667.12zM514.54,663.72l-0.88,-0.48l-1.75,-0.81l-0.15,-0.25l1.12,-1.03l0.53,-0.02l0.47,0.03l0.97,0.13l0.18,0.08l0.79,0.44l0.07,0.25l0.24,1.19l-0.21,0.25l-0.25,0.06L514.54,663.72zM605.61,690.65l0.28,0.3l0.32,1.24l-0.22,0.59l-0.45,0.36l-0.27,0.08l-1.54,-0.08l-0.71,-0.06l-0.14,-0.12l-0.15,-1.23l0.41,-0.66l0.32,-0.19l1.11,-0.44l0.4,-0.04l0.27,0.06l0.24,0.1L605.61,690.65zM516.8,614.47l-0.06,-0.48l0.08,-0.43l0.1,-0.31l0.1,-0.23l0.6,-1.28l0.13,-0.1l1.14,-0.58l1.13,-0.42l-0.07,0.74l-1.38,2.89l-0.39,0.16l-0.8,0.28l-0.3,0.05l-0.15,-0.09L516.8,614.47zM503.08,599.03l-0.17,-0.12l-0.17,-0.23l-0.25,-1.53l0.01,-0.23l0.16,-1.09l0.11,-0.21l0.16,-0.08l0.27,-0.03l1.04,0.17l0.36,0.24l0.09,0.32l0.18,1.16l-0.04,0.52l-1.35,1.15L503.08,599.03zM488.13,542.77l-0.1,-0.05l-1.54,-1l-0.04,-0.33l0.86,-1.13l1.5,-1.72l0.19,-0.04l0.1,0.26l0.05,0.23l0.06,0.36l-0.01,0.28l-0.03,0.3l-0.37,1.57l-0.35,0.98l-0.15,0.24L488.13,542.77zM493.41,579.28l-0.31,-0.1l-0.1,-0.17l0.44,-2.14l0.8,-0.61l0.16,-0.06l0.26,0.01l0.86,0.1l0.89,0.29l0.04,0.23l-0.2,0.35l-1.19,1.04l-1.17,0.97l-0.21,0.09L493.41,579.28zM498.09,559.71l-0.14,-0.85l-0.16,-1.98l0.1,-0.87l0.07,-0.34l0.17,-0.07l0.85,0.75l0.36,0.34l0.14,0.23l0.63,1.36l-0.07,0.2l-1.76,1.53L498.09,559.71zM488.42,610.97l-0.12,-0.12l-0.07,-0.23l0.38,-2.16l0.26,-0.91l0.09,-0.24l0.22,-0.27l0.31,-0.24l0.28,-0.1l0.36,0.07l0.3,0.3l0.05,0.36l-0.13,0.86l-0.25,0.93l-0.22,0.69l-0.14,0.27l-0.16,0.17l-0.63,0.55l-0.33,0.12L488.42,610.97zM502.27,600.71l-0.86,-0.49l-0.57,-0.41l-0.17,-0.21l-0.2,-1.21l-0.04,-0.69l0.06,-0.42l1.1,-0.39l0.19,0.12l0.75,2.05l0.08,0.23l0.03,1.21l-0.08,0.25l-0.18,0.04L502.27,600.71zM609.71,691.97l-0.66,-0.17l-0.14,-0.2l-0.08,-0.43l-0.01,-0.25l0.24,-1.02l1.24,-0.9l0.33,-0.02l0.22,0.03l0.98,0.46l0.17,0.44l-1.29,1.65l-0.85,0.41L609.71,691.97zM554.46,680.93l0.35,0.1l0.28,0.14l0.34,0.47l-0.15,0.27l-0.18,0.06l-2.62,0.54h-1.06l-0.74,-0.44l-0.2,-0.35l0.2,-0.2l0.48,-0.28l1.53,-0.44l1.06,-0.12l0.63,0.22L554.46,680.93zM489.04,585.96l-0.18,-0.2l-0.11,-0.2l-0.34,-1l-0.03,-0.41l0.47,-1.36l0.19,-0.11l1.08,0.04l0.12,0.18l0.04,0.32l-0.11,2.96l-0.17,0.13l-0.46,-0.05L489.04,585.96zM526.05,670.88l-0.17,-0.08l-0.71,-0.96l-0.22,-1.02l1.59,-0.91l0.31,0.03l1.53,0.63l0.07,0.26l-0.14,0.51l-0.99,0.45l-0.17,-0.01L526.05,670.88zM493.89,614.78l0.13,-0.51l0.09,-0.25l0.16,-0.24l2.19,-2.21l0.5,0.31l0.28,0.36l-0.01,0.68l-0.16,0.46l-0.82,0.56l-1.69,1.05l-0.62,0.31l-0.15,-0.13L493.89,614.78zM556.05,664.22l-0.15,-0.02l-1.26,-0.92l-0.4,-0.43l-0.19,-0.3l-0.07,-0.34l0.1,-0.24l0.14,-0.11l2.41,-0.46l0.13,0.21l0.16,0.46l0.08,0.49l-0.33,0.95l-0.21,0.46l-0.17,0.16L556.05,664.22zM506.44,650.63l-0.16,-0.09l-0.3,-1.17l0.16,-1.87l0.14,-0.2l0.19,0.03l1.84,1.29l0.3,0.27l-0.03,0.31l-0.12,0.22l-1.44,0.98l-0.21,0.11l-0.23,0.08L506.44,650.63zM512.56,635.5l-0.41,0.05l-0.19,-0.03l-0.48,-0.5l-0.11,-0.21l0.15,-0.31l0.24,-0.03l0.14,-0.08l-0.5,-0.33l-0.56,-0.2l-1.15,-0.1l-0.26,0.04l-1.26,0.26l-0.3,0.18l-0.15,-0.18l0.75,-0.71l1.75,-0.42l2.09,0.6l0.18,0.14l0.58,0.72l-0.18,1.05L512.56,635.5zM507.08,609.12h-0.14l-0.34,-0.07l-0.26,-0.15l-0.11,-0.2l-1.22,-2.52l-0.02,-0.45l0.11,-0.21l0.33,-0.02l0.94,0.51l0.74,0.98l0.42,0.96l-0.02,0.28L507.08,609.12zM595.05,707.46l-0.46,-1.23l-0.16,-0.11l-0.83,0.01l-1.68,0.49l-0.19,-0.08l-0.14,-0.21l-0.02,-0.4l0.21,-0.52l0.45,-0.12l0.16,-0.02l0.38,0.14l0.28,0.07l0.57,0.11l1.49,0.04l0.54,-0.41l0.16,-0.08l0.64,0.19l0.24,0.32l-0.42,1.18l-0.16,0.19l-0.67,-0.23l-0.17,0.02L595.05,707.46zM603.53,684.81l0.69,0.19l1.55,0.58l0.18,0.24l0.56,1.89l-0.21,0.11l-0.28,-0.13l-3.17,-2.19l-0.16,-0.34l0.07,-0.26l0.12,-0.14l0.28,-0.05l0.27,0.07L603.53,684.81zM493.54,620.63l-0.87,-0.88l-0.15,-1.17l2.48,-0.63l0.33,0.09l0.07,0.24l-1.02,1.94l-0.43,0.29l-0.28,0.11L493.54,620.63zM507.22,598.91l-1.03,-0.23l-0.14,-0.1l-0.35,-0.35l-0.3,-0.9l0.09,-0.23l0.33,-0.38l0.56,-0.54l0.24,-0.06l0.25,0.08l0.25,0.15l0.19,0.2l0.13,0.18l0.11,0.2l0.09,0.39l-0.03,0.48l-0.21,0.86l-0.09,0.23L507.22,598.91zM489.88,540.83l-0.34,-0.03l-0.19,-0.15l-0.02,-0.28l0.51,-1.26l0.24,-0.33l1.21,0.01l0.71,0.1l0.42,0.21l-1.3,1.25l-0.24,0.2l-0.19,0.1l-0.43,0.14L489.88,540.83zM493.2,617.63l-0.25,-0.07l-0.13,-0.19l-0.06,-0.24l0.02,-0.48l0.19,-0.5l2.51,-1.48l0.18,0.46l-1.19,2.05l-0.88,0.38l-0.25,0.06L493.2,617.63zM593.39,700.46l-0.14,-0.19l0.51,-2.58l0.21,-0.31l0.31,-0.2l0.21,0.01l0.24,0.26l0.15,0.19l0.22,0.29l0.14,0.2l0.15,0.41l-0.04,0.86l-0.72,0.56l-0.31,0.22l-0.38,0.14L593.39,700.46zM558.77,685.12l-0.15,-0.02l-0.21,-0.12l-0.21,-0.22v-0.26l0.19,-0.23l0.17,-0.16l2.05,-1.11l0.24,-0.1l0.21,0.01l0.14,0.12l0.17,0.26l0.01,0.37l-0.49,0.75l-1.34,0.54L558.77,685.12zM503.39,642.55l-0.07,0.28l-0.63,1.07l-0.4,0.26l-0.89,0.29l-0.25,-0.03l-0.15,-0.1l-0.25,-0.32l-0.04,-0.26l0.78,-0.78l0.6,-0.54l0.6,-0.45l0.17,0l0.2,0.13l0.3,0.28L503.39,642.55zM600.25,707.28l-1.46,-0.79l-0.88,-0.74l0.09,-0.35l0.15,-0.11l0.26,-0.09l0.79,0.06l1.04,0.34l0.49,0.7l0.05,0.89L600.25,707.28zM506.19,611.03l-1.14,-0.22l-0.16,-0.16l-0.12,-1.07l0.43,-0.87l0.18,-0.14l0.18,0.03l0.16,0.15l0.14,0.17l0.27,0.35l0.62,1.02l-0.06,0.33l-0.3,0.29L506.19,611.03z" }),
            _react2.default.createElement("path", { id: "CL-ML", title: "Maule", fill: mapColors[11].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[11].raw, this.IDDict["ML"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M546.63,303.35L546.54,303.3L546.12,302.81L545.97,302.19L545.87,301.67L545.38,301.42L545.05,301.47L544.78,301.67L543.65,303.11L543.54,303.56L543.5,303.94L543.09,304.4L542.51,304.32L541.1,303.54L540.81,303.25L539.28,301.99L538.09,301.63L537.2,301.28L536.68,300.95L536.33,300.61L536.15,300.17L535.79,299.39L534.86,299.24L534.52,299.34L534.16,299.49L533.84,299.47L533.07,299.29L532.82,299.07L532.72,298.74L532.53,298.3L531.43,297.14L531.32,297.68L531.35,298.12L530.33,299.27L528.58,299.22L528.22,299.1L525.5,297.68L523.44,295.86L523.34,295.25L523.12,295.01L521.53,294.3L521.53,294.3L521.8,294.12L522.51,293.46L524.05,291.9L524.23,291.54L524.35,290.99L524.32,290.35L523.98,289.52L523.38,288.04L523.42,287.55L523.74,287.17L524.33,286.84L525.31,286.01L526.22,283.71L526.72,282.26L526.93,281.84L527.53,281.12L527.99,280.82L528.54,280.5L529.35,279.71L529.64,279.07L529.77,278.3L529.81,277.78L529.83,277.17L529.85,276.67L529.97,275.73L530.75,274L531.07,273.66L531.35,273.23L531.69,272.21L531.69,272.21L532.11,272.38L532.37,272.56L533.19,273.57L533.68,274.31L535.64,275.11L537.09,275.55L539.25,275.69L541.43,276.08L541.37,275.49L541.32,275.11L542.5,274.09L545.03,273.89L545.43,273.89L545.97,274.03L549.96,275.22L550.24,275.39L550.84,276L552.44,277.23L555.02,277.49L555.86,277.55L555.97,277.54L555.97,277.54L555.94,277.67L555.92,278.33L555.94,278.97L556,279.33L555.92,280.1L555.67,280.52L554.67,281.03L554.23,281.12L553.74,281.14L553.4,281.23L553.05,281.78L553.02,282.23L553.26,282.73L553.51,282.93L555.08,283.91L555.45,286.53L555.34,288.26L555.13,288.62L555.27,289.27L555.76,290.36L556.2,291.69L555.75,292.07L555.37,292.73L555.23,293.12L555.29,294.49L555.45,296.31L555.05,297.37L554.85,297.64L554.44,297.87L553.91,297.83L552.71,297.88L551.06,299.74L550.87,301.03L551.18,301.85L551.03,302.27L547.53,303.54L547.12,303.48z" }),
            _react2.default.createElement("path", { id: "CL-RM", title: "Regi\xF3n Metropolitana de Santiago", fill: mapColors[12].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[12].raw, this.IDDict["RM"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M560.41,265.31L560.4,264.95L560.3,264.61L559.94,264.35L559.26,264.08L558.8,263.59L558.73,263.24L558.78,262.11L558.61,261.41L558.36,261.22L557.97,261.25L557.57,261.54L557.23,261.63L556.23,261.29L556.36,260.42L555.8,258.57L555.48,258.28L554.98,258.11L554.48,258.11L552.81,258.76L552.25,259.11L551.21,259.19L550.82,259.06L549.65,259.79L547.78,261.96L547.72,262.35L547.77,263.07L546.6,263.34L545.24,263.38L545.2,263.36L544.04,261.66L542.25,260.89L541.35,259.23L539.05,259.36L537.64,258.78L537.64,258.78L538.4,258.29L538.4,258.29L538.86,256.72L539.17,256.71L539.98,256.75L540.7,256.97L541.17,256.94L541.87,256.19L542.49,253.85L541.96,252.55L541.75,251.38L541.76,251.04L542.14,250.84L543.14,249.83L543.58,249.26L543.7,248.87L543.67,247.67L543.86,247.31L544.74,247.16L545.61,247.14L546.6,246.47L546.55,244.35L546.37,243.58L546.5,242.95L546.79,242.81L548.43,242.18L550.39,242.18L551.73,242.51L552.46,242.78L553.04,243.33L553.23,243.99L553.72,244.7L554.06,244.73L554.98,243.95L555.31,243.99L556.3,245.09L557.76,245.74L558.95,244.7L559.67,244.31L559.67,244.31L559.88,244.73L559.79,245.51L559.65,246.02L559.73,246.47L561.08,248.49L561.43,248.44L561.72,247.92L562.12,247.51L562.47,247.45L562.86,247.58L563.88,248.15L564.29,249.99L564.17,250.42L563.8,250.85L562.94,252.84L562.44,256.64L562.45,257.47L562.73,258.57L563.24,262.08L563.68,264.43L562.68,265.18L562.02,265.13L561.69,265.04L561.28,265.03L560.67,265.15z" }),
            _react2.default.createElement("path", { id: "CL-TA", title: "Tarapac\xE1", fill: mapColors[13].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[13].raw, this.IDDict["TA"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M557.07,25.98L559.36,25.87L561.59,24.48L563.81,22.81L567.71,22.81L569.94,24.48L572.16,24.2L572.44,22.53L573.83,21.14L575.98,21.14L575.98,21.14L575.8,21.55L576.73,23.22L578.4,24.38L579,24.91L580.17,26.25L580.4,26.47L580.88,26.7L581.25,26.8L581.69,27.03L582.54,27.78L583.22,28.75L581.69,30.34L581.39,30.74L580.97,31.36L579.76,32.8L579.72,33.38L580.63,34.03L581.47,34.75L582.09,36L581.32,38.06L580.85,38.03L580.28,38.11L578.48,38.6L578.37,38.98L578.63,39.31L579.28,40.83L579.53,42.35L579.08,42.56L578.8,42.88L578.83,43.64L579.02,44.04L579.23,44.35L579.71,44.86L580.12,45.14L580.58,45.37L581,45.54L581.42,45.68L581.72,45.81L582.53,46.37L582.89,46.76L582.82,47.06L582.29,47.38L582.01,47.62L581.5,48.32L581.49,50.39L581.57,50.71L581.6,50.75L581.6,50.75L580.53,50.68L577.95,50.34L576.7,50.5L576.38,50.58L576.11,50.74L575.96,51.1L576.17,51.4L576.57,51.64L577.69,52.08L578.08,52.08L578.44,52.05L579.22,51.88L579.63,51.98L579.8,52.36L579.69,53.01L579.55,53.42L578.97,54.49L578.74,54.85L578.56,55.24L578.47,55.67L578.47,56.15L577.15,56.72L575.37,56.91L571.55,58.06L566.99,59.13L565.92,59.37L564.93,59.01L564.05,58.86L562.45,58.68L562.09,58.65L560.54,58.73L560.33,58.81L560.33,58.81L559.87,57.92L559.8,57.44L560.13,56.93L559.35,53.96L559.01,53.19L558.7,52.54L558.94,51.71L559.2,51.22L559.09,50.43L558.86,50.01L558.62,49.82L558.09,49.35L558.68,43.2L559.1,41.83L559.17,41.42L558.8,40.48L558.96,39.34L559.15,38.9L559.29,38.46L559.32,37.29L559.31,36.87L559.11,35.87L558.6,31.91L558.17,29.6L557.67,27.77L557.04,26.62z" }),
            _react2.default.createElement("path", { id: "CL-VS", title: "Valpara\xEDso", fill: mapColors[14].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[14].raw, this.IDDict["VS"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M541.29,229.67l0.6,0.03l2.96,-0.68l0.31,-0.2l0.68,-0.76l0.44,-0.71l4.34,-0.13l0.98,0.6l0.06,0.55l0.02,0.41l0.66,0.48l0.65,0.11l0.38,-0.01l0.3,0.01l0.39,0.12l0.4,0.34l0.22,0.8l0.12,0.38l0.4,0.24l1.34,-0.17l0,0l0.11,0.32l0.98,0.43l0.19,0.53l1.09,2.25l0.11,0.51l-0.08,0.62l0.57,0.63l0.89,0.89l1.28,1.66l0.13,1.41l-0.61,1.02l-0.4,1.23l-0.72,0.96l-0.4,0.78l0,0l-0.72,0.39l-1.19,1.04l-1.46,-0.65l-0.99,-1.1l-0.33,-0.04l-0.92,0.78l-0.34,-0.03l-0.49,-0.71l-0.19,-0.66l-0.58,-0.56l-0.73,-0.26l-1.33,-0.34l-1.97,0l-1.64,0.63l-0.29,0.15l-0.13,0.63l0.18,0.76l0.06,2.12l-0.99,0.67l-0.87,0.02l-0.89,0.15l-0.19,0.36l0.03,1.2l-0.12,0.39l-0.43,0.57l-1.01,1l-0.38,0.2l-0.01,0.34l0.21,1.17l0.54,1.31l-0.62,2.33l-0.7,0.75l-0.47,0.03l-0.72,-0.22l-0.81,-0.03l-0.31,0.01l-0.46,1.57l0,0l-1.34,0.87l0,0l-0.5,0.63l-0.5,-0.09l-0.54,-0.12l-0.37,-0.31l-0.67,0.02l0,0l0.43,-1.56l0.49,-1.16l0.38,-0.14l0.5,-0.1l0.41,-0.21l0.5,-0.44l0.26,-0.67l0.08,-0.34l0.09,-0.54l0.13,-1.29l-0.78,-3.11l-0.17,-1.97l-0.71,-2.53l0.14,-0.31l0.68,0.04l1.83,-1.35l0.66,-1.85l0.35,-2.31l0.59,-1.16l0.16,-0.49l0.06,-0.52l0.01,-2.41l0.5,-1.63l-0.9,-1.56l-0.59,-0.89l-0.39,-1.01l0,0l0.32,-0.35l0.33,-0.22l0.4,-0.01l0,0l0.65,0.33L541.29,229.67zM2.95,147.41l-0.74,0.29l-0.44,-0.01l-0.17,0.04l-0.78,0.41l-0.38,0.26l-0.17,0.14l-0.25,-0.06L0,148.14l0.35,-1.17l0.08,-0.19l0.09,-0.13l0.22,-0.27l0.35,-0.06l2.12,0.54l0.03,0.18l-0.09,0.2L2.95,147.41z" }),
            legend
          )
        )
      );
    }
  }]);

  return Chile;
}(_react2.default.Component);

exports.default = Chile;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _coloring = __webpack_require__(5);

var _coloring2 = _interopRequireDefault(_coloring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var World = function (_React$Component) {
    _inherits(World, _React$Component);

    function World() {
        _classCallCheck(this, World);

        var _this = _possibleConstructorReturn(this, (World.__proto__ || Object.getPrototypeOf(World)).call(this));

        _this.IDList = ["AE", "AF", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BD", "BE", "BF", "BG", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CF", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CY", "CZ", "DE", "DJ", "DK", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FK", "FI", "FJ", "FR", "GA", "GB", "GE", "GF", "GH", "GL", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MD", "ME", "MG", "MK", "ML", "MM", "MN", "MR", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PR", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SD", "SE", "SI", "SJ", "SK", "SL", "SN", "SO", "SR", "SS", "SV", "SY", "SZ", "TD", "TF", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TT", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VE", "VN", "VU", "XK", "YE", "ZA", "ZM", "ZW"];
        _this.IDDict = {
            "AF": "Afghanistan",
            "AL": "Albania",
            "DZ": "Algeria",
            "AO": "Angola",
            "AR": "Argentina",
            "AM": "Armenia",
            "AU": "Australia",
            "AT": "Austria",
            "AZ": "Azerbaijan",
            "BS": "Bahamas",
            "BD": "Bangladesh",
            "BY": "Belarus",
            "BE": "Belgium",
            "BZ": "Belize",
            "BJ": "Benin",
            "BT": "Bhutan",
            "BO": "Bolivia",
            "BA": "Bosnia and Herzegovina",
            "BW": "Botswana",
            "BR": "Brazil",
            "BN": "Brunei Darussalam",
            "BG": "Bulgaria",
            "BF": "Burkina Faso",
            "BI": "Burundi",
            "KH": "Cambodia",
            "CM": "Cameroon",
            "CA": "Canada",
            "CF": "Central African Republic",
            "TD": "Chad",
            "CL": "Chile",
            "CN": "China",
            "CO": "Colombia",
            "CG": "Congo",
            "CD": "Congo",
            "CR": "Costa Rica",
            "CI": "Cote D'Ivoire",
            "HR": "Croatia",
            "CU": "Cuba",
            "CY": "Cyprus",
            "CZ": "Czech Republic",
            "DK": "Denmark",
            "DJ": "Djibouti",
            "DO": "Dominican Republic",
            "EC": "Ecuador",
            "EG": "Egypt",
            "SV": "El Salvador",
            "GQ": "Equatorial Guinea",
            "ER": "Eritrea",
            "EE": "Estonia",
            "ET": "Ethiopia",
            "FK": "Falkland Islands",
            "FJ": "Fiji",
            "FI": "Finland",
            "FR": "France",
            "GF": "French Guiana",
            "TF": "French Southern Territories",
            "GA": "Gabon",
            "GM": "Gambia",
            "GE": "Georgia",
            "DE": "Germany",
            "GH": "Ghana",
            "GR": "Greece",
            "GL": "Greenland",
            "GT": "Guatemala",
            "GN": "Guinea",
            "GW": "Guinea-Bissau",
            "GY": "Guyana",
            "HT": "Haiti",
            "HN": "Honduras",
            "HU": "Hungary",
            "IS": "Iceland",
            "IN": "India",
            "ID": "Indonesia",
            "IR": "Iran",
            "IQ": "Iraq",
            "IE": "Ireland",
            "IL": "Israel",
            "IT": "Italy",
            "JM": "Jamaica",
            "JP": "Japan",
            "JO": "Jordan",
            "KZ": "Kazakhstan",
            "KE": "Kenya",
            "KP": "North Korea",
            "KR": "South Korea",
            "KW": "Kuwait",
            "KG": "Kyrgyzstan",
            "LA": "Lao People's Democratic Republic",
            "LV": "Latvia",
            "LB": "Lebanon",
            "LS": "Lesotho",
            "LR": "Liberia",
            "LY": "Libya",
            "LT": "Lithuania",
            "LU": "Luxembourg",
            "MK": "Macedonia",
            "MG": "Madagascar",
            "MW": "Malawi",
            "MY": "Malaysia",
            "ML": "Mali",
            "MR": "Mauritania",
            "MX": "Mexico",
            "MD": "Moldova",
            "MN": "Mongolia",
            "ME": "Montenegro",
            "MA": "Morocco",
            "MZ": "Mozambique",
            "MM": "Myanmar",
            "NA": "Namibia",
            "NP": "Nepal",
            "NL": "Netherlands",
            "NC": "New Caledonia",
            "NZ": "New Zealand",
            "NI": "Nicaragua",
            "NE": "Niger",
            "NG": "Nigeria",
            "NO": "Norway",
            "OM": "Oman",
            "PK": "Pakistan",
            "PS": "Palestinian Territory",
            "PA": "Panama",
            "PG": "Papua New Guinea",
            "PY": "Paraguay",
            "PE": "Peru",
            "PH": "Philippines",
            "PL": "Poland",
            "PT": "Portugal",
            "PR": "Puerto Rico",
            "QA": "Qatar",
            "RO": "Romania",
            "RU": "Russia",
            "RW": "Rwanda",
            "SA": "Saudi Arabia",
            "SN": "Senegal",
            "RS": "Serbia",
            "SL": "Sierra Leone",
            "SK": "Slovakia",
            "SI": "Slovenia",
            "SB": "Solomon Islands",
            "SO": "Somalia",
            "ZA": "South Africa",
            "ES": "Spain",
            "LK": "Sri Lanka",
            "SD": "Sudan",
            "SR": "Suriname",
            "SJ": "Svalbard and Jan Mayen",
            "SS": "South Sudan",
            "SZ": "Swaziland",
            "SE": "Sweden",
            "CH": "Switzerland",
            "SY": "Syria",
            "TW": "Taiwan",
            "TJ": "Tajikistan",
            "TZ": "Tanzania",
            "TH": "Thailand",
            "TL": "Timor-Leste",
            "TG": "Togo",
            "TT": "Trinidad and Tobago",
            "TN": "Tunisia",
            "TR": "Turkey",
            "TM": "Turkmenistan",
            "UG": "Uganda",
            "UA": "Ukraine",
            "AE": "United Arab Emirates",
            "GB": "United Kingdom",
            "US": "United States",
            "UY": "Uruguay",
            "UZ": "Uzbekistan",
            "VU": "Vanuatu",
            "VE": "Venezuela",
            "VN": "Vietnam",
            "EH": "Western Sahara",
            "XK": "Kosovo",
            "YE": "Yemen",
            "ZM": "Zambia",
            "ZW ": "Zimbabwe"
        };
        return _this;
    }

    _createClass(World, [{
        key: "getLegend",
        value: function getLegend(colors) {
            var legend = [];

            for (var i = 0; i < 10; i++) {
                legend.push(_react2.default.createElement("rect", { key: "rect" + i, x: i * 40, y: 8, height: 20, width: 40, fill: colors.colorGradient[i * 10].color }));
                if (i % 2 === 0) {
                    legend.push(_react2.default.createElement(
                        "text",
                        { key: "label" + i, x: i * 40, y: 0, textAnchor: "middle" },
                        parseFloat(colors.colorGradient[i * 10].weight.toFixed(2))
                    ));
                }
            }
            legend.push(_react2.default.createElement(
                "text",
                { key: "endLabel", x: 400, y: 0, textAnchor: "middle" },
                parseFloat(colors.colorGradient[99].weight.toFixed(2))
            ));

            return _react2.default.createElement(
                "g",
                { transform: "translate(350,620)" },
                legend
            );
        }
    }, {
        key: "render",
        value: function render() {

            var xScale = 1;
            var yScale = 1;
            if (this.props.width && this.props.height) {
                xScale = this.props.width / 1009;
                yScale = this.props.height / 651;
            } else if (this.props.width) {
                xScale = this.props.width / 1009;
                yScale = xScale;
            } else if (this.props.height) {
                yScale = this.props.height / 651;
                xScale = yScale;
            }

            var colors = new _coloring2.default(this.IDList, this.props.IDKey, this.props.weightKey, this.props.scale, this.props.data, this.props.colorKey, this.props.colorRange, this.props.colorCatgories);
            var mapColors = colors.generate();
            var legend = this.getLegend(colors);

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "svg",
                    { width: 1009 * xScale, height: 651 * yScale },
                    _react2.default.createElement(
                        "g",
                        { transform: "scale(" + xScale + " " + yScale + ")" },
                        _react2.default.createElement("path", { id: "AE", title: "United Arab Emirates", fill: mapColors[0].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[0].raw, this.IDDict["AE"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M619.87,393.72L620.37,393.57L620.48,394.41L622.67,393.93L624.99,394.01L626.68,394.1L628.6,392.03L630.7,390.05L632.47,388.15L633,389.2L633.38,391.64L631.95,391.65L631.72,393.65L632.22,394.07L630.95,394.67L630.94,395.92L630.12,397.18L630.05,398.39L629.48,399.03L621.06,397.51L619.98,394.43z" }),
                        _react2.default.createElement("path", { id: "AF", title: "Afghanistan", fill: mapColors[1].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[1].raw, this.IDDict["AF"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M646.88,356.9L649.74,358.2L651.85,357.74L652.44,356.19L654.65,355.67L656.23,354.62L656.79,351.83L659.15,351.15L659.59,349.9L660.92,350.84L661.76,350.95L663.32,350.98L665.44,351.72L666.29,352.14L668.32,351.02L669.27,351.69L670.17,350.09L671.85,350.16L672.28,349.64L672.58,348.21L673.79,346.98L675.3,347.78L675,348.87L675.85,349.04L675.58,351.99L676.69,353.14L677.67,352.4L678.92,352.06L680.66,350.49L682.59,350.75L685.49,350.75L685.99,351.76L684.35,352.15L682.93,352.8L679.71,353.2L676.7,353.93L675.06,355.44L675.72,356.9L676.05,358.6L674.65,360.03L674.77,361.33L674,362.55L671.33,362.44L672.43,364.66L670.65,365.51L669.46,367.51L669.61,369.49L668.51,370.41L667.48,370.11L665.33,370.54L665.03,371.45L662.94,371.45L661.38,373.29L661.28,376.04L657.63,377.37L655.68,377.09L655.11,377.79L653.44,377.39L650.63,377.87L645.94,376.23L648.48,373.3L648.25,371.2L646.13,370.65L645.91,368.56L644.99,365.92L646.19,364.09L644.97,363.6L645.74,361.15z" }),
                        _react2.default.createElement("path", { id: "AL", title: "Albania", fill: mapColors[2].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[2].raw, this.IDDict["AL"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M532.98,334.66L532.63,335.93L533.03,337.52L534.19,338.42L534.13,339.39L533.22,339.93L533.05,341.12L531.75,342.88L531.27,342.63L531.22,341.83L529.66,340.6L529.42,338.85L529.66,336.32L530.04,335.16L529.57,334.57L529.38,333.38L530.6,331.51L530.77,332.23L531.53,331.89L532.13,332.91L532.8,333.29z" }),
                        _react2.default.createElement("path", { id: "AM", title: "Armenia", fill: mapColors[3].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[3].raw, this.IDDict["AM"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M597.45,337.5L601.35,336.92L601.93,337.9L603,338.54L602.43,339.46L603.93,340.72L603.14,341.88L604.33,342.87L605.59,343.46L605.65,345.96L604.63,346.06L603.49,343.98L603.5,343.43L602.26,343.44L601.43,342.46L600.85,342.56L599.74,341.5L597.66,340.59L597.93,338.8z" }),
                        _react2.default.createElement("path", { id: "AO", title: "Angola", fill: mapColors[4].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[4].raw, this.IDDict["AO"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M521.03,479.78l0.69,2.09l0.8,1.68l0.64,0.91l1.07,1.47l1.85,-0.23l0.93,-0.4l1.55,0.4l0.42,-0.7l0.7,-1.64l1.74,-0.11l0.15,-0.49l1.43,-0.01l-0.24,1.01l3.4,-0.02l0.05,1.77l0.57,1.09l-0.41,1.7l0.21,1.74l0.94,1.05l-0.15,3.37l0.69,-0.26l1.22,0.07l1.74,-0.42l1.28,0.17l0.3,0.88l-0.32,1.38l0.49,1.34l-0.42,1.07l0.24,0.99l-5.84,-0.04l-0.13,9.16l1.89,2.38l1.83,1.82l-5.15,1.19l-6.79,-0.41l-1.94,-1.4l-11.37,0.13l-0.42,0.21l-1.67,-1.32l-1.82,-0.09l-1.68,0.5l-1.35,0.56l-0.26,-1.83l0.39,-2.55l0.97,-2.65l0.15,-1.24l0.91,-2.59l0.67,-1.17l1.61,-1.87l0.9,-1.27l0.29,-2.11l-0.15,-1.61l-0.84,-1.01l-0.75,-1.72l-0.69,-1.69l0.15,-0.59l0.86,-1.12l-0.85,-2.72l-0.57,-1.88l-1.4,-1.77l0.27,-0.54l1.16,-0.38l0.81,0.05l0.98,-0.34L521.03,479.78zM510.12,479.24l-0.71,0.3l-0.75,-2.1l1.13,-1.21l0.85,-0.47l1.05,0.96l-1.02,0.59l-0.46,0.72L510.12,479.24z" }),
                        _react2.default.createElement("path", { id: "AR", title: "Argentina", fill: mapColors[5].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[5].raw, this.IDDict["AR"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M291.6,648.91l-2.66,0.25l-1.43,-1.73l-1.69,-0.13l-3,0l0,-10.57l1.08,2.15l1.4,3.53l3.65,2.87l3.93,1.21L291.6,648.91zM293.1,526.47l1.65,2.18l1.09,-2.43l3.2,0.12l0.45,0.64l5.15,4.94l2.29,0.46l3.43,2.26l2.89,1.2l0.4,1.36l-2.76,4.73l2.83,0.85l3.15,0.48l2.22,-0.5l2.54,-2.4l0.46,-2.74l1.39,-0.59l1.41,1.79l-0.06,2.49l-2.36,1.73l-1.88,1.28l-3.16,3.08l-3.74,4.37l-0.7,2.59l-0.75,3.37l0.03,3.3l-0.61,0.74l-0.22,2.17l-0.19,1.76l3.56,2.91l-0.38,2.37l1.75,1.51l-0.14,1.7l-2.69,4.52l-4.16,1.91l-5.62,0.75l-3.08,-0.36l0.59,2.15l-0.57,2.72l0.52,1.85l-1.68,1.3l-2.87,0.51l-2.7,-1.35l-1.08,0.97l0.39,3.71l1.89,1.14l1.54,-1.19l0.84,1.96l-2.58,1.18l-2.25,2.38l-0.41,3.91l-0.66,2.11l-2.65,0.01l-2.2,2.04l-0.8,3.01l2.76,2.98l2.68,0.83l-0.96,3.73l-3.31,2.38l-1.82,5.03l-2.56,1.72l-1.15,2.06l0.91,4.64l1.87,2.63l-1.18,-0.23l-2.6,-0.71l-6.78,-0.61l-1.16,-2.63l0.05,-3.33l-1.87,0.28l-0.99,-1.6l-0.25,-4.6l2.15,-1.88l0.89,-2.68l-0.33,-2.11l1.49,-3.52l1.02,-5.35l-0.3,-2.33l1.22,-0.75l-0.3,-1.48l-1.3,-0.78l0.92,-1.63l-1.27,-1.46l-0.65,-4.4l1.13,-0.77l-0.47,-4.54l0.66,-3.75l0.75,-3.22l1.68,-1.3l-0.85,-3.46l-0.01,-3.22l2.12,-2.26l-0.06,-2.87l1.6,-3.31l0.01,-3.09l-0.73,-0.61l-1.29,-5.69l1.73,-3.34l-0.27,-3.11l1,-2.9l1.84,-2.96l1.98,-1.95l-0.84,-1.23l0.59,-1l-0.09,-5.14l3.05,-1.51l0.96,-3.16l-0.34,-0.76l2.34,-2.72L293.1,526.47z" }),
                        _react2.default.createElement("path", { id: "AT", title: "Austria", fill: mapColors[6].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[6].raw, this.IDDict["AT"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M522.86,309.85L522.65,311.56L521.07,311.57L521.61,312.46L520.68,315.11L520.15,315.8L517.7,315.9L516.28,316.82L513.96,316.51L509.95,315.46L509.33,314.03L506.56,314.75L506.23,315.52L504.53,314.94L503.1,314.83L501.83,314.09L502.26,313.08L502.15,312.34L503,312.12L504.42,313.26L504.82,312.17L507.29,312.35L509.3,311.61L510.64,311.73L511.51,312.58L511.78,311.88L511.38,309.16L512.39,308.62L513.37,306.67L515.46,308.04L517.03,306.3L518.02,305.98L520.2,307.28L521.51,307.06L522.81,307.86L522.58,308.4z" }),
                        _react2.default.createElement("path", { id: "AU", title: "Australia", fill: mapColors[7].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[7].raw, this.IDDict["AU"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M882.93,588.16l2.71,1.28l1.53,-0.51l2.19,-0.71l1.68,0.25l0.2,4.43l-0.96,1.3l-0.29,3.06l-0.98,-1.05l-1.95,2.67l-0.58,-0.21l-1.72,-0.12l-1.73,-3.28l-0.38,-2.5l-1.62,-3.25l0.07,-1.7L882.93,588.16zM877.78,502.1l1.01,2.25l1.8,-1.08l0.93,1.22l1.35,1.13l-0.29,1.28l0.6,2.48l0.43,1.45l0.71,0.35l0.76,2.5l-0.27,1.52l0.91,1.99l3.04,1.54l1.98,1.41l1.88,1.29l-0.37,0.72l1.6,1.87l1.09,3.25l1.12,-0.66l1.14,1.31l0.69,-0.46l0.48,3.21l1.99,1.87l1.3,1.17l2.19,2.49l0.79,2.49l0.07,1.77l-0.19,1.94l1.34,2.68l-0.16,2.81l-0.49,1.48l-0.76,2.87l0.06,1.86l-0.55,2.34l-1.24,3l-2.08,1.63l-1.02,2.59l-0.94,1.67l-0.83,2.93l-1.08,1.71l-0.71,2.58l-0.36,2.4l0.14,1.11l-1.61,1.22l-3.14,0.13l-2.59,1.45l-1.29,1.38l-1.69,1.54l-2.32,-1.58l-1.72,-0.63l0.44,-1.85l-1.53,0.67l-2.46,2.58l-2.42,-0.97l-1.59,-0.56l-1.6,-0.25l-2.71,-1.03l-1.81,-2.18l-0.52,-2.66l-0.65,-1.75l-1.38,-1.4l-2.7,-0.41l0.92,-1.66l-0.68,-2.52l-1.37,2.35l-2.5,0.63l1.47,-1.88l0.42,-1.95l1.08,-1.65l-0.22,-2.47l-2.28,2.85l-1.75,1.15l-1.07,2.69l-2.19,-1.4l0.09,-1.79l-1.75,-2.43l-1.48,-1.25l0.53,-0.77l-3.6,-2l-1.97,-0.09l-2.7,-1.6l-5.02,0.31l-3.63,1.18l-3.19,1.1l-2.68,-0.22l-2.97,1.7l-2.43,0.77l-0.54,1.75l-1.04,1.36l-2.38,0.08l-1.76,0.3l-2.48,-0.61l-2.02,0.37l-1.92,0.15l-1.67,1.8l-0.82,-0.15l-1.41,0.96l-1.35,1.08l-2.05,-0.13l-1.88,0l-2.97,-2.17l-1.51,-0.64l0.06,-1.93l1.39,-0.46l0.48,-0.76l-0.1,-1.2l0.34,-2.3l-0.31,-1.95l-1.48,-3.29l-0.46,-1.85l0.12,-1.83l-1.12,-2.08l-0.07,-0.93l-1.24,-1.26l-0.35,-2.47l-1.6,-2.48l-0.39,-1.33l1.23,1.35l-0.95,-2.88l1.39,0.9l0.83,1.2l-0.05,-1.59l-1.39,-2.43l-0.27,-0.97l-0.65,-0.92l0.3,-1.77l0.57,-0.75l0.38,-1.52l-0.3,-1.77l1.16,-2.17l0.21,2.29l1.18,-2.07l2.28,-1l1.37,-1.28l2.14,-1.1l1.27,-0.23l0.77,0.37l2.21,-1.11l1.7,-0.33l0.42,-0.65l0.74,-0.27l1.55,0.07l2.95,-0.87l1.52,-1.31l0.72,-1.58l1.64,-1.49l0.13,-1.17l0.07,-1.59l1.96,-2.47l1.18,2.51l1.19,-0.58l-1,-1.38l0.88,-1.41l1.24,0.63l0.34,-2.21l1.53,-1.42l0.68,-1.14l1.41,-0.49l0.04,-0.8l1.23,0.34l0.05,-0.72l1.23,-0.41l1.36,-0.39l2.07,1.32l1.56,1.71l1.75,0.02l1.78,0.27l-0.59,-1.58l1.34,-2.3l1.26,-0.75l-0.44,-0.71l1.22,-1.63l1.7,-1.01l1.43,0.34l2.36,-0.54l-0.05,-1.45l-2.05,-0.94l1.49,-0.41l1.86,0.7l1.49,1.17l2.36,0.73l0.8,-0.29l1.74,0.88l1.64,-0.82l1.05,0.25l0.66,-0.55l1.29,1.41l-0.75,1.53l-1.06,1.16l-0.96,0.1l0.33,1.15l-0.82,1.43l-1,1.41l0.2,0.81l2.23,1.6l2.16,0.93l1.44,1l2.03,1.72l0.79,0l1.47,0.75l0.43,0.9l2.68,0.99l1.85,-1l0.55,-1.57l0.57,-1.29l0.35,-1.59l0.85,-2.3l-0.39,-1.39l0.2,-0.84l-0.32,-1.64l0.37,-2.16l0.54,-0.58l-0.44,-0.95l0.68,-1.51l0.53,-1.56l0.07,-0.81l1.04,-1.06l0.79,1.39l0.19,1.78l0.7,0.34l0.12,1.2l1.02,1.45l0.21,1.62L877.78,502.1z" }),
                        _react2.default.createElement("path", { id: "AZ", title: "Azerbaijan", fill: mapColors[8].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[8].raw, this.IDDict["AZ"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M601.43,342.46l0.83,0.97l1.24,-0.01l-0.01,0.56l1.14,2.08l-1.92,-0.48l-1.42,-1.66l-0.44,-1.37L601.43,342.46zM608.08,337.03l1.24,0.25l0.48,-0.95l1.67,-1.51l1.47,1.97l1.43,2.62l1.31,0.17l0.86,0.99l-2.31,0.29l-0.49,2.82l-0.48,1.26l-1.03,0.84l0.08,1.77l-0.7,0.18l-1.75,-1.87l0.97,-1.78l-0.83,-1.06l-1.05,0.27l-3.31,2.66l-0.06,-2.5l-1.26,-0.59l-1.19,-0.99l0.79,-1.16l-1.49,-1.26l0.56,-0.92l-1.07,-0.64l-0.58,-0.97l0.69,-0.61l2.09,1.07l1.51,0.22l0.38,-0.43l-1.38,-2.02l0.73,-0.52l0.79,0.13L608.08,337.03z" }),
                        _react2.default.createElement("path", { id: "BA", title: "Bosnia and Herzegovina", fill: mapColors[9].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[9].raw, this.IDDict["BA"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M528.54,323.11L529.56,323.1L528.86,324.82L530.21,326.32L529.8,328.14L529.14,328.31L528.61,328.67L527.7,329.56L527.29,331.66L524.81,330.22L523.75,328.61L522.68,327.76L521.39,326.31L520.79,325.1L519.41,323.27L520,321.63L521.01,322.54L521.61,321.72L522.92,321.63L525.33,322.29L527.27,322.23z" }),
                        _react2.default.createElement("path", { id: "BD", title: "Bangladesh", fill: mapColors[10].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[10].raw, this.IDDict["BD"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M735.09,400.41L735.04,402.56L734.06,402.1L734.24,404.51L733.44,402.95L733.28,401.43L732.74,399.98L731.57,398.22L728.99,398.1L729.25,399.35L728.37,401.02L727.17,400.41L726.76,400.96L725.97,400.63L724.89,400.36L724.45,397.88L723.48,395.6L723.95,393.76L722.23,392.94L722.85,391.82L724.6,390.67L722.58,389.04L723.57,386.93L725.79,388.27L727.13,388.43L727.38,390.58L730.04,391L732.65,390.95L734.26,391.48L732.97,394.07L731.71,394.25L730.85,395.98L732.38,397.56L732.84,395.62L733.62,395.61z" }),
                        _react2.default.createElement("path", { id: "BE", title: "Belgium", fill: mapColors[11].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[11].raw, this.IDDict["BE"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M484.55,295.91L486.6,296.26L489.2,295.33L490.97,297.28L492.52,298.32L492.2,301.29L491.47,301.45L491.16,303.88L488.71,301.91L487.27,302.25L485.31,300.19L484.01,298.42L482.71,298.35L482.3,296.79z" }),
                        _react2.default.createElement("path", { id: "BF", title: "Burkina Faso", fill: mapColors[12].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[12].raw, this.IDDict["BF"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M467.33,436.4L465.41,435.67L464.09,435.78L463.11,436.49L461.85,435.89L461.36,434.96L460.1,434.34L459.91,432.7L460.68,431.49L460.61,430.53L462.84,428.17L463.25,426.21L464.02,425.51L465.38,425.89L466.55,425.31L466.93,424.57L469.11,423.29L469.64,422.39L472.26,421.19L473.81,420.78L474.51,421.33L476.3,421.32L476.08,422.72L476.46,424.03L478.04,425.9L478.12,427.28L481.36,427.93L481.29,429.88L480.68,430.74L479.31,431L478.74,432.24L477.78,432.56L475.32,432.5L474.02,432.28L473.12,432.74L471.88,432.53L467.01,432.66L466.94,434.27z" }),
                        _react2.default.createElement("path", { id: "BG", title: "Bulgaria", fill: mapColors[13].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[13].raw, this.IDDict["BG"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M538.78,325.56L539.59,327.16L540.67,326.87L542.83,327.48L546.95,327.68L548.34,326.69L551.64,325.79L553.68,327.2L555.33,327.61L553.87,329.2L552.85,331.93L553.75,334.09L551.34,333.58L548.48,334.76L548.45,336.62L545.9,336.97L543.93,335.67L541.68,336.7L539.61,336.59L539.41,334.12L538,332.91L538.47,332.37L538.16,331.92L538.63,330.71L539.7,329.52L538.34,327.86L538.09,326.44z" }),
                        _react2.default.createElement("path", { id: "BI", title: "Burundi", fill: mapColors[14].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[14].raw, this.IDDict["BI"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M557.52,475.93L557.34,472.56L556.63,471.3L558.34,471.52L559.2,469.93L560.69,470.11L560.85,471.21L561.45,471.84L561.48,472.75L560.79,473.33L559.69,474.79L558.68,475.8z" }),
                        _react2.default.createElement("path", { id: "BJ", title: "Benin", fill: mapColors[15].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[15].raw, this.IDDict["BJ"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M482.8,445.92L480.48,446.25L479.79,444.31L479.92,437.85L479.35,437.27L479.25,435.88L478.27,434.89L477.42,434.06L477.78,432.56L478.74,432.24L479.31,431L480.68,430.74L481.29,429.88L482.23,429.05L483.24,429.04L485.38,430.68L485.27,431.63L485.9,433.31L485.35,434.45L485.64,435.21L484.28,436.96L483.42,437.83L482.89,439.6L482.96,441.39z" }),
                        _react2.default.createElement("path", { id: "BN", title: "Brunei Darussalam", fill: mapColors[16].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[16].raw, this.IDDict["BN"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M795.46,450.77L796.57,449.72L798.96,448.19L798.83,449.57L798.67,451.35L797.33,451.26L796.74,452.21z" }),
                        _react2.default.createElement("path", { id: "BO", title: "Bolivia", fill: mapColors[17].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[17].raw, this.IDDict["BO"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M299.04,526.35L295.84,526.22L294.75,528.65L293.1,526.47L289.43,525.74L287.1,528.46L285.07,528.87L283.97,524.72L282.47,521.38L283.35,518.51L281.88,517.26L281.51,515.14L280.13,513.14L281.9,510L280.69,507.56L281.34,506.59L280.83,505.52L281.93,504.08L281.99,501.64L282.12,499.62L282.73,498.66L280.3,494.08L282.39,494.32L283.83,494.25L284.46,493.4L286.91,492.25L288.38,491.19L292.05,490.71L291.76,492.83L292.1,493.92L291.87,495.82L294.92,498.37L298.06,498.84L299.16,499.91L301.06,500.48L302.22,501.31L303.98,501.28L305.61,502.13L305.73,503.79L306.28,504.63L306.32,505.88L305.5,505.92L306.58,509.29L311.95,509.41L311.54,511.09L311.84,512.24L313.37,513.06L314.04,514.88L313.54,517.2L312.77,518.49L313.04,520.18L312.16,520.79L312.12,519.88L309.5,518.37L306.9,518.32L302.01,519.18L300.67,521.8L300.6,523.4L299.49,526.99z" }),
                        _react2.default.createElement("path", { id: "BR", title: "Brazil", fill: mapColors[18].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[18].raw, this.IDDict["BR"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M313.68,551.79L317.42,547.42L320.59,544.34L322.47,543.06L324.83,541.33L324.89,538.84L323.48,537.05L322.09,537.64L322.64,535.86L323.02,534.04L323.02,532.36L322.01,531.81L320.96,532.3L319.92,532.17L319.59,530.99L319.33,528.22L318.8,527.32L316.91,526.5L315.77,527.09L312.81,526.51L312.99,522.45L312.16,520.79L313.04,520.18L312.77,518.49L313.54,517.2L314.04,514.88L313.37,513.06L311.84,512.24L311.54,511.09L311.95,509.41L306.58,509.29L305.5,505.92L306.32,505.88L306.28,504.63L305.73,503.79L305.61,502.13L303.98,501.28L302.22,501.31L301.06,500.48L299.16,499.91L298.06,498.84L294.92,498.37L291.87,495.82L292.1,493.92L291.76,492.83L292.05,490.71L288.38,491.19L286.91,492.25L284.46,493.4L283.83,494.25L282.39,494.32L280.3,494.08L278.72,494.57L277.44,494.24L277.63,489.94L275.33,491.6L272.86,491.53L271.8,490.02L269.94,489.86L270.53,488.65L268.97,486.93L267.8,484.4L268.54,483.89L268.54,482.7L270.24,481.89L269.96,480.38L270.67,479.4L270.88,478.1L274.08,476.19L276.38,475.66L276.75,475.24L279.28,475.37L280.54,467.72L280.61,466.51L280.17,464.92L278.93,463.9L278.94,461.88L280.52,461.42L281.08,461.71L281.17,460.64L279.53,460.35L279.5,458.61L284.96,458.67L285.89,457.71L286.67,458.59L287.21,460.24L287.74,459.89L289.29,461.37L291.47,461.19L292.01,460.33L294.09,459.68L295.25,459.23L295.57,458.05L297.58,457.25L297.42,456.67L295.05,456.43L294.66,454.67L294.77,452.8L293.52,452.08L294.04,451.82L296.12,452.18L298.35,452.88L299.16,452.22L301.17,451.78L304.31,450.74L305.34,449.67L304.96,448.88L306.42,448.76L307.08,449.4L306.71,450.63L307.67,451.05L308.32,452.35L307.54,453.33L307.09,455.71L307.81,457.12L308.01,458.41L309.74,459.71L311.12,459.85L311.43,459.31L312.31,459.19L313.58,458.7L314.49,457.96L316.04,458.19L316.72,458.09L318.25,458.32L318.5,457.75L318.03,457.2L318.31,456.39L319.44,456.64L320.77,456.35L322.37,456.94L323.6,457.52L324.47,456.76L325.09,456.88L325.48,457.67L326.82,457.47L327.89,456.41L328.75,454.35L330.41,451.8L331.37,451.67L332.06,453.21L333.63,458.09L335.13,458.55L335.21,460.47L333.1,462.76L333.97,463.6L338.93,464.04L339.03,466.83L341.16,465L344.69,466.01L349.34,467.71L350.71,469.34L350.25,470.88L353.51,470.02L358.97,471.5L363.16,471.39L367.3,473.7L370.88,476.83L373.04,477.63L375.44,477.75L376.46,478.63L377.41,482.2L377.88,483.89L376.76,488.55L375.33,490.39L371.38,494.33L369.59,497.54L367.52,500.02L366.82,500.08L366.03,502.18L366.23,507.58L365.45,512.06L365.15,513.99L364.27,515.14L363.77,519.08L360.93,522.96L360.45,526.05L358.18,527.36L357.52,529.17L354.48,529.16L350.07,530.33L348.09,531.68L344.95,532.57L341.65,535.01L339.28,538.07L338.87,540.39L339.34,542.12L338.81,545.3L338.18,546.85L336.22,548.6L333.11,554.28L330.64,556.87L328.73,558.41L327.46,561.57L325.6,563.48L324.82,561.58L326.06,560.01L324.44,557.76L322.24,555.94L319.35,553.86L318.31,553.95L315.5,551.45z" }),
                        _react2.default.createElement("path", { id: "BS", title: "Bahamas", fill: mapColors[19].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[19].raw, this.IDDict["BS"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M257.86,395.2l-0.69,0.15l-0.71,-1.76l-1.05,-0.89l0.61,-1.95l0.84,0.12l0.98,2.55L257.86,395.2zM257.06,386.51l-3.06,0.5l-0.2,-1.15l1.32,-0.25l1.85,0.09L257.06,386.51zM259.36,386.48l-0.48,2.21l-0.52,-0.4l0.05,-1.63l-1.26,-1.23l-0.01,-0.36L259.36,386.48z" }),
                        _react2.default.createElement("path", { id: "BT", title: "Bhutan", fill: mapColors[20].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[20].raw, this.IDDict["BT"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M732.36,382.78L733.5,383.78L733.3,385.71L731.01,385.8L728.65,385.59L726.88,386.08L724.33,384.89L724.28,384.26L726.13,381.92L727.64,381.12L729.65,381.85L731.13,381.93z" }),
                        _react2.default.createElement("path", { id: "BW", title: "Botswana", fill: mapColors[21].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[21].raw, this.IDDict["BW"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M547.17,515.95L547.73,516.47L548.62,518.18L551.79,521.43L552.99,521.75L553,522.8L553.82,524.7L555.99,525.16L557.78,526.52L553.81,528.74L551.29,531L550.36,533.03L549.52,534.18L547.99,534.43L547.5,535.9L547.21,536.86L545.42,537.58L543.14,537.43L541.8,536.57L540.62,536.19L539.25,536.91L538.56,538.39L537.23,539.32L535.83,540.71L533.82,541.03L533.2,539.94L533.46,538.04L531.79,535.11L531.04,534.65L531.04,525.79L533.8,525.68L533.88,515.11L535.97,515.02L540.29,513.99L541.37,515.2L543.15,514.05L544.01,514.04L545.59,513.38L546.09,513.6z" }),
                        _react2.default.createElement("path", { id: "BY", title: "Belarus", fill: mapColors[22].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[22].raw, this.IDDict["BY"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M541.1,284.07L543.81,284.11L546.85,282.31L547.5,279.59L549.8,278.02L549.54,275.82L551.24,274.98L554.26,273.05L557.21,274.31L557.61,275.54L559.08,274.95L561.82,276.13L562.09,278.44L561.49,279.76L563.25,282.91L564.39,283.78L564.22,284.64L566.11,285.47L566.92,286.72L565.83,287.74L563.57,287.58L563.03,288.02L563.69,289.56L564.38,292.49L561.97,292.76L561.11,293.76L560.92,296.02L559.81,295.59L557.28,295.81L556.54,294.76L555.49,295.54L554.44,294.89L552.23,294.8L549.1,293.72L546.27,293.36L544.1,293.46L542.56,294.69L541.22,294.86L541.17,292.85L540.3,290.73L541.98,289.79L542,287.94L541.22,286.16z" }),
                        _react2.default.createElement("path", { id: "BZ", title: "Belize", fill: mapColors[23].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[23].raw, this.IDDict["BZ"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M225.31,412.96L225.29,412.53L225.63,412.39L226.14,412.74L227.14,410.97L227.67,410.93L227.68,411.36L228.21,411.37L228.17,412.17L227.71,413.44L227.96,413.89L227.67,414.94L227.84,415.21L227.52,416.68L226.97,417.46L226.46,417.55L225.9,418.55L225.07,418.55L225.29,415.27z" }),
                        _react2.default.createElement("path", { id: "CA", title: "Canada", fill: mapColors[24].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[24].raw, this.IDDict["CA"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M198.93,96.23l-0.22,-5.9l3.63,0.58l1.63,0.96l3.35,4.92l-0.76,4.97l-4.15,2.77l-2.28,-3.12L198.93,96.23zM212.14,108.88l0.33,-1.49l-1.97,-2.45l-5.65,-0.19l0.75,3.68l5.25,0.83L212.14,108.88zM248.49,155.83l3.08,5.1l0.81,0.57l3.07,-1.27l3.02,0.2l2.98,0.28l-0.25,-2.64l-4.84,-5.38l-6.42,-1.08l-1.35,0.67L248.49,155.83zM183.06,93.13l-2.71,4.19l6.24,0.52l4.61,4.44l4.58,1.5l-1.09,-5.68l-2.14,-6.73l-7.58,-5.35l-5.5,-2.04l0.2,5.69L183.06,93.13zM208.96,82.89l5.13,-0.12l-2.22,4l-0.04,5.3l3.01,5.76l5.81,1.77l4.96,-0.99l5.18,-10.73l3.85,-4.45l-3.38,-4.97l-2.21,-10.65l-4.6,-3.19l-4.72,-3.68l-3.58,-9.56l-6.52,0.94l1.23,4.15l-2.87,1.25l-1.94,5.32l-1.94,7.46l1.78,7.26L208.96,82.89zM145.21,136.27l3.92,1.95l12.67,-1.3l-5.82,4.77l0.36,3.43l4.26,-0.24l7.07,-4.58l9.5,-1.67l1.71,-5.22l-0.49,-5.57l-2.94,-0.5l-2.5,1.93l-1.1,-4.13l-0.95,-5.7l-2.9,-1.42l-2.57,4.41l4.01,11.05l-4.9,-0.85l-4.98,-6.79l-7.89,-4l-2.64,3.32L145.21,136.27zM167.77,94.21l-3.65,-2.9l-1.5,-0.66l-2.88,4.28l-0.05,2l4.66,0.01L167.77,94.21zM166.31,106.56l0.93,-3.99l-3.95,-2.12l-4.09,1.39l-2.27,4.26l4.16,4.21L166.31,106.56zM195.4,139.8l4.62,-1.11l1.28,-8.25l-0.09,-5.95l-2.14,-5.56l-0.22,1.6l-3.94,-0.7l-4.22,4.09l-3.02,-0.37l0.18,8.92l4.6,-0.87l-0.06,6.47L195.4,139.8zM192.12,185.41l-5.06,-3.93l-4.71,-4.21l-0.87,-6.18l-1.76,-8.92l-3.14,-3.84l-2.79,-1.55l-2.47,1.42l1.99,9.59l-1.41,3.73l-2.29,-8.98l-2.56,-3.11l-3.17,4.81l-3.9,-4.76l-6.24,2.87l1.4,-4.46l-2.87,-1.87l-7.51,5.84l-1.95,3.71l-2.35,6.77l4.9,2.32l4.33,-0.12l-6.5,3.46l1.48,3.13l3.98,0.17l5.99,-0.67l5.42,1.96l-3.66,1.44l-3.95,-0.37l-4.33,1.41l-1.87,0.87l3.45,6.35l2.49,-0.88l3.83,2.15l1.52,3.65l4.99,-0.73l7.1,-1.16l5.26,-2.65l3.26,-0.48l4.82,2.12l5.07,1.22l0.94,-2.86l-1.79,-3.05l4.6,-0.64L192.12,185.41zM199.86,184.43l-1.96,3.54l-2.47,2.49l3.83,3.54l2.28,-0.85l3.78,2.36l1.74,-2.73l-1.71,-3.03l-0.84,-1.53l-1.68,-1.46L199.86,184.43zM182.25,154.98l-2.13,-2.17l-3.76,0.4l-0.95,1.38l4.37,6.75L182.25,154.98zM210.94,168.15l3.01,-6.93l3.34,-1.85l4.19,-8.74l-5.36,-2.47l-5.84,-0.36l-2.78,2.77l-1.47,4.23l-0.04,4.82l1.75,8.19L210.94,168.15zM228.09,145.15l5.76,-0.18l8.04,-1.61l3.59,1.28l4.18,-2.26l1.75,-2.84l-0.63,-4.52l-3,-4.23l-4.56,-0.8l-5.71,0.97l-4.46,2.44l-4.09,-0.94l-3.78,-0.5l-1.78,-2.7l-3.22,-2.61l0.64,-4.43l-2.42,-3.98l-5.52,0.03l-3.11,-3.99l-5.78,-0.8l-1.06,5.1l3.25,3.74l5.8,1.45l2.81,5.09l0.34,5.6l0.97,5.99l7.45,3.42L228.09,145.15zM139.07,126.88l5.21,-5.05l2.62,-0.59l2.16,-4.23l0.38,-9.77l-3.85,1.91l-4.3,-0.18l-5.76,8.19l-4.76,8.98l3.8,2.51L139.07,126.88zM211.25,143.05l1.53,-4.14l-1.02,-3.46l-2.45,-3.92l-4.03,3.02l-1.49,4.92l3.4,2.79L211.25,143.05zM202.94,154.49l-0.73,-2.88l-5,1.26l-3.34,-2.11l-3.32,4.8l3.09,6.28l-5.72,-1.17l-0.06,3.01l6.97,7.05l1.94,3.38l2.7,0.73l4.6,-3.41l0.5,-8.21l-4.24,-4.07L202.94,154.49zM128.95,308.23l-1.16,-2.34l-2.8,-1.77l-1.39,-2.05l-0.95,-1.5l-2.64,-0.46l-1.72,-0.67l-2.94,-0.96l-0.24,1.02l1.08,2.38l2.89,0.78l0.5,1.23l2.51,1.5l0.84,1.51l4.6,1.92L128.95,308.23zM250.65,230.6l-2,-2.11l-2.06,0.5l-0.25,-3.06l-3.21,-2.04l-3.07,-2.27l-1.63,-1.75l-1.43,1.03l-0.52,-2.96l-2.03,-0.55l-0.96,6.13l-0.36,5.11l-2.44,3.14l3.8,-0.6l0.96,3.65l3.99,-3.23l2.78,-3.38l1.57,2.86l4.36,1.51L250.65,230.6zM130.12,178.05l7.38,-4.18V170l3.48,-6.41l6.88,-6.69l3.52,-2.47l-3.01,-4.2l-2.72,-2.95l-7.16,-0.57l-4,-2.16l-9.48,1.63l2.74,6.23l-2.43,6.43l-1.94,6.87l-1.2,3.86l6.47,4.69L130.12,178.05zM264.36,205.36l0.32,-1.01l-0.03,-3.17l-2.19,-2.08l-2.57,1.05l-1.19,4.17l0.7,3.56l3.14,-0.36L264.36,205.36zM288.18,212.9l4.41,6.6l3.45,2.85l4.92,-7.87l0.87,-4.93l-4.41,-0.47l-4.03,-6.7l-4.45,-1.64l-6.6,-4.97l5.15,-3.63l-2.65,-7.54l-2.44,-3.35l-6.77,-3.35l-2.92,-5.55l-5.21,1.99l-0.36,-3.86l-3.86,-4.32l-6.22,-4.71l-2.65,3.71l-5.55,2.66l0.42,-6.06l-4.81,-10.05l-7.11,4.06l-2.59,7.7l-2.21,-5.92l2.06,-6.37l-7.24,2.65l-2.88,3.99l-2.15,8.42l0.89,9.05l3.98,0.04l-2.93,3.92l2.33,2.96l4.55,1.25l5.93,2.42l10.2,1.82l5.08,-1.04l1.5,-2.42l2.21,2.79l2.47,0.46l2.97,4.96l-1.8,1.98l5.68,2.63l4.29,3.68l1.08,2.55l0.77,3.24l-3.63,6.93l-0.98,3.44l0.94,2.42l-5.77,0.86l-5.27,0.12l-1.85,4.87l2.37,2.23l8.11,-1.03l-0.04,-1.89l4.08,3.15l4.18,3.28l-0.98,1.77l3.4,3.02l6.02,3.53l7.6,2.39l-0.46,-2.09l-2.92,-3.67l-3.96,-5.37l7.03,5l3.54,1.66l0.97,-4.44l-1.82,-6.3l-1.16,-1.73l-3.81,-3.03l-2.95,-3.91l0.35,-3.94L288.18,212.9zM222.35,51.34l2.34,7.29l4.96,5.88l9.81,-1.09l6.31,1.97l-4.38,6.05l-2.21,-1.78l-7.66,-0.71l1.19,8.31l3.96,6.04l-0.8,5.2l-4.97,3.46l-2.27,5.47l4.55,2.65l3.82,8.55l-7.5,-5.7l-1.71,0.94l1.38,9.38l-5.18,2.83l0.35,5.85l5.3,0.63l4.17,1.44l8.24,-1.84l7.33,3.27l7.49,-7.19l-0.06,-3.02l-4.79,0.48l-0.39,-2.84l3.92,-3.83l1.33,-5.15l4.33,-3.83l2.66,-4.76l-2.32,-7.1l1.94,-2.65l-3.86,-1.89l8.49,-1.63l1.79,-3.15l5.78,-2.6l4.8,-13.47l4.57,-4.94l6.62,-11.12l-6.1,0.1l2.54,-4.3l6.78,-3.99l6.84,-8.9l0.12,-5.73l-5.13,-6.04l-6.02,-2.93l-7.49,-1.82l-6.07,-1.49l-6.07,-1.5l-8.1,3.98l-1.49,-2.53l-8.57,0.98l-5.03,2.57l-3.7,3.65l-2.13,11.74L239,24.52l-3.48,-1.14l-4.12,7.97l-5.5,3.35l-3.27,0.66l-4.17,3.84l0.61,6.65L222.35,51.34zM296.75,316.34l-0.98,-1.98l-1.06,1.26l0.7,1.36l3.56,1.71l1.04,-0.26l1.38,-1.66l-2.6,0.11L296.75,316.34zM239.75,238.48l0.61,1.63l1.98,0.14l3.28,-3.34l0.06,-1.19l-3.85,-0.06L239.75,238.48zM301.88,304.92l-2.87,-1.8l-3.69,-1.09l-0.97,0.37l2.61,2.04l3.63,1.34l1.36,-0.08L301.88,304.92zM326.76,309.71l-0.36,-2.24l-1.96,0.72l0.87,-3.11l-2.8,-1.32l-1.29,1.05l-2.49,-1.18l0.98,-1.51l-1.88,-0.93l-1.83,1.47l1.86,-3.82l1.5,-2.8l0.54,-1.22l-1.3,-0.2l-2.43,1.55l-1.74,2.53l-2.9,6.92l-2.35,2.56l1.22,1.14l-1.75,1.47l0.43,1.23l5.44,0.13l3.01,-0.25l2.69,1.01l-1.98,1.93l1.67,0.14l3.25,-3.58l0.78,0.53l-0.61,3.37l1.84,0.77l1.27,-0.15l1.18,-3.61L326.76,309.71zM305.57,314.47l-2.81,4.56l-4.63,0.58l-3.64,-2.01l-0.92,-3.07l-0.89,-4.46l2.65,-2.83l-2.48,-2.09l-4.19,0.43l-5.88,3.53l-4.5,5.45l-2.38,0.67l3.23,-3.8l4.04,-5.57l3.57,-1.9l2.35,-3.11l2.9,-0.3l4.21,0.03l6,0.92l4.74,-0.71l3.53,-3.62l4.62,-1.59l2.01,-1.58l2.04,-1.71l-0.2,-5.19l-1.13,-1.77l-2.18,-0.63l-1.11,-4.05l-1.8,-1.55l-4.47,-1.26l-2.52,-2.82l-3.73,-2.83l1.13,-3.2l-3.1,-6.26l-3.65,-6.89l-2.18,-4.98l-1.86,2.61l-2.68,6.05l-4.06,2.97l-2.03,-3.16l-2.56,-0.85l-0.93,-6.99l0.08,-4.8l-5,-0.44l-0.85,-2.27l-3.45,-3.44l-2.61,-2.04l-2.32,1.58l-2.88,-0.58l-4.81,-1.65l-1.95,1.4l0.94,9.18l1.22,5.12l-3.31,5.75l3.41,4.02l1.9,4.44l0.23,3.42l-1.55,3.5l-3.18,3.46l-4.49,2.28l1.98,2.53l1.46,7.4l-1.52,4.68l-2.16,1.46l-4.17,-4.28l-2.03,-5.17l-0.87,-4.76l0.46,-4.19l-3.05,-0.47l-4.63,-0.28l-2.97,-2.08l-3.51,-1.37l-2.01,-2.38l-2.8,-1.94l-5.21,-2.23l-3.92,1.02l-1.31,-3.95l-1.26,-4.99l-4.12,-0.9l0.15,-6.41l1.09,-4.48l3.04,-6.6l3.43,-4.9l3.26,-0.77l0.19,-4.05l2.21,-2.68l4.01,-0.42l3.25,-4.39l0.82,-2.9l2.7,-5.73l0.84,-3.5l2.9,2.11l3.9,-1.08l5.49,-4.96l0.36,-3.54l-1.98,-3.98l2.09,-4.06l-0.17,-3.87l-3.76,-3.95l-4.14,-1.19l-3.98,-0.62l-0.15,8.71l-2.04,6.56l-2.93,5.3l-2.71,-4.95l0.84,-5.61l-3.35,-5.02l-3.75,6.09l0.01,-7.99l-5.21,-1.63l2.49,-4.01l-3.81,-9.59l-2.84,-3.91l-3.7,-1.44l-3.32,6.43l-0.22,9.34l3.27,3.29l3,4.91l-1.27,7.71l-2.26,-0.2l-1.78,5.88l0.02,-7l-4.34,-2.58l-2.49,1.33l0.32,4.67l-4.09,-0.18l-4.35,1.17l-4.95,-3.35l-3.13,0.6l-2.82,-4.11l-2.26,-1.84l-2.24,0.77l-3.41,0.35l-1.81,2.61l2.86,3.19l-3.05,3.72l-2.99,-4.42l-2.39,1.3l-7.57,0.87l-5.07,-1.59l3.94,-3.74l-3.78,-3.9l-2.75,0.5l-3.86,-1.32l-6.56,-2.89l-4.29,-3.37l-3.4,-0.47l-1.06,2.36l-3.44,1.31l-0.38,-6.15l-3.73,5.5l-4.74,-7.32l-1.94,-0.89l-0.63,3.91l-2.09,1.9l-1.93,-3.39l-4.59,2.05l-4.2,3.55l-4.17,-0.98l-3.4,2.5l-2.46,3.28l-2.92,-0.72l-4.41,-3.8l-5.23,-1.94l-0.02,27.65l-0.01,35.43l2.76,0.17l2.73,1.56l1.96,2.44l2.49,3.6l2.73,-3.05l2.81,-1.79l1.49,2.85l1.89,2.23l2.57,2.42l1.75,3.79l2.87,5.88l4.77,3.2l0.08,3.12l-1.56,2.35l0.06,2.48l3.39,3.45l0.49,3.76l3.59,1.96l-0.4,2.79l1.56,3.96l5.08,1.82l2,1.89l5.43,4.23l0.38,0.01h7.96h8.32h2.76h8.55h8.27h8.41l8.42,0l9.53,0l9.59,0l5.8,0l0.01,-1.64l0.95,-0.02l0.5,2.35l0.87,0.72l1.96,0.26l2.86,0.67l2.72,1.3l2.27,-0.55l3.45,1.09l1.14,-1.66l1.59,-0.66l0.62,-1.03l0.63,-0.55l2.61,0.86l1.93,0.1l0.67,0.57l0.94,2.38l3.15,0.63l-0.49,1.18l1.11,1.21l-0.48,1.56l1.18,0.51l-0.59,1.37l0.75,0.13l0.53,-0.6l0.55,0.9l2.1,0.5l2.13,0.04l2.27,0.41l2.51,0.78l0.91,1.26l1.82,3.04l-0.9,1.3l-2.28,-0.54l-1.42,-2.44l0.36,2.49l-1.34,2.17l0.15,1.84l-0.23,1.07l-1.81,1.27l-1.32,2.09l-0.62,1.32l1.54,0.24l2.08,-1.2l1.23,-1.06l0.83,-0.17l1.54,0.38l0.75,-0.59l1.37,-0.48l2.44,-0.47v0l0,0l-0.25,-1.15l-0.13,0.04l-0.86,0.2l-1.12,-0.36l0.84,-1.32l0.85,-0.46l1.98,-0.56l2.37,-0.53l1.24,0.73l0.78,-0.85l0.89,-0.54l0.6,0.29l0.03,0.06l2.87,-2.73l1.27,-0.73l4.26,-0.03l5.17,0l0.28,-0.98l0.9,-0.2l1.19,-0.62l1,-1.82l0.86,-3.15l2.14,-3.1l0.93,1.08l1.88,-0.7l1.25,1.19l0,5.52l1.83,2.25l3.12,-0.48l4.49,-0.13l-4.87,3.26l0.11,3.29l2.13,0.28l3.13,-2.79l2.78,-1.58l6.21,-2.35l3.47,-2.62l-1.81,-1.46L305.57,314.47zM251.91,243.37l1.1,-3.12l-0.71,-1.23l-1.15,-0.13l-1.08,1.8l-0.13,0.41l0.74,1.77L251.91,243.37zM109.25,279.8L109.25,279.8l1.56,-2.35L109.25,279.8zM105.85,283.09l-2.69,0.38l-1.32,-0.62l-0.17,1.52l0.52,2.07l1.42,1.46l1.04,2.13l1.69,2.1l1.12,0.01l-2.44,-3.7L105.85,283.09z" }),
                        _react2.default.createElement("path", { id: "CD", title: "Democratic Republic of Congo", fill: mapColors[25].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[25].raw, this.IDDict["CD"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M561.71,453.61L561.54,456.87L562.66,457.24L561.76,458.23L560.68,458.97L559.61,460.43L559.02,461.72L558.86,463.96L558.21,465.02L558.19,467.12L557.38,467.9L557.28,469.56L556.89,469.77L556.63,471.3L557.34,472.56L557.52,475.93L558.02,478.5L557.74,479.96L558.3,481.58L559.93,483.15L561.44,486.7L560.34,486.41L556.57,486.89L555.82,487.22L555.02,489.02L555.65,490.27L555.15,493.62L554.8,496.47L555.56,496.98L557.52,498.08L558.29,497.57L558.53,500.65L556.38,500.62L555.23,499.05L554.2,497.83L552.05,497.43L551.42,495.94L549.7,496.84L547.46,496.44L546.52,495.15L544.74,494.89L543.43,494.96L543.27,494.08L542.3,494.01L541.02,493.84L539.29,494.26L538.07,494.19L537.37,494.45L537.52,491.08L536.59,490.03L536.38,488.3L536.79,486.6L536.23,485.51L536.18,483.75L532.77,483.77L533.02,482.76L531.59,482.77L531.44,483.26L529.7,483.37L528.99,485L528.57,485.71L527.02,485.31L526.1,485.71L524.24,485.93L523.17,484.46L522.53,483.55L521.72,481.87L521.03,479.78L512.76,479.75L511.77,480.08L510.96,480.03L509.8,480.41L509.41,479.54L510.12,479.24L510.21,478.02L510.67,477.3L511.69,476.72L512.43,477L513.39,475.93L514.91,475.96L515.09,476.75L516.14,477.25L517.79,475.49L519.42,474.13L520.13,473.24L520.04,470.94L521.26,468.23L522.54,466.8L524.39,465.46L524.71,464.57L524.78,463.55L525.24,462.58L525.09,461L525.44,458.53L525.99,456.79L526.83,455.3L526.99,453.62L527.24,451.67L528.34,450.25L529.84,449.35L532.15,450.3L533.93,451.33L535.98,451.61L538.07,452.15L538.91,450.47L539.3,450.25L540.57,450.53L543.7,449.14L544.8,449.73L545.71,449.65L546.13,448.97L547.17,448.73L549.28,449.02L551.08,449.08L552.01,448.79L553.7,451.1L554.96,451.43L555.71,450.96L557.01,451.15L558.57,450.56L559.24,451.75z" }),
                        _react2.default.createElement("path", { id: "CF", title: "Central African Republic", fill: mapColors[26].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[26].raw, this.IDDict["CF"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M518.09,442.66L520.41,442.44L520.93,441.72L521.39,441.78L522.09,442.41L525.62,441.34L526.81,440.24L528.28,439.25L528,438.26L528.79,438L531.5,438.18L534.14,436.87L536.16,433.78L537.59,432.64L539.36,432.15L539.68,433.37L541.3,435.14L541.3,436.29L540.85,437.47L541.03,438.34L542,439.15L544.14,440.39L545.67,441.52L545.7,442.44L547.58,443.9L548.75,445.11L549.46,446.79L551.56,447.9L552.01,448.79L551.08,449.08L549.28,449.02L547.17,448.73L546.13,448.97L545.71,449.65L544.8,449.73L543.7,449.14L540.57,450.53L539.3,450.25L538.91,450.47L538.07,452.15L535.98,451.61L533.93,451.33L532.15,450.3L529.84,449.35L528.34,450.25L527.24,451.67L526.99,453.62L525.19,453.46L523.29,452.99L521.62,454.47L520.15,457.07L519.85,456.26L519.73,454.99L518.45,454.09L517.41,452.65L517.17,451.65L515.85,450.19L516.07,449.36L515.79,448.18L516.01,446.01L516.68,445.5z" }),
                        _react2.default.createElement("path", { id: "CG", title: "Republic of Congo", fill: mapColors[27].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[27].raw, this.IDDict["CG"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M511.69,476.72L510.64,475.76L509.79,476.23L508.66,477.43L506.36,474.48L508.49,472.94L507.44,471.09L508.4,470.39L510.29,470.05L510.51,468.81L512.01,470.15L514.49,470.27L515.35,468.95L515.7,467.1L515.39,464.92L514.07,463.28L515.28,460.05L514.58,459.5L512.5,459.72L511.71,458.29L511.92,457.07L515.45,457.18L517.72,457.91L519.95,458.57L520.15,457.07L521.62,454.47L523.29,452.99L525.19,453.46L526.99,453.62L526.83,455.3L525.99,456.79L525.44,458.53L525.09,461L525.24,462.58L524.78,463.55L524.71,464.57L524.39,465.46L522.54,466.8L521.26,468.23L520.04,470.94L520.13,473.24L519.42,474.13L517.79,475.49L516.14,477.25L515.09,476.75L514.91,475.96L513.39,475.93L512.43,477z" }),
                        _react2.default.createElement("path", { id: "CH", title: "Switzerland", fill: mapColors[28].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[28].raw, this.IDDict["CH"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M502.15,312.34L502.26,313.08L501.83,314.09L503.1,314.83L504.53,314.94L504.31,316.61L503.08,317.3L501,316.79L500.39,318.42L499.06,318.55L498.57,317.91L497,319.27L495.65,319.46L494.44,318.6L493.48,316.83L492.14,317.47L492.18,315.63L494.23,313.32L494.14,312.27L495.42,312.66L496.19,311.95L498.57,311.98L499.15,311.08z" }),
                        _react2.default.createElement("path", { id: "CI", title: "Cote d'Ivoire", fill: mapColors[29].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[29].raw, this.IDDict["CI"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M467.24,449.46L465.97,449.49L464.01,448.94L462.22,448.97L458.89,449.46L456.95,450.27L454.17,451.29L453.63,451.22L453.84,448.92L454.11,448.57L454.03,447.46L452.84,446.29L451.95,446.1L451.13,445.33L451.74,444.09L451.46,442.73L451.59,441.91L452.04,441.91L452.2,440.68L451.98,440.14L452.25,439.75L453.29,439.41L452.6,437.15L451.95,435.99L452.18,435.02L452.74,434.81L453.1,434.55L453.88,434.97L456.04,435L456.56,434.17L457.04,434.23L457.85,433.91L458.29,435.12L458.94,434.76L460.1,434.34L461.36,434.96L461.85,435.89L463.11,436.49L464.09,435.78L465.41,435.67L467.33,436.4L468.07,440.41L466.89,442.77L466.16,445.94L467.37,448.35z" }),
                        _react2.default.createElement("path", { id: "CL", title: "Chile", fill: mapColors[30].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[30].raw, this.IDDict["CL"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M282.81,636.73l0,10.57l3,0l1.69,0.13l-0.93,1.98l-2.4,1.53l-1.38,-0.16l-1.66,-0.4l-2.04,-1.48l-2.94,-0.71l-3.53,-2.71l-2.86,-2.57l-3.86,-5.25l2.31,0.97l3.94,3.13l3.72,1.7l1.45,-2.17l0.91,-3.2l2.58,-1.91L282.81,636.73zM283.97,524.72l1.1,4.15l2.02,-0.41l0.34,0.76l-0.96,3.16l-3.05,1.51l0.09,5.14l-0.59,1l0.84,1.23l-1.98,1.95l-1.84,2.96l-1,2.9l0.27,3.11l-1.73,3.34l1.29,5.69l0.73,0.61l-0.01,3.09l-1.6,3.31l0.06,2.87l-2.12,2.26l0.01,3.22l0.85,3.46l-1.68,1.3l-0.75,3.22l-0.66,3.75l0.47,4.54l-1.13,0.77l0.65,4.4l1.27,1.46l-0.92,1.63l1.3,0.78l0.3,1.48l-1.22,0.75l0.3,2.33l-1.02,5.35l-1.49,3.52l0.33,2.11l-0.89,2.68l-2.15,1.88l0.25,4.6l0.99,1.6l1.87,-0.28l-0.05,3.33l1.16,2.63l6.78,0.61l2.6,0.71l-2.49,-0.03l-1.35,1.13l-2.53,1.67l-0.45,4.38l-1.19,0.11l-3.16,-1.54l-3.21,-3.25l0,0l-3.49,-2.63l-0.88,-2.87l0.79,-2.62l-1.41,-2.94l-0.36,-7.34l1.19,-4.03l2.96,-3.19l-4.26,-1.19l2.67,-3.57l0.95,-6.56l3.12,1.37l1.46,-7.97l-1.88,-1l-0.88,4.75l-1.77,-0.54l0.88,-5.42l0.96,-6.84l1.29,-2.48l-0.81,-3.5l-0.23,-3.98l1.18,-0.11l1.72,-5.6l1.94,-5.43l1.19,-4.97l-0.65,-4.91l0.84,-2.67l-0.34,-3.96l1.64,-3.87l0.51,-6.04l0.9,-6.37l0.88,-6.75l-0.21,-4.87l-0.58,-4.15l1.44,-0.75l0.75,-1.5l1.37,1.99l0.37,2.12l1.47,1.25l-0.88,2.87L283.97,524.72z" }),
                        _react2.default.createElement("path", { id: "CM", title: "Cameroon", fill: mapColors[31].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[31].raw, this.IDDict["CM"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M511.92,457.07L511.57,456.92L509.91,457.28L508.2,456.9L506.87,457.09L502.31,457.02L502.72,454.82L501.62,452.98L500.34,452.5L499.77,451.25L499.05,450.85L499.09,450.08L499.81,448.1L501.14,445.4L501.95,445.37L503.62,443.73L504.69,443.69L506.26,444.84L508.19,443.89L508.45,442.73L509.08,441.59L509.51,440.17L511.01,439.01L511.58,437.04L512.17,436.41L512.57,434.94L513.31,433.13L515.67,430.93L515.82,429.98L516.13,429.47L515.02,428.33L515.11,427.43L515.9,427.26L517.01,429.09L517.2,430.98L517.1,432.87L518.62,435.44L517.06,435.41L516.27,435.61L514.99,435.33L514.38,436.66L516.03,438.31L517.25,438.79L517.65,439.96L518.53,441.89L518.09,442.66L516.68,445.5L516.01,446.01L515.79,448.18L516.07,449.36L515.85,450.19L517.17,451.65L517.41,452.65L518.45,454.09L519.73,454.99L519.85,456.26L520.15,457.07L519.95,458.57L517.72,457.91L515.45,457.18z" }),
                        _react2.default.createElement("path", { id: "CN", title: "China", fill: mapColors[32].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[32].raw, this.IDDict["CN"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M784.63,410.41l-2.42,1.41l-2.3,-0.91l-0.08,-2.53l1.38,-1.34l3.06,-0.83l1.61,0.07l0.63,1.13l-1.23,1.3L784.63,410.41zM833.19,302.89l4.88,1.38l3.32,3.03l1.13,3.95l4.26,0l2.43,-1.65l4.63,-1.24l-1.47,3.76l-1.09,1.51l-0.96,4.46l-1.89,3.89l-3.4,-0.7l-2.41,1.4l0.74,3.36l-0.4,4.55l-1.43,0.1l0.02,1.93l-1.81,-2.24l-1.11,2.13l-4.33,1.62l0.44,1.97l-2.42,-0.14l-1.33,-1.17l-1.93,2.64l-3.09,1.98l-2.28,2.35l-3.92,1.06l-2.06,1.69l-3.02,0.98l1.49,-1.67l-0.59,-1.41l2.22,-2.45l-1.48,-1.93l-2.44,1.3l-3.17,2.54l-1.73,2.34l-2.75,0.17l-1.43,1.68l1.48,2.41l2.29,0.58l0.09,1.58l2.22,1.02l3.14,-2.51l2.49,1.37l1.81,0.09l0.46,1.84l-3.97,0.97l-1.31,1.87l-2.73,1.73l-1.44,2.39l3.02,1.86l1.1,3.31l1.71,3.05l1.9,2.53l-0.05,2.43l-1.76,0.89l0.67,1.73l1.65,1l-0.43,2.61l-0.71,2.52l-1.57,0.28l-2.05,3.41l-2.27,4.09l-2.6,3.68l-3.86,2.82l-3.9,2.55l-3.16,0.35l-1.71,1.34l-0.97,-0.98l-1.59,1.5l-3.92,1.5l-2.97,0.46l-0.96,3.15l-1.55,0.17l-0.74,-2.16l0.66,-1.16l-3.76,-0.96l-1.33,0.49l-2.82,-0.78l-1.33,-1.22l0.44,-1.74l-2.56,-0.55l-1.35,-1.14l-2.39,1.62l-2.73,0.35l-2.24,-0.02l-1.5,0.74l-1.45,0.44l0.42,3.43l-1.5,-0.08l-0.25,-0.7l-0.08,-1.24l-2.06,0.87l-1.21,-0.55l-2.08,-1.13l0.82,-2.51l-1.78,-0.59l-0.67,-2.8l-2.96,0.51l0.34,-3.63l2.66,-2.58l0.11,-2.57l-0.08,-2.4l-1.22,-0.75l-0.94,-1.86l-1.64,0.24l-3.02,-0.47l0.95,-1.33l-1.31,-1.99l-2,1.35L740.4,378l-3.23,2.03l-2.55,2.36l-2.26,0.39l-1.23,-0.85l-1.48,-0.08l-2,-0.73l-1.51,0.8l-1.85,2.34l-0.24,-2.48l-1.71,0.66l-3.27,-0.31l-3.17,-0.73l-2.28,-1.39l-2.18,-0.63l-0.94,-1.53l-1.58,-0.46l-2.83,-2.09l-2.25,-0.99l-1.16,0.77l-3.9,-2.26l-2.75,-2.07l-0.79,-3.63l2.01,0.44l0.09,-1.69l-1.12,-1.71l0.28,-2.74l-3.01,-3.99l-4.61,-1.39l-0.83,-2.66l-2.07,-1.63l-0.5,-1.01l-0.42,-2.01l0.1,-1.38l-1.7,-0.81l-0.92,0.36l-0.71,-3.32l0.8,-0.83l-0.39,-0.85l2.68,-1.73l1.94,-0.72l2.97,0.49l1.06,-2.35l3.6,-0.44l1,-1.48l4.42,-2.03l0.39,-0.85l-0.22,-2.17l1.92,-1l-2.52,-6.75l5.55,-1.58l1.44,-0.89l2.02,-7.26l5.56,1.35l1.56,-1.86l0.13,-4.19l2.33,-0.39l2.13,-2.83l1.1,-0.35l0.74,2.97l2.36,2.23l4,1.57l1.93,3.32l-1.08,4.73l1.01,1.73l3.33,0.68l3.78,0.55l3.39,2.45l1.73,0.43l1.28,3.57l1.65,2.27l3.09,-0.09l5.79,0.85l3.73,-0.53l2.77,0.57l4.15,2.29l3.39,0l1.24,1.16l3.26,-2.01l4.53,-1.31l4.2,-0.14l3.28,-1.34l2.01,-2.05l1.96,-1.3l-0.45,-1.28l-0.9,-1.5l1.47,-2.54l1.58,0.36l2.88,0.8l2.79,-2.1l4.28,-1.55l2.05,-2.66l1.97,-1.16l4.07,-0.54l2.21,0.46l0.31,-1.45l-2.54,-2.89l-2.25,-1.33l-2.16,1.54l-2.77,-0.65l-1.59,0.53l-0.72,-1.71l1.98,-4.23l1.37,-3.25l3.37,1.63l3.95,-2.74l-0.03,-1.93l2.53,-4.73l1.56,-1.45l-0.04,-2.52l-1.54,-1.1l2.32,-2.31l3.48,-0.84l3.72,-0.13l4.2,1.39l2.46,1.71l1.73,4.61l1.05,1.94l0.98,2.73L833.19,302.89z" }),
                        _react2.default.createElement("path", { id: "CO", title: "Colombia", fill: mapColors[33].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[33].raw, this.IDDict["CO"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M263.92,463.81L262.72,463.15L261.34,462.23L260.54,462.67L258.16,462.28L257.48,461.08L256.96,461.13L254.15,459.54L253.77,458.67L254.82,458.46L254.7,457.07L255.35,456.06L256.74,455.87L257.93,454.12L259,452.66L257.96,451.99L258.49,450.37L257.86,447.81L258.46,447.08L258.02,444.71L256.88,443.21L257.24,441.85L258.15,442.05L258.68,441.21L258.03,439.56L258.37,439.14L259.81,439.23L261.92,437.26L263.07,436.96L263.1,436.03L263.62,433.64L265.23,432.32L266.99,432.27L267.21,431.68L269.41,431.91L271.62,430.48L272.71,429.84L274.06,428.47L275.06,428.64L275.79,429.39L275.25,430.35L273.45,430.83L272.74,432.25L271.65,433.06L270.84,434.12L270.49,436.13L269.72,437.79L271.16,437.97L271.52,439.27L272.14,439.89L272.36,441.02L272.03,442.06L272.13,442.65L272.82,442.88L273.49,443.86L277.09,443.59L278.72,443.95L280.7,446.36L281.83,446.06L283.85,446.21L285.45,445.89L286.44,446.38L285.93,447.88L285.31,448.82L285.09,450.83L285.65,452.68L286.45,453.51L286.54,454.14L285.12,455.53L286.14,456.14L286.89,457.12L287.74,459.89L287.21,460.24L286.67,458.59L285.89,457.71L284.96,458.67L279.5,458.61L279.53,460.35L281.17,460.64L281.08,461.71L280.52,461.42L278.94,461.88L278.93,463.9L280.17,464.92L280.61,466.51L280.54,467.72L279.28,475.37L277.88,473.88L277.04,473.82L278.85,470.98L276.7,469.67L275.02,469.91L274.01,469.43L272.46,470.17L270.37,469.82L268.72,466.9L267.42,466.18L266.53,464.86L264.67,463.54z" }),
                        _react2.default.createElement("path", { id: "CR", title: "Costa Rica", fill: mapColors[34].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[34].raw, this.IDDict["CR"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M242.63,440.4L241.11,439.77L240.54,439.18L240.86,438.69L240.76,438.07L239.98,437.39L238.88,436.84L237.91,436.48L237.73,435.65L236.99,435.14L237.17,435.97L236.61,436.64L235.97,435.86L235.07,435.58L234.69,435.01L234.71,434.15L235.08,433.25L234.29,432.85L234.93,432.31L235.35,431.94L237.2,432.69L237.84,432.32L238.73,432.56L239.2,433.14L240.02,433.33L240.69,432.73L241.41,434.27L242.49,435.41L243.81,436.62L242.72,436.87L242.74,438L243.32,438.42L242.9,438.76L243.01,439.27L242.78,439.84z" }),
                        _react2.default.createElement("path", { id: "CU", title: "Cuba", fill: mapColors[35].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[35].raw, this.IDDict["CU"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M244.58,396.94L247.01,397.16L249.21,397.19L251.84,398.22L252.96,399.33L255.58,398.99L256.57,399.69L258.95,401.56L260.69,402.91L261.61,402.87L263.29,403.48L263.08,404.32L265.15,404.44L267.27,405.66L266.94,406.35L265.07,406.73L263.18,406.88L261.25,406.64L257.24,406.93L259.12,405.27L257.98,404.5L256.17,404.3L255.2,403.44L254.53,401.74L252.95,401.85L250.33,401.05L249.49,400.42L245.84,399.95L244.86,399.36L245.91,398.61L243.16,398.46L241.15,400.02L239.98,400.06L239.58,400.8L238.2,401.13L237,400.84L238.48,399.91L239.08,398.82L240.35,398.15L241.78,397.56L243.91,397.27z" }),
                        _react2.default.createElement("path", { id: "CY", title: "Cyprus", fill: mapColors[36].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[36].raw, this.IDDict["CY"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M570.31,358.29L572.2,356.83L569.65,357.85L567.63,357.8L567.23,358.63L567.03,358.65L565.7,358.77L566.35,360.14L567.72,360.58L570.6,359.2L570.51,358.93z" }),
                        _react2.default.createElement("path", { id: "CZ", title: "Czech Republic", fill: mapColors[37].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[37].raw, this.IDDict["CZ"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M522.81,307.86L521.51,307.06L520.2,307.28L518.02,305.98L517.03,306.3L515.46,308.04L513.37,306.67L511.79,304.84L510.36,303.8L510.06,301.98L509.57,300.68L511.61,299.73L512.65,298.63L514.66,297.77L515.37,296.93L516.11,297.44L517.36,296.97L518.69,298.4L520.78,298.79L520.61,300L522.13,300.9L522.55,299.77L524.47,300.26L524.74,301.63L526.82,301.89L528.11,304.02L527.28,304.03L526.84,304.8L526.2,304.99L526.02,305.96L525.48,306.17L525.4,306.56L524.45,307L523.2,306.93z" }),
                        _react2.default.createElement("path", { id: "DE", title: "Germany", fill: mapColors[38].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[38].raw, this.IDDict["DE"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M503.07,278.92L503.12,280.8L505.96,281.92L505.93,283.62L508.78,282.72L510.35,281.41L513.52,283.3L514.84,284.81L515.5,287.2L514.72,288.45L515.73,290.1L516.43,292.55L516.21,294.11L517.36,296.97L516.11,297.44L515.37,296.93L514.66,297.77L512.65,298.63L511.61,299.73L509.57,300.68L510.06,301.98L510.36,303.8L511.79,304.84L513.37,306.67L512.39,308.62L511.38,309.16L511.78,311.88L511.51,312.58L510.64,311.73L509.3,311.61L507.29,312.35L504.82,312.17L504.42,313.26L503,312.12L502.15,312.34L499.15,311.08L498.57,311.98L496.19,311.95L496.54,308.97L497.96,306.07L493.92,305.29L492.6,304.16L492.76,302.27L492.2,301.29L492.52,298.32L492.04,293.63L493.73,293.63L494.44,291.92L495.14,287.69L494.61,286.11L495.16,285.11L497.5,284.85L498.02,285.89L499.93,283.56L499.29,281.77L499.16,279.02L501.28,279.66z" }),
                        _react2.default.createElement("path", { id: "DJ", title: "Djibouti", fill: mapColors[39].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[39].raw, this.IDDict["DJ"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M596.05,427.72L596.71,428.6L596.62,429.79L595.02,430.47L596.23,431.24L595.19,432.76L594.57,432.26L593.9,432.46L592.33,432.41L592.28,431.55L592.07,430.76L593.01,429.43L594,428.17L595.2,428.42z" }),
                        _react2.default.createElement("path", { id: "DK", title: "Denmark", fill: mapColors[40].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[40].raw, this.IDDict["DK"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M510.83,275.84l-1.68,3.97l-2.93,-2.76l-0.39,-2.05l4.11,-1.66L510.83,275.84zM505.85,271.59l-0.69,1.9l-0.83,-0.55l-2.02,3.59l0.76,2.39l-1.79,0.74l-2.12,-0.64l-1.14,-2.72l-0.08,-5.12l0.47,-1.38l0.8,-1.54l2.47,-0.32l0.98,-1.43l2.26,-1.47l-0.1,2.68l-0.83,1.68l0.34,1.43L505.85,271.59z" }),
                        _react2.default.createElement("path", { id: "DO", title: "Dominican Republic", fill: mapColors[41].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[41].raw, this.IDDict["DO"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M274.18,407.35L274.53,406.84L276.72,406.86L278.38,407.62L279.12,407.54L279.63,408.59L281.16,408.53L281.07,409.41L282.32,409.52L283.7,410.6L282.66,411.8L281.32,411.16L280.04,411.28L279.12,411.14L278.61,411.68L277.53,411.86L277.11,411.14L276.18,411.57L275.06,413.57L274.34,413.11L274.19,412.27L274.25,411.47L273.53,410.59L274.21,410.09L274.43,408.96z" }),
                        _react2.default.createElement("path", { id: "DZ", title: "Algeria", fill: mapColors[42].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[42].raw, this.IDDict["DZ"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M508.9,396.08L499.29,401.83L491.17,407.68L487.22,409L484.11,409.29L484.08,407.41L482.78,406.93L481.03,406.08L480.37,404.69L470.91,398.14L461.45,391.49L450.9,383.96L450.96,383.35L450.96,383.14L450.93,379.39L455.46,377.03L458.26,376.54L460.55,375.68L461.63,374.06L464.91,372.77L465.03,370.36L466.65,370.07L467.92,368.86L471.59,368.3L472.1,367.02L471.36,366.31L470.39,362.78L470.23,360.73L469.17,358.55L471.86,356.68L474.9,356.08L476.67,354.65L479.37,353.6L484.12,352.98L488.76,352.69L490.17,353.21L492.81,351.84L495.81,351.81L496.95,352.62L498.86,352.41L498.29,354.2L498.74,357.48L498.08,360.3L496.35,362.18L496.6,364.71L498.89,366.69L498.92,367.5L500.64,368.83L501.84,374.69L502.75,377.53L502.9,379.01L502.41,381.6L502.61,383.04L502.25,384.76L502.5,386.73L501.38,388.02L503.04,390.28L503.15,391.6L504.14,393.31L505.45,392.75L507.67,394.17z" }),
                        _react2.default.createElement("path", { id: "EC", title: "Ecuador", fill: mapColors[43].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[43].raw, this.IDDict["EC"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M250.1,472.87L251.59,470.79L250.98,469.57L249.91,470.87L248.23,469.64L248.8,468.86L248.33,466.33L249.31,465.91L249.83,464.18L250.89,462.38L250.69,461.25L252.23,460.65L254.15,459.54L256.96,461.13L257.48,461.08L258.16,462.28L260.54,462.67L261.34,462.23L262.72,463.15L263.92,463.81L264.31,465.92L263.44,467.73L260.38,470.65L257.01,471.75L255.29,474.18L254.76,476.06L253.17,477.21L252,475.8L250.86,475.5L249.7,475.72L249.63,474.7L250.43,474.04z" }),
                        _react2.default.createElement("path", { id: "EE", title: "Estonia", fill: mapColors[44].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[44].raw, this.IDDict["EE"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M543.42,264.71L543.75,261.59L542.72,262.26L540.94,260.36L540.69,257.25L544.24,255.72L547.77,254.91L550.81,255.83L553.71,255.66L554.13,256.62L552.14,259.76L552.97,264.72L551.77,266.38L549.45,266.37L547.04,264.43L545.81,263.78z" }),
                        _react2.default.createElement("path", { id: "EG", title: "Egypt", fill: mapColors[45].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[45].raw, this.IDDict["EG"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M573.17,377.28L572.38,378.57L571.78,380.97L571.02,382.61L570.36,383.17L569.43,382.15L568.16,380.73L566.16,376.16L565.88,376.45L567.04,379.82L568.76,383L570.88,387.88L571.91,389.56L572.81,391.3L575.33,394.7L574.77,395.23L574.86,397.2L578.13,399.91L578.62,400.53L567.5,400.53L556.62,400.53L545.35,400.53L545.35,389.3L545.35,378.12L544.51,375.54L545.23,373.54L544.8,372.15L545.81,370.58L549.54,370.53L552.24,371.39L555.02,372.36L556.32,372.86L558.48,371.83L559.63,370.9L562.11,370.63L564.1,371.04L564.87,372.66L565.52,371.59L567.76,372.36L569.95,372.55L571.33,371.73z" }),
                        _react2.default.createElement("path", { id: "EH", title: "Western Sahara", fill: mapColors[46].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[46].raw, this.IDDict["EH"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M438.57,383.06L442.19,383.07L450.94,383.1L450.94,383.1L450.94,383.1L442.19,383.07L438.57,383.06L438.46,383.15L438.41,383.19L436.63,386.39L434.77,387.53L433.75,389.44L433.69,391.09L432.94,392.88L432,393.37L430.44,395.31L429.48,397.46L429.66,398.48L428.74,400.05L427.66,400.87L427.53,402.26L427.41,403.53L428.02,402.53L439,402.55L438.47,398.2L439.16,396.65L441.78,396.38L441.69,388.52L450.9,388.69L450.9,383.96L450.96,383.35L450.96,383.14z" }),
                        _react2.default.createElement("path", { id: "ER", title: "Eritrea", fill: mapColors[47].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[47].raw, this.IDDict["ER"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M594,428.17L593.04,427.24L591.89,425.57L590.65,424.65L589.92,423.65L587.48,422.5L585.56,422.47L584.88,421.86L583.24,422.54L581.54,421.23L580.66,423.38L577.4,422.78L577.1,421.63L578.31,417.38L578.58,415.45L579.46,414.55L581.53,414.07L582.95,412.4L584.58,415.78L585.35,418.45L586.89,419.86L590.71,422.58L592.27,424.22L593.79,425.88L594.67,426.86L596.05,427.72L595.2,428.42z" }),
                        _react2.default.createElement("path", { id: "ES", title: "Spain", fill: mapColors[48].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[48].raw, this.IDDict["ES"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M449.92,334.56L450.06,331.88L448.92,330.22L452.88,327.45L456.31,328.15L460.08,328.12L463.06,328.78L465.39,328.58L469.92,328.7L471.04,330.19L476.2,331.92L477.22,331.1L480.38,332.82L483.63,332.33L483.78,334.52L481.12,337.01L477.53,337.79L477.28,339.03L475.55,341.06L474.47,344.02L475.56,346.07L473.94,347.67L473.34,349.97L471.22,350.67L469.23,353.36L465.68,353.41L463,353.35L461.25,354.57L460.18,355.88L458.8,355.59L457.77,354.42L456.97,352.42L454.35,351.88L454.12,350.72L455.16,349.4L455.54,348.44L454.58,347.38L455.35,345.03L454.23,342.86L455.44,342.56L455.55,340.84L456.01,340.31L456.04,337.43L457.34,336.43L456.56,334.55L454.92,334.42L454.44,334.89L452.79,334.9L452.08,333.06L450.94,333.61z" }),
                        _react2.default.createElement("path", { id: "ET", title: "Ethiopia", fill: mapColors[49].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[49].raw, this.IDDict["ET"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M581.54,421.23L583.24,422.54L584.88,421.86L585.56,422.47L587.48,422.5L589.92,423.65L590.65,424.65L591.89,425.57L593.04,427.24L594,428.17L593.01,429.43L592.07,430.76L592.28,431.55L592.33,432.41L593.9,432.46L594.57,432.26L595.19,432.76L594.58,433.77L595.62,435.33L596.65,436.69L597.72,437.7L606.89,441.04L609.25,441.02L601.32,449.44L597.67,449.56L595.17,451.53L593.38,451.58L592.61,452.46L590.69,452.46L589.56,451.52L587,452.69L586.17,453.85L584.3,453.63L583.68,453.31L583.02,453.38L582.14,453.36L578.59,450.98L576.64,450.98L575.68,450.07L575.68,448.5L574.22,448.03L572.57,444.98L571.29,444.33L570.79,443.21L569.37,441.84L567.65,441.64L568.61,440.03L570.09,439.96L570.51,439.1L570.48,436.57L571.31,433.61L572.63,432.81L572.92,431.65L574.12,429.48L575.81,428.06L576.95,425.25L577.4,422.78L580.66,423.38z" }),
                        _react2.default.createElement("path", { id: "FK", title: "Falkland Islands", fill: mapColors[50].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[50].raw, this.IDDict["FK"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M303.66,633.13L307.02,630.44L309.41,631.56L311.09,629.77L313.33,631.78L312.49,633.36L308.7,634.72L307.44,633.13L305.06,635.18z" }),
                        _react2.default.createElement("path", { id: "FI", title: "Finland", fill: mapColors[51].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[51].raw, this.IDDict["FI"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M555.42,193.1L555.01,198.5L559.31,203.49L556.72,208.97L559.98,216.93L558.09,222.69L560.62,227.55L559.47,231.69L563.62,235.95L562.56,239.05L559.96,242.5L553.96,249.91L548.87,250.36L543.94,252.43L539.38,253.61L537.75,250.54L535.04,248.67L535.66,242.95L534.3,237.54L535.64,233.96L538.18,230.02L544.59,223L546.47,221.61L546.17,218.77L542.27,215.55L541.33,212.85L541.25,201.73L536.88,196.58L533.14,192.77L534.82,190.69L537.94,194.84L541.6,194.45L544.61,196.32L547.28,192.88L548.66,187.03L553.01,184.25L556.61,187.51z" }),
                        _react2.default.createElement("path", { id: "FJ", title: "Fiji", fill: mapColors[52].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[52].raw, this.IDDict["FJ"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M980.53,508.61l-0.35,1.4l-0.23,0.16l-1.78,0.72l-1.79,0.61l-0.36,-1.09l1.4,-0.6l0.89,-0.16l1.64,-0.91L980.53,508.61zM974.69,512.92l-1.27,-0.36l-1.08,1l0.27,1.29l1.55,0.36l1.74,-0.4l0.46,-1.53l-0.96,-0.84L974.69,512.92z" }),
                        _react2.default.createElement("path", { id: "FR", title: "France", fill: mapColors[53].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[53].raw, this.IDDict["FR"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M502.06,333.54l-0.93,2.89l-1.27,-0.76l-0.65,-2.53l0.57,-1.41l1.81,-1.45L502.06,333.54zM485.31,300.19l1.96,2.06l1.44,-0.34l2.45,1.97l0.63,0.37l0.81,-0.09l1.32,1.12l4.04,0.79l-1.42,2.9l-0.36,2.98l-0.77,0.71l-1.28,-0.38l0.09,1.05l-2.05,2.3l-0.04,1.84l1.34,-0.63l0.96,1.77l-0.12,1.13l0.83,1.5l-0.97,1.21l0.72,3.04l1.52,0.49l-0.32,1.68l-2.54,2.17l-5.53,-1.04l-4.08,1.24l-0.32,2.29l-3.25,0.49l-3.15,-1.72l-1.02,0.82l-5.16,-1.73l-1.12,-1.49l1.45,-2.32l0.53,-7.88l-2.89,-4.26l-2.07,-2.09l-4.29,-1.6l-0.28,-3.07l3.64,-0.92l4.71,1.09l-0.89,-4.84l2.65,1.85l6.53,-3.37l0.84,-3.61l2.45,-0.9l0.41,1.56l1.3,0.07L485.31,300.19z" }),
                        _react2.default.createElement("path", { id: "GA", title: "Gabon", fill: mapColors[54].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[54].raw, this.IDDict["GA"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M506.36,474.48L503.48,471.66L501.62,469.36L499.92,466.48L500.01,465.56L500.62,464.66L501.3,462.64L501.87,460.57L502.82,460.41L506.89,460.44L506.87,457.09L508.2,456.9L509.91,457.28L511.57,456.92L511.92,457.07L511.71,458.29L512.5,459.72L514.58,459.5L515.28,460.05L514.07,463.28L515.39,464.92L515.7,467.1L515.35,468.95L514.49,470.27L512.01,470.15L510.51,468.81L510.29,470.05L508.4,470.39L507.44,471.09L508.49,472.94z" }),
                        _react2.default.createElement("path", { id: "GB", title: "United Kingdom", fill: mapColors[55].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[55].raw, this.IDDict["GB"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M459.38,281l-1.5,3.29l-2.12,-0.98l-1.73,0.07l0.58,-2.57l-0.58,-2.6l2.35,-0.2L459.38,281zM466.83,260.24l-3,5.73l2.86,-0.72l3.07,0.03l-0.73,4.22l-2.52,4.53l2.9,0.32l0.22,0.52l2.5,5.79l1.92,0.77l1.73,5.41l0.8,1.84l3.4,0.88l-0.34,2.93l-1.43,1.33l1.12,2.33l-2.52,2.33l-3.75,-0.04l-4.77,1.21l-1.31,-0.87l-1.85,2.06l-2.59,-0.5l-1.97,1.67l-1.49,-0.87l4.11,-4.64l2.51,-0.97l-0.02,0l-4.38,-0.75l-0.79,-1.8l2.93,-1.41l-1.54,-2.48l0.53,-3.06l4.17,0.42l0,0l0.41,-2.74l-1.88,-2.95l-0.04,-0.07l-3.4,-0.85l-0.67,-1.32l1.02,-2.2l-0.92,-1.37l-1.51,2.34l-0.16,-4.8l-1.42,-2.59l1.02,-5.36l2.18,-4.31l2.24,0.42L466.83,260.24z" }),
                        _react2.default.createElement("path", { id: "GE", title: "Georgia", fill: mapColors[56].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[56].raw, this.IDDict["GE"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M591.76,335.85L592.18,334.25L591.48,331.68L589.86,330.27L588.31,329.83L587.28,328.66L587.62,328.2L589.99,328.86L594.12,329.48L597.94,331.31L598.43,332.02L600.13,331.42L602.75,332.22L603.6,333.77L605.37,334.64L604.64,335.15L606.02,337.17L605.64,337.6L604.13,337.38L602.04,336.32L601.35,336.92L597.45,337.5L594.75,335.68z" }),
                        _react2.default.createElement("path", { id: "GF", title: "French Guiana", fill: mapColors[57].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[57].raw, this.IDDict["GF"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M327.89,456.41l-1.07,1.06l-1.34,0.2l-0.38,-0.78l-0.63,-0.12l-0.87,0.76l-1.22,-0.57l0.71,-1.19l0.24,-1.27l0.48,-1.2l-1.09,-1.65l-0.22,-1.91l1.46,-2.41l0.95,0.31l2.06,0.66l2.97,2.36l0.46,1.14l-1.66,2.55L327.89,456.41z" }),
                        _react2.default.createElement("path", { id: "GH", title: "Ghana", fill: mapColors[58].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[58].raw, this.IDDict["GH"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M478.23,446.84L473.83,448.48L472.27,449.44L469.74,450.25L467.24,449.46L467.37,448.35L466.16,445.94L466.89,442.77L468.07,440.41L467.33,436.4L466.94,434.27L467.01,432.66L471.88,432.53L473.12,432.74L474.02,432.28L475.32,432.5L475.11,433.39L476.28,434.85L476.28,436.9L476.55,439.12L477.25,440.15L476.63,442.68L476.85,444.08L477.6,445.86z" }),
                        _react2.default.createElement("path", { id: "GL", title: "Greenland", fill: mapColors[59].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[59].raw, this.IDDict["GL"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M344.13,23.91L353.55,10.3L363.39,11.37L366.96,2.42L376.87,0L399.27,3.15L416.81,21.74L411.63,30.04L400.9,30.97L385.81,33L387.22,36.64L397.15,34.4L405.59,41.31L411.04,35.19L413.37,42.34L410.29,53.31L417.43,46.38L431.04,38.83L439.45,42.64L441.02,50.76L429.59,63.42L428.01,67.32L419.05,70.18L425.54,70.97L422.26,82.48L420,92.07L420.09,107.33L423.46,115.67L419.08,116.18L414.47,120.06L419.64,126.36L420.3,135.98L417.3,137L420.93,146.15L414.71,146.9L417.96,151.04L417.04,154.55L413.09,156.06L409.18,156.09L412.69,162.57L412.73,166.7L407.18,162.87L405.74,165.36L409.52,167.65L413.2,173.13L414.26,180.08L409.26,181.7L407.1,178.44L403.63,173.46L404.59,179.33L401.34,183.74L408.72,184.09L412.59,184.54L405.07,191.57L397.45,197.7L389.25,200.31L386.16,200.35L383.26,203.22L379.36,210.85L373.33,215.74L371.39,216.03L367.65,217.7L363.63,219.29L361.22,223.41L361.18,227.97L359.77,232.13L355.19,237.08L356.32,241.79L355.06,246.64L353.63,252.2L349.68,252.54L345.54,247.91L339.93,247.88L337.21,244.7L335.34,238.9L330.48,231.22L329.06,227.07L328.68,221.18L324.79,214.91L325.8,209.74L323.93,207.21L326.7,198.56L330.92,195.71L332.03,192.45L332.62,186.19L329.41,189.05L327.89,190.24L325.37,191.38L321.93,188.77L321.74,183.22L322.84,178.74L325.44,178.62L331.16,180.87L326.34,175.44L323.83,172.43L321.04,173.67L318.7,171.48L321.83,162.98L320.13,159.45L317.9,152.71L314.53,141.8L310.96,137.63L310.99,133L303.46,126.31L297.51,125.46L290.02,125.93L283.18,126.79L279.92,123.04L275.05,115.38L282.41,111.41L288.06,110.73L276.06,107.37L269.74,101.93L270.13,96.59L280.74,89.72L291.01,82.56L292.09,76.92L284.53,71.16L286.97,64.52L296.68,52.19L300.76,50.21L299.59,41.64L306.23,36.4L314.85,33.19L323.47,33.01L326.53,39.31L333.97,27.99L340.66,35.77L344.59,37.36L350.42,43.77L343.75,33z" }),
                        _react2.default.createElement("path", { id: "GM", title: "Gambia", fill: mapColors[60].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[60].raw, this.IDDict["GM"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M428.03,426.43L428.39,425.16L431.44,425.07L432.08,424.4L432.97,424.35L434.07,425.06L434.94,425.07L435.87,424.59L436.43,425.41L435.22,426.06L434,426.01L432.8,425.4L431.76,426.06L431.26,426.09L430.58,426.49z" }),
                        _react2.default.createElement("path", { id: "GN", title: "Guinea", fill: mapColors[61].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[61].raw, this.IDDict["GN"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M451.59,441.91L450.8,441.84L450.23,442.97L449.43,442.96L448.89,442.36L449.07,441.23L447.9,439.51L447.17,439.82L446.57,439.89L445.8,440.05L445.83,439.02L445.38,438.28L445.47,437.46L444.86,436.27L444.08,435.26L441.84,435.26L441.19,435.79L440.41,435.85L439.93,436.46L439.61,437.25L438.11,438.49L436.88,436.82L435.79,435.71L435.07,435.35L434.37,434.78L434.06,433.53L433.65,432.91L432.83,432.44L434.08,431.06L434.93,431.11L435.66,430.63L436.28,430.63L436.72,430.25L436.48,429.31L436.79,429.01L436.84,428.04L438.19,428.07L440.21,428.77L440.83,428.7L441.04,428.39L442.56,428.61L442.97,428.45L443.13,429.5L443.58,429.49L444.31,429.11L444.77,429.21L445.55,429.93L446.75,430.16L447.52,429.54L448.43,429.16L449.1,428.76L449.66,428.84L450.28,429.46L450.62,430.25L451.77,431.44L451.19,432.17L451.08,433.09L451.68,432.81L452.03,433.15L451.88,433.99L452.74,434.81L452.18,435.02L451.95,435.99L452.6,437.15L453.29,439.41L452.25,439.75L451.98,440.14L452.2,440.68L452.04,441.91z" }),
                        _react2.default.createElement("path", { id: "GQ", title: "Equatorial Guinea", fill: mapColors[62].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[62].raw, this.IDDict["GQ"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M501.87,460.57L501.34,460.15L502.31,457.02L506.87,457.09L506.89,460.44L502.82,460.41z" }),
                        _react2.default.createElement("path", { id: "GR", title: "Greece", fill: mapColors[63].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[63].raw, this.IDDict["GR"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M541.7,356.71l1.53,1.16l2.18,-0.19l2.09,0.24l-0.07,0.6l1.53,-0.41l-0.35,1.01l-4.04,0.29l0.03,-0.56l-3.42,-0.67L541.7,356.71zM549.85,335.75l-0.87,2.33l-0.67,0.41l-1.71,-0.1l-1.46,-0.35l-3.4,0.96l1.94,2.06l-1.42,0.59l-1.56,0l-1.48,-1.88l-0.53,0.8l0.63,2.18l1.4,1.7l-1.06,0.79l1.56,1.65l1.39,1.03l0.04,2l-1.36,-1.15l-1.24,0.21l0.83,1.8l-0.92,0.19l-1,-0.69l1.2,3.95l-0.58,0l-0.45,-1.25l-0.57,-0.02l-0.26,1.32l-0.45,-0.3l0.1,-0.74l-0.56,-1.04h-0.64l0.12,0.84l-0.25,0.27l-0.62,-0.54l-0.38,-1.01l0.52,-0.57l-0.36,-0.74l-0.41,-0.38l-0.42,-0.09l-0.49,-0.94l0.58,-0.52l0.36,-0.48l0.56,0.1l0.25,-0.41l0.59,-0.16l0.68,0.46l0.55,0.17l0.39,-0.62l-0.94,-0.08l-0.56,-0.19l-1.25,0.28l-1.22,0.05l-1.09,-1.64l-0.18,-0.25l0.17,-0.64l-1.42,-1.15l-0.19,-1.03l1.3,-1.76l0.17,-1.19l0.91,-0.53l0.06,-0.97l1.83,-0.33l1.07,-0.81l1.52,0.07l0.46,-0.65l0.53,-0.12l2.07,0.11l2.25,-1.02l1.98,1.3l2.55,-0.35l0.03,-1.86L549.85,335.75z" }),
                        _react2.default.createElement("path", { id: "GT", title: "Guatemala", fill: mapColors[64].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[64].raw, this.IDDict["GT"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M222.64,424.75L221.2,424.25L219.45,424.2L218.17,423.63L216.66,422.45L216.73,421.61L217.05,420.93L216.66,420.39L218.01,418.03L221.6,418.02L221.68,417.04L221.22,416.86L220.91,416.23L219.87,415.56L218.83,414.58L220.1,414.58L220.1,412.93L222.72,412.93L225.31,412.96L225.29,415.27L225.07,418.55L225.9,418.55L226.82,419.08L227.06,418.64L227.88,419.01L226.61,420.12L225.28,420.93L225.08,421.48L225.3,422.04L224.72,422.78L224.06,422.95L224.21,423.29L223.69,423.61L222.73,424.33z" }),
                        _react2.default.createElement("path", { id: "GW", title: "Guinea-Bissau", fill: mapColors[65].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[65].raw, this.IDDict["GW"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M432.83,432.44L431.33,431.25L430.15,431.07L429.51,430.26L429.52,429.83L428.67,429.23L428.49,428.62L429.98,428.15L430.91,428.24L431.66,427.92L436.84,428.04L436.79,429.01L436.48,429.31L436.72,430.25L436.28,430.63L435.66,430.63L434.93,431.11L434.08,431.06z" }),
                        _react2.default.createElement("path", { id: "GY", title: "Guyana", fill: mapColors[66].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[66].raw, this.IDDict["GY"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M307.7,440L309.54,441.03L311.28,442.86L311.35,444.31L312.41,444.38L313.91,445.74L315.02,446.72L314.57,449.24L312.87,449.97L313.02,450.62L312.5,452.07L313.75,454.09L314.64,454.1L315.01,455.67L316.72,458.09L316.04,458.19L314.49,457.96L313.58,458.7L312.31,459.19L311.43,459.31L311.12,459.85L309.74,459.71L308.01,458.41L307.81,457.12L307.09,455.71L307.54,453.33L308.32,452.35L307.67,451.05L306.71,450.63L307.08,449.4L306.42,448.76L304.96,448.88L303.07,446.76L303.83,445.99L303.77,444.69L305.5,444.24L306.19,443.72L305.23,442.68L305.48,441.65z" }),
                        _react2.default.createElement("path", { id: "HN", title: "Honduras", fill: mapColors[67].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[67].raw, this.IDDict["HN"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M230.43,426.9L229.95,426.01L229.09,425.76L229.29,424.61L228.91,424.3L228.33,424.1L227.1,424.44L227,424.05L226.15,423.59L225.55,423.02L224.72,422.78L225.3,422.04L225.08,421.48L225.28,420.93L226.61,420.12L227.88,419.01L228.17,419.13L228.79,418.62L229.59,418.58L229.85,418.81L230.29,418.67L231.59,418.93L232.89,418.85L233.79,418.53L234.12,418.21L235.01,418.36L235.68,418.56L236.41,418.49L236.97,418.24L238.25,418.64L238.7,418.7L239.55,419.24L240.36,419.89L241.38,420.33L242.12,421.13L241.16,421.07L240.77,421.46L239.8,421.84L239.09,421.84L238.47,422.21L237.91,422.08L237.43,421.64L237.14,421.72L236.78,422.41L236.51,422.38L236.46,422.98L235.48,423.77L234.97,424.11L234.68,424.47L233.85,423.89L233.25,424.65L232.66,424.63L232,424.7L232.06,426.11L231.65,426.13L231.3,426.79z" }),
                        _react2.default.createElement("path", { id: "HR", title: "Croatia", fill: mapColors[68].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[68].raw, this.IDDict["HR"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M528.05,318.93L528.73,320.48L529.62,321.62L528.54,323.11L527.27,322.23L525.33,322.29L522.92,321.63L521.61,321.72L521.01,322.54L520,321.63L519.41,323.27L520.79,325.1L521.39,326.31L522.68,327.76L523.75,328.61L524.81,330.22L527.29,331.66L526.98,332.3L524.35,330.9L522.72,329.52L520.16,328.38L517.8,325.53L518.37,325.23L517.09,323.59L517.03,322.25L515.23,321.63L514.37,323.34L513.54,322.01L513.61,320.63L513.71,320.57L515.66,320.71L516.18,320.03L517.13,320.68L518.23,320.76L518.22,319.64L519.19,319.23L519.47,317.61L521.7,316.53L522.59,317.03L524.69,318.76L527,319.53z" }),
                        _react2.default.createElement("path", { id: "HT", title: "Haiti", fill: mapColors[69].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[69].raw, this.IDDict["HT"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M270.04,406.75L271.75,406.88L274.18,407.35L274.43,408.96L274.21,410.09L273.53,410.59L274.25,411.47L274.19,412.27L272.33,411.77L271.01,411.97L269.3,411.76L267.99,412.31L266.48,411.39L266.73,410.44L269.31,410.85L271.43,411.09L272.44,410.43L271.16,409.16L271.18,408.03L269.41,407.57z" }),
                        _react2.default.createElement("path", { id: "HU", title: "Hungary", fill: mapColors[70].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[70].raw, this.IDDict["HU"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M520.68,315.11L521.61,312.46L521.07,311.57L522.65,311.56L522.86,309.85L524.29,310.92L525.32,311.38L527.68,310.87L527.9,310.03L529.02,309.9L530.38,309.25L530.68,309.52L532,309L532.66,308L533.58,307.75L536.58,309.03L537.18,308.6L538.73,309.74L538.93,310.86L537.22,311.73L535.89,314.53L534.2,317.29L531.95,318.05L530.2,317.88L528.05,318.93L527,319.53L524.69,318.76L522.59,317.03L521.7,316.53L521.15,315.16z" }),
                        _react2.default.createElement("path", { id: "ID", title: "Indonesia", fill: mapColors[71].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[71].raw, this.IDDict["ID"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M813.72,492.06l-1.18,0.05l-3.72,-1.98l2.61,-0.56l1.47,0.86l0.98,0.86L813.72,492.06zM824.15,491.78l-2.4,0.62l-0.34,-0.34l0.25,-0.96l1.21,-1.72l2.77,-1.12l0.28,0.56l0.05,0.86L824.15,491.78zM805.83,486.01l1.01,0.75l1.73,-0.23l0.7,1.2l-3.24,0.57l-1.94,0.38l-1.51,-0.02l0.96,-1.62l1.54,-0.02L805.83,486.01zM819.86,486l-0.41,1.56l-4.21,0.8l-3.73,-0.35l-0.01,-1.03l2.23,-0.59l1.76,0.84l1.87,-0.21L819.86,486zM779.82,482.31l5.37,0.28l0.62,-1.16l5.2,1.35l1.02,1.82l4.21,0.51l3.44,1.67l-3.2,1.07l-3.08,-1.13l-2.54,0.08l-2.91,-0.21l-2.62,-0.51l-3.25,-1.07l-2.06,-0.28l-1.17,0.35l-5.11,-1.16l-0.49,-1.21l-2.57,-0.21l1.92,-2.68l3.4,0.17l2.26,1.09l1.16,0.21L779.82,482.31zM853,480.73l-1.44,1.91l-0.27,-2.11l0.5,-1.01l0.59,-0.95l0.64,0.82L853,480.73zM832.04,473.02l-1.05,0.93l-1.94,-0.51l-0.55,-1.2l2.84,-0.13L832.04,473.02zM841.08,472.01l1.02,2.13l-2.37,-1.15l-2.34,-0.23l-1.58,0.18l-1.94,-0.1l0.67,-1.53l3.46,-0.12L841.08,472.01zM851.37,466.59l0.78,4.51l2.9,1.67l2.34,-2.96l3.22,-1.68l2.49,0l2.4,0.97l2.08,1l3.01,0.53l0.05,9.1l0.05,9.16l-2.5,-2.31l-2.85,-0.57l-0.69,0.8l-3.55,0.09l1.19,-2.29l1.77,-0.78l-0.73,-3.05l-1.35,-2.35l-5.44,-2.37l-2.31,-0.23l-4.21,-2.58l-0.83,1.36l-1.08,0.25l-0.64,-1.02l-0.01,-1.21l-2.14,-1.37l3.02,-1l2,0.05l-0.24,-0.74l-4.1,-0.01l-1.11,-1.66l-2.5,-0.51l-1.19,-1.38l3.78,-0.67l1.44,-0.91l4.5,1.14L851.37,466.59zM826.41,459.43l-2.25,2.76l-2.11,0.54l-2.7,-0.54l-4.67,0.14l-2.45,0.4l-0.4,2.11l2.51,2.48l1.51,-1.26l5.23,-0.95l-0.23,1.28l-1.22,-0.4l-1.22,1.63l-2.47,1.08l2.65,3.57l-0.51,0.96l2.52,3.22l-0.02,1.84l-1.5,0.82l-1.1,-0.98l1.36,-2.29l-2.75,1.08l-0.7,-0.77l0.36,-1.08l-2.02,-1.64l0.21,-2.72l-1.87,0.85l0.24,3.25l0.11,4l-1.78,0.41l-1.2,-0.82l0.8,-2.57l-0.43,-2.69l-1.18,-0.02l-0.87,-1.91l1.16,-1.83l0.4,-2.21l1.41,-4.2l0.59,-1.15l2.38,-2.07l2.19,0.82l3.54,0.39l3.22,-0.12l2.77,-2.02L826.41,459.43zM836.08,460.23l-0.15,2.43l-1.45,-0.27l-0.43,1.69l1.16,1.47l-0.79,0.33l-1.13,-1.76l-0.83,-3.56l0.56,-2.23l0.93,-1.01l0.2,1.52l1.66,0.24L836.08,460.23zM805.76,458.29l3.14,2.58l-3.32,0.33l-0.94,1.9l0.12,2.52l-2.7,1.91L802,470.3l-1.08,4.27l-0.41,-0.99l-3.19,1.26l-1.11,-1.71l-2,-0.16l-1.4,-0.89l-3.33,1l-1.02,-1.35l-1.84,0.15l-2.31,-0.32l-0.43,-3.74l-1.4,-0.77l-1.35,-2.38l-0.39,-2.44l0.33,-2.58l1.67,-1.85l0.47,1.86l1.92,1.57l1.81,-0.57l1.79,0.2l1.63,-1.41l1.34,-0.24l2.65,0.78l2.29,-0.59l1.44,-3.88l1.08,-0.97l0.97,-3.17l3.22,0l2.43,0.47l-1.59,2.52l2.06,2.64L805.76,458.29zM771.95,479.71l-3.1,0.06l-2.36,-2.34l-3.6,-2.28l-1.2,-1.69l-2.12,-2.27l-1.39,-2.09l-2.13,-3.9l-2.46,-2.32l-0.82,-2.39l-1.03,-2.17l-2.53,-1.75l-1.47,-2.39l-2.11,-1.56l-2.92,-3.08l-0.25,-1.42l1.81,0.11l4.34,0.54l2.48,2.73l2.17,1.89l1.55,1.16l2.66,3l2.85,0.04l2.36,1.91l1.62,2.33l2.13,1.27l-1.12,2.27l1.61,0.97l1.01,0.07l0.48,1.94l0.98,1.56l2.06,0.25l1.36,1.76l-0.7,3.47L771.95,479.71z" }),
                        _react2.default.createElement("path", { id: "IE", title: "Ireland", fill: mapColors[72].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[72].raw, this.IDDict["IE"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M457.88,284.29L458.34,287.65L456.22,291.77L451.25,294.45L447.28,293.77L449.55,288.99L448.09,284.22L451.9,280.47L454.02,278.2L454.6,280.8L454.02,283.37L455.76,283.31z" }),
                        _react2.default.createElement("path", { id: "IL", title: "Israel", fill: mapColors[73].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[73].raw, this.IDDict["IL"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M575.41,366.82L574.92,367.87L573.9,367.41L573.32,369.61L574.02,369.97L573.31,370.43L573.18,371.29L574.5,370.84L574.57,372.11L573.17,377.28L571.33,371.73L572.14,370.65L571.95,370.46L572.69,368.93L573.26,366.43L573.66,365.59L573.74,365.56L574.68,365.56L574.94,364.98L575.69,364.93L575.73,366.3L575.35,366.8z" }),
                        _react2.default.createElement("path", { id: "IN", title: "India", fill: mapColors[74].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[74].raw, this.IDDict["IN"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M693.5,357.44L696.51,361.43L696.23,364.17L697.34,365.88L697.25,367.57L695.24,367.13L696.03,370.76L698.78,372.82L702.68,375.09L700.9,376.55L699.81,379.54L702.53,380.74L705.17,382.29L708.83,384.06L712.67,384.47L714.29,386.06L716.45,386.35L719.83,387.08L722.16,387.03L722.48,385.79L722.11,383.8L722.33,382.45L724.04,381.78L724.28,384.26L724.33,384.89L726.88,386.08L728.65,385.59L731.01,385.8L733.3,385.71L733.5,383.78L732.36,382.78L734.62,382.38L737.17,380.03L740.4,378L742.75,378.78L744.75,377.44L746.07,379.42L745.12,380.76L748.14,381.23L748.36,382.43L747.37,383.01L747.6,384.94L745.6,384.37L741.97,386.53L742.05,388.31L740.51,390.91L740.36,392.41L739.11,394.93L736.92,394.23L736.81,397.38L736.18,398.41L736.48,399.69L735.09,400.41L733.62,395.61L732.84,395.62L732.38,397.56L730.85,395.98L731.71,394.25L732.97,394.07L734.26,391.48L732.65,390.95L730.04,391L727.38,390.58L727.13,388.43L725.79,388.27L723.57,386.93L722.58,389.04L724.6,390.67L722.85,391.82L722.23,392.94L723.95,393.76L723.48,395.6L724.45,397.88L724.89,400.36L724.48,401.46L722.58,401.42L719.12,402.04L719.28,404.29L717.78,406.05L713.75,408.05L710.61,411.51L708.5,413.36L705.71,415.27L705.71,416.61L704.31,417.33L701.78,418.36L700.47,418.52L699.63,420.72L700.21,424.47L700.36,426.84L699.18,429.55L699.16,434.38L697.71,434.52L696.44,436.67L697.29,437.6L694.73,438.4L693.79,440.32L692.66,441.13L690.01,438.5L688.71,434.54L687.63,431.68L686.65,430.34L685.16,427.6L684.47,424.02L683.98,422.22L681.43,418.25L680.27,412.61L679.43,408.84L679.44,405.26L678.9,402.46L674.82,404.25L672.84,403.89L669.18,400.26L670.53,399.17L669.7,397.99L666.41,395.41L668.28,393.37L674.45,393.38L673.89,390.74L672.32,389.18L672,386.79L670.16,385.39L673.25,382.09L676.51,382.33L679.44,379.01L681.2,375.75L683.92,372.51L683.88,370.18L686.27,368.27L684,366.64L683.03,364.39L682.04,361.44L683.41,359.98L687.67,360.81L690.79,360.3z" }),
                        _react2.default.createElement("path", { id: "IQ", title: "Iraq", fill: mapColors[75].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[75].raw, this.IDDict["IQ"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M602.61,355.77L604.44,356.81L604.66,358.81L603.24,359.98L602.59,362.62L604.54,365.8L607.97,367.62L609.42,370.12L608.96,372.49L609.85,372.49L609.88,374.22L611.43,375.91L609.77,375.76L607.88,375.49L605.82,378.57L600.61,378.31L592.71,371.82L588.53,369.53L585.15,368.64L584.02,364.6L590.23,361.1L591.29,356.98L591.02,354.46L592.56,353.6L594,351.42L595.2,350.87L598.46,351.33L599.45,352.22L600.79,351.63z" }),
                        _react2.default.createElement("path", { id: "IR", title: "Iran", fill: mapColors[76].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[76].raw, this.IDDict["IR"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M626.44,351.53L628.91,350.85L630.9,348.83L632.77,348.93L634,348.27L636,348.6L639.1,350.39L641.34,350.78L644.54,353.87L646.63,353.99L646.88,356.9L645.74,361.15L644.97,363.6L646.19,364.09L644.99,365.92L645.91,368.56L646.13,370.65L648.25,371.2L648.48,373.3L645.94,376.23L647.32,377.91L648.45,379.84L651.13,381.24L651.21,384.01L652.55,384.52L652.78,385.96L648.74,387.57L647.68,391.17L642.41,390.24L639.35,389.53L636.19,389.12L634.99,385.31L633.65,384.75L631.49,385.31L628.67,386.82L625.24,385.79L622.41,383.38L619.71,382.48L617.84,379.47L615.77,375.2L614.26,375.72L612.48,374.65L611.43,375.91L609.88,374.22L609.85,372.49L608.96,372.49L609.42,370.12L607.97,367.62L604.54,365.8L602.59,362.62L603.24,359.98L604.66,358.81L604.44,356.81L602.61,355.77L600.79,351.63L599.26,348.8L599.8,347.71L598.93,343.59L600.85,342.56L601.29,343.93L602.71,345.59L604.63,346.06L605.65,345.96L608.96,343.3L610.01,343.03L610.83,344.1L609.87,345.88L611.62,347.74L612.31,347.57L613.2,350.18L615.86,350.91L617.81,352.67L621.79,353.27L626.17,352.35z" }),
                        _react2.default.createElement("path", { id: "IS", title: "Iceland", fill: mapColors[77].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[77].raw, this.IDDict["IS"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M434.57,212.43L433.93,216.91L437.09,221.51L433.45,226.52L425.36,230.9L422.94,232.05L419.25,231.12L411.43,229.11L414.19,226.27L408.09,223.07L413.05,221.79L412.93,219.82L407.05,218.25L408.94,213.78L413.19,212.75L417.56,217.43L421.82,213.68L425.35,215.64L429.92,211.93z" }),
                        _react2.default.createElement("path", { id: "IT", title: "Italy", fill: mapColors[78].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[78].raw, this.IDDict["IT"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M518.77,347.88l-1.01,2.78l0.42,1.09l-0.59,1.79l-2.14,-1.31l-1.43,-0.38l-3.91,-1.79l0.39,-1.82l3.28,0.32l2.86,-0.39L518.77,347.88zM501.08,337.06l1.68,2.62l-0.39,4.81l-1.27,-0.23l-1.14,1.2l-1.06,-0.95l-0.11,-4.38l-0.64,-2.1l1.54,0.19L501.08,337.06zM509.95,315.46l4.01,1.05l-0.3,1.99l0.67,1.71l-2.23,-0.58l-2.28,1.42l0.16,1.97l-0.34,1.12l0.92,1.99l2.63,1.95l1.41,3.17l3.12,3.05l2.2,-0.02l0.68,0.83l-0.79,0.74l2.51,1.35l2.06,1.12l2.4,1.92l0.29,0.68l-0.52,1.31l-1.56,-1.7l-2.44,-0.6l-1.18,2.36l2.03,1.34l-0.33,1.88l-1.17,0.21l-1.5,3.06l-1.17,0.27l0.01,-1.08l0.57,-1.91l0.61,-0.77l-1.09,-2.09l-0.86,-1.83l-1.16,-0.46l-0.83,-1.58l-1.8,-0.67l-1.21,-1.49l-2.07,-0.24l-2.19,-1.68l-2.56,-2.45l-1.91,-2.19l-0.87,-3.8l-1.4,-0.45l-2.28,-1.29l-1.29,0.53l-1.62,1.8l-1.17,0.28l0.32,-1.68l-1.52,-0.49l-0.72,-3.04l0.97,-1.21l-0.83,-1.5l0.12,-1.13l1.21,0.86l1.35,-0.19l1.57,-1.36l0.49,0.64l1.34,-0.13l0.61,-1.63l2.07,0.51l1.24,-0.68l0.22,-1.67l1.7,0.58l0.33,-0.78l2.77,-0.71L509.95,315.46z" }),
                        _react2.default.createElement("path", { id: "JM", title: "Jamaica", fill: mapColors[79].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[79].raw, this.IDDict["JM"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M257.76,410.96L259.65,411.22L261.14,411.93L261.6,412.73L259.63,412.78L258.78,413.27L257.21,412.8L255.61,411.73L255.94,411.06L257.12,410.86z" }),
                        _react2.default.createElement("path", { id: "JO", title: "Jordan", fill: mapColors[80].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[80].raw, this.IDDict["JO"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M574.92,367.87L575.41,366.82L578.53,368.14L584.02,364.6L585.15,368.64L584.62,369.13L579,370.78L581.8,374.04L580.87,374.58L580.41,375.67L578.27,376.11L577.6,377.27L576.38,378.25L573.26,377.74L573.17,377.28L574.57,372.11L574.5,370.84L574.92,369.88z" }),
                        _react2.default.createElement("path", { id: "JP", title: "Japan", fill: mapColors[81].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[81].raw, this.IDDict["JP"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M852.76,362.01l0.36,1.15l-1.58,2.03l-1.15,-1.07l-1.44,0.78l-0.74,1.95l-1.83,-0.95l0.02,-1.58l1.55,-2l1.59,0.39l1.15,-1.42L852.76,362.01zM870.53,351.73l-1.06,2.78l0.49,1.73l-1.46,2.42l-3.58,1.6l-4.93,0.21l-4,3.84l-1.88,-1.29L854,360.5l-4.88,0.75l-3.32,1.59l-3.28,0.06l2.84,2.46l-1.87,5.61l-1.81,1.37l-1.36,-1.27l0.69,-2.96l-1.77,-0.96l-1.14,-2.28l2.65,-1.03l1.47,-2.11l2.82,-1.75l2.06,-2.33l5.58,-1.02l3,0.7l2.93,-6.17l1.87,1.67l4.11,-3.51l1.59,-1.38l1.76,-4.38l-0.48,-4.1l1.18,-2.33l2.98,-0.68l1.53,5.11l-0.08,2.94l-2.59,3.6L870.53,351.73zM878.76,325.8l1.97,0.83l1.98,-1.65l0.62,4.35l-4.16,1.05l-2.46,3.76l-4.41,-2.58l-1.53,4.12l-3.12,0.06l-0.39,-3.74l1.39,-2.94l3,-0.21l0.82,-5.38l0.83,-3.09l3.29,4.12L878.76,325.8z" }),
                        _react2.default.createElement("path", { id: "KE", title: "Kenya", fill: mapColors[82].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[82].raw, this.IDDict["KE"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M590.19,465.78L591.85,468.07L589.89,469.19L589.2,470.35L588.14,470.55L587.75,472.52L586.85,473.64L586.3,475.5L585.17,476.42L581.15,473.63L580.95,472.01L570.79,466.34L570.31,466.03L570.29,463.08L571.09,461.95L572.47,460.11L573.49,458.08L572.26,454.88L571.93,453.48L570.6,451.54L572.32,449.87L574.22,448.03L575.68,448.5L575.68,450.07L576.64,450.98L578.59,450.98L582.14,453.36L583.02,453.38L583.68,453.31L584.3,453.63L586.17,453.85L587,452.69L589.56,451.52L590.69,452.46L592.61,452.46L590.16,455.63z" }),
                        _react2.default.createElement("path", { id: "KG", title: "Kyrgyzstan", fill: mapColors[83].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[83].raw, this.IDDict["KG"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M674.22,333.11L674.85,331.45L676.69,330.91L681.31,332.22L681.74,329.98L683.33,329.18L687.33,330.79L688.35,330.37L693,330.47L697.16,330.87L698.56,332.24L700.29,332.79L699.9,333.65L695.48,335.68L694.48,337.16L690.88,337.6L689.82,339.95L686.85,339.46L684.92,340.18L682.24,341.9L682.63,342.75L681.83,343.58L676.53,344.13L673.06,342.96L670.02,343.24L670.29,341.14L673.34,341.75L674.37,340.62L676.5,340.98L680.09,338.34L676.77,336.38L674.77,337.31L672.7,335.91L675.05,333.48z" }),
                        _react2.default.createElement("path", { id: "KH", title: "Cambodia", fill: mapColors[84].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[84].raw, this.IDDict["KH"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M765.44,433.6L764.3,432.12L762.89,429.18L762.22,425.73L764.02,423.35L767.64,422.8L770.27,423.21L772.58,424.34L773.85,422.35L776.34,423.41L776.99,425.33L776.64,428.75L771.93,430.94L773.16,432.67L770.22,432.87L767.79,434.01z" }),
                        _react2.default.createElement("path", { id: "KP", title: "North Korea", fill: mapColors[85].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[85].raw, this.IDDict["KP"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M841.55,332.62L841.94,333.29L840.88,333.06L839.66,334.33L838.82,335.61L838.93,338.28L837.48,339.09L836.98,339.74L835.92,340.82L834.05,341.42L832.84,342.4L832.75,343.97L832.42,344.37L833.54,344.95L835.13,346.53L834.72,347.39L833.53,347.62L831.55,347.79L830.46,349.39L829.2,349.27L829.03,349.59L827.67,348.92L827.33,349.58L826.51,349.87L826.41,349.21L825.68,348.89L824.93,348.32L825.7,346.75L826.36,346.33L826.11,345.68L826.82,343.74L826.63,343.15L825,342.75L823.68,341.78L825.96,339.43L829.05,337.45L830.98,334.8L832.31,335.97L834.73,336.11L834.29,334.14L838.62,332.51L839.74,330.38z" }),
                        _react2.default.createElement("path", { id: "KR", title: "South Korea", fill: mapColors[86].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[86].raw, this.IDDict["KR"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M835.13,346.53L837.55,350.71L838.24,352.98L838.26,356.96L837.21,358.84L834.67,359.5L832.43,360.91L829.9,361.2L829.59,359.35L830.11,356.78L828.87,353.18L830.95,352.59L829.03,349.59L829.2,349.27L830.46,349.39L831.55,347.79L833.53,347.62L834.72,347.39z" }),
                        _react2.default.createElement("path", { id: "KW", title: "Kuwait", fill: mapColors[87].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[87].raw, this.IDDict["KW"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M609.77,375.76L610.35,377.17L610.1,377.9L611,380.31L609.02,380.39L608.32,378.88L605.82,378.57L607.88,375.49z" }),
                        _react2.default.createElement("path", { id: "KZ", title: "Kazakhstan", fill: mapColors[88].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[88].raw, this.IDDict["KZ"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M674.22,333.11L672.61,333.81L668.92,336.42L667.69,339.07L666.64,339.09L665.88,337.34L662.31,337.22L661.74,334.16L660.37,334.13L660.58,330.33L657.23,327.53L652.42,327.83L649.13,328.39L646.45,324.89L644.16,323.41L639.81,320.57L639.29,320.22L632.07,322.57L632.18,336.7L630.74,336.88L628.78,333.95L626.88,332.89L623.7,333.68L622.46,334.93L622.3,334.01L622.99,332.44L622.46,331.12L619.21,329.82L617.94,326.35L616.4,325.37L616.3,324.09L619.03,324.46L619.14,321.58L621.52,320.94L623.97,321.53L624.48,317.62L623.98,315.11L621.17,315.31L618.79,314.31L615.54,316.1L612.93,316.96L611.5,316.3L611.79,314.2L610,311.44L607.92,311.55L605.54,308.72L607.16,305.5L606.34,304.63L608.57,299.86L611.46,302.39L611.81,299.2L617.59,294.35L621.97,294.23L628.16,297.33L631.47,299.12L634.45,297.25L638.89,297.17L642.48,299.46L643.3,298.15L647.23,298.34L647.94,296.23L643.39,293.14L646.08,290.91L645.56,289.66L648.25,288.45L646.23,285.25L647.51,283.63L658,281.97L659.37,280.78L666.39,278.99L668.91,276.95L673.95,278.01L674.83,283.02L677.76,281.86L681.36,283.49L681.13,286.07L683.82,285.8L690.84,281.31L689.82,282.81L693.4,286.47L699.66,298.05L701.16,295.72L705.02,298.28L709.05,297.14L710.59,297.94L711.94,300.49L713.9,301.33L715.1,303.18L718.71,302.6L720.2,305.23L718.06,308.06L715.73,308.46L715.6,312.64L714.04,314.5L708.48,313.15L706.46,320.41L705.02,321.3L699.47,322.88L701.99,329.63L700.07,330.63L700.29,332.79L698.56,332.24L697.16,330.87L693,330.47L688.35,330.37L687.33,330.79L683.33,329.18L681.74,329.98L681.31,332.22L676.69,330.91L674.85,331.45z" }),
                        _react2.default.createElement("path", { id: "LA", title: "Lao People's Democratic Republic", fill: mapColors[89].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[89].raw, this.IDDict["LA"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M770.27,423.21L771.18,421.91L771.31,419.47L769.04,416.94L768.86,414.07L766.73,411.69L764.61,411.49L764.05,412.51L762.4,412.59L761.56,412.08L758.61,413.82L758.54,411.2L759.23,408.09L757.34,407.96L757.18,406.18L755.96,405.26L756.56,404.16L758.95,402.22L759.2,402.92L760.69,403L760.27,399.57L761.72,399.13L763.36,401.5L764.62,404.22L768.07,404.25L769.16,406.84L767.37,407.61L766.56,408.68L769.92,410.44L772.25,413.9L774.02,416.47L776.14,418.49L776.85,420.53L776.34,423.41L773.85,422.35L772.58,424.34z" }),
                        _react2.default.createElement("path", { id: "LB", title: "Lebanon", fill: mapColors[90].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[90].raw, this.IDDict["LB"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M575.69,364.93L574.94,364.98L574.68,365.56L573.74,365.56L574.74,362.83L576.13,360.45L576.19,360.33L577.45,360.51L577.91,361.83L576.38,363.1z" }),
                        _react2.default.createElement("path", { id: "LK", title: "Sri Lanka", fill: mapColors[91].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[91].raw, this.IDDict["LK"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M704.57,442.37L704.15,445.29L702.98,446.09L700.54,446.73L699.2,444.5L698.71,440.47L699.98,435.89L701.91,437.46L703.22,439.44z" }),
                        _react2.default.createElement("path", { id: "LR", title: "Liberia", fill: mapColors[92].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[92].raw, this.IDDict["LR"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M453.63,451.22L452.89,451.24L450,449.91L447.46,447.78L445.07,446.25L443.18,444.44L443.85,443.54L444,442.73L445.26,441.2L446.57,439.89L447.17,439.82L447.9,439.51L449.07,441.23L448.89,442.36L449.43,442.96L450.23,442.97L450.8,441.84L451.59,441.91L451.46,442.73L451.74,444.09L451.13,445.33L451.95,446.1L452.84,446.29L454.03,447.46L454.11,448.57L453.84,448.92z" }),
                        _react2.default.createElement("path", { id: "LS", title: "Lesotho", fill: mapColors[93].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[93].raw, this.IDDict["LS"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M556.5,547.75L557.48,548.71L556.62,550.27L556.14,551.32L554.58,551.82L554.06,552.86L553.06,553.18L550.96,550.69L552.45,548.66L553.97,547.41L555.28,546.77z" }),
                        _react2.default.createElement("path", { id: "LT", title: "Lithuania", fill: mapColors[94].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[94].raw, this.IDDict["LT"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M538.99,282.09L538.76,280.87L539.06,279.54L537.82,278.77L534.89,277.91L534.29,273.75L537.5,272.2L542.2,272.53L544.96,272.03L545.35,273.08L546.84,273.4L549.54,275.82L549.8,278.02L547.5,279.59L546.85,282.31L543.81,284.11L541.1,284.07L540.43,282.61z" }),
                        _react2.default.createElement("path", { id: "LU", title: "Luxembourg", fill: mapColors[95].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[95].raw, this.IDDict["LU"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M492.2,301.29L492.76,302.27L492.6,304.16L491.79,304.26L491.16,303.88L491.47,301.45z" }),
                        _react2.default.createElement("path", { id: "LV", title: "Latvia", fill: mapColors[96].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[96].raw, this.IDDict["LV"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M534.29,273.75L534.39,269.94L535.77,266.7L538.41,264.92L540.63,268.8L542.88,268.7L543.42,264.71L545.81,263.78L547.04,264.43L549.45,266.37L551.77,266.38L553.12,267.57L553.35,270.06L554.26,273.05L551.24,274.98L549.54,275.82L546.84,273.4L545.35,273.08L544.96,272.03L542.2,272.53L537.5,272.2z" }),
                        _react2.default.createElement("path", { id: "LY", title: "Libya", fill: mapColors[97].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[97].raw, this.IDDict["LY"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M516.89,397.93L514.91,399.05L513.33,397.39L508.9,396.08L507.67,394.17L505.45,392.75L504.14,393.31L503.15,391.6L503.04,390.28L501.38,388.02L502.5,386.73L502.25,384.76L502.61,383.04L502.41,381.6L502.9,379.01L502.75,377.53L501.84,374.69L503.21,373.94L503.45,372.56L503.15,371.21L505.08,369.95L505.94,368.9L507.31,367.95L507.47,365.4L510.76,366.55L511.94,366.26L514.28,366.82L518,368.29L519.31,371.21L521.83,371.85L525.78,373.21L528.77,374.82L530.14,373.98L531.48,372.49L530.83,369.98L531.71,368.38L533.73,366.83L535.66,366.38L539.45,367.06L540.41,368.54L541.45,368.55L542.34,369.11L545.13,369.5L545.81,370.58L544.8,372.15L545.23,373.54L544.51,375.54L545.35,378.12L545.35,389.3L545.35,400.53L545.35,406.49L542.13,406.5L542.09,407.74L530.91,402.04L519.72,396.27z" }),
                        _react2.default.createElement("path", { id: "MA", title: "Morocco", fill: mapColors[98].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[98].raw, this.IDDict["MA"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M450.96,383.14L450.93,379.39L455.46,377.03L458.26,376.54L460.55,375.68L461.63,374.06L464.91,372.77L465.03,370.36L466.65,370.07L467.92,368.86L471.59,368.3L472.1,367.02L471.36,366.31L470.39,362.78L470.23,360.73L469.17,358.55L467.95,358.51L465.05,357.76L462.38,358L460.69,356.54L458.63,356.52L457.74,358.63L455.87,362.14L453.79,363.53L450.98,365.06L449.18,367.3L448.8,369.04L447.73,371.86L448.43,375.89L446.09,378.57L444.69,379.42L442.48,381.59L439.87,381.94L438.57,383.06L442.19,383.07L450.94,383.1L450.94,383.1L450.94,383.1L442.19,383.07L438.57,383.06z" }),
                        _react2.default.createElement("path", { id: "MD", title: "Moldova", fill: mapColors[99].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[99].raw, this.IDDict["MD"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M549.89,309.45L550.56,308.83L552.42,308.41L554.49,309.72L555.64,309.88L556.91,311L556.71,312.41L557.73,313.08L558.13,314.8L559.11,315.84L558.92,316.44L559.44,316.86L558.7,317.15L557.04,317.04L556.77,316.47L556.18,316.8L556.38,317.52L555.61,318.81L555.12,320.18L554.42,320.62L553.91,318.79L554.21,317.07L554.12,315.28L552.5,312.84L551.61,311.09L550.74,309.85z" }),
                        _react2.default.createElement("path", { id: "ME", title: "Montenegro", fill: mapColors[100].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[100].raw, this.IDDict["ME"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M530.77,332.23L530.6,331.51L529.38,333.38L529.57,334.57L528.98,334.28L528.2,333.05L526.98,332.3L527.29,331.66L527.7,329.56L528.61,328.67L529.14,328.31L529.88,328.97L530.29,329.51L531.21,329.92L532.28,330.71L532.05,331.04L531.53,331.89z" }),
                        _react2.default.createElement("path", { id: "MG", title: "Madagascar", fill: mapColors[101].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[101].raw, this.IDDict["MG"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M614.17,498.4L614.91,499.61L615.6,501.5L616.06,504.96L616.78,506.31L616.5,507.69L616.01,508.55L615.05,506.85L614.53,507.71L615.06,509.85L614.81,511.09L614.04,511.76L613.86,514.24L612.76,517.66L611.38,521.75L609.64,527.42L608.57,531.63L607.3,535.18L605.02,535.91L602.57,537.22L600.96,536.43L598.73,535.33L597.96,533.71L597.77,531L596.79,528.58L596.53,526.41L597.03,524.25L598.32,523.73L598.33,522.74L599.67,520.48L599.92,518.6L599.27,517.2L598.74,515.35L598.52,512.65L599.5,511.02L599.87,509.17L601.27,509.07L602.84,508.47L603.87,507.95L605.11,507.91L606.7,506.26L609.01,504.48L609.85,503.04L609.47,501.81L610.66,502.16L612.21,500.17L612.26,498.45L613.19,497.17z" }),
                        _react2.default.createElement("path", { id: "MK", title: "Macedonia", fill: mapColors[102].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[102].raw, this.IDDict["MK"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M532.98,334.66L533.34,334.69L533.47,333.92L535.12,333.33L535.75,333.19L536.71,332.97L538,332.91L539.41,334.12L539.61,336.59L539.07,336.71L538.61,337.36L537.09,337.29L536.02,338.1L534.19,338.42L533.03,337.52L532.63,335.93z" }),
                        _react2.default.createElement("path", { id: "ML", title: "Mali", fill: mapColors[103].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[103].raw, this.IDDict["ML"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M441.13,422.22L442.07,421.7L442.54,420L443.43,419.93L445.39,420.73L446.97,420.16L448.05,420.35L448.48,419.71L459.73,419.67L460.35,417.64L459.86,417.28L458.51,404.6L457.16,391.54L461.45,391.49L470.91,398.14L480.37,404.69L481.03,406.08L482.78,406.93L484.08,407.41L484.11,409.29L487.22,409L487.23,415.75L485.69,417.69L485.45,419.48L482.96,419.93L479.14,420.18L478.1,421.21L476.3,421.32L474.51,421.33L473.81,420.78L472.26,421.19L469.64,422.39L469.11,423.29L466.93,424.57L466.55,425.31L465.38,425.89L464.02,425.51L463.25,426.21L462.84,428.17L460.61,430.53L460.68,431.49L459.91,432.7L460.1,434.34L458.94,434.76L458.29,435.12L457.85,433.91L457.04,434.23L456.56,434.17L456.04,435L453.88,434.97L453.1,434.55L452.74,434.81L451.88,433.99L452.03,433.15L451.68,432.81L451.08,433.09L451.19,432.17L451.77,431.44L450.62,430.25L450.28,429.46L449.66,428.84L449.1,428.76L448.43,429.16L447.52,429.54L446.75,430.16L445.55,429.93L444.77,429.21L444.31,429.11L443.58,429.49L443.13,429.5L442.97,428.45L443.1,427.56L442.86,426.46L441.81,425.65L441.26,424.01z" }),
                        _react2.default.createElement("path", { id: "MM", title: "Myanmar", fill: mapColors[104].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[104].raw, this.IDDict["MM"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M754.36,405.95L752.72,407.23L750.74,407.37L749.46,410.56L748.28,411.09L749.64,413.66L751.42,415.79L752.56,417.71L751.54,420.23L750.57,420.76L751.24,422.21L753.11,424.49L753.43,426.09L753.38,427.42L754.48,430.02L752.94,432.67L751.58,435.58L751.31,433.48L752.17,431.3L751.23,429.62L751.46,426.51L750.32,425.03L749.41,421.59L748.9,417.93L747.69,415.53L745.84,416.99L742.65,419.05L741.08,418.79L739.34,418.12L740.31,414.51L739.73,411.77L737.53,408.38L737.87,407.31L736.23,406.93L734.24,404.51L734.06,402.1L735.04,402.56L735.09,400.41L736.48,399.69L736.18,398.41L736.81,397.38L736.92,394.23L739.11,394.93L740.36,392.41L740.51,390.91L742.05,388.31L741.97,386.53L745.6,384.37L747.6,384.94L747.37,383.01L748.36,382.43L748.14,381.23L749.78,380.99L750.72,382.85L751.94,383.6L752.03,386L751.91,388.57L749.26,391.15L748.92,394.78L751.88,394.28L752.55,397.08L754.33,397.67L753.51,400.17L755.59,401.3L756.81,401.85L758.86,400.98L758.95,402.22L756.56,404.16L755.96,405.26z" }),
                        _react2.default.createElement("path", { id: "MN", title: "Mongolia", fill: mapColors[105].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[105].raw, this.IDDict["MN"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M721.29,304.88L724.25,304.14L729.6,300.4L733.87,298.33L736.3,299.68L739.23,299.74L741.1,301.79L743.9,301.94L747.96,303.03L750.68,300L749.54,297.4L752.45,292.74L755.59,294.61L758.13,295.14L761.43,296.29L761.96,299.61L765.95,301.45L768.6,300.64L772.14,300.07L774.95,300.65L777.7,302.74L779.4,304.94L782,304.9L785.53,305.59L788.11,304.53L791.8,303.82L795.91,300.76L797.59,301.23L799.06,302.69L802.4,302.33L801.04,305.58L799.06,309.8L799.78,311.51L801.37,310.98L804.13,311.63L806.29,310.09L808.54,311.42L811.08,314.31L810.77,315.76L808.56,315.3L804.49,315.84L802.51,317L800.46,319.66L796.18,321.21L793.39,323.31L790.51,322.51L788.93,322.15L787.46,324.69L788.35,326.19L788.81,327.47L786.84,328.77L784.83,330.82L781.56,332.15L777.35,332.3L772.82,333.61L769.56,335.62L768.32,334.46L764.93,334.46L760.78,332.17L758.01,331.6L754.28,332.13L748.49,331.28L745.4,331.37L743.76,329.1L742.48,325.53L740.75,325.1L737.36,322.65L733.58,322.1L730.25,321.42L729.24,319.69L730.32,314.96L728.39,311.65L724.39,310.08L722.03,307.85z" }),
                        _react2.default.createElement("path", { id: "MR", title: "Mauritania", fill: mapColors[106].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[106].raw, this.IDDict["MR"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M441.13,422.22L439.28,420.24L437.58,418.11L435.72,417.34L434.38,416.49L432.81,416.52L431.45,417.15L430.05,416.9L429.09,417.83L428.85,416.27L429.63,414.83L429.98,412.08L429.67,409.17L429.33,407.7L429.61,406.23L428.89,404.81L427.41,403.53L428.02,402.53L439,402.55L438.47,398.2L439.16,396.65L441.78,396.38L441.69,388.52L450.9,388.69L450.9,383.96L461.45,391.49L457.16,391.54L458.51,404.6L459.86,417.28L460.35,417.64L459.73,419.67L448.48,419.71L448.05,420.35L446.97,420.16L445.39,420.73L443.43,419.93L442.54,420L442.07,421.7z" }),
                        _react2.default.createElement("path", { id: "MW", title: "Malawi", fill: mapColors[107].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[107].raw, this.IDDict["MW"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M572.15,495.69L571.37,497.85L572.15,501.57L573.13,501.53L574.14,502.45L575.31,504.53L575.55,508.25L574.34,508.86L573.48,510.87L571.65,509.08L571.45,507.04L572.04,505.69L571.87,504.54L570.77,503.81L569.99,504.07L568.38,502.69L566.91,501.95L567.76,499.29L568.64,498.3L568.1,495.94L568.66,493.64L569.14,492.87L568.43,490.47L567.11,489.21L569.85,489.73L570.42,490.51L571.37,491.83z" }),
                        _react2.default.createElement("path", { id: "MX", title: "Mexico", fill: mapColors[108].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[108].raw, this.IDDict["MX"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M202.89,388.72L201.8,391.43L201.31,393.64L201.1,397.72L200.83,399.19L201.32,400.83L202.19,402.3L202.75,404.61L204.61,406.82L205.26,408.51L206.36,409.96L209.34,410.75L210.5,411.97L212.96,411.15L215.09,410.86L217.19,410.33L218.96,409.82L220.74,408.62L221.41,406.89L221.64,404.4L222.13,403.53L224.02,402.74L226.99,402.05L229.47,402.15L231.17,401.9L231.84,402.53L231.75,403.97L230.24,405.74L229.58,407.55L230.09,408.06L229.67,409.34L228.97,411.63L228.26,410.88L227.67,410.93L227.14,410.97L226.14,412.74L225.63,412.39L225.29,412.53L225.31,412.96L222.72,412.93L220.1,412.93L220.1,414.58L218.83,414.58L219.87,415.56L220.91,416.23L221.22,416.86L221.68,417.04L221.6,418.02L218.01,418.03L216.66,420.39L217.05,420.93L216.73,421.61L216.66,422.45L213.49,419.34L212.04,418.4L209.75,417.64L208.19,417.85L205.93,418.94L204.52,419.23L202.54,418.47L200.44,417.91L197.82,416.58L195.72,416.17L192.54,414.82L190.2,413.42L189.49,412.64L187.92,412.47L185.05,411.54L183.88,410.2L180.87,408.53L179.47,406.66L178.8,405.21L179.73,404.92L179.44,404.07L180.09,403.3L180.1,402.26L179.16,400.92L178.9,399.72L177.96,398.2L175.49,395.18L172.67,392.79L171.31,390.88L168.9,389.62L168.39,388.86L168.82,386.94L167.39,386.21L165.73,384.69L165.03,382.5L163.52,382.24L161.9,380.58L160.58,379.03L160.46,378.03L158.95,375.61L157.96,373.13L158,371.88L155.97,370.59L155.04,370.73L153.44,369.83L152.99,371.16L153.45,372.72L153.72,375.15L154.69,376.48L156.77,378.69L157.23,379.44L157.66,379.66L158.02,380.76L158.52,380.71L159.09,382.75L159.94,383.55L160.53,384.66L162.3,386.26L163.23,389.15L164.06,390.5L164.84,391.94L164.99,393.56L166.34,393.66L167.47,395.05L168.49,396.41L168.42,396.95L167.24,398.06L166.74,398.05L166,396.2L164.17,394.47L162.15,392.99L160.71,392.21L160.8,389.96L160.38,388.28L159.04,387.32L157.11,385.93L156.74,386.33L156.04,385.51L154.31,384.76L152.66,382.93L152.86,382.69L154.01,382.87L155.05,381.69L155.16,380.26L153,377.99L151.36,377.1L150.32,375.09L149.28,372.97L147.98,370.36L146.84,367.4L150.03,367.15L153.59,366.79L153.33,367.43L157.56,369.04L163.96,371.35L169.54,371.32L171.76,371.32L171.76,369.97L176.62,369.97L177.64,371.14L179.08,372.17L180.74,373.6L181.67,375.29L182.37,377.05L183.82,378.02L186.15,378.98L187.91,376.45L190.21,376.39L192.18,377.67L193.59,379.85L194.56,381.71L196.21,383.51L196.83,385.7L197.62,387.17L199.8,388.13L201.79,388.81z" }),
                        _react2.default.createElement("path", { id: "MY", title: "Malaysia", fill: mapColors[109].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[109].raw, this.IDDict["MY"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M758.65,446.07l0.22,1.44l1.85,-0.33l0.92,-1.15l0.64,0.26l1.66,1.69l1.18,1.87l0.16,1.88l-0.3,1.27l0.27,0.96l0.21,1.65l0.99,0.77l1.1,2.46l-0.05,0.94l-1.99,0.19l-2.65,-2.06l-3.32,-2.21l-0.33,-1.42l-1.62,-1.87l-0.39,-2.31l-1.01,-1.52l0.31,-2.04l-0.62,-1.19l0.49,-0.5L758.65,446.07zM807.84,450.9l-2.06,0.95l-2.43,-0.47l-3.22,0l-0.97,3.17l-1.08,0.97l-1.44,3.88l-2.29,0.59l-2.65,-0.78l-1.34,0.24l-1.63,1.41l-1.79,-0.2l-1.81,0.57l-1.92,-1.57l-0.47,-1.86l2.05,0.96l2.17,-0.52l0.56,-2.36l1.2,-0.53l3.36,-0.6l2.01,-2.21l1.38,-1.77l1.28,1.45l0.59,-0.95l1.34,0.09l0.16,-1.78l0.13,-1.38l2.16,-1.95l1.41,-2.19l1.13,-0.01l1.44,1.42l0.13,1.22l1.85,0.78l2.34,0.84l-0.2,1.1l-1.88,0.14L807.84,450.9z" }),
                        _react2.default.createElement("path", { id: "MZ", title: "Mozambique", fill: mapColors[110].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[110].raw, this.IDDict["MZ"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M572.15,495.69L574.26,495.46L577.63,496.26L578.37,495.9L580.32,495.83L581.32,494.98L583,495.02L586.06,493.92L588.29,492.28L588.75,493.55L588.63,496.38L588.98,498.88L589.09,503.36L589.58,504.76L588.75,506.83L587.66,508.84L585.87,510.64L583.31,511.75L580.15,513.16L576.98,516.31L575.9,516.85L573.94,518.94L572.79,519.63L572.55,521.75L573.88,524L574.43,525.76L574.47,526.66L574.96,526.51L574.88,529.47L574.43,530.88L575.09,531.4L574.67,532.67L573.5,533.76L571.19,534.8L567.82,536.46L566.59,537.61L566.83,538.91L567.54,539.12L567.3,540.76L565.18,540.74L564.94,539.36L564.52,537.97L564.28,536.86L564.78,533.43L564.05,531.26L562.71,527L565.66,523.59L566.4,521.44L566.83,521.17L567.14,519.43L566.69,518.55L566.81,516.35L567.36,514.31L567.35,510.62L565.9,509.68L564.56,509.47L563.96,508.75L562.66,508.14L560.32,508.2L560.14,507.12L559.87,505.07L568.38,502.69L569.99,504.07L570.77,503.81L571.87,504.54L572.04,505.69L571.45,507.04L571.65,509.08L573.48,510.87L574.34,508.86L575.55,508.25L575.31,504.53L574.14,502.45L573.13,501.53L572.15,501.57L571.37,497.85z" }),
                        _react2.default.createElement("path", { id: "NA", title: "Namibia", fill: mapColors[111].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[111].raw, this.IDDict["NA"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M521.08,546.54L519,544.15L517.9,541.85L517.28,538.82L516.59,536.57L515.65,531.85L515.59,528.22L515.23,526.58L514.14,525.34L512.69,522.87L511.22,519.3L510.61,517.45L508.32,514.58L508.15,512.33L509.5,511.78L511.18,511.28L513,511.37L514.67,512.69L515.09,512.48L526.46,512.36L528.4,513.76L535.19,514.17L540.34,512.98L542.64,512.31L544.46,512.48L545.56,513.14L545.59,513.38L544.01,514.04L543.15,514.05L541.37,515.2L540.29,513.99L535.97,515.02L533.88,515.11L533.8,525.68L531.04,525.79L531.04,534.65L531.03,546.17L528.53,547.8L527.03,548.03L525.26,547.43L524,547.2L523.53,545.84L522.42,544.97z" }),
                        _react2.default.createElement("path", { id: "NC", title: "New Caledonia", fill: mapColors[112].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[112].raw, this.IDDict["NC"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M940.08,523.48L942.38,525.34L943.83,526.72L942.77,527.45L941.22,526.63L939.22,525.28L937.41,523.69L935.56,521.59L935.17,520.58L936.37,520.63L937.95,521.64L939.18,522.65z" }),
                        _react2.default.createElement("path", { id: "NE", title: "Niger", fill: mapColors[113].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[113].raw, this.IDDict["NE"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M481.29,429.88L481.36,427.93L478.12,427.28L478.04,425.9L476.46,424.03L476.08,422.72L476.3,421.32L478.1,421.21L479.14,420.18L482.96,419.93L485.45,419.48L485.69,417.69L487.23,415.75L487.22,409L491.17,407.68L499.29,401.83L508.9,396.08L513.33,397.39L514.91,399.05L516.89,397.93L517.58,402.6L518.63,403.38L518.68,404.33L519.84,405.35L519.23,406.63L518.15,412.61L518.01,416.4L514.43,419.14L513.22,422.94L514.39,424L514.38,425.85L516.18,425.92L515.9,427.26L515.11,427.43L515.02,428.33L514.49,428.4L512.6,425.27L511.94,425.15L509.75,426.75L507.58,425.92L506.07,425.75L505.26,426.15L503.61,426.07L501.96,427.29L500.53,427.36L497.14,425.88L495.81,426.58L494.38,426.53L493.33,425.45L490.51,424.38L487.5,424.72L486.77,425.34L486.38,426.99L485.57,428.14L485.38,430.68L483.24,429.04L482.23,429.05z" }),
                        _react2.default.createElement("path", { id: "NG", title: "Nigeria", fill: mapColors[114].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[114].raw, this.IDDict["NG"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M499.09,450.08L496.18,451.08L495.11,450.94L494.03,451.56L491.79,451.5L490.29,449.75L489.37,447.73L487.38,445.89L485.27,445.92L482.8,445.92L482.96,441.39L482.89,439.6L483.42,437.83L484.28,436.96L485.64,435.21L485.35,434.45L485.9,433.31L485.27,431.63L485.38,430.68L485.57,428.14L486.38,426.99L486.77,425.34L487.5,424.72L490.51,424.38L493.33,425.45L494.38,426.53L495.81,426.58L497.14,425.88L500.53,427.36L501.96,427.29L503.61,426.07L505.26,426.15L506.07,425.75L507.58,425.92L509.75,426.75L511.94,425.15L512.6,425.27L514.49,428.4L515.02,428.33L516.13,429.47L515.82,429.98L515.67,430.93L513.31,433.13L512.57,434.94L512.17,436.41L511.58,437.04L511.01,439.01L509.51,440.17L509.08,441.59L508.45,442.73L508.19,443.89L506.26,444.84L504.69,443.69L503.62,443.73L501.95,445.37L501.14,445.4L499.81,448.1z" }),
                        _react2.default.createElement("path", { id: "NI", title: "Nicaragua", fill: mapColors[115].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[115].raw, this.IDDict["NI"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M234.93,432.31L233.96,431.41L232.65,430.26L232.03,429.3L230.85,428.41L229.44,427.12L229.75,426.68L230.22,427.11L230.43,426.9L231.3,426.79L231.65,426.13L232.06,426.11L232,424.7L232.66,424.63L233.25,424.65L233.85,423.89L234.68,424.47L234.97,424.11L235.48,423.77L236.46,422.98L236.51,422.38L236.78,422.41L237.14,421.72L237.43,421.64L237.91,422.08L238.47,422.21L239.09,421.84L239.8,421.84L240.77,421.46L241.16,421.07L242.12,421.13L241.88,421.41L241.74,422.05L242.02,423.1L241.38,424.08L241.08,425.23L240.98,426.5L241.14,427.23L241.21,428.52L240.78,428.8L240.52,430.02L240.71,430.77L240.13,431.5L240.27,432.26L240.69,432.73L240.02,433.33L239.2,433.14L238.73,432.56L237.84,432.32L237.2,432.69L235.35,431.94z" }),
                        _react2.default.createElement("path", { id: "NL", title: "Netherlands", fill: mapColors[116].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[116].raw, this.IDDict["NL"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M492.28,285.98L494.61,286.11L495.14,287.69L494.44,291.92L493.73,293.63L492.04,293.63L492.52,298.32L490.97,297.28L489.2,295.33L486.6,296.26L484.55,295.91L485.99,294.67L488.45,287.93z" }),
                        _react2.default.createElement("path", { id: "NO", title: "Norway", fill: mapColors[117].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[117].raw, this.IDDict["NO"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M554.23,175.61l8.77,6.24l-3.61,2.23l3.07,5.11l-4.77,3.19l-2.26,0.72l1.19,-5.59l-3.6,-3.25l-4.35,2.78l-1.38,5.85l-2.67,3.44l-3.01,-1.87l-3.66,0.38l-3.12,-4.15l-1.68,2.09l-1.74,0.32l-0.41,5.08l-5.28,-1.22l-0.74,4.22l-2.69,-0.03l-1.85,5.24l-2.8,7.87l-4.35,9.5l1.02,2.23l-0.98,2.55l-2.78,-0.11l-1.82,5.91l0.17,8.04l1.79,2.98l-0.93,6.73l-2.33,3.81l-1.24,3.15l-1.88,-3.35l-5.54,6.27l-3.74,1.24l-3.88,-2.71l-1,-5.86l-0.89,-13.26l2.58,-3.88l7.4,-5.18l5.54,-6.59l5.13,-9.3l6.74,-13.76l4.7,-5.67l7.71,-9.89l6.15,-3.59l4.61,0.44l4.27,-6.99l5.11,0.38L554.23,175.61z" }),
                        _react2.default.createElement("path", { id: "NP", title: "Nepal", fill: mapColors[118].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[118].raw, this.IDDict["NP"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M722.33,382.45L722.11,383.8L722.48,385.79L722.16,387.03L719.83,387.08L716.45,386.35L714.29,386.06L712.67,384.47L708.83,384.06L705.17,382.29L702.53,380.74L699.81,379.54L700.9,376.55L702.68,375.09L703.84,374.31L706.09,375.31L708.92,377.4L710.49,377.86L711.43,379.39L713.61,380.02L715.89,381.41L719.06,382.14z" }),
                        _react2.default.createElement("path", { id: "NZ", title: "New Zealand", fill: mapColors[119].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[119].raw, this.IDDict["NZ"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M960.38,588.63l0.64,1.53l1.99,-1.5l0.81,1.57l0,1.57l-1.04,1.74l-1.83,2.8l-1.43,1.54l1.03,1.86l-2.16,0.05l-2.4,1.46l-0.75,2.57l-1.59,4.03l-2.2,1.8l-1.4,1.16l-2.58,-0.09l-1.82,-1.34l-3.05,-0.28l-0.47,-1.48l1.51,-2.96l3.53,-3.87l1.81,-0.73l2.01,-1.47l2.4,-2.01l1.68,-1.98l1.25,-2.81l1.06,-0.95l0.42,-2.07l1.97,-1.7L960.38,588.63zM964.84,571.61l2.03,3.67l0.06,-2.38l1.27,0.95l0.42,2.65l2.26,1.15l1.89,0.28l1.6,-1.35l1.42,0.41l-0.68,3.15l-0.85,2.09l-2.14,-0.07l-0.75,1.1l0.26,1.56l-0.41,0.68l-1.06,1.97l-1.39,2.53l-2.17,1.49l-0.48,-0.98l-1.17,-0.54l1.62,-3.04l-0.92,-2.01l-3.02,-1.45l0.08,-1.31l2.03,-1.25l0.47,-2.74l-0.13,-2.28l-1.14,-2.34l0.08,-0.61l-1.34,-1.43l-2.21,-3.04l-1.17,-2.41l1.04,-0.27l1.53,1.89l2.18,0.89L964.84,571.61z" }),
                        _react2.default.createElement("path", { id: "OM", title: "Oman", fill: mapColors[120].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[120].raw, this.IDDict["OM"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M640.29,403.18l-1.05,2.04l-1.27,-0.16l-0.58,0.71l-0.45,1.5l0.34,1.98l-0.26,0.36l-1.29,-0.01l-1.75,1.1l-0.27,1.43l-0.64,0.62l-1.74,-0.02l-1.1,0.74l0.01,1.18l-1.36,0.81l-1.55,-0.27l-1.88,0.98l-1.3,0.16l-0.92,-2.04l-2.19,-4.84l8.41,-2.96l1.87,-5.97l-1.29,-2.14l0.07,-1.22l0.82,-1.26l0.01,-1.25l1.27,-0.6l-0.5,-0.42l0.23,-2l1.43,-0.01l1.26,2.09l1.57,1.11l2.06,0.4l1.66,0.55l1.27,1.74l0.76,1l1,0.38l-0.01,0.67l-1.02,1.79l-0.45,0.84L640.29,403.18zM633.37,388.64L633,389.2l-0.53,-1.06l0.82,-1.06l0.35,0.27L633.37,388.64z" }),
                        _react2.default.createElement("path", { id: "PA", title: "Panama", fill: mapColors[121].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[121].raw, this.IDDict["PA"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M256.88,443.21L255.95,442.4L255.35,440.88L256.04,440.13L255.33,439.94L254.81,439.01L253.41,438.23L252.18,438.41L251.62,439.39L250.48,440.09L249.87,440.19L249.6,440.78L250.93,442.3L250.17,442.66L249.76,443.08L248.46,443.22L247.97,441.54L247.61,442.02L246.68,441.86L246.12,440.72L244.97,440.54L244.24,440.21L243.04,440.21L242.95,440.82L242.63,440.4L242.78,439.84L243.01,439.27L242.9,438.76L243.32,438.42L242.74,438L242.72,436.87L243.81,436.62L244.81,437.63L244.75,438.23L245.87,438.35L246.14,438.12L246.91,438.82L248.29,438.61L249.48,437.9L251.18,437.33L252.14,436.49L253.69,436.65L253.58,436.93L255.15,437.03L256.4,437.52L257.31,438.36L258.37,439.14L258.03,439.56L258.68,441.21L258.15,442.05L257.24,441.85z" }),
                        _react2.default.createElement("path", { id: "PE", title: "Peru", fill: mapColors[122].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[122].raw, this.IDDict["PE"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M280.13,513.14L279.38,514.65L277.94,515.39L275.13,513.71L274.88,512.51L269.33,509.59L264.3,506.42L262.13,504.64L260.97,502.27L261.43,501.44L259.06,497.69L256.29,492.45L253.65,486.83L252.5,485.54L251.62,483.48L249.44,481.64L247.44,480.51L248.35,479.26L246.99,476.59L247.86,474.64L250.1,472.87L250.43,474.04L249.63,474.7L249.7,475.72L250.86,475.5L252,475.8L253.17,477.21L254.76,476.06L255.29,474.18L257.01,471.75L260.38,470.65L263.44,467.73L264.31,465.92L263.92,463.81L264.67,463.54L266.53,464.86L267.42,466.18L268.72,466.9L270.37,469.82L272.46,470.17L274.01,469.43L275.02,469.91L276.7,469.67L278.85,470.98L277.04,473.82L277.88,473.88L279.28,475.37L276.75,475.24L276.38,475.66L274.08,476.19L270.88,478.1L270.67,479.4L269.96,480.38L270.24,481.89L268.54,482.7L268.54,483.89L267.8,484.4L268.97,486.93L270.53,488.65L269.94,489.86L271.8,490.02L272.86,491.53L275.33,491.6L277.63,489.94L277.44,494.24L278.72,494.57L280.3,494.08L282.73,498.66L282.12,499.62L281.99,501.64L281.93,504.08L280.83,505.52L281.34,506.59L280.69,507.56L281.9,510z" }),
                        _react2.default.createElement("path", { id: "PG", title: "Papua New Guinea", fill: mapColors[123].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[123].raw, this.IDDict["PG"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M912.32,482.42l-0.79,0.28l-1.21,-1.08l-1.23,-1.78l-0.6,-2.13l0.39,-0.27l0.3,0.83l0.85,0.63l1.36,1.77l1.32,0.95L912.32,482.42zM901.39,478.67l-1.47,0.23l-0.44,0.79l-1.53,0.68l-1.44,0.66l-1.49,0l-2.3,-0.81l-1.6,-0.78l0.23,-0.87l2.51,0.41l1.53,-0.22l0.42,-1.34l0.4,-0.07l0.27,1.49l1.6,-0.21l0.79,-0.96l1.57,-1l-0.31,-1.65l1.68,-0.05l0.57,0.46l-0.06,1.55L901.39,478.67zM887.96,484.02l2.5,1.84l1.82,2.99l1.61,-0.09l-0.11,1.25l2.17,0.48l-0.84,0.53l2.98,1.19l-0.31,0.82l-1.86,0.2l-0.69,-0.73l-2.41,-0.32l-2.83,-0.43l-2.18,-1.8l-1.59,-1.55l-1.46,-2.46l-3.66,-1.23l-2.38,0.8l-1.71,0.93l0.36,2.08l-2.2,0.97l-1.57,-0.47l-2.9,-0.12l-0.05,-9.16l-0.05,-9.1l4.87,1.92l5.18,1.6l1.93,1.43l1.56,1.41l0.43,1.65l4.67,1.73l0.68,1.49l-2.58,0.3L887.96,484.02zM904.63,475.93l-0.88,0.74l-0.53,-1.65l-0.65,-1.08l-1.27,-0.91l-1.6,-1.19l-2.02,-0.82l0.78,-0.67l1.51,0.78l0.95,0.61l1.18,0.67l1.12,1.17l1.07,0.89L904.63,475.93z" }),
                        _react2.default.createElement("path", { id: "PH", title: "Philippines", fill: mapColors[124].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[124].raw, this.IDDict["PH"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M829.59,439.86l0.29,1.87l0.17,1.58l-0.96,2.57l-1.02,-2.86l-1.31,1.42l0.9,2.06l-0.8,1.31l-3.3,-1.63l-0.79,-2.03l0.86,-1.33l-1.78,-1.33l-0.88,1.17l-1.32,-0.11l-2.08,1.57l-0.46,-0.82l1.1,-2.37l1.77,-0.79l1.53,-1.06l0.99,1.27l2.13,-0.77l0.46,-1.26l1.98,-0.08l-0.17,-2.18l2.27,1.34l0.24,1.42L829.59,439.86zM822.88,434.6l-1.01,0.93l-0.88,1.79l-0.88,0.84l-1.73,-1.95l0.58,-0.76l0.7,-0.79l0.31,-1.76l1.55,-0.17l-0.45,1.91l2.08,-2.74L822.88,434.6zM807.52,437.32l-3.73,2.67l1.38,-1.97l2.03,-1.74l1.68,-1.96l1.47,-2.82l0.5,2.31l-1.85,1.56L807.52,437.32zM817,430.02l1.68,0.88l1.78,0l-0.05,1.19l-1.3,1.2l-1.78,0.85l-0.1,-1.32l0.2,-1.45L817,430.02zM827.14,429.25l0.79,3.18l-2.16,-0.75l0.06,0.95l0.69,1.75l-1.33,0.63l-0.12,-1.99l-0.84,-0.15l-0.44,-1.72l1.65,0.23l-0.04,-1.08l-1.71,-2.18l2.69,0.06L827.14,429.25zM816,426.66l-0.74,2.47l-1.2,-1.42l-1.43,-2.18l2.4,0.1L816,426.66zM815.42,410.92l1.73,0.84l0.86,-0.76l0.25,0.75l-0.46,1.22l0.96,2.09l-0.74,2.42l-1.65,0.96l-0.44,2.33l0.63,2.29l1.49,0.32l1.24,-0.34l3.5,1.59l-0.27,1.56l0.92,0.69l-0.29,1.32l-2.18,-1.4l-1.04,-1.5l-0.72,1.05l-1.79,-1.72l-2.55,0.42l-1.4,-0.63l0.14,-1.19l0.88,-0.73l-0.84,-0.67l-0.36,1.04l-1.38,-1.65l-0.42,-1.26l-0.1,-2.77l1.13,0.96l0.29,-4.55l0.91,-2.66L815.42,410.92z" }),
                        _react2.default.createElement("path", { id: "PK", title: "Pakistan", fill: mapColors[125].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[125].raw, this.IDDict["PK"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M685.99,351.76L688.06,353.39L688.89,356.05L693.5,357.44L690.79,360.3L687.67,360.81L683.41,359.98L682.04,361.44L683.03,364.39L684,366.64L686.27,368.27L683.88,370.18L683.92,372.51L681.2,375.75L679.44,379.01L676.51,382.33L673.25,382.09L670.16,385.39L672,386.79L672.32,389.18L673.89,390.74L674.45,393.38L668.28,393.37L666.41,395.41L664.36,394.64L663.52,392.44L661.35,390.1L656.19,390.68L651.63,390.73L647.68,391.17L648.74,387.57L652.78,385.96L652.55,384.52L651.21,384.01L651.13,381.24L648.45,379.84L647.32,377.91L645.94,376.23L650.63,377.87L653.44,377.39L655.11,377.79L655.68,377.09L657.63,377.37L661.28,376.04L661.38,373.29L662.94,371.45L665.03,371.45L665.33,370.54L667.48,370.11L668.51,370.41L669.61,369.49L669.46,367.51L670.65,365.51L672.43,364.66L671.33,362.44L674,362.55L674.77,361.33L674.65,360.03L676.05,358.6L675.72,356.9L675.06,355.44L676.7,353.93L679.71,353.2L682.93,352.8L684.35,352.15z" }),
                        _react2.default.createElement("path", { id: "PL", title: "Poland", fill: mapColors[126].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[126].raw, this.IDDict["PL"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M517.36,296.97L516.21,294.11L516.43,292.55L515.73,290.1L514.72,288.45L515.5,287.2L514.84,284.81L516.76,283.42L521.13,281.2L524.67,279.56L527.46,280.38L527.67,281.56L530.38,281.62L533.83,282.17L538.99,282.09L540.43,282.61L541.1,284.07L541.22,286.16L542,287.94L541.98,289.79L540.3,290.73L541.17,292.85L541.22,294.86L542.63,298.75L542.33,299.99L540.94,300.5L538.39,304.11L539.11,306.03L538.5,305.78L535.84,304.14L533.82,304.74L532.5,304.3L530.84,305.22L529.43,303.7L528.27,304.28L528.11,304.02L526.82,301.89L524.74,301.63L524.47,300.26L522.55,299.77L522.13,300.9L520.61,300L520.78,298.79L518.69,298.4z" }),
                        _react2.default.createElement("path", { id: "PR", title: "Puerto Rico", fill: mapColors[127].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[127].raw, this.IDDict["PR"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M289.41,410.89L290.84,411.15L291.35,411.73L290.63,412.47L288.52,412.45L286.88,412.55L286.72,411.3L287.11,410.87z" }),
                        _react2.default.createElement("path", { id: "PS", title: "Palestinian Territories", fill: mapColors[128].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[128].raw, this.IDDict["PS"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M574.92,367.87L574.92,369.88L574.5,370.84L573.18,371.29L573.31,370.43L574.02,369.97L573.32,369.61L573.9,367.41z" }),
                        _react2.default.createElement("path", { id: "PT", title: "Portugal", fill: mapColors[129].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[129].raw, this.IDDict["PT"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M449.92,334.56L450.94,333.61L452.08,333.06L452.79,334.9L454.44,334.89L454.92,334.42L456.56,334.55L457.34,336.43L456.04,337.43L456.01,340.31L455.55,340.84L455.44,342.56L454.23,342.86L455.35,345.03L454.58,347.38L455.54,348.44L455.16,349.4L454.12,350.72L454.35,351.88L453.23,352.79L451.75,352.3L450.3,352.68L450.73,349.94L450.47,347.76L449.21,347.43L448.54,346.08L448.77,343.72L449.88,342.41L450.08,340.94L450.67,338.73L450.6,337.16L450.04,335.82z" }),
                        _react2.default.createElement("path", { id: "PY", title: "Paraguay", fill: mapColors[130].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[130].raw, this.IDDict["PY"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M299.49,526.99L300.6,523.4L300.67,521.8L302.01,519.18L306.9,518.32L309.5,518.37L312.12,519.88L312.16,520.79L312.99,522.45L312.81,526.51L315.77,527.09L316.91,526.5L318.8,527.32L319.33,528.22L319.59,530.99L319.92,532.17L320.96,532.3L322.01,531.81L323.02,532.36L323.02,534.04L322.64,535.86L322.09,537.64L321.63,540.39L319.09,542.79L316.87,543.29L313.72,542.81L310.9,541.96L313.66,537.23L313.25,535.86L310.37,534.66L306.94,532.4L304.65,531.94z" }),
                        _react2.default.createElement("path", { id: "QA", title: "Qatar", fill: mapColors[131].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[131].raw, this.IDDict["QA"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M617.72,392.16L617.53,389.92L618.29,388.3L619.05,387.96L619.9,388.93L619.95,390.74L619.34,392.55L618.56,392.77z" }),
                        _react2.default.createElement("path", { id: "RO", title: "Romania", fill: mapColors[132].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[132].raw, this.IDDict["RO"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M538.93,310.86L540.14,309.97L541.88,310.43L543.67,310.45L544.97,311.46L545.93,310.82L548,310.42L548.71,309.44L549.89,309.45L550.74,309.85L551.61,311.09L552.5,312.84L554.12,315.28L554.21,317.07L553.91,318.79L554.42,320.62L555.67,321.35L556.98,320.71L558.26,321.39L558.32,322.42L556.96,323.26L556.11,322.9L555.33,327.61L553.68,327.2L551.64,325.79L548.34,326.69L546.95,327.68L542.83,327.48L540.67,326.87L539.59,327.16L538.78,325.56L538.27,324.88L538.92,324.22L538.22,323.73L537.34,324.61L535.71,323.47L535.49,321.84L533.78,320.9L533.47,319.63L531.95,318.05L534.2,317.29L535.89,314.53L537.22,311.73z" }),
                        _react2.default.createElement("path", { id: "RS", title: "Serbia", fill: mapColors[133].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[133].raw, this.IDDict["RS"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M533.78,320.9L535.49,321.84L535.71,323.47L537.34,324.61L538.22,323.73L538.92,324.22L538.27,324.88L538.78,325.56L538.09,326.44L538.34,327.86L539.7,329.52L538.63,330.71L538.16,331.92L538.47,332.37L538,332.91L536.71,332.97L535.75,333.19L535.66,332.91L535.99,332.46L536.31,331.53L535.91,331.55L535.36,330.85L534.9,330.67L534.54,330.06L534.01,329.82L533.61,329.28L533.11,329.5L532.72,330.76L532.05,331.04L532.28,330.71L531.21,329.92L530.29,329.51L529.88,328.97L529.14,328.31L529.8,328.14L530.21,326.32L528.86,324.82L529.56,323.1L528.54,323.11L529.62,321.62L528.73,320.48L528.05,318.93L530.2,317.88L531.95,318.05L533.47,319.63z" }),
                        _react2.default.createElement("path", { id: "RU", title: "Russia", fill: mapColors[134].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[134].raw, this.IDDict["RU"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M1008.27,215.75l-2.78,2.97l-4.6,0.7l-0.07,6.46l-1.12,1.35l-2.63,-0.19l-2.14,-2.26l-3.73,-1.92l-0.63,-2.89l-2.85,-1.1l-3.19,0.87l-1.52,-2.37l0.61,-2.55l-3.36,1.64l1.26,3.19l-1.59,2.83l-0.02,0.04l-3.6,2.89l-3.63,-0.48l2.53,3.44l1.67,5.2l1.29,1.67l0.33,2.53l-0.72,1.6l-5.23,-1.32l-7.84,4.51l-2.49,0.69l-4.29,4.1l-4.07,3.5l-1.03,2.55l-4.01,-3.9l-7.31,4.42l-1.28,-2.08l-2.7,2.39l-3.75,-0.76l-0.9,3.63l-3.36,5.22l0.1,2.14l3.19,1.17l-0.38,7.46l-2.6,0.19l-1.2,4.15l1.17,2.1l-4.9,2.47l-0.97,5.4l-4.18,1.14l-0.84,4.66l-4.04,4.18l-1.04,-3.08l-1.2,-6.69l-1.56,-10.65l1.35,-6.95l2.37,-3.07l0.15,-2.44l4.36,-1.18l5.01,-6.78l4.83,-5.73l5.04,-4.57l2.25,-8.37l-3.41,0.51l-1.68,4.92l-7.11,6.36l-2.3,-7.14l-7.24,2l-7.02,9.56l2.32,3.38l-6.26,1.42l-4.33,0.56l0.2,-3.95l-4.36,-0.84l-3.47,2.7l-8.57,-0.94l-9.22,1.62l-9.08,10.33l-10.75,11.78l4.42,0.61l1.38,3l2.72,1.05l1.79,-2.38l3.08,0.31l4.05,5.19l0.09,3.92l-2.19,4.51l-0.24,5.27l-1.26,6.85l-4.23,6.01l-0.94,2.82l-3.81,4.66l-3.78,4.53l-1.81,2.28l-3.74,2.25l-1.77,0.05l-1.76,-1.86l-3.76,2.79l-0.44,1.26l-0.39,-0.66l-0.02,-1.93l1.43,-0.1l0.4,-4.55l-0.74,-3.36l2.41,-1.4l3.4,0.7l1.89,-3.89l0.96,-4.46l1.09,-1.51l1.47,-3.76l-4.63,1.24l-2.43,1.65l-4.26,0l-1.13,-3.95l-3.32,-3.03l-4.88,-1.38l-1.04,-4.28l-0.98,-2.73l-1.05,-1.94l-1.73,-4.61l-2.46,-1.71l-4.2,-1.39l-3.72,0.13l-3.48,0.84l-2.32,2.31l1.54,1.1l0.04,2.52l-1.56,1.45l-2.53,4.72l0.03,1.93l-3.95,2.74l-3.37,-1.63l-3.35,0.36l-1.47,-1.46l-1.68,-0.47l-4.11,3.06l-3.69,0.71l-2.58,1.06l-3.53,-0.7l-2.6,0.04l-1.7,-2.2l-2.75,-2.09l-2.81,-0.58l-3.55,0.57l-2.65,0.81l-3.98,-1.84l-0.53,-3.32l-3.3,-1.15l-2.54,-0.53l-3.14,-1.87l-2.9,4.66l1.14,2.6l-2.73,3.03l-4.05,-1.09l-2.8,-0.16l-1.87,-2.04l-2.92,-0.06l-2.44,-1.35l-4.26,2.07l-5.35,3.74l-2.96,0.74l-1.1,0.35l-1.49,-2.63l-3.61,0.58l-1.19,-1.84l-1.96,-0.85l-1.35,-2.55l-1.55,-0.8l-4.03,1.14l-3.86,-2.57l-1.49,2.33l-6.27,-11.58l-3.58,-3.66l1.03,-1.5l-7.03,4.49l-2.69,0.27l0.23,-2.58l-3.6,-1.63l-2.93,1.17l-0.88,-5.01l-5.04,-1.06l-2.52,2.03l-7.02,1.79l-1.37,1.19l-10.49,1.66l-1.29,1.62l2.02,3.21l-2.69,1.2l0.53,1.25l-2.69,2.22l4.54,3.1l-0.7,2.11l-3.94,-0.19l-0.81,1.31l-3.59,-2.29l-4.45,0.09l-2.98,1.87l-3.32,-1.79l-6.18,-3.1l-4.38,0.12l-5.79,4.85l-0.35,3.19l-2.88,-2.53l-2.24,4.77l0.82,0.87l-1.62,3.21l2.38,2.84l2.08,-0.12l1.79,2.76l-0.28,2.1l1.42,0.66l-1.28,2.39l-2.72,0.66l-2.79,4.09l2.55,3.7l-0.28,2.59l3.06,4.46l-1.67,1.51l-0.48,0.95l-1.24,-0.25l-1.93,-2.27l-0.79,-0.13l-1.76,-0.87l-0.86,-1.55l-2.62,-0.79l-1.7,0.6l-0.49,-0.71l-3.82,-1.83l-4.13,-0.62l-2.37,-0.66l-0.34,0.45l-3.57,-3.27l-3.2,-1.48l-2.42,-2.32l2.04,-0.64l2.33,-3.35l-1.57,-1.6l4.13,-1.67l-0.07,-0.9l-2.52,0.66l0.09,-1.83l1.45,-1.16l2.71,-0.31l0.44,-1.4l-0.62,-2.33l1.14,-2.23l-0.03,-1.26l-4.13,-1.41l-1.64,0.05l-1.73,-2.04l-2.15,0.69l-3.56,-1.54l0.06,-0.87l-1,-1.93l-2.24,-0.22l-0.23,-1.39l0.7,-0.91l-1.79,-2.58l-2.91,0.44l-0.85,-0.23l-0.71,1.04l-1.05,-0.18l-0.69,-2.94l-0.66,-1.54l0.54,-0.44l2.26,0.16l1.09,-1.02l-0.81,-1.25l-1.89,-0.83l0.17,-0.86l-1.14,-0.87l-1.76,-3.15l0.6,-1.31l-0.27,-2.31l-2.74,-1.18l-1.47,0.59l-0.4,-1.24l-2.95,-1.26l-0.9,-2.99l-0.24,-2.49l-1.35,-1.19l1.2,-1.66l-0.83,-4.96l2,-3.13l-0.42,-0.96l3.19,-3.07l-2.94,-2.68l6,-7.41l2.6,-3.45l1.05,-3.1l-4.15,-4.26l1.15,-4.15l-2.52,-4.85l1.89,-5.76l-3.26,-7.96l2.59,-5.48l-4.29,-4.99l0.41,-5.4l2.26,-0.72l4.77,-3.19l2.89,-2.81l4.61,4.86l7.68,1.88l10.59,8.65l2.15,3.51l0.19,4.8l-3.11,3.69l-4.58,1.85l-12.52,-5.31l-2.06,0.9l4.57,5.1l0.18,3.15l0.18,6.75l3.61,1.97l2.19,1.66l0.36,-3.11l-1.69,-2.8l1.78,-2.51l6.78,4.1l2.36,-1.59l-1.89,-4.88l6.53,-6.74l2.59,0.4l2.62,2.43l1.63,-4.81l-2.34,-4.28l1.37,-4.41l-2.06,-4.69l7.84,2.44l1.6,4.18l-3.55,0.91l0.02,4.04l2.21,2.44l4.33,-1.54l0.69,-4.61l5.86,-3.52l9.79,-6.54l2.11,0.38l-2.76,4.64l3.48,0.78l2.01,-2.58l5.25,-0.21l4.16,-3.19l3.2,4.62l3.19,-5.09l-2.94,-4.58l1.46,-2.66l8.28,2.44l3.88,2.49l10.16,8.8l1.88,-3.97l-2.85,-4.11l-0.08,-1.68l-3.38,-0.78l0.92,-3.83l-1.5,-6.49l-0.08,-2.74l5.17,-7.99l1.84,-8.42l2.08,-1.88l7.42,2.51l0.58,5.18l-2.66,7.28l1.74,2.78l0.9,5.94l-0.64,11.07l3.09,4.73l-1.2,5.01l-5.49,10.2l3.21,1.02l1.12,-2.51l3.08,-1.82l0.74,-3.55l2.43,-3.49l-1.63,-4.26l1.31,-5.08l-3.07,-0.64l-0.67,-4.42l2.24,-8.28l-3.64,-7.03l5.02,-6.04l-0.65,-6.62l1.4,-0.22l1.47,5.19l-1.11,8.67l3,1.59l-1.28,-6.37l4.69,-3.58l5.82,-0.49l5.18,5.18l-2.49,-7.62l-0.28,-10.28l4.88,-2.02l6.74,0.44l6.08,-1.32l-2.28,-5.38l3.25,-7.02l3.22,-0.3l5.45,-5.51l7.4,-1.51l0.94,-3.15l7.36,-1.08l2.29,2.61l6.29,-6.24l5.15,0.2l0.77,-5.24l2.68,-5.33l6.62,-5.31l4.81,4.21l-3.82,3.13l6.35,1.92l0.76,6.03l2.56,-2.94l8.2,0.16l6.32,5.84l2.25,4.35l-0.7,5.85l-3.1,3.24l-7.37,5.92l-2.11,3.08l3.48,1.43l4.15,2.55l2.52,-1.91l1.43,6.39l1.23,-2.56l4.48,-1.57l9,1.65l0.68,4.58l11.72,1.43l0.16,-7.47l5.95,1.74l4.48,-0.05l4.53,5.14l1.29,6.04l-1.66,3.84l3.52,6.98l4.41,3.49l2.71,-9.18l4.5,4l4.78,-2.38l5.43,2.72l2.07,-2.47l4.59,1.24l-2.02,-8.4l3.7,-4.07l25.32,6.06l2.39,5.35l7.34,6.65l11.32,-1.62l5.58,1.41l2.33,3.5l-0.34,6.02l3.45,2.29l3.75,-1.64l4.97,-0.21l5.29,1.57l5.31,-0.89l4.88,6.99l3.47,-2.48l-2.27,-5.07l1.25,-3.62l8.95,2.29l5.83,-0.49l8.06,3.84l3.92,3.44l6.87,5.86l7.35,7.34l-0.24,4.44l1.89,1.74l-0.65,-5.15l7.61,1.07L1008.27,215.75zM880.84,306.25l-2.82,-7.68l-1.16,-4.51l0.07,-4.5l-0.97,-4.5l-0.73,-3.15l-1.25,0.67l1.11,2.21l-2.59,2.17l-0.25,6.3l1.64,4.41l-0.12,5.85l-0.65,3.24l0.32,4.54l-0.31,4.01l0.52,3.4l1.84,-3.13l2.13,2.44l0.08,-2.84l-2.73,-4.23l1.72,-6.11L880.84,306.25zM537.82,278.77l-2.94,-0.86l-3.87,1.58l-0.64,2.13l3.45,0.55l5.16,-0.07l-0.22,-1.23l0.3,-1.33L537.82,278.77zM979.95,178.65l3.66,-0.52l2.89,-2.06l0.24,-1.19l-4.06,-2.51l-2.38,-0.02l-0.36,0.37l-3.57,3.64l0.5,2.73L979.95,178.65zM870.07,151.56l-2.66,3.92l0.49,0.52l5.75,1.08l4.25,-0.07l-0.34,-2.57l-3.98,-3.81L870.07,151.56zM894.64,142.03l3.24,-4.25l-7.04,-2.88l-5.23,-1.68l-0.67,3.59l5.21,4.27L894.64,142.03zM869.51,140.34l10.33,0.3l2.21,-8.14l-10.13,-6.07l-7.4,-0.51l-3.7,2.18l-1.51,7.75l5.55,7.01L869.51,140.34zM622.39,166.28l-2.87,1.96l0.41,4.83l5.08,2.35l0.74,3.82l9.16,1.1l1.66,-0.74l-5.36,-7.11l-0.57,-7.52l4.39,-9.14l4.18,-9.82l8.71,-10.17l8.56,-5.34l9.93,-5.74l1.88,-3.71l-1.95,-4.83l-5.46,1.6l-4.8,4.49l-9.33,2.22l-9.26,7.41l-6.27,5.85l0.76,4.87l-6.71,9.03l2.58,1.22l-5.56,8.27L622.39,166.28zM769.87,98.34l0.83,-5.72l-7.11,-8.34l-2.11,-0.98l-2.3,1.7l-5.12,18.6L769.87,98.34zM605.64,69.03l3.04,3.88l3.28,-2.69l0.39,-2.72l2.52,-1.27l3.76,-2.23l1.08,-2.62l-4.16,-3.85l-2.64,2.9l-1.61,4.12l-0.57,-4.65l-4.26,0.21L601,63.25l6.24,0.52L605.64,69.03zM736.89,82.07l4.65,5.73l7.81,4.2l6.12,-1.8l0.69,-13.62l-6.46,-16.04l-5.45,-9.02l-6.07,4.11l-7.28,11.83l3.83,3.27L736.89,82.07z" }),
                        _react2.default.createElement("path", { id: "RW", title: "Rwanda", fill: mapColors[135].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[135].raw, this.IDDict["RW"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M560.54,466.55L561.66,468.12L561.49,469.76L560.69,470.11L559.2,469.93L558.34,471.52L556.63,471.3L556.89,469.77L557.28,469.56L557.38,467.9L558.19,467.12L558.87,467.41z" }),
                        _react2.default.createElement("path", { id: "SA", title: "Saudi Arabia", fill: mapColors[136].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[136].raw, this.IDDict["SA"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M595.2,417.22L594.84,415.98L593.99,415.1L593.77,413.93L592.33,412.89L590.83,410.43L590.04,408.02L588.1,405.98L586.85,405.5L584.99,402.65L584.67,400.57L584.79,398.78L583.18,395.42L581.87,394.23L580.35,393.6L579.43,391.84L579.58,391.15L578.8,389.55L577.98,388.86L576.89,386.54L575.18,384.02L573.75,381.86L572.36,381.87L572.79,380.13L572.92,379.02L573.26,377.74L576.38,378.25L577.6,377.27L578.27,376.11L580.41,375.67L580.87,374.58L581.8,374.04L579,370.78L584.62,369.13L585.15,368.64L588.53,369.53L592.71,371.82L600.61,378.31L605.82,378.57L608.32,378.88L609.02,380.39L611,380.31L612.1,383.04L613.48,383.75L613.96,384.86L615.87,386.17L616.04,387.46L615.76,388.49L616.12,389.53L616.92,390.4L617.3,391.41L617.72,392.16L618.56,392.77L619.34,392.55L619.87,393.72L619.98,394.43L621.06,397.51L629.48,399.03L630.05,398.39L631.33,400.53L629.46,406.5L621.05,409.46L612.97,410.59L610.35,411.91L608.34,414.98L607.03,415.46L606.33,414.49L605.26,414.64L602.55,414.35L602.03,414.05L598.8,414.12L598.04,414.39L596.89,413.63L596.14,415.06L596.43,416.29z" }),
                        _react2.default.createElement("path", { id: "SB", title: "Solomon Islands", fill: mapColors[137].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[137].raw, this.IDDict["SB"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M929.81,492.75l0.78,0.97l-1.96,-0.02l-1.07,-1.74l1.67,0.69L929.81,492.75zM926.26,491.02l-1.09,0.06l-1.72,-0.29l-0.59,-0.44l0.18,-1.12l1.85,0.44l0.91,0.59L926.26,491.02zM928.58,490.25l-0.42,0.52l-2.08,-2.45l-0.58,-1.68h0.95l1.01,2.25L928.58,490.25zM923.52,486.69l0.12,0.57l-2.2,-1.19l-1.54,-1.01l-1.05,-0.94l0.42,-0.29l1.29,0.67l2.3,1.29L923.52,486.69zM916.97,483.91l-0.56,0.16l-1.23,-0.64l-1.15,-1.15l0.14,-0.47l1.67,1.18L916.97,483.91z" }),
                        _react2.default.createElement("path", { id: "SD", title: "Sudan", fill: mapColors[138].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[138].raw, this.IDDict["SD"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M570.48,436.9L570.09,436.85L570.14,435.44L569.8,434.47L568.36,433.35L568.02,431.3L568.36,429.2L567.06,429.01L566.87,429.64L565.18,429.79L565.86,430.62L566.1,432.33L564.56,433.89L563.16,435.93L561.72,436.22L559.36,434.57L558.3,435.15L558.01,435.98L556.57,436.51L556.47,437.09L553.68,437.09L553.29,436.51L551.27,436.41L550.26,436.9L549.49,436.65L548.05,435L547.57,434.23L545.54,434.62L544.77,435.93L544.05,438.45L543.09,438.98L542.23,439.29L542,439.15L541.03,438.34L540.85,437.47L541.3,436.29L541.3,435.14L539.68,433.37L539.36,432.15L539.39,431.46L538.36,430.63L538.33,428.97L537.75,427.87L536.76,428.04L537.04,426.99L537.77,425.79L537.45,424.61L538.37,423.73L537.79,423.06L538.53,421.28L539.81,419.15L542.23,419.35L542.09,407.74L542.13,406.5L545.35,406.49L545.35,400.53L556.62,400.53L567.5,400.53L578.62,400.53L579.52,403.47L578.91,404.01L579.32,407.07L580.35,410.59L581.41,411.32L582.95,412.4L581.53,414.07L579.46,414.55L578.58,415.45L578.31,417.38L577.1,421.63L577.4,422.78L576.95,425.25L575.81,428.06L574.12,429.48L572.92,431.65L572.63,432.81L571.31,433.61L570.48,436.57z" }),
                        _react2.default.createElement("path", { id: "SE", title: "Sweden", fill: mapColors[139].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[139].raw, this.IDDict["SE"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M537.45,217.49L534.73,222.18L535.17,226.2L530.71,231.33L525.3,236.67L523.25,245.08L525.25,249.15L527.93,252.29L525.36,258.52L522.44,259.78L521.37,268.62L519.78,273.38L516.38,272.89L514.79,276.84L511.54,277.07L510.65,272.36L508.3,266.55L506.17,259.05L507.41,255.9L509.74,252.09L510.67,245.36L508.88,242.38L508.7,234.34L510.53,228.43L513.31,228.54L514.28,225.99L513.26,223.76L517.61,214.26L520.42,206.39L522.27,201.15L524.96,201.17L525.71,196.96L530.99,198.18L531.4,193.1L533.14,192.77L536.88,196.58L541.25,201.73L541.33,212.85L542.27,215.55z" }),
                        _react2.default.createElement("path", { id: "SI", title: "Slovenia", fill: mapColors[140].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[140].raw, this.IDDict["SI"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M513.96,316.51L516.28,316.82L517.7,315.9L520.15,315.8L520.68,315.11L521.15,315.16L521.7,316.53L519.47,317.61L519.19,319.23L518.22,319.64L518.23,320.76L517.13,320.68L516.18,320.03L515.66,320.71L513.71,320.57L514.33,320.21L513.66,318.5z" }),
                        _react2.default.createElement("path", { id: "SJ", title: "Svalbard and Jan Mayen", fill: mapColors[141].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[141].raw, this.IDDict["SJ"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M544.58,104.49l-6.26,5.36l-4.95,-3.02l1.94,-3.42l-1.69,-4.34l5.81,-2.78l1.11,5.18L544.58,104.49zM526.43,77.81l9.23,11.29l-7.06,5.66l-1.56,10.09l-2.46,2.49l-1.33,10.51l-3.38,0.48l-6.03,-7.64l2.54,-4.62l-4.2,-3.86l-5.46,-11.82l-2.18,-11.79l7.64,-5.69l1.54,5.56l3.99,-0.22l1.06,-5.43l4.12,-0.56L526.43,77.81zM546.6,66.35l5.5,5.8l-4.16,8.52l-8.13,1.81l-8.27,-2.56l-0.5,-4.32l-4.02,-0.28l-3.07,-7.48l8.66,-4.72l4.07,4.08l2.84,-5.09L546.6,66.35z" }),
                        _react2.default.createElement("path", { id: "SK", title: "Slovakia", fill: mapColors[142].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[142].raw, this.IDDict["SK"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M528.11,304.02L528.27,304.28L529.43,303.7L530.84,305.22L532.5,304.3L533.82,304.74L535.84,304.14L538.5,305.78L537.73,306.89L537.18,308.6L536.58,309.03L533.58,307.75L532.66,308L532,309L530.68,309.52L530.38,309.25L529.02,309.9L527.9,310.03L527.68,310.87L525.32,311.38L524.29,310.92L522.86,309.85L522.58,308.4L522.81,307.86L523.2,306.93L524.45,307L525.4,306.56L525.48,306.17L526.02,305.96L526.2,304.99L526.84,304.8L527.28,304.03z" }),
                        _react2.default.createElement("path", { id: "SL", title: "Sierra Leone", fill: mapColors[143].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[143].raw, this.IDDict["SL"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M443.18,444.44L442.42,444.23L440.41,443.1L438.95,441.6L438.46,440.57L438.11,438.49L439.61,437.25L439.93,436.46L440.41,435.85L441.19,435.79L441.84,435.26L444.08,435.26L444.86,436.27L445.47,437.46L445.38,438.28L445.83,439.02L445.8,440.05L446.57,439.89L445.26,441.2L444,442.73L443.85,443.54z" }),
                        _react2.default.createElement("path", { id: "SN", title: "Senegal", fill: mapColors[144].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[144].raw, this.IDDict["SN"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M428.39,425.16L427.23,422.92L425.83,421.9L427.07,421.35L428.43,419.32L429.09,417.83L430.05,416.9L431.45,417.15L432.81,416.52L434.38,416.49L435.72,417.34L437.58,418.11L439.28,420.24L441.13,422.22L441.26,424.01L441.81,425.65L442.86,426.46L443.1,427.56L442.97,428.45L442.56,428.61L441.04,428.39L440.83,428.7L440.21,428.77L438.19,428.07L436.84,428.04L431.66,427.92L430.91,428.24L429.98,428.15L428.49,428.62L428.03,426.43L430.58,426.49L431.26,426.09L431.76,426.06L432.8,425.4L434,426.01L435.22,426.06L436.43,425.41L435.87,424.59L434.94,425.07L434.07,425.06L432.97,424.35L432.08,424.4L431.44,425.07z" }),
                        _react2.default.createElement("path", { id: "SO", title: "Somalia", fill: mapColors[145].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[145].raw, this.IDDict["SO"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M618.63,430.43L618.56,429.64L617.5,429.65L616.17,430.63L614.68,430.91L613.39,431.33L612.5,431.39L610.9,431.49L609.9,432.01L608.51,432.2L606.04,433.08L602.99,433.41L600.34,434.14L598.95,434.13L597.69,432.94L597.14,431.77L596.23,431.24L595.19,432.76L594.58,433.77L595.62,435.33L596.65,436.69L597.72,437.7L606.89,441.04L609.25,441.02L601.32,449.44L597.67,449.56L595.17,451.53L593.38,451.58L592.61,452.46L590.16,455.63L590.19,465.78L591.85,468.07L592.48,467.41L593.13,465.95L596.2,462.57L598.81,460.45L603.01,457.69L605.81,455.43L609.11,451.62L611.5,448.49L613.91,444.39L615.64,440.8L616.99,437.65L617.78,434.6L618.38,433.58L618.37,432.08z" }),
                        _react2.default.createElement("path", { id: "SR", title: "Suriname", fill: mapColors[146].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[146].raw, this.IDDict["SR"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M315.02,446.72L318.38,447.28L318.68,446.77L320.95,446.57L323.96,447.33L322.5,449.73L322.72,451.64L323.83,453.3L323.34,454.5L323.09,455.77L322.37,456.94L320.77,456.35L319.44,456.64L318.31,456.39L318.03,457.2L318.5,457.75L318.25,458.32L316.72,458.09L315.01,455.67L314.64,454.1L313.75,454.09L312.5,452.07L313.02,450.62L312.87,449.97L314.57,449.24z" }),
                        _react2.default.createElement("path", { id: "SS", title: "South Sudan", fill: mapColors[147].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[147].raw, this.IDDict["SS"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M570.48,436.9L570.51,439.1L570.09,439.96L568.61,440.03L567.65,441.64L569.37,441.84L570.79,443.21L571.29,444.33L572.57,444.98L574.22,448.03L572.32,449.87L570.6,451.54L568.87,452.82L566.9,452.82L564.64,453.47L562.86,452.84L561.71,453.61L559.24,451.75L558.57,450.56L557.01,451.15L555.71,450.96L554.96,451.43L553.7,451.1L552.01,448.79L551.56,447.9L549.46,446.79L548.75,445.11L547.58,443.9L545.7,442.44L545.67,441.52L544.14,440.39L542.23,439.29L543.09,438.98L544.05,438.45L544.77,435.93L545.54,434.62L547.57,434.23L548.05,435L549.49,436.65L550.26,436.9L551.27,436.41L553.29,436.51L553.68,437.09L556.47,437.09L556.57,436.51L558.01,435.98L558.3,435.15L559.36,434.57L561.72,436.22L563.16,435.93L564.56,433.89L566.1,432.33L565.86,430.62L565.18,429.79L566.87,429.64L567.06,429.01L568.36,429.2L568.02,431.3L568.36,433.35L569.8,434.47L570.14,435.44L570.09,436.85z" }),
                        _react2.default.createElement("path", { id: "SV", title: "El Salvador", fill: mapColors[148].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[148].raw, this.IDDict["SV"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M229.09,425.76L228.78,426.43L227.16,426.39L226.15,426.12L224.99,425.55L223.43,425.37L222.64,424.75L222.73,424.33L223.69,423.61L224.21,423.29L224.06,422.95L224.72,422.78L225.55,423.02L226.15,423.59L227,424.05L227.1,424.44L228.33,424.1L228.91,424.3L229.29,424.61z" }),
                        _react2.default.createElement("path", { id: "SY", title: "Syria", fill: mapColors[149].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[149].raw, this.IDDict["SY"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M584.02,364.6L578.53,368.14L575.41,366.82L575.35,366.8L575.73,366.3L575.69,364.93L576.38,363.1L577.91,361.83L577.45,360.51L576.19,360.33L575.93,357.72L576.61,356.31L577.36,355.56L578.11,354.8L578.27,352.86L579.18,353.54L582.27,352.57L583.76,353.22L586.07,353.21L589.29,351.9L590.81,351.96L594,351.42L592.56,353.6L591.02,354.46L591.29,356.98L590.23,361.1z" }),
                        _react2.default.createElement("path", { id: "SZ", title: "Swaziland", fill: mapColors[150].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[150].raw, this.IDDict["SZ"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M565.18,540.74L564.61,542.13L562.97,542.46L561.29,540.77L561.27,539.69L562.03,538.52L562.3,537.62L563.11,537.4L564.52,537.97L564.94,539.36z" }),
                        _react2.default.createElement("path", { id: "TD", title: "Chad", fill: mapColors[151].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[151].raw, this.IDDict["TD"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M515.9,427.26L516.18,425.92L514.38,425.85L514.39,424L513.22,422.94L514.43,419.14L518.01,416.4L518.15,412.61L519.23,406.63L519.84,405.35L518.68,404.33L518.63,403.38L517.58,402.6L516.89,397.93L519.72,396.27L530.91,402.04L542.09,407.74L542.23,419.35L539.81,419.15L538.53,421.28L537.79,423.06L538.37,423.73L537.45,424.61L537.77,425.79L537.04,426.99L536.76,428.04L537.75,427.87L538.33,428.97L538.36,430.63L539.39,431.46L539.36,432.15L537.59,432.64L536.16,433.78L534.14,436.87L531.5,438.18L528.79,438L528,438.26L528.28,439.25L526.81,440.24L525.62,441.34L522.09,442.41L521.39,441.78L520.93,441.72L520.41,442.44L518.09,442.66L518.53,441.89L517.65,439.96L517.25,438.79L516.03,438.31L514.38,436.66L514.99,435.33L516.27,435.61L517.06,435.41L518.62,435.44L517.1,432.87L517.2,430.98L517.01,429.09z" }),
                        _react2.default.createElement("path", { id: "TF", title: "French Southern and Antarctic Lands", fill: mapColors[152].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[152].raw, this.IDDict["TF"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M668.54,619.03L670.34,620.36L672.99,620.9L673.09,621.71L672.31,623.67L668,623.95L667.93,621.66L668.35,619.9z" }),
                        _react2.default.createElement("path", { id: "TG", title: "Togo", fill: mapColors[153].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[153].raw, this.IDDict["TG"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M480.48,446.25L478.23,446.84L477.6,445.86L476.85,444.08L476.63,442.68L477.25,440.15L476.55,439.12L476.28,436.9L476.28,434.85L475.11,433.39L475.32,432.5L477.78,432.56L477.42,434.06L478.27,434.89L479.25,435.88L479.35,437.27L479.92,437.85L479.79,444.31z" }),
                        _react2.default.createElement("path", { id: "TH", title: "Thailand", fill: mapColors[154].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[154].raw, this.IDDict["TH"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M762.89,429.18L760.37,427.87L757.97,427.93L758.38,425.68L755.91,425.7L755.69,428.84L754.18,432.99L753.27,435.49L753.46,437.54L755.28,437.63L756.42,440.2L756.93,442.63L758.49,444.24L760.19,444.57L761.64,446.02L760.73,447.17L758.87,447.51L758.65,446.07L756.37,444.84L755.88,445.34L754.77,444.27L754.29,442.88L752.8,441.29L751.44,439.96L750.98,441.61L750.45,440.05L750.76,438.29L751.58,435.58L752.94,432.67L754.48,430.02L753.38,427.42L753.43,426.09L753.11,424.49L751.24,422.21L750.57,420.76L751.54,420.23L752.56,417.71L751.42,415.79L749.64,413.66L748.28,411.09L749.46,410.56L750.74,407.37L752.72,407.23L754.36,405.95L755.96,405.26L757.18,406.18L757.34,407.96L759.23,408.09L758.54,411.2L758.61,413.82L761.56,412.08L762.4,412.59L764.05,412.51L764.61,411.49L766.73,411.69L768.86,414.07L769.04,416.94L771.31,419.47L771.18,421.91L770.27,423.21L767.64,422.8L764.02,423.35L762.22,425.73z" }),
                        _react2.default.createElement("path", { id: "TJ", title: "Tajikistan", fill: mapColors[155].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[155].raw, this.IDDict["TJ"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M674.37,340.62L673.34,341.75L670.29,341.14L670.02,343.24L673.06,342.96L676.53,344.13L681.83,343.58L682.54,346.91L683.46,346.55L685.16,347.36L685.07,348.74L685.49,350.75L682.59,350.75L680.66,350.49L678.92,352.06L677.67,352.4L676.69,353.14L675.58,351.99L675.85,349.04L675,348.87L675.3,347.78L673.79,346.98L672.58,348.21L672.28,349.64L671.85,350.16L670.17,350.09L669.27,351.69L668.32,351.02L666.29,352.14L665.44,351.72L667.01,348.15L666.41,345.49L664.35,344.63L665.08,343.04L667.42,343.21L668.75,341.2L669.64,338.85L673.39,337.99L672.81,339.7L673.21,340.72z" }),
                        _react2.default.createElement("path", { id: "TL", title: "Timor-Leste", fill: mapColors[156].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[156].raw, this.IDDict["TL"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M825.65,488.25L825.98,487.59L828.39,486.96L830.35,486.86L831.22,486.51L832.28,486.86L831.25,487.62L828.33,488.85L825.98,489.67L825.93,488.81z" }),
                        _react2.default.createElement("path", { id: "TM", title: "Turkmenistan", fill: mapColors[157].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[157].raw, this.IDDict["TM"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M646.88,356.9L646.63,353.99L644.54,353.87L641.34,350.78L639.1,350.39L636,348.6L634,348.27L632.77,348.93L630.9,348.83L628.91,350.85L626.44,351.53L625.92,349.04L626.33,345.31L624.14,344.09L624.86,341.61L623,341.39L623.62,338.3L626.26,339.21L628.73,338.02L626.68,335.79L625.88,333.65L623.62,334.61L623.34,337.34L622.46,334.93L623.7,333.68L626.88,332.89L628.78,333.95L630.74,336.88L632.18,336.7L635.34,336.65L634.88,334.77L637.28,333.47L639.64,331.27L643.42,333.27L643.72,336.26L644.79,337.03L647.82,336.86L648.76,337.53L650.14,341.32L653.35,343.83L655.18,345.52L658.11,347.27L661.84,348.79L661.76,350.95L660.92,350.84L659.59,349.9L659.15,351.15L656.79,351.83L656.23,354.62L654.65,355.67L652.44,356.19L651.85,357.74L649.74,358.2z" }),
                        _react2.default.createElement("path", { id: "TN", title: "Tunisia", fill: mapColors[158].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[158].raw, this.IDDict["TN"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M501.84,374.69L500.64,368.83L498.92,367.5L498.89,366.69L496.6,364.71L496.35,362.18L498.08,360.3L498.74,357.48L498.29,354.2L498.86,352.41L501.92,351L503.88,351.42L503.8,353.19L506.18,351.9L506.38,352.57L504.97,354.28L504.96,355.88L505.93,356.73L505.56,359.69L503.71,361.4L504.24,363.23L505.69,363.29L506.4,364.88L507.47,365.4L507.31,367.95L505.94,368.9L505.08,369.95L503.15,371.21L503.45,372.56L503.21,373.94z" }),
                        _react2.default.createElement("path", { id: "TR", title: "Turkey", fill: mapColors[159].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[159].raw, this.IDDict["TR"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M578.75,336.6l4.02,1.43l3.27,-0.57l2.41,0.33l3.31,-1.94l2.99,-0.18l2.7,1.83l0.48,1.3l-0.27,1.79l2.08,0.91l1.1,1.06l-1.92,1.03l0.88,4.11l-0.55,1.1l1.53,2.82l-1.34,0.59l-0.98,-0.89l-3.26,-0.45l-1.2,0.55l-3.19,0.54l-1.51,-0.06l-3.23,1.31l-2.31,0.01l-1.49,-0.66l-3.09,0.97l-0.92,-0.68l-0.15,1.94l-0.75,0.76l-0.75,0.76l-1.03,-1.57l1.06,-1.3l-1.71,0.3l-2.35,-0.8l-1.93,2l-4.26,0.39l-2.27,-1.86l-3.02,-0.12l-0.65,1.44l-1.94,0.41l-2.71,-1.85l-3.06,0.06l-1.66,-3.48l-2.05,-1.96l1.36,-2.78l-1.78,-1.72l3.11,-3.48l4.32,-0.15l1.18,-2.81l5.34,0.49l3.37,-2.42l3.27,-1.06l4.64,-0.08L578.75,336.6zM551.5,338.99l-2.34,1.98l-0.88,-1.71l0.04,-0.76l0.67,-0.41l0.87,-2.33l-1.37,-0.99l2.86,-1.18l2.41,0.5l0.33,1.44l2.45,1.2l-0.51,0.91l-3.33,0.2L551.5,338.99z" }),
                        _react2.default.createElement("path", { id: "TT", title: "Trinidad and Tobago", fill: mapColors[160].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[160].raw, this.IDDict["TT"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M302.31,433.24L303.92,432.87L304.51,432.97L304.4,435.08L302.06,435.39L301.55,435.14L302.37,434.36z" }),
                        _react2.default.createElement("path", { id: "TW", title: "Taiwan", fill: mapColors[161].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[161].raw, this.IDDict["TW"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M816.7,393.27L815.01,398.14L813.81,400.62L812.33,398.07L812.01,395.82L813.66,392.82L815.91,390.5L817.19,391.41z" }),
                        _react2.default.createElement("path", { id: "TZ", title: "Tanzania", fill: mapColors[162].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[162].raw, this.IDDict["TZ"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M570.31,466.03L570.79,466.34L580.95,472.01L581.15,473.63L585.17,476.42L583.88,479.87L584.04,481.46L585.84,482.48L585.92,483.21L585.15,484.91L585.31,485.76L585.13,487.11L586.11,488.87L587.27,491.66L588.29,492.28L586.06,493.92L583,495.02L581.32,494.98L580.32,495.83L578.37,495.9L577.63,496.26L574.26,495.46L572.15,495.69L571.37,491.83L570.42,490.51L569.85,489.73L567.11,489.21L565.51,488.36L563.73,487.89L562.61,487.41L561.44,486.7L559.93,483.15L558.3,481.58L557.74,479.96L558.02,478.5L557.52,475.93L558.68,475.8L559.69,474.79L560.79,473.33L561.48,472.75L561.45,471.84L560.85,471.21L560.69,470.11L561.49,469.76L561.66,468.12L560.54,466.55L561.53,466.21L564.6,466.25z" }),
                        _react2.default.createElement("path", { id: "UA", title: "Ukraine", fill: mapColors[163].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[163].raw, this.IDDict["UA"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M564.38,292.49L565.42,292.68L566.13,291.64L566.98,291.87L569.89,291.43L571.68,294L570.98,294.92L571.21,296.31L573.45,296.52L574.45,298.45L574.39,299.32L577.95,300.86L580.1,300.17L581.83,302.21L583.47,302.17L587.6,303.57L587.63,304.84L586.5,307.07L587.11,309.4L586.67,310.79L583.96,311.1L582.52,312.26L582.43,314.09L580.19,314.42L578.32,315.74L575.7,315.95L573.28,317.47L571.96,318.5L573.45,319.97L574.82,320.93L577.68,320.69L577.13,322.11L574.06,322.79L570.25,325.06L568.7,324.27L569.31,322.42L566.25,321.26L566.75,320.49L569.91,318.86L569.51,318.05L569.06,318.46L568.62,318.24L564.26,317.22L564.07,315.71L561.47,316.21L560.43,318.44L558.26,321.39L556.98,320.71L555.67,321.35L554.42,320.62L555.12,320.18L555.61,318.81L556.38,317.52L556.18,316.8L556.77,316.48L557.04,317.04L558.7,317.15L559.44,316.86L558.92,316.44L559.11,315.84L558.13,314.8L557.73,313.08L556.71,312.41L556.91,311L555.64,309.88L554.49,309.72L552.42,308.41L550.56,308.83L549.89,309.45L548.71,309.44L548,310.42L545.93,310.82L544.98,311.46L543.67,310.45L541.88,310.43L540.14,309.97L538.93,310.86L538.73,309.74L537.18,308.6L537.73,306.89L538.5,305.79L539.12,306.03L538.39,304.11L540.94,300.5L542.33,299.99L542.63,298.75L541.22,294.86L542.56,294.69L544.1,293.46L546.27,293.36L549.1,293.72L552.23,294.8L554.44,294.89L555.49,295.54L556.54,294.76L557.28,295.81L559.81,295.59L560.92,296.02L561.11,293.76L561.97,292.76z" }),
                        _react2.default.createElement("path", { id: "UG", title: "Uganda", fill: mapColors[164].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[164].raw, this.IDDict["UG"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M564.6,466.25L561.53,466.21L560.54,466.55L558.87,467.41L558.19,467.12L558.21,465.02L558.86,463.96L559.02,461.72L559.61,460.43L560.68,458.97L561.76,458.23L562.66,457.24L561.54,456.87L561.71,453.61L562.86,452.84L564.64,453.47L566.9,452.82L568.87,452.82L570.6,451.54L571.93,453.48L572.26,454.88L573.49,458.08L572.47,460.11L571.09,461.95L570.29,463.08L570.31,466.03z" }),
                        _react2.default.createElement("path", { id: "US", title: "United States", fill: mapColors[165].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[165].raw, this.IDDict["US"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M109.25,279.8L109.25,279.8l-1.54,-1.83l-2.47,-1.57l-0.79,-4.36l-3.61,-4.13l-1.51,-4.94l-2.69,-0.34l-4.46,-0.13l-3.29,-1.54l-5.8,-5.64l-2.68,-1.05l-4.9,-1.99l-3.88,0.48l-5.51,-2.59l-3.33,-2.43l-3.11,1.21l0.58,3.93l-1.55,0.36l-3.24,1.16l-2.47,1.86l-3.11,1.16l-0.4,-3.24l1.26,-5.53l2.98,-1.77l-0.77,-1.46l-3.57,3.22l-1.91,3.77l-4.04,3.95l2.05,2.65l-2.65,3.85l-3.01,2.21l-2.81,1.59l-0.69,2.29l-4.38,2.63l-0.89,2.36l-3.28,2.13l-1.92,-0.38l-2.62,1.38l-2.85,1.67l-2.33,1.63l-4.81,1.38l-0.44,-0.81l3.07,-2.27l2.74,-1.51l2.99,-2.71l3.48,-0.56l1.38,-2.06l3.89,-3.05l0.63,-1.03l2.07,-1.83l0.48,-4l1.43,-3.17l-3.23,1.64l-0.9,-0.93l-1.52,1.95l-1.83,-2.73l-0.76,1.94l-1.05,-2.7l-2.8,2.17l-1.72,0l-0.24,-3.23l0.51,-2.02l-1.81,-1.98l-3.65,1.07l-2.37,-2.63l-1.92,-1.36l-0.01,-3.25l-2.16,-2.48l1.08,-3.41l2.29,-3.37l1,-3.15l2.27,-0.45l1.92,0.99l2.26,-3.01l2.04,0.54l2.14,-1.96l-0.52,-2.92l-1.57,-1.16l2.08,-2.52l-1.72,0.07l-2.98,1.43l-0.85,1.43l-2.21,-1.43l-3.97,0.73l-4.11,-1.56l-1.18,-2.65l-3.55,-3.91l3.94,-2.87l6.25,-3.41h2.31l-0.38,3.48l5.92,-0.27l-2.28,-4.34l-3.45,-2.72l-1.99,-3.64l-2.69,-3.17l-3.85,-2.38l1.57,-4.03l4.97,-0.25l3.54,-3.58l0.67,-3.92l2.86,-3.91l2.73,-0.95l5.31,-3.76l2.58,0.57l4.31,-4.61l4.24,1.83l2.03,3.87l1.25,-1.65l4.74,0.51l-0.17,1.95l4.29,1.43l2.86,-0.84l5.91,2.64l5.39,0.78l2.16,1.07l3.73,-1.34l4.25,2.46l3.05,1.13l-0.02,27.65l-0.01,35.43l2.76,0.17l2.73,1.56l1.96,2.44l2.49,3.6l2.73,-3.05l2.81,-1.79l1.49,2.85l1.89,2.23l2.57,2.42l1.75,3.79l2.87,5.88l4.77,3.2l0.08,3.12L109.25,279.8zM285.18,314.23l-1.25,-1.19l-1.88,0.7l-0.93,-1.08l-2.14,3.1l-0.86,3.15l-1,1.82l-1.19,0.62l-0.9,0.2l-0.28,0.98l-5.17,0l-4.26,0.03l-1.27,0.73l-2.87,2.73l0.29,0.54l0.17,1.51l-2.1,1.27l-2.3,-0.32l-2.2,-0.14l-1.33,0.44l0.25,1.15l0,0l0.05,0.37l-2.42,2.27l-2.11,1.09l-1.44,0.51l-1.66,1.03l-2.03,0.5l-1.4,-0.19l-1.73,-0.77l0.96,-1.45l0.62,-1.32l1.32,-2.09l-0.14,-1.57l-0.5,-2.24l-1.04,-0.39l-1.74,1.7l-0.56,-0.03l-0.14,-0.97l1.54,-1.56l0.26,-1.79l-0.23,-1.79l-2.08,-1.55l-2.38,-0.8l-0.39,1.52l-0.62,0.4l-0.5,1.95l-0.26,-1.33l-1.12,0.95l-0.7,1.32l-0.73,1.92l-0.14,1.64l0.93,2.38l-0.08,2.51l-1.14,1.84l-0.57,0.52l-0.76,0.41l-0.95,0.02l-0.26,-0.25l-0.76,-1.98l-0.02,-0.98l0.08,-0.94l-0.35,-1.87l0.53,-2.18l0.63,-2.71l1.46,-3.03l-0.42,0.01l-2.06,2.54l-0.38,-0.46l1.1,-1.42l1.67,-2.57l1.91,-0.36l2.19,-0.8l2.21,0.42l0.09,0.02l2.47,-0.36l-1.4,-1.61l-0.75,-0.13l-0.86,-0.16l-0.59,-1.14l-2.75,0.36l-2.49,0.9l-1.97,-1.55l-1.59,-0.52l0.9,-2.17l-2.48,1.37l-2.25,1.33l-2.16,1.04l-1.72,-1.4l-2.81,0.85l0.01,-0.6l1.9,-1.73l1.99,-1.65l2.86,-1.37l-3.45,-1.09l-2.27,0.55l-2.72,-1.3l-2.86,-0.67l-1.96,-0.26l-0.87,-0.72l-0.5,-2.35l-0.95,0.02l-0.01,1.64l-5.8,0l-9.59,0l-9.53,0l-8.42,0h-8.41h-8.27h-8.55h-2.76h-8.32h-7.96l0.95,3.47l0.45,3.41l-0.69,1.09l-1.49,-3.91l-4.05,-1.42l-0.34,0.82l0.82,1.94l0.89,3.53l0.51,5.42l-0.34,3.59l-0.34,3.54l-1.1,3.61l0.9,2.9l0.1,3.2l-0.61,3.05l1.49,1.99l0.39,2.95l2.17,2.99l1.24,1.17l-0.1,0.82l2.34,4.85l2.72,3.45l0.34,1.87l0.71,0.55l2.6,0.33l1,0.91l1.57,0.17l0.31,0.96l1.31,0.4l1.82,1.92l0.47,1.7l3.19,-0.25l3.56,-0.36l-0.26,0.65l4.23,1.6l6.4,2.31l5.58,-0.02l2.22,0l0.01,-1.35l4.86,0l1.02,1.16l1.43,1.03l1.67,1.43l0.93,1.69l0.7,1.77l1.45,0.97l2.33,0.96l1.77,-2.53l2.29,-0.06l1.98,1.28l1.41,2.18l0.97,1.86l1.65,1.8l0.62,2.19l0.79,1.47l2.19,0.96l1.99,0.68l1.09,-0.09l-0.53,-1.06l-0.14,-1.5l0.03,-2.16l0.65,-1.42l1.53,-1.51l2.79,-1.37l2.55,-2.37l2.36,-0.75l1.74,-0.23l2.04,0.74l2.45,-0.4l2.09,1.69l2.03,0.1l1.05,-0.61l1.04,0.47l0.53,-0.42l-0.6,-0.63l0.05,-1.3l-0.5,-0.86l1.16,-0.5l2.14,-0.22l2.49,0.36l3.17,-0.41l1.76,0.8l1.36,1.5l0.5,0.16l2.83,-1.46l1.09,0.49l2.19,2.68l0.79,1.75l-0.58,2.1l0.42,1.23l1.3,2.4l1.49,2.68l1.07,0.71l0.44,1.35l1.38,0.37l0.84,-0.39l0.7,-1.89l0.12,-1.21l0.09,-2.1l-1.33,-3.65l-0.02,-1.37l-1.25,-2.25l-0.94,-2.75l-0.5,-2.25l0.43,-2.31l1.32,-1.94l1.58,-1.57l3.08,-2.16l0.4,-1.12l1.42,-1.23l1.4,-0.22l1.84,-1.98l2.9,-1.01l1.78,-2.53l-0.39,-3.46l-0.29,-1.21l-0.8,-0.24l-0.12,-3.35l-1.93,-1.14l1.85,0.56l-0.6,-2.26l0.54,-1.55l0.33,2.97l1.43,1.36l-0.87,2.4l0.26,0.14l1.58,-2.81l0.9,-1.38l-0.04,-1.35l-0.7,-0.64l-0.58,-1.94l0.92,0.9l0.62,0.19l0.21,0.92l2.04,-2.78l0.61,-2.62l-0.83,-0.17l0.85,-1.02l-0.08,0.45l1.79,-0.01l3.93,-1.11l-0.83,-0.7l-4.12,0.7l2.34,-1.07l1.63,-0.18l1.22,-0.19l2.07,-0.65l1.35,0.07l1.89,-0.61l0.22,-1.07l-0.84,-0.84l0.29,1.37l-1.16,-0.09l-0.93,-1.99l0.03,-2.01l0.48,-0.86l1.48,-2.28l2.96,-1.15l2.88,-1.34l2.99,-1.9l-0.48,-1.29l-1.83,-2.25L285.18,314.23zM45.62,263.79l-1.5,0.8l-2.55,1.86l0.43,2.42l1.43,1.32l2.8,-1.95l2.43,-2.47l-1.19,-1.63L45.62,263.79zM0,235.22l2.04,-1.26l0.23,-0.68L0,232.61V235.22zM8.5,250.59l-2.77,0.97l1.7,1.52l1.84,1.04l1.72,-0.87l-0.27,-2.15L8.5,250.59zM105.85,283.09l-2.69,0.38l-1.32,-0.62l-0.17,1.52l0.52,2.07l1.42,1.46l1.04,2.13l1.69,2.1l1.12,0.01l-2.44,-3.7L105.85,283.09zM37.13,403.77l-1,-0.28l-0.27,0.26l0.02,0.19l0.32,0.24l0.48,0.63l0.94,-0.21l0.23,-0.36L37.13,403.77zM34.14,403.23l1.5,0.09l0.09,-0.32l-1.38,-0.13L34.14,403.23zM40.03,406.52l-0.5,-0.26l-1.07,-0.5l-0.21,-0.06l-0.16,0.28l0.19,0.58l-0.49,0.48l-0.14,0.33l0.46,1.08l-0.08,0.83l0.7,0.42l0.41,-0.49l0.9,-0.46l1.1,-0.63l0.07,-0.16l-0.71,-1.04L40.03,406.52zM32.17,401.38l-0.75,0.41l0.11,0.12l0.36,0.68l0.98,0.11l0.2,0.04l0.15,-0.17l-0.81,-0.99L32.17,401.38zM27.77,399.82l-0.43,0.3l-0.15,0.22l0.94,0.55l0.33,-0.3l-0.06,-0.7L27.77,399.82z" }),
                        _react2.default.createElement("path", { id: "UY", title: "Uruguay", fill: mapColors[166].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[166].raw, this.IDDict["UY"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M313.68,551.79L315.5,551.45L318.31,553.95L319.35,553.86L322.24,555.94L324.44,557.76L326.06,560.01L324.82,561.58L325.6,563.48L324.39,565.6L321.22,567.48L319.15,566.8L317.63,567.17L315.04,565.71L313.14,565.82L311.43,563.95L311.65,561.79L312.26,561.05L312.23,557.75L312.98,554.38z" }),
                        _react2.default.createElement("path", { id: "UZ", title: "Uzbekistan", fill: mapColors[167].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[167].raw, this.IDDict["UZ"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M661.76,350.95L661.84,348.79L658.11,347.27L655.18,345.52L653.35,343.83L650.14,341.32L648.76,337.53L647.82,336.86L644.79,337.03L643.72,336.26L643.42,333.27L639.64,331.27L637.28,333.47L634.88,334.77L635.34,336.65L632.18,336.7L632.07,322.57L639.29,320.22L639.81,320.57L644.16,323.41L646.45,324.89L649.13,328.39L652.42,327.83L657.23,327.53L660.58,330.33L660.37,334.13L661.74,334.16L662.31,337.22L665.88,337.34L666.64,339.09L667.69,339.07L668.92,336.42L672.61,333.81L674.22,333.11L675.05,333.48L672.7,335.91L674.77,337.31L676.77,336.38L680.09,338.34L676.5,340.98L674.37,340.62L673.21,340.72L672.81,339.7L673.39,337.99L669.64,338.85L668.75,341.2L667.42,343.21L665.08,343.04L664.35,344.63L666.41,345.49L667.01,348.15L665.44,351.72L663.32,350.98z" }),
                        _react2.default.createElement("path", { id: "VE", title: "Venezuela", fill: mapColors[168].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[168].raw, this.IDDict["VE"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M275.25,430.35L275.17,431.02L273.52,431.35L274.44,432.64L274.4,434.13L273.17,435.77L274.23,438.01L275.44,437.83L276.07,435.79L275.2,434.79L275.06,432.65L278.55,431.49L278.16,430.15L279.14,429.25L280.15,431.25L282.12,431.3L283.94,432.88L284.05,433.82L286.56,433.84L289.56,433.55L291.17,434.82L293.31,435.17L294.88,434.29L294.91,433.57L298.39,433.4L301.75,433.36L299.37,434.2L300.32,435.54L302.57,435.75L304.69,437.14L305.14,439.4L306.6,439.33L307.7,440L305.48,441.65L305.23,442.68L306.19,443.72L305.5,444.24L303.77,444.69L303.83,445.99L303.07,446.76L304.96,448.88L305.34,449.67L304.31,450.74L301.17,451.78L299.16,452.22L298.35,452.88L296.12,452.18L294.04,451.82L293.52,452.08L294.77,452.8L294.66,454.67L295.05,456.43L297.42,456.67L297.58,457.25L295.57,458.05L295.25,459.23L294.09,459.68L292.01,460.33L291.47,461.19L289.29,461.37L287.74,459.89L286.89,457.12L286.14,456.14L285.12,455.53L286.54,454.14L286.45,453.51L285.65,452.68L285.09,450.83L285.31,448.82L285.93,447.88L286.44,446.38L285.45,445.89L283.85,446.21L281.83,446.06L280.7,446.36L278.72,443.95L277.09,443.59L273.49,443.86L272.82,442.88L272.13,442.65L272.03,442.06L272.36,441.02L272.14,439.89L271.52,439.27L271.16,437.97L269.72,437.79L270.49,436.13L270.84,434.12L271.65,433.06L272.74,432.25L273.45,430.83z" }),
                        _react2.default.createElement("path", { id: "VN", title: "Vietnam", fill: mapColors[169].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[169].raw, this.IDDict["VN"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M778.21,401.87L774.47,404.43L772.13,407.24L771.51,409.29L773.66,412.38L776.28,416.2L778.82,417.99L780.53,420.32L781.81,425.64L781.43,430.66L779.1,432.53L775.88,434.36L773.6,436.72L770.1,439.34L769.08,437.53L769.87,435.62L767.79,434.01L770.22,432.87L773.16,432.67L771.93,430.94L776.64,428.75L776.99,425.33L776.34,423.41L776.85,420.53L776.14,418.49L774.02,416.47L772.25,413.9L769.92,410.44L766.56,408.68L767.37,407.61L769.16,406.84L768.07,404.25L764.62,404.22L763.36,401.5L761.72,399.13L763.23,398.39L765.46,398.41L768.19,398.06L770.58,396.44L771.93,397.58L774.5,398.13L774.05,399.87L775.39,401.09z" }),
                        _react2.default.createElement("path", { id: "VU", title: "Vanuatu", fill: mapColors[170].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[170].raw, this.IDDict["VU"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M945.87,509.9l-0.92,0.38l-0.94,-1.27l0.1,-0.78L945.87,509.9zM943.8,505.46l0.46,2.33l-0.75,-0.36l-0.58,0.16l-0.4,-0.8l-0.06,-2.21L943.8,505.46z" }),
                        _react2.default.createElement("path", { id: "XK", title: "Kosovo", fill: mapColors[171].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[171].raw, this.IDDict["XK"]), onMouseOut: this.props.deactivateTooltip.bind(this),
                            d: "M533.47,333.92L533.34,334.69L532.98,334.66L532.8,333.29L532.13,332.91L531.53,331.89L532.05,331.04L532.72,330.76L533.11,329.5L533.61,329.28L534.01,329.82L534.54,330.06L534.9,330.67L535.36,330.85L535.91,331.55L536.31,331.53L535.99,332.46L535.66,332.91L535.75,333.19L535.12,333.33z" }),
                        _react2.default.createElement("path", { id: "YE", title: "Yemen", fill: mapColors[172].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[172].raw, this.IDDict["YE"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M624.16,416.33L622.13,417.12L621.59,418.4L621.52,419.39L618.73,420.61L614.25,421.96L611.74,423.99L610.51,424.14L609.67,423.97L608.03,425.17L606.24,425.72L603.89,425.87L603.18,426.03L602.57,426.78L601.83,426.99L601.4,427.72L600.01,427.66L599.11,428.04L597.17,427.9L596.44,426.23L596.52,424.66L596.07,423.81L595.52,421.69L594.71,420.5L595.27,420.36L594.98,419.04L595.32,418.48L595.2,417.22L596.43,416.29L596.14,415.06L596.89,413.63L598.04,414.39L598.8,414.12L602.03,414.05L602.55,414.35L605.26,414.64L606.33,414.49L607.03,415.46L608.34,414.98L610.35,411.91L612.97,410.59L621.05,409.46L623.25,414.3z" }),
                        _react2.default.createElement("path", { id: "ZA", title: "South Africa", fill: mapColors[173].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[173].raw, this.IDDict["ZA"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M563.63,548.71l-0.55,0.46l-1.19,1.63l-0.78,1.66l-1.59,2.33l-3.17,3.38l-1.98,1.98l-2.12,1.51l-2.93,1.3l-1.43,0.17l-0.36,0.93l-1.7,-0.5l-1.39,0.64l-3.04,-0.65l-1.7,0.41l-1.16,-0.18l-2.89,1.33l-2.39,0.54l-1.73,1.28l-1.28,0.08l-1.19,-1.21l-0.95,-0.06l-1.21,-1.51l-0.13,0.47l-0.37,-0.91l0.02,-1.96l-0.91,-2.23l0.9,-0.6l-0.07,-2.53l-1.84,-3.05l-1.41,-2.74l0,-0.01l-2.01,-4.15l1.34,-1.57l1.11,0.87l0.47,1.36l1.26,0.23l1.76,0.6l1.51,-0.23l2.5,-1.63l0,-11.52l0.76,0.46l1.66,2.93l-0.26,1.89l0.63,1.1l2.01,-0.32l1.4,-1.39l1.33,-0.93l0.69,-1.48l1.37,-0.72l1.18,0.38l1.34,0.87l2.28,0.15l1.79,-0.72l0.28,-0.96l0.49,-1.47l1.53,-0.25l0.84,-1.15l0.93,-2.03l2.52,-2.26l3.97,-2.22l1.14,0.03l1.36,0.51l0.94,-0.36l1.49,0.3l1.34,4.26l0.73,2.17l-0.5,3.43l0.24,1.11l-1.42,-0.57l-0.81,0.22l-0.26,0.9l-0.77,1.17l0.03,1.08l1.67,1.7l1.64,-0.34l0.57,-1.39l2.13,0.03l-0.7,2.28l-0.33,2.62l-0.73,1.43L563.63,548.71zM556.5,547.75l-1.22,-0.98l-1.31,0.65l-1.52,1.25l-1.5,2.03l2.1,2.48l1,-0.32l0.52,-1.03l1.56,-0.5l0.48,-1.05l0.86,-1.56L556.5,547.75z" }),
                        _react2.default.createElement("path", { id: "ZM", title: "Zambia", fill: mapColors[174].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[174].raw, this.IDDict["ZM"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M567.11,489.21L568.43,490.47L569.14,492.87L568.66,493.64L568.1,495.94L568.64,498.3L567.76,499.29L566.91,501.95L568.38,502.69L559.87,505.07L560.14,507.12L558.01,507.52L556.42,508.67L556.08,509.68L555.07,509.9L552.63,512.3L551.08,514.19L550.13,514.26L549.22,513.92L546.09,513.6L545.59,513.38L545.56,513.14L544.46,512.48L542.64,512.31L540.34,512.98L538.51,511.16L536.62,508.78L536.75,499.62L542.59,499.66L542.35,498.67L542.77,497.6L542.28,496.27L542.6,494.89L542.3,494.01L543.27,494.08L543.43,494.96L544.74,494.89L546.52,495.15L547.46,496.44L549.7,496.84L551.42,495.94L552.05,497.43L554.2,497.83L555.23,499.05L556.38,500.62L558.53,500.65L558.29,497.57L557.52,498.08L555.56,496.98L554.8,496.47L555.15,493.62L555.65,490.27L555.02,489.02L555.82,487.22L556.57,486.89L560.34,486.41L561.44,486.7L562.61,487.41L563.73,487.89L565.51,488.36z" }),
                        _react2.default.createElement("path", { id: "ZW", title: "Zimbabwe", fill: mapColors[175].color, onMouseOver: this.props.activateTooltip.bind(this, mapColors[175].raw, this.IDDict["ZW"]), onMouseOut: this.props.deactivateTooltip.bind(this), d: "M562.71,527L561.22,526.7L560.27,527.06L558.92,526.55L557.78,526.52L555.99,525.16L553.82,524.7L553,522.8L552.99,521.75L551.79,521.43L548.62,518.18L547.73,516.47L547.17,515.95L546.09,513.6L549.22,513.92L550.13,514.26L551.08,514.19L552.63,512.3L555.07,509.9L556.08,509.68L556.42,508.67L558.01,507.52L560.14,507.12L560.32,508.2L562.66,508.14L563.96,508.75L564.56,509.47L565.9,509.68L567.35,510.62L567.36,514.31L566.81,516.35L566.69,518.55L567.14,519.43L566.83,521.17L566.4,521.44L565.66,523.59z" }),
                        legend
                    )
                )
            );
        }
    }]);

    return World;
}(_react2.default.Component);

exports.default = World;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Core"] = factory(require("react"));
	else
		root["Core"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(27)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(26)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}



exports.__esModule = true;
exports['default'] = stripStyle;

function stripStyle(style) {
  var ret = {};
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }
    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
  }
  return ret;
}

module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var React = __webpack_require__(1);
var factory = __webpack_require__(21);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(6);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(28)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// currently used to initiate the velocity style object to 0


exports.__esModule = true;
exports['default'] = mapToZero;

function mapToZero(obj) {
  var ret = {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      ret[key] = 0;
    }
  }
  return ret;
}

module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// usage assumption: currentStyle values have already been rendered but it says
// nothing of whether currentStyle is stale (see unreadPropStyle)


exports.__esModule = true;
exports['default'] = shouldStopAnimation;

function shouldStopAnimation(currentStyle, style, currentVelocity) {
  for (var key in style) {
    if (!Object.prototype.hasOwnProperty.call(style, key)) {
      continue;
    }

    if (currentVelocity[key] !== 0) {
      return false;
    }

    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
    // stepper will have already taken care of rounding precision errors, so
    // won't have such thing as 0.9999 !=== 1
    if (currentStyle[key] !== styleValue) {
      return false;
    }
  }

  return true;
}

module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// stepper is used a lot. Saves allocation to return the same array wrapper.
// This is fine and danger-free against mutations because the callsite
// immediately destructures it and gets the numbers inside without passing the


exports.__esModule = true;
exports["default"] = stepper;

var reusedTuple = [0, 0];

function stepper(secondPerFrame, x, v, destX, k, b, precision) {
  // Spring stiffness, in kg / s^2

  // for animations, destX is really spring length (spring at rest). initial
  // position is considered as the stretched/compressed position of a spring
  var Fspring = -k * (x - destX);

  // Damping, in kg / s
  var Fdamper = -b * v;

  // usually we put mass here, but for animation purposes, specifying mass is a
  // bit redundant. you could simply adjust k and b accordingly
  // let a = (Fspring + Fdamper) / mass;
  var a = Fspring + Fdamper;

  var newV = v + a * secondPerFrame;
  var newX = x + newV * secondPerFrame;

  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
    reusedTuple[0] = destX;
    reusedTuple[1] = 0;
    return reusedTuple;
  }

  reusedTuple[0] = newX;
  reusedTuple[1] = newV;
  return reusedTuple;
}

module.exports = exports["default"];
// array reference around.

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Legend = function (_React$Component) {
  _inherits(Legend, _React$Component);

  function Legend() {
    _classCallCheck(this, Legend);

    return _possibleConstructorReturn(this, (Legend.__proto__ || Object.getPrototypeOf(Legend)).apply(this, arguments));
  }

  _createClass(Legend, [{
    key: "render",
    value: function render() {
      if (Object.keys(this.props.values).length === 0 || !this.props.showLegend) {
        return null;
      } else {
        var titles = Object.keys(this.props.values).sort();
        var longest = Object.keys(this.props.values).sort(function (a, b) {
          return b.length - a.length;
        })[0];
        var items = [];
        var size = 16;
        var buffer = { x: 5, y: 4 };
        if (this.props.mode === "flat") {
          var numColumns = Math.min(titles.length, Math.floor((this.props.width - buffer.x) / (size * 2 + longest.length * size / 2)));
          var numRows = Math.ceil(titles.length / numColumns);

          for (var i = 0; i < titles.length; i++) {
            var title = titles[i];
            if (title) {
              var x = buffer.x + i % numColumns * ((this.props.width - buffer.x - (size * 2 + longest.length * size / 2)) / (numColumns - 1 <= 0 ? 1 : numColumns - 1));
              var y = buffer.y + Math.floor(i / numColumns) * 1.5 * size;
              items.push(_react2.default.createElement(
                "g",
                { key: title },
                _react2.default.createElement("rect", { x: x, y: y, width: size, height: size,
                  fill: this.props.values[title] }),
                _react2.default.createElement(
                  "text",
                  { x: x + 1.5 * size, y: y + size / 1.7,
                    alignmentBaseline: "middle", fontSize: size,
                    fill: this.props.fontColor, fontFamily: this.props.fontFamily },
                  title
                )
              ));
            }
          }

          return _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("rect", { x: 0, y: 0, width: this.props.width <= 0 ? 0 : this.props.width,
              height: numRows * size * 1.5 <= 0 ? 0 : numRows * size * 1.5, fill: this.props.backgroundColor,
              stroke: this.props.showBorder ? this.props.borderColor : "none",
              strokeWidth: 2 }),
            items
          );
        } else if (this.props.mode === "stack") {

          for (var _i = 0; _i < titles.length; _i++) {
            var _title = titles[_i];
            if (_title) {
              var _x = buffer.x;
              var _y = void 0;
              if (this.props.height) {
                _y = buffer.y + _i * ((this.props.height - size * 1.5) / (titles.length - 1));
              } else {
                _y = buffer.y + _i * size * 1.5;
              }
              items.push(_react2.default.createElement(
                "g",
                { key: _title },
                _react2.default.createElement("rect", { x: _x, y: _y, width: size, height: size,
                  fill: this.props.values[_title] }),
                _react2.default.createElement(
                  "text",
                  { x: _x + 1.5 * size, y: _y + size / 1.7,
                    alignmentBaseline: "middle", fontSize: size,
                    fill: this.props.fontColor, fontFamily: this.props.fontFamily },
                  _title
                )
              ));
            }
          }
          return _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement("rect", { x: 0, y: 0, width: size * 2 + longest.length * size / 2 <= 0 ? 0 : size * 2 + longest.length * size / 2,
              height: this.props.height ? this.props.height : titles.length * size * 1.5,
              fill: this.props.backgroundColor, strokeWidth: 2,
              stroke: this.props.showBorder ? this.props.borderColor : "none" }),
            items
          );
        }
      }
    }
  }]);

  return Legend;
}(_react2.default.Component);

Legend.defaultProps = {
  width: 500,
  mode: "flat",
  showLegend: true,
  fontColor: "#000000",
  backgroundColor: "none",
  showBorder: true,
  borderColor: "#000000"
};

Legend.propTypes = {
  values: _propTypes2.default.object.isRequired,
  width: _propTypes2.default.number,
  mode: _propTypes2.default.string,
  showLegend: _propTypes2.default.bool,
  fontColor: _propTypes2.default.string,
  backgroundColor: _propTypes2.default.string,
  showBorder: _propTypes2.default.bool,
  borderColor: _propTypes2.default.string
};

exports.default = Legend;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactMotion = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingIcon = function (_React$Component) {
  _inherits(LoadingIcon, _React$Component);

  function LoadingIcon() {
    _classCallCheck(this, LoadingIcon);

    return _possibleConstructorReturn(this, (LoadingIcon.__proto__ || Object.getPrototypeOf(LoadingIcon)).apply(this, arguments));
  }

  _createClass(LoadingIcon, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = {
        color: this.props.color,
        x1: 1.8 * (this.props.width / 15),
        x2: 7.5 * (this.props.width / 15),
        x3: 13.2 * (this.props.width / 15),
        y: 1.8 * (this.props.width / 15),
        r: this.props.width / 30
      };

      return _react2.default.createElement(
        _reactMotion.StaggeredMotion,
        {
          defaultStyles: [{ r: style.r }, { r: style.r }, { r: style.r }],
          styles: function styles(prevInterpolatedStyles) {
            return prevInterpolatedStyles.map(function (_, i) {
              return i === 0 ? { r: (0, _reactMotion.spring)(2 * style.r, { stiffness: 25, damping: 0 }) } : { r: (0, _reactMotion.spring)(prevInterpolatedStyles[i - 1].r) };
            });
          } },
        function (interpolatingStyles) {
          return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "svg",
              { width: _this2.props.width, height: _this2.props.width / (15 / 3.6) },
              interpolatingStyles.map(function (newStyle, i) {
                return _react2.default.createElement("circle", { key: i, cx: style["x" + (i + 1)], cy: style.y, r: newStyle.r > 0 ? newStyle.r : 0, fill: style.color });
              })
            )
          );
        }
      );
    }
  }]);

  return LoadingIcon;
}(_react2.default.Component);

LoadingIcon.defaultProps = {
  width: 100,
  color: "#000000"
};

exports.default = LoadingIcon;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = {
  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
  gentle: { stiffness: 120, damping: 14 },
  wobbly: { stiffness: 180, damping: 12 },
  stiff: { stiffness: 210, damping: 20 }
};
module.exports = exports["default"];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _humanizePlus = __webpack_require__(23);

var _humanizePlus2 = _interopRequireDefault(_humanizePlus);

var _Legend = __webpack_require__(14);

var _Legend2 = _interopRequireDefault(_Legend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = function (_React$Component) {
  _inherits(Line, _React$Component);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
  }

  _createClass(Line, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "g",
        null,
        _react2.default.createElement("line", {
          x1: this.props.x1,
          y1: this.props.y1,
          x2: this.props.x2,
          y2: this.props.y2,
          stroke: this.props.stroke,
          strokeWidth: this.props.strokeWidth,
          opacity: this.props.opacity })
      );
    }
  }]);

  return Line;
}(_react2.default.Component);

Line.defaultProps = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  stroke: "rgb(0,0,0)",
  strokeWidth: 2,
  opacity: 1
};

var YTickLabel = function (_React$Component2) {
  _inherits(YTickLabel, _React$Component2);

  function YTickLabel() {
    _classCallCheck(this, YTickLabel);

    return _possibleConstructorReturn(this, (YTickLabel.__proto__ || Object.getPrototypeOf(YTickLabel)).apply(this, arguments));
  }

  _createClass(YTickLabel, [{
    key: "render",
    value: function render() {
      var printVal = void 0;
      if (this.props.value < 1 && this.props.value > -1) {
        printVal = +this.props.value.toFixed(3);
      } else if (this.props.value < 1000 && this.props.value > -1000) {
        printVal = +this.props.value.toFixed(1);
      } else {
        printVal = _humanizePlus2.default.compactInteger(this.props.value, 1);
      }

      return _react2.default.createElement(
        "g",
        null,
        _react2.default.createElement(
          "text",
          { x: this.props.x, y: this.props.y + 5,
            fontSize: 15, fill: this.props.color, textAnchor: "end" },
          printVal
        )
      );
    }
  }]);

  return YTickLabel;
}(_react2.default.Component);

var YStep = function (_React$Component3) {
  _inherits(YStep, _React$Component3);

  function YStep() {
    _classCallCheck(this, YStep);

    return _possibleConstructorReturn(this, (YStep.__proto__ || Object.getPrototypeOf(YStep)).apply(this, arguments));
  }

  _createClass(YStep, [{
    key: "render",
    value: function render() {
      var step = [];

      step.push(_react2.default.createElement(Line, { key: "tick" + this.props.y,
        x1: this.props.x, y1: this.props.y,
        x2: this.props.x - this.props.length, y2: this.props.y,
        stroke: this.props.color }));
      step.push(_react2.default.createElement(YTickLabel, { key: "label" + this.props.y, x: this.props.x - 10, y: this.props.y,
        value: this.props.value, color: this.props.color }));

      return _react2.default.createElement(
        "g",
        null,
        step
      );
    }
  }]);

  return YStep;
}(_react2.default.Component);

var YAxis = function (_React$Component4) {
  _inherits(YAxis, _React$Component4);

  function YAxis() {
    _classCallCheck(this, YAxis);

    return _possibleConstructorReturn(this, (YAxis.__proto__ || Object.getPrototypeOf(YAxis)).apply(this, arguments));
  }

  _createClass(YAxis, [{
    key: "render",
    value: function render() {
      var yAxis = [];

      if (this.props.showYAxisLine) {
        yAxis.push(_react2.default.createElement(Line, { key: "yAxisLine", x1: this.props.x, y1: this.props.y,
          x2: this.props.x, y2: this.props.y + this.props.height,
          stroke: this.props.style.axisColor, strokeWidth: this.props.style.lineWidth,
          opacity: this.props.style.lineOpacity }));
      }

      if (this.props.yTitle) {
        var rotation = "rotate(-90,10," + String(this.props.y + this.props.height / 2) + ")";
        yAxis.push(_react2.default.createElement(
          "text",
          { key: "yTitle", x: 0, y: this.props.y + this.props.height / 2 + 10,
            fontSize: 18, transform: rotation, fill: this.props.style.titleColor },
          this.props.yTitle
        ));
      }

      var ySpace = this.props.height / (this.props.ySteps - 1);

      for (var i = 0; i < this.props.ySteps; i++) {
        var tickPos = this.props.height + this.props.y - i * ySpace;

        var yVal = 0;
        if (this.props.yScale == "log") {
          if (this.props.minY === 0) {
            var valueRatio = Math.log10(this.props.maxY) / (this.props.ySteps - 1);
            var pow10 = i * valueRatio;
            yVal = Math.pow(10, pow10);
          } else {
            var _valueRatio = (Math.log10(this.props.maxY) - Math.log10(this.props.minY)) / (this.props.ySteps - 1);
            var _pow = Math.log10(this.props.minY) + i * _valueRatio;
            yVal = Math.pow(10, _pow);
          }
        } else {
          yVal = this.props.minY + i * (this.props.maxY - this.props.minY) / (this.props.ySteps - 1);
        }
        if (this.props.showYLabels) {
          yAxis.push(_react2.default.createElement(YStep, { key: "yStep" + i, x: this.props.x, y: tickPos,
            value: yVal, length: 10, color: this.props.style.labelColor,
            showYLabels: this.props.showYLabels }));
        }

        if (this.props.showGrid) {
          if (i != 0) {
            yAxis.push(_react2.default.createElement(Line, { key: "grid" + i, x1: this.props.x, y1: tickPos,
              x2: this.props.x + this.props.width, y2: tickPos,
              stroke: this.props.style.gridColor, strokeWidth: 1, opacity: 0.5 }));
          }
        }
      }

      return _react2.default.createElement(
        "g",
        null,
        yAxis
      );
    }
  }]);

  return YAxis;
}(_react2.default.Component);

YAxis.defaultProps = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  yScale: "lin",
  ySteps: 5,
  showYAxisLine: true,
  showYLabels: true,
  showGrid: true,
  minY: 0,
  maxY: 100,
  style: {
    axisColor: "#000000",
    labelColor: "#000000",
    titleColor: "#000000",
    gridColor: "#DDDDDD",
    lineWidth: 2,
    lineOpacity: 1
  }
};

var XTickLabel = function (_React$Component5) {
  _inherits(XTickLabel, _React$Component5);

  function XTickLabel() {
    _classCallCheck(this, XTickLabel);

    return _possibleConstructorReturn(this, (XTickLabel.__proto__ || Object.getPrototypeOf(XTickLabel)).apply(this, arguments));
  }

  _createClass(XTickLabel, [{
    key: "render",
    value: function render() {
      var printVal = void 0;
      if (this.props.value < 1 && this.props.value > -1) {
        printVal = +this.props.value.toFixed(3);
      } else if (this.props.value < 1000 && this.props.value > -1000) {
        printVal = +this.props.value.toFixed(1);
      } else {
        printVal = _humanizePlus2.default.compactInteger(this.props.value, 1);
      }

      return _react2.default.createElement(
        "g",
        null,
        _react2.default.createElement(
          "text",
          { x: this.props.x, y: this.props.y + 22,
            fontSize: 15, fill: this.props.color, textAnchor: "middle" },
          printVal
        )
      );
    }
  }]);

  return XTickLabel;
}(_react2.default.Component);

var XStep = function (_React$Component6) {
  _inherits(XStep, _React$Component6);

  function XStep() {
    _classCallCheck(this, XStep);

    return _possibleConstructorReturn(this, (XStep.__proto__ || Object.getPrototypeOf(XStep)).apply(this, arguments));
  }

  _createClass(XStep, [{
    key: "render",
    value: function render() {
      var step = [];

      step.push(_react2.default.createElement(Line, { key: "tick" + this.props.x,
        x1: this.props.x, y1: this.props.y,
        x2: this.props.x, y2: this.props.y + this.props.length,
        stroke: this.props.color }));
      step.push(_react2.default.createElement(XTickLabel, { key: "label" + this.props.x, x: this.props.x, y: this.props.y,
        value: this.props.value, color: this.props.color }));

      return _react2.default.createElement(
        "g",
        null,
        step
      );
    }
  }]);

  return XStep;
}(_react2.default.Component);

var XAxisContinuous = function (_React$Component7) {
  _inherits(XAxisContinuous, _React$Component7);

  function XAxisContinuous() {
    _classCallCheck(this, XAxisContinuous);

    return _possibleConstructorReturn(this, (XAxisContinuous.__proto__ || Object.getPrototypeOf(XAxisContinuous)).apply(this, arguments));
  }

  _createClass(XAxisContinuous, [{
    key: "render",
    value: function render() {
      var xAxis = [];

      if (this.props.showXAxisLine) {
        xAxis.push(_react2.default.createElement(Line, { key: "xAxisLine", x1: this.props.x, y1: this.props.y,
          x2: this.props.x + this.props.width, y2: this.props.y,
          stroke: this.props.style.axisColor, strokeWidth: this.props.style.lineWidth,
          opacity: this.props.style.lineOpacity }));
      }

      if (this.props.xTitle) {
        xAxis.push(_react2.default.createElement(
          "text",
          { key: "xTitle", textAnchor: "middle",
            x: this.props.x + this.props.width / 2, y: this.props.y + 45,
            fill: this.props.style.titleColor, fontSize: 18 },
          this.props.xTitle
        ));
      }

      if (this.props.showXLabels) {
        var xSpace = this.props.width / (this.props.xSteps - 1);

        for (var i = 0; i < this.props.xSteps; i++) {
          var tickPos = this.props.x + i * xSpace;

          var xVal = 0;
          if (this.props.xScale == "log") {
            if (this.props.minX === 0) {
              var valueRatio = Math.log10(this.props.maxX) / (this.props.xSteps - 1);
              var pow10 = i * valueRatio;
              xVal = Math.pow(10, pow10);
            } else {
              var _valueRatio2 = (Math.log10(this.props.maxX) - Math.log10(this.props.minX)) / (this.props.xSteps - 1);
              var _pow2 = Math.log10(this.props.minX) + i * _valueRatio2;
              xVal = Math.pow(10, _pow2);
            }
          } else {
            xVal = this.props.minX + i * (this.props.maxX - this.props.minX) / (this.props.xSteps - 1);
          }
          xAxis.push(_react2.default.createElement(XStep, { key: "xStep" + i, x: tickPos, y: this.props.y,
            value: xVal, length: 10, color: this.props.style.labelColor,
            showXLabels: this.props.showXLabels }));
        }
      }

      return _react2.default.createElement(
        "g",
        null,
        xAxis
      );
    }
  }]);

  return XAxisContinuous;
}(_react2.default.Component);

XAxisContinuous.defaultProps = {
  x: 0,
  y: 0,
  width: 100,
  xScale: "lin",
  xSteps: 5,
  showXAxisLine: true,
  showXLabels: true,
  minX: 0,
  maxX: 100,
  style: {
    axisColor: "#000000",
    labelColor: "#000000",
    titleColor: "#000000",
    gridColor: "#DDDDDD",
    lineWidth: 2,
    lineOpacity: 1
  }
};

var XAxisDiscrete = function (_React$Component8) {
  _inherits(XAxisDiscrete, _React$Component8);

  function XAxisDiscrete() {
    _classCallCheck(this, XAxisDiscrete);

    return _possibleConstructorReturn(this, (XAxisDiscrete.__proto__ || Object.getPrototypeOf(XAxisDiscrete)).apply(this, arguments));
  }

  _createClass(XAxisDiscrete, [{
    key: "render",
    value: function render() {
      var xAxis = [];

      if (this.props.showXAxisLine) {
        xAxis.push(_react2.default.createElement(Line, { key: "xAxisLine", x1: this.props.x, y1: this.props.y,
          x2: this.props.x + this.props.width, y2: this.props.y,
          stroke: this.props.style.axisColor, strokeWidth: this.props.style.lineWidth,
          opacity: this.props.style.lineOpacity }));
      }

      var size = 16;

      if (this.props.showXLabels && this.props.labels) {
        var labelWidth = this.props.width / this.props.labels.length;
        var tilt = 0;
        for (var i = 0; i < this.props.labels.length; i++) {
          if (this.props.labels[i].length * 9 > labelWidth) {
            tilt = -30;
            size = 12;
          }
        }
        var rotation = void 0,
            anchor = void 0;
        if (tilt != 0) {
          anchor = "end";
        } else {
          anchor = "middle";
        }

        var offset = this.props.x + this.props.width / this.props.labels.length / 2;
        var deltaX = this.props.width / this.props.labels.length;
        if (this.props.xStart === "origin") {
          offset = this.props.x;
          deltaX = this.props.width / (this.props.labels.length - 1);
        }

        for (var _i = 0; _i < this.props.labels.length; _i++) {
          rotation = "rotate(" + tilt + "," + (offset + _i * (this.props.width / this.props.labels.length) - 10) + "," + (this.props.y - 20) + ")";
          xAxis.push(_react2.default.createElement(Line, { key: "tick" + _i,
            x1: offset + _i * deltaX, y1: this.props.y,
            x2: offset + _i * deltaX, y2: this.props.y + 8,
            stroke: this.props.style.labelColor }));
          xAxis.push(_react2.default.createElement(
            "text",
            { key: this.props.labels[_i], fill: this.props.style.labelColor,
              x: offset + _i * deltaX,
              y: this.props.y + 22, textAnchor: anchor, transform: rotation, fontSize: size },
            this.props.labels[_i]
          ));
        }
      }

      if (this.props.xTitle) {
        xAxis.push(_react2.default.createElement(
          "text",
          { key: "xTitle", textAnchor: "middle",
            x: this.props.x + this.props.width / 2, y: this.props.y + 45,
            fill: this.props.style.titleColor, fontSize: size + 2 },
          this.props.xTitle
        ));
      }

      return _react2.default.createElement(
        "g",
        null,
        xAxis
      );
    }
  }]);

  return XAxisDiscrete;
}(_react2.default.Component);

XAxisDiscrete.defaultProps = {
  x: 0,
  y: 0,
  width: 100,
  showXAxisLine: true,
  showXLabels: true,
  style: {
    axisColor: "#000000",
    labelColor: "#000000",
    titleColor: "#000000",
    lineWidth: 2,
    lineOpacity: 1
  }
};

var Axis = function (_React$Component9) {
  _inherits(Axis, _React$Component9);

  function Axis() {
    _classCallCheck(this, Axis);

    return _possibleConstructorReturn(this, (Axis.__proto__ || Object.getPrototypeOf(Axis)).apply(this, arguments));
  }

  _createClass(Axis, [{
    key: "render",
    value: function render() {
      this.axes = [];
      this.buffer = { top: 0, left: 0, bot: 0, right: 0 };
      if (this.props.showYAxis) {
        this.buffer.top += 10;
        this.buffer.left += 60;
        if (this.props.yTitle) {
          this.buffer.left += 25;
        }
      }
      if (this.props.showXAxis) {
        this.buffer.bot += 25;
        if (this.props.xTitle) {
          this.buffer.bot += 25;
        }
        if (this.props.xStart === "origin") {
          this.buffer.right += 25;
        }
      }
      if (this.props.graphTitle) {
        this.buffer.top += 25;
      }
      if (this.props.xAxisMode === "continuous") {
        this.buffer.right += 25;
      }
      if (this.props.showLegend && this.props.legendValues) {
        if (this.props.legendMode == "flat") {
          this.buffer.bot += 80;
        } else if (this.props.legendMode == "stack-outside") {
          this.buffer.right += 125;
        }
      }

      var xSteps = void 0,
          ySteps = void 0;
      if (this.props.ySteps) {
        ySteps = this.props.ySteps;
      } else {
        ySteps = Math.ceil(this.props.height / 100) + 1;
      }
      if (this.props.xSteps) {
        xSteps = this.props.xSteps;
      } else {
        xSteps = Math.ceil(this.props.width / 100) + 1;
      }

      if (this.props.showYAxis) {
        this.axes.push(_react2.default.createElement(YAxis, { key: "YAxis", x: this.buffer.left, y: this.buffer.top, width: this.props.width - (this.buffer.left + this.buffer.right),
          height: this.props.height - this.buffer.bot - this.buffer.top,
          minY: this.props.minY, maxY: this.props.maxY, yScale: this.props.yScale,
          ySteps: ySteps, yTitle: this.props.yTitle,
          showYAxisLine: this.props.showYAxisLine, showYLabels: this.props.showYLabels,
          showGrid: this.props.showGrid, style: this.props.axisStyle }));
      }
      if (this.props.showXAxis) {
        if (this.props.xAxisMode == "discrete") {
          this.axes.push(_react2.default.createElement(XAxisDiscrete, { key: "XAxis", x: this.buffer.left, y: this.props.height - this.buffer.bot,
            width: this.props.width - this.buffer.left - this.buffer.right,
            xTitle: this.props.xTitle, showXAxisLine: this.props.showXAxisLine,
            showXLabels: this.props.showXLabels, labels: this.props.labels,
            xStart: this.props.xStart, style: this.props.axisStyle }));
        } else if (this.props.xAxisMode == "continuous") {
          this.axes.push(_react2.default.createElement(XAxisContinuous, { key: "XAxis", x: this.buffer.left, y: this.props.height - this.buffer.bot,
            width: this.props.width - this.buffer.left - this.buffer.right,
            xTitle: this.props.xTitle, showXAxisLine: this.props.showXAxisLine,
            showXLabels: this.props.showXLabels,
            xScale: this.props.xScale, xSteps: xSteps,
            minX: this.props.minX, maxX: this.props.maxX,
            style: this.props.axisStyle }));
        }
      }
      if (this.props.graphTitle) {
        this.axes.push(_react2.default.createElement(
          "text",
          { key: "graphTitle", textAnchor: "middle",
            fontSize: 18, fill: this.props.axisStyle.titleColor,
            x: this.buffer.left + (this.props.width - this.buffer.left - this.buffer.right) / 2, y: 20 },
          this.props.graphTitle
        ));
      }
      if (this.props.legendValues) {
        if (this.props.legendMode === "flat") {
          this.axes.push(_react2.default.createElement(
            "g",
            { key: "Legend", transform: "translate(" + this.buffer.left + " " + (this.props.height - 70) + ")" },
            _react2.default.createElement(_Legend2.default, { values: this.props.legendValues,
              width: this.props.width - this.buffer.left - this.buffer.right,
              showLegend: this.props.showLegend,
              fontColor: this.props.legendStyle.fontColor,
              backgroundColor: this.props.legendStyle.backgroundColor,
              showBorder: this.props.legendStyle.showBorder,
              borderColor: this.props.legendStyle.borderColor })
          ));
        } else if (this.props.legendMode === "stack-inside") {
          this.axes.push(_react2.default.createElement(
            "g",
            { key: "Legend", transform: "translate(" + (this.props.width - 120) + " " + this.buffer.top + ")" },
            _react2.default.createElement(_Legend2.default, { values: this.props.legendValues, mode: "stack",
              showLegend: this.props.showLegend,
              fontColor: this.props.legendStyle.fontColor,
              backgroundColor: this.props.legendStyle.backgroundColor,
              showBorder: this.props.legendStyle.showBorder,
              borderColor: this.props.legendStyle.borderColor })
          ));
        } else if (this.props.legendMode === "stack-outside") {
          this.axes.push(_react2.default.createElement(
            "g",
            { key: "Legend", transform: "translate(" + (this.props.width - 120) + " " + this.buffer.top + ")" },
            _react2.default.createElement(_Legend2.default, { values: this.props.legendValues, mode: "stack",
              showLegend: this.props.showLegend,
              fontColor: this.props.legendStyle.fontColor,
              backgroundColor: this.props.legendStyle.backgroundColor,
              showBorder: this.props.legendStyle.showBorder,
              borderColor: this.props.legendStyle.borderColor })
          ));
        }
      }

      var child = void 0;
      if (this.props.children) {
        child = _react2.default.cloneElement(this.props.children, { width: this.props.width - this.buffer.left - this.buffer.right,
          height: this.props.height - this.buffer.top - this.buffer.bot });
      }

      return _react2.default.createElement(
        "g",
        null,
        this.axes,
        _react2.default.createElement(
          "g",
          { transform: "translate(" + this.buffer.left + " " + this.buffer.top + ")" },
          child
        )
      );
    }
  }]);

  return Axis;
}(_react2.default.Component);

Axis.defaultProps = {
  x: 0,
  y: 0,
  width: 400,
  height: 400,
  xAxisMode: "discrete",
  xScale: "lin",
  yScale: "lin",
  minY: 0,
  maxY: 100,
  minX: 0,
  maxX: 100,
  showXAxis: true,
  showYAxis: true,
  showXAxisLine: true,
  showXLabels: true,
  showYAxisLine: true,
  showYLabels: true,
  showGrid: true,
  axisStyle: {
    axisColor: "#000000",
    labelColor: "#000000",
    titleColor: "#000000",
    gridColor: "#DDDDDD",
    lineWidth: 2,
    lineOpacity: 1
  },
  showLegend: true,
  legendMode: "flat",
  legendStyle: {
    fontColor: "#000000",
    backgroundColor: "none",
    showBorder: true,
    borderColor: "#000000"
  }
};

Axis.propTypes = {
  x: _propTypes2.default.number,
  y: _propTypes2.default.number,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  xAxisMode: _propTypes2.default.string,
  graphHeight: _propTypes2.default.string,
  xTitle: _propTypes2.default.string,
  yTitle: _propTypes2.default.string,
  xScale: _propTypes2.default.string,
  xSteps: _propTypes2.default.number,
  xStart: _propTypes2.default.string,
  yScale: _propTypes2.default.string,
  ySteps: _propTypes2.default.number,
  minY: _propTypes2.default.number,
  maxY: _propTypes2.default.number,
  minX: _propTypes2.default.number,
  maxX: _propTypes2.default.number,
  showXAxisLine: _propTypes2.default.bool,
  showXLabels: _propTypes2.default.bool,
  labels: _propTypes2.default.array,
  showYAxisLine: _propTypes2.default.bool,
  showYLabels: _propTypes2.default.bool,
  showGrid: _propTypes2.default.bool,
  axisStyle: _propTypes2.default.object,
  showLegend: _propTypes2.default.bool,
  legendMode: _propTypes2.default.string,
  legendStyle: _propTypes2.default.object
};

exports.default = Axis;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _LoadingIcon = __webpack_require__(15);

var _LoadingIcon2 = _interopRequireDefault(_LoadingIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Resize = function (_React$Component) {
  _inherits(Resize, _React$Component);

  function Resize(props) {
    _classCallCheck(this, Resize);

    var _this = _possibleConstructorReturn(this, (Resize.__proto__ || Object.getPrototypeOf(Resize)).call(this, props));

    _this.state = {
      width: parseInt(_this.props.width),
      resizing: false
    };
    return _this;
  }

  _createClass(Resize, [{
    key: "parseWidth",
    value: function parseWidth(width) {
      if (typeof width === "number" || !width.includes("%")) {
        return { dynamic: false, scale: 1 };
      } else {
        return {
          dynamic: true,
          scale: parseInt(width) / 100
        };
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      if (this.parseWidth(this.props.width).dynamic) {
        this.setState({
          resizing: true,
          width: this.elem.parentNode.clientWidth * parseInt(this.props.width) / 100
        });
        var updateFunction;
        clearTimeout(updateFunction);
        updateFunction = setTimeout(this.updateDimensions.bind(this), 1200);
      }
    }
  }, {
    key: "updateDimensions",
    value: function updateDimensions() {
      this.setState({
        resizing: false,
        width: this.elem.parentNode.clientWidth * parseInt(this.props.width) / 100
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.resizing) {
        return _react2.default.createElement(
          "div",
          { ref: function ref(comp) {
              _this2.elem = comp;
            } },
          _react2.default.createElement(_LoadingIcon2.default, { width: this.state.width })
        );
      }

      var child = _react2.default.cloneElement(this.props.children, { width: this.state.width });

      return _react2.default.createElement(
        "div",
        { ref: function ref(comp) {
            _this2.elem = comp;
          }, style: { width: this.state.width + "px" } },
        child
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.parseWidth(this.props.width).dynamic) {
        this.setState({
          width: this.elem.parentNode.clientWidth * parseInt(this.props.width) / 100
        });
      }
      this.listener = this.resize.bind(this);
      window.addEventListener("resize", this.listener);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props != nextProps) {
        if (this.parseWidth(nextProps.width).dynamic) {
          this.setState({
            width: this.elem.parentNode.clientWidth * parseInt(nextProps.width) / 100 > 0 ? this.elem.parentNode.clientWidth * parseInt(nextProps.width) / 100 : 1
          });
        } else {
          this.setState({ width: parseInt(nextProps.width) });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.listener);
    }
  }]);

  return Resize;
}(_react2.default.Component);

exports.default = Resize;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.state = {
      height: 0
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: "updateHeight",
    value: function updateHeight(node) {
      if (node && node.offsetHeight !== this.state.height) {
        this.setState({ height: node.offsetHeight });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.props.active) {
        return null;
      }

      var width = 200;
      var leftMax = window.innerWidth - width;

      var coloring = {};
      switch (this.props.colorScheme) {
        case "light":
          coloring.backgroundColor = "#ffffff";
          coloring.borderColor = "#DCDCDC";
          coloring.fontColor = "#000000";
          break;
        case "dark":
          coloring.backgroundColor = "#181818";
          coloring.borderColor = "#585858";
          coloring.fontColor = "#ffffff";
          break;
        default:
          coloring.backgroundColor = this.props.backgroundColor;
          coloring.borderColor = this.props.borderColor;
          coloring.fontColor = this.props.fontColor;
          break;
      }

      var style = {
        outer: {
          zIndex: "1",
          position: "absolute"
        },
        inner: {
          display: "inline-block",
          position: "absolute",
          width: width,
          textAlign: "center",
          padding: this.props.padding,
          backgroundColor: coloring.backgroundColor,
          border: "1px solid",
          borderColor: coloring.borderColor,
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.25)",
          color: coloring.fontColor
        },
        svgWrapper: {
          display: "inline-block",
          position: "absolute"
        },
        triangle: {
          fill: coloring.borderColor,
          stroke: coloring.borderColor,
          strokeWidth: "1"
        }
      };

      var svgHeight = void 0;
      var svgWidth = void 0;
      var svgStyle = void 0;
      var transform = void 0;

      if (this.props.align === "top" || this.props.align === "bottom") {
        style.outer.width = width;
        style.outer.height = this.state.height + 5;
        style.outer.left = Math.min(leftMax, Math.max(0, this.props.x - width / 2));
        style.svgWrapper.width = width;
        style.svgWrapper.height = 5;
        style.svgWrapper.textAlign = "center";
        svgHeight = 5;
        svgWidth = 10;
      } else {
        /* this.props.align === "right" or "left" */
        style.outer.width = width + 5;
        style.outer.height = this.state.height;
        style.outer.top = this.props.y - this.state.height / 2;
        style.inner.top = 0;
        style.svgWrapper.width = 5;
        style.svgWrapper.height = this.state.height;
        svgHeight = 10;
        svgWidth = 5;
        svgStyle = {
          position: "absolute",
          top: this.state.height / 2 - 5
        };
      }

      switch (this.props.align) {
        case "top":
          style.outer.bottom = window.innerHeight - this.props.y;
          style.inner.top = 0;
          style.svgWrapper.bottom = 0;
          break;
        case "bottom":
          style.outer.top = this.props.y;
          style.inner.bottom = 0;
          style.svgWrapper.top = 0;
          transform = "rotate(180,5,5) translate(0,5)";
          break;
        case "right":
          style.outer.left = Math.min(leftMax, Math.max(0, this.props.x));
          style.inner.right = 0;
          style.svgWrapper.left = 0;
          transform = "rotate(90,5,5) translate(0,5)";
          break;
        case "left":
          style.outer.left = Math.min(leftMax, Math.max(0, this.props.x - width));
          style.inner.left = 0;
          style.svgWrapper.right = 0;
          transform = "rotate(270,5,5)";
          break;
        default:
          console.log("invalid align argument");
          return null;
      }

      return _react2.default.createElement(
        "div",
        { style: style.outer },
        _react2.default.createElement(
          "div",
          { ref: function ref(node) {
              return _this2.updateHeight(node);
            }, style: style.inner },
          this.props.contents
        ),
        _react2.default.createElement(
          "div",
          { style: style.svgWrapper },
          _react2.default.createElement(
            "svg",
            { height: svgHeight, width: svgWidth, style: svgStyle },
            _react2.default.createElement("polygon", { points: "0,0 5,5 10,0", style: style.triangle,
              transform: transform })
          )
        )
      );
    }
  }]);

  return Tooltip;
}(_react2.default.Component);

Tooltip.defaultProps = {
  width: 200,
  padding: 10,
  backgroundColor: "#181818",
  fontColor: "#ffffff",
  borderColor: "#585858",
  active: true,
  align: "top"
};

exports.default = Tooltip;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Axis = exports.Legend = exports.LoadingIcon = exports.Resize = exports.Tooltip = undefined;

var _Tooltip = __webpack_require__(19);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Resize = __webpack_require__(18);

var _Resize2 = _interopRequireDefault(_Resize);

var _LoadingIcon = __webpack_require__(15);

var _LoadingIcon2 = _interopRequireDefault(_LoadingIcon);

var _Legend = __webpack_require__(14);

var _Legend2 = _interopRequireDefault(_Legend);

var _Axis = __webpack_require__(17);

var _Axis2 = _interopRequireDefault(_Axis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tooltip = _Tooltip2.default;
exports.Resize = _Resize2.default;
exports.LoadingIcon = _LoadingIcon2.default;
exports.Legend = _Legend2.default;
exports.Axis = _Axis2.default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(24);

var emptyObject = __webpack_require__(22);
var _invariant = __webpack_require__(3);

if (process.env.NODE_ENV !== 'production') {
  var warning = __webpack_require__(7);
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (process.env.NODE_ENV !== 'production') {
          warning(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (process.env.NODE_ENV !== 'production') {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (process.env.NODE_ENV !== 'production') {
          warning(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (process.env.NODE_ENV !== 'production') {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isInherited = name in Constructor;
      _invariant(
        !isInherited,
        'ReactClass: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be ' +
          'due to a mixin.',
        name
      );
      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (process.env.NODE_ENV !== 'production') {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (process.env.NODE_ENV !== 'production') {
        warning(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (process.env.NODE_ENV !== 'production') {
        warning(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (process.env.NODE_ENV !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (process.env.NODE_ENV !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (process.env.NODE_ENV !== 'production') {
      warning(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* humanize.js - v1.8.2 */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * Copyright 2013-2016 HubSpotDev
 * MIT Licensed
 *
 * @module humanize.js
 */

(function (root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return root.Humanize = factory();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    root.Humanize = factory();
  }
})(this, function () {
  //------------------------------------------------------------------------------
  // Constants
  //------------------------------------------------------------------------------

  var TIME_FORMATS = [{
    name: 'second',
    value: 1e3
  }, {
    name: 'minute',
    value: 6e4
  }, {
    name: 'hour',
    value: 36e5
  }, {
    name: 'day',
    value: 864e5
  }, {
    name: 'week',
    value: 6048e5
  }];

  var LABELS_FOR_POWERS_OF_KILO = {
    P: Math.pow(2, 50),
    T: Math.pow(2, 40),
    G: Math.pow(2, 30),
    M: Math.pow(2, 20)
  };

  //------------------------------------------------------------------------------
  // Helpers
  //------------------------------------------------------------------------------

  var exists = function exists(maybe) {
    return typeof maybe !== 'undefined' && maybe !== null;
  };

  var isNaN = function isNaN(value) {
    return value !== value;
  }; // eslint-disable-line

  var isFiniteNumber = function isFiniteNumber(value) {
    return isFinite(value) && !isNaN(parseFloat(value));
  };

  var isArray = function isArray(value) {
    var type = Object.prototype.toString.call(value);
    return type === '[object Array]';
  };

  //------------------------------------------------------------------------------
  // Humanize
  //------------------------------------------------------------------------------

  var Humanize = {

    // Converts a large integer to a friendly text representation.

    intword: function intword(number, charWidth) {
      var decimals = arguments.length <= 2 || arguments[2] === undefined ? 2 : arguments[2];

      /*
      * This method is deprecated. Please use compactInteger instead.
      * intword will be going away in the next major version.
      */
      return Humanize.compactInteger(number, decimals);
    },


    // Converts an integer into its most compact representation
    compactInteger: function compactInteger(input) {
      var decimals = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      decimals = Math.max(decimals, 0);
      var number = parseInt(input, 10);
      var signString = number < 0 ? '-' : '';
      var unsignedNumber = Math.abs(number);
      var unsignedNumberString = String(unsignedNumber);
      var numberLength = unsignedNumberString.length;
      var numberLengths = [13, 10, 7, 4];
      var bigNumPrefixes = ['T', 'B', 'M', 'k'];

      // small numbers
      if (unsignedNumber < 1000) {
        return '' + signString + unsignedNumberString;
      }

      // really big numbers
      if (numberLength > numberLengths[0] + 3) {
        return number.toExponential(decimals).replace('e+', 'x10^');
      }

      // 999 < unsignedNumber < 999,999,999,999,999
      var length = void 0;
      for (var i = 0; i < numberLengths.length; i++) {
        var _length = numberLengths[i];
        if (numberLength >= _length) {
          length = _length;
          break;
        }
      }

      var decimalIndex = numberLength - length + 1;
      var unsignedNumberCharacterArray = unsignedNumberString.split('');

      var wholePartArray = unsignedNumberCharacterArray.slice(0, decimalIndex);
      var decimalPartArray = unsignedNumberCharacterArray.slice(decimalIndex, decimalIndex + decimals + 1);

      var wholePart = wholePartArray.join('');

      // pad decimalPart if necessary
      var decimalPart = decimalPartArray.join('');
      if (decimalPart.length < decimals) {
        decimalPart += '' + Array(decimals - decimalPart.length + 1).join('0');
      }

      var output = void 0;
      if (decimals === 0) {
        output = '' + signString + wholePart + bigNumPrefixes[numberLengths.indexOf(length)];
      } else {
        var outputNumber = Number(wholePart + '.' + decimalPart).toFixed(decimals);
        output = '' + signString + outputNumber + bigNumPrefixes[numberLengths.indexOf(length)];
      }

      return output;
    },


    // Converts an integer to a string containing commas every three digits.
    intComma: function intComma(number) {
      var decimals = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      return Humanize.formatNumber(number, decimals);
    },
    intcomma: function intcomma() {
      return Humanize.intComma.apply(Humanize, arguments);
    },


    // Formats the value like a 'human-readable' file size (i.e. '13 KB', '4.1 MB', '102 bytes', etc).
    fileSize: function fileSize(filesize) {
      var precision = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

      for (var label in LABELS_FOR_POWERS_OF_KILO) {
        if (LABELS_FOR_POWERS_OF_KILO.hasOwnProperty(label)) {
          var minnum = LABELS_FOR_POWERS_OF_KILO[label];
          if (filesize >= minnum) {
            return Humanize.formatNumber(filesize / minnum, precision, '') + ' ' + label + 'B';
          }
        }
      }
      if (filesize >= 1024) {
        return Humanize.formatNumber(filesize / 1024, 0) + ' KB';
      }

      return Humanize.formatNumber(filesize, 0) + Humanize.pluralize(filesize, ' byte');
    },
    filesize: function filesize() {
      return Humanize.fileSize.apply(Humanize, arguments);
    },


    // Formats a number to a human-readable string.
    // Localize by overriding the precision, thousand and decimal arguments.
    formatNumber: function formatNumber(number) {
      var precision = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
      var thousand = arguments.length <= 2 || arguments[2] === undefined ? ',' : arguments[2];
      var decimal = arguments.length <= 3 || arguments[3] === undefined ? '.' : arguments[3];

      // Create some private utility functions to make the computational
      // code that follows much easier to read.
      var firstComma = function firstComma(_number, _thousand, _position) {
        return _position ? _number.substr(0, _position) + _thousand : '';
      };

      var commas = function commas(_number, _thousand, _position) {
        return _number.substr(_position).replace(/(\d{3})(?=\d)/g, '$1' + _thousand);
      };

      var decimals = function decimals(_number, _decimal, usePrecision) {
        return usePrecision ? _decimal + Humanize.toFixed(Math.abs(_number), usePrecision).split('.')[1] : '';
      };

      var usePrecision = Humanize.normalizePrecision(precision);

      // Do some calc
      var negative = number < 0 && '-' || '';
      var base = String(parseInt(Humanize.toFixed(Math.abs(number || 0), usePrecision), 10));
      var mod = base.length > 3 ? base.length % 3 : 0;

      // Format the number
      return negative + firstComma(base, thousand, mod) + commas(base, thousand, mod) + decimals(number, decimal, usePrecision);
    },


    // Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61')
    toFixed: function toFixed(value, precision) {
      precision = exists(precision) ? precision : Humanize.normalizePrecision(precision, 0);
      var power = Math.pow(10, precision);

      // Multiply up by precision, round accurately, then divide and use native toFixed()
      return (Math.round(value * power) / power).toFixed(precision);
    },


    // Ensures precision value is a positive integer
    normalizePrecision: function normalizePrecision(value, base) {
      value = Math.round(Math.abs(value));
      return isNaN(value) ? base : value;
    },


    // Converts an integer to its ordinal as a string.
    ordinal: function ordinal(value) {
      var number = parseInt(value, 10);

      if (number === 0) {
        return value;
      }

      var specialCase = number % 100;
      if ([11, 12, 13].indexOf(specialCase) >= 0) {
        return number + 'th';
      }

      var leastSignificant = number % 10;

      var end = void 0;
      switch (leastSignificant) {
        case 1:
          end = 'st';
          break;
        case 2:
          end = 'nd';
          break;
        case 3:
          end = 'rd';
          break;
        default:
          end = 'th';
      }

      return '' + number + end;
    },


    // Interprets numbers as occurences. Also accepts an optional array/map of overrides.
    times: function times(value) {
      var overrides = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      if (isFiniteNumber(value) && value >= 0) {
        var number = parseFloat(value);
        var smallTimes = ['never', 'once', 'twice'];
        if (exists(overrides[number])) {
          return String(overrides[number]);
        }

        var numberString = exists(smallTimes[number]) && smallTimes[number].toString();
        return numberString || number.toString() + ' times';
      }
      return null;
    },


    // Returns the plural version of a given word if the value is not 1. The default suffix is 's'.
    pluralize: function pluralize(number, singular, plural) {
      if (!(exists(number) && exists(singular))) {
        return null;
      }

      plural = exists(plural) ? plural : singular + 's';

      return parseInt(number, 10) === 1 ? singular : plural;
    },


    // Truncates a string if it is longer than the specified number of characters (inclusive).
    // Truncated strings will end with a translatable ellipsis sequence ("…").
    truncate: function truncate(str) {
      var length = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];
      var ending = arguments.length <= 2 || arguments[2] === undefined ? '...' : arguments[2];

      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      }
      return str;
    },


    // Truncates a string after a certain number of words.
    truncateWords: function truncateWords(string, length) {
      var array = string.split(' ');
      var result = '';
      var i = 0;

      while (i < length) {
        if (exists(array[i])) {
          result += array[i] + ' ';
        }
        i++;
      }

      if (array.length > length) {
        return result + '...';
      }

      return null;
    },
    truncatewords: function truncatewords() {
      return Humanize.truncateWords.apply(Humanize, arguments);
    },


    // Truncates a number to an upper bound.
    boundedNumber: function boundedNumber(num) {
      var bound = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];
      var ending = arguments.length <= 2 || arguments[2] === undefined ? '+' : arguments[2];

      var result = void 0;

      if (isFiniteNumber(num) && isFiniteNumber(bound)) {
        if (num > bound) {
          result = bound + ending;
        }
      }

      return (result || num).toString();
    },
    truncatenumber: function truncatenumber() {
      return Humanize.boundedNumber.apply(Humanize, arguments);
    },


    // Converts a list of items to a human readable string with an optional limit.
    oxford: function oxford(items, limit, limitStr) {
      var numItems = items.length;

      var limitIndex = void 0;
      if (numItems < 2) {
        return String(items);
      } else if (numItems === 2) {
        return items.join(' and ');
      } else if (exists(limit) && numItems > limit) {
        var extra = numItems - limit;
        limitIndex = limit;
        limitStr = exists(limitStr) ? limitStr : ', and ' + extra + ' ' + Humanize.pluralize(extra, 'other');
      } else {
        limitIndex = -1;
        limitStr = ', and ' + items[numItems - 1];
      }

      return items.slice(0, limitIndex).join(', ') + limitStr;
    },


    // Converts an object to a definition-like string
    dictionary: function dictionary(object) {
      var joiner = arguments.length <= 1 || arguments[1] === undefined ? ' is ' : arguments[1];
      var separator = arguments.length <= 2 || arguments[2] === undefined ? ', ' : arguments[2];

      var result = '';

      if (exists(object) && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && !isArray(object)) {
        var defs = [];
        for (var key in object) {
          if (object.hasOwnProperty(key)) {
            var val = object[key];
            defs.push('' + key + joiner + val);
          }
        }

        return defs.join(separator);
      }

      return result;
    },


    // Describes how many times an item appears in a list
    frequency: function frequency(list, verb) {
      if (!isArray(list)) {
        return null;
      }

      var len = list.length;
      var times = Humanize.times(len);

      if (len === 0) {
        return times + ' ' + verb;
      }

      return verb + ' ' + times;
    },
    pace: function pace(value, intervalMs) {
      var unit = arguments.length <= 2 || arguments[2] === undefined ? 'time' : arguments[2];

      if (value === 0 || intervalMs === 0) {
        // Needs a better string than this...
        return 'No ' + Humanize.pluralize(0, unit);
      }

      // Expose these as overridables?
      var prefix = 'Approximately';
      var timeUnit = void 0;
      var relativePace = void 0;

      var rate = value / intervalMs;
      for (var i = 0; i < TIME_FORMATS.length; ++i) {
        // assumes sorted list
        var f = TIME_FORMATS[i];
        relativePace = rate * f.value;
        if (relativePace > 1) {
          timeUnit = f.name;
          break;
        }
      }

      // Use the last time unit if there is nothing smaller
      if (!timeUnit) {
        prefix = 'Less than';
        relativePace = 1;
        timeUnit = TIME_FORMATS[TIME_FORMATS.length - 1].name;
      }

      var roundedPace = Math.round(relativePace);
      unit = Humanize.pluralize(roundedPace, unit);

      return prefix + ' ' + roundedPace + ' ' + unit + ' per ' + timeUnit;
    },


    // Converts newlines to <br/> tags
    nl2br: function nl2br(string) {
      var replacement = arguments.length <= 1 || arguments[1] === undefined ? '<br/>' : arguments[1];

      return string.replace(/\n/g, replacement);
    },


    // Converts <br/> tags to newlines
    br2nl: function br2nl(string) {
      var replacement = arguments.length <= 1 || arguments[1] === undefined ? '\r\n' : arguments[1];

      return string.replace(/\<br\s*\/?\>/g, replacement);
    },


    // Capitalizes first letter in a string
    capitalize: function capitalize(string) {
      var downCaseTail = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      return '' + string.charAt(0).toUpperCase() + (downCaseTail ? string.slice(1).toLowerCase() : string.slice(1));
    },


    // Capitalizes the first letter of each word in a string
    capitalizeAll: function capitalizeAll(string) {
      return string.replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
      });
    },


    // Titlecase words in a string.
    titleCase: function titleCase(string) {
      var smallWords = /\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i;
      var internalCaps = /\S+[A-Z]+\S*/;
      var splitOnWhiteSpaceRegex = /\s+/;
      var splitOnHyphensRegex = /-/;

      var _doTitleCase = void 0;
      _doTitleCase = function doTitleCase(_string) {
        var hyphenated = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
        var firstOrLast = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

        var titleCasedArray = [];
        var stringArray = _string.split(hyphenated ? splitOnHyphensRegex : splitOnWhiteSpaceRegex);

        for (var index = 0; index < stringArray.length; ++index) {
          var word = stringArray[index];
          if (word.indexOf('-') !== -1) {
            titleCasedArray.push(_doTitleCase(word, true, index === 0 || index === stringArray.length - 1));
            continue;
          }

          if (firstOrLast && (index === 0 || index === stringArray.length - 1)) {
            titleCasedArray.push(internalCaps.test(word) ? word : Humanize.capitalize(word));
            continue;
          }

          if (internalCaps.test(word)) {
            titleCasedArray.push(word);
          } else if (smallWords.test(word)) {
            titleCasedArray.push(word.toLowerCase());
          } else {
            titleCasedArray.push(Humanize.capitalize(word));
          }
        }

        return titleCasedArray.join(hyphenated ? '-' : ' ');
      };

      return _doTitleCase(string);
    },
    titlecase: function titlecase() {
      return Humanize.titleCase.apply(Humanize, arguments);
    }
  };

  return Humanize;
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(3);
  var warning = __webpack_require__(7);
  var ReactPropTypesSecret = __webpack_require__(9);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(3);
var ReactPropTypesSecret = __webpack_require__(9);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(3);
var warning = __webpack_require__(7);

var ReactPropTypesSecret = __webpack_require__(9);
var checkPropTypes = __webpack_require__(25);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mapToZero = __webpack_require__(11);

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(4);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(13);

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(8);

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(10);

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(12);

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = __webpack_require__(5);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var msPerFrame = 1000 / 60;

var Motion = _createReactClass2['default']({
  propTypes: {
    // TOOD: warn against putting a config in here
    defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
    style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
    children: _propTypes2['default'].func.isRequired,
    onRest: _propTypes2['default'].func
  },

  getInitialState: function getInitialState() {
    var _props = this.props;
    var defaultStyle = _props.defaultStyle;
    var style = _props.style;

    var currentStyle = defaultStyle || _stripStyle2['default'](style);
    var currentVelocity = _mapToZero2['default'](currentStyle);
    return {
      currentStyle: currentStyle,
      currentVelocity: currentVelocity,
      lastIdealStyle: currentStyle,
      lastIdealVelocity: currentVelocity
    };
  },

  wasAnimating: false,
  animationID: null,
  prevTime: 0,
  accumulatedTime: 0,
  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400
  unreadPropStyle: null,
  // after checking for unreadPropStyle != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
  clearUnreadPropStyle: function clearUnreadPropStyle(destStyle) {
    var dirty = false;
    var _state = this.state;
    var currentStyle = _state.currentStyle;
    var currentVelocity = _state.currentVelocity;
    var lastIdealStyle = _state.lastIdealStyle;
    var lastIdealVelocity = _state.lastIdealVelocity;

    for (var key in destStyle) {
      if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
        continue;
      }

      var styleValue = destStyle[key];
      if (typeof styleValue === 'number') {
        if (!dirty) {
          dirty = true;
          currentStyle = _extends({}, currentStyle);
          currentVelocity = _extends({}, currentVelocity);
          lastIdealStyle = _extends({}, lastIdealStyle);
          lastIdealVelocity = _extends({}, lastIdealVelocity);
        }

        currentStyle[key] = styleValue;
        currentVelocity[key] = 0;
        lastIdealStyle[key] = styleValue;
        lastIdealVelocity[key] = 0;
      }
    }

    if (dirty) {
      this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
    }
  },

  startAnimationIfNecessary: function startAnimationIfNecessary() {
    var _this = this;

    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
    // call cb? No, otherwise accidental parent rerender causes cb trigger
    this.animationID = _raf2['default'](function (timestamp) {
      // check if we need to animate in the first place
      var propsStyle = _this.props.style;
      if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
        if (_this.wasAnimating && _this.props.onRest) {
          _this.props.onRest();
        }

        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.wasAnimating = false;
        _this.accumulatedTime = 0;
        return;
      }

      _this.wasAnimating = true;

      var currentTime = timestamp || _performanceNow2['default']();
      var timeDelta = currentTime - _this.prevTime;
      _this.prevTime = currentTime;
      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
      // more than 10 frames? prolly switched browser tab. Restart
      if (_this.accumulatedTime > msPerFrame * 10) {
        _this.accumulatedTime = 0;
      }

      if (_this.accumulatedTime === 0) {
        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.startAnimationIfNecessary();
        return;
      }

      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

      var newLastIdealStyle = {};
      var newLastIdealVelocity = {};
      var newCurrentStyle = {};
      var newCurrentVelocity = {};

      for (var key in propsStyle) {
        if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
          continue;
        }

        var styleValue = propsStyle[key];
        if (typeof styleValue === 'number') {
          newCurrentStyle[key] = styleValue;
          newCurrentVelocity[key] = 0;
          newLastIdealStyle[key] = styleValue;
          newLastIdealVelocity[key] = 0;
        } else {
          var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
          var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
          for (var i = 0; i < framesToCatchUp; i++) {
            var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

            newLastIdealStyleValue = _stepper[0];
            newLastIdealVelocityValue = _stepper[1];
          }

          var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

          var nextIdealX = _stepper2[0];
          var nextIdealV = _stepper2[1];

          newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
          newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
          newLastIdealStyle[key] = newLastIdealStyleValue;
          newLastIdealVelocity[key] = newLastIdealVelocityValue;
        }
      }

      _this.animationID = null;
      // the amount we're looped over above
      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

      _this.setState({
        currentStyle: newCurrentStyle,
        currentVelocity: newCurrentVelocity,
        lastIdealStyle: newLastIdealStyle,
        lastIdealVelocity: newLastIdealVelocity
      });

      _this.unreadPropStyle = null;

      _this.startAnimationIfNecessary();
    });
  },

  componentDidMount: function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (this.unreadPropStyle != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyle);
    }

    this.unreadPropStyle = props.style;
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  },

  render: function render() {
    var renderedChildren = this.props.children(this.state.currentStyle);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  }
});

exports['default'] = Motion;
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mapToZero = __webpack_require__(11);

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(4);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(13);

var _stepper4 = _interopRequireDefault(_stepper3);

var _performanceNow = __webpack_require__(8);

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(10);

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(12);

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = __webpack_require__(5);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var msPerFrame = 1000 / 60;

function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
  for (var i = 0; i < currentStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
      return false;
    }
  }
  return true;
}

var StaggeredMotion = _createReactClass2['default']({
  propTypes: {
    // TOOD: warn against putting a config in here
    defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
    styles: _propTypes2['default'].func.isRequired,
    children: _propTypes2['default'].func.isRequired
  },

  getInitialState: function getInitialState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;

    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
    var currentVelocities = currentStyles.map(function (currentStyle) {
      return _mapToZero2['default'](currentStyle);
    });
    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: currentStyles,
      lastIdealVelocities: currentVelocities
    };
  },

  animationID: null,
  prevTime: 0,
  accumulatedTime: 0,
  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400
  unreadPropStyles: null,
  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
    var _state = this.state;
    var currentStyles = _state.currentStyles;
    var currentVelocities = _state.currentVelocities;
    var lastIdealStyles = _state.lastIdealStyles;
    var lastIdealVelocities = _state.lastIdealVelocities;

    var someDirty = false;
    for (var i = 0; i < unreadPropStyles.length; i++) {
      var unreadPropStyle = unreadPropStyles[i];
      var dirty = false;

      for (var key in unreadPropStyle) {
        if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
          continue;
        }

        var styleValue = unreadPropStyle[key];
        if (typeof styleValue === 'number') {
          if (!dirty) {
            dirty = true;
            someDirty = true;
            currentStyles[i] = _extends({}, currentStyles[i]);
            currentVelocities[i] = _extends({}, currentVelocities[i]);
            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
          }
          currentStyles[i][key] = styleValue;
          currentVelocities[i][key] = 0;
          lastIdealStyles[i][key] = styleValue;
          lastIdealVelocities[i][key] = 0;
        }
      }
    }

    if (someDirty) {
      this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
    }
  },

  startAnimationIfNecessary: function startAnimationIfNecessary() {
    var _this = this;

    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
    // call cb? No, otherwise accidental parent rerender causes cb trigger
    this.animationID = _raf2['default'](function (timestamp) {
      var destStyles = _this.props.styles(_this.state.lastIdealStyles);

      // check if we need to animate in the first place
      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.accumulatedTime = 0;
        return;
      }

      var currentTime = timestamp || _performanceNow2['default']();
      var timeDelta = currentTime - _this.prevTime;
      _this.prevTime = currentTime;
      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
      // more than 10 frames? prolly switched browser tab. Restart
      if (_this.accumulatedTime > msPerFrame * 10) {
        _this.accumulatedTime = 0;
      }

      if (_this.accumulatedTime === 0) {
        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.startAnimationIfNecessary();
        return;
      }

      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

      var newLastIdealStyles = [];
      var newLastIdealVelocities = [];
      var newCurrentStyles = [];
      var newCurrentVelocities = [];

      for (var i = 0; i < destStyles.length; i++) {
        var destStyle = destStyles[i];
        var newCurrentStyle = {};
        var newCurrentVelocity = {};
        var newLastIdealStyle = {};
        var newLastIdealVelocity = {};

        for (var key in destStyle) {
          if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
            continue;
          }

          var styleValue = destStyle[key];
          if (typeof styleValue === 'number') {
            newCurrentStyle[key] = styleValue;
            newCurrentVelocity[key] = 0;
            newLastIdealStyle[key] = styleValue;
            newLastIdealVelocity[key] = 0;
          } else {
            var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
            var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
            for (var j = 0; j < framesToCatchUp; j++) {
              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              newLastIdealStyleValue = _stepper[0];
              newLastIdealVelocityValue = _stepper[1];
            }

            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

            var nextIdealX = _stepper2[0];
            var nextIdealV = _stepper2[1];

            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
            newLastIdealStyle[key] = newLastIdealStyleValue;
            newLastIdealVelocity[key] = newLastIdealVelocityValue;
          }
        }

        newCurrentStyles[i] = newCurrentStyle;
        newCurrentVelocities[i] = newCurrentVelocity;
        newLastIdealStyles[i] = newLastIdealStyle;
        newLastIdealVelocities[i] = newLastIdealVelocity;
      }

      _this.animationID = null;
      // the amount we're looped over above
      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

      _this.setState({
        currentStyles: newCurrentStyles,
        currentVelocities: newCurrentVelocities,
        lastIdealStyles: newLastIdealStyles,
        lastIdealVelocities: newLastIdealVelocities
      });

      _this.unreadPropStyles = null;

      _this.startAnimationIfNecessary();
    });
  },

  componentDidMount: function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (this.unreadPropStyles != null) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  },

  render: function render() {
    var renderedChildren = this.props.children(this.state.currentStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  }
});

exports['default'] = StaggeredMotion;
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mapToZero = __webpack_require__(11);

var _mapToZero2 = _interopRequireDefault(_mapToZero);

var _stripStyle = __webpack_require__(4);

var _stripStyle2 = _interopRequireDefault(_stripStyle);

var _stepper3 = __webpack_require__(13);

var _stepper4 = _interopRequireDefault(_stepper3);

var _mergeDiff = __webpack_require__(32);

var _mergeDiff2 = _interopRequireDefault(_mergeDiff);

var _performanceNow = __webpack_require__(8);

var _performanceNow2 = _interopRequireDefault(_performanceNow);

var _raf = __webpack_require__(10);

var _raf2 = _interopRequireDefault(_raf);

var _shouldStopAnimation = __webpack_require__(12);

var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = __webpack_require__(5);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var msPerFrame = 1000 / 60;

// the children function & (potential) styles function asks as param an
// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
// {key: string, data?: any, style: PlainStyle}. However, the way we keep
// internal states doesn't contain such a data structure (check the state and
// TransitionMotionState). So when children function and others ask for such
// data we need to generate them on the fly by combining mergedPropsStyles and
// currentStyles/lastIdealStyles
function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
  // Copy the value to a `const` so that Flow understands that the const won't
  // change and will be non-nullable in the callback below.
  var cUnreadPropStyles = unreadPropStyles;
  if (cUnreadPropStyles == null) {
    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
      return {
        key: mergedPropsStyle.key,
        data: mergedPropsStyle.data,
        style: plainStyles[i]
      };
    });
  }
  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
    for (var j = 0; j < cUnreadPropStyles.length; j++) {
      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
        return {
          key: cUnreadPropStyles[j].key,
          data: cUnreadPropStyles[j].data,
          style: plainStyles[i]
        };
      }
    }
    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
  });
}

function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
  if (mergedPropsStyles.length !== destStyles.length) {
    return false;
  }

  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (mergedPropsStyles[i].key !== destStyles[i].key) {
      return false;
    }
  }

  // we have the invariant that mergedPropsStyles and
  // currentStyles/currentVelocities/last* are synced in terms of cells, see
  // mergeAndSync comment for more info
  for (var i = 0; i < mergedPropsStyles.length; i++) {
    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
      return false;
    }
  }

  return true;
}

// core key merging logic

// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
// c}, previous current (interpolating) style is {a, b}
// **invariant**: current[i] corresponds to merged[i] in terms of key

// steps:
// turn merged style into {a?, b, c}
//    add c, value of c is destStyles.c
//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
// turn current (interpolating) style from {a, b} into {a?, b, c}
//    maybe remove a
//    certainly add c, value of c is willEnter(c)
// loop over merged and construct new current
// dest doesn't change, that's owner's
function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
    var leavingStyle = willLeave(oldMergedPropsStyle);
    if (leavingStyle == null) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
      return null;
    }
    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
  });

  var newCurrentStyles = [];
  var newCurrentVelocities = [];
  var newLastIdealStyles = [];
  var newLastIdealVelocities = [];
  for (var i = 0; i < newMergedPropsStyles.length; i++) {
    var newMergedPropsStyleCell = newMergedPropsStyles[i];
    var foundOldIndex = null;
    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
        foundOldIndex = j;
        break;
      }
    }
    // TODO: key search code
    if (foundOldIndex == null) {
      var plainStyle = willEnter(newMergedPropsStyleCell);
      newCurrentStyles[i] = plainStyle;
      newLastIdealStyles[i] = plainStyle;

      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
      newCurrentVelocities[i] = velocity;
      newLastIdealVelocities[i] = velocity;
    } else {
      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
    }
  }

  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
}

var TransitionMotion = _createReactClass2['default']({
  propTypes: {
    defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
      key: _propTypes2['default'].string.isRequired,
      data: _propTypes2['default'].any,
      style: _propTypes2['default'].objectOf(_propTypes2['default'].number).isRequired
    })),
    styles: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
      key: _propTypes2['default'].string.isRequired,
      data: _propTypes2['default'].any,
      style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired
    }))]).isRequired,
    children: _propTypes2['default'].func.isRequired,
    willEnter: _propTypes2['default'].func,
    willLeave: _propTypes2['default'].func,
    didLeave: _propTypes2['default'].func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      willEnter: function willEnter(styleThatEntered) {
        return _stripStyle2['default'](styleThatEntered.style);
      },
      // recall: returning null makes the current unmounting TransitionStyle
      // disappear immediately
      willLeave: function willLeave() {
        return null;
      },
      didLeave: function didLeave() {}
    };
  },

  getInitialState: function getInitialState() {
    var _props = this.props;
    var defaultStyles = _props.defaultStyles;
    var styles = _props.styles;
    var willEnter = _props.willEnter;
    var willLeave = _props.willLeave;
    var didLeave = _props.didLeave;

    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;

    // this is special. for the first time around, we don't have a comparison
    // between last (no last) and current merged props. we'll compute last so:
    // say default is {a, b} and styles (dest style) is {b, c}, we'll
    // fabricate last as {a, b}
    var oldMergedPropsStyles = undefined;
    if (defaultStyles == null) {
      oldMergedPropsStyles = destStyles;
    } else {
      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
        // TODO: key search code
        for (var i = 0; i < destStyles.length; i++) {
          if (destStyles[i].key === defaultStyleCell.key) {
            return destStyles[i];
          }
        }
        return defaultStyleCell;
      });
    }
    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _stripStyle2['default'](s.style);
    });
    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    }) : defaultStyles.map(function (s) {
      return _mapToZero2['default'](s.style);
    });

    var _mergeAndSync = mergeAndSync(
    // Because this is an old-style createReactClass component, Flow doesn't
    // understand that the willEnter and willLeave props have default values
    // and will always be present.
    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
    oldCurrentVelocities);

    var mergedPropsStyles = _mergeAndSync[0];
    var currentStyles = _mergeAndSync[1];
    var currentVelocities = _mergeAndSync[2];
    var lastIdealStyles = _mergeAndSync[3];
    var lastIdealVelocities = _mergeAndSync[4];
    // oldLastIdealVelocities really

    return {
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      lastIdealStyles: lastIdealStyles,
      lastIdealVelocities: lastIdealVelocities,
      mergedPropsStyles: mergedPropsStyles
    };
  },

  unmounting: false,
  animationID: null,
  prevTime: 0,
  accumulatedTime: 0,
  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400
  unreadPropStyles: null,
  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
    var _mergeAndSync2 = mergeAndSync(this.props.willEnter, this.props.willLeave, this.props.didLeave, this.state.mergedPropsStyles, unreadPropStyles, this.state.currentStyles, this.state.currentVelocities, this.state.lastIdealStyles, this.state.lastIdealVelocities);

    var mergedPropsStyles = _mergeAndSync2[0];
    var currentStyles = _mergeAndSync2[1];
    var currentVelocities = _mergeAndSync2[2];
    var lastIdealStyles = _mergeAndSync2[3];
    var lastIdealVelocities = _mergeAndSync2[4];

    for (var i = 0; i < unreadPropStyles.length; i++) {
      var unreadPropStyle = unreadPropStyles[i].style;
      var dirty = false;

      for (var key in unreadPropStyle) {
        if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
          continue;
        }

        var styleValue = unreadPropStyle[key];
        if (typeof styleValue === 'number') {
          if (!dirty) {
            dirty = true;
            currentStyles[i] = _extends({}, currentStyles[i]);
            currentVelocities[i] = _extends({}, currentVelocities[i]);
            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
            mergedPropsStyles[i] = {
              key: mergedPropsStyles[i].key,
              data: mergedPropsStyles[i].data,
              style: _extends({}, mergedPropsStyles[i].style)
            };
          }
          currentStyles[i][key] = styleValue;
          currentVelocities[i][key] = 0;
          lastIdealStyles[i][key] = styleValue;
          lastIdealVelocities[i][key] = 0;
          mergedPropsStyles[i].style[key] = styleValue;
        }
      }
    }

    // unlike the other 2 components, we can't detect staleness and optionally
    // opt out of setState here. each style object's data might contain new
    // stuff we're not/cannot compare
    this.setState({
      currentStyles: currentStyles,
      currentVelocities: currentVelocities,
      mergedPropsStyles: mergedPropsStyles,
      lastIdealStyles: lastIdealStyles,
      lastIdealVelocities: lastIdealVelocities
    });
  },

  startAnimationIfNecessary: function startAnimationIfNecessary() {
    var _this = this;

    if (this.unmounting) {
      return;
    }

    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
    // call cb? No, otherwise accidental parent rerender causes cb trigger
    this.animationID = _raf2['default'](function (timestamp) {
      // https://github.com/chenglou/react-motion/pull/420
      // > if execution passes the conditional if (this.unmounting), then
      // executes async defaultRaf and after that component unmounts and after
      // that the callback of defaultRaf is called, then setState will be called
      // on unmounted component.
      if (_this.unmounting) {
        return;
      }

      var propStyles = _this.props.styles;
      var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;

      // check if we need to animate in the first place
      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.accumulatedTime = 0;
        return;
      }

      var currentTime = timestamp || _performanceNow2['default']();
      var timeDelta = currentTime - _this.prevTime;
      _this.prevTime = currentTime;
      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
      // more than 10 frames? prolly switched browser tab. Restart
      if (_this.accumulatedTime > msPerFrame * 10) {
        _this.accumulatedTime = 0;
      }

      if (_this.accumulatedTime === 0) {
        // no need to cancel animationID here; shouldn't have any in flight
        _this.animationID = null;
        _this.startAnimationIfNecessary();
        return;
      }

      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

      var _mergeAndSync3 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

      var newMergedPropsStyles = _mergeAndSync3[0];
      var newCurrentStyles = _mergeAndSync3[1];
      var newCurrentVelocities = _mergeAndSync3[2];
      var newLastIdealStyles = _mergeAndSync3[3];
      var newLastIdealVelocities = _mergeAndSync3[4];

      for (var i = 0; i < newMergedPropsStyles.length; i++) {
        var newMergedPropsStyle = newMergedPropsStyles[i].style;
        var newCurrentStyle = {};
        var newCurrentVelocity = {};
        var newLastIdealStyle = {};
        var newLastIdealVelocity = {};

        for (var key in newMergedPropsStyle) {
          if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
            continue;
          }

          var styleValue = newMergedPropsStyle[key];
          if (typeof styleValue === 'number') {
            newCurrentStyle[key] = styleValue;
            newCurrentVelocity[key] = 0;
            newLastIdealStyle[key] = styleValue;
            newLastIdealVelocity[key] = 0;
          } else {
            var newLastIdealStyleValue = newLastIdealStyles[i][key];
            var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
            for (var j = 0; j < framesToCatchUp; j++) {
              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

              newLastIdealStyleValue = _stepper[0];
              newLastIdealVelocityValue = _stepper[1];
            }

            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

            var nextIdealX = _stepper2[0];
            var nextIdealV = _stepper2[1];

            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
            newLastIdealStyle[key] = newLastIdealStyleValue;
            newLastIdealVelocity[key] = newLastIdealVelocityValue;
          }
        }

        newLastIdealStyles[i] = newLastIdealStyle;
        newLastIdealVelocities[i] = newLastIdealVelocity;
        newCurrentStyles[i] = newCurrentStyle;
        newCurrentVelocities[i] = newCurrentVelocity;
      }

      _this.animationID = null;
      // the amount we're looped over above
      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

      _this.setState({
        currentStyles: newCurrentStyles,
        currentVelocities: newCurrentVelocities,
        lastIdealStyles: newLastIdealStyles,
        lastIdealVelocities: newLastIdealVelocities,
        mergedPropsStyles: newMergedPropsStyles
      });

      _this.unreadPropStyles = null;

      _this.startAnimationIfNecessary();
    });
  },

  componentDidMount: function componentDidMount() {
    this.prevTime = _performanceNow2['default']();
    this.startAnimationIfNecessary();
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (this.unreadPropStyles) {
      // previous props haven't had the chance to be set yet; set them here
      this.clearUnreadPropStyle(this.unreadPropStyles);
    }

    var styles = props.styles;
    if (typeof styles === 'function') {
      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
    } else {
      this.unreadPropStyles = styles;
    }

    if (this.animationID == null) {
      this.prevTime = _performanceNow2['default']();
      this.startAnimationIfNecessary();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this.unmounting = true;
    if (this.animationID != null) {
      _raf2['default'].cancel(this.animationID);
      this.animationID = null;
    }
  },

  render: function render() {
    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
    var renderedChildren = this.props.children(hydratedStyles);
    return renderedChildren && _react2['default'].Children.only(renderedChildren);
  }
});

exports['default'] = TransitionMotion;
module.exports = exports['default'];

// list of styles, each containing interpolating values. Part of what's passed
// to children function. Notice that this is
// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
// contains the key & data info (so that we only have a single source of truth
// for these, and to save space). Check the comment for `rehydrateStyles` to
// see how we regenerate the entirety of what's passed to children function

// the array that keeps track of currently rendered stuff! Including stuff
// that you've unmounted but that's still animating. This is where it lives

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// core keys merging algorithm. If previous render's keys are [a, b], and the
// next render's [c, b, d], what's the final merged keys and ordering?

// - c and a must both be before b
// - b before d
// - ordering between a and c ambiguous

// this reduces to merging two partially ordered lists (e.g. lists where not
// every item has a definite ordering, like comparing a and c above). For the
// ambiguous ordering we deterministically choose to place the next render's
// item after the previous'; so c after a

// this is called a topological sorting. Except the existing algorithms don't
// work well with js bc of the amount of allocation, and isn't optimized for our
// current use-case bc the runtime is linear in terms of edges (see wiki for
// meaning), which is huge when two lists have many common elements


exports.__esModule = true;
exports['default'] = mergeDiff;

function mergeDiff(prev, next, onRemove) {
  // bookkeeping for easier access of a key's index below. This is 2 allocations +
  // potentially triggering chrome hash map mode for objs (so it might be faster

  var prevKeyIndex = {};
  for (var i = 0; i < prev.length; i++) {
    prevKeyIndex[prev[i].key] = i;
  }
  var nextKeyIndex = {};
  for (var i = 0; i < next.length; i++) {
    nextKeyIndex[next[i].key] = i;
  }

  // first, an overly elaborate way of merging prev and next, eliminating
  // duplicates (in terms of keys). If there's dupe, keep the item in next).
  // This way of writing it saves allocations
  var ret = [];
  for (var i = 0; i < next.length; i++) {
    ret[i] = next[i];
  }
  for (var i = 0; i < prev.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
      // merge in keys that the user desires to kill
      var fill = onRemove(i, prev[i]);
      if (fill != null) {
        ret.push(fill);
      }
    }
  }

  // now all the items all present. Core sorting logic to have the right order
  return ret.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a.key];
    var nextOrderB = nextKeyIndex[b.key];
    var prevOrderA = prevKeyIndex[a.key];
    var prevOrderB = prevKeyIndex[b.key];

    if (nextOrderA != null && nextOrderB != null) {
      // both keys in next
      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
    } else if (prevOrderA != null && prevOrderB != null) {
      // both keys in prev
      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
    } else if (nextOrderA != null) {
      // key a in next, key b in prev

      // how to determine the order between a and b? We find a "pivot" (term
      // abuse), a key present in both prev and next, that is sandwiched between
      // a and b. In the context of our above example, if we're comparing a and
      // d, b's (the only) pivot
      for (var i = 0; i < next.length; i++) {
        var pivot = next[i].key;
        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
          return 1;
        }
      }
      // pluggable. default to: next bigger than prev
      return 1;
    }
    // prevOrderA, nextOrderB
    for (var i = 0; i < next.length; i++) {
      var pivot = next[i].key;
      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
        continue;
      }
      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
        return -1;
      }
    }
    // pluggable. default to: next bigger than prev
    return -1;
  });
}

module.exports = exports['default'];
// to loop through and find a key's index each time), but I no longer care

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

var _Motion = __webpack_require__(29);

exports.Motion = _interopRequire(_Motion);

var _StaggeredMotion = __webpack_require__(30);

exports.StaggeredMotion = _interopRequire(_StaggeredMotion);

var _TransitionMotion = __webpack_require__(31);

exports.TransitionMotion = _interopRequire(_TransitionMotion);

var _spring = __webpack_require__(35);

exports.spring = _interopRequire(_spring);

var _presets = __webpack_require__(16);

exports.presets = _interopRequire(_presets);

var _stripStyle = __webpack_require__(4);

exports.stripStyle = _interopRequire(_stripStyle);

// deprecated, dummy warning function

var _reorderKeys = __webpack_require__(34);

exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports['default'] = reorderKeys;

var hasWarned = false;

function reorderKeys() {
  if (process.env.NODE_ENV === 'development') {
    if (!hasWarned) {
      hasWarned = true;
      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
    }
  }
}

module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = spring;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _presets = __webpack_require__(16);

var _presets2 = _interopRequireDefault(_presets);

var defaultConfig = _extends({}, _presets2['default'].noWobble, {
  precision: 0.01
});

function spring(val, config) {
  return _extends({}, defaultConfig, config, { val: val });
}

module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});

/***/ })
/******/ ]);
});
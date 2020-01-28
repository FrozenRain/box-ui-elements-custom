/*!
 * Box UI Element
 * 
 * Copyright 2019 Box, Inc. All rights reserved.
 * 
 * This product includes software developed by Box, Inc. ("Box")
 * (http://www.box.com)
 * 
 * ALL BOX SOFTWARE IS PROVIDED "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL BOX BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * See the Box license for the specific language governing permissions
 * and limitations under the license.
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-sidebar"],{

/***/ "./node_modules/filesize/lib/filesize.js":
/*!***********************************************!*\
  !*** ./node_modules/filesize/lib/filesize.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * filesize
 *
 * @copyright 2019 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 4.1.2
 */
(function (global) {
	var b = /^(b|B)$/,
	    symbol = {
		iec: {
			bits: ["b", "Kib", "Mib", "Gib", "Tib", "Pib", "Eib", "Zib", "Yib"],
			bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
		},
		jedec: {
			bits: ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"],
			bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
		}
	},
	    fullform = {
		iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"],
		jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"]
	};

	/**
  * filesize
  *
  * @method filesize
  * @param  {Mixed}   arg        String, Int or Float to transform
  * @param  {Object}  descriptor [Optional] Flags
  * @return {String}             Readable file size String
  */
	function filesize(arg) {
		var descriptor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		var result = [],
		    val = 0,
		    e = void 0,
		    base = void 0,
		    bits = void 0,
		    ceil = void 0,
		    full = void 0,
		    fullforms = void 0,
		    locale = void 0,
		    neg = void 0,
		    num = void 0,
		    output = void 0,
		    round = void 0,
		    unix = void 0,
		    separator = void 0,
		    spacer = void 0,
		    standard = void 0,
		    symbols = void 0;

		if (isNaN(arg)) {
			throw new TypeError("Invalid number");
		}

		bits = descriptor.bits === true;
		unix = descriptor.unix === true;
		base = descriptor.base || 2;
		round = descriptor.round !== void 0 ? descriptor.round : unix ? 1 : 2;
		locale = descriptor.locale !== void 0 ? descriptor.locale : "";
		separator = descriptor.separator !== void 0 ? descriptor.separator : "";
		spacer = descriptor.spacer !== void 0 ? descriptor.spacer : unix ? "" : " ";
		symbols = descriptor.symbols || {};
		standard = base === 2 ? descriptor.standard || "jedec" : "jedec";
		output = descriptor.output || "string";
		full = descriptor.fullform === true;
		fullforms = descriptor.fullforms instanceof Array ? descriptor.fullforms : [];
		e = descriptor.exponent !== void 0 ? descriptor.exponent : -1;
		num = Number(arg);
		neg = num < 0;
		ceil = base > 2 ? 1000 : 1024;

		// Flipping a negative number to determine the size
		if (neg) {
			num = -num;
		}

		// Determining the exponent
		if (e === -1 || isNaN(e)) {
			e = Math.floor(Math.log(num) / Math.log(ceil));

			if (e < 0) {
				e = 0;
			}
		}

		// Exceeding supported length, time to reduce & multiply
		if (e > 8) {
			e = 8;
		}

		if (output === "exponent") {
			return e;
		}

		// Zero is now a special case because bytes divide by 1
		if (num === 0) {
			result[0] = 0;
			result[1] = unix ? "" : symbol[standard][bits ? "bits" : "bytes"][e];
		} else {
			val = num / (base === 2 ? Math.pow(2, e * 10) : Math.pow(1000, e));

			if (bits) {
				val = val * 8;

				if (val >= ceil && e < 8) {
					val = val / ceil;
					e++;
				}
			}

			result[0] = Number(val.toFixed(e > 0 ? round : 0));
			result[1] = base === 10 && e === 1 ? bits ? "kb" : "kB" : symbol[standard][bits ? "bits" : "bytes"][e];

			if (unix) {
				result[1] = standard === "jedec" ? result[1].charAt(0) : e > 0 ? result[1].replace(/B$/, "") : result[1];

				if (b.test(result[1])) {
					result[0] = Math.floor(result[0]);
					result[1] = "";
				}
			}
		}

		// Decorating a 'diff'
		if (neg) {
			result[0] = -result[0];
		}

		// Applying custom symbol
		result[1] = symbols[result[1]] || result[1];

		if (locale === true) {
			result[0] = result[0].toLocaleString();
		} else if (locale.length > 0) {
			result[0] = result[0].toLocaleString(locale);
		} else if (separator.length > 0) {
			result[0] = result[0].toString().replace(".", separator);
		}

		// Returning Array, Object, or String (default)
		if (output === "array") {
			return result;
		}

		if (full) {
			result[1] = fullforms[e] ? fullforms[e] : fullform[standard][e] + (bits ? "bit" : "byte") + (result[0] === 1 ? "" : "s");
		}

		if (output === "object") {
			return { value: result[0], symbol: result[1] };
		}

		return result.join(spacer);
	}

	// Partial application for functional programming
	filesize.partial = function (opt) {
		return function (arg) {
			return filesize(arg, opt);
		};
	};

	// CommonJS, AMD, script tag
	if (true) {
		module.exports = filesize;
	} else {}
})(typeof window !== "undefined" ? window : global);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/isFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsFinite = root.isFinite;

/**
 * Checks if `value` is a finite primitive number.
 *
 * **Note:** This method is based on
 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 * @example
 *
 * _.isFinite(3);
 * // => true
 *
 * _.isFinite(Number.MIN_VALUE);
 * // => true
 *
 * _.isFinite(Infinity);
 * // => false
 *
 * _.isFinite('3');
 * // => false
 */
function isFinite(value) {
  return typeof value == 'number' && nativeIsFinite(value);
}

module.exports = isFinite;


/***/ }),

/***/ "./node_modules/react-process-string/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-process-string/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function processString(options) {
    var key = 0;

    function processInputWithRegex(option, input) {
        if (!option.fn || typeof option.fn !== 'function') return input;

        if (!option.regex || !(option.regex instanceof RegExp)) return input;

        if (typeof input === 'string') {
            var regex = option.regex;
            var result = null;
            var output = [];

            while ((result = regex.exec(input)) !== null) {
                var index = result.index;
                var match = result[0];

                output.push(input.substring(0, index));
                output.push(option.fn(++key, result));

                input = input.substring(index + match.length, input.length + 1);
                regex.lastIndex = 0;
            }

            output.push(input);
            return output;
        } else if (Array.isArray(input)) {
            return input.map(function (chunk) {
                return processInputWithRegex(option, chunk);
            });
        } else return input;
    }

    return function (input) {
        if (!options || !Array.isArray(options) || !options.length) return input;

        options.forEach(function (option) {
            return input = processInputWithRegex(option, input);
        });

        return input;
    };
}

module.exports = processString;



/***/ }),

/***/ "./src/common/messages.js":
/*!********************************!*\
  !*** ./src/common/messages.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  cancel: {
    "id": "boxui.core.cancel",
    "defaultMessage": "Cancel"
  },
  close: {
    "id": "boxui.core.close",
    "defaultMessage": "Close"
  },
  copy: {
    "id": "boxui.core.copy",
    "defaultMessage": "Copy"
  },
  copied: {
    "id": "boxui.core.copied",
    "defaultMessage": "Copied"
  },
  done: {
    "id": "boxui.core.done",
    "defaultMessage": "Done"
  },
  okay: {
    "id": "boxui.core.okay",
    "defaultMessage": "Okay"
  },
  save: {
    "id": "boxui.core.save",
    "defaultMessage": "Save"
  },
  send: {
    "id": "boxui.core.send",
    "defaultMessage": "Send"
  },
  optional: {
    "id": "boxui.core.optional",
    "defaultMessage": "optional"
  },
  pillSelectorPlaceholder: {
    "id": "boxui.share.pillSelectorPlaceholder",
    "defaultMessage": "Add names or email addresses"
  },
  messageSelectorPlaceholder: {
    "id": "boxui.share.messageSelectorPlaceholder",
    "defaultMessage": "Add a message"
  },
  invalidInputError: {
    "id": "boxui.validation.genericError",
    "defaultMessage": "Invalid Input"
  },
  minLengthError: {
    "id": "boxui.validation.tooShortError",
    "defaultMessage": "Input must be at least {min} characters"
  },
  maxLengthError: {
    "id": "boxui.validation.tooLongError",
    "defaultMessage": "Input cannot exceed {max} characters"
  },
  invalidEmailError: {
    "id": "boxui.validation.emailError",
    "defaultMessage": "Invalid Email Address"
  },
  invalidURLError: {
    "id": "boxui.validation.URLError",
    "defaultMessage": "Invalid URL"
  },
  invalidUserError: {
    "id": "boxui.validation.invalidUserError",
    "defaultMessage": "Invalid User"
  },
  requiredFieldError: {
    "id": "boxui.validation.requiredError",
    "defaultMessage": "Required Field"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/common/variables.js":
/*!*********************************!*\
  !*** ./src/common/variables.js ***!
  \*********************************/
/*! exports provided: BOX_BLUE, SEESEE, RESIN_TAG_TARGET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOX_BLUE", function() { return BOX_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEESEE", function() { return SEESEE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESIN_TAG_TARGET", function() { return RESIN_TAG_TARGET; });
var BOX_BLUE = '#0061d5';
var SEESEE = '#ccc';
var RESIN_TAG_TARGET = 'data-resin-target';


/***/ }),

/***/ "./src/components/collapsible/index.js":
/*!*********************************************!*\
  !*** ./src/components/collapsible/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collapsible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collapsible */ "./src/components/collapsible/Collapsible.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Collapsible__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/label/HiddenLabel.js":
/*!*********************************************!*\
  !*** ./src/components/label/HiddenLabel.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LabelPrimitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabelPrimitive */ "./src/components/label/LabelPrimitive.js");


var HIDDEN_CLASS_NAME = 'accessibility-hidden';

var HiddenLabel = (_ref) => {
  var {
    children,
    labelContent
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LabelPrimitive__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: HIDDEN_CLASS_NAME,
    labelContent: labelContent
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (HiddenLabel);

/***/ }),

/***/ "./src/components/label/InfoIconWithTooltip.js":
/*!*****************************************************!*\
  !*** ./src/components/label/InfoIconWithTooltip.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/general/IconInfo */ "./src/icons/general/IconInfo.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var InfoIconWithTooltip = (_ref) => {
  var {
    className = '',
    iconProps,
    tooltipText
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    key: "infoIcon",
    className: "".concat(className, " tooltip-icon-container")
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "top-center",
    text: tooltipText
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "info-icon-container"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    height: 16,
    width: 16
  }, iconProps)))));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoIconWithTooltip);

/***/ }),

/***/ "./src/components/label/Label.js":
/*!***************************************!*\
  !*** ./src/components/label/Label.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/messages */ "./src/common/messages.js");
/* harmony import */ var _InfoIconWithTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InfoIconWithTooltip */ "./src/components/label/InfoIconWithTooltip.js");
/* harmony import */ var _StandardLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StandardLabel */ "./src/components/label/StandardLabel.js");
/* harmony import */ var _HiddenLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HiddenLabel */ "./src/components/label/HiddenLabel.js");
/* harmony import */ var _Label_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Label.scss */ "./src/components/label/Label.scss");
/* harmony import */ var _Label_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Label_scss__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var OptionalFormattedMessage = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
  className: "label-optional"
}, "(", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].optional), ")");

var Label = (_ref) => {
  var {
    text,
    tooltip,
    infoTooltip,
    infoIconProps,
    showOptionalText,
    hideLabel,
    children
  } = _ref;
  var labelContent = [react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    key: "labelText"
  }, text), showOptionalText ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](OptionalFormattedMessage, {
    key: "optionalMessage"
  }) : null];

  if (infoTooltip) {
    labelContent.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_InfoIconWithTooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: "infoTooltip",
      iconProps: _objectSpread({
        className: 'tooltip-icon'
      }, infoIconProps),
      tooltipText: infoTooltip
    }));
  }

  if (hideLabel) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HiddenLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
      labelContent: labelContent
    }, children);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_StandardLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labelContent: labelContent,
    tooltip: tooltip
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./src/components/label/Label.scss":
/*!*****************************************!*\
  !*** ./src/components/label/Label.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/label/LabelPrimitive.js":
/*!************************************************!*\
  !*** ./src/components/label/LabelPrimitive.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var LabelPrimitive = (_ref) => {
  var {
    children,
    className,
    labelContent
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className", "labelContent"]);

  return (// eslint-disable-next-line jsx-a11y/label-has-for
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('label', className)
    }, rest), labelContent), children)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (LabelPrimitive);

/***/ }),

/***/ "./src/components/label/StandardLabel.js":
/*!***********************************************!*\
  !*** ./src/components/label/StandardLabel.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.js");
/* harmony import */ var _LabelPrimitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LabelPrimitive */ "./src/components/label/LabelPrimitive.js");




var StandardLabel = (_ref) => {
  var {
    children,
    labelContent,
    tooltip
  } = _ref;
  var label = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LabelPrimitive__WEBPACK_IMPORTED_MODULE_2__["default"], {
    labelContent: labelContent
  }, children);
  return tooltip ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    position: "top-right",
    text: tooltip
  }, label) : label;
};

/* harmony default export */ __webpack_exports__["default"] = (StandardLabel);

/***/ }),

/***/ "./src/components/label/index.js":
/*!***************************************!*\
  !*** ./src/components/label/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Label */ "./src/components/label/Label.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Label__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/common/date/DateField.js":
/*!***********************************************!*\
  !*** ./src/elements/common/date/DateField.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/datetime */ "./src/utils/datetime.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messages */ "./src/elements/common/messages.js");
/* harmony import */ var _DateField_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DateField.scss */ "./src/elements/common/date/DateField.scss");
/* harmony import */ var _DateField_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DateField_scss__WEBPACK_IMPORTED_MODULE_4__);
/**
 * 
 * @file Function to render the date table cell
 * @author Box
 */





var DEFAULT_DATE_FORMAT = {
  weekday: 'short',
  month: 'short',
  year: 'numeric',
  day: 'numeric'
};

var DateField = (_ref) => {
  var {
    date,
    dateFormat = DEFAULT_DATE_FORMAT,
    omitCommas = false,
    intl,
    relative = true,
    capitalize = false
  } = _ref;
  var d = new Date(date);
  var isTodaysDate = Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["isToday"])(d);
  var isYesterdaysDate = Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_2__["isYesterday"])(d);

  if (relative && (isTodaysDate || isYesterdaysDate)) {
    var Message = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].today);

    if (isYesterdaysDate) {
      Message = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].yesterday);
    }

    if (capitalize) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "be-date-capitalize"
      }, Message);
    }

    return Message;
  }

  var formattedDate = intl.formatDate(d, dateFormat);
  formattedDate = omitCommas ? formattedDate.replace(/,/g, '') : formattedDate;
  return formattedDate;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(DateField));

/***/ }),

/***/ "./src/elements/common/date/DateField.scss":
/*!*************************************************!*\
  !*** ./src/elements/common/date/DateField.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/common/date/index.js":
/*!*******************************************!*\
  !*** ./src/elements/common/date/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateField */ "./src/elements/common/date/DateField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DateField__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/DetailsSidebar.js":
/*!********************************************************!*\
  !*** ./src/elements/content-sidebar/DetailsSidebar.js ***!
  \********************************************************/
/*! exports provided: DetailsSidebarComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsSidebarComponent", function() { return DetailsSidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _SidebarAccessStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SidebarAccessStats */ "./src/elements/content-sidebar/SidebarAccessStats.js");
/* harmony import */ var _SidebarClassification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SidebarClassification */ "./src/elements/content-sidebar/SidebarClassification.js");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SidebarContent */ "./src/elements/content-sidebar/SidebarContent.js");
/* harmony import */ var _SidebarFileProperties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SidebarFileProperties */ "./src/elements/content-sidebar/SidebarFileProperties.js");
/* harmony import */ var _SidebarNotices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SidebarNotices */ "./src/elements/content-sidebar/SidebarNotices.js");
/* harmony import */ var _SidebarSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SidebarSection */ "./src/elements/content-sidebar/SidebarSection.js");
/* harmony import */ var _SidebarVersions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SidebarVersions */ "./src/elements/content-sidebar/SidebarVersions.js");
/* harmony import */ var _common_logger_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/logger/constants */ "./src/elements/common/logger/constants.js");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/error */ "./src/utils/error.js");
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/performance */ "./src/utils/performance.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _utils_fields__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/fields */ "./src/utils/fields.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/api-context */ "./src/elements/common/api-context/index.js");
/* harmony import */ var _common_error_boundary__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common/error-boundary */ "./src/elements/common/error-boundary/index.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../common/logger */ "./src/elements/common/logger/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _DetailsSidebar_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./DetailsSidebar.scss */ "./src/elements/content-sidebar/DetailsSidebar.scss");
/* harmony import */ var _DetailsSidebar_scss__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_DetailsSidebar_scss__WEBPACK_IMPORTED_MODULE_23__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Details sidebar component
 * @author Box
 */
























var MARK_NAME_JS_READY = "".concat(_constants__WEBPACK_IMPORTED_MODULE_22__["ORIGIN_DETAILS_SIDEBAR"], "_").concat(_common_logger_constants__WEBPACK_IMPORTED_MODULE_14__["EVENT_JS_READY"]);
Object(_utils_performance__WEBPACK_IMPORTED_MODULE_16__["mark"])(MARK_NAME_JS_READY);

class DetailsSidebar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "descriptionChangeSuccessCallback", file => {
      this.setState({
        file,
        fileError: undefined
      });
    });

    _defineProperty(this, "fetchFileSuccessCallback", file => {
      this.setState({
        file,
        fileError: undefined
      });
    });

    _defineProperty(this, "fetchFileErrorCallback", (e, code) => {
      // TODO: handle the error properly (probably with maskError) once files call split out
      this.setState({
        file: undefined
      });
      this.props.onError(e, code, {
        e
      });
    });

    _defineProperty(this, "descriptionChangeErrorCallback", file => {
      // Reset the state back to the original description since the API call failed
      this.setState({
        file,
        fileError: {
          inlineError: {
            title: _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].fileDescriptionInlineErrorTitleMessage,
            content: _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].defaultInlineErrorContentMessage
          }
        }
      });
    });

    _defineProperty(this, "onDescriptionChange", newDescription => {
      var {
        api
      } = this.props;
      var {
        file
      } = this.state;

      if (!file) {
        throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_15__["getBadItemError"])();
      }

      var {
        description
      } = file;

      if (newDescription === description) {
        return;
      }

      api.getFileAPI().setFileDescription(file, newDescription, this.descriptionChangeSuccessCallback, this.descriptionChangeErrorCallback);
    });

    _defineProperty(this, "fetchAccessStatsErrorCallback", (e, code) => {
      if (!this.props.hasAccessStats) {
        return;
      }

      var isForbidden = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(e, 'status') === _constants__WEBPACK_IMPORTED_MODULE_22__["HTTP_STATUS_CODE_FORBIDDEN"];
      var accessStatsError;

      if (isForbidden) {
        accessStatsError = {
          error: _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].fileAccessStatsPermissionsError
        };
      } else {
        accessStatsError = {
          maskError: {
            errorHeader: _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].fileAccessStatsErrorHeaderMessage,
            errorSubHeader: _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].defaultErrorMaskSubHeaderMessage
          }
        };
      }

      this.setState({
        isLoadingAccessStats: false,
        accessStats: undefined,
        accessStatsError
      });
      this.props.onError(e, code, {
        e,
        [_constants__WEBPACK_IMPORTED_MODULE_22__["IS_ERROR_DISPLAYED"]]: !isForbidden
      });
    });

    _defineProperty(this, "fetchAccessStatsSuccessCallback", accessStats => {
      if (!this.props.hasAccessStats) {
        return;
      }

      this.setState({
        accessStats,
        accessStatsError: undefined,
        isLoadingAccessStats: false
      });
    });

    this.state = {
      isLoadingAccessStats: false
    };
    var {
      logger
    } = this.props;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
  }

  componentDidMount() {
    this.fetchFile();

    if (this.props.hasAccessStats) {
      this.fetchAccessStats();
    }
  }

  componentDidUpdate(_ref) {
    var {
      hasAccessStats: prevHasAccessStats
    } = _ref;
    var {
      hasAccessStats
    } = this.props; // Component visibility props such as hasAccessStats can sometimes be flipped after an async call

    var hasAccessStatsChanged = prevHasAccessStats !== hasAccessStats;

    if (hasAccessStatsChanged) {
      if (hasAccessStats) {
        this.fetchAccessStats();
      } else {
        this.setState({
          isLoadingAccessStats: false,
          accessStats: undefined,
          accessStatsError: undefined
        });
      }
    }
  }
  /**
   * File description update callback
   *
   * @private
   * @param {BoxItem} file - Updated file object
   * @return {void}
   */


  /**
   * Fetches a file with the fields needed for details sidebar
   *
   * @param {Function} successCallback - the success callback
   * @param {Function} errorCallback - the error callback
   * @return {void}
   */
  fetchFile() {
    var successCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.fetchFileSuccessCallback;
    var errorCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.fetchFileErrorCallback;
    var {
      api,
      fileId
    } = this.props;
    api.getFileAPI().getFile(fileId, successCallback, errorCallback, {
      fields: _utils_fields__WEBPACK_IMPORTED_MODULE_18__["SIDEBAR_FIELDS_TO_FETCH"] // TODO: replace this with DETAILS_SIDEBAR_FIELDS_TO_FETCH as we do not need all the sidebar fields

    });
  }
  /**
   * Handles a successful file fetch
   *
   * @param {Object} file - the box file
   * @return {void}
   */


  /**
   * Fetches the access stats for a file
   *
   * @private
   * @return {void}
   */
  fetchAccessStats() {
    var {
      api,
      fileId
    } = this.props;
    var {
      isLoadingAccessStats
    } = this.state;

    if (isLoadingAccessStats) {
      return;
    }

    this.setState({
      isLoadingAccessStats: true
    });
    api.getFileAccessStatsAPI(false).getFileAccessStats(fileId, this.fetchAccessStatsSuccessCallback, this.fetchAccessStatsErrorCallback);
  }

  refresh() {
    this.fetchAccessStats();
  }

  render() {
    var {
      classification,
      elementId,
      hasProperties,
      hasNotices,
      hasAccessStats,
      hasClassification,
      hasRetentionPolicy,
      hasVersions,
      onAccessStatsClick,
      onVersionHistoryClick,
      onClassificationClick,
      onRetentionPolicyExtendClick,
      retentionPolicy
    } = this.props;
    var {
      accessStats,
      accessStatsError,
      file,
      fileError,
      isLoadingAccessStats
    } = this.state; // TODO: Add loading indicator and handle errors once file call is split out

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "bcs-details",
      elementId: elementId,
      sidebarView: _constants__WEBPACK_IMPORTED_MODULE_22__["SIDEBAR_VIEW_DETAILS"],
      title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].sidebarDetailsTitle)
    }, file && hasNotices && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bcs-DetailsSidebar-notices"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarNotices__WEBPACK_IMPORTED_MODULE_11__["default"], {
      file: file
    })), file && hasClassification && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarClassification__WEBPACK_IMPORTED_MODULE_8__["default"], {
      classification: classification,
      file: file,
      onEdit: onClassificationClick
    }), file && hasAccessStats && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarAccessStats__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
      accessStats: accessStats,
      file: file,
      onAccessStatsClick: onAccessStatsClick
    }, accessStatsError)), file && hasProperties && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarSection__WEBPACK_IMPORTED_MODULE_12__["default"], {
      interactionTarget: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_17__["SECTION_TARGETS"].FILE_PROPERTIES,
      title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].sidebarProperties)
    }, hasVersions && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarVersions__WEBPACK_IMPORTED_MODULE_13__["default"], {
      file: file,
      onVersionHistoryClick: onVersionHistoryClick
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarFileProperties__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({
      file: file,
      onDescriptionChange: this.onDescriptionChange
    }, fileError, {
      hasRetentionPolicy: hasRetentionPolicy,
      isLoading: isLoadingAccessStats,
      onRetentionPolicyExtendClick: onRetentionPolicyExtendClick,
      retentionPolicy: retentionPolicy
    }))));
  }

}

_defineProperty(DetailsSidebar, "defaultProps", {
  hasNotices: false,
  hasProperties: false,
  hasAccessStats: false,
  hasClassification: false,
  hasRetentionPolicy: false,
  hasVersions: false,
  onError: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a
});


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_1___default()([Object(_common_logger__WEBPACK_IMPORTED_MODULE_21__["withLogger"])(_constants__WEBPACK_IMPORTED_MODULE_22__["ORIGIN_DETAILS_SIDEBAR"]), Object(_common_error_boundary__WEBPACK_IMPORTED_MODULE_20__["withErrorBoundary"])(_constants__WEBPACK_IMPORTED_MODULE_22__["ORIGIN_DETAILS_SIDEBAR"]), _common_api_context__WEBPACK_IMPORTED_MODULE_19__["withAPIContext"]])(DetailsSidebar));

/***/ }),

/***/ "./src/elements/content-sidebar/DetailsSidebar.scss":
/*!**********************************************************!*\
  !*** ./src/elements/content-sidebar/DetailsSidebar.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarAccessStats.js":
/*!************************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarAccessStats.js ***!
  \************************************************************/
/*! exports provided: SidebarAccessStatsComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarAccessStatsComponent", function() { return SidebarAccessStats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isFinite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isFinite */ "./node_modules/lodash/isFinite.js");
/* harmony import */ var lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFinite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _features_access_stats_AccessStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/access-stats/AccessStats */ "./src/features/access-stats/AccessStats.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _utils_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/file */ "./src/utils/file.js");
/* harmony import */ var _SidebarSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SidebarSection */ "./src/elements/content-sidebar/SidebarSection.js");
/* harmony import */ var _withErrorHandling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./withErrorHandling */ "./src/elements/content-sidebar/withErrorHandling.js");
/**
 * 
 * @file Versions sidebar component
 * @author Box
 */










var SidebarAccessStats = (_ref) => {
  var {
    onAccessStatsClick,
    accessStats = {
      has_count_overflowed: false
    },
    file,
    error,
    intl
  } = _ref;
  var {
    preview_count,
    comment_count,
    download_count,
    edit_count
  } = accessStats;

  if (!lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default()(preview_count) && !lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default()(comment_count) && !lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default()(download_count) && !lodash_isFinite__WEBPACK_IMPORTED_MODULE_1___default()(edit_count) && !error) {
    return null;
  }

  var errorMessage = error ? intl.formatMessage(error) : undefined;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    interactionTarget: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["SECTION_TARGETS"].ACCESS_STATS,
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].sidebarAccessStats)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_access_stats_AccessStats__WEBPACK_IMPORTED_MODULE_3__["default"], {
    errorMessage: errorMessage,
    commentCount: comment_count,
    commentStatButtonProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["DETAILS_TARGETS"].ACCESS_STATS.COMMENTS
    },
    downloadCount: download_count,
    downloadStatButtonProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["DETAILS_TARGETS"].ACCESS_STATS.DOWNLOADS
    },
    previewCount: preview_count,
    previewStatButtonProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["DETAILS_TARGETS"].ACCESS_STATS.PREVIEWS
    },
    viewStatButtonProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["DETAILS_TARGETS"].ACCESS_STATS.VIEWS
    },
    editCount: edit_count,
    editStatButtonProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["DETAILS_TARGETS"].ACCESS_STATS.EDITS
    },
    openAccessStatsModal: onAccessStatsClick,
    isBoxNote: Object(_utils_file__WEBPACK_IMPORTED_MODULE_6__["isBoxNote"])(file),
    viewMoreButtonProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["DETAILS_TARGETS"].ACCESS_STATS.VIEW_DETAILS
    }
  }));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_withErrorHandling__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(SidebarAccessStats)));

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarClassification.js":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarClassification.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _features_classification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/classification */ "./src/features/classification/index.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _components_collapsible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/collapsible */ "./src/components/collapsible/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _SidebarClassification_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SidebarClassification.scss */ "./src/elements/content-sidebar/SidebarClassification.scss");
/* harmony import */ var _SidebarClassification_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SidebarClassification_scss__WEBPACK_IMPORTED_MODULE_7__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Classification sidebar component
 * @author Box
 */









var SidebarClassification = (_ref) => {
  var {
    classification,
    file,
    onEdit
  } = _ref;
  var isEditable = !!onEdit && lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, _constants__WEBPACK_IMPORTED_MODULE_6__["FIELD_PERMISSIONS_CAN_UPLOAD"], false);
  var hasClassification = !!lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(classification, 'name');

  if (!hasClassification && !isEditable) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_collapsible__WEBPACK_IMPORTED_MODULE_5__["default"], {
    buttonProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["SECTION_TARGETS"].CLASSIFICATION
    },
    className: "bcs-SidebarClassification",
    headerActionItems: isEditable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_classification__WEBPACK_IMPORTED_MODULE_3__["EditClassificationButton"], {
      className: "bcs-SidebarClassification-edit",
      isEditing: hasClassification,
      onEdit: onEdit
    }) : null,
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _features_classification__WEBPACK_IMPORTED_MODULE_3__["classificationMessages"].classification)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_classification__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, classification, {
    messageStyle: "inline"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarClassification);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarClassification.scss":
/*!*****************************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarClassification.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarFileProperties.js":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarFileProperties.js ***!
  \***************************************************************/
/*! exports provided: SidebarFilePropertiesComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarFilePropertiesComponent", function() { return SidebarFileProperties; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _features_item_details_ItemProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/item-details/ItemProperties */ "./src/features/item-details/ItemProperties.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicatorWrapper */ "./src/components/loading-indicator/LoadingIndicatorWrapper.js");
/* harmony import */ var _utils_getFileSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/getFileSize */ "./src/utils/getFileSize.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _withErrorHandling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./withErrorHandling */ "./src/elements/content-sidebar/withErrorHandling.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Sidebar file properties component
 * @author Box
 */









var SidebarFileProperties = (_ref) => {
  var {
    file,
    onDescriptionChange,
    hasRetentionPolicy,
    retentionPolicy,
    onRetentionPolicyExtendClick,
    isLoading,
    intl
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isLoading: isLoading
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_item_details_ItemProperties__WEBPACK_IMPORTED_MODULE_3__["default"], {
    createdAt: file.content_created_at,
    description: file.description,
    descriptionTextareaProps: {
      [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__["DETAILS_TARGETS"].DESCRIPTION
    },
    modifiedAt: file.content_modified_at,
    onDescriptionChange: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'permissions.can_rename') ? onDescriptionChange : undefined,
    owner: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'owned_by.name'),
    retentionPolicyProps: hasRetentionPolicy ? _objectSpread({}, retentionPolicy, {
      openModal: onRetentionPolicyExtendClick
    }) : {},
    size: Object(_utils_getFileSize__WEBPACK_IMPORTED_MODULE_5__["default"])(file.size, intl.locale),
    uploader: lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'created_by.name')
  }));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(Object(_withErrorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(SidebarFileProperties)));

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarNotices.js":
/*!********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarNotices.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_item_details_SharedLinkExpirationNotice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/item-details/SharedLinkExpirationNotice */ "./src/features/item-details/SharedLinkExpirationNotice.js");
/* harmony import */ var _features_item_details_ItemExpirationNotice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/item-details/ItemExpirationNotice */ "./src/features/item-details/ItemExpirationNotice.js");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/datetime */ "./src/utils/datetime.js");
/* harmony import */ var _common_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/date */ "./src/elements/common/date/index.js");
/**
 * 
 * @file Preview details sidebar notices component
 * @author Box
 */






var ONE_MINUTE_IN_MS = 60000;
var NOTICE_DATE_FORMAT = {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
};

var SidebarNotices = (_ref) => {
  var {
    file
  } = _ref;
  var itemExpiration = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'expires_at');
  var sharedLinkExpiration = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'shared_link.unshared_at');

  if (!itemExpiration && !sharedLinkExpiration) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, !!itemExpiration && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_features_item_details_ItemExpirationNotice__WEBPACK_IMPORTED_MODULE_3__["default"], {
    expiration: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_date__WEBPACK_IMPORTED_MODULE_5__["default"], {
      date: Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_4__["addTime"])(new Date(itemExpiration), ONE_MINUTE_IN_MS),
      dateFormat: NOTICE_DATE_FORMAT,
      relative: false
    }),
    itemType: "file"
  }), !!sharedLinkExpiration && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_features_item_details_SharedLinkExpirationNotice__WEBPACK_IMPORTED_MODULE_2__["default"], {
    expiration: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_date__WEBPACK_IMPORTED_MODULE_5__["default"], {
      date: Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_4__["addTime"])(new Date(sharedLinkExpiration), ONE_MINUTE_IN_MS),
      dateFormat: NOTICE_DATE_FORMAT,
      relative: false
    })
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarNotices);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarVersions.js":
/*!*********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarVersions.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_item_details_VersionHistoryLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/item-details/VersionHistoryLink */ "./src/features/item-details/VersionHistoryLink.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _utils_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/file */ "./src/utils/file.js");
/* harmony import */ var _SidebarVersions_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarVersions.scss */ "./src/elements/content-sidebar/SidebarVersions.scss");
/* harmony import */ var _SidebarVersions_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SidebarVersions_scss__WEBPACK_IMPORTED_MODULE_4__);
/**
 * 
 * @file Versions sidebar component
 * @author Box
 */






var SidebarVersions = (_ref) => {
  var {
    onVersionHistoryClick,
    file
  } = _ref;
  var {
    version_number
  } = file;
  var versionNumber = parseInt(version_number, 10);

  if (Object(_utils_file__WEBPACK_IMPORTED_MODULE_3__["isBoxNote"])(file) || !versionNumber || versionNumber <= 1) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_features_item_details_VersionHistoryLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bcs-SidebarVersions",
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["DETAILS_TARGETS"].VERSION_HISTORY,
    "data-testid": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["DETAILS_TARGETS"].VERSION_HISTORY,
    onClick: onVersionHistoryClick,
    versionCount: versionNumber
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarVersions);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarVersions.scss":
/*!***********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarVersions.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/withErrorHandling.js":
/*!***********************************************************!*\
  !*** ./src/elements/content-sidebar/withErrorHandling.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_error_mask_ErrorMask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/error-mask/ErrorMask */ "./src/components/error-mask/ErrorMask.js");
/* harmony import */ var _components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/inline-error/InlineError */ "./src/components/inline-error/InlineError.js");
/* harmony import */ var _SidebarSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarSection */ "./src/elements/content-sidebar/SidebarSection.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file withErrorHandling higher order component
 * @author Box
 */






var withErrorHandling = WrappedComponent => (_ref) => {
  var {
    maskError,
    inlineError,
    errorCode
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["maskError", "inlineError", "errorCode"]);

  if (maskError) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarSection__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_error_mask_ErrorMask__WEBPACK_IMPORTED_MODULE_2__["default"], {
      errorHeader: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], maskError.errorHeader),
      errorSubHeader: maskError.errorSubHeader ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], maskError.errorSubHeader) : undefined
    }));
  }

  if (inlineError) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], inlineError.title)
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], inlineError.content)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, rest));
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, rest);
};

/* harmony default export */ __webpack_exports__["default"] = (withErrorHandling);

/***/ }),

/***/ "./src/features/access-stats/AccessStats.js":
/*!**************************************************!*\
  !*** ./src/features/access-stats/AccessStats.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.js");
/* harmony import */ var _AccessStatsItemsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccessStatsItemsList */ "./src/features/access-stats/AccessStatsItemsList.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/access-stats/messages.js");
/* harmony import */ var _AccessStats_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AccessStats.scss */ "./src/features/access-stats/AccessStats.scss");
/* harmony import */ var _AccessStats_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AccessStats_scss__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var AccessStats = (_ref) => {
  var {
    commentCount = 0,
    commentStatButtonProps = {},
    downloadCount = 0,
    downloadStatButtonProps = {},
    editCount = 0,
    editStatButtonProps = {},
    errorMessage,
    hasCountOverflowed = false,
    isBoxNote = false,
    openAccessStatsModal,
    previewCount = 0,
    previewStatButtonProps = {},
    viewMoreButtonProps = {},
    viewStatButtonProps = {}
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "access-stats"
  }, errorMessage ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, errorMessage) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AccessStatsItemsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    commentCount: commentCount,
    commentStatButtonProps: commentStatButtonProps,
    downloadCount: downloadCount,
    downloadStatButtonProps: downloadStatButtonProps,
    editCount: editCount,
    editStatButtonProps: editStatButtonProps,
    hasCountOverflowed: hasCountOverflowed,
    isBoxNote: isBoxNote,
    openAccessStatsModal: openAccessStatsModal,
    previewCount: previewCount,
    previewStatButtonProps: previewStatButtonProps,
    viewStatButtonProps: viewStatButtonProps
  }), openAccessStatsModal && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    className: "lnk access-stats-view-details",
    onClick: openAccessStatsModal
  }, viewMoreButtonProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_4__["default"].accessStatsViewDetails))));
};

/* harmony default export */ __webpack_exports__["default"] = (AccessStats);

/***/ }),

/***/ "./src/features/access-stats/AccessStats.scss":
/*!****************************************************!*\
  !*** ./src/features/access-stats/AccessStats.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/access-stats/AccessStatsItem.js":
/*!******************************************************!*\
  !*** ./src/features/access-stats/AccessStatsItem.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.js");
/* harmony import */ var _icons_general_IconEye__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconEye */ "./src/icons/general/IconEye.js");
/* harmony import */ var _icons_general_IconComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/general/IconComment */ "./src/icons/general/IconComment.js");
/* harmony import */ var _icons_general_IconDownloadSolid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/general/IconDownloadSolid */ "./src/icons/general/IconDownloadSolid.js");
/* harmony import */ var _icons_general_IconPencilSolid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/general/IconPencilSolid */ "./src/icons/general/IconPencilSolid.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/features/access-stats/messages.js");
/* harmony import */ var _AccessStatsItem_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AccessStatsItem.scss */ "./src/features/access-stats/AccessStatsItem.scss");
/* harmony import */ var _AccessStatsItem_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_AccessStatsItem_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var statsAttributesTable = {
  preview: {
    icon: _icons_general_IconEye__WEBPACK_IMPORTED_MODULE_3__["default"],
    message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].accessStatsPreviews
  },
  view: {
    icon: _icons_general_IconEye__WEBPACK_IMPORTED_MODULE_3__["default"],
    message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].accessStatsViews
  },
  download: {
    icon: _icons_general_IconDownloadSolid__WEBPACK_IMPORTED_MODULE_5__["default"],
    message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].accessStatsDownloads
  },
  comment: {
    icon: _icons_general_IconComment__WEBPACK_IMPORTED_MODULE_4__["default"],
    message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].accessStatsComments
  },
  edit: {
    icon: _icons_general_IconPencilSolid__WEBPACK_IMPORTED_MODULE_6__["default"],
    message: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].accessStatsEdits
  }
};
var ICON_COLOR = '#2a62b9';
var ITEM_CONTENT_CLASS_NAME = 'access-stats-item-content';

var AccessStatsItem = (_ref) => {
  var {
    type,
    count = 0,
    hasCountOverflowed = false,
    openAccessStatsModal,
    statButtonProps
  } = _ref;
  var statAttributes = statsAttributesTable[type];
  var IconComponent = statAttributes.icon;
  var labelMessage = statAttributes.message;
  var itemContent = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IconComponent, {
    color: ICON_COLOR,
    height: 10,
    width: 14
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "access-stats-label"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], labelMessage)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedNumber"], {
    value: count
  }), hasCountOverflowed && '+');
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "access-stats-item"
  }, openAccessStatsModal ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    className: ITEM_CONTENT_CLASS_NAME,
    onClick: openAccessStatsModal
  }, statButtonProps), itemContent) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: ITEM_CONTENT_CLASS_NAME
  }, itemContent));
};

/* harmony default export */ __webpack_exports__["default"] = (AccessStatsItem);

/***/ }),

/***/ "./src/features/access-stats/AccessStatsItem.scss":
/*!********************************************************!*\
  !*** ./src/features/access-stats/AccessStatsItem.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/access-stats/AccessStatsItemsList.js":
/*!***********************************************************!*\
  !*** ./src/features/access-stats/AccessStatsItemsList.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccessStatsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccessStatsItem */ "./src/features/access-stats/AccessStatsItem.js");



var AccessStatsItemsList = (_ref) => {
  var {
    commentCount,
    commentStatButtonProps,
    downloadCount,
    downloadStatButtonProps,
    editCount,
    editStatButtonProps,
    hasCountOverflowed = false,
    isBoxNote,
    openAccessStatsModal,
    previewCount,
    previewStatButtonProps,
    viewStatButtonProps
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "access-stats-list"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AccessStatsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    count: previewCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: isBoxNote ? viewStatButtonProps : previewStatButtonProps,
    type: isBoxNote ? 'view' : 'preview'
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AccessStatsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    count: editCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: editStatButtonProps,
    type: "edit"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AccessStatsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    count: commentCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: commentStatButtonProps,
    type: "comment"
  }), !isBoxNote && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AccessStatsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    count: downloadCount,
    hasCountOverflowed: hasCountOverflowed,
    openAccessStatsModal: openAccessStatsModal,
    statButtonProps: downloadStatButtonProps,
    type: "download"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AccessStatsItemsList);

/***/ }),

/***/ "./src/features/access-stats/messages.js":
/*!***********************************************!*\
  !*** ./src/features/access-stats/messages.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  accessStatsViewDetails: {
    "id": "boxui.accessStats.accessStatsViewDetails",
    "defaultMessage": "View Details"
  },
  accessStatsViews: {
    "id": "boxui.accessStats.accessStatsViews",
    "defaultMessage": "Views"
  },
  accessStatsPreviews: {
    "id": "boxui.accessStats.accessStatsPreviews",
    "defaultMessage": "Previews"
  },
  accessStatsEdits: {
    "id": "boxui.accessStats.accessStatsEdits",
    "defaultMessage": "Edits"
  },
  accessStatsComments: {
    "id": "boxui.accessStats.accessStatsComments",
    "defaultMessage": "Comments"
  },
  accessStatsDownloads: {
    "id": "boxui.accessStats.accessStatsDownloads",
    "defaultMessage": "Downloads"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/features/classification/Classification.js":
/*!*******************************************************!*\
  !*** ./src/features/classification/Classification.js ***!
  \*******************************************************/
/*! exports provided: STYLE_INLINE, STYLE_TOOLTIP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_INLINE", function() { return STYLE_INLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_TOOLTIP", function() { return STYLE_TOOLTIP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_label_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/label/Label */ "./src/components/label/Label.js");
/* harmony import */ var _ClassifiedBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClassifiedBadge */ "./src/features/classification/ClassifiedBadge.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/classification/messages.js");
/* harmony import */ var _Classification_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Classification.scss */ "./src/features/classification/Classification.scss");
/* harmony import */ var _Classification_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Classification_scss__WEBPACK_IMPORTED_MODULE_5__);






var STYLE_INLINE = 'inline';
var STYLE_TOOLTIP = 'tooltip';

var Classification = (_ref) => {
  var {
    definition,
    className = '',
    messageStyle,
    name,
    onClick
  } = _ref;
  var isClassified = !!name;
  var hasDefinition = !!definition;
  var isTooltipMessageEnabled = isClassified && hasDefinition && messageStyle === STYLE_TOOLTIP;
  var isInlineMessageEnabled = isClassified && hasDefinition && messageStyle === STYLE_INLINE;
  var isNotClassifiedMessageVisible = !isClassified && messageStyle === STYLE_INLINE;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("article", {
    className: "bdl-Classification ".concat(className)
  }, isClassified && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ClassifiedBadge__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: name,
    onClick: onClick,
    tooltipText: isTooltipMessageEnabled ? definition : undefined
  }), isInlineMessageEnabled && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_label_Label__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_4__["default"].definition)
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "bdl-Classification-definition"
  }, definition)), isNotClassifiedMessageVisible && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bdl-Classification-missingMessage"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_4__["default"].missing)));
};


/* harmony default export */ __webpack_exports__["default"] = (Classification);

/***/ }),

/***/ "./src/features/classification/Classification.scss":
/*!*********************************************************!*\
  !*** ./src/features/classification/Classification.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/classification/ClassifiedBadge.js":
/*!********************************************************!*\
  !*** ./src/features/classification/ClassifiedBadge.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tooltip */ "./src/components/tooltip/index.js");
/* harmony import */ var _icons_general_IconSecurityClassification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconSecurityClassification */ "./src/icons/general/IconSecurityClassification.js");
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security */ "./src/features/security/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");
/* harmony import */ var _ClassifiedBadge_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClassifiedBadge.scss */ "./src/features/classification/ClassifiedBadge.scss");
/* harmony import */ var _ClassifiedBadge_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ClassifiedBadge_scss__WEBPACK_IMPORTED_MODULE_6__);








var ClassifiedBadge = (_ref) => {
  var {
    name,
    onClick,
    tooltipPosition = 'bottom-center',
    tooltipText
  } = _ref;
  var isClickable = typeof onClick === 'function';
  var isTooltipDisabled = !tooltipText;
  var badge = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_security__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "bdl-ClassifiedBadge",
    icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconSecurityClassification__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: _styles_variables__WEBPACK_IMPORTED_MODULE_5__["bdlYellorange"],
      height: 10,
      width: 10,
      strokeWidth: 3
    }),
    message: name
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isDisabled: isTooltipDisabled,
    isTabbable: false,
    position: tooltipPosition,
    text: tooltipText
  }, isClickable ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bdl-ClassifiedBadge-editButton",
    "data-resin-target": "editclassification",
    onClick: onClick,
    type: "button"
  }, badge) : badge);
};

/* harmony default export */ __webpack_exports__["default"] = (ClassifiedBadge);

/***/ }),

/***/ "./src/features/classification/ClassifiedBadge.scss":
/*!**********************************************************!*\
  !*** ./src/features/classification/ClassifiedBadge.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/classification/EditClassificationButton.js":
/*!*****************************************************************!*\
  !*** ./src/features/classification/EditClassificationButton.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./src/features/classification/messages.js");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Classification add/edit button
 * @author Box
 */





var EditClassificationButton = (_ref) => {
  var {
    className = '',
    isEditing,
    onEdit
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "isEditing", "onEdit"]);

  var message = isEditing ? _messages__WEBPACK_IMPORTED_MODULE_2__["default"].edit : _messages__WEBPACK_IMPORTED_MODULE_2__["default"].add;
  var interaction = isEditing ? 'editclassification' : 'addclassification';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    className: "bdl-EditClassificationButton ".concat(className),
    "data-resin-target": interaction,
    onClick: onEdit,
    type: "button"
  }, rest), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], message));
};

/* harmony default export */ __webpack_exports__["default"] = (EditClassificationButton);

/***/ }),

/***/ "./src/features/classification/index.js":
/*!**********************************************!*\
  !*** ./src/features/classification/index.js ***!
  \**********************************************/
/*! exports provided: default, ClassifiedBadge, classificationMessages, EditClassificationButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Classification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classification */ "./src/features/classification/Classification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Classification__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ClassifiedBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClassifiedBadge */ "./src/features/classification/ClassifiedBadge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassifiedBadge", function() { return _ClassifiedBadge__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./src/features/classification/messages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classificationMessages", function() { return _messages__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _EditClassificationButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditClassificationButton */ "./src/features/classification/EditClassificationButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditClassificationButton", function() { return _EditClassificationButton__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/features/classification/messages.js":
/*!*************************************************!*\
  !*** ./src/features/classification/messages.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  add: {
    "id": "boxui.classification.add",
    "defaultMessage": "Add"
  },
  classification: {
    "id": "boxui.classification.classification",
    "defaultMessage": "Classification"
  },
  definition: {
    "id": "boxui.classification.definition",
    "defaultMessage": "Definition"
  },
  edit: {
    "id": "boxui.classification.edit",
    "defaultMessage": "Edit"
  },
  missing: {
    "id": "boxui.classification.missing",
    "defaultMessage": "Not classified"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/features/item-details/EditableDescription.js":
/*!**********************************************************!*\
  !*** ./src/features/item-details/EditableDescription.js ***!
  \**********************************************************/
/*! exports provided: EditableDescriptionBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableDescriptionBase", function() { return EditableDescription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/features/item-details/messages.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class EditableDescription extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleBlur", () => {
      var {
        value
      } = this.state;
      this.props.onDescriptionChange(value);
    });

    _defineProperty(this, "handleChange", event => {
      var {
        value
      } = event.currentTarget;
      this.setState({
        value
      });
    });

    this.state = {
      value: props.value || ''
    };
  }

  componentDidUpdate(_ref) {
    var {
      value: prevValue
    } = _ref;
    var {
      value
    } = this.props;

    if (prevValue !== value) {
      this.setState({
        value
      });
    }
  }

  render() {
    var {
      intl,
      textAreaProps
    } = this.props;
    var {
      value
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, textAreaProps, {
      className: "description-textarea",
      maxLength: "255",
      maxRows: 6,
      onBlur: this.handleBlur,
      onChange: this.handleChange,
      placeholder: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_3__["default"].descriptionPlaceholder),
      value: value
    }));
  }

}

_defineProperty(EditableDescription, "defaultProps", {
  textAreaProps: {},
  value: ''
});


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(EditableDescription));

/***/ }),

/***/ "./src/features/item-details/EditableURL.js":
/*!**************************************************!*\
  !*** ./src/features/item-details/EditableURL.js ***!
  \**************************************************/
/*! exports provided: EditableURLBase, VALUE_MISSING, TYPE_MISMATCH, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableURLBase", function() { return EditableURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUE_MISSING", function() { return VALUE_MISSING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_MISMATCH", function() { return TYPE_MISMATCH; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/text-input/TextInput */ "./src/components/text-input/TextInput.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/messages */ "./src/common/messages.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/item-details/messages.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var VALUE_MISSING = 'valueMissing';
var TYPE_MISMATCH = 'typeMismatch';
var errorMap = {
  [VALUE_MISSING]: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].requiredFieldError),
  [TYPE_MISMATCH]: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].invalidURLError)
};

class EditableURL extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      error: '',
      value: this.props.value
    });

    _defineProperty(this, "handleBlur", () => {
      if (!this.inputEl) {
        return;
      }

      var {
        valid,
        valueMissing
      } = this.inputEl.validity;

      if (!valid) {
        this.setState({
          error: valueMissing ? VALUE_MISSING : TYPE_MISMATCH
        });
        return;
      }

      this.props.onValidURLChange(this.state.value);
    });

    _defineProperty(this, "handleChange", event => {
      this.setState({
        value: event.currentTarget.value
      });
    });

    _defineProperty(this, "handleFocus", () => {
      this.setState({
        error: ''
      });
    });
  }

  componentDidUpdate(_ref) {
    var {
      value: prevValue
    } = _ref;
    var {
      value
    } = this.props;

    if (prevValue !== value) {
      this.setState({
        value
      });
    }
  }

  render() {
    var {
      intl: {
        formatMessage
      }
    } = this.props;
    var {
      error,
      value
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_text_input_TextInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "url-input",
      error: error ? errorMap[error] : undefined,
      hideLabel: true,
      inputRef: ref => {
        this.inputEl = ref;
      },
      isRequired: true,
      label: formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].url),
      onBlur: this.handleBlur,
      onChange: this.handleChange,
      onFocus: this.handleFocus,
      placeholder: formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].urlPlaceholder),
      type: "url",
      value: value
    });
  }

}


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(EditableURL));

/***/ }),

/***/ "./src/features/item-details/ItemExpirationNotice.js":
/*!***********************************************************!*\
  !*** ./src/features/item-details/ItemExpirationNotice.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_inline_notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/inline-notice */ "./src/components/inline-notice/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/item-details/messages.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var FILE = 'file';
var FOLDER = 'folder';
var WEBLINK = 'web_link';

var ItemExpirationNotice = (_ref) => {
  var {
    expiration,
    itemType
  } = _ref;
  var messageID = '';

  switch (itemType) {
    case FILE:
      messageID = 'fileExpiration';
      break;

    case FOLDER:
      messageID = 'folderExpiration';
      break;

    case WEBLINK:
      messageID = 'bookmarkExpiration';
      break;
    // no default
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_inline_notice__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_4__["default"][messageID], {
    values: {
      expiration
    }
  })));
};

ItemExpirationNotice.propTypes = {
  /** a localized, human-readable string/node representing the expiration date */
  expiration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,

  /** the type of the item */
  itemType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([FILE, FOLDER, WEBLINK]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ItemExpirationNotice);

/***/ }),

/***/ "./src/features/item-details/ItemProperties.js":
/*!*****************************************************!*\
  !*** ./src/features/item-details/ItemProperties.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _EditableDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditableDescription */ "./src/features/item-details/EditableDescription.js");
/* harmony import */ var _EditableURL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditableURL */ "./src/features/item-details/EditableURL.js");
/* harmony import */ var _RetentionPolicy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RetentionPolicy */ "./src/features/item-details/RetentionPolicy.js");
/* harmony import */ var _ReadonlyDescription__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReadonlyDescription */ "./src/features/item-details/ReadonlyDescription.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages */ "./src/features/item-details/messages.js");
/* harmony import */ var _ItemProperties_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ItemProperties.scss */ "./src/features/item-details/ItemProperties.scss");
/* harmony import */ var _ItemProperties_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ItemProperties_scss__WEBPACK_IMPORTED_MODULE_9__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var datetimeOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
};

var ItemProperties = (_ref) => {
  var {
    createdAt,
    description,
    descriptionTextareaProps = {},
    enterpriseOwner,
    modifiedAt,
    onDescriptionChange,
    onValidURLChange,
    owner,
    retentionPolicyProps = {},
    size,
    trashedAt,
    uploader,
    url
  } = _ref;
  var descriptionId = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('description_');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", {
    className: "item-properties"
  }, description || onDescriptionChange ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].description, text => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", {
    id: descriptionId
  }, text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, onDescriptionChange ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditableDescription__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onDescriptionChange: onDescriptionChange,
    textAreaProps: _objectSpread({}, descriptionTextareaProps, {
      'aria-labelledby': descriptionId
    }),
    value: description
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReadonlyDescription__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: description
  }))) : null, !!url && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].url)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, onValidURLChange ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditableURL__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onValidURLChange: onValidURLChange,
    value: url
  }) : url)), owner ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].owner)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, owner)) : null, enterpriseOwner ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].enterpriseOwner)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, enterpriseOwner)) : null, uploader ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].uploader)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, uploader)) : null, createdAt ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].created)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedDate"], _extends({
    value: new Date(createdAt)
  }, datetimeOptions)))) : null, modifiedAt ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].modified)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedDate"], _extends({
    value: new Date(modifiedAt)
  }, datetimeOptions)))) : null, size ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].size)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, size)) : null, trashedAt ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_8__["default"].deleted)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedDate"], _extends({
    value: new Date(trashedAt)
  }, datetimeOptions)))) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RetentionPolicy__WEBPACK_IMPORTED_MODULE_6__["default"], retentionPolicyProps));
};

ItemProperties.propTypes = {
  /** the datetime this item was created, accepts any value that can be passed to the Date() constructor */
  createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),

  /** a description for the item */
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** props for the editable description textarea */
  descriptionTextareaProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /** the name of the item's enterprise owner if the item is owned by a different enterprise */
  enterpriseOwner: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** the datetime this item was last modified, accepts any value that can be passed to the Date() constructor */
  modifiedAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),

  /** function called on description textarea blur with the new value to save */
  onDescriptionChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /** function called on url input blur with the new value to save */
  onValidURLChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /** the name of the item's owner */
  owner: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** props for the retention policy of this item */
  retentionPolicyProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /** use the getFileSize util to get a localized human-readable string from the number of bytes */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** the datetime this item was deleted or moved to trash, accepts any value that can be passed to the Date() constructor */
  trashedAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),

  /** the name of the user who uploaded this item */
  uploader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** the URL for the item when the item is a weblink */
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ItemProperties);

/***/ }),

/***/ "./src/features/item-details/ItemProperties.scss":
/*!*******************************************************!*\
  !*** ./src/features/item-details/ItemProperties.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/item-details/ReadonlyDescription.js":
/*!**********************************************************!*\
  !*** ./src/features/item-details/ReadonlyDescription.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_process_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-process-string */ "./node_modules/react-process-string/dist/index.js");
/* harmony import */ var react_process_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_process_string__WEBPACK_IMPORTED_MODULE_2__);



var NEWLINE_REGEX = /(\r\n|\n\r|\n|\r)/g; // eslint-disable-next-line no-useless-escape

var URL_REGEX = /\b(ht|f)tps?:\/\/[\w\._\-]+(:\d+)?(\/[\w\-_\.~\+\/#\?&%=:\[\]@!\$'\(\)\*;,]*)?/gim;

var ReadonlyDescription = (_ref) => {
  var {
    value
  } = _ref;
  return react_process_string__WEBPACK_IMPORTED_MODULE_2___default()([{
    regex: NEWLINE_REGEX,
    // eslint-disable-next-line react/display-name
    fn: key => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      key: key
    })
  }, {
    regex: URL_REGEX,
    // eslint-disable-next-line react/display-name
    fn: (key, result) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: key,
      href: result[0],
      rel: "noopener noreferrer",
      target: "_blank"
    }, result[0])
  }])(value);
};

ReadonlyDescription.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ReadonlyDescription);

/***/ }),

/***/ "./src/features/item-details/RetentionPolicy.js":
/*!******************************************************!*\
  !*** ./src/features/item-details/RetentionPolicy.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/features/item-details/messages.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var datetimeOptions = {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
};

var RetentionPolicy = (_ref) => {
  var {
    dispositionTime,
    openModal,
    policyType,
    retentionPolicyDescription
  } = _ref;

  if (!retentionPolicyDescription) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_3__["default"].retentionPolicyDescription)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, retentionPolicyDescription), policyType !== 'indefinite' ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({
    tagName: "dt"
  }, _messages__WEBPACK_IMPORTED_MODULE_3__["default"].retentionPolicyExpiration)), dispositionTime ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("dd", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedDate"], _extends({
    value: new Date(dispositionTime)
  }, datetimeOptions)), openModal ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "lnk",
    onClick: openModal
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].retentionPolicyExtend)) : null) : null) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (RetentionPolicy);

/***/ }),

/***/ "./src/features/item-details/SharedLinkExpirationNotice.js":
/*!*****************************************************************!*\
  !*** ./src/features/item-details/SharedLinkExpirationNotice.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_inline_notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/inline-notice */ "./src/components/inline-notice/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/item-details/messages.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var SharedLinkExpirationNotice = (_ref) => {
  var {
    expiration
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_inline_notice__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_4__["default"].sharedLinkExpiration, {
    values: {
      expiration
    }
  })));
};

SharedLinkExpirationNotice.propTypes = {
  /** a localized, human-readable string/node representing the expiration date */
  expiration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SharedLinkExpirationNotice);

/***/ }),

/***/ "./src/features/item-details/VersionHistoryLink.js":
/*!*********************************************************!*\
  !*** ./src/features/item-details/VersionHistoryLink.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/features/item-details/messages.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var VersionHistoryLink = (_ref) => {
  var {
    className,
    versionCount,
    onClick
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "versionCount", "onClick"]);

  var formattedMessageComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_4__["default"].savedVersions, {
    values: {
      versionCount
    }
  })); // Only render it as a link if there is an onClick

  if (onClick) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_plain_button__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('lnk', className),
      onClick: onClick
    }, rest), formattedMessageComponent);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, formattedMessageComponent);
};

VersionHistoryLink.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (VersionHistoryLink);

/***/ }),

/***/ "./src/features/item-details/messages.js":
/*!***********************************************!*\
  !*** ./src/features/item-details/messages.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  bookmarkExpiration: {
    "id": "boxui.itemDetails.bookmarkExpiration",
    "defaultMessage": "This bookmark will be deleted on {expiration}."
  },
  created: {
    "id": "boxui.itemDetails.created",
    "defaultMessage": "Created"
  },
  deleted: {
    "id": "boxui.itemDetails.deleted",
    "defaultMessage": "Deleted"
  },
  description: {
    "id": "boxui.itemDetails.description",
    "defaultMessage": "Description"
  },
  descriptionPlaceholder: {
    "id": "boxui.itemDetails.descriptionPlaceholder",
    "defaultMessage": "Enter a description"
  },
  enterpriseOwner: {
    "id": "boxui.itemDetails.enterpriseOwner",
    "defaultMessage": "Enterprise Owner"
  },
  fileExpiration: {
    "id": "boxui.itemDetails.fileExpiration",
    "defaultMessage": "This file will be deleted on {expiration}."
  },
  folderExpiration: {
    "id": "boxui.itemDetails.folderExpiration",
    "defaultMessage": "This folder will be deleted on {expiration}."
  },
  modified: {
    "id": "boxui.itemDetails.modified",
    "defaultMessage": "Modified"
  },
  owner: {
    "id": "boxui.itemDetails.owner",
    "defaultMessage": "Owner"
  },
  retentionPolicyDescription: {
    "id": "boxui.itemDetails.retentionPolicyDescription",
    "defaultMessage": "Policy"
  },
  retentionPolicyExpiration: {
    "id": "boxui.itemDetails.retentionPolicyExpiration",
    "defaultMessage": "Policy Expiration"
  },
  retentionPolicyExtend: {
    "id": "boxui.itemDetails.retentionPolicyExtend",
    "defaultMessage": "Extend"
  },
  savedVersions: {
    "id": "boxui.itemDetails.savedVersions",
    "defaultMessage": "{versionCount, number} Saved Versions"
  },
  sharedLinkExpiration: {
    "id": "boxui.itemDetails.sharedLinkExpiration",
    "defaultMessage": "This shared link will be disabled on {expiration}."
  },
  size: {
    "id": "boxui.itemDetails.size",
    "defaultMessage": "Size"
  },
  uploader: {
    "id": "boxui.itemDetails.uploader",
    "defaultMessage": "Uploader"
  },
  url: {
    "id": "boxui.itemDetails.url",
    "defaultMessage": "URL"
  },
  urlPlaceholder: {
    "id": "boxui.itemDetails.urlPlaceholder",
    "defaultMessage": "Enter a valid url"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/features/security/SecurityBadge.js":
/*!************************************************!*\
  !*** ./src/features/security/SecurityBadge.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_general_IconAlertDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/general/IconAlertDefault */ "./src/icons/general/IconAlertDefault.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");
/* harmony import */ var _SecurityBadge_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SecurityBadge.scss */ "./src/features/security/SecurityBadge.scss");
/* harmony import */ var _SecurityBadge_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SecurityBadge_scss__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var SecurityBadge = (_ref) => {
  var {
    className,
    icon,
    message
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "icon", "message"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-SecurityBadge', className)
  }, rest), icon, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bdl-SecurityBadge-name"
  }, message));
};

SecurityBadge.defaultProps = {
  icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconAlertDefault__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_3__["bdlYellorange"],
    height: 22,
    width: 22,
    strokeWidth: 3
  })
};
/* harmony default export */ __webpack_exports__["default"] = (SecurityBadge);

/***/ }),

/***/ "./src/features/security/SecurityBadge.scss":
/*!**************************************************!*\
  !*** ./src/features/security/SecurityBadge.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/features/security/index.js":
/*!****************************************!*\
  !*** ./src/features/security/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SecurityBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecurityBadge */ "./src/features/security/SecurityBadge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SecurityBadge__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/icons/general/IconComment.js":
/*!******************************************!*\
  !*** ./src/icons/general/IconComment.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconComment = (_ref) => {
  var {
    className = '',
    color = '#000000',
    height = 11,
    title,
    width = 11
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-comment ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 11 11",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M9.556.932H1.492C.938.932.49 1.386.49 1.94l-.006 9.072L2.5 8.996h7.056c.554 0 1.008-.454 1.008-1.008V1.94c0-.554-.454-1.008-1.008-1.008zM2.5 4.46h6.048v1.008H2.5V4.46zm4.032 2.52H2.5V5.972h4.032V6.98zm2.016-3.024H2.5V2.948h6.048v1.008z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconComment);

/***/ }),

/***/ "./src/icons/general/IconDownloadSolid.js":
/*!************************************************!*\
  !*** ./src/icons/general/IconDownloadSolid.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconDownloadSolid = (_ref) => {
  var {
    className = '',
    color = '#000000',
    height = 10,
    title,
    width = 10
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-download-solid ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 10 10",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M9.658 4.304H7.143V.634h-3.77v3.67H.857l4.4 4.283 4.4-4.283zM.858 9.81v1.224h8.8V9.81h-8.8z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconDownloadSolid);

/***/ }),

/***/ "./src/icons/general/IconEye.js":
/*!**************************************!*\
  !*** ./src/icons/general/IconEye.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconEye = (_ref) => {
  var {
    className = '',
    color = '#000000',
    height = 11,
    title,
    width = 15
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-eye ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 15 11",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M.118 5.857C1.233 8.855 3.986 10.98 7.21 10.98c3.223 0 5.976-2.125 7.09-5.123C13.187 2.86 10.434.735 7.21.735 3.986.735 1.233 2.86.118 5.857zM7.21 9.27c-1.78 0-3.224-1.528-3.224-3.413 0-1.885 1.444-3.414 3.224-3.414 1.78 0 3.223 1.53 3.223 3.414 0 1.885-1.444 3.414-3.223 3.414zm0-5.462c-1.07 0-1.935.915-1.935 2.05 0 1.133.864 2.048 1.935 2.048 1.07 0 1.934-.915 1.934-2.05 0-1.133-.864-2.048-1.934-2.048z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconEye);

/***/ }),

/***/ "./src/icons/general/IconInfo.js":
/*!***************************************!*\
  !*** ./src/icons/general/IconInfo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconInfo = (_ref) => {
  var {
    className = '',
    color = '#000000',
    height = 24,
    title,
    width = 24
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-info ".concat(className),
    height: height,
    title: title,
    viewBox: "-603 389 16 16",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M-595 403c5.5 0 8-7.1 3.9-10.6-4.2-3.6-10.8.3-9.8 5.7.5 2.8 3 4.9 5.9 4.9zm.9-6.7v3.7h-1.4v-3.7h1.4zm.1-2.2c0 1-1.7 1.1-1.7 0 .1-1.1 1.7-1.1 1.7 0z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconInfo);

/***/ }),

/***/ "./src/icons/general/IconPencilSolid.js":
/*!**********************************************!*\
  !*** ./src/icons/general/IconPencilSolid.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconPencilSolid = (_ref) => {
  var {
    className = '',
    color = '#000000',
    height = 10,
    title,
    width = 10
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-pencil-solid ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 10 10",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M.5 7.625V9.5h1.875l5.53-5.53-1.876-1.874L.5 7.626zM9.354 2.52c.195-.194.195-.51 0-.704L8.184.646C7.99.45 7.674.45 7.48.646l-.916.915L8.44 3.437l.914-.915z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconPencilSolid);

/***/ }),

/***/ "./src/icons/general/IconSecurityClassification.js":
/*!*********************************************************!*\
  !*** ./src/icons/general/IconSecurityClassification.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");





var IconSecurityClassification = (_ref) => {
  var {
    className = '',
    height = 32,
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_3__["bdlGray"],
    title,
    strokeWidth = 2,
    width = 32
  } = _ref;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-IconSecurityClassification', className);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes,
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M17,2 L5,8 L5,15 C5,21.4214876 10.6933333,29.5421488 17,31 C23.3066667,29.5421488 29,21.4214876 29,15 L29,8 L17,2 Z",
    stroke: color,
    strokeWidth: strokeWidth,
    fill: "none"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M23,11 L23,19",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconSecurityClassification);

/***/ }),

/***/ "./src/icons/general/IconVerified.js":
/*!*******************************************!*\
  !*** ./src/icons/general/IconVerified.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");




var IconVerified = (_ref) => {
  var {
    className = '',
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGreenLight"],
    height = 14,
    opacity = 1,
    title,
    width = 14
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "icon-verified ".concat(className),
    height: height,
    opacity: opacity,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M7 14c-3.865993 0-7-3.134007-7-7s3.134007-7 7-7 7 3.134007 7 7-3.134007 7-7 7zM5.31288 9.303048l1.44555 1.21296 4.499514-5.36231-1.44555-1.21296-4.499514 5.36231zM3 7.36231L5.31288 9.30305l1.21296-1.44555L4.21296 5.91676 3 7.36231z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconVerified);

/***/ }),

/***/ "./src/utils/getFileSize.js":
/*!**********************************!*\
  !*** ./src/utils/getFileSize.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! filesize */ "./node_modules/filesize/lib/filesize.js");
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_0__);

var defaultDigitalUnits = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
var bcp47TagToDigitalUnits = {
  fi: ['t', 'kt', 'Mt', 'Gt', 'Tt', 'Pt', 'Et', 'Zt', 'Yt'],
  fr: ['o', 'Ko', 'Mo', 'Go', 'To', 'Po', 'Eo', 'Zo', 'Yo'],
  ru: ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ', 'ПБ', 'ЭБ', 'ЗБ', 'ЙБ']
};
/**
 * Formats a file size from number of bytes to a human-readable, localized string.
 * @param {number} size Number of bytes
 * @param {string} [locale] Optional locale, defaults to 'en'
 * @returns {string} The size as a localized string
 */

var getFileSize = function getFileSize(size) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';
  var settings = {
    round: 1
  };
  var localizedUnits = bcp47TagToDigitalUnits[locale];

  if (localizedUnits) {
    // map default units to localized units, ex. { B: Б, KB: КБ, ... }
    settings.symbols = defaultDigitalUnits.reduce((symbols, unit, index) => {
      symbols[unit] = localizedUnits[index];
      return symbols;
    }, {});
  }

  return filesize__WEBPACK_IMPORTED_MODULE_0___default()(size, settings);
};

/* harmony default export */ __webpack_exports__["default"] = (getFileSize);

/***/ })

}]);
//# sourceMappingURL=details-sidebar.js.map
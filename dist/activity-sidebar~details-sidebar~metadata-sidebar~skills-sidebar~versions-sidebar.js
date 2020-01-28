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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-sidebar~details-sidebar~metadata-sidebar~skills-sidebar~versions-sidebar"],{

/***/ "./src/components/inline-error/InlineError.js":
/*!****************************************************!*\
  !*** ./src/components/inline-error/InlineError.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inline_notice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inline-notice */ "./src/components/inline-notice/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var InlineError = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_inline_notice__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
  type: "error"
}));

/* harmony default export */ __webpack_exports__["default"] = (InlineError);

/***/ }),

/***/ "./src/components/inline-notice/InlineNotice.js":
/*!******************************************************!*\
  !*** ./src/components/inline-notice/InlineNotice.js ***!
  \******************************************************/
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




var InlineNotice = (_ref) => {
  var {
    children,
    className = '',
    title,
    type = 'warning'
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className", "title", "type"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'inline-alert', 'inline-alert-visible', "inline-alert-".concat(type))
  }, rest), title ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, title) : null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, children));
};

/* harmony default export */ __webpack_exports__["default"] = (InlineNotice);

/***/ }),

/***/ "./src/components/inline-notice/index.js":
/*!***********************************************!*\
  !*** ./src/components/inline-notice/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InlineNotice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InlineNotice */ "./src/components/inline-notice/InlineNotice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InlineNotice__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/loading-indicator/LoadingIndicatorWrapper.js":
/*!*********************************************************************!*\
  !*** ./src/components/loading-indicator/LoadingIndicatorWrapper.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingIndicator */ "./src/components/loading-indicator/LoadingIndicator.js");
/* harmony import */ var _LoadingIndicatorWrapper_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoadingIndicatorWrapper.scss */ "./src/components/loading-indicator/LoadingIndicatorWrapper.scss");
/* harmony import */ var _LoadingIndicatorWrapper_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LoadingIndicatorWrapper_scss__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var CENTER = 'center';
var TOP = 'top';

var LoadingIndicatorWrapper = (_ref) => {
  var {
    children,
    className = '',
    crawlerPosition = CENTER,
    crawlerSize = 'default',
    isLoading = false,
    hideContent = false
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className", "crawlerPosition", "crawlerSize", "isLoading", "hideContent"]);

  var crawlerPositionClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('loading-indicator-veil', {
    'is-with-top-crawler': crawlerPosition === TOP,
    'is-with-center-crawler': crawlerPosition === CENTER
  }, hideContent ? 'hide-content' : 'blur-content');
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
    className: "loading-indicator-wrapper ".concat(className)
  }, rest), children, isLoading && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: crawlerPositionClassName
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: crawlerSize
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingIndicatorWrapper);

/***/ }),

/***/ "./src/components/loading-indicator/LoadingIndicatorWrapper.scss":
/*!***********************************************************************!*\
  !*** ./src/components/loading-indicator/LoadingIndicatorWrapper.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/loading-indicator/index.js":
/*!***************************************************!*\
  !*** ./src/components/loading-indicator/index.js ***!
  \***************************************************/
/*! exports provided: makeLoadable, LoadingIndicatorWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeLoadable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeLoadable */ "./src/components/loading-indicator/makeLoadable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeLoadable", function() { return _makeLoadable__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingIndicatorWrapper */ "./src/components/loading-indicator/LoadingIndicatorWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorWrapper", function() { return _LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingIndicator */ "./src/components/loading-indicator/LoadingIndicator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/components/loading-indicator/makeLoadable.js":
/*!**********************************************************!*\
  !*** ./src/components/loading-indicator/makeLoadable.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingIndicator */ "./src/components/loading-indicator/LoadingIndicator.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function makeLoadable(BaseComponent) {
  var LoadableComponent = (_ref) => {
    var {
      isLoading = false,
      loadingIndicatorProps = {}
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["isLoading", "loadingIndicatorProps"]);

    return isLoading ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__["default"], loadingIndicatorProps) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BaseComponent, rest);
  };

  LoadableComponent.displayName = "Loadable".concat(BaseComponent.displayName || BaseComponent.name || 'Component');
  return LoadableComponent;
}

/* harmony default export */ __webpack_exports__["default"] = (makeLoadable);

/***/ }),

/***/ "./src/utils/datetime.js":
/*!*******************************!*\
  !*** ./src/utils/datetime.js ***!
  \*******************************/
/*! exports provided: convertToDate, convertToMs, convertDateToUnixMidnightTime, convertISOStringToUTCDate, convertISOStringtoRFC3339String, isToday, isTomorrow, isValidDate, isYesterday, isCurrentMonth, isCurrentYear, formatTime, addTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToDate", function() { return convertToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToMs", function() { return convertToMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDateToUnixMidnightTime", function() { return convertDateToUnixMidnightTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertISOStringToUTCDate", function() { return convertISOStringToUTCDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertISOStringtoRFC3339String", function() { return convertISOStringtoRFC3339String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTomorrow", function() { return isTomorrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return isValidDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isYesterday", function() { return isYesterday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCurrentMonth", function() { return isCurrentMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCurrentYear", function() { return isCurrentYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTime", function() { return addTime; });
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNaN */ "./node_modules/lodash/isNaN.js");
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__);
/**
 * 
 * @file Date and time utilities
 * @author Box
 */

var MILLISECONDS_PER_SECOND = 1000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds

var MILLISECONDS_PER_DAY = 24 * 60 * 60 * MILLISECONDS_PER_SECOND; // 60 sec * 1000

var MILLISECONDS_PER_MINUTE = 60 * MILLISECONDS_PER_SECOND;
/**
 * RegExp matcher for acceptable ISO 8601 date formats w/ timezone (see below)
 * Capture groups structured as follows:
 * 1) the date/time portion (2018-06-13T00:00:00.000)
 * 2) the milliseconds (if matched)
 * 3) the timezone portion (e.g., Z, +03, -0400, +05:00)
 * 4) the Z format for timezone (if matched)
 * 5) the short format for timezone (if matched)
 * 6) the colon-less format for timezone (if matched)
 * 7) the colon long format for timezone (if matched)
 */

var RE_ISO8601_DATE = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?)?((Z$)|(?:[+-](?:([0-2]\d$)|([0-2]\d(?:00|30)$)|([0-2]\d:(?:00|30)$))))$/;
var ISO8601_DATETIME = 1;
var ISO8601_MILLISECONDS = 2;
var ISO8601_TIMEZONE = 3;
var ISO8601_Z_FMT = 4;
var ISO8601_SHORT_FMT = 5;
var ISO8601_MEDIUM_FMT = 6;
var ISO8601_LONG_FMT = 7;
/**
 * Helper to normalize a date value to a date object
 * @param dateValue - Date number, string, or object
 * @returns {date} the normalized date object
 */

function convertToDate(dateValue) {
  return dateValue instanceof Date ? dateValue : new Date(dateValue);
}
/**
 * Converts an integer value in seconds to milliseconds.
 * @param {number} seconds - The value in seconds
 * @returns {number} the value in milliseconds
 */


function convertToMs(seconds) {
  return seconds * MILLISECONDS_PER_SECOND;
}
/**
 * Checks whether the given date value (in unix milliseconds) is today.
 * @param {number|string|Date} dateValue - Date object or integer representing the number of milliseconds since 1/1/1970 UTC
 * @returns {boolean} whether the given value is today
 */


function isToday(dateValue) {
  return new Date().toDateString() === convertToDate(dateValue).toDateString();
}
/**
 * Checks whether the given date value (in unix milliseconds) is yesterday.
 * @param {number|string|Date} dateValue - Date object or integer or representing the number of milliseconds since 1/1/1970 UTC
 * @returns {boolean} whether the given value is yesterday
 */


function isYesterday(dateValue) {
  return isToday(convertToDate(dateValue).getTime() + MILLISECONDS_PER_DAY);
}
/**
 * Checks whether the given date value (in unix milliseconds) is tomorrow.
 * @param {number|string|Date} dateValue - Date object or integer or representing the number of milliseconds since 1/1/1970 UTC
 * @returns {boolean} whether the given value is tomorrow
 */


function isTomorrow(dateValue) {
  return isToday(convertToDate(dateValue).getTime() - MILLISECONDS_PER_DAY);
}
/**
 * Checks whether the given date value (in unix milliseconds) is in the current month.
 * @param {number|string|Date} dateValue - Date object or integer representing the number of milliseconds since 1/1/1970 UTC
 * @returns {boolean} whether the given value is in the current month
 */


function isCurrentMonth(dateValue) {
  return new Date().getMonth() === convertToDate(dateValue).getMonth();
}
/**
 * Checks whether the given date value (in unix milliseconds) is in the current year.
 * @param {number|string|Date} dateValue - Date object or integer representing the number of milliseconds since 1/1/1970 UTC
 * @returns {boolean} whether the given value is in the current year
 */


function isCurrentYear(dateValue) {
  return new Date().getFullYear() === convertToDate(dateValue).getFullYear();
}
/**
 * Formats a number of seconds as a time string
 *
 * @param {number} seconds - seconds
 * @return {string} a string formatted like 3:57:35
 */


function formatTime(seconds) {
  var h = Math.floor(seconds / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 3600 % 60);
  var hour = h > 0 ? "".concat(h.toString(), ":") : '';
  var sec = s < 10 ? "0".concat(s.toString()) : s.toString();
  var min = m.toString();

  if (h > 0 && m < 10) {
    min = "0".concat(min);
  }

  return "".concat(hour).concat(min, ":").concat(sec);
}
/**
 * Adds time to a given dateValue
 *
 * @param {number|Date} dateValue - date or integer value to add time to
 * @param {number} timeToAdd - amount of time to add in ms
 * @return {number|Date} the modified date or integer
 */


function addTime(dateValue, timeToAdd) {
  if (dateValue instanceof Date) {
    return new Date(dateValue.getTime() + timeToAdd);
  }

  return dateValue + timeToAdd;
}
/**
 * Will convert
 *      2018-06-13T07:00:00.000Z
 * to
 *      2018-06-13T00:00:00.000Z
 *
 * This is the opposite of convertISOStringToUTCDate
 *
 * @param {Date} date
 * @return {number}
 */


function convertDateToUnixMidnightTime(date) {
  // date is localized to 00:00:00 at system/browser timezone
  var utcUnixTimeInMs = date.getTime(); // timezone an integer offset; minutes behind GMT
  // we use the browser timezone offset instead of the user's,
  // because the datepicker uses the browser to get the "midnight"
  // time in the user's timezone with getTime()

  var timezoneOffsetInMins = date.getTimezoneOffset();
  var timezoneOffsetInMs = timezoneOffsetInMins * MILLISECONDS_PER_MINUTE; // we need the unix/epoch time for midnight on the date selected

  var unixDayMidnightTime = utcUnixTimeInMs - timezoneOffsetInMs;
  return unixDayMidnightTime;
}
/**
 * Will check to see if a date object is not valid, according to the browser
 * JS engine.
 *
 * @param {Date} date
 * @return {boolean} whether the date value passes validation
 */


function isValidDate(date) {
  return !lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(date.getTime());
}
/**
 * Will convert ISO8601-compatible dates (with zone designators)
 *      2018-06-13T00:00:00.000-0500
 *      or
 *      2018-06-13T00:00:00.000-05
 *
 * to
 *      2018-06-13T00:00:00.000-05:00
 *
 * Equivalent formats between the two (e.g., uzing 'Z') will remain unchanged.
 * If the date format cannot be converted, it will pass along the existing value
 * @param {string} isoString
 * @return {string} converted date format, if applicable
 */


function convertISOStringtoRFC3339String(isoString) {
  // test that the date format inbound is ISO8601-compatible
  if (RE_ISO8601_DATE.test(isoString)) {
    // if it is, parse out the timezone part if it's in a longer format
    // use the capture groups instead of the split result for the datetime and the time zone
    var parseDate = isoString.split(RE_ISO8601_DATE);
    var dateTime = parseDate[ISO8601_DATETIME];
    var milliseconds = parseDate[ISO8601_MILLISECONDS];
    var timeZone = parseDate[ISO8601_TIMEZONE]; // add milliseconds if missing, to standardize output

    if (!milliseconds) {
      dateTime += '.000';
    }

    if (parseDate[ISO8601_Z_FMT]) {
      return isoString;
    }

    if (parseDate[ISO8601_SHORT_FMT]) {
      return "".concat(dateTime + timeZone, ":00");
    }

    if (parseDate[ISO8601_MEDIUM_FMT]) {
      return "".concat(dateTime + timeZone.substr(0, 3), ":").concat(timeZone.substr(3));
    }

    if (parseDate[ISO8601_LONG_FMT]) {
      return isoString;
    }
  }

  return isoString;
}
/**
 * Will convert
 *      2018-06-13T00:00:00.000Z
 * to
 *      2018-06-13T07:00:00.000Z
 *
 * This is the opposite of convertDateToUnixMidnightTime
 *
 * @param {string} isoString - ISO string in UTC time zone
 */


function convertISOStringToUTCDate(isoString) {
  // get date in UTC midnight time
  var utcDate = new Date(convertISOStringtoRFC3339String(isoString));
  var utcTime = utcDate.getTime(); // get browser's timezone

  var timezoneOffsetInMins = utcDate.getTimezoneOffset();
  var timezoneOffsetInMs = timezoneOffsetInMins * MILLISECONDS_PER_MINUTE; // return date in utc timezone

  var localizedUnixTimeInMs = utcTime + timezoneOffsetInMs;
  return new Date(localizedUnixTimeInMs);
}



/***/ })

}]);
//# sourceMappingURL=activity-sidebar~details-sidebar~metadata-sidebar~skills-sidebar~versions-sidebar.js.map
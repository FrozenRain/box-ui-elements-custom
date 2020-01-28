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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-sidebar~metadata-sidebar"],{

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

/***/ "./src/components/datalist-item/DatalistItem.js":
/*!******************************************************!*\
  !*** ./src/components/datalist-item/DatalistItem.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DatalistItem_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DatalistItem.scss */ "./src/components/datalist-item/DatalistItem.scss");
/* harmony import */ var _DatalistItem_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DatalistItem_scss__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class DatalistItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "setActiveItemID", () => {
      var {
        setActiveItemID
      } = this.props;

      if (setActiveItemID) {
        setActiveItemID(this.id);
      }
    });

    this.id = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default()('datalistitem');
  }

  componentDidMount() {
    if (this.props.isActive) {
      this.setActiveItemID();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isActive && !prevProps.isActive) {
      this.setActiveItemID();
    }
  }

  render() {
    var _this$props = this.props,
        {
      children,
      className,
      isActive
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["children", "className", "isActive"]);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('datalist-item', {
      'is-active': isActive
    }, className);
    var itemProps = lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(rest, ['closeDropdown', 'setActiveItemID']); // required aria props are added dynamically

    /* eslint-disable jsx-a11y/role-has-required-aria-props */

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", _extends({}, itemProps, {
      className: classes,
      id: this.id,
      role: "option"
    }), children);
    /* eslint-enable jsx-a11y/role-has-required-aria-props */
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DatalistItem);

/***/ }),

/***/ "./src/components/datalist-item/DatalistItem.scss":
/*!********************************************************!*\
  !*** ./src/components/datalist-item/DatalistItem.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/datalist-item/index.js":
/*!***********************************************!*\
  !*** ./src/components/datalist-item/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatalistItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatalistItem */ "./src/components/datalist-item/DatalistItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DatalistItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/date-picker/DatePicker.js":
/*!**************************************************!*\
  !*** ./src/components/date-picker/DatePicker.js ***!
  \**************************************************/
/*! exports provided: DatePickerBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerBase", function() { return DatePicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pikaday__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pikaday */ "./node_modules/pikaday/pikaday.js");
/* harmony import */ var pikaday__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pikaday__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/range */ "./node_modules/lodash/range.js");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/variables */ "./src/common/variables.js");
/* harmony import */ var _icons_general_IconAlert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/general/IconAlert */ "./src/icons/general/IconAlert.js");
/* harmony import */ var _icons_general_IconCalendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/general/IconCalendar */ "./src/icons/general/IconCalendar.js");
/* harmony import */ var _icons_general_IconClear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../icons/general/IconClear */ "./src/icons/general/IconClear.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../label */ "./src/components/label/index.js");
/* harmony import */ var _plain_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.js");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/datetime */ "./src/utils/datetime.js");
/* harmony import */ var _DatePicker_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DatePicker.scss */ "./src/components/date-picker/DatePicker.scss");
/* harmony import */ var _DatePicker_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_DatePicker_scss__WEBPACK_IMPORTED_MODULE_13__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  previousMonth: {
    "id": "boxui.base.previousMonth",
    "defaultMessage": "Previous Month"
  },
  nextMonth: {
    "id": "boxui.base.nextMonth",
    "defaultMessage": "Next Month"
  },
  iconAlertText: {
    "id": "boxui.datePicker.iconAlertText",
    "defaultMessage": "Invalid Date"
  },
  dateClearButton: {
    "id": "boxui.datePicker.dateClearButton",
    "defaultMessage": "Clear Date"
  },
  chooseDate: {
    "id": "boxui.datePicker.chooseDate",
    "defaultMessage": "Choose Date"
  }
});
var TOGGLE_DELAY_MS = 300;
var ISO_STRING_DATE_FORMAT = 'isoString';
var UTC_TIME_DATE_FORMAT = 'utcTime';
var UNIX_TIME_DATE_FORMAT = 'unixTime';
var UTC_ISO_STRING_DATE_FORMAT = 'utcISOString';
var ENTER_KEY = 'Enter';
var ESCAPE_KEY = 'Escape';
var TAB_KEY = 'Tab';

var stub = () => {};
/**
 * Converts date from being relative to GMT, to being relative to browser
 * timezone. E.g., Thu Jun 29 2017 00:00:00 GMT =>
 * Thu Jun 29 2017 00:00:00 GMT-0700 (PDT)
 * @param {Date} date UTC date
 * @returns {Date} date Local date
 */


function convertUTCToLocal(date) {
  var dateString = date.toUTCString(); // Remove ` GMT` from the timestamp string

  var dateStringWithoutTimeZone = dateString.slice(0, -4);
  return new Date(dateStringWithoutTimeZone);
}

function getFormattedDate(date, format) {
  if (!date) {
    return '';
  }

  var utcDate;

  switch (format) {
    case ISO_STRING_DATE_FORMAT:
      return date.toISOString();

    case UTC_TIME_DATE_FORMAT:
      return Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_12__["convertDateToUnixMidnightTime"])(date);

    case UTC_ISO_STRING_DATE_FORMAT:
      utcDate = new Date(Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_12__["convertDateToUnixMidnightTime"])(date));
      return utcDate.toISOString();

    default:
      return date.getTime();
  }
}

class DatePicker extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onSelectHandler", date => {
      var {
        onChange
      } = this.props;

      if (onChange) {
        var formattedDate = this.formatValue(date);
        onChange(date, formattedDate);
      }
    });

    _defineProperty(this, "shouldStayClosed", false);

    _defineProperty(this, "focusDatePicker", () => {
      // By default, this will open the datepicker too
      if (this.dateInputEl) {
        this.dateInputEl.focus();
      }
    });

    _defineProperty(this, "handleInputKeyDown", event => {
      var {
        isTextInputAllowed
      } = this.props;

      if (this.datePicker.isVisible()) {
        event.stopPropagation();
      } // Stops up/down arrow & spacebar from moving page scroll position since pikaday does not preventDefault correctly


      if (!isTextInputAllowed && event.key !== TAB_KEY) {
        event.preventDefault();
      }

      if (isTextInputAllowed && event.key === ENTER_KEY) {
        event.preventDefault();
      }

      if (event.key === ENTER_KEY || event.key === ESCAPE_KEY || event.key === ' ') {
        // Since pikaday auto-selects when you move the select box, enter/space don't do anything but close the date picker
        if (this.datePicker.isVisible()) {
          this.datePicker.hide();
        }
      }
    });

    _defineProperty(this, "handleInputBlur", event => {
      var {
        onBlur,
        isTextInputAllowed
      } = this.props;
      var nextActiveElement = event.relatedTarget || document.activeElement; // This is mostly here to cancel out the pikaday hide() on blur

      if (this.datePicker.isVisible() && nextActiveElement && nextActiveElement === this.datePickerButtonEl) {
        this.shouldStayClosed = true;
        setTimeout(() => {
          this.shouldStayClosed = false;
        }, TOGGLE_DELAY_MS);
      }

      if (onBlur) {
        onBlur(event);
      } // Since we Fire parent onChange event if isTextInputAllowed
      // fire it on blur if the user typed a correct date format


      var inputDate = null;

      if (this.dateInputEl) {
        inputDate = new Date(this.dateInputEl.value);
      }

      if (isTextInputAllowed && inputDate && inputDate.getDate()) {
        this.onSelectHandler(inputDate);
      }
    });

    _defineProperty(this, "handleButtonClick", event => {
      event.preventDefault();

      if (!this.shouldStayClosed) {
        this.focusDatePicker();
      }
    });

    _defineProperty(this, "formatDisplay", date => {
      var {
        displayFormat,
        intl
      } = this.props;
      return date ? intl.formatDate(date, displayFormat) : '';
    });

    _defineProperty(this, "formatValue", date => {
      var {
        dateFormat
      } = this.props;
      return getFormattedDate(date, dateFormat);
    });

    _defineProperty(this, "clearDate", event => {
      event.preventDefault(); // so datepicker doesn't open after clearing

      this.datePicker.setDate(null);
      this.onSelectHandler(null);
    });
  }

  componentDidMount() {
    var {
      dateFormat,
      intl,
      maxDate,
      minDate,
      value,
      yearRange,
      isTextInputAllowed
    } = this.props;
    var {
      formatDate,
      formatMessage
    } = intl;
    var {
      nextMonth,
      previousMonth
    } = messages;
    var defaultValue = value; // When date format is utcTime, initial date needs to be converted from being relative to GMT to being
    // relative to browser timezone

    if (dateFormat === UTC_TIME_DATE_FORMAT && typeof value !== 'undefined') {
      defaultValue = convertUTCToLocal(value);
    } // Make sure the DST detection algorithm in browsers is up-to-date


    var year = new Date().getFullYear();
    var i18n = {
      previousMonth: formatMessage(previousMonth),
      nextMonth: formatMessage(nextMonth),
      months: lodash_range__WEBPACK_IMPORTED_MODULE_4___default()(12).map(month => formatDate(new Date(year, month, 15), {
        month: 'long'
      })),
      // weekdays must start with Sunday, so array of dates below is May 1st-8th, 2016
      weekdays: lodash_range__WEBPACK_IMPORTED_MODULE_4___default()(1, 8).map(date => formatDate(new Date(2016, 4, date), {
        weekday: 'long'
      })),
      weekdaysShort: lodash_range__WEBPACK_IMPORTED_MODULE_4___default()(1, 8).map(date => formatDate(new Date(2016, 4, date), {
        weekday: 'narrow'
      }))
    };
    this.datePicker = new pikaday__WEBPACK_IMPORTED_MODULE_3___default.a({
      blurFieldOnSelect: false,
      // Available in pikaday > 1.5.1
      setDefaultDate: true,
      defaultDate: defaultValue,
      field: this.dateInputEl,
      maxDate,
      minDate,
      position: 'bottom left',
      i18n,
      showDaysInNextAndPreviousMonths: true,
      onSelect: this.onSelectHandler,
      yearRange,
      toString: this.formatDisplay
    });

    if (isTextInputAllowed) {
      this.updateDateInputValue(this.formatDisplay(defaultValue));
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    var {
      value: nextValue,
      minDate: nextMinDate,
      maxDate: nextMaxDate
    } = nextProps;
    var {
      value,
      minDate,
      maxDate,
      isTextInputAllowed
    } = this.props; // only set date when props change

    if (nextValue && !value || !nextValue && value || nextValue && value && nextValue.getTime() !== value.getTime()) {
      this.datePicker.setDate(nextValue);
    } // If text input is allowed the dateInputEl will act as an uncontrolled input and
    // we need to set formatted value manually.


    if (isTextInputAllowed) {
      this.updateDateInputValue(this.formatDisplay(nextValue));
    }

    if (nextMinDate && !minDate || !nextMinDate && minDate || nextMinDate && minDate && nextMinDate.getTime() !== minDate.getTime()) {
      this.datePicker.setMinDate(nextMinDate);

      if (this.datePicker.getDate() < nextMinDate) {
        this.datePicker.gotoDate(nextMinDate);
      }
    }

    if (nextMaxDate && !maxDate || !nextMaxDate && maxDate || nextMaxDate && maxDate && nextMaxDate.getTime() !== maxDate.getTime()) {
      this.datePicker.setMaxDate(nextMaxDate);

      if (this.datePicker.getDate() > nextMaxDate) {
        this.datePicker.gotoDate(nextMaxDate);
      }
    }
  }

  componentWillUnmount() {
    this.datePicker.destroy();
  }

  updateDateInputValue(value) {
    if (this.dateInputEl) {
      this.dateInputEl.value = value;
    }
  }

  render() {
    var {
      className,
      description,
      error,
      errorTooltipPosition,
      hideLabel,
      hideOptionalLabel,
      inputProps,
      intl,
      isClearable,
      isDisabled,
      isRequired,
      isTextInputAllowed,
      label,
      name,
      onFocus,
      placeholder,
      resinTarget,
      value
    } = this.props;
    var {
      formatMessage
    } = intl;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'date-picker-wrapper', {
      'show-clear-btn': !!value,
      'show-error': !!error
    });
    var resinTargetAttr = resinTarget ? {
      [_common_variables__WEBPACK_IMPORTED_MODULE_5__["RESIN_TAG_TARGET"]]: resinTarget
    } : {};
    var valueAttr = isTextInputAllowed ? {
      defaultValue: this.formatDisplay(value)
    } : {
      value: this.formatDisplay(value)
    };
    var onChangeAttr = isTextInputAllowed ? {} : {
      onChange: stub
    };
    /* fixes proptype error about readonly field (not adding readonly so constraint validation works) */

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classes
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: "date-picker-icon-holder"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_label__WEBPACK_IMPORTED_MODULE_9__["default"], {
      hideLabel: hideLabel,
      showOptionalText: !hideOptionalLabel && !isRequired,
      text: label
    }, !!description && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
      className: "date-picker-description"
    }, description), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: "date-picker-error-tooltip",
      isShown: !!error,
      position: errorTooltipPosition,
      text: error || '',
      theme: "error"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", _extends({
      ref: _ref => {
        this.dateInputEl = _ref;
      },
      className: "date-picker-input",
      disabled: isDisabled,
      onBlur: this.handleInputBlur,
      placeholder: placeholder || formatMessage(messages.chooseDate),
      required: isRequired,
      type: "text"
    }, onChangeAttr, {
      onFocus: onFocus,
      onKeyDown: this.handleInputKeyDown
    }, resinTargetAttr, inputProps, valueAttr)))), isClearable && !!value && !isDisabled ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plain_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      "aria-label": formatMessage(messages.dateClearButton),
      className: "date-picker-clear-btn",
      onClick: this.clearDate,
      type: "button"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconClear__WEBPACK_IMPORTED_MODULE_8__["default"], {
      height: 12,
      width: 12
    })) : null, error ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconAlert__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "date-picker-icon-alert",
      height: 13,
      title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], messages.iconAlertText),
      width: 13
    }) : null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plain_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
      "aria-label": formatMessage(messages.chooseDate),
      className: "date-picker-open-btn",
      disabled: isDisabled,
      getDOMRef: ref => {
        this.datePickerButtonEl = ref;
      },
      onClick: this.handleButtonClick,
      type: "button"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconCalendar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      height: 17,
      width: 16
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
      className: "date-picker-unix-time-input",
      name: name,
      readOnly: true,
      type: "hidden",
      value: this.formatValue(value)
    })));
  }

}

_defineProperty(DatePicker, "defaultProps", {
  className: '',
  dateFormat: UNIX_TIME_DATE_FORMAT,
  displayFormat: {},
  error: '',
  errorTooltipPosition: 'bottom-left',
  inputProps: {},
  isClearable: true,
  isTextInputAllowed: false,
  yearRange: 10
});


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(DatePicker));

/***/ }),

/***/ "./src/components/date-picker/DatePicker.scss":
/*!****************************************************!*\
  !*** ./src/components/date-picker/DatePicker.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/flyout/Flyout.js":
/*!*****************************************!*\
  !*** ./src/components/flyout/Flyout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tether */ "./node_modules/react-tether/lib/react-tether.js");
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tether__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Flyout_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Flyout.scss */ "./src/components/flyout/Flyout.scss");
/* harmony import */ var _Flyout_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Flyout_scss__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var BOTTOM_CENTER = 'bottom-center';
var BOTTOM_LEFT = 'bottom-left';
var BOTTOM_RIGHT = 'bottom-right';
var MIDDLE_LEFT = 'middle-left';
var MIDDLE_RIGHT = 'middle-right';
var TOP_CENTER = 'top-center';
var TOP_LEFT = 'top-left';
var TOP_RIGHT = 'top-right';
var positions = {
  [BOTTOM_CENTER]: {
    attachment: 'top center',
    targetAttachment: 'bottom center'
  },
  [BOTTOM_LEFT]: {
    attachment: 'top right',
    targetAttachment: 'bottom right'
  },
  [BOTTOM_RIGHT]: {
    attachment: 'top left',
    targetAttachment: 'bottom left'
  },
  [MIDDLE_LEFT]: {
    attachment: 'middle right',
    targetAttachment: 'middle left'
  },
  [MIDDLE_RIGHT]: {
    attachment: 'middle left',
    targetAttachment: 'middle right'
  },
  [TOP_CENTER]: {
    attachment: 'bottom center',
    targetAttachment: 'top center'
  },
  [TOP_LEFT]: {
    attachment: 'bottom right',
    targetAttachment: 'top right'
  },
  [TOP_RIGHT]: {
    attachment: 'bottom left',
    targetAttachment: 'top left'
  }
};
/**
 * Checks if there is a clickable ancestor or self
 * @param {Node} rootNode The base node we should stop at
 * @param {Node} targetNode The target node of the event
 * @returns {boolean}
 */

var hasClickableAncestor = (rootNode, targetNode) => {
  // Check if the element or any of the ancestors are click-able (stopping at the component boundary)
  var currentNode = targetNode;

  while (currentNode && currentNode instanceof Node && currentNode.parentNode && currentNode !== rootNode) {
    var nodeName = currentNode.nodeName.toUpperCase();

    if (nodeName === 'A' || nodeName === 'BUTTON') {
      return true;
    }

    currentNode = currentNode.parentNode;
  }

  return false;
};
/**
 * Checks if the target element is inside an element with the given CSS class.
 * @param {HTMLElement} targetEl The target element
 * @param {string} className A CSS class on the element to check for
 */


var hasClassAncestor = (targetEl, className) => {
  var el = targetEl;

  while (el && el instanceof HTMLElement) {
    if (el.classList.contains(className)) {
      return true;
    }

    el = el.parentNode;
  }

  return false;
};

class Flyout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleOverlayClick", event => {
      var overlayNode = document.getElementById(this.overlayID);
      var {
        closeOnClick,
        closeOnClickPredicate
      } = this.props;

      if (!closeOnClick || !hasClickableAncestor(overlayNode, event.target)) {
        return;
      }

      if (closeOnClickPredicate && !closeOnClickPredicate(event)) {
        return;
      }

      this.handleOverlayClose();
    });

    _defineProperty(this, "handleButtonClick", event => {
      var {
        isVisible
      } = this.state;

      if (isVisible) {
        this.closeOverlay();
      } else {
        this.openOverlay();
      } // If button was clicked, the detail field should hold number of clicks.
      // If number is zero, the event was synthesized.
      // https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail


      var isButtonClicked = event.detail > 0;
      this.setState({
        isButtonClicked
      });
      event.preventDefault();
    });

    _defineProperty(this, "handleButtonHover", () => {
      var {
        openOnHover,
        openOnHoverDelayTimeout
      } = this.props;

      if (openOnHover) {
        clearTimeout(this.hoverDelay);
        this.hoverDelay = setTimeout(() => {
          this.openOverlay();
        }, openOnHoverDelayTimeout);
      }
    });

    _defineProperty(this, "handleButtonHoverLeave", () => {
      var {
        openOnHover,
        openOnHoverDelayTimeout
      } = this.props;

      if (openOnHover) {
        clearTimeout(this.hoverDelay);
        this.hoverDelay = setTimeout(() => {
          this.closeOverlay();
        }, openOnHoverDelayTimeout);
      }
    });

    _defineProperty(this, "openOverlay", () => {
      this.setState({
        isVisible: true
      });
      var {
        onOpen
      } = this.props;

      if (onOpen) {
        onOpen();
      }
    });

    _defineProperty(this, "closeOverlay", () => {
      this.setState({
        isVisible: false
      });
      var {
        onClose
      } = this.props;

      if (onClose) {
        onClose();
      }
    });

    _defineProperty(this, "focusButton", () => {
      var buttonEl = document.getElementById(this.overlayButtonID);

      if (buttonEl) {
        buttonEl.focus();
      }
    });

    _defineProperty(this, "handleOverlayClose", () => {
      this.focusButton();
      this.closeOverlay();
    });

    _defineProperty(this, "handleDocumentClickOrWindowBlur", event => {
      var {
        portaledClasses,
        closeOnClickOutside,
        closeOnWindowBlur
      } = this.props;
      var {
        isVisible
      } = this.state;

      if (!isVisible || !(closeOnClickOutside || closeOnWindowBlur)) {
        return;
      }

      var overlayNode = document.getElementById(this.overlayID);
      var buttonNode = document.getElementById(this.overlayButtonID);
      var isInsideToggleButton = buttonNode && event.target instanceof Node && buttonNode.contains(event.target) || buttonNode === event.target;
      var isInsideOverlay = overlayNode && event.target instanceof Node && overlayNode.contains(event.target) || overlayNode === event.target;
      var isInside = isInsideToggleButton || isInsideOverlay;

      if (isInside || portaledClasses.some(className => hasClassAncestor(event.target, className))) {
        return;
      } // Only close overlay when the click is outside of the flyout or window loses focus


      this.closeOverlay();
    });

    this.overlayID = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('overlay');
    this.overlayButtonID = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('flyoutbutton');
    this.state = {
      isVisible: props.isVisibleByDefault,
      isButtonClicked: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isVisible && this.state.isVisible) {
      var {
        closeOnClickOutside,
        closeOnWindowBlur
      } = this.props; // When overlay is being opened

      if (closeOnClickOutside) {
        document.addEventListener('click', this.handleDocumentClickOrWindowBlur, true);
        document.addEventListener('contextmenu', this.handleDocumentClickOrWindowBlur, true);
      }

      if (closeOnWindowBlur) {
        window.addEventListener('blur', this.handleDocumentClickOrWindowBlur, true);
      }
    } else if (prevState.isVisible && !this.state.isVisible) {
      // When overlay is being closed
      document.removeEventListener('contextmenu', this.handleDocumentClickOrWindowBlur, true);
      document.removeEventListener('click', this.handleDocumentClickOrWindowBlur, true);
      window.removeEventListener('blur', this.handleDocumentClickOrWindowBlur, true);
    }
  }

  componentWillUnmount() {
    if (this.state.isVisible) {
      // Clean-up global click handlers
      document.removeEventListener('contextmenu', this.handleDocumentClickOrWindowBlur, true);
      document.removeEventListener('click', this.handleDocumentClickOrWindowBlur, true);
      window.removeEventListener('blur', this.handleDocumentClickOrWindowBlur, true);
    }

    if (this.props.openOnHover && this.hoverDelay) {
      clearTimeout(this.hoverDelay);
    }
  }

  render() {
    var {
      children,
      className = '',
      constrainToScrollParent,
      constrainToWindow,
      offset,
      openOnHover,
      position,
      shouldDefaultFocus
    } = this.props;
    var {
      isButtonClicked,
      isVisible
    } = this.state;
    var elements = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children);
    var tetherPosition = positions[position];

    if (elements.length !== 2) {
      throw new Error('Flyout must have exactly two children: A button component and a <Overlay>');
    }

    var overlayButton = elements[0];
    var overlayContent = elements[1];
    var overlayButtonProps = {
      id: this.overlayButtonID,
      key: this.overlayButtonID,
      role: 'button',
      onClick: this.handleButtonClick,
      onMouseEnter: this.handleButtonHover,
      onMouseLeave: this.handleButtonHoverLeave,
      'aria-haspopup': 'true',
      'aria-expanded': isVisible ? 'true' : 'false'
    };

    if (isVisible) {
      overlayButtonProps['aria-controls'] = this.overlayID;
    }

    var overlayProps = {
      id: this.overlayID,
      key: this.overlayID,
      role: 'dialog',
      onClick: this.handleOverlayClick,
      onClose: this.handleOverlayClose,
      onMouseEnter: this.handleButtonHover,
      onMouseLeave: this.handleButtonHoverLeave,
      shouldDefaultFocus: shouldDefaultFocus || !isButtonClicked && !openOnHover,
      'aria-labelledby': this.overlayButtonID
    };
    var constraints = [];

    if (constrainToScrollParent) {
      constraints.push({
        to: 'scrollParent',
        attachment: 'together'
      });
    }

    if (constrainToWindow) {
      constraints.push({
        to: 'window',
        attachment: 'together'
      });
    }

    var tetherProps = {
      classPrefix: 'flyout-overlay',
      attachment: tetherPosition.attachment,
      targetAttachment: tetherPosition.targetAttachment,
      enabled: isVisible,
      classes: {
        element: "flyout-overlay ".concat(className)
      },
      constraints
    };

    if (offset) {
      tetherProps.offset = offset;
    } else {
      switch (position) {
        case BOTTOM_CENTER:
        case BOTTOM_LEFT:
        case BOTTOM_RIGHT:
          tetherProps.offset = '-10px 0';
          break;

        case TOP_CENTER:
        case TOP_LEFT:
        case TOP_RIGHT:
          tetherProps.offset = '10px 0';
          break;

        case MIDDLE_LEFT:
          tetherProps.offset = '0 10px';
          break;

        case MIDDLE_RIGHT:
          tetherProps.offset = '0 -10px';
          break;

        default: // no default

      }
    }

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_tether__WEBPACK_IMPORTED_MODULE_1___default.a, tetherProps, react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](overlayButton, overlayButtonProps), isVisible ? react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](overlayContent, overlayProps) : null);
  }

}

_defineProperty(Flyout, "defaultProps", {
  className: '',
  closeOnClick: true,
  closeOnClickOutside: true,
  closeOnWindowBlur: false,
  constrainToScrollParent: true,
  constrainToWindow: false,
  isVisibleByDefault: false,
  openOnHover: false,
  openOnHoverDelayTimeout: 300,
  portaledClasses: [],
  position: BOTTOM_RIGHT
});

/* harmony default export */ __webpack_exports__["default"] = (Flyout);

/***/ }),

/***/ "./src/components/flyout/Flyout.scss":
/*!*******************************************!*\
  !*** ./src/components/flyout/Flyout.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/flyout/Overlay.js":
/*!******************************************!*\
  !*** ./src/components/flyout/Overlay.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../focus-trap */ "./src/components/focus-trap/index.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Overlay extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "closeOverlay", () => {
      var {
        onClose
      } = this.props;

      if (!onClose) {
        return;
      }

      setTimeout(() => onClose(), 0);
    });

    _defineProperty(this, "handleOverlayKeyDown", event => {
      if (event.key !== 'Escape') {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
      this.closeOverlay();
    });
  }

  render() {
    var _this$props = this.props,
        {
      children,
      className
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["children", "className"]);

    var overlayProps = lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(rest, ['onClose']);
    overlayProps.className = className;
    overlayProps.handleOverlayKeyDown = this.handleOverlayKeyDown;
    overlayProps.tabIndex = 0;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_focus_trap__WEBPACK_IMPORTED_MODULE_2__["default"], overlayProps, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "overlay"
    }, children));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Overlay);

/***/ }),

/***/ "./src/components/flyout/index.js":
/*!****************************************!*\
  !*** ./src/components/flyout/index.js ***!
  \****************************************/
/*! exports provided: Flyout, Overlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Flyout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flyout */ "./src/components/flyout/Flyout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flyout", function() { return _Flyout__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Overlay */ "./src/components/flyout/Overlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return _Overlay__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/components/focus-trap/FocusTrap.js":
/*!************************************************!*\
  !*** ./src/components/focus-trap/FocusTrap.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/index.js");
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tabbable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class FocusTrap extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "focusFirstElement", () => {
      if (!this.el) {
        return;
      }

      var tabbableEls = tabbable__WEBPACK_IMPORTED_MODULE_1___default()(this.el); // There are three trap-related elements, including first element.
      // If there are 3 or fewer tabbable elements, that means there are no
      // tabbable children, so focus on the trap element instead.

      if (tabbableEls.length > 3) {
        tabbableEls[1].focus();
      } else if (this.trapEl) {
        this.trapEl.focus();
      }
    });

    _defineProperty(this, "focusLastElement", () => {
      if (!this.el) {
        return;
      }

      var tabbableEls = tabbable__WEBPACK_IMPORTED_MODULE_1___default()(this.el); // There are three trap-related elements, including the last two elements.
      // If there are 3 or fewer tabbable elements, that means there are no
      // tabbable children, so focus on the trap element instead.

      if (tabbableEls.length > 3) {
        tabbableEls[tabbableEls.length - 3].focus();
      } else if (this.trapEl) {
        this.trapEl.focus();
      }
    });

    _defineProperty(this, "handleElKeyDown", event => {
      var {
        handleOverlayKeyDown
      } = this.props;

      if (this.el === document.activeElement && event.key === 'Tab') {
        this.focusFirstElement();
        event.stopPropagation();
        event.preventDefault();
      }

      if (handleOverlayKeyDown) {
        handleOverlayKeyDown(event);
      }
    });

    _defineProperty(this, "handleTrapElKeyDown", event => {
      if (event.key !== 'Tab') {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
    });
  }

  componentDidMount() {
    if (this.props.shouldDefaultFocus) {
      setTimeout(() => {
        this.previousFocusEl = document.activeElement;
        this.focusFirstElement();
      }, 0);
    } else {
      setTimeout(() => {
        if (this.el) {
          this.el.focus();
        }
      }, 0);
    }
  }

  componentWillUnmount() {
    setTimeout(() => {
      if (this.previousFocusEl) {
        this.previousFocusEl.focus();
      }
    }, 0);
  }

  render() {
    var _this$props = this.props,
        {
      children,
      className,
      getRef,
      handleOverlayKeyDown,
      shouldDefaultFocus,
      shouldOutlineFocus
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["children", "className", "getRef", "handleOverlayKeyDown", "shouldDefaultFocus", "shouldOutlineFocus"]);

    return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
        ref: _ref2 => {
          this.el = _ref2;

          if (getRef) {
            getRef(_ref2);
          }
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
          'should-outline-focus': shouldOutlineFocus
        }),
        onKeyDown: this.handleElKeyDown
      }, rest), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
        "aria-hidden": true,
        onFocus: this.focusLastElement,
        tabIndex: "0"
      }), children, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
        "aria-hidden": true,
        onFocus: this.focusFirstElement,
        tabIndex: "0"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
        ref: _ref => {
          this.trapEl = _ref;
        },
        "aria-hidden": true,
        onKeyDown: this.handleTrapElKeyDown // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        ,
        tabIndex: "0"
      }))
    );
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FocusTrap);

/***/ }),

/***/ "./src/components/focus-trap/index.js":
/*!********************************************!*\
  !*** ./src/components/focus-trap/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FocusTrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FocusTrap */ "./src/components/focus-trap/FocusTrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FocusTrap__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/form-elements/form/Form.js":
/*!***************************************************!*\
  !*** ./src/components/form-elements/form/Form.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var form_serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! form-serialize */ "./node_modules/form-serialize/index.js");
/* harmony import */ var form_serialize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(form_serialize__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function getFormValidityState(form) {
  // Turn the form.elements HTMLCollection into Array before reducing
  return [].slice.call(form.elements).reduce((validityObj, inputEl) => {
    // Only serialize inputs that have a name defined
    if (inputEl.name && !inputEl.validity.valid) {
      var validityState = inputEl.validity;

      if (inputEl.validity.customError) {
        // If the input is displaying a custom error,
        // we expose the errorCode stored in the validationMessage
        validityState.customErrorCode = inputEl.validationMessage;
      }

      validityObj[inputEl.name] = {
        validityState
      };
      return validityObj;
    }

    return validityObj;
  }, {});
}

class Form extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChange", (_ref) => {
      var {
        currentTarget
      } = _ref;

      if (this.props.onChange) {
        var formData = form_serialize__WEBPACK_IMPORTED_MODULE_2___default()(currentTarget, {
          hash: true,
          empty: true
        });
        this.props.onChange(formData);
      }
    });

    _defineProperty(this, "onSubmit", event => {
      var form = event.target;
      event.preventDefault();
      var isValid = form.checkValidity();
      var {
        onInvalidSubmit,
        onValidSubmit
      } = this.props;
      var {
        registeredInputs
      } = this.state;

      if (isValid) {
        var formData = form_serialize__WEBPACK_IMPORTED_MODULE_2___default()(form, {
          hash: true,
          empty: true
        });
        onValidSubmit(formData);
      } else {
        var formValidityState = getFormValidityState(form); // Push form validity state to inputs so errors are shown on submit

        Object.keys(formValidityState).forEach(key => registeredInputs[key] && registeredInputs[key](formValidityState[key].validityState));

        if (onInvalidSubmit) {
          onInvalidSubmit(formValidityState);
        }
      }
    });

    _defineProperty(this, "registerInput", (name, setValidityStateHandler) => {
      var {
        registeredInputs
      } = this.state;

      if (registeredInputs[name]) {
        throw new Error("Input '".concat(name, "' is already registered."));
      }

      var nextState = this.state;
      nextState.registeredInputs[name] = setValidityStateHandler;
      this.setState(nextState);
    });

    _defineProperty(this, "unregisterInput", name => {
      var nextState = this.state;
      delete nextState.registeredInputs[name];
      this.setState(nextState);
    });

    this.state = {
      registeredInputs: {}
    };
  }

  getChildContext() {
    return {
      form: {
        registerInput: this.registerInput.bind(this),
        unregisterInput: this.unregisterInput.bind(this)
      }
    };
  }

  componentDidUpdate(_ref2) {
    var {
      formValidityState: prevFormValidityState
    } = _ref2;
    var {
      formValidityState
    } = this.props;
    var {
      registeredInputs
    } = this.state;

    if (formValidityState !== prevFormValidityState) {
      Object.keys(formValidityState).forEach(key => {
        if (registeredInputs[key]) {
          registeredInputs[key](formValidityState[key]);
        }
      });
    }
  }

  render() {
    var {
      children
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      noValidate: true,
      onChange: this.onChange,
      onSubmit: this.onSubmit
    }, children);
  }

}

_defineProperty(Form, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,

  /** Called when an input in the form changes */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  /** Called when a valid submit is made */
  onValidSubmit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,

  /** Called when an invalid submit is made */
  onInvalidSubmit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  /** An object mapping input names to error messages */
  formValidityState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object // eslint-disable-line react/no-unused-prop-types

});

_defineProperty(Form, "childContextTypes", {
  form: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    registerInput: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    unregisterInput: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Form);

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

/***/ "./src/components/link/Link.js":
/*!*************************************!*\
  !*** ./src/components/link/Link.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LinkBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkBase */ "./src/components/link/LinkBase.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




// eslint-disable-next-line react/prefer-stateless-function
class Link extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    var _this$props = this.props,
        {
      className
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["className"]);

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LinkBase__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      className: "link ".concat(className)
    }, rest));
  }

}

_defineProperty(Link, "defaultProps", {
  className: ''
});

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./src/components/link/LinkBase.js":
/*!*****************************************!*\
  !*** ./src/components/link/LinkBase.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var LinkBase = (_ref) => {
  var {
    children,
    href = '#',
    linkRef,
    target,
    rel,
    component,
    refProp
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "href", "linkRef", "target", "rel", "component", "refProp"]);

  // Automatically append rel="noopener" for external links
  // (security fix) if no `rel` was passed
  var linkRel = target === '_blank' && !rel ? 'noopener' : rel;
  var LinkComponent = component || 'a';
  var ref = {
    [refProp || 'ref']: linkRef
  };
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LinkComponent, _extends({
    href: href,
    rel: linkRel,
    target: target
  }, ref, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (LinkBase);

/***/ }),

/***/ "./src/components/scroll-wrapper/ScrollWrapper.js":
/*!********************************************************!*\
  !*** ./src/components/scroll-wrapper/ScrollWrapper.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ScrollWrapper_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScrollWrapper.scss */ "./src/components/scroll-wrapper/ScrollWrapper.scss");
/* harmony import */ var _ScrollWrapper_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ScrollWrapper_scss__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ScrollWrapper extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      shouldShowTopScrollShadow: false,
      shouldShowBottomScrollShadow: false
    });

    _defineProperty(this, "componentDidMount", () => {
      var newState = this.getScrollShadowState();
      this.setState(newState);

      if (this.scrollRef) {
        this.scrollRef.addEventListener('transitionend', this.throttledOnContentScroll); // Apparently, flow only allows for one truthy check per command, so I have to either:
        // 1) duplicate this check per call, or
        // 2) nest if checks (_slightly more performant_)

        if (this.scrollRef) {
          this.observer.observe(this.scrollRef, {
            attributes: true,
            childlist: true,
            subtree: true
          });
        }
      }
    });

    _defineProperty(this, "onContentScroll", () => {
      var newState = this.getScrollShadowState();
      this.setState(newState);
    });

    _defineProperty(this, "getScrollShadowState", () => {
      var {
        scrollTop,
        scrollHeight,
        clientHeight
      } = this.scrollRef || {};
      var newState = {};

      if (scrollTop > 0 && scrollTop < scrollHeight - clientHeight) {
        newState.shouldShowTopScrollShadow = true;
        newState.shouldShowBottomScrollShadow = true;
      }

      if (scrollTop === 0) {
        newState.shouldShowTopScrollShadow = false;
      }

      if (scrollTop < scrollHeight - clientHeight) {
        newState.shouldShowBottomScrollShadow = true;
      }

      if (scrollTop === scrollHeight - clientHeight) {
        newState.shouldShowBottomScrollShadow = false;
      }

      return newState;
    });

    _defineProperty(this, "scrollRef", null);

    _defineProperty(this, "throttledOnContentScroll", lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(this.onContentScroll, 100));

    this.observer = new MutationObserver(this.throttledOnContentScroll);
  }

  componentWillUnmount() {
    this.observer.disconnect();

    if (this.scrollRef) {
      this.scrollRef.removeEventListener('transitionend', this.throttledOnContentScroll);
    }
  }

  render() {
    var _this$props = this.props,
        {
      children,
      className = '',
      scrollRefFn,
      shadowSize
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["children", "className", "scrollRefFn", "shadowSize"]);

    var {
      shouldShowTopScrollShadow,
      shouldShowBottomScrollShadow
    } = this.state;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()("scroll-container", className, {
      'is-showing-top-shadow': shouldShowTopScrollShadow,
      'is-showing-bottom-shadow': shouldShowBottomScrollShadow
    });
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
      className: classes
    }, rest), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('scroll-wrap-container', "style--".concat(shadowSize)),
      onScroll: this.throttledOnContentScroll,
      ref: el => {
        this.scrollRef = el;
        scrollRefFn(el);
      }
    }, children));
  }

}

_defineProperty(ScrollWrapper, "defaultProps", {
  scrollRefFn: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
  shadowSize: 'cover'
});

/* harmony default export */ __webpack_exports__["default"] = (ScrollWrapper);

/***/ }),

/***/ "./src/components/scroll-wrapper/ScrollWrapper.scss":
/*!**********************************************************!*\
  !*** ./src/components/scroll-wrapper/ScrollWrapper.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/scroll-wrapper/index.js":
/*!************************************************!*\
  !*** ./src/components/scroll-wrapper/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScrollWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollWrapper */ "./src/components/scroll-wrapper/ScrollWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ScrollWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/selector-dropdown/SelectorDropdown.js":
/*!**************************************************************!*\
  !*** ./src/components/selector-dropdown/SelectorDropdown.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _scroll_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scroll-wrapper */ "./src/components/scroll-wrapper/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _SelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectorDropdown.scss */ "./src/components/selector-dropdown/SelectorDropdown.scss");
/* harmony import */ var _SelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_6__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function stopDefaultEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

class SelectorDropdown extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "setActiveItem", index => {
      this.setState({
        activeItemIndex: index
      });

      if (index === -1) {
        this.setActiveItemID(null);
      }
    });

    _defineProperty(this, "setActiveItemID", id => {
      var {
        scrollBoundarySelector
      } = this.props;
      var itemEl = id ? document.getElementById(id) : null;
      var scrollOptions = {
        block: 'nearest'
      }; // Allow null in case we want to clear the default
      // boundary from scrollIntoView

      if (typeof scrollBoundarySelector !== 'undefined') {
        scrollOptions.boundary = document.querySelector(scrollBoundarySelector);
      }

      this.setState({
        activeItemID: id
      }, () => {
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["scrollIntoView"])(itemEl, scrollOptions);
      });
    });

    _defineProperty(this, "haveChildrenChanged", prevChildren => {
      var {
        children
      } = this.props;
      var childrenCount = react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(children);
      var prevChildrenCount = react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(prevChildren);

      if (childrenCount !== prevChildrenCount) {
        return true;
      }

      if (childrenCount === 0) {
        return false;
      }

      var childrenKeys = react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, child => child.key);
      var prevChildrenKeys = react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(prevChildren, child => child.key);
      return childrenKeys.some((childKey, index) => childKey !== prevChildrenKeys[index]);
    });

    _defineProperty(this, "resetActiveItem", () => {
      this.setState({
        activeItemID: null,
        activeItemIndex: -1
      });
    });

    _defineProperty(this, "handleFocus", () => {
      this.openDropdown();
    });

    _defineProperty(this, "handleDocumentClick", event => {
      var container = this.selectorDropdownRef.current;
      var isInside = container && event.target instanceof Node && container.contains(event.target) || container === event.target;

      if (!isInside) {
        this.closeDropdown();
      }
    });

    _defineProperty(this, "handleInput", () => {
      this.openDropdown();
    });

    _defineProperty(this, "handleKeyDown", event => {
      var {
        children,
        isAlwaysOpen,
        onEnter
      } = this.props;
      var {
        activeItemIndex
      } = this.state;
      var childrenCount = react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(children);

      switch (event.key) {
        case 'ArrowDown':
          if (this.isDropdownOpen()) {
            if (childrenCount) {
              stopDefaultEvent(event);
            }

            var nextIndex = activeItemIndex === childrenCount - 1 ? -1 : activeItemIndex + 1;
            this.setActiveItem(nextIndex);
          } else {
            this.openDropdown();
          }

          break;

        case 'ArrowUp':
          if (this.isDropdownOpen()) {
            if (childrenCount) {
              stopDefaultEvent(event);
            }

            var prevIndex = activeItemIndex === -1 ? childrenCount - 1 : activeItemIndex - 1;
            this.setActiveItem(prevIndex);
          } else {
            this.openDropdown();
          }

          break;

        case 'Enter':
          if (activeItemIndex !== -1 && this.isDropdownOpen()) {
            stopDefaultEvent(event);
            this.selectItem(activeItemIndex, event);
          } else if (onEnter) {
            onEnter(event);
          }

          break;

        case 'Tab':
          if (this.isDropdownOpen()) {
            this.closeDropdown();
            this.resetActiveItem();
          }

          break;

        case 'Escape':
          if (!isAlwaysOpen && this.isDropdownOpen()) {
            stopDefaultEvent(event);
            this.closeDropdown();
            this.resetActiveItem();
          }

          break;
        // no default
      }
    });

    _defineProperty(this, "isDropdownOpen", () => {
      var {
        children,
        isAlwaysOpen
      } = this.props;
      var {
        shouldOpen
      } = this.state;
      var childrenCount = react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(children);
      return childrenCount > 0 && (!!isAlwaysOpen || shouldOpen);
    });

    _defineProperty(this, "openDropdown", () => {
      if (!this.state.shouldOpen) {
        var {
          shouldSetActiveItemOnOpen
        } = this.props;

        if (shouldSetActiveItemOnOpen) {
          this.setActiveItem(0);
        }

        this.setState({
          shouldOpen: true
        });
        document.addEventListener('click', this.handleDocumentClick, true);
      }
    });

    _defineProperty(this, "closeDropdown", () => {
      this.setState({
        shouldOpen: false
      });
      document.removeEventListener('click', this.handleDocumentClick, true);
    });

    _defineProperty(this, "selectItem", (index, event) => {
      var {
        onSelect
      } = this.props;

      if (onSelect) {
        onSelect(index, event);
      }

      this.closeDropdown();
    });

    this.listboxID = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('listbox');
    this.state = {
      activeItemID: null,
      activeItemIndex: -1,
      shouldOpen: false
    };
    this.selectorDropdownRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
  }

  componentDidUpdate(_ref) {
    var {
      shouldSetActiveItemOnOpen,
      children
    } = _ref;

    if (this.haveChildrenChanged(children)) {
      // For UX purposes filtering the items is equivalent
      // to re-opening the dropdown. In such cases we highlight
      // the first item when configured to do so
      if (shouldSetActiveItemOnOpen) {
        this.setActiveItem(0);
      } else {
        this.resetActiveItem();
      }
    }
  }

  componentWillUnmount() {
    // just in case event listener was added during openDropdown() but the component
    // gets unmounted without closeDropdown()
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  render() {
    var {
      listboxID,
      selectItem,
      setActiveItem,
      setActiveItemID,
      closeDropdown: _closeDropdown
    } = this;
    var {
      dividerIndex,
      overlayTitle,
      children,
      className,
      title,
      selector,
      shouldScroll
    } = this.props;
    var {
      activeItemID,
      activeItemIndex
    } = this.state;
    var isOpen = this.isDropdownOpen();
    var inputProps = {
      'aria-activedescendant': activeItemID,
      'aria-autocomplete': 'list',
      'aria-expanded': isOpen,
      role: 'combobox'
    };

    if (isOpen) {
      inputProps['aria-owns'] = listboxID;
    }

    var list = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
      className: "overlay",
      id: listboxID,
      role: "listbox"
    }, overlayTitle && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
      className: "SelectorDropdown-title"
    }, overlayTitle), react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, (item, index) => {
      var itemProps = {
        onClick: event => {
          selectItem(index, event);
        },

        /* preventDefault on mousedown so blur doesn't happen before click */
        onMouseDown: event => {
          event.preventDefault();
        },
        onMouseEnter: () => {
          setActiveItem(index);
        },
        closeDropdown: () => {
          _closeDropdown();
        },
        setActiveItemID
      };

      if (index === activeItemIndex) {
        itemProps.isActive = true;
      }

      var hasDivider = index === dividerIndex;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, hasDivider && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", {
        className: "SelectorDropdown-divider"
      }), react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](item, itemProps));
    })); // change onKeyPress/onPaste back to onInput when React fixes this IE11 bug: https://github.com/facebook/react/issues/7280
    // We're simulating the blur event with the tab key listener and the
    // click listener as a proxy because IE will trigger a blur when
    // using the scrollbar in the dropdown which indavertently closes the dropdown.

    return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('SelectorDropdown', className),
        onFocus: this.handleFocus,
        onKeyDown: this.handleKeyDown,
        onKeyPress: this.handleInput,
        onPaste: this.handleInput,
        ref: this.selectorDropdownRef
      }, react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](selector, {
        inputProps
      }), isOpen && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "".concat(_constants__WEBPACK_IMPORTED_MODULE_5__["OVERLAY_WRAPPER_CLASS"], " is-visible")
      }, title, shouldScroll ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_scroll_wrapper__WEBPACK_IMPORTED_MODULE_4__["default"], null, list) : list))
    );
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SelectorDropdown);

/***/ }),

/***/ "./src/components/selector-dropdown/SelectorDropdown.scss":
/*!****************************************************************!*\
  !*** ./src/components/selector-dropdown/SelectorDropdown.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/selector-dropdown/index.js":
/*!***************************************************!*\
  !*** ./src/components/selector-dropdown/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectorDropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectorDropdown */ "./src/components/selector-dropdown/SelectorDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SelectorDropdown__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/icons/general/IconAlert.js":
/*!****************************************!*\
  !*** ./src/icons/general/IconAlert.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconAlert = (_ref) => {
  var {
    className = '',
    color = '#000000',
    height = 24,
    title,
    width = 24
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-alert ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconAlert);

/***/ }),

/***/ "./src/icons/general/IconCalendar.js":
/*!*******************************************!*\
  !*** ./src/icons/general/IconCalendar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconCalendar = (_ref) => {
  var {
    className = '',
    color = '#BABABA',
    height = 17,
    title,
    width = 16
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-calendar ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 17",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(0 1)"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    className: "fill-color",
    fill: color,
    height: height,
    rx: "2",
    width: width,
    y: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    fill: "#FFF",
    height: "9",
    rx: "1",
    width: "13.75",
    x: "1.25",
    y: "6"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M11 7h2.5v2.5H11zM7 11h2.5v2.5H7zM3 11h2.5v2.5H3zM7 7h2.5v2.5H7zM3 7h2.5v2.5H3z",
    fill: color
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconCalendar);

/***/ }),

/***/ "./src/icons/general/IconClear.js":
/*!****************************************!*\
  !*** ./src/icons/general/IconClear.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconClear = (_ref) => {
  var {
    className = '',
    color = '#AEAEAE',
    height = 12,
    title,
    width = 12
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-clear ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 12 13",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    className: "fill-color",
    fill: color,
    transform: "translate(-1219.000000, -46.000000)"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    transform: "translate(855.000000, 35.000000)"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M370,16.1907436 L372.023141,14.1676025 C372.246611,13.9441325 372.608928,13.9441325 372.832398,14.1676025 C373.055867,14.3910725 373.055867,14.7533889 372.832398,14.9768589 L370.809256,17 L372.832398,19.0231411 C373.055867,19.2466111 373.055867,19.6089275 372.832398,19.8323975 C372.608928,20.0558675 372.246611,20.0558675 372.023141,19.8323975 L370,17.8092564 L367.976859,19.8323975 C367.753389,20.0558675 367.391072,20.0558675 367.167602,19.8323975 C366.944133,19.6089275 366.944133,19.2466111 367.167602,19.0231411 L369.190744,17 L367.167602,14.9768589 C366.944133,14.7533889 366.944133,14.3910725 367.167602,14.1676025 C367.391072,13.9441325 367.753389,13.9441325 367.976859,14.1676025 L370,16.1907436 Z M370,23 C373.313708,23 376,20.3137085 376,17 C376,13.6862915 373.313708,11 370,11 C366.686292,11 364,13.6862915 364,17 C364,20.3137085 366.686292,23 370,23 Z"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (IconClear);

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

/***/ })

}]);
//# sourceMappingURL=activity-sidebar~metadata-sidebar.js.map
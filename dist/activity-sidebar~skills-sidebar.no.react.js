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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-sidebar~skills-sidebar"],{

/***/ "./src/components/pill-selector-dropdown/Pill.js":
/*!*******************************************************!*\
  !*** ./src/components/pill-selector-dropdown/Pill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




var Pill = (_ref) => {
  var {
    isDisabled = false,
    isSelected = false,
    isValid = true,
    onRemove,
    text
  } = _ref;
  var styles = classnames__WEBPACK_IMPORTED_MODULE_2___default()('pill', {
    'is-selected': isSelected && !isDisabled,
    'is-invalid': !isValid,
    'is-disabled': isDisabled
  });
  var onClick = isDisabled ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : onRemove;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: styles
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "pill-text"
  }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true",
    className: "close-btn",
    onClick: onClick
  }, "\u2715"));
};

/* harmony default export */ __webpack_exports__["default"] = (Pill);

/***/ }),

/***/ "./src/components/pill-selector-dropdown/PillSelector.js":
/*!***************************************************************!*\
  !*** ./src/components/pill-selector-dropdown/PillSelector.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _Pill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pill */ "./src/components/pill-selector-dropdown/Pill.js");
/* harmony import */ var _SuggestedPillsRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SuggestedPillsRow */ "./src/components/pill-selector-dropdown/SuggestedPillsRow.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function stopDefaultEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

class PillSelector extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isFocused: false,
      selectedIndex: -1
    });

    _defineProperty(this, "getNumSelected", () => {
      var {
        selectedOptions
      } = this.props;
      return typeof selectedOptions.size === 'number' ? selectedOptions.size : selectedOptions.length;
    });

    _defineProperty(this, "getPillsByKey", key => {
      var {
        selectedOptions
      } = this.props;
      return selectedOptions.map(option => option[key]);
    });

    _defineProperty(this, "handleClick", () => {
      this.inputEl.focus();
    });

    _defineProperty(this, "handleFocus", () => {
      this.setState({
        isFocused: true
      });
    });

    _defineProperty(this, "handleBlur", () => {
      this.setState({
        isFocused: false
      });
    });

    _defineProperty(this, "handleKeyDown", event => {
      var inputValue = this.inputEl.value;
      var numPills = this.getNumSelected();
      var {
        selectedIndex
      } = this.state;

      switch (event.key) {
        case _constants__WEBPACK_IMPORTED_MODULE_4__["KEYS"].backspace:
          {
            var index = -1;

            if (selectedIndex >= 0) {
              // remove selected pill
              index = selectedIndex;
              this.resetSelectedIndex();
              this.inputEl.focus();
            } else if (inputValue === '') {
              // remove last pill
              index = numPills - 1;
            }

            if (index >= 0) {
              var {
                onRemove,
                selectedOptions
              } = this.props;
              var selectedOption = // $FlowFixMe
              typeof selectedOptions.get === 'function' ? selectedOptions.get(index) : selectedOptions[index];
              onRemove(selectedOption, index);
              stopDefaultEvent(event);
            }

            break;
          }

        case _constants__WEBPACK_IMPORTED_MODULE_4__["KEYS"].arrowLeft:
          if (selectedIndex >= 0) {
            // select previous pill
            this.setState({
              selectedIndex: Math.max(selectedIndex - 1, 0)
            });
            stopDefaultEvent(event);
          } else if (inputValue === '' && numPills > 0) {
            // select last pill
            this.hiddenEl.focus();
            this.setState({
              selectedIndex: numPills - 1
            });
            stopDefaultEvent(event);
          }

          break;

        case _constants__WEBPACK_IMPORTED_MODULE_4__["KEYS"].arrowRight:
          {
            if (selectedIndex >= 0) {
              var _index = selectedIndex + 1;

              if (_index >= numPills) {
                // deselect last pill
                this.resetSelectedIndex();
                this.inputEl.focus();
              } else {
                // select next pill
                this.setState({
                  selectedIndex: _index
                });
              }

              stopDefaultEvent(event);
            }

            break;
          }
        // no default
      }
    });

    _defineProperty(this, "errorMessageID", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('errorMessage'));

    _defineProperty(this, "hiddenRef", hiddenEl => {
      if (hiddenEl) {
        this.hiddenEl = hiddenEl;
      }
    });

    _defineProperty(this, "resetSelectedIndex", () => {
      if (this.state.selectedIndex !== -1) {
        this.setState({
          selectedIndex: -1
        });
      }
    });
  }

  render() {
    var {
      isFocused,
      selectedIndex
    } = this.state;

    var _this$props = this.props,
        {
      allowInvalidPills,
      className,
      disabled,
      error,
      inputProps,
      onInput,
      onRemove,
      onSuggestedPillAdd,
      placeholder,
      selectedOptions,
      suggestedPillsData,
      suggestedPillsFilter,
      suggestedPillsTitle,
      validator
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["allowInvalidPills", "className", "disabled", "error", "inputProps", "onInput", "onRemove", "onSuggestedPillAdd", "placeholder", "selectedOptions", "suggestedPillsData", "suggestedPillsFilter", "suggestedPillsTitle", "validator"]);

    var suggestedPillsEnabled = suggestedPillsData && suggestedPillsData.length > 0;
    var hasError = !!error;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('pill-selector-input-wrapper', {
      'is-disabled': disabled,
      'is-focused': isFocused,
      'show-error': hasError,
      'pill-selector-suggestions-enabled': suggestedPillsEnabled
    });
    var ariaAttrs = {
      'aria-invalid': hasError,
      'aria-errormessage': this.errorMessageID
    };
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isShown: hasError,
      text: error || '',
      position: "middle-right",
      theme: "error"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: classes,
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      onKeyDown: this.handleKeyDown
    }, selectedOptions.map((option, index) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Pill__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isValid: allowInvalidPills ? validator(option) : true,
      isDisabled: disabled,
      isSelected: index === selectedIndex,
      key: option.value,
      onRemove: onRemove.bind(this, option, index) // $FlowFixMe option.text is for backwards compatibility
      ,
      text: option.displayText || option.text
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      "aria-hidden": "true",
      className: "accessibility-hidden",
      onBlur: this.resetSelectedIndex,
      ref: this.hiddenRef,
      tabIndex: -1,
      "data-testid": "pill-selection-helper"
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", _extends({}, ariaAttrs, rest, inputProps, {
      autoComplete: "off",
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('pill-selector-input', className),
      disabled: disabled,
      onInput: onInput,
      placeholder: this.getNumSelected() === 0 ? placeholder : '',
      ref: input => {
        this.inputEl = input;
      }
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SuggestedPillsRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onSuggestedPillAdd: onSuggestedPillAdd,
      selectedPillsValues: this.getPillsByKey('value'),
      suggestedPillsFilter: suggestedPillsFilter,
      suggestedPillsData: suggestedPillsData,
      title: suggestedPillsTitle
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      id: this.errorMessageID,
      className: "accessibility-hidden",
      role: "alert"
    }, error)));
  }

}

_defineProperty(PillSelector, "defaultProps", {
  allowInvalidPills: false,
  disabled: false,
  error: '',
  inputProps: {},
  placeholder: '',
  selectedOptions: [],
  validator: () => true
});

/* harmony default export */ __webpack_exports__["default"] = (PillSelector);

/***/ }),

/***/ "./src/components/pill-selector-dropdown/SuggestedPill.js":
/*!****************************************************************!*\
  !*** ./src/components/pill-selector-dropdown/SuggestedPill.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plain_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SuggestedPillsRow.scss */ "./src/components/pill-selector-dropdown/SuggestedPillsRow.scss");
/* harmony import */ var _SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_4__);






var SuggestedPill = (_ref) => {
  var {
    email,
    id,
    name,
    onAdd
  } = _ref;

  var addSuggestedPill = event => {
    event.preventDefault();
    onAdd({
      email,
      id,
      name,
      text: name,
      type: 'user',
      value: email
    });
  };

  var handleKeyPress = event => {
    if (event.key === _constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].enter) {
      addSuggestedPill(event);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "bottom-center",
    text: email
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_plain_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "suggested-pill-invisible-button",
    onClick: addSuggestedPill,
    onKeyDown: handleKeyPress,
    type: "button"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "pill-text suggested-pill"
  }, name)));
};

/* harmony default export */ __webpack_exports__["default"] = (SuggestedPill);

/***/ }),

/***/ "./src/components/pill-selector-dropdown/SuggestedPillsRow.js":
/*!********************************************************************!*\
  !*** ./src/components/pill-selector-dropdown/SuggestedPillsRow.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SuggestedPill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuggestedPill */ "./src/components/pill-selector-dropdown/SuggestedPill.js");
/* harmony import */ var _SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SuggestedPillsRow.scss */ "./src/components/pill-selector-dropdown/SuggestedPillsRow.scss");
/* harmony import */ var _SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SuggestedPillsRow_scss__WEBPACK_IMPORTED_MODULE_3__);





var SuggestedPillsRow = (_ref) => {
  var {
    onSuggestedPillAdd = lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a,
    selectedPillsValues = [],
    suggestedPillsData = [],
    suggestedPillsFilter = 'id',
    title
  } = _ref;
  // Prevents pills from being rendered that are in the form by checking for value (id or custom value)
  var filteredSuggestedPillData = suggestedPillsData.filter(item => !selectedPillsValues.includes(item[suggestedPillsFilter]));

  if (filteredSuggestedPillData.length === 0) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pill-selector-suggested"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, title), filteredSuggestedPillData.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SuggestedPill__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: item.id,
    email: item.email,
    id: item.id,
    name: item.name,
    onAdd: onSuggestedPillAdd
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SuggestedPillsRow);

/***/ }),

/***/ "./src/components/pill-selector-dropdown/SuggestedPillsRow.scss":
/*!**********************************************************************!*\
  !*** ./src/components/pill-selector-dropdown/SuggestedPillsRow.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=activity-sidebar~skills-sidebar.no.react.js.map
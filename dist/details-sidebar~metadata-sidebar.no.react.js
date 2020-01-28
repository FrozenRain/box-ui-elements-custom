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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-sidebar~metadata-sidebar"],{

/***/ "./src/components/collapsible/Collapsible.js":
/*!***************************************************!*\
  !*** ./src/components/collapsible/Collapsible.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_animate_height__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-animate-height */ "./node_modules/react-animate-height/lib/AnimateHeight.js");
/* harmony import */ var react_animate_height__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_animate_height__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/variables */ "./src/common/variables.js");
/* harmony import */ var _icons_general_IconCaretDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/general/IconCaretDown */ "./src/icons/general/IconCaretDown.js");
/* harmony import */ var _plain_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");
/* harmony import */ var _Collapsible_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Collapsible.scss */ "./src/components/collapsible/Collapsible.scss");
/* harmony import */ var _Collapsible_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Collapsible_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class Collapsible extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "toggleVisibility", () => {
      var {
        onOpen,
        onClose
      } = this.props;
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }), () => {
        var {
          isOpen
        } = this.state;

        if (isOpen && onOpen) {
          onOpen(this);
        } else if (!isOpen && onClose) {
          onClose(this);
        }
      });
    });

    this.state = {
      isOpen: props.isOpen
    };
  }

  render() {
    var {
      isOpen
    } = this.state;
    var {
      animationDuration,
      buttonProps = {},
      children,
      className,
      isBordered,
      hasStickyHeader,
      headerActionItems,
      title
    } = this.props;
    var sectionClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('collapsible-card', {
      'is-open': isOpen
    }, {
      'is-bordered': isBordered
    }, className);
    var interactionTarget = buttonProps[_common_variables__WEBPACK_IMPORTED_MODULE_4__["RESIN_TAG_TARGET"]];
    var modifiedButtonProps = lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(buttonProps, [_common_variables__WEBPACK_IMPORTED_MODULE_4__["RESIN_TAG_TARGET"]]);
    var buttonClassName = hasStickyHeader ? 'collapsible-card-header has-sticky-header' : 'collapsible-card-header';

    if (interactionTarget) {
      modifiedButtonProps[_common_variables__WEBPACK_IMPORTED_MODULE_4__["RESIN_TAG_TARGET"]] = "".concat(interactionTarget).concat(isOpen ? 'collapse' : 'expand');
    }

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: sectionClassName
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: buttonClassName
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plain_button__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, modifiedButtonProps, {
      className: "collapsible-card-title",
      onClick: this.toggleVisibility,
      type: "button"
    }), title, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconCaretDown__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "collapsible-card-header-caret",
      color: _styles_variables__WEBPACK_IMPORTED_MODULE_7__["bdlGray50"],
      width: 8
    })), isOpen && headerActionItems), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_animate_height__WEBPACK_IMPORTED_MODULE_3___default.a, {
      duration: animationDuration,
      height: isOpen ? 'auto' : 0
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "collapsible-card-content"
    }, children)));
  }

}

_defineProperty(Collapsible, "defaultProps", {
  buttonProps: {},
  className: '',
  isOpen: true,
  animationDuration: 100
});

/* harmony default export */ __webpack_exports__["default"] = (Collapsible);

/***/ }),

/***/ "./src/components/collapsible/Collapsible.scss":
/*!*****************************************************!*\
  !*** ./src/components/collapsible/Collapsible.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/text-input/TextInput.js":
/*!************************************************!*\
  !*** ./src/components/text-input/TextInput.js ***!
  \************************************************/
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
/* harmony import */ var _icons_general_IconVerified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconVerified */ "./src/icons/general/IconVerified.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../label */ "./src/components/label/index.js");
/* harmony import */ var _loading_indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading-indicator */ "./src/components/loading-indicator/index.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.js");
/* harmony import */ var _TextInput_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TextInput.scss */ "./src/components/text-input/TextInput.scss");
/* harmony import */ var _TextInput_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_TextInput_scss__WEBPACK_IMPORTED_MODULE_7__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










var TextInput = (_ref) => {
  var {
    className = '',
    description,
    error,
    errorPosition,
    hideLabel,
    hideOptionalLabel,
    inputRef,
    isLoading,
    isRequired,
    isValid,
    label,
    labelTooltip
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "description", "error", "errorPosition", "hideLabel", "hideOptionalLabel", "inputRef", "isLoading", "isRequired", "isValid", "label", "labelTooltip"]);

  var hasError = !!error;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'text-input-container', {
    'show-error': hasError
  });
  var errorMessageID = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('errorMessage')).current;
  var ariaAttrs = {
    'aria-invalid': hasError,
    'aria-required': isRequired,
    'aria-errormessage': errorMessageID
  };
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_label__WEBPACK_IMPORTED_MODULE_4__["default"], {
    hideLabel: hideLabel,
    showOptionalText: !hideOptionalLabel && !isRequired,
    text: label,
    tooltip: labelTooltip
  }, !!description && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: "text-input-description"
  }, description), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isShown: hasError,
    position: errorPosition || 'middle-right',
    text: error || '',
    theme: "error"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", _extends({
    ref: inputRef,
    required: isRequired
  }, ariaAttrs, rest))), isLoading && !isValid && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_loading_indicator__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "text-input-loading"
  }), isValid && !isLoading && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconVerified__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "text-input-verified"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: errorMessageID,
    className: "accessibility-hidden",
    role: "alert"
  }, error)));
};

TextInput.displayName = 'TextInput';
/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./src/components/text-input/TextInput.scss":
/*!**************************************************!*\
  !*** ./src/components/text-input/TextInput.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/icons/general/IconAlertDefault.js":
/*!***********************************************!*\
  !*** ./src/icons/general/IconAlertDefault.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconAlertDefault = (_ref) => {
  var {
    className = '',
    color = '#F7931D',
    height = 26,
    title,
    width = 26
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-alert-default ".concat(className),
    title: title,
    height: height,
    width: width,
    viewBox: "0 0 26 26"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    id: "b",
    cx: "8",
    cy: "8",
    r: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("filter", {
    x: "-46.9%",
    y: "-46.9%",
    width: "193.8%",
    height: "193.8%",
    filterUnits: "objectBoundingBox",
    id: "a"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feMorphology", {
    radius: ".5",
    operator: "dilate",
    in: "SourceAlpha",
    result: "shadowSpreadOuter1"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feOffset", {
    in: "shadowSpreadOuter1",
    result: "shadowOffsetOuter1"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feGaussianBlur", {
    stdDeviation: "2",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("feColorMatrix", {
    values: "0 0 0 0 0.733285502 0 0 0 0 0.733285502 0 0 0 0 0.733285502 0 0 0 0.5 0",
    in: "shadowBlurOuter1"
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    transform: "translate(5 5)",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
    fill: "#000",
    filter: "url(#a)",
    xlinkHref: "#b"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
    fill: color,
    xlinkHref: "#b"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M8.047 4.706v4.111",
    stroke: "#FFF",
    strokeWidth: "1.412",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    fill: "#FFF",
    cx: "8.047",
    cy: "11.294",
    r: "1"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconAlertDefault);

/***/ })

}]);
//# sourceMappingURL=details-sidebar~metadata-sidebar.no.react.js.map
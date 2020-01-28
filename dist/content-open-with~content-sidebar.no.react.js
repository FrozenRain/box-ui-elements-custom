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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-open-with~content-sidebar"],{

/***/ "./src/components/plain-button/index.js":
/*!**********************************************!*\
  !*** ./src/components/plain-button/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlainButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlainButton */ "./src/components/plain-button/PlainButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PlainButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/tooltip/Tooltip.js":
/*!*******************************************!*\
  !*** ./src/components/tooltip/Tooltip.js ***!
  \*******************************************/
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
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tether */ "./node_modules/react-tether/lib/react-tether.js");
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tether__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_general_IconClose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/general/IconClose */ "./src/icons/general/IconClose.js");
/* harmony import */ var _plain_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _Tooltip_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tooltip.scss */ "./src/components/tooltip/Tooltip.scss");
/* harmony import */ var _Tooltip_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Tooltip_scss__WEBPACK_IMPORTED_MODULE_6__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var BOTTOM_CENTER = 'bottom-center';
var BOTTOM_LEFT = 'bottom-left';
var BOTTOM_RIGHT = 'bottom-right';
var MIDDLE_LEFT = 'middle-left';
var MIDDLE_RIGHT = 'middle-right';
var TOP_CENTER = 'top-center';
var TOP_LEFT = 'top-left';
var TOP_RIGHT = 'top-right';
var CALLOUT_THEME = 'callout';
var DEFAULT_THEME = 'default';
var ERROR_THEME = 'error';
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

class Tooltip extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "tooltipID", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('tooltip'));

    _defineProperty(this, "tetherRef", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "position", () => {
      if (this.tetherRef.current && this.isShown()) {
        this.tetherRef.current.position();
      }
    });

    _defineProperty(this, "closeTooltip", () => {
      var {
        onDismiss
      } = this.props;
      this.setState({
        wasClosedByUser: true
      });

      if (onDismiss) {
        onDismiss();
      }
    });

    _defineProperty(this, "fireChildEvent", (type, event) => {
      // $FlowFixMe
      var handler = this.props.children.props[type];

      if (handler) {
        handler(event);
      }
    });

    _defineProperty(this, "handleMouseEnter", event => {
      this.setState({
        isShown: true
      });
      this.fireChildEvent('onMouseEnter', event);
    });

    _defineProperty(this, "handleMouseLeave", event => {
      this.setState({
        isShown: false
      });
      this.fireChildEvent('onMouseLeave', event);
    });

    _defineProperty(this, "handleFocus", event => {
      this.setState({
        isShown: true
      });
      this.fireChildEvent('onFocus', event);
    });

    _defineProperty(this, "handleBlur", event => {
      this.setState({
        isShown: false
      });
      this.fireChildEvent('onBlur', event);
    });

    _defineProperty(this, "handleKeyDown", event => {
      if (event.key === 'Escape') {
        this.setState({
          isShown: false
        });
      }

      this.fireChildEvent('onKeyDown', event);
    });

    _defineProperty(this, "isControlled", () => {
      var {
        isShown: isShownProp
      } = this.props;
      return typeof isShownProp !== 'undefined';
    });

    _defineProperty(this, "isShown", () => {
      var {
        isShown: isShownProp
      } = this.props;
      var isControlled = this.isControlled();
      var isShown = isControlled ? isShownProp : this.state.isShown;
      var showTooltip = isShown && !this.state.wasClosedByUser;
      return showTooltip;
    });

    this.state = {
      isShown: !!props.isShown,
      wasClosedByUser: false
    };
  }

  render() {
    var {
      bodyElement,
      children,
      className,
      constrainToScrollParent,
      constrainToWindow,
      isDisabled,
      isTabbable = true,
      position,
      showCloseButton,
      text,
      theme
    } = this.props; // If the tooltip is disabled just render the children

    if (isDisabled) {
      return react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children);
    }

    var isControlled = this.isControlled();
    var showTooltip = this.isShown();
    var withCloseButton = showCloseButton && isControlled;
    var tetherPosition = positions[position];
    var constraints = [];
    var componentProps = {};

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

    if (showTooltip) {
      componentProps['aria-describedby'] = this.tooltipID;
    }

    if (!isControlled) {
      componentProps.onBlur = this.handleBlur;
      componentProps.onFocus = this.handleFocus;
      componentProps.onKeyDown = this.handleKeyDown;
      componentProps.onMouseEnter = this.handleMouseEnter;
      componentProps.onMouseLeave = this.handleMouseLeave;

      if (isTabbable) {
        componentProps.tabIndex = '0';
      }
    }

    var bodyEl = bodyElement instanceof HTMLElement ? bodyElement : document.body;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('tooltip', className, {
      'is-callout': theme === CALLOUT_THEME,
      'is-error': theme === ERROR_THEME,
      'with-close-button': withCloseButton
    });
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_tether__WEBPACK_IMPORTED_MODULE_3___default.a, {
      attachment: tetherPosition.attachment,
      bodyElement: bodyEl,
      classPrefix: "tooltip",
      constraints: constraints,
      enabled: showTooltip,
      targetAttachment: tetherPosition.targetAttachment,
      ref: this.tetherRef
    }, react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children), componentProps), showTooltip && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classes,
      id: this.tooltipID,
      role: "tooltip"
    }, text, withCloseButton && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plain_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "tooltip-close-button",
      onClick: this.closeTooltip
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconClose__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
  }

}

_defineProperty(Tooltip, "defaultProps", {
  constrainToScrollParent: false,
  constrainToWindow: true,
  isDisabled: false,
  position: TOP_CENTER,
  theme: DEFAULT_THEME
});

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "./src/components/tooltip/Tooltip.scss":
/*!*********************************************!*\
  !*** ./src/components/tooltip/Tooltip.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/common/Tooltip.js":
/*!****************************************!*\
  !*** ./src/elements/common/Tooltip.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tooltip/Tooltip */ "./src/components/tooltip/Tooltip.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Wrapper to conditionally add a tooltip
 * @author Box
 */



var Tooltip = (_ref) => {
  var {
    children,
    isDisabled,
    text
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "isDisabled", "text"]);

  if (isDisabled || !text) {
    return children;
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    text: text
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "./src/icons/general/IconCaretDown.js":
/*!********************************************!*\
  !*** ./src/icons/general/IconCaretDown.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconCaretDown = (_ref) => {
  var {
    className = '',
    color = '#000',
    height = 6,
    title,
    width = 10
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-caret-down ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 10 6",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M0 .5l5 5 5-5H0z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconCaretDown);

/***/ })

}]);
//# sourceMappingURL=content-open-with~content-sidebar.no.react.js.map
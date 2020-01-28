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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-sidebar~metadata-sidebar~skills-sidebar"],{

/***/ "./src/components/button/Button.js":
/*!*****************************************!*\
  !*** ./src/components/button/Button.js ***!
  \*****************************************/
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
/* harmony import */ var _loading_indicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading-indicator */ "./src/components/loading-indicator/index.js");
/* harmony import */ var _radar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../radar */ "./src/components/radar/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Button extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "handleClick", event => {
      var {
        isDisabled,
        onClick
      } = this.props;

      if (isDisabled || this.btnElement && this.btnElement.classList.contains('is-disabled')) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (onClick) {
        onClick(event);
      }
    });
  }

  render() {
    var _this$props = this.props,
        {
      children,
      className = '',
      isDisabled,
      isLoading = false,
      isSelected,
      setRef,
      type = 'submit',
      showRadar = false
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["children", "className", "isDisabled", "isLoading", "isSelected", "setRef", "type", "showRadar"]);

    var buttonProps = lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(rest, ['onClick']);

    if (isDisabled) {
      buttonProps['aria-disabled'] = true;
    }

    var styleClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('btn', {
      'is-disabled': isDisabled,
      'is-loading': isLoading,
      'is-selected': isSelected
    }, className);
    var button = // eslint-disable-next-line react/button-has-type
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", _extends({
      ref: element => {
        this.btnElement = element;

        if (setRef) {
          setRef(element);
        }
      },
      className: styleClassName,
      onClick: this.handleClick,
      type: type
    }, buttonProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: "btn-content"
    }, children), isLoading && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_loading_indicator__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "btn-loading-indicator"
    }));

    if (showRadar) {
      button = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_radar__WEBPACK_IMPORTED_MODULE_4__["default"], null, button);
    }

    return button;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/button/index.js":
/*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/components/button/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/primary-button/PrimaryButton.js":
/*!********************************************************!*\
  !*** ./src/components/primary-button/PrimaryButton.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ "./src/components/button/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var PrimaryButton = (_ref) => {
  var {
    children,
    className = '',
    isDisabled,
    isSelected,
    isLoading
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "className", "isDisabled", "isSelected", "isLoading"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    className: "btn-primary ".concat(className),
    isDisabled: isDisabled,
    isLoading: isLoading,
    isSelected: isSelected
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (PrimaryButton);

/***/ }),

/***/ "./src/components/radar/RadarAnimation.js":
/*!************************************************!*\
  !*** ./src/components/radar/RadarAnimation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tether */ "./node_modules/react-tether/lib/react-tether.js");
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tether__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RadarAnimation_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RadarAnimation.scss */ "./src/components/radar/RadarAnimation.scss");
/* harmony import */ var _RadarAnimation_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RadarAnimation_scss__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var BOTTOM_CENTER = 'bottom-center';
var BOTTOM_LEFT = 'bottom-left';
var BOTTOM_RIGHT = 'bottom-right';
var MIDDLE_CENTER = 'middle-center';
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
    attachment: 'top left',
    targetAttachment: 'bottom left'
  },
  [BOTTOM_RIGHT]: {
    attachment: 'top right',
    targetAttachment: 'bottom right'
  },
  [MIDDLE_CENTER]: {
    attachment: 'middle center',
    targetAttachment: 'middle center'
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
    attachment: 'bottom left',
    targetAttachment: 'top left'
  },
  [TOP_RIGHT]: {
    attachment: 'bottom right',
    targetAttachment: 'top right'
  }
};

class RadarAnimation extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "tetherRef", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "radarAnimationID", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()('radarAnimation'));

    _defineProperty(this, "position", () => {
      var {
        isShown
      } = this.props;

      if (this.tetherRef.current && isShown) {
        this.tetherRef.current.position();
      }
    });
  }

  render() {
    var {
      children,
      className = '',
      constrainToScrollParent,
      constrainToWindow,
      position,
      isShown
    } = this.props;
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

    var tetherPosition = positions[position];
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_tether__WEBPACK_IMPORTED_MODULE_2___default.a, {
      attachment: tetherPosition.attachment,
      classPrefix: "radar-animation",
      constraints: constraints,
      targetAttachment: tetherPosition.targetAttachment,
      ref: this.tetherRef
    }, react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children), {
      'aria-describedby': this.radarAnimationID
    }), isShown && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "radar ".concat(className),
      id: this.radarAnimationID
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "radar-dot"
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "radar-circle"
    })));
  }

}

_defineProperty(RadarAnimation, "defaultProps", {
  constrainToScrollParent: false,
  constrainToWindow: true,
  isShown: true,
  position: MIDDLE_RIGHT
});

/* harmony default export */ __webpack_exports__["default"] = (RadarAnimation);

/***/ }),

/***/ "./src/components/radar/RadarAnimation.scss":
/*!**************************************************!*\
  !*** ./src/components/radar/RadarAnimation.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/radar/index.js":
/*!***************************************!*\
  !*** ./src/components/radar/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RadarAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadarAnimation */ "./src/components/radar/RadarAnimation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _RadarAnimation__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

}]);
//# sourceMappingURL=activity-sidebar~metadata-sidebar~skills-sidebar.js.map
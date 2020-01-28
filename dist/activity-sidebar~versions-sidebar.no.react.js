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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-sidebar~versions-sidebar"],{

/***/ "./src/components/dropdown-menu/index.js":
/*!***********************************************!*\
  !*** ./src/components/dropdown-menu/index.js ***!
  \***********************************************/
/*! exports provided: default, MenuToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownMenu */ "./src/components/dropdown-menu/DropdownMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DropdownMenu__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _MenuToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuToggle */ "./src/components/dropdown-menu/MenuToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuToggle", function() { return _MenuToggle__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/components/inline-error/index.js":
/*!**********************************************!*\
  !*** ./src/components/inline-error/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InlineError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InlineError */ "./src/components/inline-error/InlineError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InlineError__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/menu/MenuLinkItem.js":
/*!*********************************************!*\
  !*** ./src/components/menu/MenuLinkItem.js ***!
  \*********************************************/
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var MenuLinkItem = (_ref) => {
  var {
    children,
    isSelected = false,
    isSelectItem = false
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "isSelected", "isSelectItem"]);

  var linkEl = react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children);
  var listItemProps = lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(rest, ['role', 'tabIndex']);
  listItemProps.role = 'none';
  var linkProps = {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('menu-item', linkEl.props.className, {
      'is-select-item': isSelectItem,
      'is-selected': isSelected
    }),
    role: isSelectItem ? 'menuitemradio' : 'menuitem',
    tabIndex: -1
  };

  if (isSelectItem) {
    linkProps['aria-checked'] = isSelected;
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", listItemProps, react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](linkEl, linkProps));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuLinkItem);

/***/ }),

/***/ "./src/components/menu/MenuSectionHeader.js":
/*!**************************************************!*\
  !*** ./src/components/menu/MenuSectionHeader.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "./src/components/menu/MenuItem.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var MenuSectionHeader = (_ref) => {
  var {
    className = ''
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    className: "menu-section-header ".concat(className),
    isDisabled: true
  }, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuSectionHeader);

/***/ }),

/***/ "./src/components/menu/MenuSeparator.js":
/*!**********************************************!*\
  !*** ./src/components/menu/MenuSeparator.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var MenuSeparator = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  role: "separator"
});

/* harmony default export */ __webpack_exports__["default"] = (MenuSeparator);

/***/ }),

/***/ "./src/components/menu/SelectMenuItem.js":
/*!***********************************************!*\
  !*** ./src/components/menu/SelectMenuItem.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "./src/components/menu/MenuItem.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var SelectMenuItem = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
  isSelectItem: true
}, props));

/* harmony default export */ __webpack_exports__["default"] = (SelectMenuItem);

/***/ }),

/***/ "./src/components/menu/SelectMenuLinkItem.js":
/*!***************************************************!*\
  !*** ./src/components/menu/SelectMenuLinkItem.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuLinkItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuLinkItem */ "./src/components/menu/MenuLinkItem.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var SelectMenuLinkItem = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_MenuLinkItem__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
  isSelectItem: true
}, props));

/* harmony default export */ __webpack_exports__["default"] = (SelectMenuLinkItem);

/***/ }),

/***/ "./src/components/menu/SubmenuItem.js":
/*!********************************************!*\
  !*** ./src/components/menu/SubmenuItem.js ***!
  \********************************************/
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
/* harmony import */ var _SubmenuItem_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubmenuItem.scss */ "./src/components/menu/SubmenuItem.scss");
/* harmony import */ var _SubmenuItem_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SubmenuItem_scss__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var SUBMENU_LEFT_ALIGNED_CLASS = 'is-left-aligned';
var SUBMENU_BOTTOM_ALIGNED_CLASS = 'is-bottom-aligned';

/**
 * A menu-item component which triggers open a submenu
 *
 * @NOTE: Nested submenus are NOT currently supported, switching
 * focus with arrow keys in the subsubmenu is not working properly.
 */
class SubmenuItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isSubmenuOpen: false,
      submenuFocusIndex: null
    });

    _defineProperty(this, "getMenuAlignmentClasses", () => {
      if (!this.submenuTriggerEl || !this.submenuEl) {
        return {};
      }

      var {
        rightBoundaryElement,
        bottomBoundaryElement
      } = this.props;
      var submenuElBounding = this.submenuEl.getBoundingClientRect(); // $FlowFixMe checked this.submenuEl is set above

      var submenuTriggerElBounding = this.submenuTriggerEl.getBoundingClientRect();
      var rightBoundaryElementBounding = rightBoundaryElement ? rightBoundaryElement.getBoundingClientRect() : {
        right: window.innerWidth
      };
      var bottomBoundaryElementBounding = bottomBoundaryElement ? bottomBoundaryElement.getBoundingClientRect() : {
        bottom: window.innerHeight
      };
      var isLeftAligned = submenuTriggerElBounding.right + submenuElBounding.width > rightBoundaryElementBounding.right;
      var isBottomAligned = submenuTriggerElBounding.top + submenuElBounding.height > bottomBoundaryElementBounding.bottom;
      return {
        [SUBMENU_LEFT_ALIGNED_CLASS]: isLeftAligned,
        [SUBMENU_BOTTOM_ALIGNED_CLASS]: isBottomAligned
      };
    });

    _defineProperty(this, "handleMenuItemClick", event => {
      var {
        isDisabled,
        onClick
      } = this.props; // If aria-disabled is passed as a prop, we should ignore clicks on this menu item

      if (isDisabled) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }

      if (onClick) {
        onClick(event);
      }
    });

    _defineProperty(this, "handleKeyDown", event => {
      switch (event.key) {
        case ' ': // Spacebar

        case 'Enter':
        case 'ArrowRight':
          event.stopPropagation();
          event.preventDefault();
          this.openSubmenuAndFocus();
          break;

        default:
          break;
      }
    });

    _defineProperty(this, "closeSubmenu", () => {
      this.setState({
        isSubmenuOpen: false
      });
    });

    _defineProperty(this, "closeSubmenuAndFocusTrigger", isKeyboardEvent => {
      this.closeSubmenu();

      if (this.submenuTriggerEl && isKeyboardEvent) {
        this.submenuTriggerEl.focus();
      }
    });

    _defineProperty(this, "openSubmenu", () => {
      this.setState({
        isSubmenuOpen: true,
        submenuFocusIndex: null
      });
    });

    _defineProperty(this, "openSubmenuAndFocus", () => {
      this.setState({
        isSubmenuOpen: true,
        submenuFocusIndex: 0
      });
    });
  }

  render() {
    var _this$props = this.props,
        {
      children,
      className,
      isDisabled
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["children", "className", "isDisabled"]);

    var {
      isSubmenuOpen,
      submenuFocusIndex
    } = this.state;
    var elements = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children);
    var submenuTriggerContent = elements[0];
    var submenu = elements[1];

    if (elements.length !== 2 || !submenuTriggerContent || !submenu) {
      throw new Error('SubmenuItem must have exactly two children, a trigger component and a <Menu>');
    }

    var menuItemProps = _objectSpread({}, lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(rest, ['bottomBoundaryElement', 'onClick', 'rightBoundaryElement', 'role', 'tabIndex']), {
      'aria-disabled': isDisabled ? 'true' : undefined,
      'aria-expanded': isSubmenuOpen ? 'true' : 'false',
      'aria-haspopup': 'true',
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('menu-item', 'submenu-target', className),
      onClick: this.handleMenuItemClick,
      onMouseLeave: this.closeSubmenu,
      onMouseEnter: this.openSubmenu,
      onKeyDown: this.handleKeyDown,
      ref: _ref => {
        this.submenuTriggerEl = _ref;
      },
      role: 'menuitem',
      tabIndex: -1
    });

    var submenuProps = {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(submenu.props.className, 'submenu', this.getMenuAlignmentClasses()),
      initialFocusIndex: submenuFocusIndex,
      // Hide the menu instead of unmounting it. Otherwise onMouseLeave won't work.
      isHidden: !isSubmenuOpen,
      isSubmenu: true,
      onClose: this.closeSubmenuAndFocusTrigger,
      setRef: ref => {
        this.submenuEl = ref;
      }
    };
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", menuItemProps, submenuTriggerContent, react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](submenu, submenuProps));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SubmenuItem);

/***/ }),

/***/ "./src/components/menu/SubmenuItem.scss":
/*!**********************************************!*\
  !*** ./src/components/menu/SubmenuItem.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/menu/index.js":
/*!**************************************!*\
  !*** ./src/components/menu/index.js ***!
  \**************************************/
/*! exports provided: Menu, MenuItem, MenuLinkItem, MenuSectionHeader, MenuSeparator, SelectMenuItem, SelectMenuLinkItem, SubmenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./src/components/menu/Menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _Menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "./src/components/menu/MenuItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return _MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _MenuLinkItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuLinkItem */ "./src/components/menu/MenuLinkItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuLinkItem", function() { return _MenuLinkItem__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _MenuSectionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuSectionHeader */ "./src/components/menu/MenuSectionHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuSectionHeader", function() { return _MenuSectionHeader__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _MenuSeparator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuSeparator */ "./src/components/menu/MenuSeparator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuSeparator", function() { return _MenuSeparator__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _SelectMenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectMenuItem */ "./src/components/menu/SelectMenuItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectMenuItem", function() { return _SelectMenuItem__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _SelectMenuLinkItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectMenuLinkItem */ "./src/components/menu/SelectMenuLinkItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectMenuLinkItem", function() { return _SelectMenuLinkItem__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _SubmenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubmenuItem */ "./src/components/menu/SubmenuItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmenuItem", function() { return _SubmenuItem__WEBPACK_IMPORTED_MODULE_7__["default"]; });










/***/ }),

/***/ "./src/components/time/ReadableTime.js":
/*!*********************************************!*\
  !*** ./src/components/time/ReadableTime.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/datetime */ "./src/utils/datetime.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/components/time/messages.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var ReadableTime = (_ref) => {
  var {
    timestamp,
    relativeThreshold = _constants__WEBPACK_IMPORTED_MODULE_2__["ONE_HOUR_MS"],
    allowFutureTimestamps = true,
    alwaysShowTime = false,
    showWeekday = false
  } = _ref;
  var relativeIfNewerThanTs = Date.now() - relativeThreshold;
  var shouldShowYear = !Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["isCurrentYear"])(timestamp);

  if (!allowFutureTimestamps && timestamp > Date.now()) {
    // TODO: what is the reasoning behind this rule?
    timestamp = relativeIfNewerThanTs; // Default to 'Today' for timestamps that would show a future date
  } // e.g. Oct 5, 2018


  var dateMessage = _messages__WEBPACK_IMPORTED_MODULE_4__["default"].eventTime;
  var date = null;
  var weekday = null;

  if (Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["isToday"])(timestamp)) {
    // e.g. Today at 12:30 PM
    dateMessage = _messages__WEBPACK_IMPORTED_MODULE_4__["default"].eventTimeToday;
  } else if (Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["isYesterday"])(timestamp)) {
    // e.g. Yesterday at 11:30 AM
    dateMessage = _messages__WEBPACK_IMPORTED_MODULE_4__["default"].eventTimeYesterday;
  } else if (showWeekday) {
    // e.g. Monday, Oct 5, 2018
    dateMessage = _messages__WEBPACK_IMPORTED_MODULE_4__["default"].eventTimeWeekdayLong;
    weekday = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedDate"], {
      value: timestamp,
      weekday: "long"
    });
  } else if (shouldShowYear && alwaysShowTime) {
    // e.g. Oct 5, 2018 at 10:30 PM
    dateMessage = _messages__WEBPACK_IMPORTED_MODULE_4__["default"].eventTimeDate;
  } else if (!shouldShowYear && alwaysShowTime) {
    // e.g. Oct 5 at 10:30 PM
    dateMessage = _messages__WEBPACK_IMPORTED_MODULE_4__["default"].eventTimeDateShort;
    date = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedDate"], {
      value: timestamp,
      month: "short",
      day: "numeric"
    });
  } else if (!shouldShowYear && !alwaysShowTime) {
    // e.g. Oct 5
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedDate"], {
      value: timestamp,
      month: "short",
      day: "numeric"
    });
  }

  var output = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, dateMessage, {
    values: {
      time: timestamp,
      date,
      weekday
    }
  })); // if the time stamp is within +/- the relative threshold for the current time,
  // print the default time format

  if (Math.abs(Date.now() - timestamp) <= relativeThreshold) {
    output = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedRelative"], {
      value: timestamp
    });
  }

  return output;
};

/* harmony default export */ __webpack_exports__["default"] = (ReadableTime);

/***/ }),

/***/ "./src/components/time/index.js":
/*!**************************************!*\
  !*** ./src/components/time/index.js ***!
  \**************************************/
/*! exports provided: ReadableTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReadableTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReadableTime */ "./src/components/time/ReadableTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReadableTime", function() { return _ReadableTime__WEBPACK_IMPORTED_MODULE_0__["default"]; });

// eslint-disable-next-line import/prefer-default-export


/***/ }),

/***/ "./src/components/time/messages.js":
/*!*****************************************!*\
  !*** ./src/components/time/messages.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  eventTime: {
    "id": "boxui.readableTime.eventTime",
    "defaultMessage": "{time, date, medium}"
  },
  eventTimeToday: {
    "id": "boxui.readableTime.eventTimeToday",
    "defaultMessage": "Today at {time, time, short}"
  },
  eventTimeYesterday: {
    "id": "boxui.readableTime.eventTimeYesterday",
    "defaultMessage": "Yesterday at {time, time, short}"
  },
  eventTimeDate: {
    "id": "boxui.readableTime.eventTimeDate",
    "defaultMessage": "{time, date, medium} at {time, time, short}"
  },
  eventTimeDateShort: {
    "id": "boxui.readableTime.eventTimeDateShort",
    "defaultMessage": "{date} at {time, time, short}"
  },
  eventTimeWeekdayLong: {
    "id": "boxui.readableTime.eventTimeWeekdayLong",
    "defaultMessage": "{weekday}, {time, date, medium}"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/common/selectors/version.js":
/*!**************************************************!*\
  !*** ./src/elements/common/selectors/version.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");


var getVersionAction = (_ref) => {
  var {
    restored_at,
    trashed_at,
    version_promoted
  } = _ref;
  var action = _constants__WEBPACK_IMPORTED_MODULE_0__["VERSION_UPLOAD_ACTION"];

  if (trashed_at) {
    action = _constants__WEBPACK_IMPORTED_MODULE_0__["VERSION_DELETE_ACTION"];
  }

  if (restored_at) {
    action = _constants__WEBPACK_IMPORTED_MODULE_0__["VERSION_RESTORE_ACTION"];
  }

  if (version_promoted) {
    action = _constants__WEBPACK_IMPORTED_MODULE_0__["VERSION_PROMOTE_ACTION"];
  }

  return action;
};

var getVersionUser = (_ref2) => {
  var {
    modified_by,
    restored_by,
    trashed_by
  } = _ref2;
  return restored_by || trashed_by || modified_by || _constants__WEBPACK_IMPORTED_MODULE_0__["PLACEHOLDER_USER"];
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getVersionAction,
  getVersionUser
});

/***/ }),

/***/ "./src/icons/general/IconTrash.js":
/*!****************************************!*\
  !*** ./src/icons/general/IconTrash.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");




var IconTrash = (_ref) => {
  var {
    className = '',
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray80"],
    height = 16,
    title,
    width = 16
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "icon-trash ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M14 2l-1.8 11c-.1.6-.7 1-1.2 1H5c-.6 0-1.1-.5-1.2-1L2 2h12zm-1.2 1H3.2l1.6 9.9s.1.1.2.1h6c.06 0 .12-.036.158-.065l.042-.035L12.8 3zm-2.3 1c.3 0 .5.2.5.5s-.2.5-.5.5h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconTrash);

/***/ })

}]);
//# sourceMappingURL=activity-sidebar~versions-sidebar.no.react.js.map
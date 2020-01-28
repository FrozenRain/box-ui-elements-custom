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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-sidebar~content-open-with~versions-sidebar"],{

/***/ "./src/components/dropdown-menu/DropdownMenu.js":
/*!******************************************************!*\
  !*** ./src/components/dropdown-menu/DropdownMenu.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tether */ "./node_modules/react-tether/lib/react-tether.js");
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tether__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _DropdownMenu_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropdownMenu.scss */ "./src/components/dropdown-menu/DropdownMenu.scss");
/* harmony import */ var _DropdownMenu_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_DropdownMenu_scss__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class DropdownMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "menuID", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('menu'));

    _defineProperty(this, "menuButtonID", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('menubutton'));

    _defineProperty(this, "state", {
      initialFocusIndex: null,
      isOpen: false
    });

    _defineProperty(this, "openMenuAndSetFocusIndex", initialFocusIndex => {
      this.setState({
        initialFocusIndex,
        isOpen: true
      });
    });

    _defineProperty(this, "closeMenu", () => {
      this.setState({
        isOpen: false
      });
    });

    _defineProperty(this, "focusButton", () => {
      // @NOTE: This breaks encapsulation a bit, but the only other way is passing ref functions to unknown children components
      var menuButtonEl = document.getElementById(this.menuButtonID);

      if (menuButtonEl) {
        menuButtonEl.focus();
      }
    });

    _defineProperty(this, "handleButtonClick", event => {
      var {
        isOpen
      } = this.state;
      event.stopPropagation();
      event.preventDefault();

      if (isOpen) {
        this.closeMenu();
      } else {
        this.openMenuAndSetFocusIndex(null);
      }
    });

    _defineProperty(this, "handleButtonKeyDown", event => {
      var {
        isOpen
      } = this.state;

      switch (event.key) {
        case _constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].space:
        case _constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].enter:
        case _constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].arrowDown:
          event.stopPropagation();
          event.preventDefault();
          this.openMenuAndSetFocusIndex(0);
          break;

        case _constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].arrowUp:
          event.stopPropagation();
          event.preventDefault();
          this.openMenuAndSetFocusIndex(-1);
          break;

        case _constants__WEBPACK_IMPORTED_MODULE_3__["KEYS"].escape:
          if (isOpen) {
            event.stopPropagation();
          }

          event.preventDefault();
          this.closeMenu();
          break;

        default:
          break;
      }
    });

    _defineProperty(this, "handleMenuClose", (isKeyboardEvent, event) => {
      var {
        onMenuClose
      } = this.props;
      this.closeMenu();
      this.focusButton();

      if (onMenuClose) {
        onMenuClose(event);
      }
    });

    _defineProperty(this, "handleDocumentClick", event => {
      var menuEl = document.getElementById(this.menuID);
      var menuButtonEl = document.getElementById(this.menuButtonID); // Some DOM magic to get global click handlers to close menu when not interacting with menu or associated button

      if (menuEl && menuButtonEl && event.target instanceof Node && !menuEl.contains(event.target) && !menuButtonEl.contains(event.target)) {
        this.closeMenu();
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.isOpen && this.state.isOpen) {
      // When menu is being opened
      document.addEventListener('click', this.handleDocumentClick, true);
      document.addEventListener('contextmenu', this.handleDocumentClick, true);
      var {
        onMenuOpen
      } = this.props;

      if (onMenuOpen) {
        onMenuOpen();
      }
    } else if (prevState.isOpen && !this.state.isOpen) {
      // When menu is being closed
      document.removeEventListener('contextmenu', this.handleDocumentClick, true);
      document.removeEventListener('click', this.handleDocumentClick, true);
    }
  }

  componentWillUnmount() {
    if (this.state.isOpen) {
      // Clean-up global click handlers
      document.removeEventListener('contextmenu', this.handleDocumentClick, true);
      document.removeEventListener('click', this.handleDocumentClick, true);
    }
  }

  render() {
    var {
      bodyElement,
      children,
      isRightAligned,
      constrainToScrollParent,
      constrainToWindow,
      className
    } = this.props;
    var {
      isOpen,
      initialFocusIndex
    } = this.state;
    var elements = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children);

    if (elements.length !== 2) {
      throw new Error('DropdownMenu must have exactly two children: A button component and a <Menu>');
    }

    var menuButton = elements[0];
    var menu = elements[1];
    var menuButtonProps = {
      id: this.menuButtonID,
      key: this.menuButtonID,
      onClick: this.handleButtonClick,
      // NOTE: Overrides button's handler
      onKeyDown: this.handleButtonKeyDown,
      // NOTE: Overrides button's handler
      'aria-haspopup': 'true',
      'aria-expanded': isOpen ? 'true' : 'false'
    }; // Add this only when its open, otherwise the menuID element isn't rendered

    if (isOpen) {
      menuButtonProps['aria-controls'] = this.menuID;
    }

    var menuProps = {
      id: this.menuID,
      key: this.menuID,
      initialFocusIndex,
      onClose: this.handleMenuClose,
      'aria-labelledby': this.menuButtonID
    };
    var attachment = 'top left';
    var targetAttachment = 'bottom left';

    if (isRightAligned) {
      attachment = 'top right';
      targetAttachment = 'bottom right';
    }

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

    var bodyEl = bodyElement instanceof HTMLElement ? bodyElement : document.body;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_tether__WEBPACK_IMPORTED_MODULE_1___default.a, {
      attachment: attachment,
      bodyElement: bodyEl,
      className: className,
      classPrefix: "dropdown-menu",
      constraints: constraints,
      enabled: isOpen,
      targetAttachment: targetAttachment
    }, react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](menuButton, menuButtonProps), isOpen ? react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](menu, menuProps) : null);
  }

}

_defineProperty(DropdownMenu, "defaultProps", {
  constrainToScrollParent: false,
  constrainToWindow: false,
  isRightAligned: false
});

/* harmony default export */ __webpack_exports__["default"] = (DropdownMenu);

/***/ }),

/***/ "./src/components/dropdown-menu/DropdownMenu.scss":
/*!********************************************************!*\
  !*** ./src/components/dropdown-menu/DropdownMenu.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/dropdown-menu/MenuToggle.js":
/*!****************************************************!*\
  !*** ./src/components/dropdown-menu/MenuToggle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_general_IconCaretDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/general/IconCaretDown */ "./src/icons/general/IconCaretDown.js");
/* harmony import */ var _MenuToggle_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuToggle.scss */ "./src/components/dropdown-menu/MenuToggle.scss");
/* harmony import */ var _MenuToggle_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MenuToggle_scss__WEBPACK_IMPORTED_MODULE_2__);




var MenuToggle = (_ref) => {
  var {
    children
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "menu-toggle"
  }, children, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconCaretDown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "toggle-arrow",
    width: 7
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuToggle);

/***/ }),

/***/ "./src/components/dropdown-menu/MenuToggle.scss":
/*!******************************************************!*\
  !*** ./src/components/dropdown-menu/MenuToggle.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/menu/Menu.js":
/*!*************************************!*\
  !*** ./src/components/menu/Menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Menu_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu.scss */ "./src/components/menu/Menu.scss");
/* harmony import */ var _Menu_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Menu_scss__WEBPACK_IMPORTED_MODULE_3__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var MENU_ITEM_SELECTOR = '.menu-item:not([aria-disabled])';
var TOP_LEVEL_MENU_ITEM_SELECTOR = "ul:not(.submenu) > ".concat(MENU_ITEM_SELECTOR, ", ul:not(.submenu) > li > ").concat(MENU_ITEM_SELECTOR);
var SUBMENU_ITEM_SELECTOR = "ul.submenu > ".concat(MENU_ITEM_SELECTOR, ", ul.submenu > li > ").concat(MENU_ITEM_SELECTOR);

function stopPropagationAndPreventDefault(event) {
  event.stopPropagation();
  event.preventDefault();
}

class Menu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(_props) {
    var _this;

    super(_props);
    _this = this;

    _defineProperty(this, "setInitialFocusIndex", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;
      var {
        initialFocusIndex,
        isHidden
      } = props;

      if (isHidden || initialFocusIndex === undefined) {
        return;
      } // If an initialFocusIndex was specified, attempt to use it to focus


      if (typeof initialFocusIndex === 'number') {
        // We do this after a timeout so that the menu is properly mounted before we attempt to focus it
        setTimeout(() => {
          _this.setFocus(initialFocusIndex);
        }, 0);
      } else if (initialFocusIndex === null) {
        // If no initial focus index is set, focus on the menu itself so that keyboard shortcut still works after a mouse click.
        setTimeout(() => {
          if (_this.menuEl) {
            _this.menuEl.focus();
          }
        }, 0);
      }
    });

    _defineProperty(this, "setMenuItemEls", () => {
      var {
        isSubmenu
      } = this.props;
      var selector = isSubmenu ? SUBMENU_ITEM_SELECTOR : TOP_LEVEL_MENU_ITEM_SELECTOR; // Keep track of all the valid menu items that were rendered (querySelector since we don't want to pass ref functions to every single child)

      this.menuItemEls = this.menuEl ? [].slice.call(this.menuEl.querySelectorAll(selector)) : [];
    });

    _defineProperty(this, "getMenuItemElFromEventTarget", target => {
      var menuItemEl = null;
      var menuIndex = -1;

      for (var i = 0; i < this.menuItemEls.length; i += 1) {
        if (this.menuItemEls[i].contains(target)) {
          menuItemEl = this.menuItemEls[i];
          menuIndex = i;
          break;
        }
      }

      return {
        menuItemEl,
        menuIndex
      };
    });

    _defineProperty(this, "setFocus", index => {
      if (!this.menuItemEls.length) {
        return;
      }

      var numMenuItems = this.menuItemEls.length;

      if (index >= numMenuItems) {
        this.focusIndex = 0;
      } else if (index < 0) {
        this.focusIndex = numMenuItems - 1;
      } else {
        this.focusIndex = index;
      }

      this.menuItemEls[this.focusIndex].focus();
    });

    _defineProperty(this, "focusFirstItem", () => {
      this.setFocus(0);
    });

    _defineProperty(this, "focusLastItem", () => {
      this.setFocus(-1);
    });

    _defineProperty(this, "focusNextItem", () => {
      this.setFocus(this.focusIndex + 1);
    });

    _defineProperty(this, "focusPreviousItem", () => {
      this.setFocus(this.focusIndex - 1);
    });

    _defineProperty(this, "fireOnCloseHandler", (isKeyboardEvent, event) => {
      var {
        onClose
      } = this.props;

      if (onClose) {
        // We need to pass the event type so we know which item to focus.
        onClose(isKeyboardEvent, event);
      }
    });

    _defineProperty(this, "handleClick", event => {
      var {
        menuItemEl
      } = event.target instanceof Node ? this.getMenuItemElFromEventTarget(event.target) : {};

      if (!menuItemEl) {
        return;
      }

      this.fireOnCloseHandler(false, event);
    });

    _defineProperty(this, "handleKeyDown", event => {
      var {
        isSubmenu,
        initialFocusIndex
      } = this.props;

      switch (event.key) {
        case 'ArrowDown':
          stopPropagationAndPreventDefault(event); // If it's first keyboard event, focus on first item.

          if (initialFocusIndex === null && !this.keyboardPressed) {
            this.focusFirstItem();
          } else {
            this.focusNextItem();
          }

          break;

        case 'ArrowUp':
          stopPropagationAndPreventDefault(event);
          this.focusPreviousItem();
          break;

        case 'ArrowLeft':
          // Close submenu when arrow-left is clicked
          if (!isSubmenu) {
            return;
          }

          stopPropagationAndPreventDefault(event);
          this.fireOnCloseHandler(true, event);
          break;

        case 'Home':
        case 'PageUp':
          stopPropagationAndPreventDefault(event);
          this.focusFirstItem();
          break;

        case 'End':
        case 'PageDown':
          stopPropagationAndPreventDefault(event);
          this.focusLastItem();
          break;

        case 'Escape':
          stopPropagationAndPreventDefault(event);
          this.fireOnCloseHandler(true, event);
          break;

        case 'Tab':
          // DO NOT PREVENT DEFAULT OR STOP PROPAGATION - This should move focus natively
          this.fireOnCloseHandler(true, event);
          break;

        case ' ': // Spacebar

        case 'Enter':
          stopPropagationAndPreventDefault(event);

          if (event.target instanceof HTMLElement) {
            event.target.click();
          }

          break;

        default:
          break;
      }

      this.keyboardPressed = true;
    });

    this.focusIndex = 0;
    this.menuEl = null;
    this.menuItemEls = [];
  }

  componentDidMount() {
    this.setMenuItemEls();
    this.setInitialFocusIndex();
  }

  componentDidUpdate(_ref) {
    var {
      isHidden: prevIsHidden,
      children: prevChildren
    } = _ref;
    var {
      children,
      isHidden,
      isSubmenu
    } = this.props;

    if (isSubmenu && prevIsHidden && !isHidden) {
      // If updating submenu, use the current props instead of previous props.
      this.setMenuItemEls();
      this.setInitialFocusIndex(this.props);
    } // update focus index and menu item elements when the number of children changes


    if (react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(prevChildren).length !== react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children).length) {
      var focusedMenuItemEl = this.menuItemEls[this.focusIndex];
      this.setMenuItemEls();
      var {
        menuIndex
      } = this.getMenuItemElFromEventTarget(focusedMenuItemEl);
      this.setFocus(menuIndex);
    }
  }

  render() {
    var _this$props = this.props,
        {
      children,
      className,
      isHidden,
      setRef,
      shouldOutlineFocus
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["children", "className", "isHidden", "setRef", "shouldOutlineFocus"]);

    var menuProps = lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(rest, ['onClose', 'initialFocusIndex', 'isSubmenu']);
    menuProps.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('aria-menu', className, {
      'is-hidden': isHidden,
      'should-outline-focus': shouldOutlineFocus
    });

    menuProps.ref = ref => {
      this.menuEl = ref;

      if (setRef) {
        setRef(ref);
      }
    };

    menuProps.role = 'menu';
    menuProps.tabIndex = -1;
    menuProps.onClick = this.handleClick;
    menuProps.onKeyDown = this.handleKeyDown;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", menuProps, children);
  }

}

_defineProperty(Menu, "defaultProps", {
  className: '',
  isSubmenu: false,
  isHidden: false
});

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/components/menu/Menu.scss":
/*!***************************************!*\
  !*** ./src/components/menu/Menu.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/menu/MenuItem.js":
/*!*****************************************!*\
  !*** ./src/components/menu/MenuItem.js ***!
  \*****************************************/
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
/* harmony import */ var _radar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../radar */ "./src/components/radar/index.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MenuItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onClickHandler", event => {
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
  }

  render() {
    var _this$props = this.props,
        {
      children,
      className,
      isDisabled,
      isSelectItem,
      isSelected,
      showRadar
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["children", "className", "isDisabled", "isSelectItem", "isSelected", "showRadar"]);

    var menuItemProps = lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(rest, ['role', 'tabIndex', 'onClick']);
    menuItemProps.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('menu-item', className, {
      'is-select-item': isSelectItem,
      'is-selected': isSelected
    });
    menuItemProps.role = isSelectItem ? 'menuitemradio' : 'menuitem';
    menuItemProps.tabIndex = -1;
    menuItemProps.onClick = this.onClickHandler;

    if (isSelectItem) {
      menuItemProps['aria-checked'] = isSelected;
    }

    if (isDisabled) {
      menuItemProps['aria-disabled'] = 'true';
    }

    var menuItem = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", menuItemProps, children);

    if (showRadar) {
      menuItem = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_radar__WEBPACK_IMPORTED_MODULE_3__["default"], null, menuItem);
    }

    return menuItem;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

/***/ })

}]);
//# sourceMappingURL=activity-sidebar~content-open-with~versions-sidebar.no.react.js.map
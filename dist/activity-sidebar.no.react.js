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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-sidebar"],{

/***/ "./src/components/avatar/Avatar.js":
/*!*****************************************!*\
  !*** ./src/components/avatar/Avatar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AvatarImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AvatarImage */ "./src/components/avatar/AvatarImage.js");
/* harmony import */ var _AvatarInitials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AvatarInitials */ "./src/components/avatar/AvatarInitials.js");
/* harmony import */ var _icons_avatars_UnknownUserAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/avatars/UnknownUserAvatar */ "./src/icons/avatars/UnknownUserAvatar.js");
/* harmony import */ var _Avatar_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Avatar.scss */ "./src/components/avatar/Avatar.scss");
/* harmony import */ var _Avatar_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Avatar_scss__WEBPACK_IMPORTED_MODULE_5__);






var SIZES = {
  large: true
};

function Avatar(_ref) {
  var {
    avatarUrl,
    className,
    name,
    id,
    size = ''
  } = _ref;
  var [hasImageErrored, setHasImageErrored] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  var [prevAvatarUrl, setPrevAvatarUrl] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(['avatar', className, {
    ["avatar--".concat(size)]: SIZES[size]
  }]); // Reset hasImageErrored state when avatarUrl changes

  if (avatarUrl !== prevAvatarUrl) {
    setHasImageErrored(false);
    setPrevAvatarUrl(avatarUrl);
  }

  var avatar;

  if (avatarUrl && !hasImageErrored) {
    avatar = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AvatarImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onError: () => {
        setHasImageErrored(true);
      },
      url: avatarUrl
    });
  } else if (name) {
    avatar = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AvatarInitials__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: id,
      name: name
    });
  } else {
    avatar = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_avatars_UnknownUserAvatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "avatar-icon"
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: classes,
    role: "presentation"
  }, avatar);
}

/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./src/components/avatar/Avatar.scss":
/*!*******************************************!*\
  !*** ./src/components/avatar/Avatar.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/avatar/AvatarImage.js":
/*!**********************************************!*\
  !*** ./src/components/avatar/AvatarImage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var AvatarImage = (_ref) => {
  var {
    className = '',
    url,
    onError: _onError
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "",
    className: "avatar-image ".concat(className),
    onError: event => {
      if (typeof _onError === 'function') {
        _onError(event);
      }
    },
    src: url
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AvatarImage);

/***/ }),

/***/ "./src/components/avatar/AvatarInitials.js":
/*!*************************************************!*\
  !*** ./src/components/avatar/AvatarInitials.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");



var getInitials = name => {
  var firstInitial = name.slice(0, 1);
  var lastInitial = name.slice(name.lastIndexOf(' ') + 1, name.lastIndexOf(' ') + 2);
  return (firstInitial + lastInitial).toUpperCase();
};

var AvatarInitials = (_ref) => {
  var {
    className = '',
    id,
    name
  } = _ref;
  var avatarColorSelector = parseInt(id, 10) || 0;
  var backgroundColorIndex = avatarColorSelector % _styles_variables__WEBPACK_IMPORTED_MODULE_1__["avatarColors"].length;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "avatar-initials ".concat(className),
    "data-bg-idx": backgroundColorIndex
  }, getInitials(name));
};

/* harmony default export */ __webpack_exports__["default"] = (AvatarInitials);

/***/ }),

/***/ "./src/components/avatar/index.js":
/*!****************************************!*\
  !*** ./src/components/avatar/index.js ***!
  \****************************************/
/*! exports provided: AvatarImage, AvatarInitials, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AvatarImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AvatarImage */ "./src/components/avatar/AvatarImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AvatarImage", function() { return _AvatarImage__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AvatarInitials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvatarInitials */ "./src/components/avatar/AvatarInitials.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AvatarInitials", function() { return _AvatarInitials__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar */ "./src/components/avatar/Avatar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Avatar__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/components/checkbox/Checkbox.js":
/*!*********************************************!*\
  !*** ./src/components/checkbox/Checkbox.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CheckboxTooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxTooltip */ "./src/components/checkbox/CheckboxTooltip.js");
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkbox.scss */ "./src/components/checkbox/Checkbox.scss");
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_scss__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Checkbox = (_ref) => {
  var {
    className = '',
    description,
    fieldLabel,
    hideLabel,
    id,
    isChecked,
    isDisabled,
    label,
    name,
    onChange,
    subsection,
    tooltip // @TODO: eventually remove `rest` in favor of explicit props

  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "description", "fieldLabel", "hideLabel", "id", "isChecked", "isDisabled", "label", "name", "onChange", "subsection", "tooltip"]);

  var checkboxLabel = // eslint-disable-next-line jsx-a11y/label-has-for
  react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    className: "checkbox-label"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", _extends({
    checked: isChecked,
    disabled: isDisabled,
    id: id,
    name: name,
    onChange: onChange,
    type: "checkbox"
  }, rest)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "checkbox-pointer-target"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: hideLabel ? 'accessibility-hidden' : ''
  }, label));
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "checkbox-container ".concat(className, " ").concat(isDisabled ? 'is-disabled' : '')
  }, fieldLabel && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "label"
  }, fieldLabel), tooltip ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CheckboxTooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: checkboxLabel,
    tooltip: tooltip
  }) : checkboxLabel, description ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "checkbox-description"
  }, description) : null, subsection ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "checkbox-subsection"
  }, subsection) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./src/components/checkbox/Checkbox.scss":
/*!***********************************************!*\
  !*** ./src/components/checkbox/Checkbox.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/checkbox/CheckboxField.js":
/*!**************************************************!*\
  !*** ./src/components/checkbox/CheckboxField.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox */ "./src/components/checkbox/Checkbox.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var CheckboxField = (_ref) => {
  var {
    field,
    form
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["field", "form"]);

  var {
    value
  } = field;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, field, rest, {
    isChecked: !!value
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckboxField);

/***/ }),

/***/ "./src/components/checkbox/CheckboxTooltip.js":
/*!****************************************************!*\
  !*** ./src/components/checkbox/CheckboxTooltip.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/general/IconInfo */ "./src/icons/general/IconInfo.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.js");




var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  checkboxTooltipIconInfoText: {
    "id": "boxui.checkboxTooltip.iconInfoText",
    "defaultMessage": "Info"
  }
});

var CheckboxTooltip = (_ref) => {
  var {
    label,
    tooltip
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "checkbox-tooltip-wrapper"
  }, label, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: tooltip
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "info-tooltip"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: 16,
    title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], messages.checkboxTooltipIconInfoText),
    width: 16
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CheckboxTooltip);

/***/ }),

/***/ "./src/components/checkbox/index.js":
/*!******************************************!*\
  !*** ./src/components/checkbox/index.js ***!
  \******************************************/
/*! exports provided: default, CheckboxField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ "./src/components/checkbox/Checkbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CheckboxField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxField */ "./src/components/checkbox/CheckboxField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxField", function() { return _CheckboxField__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/components/contact-datalist-item/ContactDatalistItem.js":
/*!*********************************************************************!*\
  !*** ./src/components/contact-datalist-item/ContactDatalistItem.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datalist_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datalist-item */ "./src/components/datalist-item/index.js");
/* harmony import */ var _ContactDatalistItem_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactDatalistItem.scss */ "./src/components/contact-datalist-item/ContactDatalistItem.scss");
/* harmony import */ var _ContactDatalistItem_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ContactDatalistItem_scss__WEBPACK_IMPORTED_MODULE_2__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ContactDatalistItem = (_ref) => {
  var {
    name,
    subtitle
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["name", "subtitle"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_datalist_item__WEBPACK_IMPORTED_MODULE_1__["default"], rest, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "contact-text contact-name"
  }, name), subtitle && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "contact-text contact-sub-name"
  }, subtitle));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactDatalistItem);

/***/ }),

/***/ "./src/components/contact-datalist-item/ContactDatalistItem.scss":
/*!***********************************************************************!*\
  !*** ./src/components/contact-datalist-item/ContactDatalistItem.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/draft-js-editor/DraftJSEditor.js":
/*!*********************************************************!*\
  !*** ./src/components/draft-js-editor/DraftJSEditor.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draft_js_dist_Draft_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draft-js/dist/Draft.css */ "./node_modules/draft-js/dist/Draft.css");
/* harmony import */ var draft_js_dist_Draft_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draft_js_dist_Draft_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../label */ "./src/components/label/index.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.js");
/* harmony import */ var _DraftJSEditor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DraftJSEditor.scss */ "./src/components/draft-js-editor/DraftJSEditor.scss");
/* harmony import */ var _DraftJSEditor_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_DraftJSEditor_scss__WEBPACK_IMPORTED_MODULE_6__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class DraftJSEditor extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "handleChange", editorState => {
      var {
        onChange
      } = this.props;
      onChange(editorState);
    });

    _defineProperty(this, "handleBlur", editorState => {
      var {
        onBlur
      } = this.props;
      onBlur(editorState);
    });

    _defineProperty(this, "handleReturn", event => {
      var {
        onReturn,
        inputProps
      } = this.props;

      if (onReturn && !inputProps['aria-activedescendant']) {
        // Return 'handled' tells DraftJS Editor to not handle return key event,
        // return 'not-handled' tells DraftJS Editor to continue handle the return key event.
        // We encapsulate this DraftJS Editor specific contract here, and use true/fase
        // to indicate whether to let DraftJS Editor handle return event or not in the upper level.
        return onReturn(event) ? 'handled' : 'not-handled';
      }

      return 'not-handled';
    });
  }

  render() {
    var {
      editorState,
      error,
      hideLabel,
      inputProps,
      isDisabled,
      isRequired,
      label,
      onFocus,
      placeholder
    } = this.props;
    var {
      handleBlur,
      handleChange
    } = this;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'draft-js-editor': true,
      'is-disabled': isDisabled,
      'show-error': !!error
    });
    var a11yProps = {};

    if (inputProps.role) {
      a11yProps = {
        ariaActiveDescendantID: inputProps['aria-activedescendant'],
        ariaAutoComplete: inputProps['aria-autocomplete'],
        ariaExpanded: inputProps['aria-expanded'],
        ariaOwneeID: inputProps['aria-owns'],
        role: inputProps.role
      };
    }

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classes
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_label__WEBPACK_IMPORTED_MODULE_4__["default"], {
      hideLabel: hideLabel,
      showOptionalText: !isRequired,
      text: label
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isShown: !!error,
      position: "bottom-left",
      text: error ? error.message : '',
      theme: "error"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](draft_js__WEBPACK_IMPORTED_MODULE_2__["Editor"], _extends({}, a11yProps, {
      editorState: editorState,
      handleReturn: this.handleReturn,
      onBlur: handleBlur,
      onChange: handleChange,
      onFocus: onFocus,
      placeholder: placeholder,
      readOnly: isDisabled,
      stripPastedStyles: true
    }))))));
  }

}

_defineProperty(DraftJSEditor, "defaultProps", {
  inputProps: {},
  isRequired: false,
  isFocused: false
});

/* harmony default export */ __webpack_exports__["default"] = (DraftJSEditor);

/***/ }),

/***/ "./src/components/draft-js-editor/DraftJSEditor.scss":
/*!***********************************************************!*\
  !*** ./src/components/draft-js-editor/DraftJSEditor.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/draft-js-editor/index.js":
/*!*************************************************!*\
  !*** ./src/components/draft-js-editor/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DraftJSEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DraftJSEditor */ "./src/components/draft-js-editor/DraftJSEditor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DraftJSEditor__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/DraftJSMentionSelector.js":
/*!******************************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/DraftJSMentionSelector.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DraftJSMentionSelectorCore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DraftJSMentionSelectorCore */ "./src/components/form-elements/draft-js-mention-selector/DraftJSMentionSelectorCore.js");
/* harmony import */ var _DraftMentionItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DraftMentionItem */ "./src/components/form-elements/draft-js-mention-selector/DraftMentionItem.js");
/* harmony import */ var _form_FormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/FormInput */ "./src/components/form-elements/form/FormInput.js");
/* harmony import */ var _input_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input-messages */ "./src/components/form-elements/input-messages.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/**
 * Scans a Draft ContentBlock for entity ranges, so they can be annotated
 * @see docs at {@link https://draftjs.org/docs/advanced-topics-decorators.html#compositedecorator}
 * @param {ContentBlock} contentBlock
 * @param {function} callback
 * @param {ContentState} contentState
 */

var mentionStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(character => {
    var entityKey = character.getEntity();
    var ret = entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
    return ret;
  }, callback);
};

class DraftJSMentionSelector extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleBlur", event => {
      if (this.props.validateOnBlur && this.containerEl && event.relatedTarget instanceof Node && !this.containerEl.contains(event.relatedTarget)) {
        this.checkValidity();
      }
    });

    _defineProperty(this, "handleFocus", event => {
      var {
        onFocus
      } = this.props;

      if (onFocus) {
        onFocus(event);
      }
    });

    _defineProperty(this, "handleChange", nextEditorState => {
      var {
        internalEditorState
      } = this.state;
      var {
        onChange
      } = this.props;
      onChange(nextEditorState);

      if (internalEditorState) {
        this.setState({
          internalEditorState: nextEditorState
        });
      }
    });

    _defineProperty(this, "handleValidityStateUpdateHandler", () => {
      var {
        isTouched
      } = this.state;

      if (!isTouched) {
        return;
      }

      var error = this.getErrorFromValidityState();
      this.setState({
        error
      });
    });

    _defineProperty(this, "checkValidity", () => {
      this.handleValidityStateUpdateHandler();
    });

    var mentionDecorator = new draft_js__WEBPACK_IMPORTED_MODULE_1__["CompositeDecorator"]([{
      strategy: mentionStrategy,
      component: _DraftMentionItem__WEBPACK_IMPORTED_MODULE_4__["default"]
    }]); // @NOTE (smotraghi 2017-05-30):
    // This component might be either own its EditorState (in which case it lives in `this.state.internalEditorState`)
    // or be a controlled component whose EditorState is passed in via the `editorState` prop.
    // If `props.editorState` is set, `internalEditorState` is `null`,
    // otherwise we initialize it here

    this.state = {
      contacts: [],
      isTouched: false,
      internalEditorState: props.editorState ? null : draft_js__WEBPACK_IMPORTED_MODULE_1__["EditorState"].createEmpty(mentionDecorator),
      error: null
    };
  }

  static getDerivedStateFromProps(nextProps) {
    var {
      contacts
    } = nextProps;
    return contacts ? {
      contacts
    } : null;
  }

  componentDidUpdate(prevProps, prevState) {
    var {
      internalEditorState: prevInternalEditorState
    } = prevState;
    var {
      internalEditorState
    } = this.state;
    var {
      editorState: prevEditorStateFromProps
    } = prevProps;
    var {
      editorState
    } = this.props; // Determine whether we're working with the internal editor state or
    // external editor state passed in from props

    var prevEditorState = prevInternalEditorState || prevEditorStateFromProps;
    var currentEditorState = internalEditorState || editorState; // Only handle isTouched state transitions and check validity if the
    // editorState references are different. This is to avoid getting stuck
    // in an infinite loop of checking validity because checkValidity always
    // calls setState({ error })

    if (prevEditorState && currentEditorState && prevEditorState !== currentEditorState) {
      var newState = this.getDerivedStateFromEditorState(currentEditorState, prevEditorState);

      if (newState) {
        this.setState(newState, this.checkValidityIfAllowed);
      } else {
        this.checkValidityIfAllowed();
      }
    }
  }

  getDerivedStateFromEditorState(currentEditorState, previousEditorState) {
    var isPreviousEditorStateEmpty = this.isEditorStateEmpty(previousEditorState);
    var isCurrentEditorStateEmpty = this.isEditorStateEmpty(currentEditorState);
    var isNewEditorState = isCurrentEditorStateEmpty && !isPreviousEditorStateEmpty;
    var isEditorStateDirty = isPreviousEditorStateEmpty && !isCurrentEditorStateEmpty;
    var newState = null; // Detect case where controlled EditorState is created anew and empty.
    // If next editorState is empty and the current editorState is not empty
    // that means it is a new empty state and this component should not be marked dirty

    if (isNewEditorState) {
      newState = {
        isTouched: false,
        error: null
      };
    } else if (isEditorStateDirty) {
      // Detect case where controlled EditorState has been made dirty
      // If the current editorState is empty and the next editorState is not
      // empty then this is the first interaction so mark this component dirty
      newState = {
        isTouched: true
      };
    }

    return newState;
  }

  checkValidityIfAllowed() {
    var {
      validateOnBlur
    } = this.props;

    if (!validateOnBlur) {
      this.checkValidity();
    }
  }

  isEditorStateEmpty(editorState) {
    var text = editorState.getCurrentContent().getPlainText().trim();
    var lastChangeType = editorState.getLastChangeType();
    return text.length === 0 && lastChangeType === null;
  }
  /**
   * @returns {string}
   */


  getErrorFromValidityState() {
    var {
      editorState: externalEditorState,
      isRequired,
      maxLength,
      minLength
    } = this.props;
    var {
      internalEditorState
    } = this.state; // manually check for content length if isRequired is true

    var editorState = internalEditorState || externalEditorState;
    var {
      length
    } = editorState.getCurrentContent().getPlainText().trim();

    if (isRequired && !length) {
      return _input_messages__WEBPACK_IMPORTED_MODULE_6__["valueMissing"]();
    }

    if (typeof minLength !== 'undefined' && length < minLength) {
      return _input_messages__WEBPACK_IMPORTED_MODULE_6__["tooShort"](minLength);
    }

    if (typeof maxLength !== 'undefined' && length > maxLength) {
      return _input_messages__WEBPACK_IMPORTED_MODULE_6__["tooLong"](maxLength);
    }

    return null;
  }

  render() {
    var {
      className = '',
      editorState: externalEditorState,
      hideLabel,
      isDisabled,
      isRequired,
      label,
      mentionTriggers,
      name,
      onMention,
      placeholder,
      selectorRow,
      startMentionMessage,
      onReturn
    } = this.props;
    var {
      contacts,
      internalEditorState,
      error
    } = this.state;
    var {
      handleBlur,
      handleChange,
      handleFocus
    } = this;
    var editorState = internalEditorState || externalEditorState;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      ref: containerEl => {
        this.containerEl = containerEl;
      },
      className: className
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_FormInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: name,
      onValidityStateUpdate: this.handleValidityStateUpdateHandler
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DraftJSMentionSelectorCore__WEBPACK_IMPORTED_MODULE_3__["default"], {
      contacts: contacts,
      editorState: editorState,
      error: error,
      hideLabel: hideLabel,
      isDisabled: isDisabled,
      isRequired: isRequired,
      label: label,
      mentionTriggers: mentionTriggers,
      onBlur: handleBlur,
      onChange: handleChange,
      onFocus: handleFocus,
      onMention: onMention,
      onReturn: onReturn,
      placeholder: placeholder,
      selectorRow: selectorRow,
      startMentionMessage: startMentionMessage
    })));
  }

}

_defineProperty(DraftJSMentionSelector, "defaultProps", {
  isRequired: false,
  onChange: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
  validateOnBlur: true
});

/* harmony default export */ __webpack_exports__["default"] = (DraftJSMentionSelector);

/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/DraftJSMentionSelectorCore.js":
/*!**********************************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/DraftJSMentionSelectorCore.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datalist_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../datalist-item */ "./src/components/datalist-item/index.js");
/* harmony import */ var _draft_js_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../draft-js-editor */ "./src/components/draft-js-editor/index.js");
/* harmony import */ var _selector_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../selector-dropdown */ "./src/components/selector-dropdown/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/components/form-elements/draft-js-mention-selector/messages.js");
/* harmony import */ var _MentionSelector_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MentionSelector.scss */ "./src/components/form-elements/draft-js-mention-selector/MentionSelector.scss");
/* harmony import */ var _MentionSelector_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_MentionSelector_scss__WEBPACK_IMPORTED_MODULE_8__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











var DefaultSelectorRow = (_ref) => {
  var {
    item = {}
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["item"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_datalist_item__WEBPACK_IMPORTED_MODULE_4__["default"], rest, item.name, " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "dropdown-secondary-text"
  }, item.email));
};

var DefaultStartMentionMessage = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_7__["default"].startMention);

var MentionStartState = (_ref2) => {
  var {
    message
  } = _ref2;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "mention-start-state"
  }, message);
};

class DraftJSMentionSelector extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleMention", () => {
      var {
        onMention
      } = this.props;
      var {
        activeMention
      } = this.state;

      if (onMention) {
        onMention(activeMention ? activeMention.mentionString : '');
      }
    });

    _defineProperty(this, "handleContactSelected", index => {
      var {
        contacts
      } = this.props;
      this.addMention(contacts[index]);
      this.setState({
        activeMention: null,
        isFocused: true
      }, () => {
        this.handleMention();
      });
    });

    _defineProperty(this, "handleBlur", event => {
      var {
        onBlur
      } = this.props;
      this.setState({
        isFocused: false
      });

      if (onBlur) {
        onBlur(event);
      }
    });

    _defineProperty(this, "handleFocus", event => {
      var {
        onFocus
      } = this.props;
      this.setState({
        isFocused: true
      });

      if (onFocus) {
        onFocus(event);
      }
    });

    _defineProperty(this, "handleChange", nextEditorState => {
      var {
        onChange
      } = this.props;
      var activeMention = this.getActiveMentionForEditorState(nextEditorState);
      this.setState({
        activeMention
      }, () => {
        if (onChange) {
          onChange(nextEditorState);
        }

        if (activeMention && activeMention.mentionString) {
          this.handleMention();
        }
      });
    });

    _defineProperty(this, "shouldDisplayMentionLookup", () => {
      var {
        contacts
      } = this.props;
      var {
        activeMention
      } = this.state;
      return !!(activeMention && activeMention.mentionString && contacts.length);
    });

    var mentionTriggers = props.mentionTriggers.reduce((prev, current) => "".concat(prev, "\\").concat(current), '');
    this.state = {
      activeMention: null,
      isFocused: false,
      mentionPattern: new RegExp("([".concat(mentionTriggers, "])([^").concat(mentionTriggers, "]*)$"))
    };
  }
  /**
   * Lifecycle method that gets called immediately after an update
   * @param {object} lastProps Props the component is receiving
   * @returns {void}
   */


  componentDidUpdate(prevProps) {
    var {
      contacts: prevContacts
    } = prevProps;
    var {
      contacts: currentContacts
    } = this.props;
    var {
      activeMention
    } = this.state;

    if (activeMention !== null && !currentContacts.length && prevContacts !== currentContacts) {
      // if empty set of contacts get passed in, set active mention to null
      this.setState({
        activeMention: null
      });
    }
  }
  /**
   * Extracts the active mention from the editor state
   *
   * @param {EditorState} editorState
   * @returns {object}
   */


  getActiveMentionForEditorState(editorState) {
    var {
      mentionPattern
    } = this.state;
    var contentState = editorState.getCurrentContent();
    var selectionState = editorState.getSelection();
    var startKey = selectionState.getStartKey();
    var activeBlock = contentState.getBlockForKey(startKey);
    var cursorPosition = selectionState.getStartOffset();
    var result = null; // Break the active block into entity ranges.

    activeBlock.findEntityRanges(character => character.getEntity() === null, (start, end) => {
      // Find the active range (is the cursor inside this range?)
      if (start <= cursorPosition && cursorPosition <= end) {
        // Determine if the active range contains a mention.
        var activeRangeText = activeBlock.getText().substr(start, cursorPosition - start);
        var mentionMatch = activeRangeText.match(mentionPattern);

        if (mentionMatch) {
          result = {
            blockID: startKey,
            mentionString: mentionMatch[2],
            mentionTrigger: mentionMatch[1],
            start: start + mentionMatch.index,
            end: cursorPosition
          };
        }
      }

      return null;
    });
    return result;
  }
  /**
   * Called on each keypress when a mention is being composed
   * @returns {void}
   */


  /**
   * Inserts a selected mention into the editor
   * @param {object} mention The selected mention to insert
   */
  addMention(mention) {
    var {
      activeMention
    } = this.state;
    var {
      editorState
    } = this.props;
    var {
      start,
      end
    } = activeMention || {};
    var {
      id,
      name
    } = mention;
    var contentState = editorState.getCurrentContent();
    var selectionState = editorState.getSelection();
    var preInsertionSelectionState = selectionState.merge({
      anchorOffset: start,
      focusOffset: end
    });
    var textToInsert = "@".concat(name);
    var contentStateWithEntity = contentState.createEntity('MENTION', 'IMMUTABLE', {
      id
    });
    var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    var contentStateWithLink = draft_js__WEBPACK_IMPORTED_MODULE_3__["Modifier"].replaceText(contentState, preInsertionSelectionState, textToInsert, null, entityKey);
    var spaceOffset = preInsertionSelectionState.getStartOffset() + textToInsert.length;
    var selectionStateForAddingSpace = preInsertionSelectionState.merge({
      anchorOffset: spaceOffset,
      focusOffset: spaceOffset
    });
    var contentStateWithLinkAndExtraSpace = draft_js__WEBPACK_IMPORTED_MODULE_3__["Modifier"].insertText(contentStateWithLink, selectionStateForAddingSpace, ' ');
    var editorStateWithLink = draft_js__WEBPACK_IMPORTED_MODULE_3__["EditorState"].push(editorState, contentStateWithLinkAndExtraSpace, 'change-block-type');
    this.setState({
      activeMention: null
    }, () => {
      this.handleChange(editorStateWithLink);
    });
  }
  /**
   * @returns {boolean}
   */


  render() {
    var {
      className,
      contacts,
      editorState,
      error,
      hideLabel,
      isDisabled,
      isRequired,
      label,
      onReturn,
      placeholder,
      selectorRow,
      startMentionMessage,
      onMention
    } = this.props;
    var {
      activeMention,
      isFocused
    } = this.state;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('mention-selector-wrapper', className);
    var showMentionStartState = !!(onMention && activeMention && !activeMention.mentionString && isFocused);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classes
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_selector_dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onSelect: this.handleContactSelected,
      selector: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_draft_js_editor__WEBPACK_IMPORTED_MODULE_5__["default"], {
        editorState: editorState,
        error: error,
        hideLabel: hideLabel,
        isDisabled: isDisabled,
        isFocused: isFocused,
        isRequired: isRequired,
        label: label,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onChange: this.handleChange,
        onReturn: onReturn,
        placeholder: placeholder
      })
    }, this.shouldDisplayMentionLookup() ? contacts.map(contact => react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](selectorRow, _objectSpread({}, selectorRow.props, {}, contact, {
      key: contact.id
    }))) : []), showMentionStartState ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MentionStartState, {
      message: startMentionMessage
    }) : null);
  }

}

_defineProperty(DraftJSMentionSelector, "defaultProps", {
  className: '',
  contacts: [],
  isDisabled: false,
  isRequired: false,
  mentionTriggers: ['@', '＠', '﹫'],
  selectorRow: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DefaultSelectorRow, null),
  startMentionMessage: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DefaultStartMentionMessage, null)
});

/* harmony default export */ __webpack_exports__["default"] = (DraftJSMentionSelector);

/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/DraftMentionDecorator.js":
/*!*****************************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/DraftMentionDecorator.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DraftMentionItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DraftMentionItem */ "./src/components/form-elements/draft-js-mention-selector/DraftMentionItem.js");



var mentionStrategy = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(character => {
    var entityKey = character.getEntity();
    var ret = entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
    return ret;
  }, callback);
};

var DraftMentionDecorator = new draft_js__WEBPACK_IMPORTED_MODULE_0__["CompositeDecorator"]([{
  strategy: mentionStrategy,
  component: _DraftMentionItem__WEBPACK_IMPORTED_MODULE_1__["default"]
}]);
/* harmony default export */ __webpack_exports__["default"] = (DraftMentionDecorator);

/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/DraftMentionItem.js":
/*!************************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/DraftMentionItem.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_1__);



var DraftMentionItem = (_ref) => {
  var {
    contentState,
    entityKey,
    children
  } = _ref;
  var id = '';

  if (entityKey) {
    id = contentState.getEntity(entityKey).getData().id;
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "/profile/".concat(id)
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (DraftMentionItem);

/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/MentionSelector.scss":
/*!*************************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/MentionSelector.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/createMentionSelectorState.js":
/*!**********************************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/createMentionSelectorState.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DraftMentionDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DraftMentionDecorator */ "./src/components/form-elements/draft-js-mention-selector/DraftMentionDecorator.js");

 // returns data for first mention in a string

var getMentionFromText = text => {
  // RegEx.exec() is stateful, so we create a new regex instance each time
  var mentionRegex = /([@＠﹫])\[([0-9]+):([^\]]+)]/gi;
  var matchArray = mentionRegex.exec(text);

  if (!matchArray) {
    return null;
  }

  var [fullMatch, triggerSymbol, id, name] = matchArray;
  var start = matchArray.index;
  var end = start + fullMatch.length;
  var data = {
    id,
    name,
    content: "".concat(triggerSymbol).concat(name)
  };
  return {
    start,
    end,
    data
  };
}; // creates draftjs state with mentions parsed into entities


var createMentionSelectorState = function createMentionSelectorState() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var contentState = draft_js__WEBPACK_IMPORTED_MODULE_0__["ContentState"].createFromText(message);
  var contentBlock = contentState.getFirstBlock();

  while (contentBlock != null) {
    var text = contentBlock.getText();
    var mention = text ? getMentionFromText(text) : null;

    if (mention == null) {
      contentBlock = contentState.getBlockAfter(contentBlock.getKey());
    } else {
      var {
        data,
        start,
        end
      } = mention;
      contentState.createEntity('MENTION', 'IMMUTABLE', data);
      var mentionEntityKey = contentState.getLastCreatedEntityKey();
      var mentionRange = draft_js__WEBPACK_IMPORTED_MODULE_0__["SelectionState"].createEmpty(contentBlock.getKey()).merge({
        anchorOffset: start,
        focusOffset: end
      });
      contentState = draft_js__WEBPACK_IMPORTED_MODULE_0__["Modifier"].replaceText(contentState, mentionRange, data.content, null, mentionEntityKey);
      contentBlock = contentState.getBlockForKey(contentBlock.getKey());
    }
  }

  return draft_js__WEBPACK_IMPORTED_MODULE_0__["EditorState"].createWithContent(contentState, _DraftMentionDecorator__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (createMentionSelectorState);

/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/index.js":
/*!*************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/index.js ***!
  \*************************************************************************/
/*! exports provided: default, createMentionSelectorState, DraftMentionDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DraftJSMentionSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DraftJSMentionSelector */ "./src/components/form-elements/draft-js-mention-selector/DraftJSMentionSelector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DraftJSMentionSelector__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createMentionSelectorState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMentionSelectorState */ "./src/components/form-elements/draft-js-mention-selector/createMentionSelectorState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMentionSelectorState", function() { return _createMentionSelectorState__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _DraftMentionDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DraftMentionDecorator */ "./src/components/form-elements/draft-js-mention-selector/DraftMentionDecorator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraftMentionDecorator", function() { return _DraftMentionDecorator__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/components/form-elements/draft-js-mention-selector/messages.js":
/*!****************************************************************************!*\
  !*** ./src/components/form-elements/draft-js-mention-selector/messages.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  startMention: {
    "id": "boxui.draftjs.mentionSelector.startMention",
    "defaultMessage": "Mention someone to notify them"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/components/form-elements/form/FormInput.js":
/*!********************************************************!*\
  !*** ./src/components/form-elements/form/FormInput.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class FormInput extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    var {
      name,
      onValidityStateUpdate
    } = this.props;

    if (this.context.form) {
      this.context.form.registerInput(name, onValidityStateUpdate);
    }
  }

  componentWillUnmount() {
    if (this.context.form) {
      this.context.form.unregisterInput(this.props.name);
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.props.children);
  }

}

_defineProperty(FormInput, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired,

  /** callback called when Form pushed down a new validityState, useful for displaying server validation errors */
  onValidityStateUpdate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,

  /** Input name */
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired
});

_defineProperty(FormInput, "contextTypes", {
  form: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    registerInput: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
    unregisterInput: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
  })
});

/* harmony default export */ __webpack_exports__["default"] = (FormInput);

/***/ }),

/***/ "./src/components/form-elements/input-messages.js":
/*!********************************************************!*\
  !*** ./src/components/form-elements/input-messages.js ***!
  \********************************************************/
/*! exports provided: badInput, patternMismatch, tooShort, tooLong, typeMismatchEmail, typeMismatchUrl, valueMissing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badInput", function() { return badInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternMismatch", function() { return patternMismatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooShort", function() { return tooShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooLong", function() { return tooLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeMismatchEmail", function() { return typeMismatchEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeMismatchUrl", function() { return typeMismatchUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueMissing", function() { return valueMissing; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/messages */ "./src/common/messages.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var badInput = () => ({
  code: 'badInput',
  message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].invalidInputError)
});

var patternMismatch = () => ({
  code: 'patternMismatch',
  message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].invalidInputError)
});

var tooShort = minLength => ({
  code: 'tooShort',
  message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].minLengthError, {
    values: {
      min: minLength
    }
  }))
});

var tooLong = maxLength => ({
  code: 'tooLong',
  message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].maxLengthError, {
    values: {
      max: maxLength
    }
  }))
});

var typeMismatchEmail = () => ({
  code: 'typeMismatch',
  message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].invalidEmailError)
});

var typeMismatchUrl = () => ({
  code: 'typeMismatch',
  message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].invalidURLError)
});

var valueMissing = () => ({
  code: 'valueMissing',
  message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].requiredFieldError)
});



/***/ }),

/***/ "./src/components/link/LinkButton.js":
/*!*******************************************!*\
  !*** ./src/components/link/LinkButton.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LinkBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkBase */ "./src/components/link/LinkBase.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var LinkButton = (_ref) => {
  var {
    className = ''
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LinkBase__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    className: "btn ".concat(className)
  }, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (LinkButton);

/***/ }),

/***/ "./src/components/link/LinkGroup.js":
/*!******************************************!*\
  !*** ./src/components/link/LinkGroup.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// eslint-disable-next-line react/prefer-stateless-function
class LinkGroup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    var {
      title,
      children,
      className
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "link-group ".concat(className)
    }, title ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "link-group-title"
    }, title) : null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, (item, i) => item ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
      key: i
    }, item, " ") : null)));
  }

}

_defineProperty(LinkGroup, "defaultProps", {
  title: '',
  className: ''
});

/* harmony default export */ __webpack_exports__["default"] = (LinkGroup);

/***/ }),

/***/ "./src/components/link/LinkPrimaryButton.js":
/*!**************************************************!*\
  !*** ./src/components/link/LinkPrimaryButton.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LinkButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkButton */ "./src/components/link/LinkButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var LinkPrimaryButton = (_ref) => {
  var {
    className = ''
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LinkButton__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    className: "btn-primary ".concat(className)
  }, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (LinkPrimaryButton);

/***/ }),

/***/ "./src/components/link/index.js":
/*!**************************************!*\
  !*** ./src/components/link/index.js ***!
  \**************************************/
/*! exports provided: LinkGroup, Link, LinkButton, LinkPrimaryButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LinkGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkGroup */ "./src/components/link/LinkGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkGroup", function() { return _LinkGroup__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./src/components/link/Link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkButton */ "./src/components/link/LinkButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return _LinkButton__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _LinkPrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkPrimaryButton */ "./src/components/link/LinkPrimaryButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkPrimaryButton", function() { return _LinkPrimaryButton__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/components/media/Media.js":
/*!***************************************!*\
  !*** ./src/components/media/Media.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MediaFigure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaFigure */ "./src/components/media/MediaFigure.js");
/* harmony import */ var _MediaBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MediaBody */ "./src/components/media/MediaBody.js");
/* harmony import */ var _MediaMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaMenu */ "./src/components/media/MediaMenu.js");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Media.scss */ "./src/components/media/Media.scss");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Media_scss__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var Media = (_ref) => {
  var {
    as: Wrapper,
    children,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["as", "children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-Media', className)
  }, rest), children);
}; // Use this instead of default value because of param destructuring bug in Flow
// that affects union types
// https://github.com/facebook/flow/issues/5461


Media.defaultProps = {
  as: 'div'
};
Media.Body = _MediaBody__WEBPACK_IMPORTED_MODULE_3__["default"];
Media.Menu = _MediaMenu__WEBPACK_IMPORTED_MODULE_4__["default"];
Media.Figure = _MediaFigure__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ }),

/***/ "./src/components/media/Media.scss":
/*!*****************************************!*\
  !*** ./src/components/media/Media.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/media/MediaBody.js":
/*!*******************************************!*\
  !*** ./src/components/media/MediaBody.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Media.scss */ "./src/components/media/Media.scss");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Media_scss__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var MediaBody = (_ref) => {
  var {
    className,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-Media-body', className)
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (MediaBody);

/***/ }),

/***/ "./src/components/media/MediaFigure.js":
/*!*********************************************!*\
  !*** ./src/components/media/MediaFigure.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Media.scss */ "./src/components/media/Media.scss");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Media_scss__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var MediaFigure = (_ref) => {
  var {
    as: Wrapper,
    className,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["as", "className", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Wrapper, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-Media-figure', className)
  }, rest), children);
}; // Use this instead of default value because of param destructuring bug in Flow
// that affects union types
// https://github.com/facebook/flow/issues/5461


MediaFigure.defaultProps = {
  as: 'figure'
};
/* harmony default export */ __webpack_exports__["default"] = (MediaFigure);

/***/ }),

/***/ "./src/components/media/MediaMenu.js":
/*!*******************************************!*\
  !*** ./src/components/media/MediaMenu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/general/IconEllipsis */ "./src/icons/general/IconEllipsis.js");
/* harmony import */ var _plain_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dropdown-menu */ "./src/components/dropdown-menu/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu */ "./src/components/menu/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Media.scss */ "./src/components/media/Media.scss");
/* harmony import */ var _Media_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Media_scss__WEBPACK_IMPORTED_MODULE_7__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










var MediaMenu = (_ref) => {
  var {
    className,
    children,
    isDisabled,
    dropdownProps,
    menuProps
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "children", "isDisabled", "dropdownProps", "menuProps"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    constrainToScrollParent: true,
    isRightAligned: true
  }, dropdownProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plain_button__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    isDisabled: isDisabled,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-Media-menu', className),
    type: "button"
  }, rest), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_6__["bdlGray50"],
    height: 16,
    width: 16
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_menu__WEBPACK_IMPORTED_MODULE_5__["Menu"], menuProps, children));
};

MediaMenu.defaultProps = {
  dropdownProps: {},
  isDisabled: false,
  menuProps: {}
};
/* harmony default export */ __webpack_exports__["default"] = (MediaMenu);

/***/ }),

/***/ "./src/components/media/index.js":
/*!***************************************!*\
  !*** ./src/components/media/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media */ "./src/components/media/Media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Media__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/modal/Modal.js":
/*!***************************************!*\
  !*** ./src/components/modal/Modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/index.js");
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tabbable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _focus_trap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../focus-trap */ "./src/components/focus-trap/index.js");
/* harmony import */ var _loading_indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading-indicator */ "./src/components/loading-indicator/index.js");
/* harmony import */ var _portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../portal */ "./src/components/portal/index.js");
/* harmony import */ var _ModalDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModalDialog */ "./src/components/modal/ModalDialog.js");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modal.scss */ "./src/components/modal/Modal.scss");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Modal_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class Modal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onKeyDown", event => {
      var {
        isOpen,
        onRequestClose
      } = this.props;

      if (isOpen && onRequestClose && event.key === 'Escape') {
        event.stopPropagation();
        onRequestClose(event);
      }
    });

    _defineProperty(this, "onBackdropClick", event => {
      var {
        onRequestClose,
        onBackdropClick
      } = this.props;

      if (onBackdropClick) {
        onBackdropClick(event);
      } else if (onRequestClose) {
        onRequestClose(event);
      }
    });

    _defineProperty(this, "onModalOpen", () => {
      setTimeout(() => {
        var {
          focusElementSelector
        } = this.props;
        var focusElementSelectorTrimmed = focusElementSelector && focusElementSelector.trim();

        if (focusElementSelectorTrimmed) {
          this.focusElement(focusElementSelectorTrimmed);
        } else {
          this.focusFirstUsefulElement();
        }
      }, 0);
    });

    _defineProperty(this, "focusFirstUsefulElement", () => {
      if (!this.dialog) {
        return;
      }

      var tabbableEls = tabbable__WEBPACK_IMPORTED_MODULE_2___default()(this.dialog);

      if (tabbableEls.length > 1) {
        tabbableEls[1].focus();
      } else if (tabbableEls.length > 0) {
        tabbableEls[0].focus();
      }
    });

    _defineProperty(this, "focusElement", elementSelector => {
      if (!this.dialog) {
        return;
      }

      var el = this.dialog.querySelector(elementSelector);

      if (el) {
        el.focus();
      } else {
        throw new Error("Could not find element matching selector ".concat(elementSelector, " to focus on."));
      }
    });
  }

  componentDidMount() {
    var {
      isOpen
    } = this.props;

    if (isOpen) {
      this.onModalOpen();
    }
  }

  componentDidUpdate(prevProps) {
    var {
      isLoading,
      isOpen
    } = this.props; // Set focus if modal is transitioning from closed -> open and/or loading -> not loading

    if ((!prevProps.isOpen || prevProps.isLoading) && isOpen && !isLoading) {
      this.onModalOpen();
    }
  }
  /**
   * Call props.onRequestClose when escape is pressed
   * @param {SyntheticKeyboardEvent} event
   */


  render() {
    var _this$props = this.props,
        {
      className,
      isLoading,
      isOpen,
      onRequestClose,
      shouldNotUsePortal,
      style
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["className", "isLoading", "isOpen", "onRequestClose", "shouldNotUsePortal", "style"]);

    if (!isOpen) {
      return null;
    }

    var bodyOverrideStyle = "\n            body {\n                overflow:hidden;\n            }\n        "; // used `omit` here to prevent certain key/value pairs from going into the spread on `ModalDialog`

    var modalProps = lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(rest, ['onBackdropClick', 'focusElementSelector']);
    var WrapperComponent = shouldNotUsePortal ? 'div' : _portal__WEBPACK_IMPORTED_MODULE_6__["default"]; // Render a style tag to prevent body from scrolling as long as the Modal is open

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrapperComponent, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('modal', className),
      onKeyDown: this.onKeyDown,
      tabIndex: "-1"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "modal-backdrop",
      onClick: this.onBackdropClick,
      style: style.backdrop
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_focus_trap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "modal-dialog-container"
    }, isLoading ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_loading_indicator__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: "large"
    }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ModalDialog__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
      modalRef: modalEl => {
        // This callback gets passed through as a regular prop since
        // ModalDialog is wrapped in a HOC
        this.dialog = modalEl;
      },
      onRequestClose: onRequestClose,
      style: style.dialog
    }, modalProps))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", {
      type: "text/css"
    }, bodyOverrideStyle));
  }

}

_defineProperty(Modal, "defaultProps", {
  style: {
    backdrop: {},
    dialog: {}
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/modal/Modal.scss":
/*!*****************************************!*\
  !*** ./src/components/modal/Modal.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/modal/ModalDialog.js":
/*!*********************************************!*\
  !*** ./src/components/modal/ModalDialog.js ***!
  \*********************************************/
/*! exports provided: ModalDialogBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialogBase", function() { return ModalDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _icons_general_IconClose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/general/IconClose */ "./src/icons/general/IconClose.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var ALERT_TYPE = 'alert';
var DIALOG_TYPE = 'dialog';
var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["defineMessages"])({
  closeModalText: {
    "id": "boxui.modalDialog.closeModalText",
    "defaultMessage": "Close Modal"
  }
});

class ModalDialog extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onCloseButtonClick", event => {
      var {
        onRequestClose
      } = this.props;

      if (onRequestClose) {
        onRequestClose(event);
      }
    });

    _defineProperty(this, "modalID", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default()('modal'));
  }

  /**
   * Renders a button if onRequestClose is passed in
   * @return {ReactElement|null} - Returns the button, or null if the button shouldn't be rendered
   */
  renderCloseButton() {
    var {
      closeButtonProps,
      onRequestClose,
      intl
    } = this.props;
    var {
      formatMessage
    } = intl;

    if (!onRequestClose) {
      return null;
    }

    return (// eslint-disable-next-line react/button-has-type
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", _extends({}, closeButtonProps, {
        "aria-label": formatMessage(messages.closeModalText),
        className: "modal-close-button",
        onClick: this.onCloseButtonClick
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconClose__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "#909090",
        height: 18,
        width: 18
      }))
    );
  }

  renderContent() {
    var {
      children,
      type
    } = this.props;

    if (type !== ALERT_TYPE) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "modal-content"
      }, children);
    }

    var elements = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children);

    if (elements.length !== 2) {
      throw new Error('Alert modal must have exactly two children: A message and <ModalActions>');
    }

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "modal-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      id: "".concat(this.modalID, "-desc")
    }, elements[0]), elements[1]);
  }

  render() {
    var _this$props = this.props,
        {
      className,
      modalRef,
      title,
      type // Useful for resin tagging, and other misc tags such as a11y

    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["className", "modalRef", "title", "type"]);

    var isAlertType = type === ALERT_TYPE;
    var divProps = lodash_omit__WEBPACK_IMPORTED_MODULE_2___default()(rest, ['children', 'closeButtonProps', 'onRequestClose', 'intl']);
    divProps.role = isAlertType ? 'alertdialog' : 'dialog';
    divProps['aria-labelledby'] = "".concat(this.modalID, "-label");

    if (isAlertType) {
      divProps['aria-describedby'] = "".concat(this.modalID, "-desc");
    }

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
      ref: modalRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('modal-dialog', className)
    }, divProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "modal-header"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
      className: "modal-title",
      id: "".concat(this.modalID, "-label")
    }, title)), this.renderCloseButton(), this.renderContent());
  }

}

_defineProperty(ModalDialog, "defaultProps", {
  type: DIALOG_TYPE,
  closeButtonProps: {}
});


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["injectIntl"])(ModalDialog));

/***/ }),

/***/ "./src/components/pill-selector-dropdown/PillSelectorDropdown.js":
/*!***********************************************************************!*\
  !*** ./src/components/pill-selector-dropdown/PillSelectorDropdown.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_parseCSV__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/parseCSV */ "./src/utils/parseCSV.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../label */ "./src/components/label/index.js");
/* harmony import */ var _selector_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../selector-dropdown */ "./src/components/selector-dropdown/index.js");
/* harmony import */ var _PillSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PillSelector */ "./src/components/pill-selector-dropdown/PillSelector.js");
/* harmony import */ var _PillSelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PillSelectorDropdown.scss */ "./src/components/pill-selector-dropdown/PillSelectorDropdown.scss");
/* harmony import */ var _PillSelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_PillSelectorDropdown_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class PillSelectorDropdown extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      inputValue: '',
      isInCompositionMode: false
    });

    _defineProperty(this, "parsePills", inputValue => {
      var {
        allowInvalidPills,
        parseItems,
        validator
      } = this.props;
      var pills = parseItems ? parseItems(inputValue) : Object(_utils_parseCSV__WEBPACK_IMPORTED_MODULE_4__["default"])(inputValue);

      if (!pills) {
        return [];
      }

      if (!allowInvalidPills) {
        pills = pills.filter(pill => validator(pill));
      }

      var normalizedPills = pills.map(pill => typeof pill === 'string' ? {
        displayText: pill,
        text: pill,
        // deprecated, left for backwards compatibility
        value: pill
      } : pill);
      return normalizedPills;
    });

    _defineProperty(this, "addPillsFromInput", inputValue => {
      var {
        allowCustomPills,
        onPillCreate,
        onSelect,
        selectedOptions,
        shouldClearUnmatchedInput,
        validateForError
      } = this.props; // Do nothing if custom pills are not allowed

      if (!allowCustomPills) {
        return;
      } // Parse pills from input


      var pills = this.parsePills(inputValue); // "Select" the pills

      if (pills.length > 0) {
        onSelect(pills);
        onPillCreate(pills);
        this.resetInputValue();
      } else {
        if (validateForError && (inputValue !== '' || selectedOptions.length === 0)) {
          /**
           * If no pills were added, but an inputValue exists or
           * there are no pills selected, check for errors
           */
          validateForError(inputValue);
        }

        if (shouldClearUnmatchedInput) {
          this.resetInputValue();
        }
      }
    });

    _defineProperty(this, "handleBlur", event => {
      var {
        onBlur
      } = this.props;
      var {
        inputValue
      } = this.state;
      this.addPillsFromInput(inputValue);
      onBlur(event);
    });

    _defineProperty(this, "handleInput", event => {
      var {
        target
      } = event;
      var {
        value
      } = target;
      this.setState({
        inputValue: value
      });
      this.props.onInput(value, event);
    });

    _defineProperty(this, "handleEnter", event => {
      var {
        isInCompositionMode,
        inputValue
      } = this.state;

      if (!isInCompositionMode) {
        event.preventDefault();
        this.addPillsFromInput(inputValue);
      }
    });

    _defineProperty(this, "handlePaste", event => {
      event.preventDefault();
      var inputValue = event.clipboardData.getData('text');
      this.setState({
        inputValue
      });
      this.props.onInput(inputValue, event);
      this.addPillsFromInput(inputValue);
    });

    _defineProperty(this, "handleSelect", (index, event) => {
      var {
        onPillCreate,
        onSelect,
        selectorOptions
      } = this.props;
      var selectedOption = // $FlowFixMe
      typeof selectorOptions.get === 'function' ? selectorOptions.get(index) : selectorOptions[index];
      onSelect([selectedOption], event);
      onPillCreate([selectedOption]);
      this.handleInput({
        target: {
          value: ''
        }
      });
    });

    _defineProperty(this, "handleCompositionStart", () => {
      this.setState({
        isInCompositionMode: true
      });
    });

    _defineProperty(this, "handleCompositionEnd", () => {
      this.setState({
        isInCompositionMode: false
      });
    });

    _defineProperty(this, "resetInputValue", () => {
      var {
        onInput
      } = this.props;
      this.setState({
        inputValue: ''
      });
      onInput('');
    });
  }

  render() {
    var {
      allowInvalidPills,
      children,
      className,
      disabled,
      dividerIndex,
      dropdownScrollBoundarySelector,
      error,
      inputProps,
      label,
      onRemove,
      onSuggestedPillAdd,
      overlayTitle,
      placeholder,
      selectedOptions,
      suggestedPillsData,
      suggestedPillsFilter,
      suggestedPillsTitle,
      shouldSetActiveItemOnOpen,
      validator
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_label__WEBPACK_IMPORTED_MODULE_5__["default"], {
      text: label
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_selector_dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('pill-selector-wrapper', className),
      dividerIndex: dividerIndex,
      onEnter: this.handleEnter,
      onSelect: this.handleSelect,
      overlayTitle: overlayTitle,
      scrollBoundarySelector: dropdownScrollBoundarySelector,
      shouldSetActiveItemOnOpen: shouldSetActiveItemOnOpen,
      selector: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_PillSelector__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
        onChange: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a // fix console error
        ,
        onCompositionEnd: this.handleCompositionEnd,
        onCompositionStart: this.handleCompositionStart
      }, inputProps, {
        allowInvalidPills: allowInvalidPills,
        disabled: disabled,
        error: error,
        onBlur: this.handleBlur,
        onInput: this.handleInput,
        onPaste: this.handlePaste,
        onRemove: onRemove,
        onSuggestedPillAdd: onSuggestedPillAdd,
        placeholder: placeholder,
        selectedOptions: selectedOptions,
        suggestedPillsData: suggestedPillsData,
        suggestedPillsFilter: suggestedPillsFilter,
        suggestedPillsTitle: suggestedPillsTitle,
        validator: validator,
        value: this.state.inputValue
      }))
    }, children));
  }

}

_defineProperty(PillSelectorDropdown, "defaultProps", {
  allowCustomPills: false,
  allowInvalidPills: false,
  disabled: false,
  error: '',
  inputProps: {},
  label: '',
  onBlur: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  onPillCreate: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  placeholder: '',
  selectedOptions: [],
  selectorOptions: [],
  shouldClearUnmatchedInput: false,
  shouldSetActiveItemOnOpen: false,
  validator: () => true
});

/* harmony default export */ __webpack_exports__["default"] = (PillSelectorDropdown);

/***/ }),

/***/ "./src/components/pill-selector-dropdown/PillSelectorDropdown.scss":
/*!*************************************************************************!*\
  !*** ./src/components/pill-selector-dropdown/PillSelectorDropdown.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/portal/Portal.js":
/*!*****************************************!*\
  !*** ./src/components/portal/Portal.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Portal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.container = this.props.container;
    this.layer = document.createElement('div');
    this.layer.setAttribute('data-portal', '');

    if (this.container && this.layer) {
      this.container.appendChild(this.layer);
    }
  }

  componentWillUnmount() {
    if (this.container && this.layer) {
      this.container.removeChild(this.layer);
    }

    this.layer = null;
  }

  render() {
    var _this$props = this.props,
        {
      container
    } = _this$props,
        elementProps = _objectWithoutProperties(_this$props, ["container"]);

    if (!this.layer) {
      return null;
    }

    return Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", elementProps), this.layer);
  }

}

_defineProperty(Portal, "defaultProps", {
  container: document.body
});

/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./src/components/portal/index.js":
/*!****************************************!*\
  !*** ./src/components/portal/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portal */ "./src/components/portal/Portal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Portal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/primary-button/index.js":
/*!************************************************!*\
  !*** ./src/components/primary-button/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrimaryButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrimaryButton */ "./src/components/primary-button/PrimaryButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PrimaryButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/text-area/TextArea.js":
/*!**********************************************!*\
  !*** ./src/components/text-area/TextArea.js ***!
  \**********************************************/
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
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../label */ "./src/components/label/index.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.js");
/* harmony import */ var _TextArea_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextArea.scss */ "./src/components/text-area/TextArea.scss");
/* harmony import */ var _TextArea_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TextArea_scss__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var TextArea = (_ref) => {
  var {
    className = '',
    error,
    hideLabel,
    hideOptionalLabel,
    isRequired,
    isResizable,
    label,
    textareaRef
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "error", "hideLabel", "hideOptionalLabel", "isRequired", "isResizable", "label", "textareaRef"]);

  var hasError = !!error;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'text-area-container', {
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
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    hideLabel: hideLabel,
    showOptionalText: !hideOptionalLabel && !isRequired,
    text: label
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isShown: hasError,
    position: "bottom-left",
    text: error || '',
    theme: "error"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("textarea", _extends({
    ref: textareaRef,
    required: isRequired,
    style: {
      resize: isResizable ? '' : 'none'
    }
  }, ariaAttrs, rest))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: errorMessageID,
    className: "accessibility-hidden",
    role: "alert"
  }, error)));
};

TextArea.displayName = 'TextArea';
/* harmony default export */ __webpack_exports__["default"] = (TextArea);

/***/ }),

/***/ "./src/components/text-area/TextArea.scss":
/*!************************************************!*\
  !*** ./src/components/text-area/TextArea.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/text-area/TextAreaField.js":
/*!***************************************************!*\
  !*** ./src/components/text-area/TextAreaField.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextArea */ "./src/components/text-area/TextArea.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var TextAreaField = (_ref) => {
  var {
    field,
    form,
    innerRef,
    isRequired
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["field", "form", "innerRef", "isRequired"]);

  var {
    name
  } = field;
  var {
    errors,
    touched
  } = form;
  var isTouched = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(touched, name);
  var error = isTouched ? lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(errors, name) : null;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TextArea__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, field, rest, {
    textareaRef: innerRef,
    error: error,
    hideOptionalLabel: isRequired
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TextAreaField);

/***/ }),

/***/ "./src/components/text-area/index.js":
/*!*******************************************!*\
  !*** ./src/components/text-area/index.js ***!
  \*******************************************/
/*! exports provided: default, TextAreaField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextArea */ "./src/components/text-area/TextArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextArea__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _TextAreaField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextAreaField */ "./src/components/text-area/TextAreaField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaField", function() { return _TextAreaField__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/elements/content-sidebar/ActivitySidebar.js":
/*!*********************************************************!*\
  !*** ./src/elements/content-sidebar/ActivitySidebar.js ***!
  \*********************************************************/
/*! exports provided: activityFeedInlineError, ActivitySidebarComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityFeedInlineError", function() { return activityFeedInlineError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitySidebarComponent", function() { return ActivitySidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _activity_feed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activity-feed */ "./src/elements/content-sidebar/activity-feed/index.js");
/* harmony import */ var _AddTaskButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddTaskButton */ "./src/elements/content-sidebar/AddTaskButton.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SidebarContent */ "./src/elements/content-sidebar/SidebarContent.js");
/* harmony import */ var _common_logger_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/logger/constants */ "./src/elements/common/logger/constants.js");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/error */ "./src/utils/error.js");
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/performance */ "./src/utils/performance.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/api-context */ "./src/elements/common/api-context/index.js");
/* harmony import */ var _common_error_boundary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/error-boundary */ "./src/elements/common/error-boundary/index.js");
/* harmony import */ var _common_feature_checking__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/feature-checking */ "./src/elements/common/feature-checking/index.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/logger */ "./src/elements/common/logger/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _ActivitySidebar_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ActivitySidebar.scss */ "./src/elements/content-sidebar/ActivitySidebar.scss");
/* harmony import */ var _ActivitySidebar_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_ActivitySidebar_scss__WEBPACK_IMPORTED_MODULE_18__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Activity feed sidebar component
 * @author Box
 */



















var activityFeedInlineError = {
  inlineError: {
    title: _common_messages__WEBPACK_IMPORTED_MODULE_8__["default"].errorOccured,
    content: _common_messages__WEBPACK_IMPORTED_MODULE_8__["default"].activityFeedItemApiError
  }
};
var MARK_NAME_JS_READY = "".concat(_constants__WEBPACK_IMPORTED_MODULE_17__["ORIGIN_ACTIVITY_SIDEBAR"], "_").concat(_common_logger_constants__WEBPACK_IMPORTED_MODULE_10__["EVENT_JS_READY"]);
Object(_utils_performance__WEBPACK_IMPORTED_MODULE_12__["mark"])(MARK_NAME_JS_READY);

class ActivitySidebar extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    var _this;

    super(props);
    _this = this;

    _defineProperty(this, "feedSuccessCallback", () => {
      this.fetchFeedItems();
    });

    _defineProperty(this, "feedErrorCallback", (e, code, contextInfo) => {
      this.errorCallback(e, code, contextInfo);
      this.fetchFeedItems();
    });

    _defineProperty(this, "createTask", (message, assignees, taskType, dueAt, completionRule, onSuccess, onError) => {
      var {
        currentUser
      } = this.state;
      var {
        file,
        api
      } = this.props;

      if (!currentUser) {
        throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_11__["getBadUserError"])();
      }

      var errorCallback = (e, code, contextInfo) => {
        if (onError) {
          onError(e, code, contextInfo);
        }

        this.feedErrorCallback(e, code, contextInfo);
      };

      var successCallback = () => {
        if (onSuccess) {
          onSuccess();
        }

        this.feedSuccessCallback();
      };

      api.getFeedAPI(false).createTaskNew(file, currentUser, message, assignees, taskType, dueAt, completionRule, successCallback, errorCallback); // need to load the pending item

      this.fetchFeedItems();
    });

    _defineProperty(this, "deleteTask", task => {
      var {
        file,
        api,
        onTaskDelete
      } = this.props;
      api.getFeedAPI(false).deleteTaskNew(file, task, taskId => {
        this.feedSuccessCallback();
        onTaskDelete(taskId);
      }, this.feedErrorCallback); // need to load the pending item

      this.fetchFeedItems();
    });

    _defineProperty(this, "updateTask", (task, onSuccess, onError) => {
      var {
        file,
        api,
        onTaskUpdate
      } = this.props;

      var errorCallback = (e, code) => {
        if (onError) {
          onError(e, code);
        }

        this.feedErrorCallback(e, code);
      };

      var successCallback = () => {
        this.feedSuccessCallback();

        if (onSuccess) {
          onSuccess();
        }

        onTaskUpdate();
      };

      api.getFeedAPI(false).updateTaskNew(file, task, successCallback, errorCallback); // need to load the pending item

      this.fetchFeedItems();
    });

    _defineProperty(this, "updateTaskAssignment", (taskId, taskAssignmentId, status) => {
      var {
        file,
        api
      } = this.props;
      api.getFeedAPI(false).updateTaskCollaborator(file, taskId, taskAssignmentId, status, this.feedSuccessCallback, this.feedErrorCallback); // need to load the pending item

      this.fetchFeedItems();
    });

    _defineProperty(this, "deleteComment", (_ref) => {
      var {
        id,
        permissions
      } = _ref;
      var {
        file,
        api,
        onCommentDelete
      } = this.props;
      api.getFeedAPI(false).deleteComment(file, id, permissions, comment => {
        this.feedSuccessCallback();
        onCommentDelete(comment);
      }, this.feedErrorCallback); // need to load the pending item

      this.fetchFeedItems();
    });

    _defineProperty(this, "updateComment", (id, text, hasMention, permissions, onSuccess, onError) => {
      var {
        file,
        api,
        onCommentUpdate
      } = this.props;

      var errorCallback = (e, code) => {
        if (onError) {
          onError(e, code);
        }

        this.feedErrorCallback(e, code);
      };

      var successCallback = () => {
        this.feedSuccessCallback();

        if (onSuccess) {
          onSuccess();
        }

        onCommentUpdate();
      };

      api.getFeedAPI(false).updateComment(file, id, text, hasMention, permissions, successCallback, errorCallback); // need to load the pending item

      this.fetchFeedItems();
    });

    _defineProperty(this, "createComment", (text, hasMention) => {
      var {
        file,
        api,
        onCommentCreate
      } = this.props;
      var {
        currentUser
      } = this.state;

      if (!currentUser) {
        throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_11__["getBadUserError"])();
      }

      api.getFeedAPI(false).createComment(file, currentUser, text, hasMention, comment => {
        onCommentCreate(comment);
        this.feedSuccessCallback();
      }, this.feedErrorCallback); // need to load the pending item

      this.fetchFeedItems();
    });

    _defineProperty(this, "deleteAppActivity", (_ref2) => {
      var {
        id
      } = _ref2;
      var {
        file,
        api
      } = this.props;
      api.getFeedAPI(false).deleteAppActivity(file, id, this.feedSuccessCallback, this.feedErrorCallback); // need to load the pending item

      this.fetchFeedItems();
    });

    _defineProperty(this, "fetchFeedItemsSuccessCallback", feedItems => {
      this.setState({
        feedItems,
        activityFeedError: undefined
      });
    });

    _defineProperty(this, "fetchFeedItemsErrorCallback", feedItems => {
      this.setState({
        feedItems,
        activityFeedError: activityFeedInlineError
      });
    });

    _defineProperty(this, "errorCallback", function (error, code) {
      var contextInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      /* eslint-disable no-console */
      console.error(error);
      /* eslint-enable no-console */
      // eslint-disable-next-line react/prop-types

      _this.props.onError(error, code, contextInfo);
    });

    _defineProperty(this, "fetchCurrentUserSuccessCallback", currentUser => {
      this.setState({
        currentUser,
        currentUserError: undefined
      });
    });

    _defineProperty(this, "getApproverContactsSuccessCallback", collaborators => {
      var {
        entries
      } = collaborators;
      this.setState({
        approverSelectorContacts: entries
      });
    });

    _defineProperty(this, "getMentionContactsSuccessCallback", collaborators => {
      var {
        entries
      } = collaborators;
      this.setState({
        mentionSelectorContacts: entries
      });
    });

    _defineProperty(this, "getApproverWithQuery", lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(this.getCollaborators.bind(this, this.getApproverContactsSuccessCallback, this.errorCallback), _constants__WEBPACK_IMPORTED_MODULE_17__["DEFAULT_COLLAB_DEBOUNCE"]));

    _defineProperty(this, "getMentionWithQuery", lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(this.getCollaborators.bind(this, this.getMentionContactsSuccessCallback, this.errorCallback), _constants__WEBPACK_IMPORTED_MODULE_17__["DEFAULT_COLLAB_DEBOUNCE"]));

    _defineProperty(this, "fetchCurrentUserErrorCallback", (e, code) => {
      this.setState({
        currentUser: undefined,
        currentUserError: {
          maskError: {
            errorHeader: _common_messages__WEBPACK_IMPORTED_MODULE_8__["default"].currentUserErrorHeaderMessage,
            errorSubHeader: _common_messages__WEBPACK_IMPORTED_MODULE_8__["default"].defaultErrorMaskSubHeaderMessage
          }
        }
      });
      this.errorCallback(e, code, {
        error: e
      });
    });

    _defineProperty(this, "getAvatarUrl",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(function* (userId) {
        var {
          file,
          api
        } = _this.props;
        return api.getUsersAPI(false).getAvatarUrlWithAccessToken(userId, file.id);
      });

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(this, "onTaskModalClose", () => {
      this.setState({
        approverSelectorContacts: []
      });
    });

    _defineProperty(this, "renderAddTaskButton", () => {
      var {
        isDisabled
      } = this.props;
      var {
        approverSelectorContacts
      } = this.state;
      var {
        getApproverWithQuery,
        getAvatarUrl,
        createTask,
        onTaskModalClose
      } = this;
      var taskFormProps = {
        approverSelectorContacts,
        completionRule: _constants__WEBPACK_IMPORTED_MODULE_17__["TASK_COMPLETION_RULE_ALL"],
        createTask,
        getApproverWithQuery,
        getAvatarUrl,
        id: '',
        message: '',
        approvers: []
      };
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AddTaskButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isDisabled: isDisabled,
        onTaskModalClose: onTaskModalClose,
        taskFormProps: taskFormProps
      });
    });

    // eslint-disable-next-line react/prop-types
    var {
      logger
    } = this.props;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
    this.state = {};
  }

  componentDidMount() {
    var {
      currentUser
    } = this.props;
    this.fetchFeedItems(true);
    this.fetchCurrentUser(currentUser);
  }
  /**
   * Fetches a Users info
   *
   * @private
   * @param {User} [user] - Box User. If missing, gets user that the current token was generated for.
   * @return {void}
   */


  fetchCurrentUser(user) {
    var shouldDestroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var {
      api,
      file
    } = this.props;

    if (!file) {
      throw Object(_utils_error__WEBPACK_IMPORTED_MODULE_11__["getBadItemError"])();
    }

    if (typeof user === 'undefined') {
      api.getUsersAPI(shouldDestroy).getUser(file.id, this.fetchCurrentUserSuccessCallback, this.fetchCurrentUserErrorCallback);
    } else {
      this.setState({
        currentUser: user,
        currentUserError: undefined
      });
    }
  }
  /**
   * Success callback for fetching feed items
   */


  /**
   * Fetches the feed items for the sidebar
   *
   * @param {boolean} shouldDestroy true if the api factory should be destroyed
   */
  fetchFeedItems() {
    var shouldRefreshCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var shouldDestroy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var {
      file,
      api,
      features
    } = this.props;
    var shouldShowAppActivity = Object(_common_feature_checking__WEBPACK_IMPORTED_MODULE_15__["isFeatureEnabled"])(features, 'activityFeed.appActivity.enabled');
    api.getFeedAPI(shouldDestroy).feedItems(file, shouldRefreshCache, this.fetchFeedItemsSuccessCallback, this.fetchFeedItemsErrorCallback, this.errorCallback, {
      shouldShowAppActivity
    });
  }
  /**
   * Handles a successful feed API fetch
   *
   * @private
   * @param {Array} feedItems - the feed items
   * @return {void}
   */


  /**
   * Fetches file collaborators
   *
   * @param {Function} successCallback - the success callback
   * @param {Function} errorCallback - the error callback
   * @param {string} searchStr - the search string
   * @return {void}
   */
  getCollaborators(successCallback, errorCallback, searchStr) {
    // Do not fetch without filter
    var {
      file,
      api
    } = this.props;

    if (!searchStr || searchStr.trim() === '') {
      return;
    }

    api.getFileCollaboratorsAPI(true).getFileCollaborators(file.id, successCallback, errorCallback, {
      filter_term: searchStr
    });
  }
  /**
   * Handles a failed file user info fetch
   *
   * @private
   * @param {ElementsXhrError} e - API error
   * @return {void}
   */


  refresh() {
    this.fetchFeedItems(true);
  }

  render() {
    var {
      elementId,
      file,
      isDisabled = false,
      onVersionHistoryClick,
      getUserProfileUrl,
      activeFeedEntryId,
      activeFeedEntryType
    } = this.props;
    var {
      currentUser,
      approverSelectorContacts,
      mentionSelectorContacts,
      feedItems,
      activityFeedError,
      currentUserError
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
      actions: this.renderAddTaskButton(),
      className: "bcs-activity",
      elementId: elementId,
      sidebarView: _constants__WEBPACK_IMPORTED_MODULE_17__["SIDEBAR_VIEW_ACTIVITY"],
      title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_8__["default"].sidebarActivityTitle)
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_activity_feed__WEBPACK_IMPORTED_MODULE_5__["default"], {
      file: file,
      activityFeedError: activityFeedError,
      approverSelectorContacts: approverSelectorContacts,
      mentionSelectorContacts: mentionSelectorContacts,
      currentUser: currentUser,
      isDisabled: isDisabled,
      onAppActivityDelete: this.deleteAppActivity,
      onCommentCreate: this.createComment,
      onCommentDelete: this.deleteComment,
      onCommentUpdate: this.updateComment,
      onTaskCreate: this.createTask,
      onTaskDelete: this.deleteTask,
      onTaskUpdate: this.updateTask,
      onTaskModalClose: this.onTaskModalClose,
      onTaskAssignmentUpdate: this.updateTaskAssignment,
      getApproverWithQuery: this.getApproverWithQuery,
      getMentionWithQuery: this.getMentionWithQuery,
      onVersionHistoryClick: onVersionHistoryClick,
      getAvatarUrl: this.getAvatarUrl,
      getUserProfileUrl: getUserProfileUrl,
      feedItems: feedItems,
      currentUserError: currentUserError,
      activeFeedEntryId: activeFeedEntryId,
      activeFeedEntryType: activeFeedEntryType
    }));
  }

}

_defineProperty(ActivitySidebar, "defaultProps", {
  isDisabled: false,
  onCommentCreate: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  onCommentDelete: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  onCommentUpdate: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  onTaskAssignmentUpdate: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  onTaskCreate: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  onTaskDelete: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  onTaskUpdate: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a
});


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_2___default()([Object(_common_logger__WEBPACK_IMPORTED_MODULE_16__["withLogger"])(_constants__WEBPACK_IMPORTED_MODULE_17__["ORIGIN_ACTIVITY_SIDEBAR"]), Object(_common_error_boundary__WEBPACK_IMPORTED_MODULE_14__["withErrorBoundary"])(_constants__WEBPACK_IMPORTED_MODULE_17__["ORIGIN_ACTIVITY_SIDEBAR"]), _common_api_context__WEBPACK_IMPORTED_MODULE_13__["withAPIContext"], _common_feature_checking__WEBPACK_IMPORTED_MODULE_15__["withFeatureConsumer"]])(ActivitySidebar));

/***/ }),

/***/ "./src/elements/content-sidebar/ActivitySidebar.scss":
/*!***********************************************************!*\
  !*** ./src/elements/content-sidebar/ActivitySidebar.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/AddTaskButton.js":
/*!*******************************************************!*\
  !*** ./src/elements/content-sidebar/AddTaskButton.js ***!
  \*******************************************************/
/*! exports provided: AddTaskButtonComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskButtonComponent", function() { return AddTaskButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _AddTaskMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddTaskMenu */ "./src/elements/content-sidebar/AddTaskMenu.js");
/* harmony import */ var _TaskModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskModal */ "./src/elements/content-sidebar/TaskModal.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class AddTaskButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      error: null,
      isTaskFormOpen: false,
      taskType: _constants__WEBPACK_IMPORTED_MODULE_4__["TASK_TYPE_APPROVAL"]
    });

    _defineProperty(this, "handleClickMenuItem", taskType => {
      this.props.history.replace({
        state: {
          open: true
        }
      });
      this.setState({
        isTaskFormOpen: true,
        taskType
      });
    });

    _defineProperty(this, "handleModalClose", () => {
      var {
        onTaskModalClose
      } = this.props;
      this.setState({
        isTaskFormOpen: false,
        error: null
      });
      onTaskModalClose();
    });

    _defineProperty(this, "handleSubmitError", e => this.setState({
      error: e
    }));
  }

  render() {
    var {
      isDisabled,
      taskFormProps
    } = this.props;
    var {
      isTaskFormOpen,
      taskType,
      error
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AddTaskMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isDisabled: isDisabled,
      onMenuItemClick: this.handleClickMenuItem
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      error: error,
      onSubmitError: this.handleSubmitError,
      onSubmitSuccess: this.handleModalClose,
      onModalClose: this.handleModalClose,
      isTaskFormOpen: isTaskFormOpen,
      taskFormProps: taskFormProps,
      taskType: taskType
    }));
  }

}

_defineProperty(AddTaskButton, "defaultProps", {
  isDisabled: false
});


/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(AddTaskButton));

/***/ }),

/***/ "./src/elements/content-sidebar/AddTaskMenu.js":
/*!*****************************************************!*\
  !*** ./src/elements/content-sidebar/AddTaskMenu.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dropdown-menu */ "./src/components/dropdown-menu/index.js");
/* harmony import */ var _components_dropdown_menu_MenuToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/dropdown-menu/MenuToggle */ "./src/components/dropdown-menu/MenuToggle.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/menu */ "./src/components/menu/index.js");
/* harmony import */ var _icons_two_toned_IconTaskApproval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/two-toned/IconTaskApproval */ "./src/icons/two-toned/IconTaskApproval.js");
/* harmony import */ var _icons_two_toned_IconTaskGeneral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/two-toned/IconTaskGeneral */ "./src/icons/two-toned/IconTaskGeneral.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _AddTaskMenu_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AddTaskMenu.scss */ "./src/elements/content-sidebar/AddTaskMenu.scss");
/* harmony import */ var _AddTaskMenu_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_AddTaskMenu_scss__WEBPACK_IMPORTED_MODULE_10__);












var AddTaskMenu = props => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
  constrainToScrollParent: true,
  isRightAligned: true
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  isDisabled: props.isDisabled,
  type: "button"
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_dropdown_menu_MenuToggle__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].tasksAddTask))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
  className: "bcs-AddTaskMenu"
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
  className: "bcs-AddTaskMenu-menuItem",
  onClick: () => props.onMenuItemClick(_constants__WEBPACK_IMPORTED_MODULE_9__["TASK_TYPE_GENERAL"])
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "bcs-AddTaskMenu-icon"
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_two_toned_IconTaskGeneral__WEBPACK_IMPORTED_MODULE_7__["default"], {
  width: 30,
  height: 30
})), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "bcs-AddTaskMenu-title"
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].taskAddTaskGeneral)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "bcs-AddTaskMenu-description"
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].taskAddTaskGeneralDescription)))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
  className: "bcs-AddTaskMenu-menuItem",
  onClick: () => props.onMenuItemClick(_constants__WEBPACK_IMPORTED_MODULE_9__["TASK_TYPE_APPROVAL"])
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "bcs-AddTaskMenu-icon"
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_two_toned_IconTaskApproval__WEBPACK_IMPORTED_MODULE_6__["default"], {
  width: 30,
  height: 30
})), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "bcs-AddTaskMenu-title"
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].taskAddTaskApproval)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "bcs-AddTaskMenu-description"
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].taskAddTaskApprovalDescription))))));

/* harmony default export */ __webpack_exports__["default"] = (AddTaskMenu);

/***/ }),

/***/ "./src/elements/content-sidebar/AddTaskMenu.scss":
/*!*******************************************************!*\
  !*** ./src/elements/content-sidebar/AddTaskMenu.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/TaskModal.js":
/*!***************************************************!*\
  !*** ./src/elements/content-sidebar/TaskModal.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modal/Modal */ "./src/components/modal/Modal.js");
/* harmony import */ var _activity_feed_task_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-feed/task-form */ "./src/elements/content-sidebar/activity-feed/task-form/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function getMessageForModalTitle(taskType, mode) {
  switch (taskType) {
    case _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_TYPE_GENERAL"]:
      return mode === _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_EDIT_MODE_CREATE"] ? _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksCreateGeneralTaskFormTitle : _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksEditGeneralTaskFormTitle;

    case _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_TYPE_APPROVAL"]:
    default:
      return mode === _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_EDIT_MODE_CREATE"] ? _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksCreateApprovalTaskFormTitle : _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksEditApprovalTaskFormTitle;
  }
}

var focusTargetSelector = '.task-modal textarea, .task-modal input';

var TaskModal = props => {
  var {
    editMode = _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_EDIT_MODE_CREATE"],
    error,
    onSubmitError,
    onSubmitSuccess,
    onModalClose,
    taskType,
    isTaskFormOpen,
    taskFormProps
  } = props; // Note: Modal throws an error if this fails to find an element!

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_modal_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "be-modal task-modal",
    "data-testid": "create-task-modal",
    focusElementSelector: focusTargetSelector,
    isOpen: isTaskFormOpen,
    onRequestClose: onModalClose,
    title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], getMessageForModalTitle(taskType, editMode))
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "be"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_activity_feed_task_form__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    editMode: editMode,
    error: error,
    onCancel: onModalClose,
    onSubmitError: onSubmitError,
    onSubmitSuccess: onSubmitSuccess,
    taskType: taskType
  }, taskFormProps))));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskModal);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/Avatar.js":
/*!**************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/Avatar.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/avatar */ "./src/components/avatar/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file avatar component
 * @author Box
 */



class Avatar extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      avatarUrl: null
    });

    _defineProperty(this, "getAvatarUrlHandler", avatarUrl => {
      this.setState({
        avatarUrl
      });
    });
  }

  /**
   * Gets the avatar URL for the user from the getAvatarUrl prop
   *
   * @return {Promise<?string>} Promise which resolve with the avatar url string
   */
  getAvatarUrl() {
    var {
      user = {},
      getAvatarUrl
    } = this.props;
    var {
      avatar_url = null,
      id
    } = user;
    var avatarPromise = id && getAvatarUrl ? getAvatarUrl("".concat(id)) : Promise.resolve(avatar_url);
    return avatarPromise.then(this.getAvatarUrlHandler);
  }

  componentDidMount() {
    this.getAvatarUrl();
  }

  render() {
    var {
      user,
      className
    } = this.props;
    var {
      avatarUrl
    } = this.state;
    var {
      id,
      name
    } = user;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      avatarUrl: avatarUrl,
      className: className,
      id: id,
      name: name
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/ActiveState.js":
/*!*********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/ActiveState.js ***!
  \*********************************************************************************/
/*! exports provided: ActiveStateComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveStateComponent", function() { return ActiveState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_activity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-activity */ "./src/elements/content-sidebar/activity-feed/app-activity/index.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comment */ "./src/elements/content-sidebar/activity-feed/comment/index.js");
/* harmony import */ var _task_new__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task-new */ "./src/elements/content-sidebar/activity-feed/task-new/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../version */ "./src/elements/content-sidebar/activity-feed/version/index.js");
/* harmony import */ var _withErrorHandling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../withErrorHandling */ "./src/elements/content-sidebar/withErrorHandling.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Active state component for Activity Feed
 */









var ActiveState = (_ref) => {
  var {
    activeFeedEntryId,
    activeFeedEntryType,
    activeFeedItemRef,
    approverSelectorContacts,
    currentUser,
    items,
    mentionSelectorContacts,
    getMentionWithQuery,
    onAppActivityDelete,
    onCommentDelete,
    onCommentEdit,
    onTaskDelete,
    onTaskEdit,
    onTaskAssignmentUpdate,
    onTaskModalClose,
    onVersionInfo,
    translations,
    getApproverWithQuery,
    getAvatarUrl,
    getUserProfileUrl
  } = _ref;
  var activeEntry = items.find((_ref2) => {
    var {
      id,
      type
    } = _ref2;
    return id === activeFeedEntryId && type === activeFeedEntryType;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "bcs-activity-feed-active-state"
  }, items.map(item => {
    var isFocused = item === activeEntry;
    var refValue = isFocused ? activeFeedItemRef : undefined;

    switch (item.type) {
      case 'comment':
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
          key: item.type + item.id,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-activity-feed-comment', {
            'bcs-is-focused': isFocused
          }),
          "data-testid": "comment",
          ref: refValue
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_comment__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, item, {
          currentUser: currentUser,
          getAvatarUrl: getAvatarUrl,
          getMentionWithQuery: getMentionWithQuery,
          getUserProfileUrl: getUserProfileUrl,
          mentionSelectorContacts: mentionSelectorContacts,
          onDelete: onCommentDelete,
          onEdit: onCommentEdit,
          permissions: {
            can_delete: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(item.permissions, 'can_delete', false),
            can_edit: lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(item.permissions, 'can_edit', false)
          },
          translations: translations
        })));

      case 'task':
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
          key: item.type + item.id,
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-activity-feed-task-new', {
            'bcs-is-focused': isFocused
          }),
          "data-testid": "task",
          ref: refValue
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_task_new__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, item, {
          approverSelectorContacts: approverSelectorContacts,
          currentUser: currentUser,
          getApproverWithQuery: getApproverWithQuery,
          getAvatarUrl: getAvatarUrl,
          getUserProfileUrl: getUserProfileUrl,
          onAssignmentUpdate: onTaskAssignmentUpdate,
          onDelete: onTaskDelete,
          onEdit: onTaskEdit,
          onModalClose: onTaskModalClose,
          translations: translations
        })));

      case 'file_version':
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
          key: item.type + item.id,
          className: "bcs-version-item",
          "data-testid": "version"
        }, item.versions ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_version__WEBPACK_IMPORTED_MODULE_6__["CollapsedVersion"], _extends({}, item, {
          onInfo: onVersionInfo
        })) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_version__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, item, {
          onInfo: onVersionInfo
        })));

      case 'app_activity':
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
          key: item.type + item.id,
          className: "bcs-activity-feed-app-activity",
          "data-testid": "app-activity"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_app_activity__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          currentUser: currentUser,
          onDelete: onAppActivityDelete
        }, item)));

      default:
        return null;
    }
  }));
};


/* harmony default export */ __webpack_exports__["default"] = (Object(_withErrorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(ActiveState));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.js":
/*!**********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _ActiveState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ActiveState */ "./src/elements/content-sidebar/activity-feed/activity-feed/ActiveState.js");
/* harmony import */ var _comment_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comment-form */ "./src/elements/content-sidebar/activity-feed/comment-form/index.js");
/* harmony import */ var _EmptyState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EmptyState */ "./src/elements/content-sidebar/activity-feed/activity-feed/EmptyState.js");
/* harmony import */ var _activityFeedUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./activityFeedUtils */ "./src/elements/content-sidebar/activity-feed/activity-feed/activityFeedUtils.js");
/* harmony import */ var _components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/inline-error/InlineError */ "./src/components/inline-error/InlineError.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/loading-indicator/LoadingIndicator */ "./src/components/loading-indicator/LoadingIndicator.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/activity-feed/messages.js");
/* harmony import */ var _ActivityFeed_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ActivityFeed.scss */ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.scss");
/* harmony import */ var _ActivityFeed_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ActivityFeed_scss__WEBPACK_IMPORTED_MODULE_13__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Component for Activity feed
 */















class ActivityFeed extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;

    _defineProperty(this, "state", {
      isInputOpen: false
    });

    _defineProperty(this, "activeFeedItemRef", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "isEmpty", function () {
      var {
        feedItems
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;

      if (feedItems === undefined) {
        return false;
      }

      return feedItems.length === 0 || feedItems.length === 1 && feedItems[0].type === _activityFeedUtils__WEBPACK_IMPORTED_MODULE_9__["ItemTypes"].fileVersion;
    });

    _defineProperty(this, "hasLoaded", function () {
      var {
        currentUser,
        feedItems
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;
      return currentUser !== undefined && feedItems !== undefined;
    });

    _defineProperty(this, "resetFeedScroll", () => {
      if (this.feedContainer) {
        this.feedContainer.scrollTop = this.feedContainer.scrollHeight;
      }
    });

    _defineProperty(this, "onKeyDown", event => {
      var {
        nativeEvent
      } = event;
      nativeEvent.stopImmediatePropagation();
    });

    _defineProperty(this, "commentFormFocusHandler", () => {
      this.resetFeedScroll();
      this.setState({
        isInputOpen: true
      });
    });

    _defineProperty(this, "commentFormCancelHandler", () => this.setState({
      isInputOpen: false
    }));

    _defineProperty(this, "commentFormSubmitHandler", () => this.setState({
      isInputOpen: false
    }));

    _defineProperty(this, "onCommentCreate", (_ref) => {
      var {
        text,
        hasMention
      } = _ref;
      var {
        onCommentCreate = lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a
      } = this.props;
      onCommentCreate(text, hasMention);
      this.commentFormSubmitHandler();
    });

    _defineProperty(this, "onTaskCreate", (_ref2) => {
      var {
        text,
        assignees,
        dueAt
      } = _ref2;
      var {
        onTaskCreate = lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a
      } = this.props;
      onTaskCreate(text, assignees, dueAt);
      this.commentFormSubmitHandler();
    });

    _defineProperty(this, "openVersionHistoryPopup", data => {
      var versionInfoHandler = this.props.onVersionHistoryClick || lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a;
      versionInfoHandler(data);
    });
  }

  componentDidMount() {
    this.resetFeedScroll();
  }

  componentDidUpdate(prevProps, prevState) {
    var {
      feedItems: prevFeedItems
    } = prevProps;
    var {
      feedItems: currFeedItems,
      activeFeedEntryId
    } = this.props;
    var {
      isInputOpen: prevIsInputOpen
    } = prevState;
    var {
      isInputOpen: currIsInputOpen
    } = this.state;
    var hasLoaded = this.hasLoaded();
    var hasMoreItems = prevFeedItems && currFeedItems && prevFeedItems.length < currFeedItems.length;
    var didLoadFeedItems = prevFeedItems === undefined && currFeedItems !== undefined;
    var hasInputOpened = currIsInputOpen !== prevIsInputOpen;

    if ((hasLoaded || hasMoreItems || didLoadFeedItems || hasInputOpened) && activeFeedEntryId === undefined) {
      this.resetFeedScroll();
    } // do the scroll only once after first fetch of feed items


    if (didLoadFeedItems) {
      this.scrollToActiveFeedItemOrErrorMessage();
    }
  }

  scrollToActiveFeedItemOrErrorMessage() {
    var {
      current: activeFeedItemRef
    } = this.activeFeedItemRef;
    var {
      activeFeedEntryId
    } = this.props; // if there is no active item, do not scroll

    if (!activeFeedEntryId) {
      return;
    } // if there was supposed to be an active feed item but the feed item does not exist
    // scroll to the bottom to show the inline error message


    if (activeFeedItemRef === null) {
      this.resetFeedScroll();
      return;
    }

    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__["scrollIntoView"])(activeFeedItemRef);
  }
  /**
   * Detects whether or not the empty state should be shown.
   * @param {object} currentUser - The user that is logged into the account
   * @param {object} feedItems - Items in the activity feed
   */


  render() {
    var {
      translations,
      approverSelectorContacts,
      mentionSelectorContacts,
      currentUser,
      isDisabled,
      getAvatarUrl,
      getUserProfileUrl,
      file,
      onAppActivityDelete,
      onCommentCreate,
      getApproverWithQuery,
      getMentionWithQuery,
      activityFeedError,
      onVersionHistoryClick,
      onCommentDelete,
      onCommentUpdate,
      onTaskDelete,
      onTaskUpdate,
      onTaskAssignmentUpdate,
      onTaskModalClose,
      feedItems,
      activeFeedEntryId,
      activeFeedEntryType
    } = this.props;
    var {
      isInputOpen
    } = this.state;
    var hasCommentPermission = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(file, 'permissions.can_comment', false);
    var showCommentForm = !!(currentUser && hasCommentPermission && onCommentCreate && feedItems);
    var isEmpty = this.isEmpty(this.props);
    var isLoading = !this.hasLoaded();
    var activeEntry = Array.isArray(feedItems) && feedItems.find((_ref3) => {
      var {
        id,
        type
      } = _ref3;
      return id === activeFeedEntryId && type === activeFeedEntryType;
    });
    var errorMessageByEntryType = {
      comment: _messages__WEBPACK_IMPORTED_MODULE_12__["default"].commentMissingError,
      task: _messages__WEBPACK_IMPORTED_MODULE_12__["default"].taskMissingError
    };
    var inlineFeedItemErrorMessage = activeFeedEntryType ? errorMessageByEntryType[activeFeedEntryType] : undefined;
    var isInlineFeedItemErrorVisible = !isLoading && activeFeedEntryType && !activeEntry;
    return (// eslint-disable-next-line
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "bcs-activity-feed",
        "data-testid": "activityfeed",
        onKeyDown: this.onKeyDown
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        ref: _ref4 => {
          this.feedContainer = _ref4;
        },
        className: "bcs-activity-feed-items-container"
      }, isLoading && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "bcs-activity-feed-loading-state"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_11__["default"], null)), isEmpty && !isLoading && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_EmptyState__WEBPACK_IMPORTED_MODULE_8__["default"], {
        showCommentMessage: showCommentForm
      }), !isEmpty && !isLoading && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ActiveState__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, activityFeedError, {
        items: Object(_activityFeedUtils__WEBPACK_IMPORTED_MODULE_9__["collapseFeedState"])(feedItems),
        isDisabled: isDisabled,
        currentUser: currentUser,
        onTaskAssignmentUpdate: onTaskAssignmentUpdate,
        onAppActivityDelete: onAppActivityDelete,
        onCommentDelete: hasCommentPermission ? onCommentDelete : lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
        onCommentEdit: hasCommentPermission ? onCommentUpdate : lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a // We don't know task edit/delete specific permissions,
        // but you must at least be able to comment to do these operations.
        ,
        onTaskDelete: hasCommentPermission ? onTaskDelete : lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
        onTaskEdit: hasCommentPermission ? onTaskUpdate : lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
        onTaskModalClose: onTaskModalClose,
        onVersionInfo: onVersionHistoryClick ? this.openVersionHistoryPopup : null,
        translations: translations,
        getAvatarUrl: getAvatarUrl,
        getUserProfileUrl: getUserProfileUrl,
        mentionSelectorContacts: mentionSelectorContacts,
        getMentionWithQuery: getMentionWithQuery,
        approverSelectorContacts: approverSelectorContacts,
        getApproverWithQuery: getApproverWithQuery,
        activeFeedEntryId: activeFeedEntryId,
        activeFeedEntryType: activeFeedEntryType,
        activeFeedItemRef: this.activeFeedItemRef
      })), isInlineFeedItemErrorVisible && inlineFeedItemErrorMessage && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_12__["default"].feedInlineErrorTitle),
        className: "bcs-feedItemInlineError"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], inlineFeedItemErrorMessage))), showCommentForm ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_comment_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onSubmit: this.resetFeedScroll,
        isDisabled: isDisabled,
        mentionSelectorContacts: mentionSelectorContacts,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('bcs-activity-feed-comment-input', {
          'bcs-is-disabled': isDisabled
        }),
        createComment: hasCommentPermission ? this.onCommentCreate : lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
        getMentionWithQuery: getMentionWithQuery,
        isOpen: isInputOpen,
        user: currentUser,
        onCancel: this.commentFormCancelHandler,
        onFocus: this.commentFormFocusHandler,
        getAvatarUrl: getAvatarUrl
      }) : null)
    );
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ActivityFeed);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.scss":
/*!************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/EmptyState.js":
/*!********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/EmptyState.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./src/elements/content-sidebar/activity-feed/icons/index.js");
/**
 * 
 * @file Component for Activity feed empty state
 */





var EmptyState = (_ref) => {
  var {
    showCommentMessage
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-activity-feed-empty-state"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-empty-state-cta"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].noActivity), showCommentMessage ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("aside", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].noActivityCommentPrompt)) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (EmptyState);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/activityFeedUtils.js":
/*!***************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/activityFeedUtils.js ***!
  \***************************************************************************************/
/*! exports provided: ItemTypes, collapseFeedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTypes", function() { return ItemTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseFeedState", function() { return collapseFeedState; });
/* harmony import */ var _common_selectors_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/selectors/version */ "./src/elements/common/selectors/version.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Activity feed utility methods
 */


var ItemTypes = {
  fileVersion: 'file_version'
};
function collapseFeedState(feedState) {
  if (!feedState) {
    return [];
  }

  return feedState.reduce((collapsedFeedState, feedItem) => {
    var previousFeedItem = collapsedFeedState.pop();

    if (!previousFeedItem) {
      return collapsedFeedState.concat([feedItem]);
    }

    if (feedItem.type === ItemTypes.fileVersion && previousFeedItem.type === ItemTypes.fileVersion && _common_selectors_version__WEBPACK_IMPORTED_MODULE_0__["default"].getVersionAction(feedItem) === _constants__WEBPACK_IMPORTED_MODULE_1__["VERSION_UPLOAD_ACTION"] && _common_selectors_version__WEBPACK_IMPORTED_MODULE_0__["default"].getVersionAction(previousFeedItem) === _constants__WEBPACK_IMPORTED_MODULE_1__["VERSION_UPLOAD_ACTION"]) {
      var {
        modified_by: tmpModifiedBy,
        versions = [previousFeedItem],
        version_start = parseInt(previousFeedItem.version_number, 10),
        version_end = parseInt(previousFeedItem.version_number, 10)
      } = previousFeedItem;
      var prevModifiedBy = tmpModifiedBy || _constants__WEBPACK_IMPORTED_MODULE_1__["PLACEHOLDER_USER"];
      var {
        modified_by: tmpCurModifiedBy,
        created_at,
        trashed_at,
        id,
        version_number
      } = feedItem;
      var parsedVersionNumber = parseInt(version_number, 10);
      var collaborators = previousFeedItem.collaborators || {
        [prevModifiedBy.id]: _objectSpread({}, prevModifiedBy)
      };
      var modifiedBy = tmpCurModifiedBy || _constants__WEBPACK_IMPORTED_MODULE_1__["PLACEHOLDER_USER"]; // add collaborators

      collaborators[modifiedBy.id] = _objectSpread({}, modifiedBy);
      return collapsedFeedState.concat([{
        collaborators,
        created_at,
        modified_by: modifiedBy,
        trashed_at,
        id,
        type: ItemTypes.fileVersion,
        version_number,
        versions: versions.concat([feedItem]),
        version_start: Math.min(version_start, parsedVersionNumber),
        version_end: Math.max(version_end, parsedVersionNumber)
      }]);
    }

    return collapsedFeedState.concat([previousFeedItem, feedItem]);
  }, []);
}

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/index.js":
/*!***************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityFeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityFeed */ "./src/elements/content-sidebar/activity-feed/activity-feed/ActivityFeed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ActivityFeed__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/activity-feed/messages.js":
/*!******************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/activity-feed/messages.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/**
 * 
 * @file i18n messages
 * @author Box
 */

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  feedInlineErrorTitle: {
    "id": "be.activitySidebar.activityFeed.feedInlineErrorTitle",
    "defaultMessage": "Error"
  },
  taskMissingError: {
    "id": "be.activitySidebar.activityFeed.taskMissingError",
    "defaultMessage": "This task no longer exists"
  },
  commentMissingError: {
    "id": "be.activitySidebar.activityFeed.commentMissingError",
    "defaultMessage": "This comment no longer exists"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/app-activity/AppActivity.js":
/*!********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/app-activity/AppActivity.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tether */ "./node_modules/react-tether/lib/react-tether.js");
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tether__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _common_delete_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/delete-confirmation */ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js");
/* harmony import */ var _common_activity_timestamp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/activity-timestamp */ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js");
/* harmony import */ var _icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../icons/general/IconTrash */ "./src/icons/general/IconTrash.js");
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/media */ "./src/components/media/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/app-activity/messages.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../styles/variables */ "./src/styles/variables.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/link */ "./src/components/link/index.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/menu */ "./src/components/menu/index.js");
/* harmony import */ var _AppActivity_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AppActivity.scss */ "./src/elements/content-sidebar/activity-feed/app-activity/AppActivity.scss");
/* harmony import */ var _AppActivity_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_AppActivity_scss__WEBPACK_IMPORTED_MODULE_14__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file AppActivity component
 */
















function mapActivityNodes(node) {
  var {
    dataset = {},
    href = '#',
    tagName,
    textContent
  } = node;

  switch (tagName) {
    case 'A':
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_link__WEBPACK_IMPORTED_MODULE_12__["Link"], {
        href: href,
        "data-resin-target": dataset.resinTarget,
        "data-resin-action": dataset.resinAction,
        key: "app_actvity_link_".concat(href),
        rel: "roreferrer noopener",
        className: "bcs-AppActivity-link",
        target: "_blank"
      }, textContent);

    default:
      return textContent;
  }
}

class AppActivity extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "parser", new DOMParser());

    _defineProperty(this, "state", {
      isConfirmingDelete: false
    });

    _defineProperty(this, "handleDeleteCancel", () => {
      this.setState({
        isConfirmingDelete: false
      });
    });

    _defineProperty(this, "handleDeleteClick", () => {
      this.setState({
        isConfirmingDelete: true
      });
    });

    _defineProperty(this, "handleDeleteConfirm", () => {
      var {
        id,
        onDelete,
        permissions
      } = this.props;
      onDelete({
        id,
        permissions
      });
    });

    _defineProperty(this, "parseActivity", () => {
      var {
        rendered_text: renderedText
      } = this.props;
      var doc = this.parser.parseFromString(renderedText, 'text/html');

      if (!doc) {
        return [];
      }

      var childNodes = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(doc, 'body.childNodes', []);
      return Array.from(childNodes);
    });
  }

  render() {
    var {
      activity_template: {
        id: templateId
      },
      app: {
        name,
        icon_url
      },
      created_at: createdAt,
      created_by: createdBy,
      currentUser,
      error,
      intl,
      isPending,
      permissions
    } = this.props;
    var canDelete = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(permissions, 'can_delete', false) || currentUser && currentUser.id === createdBy.id;
    var createdAtTimestamp = new Date(createdAt).getTime();
    var isMenuVisible = canDelete && !isPending;
    var {
      isConfirmingDelete
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-AppActivity', {
        'bcs-is-pending': isPending || error
      }),
      "data-resin-target": "loaded",
      "data-resin-feature": "appActivityCard".concat(templateId)
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_9__["default"].Figure, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      className: "bcs-AppActivity-icon",
      alt: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_10__["default"].appActivityAltIcon, {
        appActivityName: name
      }),
      src: icon_url
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
      className: "bcs-AppActivity-body"
    }, isMenuVisible && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_tether__WEBPACK_IMPORTED_MODULE_4___default.a, {
      attachment: "top right",
      className: "bcs-AppActivity-confirm",
      constraints: [{
        to: 'scrollParent',
        attachment: 'together'
      }],
      targetAttachment: "bottom right"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_9__["default"].Menu, {
      isDisabled: isConfirmingDelete
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_13__["MenuItem"], {
      onClick: this.handleDeleteClick
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: _styles_variables__WEBPACK_IMPORTED_MODULE_11__["bdlGray80"]
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_10__["default"].appActivityDeleteMenuItem))), isConfirmingDelete && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_delete_confirmation__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isOpen: isConfirmingDelete,
      message: _messages__WEBPACK_IMPORTED_MODULE_10__["default"].appActivityDeletePrompt,
      onDeleteCancel: this.handleDeleteCancel,
      onDeleteConfirm: this.handleDeleteConfirm
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("figcaption", {
      className: "bcs-AppActivity-headline"
    }, name), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_timestamp__WEBPACK_IMPORTED_MODULE_7__["default"], {
      date: createdAtTimestamp
    })), this.parseActivity().map(mapActivityNodes)));
  }

}

_defineProperty(AppActivity, "defaultProps", {
  onDelete: lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a,
  permissions: {}
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(AppActivity));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/app-activity/AppActivity.scss":
/*!**********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/app-activity/AppActivity.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/app-activity/index.js":
/*!**************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/app-activity/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppActivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppActivity */ "./src/elements/content-sidebar/activity-feed/app-activity/AppActivity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AppActivity__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/app-activity/messages.js":
/*!*****************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/app-activity/messages.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/**
 * 
 * @file i18n messages
 * @author Box
 */

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  appActivityDeleteMenuItem: {
    "id": "be.appActivity.deleteMenuItem",
    "defaultMessage": "Delete"
  },
  appActivityDeletePrompt: {
    "id": "be.appActivity.deletePrompt",
    "defaultMessage": "Are you sure you want to permanently delete this app activity?"
  },
  appActivityAltIcon: {
    "id": "be.appActivity.altIcon",
    "defaultMessage": "{appActivityName} Icon"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment-form/CommentForm.js":
/*!********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment-form/CommentForm.js ***!
  \********************************************************************************/
/*! exports provided: CommentFormUnwrapped, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentFormUnwrapped", function() { return CommentForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Avatar */ "./src/elements/content-sidebar/activity-feed/Avatar.js");
/* harmony import */ var _CommentFormControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommentFormControls */ "./src/elements/content-sidebar/activity-feed/comment-form/CommentFormControls.js");
/* harmony import */ var _components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/form-elements/draft-js-mention-selector */ "./src/components/form-elements/draft-js-mention-selector/index.js");
/* harmony import */ var _components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/form-elements/form/Form */ "./src/components/form-elements/form/Form.js");
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/media */ "./src/components/media/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/comment-form/messages.js");
/* harmony import */ var _CommentForm_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CommentForm.scss */ "./src/elements/content-sidebar/activity-feed/comment-form/CommentForm.scss");
/* harmony import */ var _CommentForm_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_CommentForm_scss__WEBPACK_IMPORTED_MODULE_10__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Component for Approval comment form
 */












class CommentForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      commentEditorState: Object(_components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_6__["createMentionSelectorState"])(this.props.tagged_message)
    });

    _defineProperty(this, "onFormValidSubmitHandler", () => {
      var {
        createComment = lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a,
        updateComment = lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a,
        onSubmit,
        entityId
      } = this.props;
      var {
        text,
        hasMention
      } = this.getFormattedCommentText();

      if (!text) {
        return;
      }

      if (entityId) {
        updateComment({
          id: entityId,
          text,
          hasMention
        });
      } else {
        createComment({
          text,
          hasMention
        });
      }

      if (onSubmit) {
        onSubmit();
      }

      this.setState({
        commentEditorState: Object(_components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_6__["createMentionSelectorState"])()
      });
    });

    _defineProperty(this, "onMentionSelectorChangeHandler", nextEditorState => this.setState({
      commentEditorState: nextEditorState
    }));

    _defineProperty(this, "getFormattedCommentText", () => {
      var {
        commentEditorState
      } = this.state;
      var contentState = commentEditorState.getCurrentContent();
      var blockMap = contentState.getBlockMap();
      var resultStringArr = []; // The API needs to explicitly know if a message contains a mention.

      var hasMention = false; // For all ContentBlocks in the ContentState:

      blockMap.forEach(block => {
        var text = block.getText();
        var blockMapStringArr = []; // Break down the ContentBlock into ranges

        block.findEntityRanges(() => true, (start, end) => {
          var entityKey = block.getEntityAt(start); // If the range is an Entity, format its text eg "@[1:Username]"
          // Otherwise append its text to the block result as-is

          if (entityKey) {
            var entity = contentState.getEntity(entityKey);
            var stringToAdd = "@[".concat(entity.getData().id, ":").concat(text.substring(start + 1, end), "]");
            blockMapStringArr.push(stringToAdd);
            hasMention = true;
          } else {
            blockMapStringArr.push(text.substring(start, end));
          }
        });
        resultStringArr.push(blockMapStringArr.join(''));
      }); // Concatenate the array of block strings with newlines
      // (Each block represents a paragraph)

      return {
        text: resultStringArr.join('\n'),
        hasMention
      };
    });
  }

  componentDidUpdate(_ref) {
    var {
      isOpen: prevIsOpen
    } = _ref;
    var {
      isOpen
    } = this.props;

    if (isOpen !== prevIsOpen && !isOpen) {
      this.setState({
        commentEditorState: Object(_components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_6__["createMentionSelectorState"])()
      });
    }
  }

  render() {
    var {
      className,
      getMentionWithQuery,
      intl: {
        formatMessage
      },
      isDisabled,
      isOpen,
      mentionSelectorContacts = [],
      onCancel,
      onFocus,
      user,
      isEditing,
      tagged_message,
      getAvatarUrl
    } = this.props;
    var {
      commentEditorState
    } = this.state;
    var inputContainerClassNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()('bcs-CommentForm', className, {
      'bcs-is-open': isOpen
    });
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: inputContainerClassNames
    }, !isEditing && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_8__["default"].Figure, {
      className: "bcs-CommentForm-avatar"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      getAvatarUrl: getAvatarUrl,
      user: user
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_8__["default"].Body, {
      className: "bcs-CommentForm-body",
      "data-testid": "bcs-CommentForm-body"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onValidSubmit: this.onFormValidSubmitHandler
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_form_elements_draft_js_mention_selector__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "bcs-CommentForm-input",
      contacts: isOpen ? mentionSelectorContacts : [],
      editorState: commentEditorState,
      hideLabel: true,
      isDisabled: isDisabled,
      isRequired: isOpen,
      name: "commentText",
      label: "Comment",
      onChange: this.onMentionSelectorChangeHandler,
      onFocus: onFocus,
      onMention: getMentionWithQuery,
      placeholder: tagged_message ? undefined : formatMessage(_messages__WEBPACK_IMPORTED_MODULE_9__["default"].commentWrite),
      validateOnBlur: false
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("aside", {
      className: "bcs-CommentForm-tip"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].atMentionTip)), isOpen && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CommentFormControls__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onCancel: onCancel
    }))));
  }

} // For testing only


_defineProperty(CommentForm, "defaultProps", {
  isOpen: false
});


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(CommentForm));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment-form/CommentForm.scss":
/*!**********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment-form/CommentForm.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment-form/CommentFormControls.js":
/*!****************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment-form/CommentFormControls.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/button/Button */ "./src/components/button/Button.js");
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/primary-button/PrimaryButton */ "./src/components/primary-button/PrimaryButton.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/comment-form/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/**
 * 
 * @file Comment Input Controls components for CommentForm
 */







var CommentInputControls = (_ref) => {
  var {
    onCancel
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-CommentFormControls"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["ACTIVITY_TARGETS"].APPROVAL_FORM_CANCEL,
    onClick: onCancel,
    type: "button"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_4__["default"].commentCancel)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["ACTIVITY_TARGETS"].APPROVAL_FORM_POST
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_4__["default"].commentPost)));
};

/* harmony default export */ __webpack_exports__["default"] = (CommentInputControls);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment-form/index.js":
/*!**************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment-form/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentForm */ "./src/elements/content-sidebar/activity-feed/comment-form/CommentForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CommentForm__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment-form/messages.js":
/*!*****************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment-form/messages.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/**
 * 
 * @file i18n messages
 * @author Box
 */

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  commentCancel: {
    "id": "be.contentSidebar.activityFeed.commentForm.commentCancel",
    "defaultMessage": "Cancel"
  },
  commentPost: {
    "id": "be.contentSidebar.activityFeed.commentForm.commentPost",
    "defaultMessage": "Post"
  },
  commentWrite: {
    "id": "be.contentSidebar.activityFeed.commentForm.commentWrite",
    "defaultMessage": "Write a comment"
  },
  approvalAddAssignee: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalAddAssignee",
    "defaultMessage": "Add an assignee"
  },
  approvalAddTask: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalAddTask",
    "defaultMessage": "Add Task"
  },
  approvalAddTaskTooltip: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalAddTaskTooltip",
    "defaultMessage": "Assigning a task to someone will send them a notification with the message in the comment box and allow them to approve or deny."
  },
  approvalAssignees: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalAssignees",
    "defaultMessage": "Assignees"
  },
  approvalDueDate: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalDueDate",
    "defaultMessage": "Due Date"
  },
  approvalSelectDate: {
    "id": "be.contentSidebar.activityFeed.commentForm.approvalSelectDate",
    "defaultMessage": "Select a date"
  },
  atMentionTip: {
    "id": "be.contentSidebar.activityFeed.commentForm.atMentionTip",
    "defaultMessage": "@mention users to notify them."
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment/Comment.js":
/*!***********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment/Comment.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tether */ "./node_modules/react-tether/lib/react-tether.js");
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tether__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Avatar */ "./src/elements/content-sidebar/activity-feed/Avatar.js");
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/media */ "./src/components/media/index.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/menu */ "./src/components/menu/index.js");
/* harmony import */ var _icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../icons/general/IconTrash */ "./src/icons/general/IconTrash.js");
/* harmony import */ var _icons_general_IconPencil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../icons/general/IconPencil */ "./src/icons/general/IconPencil.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _common_delete_confirmation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/delete-confirmation */ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js");
/* harmony import */ var _common_activity_timestamp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/activity-timestamp */ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js");
/* harmony import */ var _common_user_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/user-link */ "./src/elements/content-sidebar/activity-feed/common/user-link/index.js");
/* harmony import */ var _common_activity_error__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/activity-error */ "./src/elements/content-sidebar/activity-feed/common/activity-error/index.js");
/* harmony import */ var _common_activity_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/activity-message */ "./src/elements/content-sidebar/activity-feed/common/activity-message/index.js");
/* harmony import */ var _comment_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../comment-form */ "./src/elements/content-sidebar/activity-feed/comment-form/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../styles/variables */ "./src/styles/variables.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/comment/messages.js");
/* harmony import */ var _Comment_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Comment.scss */ "./src/elements/content-sidebar/activity-feed/comment/Comment.scss");
/* harmony import */ var _Comment_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_Comment_scss__WEBPACK_IMPORTED_MODULE_20__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























class Comment extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isConfirmingDelete: false,
      isEditing: false,
      isInputOpen: false
    });

    _defineProperty(this, "handleDeleteConfirm", () => {
      var {
        id,
        onDelete,
        permissions
      } = this.props;
      onDelete({
        id,
        permissions
      });
    });

    _defineProperty(this, "handleDeleteCancel", () => {
      this.setState({
        isConfirmingDelete: false
      });
    });

    _defineProperty(this, "handleDeleteClick", () => {
      this.setState({
        isConfirmingDelete: true
      });
    });

    _defineProperty(this, "handleEditClick", () => {
      this.setState({
        isEditing: true,
        isInputOpen: true
      });
    });

    _defineProperty(this, "commentFormFocusHandler", () => this.setState({
      isInputOpen: true
    }));

    _defineProperty(this, "commentFormCancelHandler", () => this.setState({
      isInputOpen: false,
      isEditing: false
    }));

    _defineProperty(this, "commentFormSubmitHandler", () => this.setState({
      isInputOpen: false,
      isEditing: false
    }));

    _defineProperty(this, "handleUpdate", (_ref) => {
      var {
        id,
        text,
        hasMention
      } = _ref;
      var {
        onEdit,
        permissions
      } = this.props;
      onEdit(id, text, hasMention, permissions);
      this.commentFormSubmitHandler();
    });
  }

  render() {
    var {
      created_by,
      created_at,
      permissions = {},
      id,
      isPending,
      error,
      tagged_message = '',
      translatedTaggedMessage,
      translations,
      currentUser,
      isDisabled,
      getAvatarUrl,
      getUserProfileUrl,
      getMentionWithQuery,
      mentionSelectorContacts,
      onEdit
    } = this.props;
    var {
      isConfirmingDelete,
      isEditing,
      isInputOpen
    } = this.state;
    var createdAtTimestamp = new Date(created_at).getTime();
    var createdByUser = created_by || _constants__WEBPACK_IMPORTED_MODULE_18__["PLACEHOLDER_USER"];
    var canEdit = onEdit !== lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a && permissions.can_edit;
    var canDelete = permissions.can_delete;
    var isMenuVisible = (canDelete || canEdit) && !isPending;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-Comment"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-Comment-media', {
        'bcs-is-pending': isPending || error
      })
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_6__["default"].Figure, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      getAvatarUrl: getAvatarUrl,
      user: createdByUser
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_6__["default"].Body, null, isMenuVisible && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_tether__WEBPACK_IMPORTED_MODULE_4___default.a, {
      attachment: "top right",
      className: "bcs-Comment-deleteConfirmationModal",
      constraints: [{
        to: 'scrollParent',
        attachment: 'together'
      }],
      targetAttachment: "bottom right"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_6__["default"].Menu, {
      isDisabled: isConfirmingDelete,
      "data-testid": "comment-actions-menu",
      menuProps: {
        'data-resin-component': _common_interactionTargets__WEBPACK_IMPORTED_MODULE_10__["ACTIVITY_TARGETS"].COMMENT_OPTIONS
      }
    }, canEdit && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_10__["ACTIVITY_TARGETS"].COMMENT_OPTIONS_EDIT,
      "data-testid": "edit-comment",
      onClick: this.handleEditClick
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconPencil__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: _styles_variables__WEBPACK_IMPORTED_MODULE_17__["bdlGray80"]
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_19__["default"].commentEditMenuItem)), canDelete && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_10__["ACTIVITY_TARGETS"].COMMENT_OPTIONS_DELETE,
      "data-testid": "delete-comment",
      onClick: this.handleDeleteClick
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: _styles_variables__WEBPACK_IMPORTED_MODULE_17__["bdlGray80"]
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_19__["default"].commentDeleteMenuItem))), isConfirmingDelete && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_delete_confirmation__WEBPACK_IMPORTED_MODULE_11__["default"], {
      "data-resin-component": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_10__["ACTIVITY_TARGETS"].COMMENT_OPTIONS,
      isOpen: isConfirmingDelete,
      message: _messages__WEBPACK_IMPORTED_MODULE_19__["default"].commentDeletePrompt,
      onDeleteCancel: this.handleDeleteCancel,
      onDeleteConfirm: this.handleDeleteConfirm
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-Comment-headline"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_user_link__WEBPACK_IMPORTED_MODULE_13__["default"], {
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_10__["ACTIVITY_TARGETS"].PROFILE,
      id: createdByUser.id,
      name: createdByUser.name,
      getUserProfileUrl: getUserProfileUrl
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_timestamp__WEBPACK_IMPORTED_MODULE_12__["default"], {
      date: createdAtTimestamp
    })), isEditing ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_comment_form__WEBPACK_IMPORTED_MODULE_16__["default"], {
      isDisabled: isDisabled,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-Comment-editor', {
        'bcs-is-disabled': isDisabled
      }),
      updateComment: this.handleUpdate,
      isOpen: isInputOpen,
      user: currentUser,
      onCancel: this.commentFormCancelHandler,
      onFocus: this.commentFormFocusHandler,
      isEditing: isEditing,
      entityId: id,
      tagged_message: tagged_message,
      getAvatarUrl: getAvatarUrl,
      mentionSelectorContacts: mentionSelectorContacts,
      getMentionWithQuery: getMentionWithQuery
    }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_message__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({
      id: id,
      tagged_message: tagged_message,
      translatedTaggedMessage: translatedTaggedMessage
    }, translations, {
      translationFailed: error ? true : null,
      getUserProfileUrl: getUserProfileUrl
    })))), error ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_error__WEBPACK_IMPORTED_MODULE_14__["default"], error) : null);
  }

}

_defineProperty(Comment, "defaultProps", {
  onDelete: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
  onEdit: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a
});

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment/Comment.scss":
/*!*************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment/Comment.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment/index.js":
/*!*********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment */ "./src/elements/content-sidebar/activity-feed/comment/Comment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Comment__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/comment/messages.js":
/*!************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/comment/messages.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/**
 * 
 * @file i18n messages
 * @author Box
 */

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  commentDeleteMenuItem: {
    "id": "be.contentSidebar.activityFeed.comment.commentDeleteMenuItem",
    "defaultMessage": "Delete"
  },
  commentDeletePrompt: {
    "id": "be.contentSidebar.activityFeed.comment.commentDeletePrompt",
    "defaultMessage": "Are you sure you want to permanently delete this comment?"
  },
  commentEditMenuItem: {
    "id": "be.contentSidebar.activityFeed.comment.commentEditMenuItem",
    "defaultMessage": "Modify"
  },
  commentPostedFullDateTime: {
    "id": "be.contentSidebar.activityFeed.comment.commentPostedFullDateTime",
    "defaultMessage": "{time, date, full} at {time, time, short}"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.js":
/*!*******************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_inline_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/inline-error */ "./src/components/inline-error/index.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _ActivityError_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActivityError.scss */ "./src/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.scss");
/* harmony import */ var _ActivityError_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ActivityError_scss__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var ActivityError = (_ref) => {
  var {
    action,
    message,
    title,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["action", "message", "title", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_inline_error__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bcs-ActivityError', className),
    title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, title, rest))
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], message)), action ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "bcs-ActivityError-action lnk",
    onClick: action.onAction,
    type: "button"
  }, action.text) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ActivityError);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.scss":
/*!*********************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-error/index.js":
/*!***********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-error/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityError */ "./src/elements/content-sidebar/activity-feed/common/activity-error/ActivityError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ActivityError__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.js":
/*!***********************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_loading_indicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/loading-indicator */ "./src/components/loading-indicator/index.js");
/* harmony import */ var _utils_formatTaggedMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatTaggedMessage */ "./src/elements/content-sidebar/activity-feed/utils/formatTaggedMessage.js");
/* harmony import */ var _ShowOriginalButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShowOriginalButton */ "./src/elements/content-sidebar/activity-feed/common/activity-message/ShowOriginalButton.js");
/* harmony import */ var _TranslateButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TranslateButton */ "./src/elements/content-sidebar/activity-feed/common/activity-message/TranslateButton.js");
/* harmony import */ var _ActivityMessage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ActivityMessage.scss */ "./src/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.scss");
/* harmony import */ var _ActivityMessage_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ActivityMessage_scss__WEBPACK_IMPORTED_MODULE_6__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class ActivityMessage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isLoading: false,
      isTranslation: false
    });

    _defineProperty(this, "handleTranslate", event => {
      var {
        id,
        tagged_message,
        onTranslate = lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a,
        translatedTaggedMessage
      } = this.props;

      if (!translatedTaggedMessage) {
        this.setState({
          isLoading: true
        });
        onTranslate({
          id,
          tagged_message
        });
      }

      this.setState({
        isTranslation: true
      });
      event.preventDefault();
    });

    _defineProperty(this, "handleShowOriginal", event => {
      this.setState({
        isTranslation: false
      });
      event.preventDefault();
    });
  }

  componentDidUpdate(prevProps) {
    var {
      translatedTaggedMessage,
      translationFailed
    } = this.props;
    var {
      translatedTaggedMessage: prevTaggedMessage,
      translationFailed: prevTranslationFailed
    } = prevProps;

    if (prevTaggedMessage === translatedTaggedMessage || prevTranslationFailed === translationFailed) {
      return;
    }

    if (translatedTaggedMessage || translationFailed) {
      this.setState({
        isLoading: false
      });
    }
  }

  getButton(isTranslation) {
    var button = null;

    if (isTranslation) {
      button = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ShowOriginalButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        handleShowOriginal: this.handleShowOriginal
      });
    } else {
      button = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TranslateButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        handleTranslate: this.handleTranslate
      });
    }

    return button;
  }

  render() {
    var {
      id,
      tagged_message,
      translatedTaggedMessage,
      translationEnabled,
      getUserProfileUrl
    } = this.props;
    var {
      isLoading,
      isTranslation
    } = this.state;
    var commentToDisplay = translationEnabled && isTranslation && translatedTaggedMessage ? translatedTaggedMessage : tagged_message;
    return isLoading ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-ActivityMessageLoading"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "small"
    })) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-ActivityMessage"
    }, Object(_utils_formatTaggedMessage__WEBPACK_IMPORTED_MODULE_3__["default"])(commentToDisplay, id, false, getUserProfileUrl), translationEnabled ? this.getButton(isTranslation) : null);
  }

}

_defineProperty(ActivityMessage, "defaultProps", {
  translationEnabled: false
});

/* harmony default export */ __webpack_exports__["default"] = (ActivityMessage);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.scss":
/*!*************************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-message/ShowOriginalButton.js":
/*!**************************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-message/ShowOriginalButton.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/common/activity-message/messages.js");
/**
 * 
 * @file Show Original button component used by Comment Text component
 */





var ShowOriginalButton = (_ref) => {
  var {
    handleShowOriginal
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bcs-ActivityMessage-translate",
    onClick: handleShowOriginal
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].activityMessageShowOriginal));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowOriginalButton);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-message/TranslateButton.js":
/*!***********************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-message/TranslateButton.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/common/activity-message/messages.js");
/**
 * 
 * @file Translate button component used by Comment Text component
 */





var TranslateButton = (_ref) => {
  var {
    handleTranslate
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bcs-ActivityMessage-translate",
    onClick: handleTranslate
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].activityMessageTranslate));
};

/* harmony default export */ __webpack_exports__["default"] = (TranslateButton);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-message/index.js":
/*!*************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-message/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityMessage */ "./src/elements/content-sidebar/activity-feed/common/activity-message/ActivityMessage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ActivityMessage__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-message/messages.js":
/*!****************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-message/messages.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  activityMessageShowOriginal: {
    "id": "be.contentSidebar.activityFeed.commmon.showOriginalMessage",
    "defaultMessage": "Show Original"
  },
  activityMessageTranslate: {
    "id": "be.contentSidebar.activityFeed.common.translateMessage",
    "defaultMessage": "Translate"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.js":
/*!***************************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/tooltip */ "./src/components/tooltip/index.js");
/* harmony import */ var _components_time_ReadableTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/time/ReadableTime */ "./src/components/time/ReadableTime.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/messages.js");
/* harmony import */ var _ActivityTimestamp_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActivityTimestamp.scss */ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.scss");
/* harmony import */ var _ActivityTimestamp_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ActivityTimestamp_scss__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var ActivityTimestamp = (_ref) => {
  var {
    date
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_4__["default"].fullDateTime, {
      values: {
        time: date
      }
    }))
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", {
    className: "bcs-ActivityTimestamp"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_time_ReadableTime__WEBPACK_IMPORTED_MODULE_3__["default"], {
    relativeThreshold: 0,
    alwaysShowTime: true,
    timestamp: date
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ActivityTimestamp);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js":
/*!***************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityTimestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityTimestamp */ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/ActivityTimestamp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ActivityTimestamp__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/messages.js":
/*!******************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/activity-timestamp/messages.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  fullDateTime: {
    "id": "be.activityFeed.fullDateTime",
    "defaultMessage": "{time, date, full} at {time, time, short}"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.js":
/*!*****************************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/button */ "./src/components/button/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _components_primary_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/primary-button */ "./src/components/primary-button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../constants */ "./src/constants.js");
/* harmony import */ var _components_flyout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/flyout */ "./src/components/flyout/index.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _DeleteConfirmation_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DeleteConfirmation.scss */ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.scss");
/* harmony import */ var _DeleteConfirmation_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_DeleteConfirmation_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Comment component
 */










class DeleteConfirmation extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onKeyDown", event => {
      var {
        nativeEvent
      } = event;
      var {
        isOpen,
        onDeleteCancel
      } = this.props;
      nativeEvent.stopImmediatePropagation();

      switch (event.key) {
        case _constants__WEBPACK_IMPORTED_MODULE_5__["KEYS"].escape:
          event.stopPropagation();
          event.preventDefault();

          if (isOpen) {
            onDeleteCancel();
          }

          break;

        default:
          break;
      }
    });
  }

  render() {
    var _this$props = this.props,
        {
      message,
      onDeleteCancel,
      onDeleteConfirm
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["message", "onDeleteCancel", "onDeleteConfirm"]);

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_flyout__WEBPACK_IMPORTED_MODULE_6__["Overlay"], _extends({
      className: "be-modal bcs-DeleteConfirmation",
      onKeyDown: this.onKeyDown,
      role: "dialog",
      shouldDefaultFocus: true,
      shouldOutlineFocus: false
    }, rest), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-DeleteConfirmation-promptMessage"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], message)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "bcs-DeleteConfirmation-cancel",
      onClick: onDeleteCancel,
      type: "button",
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["ACTIVITY_TARGETS"].INLINE_DELETE_CANCEL
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].cancel)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_primary_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "bcs-DeleteConfirmation-delete",
      onClick: onDeleteConfirm,
      type: "button",
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["ACTIVITY_TARGETS"].INLINE_DELETE_CONFIRM
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].delete))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DeleteConfirmation);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js":
/*!****************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteConfirmation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteConfirmation */ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/DeleteConfirmation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DeleteConfirmation__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/user-link/UserLink.js":
/*!*********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/user-link/UserLink.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/link */ "./src/components/link/index.js");
/* harmony import */ var _UserLink_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserLink.scss */ "./src/elements/content-sidebar/activity-feed/common/user-link/UserLink.scss");
/* harmony import */ var _UserLink_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_UserLink_scss__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class UserLink extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {});

    _defineProperty(this, "getProfileUrlHandler", profileUrl => {
      this.setState({
        profileUrl
      });
    });
  }

  /**
   * Gets the profile URL for the user from the getUserProfileUrl prop
   *
   * @return {Promise} a promise which resolves with the profileUrl string
   */
  getUserProfileUrl() {
    var {
      id,
      getUserProfileUrl
    } = this.props;

    if (!getUserProfileUrl) {
      return Promise.resolve();
    }

    return getUserProfileUrl(id).then(this.getProfileUrlHandler);
  }

  componentDidMount() {
    this.getUserProfileUrl();
  }

  render() {
    var _this$props = this.props,
        {
      name,
      getUserProfileUrl,
      className
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["name", "getUserProfileUrl", "className"]);

    var {
      profileUrl
    } = this.state;
    return profileUrl ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-UserLink', className)
    }, rest, {
      href: profileUrl
    }), name) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", rest, name);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserLink);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/user-link/UserLink.scss":
/*!***********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/user-link/UserLink.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/common/user-link/index.js":
/*!******************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/common/user-link/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLink */ "./src/elements/content-sidebar/activity-feed/common/user-link/UserLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _UserLink__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/icons/IconActivityFeedEmptyState.js":
/*!****************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/icons/IconActivityFeedEmptyState.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../icons/accessible-svg */ "./src/icons/accessible-svg/index.js");
/**
 * 
 * @file IconActivityFeedEmptyState icon component
 */



var IconActivityFeedEmptyState = (_ref) => {
  var {
    className = '',
    width = 90,
    height = 90
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bcs-activity-feed-empty-state-illustration ".concat(className),
    height: height,
    viewBox: "0 0 90 90",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M12.06 40.71v-.4a.31.31 0 0 0-.31-.31.31.31 0 0 0-.31.31v.4a.51.51 0 0 0-.23.23h-.4a.31.31 0 0 0-.31.31.31.31 0 0 0 .31.31h.4a.51.51 0 0 0 .23.23v.4a.31.31 0 0 0 .62 0v-.41a.57.57 0 0 0 .23-.23h.4a.31.31 0 0 0 .31-.31.31.31 0 0 0-.31-.31h-.4a.51.51 0 0 0-.23-.22zm74 25v-.4a.31.31 0 0 0-.31-.31.31.31 0 0 0-.31.31v.4a.51.51 0 0 0-.23.23h-.4a.31.31 0 0 0-.31.31.31.31 0 0 0 .31.31h.4a.61.61 0 0 0 .22.23v.4a.32.32 0 0 0 .32.31.31.31 0 0 0 .31-.3v-.41a.57.57 0 0 0 .23-.23h.4a.31.31 0 0 0 0-.62h-.4a.51.51 0 0 0-.23-.23zm-4-7v-.4a.31.31 0 0 0-.31-.31.31.31 0 0 0-.31.31v.4a.51.51 0 0 0-.23.23h-.4a.31.31 0 0 0-.31.31.31.31 0 0 0 .31.31h.4a.51.51 0 0 0 .23.23v.4a.31.31 0 0 0 .62 0v-.41a.63.63 0 0 0 .23-.23h.4a.31.31 0 0 0 0-.62h-.4a.51.51 0 0 0-.23-.23zM5.5 48.13v-.64A.5.5 0 0 0 5 47a.49.49 0 0 0-.5.49v.64a1.09 1.09 0 0 0-.37.37h-.64A.5.5 0 0 0 3 49a.49.49 0 0 0 .49.5h.64a1.09 1.09 0 0 0 .37.37v.64a.5.5 0 0 0 1 0v-.63a1.09 1.09 0 0 0 .37-.37h.64A.5.5 0 0 0 7 49a.49.49 0 0 0-.49-.5h-.64a1.09 1.09 0 0 0-.37-.37zm67 32v-.64A.5.5 0 0 0 72 79a.49.49 0 0 0-.5.49v.64a1.09 1.09 0 0 0-.37.37h-.64a.5.5 0 0 0-.49.5.49.49 0 0 0 .49.5h.64a1.09 1.09 0 0 0 .37.37v.64a.5.5 0 0 0 1 0v-.63a1 1 0 0 0 .37-.36h.64A.5.5 0 0 0 74 81a.49.49 0 0 0-.49-.5h-.64a1.09 1.09 0 0 0-.37-.37zm-63-56v-.64A.5.5 0 0 0 9 23a.49.49 0 0 0-.5.49v.64a1.09 1.09 0 0 0-.37.37h-.64A.5.5 0 0 0 7 25a.49.49 0 0 0 .49.5h.64a1.09 1.09 0 0 0 .37.37v.64a.5.5 0 0 0 1 0v-.63a1 1 0 0 0 .37-.36h.64A.5.5 0 0 0 11 25a.49.49 0 0 0-.49-.5h-.64a1.09 1.09 0 0 0-.37-.37zm16-20v-.64A.5.5 0 0 0 25 3a.49.49 0 0 0-.5.49v.64a1.09 1.09 0 0 0-.37.37h-.64A.5.5 0 0 0 23 5a.49.49 0 0 0 .49.5h.64a1.09 1.09 0 0 0 .37.37v.64a.5.5 0 0 0 1 0v-.65a1 1 0 0 0 .37-.36h.64A.5.5 0 0 0 27 5a.49.49 0 0 0-.49-.5h-.64a1.09 1.09 0 0 0-.37-.37zM44.46 27.21a3.12 3.12 0 1 1 3.1-3.11 3.11 3.11 0 0 1-3.1 3.11zm0-4.23a1.12 1.12 0 1 0 1.1 1.12 1.12 1.12 0 0 0-1.1-1.1zM54.28 27.2a3.11 3.11 0 1 1 3.1-3.11 3.11 3.11 0 0 1-3.1 3.11zm0-4.22a1.11 1.11 0 1 0 1.1 1.11 1.11 1.11 0 0 0-1.1-1.09zM64.09 27.2a3.11 3.11 0 1 1 3.11-3.11 3.1 3.1 0 0 1-3.11 3.11zm0-4.22a1.11 1.11 0 1 0 1.11 1.11A1.11 1.11 0 0 0 64.09 23z",
    fill: "#0061d5"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M60.75 39.24c8 0 14.57-6.92 14.57-15.46S68.8 8.33 60.75 8.33c-1.35 0 9.78 5.07 9.27 15.45-.69 14.11-14.18 15.46-9.27 15.46zM21.73 59v-.7s2.5 2.46 5.34 1.68c1.57-.42 4.23 2.16 6.83 1.91 2.13-.21 4.72-2.7 4.72-2.7v2.05a4 4 0 0 1-4 4h-8.89a4 4 0 0 1-4-4V59z",
    fill: "#1891d3",
    opacity: ".1"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M54.45 3.4c-13.89 0-24 8.69-24 20.66a21.19 21.19 0 0 0 .17 2.41h-4a8.15 8.15 0 0 0-8.13 8v14a1 1 0 0 0-.45.81v1.22h-1.53v-2.14a1 1 0 0 0-1-1 4.1 4.1 0 0 0-1 8.08v5.81a11.67 11.67 0 0 0 11.66 11.66h1.23v7.34h-4.34a1 1 0 0 0-1 1v4.44a1 1 0 0 0 1 1h14.22a1 1 0 0 0 1-1v-4.44a1 1 0 0 0-1-1H33v-7.34h1.23a11.67 11.67 0 0 0 11.61-11.66v-5.81a4.1 4.1 0 0 0-1-8.08 1 1 0 0 0-1 1v2.11h-1.56v-1.22a1 1 0 0 0-.44-.81v-6.72A24.69 24.69 0 0 0 55 43.44a4.56 4.56 0 0 1-.53 1.25 6.88 6.88 0 0 0-1 3.1 1.21 1.21 0 0 0 1 1.24h.17c2 0 7.65-4.38 9.14-6.55a18.42 18.42 0 0 0 14.64-18.42c0-11.97-10.08-20.66-23.97-20.66zM36.28 84.69H24.06v-2.44h12.22zm-6.88-4.44v-7.33H31v7.33zm-2.75-51.78h7a6.16 6.16 0 0 1 6 5h-6a1 1 0 1 0 0 2h6.11v3h-6.03a1 1 0 1 0 0 2h6.11v3h-6.11a1 1 0 1 0 0 2h6.11v2.78H20.51v-2.78h6.11a1 1 0 1 0 0-2h-6.11v-3h6.11a1 1 0 1 0 0-2h-6.11v-3h6.11a1 1 0 1 0 0-2h-6a6.16 6.16 0 0 1 6.03-5zm13.63 21.78v2.44H20.06v-2.44zm-19.77 4.44h19.33v5.64a6.15 6.15 0 0 1-6.15 6.14h-7a6.14 6.14 0 0 1-6.14-6.14zm-7.11-3.22a2.12 2.12 0 0 1 1.11-1.86v3.72a2.12 2.12 0 0 1-1.11-1.86zm33.55 0a2.12 2.12 0 0 1-1.11 1.86v-3.72A2.12 2.12 0 0 1 47 51.47zm-3.11 1v8.78a9.67 9.67 0 0 1-9.66 9.66h-8a9.67 9.67 0 0 1-9.66-9.66v-8.78h1.55v1.22a1 1 0 0 0 .45.81v5.83a8.15 8.15 0 0 0 8.14 8.14h7a8.16 8.16 0 0 0 8.15-8.14V54.5a1 1 0 0 0 .44-.81v-1.22zM63 40.6a1.05 1.05 0 0 0-.79.68c-.33.94-4.37 4.16-6.48 5.34.14-.34.31-.68.48-1 .57-1.09 1.34-2.59.11-3.95a1 1 0 0 0-.74-.32h-.15a22.65 22.65 0 0 1-13.59-1.85v-4.88-.12a8.15 8.15 0 0 0-8.14-8h-1a17.29 17.29 0 0 1-.19-2.41c0-11 9-18.66 22-18.66s22 7.67 22 18.66A16.24 16.24 0 0 1 63 40.6z",
    fill: "#0061d5"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconActivityFeedEmptyState);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/icons/index.js":
/*!*******************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/icons/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconActivityFeedEmptyState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconActivityFeedEmptyState */ "./src/elements/content-sidebar/activity-feed/icons/IconActivityFeedEmptyState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _IconActivityFeedEmptyState__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/index.js":
/*!*************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activity_feed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity-feed */ "./src/elements/content-sidebar/activity-feed/activity-feed/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _activity_feed__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-form/TaskError.js":
/*!***************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-form/TaskError.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-form/messages.js");
/* harmony import */ var _api_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/messages */ "./src/api/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _components_inline_notice_InlineNotice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/inline-notice/InlineNotice */ "./src/components/inline-notice/InlineNotice.js");
/**
 * 
 * @file Component for in-modal error messages for tasks
 */








var TaskError = (_ref) => {
  var {
    editMode,
    error,
    taskType
  } = _ref;
  var isEditMode = editMode === _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_EDIT_MODE_EDIT"];
  var isForbiddenErrorOnEdit = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(error, 'status') === 403 && isEditMode;
  var errorTitle = isForbiddenErrorOnEdit ? _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskEditWarningTitle : _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskCreateErrorTitle;
  var errorMessage = isEditMode ? _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskUpdateErrorMessage : _api_messages__WEBPACK_IMPORTED_MODULE_4__["default"].taskCreateErrorMessage;

  if (!error) {
    return null;
  } // error message changes when a forbidden operation occurs while editing a task


  if (isForbiddenErrorOnEdit) {
    switch (taskType) {
      case 'GENERAL':
        errorMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskGeneralAssigneeRemovalWarningMessage;
        break;

      case 'APPROVAL':
        errorMessage = _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskApprovalAssigneeRemovalWarningMessage;
        break;

      default:
        return null;
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_inline_notice_InlineNotice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "error",
    title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], errorTitle)
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], errorMessage));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskError);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-form/TaskForm.js":
/*!**************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-form/TaskForm.js ***!
  \**************************************************************************/
/*! exports provided: TaskFormUnwrapped, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormUnwrapped", function() { return TaskForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/messages */ "./src/common/messages.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-form/messages.js");
/* harmony import */ var _comment_form_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comment-form/messages */ "./src/elements/content-sidebar/activity-feed/comment-form/messages.js");
/* harmony import */ var _components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/form-elements/form/Form */ "./src/components/form-elements/form/Form.js");
/* harmony import */ var _components_contact_datalist_item_ContactDatalistItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/contact-datalist-item/ContactDatalistItem */ "./src/components/contact-datalist-item/ContactDatalistItem.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_date_picker_DatePicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/date-picker/DatePicker */ "./src/components/date-picker/DatePicker.js");
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/checkbox */ "./src/components/checkbox/index.js");
/* harmony import */ var _components_pill_selector_dropdown_PillSelectorDropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/pill-selector-dropdown/PillSelectorDropdown */ "./src/components/pill-selector-dropdown/PillSelectorDropdown.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/button/Button */ "./src/components/button/Button.js");
/* harmony import */ var _common_feature_checking__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/feature-checking */ "./src/elements/common/feature-checking/index.js");
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/primary-button/PrimaryButton */ "./src/components/primary-button/PrimaryButton.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _TaskError__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TaskError */ "./src/elements/content-sidebar/activity-feed/task-form/TaskError.js");
/* harmony import */ var _TaskForm_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./TaskForm.scss */ "./src/elements/content-sidebar/activity-feed/task-form/TaskForm.scss");
/* harmony import */ var _TaskForm_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_TaskForm_scss__WEBPACK_IMPORTED_MODULE_20__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Component for Approval comment form
 */






















function convertAssigneesToSelectorItems(approvers) {
  return approvers.map((_ref) => {
    var {
      target
    } = _ref;

    var newSelectorItem = _objectSpread({}, target, {
      item: {},
      value: target.id,
      text: target.name
    });

    return newSelectorItem;
  });
}

class TaskForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", this.getInitialFormState());

    _defineProperty(this, "validateForm", only => {
      this.setState(state => {
        var {
          intl
        } = this.props;
        var {
          approvers,
          message,
          approverTextInput
        } = state;
        var assigneeFieldMissingError = {
          code: 'required',
          message: intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].requiredFieldError)
        };
        var assigneeFieldInvalidError = {
          code: 'invalid',
          message: intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].invalidUserError)
        };
        var messageFieldError = {
          code: 'required',
          message: intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].requiredFieldError)
        };
        var formValidityState = {
          taskAssignees: (approverTextInput.length ? assigneeFieldInvalidError : null) || (approvers.length ? null : assigneeFieldMissingError),
          taskName: message ? null : messageFieldError,
          taskDueDate: null
        };
        var isValid = Object.values(formValidityState).every(val => val == null);
        return {
          isValid,
          formValidityState: only ? _objectSpread({}, state.formValidityState, {
            [only]: formValidityState[only]
          }) : formValidityState
        };
      });
    });

    _defineProperty(this, "getErrorByFieldname", fieldName => {
      var {
        formValidityState
      } = this.state;
      return formValidityState[fieldName] ? formValidityState[fieldName].message : null;
    });

    _defineProperty(this, "clearForm", () => this.setState(this.getInitialFormState()));

    _defineProperty(this, "handleInvalidSubmit", () => {
      this.validateForm();
    });

    _defineProperty(this, "handleSubmitSuccess", () => {
      var {
        onSubmitSuccess
      } = this.props;

      if (onSubmitSuccess) {
        onSubmitSuccess();
      }

      this.clearForm();
      this.setState({
        isLoading: false
      });
    });

    _defineProperty(this, "handleSubmitError", e => {
      var {
        onSubmitError
      } = this.props;
      onSubmitError(e);
      this.setState({
        isLoading: false
      });
    });

    _defineProperty(this, "addResinInfo", () => {
      var {
        id,
        taskType,
        editMode
      } = this.props;
      var {
        dueDate
      } = this.state;
      var addedAssignees = this.getAddedAssignees();
      var removedAssignees = this.getRemovedAssignees();
      return {
        'data-resin-taskid': id,
        'data-resin-tasktype': taskType,
        'data-resin-isediting': editMode === _constants__WEBPACK_IMPORTED_MODULE_17__["TASK_EDIT_MODE_EDIT"],
        'data-resin-numassigneesadded': addedAssignees.length,
        'data-resin-numassigneesremoved': removedAssignees.length,
        'data-resin-assigneesadded': addedAssignees.map(assignee => assignee.target.id),
        'data-resin-assigneesremoved': removedAssignees.map(assignee => assignee.target.id),
        'data-resin-duedate': dueDate && dueDate.getTime()
      };
    });

    _defineProperty(this, "getAddedAssignees", () => {
      // Added assignees are the ones in state that weren't in the prop
      var {
        approvers
      } = this.props;
      var {
        approvers: currentApprovers
      } = this.state;
      var approverIds = approvers.map(approver => approver.id);
      return currentApprovers.filter(currentApprover => approverIds.indexOf(currentApprover.id) === -1);
    });

    _defineProperty(this, "getRemovedAssignees", () => {
      // Assignees to remove are the ones in the prop that cannot be found in state
      var {
        approvers
      } = this.props;
      var {
        approvers: currentApprovers
      } = this.state;
      var currentApproverIds = currentApprovers.map(currentApprover => currentApprover.id);
      return approvers.filter(approver => currentApproverIds.indexOf(approver.id) === -1);
    });

    _defineProperty(this, "handleValidSubmit", () => {
      var {
        id,
        createTask,
        editTask,
        editMode,
        taskType
      } = this.props;
      var {
        message,
        approvers: currentApprovers,
        dueDate,
        completionRule,
        isValid
      } = this.state;
      var dueDateString = dueDate && dueDate.toISOString();
      if (!isValid) return;
      this.setState({
        isLoading: true
      });

      if (editMode === _constants__WEBPACK_IMPORTED_MODULE_17__["TASK_EDIT_MODE_EDIT"] && editTask) {
        editTask({
          id,
          completion_rule: completionRule,
          description: message,
          due_at: dueDateString,
          addedAssignees: convertAssigneesToSelectorItems(this.getAddedAssignees()),
          removedAssignees: this.getRemovedAssignees()
        }, this.handleSubmitSuccess, this.handleSubmitError);
      } else {
        createTask(message, convertAssigneesToSelectorItems(currentApprovers), taskType, dueDateString, completionRule, this.handleSubmitSuccess, this.handleSubmitError);
      }
    });

    _defineProperty(this, "handleDueDateChange", date => {
      var dateValue = null;

      if (date) {
        dateValue = new Date(date); // The date given to us is midnight of the date selected.
        // Modify date to be the end of day (minus 1 millisecond) for the given due date

        dateValue.setHours(23, 59, 59, 999);
      }

      this.setState({
        dueDate: dateValue
      });
      this.validateForm('taskDueDate');
    });

    _defineProperty(this, "handleCompletionRuleChange", event => {
      this.setState({
        completionRule: event.target.checked ? _constants__WEBPACK_IMPORTED_MODULE_17__["TASK_COMPLETION_RULE_ANY"] : _constants__WEBPACK_IMPORTED_MODULE_17__["TASK_COMPLETION_RULE_ALL"]
      });
    });

    _defineProperty(this, "handleApproverSelectorInput", value => {
      var {
        getApproverWithQuery = lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a
      } = this.props;
      this.setState({
        approverTextInput: value
      });
      getApproverWithQuery(value);
    });

    _defineProperty(this, "handleApproverSelectorSelect", pills => {
      this.setState({
        approvers: this.state.approvers.concat(pills.map(pill => {
          return {
            id: '',
            target: {
              id: pill.id,
              name: pill.text,
              type: 'user'
            },
            role: 'ASSIGNEE',
            type: 'task_collaborator',
            status: 'NOT_STARTED',
            permissions: {
              can_delete: false,
              can_update: false
            }
          };
        })),
        approverTextInput: ''
      });
      this.validateForm('taskAssignees');
    });

    _defineProperty(this, "handleApproverSelectorRemove", (option, index) => {
      var approvers = [...this.state.approvers];
      approvers.splice(index, 1);
      this.setState({
        approvers
      });
      this.validateForm('taskAssignees');
    });

    _defineProperty(this, "handleChangeMessage", e => {
      e.persist();
      this.setState({
        message: e.currentTarget.value
      });
      this.validateForm('taskName');
    });

    _defineProperty(this, "handleCancelClick", () => {
      this.props.onCancel();
    });
  }

  getInitialFormState() {
    var {
      dueDate,
      id,
      message,
      approvers,
      completionRule
    } = this.props;
    return {
      id,
      completionRule: completionRule || _constants__WEBPACK_IMPORTED_MODULE_17__["TASK_COMPLETION_RULE_ALL"],
      approvers,
      approverTextInput: '',
      dueDate: dueDate ? new Date(dueDate) : null,
      formValidityState: {},
      message,
      isLoading: false,
      isValid: null
    };
  }

  render() {
    var {
      approverSelectorContacts,
      className,
      error,
      isDisabled,
      intl,
      editMode,
      taskType
    } = this.props;
    var {
      dueDate,
      approvers,
      message,
      formValidityState,
      isLoading,
      completionRule
    } = this.state;
    var inputContainerClassNames = classnames__WEBPACK_IMPORTED_MODULE_3___default()('bcs-task-input-container', 'bcs-task-input-is-open', className);
    var isCreateEditMode = editMode === _constants__WEBPACK_IMPORTED_MODULE_17__["TASK_EDIT_MODE_CREATE"];
    var renderApprovers = convertAssigneesToSelectorItems(approvers); // filter out selected approvers
    // map to datalist item format

    var approverOptions = approverSelectorContacts.filter((_ref2) => {
      var {
        id
      } = _ref2;
      return !renderApprovers.find((_ref3) => {
        var {
          value
        } = _ref3;
        return value === id;
      });
    }).map((_ref4) => {
      var {
        id,
        item
      } = _ref4;
      return _objectSpread({}, item, {
        text: item.name,
        value: id
      });
    });
    var pillSelectorOverlayClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      scrollable: approverOptions.length > 4
    });
    var submitButtonMessage = isCreateEditMode ? _messages__WEBPACK_IMPORTED_MODULE_6__["default"].tasksAddTaskFormSubmitLabel : _messages__WEBPACK_IMPORTED_MODULE_6__["default"].tasksEditTaskFormSubmitLabel;
    var shouldShowCompletionRule = approvers.length > 0;
    var isCompletionRuleCheckboxDisabled = approvers.length <= 1;
    var isCompletionRuleCheckboxChecked = completionRule === _constants__WEBPACK_IMPORTED_MODULE_17__["TASK_COMPLETION_RULE_ANY"];
    var isForbiddenErrorOnEdit = isLoading || lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(error, 'status') === 403 && !isCreateEditMode;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: inputContainerClassNames,
      "data-resin-component": "taskform"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-task-input-form-container"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskError__WEBPACK_IMPORTED_MODULE_19__["default"], {
      editMode: editMode,
      error: error,
      taskType: taskType
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_form_elements_form_Form__WEBPACK_IMPORTED_MODULE_8__["default"], {
      formValidityState: formValidityState,
      onInvalidSubmit: this.handleInvalidSubmit,
      onValidSubmit: this.handleValidSubmit
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_pill_selector_dropdown_PillSelectorDropdown__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: pillSelectorOverlayClasses,
      error: this.getErrorByFieldname('taskAssignees'),
      disabled: isForbiddenErrorOnEdit,
      inputProps: {
        'data-testid': 'task-form-assignee-input'
      },
      isRequired: true,
      label: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_6__["default"].tasksAddTaskFormSelectAssigneesLabel),
      name: "taskAssignees",
      onBlur: () => this.validateForm('taskAssignees'),
      onInput: this.handleApproverSelectorInput,
      onRemove: this.handleApproverSelectorRemove,
      onSelect: this.handleApproverSelectorSelect,
      placeholder: intl.formatMessage(_comment_form_messages__WEBPACK_IMPORTED_MODULE_7__["default"].approvalAddAssignee),
      selectedOptions: renderApprovers,
      selectorOptions: approverOptions,
      shouldSetActiveItemOnOpen: true,
      shouldClearUnmatchedInput: true,
      validateForError: () => this.validateForm('taskAssignees')
    }, approverOptions.map((_ref5) => {
      var {
        id,
        name,
        email
      } = _ref5;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_contact_datalist_item_ContactDatalistItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: id,
        "data-testid": "task-assignee-option",
        name: name,
        subtitle: email
      });
    })), shouldShowCompletionRule && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_feature_checking__WEBPACK_IMPORTED_MODULE_15__["FeatureFlag"], {
      feature: "activityFeed.tasks.anyTask"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_checkbox__WEBPACK_IMPORTED_MODULE_12__["default"], {
      "data-testid": "task-form-completion-rule-checkbox",
      isChecked: isCompletionRuleCheckboxChecked,
      isDisabled: isCompletionRuleCheckboxDisabled || isForbiddenErrorOnEdit,
      label: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_6__["default"].taskAnyCheckboxLabel),
      tooltip: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_6__["default"].taskAnyInfoTooltip),
      name: "completionRule",
      onChange: this.handleCompletionRuleChange
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_text_area__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "bcs-task-name-input",
      "data-testid": "task-form-name-input",
      disabled: isDisabled || isForbiddenErrorOnEdit,
      error: this.getErrorByFieldname('taskName'),
      isRequired: true,
      label: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_6__["default"].tasksAddTaskFormMessageLabel),
      name: "taskName",
      onBlur: () => this.validateForm('taskName'),
      onChange: this.handleChangeMessage,
      placeholder: intl.formatMessage(_comment_form_messages__WEBPACK_IMPORTED_MODULE_7__["default"].commentWrite),
      value: message
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_date_picker_DatePicker__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: "bcs-task-add-due-date-input",
      error: this.getErrorByFieldname('taskDueDate'),
      inputProps: {
        [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_18__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_18__["ACTIVITY_TARGETS"].TASK_DATE_PICKER,
        'data-testid': 'task-form-date-input'
      },
      isDisabled: isForbiddenErrorOnEdit,
      isRequired: false,
      label: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_6__["default"].tasksAddTaskFormDueDateLabel),
      minDate: new Date(),
      name: "taskDueDate",
      onChange: this.handleDueDateChange,
      placeholder: intl.formatMessage(_comment_form_messages__WEBPACK_IMPORTED_MODULE_7__["default"].approvalSelectDate),
      value: dueDate || undefined
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-task-input-controls"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_Button__WEBPACK_IMPORTED_MODULE_14__["default"], _extends({
      className: "bcs-task-input-cancel-btn",
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_18__["ACTIVITY_TARGETS"].APPROVAL_FORM_CANCEL,
      "data-testid": "task-form-cancel-button",
      onClick: this.handleCancelClick,
      isDisabled: isLoading,
      type: "button"
    }, this.addResinInfo()), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_6__["default"].tasksAddTaskFormCancelLabel)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({
      className: "bcs-task-input-submit-btn",
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_18__["ACTIVITY_TARGETS"].APPROVAL_FORM_POST,
      "data-testid": "task-form-submit-button",
      isDisabled: isForbiddenErrorOnEdit,
      isLoading: isLoading
    }, this.addResinInfo()), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], submitButtonMessage))))));
  }

} // For testing only


_defineProperty(TaskForm, "defaultProps", {
  approvers: [],
  approverSelectorContacts: [],
  editMode: _constants__WEBPACK_IMPORTED_MODULE_17__["TASK_EDIT_MODE_CREATE"],
  id: '',
  message: ''
});


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["injectIntl"])(TaskForm));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-form/TaskForm.scss":
/*!****************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-form/TaskForm.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-form/index.js":
/*!***********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-form/index.js ***!
  \***********************************************************************/
/*! exports provided: default, TaskFormUnwrapped */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskForm */ "./src/elements/content-sidebar/activity-feed/task-form/TaskForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskFormUnwrapped", function() { return _TaskForm__WEBPACK_IMPORTED_MODULE_0__["TaskFormUnwrapped"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TaskForm__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-form/messages.js":
/*!**************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-form/messages.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/**
 * 
 * @file i18n messages
 * @author Box
 */

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  taskCreateErrorTitle: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskCreateErrorTitle",
    "defaultMessage": "Error"
  },
  taskEditWarningTitle: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskEditWarningTitle",
    "defaultMessage": "Task Updated with Errors"
  },
  taskUpdateErrorMessage: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskUpdateErrorMessage",
    "defaultMessage": "An error occurred while modifying this task. Please try again."
  },
  taskApprovalAssigneeRemovalWarningMessage: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskApprovalAssigneeRemovalWarningMessage",
    "defaultMessage": "Unable to remove assignee(s) because the task is now approved."
  },
  taskGeneralAssigneeRemovalWarningMessage: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskGeneralAssigneeRemovalWarningMessage",
    "defaultMessage": "Unable to remove assignee(s) because the task is now completed."
  },
  tasksAddTaskFormSelectAssigneesLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksAddTaskFormSelectAssigneesLabel",
    "defaultMessage": "Select Assignees"
  },
  tasksAddTaskFormMessageLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksAddTaskFormMessageLabel",
    "defaultMessage": "Message"
  },
  tasksAddTaskFormDueDateLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksAddTaskFormDueDateLabel",
    "defaultMessage": "Due Date"
  },
  tasksAddTaskFormSubmitLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksAddTaskFormSubmitLabel",
    "defaultMessage": "Create"
  },
  tasksEditTaskFormSubmitLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksEditTaskFormSubmitLabel",
    "defaultMessage": "Update"
  },
  tasksAddTaskFormCancelLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.tasksAddTaskFormCancelLabel",
    "defaultMessage": "Cancel"
  },
  taskAnyCheckboxLabel: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskAnyCheckboxLabel",
    "defaultMessage": "Only one assignee is required to complete this task"
  },
  taskAnyInfoTooltip: {
    "id": "be.contentSidebar.activityFeed.taskForm.taskAnyInfoTooltip",
    "defaultMessage": "By default, all assignees are required to take action before a task is complete. Selecting this option will require only one assignee to complete this task."
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.js":
/*!********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_time_ReadableTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/time/ReadableTime */ "./src/components/time/ReadableTime.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _AssigneeDetails_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AssigneeDetails.scss */ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.scss");
/* harmony import */ var _AssigneeDetails_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_AssigneeDetails_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var statusMessages = {
  [_constants__WEBPACK_IMPORTED_MODULE_6__["TASK_NEW_APPROVED"]]: _messages__WEBPACK_IMPORTED_MODULE_5__["default"].tasksFeedStatusApproved,
  [_constants__WEBPACK_IMPORTED_MODULE_6__["TASK_NEW_REJECTED"]]: _messages__WEBPACK_IMPORTED_MODULE_5__["default"].tasksFeedStatusRejected,
  [_constants__WEBPACK_IMPORTED_MODULE_6__["TASK_NEW_COMPLETED"]]: _messages__WEBPACK_IMPORTED_MODULE_5__["default"].tasksFeedStatusCompleted,
  [_constants__WEBPACK_IMPORTED_MODULE_6__["TASK_NEW_NOT_STARTED"]]: null
};

var Datestamp = (_ref) => {
  var {
    date
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_time_ReadableTime__WEBPACK_IMPORTED_MODULE_3__["default"], {
    timestamp: new Date(date).getTime(),
    alwaysShowTime: true,
    relativeThreshold: 0
  });
};

Datestamp.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([function () {
    return (typeof ISODate === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.instanceOf(ISODate) : prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any).apply(this, arguments);
  }, function () {
    return (typeof Date === "function" ? prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.instanceOf(Date) : prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any).apply(this, arguments);
  }]).isRequired
};
var AvatarDetails = react__WEBPACK_IMPORTED_MODULE_0__["memo"]((_ref2) => {
  var {
    user,
    status,
    completedAt,
    className
  } = _ref2;
  var statusMessage = statusMessages[status] || null;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'bcs-AssigneeDetails')
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-AssigneeDetails-name"
  }, user.name ? user.name : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].priorCollaborator)), statusMessage && completedAt && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-AssigneeDetails-status"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, statusMessage, {
    values: {
      dateTime: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Datestamp, {
        date: completedAt
      })
    }
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (AvatarDetails);


/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.scss":
/*!**********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeList.js":
/*!*****************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/AssigneeList.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _AvatarGroupAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AvatarGroupAvatar */ "./src/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.js");
/* harmony import */ var _AssigneeDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AssigneeDetails */ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeDetails.js");
/* harmony import */ var _AssigneeList_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AssigneeList.scss */ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeList.scss");
/* harmony import */ var _AssigneeList_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_AssigneeList_scss__WEBPACK_IMPORTED_MODULE_6__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var DEFAULT_ASSIGNEES_SHOWN = 3;
var TASKS_PAGE_SIZE = 20; // service does not return the page size to the client at the moment

function AssigneeList(props) {
  var {
    initialAssigneeCount = DEFAULT_ASSIGNEES_SHOWN,
    users = {},
    getAvatarUrl,
    isOpen,
    onCollapse,
    onExpand
  } = props;
  var {
    entries = [],
    next_marker
  } = users;
  var entryCount = entries.length;
  var numVisibleAssignees = isOpen ? entryCount : initialAssigneeCount;
  var visibleUsers = entries.slice(0, numVisibleAssignees).map((_ref) => {
    var {
      id,
      target,
      status,
      completed_at: completedAt
    } = _ref;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
      key: id,
      className: "bcs-AssigneeList-listItem",
      "data-testid": "assignee-list-item"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AvatarGroupAvatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      status: status,
      className: "bcs-AssigneeList-listItemAvatar",
      user: target,
      getAvatarUrl: getAvatarUrl
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AssigneeDetails__WEBPACK_IMPORTED_MODULE_5__["default"], {
      user: target,
      status: status,
      completedAt: completedAt
    }));
  });
  var hiddenAssigneeCount = Math.max(0, entryCount - initialAssigneeCount);
  var maxAdditionalAssignees = TASKS_PAGE_SIZE - initialAssigneeCount;
  var hasMoreAssigneesThanPageSize = hiddenAssigneeCount > maxAdditionalAssignees || next_marker;
  var additionalAssigneeMessage = hasMoreAssigneesThanPageSize ? _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskShowMoreAssigneesOverflow : _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskShowMoreAssignees;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-AssigneeList"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: "bcs-AssigneeList-list",
    "data-testid": "task-assignee-list"
  }, visibleUsers), !isOpen && hiddenAssigneeCount > 0 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-AssigneeList-toggleBtn"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "data-resin-target": "showmorebtn",
    "data-testid": "show-more-assignees",
    onClick: onExpand,
    className: "lnk"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, additionalAssigneeMessage, {
    values: {
      additionalAssigneeCount: hasMoreAssigneesThanPageSize ? maxAdditionalAssignees : hiddenAssigneeCount
    }
  })))), isOpen && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-AssigneeList-toggleBtn"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "data-resin-target": "showlessbtn",
    "data-testid": "show-less-assignees",
    onClick: onCollapse,
    className: "lnk"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskShowLessAssignees))));
}

/* harmony default export */ __webpack_exports__["default"] = (AssigneeList);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeList.scss":
/*!*******************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/AssigneeList.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.js":
/*!**********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_general_IconVerified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../icons/general/IconVerified */ "./src/icons/general/IconVerified.js");
/* harmony import */ var _icons_general_IconRejected__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../icons/general/IconRejected */ "./src/icons/general/IconRejected.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Avatar */ "./src/elements/content-sidebar/activity-feed/Avatar.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _AvatarGroupAvatar_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AvatarGroupAvatar.scss */ "./src/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.scss");
/* harmony import */ var _AvatarGroupAvatar_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_AvatarGroupAvatar_scss__WEBPACK_IMPORTED_MODULE_9__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












var StatusIcon = (_ref) => {
  var {
    status
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["status"]);

  switch (status) {
    case _constants__WEBPACK_IMPORTED_MODULE_7__["TASK_NEW_APPROVED"]:
    case _constants__WEBPACK_IMPORTED_MODULE_7__["TASK_NEW_COMPLETED"]:
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconVerified__WEBPACK_IMPORTED_MODULE_4__["default"], rest);

    case _constants__WEBPACK_IMPORTED_MODULE_7__["TASK_NEW_REJECTED"]:
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconRejected__WEBPACK_IMPORTED_MODULE_5__["default"], rest);

    case _constants__WEBPACK_IMPORTED_MODULE_7__["TASK_NEW_NOT_STARTED"]:
    default:
      return null;
  }
};

var AvatarGroupAvatar = react__WEBPACK_IMPORTED_MODULE_0__["memo"]((_ref2) => {
  var {
    user,
    status,
    getAvatarUrl,
    className
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["user", "status", "getAvatarUrl", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bcs-AvatarGroupAvatar', className),
    "data-testid": "avatar-group-avatar-container"
  }, rest), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "bcs-AvatarGroupAvatar-avatar",
    user: user,
    getAvatarUrl: getAvatarUrl
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StatusIcon, {
    status: status,
    className: "bcs-AvatarGroupAvatar-statusIcon ".concat(lodash_camelCase__WEBPACK_IMPORTED_MODULE_3___default()(status)),
    height: 12,
    width: 12,
    title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].taskAssignmentCompleted)
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (AvatarGroupAvatar);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.scss":
/*!************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/AvatarGroupAvatar.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/Task.js":
/*!*********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/Task.js ***!
  \*********************************************************************/
/*! exports provided: TaskComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return Task; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-tether */ "./node_modules/react-tether/lib/react-tether.js");
/* harmony import */ var react_tether__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_tether__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_feature_checking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/feature-checking */ "./src/elements/common/feature-checking/index.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/api-context */ "./src/elements/common/api-context/index.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Avatar */ "./src/elements/content-sidebar/activity-feed/Avatar.js");
/* harmony import */ var _components_media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/media */ "./src/components/media/index.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/menu */ "./src/components/menu/index.js");
/* harmony import */ var _common_activity_error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/activity-error */ "./src/elements/content-sidebar/activity-feed/common/activity-error/index.js");
/* harmony import */ var _common_activity_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/activity-message */ "./src/elements/content-sidebar/activity-feed/common/activity-message/index.js");
/* harmony import */ var _common_activity_timestamp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/activity-timestamp */ "./src/elements/content-sidebar/activity-feed/common/activity-timestamp/index.js");
/* harmony import */ var _common_delete_confirmation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/delete-confirmation */ "./src/elements/content-sidebar/activity-feed/common/delete-confirmation/index.js");
/* harmony import */ var _icons_two_toned_IconTaskApproval__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../icons/two-toned/IconTaskApproval */ "./src/icons/two-toned/IconTaskApproval.js");
/* harmony import */ var _icons_two_toned_IconTaskGeneral__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../icons/two-toned/IconTaskGeneral */ "./src/icons/two-toned/IconTaskGeneral.js");
/* harmony import */ var _icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../icons/general/IconTrash */ "./src/icons/general/IconTrash.js");
/* harmony import */ var _icons_general_IconPencil__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../icons/general/IconPencil */ "./src/icons/general/IconPencil.js");
/* harmony import */ var _common_user_link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common/user-link */ "./src/elements/content-sidebar/activity-feed/common/user-link/index.js");
/* harmony import */ var _api_APIFactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../api/APIFactory */ "./src/api/APIFactory.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../styles/variables */ "./src/styles/variables.js");
/* harmony import */ var _TaskActions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./TaskActions */ "./src/elements/content-sidebar/activity-feed/task-new/TaskActions.js");
/* harmony import */ var _TaskCompletionRuleIcon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./TaskCompletionRuleIcon */ "./src/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.js");
/* harmony import */ var _TaskDueDate__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./TaskDueDate */ "./src/elements/content-sidebar/activity-feed/task-new/TaskDueDate.js");
/* harmony import */ var _TaskStatus__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./TaskStatus */ "./src/elements/content-sidebar/activity-feed/task-new/TaskStatus.js");
/* harmony import */ var _AssigneeList__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./AssigneeList */ "./src/elements/content-sidebar/activity-feed/task-new/AssigneeList.js");
/* harmony import */ var _TaskModal__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../TaskModal */ "./src/elements/content-sidebar/TaskModal.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _Task_scss__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Task.scss */ "./src/elements/content-sidebar/activity-feed/task-new/Task.scss");
/* harmony import */ var _Task_scss__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_Task_scss__WEBPACK_IMPORTED_MODULE_33__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




































var getMessageForTask = (isCurrentUser, taskType) => {
  if (isCurrentUser) {
    if (taskType === _constants__WEBPACK_IMPORTED_MODULE_22__["TASK_TYPE_APPROVAL"]) {
      return _messages__WEBPACK_IMPORTED_MODULE_32__["default"].tasksFeedHeadlineApprovalCurrentUser;
    }

    return _messages__WEBPACK_IMPORTED_MODULE_32__["default"].tasksFeedHeadlineGeneralCurrentUser;
  }

  if (taskType === _constants__WEBPACK_IMPORTED_MODULE_22__["TASK_TYPE_APPROVAL"]) {
    return _messages__WEBPACK_IMPORTED_MODULE_32__["default"].tasksFeedHeadlineApproval;
  }

  return _messages__WEBPACK_IMPORTED_MODULE_32__["default"].tasksFeedHeadlineGeneral;
};

class Task extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      loadCollabError: undefined,
      assignedToFull: this.props.assigned_to,
      modalError: undefined,
      isEditing: false,
      isLoading: false,
      isAssigneeListOpen: false,
      isConfirmingDelete: false
    });

    _defineProperty(this, "handleAssigneeListExpand", () => {
      this.getAllTaskCollaborators(() => {
        this.setState({
          isAssigneeListOpen: true
        });
      });
    });

    _defineProperty(this, "handleAssigneeListCollapse", () => {
      this.setState({
        isAssigneeListOpen: false
      });
    });

    _defineProperty(this, "handleEditClick", () => {
      this.getAllTaskCollaborators(() => {
        this.setState({
          isEditing: true
        });
      });
    });

    _defineProperty(this, "handleDeleteClick", () => {
      this.setState({
        isConfirmingDelete: true
      });
    });

    _defineProperty(this, "handleDeleteConfirm", () => {
      var {
        id,
        onDelete,
        permissions
      } = this.props;

      if (onDelete) {
        onDelete({
          id,
          permissions
        });
      }
    });

    _defineProperty(this, "handleDeleteCancel", () => {
      this.setState({
        isConfirmingDelete: false
      });
    });

    _defineProperty(this, "handleEditModalClose", () => {
      var {
        onModalClose
      } = this.props;
      this.setState({
        isEditing: false,
        modalError: undefined
      });

      if (onModalClose) {
        onModalClose();
      }
    });

    _defineProperty(this, "handleEditSubmitError", error => {
      this.setState({
        modalError: error
      });
    });

    _defineProperty(this, "getAllTaskCollaborators", onSuccess => {
      var {
        id,
        api,
        task_links,
        assigned_to
      } = this.props;
      var {
        errorOccured
      } = _common_messages__WEBPACK_IMPORTED_MODULE_31__["default"];
      var {
        taskCollaboratorLoadErrorMessage
      } = _messages__WEBPACK_IMPORTED_MODULE_32__["default"]; // skip fetch when there are no additional collaborators

      if (!assigned_to.next_marker) {
        this.setState({
          assignedToFull: assigned_to
        });
        onSuccess();
        return;
      } // fileid is required for api calls, check for presence


      var fileId = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(task_links, 'entries[0].target.id');

      if (!fileId) {
        return;
      }

      this.setState({
        isLoading: true
      });
      api.getTaskCollaboratorsAPI(false).getTaskCollaborators({
        task: {
          id
        },
        file: {
          id: fileId
        },
        errorCallback: () => {
          this.setState({
            isLoading: false,
            loadCollabError: {
              message: taskCollaboratorLoadErrorMessage,
              title: errorOccured
            }
          });
        },
        successCallback: assignedToFull => {
          this.setState({
            assignedToFull,
            isLoading: false
          });
          onSuccess();
        }
      });
    });

    _defineProperty(this, "handleTaskAction", (taskId, assignmentId, taskStatus) => {
      var {
        onAssignmentUpdate
      } = this.props;
      this.setState({
        isAssigneeListOpen: false
      });
      onAssignmentUpdate(taskId, assignmentId, taskStatus);
    });
  }

  render() {
    var {
      approverSelectorContacts,
      assigned_to,
      completion_rule,
      created_at,
      created_by,
      currentUser,
      due_at,
      error,
      features,
      getApproverWithQuery,
      getAvatarUrl,
      getUserProfileUrl,
      id,
      isPending,
      description,
      onEdit,
      permissions,
      status,
      task_type,
      translatedTaggedMessage,
      translations
    } = this.props;
    var {
      assignedToFull,
      modalError,
      isEditing,
      isLoading,
      loadCollabError,
      isAssigneeListOpen,
      isConfirmingDelete
    } = this.state;
    var inlineError = loadCollabError || error;
    var currentUserAssignment = assigned_to && assigned_to.entries ? assigned_to.entries.find((_ref) => {
      var {
        target
      } = _ref;
      return target.id === currentUser.id;
    }) : null;
    var createdByUser = created_by.target || _constants__WEBPACK_IMPORTED_MODULE_22__["PLACEHOLDER_USER"];
    var createdAtTimestamp = new Date(created_at).getTime();
    var shouldShowActions = currentUserAssignment && currentUserAssignment.permissions && currentUserAssignment.permissions.can_update && currentUserAssignment.status === _constants__WEBPACK_IMPORTED_MODULE_22__["TASK_NEW_NOT_STARTED"] && (status === _constants__WEBPACK_IMPORTED_MODULE_22__["TASK_NEW_NOT_STARTED"] || status === _constants__WEBPACK_IMPORTED_MODULE_22__["TASK_NEW_IN_PROGRESS"]);
    var TaskTypeIcon = task_type === _constants__WEBPACK_IMPORTED_MODULE_22__["TASK_TYPE_APPROVAL"] ? _icons_two_toned_IconTaskApproval__WEBPACK_IMPORTED_MODULE_16__["default"] : _icons_two_toned_IconTaskGeneral__WEBPACK_IMPORTED_MODULE_17__["default"];
    var isMenuVisible = (permissions.can_delete || permissions.can_update) && !isPending;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-Task"
    }, inlineError ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_error__WEBPACK_IMPORTED_MODULE_12__["default"], inlineError) : null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('bcs-Task-media', {
        'bcs-is-pending': isPending || isLoading
      }),
      "data-testid": "task-card"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_10__["default"].Figure, {
      className: "bcs-Task-avatar"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      getAvatarUrl: getAvatarUrl,
      user: createdByUser
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TaskTypeIcon, {
      width: 20,
      height: 20,
      className: "bcs-Task-avatarBadge"
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_10__["default"].Body, null, isMenuVisible && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_tether__WEBPACK_IMPORTED_MODULE_6___default.a, {
      attachment: "top right",
      className: "bcs-Task-deleteConfirmationModal",
      constraints: [{
        to: 'scrollParent',
        attachment: 'together'
      }],
      targetAttachment: "bottom right"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_media__WEBPACK_IMPORTED_MODULE_10__["default"].Menu, {
      isDisabled: isConfirmingDelete,
      "data-testid": "task-actions-menu",
      menuProps: {
        'data-resin-component': _common_interactionTargets__WEBPACK_IMPORTED_MODULE_23__["ACTIVITY_TARGETS"].TASK_OPTIONS
      }
    }, permissions.can_update && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_11__["MenuItem"], {
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_23__["ACTIVITY_TARGETS"].TASK_OPTIONS_EDIT,
      "data-testid": "edit-task",
      onClick: this.handleEditClick
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconPencil__WEBPACK_IMPORTED_MODULE_19__["default"], {
      color: _styles_variables__WEBPACK_IMPORTED_MODULE_24__["bdlGray80"]
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_32__["default"].taskEditMenuItem)), permissions.can_delete && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_11__["MenuItem"], {
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_23__["ACTIVITY_TARGETS"].TASK_OPTIONS_DELETE,
      "data-testid": "delete-task",
      onClick: this.handleDeleteClick
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_18__["default"], {
      color: _styles_variables__WEBPACK_IMPORTED_MODULE_24__["bdlGray80"]
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_32__["default"].taskDeleteMenuItem))), isConfirmingDelete && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_delete_confirmation__WEBPACK_IMPORTED_MODULE_15__["default"], {
      "data-resin-component": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_23__["ACTIVITY_TARGETS"].TASK_OPTIONS,
      isOpen: isConfirmingDelete,
      message: _messages__WEBPACK_IMPORTED_MODULE_32__["default"].taskDeletePrompt,
      onDeleteCancel: this.handleDeleteCancel,
      onDeleteConfirm: this.handleDeleteConfirm
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-Task-headline"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _extends({}, getMessageForTask(!!currentUserAssignment, task_type), {
      values: {
        user: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_user_link__WEBPACK_IMPORTED_MODULE_20__["default"], _extends({}, createdByUser, {
          "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_23__["ACTIVITY_TARGETS"].PROFILE,
          getUserProfileUrl: getUserProfileUrl
        }))
      }
    }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_timestamp__WEBPACK_IMPORTED_MODULE_14__["default"], {
      date: createdAtTimestamp
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_activity_message__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({
      id: id,
      tagged_message: description,
      translatedTaggedMessage: translatedTaggedMessage
    }, translations, {
      translationFailed: error ? true : null,
      getUserProfileUrl: getUserProfileUrl
    }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-Task-statusContainer"
    }, !!due_at && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskDueDate__WEBPACK_IMPORTED_MODULE_27__["default"], {
      dueDate: due_at,
      status: status
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskStatus__WEBPACK_IMPORTED_MODULE_28__["default"], {
      status: status
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskCompletionRuleIcon__WEBPACK_IMPORTED_MODULE_26__["default"], {
      completionRule: completion_rule
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-Task-assigneeListContainer"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AssigneeList__WEBPACK_IMPORTED_MODULE_29__["default"], {
      isOpen: isAssigneeListOpen,
      onCollapse: this.handleAssigneeListCollapse,
      onExpand: this.handleAssigneeListExpand,
      getAvatarUrl: getAvatarUrl,
      initialAssigneeCount: 3,
      users: isAssigneeListOpen ? assignedToFull : assigned_to
    })), currentUserAssignment && shouldShowActions && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-Task-actionsContainer"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskActions__WEBPACK_IMPORTED_MODULE_25__["default"], {
      taskType: task_type,
      onTaskApproval: isPending ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : () => {
        this.handleTaskAction(id, currentUserAssignment.id, _constants__WEBPACK_IMPORTED_MODULE_22__["TASK_NEW_APPROVED"]);
      },
      onTaskReject: isPending ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : () => this.handleTaskAction(id, currentUserAssignment.id, _constants__WEBPACK_IMPORTED_MODULE_22__["TASK_NEW_REJECTED"]),
      onTaskComplete: isPending ? lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a : () => this.handleTaskAction(id, currentUserAssignment.id, _constants__WEBPACK_IMPORTED_MODULE_22__["TASK_NEW_COMPLETED"])
    })))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskModal__WEBPACK_IMPORTED_MODULE_30__["default"], {
      editMode: _constants__WEBPACK_IMPORTED_MODULE_22__["TASK_EDIT_MODE_EDIT"],
      error: modalError,
      feedbackUrl: Object(_common_feature_checking__WEBPACK_IMPORTED_MODULE_7__["getFeatureConfig"])(features, 'activityFeed.tasks').feedbackUrl || '',
      onSubmitError: this.handleEditSubmitError,
      onSubmitSuccess: this.handleEditModalClose,
      onModalClose: this.handleEditModalClose,
      isTaskFormOpen: isEditing,
      taskFormProps: {
        id,
        approvers: assignedToFull.entries,
        approverSelectorContacts,
        completionRule: completion_rule,
        getApproverWithQuery,
        getAvatarUrl,
        createTask: () => {},
        editTask: onEdit,
        dueDate: due_at,
        message: description
      },
      taskType: task_type
    }));
  }

}

_defineProperty(Task, "defaultProps", {
  completion_rule: _constants__WEBPACK_IMPORTED_MODULE_22__["TASK_COMPLETION_RULE_ALL"]
});


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_2___default()([_common_feature_checking__WEBPACK_IMPORTED_MODULE_7__["withFeatureConsumer"], _common_api_context__WEBPACK_IMPORTED_MODULE_8__["withAPIContext"]])(Task));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/Task.scss":
/*!***********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/Task.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/TaskActions.js":
/*!****************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/TaskActions.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/button */ "./src/components/button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _TaskActions_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TaskActions.scss */ "./src/elements/content-sidebar/activity-feed/task-new/TaskActions.scss");
/* harmony import */ var _TaskActions_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TaskActions_scss__WEBPACK_IMPORTED_MODULE_6__);








var TaskActions = (_ref) => {
  var {
    onTaskApproval,
    onTaskReject,
    onTaskComplete,
    taskType
  } = _ref;
  var action = null;

  if (taskType === _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_TYPE_APPROVAL"]) {
    action = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "bcs-TaskActions-button",
      "data-testid": "approve-task",
      onClick: onTaskApproval,
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["ACTIVITY_TARGETS"].TASK_APPROVE
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedApproveAction)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "bcs-TaskActions-button",
      "data-testid": "reject-task",
      onClick: onTaskReject,
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["ACTIVITY_TARGETS"].TASK_REJECT
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedRejectAction)));
  } else if (taskType === _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_TYPE_GENERAL"]) {
    action = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "bcs-TaskActions-button",
      "data-testid": "complete-task",
      onClick: onTaskComplete,
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["ACTIVITY_TARGETS"].TASK_COMPLETE
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].tasksFeedCompleteAction));
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-TaskActions"
  }, action);
};

/* harmony default export */ __webpack_exports__["default"] = (TaskActions);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/TaskActions.scss":
/*!******************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/TaskActions.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.js":
/*!***************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _components_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/tooltip */ "./src/components/tooltip/index.js");
/* harmony import */ var _icons_general_IconAnyTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../icons/general/IconAnyTask */ "./src/icons/general/IconAnyTask.js");
/* harmony import */ var _TaskCompletionRuleIcon_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TaskCompletionRuleIcon.scss */ "./src/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.scss");
/* harmony import */ var _TaskCompletionRuleIcon_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TaskCompletionRuleIcon_scss__WEBPACK_IMPORTED_MODULE_6__);








var TaskCompletionRuleIcon = (_ref) => {
  var {
    completionRule
  } = _ref;
  return completionRule === _constants__WEBPACK_IMPORTED_MODULE_2__["TASK_COMPLETION_RULE_ANY"] && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    position: "top-center",
    text: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskAnyAffordanceTooltip)
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconAnyTask__WEBPACK_IMPORTED_MODULE_5__["default"], {
    height: 11,
    width: 11,
    className: "bcs-TaskCompletionRuleIcon"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskCompletionRuleIcon);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.scss":
/*!*****************************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/TaskCompletionRuleIcon.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/TaskDueDate.js":
/*!****************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/TaskDueDate.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _components_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/time */ "./src/components/time/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _TaskDueDate_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TaskDueDate.scss */ "./src/elements/content-sidebar/activity-feed/task-new/TaskDueDate.scss");
/* harmony import */ var _TaskDueDate_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TaskDueDate_scss__WEBPACK_IMPORTED_MODULE_6__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var TaskDueDate = (_ref) => {
  var {
    dueDate,
    status
  } = _ref;
  var isOverdue = dueDate ? status === _constants__WEBPACK_IMPORTED_MODULE_5__["TASK_NEW_NOT_STARTED"] && new Date(dueDate) < Date.now() : false;
  var fullDueDate = new Date(dueDate);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-TaskDueDate', {
      'bcs-is-taskOverdue': isOverdue
    }),
    "data-testid": "task-due-date"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_3__["default"].taskDueDateLabel, {
    values: {
      date: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_time__WEBPACK_IMPORTED_MODULE_4__["ReadableTime"], {
        alwaysShowTime: true,
        timestamp: fullDueDate.getTime()
      })
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskDueDate);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/TaskDueDate.scss":
/*!******************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/TaskDueDate.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/TaskStatus.js":
/*!***************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/TaskStatus.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/activity-feed/task-new/messages.js");
/* harmony import */ var _TaskStatus_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TaskStatus.scss */ "./src/elements/content-sidebar/activity-feed/task-new/TaskStatus.scss");
/* harmony import */ var _TaskStatus_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TaskStatus_scss__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var statusMessageKeyMap = {
  [_constants__WEBPACK_IMPORTED_MODULE_3__["TASK_NEW_APPROVED"]]: _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksFeedApprovedLabel,
  [_constants__WEBPACK_IMPORTED_MODULE_3__["TASK_NEW_COMPLETED"]]: _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksFeedCompletedLabel,
  [_constants__WEBPACK_IMPORTED_MODULE_3__["TASK_NEW_REJECTED"]]: _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksFeedRejectedLabel,
  [_constants__WEBPACK_IMPORTED_MODULE_3__["TASK_NEW_NOT_STARTED"]]: _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksFeedInProgressLabel,
  [_constants__WEBPACK_IMPORTED_MODULE_3__["TASK_NEW_IN_PROGRESS"]]: _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksFeedInProgressLabel
};
var Status = react__WEBPACK_IMPORTED_MODULE_0__["memo"]((_ref) => {
  var {
    status
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_4__["default"].tasksFeedStatusLabel, {
    values: {
      taskStatus: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "bcs-TaskStatus-message ".concat(lodash_camelCase__WEBPACK_IMPORTED_MODULE_2___default()(status))
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], statusMessageKeyMap[status]))
    }
  }), function () {
    for (var _len = arguments.length, msg = new Array(_len), _key = 0; _key < _len; _key++) {
      msg[_key] = arguments[_key];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-TaskStatus"
    }, msg);
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Status);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/TaskStatus.scss":
/*!*****************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/TaskStatus.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/index.js":
/*!**********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/index.js ***!
  \**********************************************************************/
/*! exports provided: default, TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/elements/content-sidebar/activity-feed/task-new/Task.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Task__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return _Task__WEBPACK_IMPORTED_MODULE_0__["TaskComponent"]; });




/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/task-new/messages.js":
/*!*************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/task-new/messages.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/**
 * 
 * @file i18n messages
 * @author Box
 */

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  taskCollaboratorLoadErrorMessage: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskCollaboratorLoadErrorMessage",
    "defaultMessage": "An error has occurred while loading collaborators for this task. Please try again."
  },
  taskShowMoreAssignees: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskShowMoreAssignees",
    "defaultMessage": "Show {additionalAssigneeCount} More"
  },
  taskShowMoreAssigneesOverflow: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskShowMoreAssigneesOverflow",
    "defaultMessage": "{additionalAssigneeCount, plural, one {Show #+ More} other {Show #+ More}}"
  },
  taskShowLessAssignees: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskShowLessAssignees",
    "defaultMessage": "Show Less"
  },
  taskDueDateLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskDueDateLabel",
    "defaultMessage": "Due: {date}"
  },
  tasksFeedApproveAction: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedApproveAction",
    "defaultMessage": "Approve"
  },
  tasksFeedCompleteAction: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedCompleteAction",
    "defaultMessage": "Mark as Complete"
  },
  tasksFeedRejectAction: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedRejectAction",
    "defaultMessage": "Reject"
  },
  tasksFeedStatusLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedStatusLabel",
    "defaultMessage": "Status: {taskStatus}"
  },
  tasksFeedCompletedLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedCompletedLabel",
    "defaultMessage": "Completed"
  },
  tasksFeedApprovedLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedApprovedLabel",
    "defaultMessage": "Approved"
  },
  tasksFeedRejectedLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedRejectedLabel",
    "defaultMessage": "Rejected"
  },
  tasksFeedInProgressLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedInProgressLabel",
    "defaultMessage": "In Progress"
  },
  tasksFeedHeadlineApprovalCurrentUser: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedHeadlineApprovalCurrentUser",
    "defaultMessage": "{user} assigned you an Approval Task"
  },
  tasksFeedHeadlineApproval: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedHeadlineApproval",
    "defaultMessage": "{user} assigned an Approval Task"
  },
  tasksFeedHeadlineGeneralCurrentUser: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedHeadlineGeneralCurrentUser",
    "defaultMessage": "{user} assigned you a Task"
  },
  tasksFeedHeadlineGeneral: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedHeadlineGeneral",
    "defaultMessage": "{user} assigned a Task"
  },
  tasksFeedMoreAssigneesLabel: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedMoreAssigneesLabel",
    "defaultMessage": "See all assignees"
  },
  tasksFeedAssigneeListTitle: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedAssigneeListTitle",
    "defaultMessage": "Assignees"
  },
  tasksFeedStatusRejected: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedStatusRejected",
    "defaultMessage": "Rejected {dateTime}"
  },
  tasksFeedStatusApproved: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedStatusApproved",
    "defaultMessage": "Approved {dateTime}"
  },
  tasksFeedStatusCompleted: {
    "id": "be.contentSidebar.activityFeed.taskNew.tasksFeedStatusCompleted",
    "defaultMessage": "Completed {dateTime}"
  },
  taskAssignmentCompleted: {
    "id": "be.contentSidebar.activityFeed.taskNew.taskAssignmentCompleted",
    "defaultMessage": "Completed"
  },
  taskDeleteMenuItem: {
    "id": "be.contentSidebar.activityFeed.task.taskDeleteMenuItem",
    "defaultMessage": "Delete task"
  },
  taskEditMenuItem: {
    "id": "be.contentSidebar.activityFeed.task.taskEditMenuItem",
    "defaultMessage": "Modify task"
  },
  taskDeletePrompt: {
    "id": "be.contentSidebar.activityFeed.task.taskDeletePrompt",
    "defaultMessage": "Are you sure you want to permanently delete this task?"
  },
  taskAnyAffordanceTooltip: {
    "id": "be.contentSidebar.activityFeed.task.taskAnyAffordanceTooltip",
    "defaultMessage": "Only one assignee is required to complete this task"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/utils/formatTaggedMessage.js":
/*!*********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/utils/formatTaggedMessage.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/link */ "./src/components/link/index.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _common_user_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/user-link */ "./src/elements/content-sidebar/activity-feed/common/user-link/index.js");
/**
 * 
 * @file Util for formatting tagged messages
 */



 // this regex matches one of the following regular expressions:
// mentions: ([@＠﹫]\[[0-9]+:[^\]]+])
// urls: (?:\b)((?:(?:ht|f)tps?:\/\/)[\w\._\-]+(:\d+)?(\/[\w\-_\.~\+\/#\?&%=:\[\]@!$'\(\)\*;,]*)?)
// NOTE: There are useless escapes in the regex below, should probably remove them when safe
// eslint-disable-next-line

var splitRegex = /((?:[@＠﹫]\[[0-9]+:[^\]]+])|(?:\b(?:(?:ht|f)tps?:\/\/)[\w\._\-]+(?::\d+)?(?:\/[\w\-_\.~\+\/#\?&%=:\[\]@!$'\(\)\*;,]*)?))/gim;
/**
 * Formats a message a string and replaces the following:
 * - all occurrence of mention patterns with a UserLink component
 * - all occurrence of urls with a Link component
 * Ex mention format: @[123:Hello World]
 * @param {String} tagged_message The message string to format
 * @param {String} itemID The id of the tagged message
 * @param {Boolean} shouldReturnString The boolean value whether it should return string
 * @param {Function} [getUserProfileUrl] The method to generate a user profile url
 * @returns {String|React.Node}
 */

var formatTaggedMessage = (tagged_message, itemID, shouldReturnString, getUserProfileUrl) => {
  var contentItems = tagged_message.split(splitRegex).map((text, contentIndex) => {
    var contentKey = "".concat(contentIndex, "-").concat(itemID); // attempt mention match

    var mentionMatch = text.match(/([@＠﹫])\[([0-9]+):([^\]]+)]/i);

    if (mentionMatch) {
      var [, trigger, id, name] = mentionMatch;

      if (shouldReturnString) {
        return "".concat(trigger).concat(name);
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_user_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: contentKey,
        className: "bcs-comment-mention",
        "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["ACTIVITY_TARGETS"].MENTION,
        getUserProfileUrl: getUserProfileUrl,
        id: id,
        name: "".concat(trigger).concat(name)
      });
    }

    if (!shouldReturnString) {
      // attempt url match
      // NOTE: There are useless escapes in the regex below, should probably remove them when safe
      var urlMatch = text.match( // eslint-disable-next-line no-useless-escape
      /((?:(?:ht|f)tps?:\/\/)[\w\._\-]+(?::\d+)?(?:\/[\w\-_\.~\+\/#\?&%=:\[\]@!$'\(\)\*;,]*)?)/i);

      if (urlMatch) {
        var [, url] = urlMatch;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_link__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          key: contentKey,
          href: url
        }, url);
      }
    }

    return text;
  });
  return shouldReturnString ? contentItems.join('') : contentItems;
};

/* harmony default export */ __webpack_exports__["default"] = (formatTaggedMessage);

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/version/CollapsedVersion.js":
/*!********************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/version/CollapsedVersion.js ***!
  \********************************************************************************/
/*! exports provided: CollapsedVersionBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsedVersionBase", function() { return CollapsedVersion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _icons_general_IconInfoInverted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../icons/general/IconInfoInverted */ "./src/icons/general/IconInfoInverted.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _common_selectors_version__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/selectors/version */ "./src/elements/common/selectors/version.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _Version_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Version.scss */ "./src/elements/content-sidebar/activity-feed/version/Version.scss");
/* harmony import */ var _Version_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Version_scss__WEBPACK_IMPORTED_MODULE_7__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Collapsed Version component
 */









function getMessageForAction(action, collaborators, version_start, version_end) {
  // We only support collapsing for multiple upload versions
  if (action !== 'upload') {
    return null;
  }

  var collaboratorIDs = Object.keys(collaborators);
  var numberOfCollaborators = collaboratorIDs.length;
  var versionRange = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcs-Version-range"
  }, version_start, " - ", version_end);

  if (numberOfCollaborators === 1) {
    var collaborator = collaborators[collaboratorIDs[0]];
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionUploadCollapsed, {
      values: {
        name: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, collaborator.name),
        versions: versionRange
      }
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionMultipleUsersUploaded, {
    values: {
      numberOfCollaborators,
      versions: versionRange
    }
  }));
}

var CollapsedVersion = props => {
  var action = _common_selectors_version__WEBPACK_IMPORTED_MODULE_5__["default"].getVersionAction(props);
  var {
    collaborators,
    intl,
    onInfo,
    versions,
    version_start,
    version_end
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-Version"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcs-Version-message"
  }, getMessageForAction(action, collaborators, version_start, version_end)), onInfo ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcs-Version-actions"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "aria-label": intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_4__["default"].getVersionInfo),
    className: "bcs-Version-info",
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__["ACTIVITY_TARGETS"].VERSION_CARD,
    onClick: () => {
      onInfo({
        versions
      });
    },
    type: "button"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconInfoInverted__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: 16,
    width: 16
  }))) : null);
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(CollapsedVersion));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/version/Version.js":
/*!***********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/version/Version.js ***!
  \***********************************************************************/
/*! exports provided: VersionBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionBase", function() { return Version; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _icons_general_IconInfoInverted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../icons/general/IconInfoInverted */ "./src/icons/general/IconInfoInverted.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _common_selectors_version__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/selectors/version */ "./src/elements/common/selectors/version.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _Version_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Version.scss */ "./src/elements/content-sidebar/activity-feed/version/Version.scss");
/* harmony import */ var _Version_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Version_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Version component
 */









var ACTION_MAP = {
  [_constants__WEBPACK_IMPORTED_MODULE_7__["VERSION_DELETE_ACTION"]]: _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionDeleted,
  [_constants__WEBPACK_IMPORTED_MODULE_7__["VERSION_PROMOTE_ACTION"]]: _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionPromoted,
  [_constants__WEBPACK_IMPORTED_MODULE_7__["VERSION_RESTORE_ACTION"]]: _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionRestored,
  [_constants__WEBPACK_IMPORTED_MODULE_7__["VERSION_UPLOAD_ACTION"]]: _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionUploaded
};

var Version = props => {
  var action = _common_selectors_version__WEBPACK_IMPORTED_MODULE_5__["default"].getVersionAction(props);
  var {
    id,
    intl,
    onInfo,
    version_number,
    version_promoted
  } = props;
  var {
    name
  } = _common_selectors_version__WEBPACK_IMPORTED_MODULE_5__["default"].getVersionUser(props);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-Version"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcs-Version-message"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, ACTION_MAP[action], {
    values: {
      name: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, name),
      version_number,
      version_promoted
    }
  }))), onInfo ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcs-Version-actions"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].getVersionInfo),
    className: "bcs-Version-info",
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__["ACTIVITY_TARGETS"].VERSION_CARD,
    onClick: () => {
      onInfo({
        id,
        version_number
      });
    },
    type: "button"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconInfoInverted__WEBPACK_IMPORTED_MODULE_2__["default"], {
    height: 16,
    width: 16
  }))) : null);
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(Version));

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/version/Version.scss":
/*!*************************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/version/Version.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/activity-feed/version/index.js":
/*!*********************************************************************!*\
  !*** ./src/elements/content-sidebar/activity-feed/version/index.js ***!
  \*********************************************************************/
/*! exports provided: CollapsedVersion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CollapsedVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollapsedVersion */ "./src/elements/content-sidebar/activity-feed/version/CollapsedVersion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapsedVersion", function() { return _CollapsedVersion__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Version */ "./src/elements/content-sidebar/activity-feed/version/Version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Version__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/elements/content-sidebar/messages.js":
/*!**************************************************!*\
  !*** ./src/elements/content-sidebar/messages.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/**
 * 
 * @file i18n messages
 * @author Box
 */

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  tasksAddTask: {
    "id": "be.contentSidebar.addTask",
    "defaultMessage": "Add Task"
  },
  taskAddTaskGeneral: {
    "id": "be.contentSidebar.addTask.general",
    "defaultMessage": "General Task"
  },
  taskAddTaskGeneralDescription: {
    "id": "be.contentSidebar.addTask.general.description",
    "defaultMessage": "Assignees will be responsible for marking tasks as complete"
  },
  taskAddTaskApproval: {
    "id": "be.contentSidebar.addTask.approval",
    "defaultMessage": "Approval Task"
  },
  taskAddTaskApprovalDescription: {
    "id": "be.contentSidebar.addTask.approval.description",
    "defaultMessage": "Assignees will be responsible for approving or rejecting tasks"
  },
  tasksCreateGeneralTaskFormTitle: {
    "id": "be.contentSidebar.addTask.general.title",
    "defaultMessage": "Create General Task"
  },
  tasksCreateApprovalTaskFormTitle: {
    "id": "be.contentSidebar.addTask.approval.title",
    "defaultMessage": "Create Approval Task"
  },
  tasksEditApprovalTaskFormTitle: {
    "id": "be.contentSidebar.editTask.approval.title",
    "defaultMessage": "Modify Approval Task"
  },
  tasksEditGeneralTaskFormTitle: {
    "id": "be.contentSidebar.editTask.general.title",
    "defaultMessage": "Modify General Task"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/withErrorHandling.js":
/*!***********************************************************!*\
  !*** ./src/elements/content-sidebar/withErrorHandling.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ "./src/icons/avatars/UnknownUserAvatar.js":
/*!************************************************!*\
  !*** ./src/icons/avatars/UnknownUserAvatar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ICON_CLASS = 'unknown-user-avatar';

class UnknownUserAvatar extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "idPrefix", "".concat(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()(ICON_CLASS), "-"));
  }

  render() {
    var {
      className,
      height,
      title,
      width
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "".concat(ICON_CLASS, " ").concat(className),
      height: height,
      title: title,
      viewBox: "0 0 28 28",
      width: width
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
      cx: "14",
      cy: "14",
      id: "".concat(this.idPrefix, "a"),
      r: "14"
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
      fill: "none",
      fillRule: "evenodd"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", {
      className: "background-fill-color",
      fill: "#EDEDED",
      xlinkHref: "#".concat(this.idPrefix, "a")
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      className: "fill-color",
      d: "M5.5 25.1C6.7 21 10 18 14 18s7.3 3 8.5 7.1a14 14 0 0 1-17 0zM14 16a5 5 0 1 1 0-10 5 5 0 0 1 0 10z",
      fill: "#C3C3C3"
    })));
  }

}

_defineProperty(UnknownUserAvatar, "defaultProps", {
  className: '',
  height: 28,
  width: 28
});

/* harmony default export */ __webpack_exports__["default"] = (UnknownUserAvatar);

/***/ }),

/***/ "./src/icons/general/IconAnyTask.js":
/*!******************************************!*\
  !*** ./src/icons/general/IconAnyTask.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");




var IconAnyTask = (_ref) => {
  var {
    className = '',
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlGray62"],
    height = 32,
    title,
    width = 32
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: className,
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: color,
    fillRule: "nonzero"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M28.7484364 16.4549424c0 1.0039348.7442362 1.8177849 1.6622981 1.8177849.9180618 0 1.662298-.8138501 1.662298-1.8177849V5.54823284c0-1.47292747-1.5180216-2.33430191-2.6193324-1.48629378L26.960253 5.9818905c-.7506441.57799516-.9306825 1.71198921-.402127 2.5328466.4995837.7758637 1.4533974.99427836 2.1903104.52782657v7.41237873zM13.1639416 17.5454545c4.0166164 0 7.2727273-3.2561109 7.2727273-7.2727272C20.4366689 6.25611091 17.180558 3 13.1639416 3c-4.01661637 0-7.27272728 3.25611091-7.27272728 7.2727273 0 4.0166163 3.25611091 7.2727272 7.27272728 7.2727272zm0-3.6363636c-2.0083082 0-3.63636365-1.6280554-3.63636365-3.6363636 0-2.00830821 1.62805545-3.63636366 3.63636365-3.63636366s3.6363636 1.62805545 3.6363636 3.63636366c0 2.0083082-1.6280554 3.6363636-3.6363636 3.6363636zM26.0799741 26.82097c-2.6627973-4.6162045-7.5876175-7.459488-12.9167671-7.4573363-5.33091328-.0023936-10.25839928 2.8441776-12.9201858 7.4647912-.50123987.8701058-.20221498 1.9818011.66789077 2.4830409.87010576.5012399 1.98180104.202215 2.48304091-.6678907 2.01238031-3.4933049 5.73768893-5.6453874 9.76917202-5.6435766 4.0305283-.0016279 7.7538215 2.147969 9.766966 5.6379405.5017421.8698163 1.6136099 1.1681993 2.4834261.6664571.8698162-.5017421 1.1681992-1.6136098.6664571-2.4834261z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconAnyTask);

/***/ }),

/***/ "./src/icons/general/IconInfoInverted.js":
/*!***********************************************!*\
  !*** ./src/icons/general/IconInfoInverted.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconInfoInverted = (_ref) => {
  var {
    className = '',
    color = '#000000',
    height = 18,
    title,
    width = 18
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-info-inverted ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 18 18",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M8.1 13.5h1.8V8.1H8.1v5.4zM9 0C4.05 0 0 4.05 0 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9zm0 16.2c-3.96 0-7.2-3.24-7.2-7.2S5.04 1.8 9 1.8s7.2 3.24 7.2 7.2-3.24 7.2-7.2 7.2zm-.9-9.9h1.8V4.5H8.1v1.8z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconInfoInverted);

/***/ }),

/***/ "./src/icons/general/IconPencil.js":
/*!*****************************************!*\
  !*** ./src/icons/general/IconPencil.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconPencil = (_ref) => {
  var {
    className = '',
    color = '#777777',
    height = 13,
    title,
    width = 13
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-pencil ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 13 13",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M12,1c-0.8-0.8-2.1-0.8-2.9,0L2,8.1c0,0,0,0-0.1,0.1l0,0c0,0,0,0,0,0.1l0,0L0.6,12c-0.1,0.2,0,0.4,0.2,0.5 c0.1,0,0.2,0,0.2,0l3.7-1.3l0,0c0,0,0,0,0.1,0l0,0c0,0,0,0,0.1-0.1l6.5-6.5l0,0L12,3.9C12.8,3.1,12.8,1.8,12,1z M4.6,10.2L2.8,8.4 l6-6l1.8,1.8L4.6,10.2z M2.4,9.1l1.5,1.5l-2.4,0.8L2.4,9.1z M11.5,3.4l-0.4,0.4L9.3,1.9l0.4-0.4c0.5-0.5,1.3-0.5,1.8,0 C12,2.1,12,2.9,11.5,3.4z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconPencil);

/***/ }),

/***/ "./src/icons/general/IconRejected.js":
/*!*******************************************!*\
  !*** ./src/icons/general/IconRejected.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconRejected = (_ref) => {
  var {
    className = '',
    color = '#ED3757',
    height = 18,
    title,
    width = 18
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-rejected ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 18 18",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    cx: 9,
    cy: 9,
    fill: color,
    r: 9
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M9 7.586l2.828-2.829 1.415 1.415L10.414 9l2.829 2.828-1.415 1.415L9 10.414l-2.828 2.829-1.415-1.415L7.586 9 4.757 6.172l1.415-1.415z",
    fill: "#FFF",
    fillRule: "nonzero"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconRejected);

/***/ }),

/***/ "./src/icons/two-toned/IconTaskApproval.js":
/*!*************************************************!*\
  !*** ./src/icons/two-toned/IconTaskApproval.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");




var IconTaskApproval = (_ref) => {
  var {
    className = '',
    height = 24,
    title,
    width = 24
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bdl-IconTaskApproval ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "none",
    fillRule: "nonzero"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    className: "background-color",
    fill: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlBoxBlue"],
    cx: "16",
    cy: "16",
    r: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    transform: "translate(8 5.333)",
    className: "foreground-color",
    fill: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["white"]
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M11.267 6.51c-1.133 2.242-1.669 4.276-1.614 6.102.006.213-.177.388-.405.388H6.752c-.228 0-.41-.175-.405-.388.055-1.826-.481-3.86-1.614-6.102C2.953 2.986 4.557 0 8 0s5.047 2.986 3.267 6.51z"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    y: "14.337",
    width: "16",
    height: "3.353",
    rx: "1.676"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    x: "1.143",
    y: "18.808",
    width: "13.714",
    height: "1.192",
    rx: ".596"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IconTaskApproval);

/***/ }),

/***/ "./src/icons/two-toned/IconTaskGeneral.js":
/*!************************************************!*\
  !*** ./src/icons/two-toned/IconTaskGeneral.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");




var IconTaskGeneral = (_ref) => {
  var {
    className = '',
    height = 24,
    title,
    width = 24
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bdl-IconTaskGeneral ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 32 32",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fillRule: "nonzero",
    fill: "none"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
    className: "background-color",
    fill: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlBoxBlue"],
    cx: "16.162",
    cy: "16.162",
    r: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M11.717 8.162v.889c0 1.472.995 2.666 2.222 2.666h4.445c1.227 0 2.222-1.194 2.222-2.666v-.89h1.281c.766 0 1.386.62 1.386 1.386v13.23c0 .764-.62 1.385-1.386 1.385H10.436c-.765 0-1.385-.62-1.385-1.386V9.546c0-.764.62-1.384 1.385-1.384h1.281zm6.463 6.503l-2.741 2.924-1.354-1.203a.889.889 0 1 0-1.18 1.329l2 1.778c.36.32.909.295 1.238-.057l3.334-3.555a.889.889 0 1 0-1.297-1.216zm-4.981-6.503h5.926v.889c0 .49-.332.888-.741.888h-4.445c-.409 0-.74-.398-.74-.888v-.89z",
    className: "foreground-color",
    fill: _styles_variables__WEBPACK_IMPORTED_MODULE_2__["white"]
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconTaskGeneral);

/***/ }),

/***/ "./src/utils/parseCSV.js":
/*!*******************************!*\
  !*** ./src/utils/parseCSV.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Parse a comma separated values text and return an array of separated strings
 *
 * @param  {string} text The input string
 * @return {array} A list of separated strings
 *
 * @example
 * parse('a, b, "c, d"')
 * returns ["a", "b", "c, d"]
 */
function parseCSV(text) {
  if (text === null || typeof text === 'undefined') {
    // Input text is either null or undefined
    return [];
  } // Convert the comma separated text into array
  //
  // The logic of the regular expression is simple
  // look ahead comma or carriage return and retrieve:
  //   1. either strings that are surrounded by double quotes
  //   2. or strings that do not contain comma and carriage return


  var components = text.match(/(".*?"|[^",\r\n]+)(?=\s*[,\r\n]|\s*$)/g);

  if (!components) {
    // No match pattern is found
    return [];
  }

  return components.map(c => {
    // Trim the leading and trailing spaces
    c = c.trim(); // Remove double quote pairs from both ends
    // example '"""abc"""' will be altered to 'abc'

    while (c.length >= 2 && c.charAt(0) === '"' && c.charAt(c.length - 1) === '"') {
      c = c.substr(1, c.length - 2);
    }

    return c;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (parseCSV);

/***/ })

}]);
//# sourceMappingURL=activity-sidebar.no.react.js.map
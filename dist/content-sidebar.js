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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-sidebar"],{

/***/ "./src/components/sidebar-toggle-button/SidebarToggleButton.js":
/*!*********************************************************************!*\
  !*** ./src/components/sidebar-toggle-button/SidebarToggleButton.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _icons_general_IconHide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconHide */ "./src/icons/general/IconHide.js");
/* harmony import */ var _icons_general_IconShow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/general/IconShow */ "./src/icons/general/IconShow.js");
/* harmony import */ var _plain_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tooltip */ "./src/components/tooltip/index.js");
/* harmony import */ var _elements_common_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _SidebarToggleButton_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SidebarToggleButton.scss */ "./src/components/sidebar-toggle-button/SidebarToggleButton.scss");
/* harmony import */ var _SidebarToggleButton_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_SidebarToggleButton_scss__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










var DIRECTION_LEFT = 'left';
var DIRECTION_RIGHT = 'right';

var SidebarToggleButton = (_ref) => {
  var {
    className = '',
    direction = DIRECTION_RIGHT,
    intl,
    isOpen,
    onClick
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "direction", "intl", "isOpen", "onClick"]);

  var isCollapsed = !isOpen ? 'collapsed' : '';
  var intlMessage = isOpen ? _elements_common_messages__WEBPACK_IMPORTED_MODULE_7__["default"].sidebarHide : _elements_common_messages__WEBPACK_IMPORTED_MODULE_7__["default"].sidebarShow;
  var intlText = intl.formatMessage(intlMessage);
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'bdl-SidebarToggleButton', {
    'bdl-is-collapsed': isCollapsed
  });
  var tooltipPosition = direction === DIRECTION_LEFT ? 'middle-right' : 'middle-left';

  var renderButton = () => {
    if (direction === DIRECTION_LEFT) {
      return isOpen ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconShow__WEBPACK_IMPORTED_MODULE_4__["default"], {
        height: 16,
        width: 16
      }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconHide__WEBPACK_IMPORTED_MODULE_3__["default"], {
        height: 16,
        width: 16
      });
    }

    return isOpen ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconHide__WEBPACK_IMPORTED_MODULE_3__["default"], {
      height: 16,
      width: 16
    }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconShow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      height: 16,
      width: 16
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tooltip__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: tooltipPosition,
    text: intlText
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_plain_button__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    "aria-label": intlText,
    className: classes,
    onClick: onClick,
    type: "button"
  }, rest), renderButton()));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(SidebarToggleButton));

/***/ }),

/***/ "./src/components/sidebar-toggle-button/SidebarToggleButton.scss":
/*!***********************************************************************!*\
  !*** ./src/components/sidebar-toggle-button/SidebarToggleButton.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/tooltip/index.js":
/*!*****************************************!*\
  !*** ./src/components/tooltip/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltip */ "./src/components/tooltip/Tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Tooltip__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/common/api-context/APIContext.js":
/*!*******************************************************!*\
  !*** ./src/elements/common/api-context/APIContext.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api */ "./src/api/index.js");
/**
 * 
 * @file Creates an API Context
 * @author Box
 */


/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext());

/***/ }),

/***/ "./src/elements/common/api-context/index.js":
/*!**************************************************!*\
  !*** ./src/elements/common/api-context/index.js ***!
  \**************************************************/
/*! exports provided: default, withAPIContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _APIContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIContext */ "./src/elements/common/api-context/APIContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _APIContext__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _withAPIContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withAPIContext */ "./src/elements/common/api-context/withAPIContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAPIContext", function() { return _withAPIContext__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/elements/common/api-context/withAPIContext.js":
/*!***********************************************************!*\
  !*** ./src/elements/common/api-context/withAPIContext.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _APIContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./APIContext */ "./src/elements/common/api-context/APIContext.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Wraps a component with the API context
 * @author Box
 */



var withAPIContext = WrappedComponent => react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_APIContext__WEBPACK_IMPORTED_MODULE_1__["default"].Consumer, null, api => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrappedComponent, _extends({
  ref: ref
}, props, {
  api: api
}))));

/* harmony default export */ __webpack_exports__["default"] = (withAPIContext);

/***/ }),

/***/ "./src/elements/common/interactionTargets.js":
/*!***************************************************!*\
  !*** ./src/elements/common/interactionTargets.js ***!
  \***************************************************/
/*! exports provided: SIDEBAR_NAV_TARGETS, SECTION_TARGETS, DETAILS_TARGETS, ACTIVITY_TARGETS, SKILLS_TARGETS, INTERACTION_TARGET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_NAV_TARGETS", function() { return SIDEBAR_NAV_TARGETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTION_TARGETS", function() { return SECTION_TARGETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DETAILS_TARGETS", function() { return DETAILS_TARGETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVITY_TARGETS", function() { return ACTIVITY_TARGETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILLS_TARGETS", function() { return SKILLS_TARGETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERACTION_TARGET", function() { return INTERACTION_TARGET; });
var SIDEBAR_NAV_TARGETS = {
  ACTIVITY: 'sidebaractivity',
  DETAILS: 'sidebardetails',
  SKILLS: 'sidebarskills',
  METADATA: 'sidebarmetadata',
  TOGGLE: 'sidebartoggle'
};
var SECTION_TARGETS = {
  FILE_PROPERTIES: 'fileproperties',
  ACCESS_STATS: 'accessstats',
  CLASSIFICATION: 'classification'
};
var DETAILS_TARGETS = {
  ACCESS_STATS: {
    COMMENTS: 'accessstats-comments',
    DOWNLOADS: 'accessstats-downloads',
    EDITS: 'accessstats-edits',
    PREVIEWS: 'accessstats-previews',
    VIEWS: 'accessstats-views',
    VIEW_DETAILS: 'accessstats-viewdetails'
  },
  CLASSIFICATION_ADD: 'addclassification',
  CLASSIFICATION_EDIT: 'editclassification',
  DESCRIPTION: 'description',
  VERSION_HISTORY: 'versionhistory'
};
var ACTIVITY_TARGETS = {
  INLINE_DELETE_CONFIRM: 'activityfeed-delete-confirm',
  INLINE_DELETE_CANCEL: 'activityfeed-delete-cancel',
  APPROVAL_FORM_ADD_TASK: 'activityfeed-apporvalformaddtask',
  APPROVAL_FORM_CANCEL: 'activityfeed-approvalformcancel',
  APPROVAL_FORM_POST: 'activityfeed-approvalformpost',
  PROFILE: 'activityfeed-profilelink',
  MENTION: 'activityfeed-mentionlink',
  VERSION_CARD: 'activityfeed-versioninfo',
  TASK_DATE_PICKER: 'activityfeed-taskdatepicker',
  TASK_APPROVE: 'activityfeed-taskapprove',
  TASK_COMPLETE: 'activityfeed-taskcomplete',
  TASK_REJECT: 'activityfeed-taskreject',
  TASK_OPTIONS: 'activityfeedtask',
  // component
  TASK_OPTIONS_DELETE: 'activityfeed-task-delete',
  TASK_OPTIONS_EDIT: 'activityfeed-task-edit',
  COMMENT_OPTIONS: 'activityfeedcomment',
  // component
  COMMENT_OPTIONS_DELETE: 'activityfeed-comment-delete',
  COMMENT_OPTIONS_EDIT: 'activityfeed-comment-edit'
};
var SKILLS_TARGETS = {
  FACES: {
    CARD: 'skill-facecard',
    FACE: 'skill-face',
    DELETE: 'skill-facedelete',
    EDIT: 'skill-faceedit',
    EDIT_SAVE: 'skill-faceeditsave',
    EDIT_CANCEL: 'skill-faceeditcancel',
    TIMELINE: 'skill-facetimeslice'
  },
  KEYWORDS: {
    CARD: 'skill-keywordcard',
    EDIT: 'skill-keywordedit',
    EDIT_SAVE: 'skill-keywordeditsave',
    EDIT_CANCEL: 'skill-keywordeditcancel',
    TIMELINE: 'skill-keywordtimeslice',
    SELECT: 'skill-keywordselect'
  },
  TRANSCRIPTS: {
    CARD: 'skill-transcriptcard',
    COPY: 'skill-transcriptcopy',
    EDIT: 'skill-transcriptedit',
    EXPAND: 'skill-transcriptexpand',
    EDIT_SAVE: 'skill-transcripteditsave',
    EDIT_CANCEL: 'skill-transcripteditcancel',
    TRANSCRIPT: 'skill-transcript',
    EDIT_TEXT: 'skill-transcriptedittext'
  },
  TIMELINE: {
    NEXT: 'skill-timelimelinenext',
    PREVIOUS: 'skill-timelineprevious'
  }
};
var INTERACTION_TARGET = 'data-resin-target';

/***/ }),

/***/ "./src/elements/common/modal.scss":
/*!****************************************!*\
  !*** ./src/elements/common/modal.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/common/nav-button/BackButton.js":
/*!******************************************************!*\
  !*** ./src/elements/common/nav-button/BackButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _icons_general_IconNavigateLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icons/general/IconNavigateLeft */ "./src/icons/general/IconNavigateLeft.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../messages */ "./src/elements/common/messages.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _BackButton_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BackButton.scss */ "./src/elements/common/nav-button/BackButton.scss");
/* harmony import */ var _BackButton_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_BackButton_scss__WEBPACK_IMPORTED_MODULE_7__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Back Button component
 * @author Box
 */









var BackButton = (_ref) => {
  var {
    className,
    to
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "to"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], null, (_ref2) => {
    var {
      history
    } = _ref2;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-BackButton', className),
      onClick: () => to ? history.push(to) : history.goBack(),
      type: "button"
    }, rest), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconNavigateLeft__WEBPACK_IMPORTED_MODULE_4__["default"], {
      height: 24,
      width: 24
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: "accessibility-hidden"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_5__["default"].back)));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BackButton);

/***/ }),

/***/ "./src/elements/common/nav-button/BackButton.scss":
/*!********************************************************!*\
  !*** ./src/elements/common/nav-button/BackButton.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/common/nav-button/NavButton.js":
/*!*****************************************************!*\
  !*** ./src/elements/common/nav-button/NavButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/dom */ "./src/utils/dom.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Nav Button component intended to mimic React Router's NavLink component for non-anchor elements
 * @author Box
 */





var NavButton = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => {
  var {
    activeClassName = 'bdl-is-active',
    children,
    className = 'bdl-NavButton',
    component: Component = _components_plain_button__WEBPACK_IMPORTED_MODULE_3__["default"],
    exact,
    isActive,
    onClick: _onClick,
    replace,
    strict,
    to
  } = props,
      rest = _objectWithoutProperties(props, ["activeClassName", "children", "className", "component", "exact", "isActive", "onClick", "replace", "strict", "to"]);

  var path = typeof to === 'object' ? to.pathname : to;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: exact,
    path: path,
    strict: strict
  }, (_ref) => {
    var {
      history,
      location,
      match
    } = _ref;
    var isActiveValue = !!(isActive ? isActive(match, location) : match);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
        [activeClassName]: isActiveValue
      }),
      onClick: event => {
        if (_onClick) {
          _onClick(event);
        }

        if (!event.defaultPrevented && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_4__["isLeftClick"])(event)) {
          var method = replace ? history.replace : history.push;
          method(to);
        }
      },
      ref: ref
    }, rest), children);
  });
});
/* harmony default export */ __webpack_exports__["default"] = (NavButton);

/***/ }),

/***/ "./src/elements/common/nav-button/index.js":
/*!*************************************************!*\
  !*** ./src/elements/common/nav-button/index.js ***!
  \*************************************************/
/*! exports provided: BackButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackButton */ "./src/elements/common/nav-button/BackButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackButton", function() { return _BackButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavButton */ "./src/elements/common/nav-button/NavButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NavButton__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/elements/content-sidebar/ContentSidebar.js":
/*!********************************************************!*\
  !*** ./src/elements/content-sidebar/ContentSidebar.js ***!
  \********************************************************/
/*! exports provided: ContentSidebarComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSidebarComponent", function() { return ContentSidebar; });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/api-context */ "./src/elements/common/api-context/index.js");
/* harmony import */ var _common_Internationalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Internationalize */ "./src/elements/common/Internationalize.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sidebar */ "./src/elements/content-sidebar/Sidebar.js");
/* harmony import */ var _common_nav_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/nav-router */ "./src/elements/common/nav-router/index.js");
/* harmony import */ var _SidebarUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SidebarUtils */ "./src/elements/content-sidebar/SidebarUtils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _common_logger_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/logger/constants */ "./src/elements/common/logger/constants.js");
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/performance */ "./src/utils/performance.js");
/* harmony import */ var _utils_fields__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/fields */ "./src/utils/fields.js");
/* harmony import */ var _common_error_boundary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/error-boundary */ "./src/elements/common/error-boundary/index.js");
/* harmony import */ var _common_feature_checking__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/feature-checking */ "./src/elements/common/feature-checking/index.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/logger */ "./src/elements/common/logger/index.js");
/* harmony import */ var _common_fonts_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/fonts.scss */ "./src/elements/common/fonts.scss");
/* harmony import */ var _common_fonts_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_common_fonts_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _common_base_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/base.scss */ "./src/elements/common/base.scss");
/* harmony import */ var _common_base_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_common_base_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _common_modal_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/modal.scss */ "./src/elements/common/modal.scss");
/* harmony import */ var _common_modal_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_common_modal_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ContentSidebar_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ContentSidebar.scss */ "./src/elements/content-sidebar/ContentSidebar.scss");
/* harmony import */ var _ContentSidebar_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_ContentSidebar_scss__WEBPACK_IMPORTED_MODULE_20__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Content Sidebar Container
 * @author Box
 */





















var MARK_NAME_JS_READY = "".concat(_constants__WEBPACK_IMPORTED_MODULE_10__["ORIGIN_CONTENT_SIDEBAR"], "_").concat(_common_logger_constants__WEBPACK_IMPORTED_MODULE_11__["EVENT_JS_READY"]);
Object(_utils_performance__WEBPACK_IMPORTED_MODULE_12__["mark"])(MARK_NAME_JS_READY);

class ContentSidebar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  /**
   * [constructor]
   *
   * @private
   * @return {ContentSidebar}
   */
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      isLoading: true
    });

    _defineProperty(this, "errorCallback", (error, code) => {
      /* eslint-disable no-console */
      console.error(error);
      /* eslint-enable no-console */

      /* eslint-disable react/prop-types */

      this.props.onError(error, code, {
        error
      });
      /* eslint-enable react/prop-types */
    });

    _defineProperty(this, "fetchMetadataSuccessCallback", (_ref) => {
      var {
        editors
      } = _ref;
      this.setState({
        metadataEditors: editors
      });
    });

    _defineProperty(this, "fetchFileSuccessCallback", file => {
      this.setState({
        file,
        isLoading: false
      }, this.fetchMetadata);
    });

    var {
      apiHost,
      cache,
      clientName,
      language,
      requestInterceptor,
      responseInterceptor,
      sharedLink,
      sharedLinkPassword,
      token
    } = props;
    this.api = new _api__WEBPACK_IMPORTED_MODULE_4__["default"]({
      apiHost,
      cache,
      clientName,
      language,
      requestInterceptor,
      responseInterceptor,
      sharedLink,
      sharedLinkPassword,
      token
    });
    /* eslint-disable react/prop-types */

    var {
      logger
    } = props;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
    /* eslint-enable react/prop-types */
  }
  /**
   * Destroys api instances with caches
   *
   * @private
   * @return {void}
   */


  clearCache() {
    this.api.destroy(true);
  }
  /**
   * Cleanup
   *
   * @private
   * @inheritdoc
   * @return {void}
   */


  componentWillUnmount() {
    // Don't destroy the cache while unmounting
    this.api.destroy(false);
  }
  /**
   * Fetches the file data on load
   *
   * @private
   * @inheritdoc
   * @return {void}
   */


  componentDidMount() {
    this.fetchFile();
  }
  /**
   * Fetches new file data on update
   *
   * @private
   * @inheritdoc
   * @return {void}
   */


  componentDidUpdate(prevProps) {
    var {
      fileId
    } = this.props;
    var {
      fileId: prevFileId
    } = prevProps;

    if (fileId !== prevFileId) {
      this.fetchFile();
    }
  }
  /**
   * Network error callback
   *
   * @private
   * @param {Error} error - Error object
   * @param {string} code - error code
   * @return {void}
   */


  /**
   * Fetches file metadata editors if required
   *
   * @private
   * @return {void}
   */
  fetchMetadata() {
    var {
      file
    } = this.state;
    var {
      metadataSidebarProps
    } = this.props;
    var {
      isFeatureEnabled = true
    } = metadataSidebarProps; // Only fetch metadata if we think that the file may have metadata on it
    // but currently the metadata feature is turned off. Use case of this would be a free
    // user who doesn't have the metadata feature but is collabed on a file from a user
    // who added metadata on the file. If the feature is enabled we always end up showing
    // the metadata sidebar irrespective of there being any existing metadata or not.

    var canHaveMetadataSidebar = !isFeatureEnabled && _SidebarUtils__WEBPACK_IMPORTED_MODULE_9__["default"].canHaveMetadataSidebar(this.props);

    if (canHaveMetadataSidebar) {
      this.api.getMetadataAPI(false).getMetadata(file, this.fetchMetadataSuccessCallback, lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a, isFeatureEnabled);
    }
  }
  /**
   * File fetch success callback that sets the file and sidebar visibility.
   * Also makes an optional request to fetch metadata editors
   *
   * @private
   * @param {Object} file - Box file
   * @return {void}
   */


  /**
   * Fetches a file
   *
   * @private
   * @param {Object|void} [fetchOptions] - Fetch options
   * @return {void}
   */
  fetchFile() {
    var fetchOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var {
      fileId
    } = this.props;
    this.setState({
      isLoading: true
    });

    if (fileId && _SidebarUtils__WEBPACK_IMPORTED_MODULE_9__["default"].canHaveSidebar(this.props)) {
      this.api.getFileAPI().getFile(fileId, this.fetchFileSuccessCallback, this.errorCallback, _objectSpread({}, fetchOptions, {
        fields: _utils_fields__WEBPACK_IMPORTED_MODULE_13__["SIDEBAR_FIELDS_TO_FETCH"]
      }));
    }
  }
  /**
   * Refreshes the sidebar panel
   * @returns {void}
   */


  refresh() {
    if (this.sidebarRef) {
      this.sidebarRef.refresh();
    }
  }
  /**
   * Renders the sidebar
   *
   * @private
   * @inheritdoc
   * @return {Element}
   */


  render() {
    var {
      activitySidebarProps,
      additionalTabs,
      className,
      currentUser,
      defaultView,
      detailsSidebarProps,
      fileId,
      getPreview,
      getViewer,
      hasAdditionalTabs,
      hasActivityFeed,
      hasMetadata,
      hasSkills,
      hasVersions,
      history,
      isDefaultOpen,
      language,
      messages,
      metadataSidebarProps,
      onVersionChange,
      onVersionHistoryClick,
      versionsSidebarProps
    } = this.props;
    var {
      file,
      isLoading,
      metadataEditors
    } = this.state;
    var initialPath = defaultView.charAt(0) === '/' ? defaultView : "/".concat(defaultView);

    if (!file || !fileId || !_SidebarUtils__WEBPACK_IMPORTED_MODULE_9__["default"].shouldRenderSidebar(this.props, file, metadataEditors)) {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_Internationalize__WEBPACK_IMPORTED_MODULE_6__["default"], {
      language: language,
      messages: messages
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_api_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
      value: this.api
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_nav_router__WEBPACK_IMPORTED_MODULE_8__["default"], {
      history: history,
      initialEntries: [initialPath]
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      activitySidebarProps: activitySidebarProps,
      additionalTabs: additionalTabs,
      className: className,
      currentUser: currentUser,
      detailsSidebarProps: detailsSidebarProps,
      file: file,
      fileId: fileId,
      getPreview: getPreview,
      getViewer: getViewer,
      hasActivityFeed: hasActivityFeed,
      hasAdditionalTabs: hasAdditionalTabs,
      hasMetadata: hasMetadata,
      hasSkills: hasSkills,
      hasVersions: hasVersions,
      isDefaultOpen: isDefaultOpen,
      isLoading: isLoading,
      metadataEditors: metadataEditors,
      metadataSidebarProps: metadataSidebarProps,
      onVersionChange: onVersionChange,
      onVersionHistoryClick: onVersionHistoryClick,
      versionsSidebarProps: versionsSidebarProps,
      wrappedComponentRef: ref => {
        this.sidebarRef = ref;
      }
    }))));
  }

}

_defineProperty(ContentSidebar, "defaultProps", {
  activitySidebarProps: {},
  apiHost: _constants__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_HOSTNAME_API"],
  className: '',
  clientName: _constants__WEBPACK_IMPORTED_MODULE_10__["CLIENT_NAME_CONTENT_SIDEBAR"],
  defaultView: '',
  detailsSidebarProps: {},
  getPreview: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
  getViewer: lodash_noop__WEBPACK_IMPORTED_MODULE_2___default.a,
  hasActivityFeed: false,
  hasAdditionalTabs: false,
  hasMetadata: false,
  hasSkills: false,
  isDefaultOpen: true,
  metadataSidebarProps: {}
});


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_3___default()([_common_feature_checking__WEBPACK_IMPORTED_MODULE_15__["withFeatureProvider"], Object(_common_logger__WEBPACK_IMPORTED_MODULE_16__["withLogger"])(_constants__WEBPACK_IMPORTED_MODULE_10__["ORIGIN_CONTENT_SIDEBAR"]), Object(_common_error_boundary__WEBPACK_IMPORTED_MODULE_14__["withErrorBoundary"])(_constants__WEBPACK_IMPORTED_MODULE_10__["ORIGIN_CONTENT_SIDEBAR"])])(ContentSidebar));

/***/ }),

/***/ "./src/elements/content-sidebar/ContentSidebar.scss":
/*!**********************************************************!*\
  !*** ./src/elements/content-sidebar/ContentSidebar.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/Sidebar.js":
/*!*************************************************!*\
  !*** ./src/elements/content-sidebar/Sidebar.js ***!
  \*************************************************/
/*! exports provided: SIDEBAR_FORCE_KEY, SIDEBAR_FORCE_VALUE_CLOSED, SIDEBAR_FORCE_VALUE_OPEN, SidebarComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_FORCE_KEY", function() { return SIDEBAR_FORCE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_FORCE_VALUE_CLOSED", function() { return SIDEBAR_FORCE_VALUE_CLOSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_FORCE_VALUE_OPEN", function() { return SIDEBAR_FORCE_VALUE_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicator */ "./src/components/loading-indicator/LoadingIndicator.js");
/* harmony import */ var _utils_LocalStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/LocalStore */ "./src/utils/LocalStore.js");
/* harmony import */ var _SidebarNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SidebarNav */ "./src/elements/content-sidebar/SidebarNav.js");
/* harmony import */ var _SidebarPanels__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SidebarPanels */ "./src/elements/content-sidebar/SidebarPanels.js");
/* harmony import */ var _SidebarUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SidebarUtils */ "./src/elements/content-sidebar/SidebarUtils.js");
/* harmony import */ var _common_feature_checking__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/feature-checking */ "./src/elements/common/feature-checking/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Content Sidebar Component
 * @author Box
 */












var SIDEBAR_FORCE_KEY = 'bcs.force';
var SIDEBAR_FORCE_VALUE_CLOSED = 'closed';
var SIDEBAR_FORCE_VALUE_OPEN = 'open';

class Sidebar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "id", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_4___default()('bcs_'));

    _defineProperty(this, "sidebarPanels", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "store", new _utils_LocalStore__WEBPACK_IMPORTED_MODULE_7__["default"]());

    _defineProperty(this, "getUrlPrefix", pathname => {
      var basePath = pathname.substring(1).split('/')[0];
      return basePath;
    });

    _defineProperty(this, "handleVersionHistoryClick", event => {
      var {
        file,
        history
      } = this.props;
      var {
        file_version: currentVersion
      } = file;
      var fileVersionSlug = currentVersion ? "/".concat(currentVersion.id) : '';
      var urlPrefix = this.getUrlPrefix(history.location.pathname);

      if (event.preventDefault) {
        event.preventDefault();
      }

      history.push("/".concat(urlPrefix, "/versions").concat(fileVersionSlug));
    });

    this.state = {
      isDirty: this.getLocationState('open') || false
    };
    this.setForcedByLocation();
  }

  componentDidUpdate(prevProps) {
    var {
      fileId,
      history,
      location
    } = this.props;
    var {
      fileId: prevFileId,
      location: prevLocation
    } = prevProps;
    var {
      isDirty
    } = this.state; // User navigated to a different file without ever navigating the sidebar

    if (!isDirty && fileId !== prevFileId && location.pathname !== '/') {
      history.replace({
        pathname: '/',
        state: {
          silent: true
        }
      });
    } // User navigated or toggled the sidebar intentionally, internally or externally


    if (location !== prevLocation && !this.getLocationState('silent')) {
      this.setForcedByLocation();
      this.setState({
        isDirty: true
      });
    }
  }

  /**
   * Getter for location state properties.
   *
   * NOTE: Each location on the history stack has its own optional state object that is wholly separate from
   * this component's internal state. Values on the location state object can persist even between refreshes
   * when using certain history contexts, such as BrowserHistory.
   *
   * @param key - Optionally get a specific key value from state
   * @returns {any} - The location state or state key value
   */
  getLocationState(key) {
    var {
      location
    } = this.props;
    var {
      state: locationState = {}
    } = location;
    return lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(locationState, key);
  }
  /**
   * Getter/setter for sidebar forced state
   *
   * @param isOpen - Optionally set the sidebar to open/closed
   * @returns {string|null} - The sidebar open/closed state
   */


  isForced(isOpen) {
    if (isOpen !== undefined) {
      this.store.setItem(SIDEBAR_FORCE_KEY, isOpen ? SIDEBAR_FORCE_VALUE_OPEN : SIDEBAR_FORCE_VALUE_CLOSED);
    }

    return this.store.getItem(SIDEBAR_FORCE_KEY);
  }
  /**
   * Getter for whether the sidebar has been forced open
   * @returns {boolean} - True if the sidebar has been forced open
   */


  isForcedOpen() {
    return this.isForced() === SIDEBAR_FORCE_VALUE_OPEN;
  }
  /**
   * Getter for whether the sidebar has been forced open/closed previously
   * @returns {boolean} - True if the sidebar has been forced open/closed previously
   */


  isForcedSet() {
    return this.isForced() !== null;
  }
  /**
   * Refreshes the sidebar panel
   * @returns {void}
   */


  refresh() {
    var {
      current: sidebarPanels
    } = this.sidebarPanels;

    if (sidebarPanels) {
      sidebarPanels.refresh();
    }
  }
  /**
   * Helper to set the local store open state based on the location open state, if defined
   */


  setForcedByLocation() {
    var isLocationOpen = this.getLocationState('open');

    if (isLocationOpen !== undefined && isLocationOpen !== null) {
      this.isForced(isLocationOpen);
    }
  }

  render() {
    var {
      activitySidebarProps,
      additionalTabs,
      className,
      currentUser,
      detailsSidebarProps,
      file,
      fileId,
      getPreview,
      getViewer,
      hasAdditionalTabs,
      hasVersions,
      isDefaultOpen,
      isLoading,
      metadataEditors,
      metadataSidebarProps,
      onVersionChange,
      versionsSidebarProps
    } = this.props;
    var isOpen = this.isForcedSet() ? this.isForcedOpen() : !!isDefaultOpen;
    var hasActivity = _SidebarUtils__WEBPACK_IMPORTED_MODULE_10__["default"].canHaveActivitySidebar(this.props);
    var hasDetails = _SidebarUtils__WEBPACK_IMPORTED_MODULE_10__["default"].canHaveDetailsSidebar(this.props);
    var hasMetadata = _SidebarUtils__WEBPACK_IMPORTED_MODULE_10__["default"].shouldRenderMetadataSidebar(this.props, metadataEditors);
    var hasSkills = _SidebarUtils__WEBPACK_IMPORTED_MODULE_10__["default"].shouldRenderSkillsSidebar(this.props, file);
    var onVersionHistoryClick = hasVersions ? this.handleVersionHistoryClick : this.props.onVersionHistoryClick;
    var styleClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('be bcs', className, {
      'bcs-is-open': isOpen
    });
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("aside", {
      id: this.id,
      className: styleClassName
    }, isLoading ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-loading"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__["default"], null)) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
      additionalTabs: additionalTabs,
      elementId: this.id,
      fileId: fileId,
      hasActivity: hasActivity,
      hasAdditionalTabs: hasAdditionalTabs,
      hasDetails: hasDetails,
      hasMetadata: hasMetadata,
      hasSkills: hasSkills,
      isOpen: isOpen
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarPanels__WEBPACK_IMPORTED_MODULE_9__["default"], {
      activitySidebarProps: activitySidebarProps,
      currentUser: currentUser,
      elementId: this.id,
      detailsSidebarProps: detailsSidebarProps,
      file: file,
      fileId: fileId,
      getPreview: getPreview,
      getViewer: getViewer,
      hasActivity: hasActivity,
      hasDetails: hasDetails,
      hasMetadata: hasMetadata,
      hasSkills: hasSkills,
      hasVersions: hasVersions,
      isOpen: isOpen,
      key: file.id,
      metadataSidebarProps: metadataSidebarProps,
      onVersionChange: onVersionChange,
      onVersionHistoryClick: onVersionHistoryClick,
      ref: this.sidebarPanels,
      versionsSidebarProps: versionsSidebarProps
    })));
  }

}

_defineProperty(Sidebar, "defaultProps", {
  isDefaultOpen: true,
  isLoading: false
});


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_2___default()([_common_feature_checking__WEBPACK_IMPORTED_MODULE_11__["withFeatureConsumer"], react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"]])(Sidebar));

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarContent.js":
/*!********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarContent.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SidebarContent_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarContent.scss */ "./src/elements/content-sidebar/SidebarContent.scss");
/* harmony import */ var _SidebarContent_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SidebarContent_scss__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Preview sidebar content component
 * @author Box
 */




var SidebarContent = (_ref) => {
  var {
    actions,
    children,
    className,
    title,
    elementId,
    sidebarView
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["actions", "children", "className", "title", "elementId", "sidebarView"]);

  var label = "".concat(elementId).concat(elementId === '' ? '' : '_').concat(sidebarView);
  var id = "".concat(label, "-content");
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({
    "aria-labelledby": label,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-content', className),
    "data-testid": "bcs-content",
    id: id,
    role: "tabpanel"
  }, rest), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-content-header"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    className: "bcs-title"
  }, title), actions), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-scroll-content-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-scroll-content"
  }, children)));
};

SidebarContent.defaultProps = {
  elementId: '',
  sidebarView: ''
};
/* harmony default export */ __webpack_exports__["default"] = (SidebarContent);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarContent.scss":
/*!**********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarContent.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarLoading.js":
/*!********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarLoading.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicator */ "./src/components/loading-indicator/LoadingIndicator.js");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarContent */ "./src/elements/content-sidebar/SidebarContent.js");
/* harmony import */ var _SidebarSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarSection */ "./src/elements/content-sidebar/SidebarSection.js");
/* harmony import */ var _SidebarLoading_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarLoading.scss */ "./src/elements/content-sidebar/SidebarLoading.scss");
/* harmony import */ var _SidebarLoading_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SidebarLoading_scss__WEBPACK_IMPORTED_MODULE_4__);
/**
 * 
 * @file a placeholder component which will be displayed while a code splitted sidebar chunk is being loaded asyncronously
 * @author Box
 */






var SidebarLoading = (_ref) => {
  var {
    title
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isOpen: true
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "bcs-sidebar-loading"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarLoading);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarLoading.scss":
/*!**********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarLoading.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarLoadingError.js":
/*!*************************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarLoadingError.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_error_boundary_DefaultError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/error-boundary/DefaultError */ "./src/elements/common/error-boundary/DefaultError.js");
/* harmony import */ var _SidebarLoadingError_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarLoadingError.scss */ "./src/elements/content-sidebar/SidebarLoadingError.scss");
/* harmony import */ var _SidebarLoadingError_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SidebarLoadingError_scss__WEBPACK_IMPORTED_MODULE_2__);




var SidebarLoadingError = () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
  className: "bcs-loading-error"
}, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_error_boundary_DefaultError__WEBPACK_IMPORTED_MODULE_1__["default"], null));

/* harmony default export */ __webpack_exports__["default"] = (SidebarLoadingError);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarLoadingError.scss":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarLoadingError.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarNav.js":
/*!****************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarNav.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _icons_general_IconMagicWand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/general/IconMagicWand */ "./src/icons/general/IconMagicWand.js");
/* harmony import */ var _icons_general_IconMetadataThick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconMetadataThick */ "./src/icons/general/IconMetadataThick.js");
/* harmony import */ var _icons_general_IconDocInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/general/IconDocInfo */ "./src/icons/general/IconDocInfo.js");
/* harmony import */ var _icons_general_IconChatRound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/general/IconChatRound */ "./src/icons/general/IconChatRound.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _SidebarNavButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SidebarNavButton */ "./src/elements/content-sidebar/SidebarNavButton.js");
/* harmony import */ var _SidebarToggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SidebarToggle */ "./src/elements/content-sidebar/SidebarToggle.js");
/* harmony import */ var _additional_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./additional-tabs */ "./src/elements/content-sidebar/additional-tabs/index.js");
/* harmony import */ var _SidebarNavTablist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SidebarNavTablist */ "./src/elements/content-sidebar/SidebarNavTablist.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _SidebarNav_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SidebarNav.scss */ "./src/elements/content-sidebar/SidebarNav.scss");
/* harmony import */ var _SidebarNav_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_SidebarNav_scss__WEBPACK_IMPORTED_MODULE_13__);
/**
 * 
 * @file Preview sidebar nav component
 * @author Box
 */















var SidebarNav = (_ref) => {
  var {
    additionalTabs,
    elementId,
    fileId,
    hasActivity,
    hasAdditionalTabs,
    hasDetails,
    hasMetadata,
    hasSkills,
    intl,
    isOpen,
    onNavigate
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-SidebarNav",
    "aria-label": intl.formatMessage(_common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].sidebarNavLabel)
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-SidebarNav-tabs"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarNavTablist__WEBPACK_IMPORTED_MODULE_11__["default"], {
    elementId: elementId,
    isOpen: isOpen,
    onNavigate: onNavigate
  }, hasActivity && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarNavButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["SIDEBAR_NAV_TARGETS"].ACTIVITY,
    "data-testid": "sidebaractivity",
    sidebarView: _constants__WEBPACK_IMPORTED_MODULE_12__["SIDEBAR_VIEW_ACTIVITY"],
    tooltip: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].sidebarActivityTitle)
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconChatRound__WEBPACK_IMPORTED_MODULE_5__["default"], null)), hasDetails && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarNavButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["SIDEBAR_NAV_TARGETS"].DETAILS,
    "data-testid": "sidebardetails",
    sidebarView: _constants__WEBPACK_IMPORTED_MODULE_12__["SIDEBAR_VIEW_DETAILS"],
    tooltip: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].sidebarDetailsTitle)
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconDocInfo__WEBPACK_IMPORTED_MODULE_4__["default"], null)), hasSkills && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarNavButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["SIDEBAR_NAV_TARGETS"].SKILLS,
    "data-testid": "sidebarskills",
    sidebarView: _constants__WEBPACK_IMPORTED_MODULE_12__["SIDEBAR_VIEW_SKILLS"],
    tooltip: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].sidebarSkillsTitle)
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconMagicWand__WEBPACK_IMPORTED_MODULE_2__["default"], null)), hasMetadata && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarNavButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_7__["SIDEBAR_NAV_TARGETS"].METADATA,
    "data-testid": "sidebarmetadata",
    sidebarView: _constants__WEBPACK_IMPORTED_MODULE_12__["SIDEBAR_VIEW_METADATA"],
    tooltip: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_6__["default"].sidebarMetadataTitle)
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconMetadataThick__WEBPACK_IMPORTED_MODULE_3__["default"], null))), hasAdditionalTabs && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-SidebarNav-overflow"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_additional_tabs__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: fileId,
    tabs: additionalTabs
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-SidebarNav-footer"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarToggle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isOpen: isOpen
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(SidebarNav));

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarNav.scss":
/*!******************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarNav.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarNavButton.js":
/*!**********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarNavButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _common_nav_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/nav-button */ "./src/elements/common/nav-button/index.js");
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tooltip/Tooltip */ "./src/components/tooltip/Tooltip.js");
/* harmony import */ var _SidebarNavButton_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarNavButton.scss */ "./src/elements/content-sidebar/SidebarNavButton.scss");
/* harmony import */ var _SidebarNavButton_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SidebarNavButton_scss__WEBPACK_IMPORTED_MODULE_4__);
/**
 * 
 * @file Preview sidebar nav button component
 * @author Box
 */





var SidebarNavButton = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => {
  var {
    'data-resin-target': dataResinTarget,
    'data-testid': dataTestId,
    children,
    elementId = '',
    isOpen,
    sidebarView,
    tooltip
  } = props;
  var sidebarPath = "/".concat(sidebarView);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: sidebarPath
  }, (_ref) => {
    var {
      match
    } = _ref;
    var isMatch = !!match;

    var isActive = () => isMatch && !!isOpen;

    var isActiveValue = isActive();
    var isToggle = isMatch && match.isExact;
    var sidebarState = {
      open: isToggle ? !isOpen : true
    };
    var id = "".concat(elementId).concat(elementId === '' ? '' : '_').concat(sidebarView);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
      position: "middle-left",
      text: tooltip,
      isTabbable: false
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_nav_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "bcs-is-selected",
      "aria-selected": isActiveValue,
      "aria-controls": "".concat(id, "-content"),
      className: "bcs-NavButton",
      "data-resin-target": dataResinTarget,
      "data-testid": dataTestId,
      getDOMRef: ref,
      id: id,
      isActive: isActive,
      replace: isToggle,
      role: "tab",
      tabIndex: isActiveValue ? '0' : '-1',
      to: {
        pathname: sidebarPath,
        state: sidebarState
      },
      type: "button"
    }, children));
  });
});
/* harmony default export */ __webpack_exports__["default"] = (SidebarNavButton);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarNavButton.scss":
/*!************************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarNavButton.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarNavTablist.js":
/*!***********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarNavTablist.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Content Sidebar nav tablist Component
 * @author Box
 */




var SidebarNavTablist = (_ref) => {
  var {
    children,
    history,
    elementId,
    isOpen,
    onNavigate
  } = _ref;
  var refs = [];
  var tablist = react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, child => child && "/".concat(child.props.sidebarView));

  var handleKeyDown = event => {
    var currentIndex = tablist.indexOf(history.location.pathname);
    var {
      length
    } = tablist;
    var nextIndex = currentIndex;

    switch (event.key) {
      case _constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].arrowUp:
        nextIndex = (currentIndex - 1 + length) % length;
        history.push(tablist[nextIndex]);

        if (refs.length > 0) {
          refs[nextIndex].focus();
        }

        event.stopPropagation();
        event.preventDefault();
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_2__["KEYS"].arrowDown:
        nextIndex = (currentIndex + 1) % length;
        history.push(tablist[nextIndex]);

        if (refs.length > 0) {
          refs[nextIndex].focus();
        }

        event.stopPropagation();
        event.preventDefault();
        break;

      default:
        break;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    "aria-orientation": "vertical",
    className: "bcs-SidebarNav-main",
    role: "tablist",
    tabIndex: "0",
    onKeyDown: handleKeyDown
  }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, tab => {
    if (!tab) {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](tab, _objectSpread({
      elementId,
      isOpen,
      onNavigate,
      ref: _ref2 => {
        refs.push(_ref2);
      }
    }, tab.props));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(SidebarNavTablist));

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarPanels.js":
/*!*******************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarPanels.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _SidebarUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarUtils */ "./src/elements/content-sidebar/SidebarUtils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Content Sidebar Panels component
 * @author Box
 */




// TODO: place into code splitting logic
var BASE_EVENT_NAME = '_JS_LOADING';
var MARK_NAME_JS_LOADING_DETAILS = "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["ORIGIN_DETAILS_SIDEBAR"]).concat(BASE_EVENT_NAME);
var MARK_NAME_JS_LOADING_ACTIVITY = "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["ORIGIN_ACTIVITY_SIDEBAR"]).concat(BASE_EVENT_NAME);
var MARK_NAME_JS_LOADING_SKILLS = "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["ORIGIN_SKILLS_SIDEBAR"]).concat(BASE_EVENT_NAME);
var MARK_NAME_JS_LOADING_METADATA = "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["ORIGIN_METADATA_SIDEBAR"]).concat(BASE_EVENT_NAME);
var MARK_NAME_JS_LOADING_VERSIONS = "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["ORIGIN_VERSIONS_SIDEBAR"]).concat(BASE_EVENT_NAME);
var URL_TO_FEED_ITEM_TYPE = {
  comments: 'comment',
  tasks: 'task'
};
var LoadableDetailsSidebar = _SidebarUtils__WEBPACK_IMPORTED_MODULE_2__["default"].getAsyncSidebarContent(_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_VIEW_DETAILS"], MARK_NAME_JS_LOADING_DETAILS);
var LoadableActivitySidebar = _SidebarUtils__WEBPACK_IMPORTED_MODULE_2__["default"].getAsyncSidebarContent(_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_VIEW_ACTIVITY"], MARK_NAME_JS_LOADING_ACTIVITY);
var LoadableSkillsSidebar = _SidebarUtils__WEBPACK_IMPORTED_MODULE_2__["default"].getAsyncSidebarContent(_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_VIEW_SKILLS"], MARK_NAME_JS_LOADING_SKILLS);
var LoadableMetadataSidebar = _SidebarUtils__WEBPACK_IMPORTED_MODULE_2__["default"].getAsyncSidebarContent(_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_VIEW_METADATA"], MARK_NAME_JS_LOADING_METADATA);
var LoadableVersionsSidebar = _SidebarUtils__WEBPACK_IMPORTED_MODULE_2__["default"].getAsyncSidebarContent(_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_VIEW_VERSIONS"], MARK_NAME_JS_LOADING_VERSIONS);

class SidebarPanels extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "activitySidebar", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "detailsSidebar", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "metadataSidebar", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "versionsSidebar", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());
  }

  /**
   * Refreshes the contents of the active sidebar
   * @returns {void}
   */
  refresh() {
    var {
      current: activitySidebar
    } = this.activitySidebar;
    var {
      current: detailsSidebar
    } = this.detailsSidebar;
    var {
      current: metadataSidebar
    } = this.metadataSidebar;
    var {
      current: versionsSidebar
    } = this.versionsSidebar;

    if (activitySidebar) {
      activitySidebar.refresh();
    }

    if (detailsSidebar) {
      detailsSidebar.refresh();
    }

    if (metadataSidebar) {
      metadataSidebar.refresh();
    }

    if (versionsSidebar) {
      versionsSidebar.refresh();
    }
  }

  render() {
    var {
      activitySidebarProps,
      currentUser,
      detailsSidebarProps,
      elementId,
      file,
      fileId,
      getPreview,
      getViewer,
      hasActivity,
      hasDetails,
      hasMetadata,
      hasSkills,
      hasVersions,
      isOpen,
      metadataSidebarProps,
      onVersionChange,
      onVersionHistoryClick,
      versionsSidebarProps
    } = this.props;

    if (!isOpen || !hasActivity && !hasDetails && !hasMetadata && !hasSkills && !hasVersions) {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, hasSkills && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_VIEW_SKILLS"]),
      render: () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadableSkillsSidebar, {
        elementId: elementId,
        key: file.id,
        file: file,
        getPreview: getPreview,
        getViewer: getViewer,
        startMarkName: MARK_NAME_JS_LOADING_SKILLS
      })
    }), hasActivity && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: ["/".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_VIEW_ACTIVITY"]), "/".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_VIEW_ACTIVITY"], "/:activeFeedEntryType(comments|tasks)/:activeFeedEntryId?")],
      render: (_ref) => {
        var {
          match
        } = _ref;
        var matchEntryType = match.params.activeFeedEntryType;
        var activeFeedEntryType = matchEntryType ? URL_TO_FEED_ITEM_TYPE[matchEntryType] : undefined;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadableActivitySidebar, _extends({
          elementId: elementId,
          currentUser: currentUser,
          file: file,
          onVersionHistoryClick: onVersionHistoryClick,
          ref: this.activitySidebar,
          startMarkName: MARK_NAME_JS_LOADING_ACTIVITY,
          activeFeedEntryId: match.params.activeFeedEntryId,
          activeFeedEntryType: activeFeedEntryType
        }, activitySidebarProps));
      }
    }), hasDetails && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_VIEW_DETAILS"]),
      render: () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadableDetailsSidebar, _extends({
        elementId: elementId,
        fileId: fileId,
        key: fileId,
        hasVersions: hasVersions,
        onVersionHistoryClick: onVersionHistoryClick,
        ref: this.detailsSidebar,
        startMarkName: MARK_NAME_JS_LOADING_DETAILS
      }, detailsSidebarProps))
    }), hasMetadata && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_VIEW_METADATA"]),
      render: () => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadableMetadataSidebar, _extends({
        elementId: elementId,
        fileId: fileId,
        ref: this.metadataSidebar,
        startMarkName: MARK_NAME_JS_LOADING_METADATA
      }, metadataSidebarProps))
    }), hasVersions && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/:sidebar(activity|details)/versions/:versionId?",
      render: (_ref2) => {
        var {
          match
        } = _ref2;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadableVersionsSidebar, _extends({
          fileId: fileId,
          key: fileId,
          onVersionChange: onVersionChange,
          parentName: match.params.sidebar,
          ref: this.versionsSidebar,
          versionId: match.params.versionId
        }, versionsSidebarProps));
      }
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      render: () => {
        var redirect = '';

        if (hasSkills) {
          redirect = _constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_VIEW_SKILLS"];
        } else if (hasActivity) {
          redirect = _constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_VIEW_ACTIVITY"];
        } else if (hasDetails) {
          redirect = _constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_VIEW_DETAILS"];
        } else if (hasMetadata) {
          redirect = _constants__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_VIEW_METADATA"];
        }

        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
          to: {
            pathname: "/".concat(redirect),
            state: {
              silent: true
            }
          }
        });
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SidebarPanels);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarSection.js":
/*!********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarSection.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.js");
/* harmony import */ var _icons_general_IconCaretDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/general/IconCaretDown */ "./src/icons/general/IconCaretDown.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _SidebarSection_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SidebarSection.scss */ "./src/elements/content-sidebar/SidebarSection.scss");
/* harmony import */ var _SidebarSection_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SidebarSection_scss__WEBPACK_IMPORTED_MODULE_5__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @deprecated, use Collapsible

/**
 * 
 * @file Preview sidebar section component
 * @author Box
 */







class SidebarSection extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  /**
   * [constructor]
   *
   * @private
   * @return {ContentPreview}
   */
  constructor(props) {
    super(props);

    _defineProperty(this, "toggleVisibility", () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    });

    this.state = {
      isOpen: props.isOpen
    };
  }
  /**
   * Click handler for toggling the section
   *
   * @private
   * @param {Event} event - click event
   * @return {void}
   */


  /**
   * Renders the section
   *
   * @private
   * @inheritdoc
   * @return {void}
   */
  render() {
    var {
      isOpen
    } = this.state;
    var {
      children,
      className,
      title,
      interactionTarget
    } = this.props;
    var sectionClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-section', {
      'bcs-section-open': isOpen
    }, className);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: sectionClassName
    }, title && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "bcs-section-title",
      "data-resin-target": interactionTarget,
      onClick: this.toggleVisibility,
      type: "button"
    }, title, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconCaretDown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: _constants__WEBPACK_IMPORTED_MODULE_4__["COLOR_999"],
      width: 8
    })), (isOpen || !title) && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "bcs-section-content"
    }, children));
  }

}

_defineProperty(SidebarSection, "defaultProps", {
  className: '',
  isOpen: true
});

/* harmony default export */ __webpack_exports__["default"] = (SidebarSection);

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarSection.scss":
/*!**********************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarSection.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarToggle.js":
/*!*******************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarToggle.js ***!
  \*******************************************************/
/*! exports provided: SidebarToggleComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleComponent", function() { return SidebarToggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_sidebar_toggle_button_SidebarToggleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sidebar-toggle-button/SidebarToggleButton */ "./src/components/sidebar-toggle-button/SidebarToggleButton.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/**
 * 
 * @file Sidebar Toggle component
 * @author Box
 */





var SidebarToggle = (_ref) => {
  var {
    history,
    isOpen
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_sidebar_toggle_button_SidebarToggleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_3__["SIDEBAR_NAV_TARGETS"].TOGGLE,
    "data-testid": "sidebartoggle",
    isOpen: isOpen,
    onClick: event => {
      event.preventDefault();
      history.replace({
        state: {
          open: !isOpen
        }
      });
    }
  });
};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(SidebarToggle));

/***/ }),

/***/ "./src/elements/content-sidebar/SidebarUtils.js":
/*!******************************************************!*\
  !*** ./src/elements/content-sidebar/SidebarUtils.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _common_async_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/async-load */ "./src/elements/common/async-load/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _SidebarLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SidebarLoading */ "./src/elements/content-sidebar/SidebarLoading.js");
/* harmony import */ var _SidebarLoadingError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SidebarLoadingError */ "./src/elements/content-sidebar/SidebarLoadingError.js");
/* harmony import */ var _skills_skillUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills/skillUtils */ "./src/elements/content-sidebar/skills/skillUtils.js");
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/performance */ "./src/utils/performance.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Utility for sidebar
 * @author Box
 */










class SidebarUtils {
  /**
   * Determines if we can render the details sidebar.
   * Only relies on props.
   *
   * @param {ContentSidebarProps} props - User passed in props
   * @return {Boolean} true if we should render
   */
  static canHaveDetailsSidebar(_ref) {
    var {
      detailsSidebarProps = {}
    } = _ref;
    var {
      hasProperties,
      hasAccessStats,
      hasClassification,
      hasVersions,
      hasNotices
    } = detailsSidebarProps;
    return !!hasProperties || !!hasAccessStats || !!hasClassification || !!hasVersions || !!hasNotices;
  }
  /**
   * Determines if we can render the metadata sidebar.
   * Only relies on props.
   *
   * @param {ContentSidebarProps} props - User passed in props
   * @return {Boolean} true if we should render
   */


  static canHaveMetadataSidebar(props) {
    return !!props.hasMetadata;
  }
  /**
   * Determines if we can render the activity sidebar.
   * Only relies on props.
   *
   * @param {ContentSidebarProps} props - User passed in props
   * @return {Boolean} true if we should render
   */


  static canHaveActivitySidebar(props) {
    return !!props.hasActivityFeed;
  }
  /**
   * Determines if we can render the skills sidebar.
   * Only relies on props.
   *
   * @param {ContentSidebarProps} props - User passed in props
   * @return {Boolean} true if we should render
   */


  static canHaveSkillsSidebar(props) {
    return !!props.hasSkills;
  }
  /**
   * Determines if we can render the sidebar.
   * Only relies on props.
   *
   * @param {ContentSidebarProps} props - User passed in props
   * @return {Boolean} true if we should have a sidebar
   */


  static canHaveSidebar(props) {
    return SidebarUtils.canHaveDetailsSidebar(props) || SidebarUtils.canHaveActivitySidebar(props) || SidebarUtils.canHaveSkillsSidebar(props) || SidebarUtils.canHaveMetadataSidebar(props);
  }
  /**
   * Determines if we should bother rendering the skills sidebar.
   * Relies on props and file data.
   *
   * @private
   * @param {ContentSidebarProps} props - User passed in props
   * @param {BoxItem} file - box file
   * @return {Boolean} true if we should render
   */


  static shouldRenderSkillsSidebar(props, file) {
    return !!file && SidebarUtils.canHaveSkillsSidebar(props) && Object(_skills_skillUtils__WEBPACK_IMPORTED_MODULE_6__["hasSkills"])(file);
  }
  /**
   * Determines if we should bother rendering the metadata sidebar.
   * Relies on props and metadata data and feature enabled or not.
   *
   * @private
   * @param {ContentSidebarProps} props - User passed in props
   * @param {Array<MetadataEditor>} editors - metadata editors
   * @return {Boolean} true if we should render
   */


  static shouldRenderMetadataSidebar(props, editors) {
    var {
      metadataSidebarProps = {}
    } = props;
    var {
      isFeatureEnabled = true
    } = metadataSidebarProps;
    return SidebarUtils.canHaveMetadataSidebar(props) && (isFeatureEnabled || Array.isArray(editors) && editors.length > 0);
  }
  /**
   * Determines if we should bother rendering the sidebar.
   * Relies on props and file data.
   *
   * @param {ContentSidebarProps} props - User passed in props
   * @param {BoxItem} file - box file
   * @param {Array<MetadataEditor>} editors - metadata editors
   * @return {Boolean} true if we should fetch or render
   */


  static shouldRenderSidebar(props, file, editors) {
    return !!file && (SidebarUtils.canHaveDetailsSidebar(props) || SidebarUtils.shouldRenderSkillsSidebar(props, file) || SidebarUtils.canHaveActivitySidebar(props) || SidebarUtils.shouldRenderMetadataSidebar(props, editors));
  }
  /**
   * Gets the title for a given sidebar view
   *
   * @param {string} view - the view name
   * @return {React.Node} - the node to render
   */


  static getTitleForView(view) {
    switch (view) {
      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_SKILLS"]:
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].sidebarSkillsTitle);

      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_DETAILS"]:
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].sidebarDetailsTitle);

      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_METADATA"]:
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].sidebarMetadataTitle);

      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_ACTIVITY"]:
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].sidebarActivityTitle);

      default:
        return null;
    }
  }
  /**
   * Marks and gets the loader for a given sidebar view
   *
   * @param {String} view - the view name
   * @param {String} markName -  the name to be used by performance.mark
   * @return {Function} - a function which will resolve the module to load
   */


  static getLoaderForView(view, markName) {
    Object(_utils_performance__WEBPACK_IMPORTED_MODULE_7__["mark"])(markName);
    var importFn;

    switch (view) {
      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_SKILLS"]:
        importFn = Promise.all(/*! import() | skills-sidebar */[__webpack_require__.e("vendors~details-sidebar~skills-sidebar"), __webpack_require__.e("vendors~metadata-sidebar~skills-sidebar"), __webpack_require__.e("activity-sidebar~details-sidebar~metadata-sidebar~skills-sidebar~versions-sidebar"), __webpack_require__.e("activity-sidebar~metadata-sidebar~skills-sidebar"), __webpack_require__.e("activity-sidebar~skills-sidebar"), __webpack_require__.e("skills-sidebar")]).then(__webpack_require__.bind(null, /*! ./SkillsSidebar */ "./src/elements/content-sidebar/SkillsSidebar.js"));
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_DETAILS"]:
        importFn = Promise.all(/*! import() | details-sidebar */[__webpack_require__.e("vendors~details-sidebar~metadata-sidebar"), __webpack_require__.e("vendors~details-sidebar~skills-sidebar"), __webpack_require__.e("activity-sidebar~details-sidebar~metadata-sidebar~skills-sidebar~versions-sidebar"), __webpack_require__.e("details-sidebar~metadata-sidebar"), __webpack_require__.e("details-sidebar")]).then(__webpack_require__.bind(null, /*! ./DetailsSidebar */ "./src/elements/content-sidebar/DetailsSidebar.js"));
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_METADATA"]:
        importFn = Promise.all(/*! import() | metadata-sidebar */[__webpack_require__.e("vendors~activity-sidebar~metadata-sidebar"), __webpack_require__.e("vendors~details-sidebar~metadata-sidebar"), __webpack_require__.e("vendors~metadata-sidebar~skills-sidebar"), __webpack_require__.e("activity-sidebar~details-sidebar~metadata-sidebar~skills-sidebar~versions-sidebar"), __webpack_require__.e("activity-sidebar~metadata-sidebar~skills-sidebar"), __webpack_require__.e("activity-sidebar~metadata-sidebar"), __webpack_require__.e("details-sidebar~metadata-sidebar"), __webpack_require__.e("metadata-sidebar")]).then(__webpack_require__.bind(null, /*! ./MetadataSidebar */ "./src/elements/content-sidebar/MetadataSidebar.js"));
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_ACTIVITY"]:
        importFn = Promise.all(/*! import() | activity-sidebar */[__webpack_require__.e("vendors~activity-sidebar~metadata-sidebar"), __webpack_require__.e("vendors~activity-sidebar"), __webpack_require__.e("activity-sidebar~details-sidebar~metadata-sidebar~skills-sidebar~versions-sidebar"), __webpack_require__.e("activity-sidebar~content-open-with~versions-sidebar"), __webpack_require__.e("activity-sidebar~metadata-sidebar~skills-sidebar"), __webpack_require__.e("activity-sidebar~metadata-sidebar"), __webpack_require__.e("activity-sidebar~versions-sidebar"), __webpack_require__.e("activity-sidebar~skills-sidebar"), __webpack_require__.e("activity-sidebar")]).then(__webpack_require__.bind(null, /*! ./ActivitySidebar */ "./src/elements/content-sidebar/ActivitySidebar.js"));
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_8__["SIDEBAR_VIEW_VERSIONS"]:
        importFn = Promise.all(/*! import() | versions-sidebar */[__webpack_require__.e("activity-sidebar~details-sidebar~metadata-sidebar~skills-sidebar~versions-sidebar"), __webpack_require__.e("activity-sidebar~content-open-with~versions-sidebar"), __webpack_require__.e("activity-sidebar~versions-sidebar"), __webpack_require__.e("versions-sidebar")]).then(__webpack_require__.bind(null, /*! ./versions */ "./src/elements/content-sidebar/versions/index.js"));
        break;

      default:
        return Promise.resolve(null);
    }

    return importFn;
  }
  /**
   * Gets the component which async loads a given sidebar view
   *
   * @param {String} view - the view name
   * @param {String} markName -  the name to be used by performance.mark
   * @param {Object} props - additional props
   * @return {React.Node} - the node to render
   */


  static getAsyncSidebarContent(view, markName) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return Object(_common_async_load__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread({
      errorComponent: _SidebarLoadingError__WEBPACK_IMPORTED_MODULE_5__["default"],
      fallback: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarLoading__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: this.getTitleForView(view)
      }),
      loader: () => this.getLoaderForView(view, markName)
    }, props));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SidebarUtils);

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTab.js":
/*!***********************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTab.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/variables */ "./src/styles/variables.js");
/* harmony import */ var _common_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Tooltip */ "./src/elements/common/Tooltip.js");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.js");
/* harmony import */ var _icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../icons/general/IconEllipsis */ "./src/icons/general/IconEllipsis.js");
/* harmony import */ var _AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AdditionalTabPlaceholder */ "./src/elements/content-sidebar/additional-tabs/AdditionalTabPlaceholder.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/additional-tabs/messages.js");
/* harmony import */ var _AdditionalTab_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AdditionalTab.scss */ "./src/elements/content-sidebar/additional-tabs/AdditionalTab.scss");
/* harmony import */ var _AdditionalTab_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_AdditionalTab_scss__WEBPACK_IMPORTED_MODULE_9__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Sidebar Additional Tab component
 * @author Box
 */










var BLOCKED_BY_SHEILD = 'BLOCKED_BY_SHIELD_ACCESS_POLICY';

class AdditionalTab extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isErrored: false
    });

    _defineProperty(this, "onImageError", () => {
      this.props.onImageLoad();
      this.setState({
        isErrored: true
      });
    });
  }

  isDisabled() {
    var {
      status
    } = this.props;
    return status === BLOCKED_BY_SHEILD;
  }

  getDisabledReason() {
    var reason = '';
    var {
      status
    } = this.props;

    switch (status) {
      case BLOCKED_BY_SHEILD:
        reason = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_8__["default"].blockedByShieldAccessPolicy);
        break;

      default: // noop

    }

    return reason;
  }

  getTabIcon() {
    var {
      id,
      iconUrl,
      onImageLoad,
      title
    } = this.props;
    var {
      isErrored
    } = this.state;
    var TabIcon;

    if (isErrored) {
      TabIcon = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isLoading: false
      });
    } else if (id && id > 0) {
      TabIcon = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        className: "bdl-AdditionalTab-icon",
        src: iconUrl,
        onError: this.onImageError,
        onLoad: onImageLoad,
        alt: title
      });
    } else {
      TabIcon = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_6__["default"], {
        color: _styles_variables__WEBPACK_IMPORTED_MODULE_3__["bdlGray50"]
      });
    }

    return TabIcon;
  }

  render() {
    var _this$props = this.props,
        {
      callback: callbackFn,
      id,
      isLoading,
      iconUrl,
      onImageLoad,
      title
    } = _this$props,
        rest = _objectWithoutProperties(_this$props, ["callback", "id", "isLoading", "iconUrl", "onImageLoad", "title"]);

    var isDisabled = this.isDisabled();
    var className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-AdditionalTab', {
      'bdl-is-hidden': isLoading,
      'bdl-is-disabled': isDisabled
    });
    var tooltipText = isDisabled ? this.getDisabledReason() : title;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
      position: "middle-left",
      text: tooltipText
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: className,
      "data-testid": "additionaltab",
      type: "button",
      isDisabled: isDisabled,
      onClick: () => callbackFn({
        id,
        callbackData: rest
      })
    }, this.getTabIcon()));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AdditionalTab);

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTab.scss":
/*!*************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTab.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTabPlaceholder.js":
/*!**********************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTabPlaceholder.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/**
 * 
 * @file Preview sidebar additional tab placeholder component
 * @author Box
 */



var AdditionalTabPlaceholder = (_ref) => {
  var {
    isLoading = false
  } = _ref;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('bdl-AdditionalTabPlaceholder-icon', {
    'bdl-AdditionalTabPlaceholder-icon--loading': isLoading
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bdl-AdditionalTabPlaceholder",
    "data-testid": "additionaltabplaceholder"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AdditionalTabPlaceholder);

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTabs.js":
/*!************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTabs.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AdditionalTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdditionalTab */ "./src/elements/content-sidebar/additional-tabs/AdditionalTab.js");
/* harmony import */ var _AdditionalTabsLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdditionalTabsLoading */ "./src/elements/content-sidebar/additional-tabs/AdditionalTabsLoading.js");
/* harmony import */ var _AdditionalTabs_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdditionalTabs.scss */ "./src/elements/content-sidebar/additional-tabs/AdditionalTabs.scss");
/* harmony import */ var _AdditionalTabs_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AdditionalTabs_scss__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Preview sidebar additional tabs component
 * @author Box
 */





class AdditionalTabs extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "numLoadedTabs", 0);

    _defineProperty(this, "onImageLoad", () => {
      var {
        tabs
      } = this.props;

      if (!tabs) {
        return;
      }

      var hasMoreTab = tabs.find(tab => tab.id < 0 && !tab.iconUrl);
      var numTabs = tabs.length - (hasMoreTab ? 1 : 0);
      this.numLoadedTabs += 1;

      if (this.numLoadedTabs === numTabs) {
        this.setState({
          isLoading: false
        });
      }
    });

    this.state = {
      isLoading: true
    };
  }
  /**
   * Handles an individual icon image load
   *
   * @return {void}
   */


  render() {
    var {
      tabs
    } = this.props;
    var {
      isLoading
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bdl-AdditionalTabs"
    }, isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdditionalTabsLoading__WEBPACK_IMPORTED_MODULE_2__["default"], null), tabs && tabs.map(tabData => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdditionalTab__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      key: tabData.id,
      onImageLoad: this.onImageLoad,
      isLoading: isLoading
    }, tabData))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AdditionalTabs);

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTabs.scss":
/*!**************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTabs.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTabsLoading.js":
/*!*******************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTabsLoading.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdditionalTabPlaceholder */ "./src/elements/content-sidebar/additional-tabs/AdditionalTabPlaceholder.js");
/* harmony import */ var _MoreTabPlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoreTabPlaceholder */ "./src/elements/content-sidebar/additional-tabs/MoreTabPlaceholder.js");
/* harmony import */ var _AdditionalTabsLoading_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdditionalTabsLoading.scss */ "./src/elements/content-sidebar/additional-tabs/AdditionalTabsLoading.scss");
/* harmony import */ var _AdditionalTabsLoading_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AdditionalTabsLoading_scss__WEBPACK_IMPORTED_MODULE_3__);
/**
 * 
 * @file Preview sidebar additional tabs loading component
 * @author Box
 */



 // Loading layout for the sidebar's additional tabs

var LOADING_TABS = [_AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_1__["default"], _AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_1__["default"], _AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_1__["default"], _AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_1__["default"], _AdditionalTabPlaceholder__WEBPACK_IMPORTED_MODULE_1__["default"], _MoreTabPlaceholder__WEBPACK_IMPORTED_MODULE_2__["default"]];

var AdditionalTabsLoading = () => {
  return LOADING_TABS.map((LoadingComponent, idx) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LoadingComponent, {
    isLoading: true,
    key: idx
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AdditionalTabsLoading);

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/AdditionalTabsLoading.scss":
/*!*********************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/AdditionalTabsLoading.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/MoreTabPlaceholder.js":
/*!****************************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/MoreTabPlaceholder.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/variables */ "./src/styles/variables.js");
/* harmony import */ var _icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icons/general/IconEllipsis */ "./src/icons/general/IconEllipsis.js");
/**
 * 
 * @file Preview sidebar more tabs loading component
 * @author Box
 */




var MoreTabPlaceholder = () => {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bdl-AdditionalTabPlaceholder"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray10"],
    className: "bdl-AdditionalTabPlaceholder-moreIcon"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MoreTabPlaceholder);

/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/index.js":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdditionalTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdditionalTabs */ "./src/elements/content-sidebar/additional-tabs/AdditionalTabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AdditionalTabs__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/additional-tabs/messages.js":
/*!******************************************************************!*\
  !*** ./src/elements/content-sidebar/additional-tabs/messages.js ***!
  \******************************************************************/
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
  blockedByShieldAccessPolicy: {
    "id": "be.additionalTab.blockedByShieldAccessPolicy",
    "defaultMessage": "Use of this app has been disabled by the applied access policy"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/elements/content-sidebar/index.js":
/*!***********************************************!*\
  !*** ./src/elements/content-sidebar/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentSidebar */ "./src/elements/content-sidebar/ContentSidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ContentSidebar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/skills/skillUtils.js":
/*!***********************************************************!*\
  !*** ./src/elements/content-sidebar/skills/skillUtils.js ***!
  \***********************************************************/
/*! exports provided: hasSkills, isValidSkillsCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSkills", function() { return hasSkills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidSkillsCard", function() { return isValidSkillsCard; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/**
 * 
 * @file Skills utils
 * @author Box
 */

/**
 * Returns true if its a valid skills card.
 *
 * @param {SkillCard} card - box skill card
 * @return {boolean} if its valid skills card
 */

var isValidSkillsCard = (file, card) => {
  var fileVersion = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(file, 'file_version.id');
  var skillCardFileVersion = card.file_version ? card.file_version.id : fileVersion;
  return fileVersion === skillCardFileVersion && (!!card.status || Array.isArray(card.entries));
};
/**
 * Returns true if there are valid skills to show.
 *
 * @param {BoxItem} file - box file
 * @return {boolean} if there are valid skills to show
 */


var hasSkills = file => {
  var cards = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(file, 'metadata.global.boxSkillsCards.cards', []);
  return Array.isArray(cards) && cards.length > 0 && cards.some(card => isValidSkillsCard(file, card));
};



/***/ }),

/***/ "./src/icons/general/IconChatRound.js":
/*!********************************************!*\
  !*** ./src/icons/general/IconChatRound.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconChatRound = (_ref) => {
  var {
    className = '',
    color = '#999',
    height = 24,
    title,
    width = 24
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-chat-round ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M14 3h-4a8 8 0 0 0-5 14.26V21a1 1 0 0 0 .08.37 1 1 0 0 0 1.31.53L12 19h2a8 8 0 0 0 0-16zm-6 9a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconChatRound);

/***/ }),

/***/ "./src/icons/general/IconDocInfo.js":
/*!******************************************!*\
  !*** ./src/icons/general/IconDocInfo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconDocInfo = (_ref) => {
  var {
    className = '',
    color = '#999',
    height = 24,
    title,
    width = 24
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-doc-info ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M19.41 7.41l-4.82-4.82A2 2 0 0 0 13.17 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.83a2 2 0 0 0-.59-1.42zM13 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0zm-1-6a1 1 0 1 1 1-1 1 1 0 0 1-1 1z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconDocInfo);

/***/ }),

/***/ "./src/icons/general/IconEllipsis.js":
/*!*******************************************!*\
  !*** ./src/icons/general/IconEllipsis.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconEllipsis = (_ref) => {
  var {
    className = '',
    color = '#000000',
    height = 20,
    title,
    width = 20
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-ellipsis ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 10 2",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M1 2c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm8 0c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zM5 2c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconEllipsis);

/***/ }),

/***/ "./src/icons/general/IconHide.js":
/*!***************************************!*\
  !*** ./src/icons/general/IconHide.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");




var IconHide = (_ref) => {
  var {
    className = '',
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"],
    height = 16,
    title,
    width = 16
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "icon-hide ".concat(className),
    title: title,
    width: width,
    height: height,
    viewBox: "0 0 16 16"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M7.646 7.646L4.354 4.354a.5.5 0 0 1 0-.708l1.292-1.292a.5.5 0 0 1 .708 0l5.292 5.292a.5.5 0 0 1 0 .708l-5.292 5.292a.5.5 0 0 1-.708 0l-1.292-1.292a.5.5 0 0 1 0-.708l3.292-3.292a.5.5 0 0 0 0-.708z",
    fill: color,
    fillRule: "nonzero"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconHide);

/***/ }),

/***/ "./src/icons/general/IconMagicWand.js":
/*!********************************************!*\
  !*** ./src/icons/general/IconMagicWand.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconMagicWand = (_ref) => {
  var {
    className = '',
    color = '#999',
    height = 24,
    title,
    width = 24
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-magic-wand ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M19.91 5.84a2.85 2.85 0 0 0-4 0L3.83 17.89a2.83 2.83 0 0 0 4 4L19.91 9.83a2.84 2.84 0 0 0 0-3.99zm-1.6 2.44l-2.92 3-.86-.86 3-3a.51.51 0 0 1 .43-.18.61.61 0 0 1 .43.19l.08.1a.64.64 0 0 1-.16.75zM11.11 3.51a2.67 2.67 0 0 1 .91.86 5.39 5.39 0 0 1 .38.76l.06.14a7.6 7.6 0 0 1 .37-.76 2.71 2.71 0 0 1 .78-.84 4 4 0 0 1 .73-.4l.24-.11c-.25-.11-.5-.23-.74-.36a2.51 2.51 0 0 1-.94-.89 5.63 5.63 0 0 1-.4-.82v-.05a5.93 5.93 0 0 1-.34.72 2.73 2.73 0 0 1-.88.94 6.45 6.45 0 0 1-.74.38l-.16.06a4.3 4.3 0 0 1 .73.37zM8.48 7.61a1.9 1.9 0 0 1 .66.63 4.73 4.73 0 0 1 .28.55v.09a4.64 4.64 0 0 1 .26-.55 2.05 2.05 0 0 1 .56-.61 3.2 3.2 0 0 1 .54-.3l.22-.09a2.11 2.11 0 0 1-.52-.26 1.87 1.87 0 0 1-.68-.66 3.14 3.14 0 0 1-.29-.58c-.08.19-.16.35-.25.52a2 2 0 0 1-.68.65 3.89 3.89 0 0 1-.58.28h-.12a5.36 5.36 0 0 1 .6.33z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconMagicWand);

/***/ }),

/***/ "./src/icons/general/IconMetadataThick.js":
/*!************************************************!*\
  !*** ./src/icons/general/IconMetadataThick.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconMetadataThick = (_ref) => {
  var {
    className = '',
    color = '#999',
    height = 24,
    title,
    width = 24
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-metadata-thick ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 24 24",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4.37,13.43a1,1,0,0,1-.37.07,1,1,0,0,1-.93-.63L13.9,11.94l-1,2a1,1,0,0,1-1.78,0l-1-2L8.93,14.87a1,1,0,1,1-1.86-.74l2-5a1,1,0,0,1,1.82-.08L12,11.26l1.11-2.21A1,1,0,0,1,14,8.5a1,1,0,0,1,.89.63l2,5A1,1,0,0,1,16.37,15.43Z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconMetadataThick);

/***/ }),

/***/ "./src/icons/general/IconShow.js":
/*!***************************************!*\
  !*** ./src/icons/general/IconShow.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");




var IconShow = (_ref) => {
  var {
    className = '',
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray50"],
    height = 16,
    title,
    width = 16
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "icon-show ".concat(className),
    title: title,
    width: width,
    height: height,
    viewBox: "0 0 16 16"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M7.354 7.646l3.292-3.292a.5.5 0 0 0 0-.708L9.354 2.354a.5.5 0 0 0-.708 0L3.354 7.646a.5.5 0 0 0 0 .708l5.292 5.292a.5.5 0 0 0 .708 0l1.292-1.292a.5.5 0 0 0 0-.708L7.354 8.354a.5.5 0 0 1 0-.708z",
    fill: color,
    fillRule: "nonzero"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconShow);

/***/ })

}]);
//# sourceMappingURL=content-sidebar.js.map
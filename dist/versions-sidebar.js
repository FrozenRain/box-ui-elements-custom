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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["versions-sidebar"],{

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



/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsGroup.js":
/*!****************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsGroup.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VersionsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VersionsList */ "./src/elements/content-sidebar/versions/VersionsList.js");
/* harmony import */ var _VersionsGroup_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VersionsGroup.scss */ "./src/elements/content-sidebar/versions/VersionsGroup.scss");
/* harmony import */ var _VersionsGroup_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_VersionsGroup_scss__WEBPACK_IMPORTED_MODULE_2__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Group component
 * @author Box
 */




var VersionsGroup = (_ref) => {
  var {
    heading
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["heading"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "bcs-VersionsGroup"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "bcs-VersionsGroup-heading"
  }, heading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VersionsList__WEBPACK_IMPORTED_MODULE_1__["default"], rest));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsGroup);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsGroup.scss":
/*!******************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsGroup.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItem.js":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItem.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _common_selectors_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/selectors/version */ "./src/elements/common/selectors/version.js");
/* harmony import */ var _utils_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/size */ "./src/utils/size.js");
/* harmony import */ var _VersionsItemActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VersionsItemActions */ "./src/elements/content-sidebar/versions/VersionsItemActions.js");
/* harmony import */ var _VersionsItemButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VersionsItemButton */ "./src/elements/content-sidebar/versions/VersionsItemButton.js");
/* harmony import */ var _VersionsItemBadge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VersionsItemBadge */ "./src/elements/content-sidebar/versions/VersionsItemBadge.js");
/* harmony import */ var _VersionsItemRetention__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VersionsItemRetention */ "./src/elements/content-sidebar/versions/VersionsItemRetention.js");
/* harmony import */ var _components_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/time */ "./src/components/time/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _VersionsItem_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VersionsItem.scss */ "./src/elements/content-sidebar/versions/VersionsItem.scss");
/* harmony import */ var _VersionsItem_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_VersionsItem_scss__WEBPACK_IMPORTED_MODULE_11__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Versions Item component
 * @author Box
 */












var ACTION_MAP = {
  [_constants__WEBPACK_IMPORTED_MODULE_10__["VERSION_DELETE_ACTION"]]: _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionDeletedBy,
  [_constants__WEBPACK_IMPORTED_MODULE_10__["VERSION_RESTORE_ACTION"]]: _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionRestoredBy,
  [_constants__WEBPACK_IMPORTED_MODULE_10__["VERSION_PROMOTE_ACTION"]]: _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionPromotedBy,
  [_constants__WEBPACK_IMPORTED_MODULE_10__["VERSION_UPLOAD_ACTION"]]: _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionUploadedBy
};
var FIVE_MINUTES_MS = 5 * 60 * 1000;

var VersionsItem = (_ref) => {
  var {
    fileId,
    isCurrent = false,
    isSelected = false,
    isWatermarked = false,
    onDelete,
    onDownload,
    onPreview,
    onPromote,
    onRestore,
    version,
    versionCount,
    versionLimit
  } = _ref;
  var {
    created_at: createdAt,
    id: versionId,
    is_download_available,
    permissions = {},
    restored_at: restoredAt,
    retention,
    size,
    trashed_at: trashedAt,
    version_number: versionNumber,
    version_promoted: versionPromoted
  } = version;
  var {
    can_delete,
    can_download,
    can_preview,
    can_upload
  } = permissions;
  var {
    applied_at: retentionAppliedAt,
    disposition_at: retentionDispositionAt
  } = retention || {};
  var retentionDispositionAtDate = retentionDispositionAt && new Date(retentionDispositionAt); // Version info helpers

  var versionAction = _common_selectors_version__WEBPACK_IMPORTED_MODULE_3__["default"].getVersionAction(version);
  var versionInteger = versionNumber ? parseInt(versionNumber, 10) : 1;
  var versionTime = restoredAt || trashedAt || createdAt;
  var versionTimestamp = versionTime && new Date(versionTime).getTime();
  var versionUserName = _common_selectors_version__WEBPACK_IMPORTED_MODULE_3__["default"].getVersionUser(version).name || react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionUserUnknown); // Version state helpers

  var isDeleted = versionAction === _constants__WEBPACK_IMPORTED_MODULE_10__["VERSION_DELETE_ACTION"];
  var isDownloadable = !!is_download_available;
  var isLimited = versionCount - versionInteger >= versionLimit;
  var isRestricted = isWatermarked && !isCurrent; // Watermarked files do not support prior version preview

  var isRetained = !!retentionAppliedAt && (!retentionDispositionAtDate || retentionDispositionAtDate > new Date()); // Version action helpers

  var canPreview = can_preview && !isDeleted && !isLimited && !isRestricted;
  var showDelete = can_delete && !isDeleted && !isCurrent;
  var showDownload = can_download && !isDeleted && isDownloadable;
  var showPromote = can_upload && !isDeleted && !isCurrent;
  var showRestore = can_delete && isDeleted;
  var showPreview = canPreview && !isSelected;
  var hasActions = showDelete || showDownload || showPreview || showPromote || showRestore; // Version action callback helper

  var handleAction = handler => () => {
    if (handler) {
      handler(versionId);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fileId: fileId,
    isCurrent: isCurrent,
    isDisabled: !canPreview,
    isSelected: isSelected,
    onClick: handleAction(onPreview)
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem-badge"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemBadge__WEBPACK_IMPORTED_MODULE_7__["default"], {
    versionNumber: versionNumber
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem-details"
  }, isCurrent && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem-current"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionCurrent)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem-log",
    "data-testid": "bcs-VersionsItem-log",
    title: versionUserName
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, ACTION_MAP[versionAction], {
    values: {
      name: versionUserName,
      versionPromoted
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem-info"
  }, versionTimestamp && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("time", {
    className: "bcs-VersionsItem-date",
    dateTime: versionTime
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_time__WEBPACK_IMPORTED_MODULE_9__["ReadableTime"], {
    alwaysShowTime: true,
    relativeThreshold: FIVE_MINUTES_MS,
    timestamp: versionTimestamp
  })), !!size && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "bcs-VersionsItem-size"
  }, Object(_utils_size__WEBPACK_IMPORTED_MODULE_4__["default"])(size))), isRetained && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem-retention"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemRetention__WEBPACK_IMPORTED_MODULE_8__["default"], {
    retention: retention
  })), isLimited && hasActions && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-VersionsItem-footer"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionLimitExceeded, {
    values: {
      versionLimit
    }
  }))))), !isLimited && hasActions && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fileId: fileId,
    isCurrent: isCurrent,
    isRetained: isRetained,
    onDelete: handleAction(onDelete),
    onDownload: handleAction(onDownload),
    onPreview: handleAction(onPreview),
    onPromote: handleAction(onPromote),
    onRestore: handleAction(onRestore),
    showDelete: showDelete,
    showDownload: showDownload,
    showPreview: showPreview,
    showPromote: showPromote,
    showRestore: showRestore
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsItem);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItem.scss":
/*!*****************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItem.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemAction.js":
/*!*********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemAction.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/menu */ "./src/components/menu/index.js");
/* harmony import */ var _VersionsItemAction_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VersionsItemAction.scss */ "./src/elements/content-sidebar/versions/VersionsItemAction.scss");
/* harmony import */ var _VersionsItemAction_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_VersionsItemAction_scss__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Item Action component
 * @author Box
 */




var VersionsItemAction = (_ref) => {
  var {
    action,
    children,
    fileId,
    isCurrent
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["action", "children", "fileId", "isCurrent"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], _extends({
    className: "bcs-VersionsItemAction",
    "data-resin-iscurrent": isCurrent,
    "data-resin-itemid": fileId,
    "data-resin-target": action
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsItemAction);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemAction.scss":
/*!***********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemAction.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemActions.js":
/*!**********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemActions.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/dropdown-menu */ "./src/components/dropdown-menu/index.js");
/* harmony import */ var _icons_general_IconClockPast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icons/general/IconClockPast */ "./src/icons/general/IconClockPast.js");
/* harmony import */ var _icons_general_IconDownload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../icons/general/IconDownload */ "./src/icons/general/IconDownload.js");
/* harmony import */ var _icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../icons/general/IconEllipsis */ "./src/icons/general/IconEllipsis.js");
/* harmony import */ var _icons_general_IconOpenWith__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../icons/general/IconOpenWith */ "./src/icons/general/IconOpenWith.js");
/* harmony import */ var _icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../icons/general/IconTrash */ "./src/icons/general/IconTrash.js");
/* harmony import */ var _icons_general_IconUpload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../icons/general/IconUpload */ "./src/icons/general/IconUpload.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/tooltip/Tooltip */ "./src/components/tooltip/Tooltip.js");
/* harmony import */ var _VersionsItemAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./VersionsItemAction */ "./src/elements/content-sidebar/versions/VersionsItemAction.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/menu */ "./src/components/menu/index.js");
/* harmony import */ var _VersionsItemActions_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./VersionsItemActions.scss */ "./src/elements/content-sidebar/versions/VersionsItemActions.scss");
/* harmony import */ var _VersionsItemActions_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_VersionsItemActions_scss__WEBPACK_IMPORTED_MODULE_14__);
/**
 * 
 * @file Versions Item Actions component
 * @author Box
 */
















var handleMenuClose = event => {
  event.stopPropagation();
};

var handleToggleClick = event => {
  event.stopPropagation();
};

var VersionsItemActions = (_ref) => {
  var {
    fileId,
    isCurrent = false,
    isRetained = false,
    onDelete,
    onDownload,
    onPreview,
    onPromote,
    onRestore,
    showDelete = false,
    showDownload = false,
    showPreview = false,
    showPromote = false,
    showRestore = false
  } = _ref;

  if (!showDelete && !showDownload && !showPreview && !showPromote && !showRestore) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "bcs-VersionsItemActions",
    constrainToScrollParent: true,
    constrainToWindow: true,
    isRightAligned: true,
    onMenuClose: handleMenuClose
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "bcs-VersionsItemActions-toggle",
    "data-resin-iscurrent": isCurrent,
    "data-resin-itemid": fileId,
    "data-resin-target": "overflow",
    onClick: handleToggleClick,
    type: "button"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconEllipsis__WEBPACK_IMPORTED_MODULE_5__["default"], {
    height: 4,
    width: 14
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].versionActionToggle, text => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "accessibility-hidden"
  }, text))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_menu__WEBPACK_IMPORTED_MODULE_13__["Menu"], {
    className: "bcs-VersionsItemActions-menu",
    "data-resin-component": "preview" // Needed for resin events due to tether moving menu to body
    ,
    "data-resin-feature": "versions" // Needed for resin events due to tether moving menu to body

  }, showPreview && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemAction__WEBPACK_IMPORTED_MODULE_12__["default"], {
    action: "preview",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onPreview
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconOpenWith__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].versionActionPreview)), showDownload && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemAction__WEBPACK_IMPORTED_MODULE_12__["default"], {
    action: "download",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onDownload
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconDownload__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].versionActionDownload)), showPromote && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemAction__WEBPACK_IMPORTED_MODULE_12__["default"], {
    action: "promote",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onPromote
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconUpload__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].versionActionPromote)), showRestore && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemAction__WEBPACK_IMPORTED_MODULE_12__["default"], {
    action: "restore",
    fileId: fileId,
    isCurrent: isCurrent,
    onClick: onRestore
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconClockPast__WEBPACK_IMPORTED_MODULE_3__["default"], {
    height: 14,
    width: 14
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].versionActionRestore)), showDelete && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
    position: "middle-left",
    text: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].versionActionDisabledRetention),
    isTabbable: false,
    isDisabled: !isRetained
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsItemAction__WEBPACK_IMPORTED_MODULE_12__["default"], {
    action: "remove",
    fileId: fileId,
    isCurrent: isCurrent,
    isDisabled: isRetained,
    onClick: onDelete
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconTrash__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_9__["default"].versionActionDelete)))));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsItemActions);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemActions.scss":
/*!************************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemActions.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemBadge.js":
/*!********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemBadge.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _VersionsItemBadge_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VersionsItemBadge.scss */ "./src/elements/content-sidebar/versions/VersionsItemBadge.scss");
/* harmony import */ var _VersionsItemBadge_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_VersionsItemBadge_scss__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Versions Item Badge component
 * @author Box
 */





var VersionsItemBadge = (_ref) => {
  var {
    intl,
    versionNumber
  } = _ref;
  var intlValues = {
    versionNumber
  };
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    "aria-label": intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionNumberLabel, intlValues),
    className: "bcs-VersionsItemBadge"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_2__["default"].versionNumberBadge, {
    values: intlValues
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(VersionsItemBadge));

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemBadge.scss":
/*!**********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemBadge.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemButton.js":
/*!*********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemButton.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_plain_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/plain-button */ "./src/components/plain-button/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/dom */ "./src/utils/dom.js");
/* harmony import */ var _VersionsItemButton_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VersionsItemButton.scss */ "./src/elements/content-sidebar/versions/VersionsItemButton.scss");
/* harmony import */ var _VersionsItemButton_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_VersionsItemButton_scss__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Versions Item Button component
 * @author Box
 */






class VersionsItemButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "setButtonRef", buttonRef => {
      this.buttonRef = buttonRef;
    });

    _defineProperty(this, "setScroll", () => {
      var {
        isSelected
      } = this.props;

      if (this.buttonRef && isSelected) {
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["scrollIntoView"])(this.buttonRef);
      }
    });
  }

  componentDidMount() {
    this.setScroll();
  }

  componentDidUpdate(_ref) {
    var {
      isSelected: prevIsSelected
    } = _ref;
    var {
      isSelected
    } = this.props;

    if (isSelected !== prevIsSelected) {
      this.setScroll();
    }
  }

  render() {
    var {
      children,
      fileId,
      isCurrent,
      isDisabled,
      isSelected,
      onClick
    } = this.props;
    var buttonClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('bcs-VersionsItemButton', {
      'bcs-is-disabled': isDisabled,
      'bcs-is-selected': isSelected && !isDisabled
    });
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "aria-disabled": isDisabled,
      className: buttonClassName,
      "data-resin-iscurrent": isCurrent,
      "data-resin-itemid": fileId,
      "data-resin-target": "select",
      "data-testid": "versions-item-button",
      getDOMRef: this.setButtonRef,
      isDisabled: isDisabled,
      onClick: onClick,
      type: "button"
    }, children);
  }

}

_defineProperty(VersionsItemButton, "defaultProps", {
  isCurrent: false,
  isDisabled: false,
  isSelected: false
});

/* harmony default export */ __webpack_exports__["default"] = (VersionsItemButton);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemButton.scss":
/*!***********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemButton.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsItemRetention.js":
/*!************************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsItemRetention.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/time */ "./src/components/time/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/versions/messages.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 
 * @file Versions Item Retention component
 * @author Box
 */





var RETENTION_MAP = {
  [_constants__WEBPACK_IMPORTED_MODULE_3__["VERSION_RETENTION_DELETE_ACTION"]]: _messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionRetentionDelete,
  [_constants__WEBPACK_IMPORTED_MODULE_3__["VERSION_RETENTION_REMOVE_ACTION"]]: _messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionRetentionRemove
};

var VersionsItemRetention = (_ref) => {
  var {
    retention
  } = _ref;
  var {
    disposition_at: dispositionAt,
    winning_retention_policy: retentionPolicy
  } = retention || {};
  var {
    disposition_action: dispositionAction,
    retention_length: retentionLength
  } = retentionPolicy || {};
  var dispositionAtTime = dispositionAt && new Date(dispositionAt).getTime();

  if (!dispositionAction) {
    return null;
  }

  return retentionLength === _constants__WEBPACK_IMPORTED_MODULE_3__["VERSION_RETENTION_INDEFINITE"] || !dispositionAtTime ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionRetentionIndefinite) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, RETENTION_MAP[dispositionAction], {
    values: {
      time: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_time__WEBPACK_IMPORTED_MODULE_2__["ReadableTime"], {
        timestamp: dispositionAtTime,
        showWeekday: true
      })
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsItemRetention);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsList.js":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsList.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _VersionsItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VersionsItem */ "./src/elements/content-sidebar/versions/VersionsItem.js");
/* harmony import */ var _VersionsList_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VersionsList.scss */ "./src/elements/content-sidebar/versions/VersionsList.scss");
/* harmony import */ var _VersionsList_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_VersionsList_scss__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions List component
 * @author Box
 */





var VersionsList = (_ref) => {
  var {
    currentId,
    versions
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["currentId", "versions"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "bcs-VersionsList"
  }, versions.map(version => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "bcs-VersionsList-item",
    key: version.id
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    render: (_ref2) => {
      var {
        match
      } = _ref2;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VersionsItem__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        isCurrent: currentId === version.id,
        isSelected: match.params.versionId === version.id,
        version: version
      }, rest));
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsList);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsList.scss":
/*!*****************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsList.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsMenu.js":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsMenu.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/last */ "./node_modules/lodash/last.js");
/* harmony import */ var lodash_last__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_last__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/datetime */ "./src/utils/datetime.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _VersionsGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VersionsGroup */ "./src/elements/content-sidebar/versions/VersionsGroup.js");
/* harmony import */ var _VersionsMenu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VersionsMenu.scss */ "./src/elements/content-sidebar/versions/VersionsMenu.scss");
/* harmony import */ var _VersionsMenu_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_VersionsMenu_scss__WEBPACK_IMPORTED_MODULE_6__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Menu component
 * @author Box
 */








var getHeading = (_ref) => {
  var {
    intl,
    version
  } = _ref;
  var {
    created_at: createdAt
  } = version;
  var currentDate = new Date();
  var currentDay = currentDate.getDay();
  var currentSunday = currentDate.getDate() - currentDay;
  var createdAtDate = _utils_datetime__WEBPACK_IMPORTED_MODULE_3__["convertToDate"](createdAt);
  var heading;

  if (_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["isToday"](createdAtDate)) {
    heading = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionsToday); // Today
  } else if (_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["isYesterday"](createdAtDate)) {
    heading = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionsYesterday); // Yesterday
  } else if (!_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["isCurrentYear"](createdAtDate)) {
    heading = intl.formatDate(createdAt, {
      year: 'numeric'
    }); // 2018
  } else if (!_utils_datetime__WEBPACK_IMPORTED_MODULE_3__["isCurrentMonth"](createdAtDate)) {
    heading = intl.formatDate(createdAt, {
      month: 'long'
    }); // January
  } else if (createdAtDate.getDate() <= currentSunday - 7) {
    heading = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionsThisMonth); // This Month
  } else if (createdAtDate.getDate() <= currentSunday) {
    heading = intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__["default"].versionsPriorWeek); // Last Week
  } else {
    heading = intl.formatDate(createdAt, {
      weekday: 'long'
    }); // Monday
  }

  return heading;
};

var VersionsMenu = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo((_ref2) => {
  var {
    intl,
    versions
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["intl", "versions"]);

  var {
    id: currentId
  } = versions[0] || {}; // Build an ordered set of groups with headings based on the original order of the versions array

  var versionGroups = versions.reduce((groups, version) => {
    var currentGroup = lodash_last__WEBPACK_IMPORTED_MODULE_1___default()(groups);
    var groupHeading = getHeading({
      intl,
      version
    }); // Push a new group if there are no groups or if the heading has changed

    if (!currentGroup || currentGroup.groupHeading !== groupHeading) {
      groups.push({
        groupHeading,
        groupVersions: []
      });
    } // Push the sorted version to the newest group's versions collection


    lodash_last__WEBPACK_IMPORTED_MODULE_1___default()(groups).groupVersions.push(version);
    return groups;
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "bcs-VersionsMenu"
  }, versionGroups.map((_ref3) => {
    var {
      groupHeading,
      groupVersions
    } = _ref3;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "bcs-VersionsMenu-item",
      key: groupHeading
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VersionsGroup__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
      currentId: currentId,
      heading: groupHeading,
      versions: groupVersions
    }, rest)));
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(VersionsMenu));

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsMenu.scss":
/*!*****************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsMenu.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsSidebar.js":
/*!******************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsSidebar.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_inline_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/inline-error */ "./src/components/inline-error/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SidebarContent */ "./src/elements/content-sidebar/SidebarContent.js");
/* harmony import */ var _VersionsMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VersionsMenu */ "./src/elements/content-sidebar/versions/VersionsMenu.js");
/* harmony import */ var _common_nav_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/nav-button */ "./src/elements/common/nav-button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _components_loading_indicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/loading-indicator */ "./src/components/loading-indicator/index.js");
/* harmony import */ var _VersionsSidebar_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VersionsSidebar.scss */ "./src/elements/content-sidebar/versions/VersionsSidebar.scss");
/* harmony import */ var _VersionsSidebar_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_VersionsSidebar_scss__WEBPACK_IMPORTED_MODULE_9__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 
 * @file Versions Sidebar component
 * @author Box
 */










var MAX_VERSIONS = _constants__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_FETCH_END"];

var VersionsSidebar = (_ref) => {
  var {
    error,
    isLoading,
    parentName,
    versions
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["error", "isLoading", "parentName", "versions"]);

  var showLimit = versions.length >= MAX_VERSIONS;
  var showVersions = !!versions.length;
  var showEmpty = !isLoading && !showVersions;
  var showError = !!error;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "bcs-Versions",
    "data-resin-component": "preview",
    "data-resin-feature": "versions",
    title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_common_nav_button__WEBPACK_IMPORTED_MODULE_6__["BackButton"], {
      "data-resin-target": "back",
      to: "/".concat(parentName)
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionsTitle))
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator__WEBPACK_IMPORTED_MODULE_8__["LoadingIndicatorWrapper"], {
    className: "bcs-Versions-content",
    crawlerPosition: "top",
    isLoading: isLoading
  }, showError && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_inline_error__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionServerError)
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], error)), showEmpty && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-Versions-empty"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionsEmpty)), showVersions && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-Versions-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VersionsMenu__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    versions: versions
  }, rest))), showLimit && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "bcs-Versions-maxEntries",
    "data-testid": "max-versions"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _messages__WEBPACK_IMPORTED_MODULE_3__["default"].versionMaxEntries, {
    values: {
      maxVersions: MAX_VERSIONS
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (VersionsSidebar);

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsSidebar.scss":
/*!********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsSidebar.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsSidebarAPI.js":
/*!*********************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsSidebarAPI.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VersionsSidebarAPI; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api */ "./src/api/index.js");
/* harmony import */ var _utils_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/fields */ "./src/utils/fields.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Versions Sidebar API Helper
 * @author Box
 */


class VersionsSidebarAPI {
  constructor(_ref) {
    var {
      api,
      fileId
    } = _ref;

    _defineProperty(this, "fetchData", () => {
      return Promise.all([this.fetchFile(), this.fetchVersions()]).then(this.fetchVersionCurrent);
    });

    _defineProperty(this, "fetchDownloadUrl", version => {
      return new Promise((resolve, reject) => {
        if (!version) {
          return reject(new Error('Could not find requested version'));
        }

        return this.api.getFileAPI().getDownloadUrl(this.fileId, version, resolve, reject);
      });
    });

    _defineProperty(this, "fetchFile", () => {
      return new Promise((resolve, reject) => this.api.getFileAPI().getFile(this.fileId, resolve, reject, {
        fields: _utils_fields__WEBPACK_IMPORTED_MODULE_1__["FILE_VERSION_FIELDS_TO_FETCH"],
        forceFetch: true
      }));
    });

    _defineProperty(this, "fetchVersions", () => {
      return new Promise((resolve, reject) => this.api.getVersionsAPI(false).getVersions(this.fileId, resolve, reject));
    });

    _defineProperty(this, "fetchVersionCurrent", (_ref2) => {
      var [fileResponse, versionsResponse] = _ref2;
      var {
        file_version = {}
      } = fileResponse;
      return new Promise((resolve, reject) => this.api.getVersionsAPI(false).getVersion(this.fileId, file_version.id, currentVersionResponse => {
        resolve([fileResponse, this.api.getVersionsAPI(false).addCurrentVersion(currentVersionResponse, versionsResponse, fileResponse)]);
      }, reject));
    });

    _defineProperty(this, "fetchVersion", versionId => {
      return new Promise((resolve, reject) => this.api.getVersionsAPI(false).getVersion(this.fileId, versionId, resolve, reject));
    });

    _defineProperty(this, "deleteVersion", version => {
      var {
        id: versionId,
        permissions = {}
      } = version || {};
      return new Promise((resolve, reject) => this.api.getVersionsAPI(false).deleteVersion({
        fileId: this.fileId,
        permissions,
        successCallback: resolve,
        errorCallback: reject,
        versionId
      }));
    });

    _defineProperty(this, "promoteVersion", version => {
      var {
        id: versionId,
        permissions = {}
      } = version || {};
      return new Promise((resolve, reject) => this.api.getVersionsAPI(false).promoteVersion({
        fileId: this.fileId,
        permissions,
        successCallback: resolve,
        errorCallback: reject,
        versionId
      }));
    });

    _defineProperty(this, "restoreVersion", version => {
      var {
        id: versionId,
        permissions = {}
      } = version || {};
      return new Promise((resolve, reject) => this.api.getVersionsAPI(false).restoreVersion({
        fileId: this.fileId,
        permissions,
        successCallback: resolve,
        errorCallback: reject,
        versionId
      }));
    });

    this.api = api;
    this.fileId = fileId;
  }

}

/***/ }),

/***/ "./src/elements/content-sidebar/versions/VersionsSidebarContainer.js":
/*!***************************************************************************!*\
  !*** ./src/elements/content-sidebar/versions/VersionsSidebarContainer.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api */ "./src/api/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/elements/content-sidebar/versions/messages.js");
/* harmony import */ var _utils_iframe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/iframe */ "./src/utils/iframe.js");
/* harmony import */ var _VersionsSidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VersionsSidebar */ "./src/elements/content-sidebar/versions/VersionsSidebar.js");
/* harmony import */ var _VersionsSidebarAPI__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VersionsSidebarAPI */ "./src/elements/content-sidebar/versions/VersionsSidebarAPI.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/api-context */ "./src/elements/common/api-context/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Versions Sidebar container
 * @author Box
 */













class VersionsSidebarContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isLoading: true,
      isWatermarked: false,
      versionCount: Infinity,
      versionLimit: Infinity,
      versions: []
    });

    _defineProperty(this, "window", window);

    _defineProperty(this, "handleActionDelete", versionId => {
      this.setState({
        isLoading: true
      });
      return this.api.deleteVersion(this.findVersion(versionId)).then(() => this.api.fetchVersion(versionId)).then(this.handleDeleteSuccess).then(() => this.props.onVersionDelete(versionId)).catch(() => this.handleActionError(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].versionActionDeleteError));
    });

    _defineProperty(this, "handleActionDownload", versionId => {
      return this.api.fetchDownloadUrl(this.findVersion(versionId)).then(_utils_iframe__WEBPACK_IMPORTED_MODULE_8__["default"]).then(() => this.props.onVersionDownload(versionId)).catch(() => this.handleActionError(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].versionActionDownloadError));
    });

    _defineProperty(this, "handleActionPreview", versionId => {
      this.updateVersion(versionId);
      this.props.onVersionPreview(versionId);
    });

    _defineProperty(this, "handleActionPromote", versionId => {
      this.setState({
        isLoading: true
      });
      return this.api.promoteVersion(this.findVersion(versionId)).then(this.api.fetchData).then(this.handleFetchSuccess).then(this.handlePromoteSuccess).then(() => this.props.onVersionPromote(versionId)).catch(() => this.handleActionError(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].versionActionPromoteError));
    });

    _defineProperty(this, "handleActionRestore", versionId => {
      this.setState({
        isLoading: true
      });
      return this.api.restoreVersion(this.findVersion(versionId)).then(() => this.api.fetchVersion(versionId)).then(this.handleRestoreSuccess).then(() => this.props.onVersionRestore(versionId)).catch(() => this.handleActionError(_messages__WEBPACK_IMPORTED_MODULE_7__["default"].versionActionRestoreError));
    });

    _defineProperty(this, "handleActionError", message => {
      this.setState({
        error: message,
        isLoading: false
      });
    });

    _defineProperty(this, "handleDeleteSuccess", data => {
      var {
        versionId: selectedVersionId
      } = this.props;
      var {
        id: versionId
      } = data;
      this.mergeResponse(data); // Bump the user to the current version if they deleted their selected version

      if (versionId === selectedVersionId) {
        this.updateVersionToCurrent();
      }
    });

    _defineProperty(this, "handleRestoreSuccess", data => {
      this.mergeResponse(data);
    });

    _defineProperty(this, "handleFetchError", () => {
      this.setState({
        error: _messages__WEBPACK_IMPORTED_MODULE_7__["default"].versionFetchError,
        isLoading: false,
        isWatermarked: false,
        versionCount: 0,
        versions: []
      });
    });

    _defineProperty(this, "handleFetchSuccess", (_ref) => {
      var [fileResponse, versionsResponse] = _ref;
      var {
        api
      } = this.props;
      var {
        version_limit
      } = fileResponse;
      var isWatermarked = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(fileResponse, 'watermark_info.is_watermarked', false);
      var versionLimit = version_limit !== null && version_limit !== undefined ? version_limit : Infinity;
      var versionsWithPermissions = api.getVersionsAPI(false).addPermissions(versionsResponse, fileResponse) || {};
      var {
        entries: versions,
        total_count: versionCount
      } = versionsWithPermissions;
      this.setState({
        error: undefined,
        isLoading: false,
        isWatermarked,
        versionCount,
        versionLimit,
        versions: this.sortVersions(versions)
      }, this.verifyVersion);
      return [fileResponse, versionsResponse];
    });

    _defineProperty(this, "handlePromoteSuccess", (_ref2) => {
      var [file] = _ref2;
      var {
        file_version: fileVersion
      } = file;

      if (fileVersion) {
        this.updateVersion(fileVersion.id);
      }
    });

    _defineProperty(this, "initialize", () => {
      this.api = new _VersionsSidebarAPI__WEBPACK_IMPORTED_MODULE_10__["default"](this.props);
    });

    _defineProperty(this, "fetchData", () => {
      this.api.fetchData().then(this.handleFetchSuccess).catch(this.handleFetchError);
    });

    _defineProperty(this, "findVersion", versionId => {
      var {
        versions
      } = this.state;
      return versions.find(version => version.id === versionId);
    });

    _defineProperty(this, "getCurrentVersionId", () => {
      var {
        versions
      } = this.state;
      return versions[0] ? versions[0].id : null;
    });

    _defineProperty(this, "mergeVersions", newVersion => {
      var {
        versions
      } = this.state;
      var newVersionId = newVersion ? newVersion.id : '';
      return versions.map(version => version.id === newVersionId ? lodash_merge__WEBPACK_IMPORTED_MODULE_3___default()(_objectSpread({}, version), newVersion) : version);
    });

    _defineProperty(this, "mergeResponse", data => {
      var newVersions = this.mergeVersions(data);
      this.setState({
        error: undefined,
        isLoading: false,
        versions: newVersions
      });
    });

    _defineProperty(this, "updateVersion", versionId => {
      var {
        history,
        match
      } = this.props;
      return history.push(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["generatePath"])(match.path, _objectSpread({}, match.params, {
        versionId
      })));
    });

    _defineProperty(this, "updateVersionToCurrent", () => {
      this.updateVersion(this.getCurrentVersionId());
    });

    _defineProperty(this, "verifyVersion", () => {
      var {
        onVersionChange,
        versionId
      } = this.props;
      var selectedVersion = this.findVersion(versionId);

      if (selectedVersion) {
        onVersionChange(selectedVersion, {
          currentVersionId: this.getCurrentVersionId(),
          updateVersionToCurrent: this.updateVersionToCurrent
        });
      } else {
        this.updateVersionToCurrent();
      }
    });
  }

  componentDidMount() {
    this.initialize();
    this.fetchData();
  }

  componentDidUpdate(_ref3) {
    var {
      fileId: prevFileId,
      versionId: prevVersionId
    } = _ref3;
    var {
      fileId,
      versionId
    } = this.props;

    if (fileId !== prevFileId) {
      this.refresh();
    }

    if (versionId !== prevVersionId) {
      this.verifyVersion();
    }
  }

  componentWillUnmount() {
    // Reset the current version id since the wrapping route is no longer active
    this.props.onVersionChange(null);
  }

  refresh() {
    this.initialize();
    this.setState({
      isLoading: true
    }, this.fetchData);
  }

  sortVersions() {
    var versions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return [...versions].sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
  }

  render() {
    var {
      fileId,
      parentName
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VersionsSidebar__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({
      fileId: fileId,
      onDelete: this.handleActionDelete,
      onDownload: this.handleActionDownload,
      onPreview: this.handleActionPreview,
      onPromote: this.handleActionPromote,
      onRestore: this.handleActionRestore,
      parentName: parentName
    }, this.state));
  }

}

_defineProperty(VersionsSidebarContainer, "defaultProps", {
  onVersionChange: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionDelete: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionDownload: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionPreview: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionPromote: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  onVersionRestore: lodash_noop__WEBPACK_IMPORTED_MODULE_4___default.a,
  parentName: ''
});

/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_1___default()([react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"], _common_api_context__WEBPACK_IMPORTED_MODULE_11__["withAPIContext"]])(VersionsSidebarContainer));

/***/ }),

/***/ "./src/elements/content-sidebar/versions/index.js":
/*!********************************************************!*\
  !*** ./src/elements/content-sidebar/versions/index.js ***!
  \********************************************************/
/*! exports provided: default, VersionsSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VersionsSidebarContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VersionsSidebarContainer */ "./src/elements/content-sidebar/versions/VersionsSidebarContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _VersionsSidebarContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _VersionsSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VersionsSidebar */ "./src/elements/content-sidebar/versions/VersionsSidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VersionsSidebarComponent", function() { return _VersionsSidebar__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/elements/content-sidebar/versions/messages.js":
/*!***********************************************************!*\
  !*** ./src/elements/content-sidebar/versions/messages.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");

var messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  versionsEmpty: {
    "id": "be.sidebarVersions.empty",
    "defaultMessage": "No prior versions are available for this file."
  },
  versionsPriorWeek: {
    "id": "be.sidebarVersions.priorWeek",
    "defaultMessage": "Last Week"
  },
  versionsThisMonth: {
    "id": "be.sidebarVersions.thisMonth",
    "defaultMessage": "This Month"
  },
  versionsToday: {
    "id": "be.sidebarVersions.today",
    "defaultMessage": "Today"
  },
  versionsYesterday: {
    "id": "be.sidebarVersions.yesterday",
    "defaultMessage": "Yesterday"
  },
  versionsTitle: {
    "id": "be.sidebarVersions.title",
    "defaultMessage": "Version History"
  },
  versionCurrent: {
    "id": "be.sidebarVersions.current",
    "defaultMessage": "Current Version"
  },
  versionActionDelete: {
    "id": "be.sidebarVersions.delete",
    "defaultMessage": "Delete"
  },
  versionActionDeleteError: {
    "id": "be.sidebarVersions.deleteError",
    "defaultMessage": "File version could not be deleted."
  },
  versionActionDisabledRetention: {
    "id": "be.sidebarVersions.disabledByRetention",
    "defaultMessage": "Disabled by retention policy"
  },
  versionActionDownload: {
    "id": "be.sidebarVersions.download",
    "defaultMessage": "Download"
  },
  versionActionDownloadError: {
    "id": "be.sidebarVersions.downloadError",
    "defaultMessage": "File version could not be downloaded."
  },
  versionActionPreview: {
    "id": "be.sidebarVersions.preview",
    "defaultMessage": "Preview"
  },
  versionActionPromote: {
    "id": "be.sidebarVersions.promote",
    "defaultMessage": "Make Current"
  },
  versionActionPromoteError: {
    "id": "be.sidebarVersions.promoteError",
    "defaultMessage": "File version could not be made current."
  },
  versionActionRestore: {
    "id": "be.sidebarVersions.restore",
    "defaultMessage": "Restore"
  },
  versionActionRestoreError: {
    "id": "be.sidebarVersions.restoreError",
    "defaultMessage": "File version could not be restored."
  },
  versionActionToggle: {
    "id": "be.sidebarVersions.toggle",
    "defaultMessage": "Toggle Actions Menu"
  },
  versionDeletedBy: {
    "id": "be.sidebarVersions.deletedBy",
    "defaultMessage": "Deleted by {name}"
  },
  versionFetchError: {
    "id": "be.sidebarVersions.fetchError",
    "defaultMessage": "File versions could not be retrieved."
  },
  versionLimitExceeded: {
    "id": "be.sidebarVersions.versionLimitExceeded",
    "defaultMessage": "You are limited to the last {versionLimit, number} {versionLimit, plural, one {version} other {versions}}."
  },
  versionNumberBadge: {
    "id": "be.sidebarVersions.versionNumberBadge",
    "defaultMessage": "V{versionNumber}"
  },
  versionNumberLabel: {
    "id": "be.sidebarVersions.versionNumberLabel",
    "defaultMessage": "Version number {versionNumber}"
  },
  versionPromotedBy: {
    "id": "be.sidebarVersions.promotedBy",
    "defaultMessage": "Promoted from v{versionPromoted} by {name}"
  },
  versionRestoredBy: {
    "id": "be.sidebarVersions.restoredBy",
    "defaultMessage": "Restored by {name}"
  },
  versionServerError: {
    "id": "be.sidebarVersions.serverError",
    "defaultMessage": "Server Error"
  },
  versionUploadedBy: {
    "id": "be.sidebarVersions.uploadedBy",
    "defaultMessage": "Uploaded by {name}"
  },
  versionUserUnknown: {
    "id": "be.sidebarVersions.versionUserUnknown",
    "defaultMessage": "Unknown"
  },
  versionMaxEntries: {
    "id": "be.sidebarVersions.versionMaxEntries",
    "defaultMessage": "Version history is limited to the last {maxVersions} entries."
  },
  versionRetentionDelete: {
    "id": "be.sidebarVersions.versionRetentionDelete",
    "defaultMessage": "Will be deleted {time} by retention policy."
  },
  versionRetentionIndefinite: {
    "id": "be.sidebarVersions.versionRetentionIndefinite",
    "defaultMessage": "Retained indefinitely by retention policy."
  },
  versionRetentionRemove: {
    "id": "be.sidebarVersions.versionRetentionRemove",
    "defaultMessage": "Retention policy expires on {time}."
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/icons/general/IconClockPast.js":
/*!********************************************!*\
  !*** ./src/icons/general/IconClockPast.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconClockPast = (_ref) => {
  var {
    className = '',
    color = '#444',
    height = 14,
    title,
    width = 16
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-clock-past ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 14",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(0 1)"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    className: "fill-color",
    fill: color,
    height: "5",
    rx: ".5",
    width: "1",
    x: "9.66",
    y: "3"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    className: "fill-color",
    fill: color,
    height: "1",
    rx: ".5",
    width: "3",
    x: "9.66",
    y: "7"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "stroke-color",
    d: "M5.66 10.62C6.697 11.48 8.032 12 9.487 12c3.314 0 6-2.686 6-6s-2.686-6-6-6c-3.313 0-6 2.686-6 6",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M6.317 5l-2.83 2.828L.66 5",
    fill: color
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (IconClockPast);

/***/ }),

/***/ "./src/icons/general/IconDownload.js":
/*!*******************************************!*\
  !*** ./src/icons/general/IconDownload.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");




var IconDownload = (_ref) => {
  var {
    className = '',
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlGray80"],
    height = 16,
    title,
    width = 16
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-download ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M14 14v1H2v-1h12zM10.996 2v4.997H14L8 13 2 6.997h3.004V2h5.992zm-.998 1H6.002v4.996h-1.59L8 11.586l3.589-3.59H9.998V3z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconDownload);

/***/ }),

/***/ "./src/icons/general/IconOpenWith.js":
/*!*******************************************!*\
  !*** ./src/icons/general/IconOpenWith.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");




var IconOpenWith = (_ref) => {
  var {
    className = '',
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_2__["bdlGray80"],
    height = 16,
    title,
    width = 16
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-open-with ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 2v6h-1V6.71l-4.65 4.64-.7-.7L9.29 6H5V5h6z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconOpenWith);

/***/ }),

/***/ "./src/icons/general/IconUpload.js":
/*!*****************************************!*\
  !*** ./src/icons/general/IconUpload.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/variables */ "./src/styles/variables.js");
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");




var IconUpload = (_ref) => {
  var {
    className = '',
    color = _styles_variables__WEBPACK_IMPORTED_MODULE_1__["bdlGray80"],
    height = 16,
    title,
    width = 16
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "icon-upload ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    fill: color,
    fillRule: "evenodd",
    d: "M14 14v1H2v-1h12zM8 1l6 6.003h-3.004V12H5.004V7.003H2L8 1zm0 1.413l-3.589 3.59h1.591v4.998h3.996V6.004h1.59L8 2.414z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconUpload);

/***/ }),

/***/ "./src/utils/iframe.js":
/*!*****************************!*\
  !*** ./src/utils/iframe.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return openUrlInsideIframe; });
/**
 * 
 * @file Function to create iframe and downloading
 * @author Box
 */

/**
 * Creates an empty iframe or uses an existing one
 * for the purposes of downloading or printing
 *
 * @private
 * @return {HTMLIFrameElement} Iframe
 */
function createDownloadIframe() {
  var iframe = document.querySelector('#boxdownloadiframe');

  if (!iframe) {
    // if no existing iframe create a new one
    iframe = document.createElement('iframe');
    iframe.setAttribute('id', 'boxdownloadiframe');
    iframe.style.display = 'none';

    if (document.body) {
      document.body.appendChild(iframe);
    }
  } // Clean the iframe up


  iframe.contentDocument.write('<head></head><body></body>');
  return iframe;
}
/**
 * Opens url in an iframe
 * Used for downloads
 *
 * @param {string} url - URL to open
 * @return {HTMLIFrameElement}
 */


function openUrlInsideIframe(url) {
  var iframe = createDownloadIframe();
  iframe.src = url;
  return iframe;
}

/***/ }),

/***/ "./src/utils/size.js":
/*!***************************!*\
  !*** ./src/utils/size.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 
 * @file Function to create size in words out of number
 * @author Box
 */

/**
 * Gets the size in words
 *
 * @param {number} size in bytes
 * @return {string} size in words
 */
/* harmony default export */ __webpack_exports__["default"] = (function (size) {
  if (!size) return '0 Byte';
  var kilo = 1024;
  var decimals = 2;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  var exp = Math.floor(Math.log(size) / Math.log(kilo));
  return "".concat(parseFloat((size / kilo ** exp).toFixed(decimals)), " ").concat(sizes[exp]);
});

/***/ })

}]);
//# sourceMappingURL=versions-sidebar.js.map
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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skills-sidebar"],{

/***/ "./src/components/pill-cloud/PillCloud.js":
/*!************************************************!*\
  !*** ./src/components/pill-cloud/PillCloud.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./src/components/button/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var PillCloud = (_ref) => {
  var {
    options,
    onSelect,
    selectedOptions = [],
    buttonProps = {}
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pill-cloud-container"
  }, options && options.map(option => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    key: option.value,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('pill', 'pill-cloud-button', {
      'is-selected': selectedOptions.find(op => lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(op, option))
    }),
    onClick: onSelect ? () => onSelect(option) : undefined
  }, buttonProps), option.displayText)));
};

/* harmony default export */ __webpack_exports__["default"] = (PillCloud);

/***/ }),

/***/ "./src/elements/content-sidebar/SkillsSidebar.js":
/*!*******************************************************!*\
  !*** ./src/elements/content-sidebar/SkillsSidebar.js ***!
  \*******************************************************/
/*! exports provided: SkillsSidebarComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsSidebarComponent", function() { return SkillsSidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/flow */ "./node_modules/lodash/flow.js");
/* harmony import */ var lodash_flow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/noop */ "./node_modules/lodash/noop.js");
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./src/api/index.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/loading-indicator/LoadingIndicator */ "./src/components/loading-indicator/LoadingIndicator.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SidebarContent */ "./src/elements/content-sidebar/SidebarContent.js");
/* harmony import */ var _skills_SidebarSkills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skills/SidebarSkills */ "./src/elements/content-sidebar/skills/SidebarSkills.js");
/* harmony import */ var _common_logger_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/logger/constants */ "./src/elements/common/logger/constants.js");
/* harmony import */ var _utils_performance__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/performance */ "./src/utils/performance.js");
/* harmony import */ var _common_api_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/api-context */ "./src/elements/common/api-context/index.js");
/* harmony import */ var _common_error_boundary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/error-boundary */ "./src/elements/common/error-boundary/index.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/logger */ "./src/elements/common/logger/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _SkillsSidebar_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SkillsSidebar.scss */ "./src/elements/content-sidebar/SkillsSidebar.scss");
/* harmony import */ var _SkillsSidebar_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_SkillsSidebar_scss__WEBPACK_IMPORTED_MODULE_16__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Skills sidebar component
 * @author Box
 */

















var MARK_NAME_JS_READY = "".concat(_constants__WEBPACK_IMPORTED_MODULE_15__["ORIGIN_SKILLS_SIDEBAR"], "_").concat(_common_logger_constants__WEBPACK_IMPORTED_MODULE_10__["EVENT_JS_READY"]);
Object(_utils_performance__WEBPACK_IMPORTED_MODULE_11__["mark"])(MARK_NAME_JS_READY);

class SkillsSidebar extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    var _this;

    super(props);
    _this = this;

    _defineProperty(this, "state", {
      errors: {}
    });

    _defineProperty(this, "fetchSkillsSuccessCallback", cards => {
      this.updatePreviewTranscript(cards);
      this.setState({
        cards
      });
    });

    _defineProperty(this, "updatePreviewTranscript", cards => {
      var {
        getPreview,
        getViewer
      } = this.props;
      var preview = getPreview ? getPreview() : null;
      var viewer = getViewer ? getViewer() : null;
      var transcriptCard = cards.find(card => card.skill_card_type === _constants__WEBPACK_IMPORTED_MODULE_15__["SKILLS_TRANSCRIPT"]);

      if (!transcriptCard || !preview) {
        return;
      }

      if (!viewer) {
        preview.addListener('load', (_ref) => {
          var {
            viewer: loadedViewer
          } = _ref;

          if (typeof loadedViewer.loadAutoGeneratedCaptions === 'function') {
            loadedViewer.loadAutoGeneratedCaptions(transcriptCard);
          }
        });
      } else if (typeof viewer.loadAutoGeneratedCaptions === 'function') {
        viewer.loadAutoGeneratedCaptions(transcriptCard);
      }
    });

    _defineProperty(this, "onSaveSuccessHandler", (index, updatedCards) => {
      var {
        errors
      } = this.state;

      var clone = _objectSpread({}, errors);

      delete clone[index];
      this.updatePreviewTranscript(updatedCards);
      this.setState({
        cards: updatedCards,
        errors: clone
      });
    });

    _defineProperty(this, "onSaveErrorHandler", index => {
      var {
        errors
      } = this.state;

      var clone = _objectSpread({}, errors);

      clone[index] = true;
      this.setState({
        errors: clone
      });
    });

    _defineProperty(this, "onSave", function (index) {
      var removes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var adds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var replaces = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var {
        api,
        file
      } = _this.props;
      var {
        cards = []
      } = _this.state;
      var card = cards[index];
      var path = "/cards/".concat(index);
      var ops = [];
      var canEdit = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(file, _constants__WEBPACK_IMPORTED_MODULE_15__["FIELD_PERMISSIONS_CAN_UPLOAD"], false);

      if (!canEdit || !card) {
        return;
      }

      if (Array.isArray(replaces)) {
        replaces.forEach((_ref2) => {
          var {
            replaced,
            replacement
          } = _ref2;
          var idx = card.entries.findIndex(entry => entry === replaced);

          if (idx > -1) {
            ops.push({
              op: 'replace',
              path: "".concat(path, "/entries/").concat(idx),
              value: replacement
            });
          }
        });
      }

      if (Array.isArray(removes)) {
        var deletes = [];
        removes.forEach(removed => {
          var idx = card.entries.findIndex(entry => entry === removed);

          if (idx > -1) {
            deletes.push(idx);
          }
        }); // To maintain metadata index positions, removes should be
        // done is reverse order with largest index being removed first.
        // Remove operations are atomic and don't happen in batch.

        deletes.sort((a, b) => b - a) // number sort in descending order
        .forEach(idx => {
          ops.push({
            op: 'remove',
            path: "".concat(path, "/entries/").concat(idx)
          });
        });
      }

      if (Array.isArray(adds)) {
        adds.forEach(added => {
          ops.push({
            op: 'add',
            path: "".concat(path, "/entries/-"),
            value: added
          });
        });
      } // If no ops, don't proceed


      if (ops.length === 0) {
        return;
      } // Add test ops before any other ops


      ops.splice(0, 0, {
        op: 'test',
        path,
        value: card
      });
      api.getMetadataAPI(false).updateSkills(file, ops, updatedCards => {
        _this.onSaveSuccessHandler(index, updatedCards);
      }, () => {
        _this.onSaveErrorHandler(index);
      });
    });

    var {
      logger
    } = this.props;
    logger.onReadyMetric({
      endMarkName: MARK_NAME_JS_READY
    });
  }

  componentDidMount() {
    var {
      api,
      file
    } = this.props;
    api.getMetadataAPI(false).getSkills(file, this.fetchSkillsSuccessCallback, lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a);
  }

  componentDidUpdate(_ref3) {
    var {
      refreshIdentity: prevRefreshIdentity
    } = _ref3;
    var {
      api,
      file,
      refreshIdentity
    } = this.props;

    if (refreshIdentity !== prevRefreshIdentity) {
      api.getMetadataAPI(false).getSkills(file, this.fetchSkillsSuccessCallback, lodash_noop__WEBPACK_IMPORTED_MODULE_3___default.a);
    }
  }
  /**
   * Handles skills fetch success
   *
   * @private
   * @param {Array<SkillCard>} cards - Skills cards
   * @return {void}
   */


  render() {
    var {
      file,
      getViewer,
      elementId
    } = this.props;
    var {
      cards,
      errors
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "bcs-skills",
      elementId: elementId,
      sidebarView: _constants__WEBPACK_IMPORTED_MODULE_15__["SIDEBAR_VIEW_SKILLS"],
      title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_7__["default"].sidebarSkillsTitle)
    }, cards ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_skills_SidebarSkills__WEBPACK_IMPORTED_MODULE_9__["default"], {
      cards: cards,
      errors: errors,
      file: file,
      getViewer: getViewer,
      onSkillChange: this.onSave
    }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__["default"], null));
  }

}


/* harmony default export */ __webpack_exports__["default"] = (lodash_flow__WEBPACK_IMPORTED_MODULE_1___default()([Object(_common_logger__WEBPACK_IMPORTED_MODULE_14__["withLogger"])(_constants__WEBPACK_IMPORTED_MODULE_15__["ORIGIN_SKILLS_SIDEBAR"]), Object(_common_error_boundary__WEBPACK_IMPORTED_MODULE_13__["withErrorBoundary"])(_constants__WEBPACK_IMPORTED_MODULE_15__["ORIGIN_SKILLS_SIDEBAR"]), _common_api_context__WEBPACK_IMPORTED_MODULE_12__["withAPIContext"]])(SkillsSidebar));

/***/ }),

/***/ "./src/elements/content-sidebar/SkillsSidebar.scss":
/*!*********************************************************!*\
  !*** ./src/elements/content-sidebar/SkillsSidebar.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/skills/SidebarSkills.js":
/*!**************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/SidebarSkills.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _SidebarSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SidebarSection */ "./src/elements/content-sidebar/SidebarSection.js");
/* harmony import */ var _skillUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skillUtils */ "./src/elements/content-sidebar/skills/skillUtils.js");
/* harmony import */ var _SidebarSkillsCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SidebarSkillsCard */ "./src/elements/content-sidebar/skills/SidebarSkillsCard.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/**
 * 
 * @file Details sidebar component
 * @author Box
 */










/**
 * Get ths skill interaction target based on card type
 *
 * @param {Object} card - skill card
 * @return {string} - interaction target
 */
var getCardInteractionTarget = (_ref) => {
  var {
    skill_card_type
  } = _ref;

  switch (skill_card_type) {
    case _constants__WEBPACK_IMPORTED_MODULE_8__["SKILLS_KEYWORD"]:
      return _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["SKILLS_TARGETS"].KEYWORDS.CARD;

    case _constants__WEBPACK_IMPORTED_MODULE_8__["SKILLS_FACE"]:
    case _constants__WEBPACK_IMPORTED_MODULE_8__["SKILLS_TIMELINE"]:
      return _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["SKILLS_TARGETS"].FACES.CARD;

    case _constants__WEBPACK_IMPORTED_MODULE_8__["SKILLS_TRANSCRIPT"]:
      return _common_interactionTargets__WEBPACK_IMPORTED_MODULE_4__["SKILLS_TARGETS"].TRANSCRIPTS.CARD;

    default:
      return '';
  }
};
/**
 * Get ths string skill title based on card title
 *
 * @param {Object} card - skill card
 * @return {string} - skill title
 */


var getCardTitle = (_ref2) => {
  var {
    skill_card_type,
    skill_card_title = {}
  } = _ref2;
  var {
    code,
    message
  } = skill_card_title;
  var defaultKey = "".concat(skill_card_type, "Skill");
  var defaultMessage = _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"][defaultKey] || _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].defaultSkill;

  switch (code) {
    case 'skills_faces':
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].faceSkill);

    case 'skills_transcript':
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].transcriptSkill);

    case 'skills_topics':
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].topicsSkill);

    case 'skills_status':
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].statusSkill);

    case 'skills_error':
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_3__["default"].error);

    default:
      return message || react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], defaultMessage);
  }
};

var SidebarSkills = (_ref3) => {
  var {
    file,
    cards,
    errors,
    getViewer,
    onSkillChange: _onSkillChange
  } = _ref3;
  var {
    permissions = {}
  } = file;
  var isSkillEditable = !!permissions.can_upload;
  return cards.map((card, index) => {
    if (card.error && !card.status) {
      card.skill_card_type = _constants__WEBPACK_IMPORTED_MODULE_8__["SKILLS_STATUS"];
      card.status = {
        code: _constants__WEBPACK_IMPORTED_MODULE_8__["SKILLS_ERROR_UNKNOWN"]
      };
      delete card.error;
    }

    var {
      id
    } = card;
    var cardId = id || lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()('card_');
    var isValid = Object(_skillUtils__WEBPACK_IMPORTED_MODULE_6__["isValidSkillsCard"])(file, card);
    var interactionTarget = getCardInteractionTarget(card);
    var title = getCardTitle(card);
    var hasEntries = Array.isArray(card.entries) ? card.entries.length > 0 : isValid;
    return isValid ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: cardId,
      interactionTarget: interactionTarget,
      isOpen: hasEntries,
      title: title
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SidebarSkillsCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      card: card,
      cards: cards,
      getViewer: getViewer,
      hasError: !!errors[index],
      isEditable: isSkillEditable,
      onSkillChange: function onSkillChange() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _onSkillChange(index, ...args);
      }
    })) : null;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarSkills);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/SidebarSkillsCard.js":
/*!******************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/SidebarSkillsCard.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status */ "./src/elements/content-sidebar/skills/status/index.js");
/* harmony import */ var _transcript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transcript */ "./src/elements/content-sidebar/skills/transcript/index.js");
/* harmony import */ var _keywords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keywords */ "./src/elements/content-sidebar/skills/keywords/index.js");
/* harmony import */ var _faces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faces */ "./src/elements/content-sidebar/skills/faces/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/**
 * 
 * @file Skills card component
 * @author Box
 */







var SidebarSkillsCard = (_ref) => {
  var {
    card,
    cards,
    hasError,
    isEditable,
    onSkillChange,
    getViewer
  } = _ref;

  switch (card.skill_card_type) {
    case _constants__WEBPACK_IMPORTED_MODULE_5__["SKILLS_KEYWORD"]:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_keywords__WEBPACK_IMPORTED_MODULE_3__["default"], {
        card: card,
        getViewer: getViewer,
        hasError: hasError,
        isEditable: isEditable,
        onSkillChange: onSkillChange,
        transcript: isEditable ? cards.find((_ref2) => {
          var {
            skill_card_type
          } = _ref2;
          return skill_card_type === _constants__WEBPACK_IMPORTED_MODULE_5__["SKILLS_TRANSCRIPT"];
        }) : undefined
      });

    case _constants__WEBPACK_IMPORTED_MODULE_5__["SKILLS_TIMELINE"]:
    case _constants__WEBPACK_IMPORTED_MODULE_5__["SKILLS_FACE"]:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_faces__WEBPACK_IMPORTED_MODULE_4__["default"], {
        card: card,
        getViewer: getViewer,
        hasError: hasError,
        isEditable: isEditable,
        onSkillChange: onSkillChange
      });

    case _constants__WEBPACK_IMPORTED_MODULE_5__["SKILLS_TRANSCRIPT"]:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_transcript__WEBPACK_IMPORTED_MODULE_2__["default"], {
        card: card,
        getViewer: getViewer,
        hasError: hasError,
        isEditable: isEditable,
        onSkillChange: onSkillChange
      });

    case _constants__WEBPACK_IMPORTED_MODULE_5__["SKILLS_STATUS"]:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_status__WEBPACK_IMPORTED_MODULE_1__["default"], {
        card: card
      });

    default:
      return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarSkillsCard);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/faces/Face.js":
/*!***********************************************************!*\
  !*** ./src/elements/content-sidebar/skills/faces/Face.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.js");
/* harmony import */ var _icons_general_IconClose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../icons/general/IconClose */ "./src/icons/general/IconClose.js");
/* harmony import */ var _icons_general_IconMinus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../icons/general/IconMinus */ "./src/icons/general/IconMinus.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _Face_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Face.scss */ "./src/elements/content-sidebar/skills/faces/Face.scss");
/* harmony import */ var _Face_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Face_scss__WEBPACK_IMPORTED_MODULE_7__);
/**
 * 
 * @file File Keywords SkillCard component
 * @author Box
 */









var Face = (_ref) => {
  var {
    face,
    selected,
    isEditing,
    onDelete,
    onSelect
  } = _ref;
  var isAnyFaceSelected = !!selected;
  var isCurrentFaceSelected = face === selected;
  var isFaceSelected = isAnyFaceSelected && isCurrentFaceSelected && !isEditing;
  var faceClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()('be-face-wrapper', {
    'be-face-unselected': !isEditing && isAnyFaceSelected && !isCurrentFaceSelected
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: faceClassName
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "be-face",
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["SKILLS_TARGETS"].FACES.FACE,
    onClick: () => !isEditing && onSelect(face),
    type: "button"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    alt: face.text,
    src: face.image_url,
    title: face.text
  }), isFaceSelected && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconMinus__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: _constants__WEBPACK_IMPORTED_MODULE_6__["COLOR_WHITE"]
  })), isEditing && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "be-face-delete",
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_5__["SKILLS_TARGETS"].FACES.DELETE,
    onClick: () => onDelete(face),
    type: "button"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconClose__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: _constants__WEBPACK_IMPORTED_MODULE_6__["COLOR_999"],
    height: 16,
    width: 16
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Face);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/faces/Face.scss":
/*!*************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/faces/Face.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/skills/faces/Faces.js":
/*!************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/faces/Faces.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.js");
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/primary-button/PrimaryButton */ "./src/components/primary-button/PrimaryButton.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/loading-indicator/LoadingIndicatorWrapper */ "./src/components/loading-indicator/LoadingIndicatorWrapper.js");
/* harmony import */ var _components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/inline-error/InlineError */ "./src/components/inline-error/InlineError.js");
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/tooltip/Tooltip */ "./src/components/tooltip/Tooltip.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/button/Button */ "./src/components/button/Button.js");
/* harmony import */ var _icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../icons/general/IconEdit */ "./src/icons/general/IconEdit.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _Face__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Face */ "./src/elements/content-sidebar/skills/faces/Face.js");
/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../timeline */ "./src/elements/content-sidebar/skills/timeline/index.js");
/* harmony import */ var _Faces_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Faces.scss */ "./src/elements/content-sidebar/skills/faces/Faces.scss");
/* harmony import */ var _Faces_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Faces_scss__WEBPACK_IMPORTED_MODULE_14__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Faces Skill Card component
 * @author Box
 */
















class Faces extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  /**
   * [constructor]
   *
   * @public
   * @return {Faces}
   */
  constructor(props) {
    super(props);

    _defineProperty(this, "toggleIsEditing", () => {
      this.setState(prevState => ({
        isEditing: !prevState.isEditing
      }));
    });

    _defineProperty(this, "onSelect", face => {
      var {
        selected
      } = this.state;
      this.setState({
        selected: selected === face ? undefined : face
      });
    });

    _defineProperty(this, "onDelete", face => {
      var {
        removes
      } = this.state;
      removes.push(face);
      this.setState({
        removes: removes.slice(0)
      });
    });

    _defineProperty(this, "onSave", () => {
      var {
        onSkillChange
      } = this.props;
      var {
        removes
      } = this.state;
      this.toggleIsEditing();

      if (removes.length > 0) {
        this.setState({
          isLoading: true
        });
        onSkillChange(removes);
      }
    });

    _defineProperty(this, "onCancel", () => {
      this.resetState(this.props);
    });

    this.state = {
      faces: props.card.entries,
      removes: [],
      isEditing: props.hasError,
      hasError: props.hasError,
      isLoading: false
    };
  }
  /**
   * Helper to reset the state
   *
   * @private
   * @param {Object} props - component props
   * @return {void}
   */


  resetState(props) {
    this.setState({
      faces: props.card.entries,
      removes: [],
      isEditing: false,
      selected: undefined,
      hasError: false,
      isLoading: false
    });
  }
  /**
   * Toggles the edit mode
   *
   * @private
   * @return {void}
   */


  /**
   * Renders the faces
   *
   * @private
   * @return {void}
   */
  render() {
    var {
      card,
      isEditable,
      getViewer
    } = this.props;
    var {
      selected,
      faces,
      removes,
      isEditing,
      hasError,
      isLoading
    } = this.state;
    var {
      duration
    } = card;
    var hasFaces = faces.length > 0;
    var entries = faces.filter(face => !removes.includes(face));
    var editClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('be-face-edit', {
      'be-faces-is-editing': isEditing
    });
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "be-faces",
      isLoading: isLoading
    }, hasFaces && isEditable && !isLoading && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
      text: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_10__["default"].editLabel)
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: editClassName,
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__["SKILLS_TARGETS"].FACES.EDIT,
      onClick: this.toggleIsEditing,
      type: "button"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_9__["default"], null))), hasError && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_10__["default"].sidebarSkillsErrorTitle)
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_10__["default"].sidebarSkillsErrorContent)), hasFaces ? entries.map((face, index) =>
    /* eslint-disable react/no-array-index-key */
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Face__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: index,
      face: face,
      isEditing: isEditing,
      onDelete: this.onDelete,
      onSelect: this.onSelect,
      selected: selected
    })
    /* eslint-enable react/no-array-index-key */
    ) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_10__["default"].skillNoInfoFoundError), !!selected && !isEditing && Array.isArray(selected.appears) && selected.appears.length > 0 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_timeline__WEBPACK_IMPORTED_MODULE_13__["default"], {
      duration: duration,
      getViewer: getViewer,
      interactionTarget: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__["SKILLS_TARGETS"].FACES.TIMELINE,
      timeslices: selected.appears
    }), isEditing && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "be-faces-buttons"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__["SKILLS_TARGETS"].FACES.EDIT_CANCEL,
      onClick: this.onCancel,
      type: "button"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_10__["default"].cancel)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_11__["SKILLS_TARGETS"].FACES.EDIT_SAVE,
      onClick: this.onSave,
      type: "button"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_10__["default"].save))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Faces);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/faces/Faces.scss":
/*!**************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/faces/Faces.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/skills/faces/index.js":
/*!************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/faces/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Faces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faces */ "./src/elements/content-sidebar/skills/faces/Faces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Faces__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/skills/keywords/EditableKeywords.js":
/*!**************************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/keywords/EditableKeywords.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_pill_selector_dropdown_PillSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/pill-selector-dropdown/PillSelector */ "./src/components/pill-selector-dropdown/PillSelector.js");
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/primary-button/PrimaryButton */ "./src/components/primary-button/PrimaryButton.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/button/Button */ "./src/components/button/Button.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _keywordUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./keywordUtils */ "./src/elements/content-sidebar/skills/keywords/keywordUtils.js");
/* harmony import */ var _EditableKeywords_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EditableKeywords.scss */ "./src/elements/content-sidebar/skills/keywords/EditableKeywords.scss");
/* harmony import */ var _EditableKeywords_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_EditableKeywords_scss__WEBPACK_IMPORTED_MODULE_8__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Editable Skill Keywords card component
 * @author Box
 */










class EditableKeywords extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  /**
   * [constructor]
   *
   * @public
   * @return {EditableKeywords}
   */
  constructor(props) {
    super(props);

    _defineProperty(this, "onRemove", (option, index) => {
      // eslint-disable-line
      var {
        onDelete,
        keywords
      } = this.props;
      onDelete(keywords[index]);
    });

    _defineProperty(this, "onKeyDown", (_ref) => {
      var {
        key
      } = _ref;

      if (key === 'Enter' && !this.state.isInCompositionMode) {
        this.onBlur();
      }
    });

    _defineProperty(this, "onBlur", () => {
      var {
        onAdd
      } = this.props;
      var {
        keyword
      } = this.state;

      if (keyword) {
        onAdd({
          type: 'text',
          text: keyword
        });
      }
    });

    _defineProperty(this, "onCompositionStart", () => {
      this.setState({
        isInCompositionMode: true
      });
    });

    _defineProperty(this, "onCompositionEnd", () => {
      this.setState({
        isInCompositionMode: false
      });
    });

    _defineProperty(this, "onInput", event => {
      var currentTarget = event.currentTarget;
      this.setState({
        keyword: currentTarget.value
      });
    });

    this.state = {
      pills: Object(_keywordUtils__WEBPACK_IMPORTED_MODULE_7__["default"])(props.keywords),
      keyword: '',
      isInCompositionMode: false
    };
  }
  /**
   * Called when keywords gets new properties.
   * Should reset to original state.
   *
   * @private
   * @param {Object} nextProps - component props
   * @return {void}
   */


  componentDidUpdate(_ref2) {
    var {
      keywords: prevKeywords
    } = _ref2;
    var {
      keywords
    } = this.props;

    if (prevKeywords !== keywords) {
      this.setState({
        pills: Object(_keywordUtils__WEBPACK_IMPORTED_MODULE_7__["default"])(keywords),
        keyword: ''
      });
    }
  }
  /**
   * Called when keywords gets new properties.
   * Should reset to original state.
   *
   * @private
   * @param {Object} option - pill
   * @param {number} index - pill index
   * @return {void}
   */


  /**
   * Renders the keywords
   *
   * @private
   * @return {void}
   */
  render() {
    var {
      onSave,
      onCancel
    } = this.props;
    var {
      pills,
      keyword
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: "pill-selector-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_pill_selector_dropdown_PillSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onBlur: this.onBlur,
      onCompositionEnd: this.onCompositionEnd,
      onCompositionStart: this.onCompositionStart,
      onInput: this.onInput,
      onKeyDown: this.onKeyDown,
      onPaste: this.onInput,
      onRemove: this.onRemove,
      selectedOptions: pills,
      value: keyword
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "be-keywords-buttons"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__["SKILLS_TARGETS"].KEYWORDS.EDIT_CANCEL,
      onClick: onCancel,
      type: "button"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].cancel)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__["SKILLS_TARGETS"].KEYWORDS.EDIT_SAVE,
      onClick: onSave,
      type: "button"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].save))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (EditableKeywords);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/keywords/EditableKeywords.scss":
/*!****************************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/keywords/EditableKeywords.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/skills/keywords/Keywords.js":
/*!******************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/keywords/Keywords.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.js");
/* harmony import */ var _icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../icons/general/IconEdit */ "./src/icons/general/IconEdit.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/loading-indicator/LoadingIndicatorWrapper */ "./src/components/loading-indicator/LoadingIndicatorWrapper.js");
/* harmony import */ var _components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/inline-error/InlineError */ "./src/components/inline-error/InlineError.js");
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/tooltip/Tooltip */ "./src/components/tooltip/Tooltip.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _EditableKeywords__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EditableKeywords */ "./src/elements/content-sidebar/skills/keywords/EditableKeywords.js");
/* harmony import */ var _ReadOnlyKeywords__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ReadOnlyKeywords */ "./src/elements/content-sidebar/skills/keywords/ReadOnlyKeywords.js");
/* harmony import */ var _Keywords_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Keywords.scss */ "./src/elements/content-sidebar/skills/keywords/Keywords.scss");
/* harmony import */ var _Keywords_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Keywords_scss__WEBPACK_IMPORTED_MODULE_12__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file File Keywords SkillCard component
 * @author Box
 */














class Keywords extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  /**
   * [constructor]
   *
   * @public
   * @return {Keywords}
   */
  constructor(props) {
    super(props);

    _defineProperty(this, "toggleIsEditing", () => {
      this.setState(prevState => ({
        isEditing: !prevState.isEditing
      }));
    });

    _defineProperty(this, "onAdd", keyword => {
      var {
        transcript
      } = this.props;
      var {
        adds
      } = this.state;
      var locations = [];
      var regex = new RegExp("\\b".concat(keyword.text, "\\b"), 'i');

      if (transcript && Array.isArray(transcript.entries)) {
        transcript.entries.forEach((_ref) => {
          var {
            text,
            appears
          } = _ref;

          if (text && regex.test(text) && Array.isArray(appears) && appears.length > 0) {
            locations.push(appears[0]);
          }
        });
      }

      keyword.appears = locations;
      adds.push(keyword);
      this.setState({
        adds: adds.slice(0)
      });
    });

    _defineProperty(this, "onDelete", keyword => {
      var {
        adds,
        removes
      } = this.state;
      var addedIndex = adds.findIndex(added => added === keyword);

      if (addedIndex > -1) {
        adds.splice(addedIndex, 1);
        this.setState({
          adds: adds.slice(0)
        });
      } else {
        removes.push(keyword);
        this.setState({
          removes: removes.slice(0)
        });
      }
    });

    _defineProperty(this, "onSave", () => {
      var {
        onSkillChange
      } = this.props;
      var {
        removes,
        adds
      } = this.state;
      this.toggleIsEditing();

      if (removes.length > 0 || adds.length > 0) {
        this.setState({
          isLoading: true
        });
        onSkillChange(removes, adds);
      }
    });

    _defineProperty(this, "onCancel", () => {
      this.resetState(this.props);
    });

    this.state = {
      keywords: props.card.entries,
      adds: [],
      removes: [],
      isEditing: props.hasError,
      hasError: props.hasError,
      isLoading: false
    };
  }
  /**
   * Helper to reset the state
   *
   * @private
   * @param {Object} props - component props
   * @return {void}
   */


  resetState(props) {
    this.setState({
      keywords: props.card.entries,
      adds: [],
      removes: [],
      isEditing: false,
      hasError: false,
      isLoading: false
    });
  }
  /**
   * Toggles the edit mode
   *
   * @private
   * @return {void}
   */


  /**
   * Renders the keywords
   *
   * @private
   * @return {void}
   */
  render() {
    var {
      card,
      getViewer,
      isEditable
    } = this.props;
    var {
      duration
    } = card;
    var {
      isEditing,
      isLoading,
      hasError,
      keywords,
      removes,
      adds
    } = this.state;
    var hasKeywords = keywords.length > 0;
    var entries = keywords.filter(face => !removes.includes(face)).concat(adds);
    var editClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('be-keyword-edit', {
      'be-keyword-is-editing': isEditing
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "be-keywords",
      isLoading: isLoading
    }, hasKeywords && isEditable && !isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
      text: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_8__["default"].editLabel)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: editClassName,
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_9__["SKILLS_TARGETS"].KEYWORDS.EDIT,
      onClick: this.toggleIsEditing,
      type: "button"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_4__["default"], null))), hasError && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_inline_error_InlineError__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_8__["default"].sidebarSkillsErrorTitle)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_8__["default"].sidebarSkillsErrorContent)), isEditing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditableKeywords__WEBPACK_IMPORTED_MODULE_10__["default"], {
      keywords: entries,
      onAdd: this.onAdd,
      onCancel: this.onCancel,
      onDelete: this.onDelete,
      onSave: this.onSave
    }), !isEditing && hasKeywords && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReadOnlyKeywords__WEBPACK_IMPORTED_MODULE_11__["default"], {
      duration: duration,
      getViewer: getViewer,
      keywords: entries
    }), !isEditing && !hasKeywords && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_8__["default"].skillNoInfoFoundError));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Keywords);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/keywords/Keywords.scss":
/*!********************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/keywords/Keywords.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/skills/keywords/ReadOnlyKeywords.js":
/*!**************************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/keywords/ReadOnlyKeywords.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_pill_cloud_PillCloud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/pill-cloud/PillCloud */ "./src/components/pill-cloud/PillCloud.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timeline */ "./src/elements/content-sidebar/skills/timeline/index.js");
/* harmony import */ var _keywordUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keywordUtils */ "./src/elements/content-sidebar/skills/keywords/keywordUtils.js");
/* harmony import */ var _ReadOnlyKeywords_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReadOnlyKeywords.scss */ "./src/elements/content-sidebar/skills/keywords/ReadOnlyKeywords.scss");
/* harmony import */ var _ReadOnlyKeywords_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ReadOnlyKeywords_scss__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Read Only Keywords Card component
 * @author Box
 */







class ReadOnlyselecteds extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      selectedIndex: -1
    });

    _defineProperty(this, "onSelect", pill => {
      var {
        selectedIndex
      } = this.state;
      var newIndex = pill.value;
      this.setState({
        selectedIndex: selectedIndex === newIndex ? -1 : newIndex
      });
    });
  }

  /**
   * Renders the keywords
   *
   * @private
   * @return {void}
   */
  render() {
    var {
      keywords,
      getViewer,
      duration
    } = this.props;
    var {
      selectedIndex
    } = this.state;
    var options = Object(_keywordUtils__WEBPACK_IMPORTED_MODULE_4__["default"])(keywords);
    var selected = keywords[selectedIndex];
    var pillCloudProps = selected ? {
      selectedOptions: [options[selectedIndex]]
    } : {};
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_pill_cloud_PillCloud__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      onSelect: this.onSelect,
      options: options
    }, pillCloudProps, {
      buttonProps: {
        [_common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["INTERACTION_TARGET"]]: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["SKILLS_TARGETS"].KEYWORDS.SELECT
      }
    })), !!selected && Array.isArray(selected.appears) && selected.appears.length > 0 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_timeline__WEBPACK_IMPORTED_MODULE_3__["default"], {
      duration: duration,
      getViewer: getViewer,
      interactionTarget: _common_interactionTargets__WEBPACK_IMPORTED_MODULE_2__["SKILLS_TARGETS"].KEYWORDS.TIMELINE,
      text: selected.text,
      timeslices: selected.appears
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ReadOnlyselecteds);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/keywords/ReadOnlyKeywords.scss":
/*!****************************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/keywords/ReadOnlyKeywords.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/skills/keywords/index.js":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/keywords/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Keywords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Keywords */ "./src/elements/content-sidebar/skills/keywords/Keywords.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Keywords__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/skills/keywords/keywordUtils.js":
/*!**********************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/keywords/keywordUtils.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 
 * @file Utilities for keywords skill
 * @author Box
 */

/**
 * Converts skill card entries into pills
 *
 * @private
 * @param {Array<Object>} props - keyword entries
 * @return {Array<Object>} pills
 */
var getPills = function getPills() {
  var keywords = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keywords.map((keyword, index) => ({
    displayText: keyword.text,
    value: index
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (getPills);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/status/Status.js":
/*!**************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/status/Status.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/**
 * 
 * @file Status Skill Card component
 * @author Box
 */





var Status = (_ref) => {
  var {
    card
  } = _ref;
  var {
    status = {}
  } = card;
  var {
    code,
    message
  } = status;
  var localizedMessage = _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].skillUnknownError;

  switch (code) {
    case _constants__WEBPACK_IMPORTED_MODULE_3__["SKILLS_ERROR_INVALID_FILE_SIZE"]:
      localizedMessage = _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].skillInvalidFileSizeError;
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_3__["SKILLS_ERROR_INVALID_FILE_FORMAT"]:
      localizedMessage = _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].skillInvalidFileExtensionError;
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_3__["SKILLS_ERROR_EXTERNAL_AUTH"]:
    case _constants__WEBPACK_IMPORTED_MODULE_3__["SKILLS_ERROR_BILLING"]:
    case _constants__WEBPACK_IMPORTED_MODULE_3__["SKILLS_ERROR_INVOCATIONS"]:
    case _constants__WEBPACK_IMPORTED_MODULE_3__["SKILLS_ERROR_UNKNOWN"]:
      localizedMessage = _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].skillUnknownError;
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_3__["SKILLS_ERROR_FILE_PROCESSING"]:
      localizedMessage = _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].skillFileProcessingError;
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_3__["SKILLS_STATUS_PENDING"]:
      localizedMessage = _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].skillPendingStatus;
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_3__["SKILLS_STATUS_INVOKED"]:
      localizedMessage = _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].skillInvokedStatus;
      break;

    default:
      if (message) {
        return message;
      }

  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], localizedMessage);
};

/* harmony default export */ __webpack_exports__["default"] = (Status);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/status/index.js":
/*!*************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/status/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Status */ "./src/elements/content-sidebar/skills/status/Status.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Status__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/skills/timeline/Timeline.js":
/*!******************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/timeline/Timeline.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.js");
/* harmony import */ var _icons_general_IconTrackNext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../icons/general/IconTrackNext */ "./src/icons/general/IconTrackNext.js");
/* harmony import */ var _icons_general_IconTrackPrevious__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../icons/general/IconTrackPrevious */ "./src/icons/general/IconTrackPrevious.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _Timeslice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Timeslice */ "./src/elements/content-sidebar/skills/timeline/Timeslice.js");
/* harmony import */ var _transcript_timeSliceUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../transcript/timeSliceUtils */ "./src/elements/content-sidebar/skills/transcript/timeSliceUtils.js");
/* harmony import */ var _Timeline_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Timeline.scss */ "./src/elements/content-sidebar/skills/timeline/Timeline.scss");
/* harmony import */ var _Timeline_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Timeline_scss__WEBPACK_IMPORTED_MODULE_9__);
/**
 * 
 * @file Timeline component
 * @author Box
 */











var Timeline = (_ref) => {
  var {
    text = '',
    duration = 0,
    timeslices = [],
    getViewer,
    interactionTarget
  } = _ref;
  var timeSliceIndex = -1;

  var playSegment = function playSegment(index) {
    var incr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var newIndex = incr > 0 ? Math.min(timeslices.length - 1, index + incr) : Math.max(0, index + incr);
    var viewer = getViewer ? getViewer() : null;
    var timeslice = timeslices[newIndex];
    var validTime = Object(_transcript_timeSliceUtils__WEBPACK_IMPORTED_MODULE_8__["isValidStartTime"])(timeslice);

    if (validTime && viewer && typeof viewer.play === 'function') {
      viewer.play(timeslice.start);
      timeSliceIndex = newIndex;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "be-timeline"
  }, text && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "be-timeline-label"
  }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "be-timeline-line-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "be-timeline-line"
  }), timeslices.map((_ref2, index) => {
    var {
      start,
      end
    } = _ref2;
    return (
      /* eslint-disable react/no-array-index-key */
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Timeslice__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: index,
        duration: duration,
        end: end,
        index: index,
        interactionTarget: interactionTarget,
        onClick: playSegment,
        start: start
      })
    );
  }
  /* eslint-enable react/no-array-index-key */
  )), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "be-timeline-btns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__["SKILLS_TARGETS"].TIMELINE.PREVIOUS,
    onClick: () => playSegment(timeSliceIndex, -1),
    type: "button"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_general_IconTrackPrevious__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].previousSegment)
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__["SKILLS_TARGETS"].TIMELINE.NEXT,
    onClick: () => playSegment(timeSliceIndex, 1),
    type: "button"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_general_IconTrackNext__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].nextSegment)
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/timeline/Timeline.scss":
/*!********************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/timeline/Timeline.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/skills/timeline/Timeslice.js":
/*!*******************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/timeline/Timeslice.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.js");
/* harmony import */ var _Timeslice_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timeslice.scss */ "./src/elements/content-sidebar/skills/timeline/Timeslice.scss");
/* harmony import */ var _Timeslice_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Timeslice_scss__WEBPACK_IMPORTED_MODULE_2__);
/**
 * 
 * @file Timeline line component
 * @author Box
 */



var LENGTH_TEXT_ITEMLINE = 290; // match with css

var MIN_WIDTH = 6; // Need at least some width to be clickable

var Timeslice = (_ref) => {
  var {
    start,
    end,
    duration,
    onClick: _onClick,
    index,
    interactionTarget
  } = _ref;

  if (typeof start !== 'number' || !duration || start >= duration) {
    return null;
  }

  var barLength = LENGTH_TEXT_ITEMLINE;
  var startLeft = Math.round(start * barLength / duration);
  var minEnding = startLeft + MIN_WIDTH; // Need at least some width to be clickable

  var ending = typeof end === 'number' ? Math.max(minEnding, end * barLength / duration) : minEnding;
  var endLeft = Math.round(Math.min(barLength, ending));
  var width = endLeft - startLeft; // If width is too small re-adjust the left position
  // to get to at least 6px wide for clickability

  if (width < MIN_WIDTH) {
    startLeft -= MIN_WIDTH - width;
    width = MIN_WIDTH;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "be-timeline-time",
    "data-resin-target": interactionTarget,
    onClick: () => _onClick(index),
    style: {
      left: "".concat(startLeft, "px"),
      width: "".concat(width, "px")
    },
    type: "button"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Timeslice);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/timeline/Timeslice.scss":
/*!*********************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/timeline/Timeslice.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/skills/timeline/index.js":
/*!***************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/timeline/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeline */ "./src/elements/content-sidebar/skills/timeline/Timeline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Timeline__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/skills/transcript/EditingTranscriptRow.js":
/*!********************************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/transcript/EditingTranscriptRow.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js");
/* harmony import */ var _components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/primary-button/PrimaryButton */ "./src/components/primary-button/PrimaryButton.js");
/* harmony import */ var _components_button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/button/Button */ "./src/components/button/Button.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _EditingTranscriptRow_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditingTranscriptRow.scss */ "./src/elements/content-sidebar/skills/transcript/EditingTranscriptRow.scss");
/* harmony import */ var _EditingTranscriptRow_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_EditingTranscriptRow_scss__WEBPACK_IMPORTED_MODULE_7__);
/**
 * 
 * @file Editable transcript row component
 * @author Box
 */









var EditingTranscriptRow = (_ref) => {
  var {
    time,
    text = '',
    onSave,
    onCancel,
    onChange
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "be-transcript-row be-transcript-editing-row"
  }, time && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "be-transcript-time"
  }, time), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "be-transcript-text"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"], {
    maxRows: 10,
    onChange: onChange,
    value: text
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "be-transcript-buttons"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__["SKILLS_TARGETS"].TRANSCRIPTS.EDIT_CANCEL,
    onClick: onCancel,
    type: "button"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].cancel)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_primary_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_6__["SKILLS_TARGETS"].TRANSCRIPTS.EDIT_SAVE,
    onClick: onSave,
    type: "button"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_5__["default"].save)))));
};

/* harmony default export */ __webpack_exports__["default"] = (EditingTranscriptRow);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/transcript/EditingTranscriptRow.scss":
/*!**********************************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/transcript/EditingTranscriptRow.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/skills/transcript/ReadOnlyTranscriptRow.js":
/*!*********************************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/transcript/ReadOnlyTranscriptRow.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.js");
/**
 * 
 * @file Read only transcript row component
 * @author Box
 */



var ReadOnlyTranscriptRow = (_ref) => {
  var {
    time,
    text = '',
    onClick,
    interactionTarget
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "be-transcript-row",
    "data-resin-target": interactionTarget,
    onClick: onClick,
    type: "button"
  }, time && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "be-transcript-time"
  }, time), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "be-transcript-text"
  }, text));
};

/* harmony default export */ __webpack_exports__["default"] = (ReadOnlyTranscriptRow);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/transcript/Transcript.js":
/*!**********************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/transcript/Transcript.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../styles/variables */ "./src/styles/variables.js");
/* harmony import */ var _components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/plain-button/PlainButton */ "./src/components/plain-button/PlainButton.js");
/* harmony import */ var _icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../icons/general/IconEdit */ "./src/icons/general/IconEdit.js");
/* harmony import */ var _icons_general_IconCopy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../icons/general/IconCopy */ "./src/icons/general/IconCopy.js");
/* harmony import */ var _icons_general_IconExpand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../icons/general/IconExpand */ "./src/icons/general/IconExpand.js");
/* harmony import */ var _icons_general_IconCollapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../icons/general/IconCollapse */ "./src/icons/general/IconCollapse.js");
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utils/datetime */ "./src/utils/datetime.js");
/* harmony import */ var _components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/loading-indicator/LoadingIndicatorWrapper */ "./src/components/loading-indicator/LoadingIndicatorWrapper.js");
/* harmony import */ var _components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/tooltip/Tooltip */ "./src/components/tooltip/Tooltip.js");
/* harmony import */ var _utils_download__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utils/download */ "./src/utils/download.js");
/* harmony import */ var _common_interactionTargets__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/interactionTargets */ "./src/elements/common/interactionTargets.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/messages */ "./src/elements/common/messages.js");
/* harmony import */ var _timeSliceUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./timeSliceUtils */ "./src/elements/content-sidebar/skills/transcript/timeSliceUtils.js");
/* harmony import */ var _TranscriptRow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TranscriptRow */ "./src/elements/content-sidebar/skills/transcript/TranscriptRow.js");
/* harmony import */ var _Transcript_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Transcript.scss */ "./src/elements/content-sidebar/skills/transcript/Transcript.scss");
/* harmony import */ var _Transcript_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_Transcript_scss__WEBPACK_IMPORTED_MODULE_17__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 * @file Transcript component
 * @author Box
 */



















class Transcript extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isEditingIndex: undefined,
      newTranscriptText: '',
      isCollapsed: true,
      isLoading: false
    });

    _defineProperty(this, "transcriptReducer", (accumulator, _ref) => {
      var {
        appears,
        text
      } = _ref;
      var start = Object(_timeSliceUtils__WEBPACK_IMPORTED_MODULE_15__["isValidTimeSlice"])(appears) && Array.isArray(appears) ? "".concat(Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_9__["formatTime"])(appears[0].start), ":") : '';
      return "".concat(accumulator).concat(start, " ").concat(text || '', "\r\n");
    });

    _defineProperty(this, "transcriptMapper", (_ref2, index) => {
      var {
        appears,
        text
      } = _ref2;
      var {
        isEditingIndex,
        newTranscriptText
      } = this.state;
      var isEditingRow = isEditingIndex === index;
      var transcriptText = isEditingRow ? newTranscriptText : text;
      var interactionTarget = isEditingRow ? _common_interactionTargets__WEBPACK_IMPORTED_MODULE_13__["SKILLS_TARGETS"].TRANSCRIPTS.EDIT_TEXT : _common_interactionTargets__WEBPACK_IMPORTED_MODULE_13__["SKILLS_TARGETS"].TRANSCRIPTS.TRANSCRIPT;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TranscriptRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
        key: index,
        appears: appears,
        interactionTarget: interactionTarget,
        isEditing: isEditingRow,
        onCancel: this.onCancel,
        onChange: this.onChange,
        onClick: () => this.onClick(index),
        onSave: this.onSave,
        text: transcriptText
      });
    });

    _defineProperty(this, "toggleIsEditing", () => {
      this.setState(prevState => ({
        isEditingIndex: typeof prevState.isEditingIndex === 'number' ? undefined : -1
      }));
    });

    _defineProperty(this, "onSave", () => {
      var {
        card: {
          entries
        },
        onSkillChange
      } = this.props;
      var {
        isEditingIndex,
        newTranscriptText
      } = this.state;

      if (typeof isEditingIndex !== 'number') {
        return;
      }

      var entry = entries[isEditingIndex];

      if (entry.text === newTranscriptText) {
        this.onCancel();
      } else {
        this.setState({
          isLoading: true,
          isEditingIndex: -1
        });
        onSkillChange(null, null, [{
          replacement: _objectSpread({}, entry, {
            text: newTranscriptText
          }),
          replaced: entry
        }]);
      }
    });

    _defineProperty(this, "onCancel", () => {
      this.setState({
        isEditingIndex: -1,
        newTranscriptText: ''
      });
    });

    _defineProperty(this, "onChange", event => {
      var currentTarget = event.currentTarget;
      this.setState({
        newTranscriptText: currentTarget.value
      });
    });

    _defineProperty(this, "onClick", index => {
      var {
        card: {
          entries
        }
      } = this.props;
      var {
        isEditingIndex
      } = this.state;

      if (typeof isEditingIndex === 'number') {
        this.setState({
          isEditingIndex: index,
          newTranscriptText: entries[index].text
        });
      } else {
        this.previewSegment(index);
      }
    });

    _defineProperty(this, "copyTranscript", () => {
      var {
        card: {
          entries
        }
      } = this.props;
      var copiedClass = 'be-transcript-copied';
      Object(_utils_download__WEBPACK_IMPORTED_MODULE_12__["copy"])(entries.reduce(this.transcriptReducer, '')); // Animate the button by adding a class

      if (this.copyBtn) {
        this.copyBtn.classList.add(copiedClass);
      } // Remove the animation class


      setTimeout(() => {
        if (this.copyBtn) {
          this.copyBtn.classList.remove(copiedClass);
        }
      }, 1000);
    });

    _defineProperty(this, "copyBtnRef", btn => {
      this.copyBtn = btn;
    });

    _defineProperty(this, "toggleExpandCollapse", () => {
      this.setState(prevState => ({
        isCollapsed: !prevState.isCollapsed
      }));
    });
  }

  /**
   * Called when transcripts gets new properties
   *
   * @private
   * @return {void}
   */
  componentDidUpdate(prevProps) {
    if (prevProps === this.props) {
      return;
    }

    var wasEditing = typeof this.state.isEditingIndex === 'number';
    this.setState({
      isEditingIndex: wasEditing ? -1 : undefined,
      newTranscriptText: '',
      isLoading: false
    });
  }
  /**
   * Reducer to accumulate all transcript entries for copying
   *
   * @param {Object} accumulator - reducer accumulator
   * @return {string} accumulated transcript entries
   */


  /**
   * Previews a transcript segment
   *
   * @private
   * @param {number|void} [index] - row index to edit
   * @return {void}
   */
  previewSegment(index) {
    var {
      card: {
        entries
      },
      getViewer
    } = this.props;
    var {
      appears
    } = entries[index];
    var viewer = getViewer ? getViewer() : null;
    var isValid = Object(_timeSliceUtils__WEBPACK_IMPORTED_MODULE_15__["isValidTimeSlice"])(appears) && Array.isArray(appears) && appears.length === 1;
    var timeSlice = appears;
    var start = isValid ? timeSlice[0].start : 0;

    if (isValid && viewer && typeof viewer.play === 'function') {
      viewer.play(start);
    }
  }
  /**
   * Saves the new card data
   *
   * @private
   * @return {void}
   */


  /**
   * Renders the transcript
   *
   * @private
   * @return {Object}
   */
  render() {
    var {
      card: {
        entries
      },
      isEditable
    } = this.props;
    var {
      isEditingIndex,
      isCollapsed,
      isLoading
    } = this.state;
    var hasEntries = entries.length > 0;
    var hasManyEntries = entries.length > 5;
    var isEditing = typeof isEditingIndex === 'number';
    var editBtnClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('be-transcript-edit', {
      'be-transcript-is-editing': isEditing
    });
    var contentClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      'be-transcript-content-collapsed': isCollapsed
    });
    var expandCollapseMessage = isCollapsed ? _common_messages__WEBPACK_IMPORTED_MODULE_14__["default"].expand : _common_messages__WEBPACK_IMPORTED_MODULE_14__["default"].collapse;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_loading_indicator_LoadingIndicatorWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "be-transcript",
      isLoading: isLoading
    }, hasEntries && !isLoading && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "be-transcript-actions"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
      text: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_14__["default"].copy)
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "be-transcript-copy",
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_13__["SKILLS_TARGETS"].TRANSCRIPTS.COPY,
      getDOMRef: this.copyBtnRef,
      onClick: this.copyTranscript,
      type: "button"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconCopy__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: _styles_variables__WEBPACK_IMPORTED_MODULE_3__["bdlGray50"]
    }))), hasManyEntries && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
      text: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], expandCollapseMessage)
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "be-transcript-expand",
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_13__["SKILLS_TARGETS"].TRANSCRIPTS.EXPAND,
      onClick: this.toggleExpandCollapse,
      type: "button"
    }, isCollapsed ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconExpand__WEBPACK_IMPORTED_MODULE_7__["default"], {
      color: _styles_variables__WEBPACK_IMPORTED_MODULE_3__["bdlGray50"]
    }) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconCollapse__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: _styles_variables__WEBPACK_IMPORTED_MODULE_3__["bdlGray50"]
    }))), isEditable && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_11__["default"], {
      text: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_14__["default"].editLabel)
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_plain_button_PlainButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: editBtnClassName,
      "data-resin-target": _common_interactionTargets__WEBPACK_IMPORTED_MODULE_13__["SKILLS_TARGETS"].TRANSCRIPTS.EDIT,
      onClick: this.toggleIsEditing,
      type: "button"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icons_general_IconEdit__WEBPACK_IMPORTED_MODULE_5__["default"], null)))), isEditing ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "be-transcript-edit-message"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_14__["default"].transcriptEdit)) : null, hasEntries ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: contentClassName
    }, entries.map(this.transcriptMapper)) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _common_messages__WEBPACK_IMPORTED_MODULE_14__["default"].skillNoInfoFoundError));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Transcript);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/transcript/Transcript.scss":
/*!************************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/transcript/Transcript.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/skills/transcript/TranscriptRow.js":
/*!*************************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/transcript/TranscriptRow.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/datetime */ "./src/utils/datetime.js");
/* harmony import */ var _ReadOnlyTranscriptRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReadOnlyTranscriptRow */ "./src/elements/content-sidebar/skills/transcript/ReadOnlyTranscriptRow.js");
/* harmony import */ var _EditingTranscriptRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditingTranscriptRow */ "./src/elements/content-sidebar/skills/transcript/EditingTranscriptRow.js");
/* harmony import */ var _timeSliceUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeSliceUtils */ "./src/elements/content-sidebar/skills/transcript/timeSliceUtils.js");
/* harmony import */ var _TranscriptRow_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TranscriptRow.scss */ "./src/elements/content-sidebar/skills/transcript/TranscriptRow.scss");
/* harmony import */ var _TranscriptRow_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TranscriptRow_scss__WEBPACK_IMPORTED_MODULE_5__);
/**
 * 
 * @file Transcript row component
 * @author Box
 */







var TranscriptRow = (_ref) => {
  var {
    appears,
    text,
    isEditing,
    onClick,
    onSave,
    onCancel,
    onChange,
    interactionTarget
  } = _ref;
  var isValid = Object(_timeSliceUtils__WEBPACK_IMPORTED_MODULE_4__["isValidTimeSlice"])(appears) && Array.isArray(appears) && appears.length === 1;
  var timeSlice = appears;
  var start = isValid ? Object(_utils_datetime__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(timeSlice[0].start) : undefined;
  return isEditing ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditingTranscriptRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onCancel: onCancel,
    onChange: onChange,
    onSave: onSave,
    text: text,
    time: start
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReadOnlyTranscriptRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    interactionTarget: interactionTarget,
    onClick: onClick,
    text: text,
    time: start
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TranscriptRow);

/***/ }),

/***/ "./src/elements/content-sidebar/skills/transcript/TranscriptRow.scss":
/*!***************************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/transcript/TranscriptRow.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/elements/content-sidebar/skills/transcript/index.js":
/*!*****************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/transcript/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Transcript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transcript */ "./src/elements/content-sidebar/skills/transcript/Transcript.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Transcript__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/elements/content-sidebar/skills/transcript/timeSliceUtils.js":
/*!**************************************************************************!*\
  !*** ./src/elements/content-sidebar/skills/transcript/timeSliceUtils.js ***!
  \**************************************************************************/
/*! exports provided: isValidTimeSlice, isValidStartTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidTimeSlice", function() { return isValidTimeSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidStartTime", function() { return isValidStartTime; });
/**
 * 
 * @file Transcript utils
 * @author Box
 */

/**
 * Returns true if there is a valid start time
 *
 * @param {SkillCardEntryTimeSlice} timeslices - skill entry time slice
 * @return {boolean} if there is a valid start time
 */
var isValidStartTime = timeslice => !!timeslice && typeof timeslice.start === 'number';
/**
 * Returns true if there is a valid time slice with valid start time
 *
 * @param {SkillCardEntryTimeSlice[]} timeslices - skill entry time slice
 * @return {boolean} if it is a valid time slice
 */


var isValidTimeSlice = timeslices => Array.isArray(timeslices) && isValidStartTime(timeslices[0]);



/***/ }),

/***/ "./src/icons/general/IconCollapse.js":
/*!*******************************************!*\
  !*** ./src/icons/general/IconCollapse.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconCollapse = (_ref) => {
  var {
    className = '',
    color = '#979797',
    height = 13,
    title,
    width = 13
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-collapse ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 13 13",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M8 6h4a1 1 0 0 0 0-2H9V1a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1zM1 9h3v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconCollapse);

/***/ }),

/***/ "./src/icons/general/IconCopy.js":
/*!***************************************!*\
  !*** ./src/icons/general/IconCopy.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconCopy = (_ref) => {
  var {
    className = '',
    color = '#999',
    height = 14,
    title,
    width = 14
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-copy ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M1 11a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h9a1 1 0 0 1 0 2H2v8a1 1 0 0 1-1 1z",
    fill: color
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M13 3H3v10a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-3 8H7a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zm0-3H7a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconCopy);

/***/ }),

/***/ "./src/icons/general/IconEdit.js":
/*!***************************************!*\
  !*** ./src/icons/general/IconEdit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconEdit = (_ref) => {
  var {
    className = '',
    color = '#999',
    height = 14,
    title,
    width = 14
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-edit ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M3.21 7.89l6.47-6.48a2 2 0 0 1 2.88 2.78h-.05L6 10.72 3.21 7.89zM2.24 9l2.83 2.83L1.67 13c-.52.18-.79-.1-.62-.61z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconEdit);

/***/ }),

/***/ "./src/icons/general/IconExpand.js":
/*!*****************************************!*\
  !*** ./src/icons/general/IconExpand.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconExpand = (_ref) => {
  var {
    className = '',
    color = '#979797',
    height = 13,
    title,
    width = 13
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-expand ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 13 13",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M12 0H6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1zM7 11H2V6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconExpand);

/***/ }),

/***/ "./src/icons/general/IconMinus.js":
/*!****************************************!*\
  !*** ./src/icons/general/IconMinus.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconMinus = (_ref) => {
  var {
    className = '',
    color = '#000000',
    height = 16,
    title,
    width = 16
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-minus ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 16 16",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M2 5h8v2H2z",
    fill: color,
    fillRule: "evenodd"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconMinus);

/***/ }),

/***/ "./src/icons/general/IconTrackNext.js":
/*!********************************************!*\
  !*** ./src/icons/general/IconTrackNext.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconTrackNext = (_ref) => {
  var {
    className = '',
    color = '#999',
    height = 14,
    title,
    width = 14
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-track-next ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M7.72 7.85a1 1 0 0 0 0-1.41l-5-4.81A1 1 0 0 0 2 1.35a1 1 0 0 0-1 1V12a1 1 0 0 0 .28.69 1 1 0 0 0 1.41 0l5-4.81zM13 2v10a1 1 0 0 1-1 1 1 1 0 0 1-1-1V2a1 1 0 0 1 1-1 1 1 0 0 1 1 1z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconTrackNext);

/***/ }),

/***/ "./src/icons/general/IconTrackPrevious.js":
/*!************************************************!*\
  !*** ./src/icons/general/IconTrackPrevious.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accessible_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessible-svg */ "./src/icons/accessible-svg/index.js");



var IconTrackPrevious = (_ref) => {
  var {
    className = '',
    color = '#999',
    height = 14,
    title,
    width = 14
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_accessible_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "icon-track-previous ".concat(className),
    height: height,
    title: title,
    viewBox: "0 0 14 14",
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "fill-color",
    d: "M6.31 7.88l5 4.81a1 1 0 0 0 1.41 0A1 1 0 0 0 13 12V2.35a1 1 0 0 0-1-1 1 1 0 0 0-.69.28l-5 4.81a1 1 0 0 0 0 1.41zM2 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1 1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z",
    fill: color
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (IconTrackPrevious);

/***/ }),

/***/ "./src/utils/download.js":
/*!*******************************!*\
  !*** ./src/utils/download.js ***!
  \*******************************/
/*! exports provided: download, copy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/**
 * 
 * @file Utility for copying and downloading
 * @author Box
 */

/**
 * Function to download string as txt file
 *
 * @private
 * @param {String} string - string to download
 * @param {String} name - file name to use
 * @return {void}
 */
function download(string, name) {
  var blob = new Blob([string], {
    type: 'text/plain;charset=utf-8'
  }); // IE11

  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, name);
    return;
  }

  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = name;

  if (document.body) {
    document.body.appendChild(a);
  }

  a.click();
  setTimeout(() => {
    if (document.body) {
      document.body.removeChild(a);
    }

    URL.revokeObjectURL(url);
  }, 100);
}
/**
 * Function to copy string to the clipboard
 *
 * @private
 * @param {String} string - string to copy
 * @return {void}
 */


function copy(string) {
  var textarea = document.createElement('textarea');
  var {
    body
  } = document;
  textarea.value = string;
  textarea.style.display = 'hidden';

  if (body) {
    body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    body.removeChild(textarea);
  }
}



/***/ })

}]);
//# sourceMappingURL=skills-sidebar.no.react.js.map
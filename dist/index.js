/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/styles/style.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/styles/style.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background-color: black;\n    color: white;\n}\n\n.BlackBord {\n    background-color: green;\n    width:auto ;\n    height: 50%;\n    border: 8px solid goldenrod;\n}\n\n.SideContent {\n    width:30%;\n    height:100%;\n    border-right: white solid 1px;\n}\n\n#side_text {\n    writing-mode: vertical-rl;\n    font-size: 50px;\n    font-weight: bold;\n    margin-bottom: 30%;\n    margin-left: 30%;\n}\n\n#draw_text {\n    position: absolute;\n    top:20%;\n    left:20%;\n    font-size: 200px;\n    font-weight: bold;\n    margin-bottom: 30%;\n    margin-left: 30%;\n}\n\n\ncanvas {\n    position: absolute;\n    top:3%;\n    left:31%\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,SAAS;IACT,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;;AAGA;IACI,kBAAkB;IAClB,MAAM;IACN;AACJ","sourcesContent":["body {\n    background-color: black;\n    color: white;\n}\n\n.BlackBord {\n    background-color: green;\n    width:auto ;\n    height: 50%;\n    border: 8px solid goldenrod;\n}\n\n.SideContent {\n    width:30%;\n    height:100%;\n    border-right: white solid 1px;\n}\n\n#side_text {\n    writing-mode: vertical-rl;\n    font-size: 50px;\n    font-weight: bold;\n    margin-bottom: 30%;\n    margin-left: 30%;\n}\n\n#draw_text {\n    position: absolute;\n    top:20%;\n    left:20%;\n    font-size: 200px;\n    font-weight: bold;\n    margin-bottom: 30%;\n    margin-left: 30%;\n}\n\n\ncanvas {\n    position: absolute;\n    top:3%;\n    left:31%\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./src/styles/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/images/baby.jpeg":
/*!******************************!*\
  !*** ./src/images/baby.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/baby.jpeg";

/***/ }),

/***/ "./src/images/ehon.png":
/*!*****************************!*\
  !*** ./src/images/ehon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ehon.png";

/***/ }),

/***/ "./src/images/itigo.png":
/*!******************************!*\
  !*** ./src/images/itigo.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/itigo.png";

/***/ }),

/***/ "./src/images/owan.png":
/*!*****************************!*\
  !*** ./src/images/owan.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/owan.png";

/***/ }),

/***/ "./src/images/udon.png":
/*!*****************************!*\
  !*** ./src/images/udon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/udon.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _images_baby_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/baby.jpeg */ "./src/images/baby.jpeg");
/* harmony import */ var _images_ehon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/ehon.png */ "./src/images/ehon.png");
/* harmony import */ var _images_itigo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/itigo.png */ "./src/images/itigo.png");
/* harmony import */ var _images_owan_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/owan.png */ "./src/images/owan.png");
/* harmony import */ var _images_udon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/udon.png */ "./src/images/udon.png");






//円オブジェクト
var Elps = /** @class */ (function () {
    function Elps(x, y, elp_dia) {
        this.dia = elp_dia;
        this.x = x;
        this.y = y;
    }
    Elps.prototype.draw = function (context) {
        context.beginPath();
        context.arc(this.x, this.y, this.dia, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        context.strokeStyle = 'rgba(255, 0, 0, 1)';
        context.lineWidth = 3;
        context.closePath();
        context.stroke();
    };
    Elps.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Elps.prototype.delete = function () {
        //this.context.save()
        context.clearRect(this.x - this.dia / 2 - 12, this.y - this.dia / 2 - 12, this.dia + 25, this.dia + 25);
    };
    return Elps;
}());
//線のオブジェクト
var DragLines = /** @class */ (function () {
    function DragLines(context) {
        this.context = context;
        this.isDrag = false;
    }
    DragLines.prototype.draw = function (sx, sy, ex, ey) {
        this.context.save();
        this.context.lineCap = 'round';
        this.context.lineWidth = 3;
        this.context.strokeStyle = "blue";
        this.context.beginPath();
        this.context.moveTo(sx, sy);
        this.context.lineTo(ex, ey);
        this.context.closePath();
        this.context.stroke();
        this.context.restore();
    };
    return DragLines;
}());
//grobal propatyes
var dia = 20;
var start_elps = new Elps(160, 190, dia);
var end_elps = new Elps(300, 190, dia);
var canvas = document.getElementById('draw_area');
var context = canvas.getContext('2d');
var drag_line = new DragLines(context);
var draw_text = document.getElementById('draw_text');
var side_text = document.getElementById('side_text');
var side_img = document.getElementById('SideImg');
var a_point = [[160, 190, 300, 190], [210, 180, 210, 300], [250, 200, 230, 330]];
var i_point = [[156, 179, 224, 265], [261, 189, 297, 283]];
var u_point = [[199, 137, 278, 150], [166, 201, 202, 288]];
var e_point = [[189, 142, 269, 147], [169, 195, 319, 290]];
var o_point = [[162, 176, 256, 171], [207, 132, 247, 252], [281, 150, 320, 191]];
var complete = [false, false, false, false, false,]; //文字の終了状態を示す[あ、い、う、え、お]
var count = 0;
var clear = false;
//other functions
function dist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
function draw_line() {
    canvas.addEventListener('mouseout', function (e) {
        drag_line.isDrag = false;
    });
    canvas.addEventListener('mouseup', function (e) {
        //console.log('mouse released')
        drag_line.isDrag = false;
    });
    canvas.addEventListener('mousedown', function (e) {
        drag_line.isDrag = true;
    });
    canvas.addEventListener('mousemove', function (e) {
        var downX = e.offsetX;
        var downY = e.offsetY;
        var prex = downX;
        var prey = downY;
        //drag_line.isDrag = true;
        if (drag_line.isDrag === true) {
            drag_line.draw(prex, prey, downX, downY);
            prex = downX;
            prey = downY;
        }
        else {
            return;
        }
    });
}
function next_elps(sx, sy, ex, ey) {
    start_elps.delete();
    end_elps.delete();
    start_elps.move(sx, sy);
    end_elps.move(ex, ey);
    //start_elps.draw(context);s
    //end_elps.draw(context);
}
function text_change(text, subtext, img) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //console.log('canvasClear')
    draw_text.textContent = text;
    side_text.textContent = subtext;
    side_img.setAttribute('src', img);
}
function inittialize_text(change_data, point_data) {
    count = 0;
    text_change(change_data[0], change_data[1], change_data[2]);
    clear = false;
    start_elps = new Elps(point_data[0], point_data[1], dia);
    end_elps = new Elps(point_data[2], point_data[3], dia);
    start_elps.draw(context);
    end_elps.draw(context);
}
function itimozi_end(mx, my, index) {
    if (dist(mx, my, end_elps.x, end_elps.y) < dia / 2) {
        if (drag_line.isDrag === true) {
            complete.splice(index, 1, true);
            clear = true;
            count++;
        }
    }
}
function ittkaku_play(mx, my, point_data) {
    if (dist(mx, my, end_elps.x, end_elps.y) < dia / 2) {
        if (drag_line.isDrag === true) {
            next_elps(point_data[0], point_data[1], point_data[2], point_data[3]);
            start_elps.draw(context);
            end_elps.draw(context);
            count++;
        }
    }
}
//main function
function main() {
    draw_line();
    start_elps.draw(context);
    end_elps.draw(context);
    canvas.addEventListener('mousemove', function (e) {
        draw_line();
        if (complete[0] === false) {
            if (count === 0) {
                if (dist(e.offsetX, e.offsetY, end_elps.x, end_elps.y) < dia / 2) {
                    if (drag_line.isDrag === true) {
                        count++;
                    }
                }
            }
            else if (count === 1) {
                ittkaku_play(e.offsetX, e.offsetY, a_point[count]);
            }
            else if (count === 2) {
                ittkaku_play(e.offsetX, e.offsetY, a_point[count]);
            }
            else if (count === 3) {
                itimozi_end(e.offsetX, e.offsetY, 0);
            }
        }
        else if (complete[1] === false) {
            if (clear === true) {
                inittialize_text(['い', 'いちご', '../src/images/itigo.png'], i_point[0]);
            }
            if (count === 0) {
                if (dist(e.offsetX, e.offsetY, end_elps.x, end_elps.y) < dia / 2) {
                    if (drag_line.isDrag === true) {
                        count++;
                    }
                }
            }
            else if (count === 1) {
                ittkaku_play(e.offsetX, e.offsetY, i_point[count]);
            }
            else if (count === 2) {
                itimozi_end(e.offsetX, e.offsetY, 1);
            }
        }
        else if (complete[2] === false) {
            if (clear === true) {
                inittialize_text(['う', 'うどん', '../src/images/udon.png'], u_point[0]);
            }
            if (count === 0) {
                if (dist(e.offsetX, e.offsetY, end_elps.x, end_elps.y) < dia / 2) {
                    if (drag_line.isDrag === true) {
                        count++;
                    }
                }
            }
            else if (count === 1) {
                ittkaku_play(e.offsetX, e.offsetY, u_point[count]);
            }
            else if (count === 2) {
                itimozi_end(e.offsetX, e.offsetY, 2);
            }
        }
        else if (complete[3] === false) {
            if (clear === true) {
                inittialize_text(['え', 'えほん', '../src/images/ehon.png'], e_point[0]);
            }
            if (count === 0) {
                if (dist(e.offsetX, e.offsetY, end_elps.x, end_elps.y) < dia / 2) {
                    if (drag_line.isDrag === true) {
                        count++;
                    }
                }
            }
            else if (count === 1) {
                ittkaku_play(e.offsetX, e.offsetY, e_point[count]);
            }
            else if (count === 2) {
                itimozi_end(e.offsetX, e.offsetY, 3);
            }
        }
        else if (complete[4] === false) {
            if (clear === true) {
                inittialize_text(['お', 'おわん', '../src/images/owan.png'], o_point[0]);
            }
            if (count === 0) {
                if (dist(e.offsetX, e.offsetY, end_elps.x, end_elps.y) < dia / 2) {
                    if (drag_line.isDrag === true) {
                        count++;
                    }
                }
            }
            else if (count === 1) {
                ittkaku_play(e.offsetX, e.offsetY, o_point[count]);
            }
            else if (count === 2) {
                ittkaku_play(e.offsetX, e.offsetY, o_point[count]);
            }
            else if (count === 3) {
                itimozi_end(e.offsetX, e.offsetY, 4);
            }
        }
        else if (complete[4] === true) {
            text_change('終', 'おわり', '../src/images/owan.png');
        }
    });
}
/*
        if(count === 0) {
            console.log('i 1st');
            next_elps(i_point[0][0], i_point[0][1], i_point[0][2], i_point[0][3])
            start_elps.draw(context);
            end_elps.draw(context);

        } else if(count === 1) {
            console.log('i 2nd');
            next_elps(i_point[1][0], i_point[1][1], i_point[1][2], i_point[1][3]);
            start_elps.draw(context);
            end_elps.draw(context);
        }
        */
//window.requestAnimationFrame(main)
main();

})();

/******/ })()
;
//# sourceMappingURL=index.js.map
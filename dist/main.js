/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --border: hsla(0, 0%, 50%, 0.37);\n  --gradient: linear-gradient(to right, #020024, #090979, #00d4ff);\n}\n\n* {\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n\n  padding: 0;\n  margin: 0;\n}\n\n.content {\n  display: grid;\n  grid-template-rows: 100px 2fr;\n\n  height: 100%;\n}\n\nh1 {\n  margin-left: 15px;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n}\n\n.header {\n  background: var(--gradient);\n\n  color: white;\n  font-weight: bold;\n}\n\n.middle {\n  background-color: white;\n\n  display: grid;\n  grid-template-columns: 0.5fr 2fr;\n  grid-template-rows: 60px 1fr;\n}\n\n.mid-header {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n\n  background: var(--gradient);\n}\n\n.add-item {\n  padding: 10px 5px;\n  margin-right: 10px;\n}\n\n.side-bar {\n  border-right: 1px solid var(--border);\n}\n\n.mid-content,\n.side-bar {\n  display: grid;\n  grid-template-rows: 70px 70px;\n  grid-auto-rows: 70px;\n}\n\n.item {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n\n  border-bottom: 1px solid var(--border);\n\n  padding: 0 10px;\n\n  position: relative;\n}\n\n.item-title {\n  margin: 0 20px;\n}\n\n.item-expand {\n  grid-row: span 5;\n  /* display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 20px;\n  align-items: center; */\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 50%);\n  grid-auto-rows: 350px;\n  padding: 0 10px;\n\n  position: relative;\n\n  border-bottom: 1px solid var(--border);\n}\n\n/* .note {\n  color: #00d4ff;\n  height: 150px;\n  display: flex;\n  text-overflow: e;\n} */\n\n.column {\n  display: flex;\n  justify-self: center;\n  justify-content: center;\n  flex-direction: column;\n  max-width: 50%;\n  min-width: 250px;\n  gap: 15px;\n}\n\n.note {\n  overflow: auto;\n  min-width: 150px;\n  display: flex;\n  flex-wrap: wrap;\n  word-break: break-all;\n}\n\n.remove {\n  color: red;\n  font-weight: bold;\n  font-size: 2em;\n  cursor: pointer;\n}\n\n.remove:hover {\n  padding-bottom: 3px;\n}\n\n.side-proyect,\n.expandBtn {\n  cursor: pointer;\n}\n\n.expandBtn {\n  position: absolute;\n  top: 25px;\n  left: 5px;\n\n  font-size: 1.3em;\n  font-weight: bold;\n}\n\n.expandBtn:hover {\n  top: 22px;\n}\n\n.side-proyect:hover {\n  background-color: var(--border);\n}\n\nbutton {\n  border-radius: 5px;\n  background-color: white;\n  padding: 10px 5px;\n  border: 1px solid var(--border);\n  font-weight: bold;\n  font-size: 0.9em;\n  cursor: pointer;\n}\n\n.proyect-btn {\n  padding: 5px;\n}\n\n.proyect-form {\n  grid-row: span 2;\n}\n\nbutton:hover {\n  background-color: rgb(161, 161, 161);\n  color: white;\n}\n\n.input-proyect {\n  width: 100%;\n  height: 25px;\n  font-size: 1em;\n}\n\ninput {\n  font-size: 1em;\n}\n\ntextarea {\n  font-size: 1em;\n  height: 100px;\n}\n/* .priority {\n  width: 5%;\n  height: 50%;\n\n  border-radius: 25px;\n} */\n\n@media only screen and (max-width: 1000px) {\n  .side-proyect {\n    grid-row: span 2;\n  }\n\n  .item-expand {\n    grid-row: span 10;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC,gEAAgE;AAClE;;AAIA;EACE,iCAAiC;AACnC;;AAEA;;EAEE,YAAY;EACZ,WAAW;;EAEX,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,6BAA6B;;EAE7B,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;;EAE3B,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;;EAEvB,aAAa;EACb,gCAAgC;EAChC,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,yBAAyB;EACzB,mBAAmB;;EAEnB,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;;EAEE,aAAa;EACb,6BAA6B;EAC7B,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,8BAA8B;;EAE9B,sCAAsC;;EAEtC,eAAe;;EAEf,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB;;;;wBAIsB;;EAEtB,aAAa;EACb,4CAA4C;EAC5C,qBAAqB;EACrB,eAAe;;EAEf,kBAAkB;;EAElB,sCAAsC;AACxC;;AAEA;;;;;GAKG;;AAEH;EACE,aAAa;EACb,oBAAoB;EACpB,uBAAuB;EACvB,sBAAsB;EACtB,cAAc;EACd,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;;EAET,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;EACjB,+BAA+B;EAC/B,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,aAAa;AACf;AACA;;;;;GAKG;;AAEH;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;EACX;AACF","sourcesContent":[":root {\n  --border: hsla(0, 0%, 50%, 0.37);\n  --gradient: linear-gradient(to right, #020024, #090979, #00d4ff);\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');\n\n* {\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n\n  padding: 0;\n  margin: 0;\n}\n\n.content {\n  display: grid;\n  grid-template-rows: 100px 2fr;\n\n  height: 100%;\n}\n\nh1 {\n  margin-left: 15px;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n}\n\n.header {\n  background: var(--gradient);\n\n  color: white;\n  font-weight: bold;\n}\n\n.middle {\n  background-color: white;\n\n  display: grid;\n  grid-template-columns: 0.5fr 2fr;\n  grid-template-rows: 60px 1fr;\n}\n\n.mid-header {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n\n  background: var(--gradient);\n}\n\n.add-item {\n  padding: 10px 5px;\n  margin-right: 10px;\n}\n\n.side-bar {\n  border-right: 1px solid var(--border);\n}\n\n.mid-content,\n.side-bar {\n  display: grid;\n  grid-template-rows: 70px 70px;\n  grid-auto-rows: 70px;\n}\n\n.item {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n\n  border-bottom: 1px solid var(--border);\n\n  padding: 0 10px;\n\n  position: relative;\n}\n\n.item-title {\n  margin: 0 20px;\n}\n\n.item-expand {\n  grid-row: span 5;\n  /* display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  gap: 20px;\n  align-items: center; */\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 50%);\n  grid-auto-rows: 350px;\n  padding: 0 10px;\n\n  position: relative;\n\n  border-bottom: 1px solid var(--border);\n}\n\n/* .note {\n  color: #00d4ff;\n  height: 150px;\n  display: flex;\n  text-overflow: e;\n} */\n\n.column {\n  display: flex;\n  justify-self: center;\n  justify-content: center;\n  flex-direction: column;\n  max-width: 50%;\n  min-width: 250px;\n  gap: 15px;\n}\n\n.note {\n  overflow: auto;\n  min-width: 150px;\n  display: flex;\n  flex-wrap: wrap;\n  word-break: break-all;\n}\n\n.remove {\n  color: red;\n  font-weight: bold;\n  font-size: 2em;\n  cursor: pointer;\n}\n\n.remove:hover {\n  padding-bottom: 3px;\n}\n\n.side-proyect,\n.expandBtn {\n  cursor: pointer;\n}\n\n.expandBtn {\n  position: absolute;\n  top: 25px;\n  left: 5px;\n\n  font-size: 1.3em;\n  font-weight: bold;\n}\n\n.expandBtn:hover {\n  top: 22px;\n}\n\n.side-proyect:hover {\n  background-color: var(--border);\n}\n\nbutton {\n  border-radius: 5px;\n  background-color: white;\n  padding: 10px 5px;\n  border: 1px solid var(--border);\n  font-weight: bold;\n  font-size: 0.9em;\n  cursor: pointer;\n}\n\n.proyect-btn {\n  padding: 5px;\n}\n\n.proyect-form {\n  grid-row: span 2;\n}\n\nbutton:hover {\n  background-color: rgb(161, 161, 161);\n  color: white;\n}\n\n.input-proyect {\n  width: 100%;\n  height: 25px;\n  font-size: 1em;\n}\n\ninput {\n  font-size: 1em;\n}\n\ntextarea {\n  font-size: 1em;\n  height: 100px;\n}\n/* .priority {\n  width: 5%;\n  height: 50%;\n\n  border-radius: 25px;\n} */\n\n@media only screen and (max-width: 1000px) {\n  .side-proyect {\n    grid-row: span 2;\n  }\n\n  .item-expand {\n    grid-row: span 10;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n  }\n}\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add-proyect.js":
/*!****************************!*\
  !*** ./src/add-proyect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-projects.js */ "./src/display-projects.js");
/* harmony import */ var _proyect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proyect.js */ "./src/proyect.js");




// let proyects = [];

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const sidebar = document.querySelector('.side-bar');
  const proyectBtn = document.querySelector('#proyect-btn');

  proyectBtn.addEventListener('click', () => {
    const formContainer = document.createElement('div');
    formContainer.classList.add('item');
    formContainer.classList.add('side-proyect');
    formContainer.classList.add('form-container');
    formContainer.classList.add('proyect-form');
    sidebar.insertBefore(formContainer, sidebar.children[1]);

    const labelTitle = document.createElement('label');
    labelTitle.innerHTML = 'Title';
    labelTitle.setAttribute('for', 'title');
    formContainer.appendChild(labelTitle);
    const inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.setAttribute('maxlength', 20);
    inputTitle.setAttribute('id', 'title');
    formContainer.appendChild(inputTitle);

    const add = document.createElement('button');
    add.innerHTML = '+';
    add.classList.add('proyect-btn');
    formContainer.appendChild(add);

    const cancel = document.createElement('button');
    cancel.innerHTML = 'x';
    cancel.classList.add('proyect-btn');
    formContainer.appendChild(cancel);

    cancel.addEventListener('click', () => {
      sidebar.removeChild(formContainer);
    });

    add.addEventListener('click', () => {
      const proy = new _proyect_js__WEBPACK_IMPORTED_MODULE_1__["default"](inputTitle.value);
      proy.addItem(proy);
      console.log('this: ', _proyect_js__WEBPACK_IMPORTED_MODULE_1__.proyects.indexOf(proy));
      (0,_display_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_proyect_js__WEBPACK_IMPORTED_MODULE_1__.proyects);
      sidebar.removeChild(formContainer);
    });

    proyectBtn.addEventListener('click', () => {
      sidebar.removeChild(formContainer);
    });
  });
}

// export { proyects };


/***/ }),

/***/ "./src/build-item.js":
/*!***************************!*\
  !*** ./src/build-item.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item.js */ "./src/todo-item.js");
/* harmony import */ var _display_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-item.js */ "./src/display-item.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(title, description, duedate, priority, proyect) {
  let item = new _todo_item_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, duedate, priority, proyect);
  item.addItem(item);
  (0,_display_item_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items, 'All');
  console.log(_todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items);
}


/***/ }),

/***/ "./src/display-item.js":
/*!*****************************!*\
  !*** ./src/display-item.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.js */ "./src/remove.js");
/* harmony import */ var _expanded_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expanded-item.js */ "./src/expanded-item.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(list, title) {
  if (title === 'All') {
    list.forEach((i) => {
      const mid = document.querySelector('.mid-content');

      const item = document.createElement('div');
      item.classList.add('item');
      mid.appendChild(item);
      const title = document.createElement('div');
      title.innerHTML = i.title;
      title.classList.add('item-title');
      item.appendChild(title);
      const dueDate = document.createElement('div');
      dueDate.innerHTML = i.dueDate;
      dueDate.classList.add('item-title');
      item.appendChild(dueDate);
      const priority = document.createElement('div');

      item.style.borderBottom = '1px solid ' + i.priority;
      item.appendChild(priority);

      const remove = document.createElement('div');
      remove.classList.add('remove');
      remove.innerHTML = '-';
      item.appendChild(remove);

      const expand = document.createElement('div');
      expand.classList.add('expandBtn');
      expand.innerHTML = '>';
      item.prepend(expand);

      expand.addEventListener('click', () => {
        item.classList.add('item-expand');

        (0,_expanded_item_js__WEBPACK_IMPORTED_MODULE_1__["default"])(item, i, 'All');
      });

      remove.addEventListener('click', () => {
        (0,_remove_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i);
      });
    });
  } else {
    list.forEach((i) => {
      if (i.proyect === title) {
        const mid = document.querySelector('.mid-content');

        const item = document.createElement('div');
        item.classList.add('item');
        mid.appendChild(item);
        const title = document.createElement('div');
        title.innerHTML = i.title;
        title.classList.add('item-title');
        item.appendChild(title);
        const dueDate = document.createElement('div');
        dueDate.innerHTML = i.dueDate;
        dueDate.classList.add('item-title');
        item.appendChild(dueDate);
        const priority = document.createElement('div');

        item.style.borderBottom = '1px solid ' + i.priority;
        item.appendChild(priority);

        const expand = document.createElement('div');
        expand.classList.add('expandBtn');
        expand.innerHTML = '>';
        item.prepend(expand);

        expand.addEventListener('click', () => {
          item.classList.add('item-expand');

          (0,_expanded_item_js__WEBPACK_IMPORTED_MODULE_1__["default"])(item, i, i.proyect);
          console.log('title ', i.title);
        });

        const remove = document.createElement('div');
        remove.classList.add('remove');
        remove.innerHTML = '-';
        item.appendChild(remove);

        remove.addEventListener('click', () => {
          (0,_remove_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i);
        });
      }
    });
  }
}


/***/ }),

/***/ "./src/display-projects.js":
/*!*********************************!*\
  !*** ./src/display-projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.js */ "./src/remove.js");
/* harmony import */ var _display_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-item.js */ "./src/display-item.js");
/* harmony import */ var _todo_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-item.js */ "./src/todo-item.js");
/* harmony import */ var _side_bar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-bar.js */ "./src/side-bar.js");
/* harmony import */ var _add_proyect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-proyect.js */ "./src/add-proyect.js");
/* harmony import */ var _proyect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proyect.js */ "./src/proyect.js");







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(list) {
  const sidebar = document.querySelector('.side-bar');
  sidebar.innerHTML = '';
  (0,_side_bar_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_add_proyect_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  list.forEach((i) => {
    const mid = document.querySelector('.mid-content');

    const proyect = document.createElement('div');
    proyect.classList.add('item');
    proyect.classList.add('side-proyect');
    proyect.setAttribute('id', i.title);
    proyect.innerText = i.title;
    proyect.setAttribute('id', i.title);

    proyect.addEventListener('click', () => {
      mid.innerHTML = '';
      (0,_display_item_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_todo_item_js__WEBPACK_IMPORTED_MODULE_2__.Items, i.title);
      console.log(proyect.textContent);
    });

    const remove = document.createElement('div');
    remove.classList.add('remove');
    remove.innerHTML = '-';
    proyect.appendChild(remove);

    remove.addEventListener('click', () => {
      (0,_remove_js__WEBPACK_IMPORTED_MODULE_0__.proyectRemove)(i);
    });

    console.log('proyects: ', _proyect_js__WEBPACK_IMPORTED_MODULE_5__.proyects);

    sidebar.appendChild(proyect);
  });
}


/***/ }),

/***/ "./src/expanded-item.js":
/*!******************************!*\
  !*** ./src/expanded-item.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-item */ "./src/display-item.js");
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(div, obj, t) {
  div.innerHTML = '';
  div.classList.remove('item');
  const column1 = document.createElement('div');
  div.appendChild(column1);
  column1.classList.add('column');
  const column2 = document.createElement('div');
  div.appendChild(column2);
  column2.classList.add('column');

  const title = document.createElement('div');
  title.innerHTML = obj.title;
  column1.appendChild(title);

  const Description = document.createElement('div');
  Description.classList.add('note');
  Description.textContent = obj.description;
  column1.appendChild(Description);

  const dueDate = document.createElement('div');
  dueDate.innerHTML = obj.dueDate;
  column2.appendChild(dueDate);

  const priority = document.createElement('div');
  div.style.borderBottom = '1px solid ' + obj.priority;
  column2.appendChild(priority);

  const expand = document.createElement('div');
  expand.classList.add('expandBtn');
  expand.innerHTML = '∨';
  div.prepend(expand);

  expand.addEventListener('click', () => {
    div.classList.remove('item-expand');
    div.classList.add('item');
    div.innerHTML = '';
    const mid = document.querySelector('.mid-content');
    mid.innerHTML = '';
    (0,_display_item__WEBPACK_IMPORTED_MODULE_0__["default"])(_todo_item__WEBPACK_IMPORTED_MODULE_1__.Items, t);
  });
}


/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _build_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-item.js */ "./src/build-item.js");
/* harmony import */ var _proyect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proyect.js */ "./src/proyect.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const addBtn = document.querySelector('.add-item');

  addBtn.addEventListener('click', () => {
    const mid = document.querySelector('.mid-content');
    const formContainer = document.createElement('div');
    formContainer.classList.add('item');
    formContainer.classList.add('item-expand');
    formContainer.classList.add('form-container');
    mid.prepend(formContainer);

    const column1 = document.createElement('div');
    formContainer.appendChild(column1);
    const column2 = document.createElement('div');
    formContainer.appendChild(column2);
    column1.classList.add('column');
    column2.classList.add('column');

    const labelTitle = document.createElement('label');
    labelTitle.innerHTML = 'Title';
    labelTitle.setAttribute('for', 'title');
    column1.appendChild(labelTitle);
    const inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.setAttribute('id', 'title');
    inputTitle.setAttribute('maxlength', 20);
    column1.appendChild(inputTitle);

    const labelDesc = document.createElement('label');
    labelDesc.innerHTML = 'Description';
    labelDesc.setAttribute('for', 'desc');
    column1.appendChild(labelDesc);
    const inputDesc = document.createElement('textarea');
    inputDesc.setAttribute('maxlength', 100);
    inputDesc.setAttribute('placeholder', '100 max.');
    inputDesc.setAttribute('id', 'desc');
    column1.appendChild(inputDesc);

    const labelDue = document.createElement('label');
    labelDue.innerHTML = 'Due Date';
    labelDue.setAttribute('for', 'due');
    column1.appendChild(labelDue);
    const inputDue = document.createElement('input');
    inputDue.type = 'date';
    inputDue.setAttribute('id', 'due');
    column1.appendChild(inputDue);

    const labelPrior = document.createElement('label');
    labelPrior.innerHTML = 'Priority';
    labelPrior.setAttribute('for', 'prior');
    column2.appendChild(labelPrior);
    const inputPrior = document.createElement('input');
    inputPrior.type = 'color';
    inputPrior.setAttribute('id', 'prior');
    column2.appendChild(inputPrior);

    const labelproyect = document.createElement('label');
    labelproyect.innerHTML = 'Proyect';
    labelproyect.setAttribute('for', 'proyect');
    column2.appendChild(labelproyect);
    const inputProyect = document.createElement('select');
    inputProyect.classList.add('input-proyect');
    // inputProyect.type = 'text';
    inputProyect.setAttribute('id', 'proyect');
    column2.appendChild(inputProyect);

    const defaultSelect = document.createElement('option');
    defaultSelect.innerHTML = '- -Select a proyect- -';
    inputProyect.appendChild(defaultSelect);

    _proyect_js__WEBPACK_IMPORTED_MODULE_1__.proyects.forEach((proyect) => {
      const select = document.createElement('option');
      select.innerHTML = proyect.title;
      select.setAttribute('value', proyect.title);
      inputProyect.appendChild(select);
    });

    const add = document.createElement('button');
    add.innerHTML = '+Add';
    column2.appendChild(add);

    const cancel = document.createElement('button');
    cancel.innerHTML = 'Cancel';
    column2.appendChild(cancel);

    cancel.addEventListener('click', () => {
      mid.removeChild(formContainer);
    });

    add.addEventListener('click', () => {
      mid.innerHTML = '';
      (0,_build_item_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
        inputTitle.value,
        inputDesc.value,
        inputDue.value,
        inputPrior.value,
        inputProyect.value
      );
    });

    addBtn.addEventListener('click', () => {
      mid.removeChild(formContainer);
    });
  });
}


/***/ }),

/***/ "./src/proyect.js":
/*!************************!*\
  !*** ./src/proyect.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ proyect),
/* harmony export */   "proyects": () => (/* binding */ proyects)
/* harmony export */ });
let proyects = [];

class proyect {
  constructor(title) {
    this.title = title;
  }

  addItem(item) {
    proyects.push(item);
  }
}




/***/ }),

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "proyectRemove": () => (/* binding */ proyectRemove)
/* harmony export */ });
/* harmony import */ var _todo_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item.js */ "./src/todo-item.js");
/* harmony import */ var _display_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-item.js */ "./src/display-item.js");
/* harmony import */ var _proyect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proyect.js */ "./src/proyect.js");
/* harmony import */ var _side_bar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-bar.js */ "./src/side-bar.js");
/* harmony import */ var _add_proyect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-proyect.js */ "./src/add-proyect.js");
/* harmony import */ var _display_projects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-projects.js */ "./src/display-projects.js");







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(item) {
  _todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items.splice(_todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items.indexOf(item), 1);
  const mid = document.querySelector('.mid-content');
  mid.innerHTML = '';
  (0,_display_item_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items, 'All');
}

const proyectRemove = function (pro) {
  _proyect_js__WEBPACK_IMPORTED_MODULE_2__.proyects.splice(_proyect_js__WEBPACK_IMPORTED_MODULE_2__.proyects.indexOf(pro), 1);
  console.log(_proyect_js__WEBPACK_IMPORTED_MODULE_2__.proyects.indexOf(pro));
  const sidebar = document.querySelector('.side-bar');
  sidebar.innerHTML = '';
  (0,_side_bar_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_add_proyect_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_display_projects_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_proyect_js__WEBPACK_IMPORTED_MODULE_2__.proyects);
};




/***/ }),

/***/ "./src/side-bar.js":
/*!*************************!*\
  !*** ./src/side-bar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item.js */ "./src/todo-item.js");
/* harmony import */ var _display_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-item.js */ "./src/display-item.js");
/* harmony import */ var _proyect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proyect.js */ "./src/proyect.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const sidebar = document.querySelector('.side-bar');

  const proyectsCont = document.createElement('div');
  proyectsCont.classList.add('item');
  const proyects = document.createElement('h3');
  proyects.innerHTML = 'Proyects';
  proyectsCont.classList.add('side-proyect');
  proyectsCont.appendChild(proyects);

  const proyectBtn = document.createElement('button');
  proyectBtn.innerHTML = '+Add Proyect';
  proyectBtn.setAttribute('id', 'proyect-btn');
  proyectsCont.appendChild(proyectBtn);
  sidebar.appendChild(proyectsCont);

  const all = document.createElement('div');
  all.innerHTML = 'All';
  all.classList.add('item');
  all.setAttribute('id', 'all');
  all.classList.add('side-proyect');
  sidebar.appendChild(all);
  const mid = document.querySelector('.mid-content');

  all.addEventListener('click', () => {
    mid.innerHTML = '';
    (0,_display_item_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items, 'All');
  });
}


/***/ }),

/***/ "./src/todo-item.js":
/*!**************************!*\
  !*** ./src/todo-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Items": () => (/* binding */ Items),
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
let Items = [];

class Item {
  constructor(title, description, dueDate, priority, proyect) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.proyect = proyect;
  }

  addItem(item) {
    Items.push(item);
  }
}




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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item.js */ "./src/todo-item.js");
/* harmony import */ var _display_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-item.js */ "./src/display-item.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var _side_bar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-bar.js */ "./src/side-bar.js");
/* harmony import */ var _add_proyect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-proyect.js */ "./src/add-proyect.js");








const shit = new _todo_item_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Welcome!', '', '', 'e');

shit.addItem(shit);
(0,_display_item_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_todo_item_js__WEBPACK_IMPORTED_MODULE_1__.Items, 'All');
(0,_form_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_side_bar_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_add_proyect_js__WEBPACK_IMPORTED_MODULE_5__["default"])();

console.log(_todo_item_js__WEBPACK_IMPORTED_MODULE_1__.Items);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw0REFBTyxDQUFDLGdEQUFLO0FBQ2pCLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVpQjs7Ozs7OztVQ2hCakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2E7QUFDSztBQUNDO0FBQ1g7QUFDTztBQUNNOztBQUUxQyxpQkFBaUIscURBQUk7O0FBRXJCO0FBQ0EsNERBQU8sQ0FBQyxnREFBSztBQUNiLG9EQUFJO0FBQ0osd0RBQU87QUFDUCwyREFBVTs7QUFFVixZQUFZLGdEQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZC1wcm95ZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYnVpbGQtaXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXktaXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXktcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9leHBhbmRlZC1pdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb3llY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaWRlLWJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8taXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJvcmRlcjogaHNsYSgwLCAwJSwgNTAlLCAwLjM3KTtcXG4gIC0tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAyMDAyNCwgIzA5MDk3OSwgIzAwZDRmZik7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAyZnI7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudCk7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1pZGRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxufVxcblxcbi5taWQtaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQpO1xcbn1cXG5cXG4uYWRkLWl0ZW0ge1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5zaWRlLWJhciB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbn1cXG5cXG4ubWlkLWNvbnRlbnQsXFxuLnNpZGUtYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggNzBweDtcXG4gIGdyaWQtYXV0by1yb3dzOiA3MHB4O1xcbn1cXG5cXG4uaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcblxcbiAgcGFkZGluZzogMCAxMHB4O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaXRlbS10aXRsZSB7XFxuICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuLml0ZW0tZXhwYW5kIHtcXG4gIGdyaWQtcm93OiBzcGFuIDU7XFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgNTAlKTtcXG4gIGdyaWQtYXV0by1yb3dzOiAzNTBweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbn1cXG5cXG4vKiAubm90ZSB7XFxuICBjb2xvcjogIzAwZDRmZjtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1vdmVyZmxvdzogZTtcXG59ICovXFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDUwJTtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5ub3RlIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi5yZW1vdmUge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZW1vdmU6aG92ZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG59XFxuXFxuLnNpZGUtcHJveWVjdCxcXG4uZXhwYW5kQnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmV4cGFuZEJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI1cHg7XFxuICBsZWZ0OiA1cHg7XFxuXFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5leHBhbmRCdG46aG92ZXIge1xcbiAgdG9wOiAyMnB4O1xcbn1cXG5cXG4uc2lkZS1wcm95ZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlcik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb3llY3QtYnRuIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnByb3llY3QtZm9ybSB7XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTYxLCAxNjEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW5wdXQtcHJveWVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG4vKiAucHJpb3JpdHkge1xcbiAgd2lkdGg6IDUlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn0gKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLnNpZGUtcHJveWVjdCB7XFxuICAgIGdyaWQtcm93OiBzcGFuIDI7XFxuICB9XFxuXFxuICAuaXRlbS1leHBhbmQge1xcbiAgICBncmlkLXJvdzogc3BhbiAxMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdDQUFnQztFQUNoQyxnRUFBZ0U7QUFDbEU7O0FBSUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7O0VBRVgsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7O0VBRTdCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCOztFQUUzQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCOztFQUV2QixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjs7RUFFbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhCQUE4Qjs7RUFFOUIsc0NBQXNDOztFQUV0QyxlQUFlOztFQUVmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEI7Ozs7d0JBSXNCOztFQUV0QixhQUFhO0VBQ2IsNENBQTRDO0VBQzVDLHFCQUFxQjtFQUNyQixlQUFlOztFQUVmLGtCQUFrQjs7RUFFbEIsc0NBQXNDO0FBQ3hDOztBQUVBOzs7OztHQUtHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUzs7RUFFVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjtBQUNBOzs7OztHQUtHOztBQUVIO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztFQUNYO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1ib3JkZXI6IGhzbGEoMCwgMCUsIDUwJSwgMC4zNyk7XFxuICAtLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMjAwMjQsICMwOTA5NzksICMwMGQ0ZmYpO1xcbn1cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAyZnI7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudCk7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1pZGRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxufVxcblxcbi5taWQtaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQpO1xcbn1cXG5cXG4uYWRkLWl0ZW0ge1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5zaWRlLWJhciB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbn1cXG5cXG4ubWlkLWNvbnRlbnQsXFxuLnNpZGUtYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggNzBweDtcXG4gIGdyaWQtYXV0by1yb3dzOiA3MHB4O1xcbn1cXG5cXG4uaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcblxcbiAgcGFkZGluZzogMCAxMHB4O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaXRlbS10aXRsZSB7XFxuICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuLml0ZW0tZXhwYW5kIHtcXG4gIGdyaWQtcm93OiBzcGFuIDU7XFxuICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgNTAlKTtcXG4gIGdyaWQtYXV0by1yb3dzOiAzNTBweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbn1cXG5cXG4vKiAubm90ZSB7XFxuICBjb2xvcjogIzAwZDRmZjtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1vdmVyZmxvdzogZTtcXG59ICovXFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDUwJTtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5ub3RlIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi5yZW1vdmUge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZW1vdmU6aG92ZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG59XFxuXFxuLnNpZGUtcHJveWVjdCxcXG4uZXhwYW5kQnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmV4cGFuZEJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI1cHg7XFxuICBsZWZ0OiA1cHg7XFxuXFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5leHBhbmRCdG46aG92ZXIge1xcbiAgdG9wOiAyMnB4O1xcbn1cXG5cXG4uc2lkZS1wcm95ZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlcik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb3llY3QtYnRuIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnByb3llY3QtZm9ybSB7XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTYxLCAxNjEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW5wdXQtcHJveWVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG4vKiAucHJpb3JpdHkge1xcbiAgd2lkdGg6IDUlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn0gKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLnNpZGUtcHJveWVjdCB7XFxuICAgIGdyaWQtcm93OiBzcGFuIDI7XFxuICB9XFxuXFxuICAuaXRlbS1leHBhbmQge1xcbiAgICBncmlkLXJvdzogc3BhbiAxMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZGlzcGxheVByb3llY3QgZnJvbSAnLi9kaXNwbGF5LXByb2plY3RzLmpzJztcbmltcG9ydCBwcm95ZWN0IGZyb20gJy4vcHJveWVjdC5qcyc7XG5pbXBvcnQgeyBwcm95ZWN0cyB9IGZyb20gJy4vcHJveWVjdC5qcyc7XG5cbi8vIGxldCBwcm95ZWN0cyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1iYXInKTtcbiAgY29uc3QgcHJveWVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm95ZWN0LWJ0bicpO1xuXG4gIHByb3llY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2lkZS1wcm95ZWN0Jyk7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJveWVjdC1mb3JtJyk7XG4gICAgc2lkZWJhci5pbnNlcnRCZWZvcmUoZm9ybUNvbnRhaW5lciwgc2lkZWJhci5jaGlsZHJlblsxXSk7XG5cbiAgICBjb25zdCBsYWJlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbFRpdGxlLmlubmVySFRNTCA9ICdUaXRsZSc7XG4gICAgbGFiZWxUaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxUaXRsZSk7XG4gICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRUaXRsZS50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAyMCk7XG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcblxuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZC5pbm5lckhUTUwgPSAnKyc7XG4gICAgYWRkLmNsYXNzTGlzdC5hZGQoJ3Byb3llY3QtYnRuJyk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGQpO1xuXG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsLmlubmVySFRNTCA9ICd4JztcbiAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgncHJveWVjdC1idG4nKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzaWRlYmFyLnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcHJveSA9IG5ldyBwcm95ZWN0KGlucHV0VGl0bGUudmFsdWUpO1xuICAgICAgcHJveS5hZGRJdGVtKHByb3kpO1xuICAgICAgY29uc29sZS5sb2coJ3RoaXM6ICcsIHByb3llY3RzLmluZGV4T2YocHJveSkpO1xuICAgICAgZGlzcGxheVByb3llY3QocHJveWVjdHMpO1xuICAgICAgc2lkZWJhci5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIHByb3llY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzaWRlYmFyLnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gZXhwb3J0IHsgcHJveWVjdHMgfTtcbiIsImltcG9ydCBJdGVtIGZyb20gJy4vdG9kby1pdGVtLmpzJztcbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vZGlzcGxheS1pdGVtLmpzJztcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSAnLi90b2RvLWl0ZW0uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgcHJveWVjdCkge1xuICBsZXQgaXRlbSA9IG5ldyBJdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksIHByb3llY3QpO1xuICBpdGVtLmFkZEl0ZW0oaXRlbSk7XG4gIGRpc3BsYXkoSXRlbXMsICdBbGwnKTtcbiAgY29uc29sZS5sb2coSXRlbXMpO1xufVxuIiwiaW1wb3J0IHJlbW92ZXMgZnJvbSAnLi9yZW1vdmUuanMnO1xuaW1wb3J0IGV4cGFuZGVkSXRlbSBmcm9tICcuL2V4cGFuZGVkLWl0ZW0uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobGlzdCwgdGl0bGUpIHtcbiAgaWYgKHRpdGxlID09PSAnQWxsJykge1xuICAgIGxpc3QuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgY29uc3QgbWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZC1jb250ZW50Jyk7XG5cbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgbWlkLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IGkudGl0bGU7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXRpdGxlJyk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGR1ZURhdGUuaW5uZXJIVE1MID0gaS5kdWVEYXRlO1xuICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXRpdGxlJyk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgaXRlbS5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkICcgKyBpLnByaW9yaXR5O1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgICAgcmVtb3ZlLmlubmVySFRNTCA9ICctJztcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgICAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kQnRuJyk7XG4gICAgICBleHBhbmQuaW5uZXJIVE1MID0gJz4nO1xuICAgICAgaXRlbS5wcmVwZW5kKGV4cGFuZCk7XG5cbiAgICAgIGV4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtLWV4cGFuZCcpO1xuXG4gICAgICAgIGV4cGFuZGVkSXRlbShpdGVtLCBpLCAnQWxsJyk7XG4gICAgICB9KTtcblxuICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW1vdmVzKGkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbGlzdC5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBpZiAoaS5wcm95ZWN0ID09PSB0aXRsZSkge1xuICAgICAgICBjb25zdCBtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkLWNvbnRlbnQnKTtcblxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBtaWQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGkudGl0bGU7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZHVlRGF0ZS5pbm5lckhUTUwgPSBpLmR1ZURhdGU7XG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnaXRlbS10aXRsZScpO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGl0ZW0uc3R5bGUuYm9yZGVyQm90dG9tID0gJzFweCBzb2xpZCAnICsgaS5wcmlvcml0eTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmRCdG4nKTtcbiAgICAgICAgZXhwYW5kLmlubmVySFRNTCA9ICc+JztcbiAgICAgICAgaXRlbS5wcmVwZW5kKGV4cGFuZCk7XG5cbiAgICAgICAgZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbS1leHBhbmQnKTtcblxuICAgICAgICAgIGV4cGFuZGVkSXRlbShpdGVtLCBpLCBpLnByb3llY3QpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0aXRsZSAnLCBpLnRpdGxlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcbiAgICAgICAgcmVtb3ZlLmlubmVySFRNTCA9ICctJztcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChyZW1vdmUpO1xuXG4gICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICByZW1vdmVzKGkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcHJveWVjdFJlbW92ZSB9IGZyb20gJy4vcmVtb3ZlLmpzJztcbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vZGlzcGxheS1pdGVtLmpzJztcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSAnLi90b2RvLWl0ZW0uanMnO1xuaW1wb3J0IHNpZGVCYXIgZnJvbSAnLi9zaWRlLWJhci5qcyc7XG5pbXBvcnQgYWRkUHJveWVjdCBmcm9tICcuL2FkZC1wcm95ZWN0LmpzJztcbmltcG9ydCB7IHByb3llY3RzIH0gZnJvbSAnLi9wcm95ZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGxpc3QpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLWJhcicpO1xuICBzaWRlYmFyLmlubmVySFRNTCA9ICcnO1xuICBzaWRlQmFyKCk7XG4gIGFkZFByb3llY3QoKTtcbiAgbGlzdC5mb3JFYWNoKChpKSA9PiB7XG4gICAgY29uc3QgbWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBwcm95ZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJveWVjdC5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgcHJveWVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlLXByb3llY3QnKTtcbiAgICBwcm95ZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBpLnRpdGxlKTtcbiAgICBwcm95ZWN0LmlubmVyVGV4dCA9IGkudGl0bGU7XG4gICAgcHJveWVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgaS50aXRsZSk7XG5cbiAgICBwcm95ZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbWlkLmlubmVySFRNTCA9ICcnO1xuICAgICAgZGlzcGxheShJdGVtcywgaS50aXRsZSk7XG4gICAgICBjb25zb2xlLmxvZyhwcm95ZWN0LnRleHRDb250ZW50KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcbiAgICByZW1vdmUuaW5uZXJIVE1MID0gJy0nO1xuICAgIHByb3llY3QuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHByb3llY3RSZW1vdmUoaSk7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygncHJveWVjdHM6ICcsIHByb3llY3RzKTtcblxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJveWVjdCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGRpc3BsYXlJdGVtIGZyb20gJy4vZGlzcGxheS1pdGVtJztcbmltcG9ydCBJdGVtLCB7IEl0ZW1zIH0gZnJvbSAnLi90b2RvLWl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGl2LCBvYmosIHQpIHtcbiAgZGl2LmlubmVySFRNTCA9ICcnO1xuICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnaXRlbScpO1xuICBjb25zdCBjb2x1bW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5hcHBlbmRDaGlsZChjb2x1bW4xKTtcbiAgY29sdW1uMS5jbGFzc0xpc3QuYWRkKCdjb2x1bW4nKTtcbiAgY29uc3QgY29sdW1uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY29sdW1uMik7XG4gIGNvbHVtbjIuY2xhc3NMaXN0LmFkZCgnY29sdW1uJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuaW5uZXJIVE1MID0gb2JqLnRpdGxlO1xuICBjb2x1bW4xLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdub3RlJyk7XG4gIERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gb2JqLmRlc2NyaXB0aW9uO1xuICBjb2x1bW4xLmFwcGVuZENoaWxkKERlc2NyaXB0aW9uKTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGUuaW5uZXJIVE1MID0gb2JqLmR1ZURhdGU7XG4gIGNvbHVtbjIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgJyArIG9iai5wcmlvcml0eTtcbiAgY29sdW1uMi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmRCdG4nKTtcbiAgZXhwYW5kLmlubmVySFRNTCA9ICfiiKgnO1xuICBkaXYucHJlcGVuZChleHBhbmQpO1xuXG4gIGV4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS1leHBhbmQnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgIGRpdi5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkLWNvbnRlbnQnKTtcbiAgICBtaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgZGlzcGxheUl0ZW0oSXRlbXMsIHQpO1xuICB9KTtcbn1cbiIsImltcG9ydCBidWlsZCBmcm9tICcuL2J1aWxkLWl0ZW0uanMnO1xuaW1wb3J0IHsgcHJveWVjdHMgfSBmcm9tICcuL3Byb3llY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbScpO1xuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkLWNvbnRlbnQnKTtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLWV4cGFuZCcpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcbiAgICBtaWQucHJlcGVuZChmb3JtQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNvbHVtbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbHVtbjEpO1xuICAgIGNvbnN0IGNvbHVtbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbHVtbjIpO1xuICAgIGNvbHVtbjEuY2xhc3NMaXN0LmFkZCgnY29sdW1uJyk7XG4gICAgY29sdW1uMi5jbGFzc0xpc3QuYWRkKCdjb2x1bW4nKTtcblxuICAgIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsVGl0bGUuaW5uZXJIVE1MID0gJ1RpdGxlJztcbiAgICBsYWJlbFRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgY29sdW1uMS5hcHBlbmRDaGlsZChsYWJlbFRpdGxlKTtcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dFRpdGxlLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIDIwKTtcbiAgICBjb2x1bW4xLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xuXG4gICAgY29uc3QgbGFiZWxEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbERlc2MuaW5uZXJIVE1MID0gJ0Rlc2NyaXB0aW9uJztcbiAgICBsYWJlbERlc2Muc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzYycpO1xuICAgIGNvbHVtbjEuYXBwZW5kQ2hpbGQobGFiZWxEZXNjKTtcbiAgICBjb25zdCBpbnB1dERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGlucHV0RGVzYy5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIDEwMCk7XG4gICAgaW5wdXREZXNjLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnMTAwIG1heC4nKTtcbiAgICBpbnB1dERlc2Muc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjJyk7XG4gICAgY29sdW1uMS5hcHBlbmRDaGlsZChpbnB1dERlc2MpO1xuXG4gICAgY29uc3QgbGFiZWxEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsRHVlLmlubmVySFRNTCA9ICdEdWUgRGF0ZSc7XG4gICAgbGFiZWxEdWUuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlJyk7XG4gICAgY29sdW1uMS5hcHBlbmRDaGlsZChsYWJlbER1ZSk7XG4gICAgY29uc3QgaW5wdXREdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0RHVlLnR5cGUgPSAnZGF0ZSc7XG4gICAgaW5wdXREdWUuc2V0QXR0cmlidXRlKCdpZCcsICdkdWUnKTtcbiAgICBjb2x1bW4xLmFwcGVuZENoaWxkKGlucHV0RHVlKTtcblxuICAgIGNvbnN0IGxhYmVsUHJpb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsUHJpb3IuaW5uZXJIVE1MID0gJ1ByaW9yaXR5JztcbiAgICBsYWJlbFByaW9yLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yJyk7XG4gICAgY29sdW1uMi5hcHBlbmRDaGlsZChsYWJlbFByaW9yKTtcbiAgICBjb25zdCBpbnB1dFByaW9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dFByaW9yLnR5cGUgPSAnY29sb3InO1xuICAgIGlucHV0UHJpb3Iuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcicpO1xuICAgIGNvbHVtbjIuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcik7XG5cbiAgICBjb25zdCBsYWJlbHByb3llY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVscHJveWVjdC5pbm5lckhUTUwgPSAnUHJveWVjdCc7XG4gICAgbGFiZWxwcm95ZWN0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb3llY3QnKTtcbiAgICBjb2x1bW4yLmFwcGVuZENoaWxkKGxhYmVscHJveWVjdCk7XG4gICAgY29uc3QgaW5wdXRQcm95ZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgaW5wdXRQcm95ZWN0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXByb3llY3QnKTtcbiAgICAvLyBpbnB1dFByb3llY3QudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dFByb3llY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm95ZWN0Jyk7XG4gICAgY29sdW1uMi5hcHBlbmRDaGlsZChpbnB1dFByb3llY3QpO1xuXG4gICAgY29uc3QgZGVmYXVsdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGRlZmF1bHRTZWxlY3QuaW5uZXJIVE1MID0gJy0gLVNlbGVjdCBhIHByb3llY3QtIC0nO1xuICAgIGlucHV0UHJveWVjdC5hcHBlbmRDaGlsZChkZWZhdWx0U2VsZWN0KTtcblxuICAgIHByb3llY3RzLmZvckVhY2goKHByb3llY3QpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgc2VsZWN0LmlubmVySFRNTCA9IHByb3llY3QudGl0bGU7XG4gICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByb3llY3QudGl0bGUpO1xuICAgICAgaW5wdXRQcm95ZWN0LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGQuaW5uZXJIVE1MID0gJytBZGQnO1xuICAgIGNvbHVtbjIuYXBwZW5kQ2hpbGQoYWRkKTtcblxuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbC5pbm5lckhUTUwgPSAnQ2FuY2VsJztcbiAgICBjb2x1bW4yLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtaWQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgICBidWlsZChcbiAgICAgICAgaW5wdXRUaXRsZS52YWx1ZSxcbiAgICAgICAgaW5wdXREZXNjLnZhbHVlLFxuICAgICAgICBpbnB1dER1ZS52YWx1ZSxcbiAgICAgICAgaW5wdXRQcmlvci52YWx1ZSxcbiAgICAgICAgaW5wdXRQcm95ZWN0LnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbWlkLnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImxldCBwcm95ZWN0cyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm95ZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBhZGRJdGVtKGl0ZW0pIHtcbiAgICBwcm95ZWN0cy5wdXNoKGl0ZW0pO1xuICB9XG59XG5cbmV4cG9ydCB7IHByb3llY3RzIH07XG4iLCJpbXBvcnQgeyBJdGVtcyB9IGZyb20gJy4vdG9kby1pdGVtLmpzJztcbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vZGlzcGxheS1pdGVtLmpzJztcbmltcG9ydCB7IHByb3llY3RzIH0gZnJvbSAnLi9wcm95ZWN0LmpzJztcbmltcG9ydCBzaWRlQmFyIGZyb20gJy4vc2lkZS1iYXIuanMnO1xuaW1wb3J0IGFkZFByb3llY3QgZnJvbSAnLi9hZGQtcHJveWVjdC5qcyc7XG5pbXBvcnQgZGlzcGxheVByb2plY3RzIGZyb20gJy4vZGlzcGxheS1wcm9qZWN0cy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChpdGVtKSB7XG4gIEl0ZW1zLnNwbGljZShJdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgY29uc3QgbWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZC1jb250ZW50Jyk7XG4gIG1pZC5pbm5lckhUTUwgPSAnJztcbiAgZGlzcGxheShJdGVtcywgJ0FsbCcpO1xufVxuXG5jb25zdCBwcm95ZWN0UmVtb3ZlID0gZnVuY3Rpb24gKHBybykge1xuICBwcm95ZWN0cy5zcGxpY2UocHJveWVjdHMuaW5kZXhPZihwcm8pLCAxKTtcbiAgY29uc29sZS5sb2cocHJveWVjdHMuaW5kZXhPZihwcm8pKTtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLWJhcicpO1xuICBzaWRlYmFyLmlubmVySFRNTCA9ICcnO1xuICBzaWRlQmFyKCk7XG4gIGFkZFByb3llY3QoKTtcbiAgZGlzcGxheVByb2plY3RzKHByb3llY3RzKTtcbn07XG5cbmV4cG9ydCB7IHByb3llY3RSZW1vdmUgfTtcbiIsImltcG9ydCB7IEl0ZW1zIH0gZnJvbSAnLi90b2RvLWl0ZW0uanMnO1xuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5LWl0ZW0uanMnO1xuaW1wb3J0IHsgcHJveWVjdHMgfSBmcm9tICcuL3Byb3llY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1iYXInKTtcblxuICBjb25zdCBwcm95ZWN0c0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJveWVjdHNDb250LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgY29uc3QgcHJveWVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBwcm95ZWN0cy5pbm5lckhUTUwgPSAnUHJveWVjdHMnO1xuICBwcm95ZWN0c0NvbnQuY2xhc3NMaXN0LmFkZCgnc2lkZS1wcm95ZWN0Jyk7XG4gIHByb3llY3RzQ29udC5hcHBlbmRDaGlsZChwcm95ZWN0cyk7XG5cbiAgY29uc3QgcHJveWVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm95ZWN0QnRuLmlubmVySFRNTCA9ICcrQWRkIFByb3llY3QnO1xuICBwcm95ZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJveWVjdC1idG4nKTtcbiAgcHJveWVjdHNDb250LmFwcGVuZENoaWxkKHByb3llY3RCdG4pO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb3llY3RzQ29udCk7XG5cbiAgY29uc3QgYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFsbC5pbm5lckhUTUwgPSAnQWxsJztcbiAgYWxsLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgYWxsLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxsJyk7XG4gIGFsbC5jbGFzc0xpc3QuYWRkKCdzaWRlLXByb3llY3QnKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChhbGwpO1xuICBjb25zdCBtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkLWNvbnRlbnQnKTtcblxuICBhbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWlkLmlubmVySFRNTCA9ICcnO1xuICAgIGRpc3BsYXkoSXRlbXMsICdBbGwnKTtcbiAgfSk7XG59XG4iLCJsZXQgSXRlbXMgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb3llY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJveWVjdCA9IHByb3llY3Q7XG4gIH1cblxuICBhZGRJdGVtKGl0ZW0pIHtcbiAgICBJdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG59XG5cbmV4cG9ydCB7IEl0ZW1zIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL3RvZG8taXRlbS5qcyc7XG5pbXBvcnQgeyBJdGVtcyB9IGZyb20gJy4vdG9kby1pdGVtLmpzJztcbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vZGlzcGxheS1pdGVtLmpzJztcbmltcG9ydCBmb3JtIGZyb20gJy4vZm9ybS5qcyc7XG5pbXBvcnQgc2lkZUJhciBmcm9tICcuL3NpZGUtYmFyLmpzJztcbmltcG9ydCBhZGRQcm95ZWN0IGZyb20gJy4vYWRkLXByb3llY3QuanMnO1xuXG5jb25zdCBzaGl0ID0gbmV3IEl0ZW0oJ1dlbGNvbWUhJywgJycsICcnLCAnZScpO1xuXG5zaGl0LmFkZEl0ZW0oc2hpdCk7XG5kaXNwbGF5KEl0ZW1zLCAnQWxsJyk7XG5mb3JtKCk7XG5zaWRlQmFyKCk7XG5hZGRQcm95ZWN0KCk7XG5cbmNvbnNvbGUubG9nKEl0ZW1zKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
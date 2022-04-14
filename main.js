/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --border: hsla(0, 0%, 50%, 0.37);\n  /* --gradient: linear-gradient(to right, #020024, #090979, #00d4ff); */\n  --gradient: #090968;\n}\n\n* {\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n\n  padding: 0;\n  margin: 0;\n}\n\n.content {\n  display: grid;\n  grid-template-rows: 100px 2fr;\n\n  height: 100%;\n}\n\nh1 {\n  margin-left: 15px;\n}\n\n.dark-mode-btn {\n  position: absolute;\n  right: 10px;\n  padding: 2px;\n}\n\n.edit-button {\n  padding: 2px;\n}\n\n.dark-mode {\n  background-color: #191919;\n  color: #f10086;\n}\n.dark-mode-img {\n  width: 27px;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n}\n\n.header {\n  background: var(--gradient);\n\n  color: white;\n  font-weight: bold;\n}\n\n.middle {\n  background-color: white;\n\n  display: grid;\n  grid-template-columns: 0.5fr 2fr;\n  grid-template-rows: 60px 1fr;\n}\n\n.mid-header,\n.mid-header-dark {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n}\n\n.mid-header-dark {\n  border-bottom: 2px solid #0f0f0f;\n}\n\n.mid-header-dark,\n.header-dark {\n  background-color: #161616;\n\n  color: white;\n}\n\n.mid-header {\n  background: var(--gradient);\n}\n\n.add-item {\n  padding: 10px 5px;\n  margin-right: 10px;\n}\n\n.side-bar {\n  border-right: 1px solid var(--border);\n}\n\n.mid-content,\n.side-bar {\n  display: grid;\n  grid-template-rows: 70px 70px;\n  grid-auto-rows: 70px;\n}\n\n.item {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: bold;\n  font-size: 1.1em;\n  border-bottom: 1px solid var(--border);\n\n  padding: 0 10px;\n\n  position: relative;\n}\n\n.item-title {\n  margin: 0 20px;\n}\n\n.item-expand {\n  grid-row: span 5;\n  font-weight: 1.1em;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 50%);\n  grid-auto-rows: 350px;\n  padding: 0 10px;\n\n  position: relative;\n\n  border-bottom: 1px solid var(--border);\n}\n\n/* .note {\n  color: #00d4ff;\n  height: 150px;\n  display: flex;\n  text-overflow: e;\n} */\n\n.column {\n  display: flex;\n  justify-self: center;\n  justify-content: center;\n  flex-direction: column;\n  max-width: 50%;\n  min-width: 250px;\n  gap: 15px;\n}\n\n.note {\n  overflow: auto;\n  min-width: 150px;\n  display: flex;\n  flex-wrap: wrap;\n  word-break: break-all;\n}\n\n.remove {\n  color: red;\n  font-weight: bold;\n  font-size: 2em;\n  cursor: pointer;\n}\n\n.remove:hover {\n  padding-bottom: 3px;\n}\n\n.side-proyect,\n.expandBtn {\n  cursor: pointer;\n}\n\n.expandBtn {\n  position: absolute;\n  top: 25px;\n  left: 5px;\n\n  font-size: 1.3em;\n  font-weight: bold;\n}\n\n.expandBtn:hover,\n.edit-button:hover {\n  top: 22px;\n}\n\n.expand-title {\n  position: absolute;\n  top: 25px;\n  left: 30px;\n  font-weight: bold;\n  font-size: 1.1em;\n}\n\n.side-proyect:hover {\n  background-color: var(--border);\n}\n\nbutton {\n  border-radius: 5px;\n  background-color: white;\n  padding: 10px 5px;\n  border: 1px solid var(--border);\n  font-weight: bold;\n  font-size: 0.9em;\n  cursor: pointer;\n}\n\n.proyect-btn {\n  padding: 7px 10px;\n  margin: 5px;\n}\n\n#proyect-btn {\n  padding: 1px;\n  display: flex;\n}\n\n.proyect-form {\n  grid-row: span 2;\n}\n\nbutton:hover {\n  background-color: rgb(161, 161, 161);\n  color: white;\n}\n\n.input-proyect {\n  width: 100%;\n  height: 25px;\n  font-size: 1em;\n}\n\n#sort-label {\n  color: white;\n  font-weight: bold;\n}\n\n.sort-select {\n  height: 25px;\n  font-size: 1em;\n  border-radius: 5px;\n}\n\ninput {\n  font-size: 1em;\n}\n\ntextarea {\n  font-size: 1em;\n  height: 100px;\n}\n/* .priority {\n  width: 5%;\n  height: 50%;\n\n  border-radius: 25px;\n} */\n\n.edit-button {\n  position: absolute;\n  top: 20px;\n  right: 25px;\n\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 1000px) {\n  .side-proyect {\n    grid-row: span 2;\n  }\n\n  .item-expand {\n    /* grid-row: span 10; */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n  }\n\n  .form-container {\n    grid-row: span 10;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --border: hsla(0, 0%, 50%, 0.37);\n  /* --gradient: linear-gradient(to right, #020024, #090979, #00d4ff); */\n  --gradient: #090968;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');\n\n* {\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n\n  padding: 0;\n  margin: 0;\n}\n\n.content {\n  display: grid;\n  grid-template-rows: 100px 2fr;\n\n  height: 100%;\n}\n\nh1 {\n  margin-left: 15px;\n}\n\n.dark-mode-btn {\n  position: absolute;\n  right: 10px;\n  padding: 2px;\n}\n\n.edit-button {\n  padding: 2px;\n}\n\n.dark-mode {\n  background-color: #191919;\n  color: #f10086;\n}\n.dark-mode-img {\n  width: 27px;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n}\n\n.header {\n  background: var(--gradient);\n\n  color: white;\n  font-weight: bold;\n}\n\n.middle {\n  background-color: white;\n\n  display: grid;\n  grid-template-columns: 0.5fr 2fr;\n  grid-template-rows: 60px 1fr;\n}\n\n.mid-header,\n.mid-header-dark {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n}\n\n.mid-header-dark {\n  border-bottom: 2px solid #0f0f0f;\n}\n\n.mid-header-dark,\n.header-dark {\n  background-color: #161616;\n\n  color: white;\n}\n\n.mid-header {\n  background: var(--gradient);\n}\n\n.add-item {\n  padding: 10px 5px;\n  margin-right: 10px;\n}\n\n.side-bar {\n  border-right: 1px solid var(--border);\n}\n\n.mid-content,\n.side-bar {\n  display: grid;\n  grid-template-rows: 70px 70px;\n  grid-auto-rows: 70px;\n}\n\n.item {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: bold;\n  font-size: 1.1em;\n  border-bottom: 1px solid var(--border);\n\n  padding: 0 10px;\n\n  position: relative;\n}\n\n.item-title {\n  margin: 0 20px;\n}\n\n.item-expand {\n  grid-row: span 5;\n  font-weight: 1.1em;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 50%);\n  grid-auto-rows: 350px;\n  padding: 0 10px;\n\n  position: relative;\n\n  border-bottom: 1px solid var(--border);\n}\n\n/* .note {\n  color: #00d4ff;\n  height: 150px;\n  display: flex;\n  text-overflow: e;\n} */\n\n.column {\n  display: flex;\n  justify-self: center;\n  justify-content: center;\n  flex-direction: column;\n  max-width: 50%;\n  min-width: 250px;\n  gap: 15px;\n}\n\n.note {\n  overflow: auto;\n  min-width: 150px;\n  display: flex;\n  flex-wrap: wrap;\n  word-break: break-all;\n}\n\n.remove {\n  color: red;\n  font-weight: bold;\n  font-size: 2em;\n  cursor: pointer;\n}\n\n.remove:hover {\n  padding-bottom: 3px;\n}\n\n.side-proyect,\n.expandBtn {\n  cursor: pointer;\n}\n\n.expandBtn {\n  position: absolute;\n  top: 25px;\n  left: 5px;\n\n  font-size: 1.3em;\n  font-weight: bold;\n}\n\n.expandBtn:hover,\n.edit-button:hover {\n  top: 22px;\n}\n\n.expand-title {\n  position: absolute;\n  top: 25px;\n  left: 30px;\n  font-weight: bold;\n  font-size: 1.1em;\n}\n\n.side-proyect:hover {\n  background-color: var(--border);\n}\n\nbutton {\n  border-radius: 5px;\n  background-color: white;\n  padding: 10px 5px;\n  border: 1px solid var(--border);\n  font-weight: bold;\n  font-size: 0.9em;\n  cursor: pointer;\n}\n\n.proyect-btn {\n  padding: 7px 10px;\n  margin: 5px;\n}\n\n#proyect-btn {\n  padding: 1px;\n  display: flex;\n}\n\n.proyect-form {\n  grid-row: span 2;\n}\n\nbutton:hover {\n  background-color: rgb(161, 161, 161);\n  color: white;\n}\n\n.input-proyect {\n  width: 100%;\n  height: 25px;\n  font-size: 1em;\n}\n\n#sort-label {\n  color: white;\n  font-weight: bold;\n}\n\n.sort-select {\n  height: 25px;\n  font-size: 1em;\n  border-radius: 5px;\n}\n\ninput {\n  font-size: 1em;\n}\n\ntextarea {\n  font-size: 1em;\n  height: 100px;\n}\n/* .priority {\n  width: 5%;\n  height: 50%;\n\n  border-radius: 25px;\n} */\n\n.edit-button {\n  position: absolute;\n  top: 20px;\n  right: 25px;\n\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 1000px) {\n  .side-proyect {\n    grid-row: span 2;\n  }\n\n  .item-expand {\n    /* grid-row: span 10; */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n  }\n\n  .form-container {\n    grid-row: span 10;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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
    // formContainer.classList.add('form-container');
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

    const buttonCont = document.createElement('div');
    formContainer.appendChild(buttonCont);

    const add = document.createElement('button');
    add.innerHTML = '+';
    add.classList.add('proyect-btn');
    buttonCont.appendChild(add);

    const cancel = document.createElement('button');
    cancel.innerHTML = 'x';
    cancel.classList.add('proyect-btn');
    buttonCont.appendChild(cancel);

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

"use strict";
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
  console.log('yes', _todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items);
}


/***/ }),

/***/ "./src/dark-mode.js":
/*!**************************!*\
  !*** ./src/dark-mode.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_sun_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/sun.png */ "./src/img/sun.png");
/* harmony import */ var _img_moon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/moon.png */ "./src/img/moon.png");



const midContent = document.querySelector('.mid-content');
const sideBar = document.querySelector('.side-bar');
const header = document.querySelector('.header');
const midHeader = document.querySelector('.mid-header');
const darkBtnImg = new Image();
darkBtnImg.src = _img_sun_png__WEBPACK_IMPORTED_MODULE_0__;
darkBtnImg.classList.add('dark-mode-img');
const lightBtnImg = new Image();
lightBtnImg.classList.add('dark-mode-img');
lightBtnImg.src = _img_moon_png__WEBPACK_IMPORTED_MODULE_1__;

let dark = false;

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const darkBtn = document.querySelector('.dark-mode-btn');

  darkBtn.addEventListener('click', () => {
    if (dark === false) {
      header.classList.remove('header');
      header.classList.add('header-dark');
      midHeader.classList.remove('mid-header');
      midHeader.classList.add('mid-header-dark');
      midHeader.classList.add('dark-mode');
      midContent.classList.add('dark-mode');
      sideBar.classList.add('dark-mode');
      darkBtn.innerHTML = '';
      darkBtn.appendChild(darkBtnImg);

      dark = true;
    } else {
      header.classList.add('header');
      header.classList.remove('header-dark');
      midHeader.classList.add('mid-header');
      midHeader.classList.remove('mid-header-dark');
      midHeader.classList.remove('dark-mode');
      midContent.classList.remove('dark-mode');
      sideBar.classList.remove('dark-mode');
      darkBtn.innerHTML = '';
      darkBtn.appendChild(lightBtnImg);

      dark = false;
    }
  });
}


/***/ }),

/***/ "./src/display-item.js":
/*!*****************************!*\
  !*** ./src/display-item.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.js */ "./src/remove.js");
/* harmony import */ var _expanded_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expanded-item.js */ "./src/expanded-item.js");
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort.js */ "./src/sort.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(list, title) {
  (0,_sort_js__WEBPACK_IMPORTED_MODULE_2__["default"])(list);
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

"use strict";
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

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _build_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-item.js */ "./src/build-item.js");
/* harmony import */ var _proyect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proyect.js */ "./src/proyect.js");
/* harmony import */ var _img_edit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/edit.png */ "./src/img/edit.png");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(title, desc, date) {
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
  inputTitle.setAttribute('value', title);
  inputTitle.setAttribute('id', 'title');
  inputTitle.setAttribute('maxlength', 20);
  column1.appendChild(inputTitle);

  const labelDesc = document.createElement('label');
  labelDesc.innerHTML = 'Description';
  labelDesc.setAttribute('for', 'desc');
  column1.appendChild(labelDesc);
  const inputDesc = document.createElement('textarea');
  inputDesc.innerHTML = desc;
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
  inputDue.setAttribute('value', date);
  column1.appendChild(inputDue);

  const labelPrior = document.createElement('label');
  labelPrior.innerHTML = 'Priority';
  labelPrior.setAttribute('for', 'prior');
  column2.appendChild(labelPrior);
  // const inputPrior = document.createElement('input');
  // inputPrior.type = 'color';
  // inputPrior.setAttribute('id', 'prior');
  // column2.appendChild(inputPrior);
  const inputPrior = document.createElement('select');
  inputPrior.classList.add('input-proyect');
  column2.appendChild(inputPrior);
  const defaultPriority = document.createElement('option');
  defaultPriority.innerHTML = '- -Select Priority- -';
  inputPrior.appendChild(defaultPriority);
  const greenPriority = document.createElement('option');
  greenPriority.innerHTML = 'Green';
  inputPrior.appendChild(greenPriority);
  const yellowPriority = document.createElement('option');
  yellowPriority.innerHTML = 'Yellow';
  inputPrior.appendChild(yellowPriority);
  const redPriority = document.createElement('option');
  redPriority.innerHTML = 'Red';
  inputPrior.appendChild(redPriority);

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
}


/***/ }),

/***/ "./src/expanded-item.js":
/*!******************************!*\
  !*** ./src/expanded-item.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _build_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-item */ "./src/build-item.js");
/* harmony import */ var _display_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-item */ "./src/display-item.js");
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.js */ "./src/edit.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove.js */ "./src/remove.js");
/* harmony import */ var _img_edit_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/edit.svg */ "./src/img/edit.svg");







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
  title.classList.add('expand-title');
  title.innerHTML = obj.title;
  div.appendChild(title);

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

  const edit = document.createElement('button');
  edit.classList.add('edit-button');
  div.appendChild(edit);
  const editimg = new Image(22);
  editimg.src = _img_edit_svg__WEBPACK_IMPORTED_MODULE_5__;
  edit.classList.add('edit-button');
  edit.appendChild(editimg);

  edit.addEventListener('click', () => {
    (0,_remove_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj);
    (0,_edit_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj.title, obj.description, obj.dueDate);
  });

  expand.addEventListener('click', () => {
    div.classList.remove('item-expand');
    div.classList.add('item');
    div.innerHTML = '';
    const mid = document.querySelector('.mid-content');
    mid.innerHTML = '';
    (0,_display_item__WEBPACK_IMPORTED_MODULE_1__["default"])(_todo_item__WEBPACK_IMPORTED_MODULE_2__.Items, t);
  });
}


/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    // const inputPrior = document.createElement('input');
    // inputPrior.type = 'color';
    // inputPrior.setAttribute('id', 'prior');
    // column2.appendChild(inputPrior);
    const inputPrior = document.createElement('select');
    inputPrior.classList.add('input-proyect');
    column2.appendChild(inputPrior);
    const defaultPriority = document.createElement('option');
    defaultPriority.innerHTML = '- -Select Priority- -';
    inputPrior.appendChild(defaultPriority);
    const greenPriority = document.createElement('option');
    greenPriority.innerHTML = 'Green';
    inputPrior.appendChild(greenPriority);
    const yellowPriority = document.createElement('option');
    yellowPriority.innerHTML = 'Yellow';
    inputPrior.appendChild(yellowPriority);
    const redPriority = document.createElement('option');
    redPriority.innerHTML = 'Red';
    inputPrior.appendChild(redPriority);

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

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./src/proyect.js":
/*!************************!*\
  !*** ./src/proyect.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_localStorage_js__WEBPACK_IMPORTED_MODULE_6__);








/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(item) {
  _todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items.splice(_todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items.indexOf(item), 1);
  const mid = document.querySelector('.mid-content');
  mid.innerHTML = '';
  (0,_display_item_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items, 'All');
  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_6__.resetStorage)(_todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items, 'items');
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item.js */ "./src/todo-item.js");
/* harmony import */ var _display_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-item.js */ "./src/display-item.js");
/* harmony import */ var _proyect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proyect.js */ "./src/proyect.js");
/* harmony import */ var _img_plus_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/plus.png */ "./src/img/plus.png");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const sidebar = document.querySelector('.side-bar');

  const proyectsCont = document.createElement('div');
  proyectsCont.classList.add('item');
  const proyects = document.createElement('h3');
  proyects.innerHTML = 'Proyects';
  proyectsCont.classList.add('side-proyect');
  proyectsCont.appendChild(proyects);

  const proyectBtn = document.createElement('button');
  const plus = new Image();
  plus.src = _img_plus_png__WEBPACK_IMPORTED_MODULE_3__;
  plus.classList.add('dark-mode-img');
  proyectBtn.appendChild(plus);
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

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(arr) {
  const sort = document.querySelector('#sort');
  const mid = document.querySelector('.mid-content');
  mid.innerHTML = '';
  console.log(sort.value);

  if (sort.value === 'Red') {
    arr = arr.sort((a, b) => {
      if (a.priority === 'Red' && b.priority === 'Yellow') {
        return -1;
      }
      if (a.priority === 'Red' && b.priority === 'Green') {
        return -1;
      }
      if (a.priority === 'Yellow' && b.priority === 'Green') {
        return -1;
      }
    });
  } else {
    arr = arr.sort((a, b) => {
      if (a.priority === 'Yellow' && b.priority === 'Red') {
        return -1;
      }
      if (a.priority === 'Green' && b.priority === 'Red') {
        return -1;
      }
      if (a.priority === 'Green' && b.priority === 'Yellow') {
        return -1;
      }
    });
  }
  console.log('sorted', arr);
}


/***/ }),

/***/ "./src/todo-item.js":
/*!**************************!*\
  !*** ./src/todo-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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




/***/ }),

/***/ "./src/img/edit.png":
/*!**************************!*\
  !*** ./src/img/edit.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "edit.png";

/***/ }),

/***/ "./src/img/edit.svg":
/*!**************************!*\
  !*** ./src/img/edit.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "edit.svg";

/***/ }),

/***/ "./src/img/moon.png":
/*!**************************!*\
  !*** ./src/img/moon.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "moon.png";

/***/ }),

/***/ "./src/img/plus.png":
/*!**************************!*\
  !*** ./src/img/plus.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "plus.png";

/***/ }),

/***/ "./src/img/sun.png":
/*!*************************!*\
  !*** ./src/img/sun.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sun.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sort.js */ "./src/sort.js");
/* harmony import */ var _dark_mode_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dark-mode.js */ "./src/dark-mode.js");










const welcome = new _todo_item_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Welcome!', '', '', 'e');

welcome.addItem(welcome);

(0,_dark_mode_js__WEBPACK_IMPORTED_MODULE_7__["default"])();

const sortSelect = document.querySelector('#sort');
sortSelect.addEventListener('click', () => {
  (0,_sort_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_todo_item_js__WEBPACK_IMPORTED_MODULE_1__.Items);
  (0,_display_item_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_todo_item_js__WEBPACK_IMPORTED_MODULE_1__.Items, 'All');
});

(0,_display_item_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_todo_item_js__WEBPACK_IMPORTED_MODULE_1__.Items, 'All');
(0,_form_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_side_bar_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_add_proyect_js__WEBPACK_IMPORTED_MODULE_5__["default"])();

console.log(_todo_item_js__WEBPACK_IMPORTED_MODULE_1__.Items);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLE9BQU8sU0FBUyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLFNBQVMsTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxX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Ozs7Ozs7Ozs7O1VDaEJqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDYTtBQUNLO0FBQ0M7QUFDWDtBQUNPO0FBQ007QUFDYjtBQUNTOztBQUV0QyxvQkFBb0IscURBQUk7O0FBRXhCOztBQUVBLHlEQUFROztBQUVSO0FBQ0E7QUFDQSxFQUFFLG9EQUFJLENBQUMsZ0RBQUs7QUFDWixFQUFFLDREQUFPLENBQUMsZ0RBQUs7QUFDZixDQUFDOztBQUVELDREQUFPLENBQUMsZ0RBQUs7QUFDYixvREFBSTtBQUNKLHdEQUFPO0FBQ1AsMkRBQVU7O0FBRVYsWUFBWSxnREFBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGQtcHJveWVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2J1aWxkLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kYXJrLW1vZGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LXByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWRpdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2V4cGFuZGVkLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJveWVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JlbW92ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NpZGUtYmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc29ydC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8taXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJvcmRlcjogaHNsYSgwLCAwJSwgNTAlLCAwLjM3KTtcXG4gIC8qIC0tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAyMDAyNCwgIzA5MDk3OSwgIzAwZDRmZik7ICovXFxuICAtLWdyYWRpZW50OiAjMDkwOTY4O1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMmZyO1xcblxcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuXFxuLmRhcmstbW9kZS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5lZGl0LWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5kYXJrLW1vZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTkxOTtcXG4gIGNvbG9yOiAjZjEwMDg2O1xcbn1cXG4uZGFyay1tb2RlLWltZyB7XFxuICB3aWR0aDogMjdweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQpO1xcblxcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5taWRkbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyO1xcbn1cXG5cXG4ubWlkLWhlYWRlcixcXG4ubWlkLWhlYWRlci1kYXJrIHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWlkLWhlYWRlci1kYXJrIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMGYwZjBmO1xcbn1cXG5cXG4ubWlkLWhlYWRlci1kYXJrLFxcbi5oZWFkZXItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xcblxcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWlkLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudCk7XFxufVxcblxcbi5hZGQtaXRlbSB7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLnNpZGUtYmFyIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxufVxcblxcbi5taWQtY29udGVudCxcXG4uc2lkZS1iYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCA3MHB4O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDcwcHg7XFxufVxcblxcbi5pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5pdGVtLXRpdGxlIHtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5cXG4uaXRlbS1leHBhbmQge1xcbiAgZ3JpZC1yb3c6IHNwYW4gNTtcXG4gIGZvbnQtd2VpZ2h0OiAxLjFlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgNTAlKTtcXG4gIGdyaWQtYXV0by1yb3dzOiAzNTBweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbn1cXG5cXG4vKiAubm90ZSB7XFxuICBjb2xvcjogIzAwZDRmZjtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1vdmVyZmxvdzogZTtcXG59ICovXFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDUwJTtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5ub3RlIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgbWluLXdpZHRoOiAxNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi5yZW1vdmUge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZW1vdmU6aG92ZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDNweDtcXG59XFxuXFxuLnNpZGUtcHJveWVjdCxcXG4uZXhwYW5kQnRuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmV4cGFuZEJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI1cHg7XFxuICBsZWZ0OiA1cHg7XFxuXFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5leHBhbmRCdG46aG92ZXIsXFxuLmVkaXQtYnV0dG9uOmhvdmVyIHtcXG4gIHRvcDogMjJweDtcXG59XFxuXFxuLmV4cGFuZC10aXRsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI1cHg7XFxuICBsZWZ0OiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbn1cXG5cXG4uc2lkZS1wcm95ZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlcik7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb3llY3QtYnRuIHtcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbiNwcm95ZWN0LWJ0biB7XFxuICBwYWRkaW5nOiAxcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJveWVjdC1mb3JtIHtcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNjEsIDE2MSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pbnB1dC1wcm95ZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbiNzb3J0LWxhYmVsIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc29ydC1zZWxlY3Qge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcbi8qIC5wcmlvcml0eSB7XFxuICB3aWR0aDogNSU7XFxuICBoZWlnaHQ6IDUwJTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufSAqL1xcblxcbi5lZGl0LWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjVweDtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5zaWRlLXByb3llY3Qge1xcbiAgICBncmlkLXJvdzogc3BhbiAyO1xcbiAgfVxcblxcbiAgLml0ZW0tZXhwYW5kIHtcXG4gICAgLyogZ3JpZC1yb3c6IHNwYW4gMTA7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAuZm9ybS1jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogc3BhbiAxMDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdDQUFnQztFQUNoQyxzRUFBc0U7RUFDdEUsbUJBQW1CO0FBQ3JCOztBQUlBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXOztFQUVYLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCOztFQUU3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjs7RUFFM0IsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1Qjs7RUFFdkIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyw0QkFBNEI7QUFDOUI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSx5QkFBeUI7O0VBRXpCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQ0FBc0M7O0VBRXRDLGVBQWU7O0VBRWYsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYiw0Q0FBNEM7RUFDNUMscUJBQXFCO0VBQ3JCLGVBQWU7O0VBRWYsa0JBQWtCOztFQUVsQixzQ0FBc0M7QUFDeEM7O0FBRUE7Ozs7O0dBS0c7O0FBRUg7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTOztFQUVULGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjtBQUNBOzs7OztHQUtHOztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXOztFQUVYLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJvcmRlcjogaHNsYSgwLCAwJSwgNTAlLCAwLjM3KTtcXG4gIC8qIC0tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAyMDAyNCwgIzA5MDk3OSwgIzAwZDRmZik7ICovXFxuICAtLWdyYWRpZW50OiAjMDkwOTY4O1xcbn1cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAyZnI7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbn1cXG5cXG4uZGFyay1tb2RlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmVkaXQtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmRhcmstbW9kZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xcbiAgY29sb3I6ICNmMTAwODY7XFxufVxcbi5kYXJrLW1vZGUtaW1nIHtcXG4gIHdpZHRoOiAyN3B4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudCk7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1pZGRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxufVxcblxcbi5taWQtaGVhZGVyLFxcbi5taWQtaGVhZGVyLWRhcmsge1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5taWQtaGVhZGVyLWRhcmsge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwZjBmMGY7XFxufVxcblxcbi5taWQtaGVhZGVyLWRhcmssXFxuLmhlYWRlci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5taWQtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50KTtcXG59XFxuXFxuLmFkZC1pdGVtIHtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uc2lkZS1iYXIge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG59XFxuXFxuLm1pZC1jb250ZW50LFxcbi5zaWRlLWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDcwcHg7XFxuICBncmlkLWF1dG8tcm93czogNzBweDtcXG59XFxuXFxuLml0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG5cXG4gIHBhZGRpbmc6IDAgMTBweDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLml0ZW0tdGl0bGUge1xcbiAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbi5pdGVtLWV4cGFuZCB7XFxuICBncmlkLXJvdzogc3BhbiA1O1xcbiAgZm9udC13ZWlnaHQ6IDEuMWVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCA1MCUpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDM1MHB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxufVxcblxcbi8qIC5ub3RlIHtcXG4gIGNvbG9yOiAjMDBkNGZmO1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LW92ZXJmbG93OiBlO1xcbn0gKi9cXG5cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogNTAlO1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLm5vdGUge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLnJlbW92ZSB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlbW92ZTpob3ZlciB7XFxuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcbn1cXG5cXG4uc2lkZS1wcm95ZWN0LFxcbi5leHBhbmRCdG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhwYW5kQnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjVweDtcXG4gIGxlZnQ6IDVweDtcXG5cXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmV4cGFuZEJ0bjpob3ZlcixcXG4uZWRpdC1idXR0b246aG92ZXIge1xcbiAgdG9wOiAyMnB4O1xcbn1cXG5cXG4uZXhwYW5kLXRpdGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjVweDtcXG4gIGxlZnQ6IDMwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcblxcbi5zaWRlLXByb3llY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJveWVjdC1idG4ge1xcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuI3Byb3llY3QtYnRuIHtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wcm95ZWN0LWZvcm0ge1xcbiAgZ3JpZC1yb3c6IHNwYW4gMjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE2MSwgMTYxKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmlucHV0LXByb3llY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuI3NvcnQtbGFiZWwge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zb3J0LXNlbGVjdCB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuLyogLnByaW9yaXR5IHtcXG4gIHdpZHRoOiA1JTtcXG4gIGhlaWdodDogNTAlO1xcblxcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59ICovXFxuXFxuLmVkaXQtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIHJpZ2h0OiAyNXB4O1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLnNpZGUtcHJveWVjdCB7XFxuICAgIGdyaWQtcm93OiBzcGFuIDI7XFxuICB9XFxuXFxuICAuaXRlbS1leHBhbmQge1xcbiAgICAvKiBncmlkLXJvdzogc3BhbiAxMDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gIH1cXG5cXG4gIC5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiBzcGFuIDEwO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBkaXNwbGF5UHJveWVjdCBmcm9tICcuL2Rpc3BsYXktcHJvamVjdHMuanMnO1xuaW1wb3J0IHByb3llY3QgZnJvbSAnLi9wcm95ZWN0LmpzJztcbmltcG9ydCB7IHByb3llY3RzIH0gZnJvbSAnLi9wcm95ZWN0LmpzJztcblxuLy8gbGV0IHByb3llY3RzID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLWJhcicpO1xuICBjb25zdCBwcm95ZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb3llY3QtYnRuJyk7XG5cbiAgcHJveWVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaWRlLXByb3llY3QnKTtcbiAgICAvLyBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm95ZWN0LWZvcm0nKTtcbiAgICBzaWRlYmFyLmluc2VydEJlZm9yZShmb3JtQ29udGFpbmVyLCBzaWRlYmFyLmNoaWxkcmVuWzFdKTtcblxuICAgIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsVGl0bGUuaW5uZXJIVE1MID0gJ1RpdGxlJztcbiAgICBsYWJlbFRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbFRpdGxlKTtcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dFRpdGxlLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIDIwKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xuXG4gICAgY29uc3QgYnV0dG9uQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udCk7XG5cbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGQuaW5uZXJIVE1MID0gJysnO1xuICAgIGFkZC5jbGFzc0xpc3QuYWRkKCdwcm95ZWN0LWJ0bicpO1xuICAgIGJ1dHRvbkNvbnQuYXBwZW5kQ2hpbGQoYWRkKTtcblxuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbC5pbm5lckhUTUwgPSAneCc7XG4gICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ3Byb3llY3QtYnRuJyk7XG4gICAgYnV0dG9uQ29udC5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc2lkZWJhci5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb3kgPSBuZXcgcHJveWVjdChpbnB1dFRpdGxlLnZhbHVlKTtcbiAgICAgIHByb3kuYWRkSXRlbShwcm95KTtcblxuICAgICAgY29uc29sZS5sb2coJ3RoaXM6ICcsIHByb3llY3RzLmluZGV4T2YocHJveSkpO1xuICAgICAgZGlzcGxheVByb3llY3QocHJveWVjdHMpO1xuICAgICAgc2lkZWJhci5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIHByb3llY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzaWRlYmFyLnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gZXhwb3J0IHsgcHJveWVjdHMgfTtcbiIsImltcG9ydCBJdGVtIGZyb20gJy4vdG9kby1pdGVtLmpzJztcbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vZGlzcGxheS1pdGVtLmpzJztcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSAnLi90b2RvLWl0ZW0uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgcHJveWVjdCkge1xuICBsZXQgaXRlbSA9IG5ldyBJdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksIHByb3llY3QpO1xuICBpdGVtLmFkZEl0ZW0oaXRlbSk7XG5cbiAgZGlzcGxheShJdGVtcywgJ0FsbCcpO1xuICBjb25zb2xlLmxvZygneWVzJywgSXRlbXMpO1xufVxuIiwiaW1wb3J0IHN1biBmcm9tICcuL2ltZy9zdW4ucG5nJztcbmltcG9ydCBtb29uIGZyb20gJy4vaW1nL21vb24ucG5nJztcblxuY29uc3QgbWlkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWQtY29udGVudCcpO1xuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLWJhcicpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuY29uc3QgbWlkSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZC1oZWFkZXInKTtcbmNvbnN0IGRhcmtCdG5JbWcgPSBuZXcgSW1hZ2UoKTtcbmRhcmtCdG5JbWcuc3JjID0gc3VuO1xuZGFya0J0bkltZy5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUtaW1nJyk7XG5jb25zdCBsaWdodEJ0bkltZyA9IG5ldyBJbWFnZSgpO1xubGlnaHRCdG5JbWcuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlLWltZycpO1xubGlnaHRCdG5JbWcuc3JjID0gbW9vbjtcblxubGV0IGRhcmsgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBkYXJrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstbW9kZS1idG4nKTtcblxuICBkYXJrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkYXJrID09PSBmYWxzZSkge1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcicpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1kYXJrJyk7XG4gICAgICBtaWRIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWlkLWhlYWRlcicpO1xuICAgICAgbWlkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21pZC1oZWFkZXItZGFyaycpO1xuICAgICAgbWlkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgICAgbWlkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XG4gICAgICBkYXJrQnRuLmlubmVySFRNTCA9ICcnO1xuICAgICAgZGFya0J0bi5hcHBlbmRDaGlsZChkYXJrQnRuSW1nKTtcblxuICAgICAgZGFyayA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItZGFyaycpO1xuICAgICAgbWlkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21pZC1oZWFkZXInKTtcbiAgICAgIG1pZEhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdtaWQtaGVhZGVyLWRhcmsnKTtcbiAgICAgIG1pZEhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLW1vZGUnKTtcbiAgICAgIG1pZENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJyk7XG4gICAgICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstbW9kZScpO1xuICAgICAgZGFya0J0bi5pbm5lckhUTUwgPSAnJztcbiAgICAgIGRhcmtCdG4uYXBwZW5kQ2hpbGQobGlnaHRCdG5JbWcpO1xuXG4gICAgICBkYXJrID0gZmFsc2U7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCByZW1vdmVzIGZyb20gJy4vcmVtb3ZlLmpzJztcbmltcG9ydCBleHBhbmRlZEl0ZW0gZnJvbSAnLi9leHBhbmRlZC1pdGVtLmpzJztcbmltcG9ydCBzb3J0IGZyb20gJy4vc29ydC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChsaXN0LCB0aXRsZSkge1xuICBzb3J0KGxpc3QpO1xuICBpZiAodGl0bGUgPT09ICdBbGwnKSB7XG4gICAgbGlzdC5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBjb25zdCBtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkLWNvbnRlbnQnKTtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgbWlkLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IGkudGl0bGU7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXRpdGxlJyk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGR1ZURhdGUuaW5uZXJIVE1MID0gaS5kdWVEYXRlO1xuICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXRpdGxlJyk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgaXRlbS5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkICcgKyBpLnByaW9yaXR5O1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgICAgcmVtb3ZlLmlubmVySFRNTCA9ICctJztcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgICAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kQnRuJyk7XG4gICAgICBleHBhbmQuaW5uZXJIVE1MID0gJz4nO1xuICAgICAgaXRlbS5wcmVwZW5kKGV4cGFuZCk7XG5cbiAgICAgIGV4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtLWV4cGFuZCcpO1xuXG4gICAgICAgIGV4cGFuZGVkSXRlbShpdGVtLCBpLCAnQWxsJyk7XG4gICAgICB9KTtcblxuICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW1vdmVzKGkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbGlzdC5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBpZiAoaS5wcm95ZWN0ID09PSB0aXRsZSkge1xuICAgICAgICBjb25zdCBtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkLWNvbnRlbnQnKTtcblxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBtaWQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGkudGl0bGU7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnKTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZHVlRGF0ZS5pbm5lckhUTUwgPSBpLmR1ZURhdGU7XG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnaXRlbS10aXRsZScpO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGl0ZW0uc3R5bGUuYm9yZGVyQm90dG9tID0gJzFweCBzb2xpZCAnICsgaS5wcmlvcml0eTtcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmRCdG4nKTtcbiAgICAgICAgZXhwYW5kLmlubmVySFRNTCA9ICc+JztcbiAgICAgICAgaXRlbS5wcmVwZW5kKGV4cGFuZCk7XG5cbiAgICAgICAgZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbS1leHBhbmQnKTtcblxuICAgICAgICAgIGV4cGFuZGVkSXRlbShpdGVtLCBpLCBpLnByb3llY3QpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0aXRsZSAnLCBpLnRpdGxlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcbiAgICAgICAgcmVtb3ZlLmlubmVySFRNTCA9ICctJztcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChyZW1vdmUpO1xuXG4gICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICByZW1vdmVzKGkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcHJveWVjdFJlbW92ZSB9IGZyb20gJy4vcmVtb3ZlLmpzJztcbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vZGlzcGxheS1pdGVtLmpzJztcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSAnLi90b2RvLWl0ZW0uanMnO1xuaW1wb3J0IHNpZGVCYXIgZnJvbSAnLi9zaWRlLWJhci5qcyc7XG5pbXBvcnQgYWRkUHJveWVjdCBmcm9tICcuL2FkZC1wcm95ZWN0LmpzJztcbmltcG9ydCB7IHByb3llY3RzIH0gZnJvbSAnLi9wcm95ZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGxpc3QpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLWJhcicpO1xuICBzaWRlYmFyLmlubmVySFRNTCA9ICcnO1xuICBzaWRlQmFyKCk7XG4gIGFkZFByb3llY3QoKTtcbiAgbGlzdC5mb3JFYWNoKChpKSA9PiB7XG4gICAgY29uc3QgbWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZC1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBwcm95ZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJveWVjdC5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgcHJveWVjdC5jbGFzc0xpc3QuYWRkKCdzaWRlLXByb3llY3QnKTtcbiAgICBwcm95ZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBpLnRpdGxlKTtcbiAgICBwcm95ZWN0LmlubmVyVGV4dCA9IGkudGl0bGU7XG4gICAgcHJveWVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgaS50aXRsZSk7XG5cbiAgICBwcm95ZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbWlkLmlubmVySFRNTCA9ICcnO1xuICAgICAgZGlzcGxheShJdGVtcywgaS50aXRsZSk7XG4gICAgICBjb25zb2xlLmxvZyhwcm95ZWN0LnRleHRDb250ZW50KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcbiAgICByZW1vdmUuaW5uZXJIVE1MID0gJy0nO1xuICAgIHByb3llY3QuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHByb3llY3RSZW1vdmUoaSk7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygncHJveWVjdHM6ICcsIHByb3llY3RzKTtcblxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJveWVjdCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGJ1aWxkIGZyb20gJy4vYnVpbGQtaXRlbS5qcyc7XG5pbXBvcnQgeyBwcm95ZWN0cyB9IGZyb20gJy4vcHJveWVjdC5qcyc7XG5pbXBvcnQgZWRpdHN2ZyBmcm9tICcuL2ltZy9lZGl0LnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0aXRsZSwgZGVzYywgZGF0ZSkge1xuICBjb25zdCBtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkLWNvbnRlbnQnKTtcbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLWV4cGFuZCcpO1xuICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG4gIG1pZC5wcmVwZW5kKGZvcm1Db250YWluZXIpO1xuXG4gIGNvbnN0IGNvbHVtbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2x1bW4xKTtcbiAgY29uc3QgY29sdW1uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbHVtbjIpO1xuICBjb2x1bW4xLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbicpO1xuICBjb2x1bW4yLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbicpO1xuXG4gIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbFRpdGxlLmlubmVySFRNTCA9ICdUaXRsZSc7XG4gIGxhYmVsVGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgY29sdW1uMS5hcHBlbmRDaGlsZChsYWJlbFRpdGxlKTtcbiAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0VGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGl0bGUpO1xuICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIDIwKTtcbiAgY29sdW1uMS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcblxuICBjb25zdCBsYWJlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbERlc2MuaW5uZXJIVE1MID0gJ0Rlc2NyaXB0aW9uJztcbiAgbGFiZWxEZXNjLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2MnKTtcbiAgY29sdW1uMS5hcHBlbmRDaGlsZChsYWJlbERlc2MpO1xuICBjb25zdCBpbnB1dERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBpbnB1dERlc2MuaW5uZXJIVE1MID0gZGVzYztcbiAgaW5wdXREZXNjLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgMTAwKTtcbiAgaW5wdXREZXNjLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnMTAwIG1heC4nKTtcbiAgaW5wdXREZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzYycpO1xuICBjb2x1bW4xLmFwcGVuZENoaWxkKGlucHV0RGVzYyk7XG5cbiAgY29uc3QgbGFiZWxEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbER1ZS5pbm5lckhUTUwgPSAnRHVlIERhdGUnO1xuICBsYWJlbER1ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWUnKTtcbiAgY29sdW1uMS5hcHBlbmRDaGlsZChsYWJlbER1ZSk7XG4gIGNvbnN0IGlucHV0RHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXREdWUudHlwZSA9ICdkYXRlJztcbiAgaW5wdXREdWUuc2V0QXR0cmlidXRlKCdpZCcsICdkdWUnKTtcbiAgaW5wdXREdWUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGUpO1xuICBjb2x1bW4xLmFwcGVuZENoaWxkKGlucHV0RHVlKTtcblxuICBjb25zdCBsYWJlbFByaW9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWxQcmlvci5pbm5lckhUTUwgPSAnUHJpb3JpdHknO1xuICBsYWJlbFByaW9yLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yJyk7XG4gIGNvbHVtbjIuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcik7XG4gIC8vIGNvbnN0IGlucHV0UHJpb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAvLyBpbnB1dFByaW9yLnR5cGUgPSAnY29sb3InO1xuICAvLyBpbnB1dFByaW9yLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3InKTtcbiAgLy8gY29sdW1uMi5hcHBlbmRDaGlsZChpbnB1dFByaW9yKTtcbiAgY29uc3QgaW5wdXRQcmlvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBpbnB1dFByaW9yLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXByb3llY3QnKTtcbiAgY29sdW1uMi5hcHBlbmRDaGlsZChpbnB1dFByaW9yKTtcbiAgY29uc3QgZGVmYXVsdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGRlZmF1bHRQcmlvcml0eS5pbm5lckhUTUwgPSAnLSAtU2VsZWN0IFByaW9yaXR5LSAtJztcbiAgaW5wdXRQcmlvci5hcHBlbmRDaGlsZChkZWZhdWx0UHJpb3JpdHkpO1xuICBjb25zdCBncmVlblByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGdyZWVuUHJpb3JpdHkuaW5uZXJIVE1MID0gJ0dyZWVuJztcbiAgaW5wdXRQcmlvci5hcHBlbmRDaGlsZChncmVlblByaW9yaXR5KTtcbiAgY29uc3QgeWVsbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgeWVsbG93UHJpb3JpdHkuaW5uZXJIVE1MID0gJ1llbGxvdyc7XG4gIGlucHV0UHJpb3IuYXBwZW5kQ2hpbGQoeWVsbG93UHJpb3JpdHkpO1xuICBjb25zdCByZWRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICByZWRQcmlvcml0eS5pbm5lckhUTUwgPSAnUmVkJztcbiAgaW5wdXRQcmlvci5hcHBlbmRDaGlsZChyZWRQcmlvcml0eSk7XG5cbiAgY29uc3QgbGFiZWxwcm95ZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWxwcm95ZWN0LmlubmVySFRNTCA9ICdQcm95ZWN0JztcbiAgbGFiZWxwcm95ZWN0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb3llY3QnKTtcbiAgY29sdW1uMi5hcHBlbmRDaGlsZChsYWJlbHByb3llY3QpO1xuICBjb25zdCBpbnB1dFByb3llY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgaW5wdXRQcm95ZWN0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXByb3llY3QnKTtcbiAgLy8gaW5wdXRQcm95ZWN0LnR5cGUgPSAndGV4dCc7XG4gIGlucHV0UHJveWVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb3llY3QnKTtcbiAgY29sdW1uMi5hcHBlbmRDaGlsZChpbnB1dFByb3llY3QpO1xuXG4gIGNvbnN0IGRlZmF1bHRTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgZGVmYXVsdFNlbGVjdC5pbm5lckhUTUwgPSAnLSAtU2VsZWN0IGEgcHJveWVjdC0gLSc7XG4gIGlucHV0UHJveWVjdC5hcHBlbmRDaGlsZChkZWZhdWx0U2VsZWN0KTtcblxuICBwcm95ZWN0cy5mb3JFYWNoKChwcm95ZWN0KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgc2VsZWN0LmlubmVySFRNTCA9IHByb3llY3QudGl0bGU7XG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm95ZWN0LnRpdGxlKTtcbiAgICBpbnB1dFByb3llY3QuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZC5pbm5lckhUTUwgPSAnK0FkZCc7XG4gIGNvbHVtbjIuYXBwZW5kQ2hpbGQoYWRkKTtcblxuICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FuY2VsLmlubmVySFRNTCA9ICdDYW5jZWwnO1xuICBjb2x1bW4yLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1pZC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgfSk7XG5cbiAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1pZC5pbm5lckhUTUwgPSAnJztcbiAgICBidWlsZChcbiAgICAgIGlucHV0VGl0bGUudmFsdWUsXG4gICAgICBpbnB1dERlc2MudmFsdWUsXG4gICAgICBpbnB1dER1ZS52YWx1ZSxcbiAgICAgIGlucHV0UHJpb3IudmFsdWUsXG4gICAgICBpbnB1dFByb3llY3QudmFsdWVcbiAgICApO1xuICB9KTtcbn1cbiIsImltcG9ydCBidWlsZEl0ZW0gZnJvbSAnLi9idWlsZC1pdGVtJztcbmltcG9ydCBkaXNwbGF5SXRlbSBmcm9tICcuL2Rpc3BsYXktaXRlbSc7XG5pbXBvcnQgSXRlbSwgeyBJdGVtcyB9IGZyb20gJy4vdG9kby1pdGVtJztcbmltcG9ydCBlZGl0MSBmcm9tICcuL2VkaXQuanMnO1xuaW1wb3J0IHJlbW92ZXMgZnJvbSAnLi9yZW1vdmUuanMnO1xuaW1wb3J0IGVkaXRzdmcgZnJvbSAnLi9pbWcvZWRpdC5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGl2LCBvYmosIHQpIHtcbiAgZGl2LmlubmVySFRNTCA9ICcnO1xuICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnaXRlbScpO1xuICBjb25zdCBjb2x1bW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5hcHBlbmRDaGlsZChjb2x1bW4xKTtcbiAgY29sdW1uMS5jbGFzc0xpc3QuYWRkKCdjb2x1bW4nKTtcbiAgY29uc3QgY29sdW1uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY29sdW1uMik7XG4gIGNvbHVtbjIuY2xhc3NMaXN0LmFkZCgnY29sdW1uJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnZXhwYW5kLXRpdGxlJyk7XG4gIHRpdGxlLmlubmVySFRNTCA9IG9iai50aXRsZTtcbiAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdub3RlJyk7XG4gIERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gb2JqLmRlc2NyaXB0aW9uO1xuICBjb2x1bW4xLmFwcGVuZENoaWxkKERlc2NyaXB0aW9uKTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGUuaW5uZXJIVE1MID0gb2JqLmR1ZURhdGU7XG4gIGNvbHVtbjIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgJyArIG9iai5wcmlvcml0eTtcbiAgY29sdW1uMi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmRCdG4nKTtcbiAgZXhwYW5kLmlubmVySFRNTCA9ICfiiKgnO1xuICBkaXYucHJlcGVuZChleHBhbmQpO1xuXG4gIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0LWJ1dHRvbicpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gIGNvbnN0IGVkaXRpbWcgPSBuZXcgSW1hZ2UoMjIpO1xuICBlZGl0aW1nLnNyYyA9IGVkaXRzdmc7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1idXR0b24nKTtcbiAgZWRpdC5hcHBlbmRDaGlsZChlZGl0aW1nKTtcblxuICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZXMob2JqKTtcbiAgICBlZGl0MShvYmoudGl0bGUsIG9iai5kZXNjcmlwdGlvbiwgb2JqLmR1ZURhdGUpO1xuICB9KTtcblxuICBleHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2l0ZW0tZXhwYW5kJyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgbWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZC1jb250ZW50Jyk7XG4gICAgbWlkLmlubmVySFRNTCA9ICcnO1xuICAgIGRpc3BsYXlJdGVtKEl0ZW1zLCB0KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgYnVpbGQgZnJvbSAnLi9idWlsZC1pdGVtLmpzJztcbmltcG9ydCB7IHByb3llY3RzIH0gZnJvbSAnLi9wcm95ZWN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0nKTtcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZC1jb250ZW50Jyk7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1leHBhbmQnKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG4gICAgbWlkLnByZXBlbmQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjb2x1bW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2x1bW4xKTtcbiAgICBjb25zdCBjb2x1bW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2x1bW4yKTtcbiAgICBjb2x1bW4xLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbicpO1xuICAgIGNvbHVtbjIuY2xhc3NMaXN0LmFkZCgnY29sdW1uJyk7XG5cbiAgICBjb25zdCBsYWJlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbFRpdGxlLmlubmVySFRNTCA9ICdUaXRsZSc7XG4gICAgbGFiZWxUaXRsZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgIGNvbHVtbjEuYXBwZW5kQ2hpbGQobGFiZWxUaXRsZSk7XG4gICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRUaXRsZS50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAyMCk7XG4gICAgY29sdW1uMS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcblxuICAgIGNvbnN0IGxhYmVsRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWxEZXNjLmlubmVySFRNTCA9ICdEZXNjcmlwdGlvbic7XG4gICAgbGFiZWxEZXNjLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2MnKTtcbiAgICBjb2x1bW4xLmFwcGVuZENoaWxkKGxhYmVsRGVzYyk7XG4gICAgY29uc3QgaW5wdXREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBpbnB1dERlc2Muc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAxMDApO1xuICAgIGlucHV0RGVzYy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJzEwMCBtYXguJyk7XG4gICAgaW5wdXREZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzYycpO1xuICAgIGNvbHVtbjEuYXBwZW5kQ2hpbGQoaW5wdXREZXNjKTtcblxuICAgIGNvbnN0IGxhYmVsRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbER1ZS5pbm5lckhUTUwgPSAnRHVlIERhdGUnO1xuICAgIGxhYmVsRHVlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZScpO1xuICAgIGNvbHVtbjEuYXBwZW5kQ2hpbGQobGFiZWxEdWUpO1xuICAgIGNvbnN0IGlucHV0RHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dER1ZS50eXBlID0gJ2RhdGUnO1xuICAgIGlucHV0RHVlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlJyk7XG4gICAgY29sdW1uMS5hcHBlbmRDaGlsZChpbnB1dER1ZSk7XG5cbiAgICBjb25zdCBsYWJlbFByaW9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbFByaW9yLmlubmVySFRNTCA9ICdQcmlvcml0eSc7XG4gICAgbGFiZWxQcmlvci5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcicpO1xuICAgIGNvbHVtbjIuYXBwZW5kQ2hpbGQobGFiZWxQcmlvcik7XG4gICAgLy8gY29uc3QgaW5wdXRQcmlvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgLy8gaW5wdXRQcmlvci50eXBlID0gJ2NvbG9yJztcbiAgICAvLyBpbnB1dFByaW9yLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3InKTtcbiAgICAvLyBjb2x1bW4yLmFwcGVuZENoaWxkKGlucHV0UHJpb3IpO1xuICAgIGNvbnN0IGlucHV0UHJpb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBpbnB1dFByaW9yLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXByb3llY3QnKTtcbiAgICBjb2x1bW4yLmFwcGVuZENoaWxkKGlucHV0UHJpb3IpO1xuICAgIGNvbnN0IGRlZmF1bHRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGRlZmF1bHRQcmlvcml0eS5pbm5lckhUTUwgPSAnLSAtU2VsZWN0IFByaW9yaXR5LSAtJztcbiAgICBpbnB1dFByaW9yLmFwcGVuZENoaWxkKGRlZmF1bHRQcmlvcml0eSk7XG4gICAgY29uc3QgZ3JlZW5Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGdyZWVuUHJpb3JpdHkuaW5uZXJIVE1MID0gJ0dyZWVuJztcbiAgICBpbnB1dFByaW9yLmFwcGVuZENoaWxkKGdyZWVuUHJpb3JpdHkpO1xuICAgIGNvbnN0IHllbGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgeWVsbG93UHJpb3JpdHkuaW5uZXJIVE1MID0gJ1llbGxvdyc7XG4gICAgaW5wdXRQcmlvci5hcHBlbmRDaGlsZCh5ZWxsb3dQcmlvcml0eSk7XG4gICAgY29uc3QgcmVkUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICByZWRQcmlvcml0eS5pbm5lckhUTUwgPSAnUmVkJztcbiAgICBpbnB1dFByaW9yLmFwcGVuZENoaWxkKHJlZFByaW9yaXR5KTtcblxuICAgIGNvbnN0IGxhYmVscHJveWVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWxwcm95ZWN0LmlubmVySFRNTCA9ICdQcm95ZWN0JztcbiAgICBsYWJlbHByb3llY3Quc2V0QXR0cmlidXRlKCdmb3InLCAncHJveWVjdCcpO1xuICAgIGNvbHVtbjIuYXBwZW5kQ2hpbGQobGFiZWxwcm95ZWN0KTtcbiAgICBjb25zdCBpbnB1dFByb3llY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBpbnB1dFByb3llY3QuY2xhc3NMaXN0LmFkZCgnaW5wdXQtcHJveWVjdCcpO1xuICAgIC8vIGlucHV0UHJveWVjdC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0UHJveWVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb3llY3QnKTtcbiAgICBjb2x1bW4yLmFwcGVuZENoaWxkKGlucHV0UHJveWVjdCk7XG5cbiAgICBjb25zdCBkZWZhdWx0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZGVmYXVsdFNlbGVjdC5pbm5lckhUTUwgPSAnLSAtU2VsZWN0IGEgcHJveWVjdC0gLSc7XG4gICAgaW5wdXRQcm95ZWN0LmFwcGVuZENoaWxkKGRlZmF1bHRTZWxlY3QpO1xuXG4gICAgcHJveWVjdHMuZm9yRWFjaCgocHJveWVjdCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBzZWxlY3QuaW5uZXJIVE1MID0gcHJveWVjdC50aXRsZTtcbiAgICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJveWVjdC50aXRsZSk7XG4gICAgICBpbnB1dFByb3llY3QuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZC5pbm5lckhUTUwgPSAnK0FkZCc7XG4gICAgY29sdW1uMi5hcHBlbmRDaGlsZChhZGQpO1xuXG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsLmlubmVySFRNTCA9ICdDYW5jZWwnO1xuICAgIGNvbHVtbjIuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1pZC5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1pZC5pbm5lckhUTUwgPSAnJztcbiAgICAgIGJ1aWxkKFxuICAgICAgICBpbnB1dFRpdGxlLnZhbHVlLFxuICAgICAgICBpbnB1dERlc2MudmFsdWUsXG4gICAgICAgIGlucHV0RHVlLnZhbHVlLFxuICAgICAgICBpbnB1dFByaW9yLnZhbHVlLFxuICAgICAgICBpbnB1dFByb3llY3QudmFsdWVcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtaWQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwibGV0IHByb3llY3RzID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHByb3llY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIGFkZEl0ZW0oaXRlbSkge1xuICAgIHByb3llY3RzLnB1c2goaXRlbSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcHJveWVjdHMgfTtcbiIsImltcG9ydCB7IEl0ZW1zIH0gZnJvbSAnLi90b2RvLWl0ZW0uanMnO1xuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5LWl0ZW0uanMnO1xuaW1wb3J0IHsgcHJveWVjdHMgfSBmcm9tICcuL3Byb3llY3QuanMnO1xuaW1wb3J0IHNpZGVCYXIgZnJvbSAnLi9zaWRlLWJhci5qcyc7XG5pbXBvcnQgYWRkUHJveWVjdCBmcm9tICcuL2FkZC1wcm95ZWN0LmpzJztcbmltcG9ydCBkaXNwbGF5UHJvamVjdHMgZnJvbSAnLi9kaXNwbGF5LXByb2plY3RzLmpzJztcbmltcG9ydCB7IHJlc2V0U3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgSXRlbXMuc3BsaWNlKEl0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuICBjb25zdCBtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkLWNvbnRlbnQnKTtcbiAgbWlkLmlubmVySFRNTCA9ICcnO1xuICBkaXNwbGF5KEl0ZW1zLCAnQWxsJyk7XG4gIHJlc2V0U3RvcmFnZShJdGVtcywgJ2l0ZW1zJyk7XG59XG5cbmNvbnN0IHByb3llY3RSZW1vdmUgPSBmdW5jdGlvbiAocHJvKSB7XG4gIHByb3llY3RzLnNwbGljZShwcm95ZWN0cy5pbmRleE9mKHBybyksIDEpO1xuICBjb25zb2xlLmxvZyhwcm95ZWN0cy5pbmRleE9mKHBybykpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtYmFyJyk7XG4gIHNpZGViYXIuaW5uZXJIVE1MID0gJyc7XG4gIHNpZGVCYXIoKTtcbiAgYWRkUHJveWVjdCgpO1xuICBkaXNwbGF5UHJvamVjdHMocHJveWVjdHMpO1xufTtcblxuZXhwb3J0IHsgcHJveWVjdFJlbW92ZSB9O1xuIiwiaW1wb3J0IHsgSXRlbXMgfSBmcm9tICcuL3RvZG8taXRlbS5qcyc7XG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXktaXRlbS5qcyc7XG5pbXBvcnQgeyBwcm95ZWN0cyB9IGZyb20gJy4vcHJveWVjdC5qcyc7XG5pbXBvcnQgcGx1czEgZnJvbSAnLi9pbWcvcGx1cy5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1iYXInKTtcblxuICBjb25zdCBwcm95ZWN0c0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJveWVjdHNDb250LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgY29uc3QgcHJveWVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBwcm95ZWN0cy5pbm5lckhUTUwgPSAnUHJveWVjdHMnO1xuICBwcm95ZWN0c0NvbnQuY2xhc3NMaXN0LmFkZCgnc2lkZS1wcm95ZWN0Jyk7XG4gIHByb3llY3RzQ29udC5hcHBlbmRDaGlsZChwcm95ZWN0cyk7XG5cbiAgY29uc3QgcHJveWVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBwbHVzID0gbmV3IEltYWdlKCk7XG4gIHBsdXMuc3JjID0gcGx1czE7XG4gIHBsdXMuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlLWltZycpO1xuICBwcm95ZWN0QnRuLmFwcGVuZENoaWxkKHBsdXMpO1xuICBwcm95ZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJveWVjdC1idG4nKTtcbiAgcHJveWVjdHNDb250LmFwcGVuZENoaWxkKHByb3llY3RCdG4pO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb3llY3RzQ29udCk7XG5cbiAgY29uc3QgYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFsbC5pbm5lckhUTUwgPSAnQWxsJztcbiAgYWxsLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgYWxsLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxsJyk7XG4gIGFsbC5jbGFzc0xpc3QuYWRkKCdzaWRlLXByb3llY3QnKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChhbGwpO1xuICBjb25zdCBtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkLWNvbnRlbnQnKTtcblxuICBhbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWlkLmlubmVySFRNTCA9ICcnO1xuICAgIGRpc3BsYXkoSXRlbXMsICdBbGwnKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXJyKSB7XG4gIGNvbnN0IHNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydCcpO1xuICBjb25zdCBtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkLWNvbnRlbnQnKTtcbiAgbWlkLmlubmVySFRNTCA9ICcnO1xuICBjb25zb2xlLmxvZyhzb3J0LnZhbHVlKTtcblxuICBpZiAoc29ydC52YWx1ZSA9PT0gJ1JlZCcpIHtcbiAgICBhcnIgPSBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEucHJpb3JpdHkgPT09ICdSZWQnICYmIGIucHJpb3JpdHkgPT09ICdZZWxsb3cnKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChhLnByaW9yaXR5ID09PSAnUmVkJyAmJiBiLnByaW9yaXR5ID09PSAnR3JlZW4nKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChhLnByaW9yaXR5ID09PSAnWWVsbG93JyAmJiBiLnByaW9yaXR5ID09PSAnR3JlZW4nKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhcnIgPSBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEucHJpb3JpdHkgPT09ICdZZWxsb3cnICYmIGIucHJpb3JpdHkgPT09ICdSZWQnKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChhLnByaW9yaXR5ID09PSAnR3JlZW4nICYmIGIucHJpb3JpdHkgPT09ICdSZWQnKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChhLnByaW9yaXR5ID09PSAnR3JlZW4nICYmIGIucHJpb3JpdHkgPT09ICdZZWxsb3cnKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb25zb2xlLmxvZygnc29ydGVkJywgYXJyKTtcbn1cbiIsImxldCBJdGVtcyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJveWVjdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm95ZWN0ID0gcHJveWVjdDtcbiAgfVxuXG4gIGFkZEl0ZW0oaXRlbSkge1xuICAgIEl0ZW1zLnB1c2goaXRlbSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgSXRlbXMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL3RvZG8taXRlbS5qcyc7XG5pbXBvcnQgeyBJdGVtcyB9IGZyb20gJy4vdG9kby1pdGVtLmpzJztcbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vZGlzcGxheS1pdGVtLmpzJztcbmltcG9ydCBmb3JtIGZyb20gJy4vZm9ybS5qcyc7XG5pbXBvcnQgc2lkZUJhciBmcm9tICcuL3NpZGUtYmFyLmpzJztcbmltcG9ydCBhZGRQcm95ZWN0IGZyb20gJy4vYWRkLXByb3llY3QuanMnO1xuaW1wb3J0IHNvcnQgZnJvbSAnLi9zb3J0LmpzJztcbmltcG9ydCBkYXJrTW9kZSBmcm9tICcuL2RhcmstbW9kZS5qcyc7XG5cbmNvbnN0IHdlbGNvbWUgPSBuZXcgSXRlbSgnV2VsY29tZSEnLCAnJywgJycsICdlJyk7XG5cbndlbGNvbWUuYWRkSXRlbSh3ZWxjb21lKTtcblxuZGFya01vZGUoKTtcblxuY29uc3Qgc29ydFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0Jyk7XG5zb3J0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzb3J0KEl0ZW1zKTtcbiAgZGlzcGxheShJdGVtcywgJ0FsbCcpO1xufSk7XG5cbmRpc3BsYXkoSXRlbXMsICdBbGwnKTtcbmZvcm0oKTtcbnNpZGVCYXIoKTtcbmFkZFByb3llY3QoKTtcblxuY29uc29sZS5sb2coSXRlbXMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
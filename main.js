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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --border: hsla(0, 0%, 50%, 0.37);\n  /* --gradient: linear-gradient(to right, #020024, #090979, #00d4ff); */\n  --gradient: #090968;\n}\n\n* {\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n\n  padding: 0;\n  margin: 0;\n}\n\n.content {\n  display: grid;\n  grid-template-rows: 100px 2fr;\n\n  height: 100%;\n}\n\nh1 {\n  margin-left: 10px;\n}\n\n.dark-mode-btn {\n  position: absolute;\n  right: 10px;\n  padding: 2px;\n}\n\n.edit-button {\n  padding: 2px;\n}\n\n.dark-mode {\n  background-color: #191919;\n  color: #f10086;\n}\n.dark-mode-img {\n  width: 27px;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n}\n\n.title-img {\n  width: 35px;\n}\n\n.header {\n  background: var(--gradient);\n\n  color: white;\n  font-weight: bold;\n}\n\n.middle {\n  background-color: white;\n\n  display: grid;\n  grid-template-columns: 0.5fr 2fr;\n  grid-template-rows: 60px 1fr;\n}\n\n.mid-header,\n.mid-header-dark {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n}\n\n.mid-header-dark {\n  border-bottom: 2px solid #0f0f0f;\n}\n\n.mid-header-dark,\n.header-dark {\n  background-color: #161616;\n\n  color: white;\n}\n\n.dark-svg {\n  filter: invert(0%) sepia(0%) saturate(7471%) hue-rotate(122deg)\n    brightness(101%) contrast(109%);\n}\n\n.mid-header {\n  background: var(--gradient);\n}\n\n.add-item {\n  padding: 10px 5px;\n  margin-right: 10px;\n}\n\n.side-bar {\n  border-right: 1px solid var(--border);\n}\n\n.mid-content,\n.side-bar {\n  display: grid;\n  grid-template-rows: 70px 70px;\n  grid-auto-rows: 70px;\n}\n\n.item,\n.item-all {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: bold;\n  font-size: 1.1em;\n  border-bottom: 1px solid var(--border);\n\n  padding: 0 10px;\n\n  position: relative;\n}\n\n.item-all img {\n  width: 40px;\n}\n\n.item-title {\n  margin: 0 20px;\n}\n\n.item-all {\n  justify-content: flex-start;\n  gap: 5px;\n}\n\n.item-expand {\n  grid-row: span 5;\n  font-weight: 1.1em;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 50%);\n  grid-auto-rows: 350px;\n  padding: 0 10px;\n\n  position: relative;\n\n  border-bottom: 1px solid var(--border);\n}\n\n/* .note {\n  color: #00d4ff;\n  height: 150px;\n  display: flex;\n  text-overflow: e;\n} */\n\n.column {\n  display: flex;\n  justify-self: center;\n  justify-content: center;\n  flex-direction: column;\n  max-width: 50%;\n  min-width: 250px;\n  gap: 15px;\n}\n\n.note {\n  overflow: auto;\n  min-width: 150px;\n  display: flex;\n  flex-wrap: wrap;\n  word-break: break-all;\n}\n\n.remove {\n  color: red;\n  font-weight: bold;\n  font-size: 2em;\n  cursor: pointer;\n}\n\n.remove:hover {\n  padding-bottom: 3px;\n}\n\n.side-proyect,\n.expandBtn {\n  cursor: pointer;\n}\n\n.expandBtn {\n  position: absolute;\n  top: 25px;\n  left: 5px;\n\n  font-size: 1.3em;\n  font-weight: bold;\n}\n\n.expandBtn:hover,\n.edit-button:hover {\n  top: 22px;\n}\n\n.expand-title {\n  position: absolute;\n  top: 25px;\n  left: 30px;\n  font-weight: bold;\n  font-size: 1.1em;\n}\n\n.side-proyect:hover {\n  background-color: var(--border);\n}\n\nbutton {\n  border-radius: 5px;\n  background-color: white;\n  padding: 10px 5px;\n  border: 1px solid var(--border);\n  font-weight: bold;\n  font-size: 0.9em;\n  cursor: pointer;\n}\n\n.proyect-btn {\n  padding: 7px 10px;\n  margin: 5px;\n}\n\n#proyect-btn {\n  padding: 1px;\n  display: flex;\n}\n\n.proyect-form {\n  grid-row: span 2;\n}\n\nbutton:hover {\n  background-color: rgb(161, 161, 161);\n  color: white;\n}\n\n.input-proyect {\n  width: 100%;\n  height: 25px;\n  font-size: 1em;\n}\n\n#sort-label {\n  color: white;\n  font-weight: bold;\n}\n\n.sort-select {\n  height: 25px;\n  font-size: 1em;\n  border-radius: 5px;\n}\n\ninput {\n  font-size: 1em;\n}\n\ntextarea {\n  font-size: 1em;\n  height: 100px;\n}\n/* .priority {\n  width: 5%;\n  height: 50%;\n\n  border-radius: 25px;\n} */\n\n.edit-button {\n  position: absolute;\n  top: 20px;\n  right: 25px;\n\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 1000px) {\n  .side-proyect {\n    grid-row: span 2;\n  }\n\n  .item-expand {\n    /* grid-row: span 10; */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n  }\n\n  .form-container {\n    grid-row: span 10;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC,sEAAsE;EACtE,mBAAmB;AACrB;;AAIA;EACE,iCAAiC;AACnC;;AAEA;;EAEE,YAAY;EACZ,WAAW;;EAEX,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,6BAA6B;;EAE7B,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,2BAA2B;;EAE3B,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;;EAEvB,aAAa;EACb,gCAAgC;EAChC,4BAA4B;AAC9B;;AAEA;;EAEE,iBAAiB;EACjB,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gCAAgC;AAClC;;AAEA;;EAEE,yBAAyB;;EAEzB,YAAY;AACd;;AAEA;EACE;mCACiC;AACnC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;;EAEE,aAAa;EACb,6BAA6B;EAC7B,oBAAoB;AACtB;;AAEA;;EAEE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;EACjB,gBAAgB;EAChB,sCAAsC;;EAEtC,eAAe;;EAEf,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,2BAA2B;EAC3B,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;;EAElB,aAAa;EACb,4CAA4C;EAC5C,qBAAqB;EACrB,eAAe;;EAEf,kBAAkB;;EAElB,sCAAsC;AACxC;;AAEA;;;;;GAKG;;AAEH;EACE,aAAa;EACb,oBAAoB;EACpB,uBAAuB;EACvB,sBAAsB;EACtB,cAAc;EACd,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;;EAET,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;;EAEE,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;EACjB,+BAA+B;EAC/B,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,aAAa;AACf;AACA;;;;;GAKG;;AAEH;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;;EAEX,eAAe;AACjB;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;EACX;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":[":root {\n  --border: hsla(0, 0%, 50%, 0.37);\n  /* --gradient: linear-gradient(to right, #020024, #090979, #00d4ff); */\n  --gradient: #090968;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');\n\n* {\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n\n  padding: 0;\n  margin: 0;\n}\n\n.content {\n  display: grid;\n  grid-template-rows: 100px 2fr;\n\n  height: 100%;\n}\n\nh1 {\n  margin-left: 10px;\n}\n\n.dark-mode-btn {\n  position: absolute;\n  right: 10px;\n  padding: 2px;\n}\n\n.edit-button {\n  padding: 2px;\n}\n\n.dark-mode {\n  background-color: #191919;\n  color: #f10086;\n}\n.dark-mode-img {\n  width: 27px;\n}\n\n.title {\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n}\n\n.title-img {\n  width: 35px;\n}\n\n.header {\n  background: var(--gradient);\n\n  color: white;\n  font-weight: bold;\n}\n\n.middle {\n  background-color: white;\n\n  display: grid;\n  grid-template-columns: 0.5fr 2fr;\n  grid-template-rows: 60px 1fr;\n}\n\n.mid-header,\n.mid-header-dark {\n  grid-column: 1/-1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n}\n\n.mid-header-dark {\n  border-bottom: 2px solid #0f0f0f;\n}\n\n.mid-header-dark,\n.header-dark {\n  background-color: #161616;\n\n  color: white;\n}\n\n.dark-svg {\n  filter: invert(0%) sepia(0%) saturate(7471%) hue-rotate(122deg)\n    brightness(101%) contrast(109%);\n}\n\n.mid-header {\n  background: var(--gradient);\n}\n\n.add-item {\n  padding: 10px 5px;\n  margin-right: 10px;\n}\n\n.side-bar {\n  border-right: 1px solid var(--border);\n}\n\n.mid-content,\n.side-bar {\n  display: grid;\n  grid-template-rows: 70px 70px;\n  grid-auto-rows: 70px;\n}\n\n.item,\n.item-all {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: bold;\n  font-size: 1.1em;\n  border-bottom: 1px solid var(--border);\n\n  padding: 0 10px;\n\n  position: relative;\n}\n\n.item-all img {\n  width: 40px;\n}\n\n.item-title {\n  margin: 0 20px;\n}\n\n.item-all {\n  justify-content: flex-start;\n  gap: 5px;\n}\n\n.item-expand {\n  grid-row: span 5;\n  font-weight: 1.1em;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 50%);\n  grid-auto-rows: 350px;\n  padding: 0 10px;\n\n  position: relative;\n\n  border-bottom: 1px solid var(--border);\n}\n\n/* .note {\n  color: #00d4ff;\n  height: 150px;\n  display: flex;\n  text-overflow: e;\n} */\n\n.column {\n  display: flex;\n  justify-self: center;\n  justify-content: center;\n  flex-direction: column;\n  max-width: 50%;\n  min-width: 250px;\n  gap: 15px;\n}\n\n.note {\n  overflow: auto;\n  min-width: 150px;\n  display: flex;\n  flex-wrap: wrap;\n  word-break: break-all;\n}\n\n.remove {\n  color: red;\n  font-weight: bold;\n  font-size: 2em;\n  cursor: pointer;\n}\n\n.remove:hover {\n  padding-bottom: 3px;\n}\n\n.side-proyect,\n.expandBtn {\n  cursor: pointer;\n}\n\n.expandBtn {\n  position: absolute;\n  top: 25px;\n  left: 5px;\n\n  font-size: 1.3em;\n  font-weight: bold;\n}\n\n.expandBtn:hover,\n.edit-button:hover {\n  top: 22px;\n}\n\n.expand-title {\n  position: absolute;\n  top: 25px;\n  left: 30px;\n  font-weight: bold;\n  font-size: 1.1em;\n}\n\n.side-proyect:hover {\n  background-color: var(--border);\n}\n\nbutton {\n  border-radius: 5px;\n  background-color: white;\n  padding: 10px 5px;\n  border: 1px solid var(--border);\n  font-weight: bold;\n  font-size: 0.9em;\n  cursor: pointer;\n}\n\n.proyect-btn {\n  padding: 7px 10px;\n  margin: 5px;\n}\n\n#proyect-btn {\n  padding: 1px;\n  display: flex;\n}\n\n.proyect-form {\n  grid-row: span 2;\n}\n\nbutton:hover {\n  background-color: rgb(161, 161, 161);\n  color: white;\n}\n\n.input-proyect {\n  width: 100%;\n  height: 25px;\n  font-size: 1em;\n}\n\n#sort-label {\n  color: white;\n  font-weight: bold;\n}\n\n.sort-select {\n  height: 25px;\n  font-size: 1em;\n  border-radius: 5px;\n}\n\ninput {\n  font-size: 1em;\n}\n\ntextarea {\n  font-size: 1em;\n  height: 100px;\n}\n/* .priority {\n  width: 5%;\n  height: 50%;\n\n  border-radius: 25px;\n} */\n\n.edit-button {\n  position: absolute;\n  top: 20px;\n  right: 25px;\n\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 1000px) {\n  .side-proyect {\n    grid-row: span 2;\n  }\n\n  .item-expand {\n    /* grid-row: span 10; */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 20px;\n  }\n\n  .form-container {\n    grid-row: span 10;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");
/* harmony import */ var _proyect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proyect.js */ "./src/proyect.js");





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
      const proy = new _proyect_js__WEBPACK_IMPORTED_MODULE_2__["default"](inputTitle.value);
      proy.addItem(proy);
      (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.resetStorage)();

      console.log('this: ', _proyect_js__WEBPACK_IMPORTED_MODULE_2__.proyects.indexOf(proy));
      (0,_display_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_proyect_js__WEBPACK_IMPORTED_MODULE_2__.proyects);
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
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(title, description, duedate, priority, proyect) {
  let item = new _todo_item_js__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, duedate, priority, proyect);
  item.addItem(item);
  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.resetStorage)();

  (0,_display_item_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items, 'All');
  console.log('yes', _todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items);
}


/***/ }),

/***/ "./src/dark-mode.js":
/*!**************************!*\
  !*** ./src/dark-mode.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "goDark": () => (/* binding */ goDark)
/* harmony export */ });
/* harmony import */ var _img_sun_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/sun.png */ "./src/img/sun.png");
/* harmony import */ var _img_moon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/moon.png */ "./src/img/moon.png");



localStorage;

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
const darkBtn = document.querySelector('.dark-mode-btn');

if (window.localStorage.getItem('darketting') !== null) {
  dark = window.localStorage.getObj('darketting');
  window.localStorage.removeItem('darketting');
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  darkBtn.addEventListener('click', () => {
    window.localStorage.setItem('darketting', dark);
    goDark();
  });
}

function goDark() {
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
    window.localStorage.removeItem('darketting');
    window.localStorage.setItem('darketting', dark);

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
    window.localStorage.removeItem('darketting');
    window.localStorage.setItem('darketting', dark);

    dark = false;
  }
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _build_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-item.js */ "./src/build-item.js");
/* harmony import */ var _proyect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proyect.js */ "./src/proyect.js");




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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addItemToStorage": () => (/* binding */ addItemToStorage),
/* harmony export */   "addProyectToStorage": () => (/* binding */ addProyectToStorage),
/* harmony export */   "checkStorageItem": () => (/* binding */ checkStorageItem),
/* harmony export */   "checkStorageProyect": () => (/* binding */ checkStorageProyect),
/* harmony export */   "resetStorage": () => (/* binding */ resetStorage)
/* harmony export */ });
/* harmony import */ var _proyect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proyect.js */ "./src/proyect.js");
/* harmony import */ var _todo_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item.js */ "./src/todo-item.js");



localStorage;

Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

function checkStorageItem() {
  if (localStorage.getObj('item') !== null) {
    let newLibrary = localStorage.getObj('item');
    console.log('new', newLibrary);
    newLibrary.forEach((item) => {
      _todo_item_js__WEBPACK_IMPORTED_MODULE_1__.Items.push(item);
      console.log('this one', _todo_item_js__WEBPACK_IMPORTED_MODULE_1__.Items);
    });
  }
}
function checkStorageProyect() {
  if (localStorage.getObj('proyect') !== null) {
    let newLibrary2 = localStorage.getObj('proyect');
    console.log('new2', newLibrary2);
    newLibrary2.forEach((proyect) => {
      _proyect_js__WEBPACK_IMPORTED_MODULE_0__.proyects.push(proyect);
      console.log('this other one', _proyect_js__WEBPACK_IMPORTED_MODULE_0__.proyects);
    });
  }
}

function resetStorage() {
  localStorage.clear();
  localStorage.setObj('item', _todo_item_js__WEBPACK_IMPORTED_MODULE_1__.Items);
  localStorage.setObj('proyect', _proyect_js__WEBPACK_IMPORTED_MODULE_0__.proyects);
}

function addItemToStorage(obj) {
  localStorage.clear();
  localStorage.setObj('item', _todo_item_js__WEBPACK_IMPORTED_MODULE_1__.Items);
  console.log(localStorage);
}

function addProyectToStorage(obj) {
  localStorage.clear();
  localStorage.setObj('proyect', _proyect_js__WEBPACK_IMPORTED_MODULE_0__.proyects);
  console.log(localStorage);
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
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");








/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(item) {
  _todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items.splice(_todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items.indexOf(item), 1);
  const mid = document.querySelector('.mid-content');
  mid.innerHTML = '';
  (0,_display_item_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_todo_item_js__WEBPACK_IMPORTED_MODULE_0__.Items, 'All');
  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_6__.resetStorage)();
}

const proyectRemove = function (pro) {
  _proyect_js__WEBPACK_IMPORTED_MODULE_2__.proyects.splice(_proyect_js__WEBPACK_IMPORTED_MODULE_2__.proyects.indexOf(pro), 1);
  console.log(_proyect_js__WEBPACK_IMPORTED_MODULE_2__.proyects.indexOf(pro));
  const sidebar = document.querySelector('.side-bar');
  sidebar.innerHTML = '';
  (0,_side_bar_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_add_proyect_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_display_projects_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_proyect_js__WEBPACK_IMPORTED_MODULE_2__.proyects);
  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_6__.resetStorage)();
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
/* harmony import */ var _img_add_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/add.svg */ "./src/img/add.svg");
/* harmony import */ var _img_all_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/all.svg */ "./src/img/all.svg");






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
  plus.src = _img_add_svg__WEBPACK_IMPORTED_MODULE_3__;
  plus.classList.add('dark-mode-img');
  proyectBtn.appendChild(plus);
  proyectBtn.setAttribute('id', 'proyect-btn');
  proyectsCont.appendChild(proyectBtn);
  sidebar.appendChild(proyectsCont);

  const all = document.createElement('div');
  // const allImg = new Image();
  // allImg.src = allsvg;
  // allImg.classList.add('dark-svg');

  all.innerHTML = 'All';
  // all.prepend(allImg);
  all.classList.add('item-all');
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

/***/ "./src/img/add.svg":
/*!*************************!*\
  !*** ./src/img/add.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "add.svg";

/***/ }),

/***/ "./src/img/all.svg":
/*!*************************!*\
  !*** ./src/img/all.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "all.svg";

/***/ }),

/***/ "./src/img/edit.svg":
/*!**************************!*\
  !*** ./src/img/edit.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edit.svg";

/***/ }),

/***/ "./src/img/moon.png":
/*!**************************!*\
  !*** ./src/img/moon.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "moon.png";

/***/ }),

/***/ "./src/img/sun.png":
/*!*************************!*\
  !*** ./src/img/sun.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sun.png";

/***/ }),

/***/ "./src/img/to-do.png":
/*!***************************!*\
  !*** ./src/img/to-do.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "to-do.png";

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_to_do_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/to-do.png */ "./src/img/to-do.png");
/* harmony import */ var _todo_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-item.js */ "./src/todo-item.js");
/* harmony import */ var _display_item_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-item.js */ "./src/display-item.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sort.js */ "./src/sort.js");
/* harmony import */ var _dark_mode_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dark-mode.js */ "./src/dark-mode.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");
/* harmony import */ var _display_projects_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./display-projects.js */ "./src/display-projects.js");
/* harmony import */ var _proyect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./proyect */ "./src/proyect.js");






// import sideBar from './side-bar.js';
// import addProyect from './add-proyect.js';







(0,_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.checkStorageItem)();
(0,_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.checkStorageProyect)();

// const welcome = new Item('Welcome!', '', '', 'e');

// welcome.addItem(welcome);

(0,_dark_mode_js__WEBPACK_IMPORTED_MODULE_6__.goDark)();

(0,_dark_mode_js__WEBPACK_IMPORTED_MODULE_6__["default"])();

const sortSelect = document.querySelector('#sort');
sortSelect.addEventListener('click', () => {
  (0,_sort_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_todo_item_js__WEBPACK_IMPORTED_MODULE_2__.Items);
  (0,_display_item_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_todo_item_js__WEBPACK_IMPORTED_MODULE_2__.Items, 'All');
});

(0,_display_item_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_todo_item_js__WEBPACK_IMPORTED_MODULE_2__.Items, 'All');
(0,_form_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_display_projects_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_proyect__WEBPACK_IMPORTED_MODULE_9__.proyects);
// sideBar();
// addProyect();

console.log(_todo_item_js__WEBPACK_IMPORTED_MODULE_2__.Items);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLGFBQWEsV0FBVyxNQUFNLEtBQUssS0FBSyxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsWUFBWSxhQUFhLGFBQWEsT0FBTyxTQUFTLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ2M7QUFDRDtBQUNLO0FBQ0M7QUFDWDtBQUM3QjtBQUNBO0FBQzZCO0FBQ3FCO0FBQ0c7QUFDRztBQUNKO0FBQ2Y7O0FBRXJDLGtFQUFnQjtBQUNoQixxRUFBbUI7O0FBRW5COztBQUVBOztBQUVBLHFEQUFNOztBQUVOLHlEQUFROztBQUVSO0FBQ0E7QUFDQSxFQUFFLG9EQUFJLENBQUMsZ0RBQUs7QUFDWixFQUFFLDREQUFPLENBQUMsZ0RBQUs7QUFDZixDQUFDOztBQUVELDREQUFPLENBQUMsZ0RBQUs7QUFDYixvREFBSTtBQUNKLGdFQUFlLENBQUMsOENBQVE7QUFDeEI7QUFDQTs7QUFFQSxZQUFZLGdEQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZC1wcm95ZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYnVpbGQtaXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RhcmstbW9kZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXktaXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXktcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9lZGl0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZXhwYW5kZWQtaXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm95ZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVtb3ZlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2lkZS1iYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zb3J0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1pdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYm9yZGVyOiBoc2xhKDAsIDAlLCA1MCUsIDAuMzcpO1xcbiAgLyogLS1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDIwMDI0LCAjMDkwOTc5LCAjMDBkNGZmKTsgKi9cXG4gIC0tZ3JhZGllbnQ6ICMwOTA5Njg7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAyZnI7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZGFyay1tb2RlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmVkaXQtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmRhcmstbW9kZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xcbiAgY29sb3I6ICNmMTAwODY7XFxufVxcbi5kYXJrLW1vZGUtaW1nIHtcXG4gIHdpZHRoOiAyN3B4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnRpdGxlLWltZyB7XFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudCk7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1pZGRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxufVxcblxcbi5taWQtaGVhZGVyLFxcbi5taWQtaGVhZGVyLWRhcmsge1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5taWQtaGVhZGVyLWRhcmsge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwZjBmMGY7XFxufVxcblxcbi5taWQtaGVhZGVyLWRhcmssXFxuLmhlYWRlci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kYXJrLXN2ZyB7XFxuICBmaWx0ZXI6IGludmVydCgwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NzElKSBodWUtcm90YXRlKDEyMmRlZylcXG4gICAgYnJpZ2h0bmVzcygxMDElKSBjb250cmFzdCgxMDklKTtcXG59XFxuXFxuLm1pZC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQpO1xcbn1cXG5cXG4uYWRkLWl0ZW0ge1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5zaWRlLWJhciB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbn1cXG5cXG4ubWlkLWNvbnRlbnQsXFxuLnNpZGUtYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggNzBweDtcXG4gIGdyaWQtYXV0by1yb3dzOiA3MHB4O1xcbn1cXG5cXG4uaXRlbSxcXG4uaXRlbS1hbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG5cXG4gIHBhZGRpbmc6IDAgMTBweDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLml0ZW0tYWxsIGltZyB7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLml0ZW0tdGl0bGUge1xcbiAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbi5pdGVtLWFsbCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLml0ZW0tZXhwYW5kIHtcXG4gIGdyaWQtcm93OiBzcGFuIDU7XFxuICBmb250LXdlaWdodDogMS4xZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDUwJSk7XFxuICBncmlkLWF1dG8tcm93czogMzUwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG59XFxuXFxuLyogLm5vdGUge1xcbiAgY29sb3I6ICMwMGQ0ZmY7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtb3ZlcmZsb3c6IGU7XFxufSAqL1xcblxcbi5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubm90ZSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG1pbi13aWR0aDogMTUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4ucmVtb3ZlIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVtb3ZlOmhvdmVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVxcblxcbi5zaWRlLXByb3llY3QsXFxuLmV4cGFuZEJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5leHBhbmRCdG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNXB4O1xcbiAgbGVmdDogNXB4O1xcblxcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZXhwYW5kQnRuOmhvdmVyLFxcbi5lZGl0LWJ1dHRvbjpob3ZlciB7XFxuICB0b3A6IDIycHg7XFxufVxcblxcbi5leHBhbmQtdGl0bGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNXB4O1xcbiAgbGVmdDogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuLnNpZGUtcHJveWVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXIpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm95ZWN0LWJ0biB7XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4jcHJveWVjdC1idG4ge1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb3llY3QtZm9ybSB7XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTYxLCAxNjEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW5wdXQtcHJveWVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4jc29ydC1sYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNvcnQtc2VsZWN0IHtcXG4gIGhlaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG4vKiAucHJpb3JpdHkge1xcbiAgd2lkdGg6IDUlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn0gKi9cXG5cXG4uZWRpdC1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDI1cHg7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAuc2lkZS1wcm95ZWN0IHtcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMjtcXG4gIH1cXG5cXG4gIC5pdGVtLWV4cGFuZCB7XFxuICAgIC8qIGdyaWQtcm93OiBzcGFuIDEwOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgfVxcblxcbiAgLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMTA7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQ0FBZ0M7RUFDaEMsc0VBQXNFO0VBQ3RFLG1CQUFtQjtBQUNyQjs7QUFJQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVzs7RUFFWCxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2Qjs7RUFFN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFt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bkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJvcmRlcjogaHNsYSgwLCAwJSwgNTAlLCAwLjM3KTtcXG4gIC8qIC0tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAyMDAyNCwgIzA5MDk3OSwgIzAwZDRmZik7ICovXFxuICAtLWdyYWRpZW50OiAjMDkwOTY4O1xcbn1cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAyZnI7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgxIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZGFyay1tb2RlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmVkaXQtYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmRhcmstbW9kZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxOTE5O1xcbiAgY29sb3I6ICNmMTAwODY7XFxufVxcbi5kYXJrLW1vZGUtaW1nIHtcXG4gIHdpZHRoOiAyN3B4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnRpdGxlLWltZyB7XFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudCk7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1pZGRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxufVxcblxcbi5taWQtaGVhZGVyLFxcbi5taWQtaGVhZGVyLWRhcmsge1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5taWQtaGVhZGVyLWRhcmsge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwZjBmMGY7XFxufVxcblxcbi5taWQtaGVhZGVyLWRhcmssXFxuLmhlYWRlci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XFxuXFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5kYXJrLXN2ZyB7XFxuICBmaWx0ZXI6IGludmVydCgwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NzElKSBodWUtcm90YXRlKDEyMmRlZylcXG4gICAgYnJpZ2h0bmVzcygxMDElKSBjb250cmFzdCgxMDklKTtcXG59XFxuXFxuLm1pZC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQpO1xcbn1cXG5cXG4uYWRkLWl0ZW0ge1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5zaWRlLWJhciB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbn1cXG5cXG4ubWlkLWNvbnRlbnQsXFxuLnNpZGUtYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggNzBweDtcXG4gIGdyaWQtYXV0by1yb3dzOiA3MHB4O1xcbn1cXG5cXG4uaXRlbSxcXG4uaXRlbS1hbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG5cXG4gIHBhZGRpbmc6IDAgMTBweDtcXG5cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLml0ZW0tYWxsIGltZyB7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLml0ZW0tdGl0bGUge1xcbiAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbi5pdGVtLWFsbCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLml0ZW0tZXhwYW5kIHtcXG4gIGdyaWQtcm93OiBzcGFuIDU7XFxuICBmb250LXdlaWdodDogMS4xZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDUwJSk7XFxuICBncmlkLWF1dG8tcm93czogMzUwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG59XFxuXFxuLyogLm5vdGUge1xcbiAgY29sb3I6ICMwMGQ0ZmY7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtb3ZlcmZsb3c6IGU7XFxufSAqL1xcblxcbi5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubm90ZSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG1pbi13aWR0aDogMTUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4ucmVtb3ZlIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVtb3ZlOmhvdmVyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxufVxcblxcbi5zaWRlLXByb3llY3QsXFxuLmV4cGFuZEJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5leHBhbmRCdG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNXB4O1xcbiAgbGVmdDogNXB4O1xcblxcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZXhwYW5kQnRuOmhvdmVyLFxcbi5lZGl0LWJ1dHRvbjpob3ZlciB7XFxuICB0b3A6IDIycHg7XFxufVxcblxcbi5leHBhbmQtdGl0bGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNXB4O1xcbiAgbGVmdDogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuLnNpZGUtcHJveWVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXIpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm95ZWN0LWJ0biB7XFxuICBwYWRkaW5nOiA3cHggMTBweDtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4jcHJveWVjdC1idG4ge1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb3llY3QtZm9ybSB7XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTYxLCAxNjEpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW5wdXQtcHJveWVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4jc29ydC1sYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNvcnQtc2VsZWN0IHtcXG4gIGhlaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG4vKiAucHJpb3JpdHkge1xcbiAgd2lkdGg6IDUlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn0gKi9cXG5cXG4uZWRpdC1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDI1cHg7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAuc2lkZS1wcm95ZWN0IHtcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMjtcXG4gIH1cXG5cXG4gIC5pdGVtLWV4cGFuZCB7XFxuICAgIC8qIGdyaWQtcm93OiBzcGFuIDEwOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgfVxcblxcbiAgLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMTA7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGRpc3BsYXlQcm95ZWN0IGZyb20gJy4vZGlzcGxheS1wcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyBhZGRQcm95ZWN0VG9TdG9yYWdlLCByZXNldFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgcHJveWVjdCBmcm9tICcuL3Byb3llY3QuanMnO1xuaW1wb3J0IHsgcHJveWVjdHMgfSBmcm9tICcuL3Byb3llY3QuanMnO1xuXG4vLyBsZXQgcHJveWVjdHMgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtYmFyJyk7XG4gIGNvbnN0IHByb3llY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJveWVjdC1idG4nKTtcblxuICBwcm95ZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NpZGUtcHJveWVjdCcpO1xuICAgIC8vIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb3llY3QtZm9ybScpO1xuICAgIHNpZGViYXIuaW5zZXJ0QmVmb3JlKGZvcm1Db250YWluZXIsIHNpZGViYXIuY2hpbGRyZW5bMV0pO1xuXG4gICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWxUaXRsZS5pbm5lckhUTUwgPSAnVGl0bGUnO1xuICAgIGxhYmVsVGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsVGl0bGUpO1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0VGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgMjApO1xuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cbiAgICBjb25zdCBidXR0b25Db250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250KTtcblxuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZC5pbm5lckhUTUwgPSAnKyc7XG4gICAgYWRkLmNsYXNzTGlzdC5hZGQoJ3Byb3llY3QtYnRuJyk7XG4gICAgYnV0dG9uQ29udC5hcHBlbmRDaGlsZChhZGQpO1xuXG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsLmlubmVySFRNTCA9ICd4JztcbiAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgncHJveWVjdC1idG4nKTtcbiAgICBidXR0b25Db250LmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzaWRlYmFyLnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcHJveSA9IG5ldyBwcm95ZWN0KGlucHV0VGl0bGUudmFsdWUpO1xuICAgICAgcHJveS5hZGRJdGVtKHByb3kpO1xuICAgICAgcmVzZXRTdG9yYWdlKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzOiAnLCBwcm95ZWN0cy5pbmRleE9mKHByb3kpKTtcbiAgICAgIGRpc3BsYXlQcm95ZWN0KHByb3llY3RzKTtcbiAgICAgIHNpZGViYXIucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBwcm95ZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc2lkZWJhci5yZW1vdmVDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIGV4cG9ydCB7IHByb3llY3RzIH07XG4iLCJpbXBvcnQgSXRlbSBmcm9tICcuL3RvZG8taXRlbS5qcyc7XG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXktaXRlbS5qcyc7XG5pbXBvcnQgeyBJdGVtcyB9IGZyb20gJy4vdG9kby1pdGVtLmpzJztcbmltcG9ydCB7IHJlc2V0U3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksIHByb3llY3QpIHtcbiAgbGV0IGl0ZW0gPSBuZXcgSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCBwcm95ZWN0KTtcbiAgaXRlbS5hZGRJdGVtKGl0ZW0pO1xuICByZXNldFN0b3JhZ2UoKTtcblxuICBkaXNwbGF5KEl0ZW1zLCAnQWxsJyk7XG4gIGNvbnNvbGUubG9nKCd5ZXMnLCBJdGVtcyk7XG59XG4iLCJpbXBvcnQgc3VuIGZyb20gJy4vaW1nL3N1bi5wbmcnO1xuaW1wb3J0IG1vb24gZnJvbSAnLi9pbWcvbW9vbi5wbmcnO1xuXG5sb2NhbFN0b3JhZ2U7XG5cbmNvbnN0IG1pZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkLWNvbnRlbnQnKTtcbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1iYXInKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbmNvbnN0IG1pZEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWQtaGVhZGVyJyk7XG5jb25zdCBkYXJrQnRuSW1nID0gbmV3IEltYWdlKCk7XG5kYXJrQnRuSW1nLnNyYyA9IHN1bjtcbmRhcmtCdG5JbWcuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlLWltZycpO1xuY29uc3QgbGlnaHRCdG5JbWcgPSBuZXcgSW1hZ2UoKTtcbmxpZ2h0QnRuSW1nLmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZS1pbWcnKTtcbmxpZ2h0QnRuSW1nLnNyYyA9IG1vb247XG5cbmxldCBkYXJrID0gZmFsc2U7XG5jb25zdCBkYXJrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstbW9kZS1idG4nKTtcblxuaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya2V0dGluZycpICE9PSBudWxsKSB7XG4gIGRhcmsgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldE9iaignZGFya2V0dGluZycpO1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2RhcmtldHRpbmcnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBkYXJrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya2V0dGluZycsIGRhcmspO1xuICAgIGdvRGFyaygpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ29EYXJrKCkge1xuICBpZiAoZGFyayA9PT0gZmFsc2UpIHtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1kYXJrJyk7XG4gICAgbWlkSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ21pZC1oZWFkZXInKTtcbiAgICBtaWRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWlkLWhlYWRlci1kYXJrJyk7XG4gICAgbWlkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgIG1pZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XG4gICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICBkYXJrQnRuLmlubmVySFRNTCA9ICcnO1xuICAgIGRhcmtCdG4uYXBwZW5kQ2hpbGQoZGFya0J0bkltZyk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdkYXJrZXR0aW5nJyk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrZXR0aW5nJywgZGFyayk7XG5cbiAgICBkYXJrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1kYXJrJyk7XG4gICAgbWlkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21pZC1oZWFkZXInKTtcbiAgICBtaWRIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWlkLWhlYWRlci1kYXJrJyk7XG4gICAgbWlkSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstbW9kZScpO1xuICAgIG1pZENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJyk7XG4gICAgc2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLW1vZGUnKTtcbiAgICBkYXJrQnRuLmlubmVySFRNTCA9ICcnO1xuICAgIGRhcmtCdG4uYXBwZW5kQ2hpbGQobGlnaHRCdG5JbWcpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZGFya2V0dGluZycpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya2V0dGluZycsIGRhcmspO1xuXG4gICAgZGFyayA9IGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCB7IGdvRGFyayB9O1xuIiwiaW1wb3J0IHJlbW92ZXMgZnJvbSAnLi9yZW1vdmUuanMnO1xuaW1wb3J0IGV4cGFuZGVkSXRlbSBmcm9tICcuL2V4cGFuZGVkLWl0ZW0uanMnO1xuaW1wb3J0IHNvcnQgZnJvbSAnLi9zb3J0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGxpc3QsIHRpdGxlKSB7XG4gIHNvcnQobGlzdCk7XG4gIGlmICh0aXRsZSA9PT0gJ0FsbCcpIHtcbiAgICBsaXN0LmZvckVhY2goKGkpID0+IHtcbiAgICAgIGNvbnN0IG1pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWQtY29udGVudCcpO1xuICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgICBtaWQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gaS50aXRsZTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZHVlRGF0ZS5pbm5lckhUTUwgPSBpLmR1ZURhdGU7XG4gICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnKTtcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICBpdGVtLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgJyArIGkucHJpb3JpdHk7XG4gICAgICBpdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByZW1vdmUuY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XG4gICAgICByZW1vdmUuaW5uZXJIVE1MID0gJy0nO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChyZW1vdmUpO1xuXG4gICAgICBjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmRCdG4nKTtcbiAgICAgIGV4cGFuZC5pbm5lckhUTUwgPSAnPic7XG4gICAgICBpdGVtLnByZXBlbmQoZXhwYW5kKTtcblxuICAgICAgZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZXhwYW5kJyk7XG5cbiAgICAgICAgZXhwYW5kZWRJdGVtKGl0ZW0sIGksICdBbGwnKTtcbiAgICAgIH0pO1xuXG4gICAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZXMoaSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBsaXN0LmZvckVhY2goKGkpID0+IHtcbiAgICAgIGlmIChpLnByb3llY3QgPT09IHRpdGxlKSB7XG4gICAgICAgIGNvbnN0IG1pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWQtY29udGVudCcpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgICAgIG1pZC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gaS50aXRsZTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRlbS10aXRsZScpO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkdWVEYXRlLmlubmVySFRNTCA9IGkuZHVlRGF0ZTtcbiAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXRpdGxlJyk7XG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaXRlbS5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkICcgKyBpLnByaW9yaXR5O1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICBjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZXhwYW5kLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZEJ0bicpO1xuICAgICAgICBleHBhbmQuaW5uZXJIVE1MID0gJz4nO1xuICAgICAgICBpdGVtLnByZXBlbmQoZXhwYW5kKTtcblxuICAgICAgICBleHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtLWV4cGFuZCcpO1xuXG4gICAgICAgICAgZXhwYW5kZWRJdGVtKGl0ZW0sIGksIGkucHJveWVjdCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3RpdGxlICcsIGkudGl0bGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgICAgICByZW1vdmUuaW5uZXJIVE1MID0gJy0nO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHJlbW92ZSk7XG5cbiAgICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHJlbW92ZXMoaSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwcm95ZWN0UmVtb3ZlIH0gZnJvbSAnLi9yZW1vdmUuanMnO1xuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5LWl0ZW0uanMnO1xuaW1wb3J0IHsgSXRlbXMgfSBmcm9tICcuL3RvZG8taXRlbS5qcyc7XG5pbXBvcnQgc2lkZUJhciBmcm9tICcuL3NpZGUtYmFyLmpzJztcbmltcG9ydCBhZGRQcm95ZWN0IGZyb20gJy4vYWRkLXByb3llY3QuanMnO1xuaW1wb3J0IHsgcHJveWVjdHMgfSBmcm9tICcuL3Byb3llY3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobGlzdCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtYmFyJyk7XG4gIHNpZGViYXIuaW5uZXJIVE1MID0gJyc7XG4gIHNpZGVCYXIoKTtcbiAgYWRkUHJveWVjdCgpO1xuICBsaXN0LmZvckVhY2goKGkpID0+IHtcbiAgICBjb25zdCBtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWlkLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHByb3llY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm95ZWN0LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICBwcm95ZWN0LmNsYXNzTGlzdC5hZGQoJ3NpZGUtcHJveWVjdCcpO1xuICAgIHByb3llY3Quc2V0QXR0cmlidXRlKCdpZCcsIGkudGl0bGUpO1xuICAgIHByb3llY3QuaW5uZXJUZXh0ID0gaS50aXRsZTtcbiAgICBwcm95ZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBpLnRpdGxlKTtcblxuICAgIHByb3llY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgICBkaXNwbGF5KEl0ZW1zLCBpLnRpdGxlKTtcbiAgICAgIGNvbnNvbGUubG9nKHByb3llY3QudGV4dENvbnRlbnQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICAgIHJlbW92ZS5pbm5lckhUTUwgPSAnLSc7XG4gICAgcHJveWVjdC5hcHBlbmRDaGlsZChyZW1vdmUpO1xuXG4gICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcHJveWVjdFJlbW92ZShpKTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdwcm95ZWN0czogJywgcHJveWVjdHMpO1xuXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm95ZWN0KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgYnVpbGQgZnJvbSAnLi9idWlsZC1pdGVtLmpzJztcbmltcG9ydCB7IHByb3llY3RzIH0gZnJvbSAnLi9wcm95ZWN0LmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGl0bGUsIGRlc2MsIGRhdGUpIHtcbiAgY29uc3QgbWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZC1jb250ZW50Jyk7XG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1leHBhbmQnKTtcbiAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuICBtaWQucHJlcGVuZChmb3JtQ29udGFpbmVyKTtcblxuICBjb25zdCBjb2x1bW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY29sdW1uMSk7XG4gIGNvbnN0IGNvbHVtbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2x1bW4yKTtcbiAgY29sdW1uMS5jbGFzc0xpc3QuYWRkKCdjb2x1bW4nKTtcbiAgY29sdW1uMi5jbGFzc0xpc3QuYWRkKCdjb2x1bW4nKTtcblxuICBjb25zdCBsYWJlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWxUaXRsZS5pbm5lckhUTUwgPSAnVGl0bGUnO1xuICBsYWJlbFRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gIGNvbHVtbjEuYXBwZW5kQ2hpbGQobGFiZWxUaXRsZSk7XG4gIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dFRpdGxlLnR5cGUgPSAndGV4dCc7XG4gIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRpdGxlKTtcbiAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAyMCk7XG4gIGNvbHVtbjEuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cbiAgY29uc3QgbGFiZWxEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWxEZXNjLmlubmVySFRNTCA9ICdEZXNjcmlwdGlvbic7XG4gIGxhYmVsRGVzYy5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjJyk7XG4gIGNvbHVtbjEuYXBwZW5kQ2hpbGQobGFiZWxEZXNjKTtcbiAgY29uc3QgaW5wdXREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgaW5wdXREZXNjLmlubmVySFRNTCA9IGRlc2M7XG4gIGlucHV0RGVzYy5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIDEwMCk7XG4gIGlucHV0RGVzYy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJzEwMCBtYXguJyk7XG4gIGlucHV0RGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2MnKTtcbiAgY29sdW1uMS5hcHBlbmRDaGlsZChpbnB1dERlc2MpO1xuXG4gIGNvbnN0IGxhYmVsRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWxEdWUuaW5uZXJIVE1MID0gJ0R1ZSBEYXRlJztcbiAgbGFiZWxEdWUuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlJyk7XG4gIGNvbHVtbjEuYXBwZW5kQ2hpbGQobGFiZWxEdWUpO1xuICBjb25zdCBpbnB1dER1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0RHVlLnR5cGUgPSAnZGF0ZSc7XG4gIGlucHV0RHVlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlJyk7XG4gIGlucHV0RHVlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRlKTtcbiAgY29sdW1uMS5hcHBlbmRDaGlsZChpbnB1dER1ZSk7XG5cbiAgY29uc3QgbGFiZWxQcmlvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsUHJpb3IuaW5uZXJIVE1MID0gJ1ByaW9yaXR5JztcbiAgbGFiZWxQcmlvci5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcicpO1xuICBjb2x1bW4yLmFwcGVuZENoaWxkKGxhYmVsUHJpb3IpO1xuICAvLyBjb25zdCBpbnB1dFByaW9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgLy8gaW5wdXRQcmlvci50eXBlID0gJ2NvbG9yJztcbiAgLy8gaW5wdXRQcmlvci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yJyk7XG4gIC8vIGNvbHVtbjIuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcik7XG4gIGNvbnN0IGlucHV0UHJpb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgaW5wdXRQcmlvci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1wcm95ZWN0Jyk7XG4gIGNvbHVtbjIuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcik7XG4gIGNvbnN0IGRlZmF1bHRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBkZWZhdWx0UHJpb3JpdHkuaW5uZXJIVE1MID0gJy0gLVNlbGVjdCBQcmlvcml0eS0gLSc7XG4gIGlucHV0UHJpb3IuYXBwZW5kQ2hpbGQoZGVmYXVsdFByaW9yaXR5KTtcbiAgY29uc3QgZ3JlZW5Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBncmVlblByaW9yaXR5LmlubmVySFRNTCA9ICdHcmVlbic7XG4gIGlucHV0UHJpb3IuYXBwZW5kQ2hpbGQoZ3JlZW5Qcmlvcml0eSk7XG4gIGNvbnN0IHllbGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIHllbGxvd1ByaW9yaXR5LmlubmVySFRNTCA9ICdZZWxsb3cnO1xuICBpbnB1dFByaW9yLmFwcGVuZENoaWxkKHllbGxvd1ByaW9yaXR5KTtcbiAgY29uc3QgcmVkUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgcmVkUHJpb3JpdHkuaW5uZXJIVE1MID0gJ1JlZCc7XG4gIGlucHV0UHJpb3IuYXBwZW5kQ2hpbGQocmVkUHJpb3JpdHkpO1xuXG4gIGNvbnN0IGxhYmVscHJveWVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVscHJveWVjdC5pbm5lckhUTUwgPSAnUHJveWVjdCc7XG4gIGxhYmVscHJveWVjdC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm95ZWN0Jyk7XG4gIGNvbHVtbjIuYXBwZW5kQ2hpbGQobGFiZWxwcm95ZWN0KTtcbiAgY29uc3QgaW5wdXRQcm95ZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGlucHV0UHJveWVjdC5jbGFzc0xpc3QuYWRkKCdpbnB1dC1wcm95ZWN0Jyk7XG4gIC8vIGlucHV0UHJveWVjdC50eXBlID0gJ3RleHQnO1xuICBpbnB1dFByb3llY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm95ZWN0Jyk7XG4gIGNvbHVtbjIuYXBwZW5kQ2hpbGQoaW5wdXRQcm95ZWN0KTtcblxuICBjb25zdCBkZWZhdWx0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGRlZmF1bHRTZWxlY3QuaW5uZXJIVE1MID0gJy0gLVNlbGVjdCBhIHByb3llY3QtIC0nO1xuICBpbnB1dFByb3llY3QuYXBwZW5kQ2hpbGQoZGVmYXVsdFNlbGVjdCk7XG5cbiAgcHJveWVjdHMuZm9yRWFjaCgocHJveWVjdCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHNlbGVjdC5pbm5lckhUTUwgPSBwcm95ZWN0LnRpdGxlO1xuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJveWVjdC50aXRsZSk7XG4gICAgaW5wdXRQcm95ZWN0LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGQuaW5uZXJIVE1MID0gJytBZGQnO1xuICBjb2x1bW4yLmFwcGVuZENoaWxkKGFkZCk7XG5cbiAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhbmNlbC5pbm5lckhUTUwgPSAnQ2FuY2VsJztcbiAgY29sdW1uMi5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtaWQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgYnVpbGQoXG4gICAgICBpbnB1dFRpdGxlLnZhbHVlLFxuICAgICAgaW5wdXREZXNjLnZhbHVlLFxuICAgICAgaW5wdXREdWUudmFsdWUsXG4gICAgICBpbnB1dFByaW9yLnZhbHVlLFxuICAgICAgaW5wdXRQcm95ZWN0LnZhbHVlXG4gICAgKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgYnVpbGRJdGVtIGZyb20gJy4vYnVpbGQtaXRlbSc7XG5pbXBvcnQgZGlzcGxheUl0ZW0gZnJvbSAnLi9kaXNwbGF5LWl0ZW0nO1xuaW1wb3J0IEl0ZW0sIHsgSXRlbXMgfSBmcm9tICcuL3RvZG8taXRlbSc7XG5pbXBvcnQgZWRpdDEgZnJvbSAnLi9lZGl0LmpzJztcbmltcG9ydCByZW1vdmVzIGZyb20gJy4vcmVtb3ZlLmpzJztcbmltcG9ydCBlZGl0c3ZnIGZyb20gJy4vaW1nL2VkaXQuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGRpdiwgb2JqLCB0KSB7XG4gIGRpdi5pbm5lckhUTUwgPSAnJztcbiAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2l0ZW0nKTtcbiAgY29uc3QgY29sdW1uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY29sdW1uMSk7XG4gIGNvbHVtbjEuY2xhc3NMaXN0LmFkZCgnY29sdW1uJyk7XG4gIGNvbnN0IGNvbHVtbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNvbHVtbjIpO1xuICBjb2x1bW4yLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbicpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC10aXRsZScpO1xuICB0aXRsZS5pbm5lckhUTUwgPSBvYmoudGl0bGU7XG4gIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbm90ZScpO1xuICBEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG9iai5kZXNjcmlwdGlvbjtcbiAgY29sdW1uMS5hcHBlbmRDaGlsZChEZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlLmlubmVySFRNTCA9IG9iai5kdWVEYXRlO1xuICBjb2x1bW4yLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkICcgKyBvYmoucHJpb3JpdHk7XG4gIGNvbHVtbjIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gIGNvbnN0IGV4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kQnRuJyk7XG4gIGV4cGFuZC5pbm5lckhUTUwgPSAn4oioJztcbiAgZGl2LnByZXBlbmQoZXhwYW5kKTtcblxuICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1idXR0b24nKTtcbiAgZGl2LmFwcGVuZENoaWxkKGVkaXQpO1xuICBjb25zdCBlZGl0aW1nID0gbmV3IEltYWdlKDIyKTtcbiAgZWRpdGltZy5zcmMgPSBlZGl0c3ZnO1xuICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnV0dG9uJyk7XG4gIGVkaXQuYXBwZW5kQ2hpbGQoZWRpdGltZyk7XG5cbiAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW1vdmVzKG9iaik7XG4gICAgZWRpdDEob2JqLnRpdGxlLCBvYmouZGVzY3JpcHRpb24sIG9iai5kdWVEYXRlKTtcbiAgfSk7XG5cbiAgZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtLWV4cGFuZCcpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgZGl2LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IG1pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWQtY29udGVudCcpO1xuICAgIG1pZC5pbm5lckhUTUwgPSAnJztcbiAgICBkaXNwbGF5SXRlbShJdGVtcywgdCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IGJ1aWxkIGZyb20gJy4vYnVpbGQtaXRlbS5qcyc7XG5pbXBvcnQgeyBwcm95ZWN0cyB9IGZyb20gJy4vcHJveWVjdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtJyk7XG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG1pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taWQtY29udGVudCcpO1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZXhwYW5kJyk7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuICAgIG1pZC5wcmVwZW5kKGZvcm1Db250YWluZXIpO1xuXG4gICAgY29uc3QgY29sdW1uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY29sdW1uMSk7XG4gICAgY29uc3QgY29sdW1uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY29sdW1uMik7XG4gICAgY29sdW1uMS5jbGFzc0xpc3QuYWRkKCdjb2x1bW4nKTtcbiAgICBjb2x1bW4yLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbicpO1xuXG4gICAgY29uc3QgbGFiZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWxUaXRsZS5pbm5lckhUTUwgPSAnVGl0bGUnO1xuICAgIGxhYmVsVGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICBjb2x1bW4xLmFwcGVuZENoaWxkKGxhYmVsVGl0bGUpO1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0VGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgMjApO1xuICAgIGNvbHVtbjEuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cbiAgICBjb25zdCBsYWJlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsRGVzYy5pbm5lckhUTUwgPSAnRGVzY3JpcHRpb24nO1xuICAgIGxhYmVsRGVzYy5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjJyk7XG4gICAgY29sdW1uMS5hcHBlbmRDaGlsZChsYWJlbERlc2MpO1xuICAgIGNvbnN0IGlucHV0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgaW5wdXREZXNjLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgMTAwKTtcbiAgICBpbnB1dERlc2Muc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICcxMDAgbWF4LicpO1xuICAgIGlucHV0RGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2MnKTtcbiAgICBjb2x1bW4xLmFwcGVuZENoaWxkKGlucHV0RGVzYyk7XG5cbiAgICBjb25zdCBsYWJlbER1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWxEdWUuaW5uZXJIVE1MID0gJ0R1ZSBEYXRlJztcbiAgICBsYWJlbER1ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWUnKTtcbiAgICBjb2x1bW4xLmFwcGVuZENoaWxkKGxhYmVsRHVlKTtcbiAgICBjb25zdCBpbnB1dER1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXREdWUudHlwZSA9ICdkYXRlJztcbiAgICBpbnB1dER1ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZScpO1xuICAgIGNvbHVtbjEuYXBwZW5kQ2hpbGQoaW5wdXREdWUpO1xuXG4gICAgY29uc3QgbGFiZWxQcmlvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWxQcmlvci5pbm5lckhUTUwgPSAnUHJpb3JpdHknO1xuICAgIGxhYmVsUHJpb3Iuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3InKTtcbiAgICBjb2x1bW4yLmFwcGVuZENoaWxkKGxhYmVsUHJpb3IpO1xuICAgIC8vIGNvbnN0IGlucHV0UHJpb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIC8vIGlucHV0UHJpb3IudHlwZSA9ICdjb2xvcic7XG4gICAgLy8gaW5wdXRQcmlvci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yJyk7XG4gICAgLy8gY29sdW1uMi5hcHBlbmRDaGlsZChpbnB1dFByaW9yKTtcbiAgICBjb25zdCBpbnB1dFByaW9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgaW5wdXRQcmlvci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1wcm95ZWN0Jyk7XG4gICAgY29sdW1uMi5hcHBlbmRDaGlsZChpbnB1dFByaW9yKTtcbiAgICBjb25zdCBkZWZhdWx0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBkZWZhdWx0UHJpb3JpdHkuaW5uZXJIVE1MID0gJy0gLVNlbGVjdCBQcmlvcml0eS0gLSc7XG4gICAgaW5wdXRQcmlvci5hcHBlbmRDaGlsZChkZWZhdWx0UHJpb3JpdHkpO1xuICAgIGNvbnN0IGdyZWVuUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBncmVlblByaW9yaXR5LmlubmVySFRNTCA9ICdHcmVlbic7XG4gICAgaW5wdXRQcmlvci5hcHBlbmRDaGlsZChncmVlblByaW9yaXR5KTtcbiAgICBjb25zdCB5ZWxsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHllbGxvd1ByaW9yaXR5LmlubmVySFRNTCA9ICdZZWxsb3cnO1xuICAgIGlucHV0UHJpb3IuYXBwZW5kQ2hpbGQoeWVsbG93UHJpb3JpdHkpO1xuICAgIGNvbnN0IHJlZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcmVkUHJpb3JpdHkuaW5uZXJIVE1MID0gJ1JlZCc7XG4gICAgaW5wdXRQcmlvci5hcHBlbmRDaGlsZChyZWRQcmlvcml0eSk7XG5cbiAgICBjb25zdCBsYWJlbHByb3llY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVscHJveWVjdC5pbm5lckhUTUwgPSAnUHJveWVjdCc7XG4gICAgbGFiZWxwcm95ZWN0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb3llY3QnKTtcbiAgICBjb2x1bW4yLmFwcGVuZENoaWxkKGxhYmVscHJveWVjdCk7XG4gICAgY29uc3QgaW5wdXRQcm95ZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgaW5wdXRQcm95ZWN0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXByb3llY3QnKTtcbiAgICAvLyBpbnB1dFByb3llY3QudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dFByb3llY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm95ZWN0Jyk7XG4gICAgY29sdW1uMi5hcHBlbmRDaGlsZChpbnB1dFByb3llY3QpO1xuXG4gICAgY29uc3QgZGVmYXVsdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGRlZmF1bHRTZWxlY3QuaW5uZXJIVE1MID0gJy0gLVNlbGVjdCBhIHByb3llY3QtIC0nO1xuICAgIGlucHV0UHJveWVjdC5hcHBlbmRDaGlsZChkZWZhdWx0U2VsZWN0KTtcblxuICAgIHByb3llY3RzLmZvckVhY2goKHByb3llY3QpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgc2VsZWN0LmlubmVySFRNTCA9IHByb3llY3QudGl0bGU7XG4gICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByb3llY3QudGl0bGUpO1xuICAgICAgaW5wdXRQcm95ZWN0LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGQuaW5uZXJIVE1MID0gJytBZGQnO1xuICAgIGNvbHVtbjIuYXBwZW5kQ2hpbGQoYWRkKTtcblxuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbC5pbm5lckhUTUwgPSAnQ2FuY2VsJztcbiAgICBjb2x1bW4yLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtaWQucmVtb3ZlQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgICBidWlsZChcbiAgICAgICAgaW5wdXRUaXRsZS52YWx1ZSxcbiAgICAgICAgaW5wdXREZXNjLnZhbHVlLFxuICAgICAgICBpbnB1dER1ZS52YWx1ZSxcbiAgICAgICAgaW5wdXRQcmlvci52YWx1ZSxcbiAgICAgICAgaW5wdXRQcm95ZWN0LnZhbHVlXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbWlkLnJlbW92ZUNoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IHByb3llY3RzIH0gZnJvbSAnLi9wcm95ZWN0LmpzJztcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSAnLi90b2RvLWl0ZW0uanMnO1xuXG5sb2NhbFN0b3JhZ2U7XG5cblN0b3JhZ2UucHJvdG90eXBlLnNldE9iaiA9IGZ1bmN0aW9uIChrZXksIG9iaikge1xuICByZXR1cm4gdGhpcy5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59O1xuU3RvcmFnZS5wcm90b3R5cGUuZ2V0T2JqID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmdldEl0ZW0oa2V5KSk7XG59O1xuXG5mdW5jdGlvbiBjaGVja1N0b3JhZ2VJdGVtKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldE9iaignaXRlbScpICE9PSBudWxsKSB7XG4gICAgbGV0IG5ld0xpYnJhcnkgPSBsb2NhbFN0b3JhZ2UuZ2V0T2JqKCdpdGVtJyk7XG4gICAgY29uc29sZS5sb2coJ25ldycsIG5ld0xpYnJhcnkpO1xuICAgIG5ld0xpYnJhcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgSXRlbXMucHVzaChpdGVtKTtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzIG9uZScsIEl0ZW1zKTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gY2hlY2tTdG9yYWdlUHJveWVjdCgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRPYmooJ3Byb3llY3QnKSAhPT0gbnVsbCkge1xuICAgIGxldCBuZXdMaWJyYXJ5MiA9IGxvY2FsU3RvcmFnZS5nZXRPYmooJ3Byb3llY3QnKTtcbiAgICBjb25zb2xlLmxvZygnbmV3MicsIG5ld0xpYnJhcnkyKTtcbiAgICBuZXdMaWJyYXJ5Mi5mb3JFYWNoKChwcm95ZWN0KSA9PiB7XG4gICAgICBwcm95ZWN0cy5wdXNoKHByb3llY3QpO1xuICAgICAgY29uc29sZS5sb2coJ3RoaXMgb3RoZXIgb25lJywgcHJveWVjdHMpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0U3RvcmFnZSgpIHtcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRPYmooJ2l0ZW0nLCBJdGVtcyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRPYmooJ3Byb3llY3QnLCBwcm95ZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW1Ub1N0b3JhZ2Uob2JqKSB7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0T2JqKCdpdGVtJywgSXRlbXMpO1xuICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm95ZWN0VG9TdG9yYWdlKG9iaikge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgbG9jYWxTdG9yYWdlLnNldE9iaigncHJveWVjdCcsIHByb3llY3RzKTtcbiAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbn1cblxuZXhwb3J0IHtcbiAgY2hlY2tTdG9yYWdlSXRlbSxcbiAgYWRkSXRlbVRvU3RvcmFnZSxcbiAgY2hlY2tTdG9yYWdlUHJveWVjdCxcbiAgYWRkUHJveWVjdFRvU3RvcmFnZSxcbiAgcmVzZXRTdG9yYWdlLFxufTtcbiIsImxldCBwcm95ZWN0cyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm95ZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBhZGRJdGVtKGl0ZW0pIHtcbiAgICBwcm95ZWN0cy5wdXNoKGl0ZW0pO1xuICB9XG59XG5cbmV4cG9ydCB7IHByb3llY3RzIH07XG4iLCJpbXBvcnQgeyBJdGVtcyB9IGZyb20gJy4vdG9kby1pdGVtLmpzJztcbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vZGlzcGxheS1pdGVtLmpzJztcbmltcG9ydCB7IHByb3llY3RzIH0gZnJvbSAnLi9wcm95ZWN0LmpzJztcbmltcG9ydCBzaWRlQmFyIGZyb20gJy4vc2lkZS1iYXIuanMnO1xuaW1wb3J0IGFkZFByb3llY3QgZnJvbSAnLi9hZGQtcHJveWVjdC5qcyc7XG5pbXBvcnQgZGlzcGxheVByb2plY3RzIGZyb20gJy4vZGlzcGxheS1wcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyByZXNldFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChpdGVtKSB7XG4gIEl0ZW1zLnNwbGljZShJdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgY29uc3QgbWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZC1jb250ZW50Jyk7XG4gIG1pZC5pbm5lckhUTUwgPSAnJztcbiAgZGlzcGxheShJdGVtcywgJ0FsbCcpO1xuICByZXNldFN0b3JhZ2UoKTtcbn1cblxuY29uc3QgcHJveWVjdFJlbW92ZSA9IGZ1bmN0aW9uIChwcm8pIHtcbiAgcHJveWVjdHMuc3BsaWNlKHByb3llY3RzLmluZGV4T2YocHJvKSwgMSk7XG4gIGNvbnNvbGUubG9nKHByb3llY3RzLmluZGV4T2YocHJvKSk7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1iYXInKTtcbiAgc2lkZWJhci5pbm5lckhUTUwgPSAnJztcbiAgc2lkZUJhcigpO1xuICBhZGRQcm95ZWN0KCk7XG4gIGRpc3BsYXlQcm9qZWN0cyhwcm95ZWN0cyk7XG4gIHJlc2V0U3RvcmFnZSgpO1xufTtcblxuZXhwb3J0IHsgcHJveWVjdFJlbW92ZSB9O1xuIiwiaW1wb3J0IHsgSXRlbXMgfSBmcm9tICcuL3RvZG8taXRlbS5qcyc7XG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXktaXRlbS5qcyc7XG5pbXBvcnQgeyBwcm95ZWN0cyB9IGZyb20gJy4vcHJveWVjdC5qcyc7XG5pbXBvcnQgYWRkIGZyb20gJy4vaW1nL2FkZC5zdmcnO1xuaW1wb3J0IGFsbHN2ZyBmcm9tICcuL2ltZy9hbGwuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtYmFyJyk7XG5cbiAgY29uc3QgcHJveWVjdHNDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb3llY3RzQ29udC5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gIGNvbnN0IHByb3llY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgcHJveWVjdHMuaW5uZXJIVE1MID0gJ1Byb3llY3RzJztcbiAgcHJveWVjdHNDb250LmNsYXNzTGlzdC5hZGQoJ3NpZGUtcHJveWVjdCcpO1xuICBwcm95ZWN0c0NvbnQuYXBwZW5kQ2hpbGQocHJveWVjdHMpO1xuXG4gIGNvbnN0IHByb3llY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgcGx1cyA9IG5ldyBJbWFnZSgpO1xuICBwbHVzLnNyYyA9IGFkZDtcbiAgcGx1cy5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUtaW1nJyk7XG4gIHByb3llY3RCdG4uYXBwZW5kQ2hpbGQocGx1cyk7XG4gIHByb3llY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcm95ZWN0LWJ0bicpO1xuICBwcm95ZWN0c0NvbnQuYXBwZW5kQ2hpbGQocHJveWVjdEJ0bik7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJveWVjdHNDb250KTtcblxuICBjb25zdCBhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gY29uc3QgYWxsSW1nID0gbmV3IEltYWdlKCk7XG4gIC8vIGFsbEltZy5zcmMgPSBhbGxzdmc7XG4gIC8vIGFsbEltZy5jbGFzc0xpc3QuYWRkKCdkYXJrLXN2ZycpO1xuXG4gIGFsbC5pbm5lckhUTUwgPSAnQWxsJztcbiAgLy8gYWxsLnByZXBlbmQoYWxsSW1nKTtcbiAgYWxsLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tYWxsJyk7XG4gIGFsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FsbCcpO1xuICBhbGwuY2xhc3NMaXN0LmFkZCgnc2lkZS1wcm95ZWN0Jyk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWxsKTtcbiAgY29uc3QgbWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZC1jb250ZW50Jyk7XG5cbiAgYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1pZC5pbm5lckhUTUwgPSAnJztcbiAgICBkaXNwbGF5KEl0ZW1zLCAnQWxsJyk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFycikge1xuICBjb25zdCBzb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQnKTtcbiAgY29uc3QgbWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pZC1jb250ZW50Jyk7XG4gIG1pZC5pbm5lckhUTUwgPSAnJztcbiAgY29uc29sZS5sb2coc29ydC52YWx1ZSk7XG5cbiAgaWYgKHNvcnQudmFsdWUgPT09ICdSZWQnKSB7XG4gICAgYXJyID0gYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLnByaW9yaXR5ID09PSAnUmVkJyAmJiBiLnByaW9yaXR5ID09PSAnWWVsbG93Jykge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAoYS5wcmlvcml0eSA9PT0gJ1JlZCcgJiYgYi5wcmlvcml0eSA9PT0gJ0dyZWVuJykge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAoYS5wcmlvcml0eSA9PT0gJ1llbGxvdycgJiYgYi5wcmlvcml0eSA9PT0gJ0dyZWVuJykge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgYXJyID0gYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLnByaW9yaXR5ID09PSAnWWVsbG93JyAmJiBiLnByaW9yaXR5ID09PSAnUmVkJykge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAoYS5wcmlvcml0eSA9PT0gJ0dyZWVuJyAmJiBiLnByaW9yaXR5ID09PSAnUmVkJykge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAoYS5wcmlvcml0eSA9PT0gJ0dyZWVuJyAmJiBiLnByaW9yaXR5ID09PSAnWWVsbG93Jykge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY29uc29sZS5sb2coJ3NvcnRlZCcsIGFycik7XG59XG4iLCJsZXQgSXRlbXMgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb3llY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJveWVjdCA9IHByb3llY3Q7XG4gIH1cblxuICBhZGRJdGVtKGl0ZW0pIHtcbiAgICBJdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG59XG5cbmV4cG9ydCB7IEl0ZW1zIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHRvRG8gZnJvbSAnLi9pbWcvdG8tZG8ucG5nJztcbmltcG9ydCBJdGVtIGZyb20gJy4vdG9kby1pdGVtLmpzJztcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSAnLi90b2RvLWl0ZW0uanMnO1xuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5LWl0ZW0uanMnO1xuaW1wb3J0IGZvcm0gZnJvbSAnLi9mb3JtLmpzJztcbi8vIGltcG9ydCBzaWRlQmFyIGZyb20gJy4vc2lkZS1iYXIuanMnO1xuLy8gaW1wb3J0IGFkZFByb3llY3QgZnJvbSAnLi9hZGQtcHJveWVjdC5qcyc7XG5pbXBvcnQgc29ydCBmcm9tICcuL3NvcnQuanMnO1xuaW1wb3J0IGRhcmtNb2RlLCB7IGdvRGFyayB9IGZyb20gJy4vZGFyay1tb2RlLmpzJztcbmltcG9ydCB7IGNoZWNrU3RvcmFnZUl0ZW0gfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBjaGVja1N0b3JhZ2VQcm95ZWN0IH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IGRpc3BsYXlQcm9qZWN0cyBmcm9tICcuL2Rpc3BsYXktcHJvamVjdHMuanMnO1xuaW1wb3J0IHsgcHJveWVjdHMgfSBmcm9tICcuL3Byb3llY3QnO1xuXG5jaGVja1N0b3JhZ2VJdGVtKCk7XG5jaGVja1N0b3JhZ2VQcm95ZWN0KCk7XG5cbi8vIGNvbnN0IHdlbGNvbWUgPSBuZXcgSXRlbSgnV2VsY29tZSEnLCAnJywgJycsICdlJyk7XG5cbi8vIHdlbGNvbWUuYWRkSXRlbSh3ZWxjb21lKTtcblxuZ29EYXJrKCk7XG5cbmRhcmtNb2RlKCk7XG5cbmNvbnN0IHNvcnRTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydCcpO1xuc29ydFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc29ydChJdGVtcyk7XG4gIGRpc3BsYXkoSXRlbXMsICdBbGwnKTtcbn0pO1xuXG5kaXNwbGF5KEl0ZW1zLCAnQWxsJyk7XG5mb3JtKCk7XG5kaXNwbGF5UHJvamVjdHMocHJveWVjdHMpO1xuLy8gc2lkZUJhcigpO1xuLy8gYWRkUHJveWVjdCgpO1xuXG5jb25zb2xlLmxvZyhJdGVtcyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
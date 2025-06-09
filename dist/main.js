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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: white;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;
}

.canvas {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    width: 65rem;
    height: 46rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    color: black;
}

.background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.nav-bar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.switch-degrees {
    position: absolute;
    right: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

input[type="checkbox"] {
    -webkit-appearance: none;
    width: 3.2rem;
    height: 1.4rem;
    background-color: #f1f1f1;
    border-radius: 1rem;
    box-shadow: 0 4px 5px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

input[type="checkbox"]:hover {
    cursor: pointer;
}

input[type="checkbox"]::before {
    content: '';
    position: absolute;
    background-color: #727171;
    left: 0;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 1rem;
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
    box-shadow: 0 4px 5px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

input:checked[type="checkbox"]::before {
    left: 1.8rem;
    background-color: white;
}




#search-form {
    width: 400px;
    margin: 1rem;
    position: relative;
    border: none;
    transition: 0.3s ease-in-out;
}

#search-form:hover {
    transform: scale(1.02);
    transition: 0.3s ease-in-out;
}

#search-form input {
    padding: 0.5rem;
    width: 100%;
    outline: none;
    border-radius: 5px;
    background: rgba(20, 20, 20, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    font-size: 1rem;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
    transition: 0.3s ease;
}

#search-form input::placeholder {
    color: rgba(255, 255, 255, 0.6);
    transition: 0.3s ease;
}

#search-form input:focus {
    background: rgba(30, 30, 30, 0.6);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

#search-form button:hover {
    /* transform: translateY(-50%) scale(1.1); */
}

#search-form button {
    position: absolute;
    right: 10px;
    top: 53%;
    transform: translateY(-50%);
    cursor: pointer;
    border: none;
    background: none;
    font-size: 16px;
}





.basic-info {
    width: 21rem;
    height: 6.5rem;
    margin-bottom: 0.6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 4px;
}

.basic-info>* {
    flex: 1;
    font-size: 1.5rem;
}



.temperature {
    display: flex;
    position: relative;
    gap: 4px;
}

.temperature-icon {
    position: inherit;
    top: 1px;
}

.description {
    font-size: 0.9rem;
    font-weight: 300;
}



.detailed-content {
    width: 50rem;
    height: 30rem;

    display: grid;
    grid-template: 45% 27.5% 27.5% / 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 16px;
    margin-top: 0.5rem;
}

.detailed-content>div {
    position: relative;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    padding: 1rem;
    color: #fff;
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

.headings {
    font-size: 0.9rem;
    font-weight: 200;
}


.forecast {
    grid-area: 1 / 1 / 2 / 3;
    display: grid;
    grid-template-rows: repeat(1fr, 7);
}

.forecast-days {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 600;
}

.temp-span {
    font-size: 0.9rem;
    font-weight: 300;
}

.timelapse {
    grid-area: 1 / 3 / 2 / -1;
}






.humidity {
    grid-area: 2 / 1 / 3 / 3;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    overflow: visible;
}

.humidity-svg-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}





.humidity-ring,
.wind-ring {
    /* Start progress from top */
    transform: rotate(-90deg);
}

.humidity-bg-ring,
.humidity-progress-ring,
.wind-bg-ring,
.wind-progress-ring {
    fill: none;
    stroke-width: 10;
}

.humidity-bg-ring,
.wind-bg-ring {
    stroke: #e0e0e0;
}

.humidity-progress-ring,
.wind-progress-ring {
    stroke: #727171;
    stroke-linecap: round;
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 0.5s ease;
}

.humidity-value {
    position: absolute;
    font-weight: bold;
    font-size: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}



.wind {
    grid-area: 2 / 3 / 3 / 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow: visible;
}

.wind-svg-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.wind-ring-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.wind-ring-values {
    text-align: center;
    display: flex;
    flex-direction: column;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}

.wind-speed {
    font-weight: bold;
    font-size: 1rem;
}

.wind-degrees {
    font-weight: bold;
    font-size: 1rem;
}

.wind-direction {
    font-weight: 100;
    font-size: 0.8rem;
}


.pressure {
    grid-area: 2 / 5 / 3 / -1;
    display: flex;
    flex-direction: column;
}

.pressure-value {
    margin-top: 28px;
    font-size: 1.8rem;
    font-weight: bold;
}

.pressure-measurement {
    font-weight: 100;
    font-size: 1.4rem;
}


.uv {
    grid-area: 3 / 1 / -1 / 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.uv-value-container {
    display: flex;
    flex-direction: column;
}

.uv-description {
    font-size: 1rem;
    font-weight: 100;
}

.uv-bar-container {
    margin-top: 6px;
    position: relative;
    width: 100%;
    height: 10px;
    border-radius: 10px;
    background: #ccc;
}

.gradient-bar {
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, #4caf50, #ffeb3b, #f44336);
    border-radius: 10px;
}

.dot {
    position: absolute;
    top: 50%;
    width: 16px;
    height: 16px;
    background-color: white;
    border: 2px solid black;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: left 0.3s ease;
    pointer-events: none;
    z-index: 2;
}

.uv-value {
    font-size: 2rem;
    font-weight: bold;
}



.sun {
    grid-area: 3 / 4 / -1 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.twilight-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.sunrise-header,
.sunset-header {
    font-weight: 200;
    font-size: 0.9rem;
}

.sunrise-value,
.sunset-value {
    font-weight: 600;
}


.headings {
    align-self: flex-start;
}

#loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 6px solid #ccc;
    border-top: 6px solid #727171;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    color: white;\n}\n\nbody {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #f1f1f1;\n}\n\n.canvas {\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);\n    border-radius: 8px;\n    width: 65rem;\n    height: 46rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    overflow: hidden;\n    color: black;\n}\n\n.background-video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    z-index: -1;\n}\n\n.nav-bar {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.switch-degrees {\n    position: absolute;\n    right: 5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n}\n\ninput[type=\"checkbox\"] {\n    -webkit-appearance: none;\n    width: 3.2rem;\n    height: 1.4rem;\n    background-color: #f1f1f1;\n    border-radius: 1rem;\n    box-shadow: 0 4px 5px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\ninput[type=\"checkbox\"]:hover {\n    cursor: pointer;\n}\n\ninput[type=\"checkbox\"]::before {\n    content: '';\n    position: absolute;\n    background-color: #727171;\n    left: 0;\n    width: 1.4rem;\n    height: 1.4rem;\n    border-radius: 1rem;\n    transform: scale(1.1);\n    transition: 0.3s ease-in-out;\n    box-shadow: 0 4px 5px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\ninput:checked[type=\"checkbox\"]::before {\n    left: 1.8rem;\n    background-color: white;\n}\n\n\n\n\n#search-form {\n    width: 400px;\n    margin: 1rem;\n    position: relative;\n    border: none;\n    transition: 0.3s ease-in-out;\n}\n\n#search-form:hover {\n    transform: scale(1.02);\n    transition: 0.3s ease-in-out;\n}\n\n#search-form input {\n    padding: 0.5rem;\n    width: 100%;\n    outline: none;\n    border-radius: 5px;\n    background: rgba(20, 20, 20, 0.4);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    border-radius: 10px;\n    font-size: 1rem;\n    backdrop-filter: blur(8px);\n    -webkit-backdrop-filter: blur(8px);\n    box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);\n    transition: 0.3s ease;\n}\n\n#search-form input::placeholder {\n    color: rgba(255, 255, 255, 0.6);\n    transition: 0.3s ease;\n}\n\n#search-form input:focus {\n    background: rgba(30, 30, 30, 0.6);\n    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);\n}\n\n#search-form button:hover {\n    /* transform: translateY(-50%) scale(1.1); */\n}\n\n#search-form button {\n    position: absolute;\n    right: 10px;\n    top: 53%;\n    transform: translateY(-50%);\n    cursor: pointer;\n    border: none;\n    background: none;\n    font-size: 16px;\n}\n\n\n\n\n\n.basic-info {\n    width: 21rem;\n    height: 6.5rem;\n    margin-bottom: 0.6rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 4px;\n}\n\n.basic-info>* {\n    flex: 1;\n    font-size: 1.5rem;\n}\n\n\n\n.temperature {\n    display: flex;\n    position: relative;\n    gap: 4px;\n}\n\n.temperature-icon {\n    position: inherit;\n    top: 1px;\n}\n\n.description {\n    font-size: 0.9rem;\n    font-weight: 300;\n}\n\n\n\n.detailed-content {\n    width: 50rem;\n    height: 30rem;\n\n    display: grid;\n    grid-template: 45% 27.5% 27.5% / 1fr 1fr 1fr 1fr 1fr 1fr;\n    gap: 16px;\n    margin-top: 0.5rem;\n}\n\n.detailed-content>div {\n    position: relative;\n    background: rgba(0, 0, 0, 0.25);\n    border-radius: 6px;\n    padding: 1rem;\n    color: #fff;\n    backdrop-filter: blur(18px);\n    -webkit-backdrop-filter: blur(18px);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);\n    overflow: hidden;\n}\n\n.headings {\n    font-size: 0.9rem;\n    font-weight: 200;\n}\n\n\n.forecast {\n    grid-area: 1 / 1 / 2 / 3;\n    display: grid;\n    grid-template-rows: repeat(1fr, 7);\n}\n\n.forecast-days {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 1rem;\n    font-weight: 600;\n}\n\n.temp-span {\n    font-size: 0.9rem;\n    font-weight: 300;\n}\n\n.timelapse {\n    grid-area: 1 / 3 / 2 / -1;\n}\n\n\n\n\n\n\n.humidity {\n    grid-area: 2 / 1 / 3 / 3;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    height: 100%;\n    overflow: visible;\n}\n\n.humidity-svg-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n\n\n\n\n.humidity-ring,\n.wind-ring {\n    /* Start progress from top */\n    transform: rotate(-90deg);\n}\n\n.humidity-bg-ring,\n.humidity-progress-ring,\n.wind-bg-ring,\n.wind-progress-ring {\n    fill: none;\n    stroke-width: 10;\n}\n\n.humidity-bg-ring,\n.wind-bg-ring {\n    stroke: #e0e0e0;\n}\n\n.humidity-progress-ring,\n.wind-progress-ring {\n    stroke: #727171;\n    stroke-linecap: round;\n    stroke-dashoffset: 0;\n    transition: stroke-dashoffset 0.5s ease;\n}\n\n.humidity-value {\n    position: absolute;\n    font-weight: bold;\n    font-size: 1rem;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n\n\n.wind {\n    grid-area: 2 / 3 / 3 / 5;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    overflow: visible;\n}\n\n.wind-svg-container {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.wind-ring-container {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.wind-ring-values {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n}\n\n.wind-speed {\n    font-weight: bold;\n    font-size: 1rem;\n}\n\n.wind-degrees {\n    font-weight: bold;\n    font-size: 1rem;\n}\n\n.wind-direction {\n    font-weight: 100;\n    font-size: 0.8rem;\n}\n\n\n.pressure {\n    grid-area: 2 / 5 / 3 / -1;\n    display: flex;\n    flex-direction: column;\n}\n\n.pressure-value {\n    margin-top: 28px;\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\n.pressure-measurement {\n    font-weight: 100;\n    font-size: 1.4rem;\n}\n\n\n.uv {\n    grid-area: 3 / 1 / -1 / 4;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.uv-value-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.uv-description {\n    font-size: 1rem;\n    font-weight: 100;\n}\n\n.uv-bar-container {\n    margin-top: 6px;\n    position: relative;\n    width: 100%;\n    height: 10px;\n    border-radius: 10px;\n    background: #ccc;\n}\n\n.gradient-bar {\n    height: 100%;\n    width: 100%;\n    background: linear-gradient(to right, #4caf50, #ffeb3b, #f44336);\n    border-radius: 10px;\n}\n\n.dot {\n    position: absolute;\n    top: 50%;\n    width: 16px;\n    height: 16px;\n    background-color: white;\n    border: 2px solid black;\n    border-radius: 50%;\n    transform: translate(-50%, -50%);\n    transition: left 0.3s ease;\n    pointer-events: none;\n    z-index: 2;\n}\n\n.uv-value {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n\n\n.sun {\n    grid-area: 3 / 4 / -1 / -1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.twilight-container {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n\n.sunrise-header,\n.sunset-header {\n    font-weight: 200;\n    font-size: 0.9rem;\n}\n\n.sunrise-value,\n.sunset-value {\n    font-weight: 600;\n}\n\n\n.headings {\n    align-self: flex-start;\n}\n\n#loading-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.8);\n    display: none;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000;\n}\n\n.spinner {\n    width: 50px;\n    height: 50px;\n    border: 6px solid #ccc;\n    border-top: 6px solid #727171;\n    border-radius: 50%;\n    animation: spin 0.8s linear infinite;\n}\n\n@keyframes spin {\n    to {\n        transform: rotate(360deg);\n    }\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/backdrops/Overcast.mp4":
/*!************************************!*\
  !*** ./src/backdrops/Overcast.mp4 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1c391641348b9e019a0f.mp4";

/***/ }),

/***/ "./src/backdrops/PartlyCloudy.mp4":
/*!****************************************!*\
  !*** ./src/backdrops/PartlyCloudy.mp4 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/f26dbe92b18f09dab766.mp4";

/***/ }),

/***/ "./src/backdrops/Rainy.mp4":
/*!*********************************!*\
  !*** ./src/backdrops/Rainy.mp4 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/e47bc490893f1794ef2d.mp4";

/***/ }),

/***/ "./src/backdrops/Sunny.mp4":
/*!*********************************!*\
  !*** ./src/backdrops/Sunny.mp4 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3dd2854346de2d8de697.mp4";

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchSubmitHandler: () => (/* binding */ searchSubmitHandler),
/* harmony export */   toggleTemperatureHandler: () => (/* binding */ toggleTemperatureHandler)
/* harmony export */ });
/* harmony import */ var _manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manager.js */ "./src/manager.js");
/* harmony import */ var _userInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInterface.js */ "./src/userInterface.js");



const searchForm = document.querySelector('#search-form');
const overlay = document.getElementById('loading-overlay');
const celsius = true;
const fahrenheit = false;

async function searchSubmitHandler(e) {
    e.preventDefault();

    overlay.style.display = 'flex';

    const searchValue = document.querySelector('#search-input').value;
    const tempBtnToggle = document.getElementById('switch-degrees-btn');

    try {
        const data = await (0,_manager_js__WEBPACK_IMPORTED_MODULE_0__.retrieveWeatherData)(searchValue);

        // Delay function to allow loading screen
        await (0,_manager_js__WEBPACK_IMPORTED_MODULE_0__.delay)(700);

        if (tempBtnToggle.checked) {
            tempBtnToggle.checked = false;
            (0,_userInterface_js__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)(fahrenheit);
        }

        (0,_userInterface_js__WEBPACK_IMPORTED_MODULE_1__.renderAll)(data);
    } catch (error) {
        console.error('Error: ', error);
    }

    overlay.style.display = 'none';
    searchForm.reset();

}

function toggleTemperatureHandler(e) {

    if (e.target.checked) {
        (0,_userInterface_js__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)(celsius);
    } else {
        (0,_userInterface_js__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)(fahrenheit);
    }

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _src_userInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/userInterface.js */ "./src/userInterface.js");
/* harmony import */ var _manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manager.js */ "./src/manager.js");
/* harmony import */ var _handlers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers.js */ "./src/handlers.js");





const data = await _manager_js__WEBPACK_IMPORTED_MODULE_2__.retrieveWeatherData('Sydney');
_src_userInterface_js__WEBPACK_IMPORTED_MODULE_1__.renderAll(data);

const searchForm = document.querySelector('#search-form');
const temperatureToggleBtn = document.getElementById('switch-degrees-btn');

function bindEvents() {
    searchForm.addEventListener('submit', _handlers_js__WEBPACK_IMPORTED_MODULE_3__.searchSubmitHandler);
    temperatureToggleBtn.addEventListener('click', _handlers_js__WEBPACK_IMPORTED_MODULE_3__.toggleTemperatureHandler);
    
}


bindEvents();
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/manager.js":
/*!************************!*\
  !*** ./src/manager.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateUvScale: () => (/* binding */ calculateUvScale),
/* harmony export */   changeVideoSource: () => (/* binding */ changeVideoSource),
/* harmony export */   clearChart: () => (/* binding */ clearChart),
/* harmony export */   convertTo12Hour: () => (/* binding */ convertTo12Hour),
/* harmony export */   convertToCelsius: () => (/* binding */ convertToCelsius),
/* harmony export */   convertToFahrenheit: () => (/* binding */ convertToFahrenheit),
/* harmony export */   delay: () => (/* binding */ delay),
/* harmony export */   extractCityFromAddress: () => (/* binding */ extractCityFromAddress),
/* harmony export */   formatLocation: () => (/* binding */ formatLocation),
/* harmony export */   formatTime: () => (/* binding */ formatTime),
/* harmony export */   getCompassDirection: () => (/* binding */ getCompassDirection),
/* harmony export */   retrieveWeatherData: () => (/* binding */ retrieveWeatherData),
/* harmony export */   setCurrentChart: () => (/* binding */ setCurrentChart)
/* harmony export */ });
/* harmony import */ var _backdrops_Overcast_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backdrops/Overcast.mp4 */ "./src/backdrops/Overcast.mp4");
/* harmony import */ var _backdrops_Rainy_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backdrops/Rainy.mp4 */ "./src/backdrops/Rainy.mp4");
/* harmony import */ var _backdrops_Sunny_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backdrops/Sunny.mp4 */ "./src/backdrops/Sunny.mp4");
/* harmony import */ var _backdrops_PartlyCloudy_mp4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backdrops/PartlyCloudy.mp4 */ "./src/backdrops/PartlyCloudy.mp4");





let currentChart = null;

async function retrieveWeatherData(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=5CY3SLBHNE3ER7M9DNMNQ6TXB&contentType=json`;

    try {
        const response = await fetch(url, { mode: 'cors' });
        const data = await response.json();
        console.log(data);


        // Returns an object with only the relevant information from the API call
        return {
            location: formatLocation(data.resolvedAddress),
            temperature: Math.round(data.days[0].temp),
            description: data.description,
            forecast: data.days,
            timelapse: data.days,
            humidity: data.currentConditions.humidity,
            wind: {
                speed: data.currentConditions.windspeed,
                direction: data.currentConditions.winddir
            },
            pressure: data.currentConditions.pressure,
            uv: data.currentConditions.uvindex,
            sun: {
                time: data.currentConditions.datetime,
                sunrise: data.currentConditions.sunrise,
                sunset: data.currentConditions.sunset,
            },
            icon: data.currentConditions.icon
        }

    } catch (error) {
        console.log(error);
    }

}

function extractCityFromAddress(address) {
    // Find position of the first comma or hyphen
    const index = address.search(/[,\\-]/);

    // If neither is found, return the whole string trimmed
    if (index === -1) return address.trim();

    // Otherwise, return the substring before the comma or hyphen
    return address.slice(0, index).trim();
}

function formatLocation(address) {
    const arr = address.split(' ');
    const city = arr[0];
    const country = arr[arr.length - 1];
    const location = [city, country].join(' ');
    return location;
}

// Converts '00:00:00' --> '00:00'
function formatTime(time) {
    return time.slice(0, 5);
}

function getCompassDirection(degree) {
    const directions = [
        'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'
    ];

    const index = Math.round(degree / 45) % 8;
    return directions[index];
}

function calculateUvScale(index) {
    const scale = [
        { max: 2, value: 'Low' },
        { max: 5, value: 'Moderate' },
        { max: 7, value: 'High' },
        { max: 10, value: 'Very High' },
        { max: Infinity, value: 'Extreme' },
    ];

    return scale.find((el) => index <= el.max).value;
}

function convertTo12Hour(string) {
    const [hours, minutes] = string.split(':');
    const date = new Date();
    date.setHours(hours, minutes);

    return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })
        .replace(/^0/, '');
}

function clearChart() {
    if (currentChart) {
        currentChart.destroy();
        currentChart = null;
    }

    const existingCanvas = document.getElementById('myCanvas');
    if (existingCanvas) {
        existingCanvas.remove();
    }

}

function setCurrentChart(chart) {
    currentChart = chart;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function convertToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
}

function convertToFahrenheit(celsius) {
    return Math.round((celsius * 9 / 5) + 32);
}

function changeVideoSource(icon) {

    switch (icon) {
        case 'cloudy':
            return _backdrops_Overcast_mp4__WEBPACK_IMPORTED_MODULE_0__;
        case 'clear-day':
            return _backdrops_Sunny_mp4__WEBPACK_IMPORTED_MODULE_2__;
        case 'rain':
            return _backdrops_Rainy_mp4__WEBPACK_IMPORTED_MODULE_1__;
        case 'partly-cloudy-day':
            return _backdrops_PartlyCloudy_mp4__WEBPACK_IMPORTED_MODULE_3__;
        default:
            return _backdrops_Overcast_mp4__WEBPACK_IMPORTED_MODULE_0__;
    }

}

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

/***/ "./src/userInterface.js":
/*!******************************!*\
  !*** ./src/userInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAll: () => (/* binding */ renderAll),
/* harmony export */   updateBackdropDisplay: () => (/* binding */ updateBackdropDisplay),
/* harmony export */   updateDisplay: () => (/* binding */ updateDisplay)
/* harmony export */ });
/* harmony import */ var _manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manager.js */ "./src/manager.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js/auto'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




// Basic Info Elements
const locationDiv = document.querySelector('.location');
const temperatureDiv = document.querySelector('.temperature-value');
const descriptionDiv = document.querySelector('.description');

// Detailed Content
const forecastDiv = document.querySelector('.forecast');
const timelapseDiv = document.querySelector('.timelapse');

const pressureValue = document.querySelector('.pressure-value');
const pressureMeasurement = document.querySelector('.pressure-measurement');

function renderAll(data) {
    displayBasicInfo(data);
    displayForecast(data.forecast);
    displayTimelapse(data);
    displayHumidity(data.humidity);
    displayWind(data.wind);
    displayPressure(data.pressure);
    displayUV(data.uv);
    displaySunrise(data.sun);
    updateBackdropDisplay(data.icon);
}

function updateDisplay(value) {
    if (value) {
        displayCelsius();
        updateBasicInfoTempDisplays(true);
        updateForecastTempDisplays(true);
    } else {
        displayFahrenheit();
        updateBasicInfoTempDisplays(false);
        updateForecastTempDisplays(false);
    }

}

function displayBasicInfo(data) {
    const address = data.location;
    const temperature = data.temperature;
    const description = data.description;

    locationDiv.innerHTML = address;
    temperatureDiv.innerHTML = temperature;
    descriptionDiv.innerHTML = description;

}

function displayForecast(data) {
    // Clear previous data
    forecastDiv.textContent = '';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let i = 0; i < 7; i++) {
        // Convert to Date object 
        const currentDate = new Date(data.at(i).datetime);

        // Convert to day
        const currentDay = days[currentDate.getDay()];
        const currentTemp = Math.round(data.at(i).temp);

        // Create 7 divs inside forecast for each day
        const div = document.createElement('div');
        div.classList.add('forecast-days');
        div.dataset.day = currentDay;

        const leftDiv = document.createElement('span');
        leftDiv.innerHTML = currentDay;

        const rightDiv = document.createElement('div');
        rightDiv.classList.add('icon-value');

        const iconSpan = document.createElement('span');
        iconSpan.classList.add('icon-span');

        const tempSpan = document.createElement('span');
        tempSpan.classList.add('temp-span');
        tempSpan.innerHTML = currentTemp;

        rightDiv.append(iconSpan);
        rightDiv.append(tempSpan);
        div.append(leftDiv);
        div.append(rightDiv);

        forecastDiv.appendChild(div);
    }
}

function displayTimelapse(data) {
    _manager_js__WEBPACK_IMPORTED_MODULE_0__.clearChart();

    const weeklyData = [];

    for (let i = 0; i < 7; i++) {
        weeklyData.push(data.timelapse.at(i))
    }

    const currentTimelapse = weeklyData.at(0).hours;

    const timelapseData = [];

    for (const hour in currentTimelapse) {
        // console.log(currentTimelapse[hour]);
        timelapseData.push({
            time: _manager_js__WEBPACK_IMPORTED_MODULE_0__.formatTime(currentTimelapse[hour].datetime),
            value: currentTimelapse[hour].temp
        });
    }

    // console.log(timelapseData);

    const canvas = document.createElement('canvas');
    canvas.id = 'myCanvas';
    canvas.style.width = '600';
    canvas.style.height = '200';
    timelapseDiv.appendChild(canvas);

    const labels = timelapseData.map(data => data.time);
    const values = timelapseData.map(data => data.value);

    const ctx = document.getElementById('myCanvas').getContext('2d');

    const timelapseChart = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js/auto'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '',
                data: values,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                pointRadius: 0,
                tension: 0.3
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        color: 'white',
                        autoSkip: true,
                        maxTicksLimit: 12,
                        font: {
                            size: 12,
                            weight: '100'
                        },
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    beginAtZero: false,
                    ticks: {
                        color: 'white',
                        font: {
                            size: 12,
                            weight: '100'
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });

    _manager_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentChart(timelapseChart);

}

function displayHumidity(data) {
    const humidityPercent = Math.round(data);
    const circle = document.querySelector('.humidity-progress-ring');
    const value = document.querySelector('.humidity-value');
    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    const offset = circumference - (humidityPercent / 100) * circumference;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = offset;
    value.textContent = `${humidityPercent}%`;
}

function displayWind(data) {
    const circle = document.querySelector('.wind-progress-ring');
    const directionText = document.querySelector('.wind-direction');
    const degreeText = document.querySelector('.wind-degrees');
    const speedText = document.querySelector('.wind-speed');

    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    const percentage = data.direction / 360; // % of the circle to show
    const offset = circumference * (1 - percentage);

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = offset;

    degreeText.innerHTML = data.direction + '\u00B0';
    directionText.textContent = _manager_js__WEBPACK_IMPORTED_MODULE_0__.getCompassDirection(data.direction);
    speedText.textContent = `${data.speed} km/h`;

}

function displayPressure(data) {
    pressureValue.innerHTML = data;
    pressureMeasurement.innerHTML = ' hPa/mb';

    pressureValue.appendChild(pressureMeasurement);
}

function displayUV(data, max = 11) {
    const percent = Math.min(data / max, 1);
    const dot = document.getElementById('uv-dot');
    const containerWidth = document.querySelector('.uv-bar-container').offsetWidth;
    const uvValue = document.querySelector('.uv-value');
    const uvDescription = document.querySelector('.uv-description');

    dot.style.left = `${percent * containerWidth}px`;
    uvValue.textContent = data;
    uvDescription.textContent = _manager_js__WEBPACK_IMPORTED_MODULE_0__.calculateUvScale(data);

}

function displaySunrise(data) {
    const timeDiv = document.querySelector('.time');

    const sunriseHeader = document.querySelector('.sunrise-header');
    const sunriseValue = document.querySelector('.sunrise-value');

    const sunsetHeader = document.querySelector('.sunset-header');
    const sunsetValue = document.querySelector('.sunset-value');

    sunriseHeader.textContent = 'Sunrise';
    sunriseValue.textContent = _manager_js__WEBPACK_IMPORTED_MODULE_0__.convertTo12Hour(data.sunrise);

    sunsetHeader.textContent = 'Sunset';
    sunsetValue.textContent = _manager_js__WEBPACK_IMPORTED_MODULE_0__.convertTo12Hour(data.sunset);

}

function updateBasicInfoTempDisplays(value) {
    const tempDiv = document.querySelector('.temperature-value');
    const tempValue = Number(tempDiv.textContent);
    const tempIcon = document.querySelector('.temperature-icon');

    if (value) {
        tempDiv.textContent = _manager_js__WEBPACK_IMPORTED_MODULE_0__.convertToCelsius(tempValue);
        tempIcon.innerHTML = `
                    <svg fill="white" height="20" width="20" version="1.1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 483.076 483.076" xml:space="preserve" stroke="#000000"
                        stroke-width="0.004830760000000001">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path
                                    d="M100,54.038c0-27.57-22.43-50-50-50s-50,22.43-50,50s22.43,50,50,50S100,81.608,100,54.038z M50,74.038 c-11.028,0-20-8.972-20-20s8.972-20,20-20s20,8.972,20,20S61.028,74.038,50,74.038z">
                                </path>
                                <path
                                    d="M297.295,449.038c-100.907,0-183-82.094-183-183s82.093-183,183-183c66.052,0,127.218,35.816,159.629,93.472l26.151-14.701 C445.359,94.717,374.172,53.038,297.295,53.038c-117.449,0-213,95.551-213,213s95.551,213,213,213 c76.877,0,148.064-41.679,185.781-108.771l-26.151-14.701C424.513,413.221,363.347,449.038,297.295,449.038z">
                                </path>
                            </g>
                        </g>
                    </svg>
        `;
    } else {
        tempDiv.textContent = _manager_js__WEBPACK_IMPORTED_MODULE_0__.convertToFahrenheit(tempValue);
        tempIcon.innerHTML = `
                    <svg fill="white" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        stroke-width="1.28" width="20" height="20">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M4.293 1.25c-0 0-0 0-0 0-1.628 0-2.948 1.32-2.948 2.948s1.32 2.948 2.948 2.948c1.628 0 2.947-1.319 2.948-2.947v-0c-0.002-1.627-1.32-2.946-2.947-2.948h-0zM4.293 5.646c-0 0-0 0-0 0-0.8 0-1.448-0.648-1.448-1.448s0.648-1.448 1.448-1.448c0.8 0 1.448 0.648 1.448 1.448 0 0 0 0 0 0.001v-0c-0.001 0.799-0.648 1.446-1.447 1.447h-0zM29.904 3.7h-16.786c-0 0-0 0-0.001 0-0.165 0-0.299 0.134-0.299 0.299 0 0 0 0 0 0.001v-0 26c0 0 0 0 0 0.001 0 0.166 0.134 0.3 0.3 0.3h1.077c0.166-0 0.3-0.134 0.3-0.3 0-0 0-0.001 0-0.001v0-11.027h14.036c0.166-0 0.301-0.135 0.301-0.301v0-1.078c-0-0.166-0.134-0.3-0.3-0.3-0 0-0.001 0-0.001 0h-14.036v-11.916h15.409c0 0 0 0 0.001 0 0.166 0 0.3-0.134 0.3-0.3v0-1.078c-0-0.166-0.134-0.3-0.3-0.3-0 0-0.001 0-0.001 0h0z">
                            </path>
                        </g>
                    </svg>
    `;
    }
}

function updateForecastTempDisplays(value) {
    const forecastTempSpans = document.querySelectorAll('.temp-span');

    forecastTempSpans.forEach(span => {
        const tempValue = Number(span.textContent);
        if (value) {
            span.textContent = _manager_js__WEBPACK_IMPORTED_MODULE_0__.convertToCelsius(tempValue);
        } else {
            span.textContent = _manager_js__WEBPACK_IMPORTED_MODULE_0__.convertToFahrenheit(tempValue);
        }
    })

}

function displayCelsius() {
    const temperatureIcon = document.querySelector('.temperature-icon');
    const temperatureBtnDisplay = document.querySelector('.temperature-display');

    temperatureIcon.innerHTML = '';
    temperatureBtnDisplay.innerHTML = '';

    temperatureIcon.innerHTML = `
                    <svg fill="white" height="20" width="20" version="1.1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 483.076 483.076" xml:space="preserve" stroke="#000000"
                        stroke-width="0.004830760000000001">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path
                                    d="M100,54.038c0-27.57-22.43-50-50-50s-50,22.43-50,50s22.43,50,50,50S100,81.608,100,54.038z M50,74.038 c-11.028,0-20-8.972-20-20s8.972-20,20-20s20,8.972,20,20S61.028,74.038,50,74.038z">
                                </path>
                                <path
                                    d="M297.295,449.038c-100.907,0-183-82.094-183-183s82.093-183,183-183c66.052,0,127.218,35.816,159.629,93.472l26.151-14.701 C445.359,94.717,374.172,53.038,297.295,53.038c-117.449,0-213,95.551-213,213s95.551,213,213,213 c76.877,0,148.064-41.679,185.781-108.771l-26.151-14.701C424.513,413.221,363.347,449.038,297.295,449.038z">
                                </path>
                            </g>
                        </g>
                    </svg>
    `;

    temperatureBtnDisplay.innerHTML = `
                    <svg fill="white" height="24" width="24" version="1.1" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 483.076 483.076" xml:space="preserve" stroke="#000000"
                        stroke-width="0.004830760000000001">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path
                                    d="M100,54.038c0-27.57-22.43-50-50-50s-50,22.43-50,50s22.43,50,50,50S100,81.608,100,54.038z M50,74.038 c-11.028,0-20-8.972-20-20s8.972-20,20-20s20,8.972,20,20S61.028,74.038,50,74.038z">
                                </path>
                                <path
                                    d="M297.295,449.038c-100.907,0-183-82.094-183-183s82.093-183,183-183c66.052,0,127.218,35.816,159.629,93.472l26.151-14.701 C445.359,94.717,374.172,53.038,297.295,53.038c-117.449,0-213,95.551-213,213s95.551,213,213,213 c76.877,0,148.064-41.679,185.781-108.771l-26.151-14.701C424.513,413.221,363.347,449.038,297.295,449.038z">
                                </path>
                            </g>
                        </g>
                    </svg>
    `;

}

function displayFahrenheit() {
    const temperatureIcon = document.querySelector('.temperature-icon');
    const temperatureBtnDisplay = document.querySelector('.temperature-display');

    temperatureIcon.innerHTML = '';
    temperatureBtnDisplay.innerHTML = '';

    temperatureIcon.innerHTML = `
                    <svg fill="white" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        stroke-width="1.28" width="20" height="20">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M4.293 1.25c-0 0-0 0-0 0-1.628 0-2.948 1.32-2.948 2.948s1.32 2.948 2.948 2.948c1.628 0 2.947-1.319 2.948-2.947v-0c-0.002-1.627-1.32-2.946-2.947-2.948h-0zM4.293 5.646c-0 0-0 0-0 0-0.8 0-1.448-0.648-1.448-1.448s0.648-1.448 1.448-1.448c0.8 0 1.448 0.648 1.448 1.448 0 0 0 0 0 0.001v-0c-0.001 0.799-0.648 1.446-1.447 1.447h-0zM29.904 3.7h-16.786c-0 0-0 0-0.001 0-0.165 0-0.299 0.134-0.299 0.299 0 0 0 0 0 0.001v-0 26c0 0 0 0 0 0.001 0 0.166 0.134 0.3 0.3 0.3h1.077c0.166-0 0.3-0.134 0.3-0.3 0-0 0-0.001 0-0.001v0-11.027h14.036c0.166-0 0.301-0.135 0.301-0.301v0-1.078c-0-0.166-0.134-0.3-0.3-0.3-0 0-0.001 0-0.001 0h-14.036v-11.916h15.409c0 0 0 0 0.001 0 0.166 0 0.3-0.134 0.3-0.3v0-1.078c-0-0.166-0.134-0.3-0.3-0.3-0 0-0.001 0-0.001 0h0z">
                            </path>
                        </g>
                    </svg>
    `;

    temperatureBtnDisplay.innerHTML = `
                    <svg fill="white" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        stroke-width="1.28" width="24" height="24">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M4.293 1.25c-0 0-0 0-0 0-1.628 0-2.948 1.32-2.948 2.948s1.32 2.948 2.948 2.948c1.628 0 2.947-1.319 2.948-2.947v-0c-0.002-1.627-1.32-2.946-2.947-2.948h-0zM4.293 5.646c-0 0-0 0-0 0-0.8 0-1.448-0.648-1.448-1.448s0.648-1.448 1.448-1.448c0.8 0 1.448 0.648 1.448 1.448 0 0 0 0 0 0.001v-0c-0.001 0.799-0.648 1.446-1.447 1.447h-0zM29.904 3.7h-16.786c-0 0-0 0-0.001 0-0.165 0-0.299 0.134-0.299 0.299 0 0 0 0 0 0.001v-0 26c0 0 0 0 0 0.001 0 0.166 0.134 0.3 0.3 0.3h1.077c0.166-0 0.3-0.134 0.3-0.3 0-0 0-0.001 0-0.001v0-11.027h14.036c0.166-0 0.301-0.135 0.301-0.301v0-1.078c-0-0.166-0.134-0.3-0.3-0.3-0 0-0.001 0-0.001 0h-14.036v-11.916h15.409c0 0 0 0 0.001 0 0.166 0 0.3-0.134 0.3-0.3v0-1.078c-0-0.166-0.134-0.3-0.3-0.3-0 0-0.001 0-0.001 0h0z">
                            </path>
                        </g>
                    </svg>
    `;

}

function updateBackdropDisplay(icon) {
    const video = document.querySelector('.background-video');
    const source = document.getElementById('video-source');

    const newSource = _manager_js__WEBPACK_IMPORTED_MODULE_0__.changeVideoSource(icon);

    source.src = newSource;
    video.load();
    video.play();

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzRkFBc0YsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsS0FBSyxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFNBQVMsS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxhQUFhLE9BQU8sUUFBUSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFNBQVMsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHlEQUF3QjtBQUN2RCxVQUFVO0FBQ1YsK0JBQStCLDREQUEyQjtBQUMxRDtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDBEQUF5Qjs7QUFFL0M7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztVQ3haQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLENBQUM7V0FDRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0Esc0dBQXNHO1dBQ3RHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQSxFQUFFO1dBQ0Y7V0FDQTs7Ozs7V0NoRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdXNlckludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7fVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jYW52YXMge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogNjVyZW07XG4gICAgaGVpZ2h0OiA0NnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5iYWNrZ3JvdW5kLXZpZGVvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4ubmF2LWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN3aXRjaC1kZWdyZWVzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDMuMnJlbTtcbiAgICBoZWlnaHQ6IDEuNHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgYm94LXNoYWRvdzogMCA0cHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzI3MTcxO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEuNHJlbTtcbiAgICBoZWlnaHQ6IDEuNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuaW5wdXQ6Y2hlY2tlZFt0eXBlPVwiY2hlY2tib3hcIl06OmJlZm9yZSB7XG4gICAgbGVmdDogMS44cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5cblxuXG4jc2VhcmNoLWZvcm0ge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4jc2VhcmNoLWZvcm06aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cblxuI3NlYXJjaC1mb3JtIGlucHV0IHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMCwgMjAsIDIwLCAwLjQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn1cblxuI3NlYXJjaC1mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG5cbiNzZWFyY2gtZm9ybSBpbnB1dDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjYpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuI3NlYXJjaC1mb3JtIGJ1dHRvbjpob3ZlciB7XG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEuMSk7ICovXG59XG5cbiNzZWFyY2gtZm9ybSBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDUzJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuXG5cblxuXG4uYmFzaWMtaW5mbyB7XG4gICAgd2lkdGg6IDIxcmVtO1xuICAgIGhlaWdodDogNi41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbn1cblxuLmJhc2ljLWluZm8+KiB7XG4gICAgZmxleDogMTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuXG5cbi50ZW1wZXJhdHVyZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZ2FwOiA0cHg7XG59XG5cbi50ZW1wZXJhdHVyZS1pY29uIHtcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgICB0b3A6IDFweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5cblxuLmRldGFpbGVkLWNvbnRlbnQge1xuICAgIHdpZHRoOiA1MHJlbTtcbiAgICBoZWlnaHQ6IDMwcmVtO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiA0NSUgMjcuNSUgMjcuNSUgLyAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcbiAgICBnYXA6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4uZGV0YWlsZWQtY29udGVudD5kaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxOHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxOHB4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlYWRpbmdzIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBmb250LXdlaWdodDogMjAwO1xufVxuXG5cbi5mb3JlY2FzdCB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMWZyLCA3KTtcbn1cblxuLmZvcmVjYXN0LWRheXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50ZW1wLXNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi50aW1lbGFwc2Uge1xuICAgIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gLTE7XG59XG5cblxuXG5cblxuXG4uaHVtaWRpdHkge1xuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5odW1pZGl0eS1zdmctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuXG5cblxuLmh1bWlkaXR5LXJpbmcsXG4ud2luZC1yaW5nIHtcbiAgICAvKiBTdGFydCBwcm9ncmVzcyBmcm9tIHRvcCAqL1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG5cbi5odW1pZGl0eS1iZy1yaW5nLFxuLmh1bWlkaXR5LXByb2dyZXNzLXJpbmcsXG4ud2luZC1iZy1yaW5nLFxuLndpbmQtcHJvZ3Jlc3MtcmluZyB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2Utd2lkdGg6IDEwO1xufVxuXG4uaHVtaWRpdHktYmctcmluZyxcbi53aW5kLWJnLXJpbmcge1xuICAgIHN0cm9rZTogI2UwZTBlMDtcbn1cblxuLmh1bWlkaXR5LXByb2dyZXNzLXJpbmcsXG4ud2luZC1wcm9ncmVzcy1yaW5nIHtcbiAgICBzdHJva2U6ICM3MjcxNzE7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIHRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IDAuNXMgZWFzZTtcbn1cblxuLmh1bWlkaXR5LXZhbHVlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuXG5cbi53aW5kIHtcbiAgICBncmlkLWFyZWE6IDIgLyAzIC8gMyAvIDU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ud2luZC1zdmctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ud2luZC1yaW5nLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud2luZC1yaW5nLXZhbHVlcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xufVxuXG4ud2luZC1zcGVlZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ud2luZC1kZWdyZWVzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi53aW5kLWRpcmVjdGlvbiB7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuXG4ucHJlc3N1cmUge1xuICAgIGdyaWQtYXJlYTogMiAvIDUgLyAzIC8gLTE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJlc3N1cmUtdmFsdWUge1xuICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcmVzc3VyZS1tZWFzdXJlbWVudCB7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuXG4udXYge1xuICAgIGdyaWQtYXJlYTogMyAvIDEgLyAtMSAvIDQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnV2LXZhbHVlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udXYtZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG4udXYtYmFyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuXG4uZ3JhZGllbnQtYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGNhZjUwLCAjZmZlYjNiLCAjZjQ0MzM2KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZG90IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4udXYtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG5cbi5zdW4ge1xuICAgIGdyaWQtYXJlYTogMyAvIDQgLyAtMSAvIC0xO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnR3aWxpZ2h0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdW5yaXNlLWhlYWRlcixcbi5zdW5zZXQtaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uc3VucmlzZS12YWx1ZSxcbi5zdW5zZXQtdmFsdWUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cblxuLmhlYWRpbmdzIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4jbG9hZGluZy1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLnNwaW5uZXIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCAjNzI3MTcxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsT0FBTzs7QUFFUDtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xC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QW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQywwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7Ozs7QUFJQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHt9XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuXFxuLmNhbnZhcyB7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHdpZHRoOiA2NXJlbTtcXG4gICAgaGVpZ2h0OiA0NnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5iYWNrZ3JvdW5kLXZpZGVvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN3aXRjaC1kZWdyZWVzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDMuMnJlbTtcXG4gICAgaGVpZ2h0OiAxLjRyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcyNzE3MTtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEuNHJlbTtcXG4gICAgaGVpZ2h0OiAxLjRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkW3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxuICAgIGxlZnQ6IDEuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcblxcblxcblxcbiNzZWFyY2gtZm9ybSB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3NlYXJjaC1mb3JtOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIGlucHV0IHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAyMCwgMjAsIDAuNCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXG59XFxuXFxuI3NlYXJjaC1mb3JtIGlucHV0OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjYpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbiNzZWFyY2gtZm9ybSBidXR0b246aG92ZXIge1xcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMS4xKTsgKi9cXG59XFxuXFxuI3NlYXJjaC1mb3JtIGJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHRvcDogNTMlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcblxcblxcblxcblxcbi5iYXNpYy1pbmZvIHtcXG4gICAgd2lkdGg6IDIxcmVtO1xcbiAgICBoZWlnaHQ6IDYuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4uYmFzaWMtaW5mbz4qIHtcXG4gICAgZmxleDogMTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcblxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi50ZW1wZXJhdHVyZS1pY29uIHtcXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XFxuICAgIHRvcDogMXB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuXFxuXFxuLmRldGFpbGVkLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNTByZW07XFxuICAgIGhlaWdodDogMzByZW07XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDQ1JSAyNy41JSAyNy41JSAvIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLmRldGFpbGVkLWNvbnRlbnQ+ZGl2IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMThweCk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE4cHgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaGVhZGluZ3Mge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuXFxuLmZvcmVjYXN0IHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxZnIsIDcpO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGVtcC1zcGFuIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi50aW1lbGFwc2Uge1xcbiAgICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIC0xO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG4uaHVtaWRpdHkge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLmh1bWlkaXR5LXN2Zy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4uaHVtaWRpdHktcmluZyxcXG4ud2luZC1yaW5nIHtcXG4gICAgLyogU3RhcnQgcHJvZ3Jlc3MgZnJvbSB0b3AgKi9cXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG59XFxuXFxuLmh1bWlkaXR5LWJnLXJpbmcsXFxuLmh1bWlkaXR5LXByb2dyZXNzLXJpbmcsXFxuLndpbmQtYmctcmluZyxcXG4ud2luZC1wcm9ncmVzcy1yaW5nIHtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlLXdpZHRoOiAxMDtcXG59XFxuXFxuLmh1bWlkaXR5LWJnLXJpbmcsXFxuLndpbmQtYmctcmluZyB7XFxuICAgIHN0cm9rZTogI2UwZTBlMDtcXG59XFxuXFxuLmh1bWlkaXR5LXByb2dyZXNzLXJpbmcsXFxuLndpbmQtcHJvZ3Jlc3MtcmluZyB7XFxuICAgIHN0cm9rZTogIzcyNzE3MTtcXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMC41cyBlYXNlO1xcbn1cXG5cXG4uaHVtaWRpdHktdmFsdWUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG5cXG5cXG4ud2luZCB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDMgLyAzIC8gNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi53aW5kLXN2Zy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi53aW5kLXJpbmctY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLndpbmQtcmluZy12YWx1ZXMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxufVxcblxcbi53aW5kLXNwZWVkIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLndpbmQtZGVncmVlcyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi53aW5kLWRpcmVjdGlvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5cXG4ucHJlc3N1cmUge1xcbiAgICBncmlkLWFyZWE6IDIgLyA1IC8gMyAvIC0xO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJlc3N1cmUtdmFsdWUge1xcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcmVzc3VyZS1tZWFzdXJlbWVudCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG5cXG4udXYge1xcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gLTEgLyA0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi51di12YWx1ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udXYtZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi51di1iYXItY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNjY2M7XFxufVxcblxcbi5ncmFkaWVudC1iYXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0Y2FmNTAsICNmZmViM2IsICNmNDQzMzYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZG90IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi51di12YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblxcblxcbi5zdW4ge1xcbiAgICBncmlkLWFyZWE6IDMgLyA0IC8gLTEgLyAtMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udHdpbGlnaHQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnN1bnJpc2UtaGVhZGVyLFxcbi5zdW5zZXQtaGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5zdW5yaXNlLXZhbHVlLFxcbi5zdW5zZXQtdmFsdWUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5cXG4uaGVhZGluZ3Mge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jbG9hZGluZy1vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbi5zcGlubmVyIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiA2cHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICM3MjcxNzE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByZXRyaWV2ZVdlYXRoZXJEYXRhLCBkZWxheSB9IGZyb20gXCIuL21hbmFnZXIuanNcIjtcbmltcG9ydCB7IHJlbmRlckFsbCwgdXBkYXRlRGlzcGxheSB9IGZyb20gXCIuL3VzZXJJbnRlcmZhY2UuanNcIjtcblxuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtZm9ybScpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nLW92ZXJsYXknKTtcbmNvbnN0IGNlbHNpdXMgPSB0cnVlO1xuY29uc3QgZmFocmVuaGVpdCA9IGZhbHNlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoU3VibWl0SGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgY29uc3Qgc2VhcmNoVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWlucHV0JykudmFsdWU7XG4gICAgY29uc3QgdGVtcEJ0blRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2gtZGVncmVlcy1idG4nKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXRyaWV2ZVdlYXRoZXJEYXRhKHNlYXJjaFZhbHVlKTtcblxuICAgICAgICAvLyBEZWxheSBmdW5jdGlvbiB0byBhbGxvdyBsb2FkaW5nIHNjcmVlblxuICAgICAgICBhd2FpdCBkZWxheSg3MDApO1xuXG4gICAgICAgIGlmICh0ZW1wQnRuVG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRlbXBCdG5Ub2dnbGUuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdXBkYXRlRGlzcGxheShmYWhyZW5oZWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlckFsbChkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyb3IpO1xuICAgIH1cblxuICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzZWFyY2hGb3JtLnJlc2V0KCk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRlbXBlcmF0dXJlSGFuZGxlcihlKSB7XG5cbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICB1cGRhdGVEaXNwbGF5KGNlbHNpdXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZURpc3BsYXkoZmFocmVuaGVpdCk7XG4gICAgfVxuXG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyBVSSBmcm9tICcuLi9zcmMvdXNlckludGVyZmFjZS5qcyc7XG5pbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gJy4vbWFuYWdlci5qcyc7XG5pbXBvcnQgeyBzZWFyY2hTdWJtaXRIYW5kbGVyLCB0b2dnbGVUZW1wZXJhdHVyZUhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzLmpzJztcblxuY29uc3QgZGF0YSA9IGF3YWl0IE1hbmFnZXIucmV0cmlldmVXZWF0aGVyRGF0YSgnU3lkbmV5Jyk7XG5VSS5yZW5kZXJBbGwoZGF0YSk7XG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWZvcm0nKTtcbmNvbnN0IHRlbXBlcmF0dXJlVG9nZ2xlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaC1kZWdyZWVzLWJ0bicpO1xuXG5mdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xuICAgIHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc2VhcmNoU3VibWl0SGFuZGxlcik7XG4gICAgdGVtcGVyYXR1cmVUb2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVUZW1wZXJhdHVyZUhhbmRsZXIpO1xuICAgIFxufVxuXG5cbmJpbmRFdmVudHMoKTsiLCJpbXBvcnQgT3ZlcmNhc3QgZnJvbSAnLi9iYWNrZHJvcHMvT3ZlcmNhc3QubXA0JztcbmltcG9ydCBSYWlueSBmcm9tICcuL2JhY2tkcm9wcy9SYWlueS5tcDQnO1xuaW1wb3J0IFN1bm55IGZyb20gJy4vYmFja2Ryb3BzL1N1bm55Lm1wNCc7XG5pbXBvcnQgUGFydGx5Q2xvdWR5IGZyb20gJy4vYmFja2Ryb3BzL1BhcnRseUNsb3VkeS5tcDQnO1xuXG5sZXQgY3VycmVudENoYXJ0ID0gbnVsbDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJldHJpZXZlV2VhdGhlckRhdGEobG9jYXRpb24pIHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtsb2NhdGlvbn0/dW5pdEdyb3VwPXVzJmtleT01Q1kzU0xCSE5FM0VSN005RE5NTlE2VFhCJmNvbnRlbnRUeXBlPWpzb25gO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuXG4gICAgICAgIC8vIFJldHVybnMgYW4gb2JqZWN0IHdpdGggb25seSB0aGUgcmVsZXZhbnQgaW5mb3JtYXRpb24gZnJvbSB0aGUgQVBJIGNhbGxcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiBmb3JtYXRMb2NhdGlvbihkYXRhLnJlc29sdmVkQWRkcmVzcyksXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZTogTWF0aC5yb3VuZChkYXRhLmRheXNbMF0udGVtcCksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGZvcmVjYXN0OiBkYXRhLmRheXMsXG4gICAgICAgICAgICB0aW1lbGFwc2U6IGRhdGEuZGF5cyxcbiAgICAgICAgICAgIGh1bWlkaXR5OiBkYXRhLmN1cnJlbnRDb25kaXRpb25zLmh1bWlkaXR5LFxuICAgICAgICAgICAgd2luZDoge1xuICAgICAgICAgICAgICAgIHNwZWVkOiBkYXRhLmN1cnJlbnRDb25kaXRpb25zLndpbmRzcGVlZCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGRhdGEuY3VycmVudENvbmRpdGlvbnMud2luZGRpclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXNzdXJlOiBkYXRhLmN1cnJlbnRDb25kaXRpb25zLnByZXNzdXJlLFxuICAgICAgICAgICAgdXY6IGRhdGEuY3VycmVudENvbmRpdGlvbnMudXZpbmRleCxcbiAgICAgICAgICAgIHN1bjoge1xuICAgICAgICAgICAgICAgIHRpbWU6IGRhdGEuY3VycmVudENvbmRpdGlvbnMuZGF0ZXRpbWUsXG4gICAgICAgICAgICAgICAgc3VucmlzZTogZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5zdW5yaXNlLFxuICAgICAgICAgICAgICAgIHN1bnNldDogZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5zdW5zZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbjogZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5pY29uXG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RDaXR5RnJvbUFkZHJlc3MoYWRkcmVzcykge1xuICAgIC8vIEZpbmQgcG9zaXRpb24gb2YgdGhlIGZpcnN0IGNvbW1hIG9yIGh5cGhlblxuICAgIGNvbnN0IGluZGV4ID0gYWRkcmVzcy5zZWFyY2goL1ssXFxcXC1dLyk7XG5cbiAgICAvLyBJZiBuZWl0aGVyIGlzIGZvdW5kLCByZXR1cm4gdGhlIHdob2xlIHN0cmluZyB0cmltbWVkXG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIGFkZHJlc3MudHJpbSgpO1xuXG4gICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gdGhlIHN1YnN0cmluZyBiZWZvcmUgdGhlIGNvbW1hIG9yIGh5cGhlblxuICAgIHJldHVybiBhZGRyZXNzLnNsaWNlKDAsIGluZGV4KS50cmltKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRMb2NhdGlvbihhZGRyZXNzKSB7XG4gICAgY29uc3QgYXJyID0gYWRkcmVzcy5zcGxpdCgnICcpO1xuICAgIGNvbnN0IGNpdHkgPSBhcnJbMF07XG4gICAgY29uc3QgY291bnRyeSA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbG9jYXRpb24gPSBbY2l0eSwgY291bnRyeV0uam9pbignICcpO1xuICAgIHJldHVybiBsb2NhdGlvbjtcbn1cblxuLy8gQ29udmVydHMgJzAwOjAwOjAwJyAtLT4gJzAwOjAwJ1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZSkge1xuICAgIHJldHVybiB0aW1lLnNsaWNlKDAsIDUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcGFzc0RpcmVjdGlvbihkZWdyZWUpIHtcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gW1xuICAgICAgICAnTicsICdORScsICdFJywgJ1NFJywgJ1MnLCAnU1cnLCAnVycsICdOVydcbiAgICBdO1xuXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKGRlZ3JlZSAvIDQ1KSAlIDg7XG4gICAgcmV0dXJuIGRpcmVjdGlvbnNbaW5kZXhdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlVXZTY2FsZShpbmRleCkge1xuICAgIGNvbnN0IHNjYWxlID0gW1xuICAgICAgICB7IG1heDogMiwgdmFsdWU6ICdMb3cnIH0sXG4gICAgICAgIHsgbWF4OiA1LCB2YWx1ZTogJ01vZGVyYXRlJyB9LFxuICAgICAgICB7IG1heDogNywgdmFsdWU6ICdIaWdoJyB9LFxuICAgICAgICB7IG1heDogMTAsIHZhbHVlOiAnVmVyeSBIaWdoJyB9LFxuICAgICAgICB7IG1heDogSW5maW5pdHksIHZhbHVlOiAnRXh0cmVtZScgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHNjYWxlLmZpbmQoKGVsKSA9PiBpbmRleCA8PSBlbC5tYXgpLnZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvMTJIb3VyKHN0cmluZykge1xuICAgIGNvbnN0IFtob3VycywgbWludXRlc10gPSBzdHJpbmcuc3BsaXQoJzonKTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldEhvdXJzKGhvdXJzLCBtaW51dGVzKTtcblxuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICBob3VyMTI6IHRydWVcbiAgICB9KVxuICAgICAgICAucmVwbGFjZSgvXjAvLCAnJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNoYXJ0KCkge1xuICAgIGlmIChjdXJyZW50Q2hhcnQpIHtcbiAgICAgICAgY3VycmVudENoYXJ0LmRlc3Ryb3koKTtcbiAgICAgICAgY3VycmVudENoYXJ0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBleGlzdGluZ0NhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNhbnZhcycpO1xuICAgIGlmIChleGlzdGluZ0NhbnZhcykge1xuICAgICAgICBleGlzdGluZ0NhbnZhcy5yZW1vdmUoKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRDaGFydChjaGFydCkge1xuICAgIGN1cnJlbnRDaGFydCA9IGNoYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9DZWxzaXVzKGZhaHJlbmhlaXQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoZmFocmVuaGVpdCAtIDMyKSAqIDUgLyA5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb0ZhaHJlbmhlaXQoY2Vsc2l1cykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKChjZWxzaXVzICogOSAvIDUpICsgMzIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVmlkZW9Tb3VyY2UoaWNvbikge1xuXG4gICAgc3dpdGNoIChpY29uKSB7XG4gICAgICAgIGNhc2UgJ2Nsb3VkeSc6XG4gICAgICAgICAgICByZXR1cm4gT3ZlcmNhc3Q7XG4gICAgICAgIGNhc2UgJ2NsZWFyLWRheSc6XG4gICAgICAgICAgICByZXR1cm4gU3Vubnk7XG4gICAgICAgIGNhc2UgJ3JhaW4nOlxuICAgICAgICAgICAgcmV0dXJuIFJhaW55O1xuICAgICAgICBjYXNlICdwYXJ0bHktY2xvdWR5LWRheSc6XG4gICAgICAgICAgICByZXR1cm4gUGFydGx5Q2xvdWR5O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIE92ZXJjYXN0O1xuICAgIH1cblxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgKiBhcyBNYW5hZ2VyIGZyb20gJy4vbWFuYWdlci5qcyc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0byc7XG5cblxuLy8gQmFzaWMgSW5mbyBFbGVtZW50c1xuY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKTtcbmNvbnN0IHRlbXBlcmF0dXJlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlLXZhbHVlJyk7XG5jb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuXG4vLyBEZXRhaWxlZCBDb250ZW50XG5jb25zdCBmb3JlY2FzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCcpO1xuY29uc3QgdGltZWxhcHNlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVsYXBzZScpO1xuXG5jb25zdCBwcmVzc3VyZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXNzdXJlLXZhbHVlJyk7XG5jb25zdCBwcmVzc3VyZU1lYXN1cmVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXNzdXJlLW1lYXN1cmVtZW50Jyk7XG5cbmZ1bmN0aW9uIHJlbmRlckFsbChkYXRhKSB7XG4gICAgZGlzcGxheUJhc2ljSW5mbyhkYXRhKTtcbiAgICBkaXNwbGF5Rm9yZWNhc3QoZGF0YS5mb3JlY2FzdCk7XG4gICAgZGlzcGxheVRpbWVsYXBzZShkYXRhKTtcbiAgICBkaXNwbGF5SHVtaWRpdHkoZGF0YS5odW1pZGl0eSk7XG4gICAgZGlzcGxheVdpbmQoZGF0YS53aW5kKTtcbiAgICBkaXNwbGF5UHJlc3N1cmUoZGF0YS5wcmVzc3VyZSk7XG4gICAgZGlzcGxheVVWKGRhdGEudXYpO1xuICAgIGRpc3BsYXlTdW5yaXNlKGRhdGEuc3VuKTtcbiAgICB1cGRhdGVCYWNrZHJvcERpc3BsYXkoZGF0YS5pY29uKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBkaXNwbGF5Q2Vsc2l1cygpO1xuICAgICAgICB1cGRhdGVCYXNpY0luZm9UZW1wRGlzcGxheXModHJ1ZSk7XG4gICAgICAgIHVwZGF0ZUZvcmVjYXN0VGVtcERpc3BsYXlzKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlGYWhyZW5oZWl0KCk7XG4gICAgICAgIHVwZGF0ZUJhc2ljSW5mb1RlbXBEaXNwbGF5cyhmYWxzZSk7XG4gICAgICAgIHVwZGF0ZUZvcmVjYXN0VGVtcERpc3BsYXlzKGZhbHNlKTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheUJhc2ljSW5mbyhkYXRhKSB7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRhdGEubG9jYXRpb247XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkYXRhLnRlbXBlcmF0dXJlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGF0YS5kZXNjcmlwdGlvbjtcblxuICAgIGxvY2F0aW9uRGl2LmlubmVySFRNTCA9IGFkZHJlc3M7XG4gICAgdGVtcGVyYXR1cmVEaXYuaW5uZXJIVE1MID0gdGVtcGVyYXR1cmU7XG4gICAgZGVzY3JpcHRpb25EaXYuaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheUZvcmVjYXN0KGRhdGEpIHtcbiAgICAvLyBDbGVhciBwcmV2aW91cyBkYXRhXG4gICAgZm9yZWNhc3REaXYudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IGRheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAvLyBDb252ZXJ0IHRvIERhdGUgb2JqZWN0IFxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKGRhdGEuYXQoaSkuZGF0ZXRpbWUpO1xuXG4gICAgICAgIC8vIENvbnZlcnQgdG8gZGF5XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXkgPSBkYXlzW2N1cnJlbnREYXRlLmdldERheSgpXTtcbiAgICAgICAgY29uc3QgY3VycmVudFRlbXAgPSBNYXRoLnJvdW5kKGRhdGEuYXQoaSkudGVtcCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIDcgZGl2cyBpbnNpZGUgZm9yZWNhc3QgZm9yIGVhY2ggZGF5XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtZGF5cycpO1xuICAgICAgICBkaXYuZGF0YXNldC5kYXkgPSBjdXJyZW50RGF5O1xuXG4gICAgICAgIGNvbnN0IGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxlZnREaXYuaW5uZXJIVE1MID0gY3VycmVudERheTtcblxuICAgICAgICBjb25zdCByaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByaWdodERpdi5jbGFzc0xpc3QuYWRkKCdpY29uLXZhbHVlJyk7XG5cbiAgICAgICAgY29uc3QgaWNvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGljb25TcGFuLmNsYXNzTGlzdC5hZGQoJ2ljb24tc3BhbicpO1xuXG4gICAgICAgIGNvbnN0IHRlbXBTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0ZW1wU3Bhbi5jbGFzc0xpc3QuYWRkKCd0ZW1wLXNwYW4nKTtcbiAgICAgICAgdGVtcFNwYW4uaW5uZXJIVE1MID0gY3VycmVudFRlbXA7XG5cbiAgICAgICAgcmlnaHREaXYuYXBwZW5kKGljb25TcGFuKTtcbiAgICAgICAgcmlnaHREaXYuYXBwZW5kKHRlbXBTcGFuKTtcbiAgICAgICAgZGl2LmFwcGVuZChsZWZ0RGl2KTtcbiAgICAgICAgZGl2LmFwcGVuZChyaWdodERpdik7XG5cbiAgICAgICAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUaW1lbGFwc2UoZGF0YSkge1xuICAgIE1hbmFnZXIuY2xlYXJDaGFydCgpO1xuXG4gICAgY29uc3Qgd2Vla2x5RGF0YSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgd2Vla2x5RGF0YS5wdXNoKGRhdGEudGltZWxhcHNlLmF0KGkpKVxuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRUaW1lbGFwc2UgPSB3ZWVrbHlEYXRhLmF0KDApLmhvdXJzO1xuXG4gICAgY29uc3QgdGltZWxhcHNlRGF0YSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBob3VyIGluIGN1cnJlbnRUaW1lbGFwc2UpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFRpbWVsYXBzZVtob3VyXSk7XG4gICAgICAgIHRpbWVsYXBzZURhdGEucHVzaCh7XG4gICAgICAgICAgICB0aW1lOiBNYW5hZ2VyLmZvcm1hdFRpbWUoY3VycmVudFRpbWVsYXBzZVtob3VyXS5kYXRldGltZSksXG4gICAgICAgICAgICB2YWx1ZTogY3VycmVudFRpbWVsYXBzZVtob3VyXS50ZW1wXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHRpbWVsYXBzZURhdGEpO1xuXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLmlkID0gJ215Q2FudmFzJztcbiAgICBjYW52YXMuc3R5bGUud2lkdGggPSAnNjAwJztcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzIwMCc7XG4gICAgdGltZWxhcHNlRGl2LmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cbiAgICBjb25zdCBsYWJlbHMgPSB0aW1lbGFwc2VEYXRhLm1hcChkYXRhID0+IGRhdGEudGltZSk7XG4gICAgY29uc3QgdmFsdWVzID0gdGltZWxhcHNlRGF0YS5tYXAoZGF0YSA9PiBkYXRhLnZhbHVlKTtcblxuICAgIGNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNhbnZhcycpLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCB0aW1lbGFwc2VDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsIDE5MiwgMTkyLCAwLjIpJyxcbiAgICAgICAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBvaW50UmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgIHRlbnNpb246IDAuM1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgeDoge1xuICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvU2tpcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFRpY2tzTGltaXQ6IDEyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDEyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodDogJzEwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDEyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodDogJzEwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2VcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgTWFuYWdlci5zZXRDdXJyZW50Q2hhcnQodGltZWxhcHNlQ2hhcnQpO1xuXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIdW1pZGl0eShkYXRhKSB7XG4gICAgY29uc3QgaHVtaWRpdHlQZXJjZW50ID0gTWF0aC5yb3VuZChkYXRhKTtcbiAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHktcHJvZ3Jlc3MtcmluZycpO1xuICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5LXZhbHVlJyk7XG4gICAgY29uc3QgcmFkaXVzID0gNTA7XG4gICAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogcmFkaXVzO1xuXG4gICAgY29uc3Qgb2Zmc2V0ID0gY2lyY3VtZmVyZW5jZSAtIChodW1pZGl0eVBlcmNlbnQgLyAxMDApICogY2lyY3VtZmVyZW5jZTtcblxuICAgIGNpcmNsZS5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBjaXJjdW1mZXJlbmNlO1xuICAgIGNpcmNsZS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHZhbHVlLnRleHRDb250ZW50ID0gYCR7aHVtaWRpdHlQZXJjZW50fSVgO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2luZChkYXRhKSB7XG4gICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtcHJvZ3Jlc3MtcmluZycpO1xuICAgIGNvbnN0IGRpcmVjdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1kaXJlY3Rpb24nKTtcbiAgICBjb25zdCBkZWdyZWVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtZGVncmVlcycpO1xuICAgIGNvbnN0IHNwZWVkVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkJyk7XG5cbiAgICBjb25zdCByYWRpdXMgPSA1MDtcbiAgICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIE1hdGguUEkgKiByYWRpdXM7XG5cbiAgICBjb25zdCBwZXJjZW50YWdlID0gZGF0YS5kaXJlY3Rpb24gLyAzNjA7IC8vICUgb2YgdGhlIGNpcmNsZSB0byBzaG93XG4gICAgY29uc3Qgb2Zmc2V0ID0gY2lyY3VtZmVyZW5jZSAqICgxIC0gcGVyY2VudGFnZSk7XG5cbiAgICBjaXJjbGUuc3R5bGUuc3Ryb2tlRGFzaGFycmF5ID0gY2lyY3VtZmVyZW5jZTtcbiAgICBjaXJjbGUuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IG9mZnNldDtcblxuICAgIGRlZ3JlZVRleHQuaW5uZXJIVE1MID0gZGF0YS5kaXJlY3Rpb24gKyAnXFx1MDBCMCc7XG4gICAgZGlyZWN0aW9uVGV4dC50ZXh0Q29udGVudCA9IE1hbmFnZXIuZ2V0Q29tcGFzc0RpcmVjdGlvbihkYXRhLmRpcmVjdGlvbik7XG4gICAgc3BlZWRUZXh0LnRleHRDb250ZW50ID0gYCR7ZGF0YS5zcGVlZH0ga20vaGA7XG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheVByZXNzdXJlKGRhdGEpIHtcbiAgICBwcmVzc3VyZVZhbHVlLmlubmVySFRNTCA9IGRhdGE7XG4gICAgcHJlc3N1cmVNZWFzdXJlbWVudC5pbm5lckhUTUwgPSAnIGhQYS9tYic7XG5cbiAgICBwcmVzc3VyZVZhbHVlLmFwcGVuZENoaWxkKHByZXNzdXJlTWVhc3VyZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VVYoZGF0YSwgbWF4ID0gMTEpIHtcbiAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5taW4oZGF0YSAvIG1heCwgMSk7XG4gICAgY29uc3QgZG90ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3V2LWRvdCcpO1xuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnV2LWJhci1jb250YWluZXInKS5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCB1dlZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnV2LXZhbHVlJyk7XG4gICAgY29uc3QgdXZEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51di1kZXNjcmlwdGlvbicpO1xuXG4gICAgZG90LnN0eWxlLmxlZnQgPSBgJHtwZXJjZW50ICogY29udGFpbmVyV2lkdGh9cHhgO1xuICAgIHV2VmFsdWUudGV4dENvbnRlbnQgPSBkYXRhO1xuICAgIHV2RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBNYW5hZ2VyLmNhbGN1bGF0ZVV2U2NhbGUoZGF0YSk7XG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheVN1bnJpc2UoZGF0YSkge1xuICAgIGNvbnN0IHRpbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpO1xuXG4gICAgY29uc3Qgc3VucmlzZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5yaXNlLWhlYWRlcicpO1xuICAgIGNvbnN0IHN1bnJpc2VWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5yaXNlLXZhbHVlJyk7XG5cbiAgICBjb25zdCBzdW5zZXRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vuc2V0LWhlYWRlcicpO1xuICAgIGNvbnN0IHN1bnNldFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnNldC12YWx1ZScpO1xuXG4gICAgc3VucmlzZUhlYWRlci50ZXh0Q29udGVudCA9ICdTdW5yaXNlJztcbiAgICBzdW5yaXNlVmFsdWUudGV4dENvbnRlbnQgPSBNYW5hZ2VyLmNvbnZlcnRUbzEySG91cihkYXRhLnN1bnJpc2UpO1xuXG4gICAgc3Vuc2V0SGVhZGVyLnRleHRDb250ZW50ID0gJ1N1bnNldCc7XG4gICAgc3Vuc2V0VmFsdWUudGV4dENvbnRlbnQgPSBNYW5hZ2VyLmNvbnZlcnRUbzEySG91cihkYXRhLnN1bnNldCk7XG5cbn1cblxuZnVuY3Rpb24gdXBkYXRlQmFzaWNJbmZvVGVtcERpc3BsYXlzKHZhbHVlKSB7XG4gICAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS12YWx1ZScpO1xuICAgIGNvbnN0IHRlbXBWYWx1ZSA9IE51bWJlcih0ZW1wRGl2LnRleHRDb250ZW50KTtcbiAgICBjb25zdCB0ZW1wSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS1pY29uJyk7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGVtcERpdi50ZXh0Q29udGVudCA9IE1hbmFnZXIuY29udmVydFRvQ2Vsc2l1cyh0ZW1wVmFsdWUpO1xuICAgICAgICB0ZW1wSWNvbi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cIndoaXRlXCIgaGVpZ2h0PVwiMjBcIiB3aWR0aD1cIjIwXCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDgzLjA3NiA0ODMuMDc2XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBzdHJva2U9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjAuMDA0ODMwNzYwMDAwMDAwMDAxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2ljb25DYXJyaWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEwMCw1NC4wMzhjMC0yNy41Ny0yMi40My01MC01MC01MHMtNTAsMjIuNDMtNTAsNTBzMjIuNDMsNTAsNTAsNTBTMTAwLDgxLjYwOCwxMDAsNTQuMDM4eiBNNTAsNzQuMDM4IGMtMTEuMDI4LDAtMjAtOC45NzItMjAtMjBzOC45NzItMjAsMjAtMjBzMjAsOC45NzIsMjAsMjBTNjEuMDI4LDc0LjAzOCw1MCw3NC4wMzh6XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjk3LjI5NSw0NDkuMDM4Yy0xMDAuOTA3LDAtMTgzLTgyLjA5NC0xODMtMTgzczgyLjA5My0xODMsMTgzLTE4M2M2Ni4wNTIsMCwxMjcuMjE4LDM1LjgxNiwxNTkuNjI5LDkzLjQ3MmwyNi4xNTEtMTQuNzAxIEM0NDUuMzU5LDk0LjcxNywzNzQuMTcyLDUzLjAzOCwyOTcuMjk1LDUzLjAzOGMtMTE3LjQ0OSwwLTIxMyw5NS41NTEtMjEzLDIxM3M5NS41NTEsMjEzLDIxMywyMTMgYzc2Ljg3NywwLDE0OC4wNjQtNDEuNjc5LDE4NS43ODEtMTA4Ljc3MWwtMjYuMTUxLTE0LjcwMUM0MjQuNTEzLDQxMy4yMjEsMzYzLjM0Nyw0NDkuMDM4LDI5Ny4yOTUsNDQ5LjAzOHpcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIGA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGVtcERpdi50ZXh0Q29udGVudCA9IE1hbmFnZXIuY29udmVydFRvRmFocmVuaGVpdCh0ZW1wVmFsdWUpO1xuICAgICAgICB0ZW1wSWNvbi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cIndoaXRlXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuMjhcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQuMjkzIDEuMjVjLTAgMC0wIDAtMCAwLTEuNjI4IDAtMi45NDggMS4zMi0yLjk0OCAyLjk0OHMxLjMyIDIuOTQ4IDIuOTQ4IDIuOTQ4YzEuNjI4IDAgMi45NDctMS4zMTkgMi45NDgtMi45NDd2LTBjLTAuMDAyLTEuNjI3LTEuMzItMi45NDYtMi45NDctMi45NDhoLTB6TTQuMjkzIDUuNjQ2Yy0wIDAtMCAwLTAgMC0wLjggMC0xLjQ0OC0wLjY0OC0xLjQ0OC0xLjQ0OHMwLjY0OC0xLjQ0OCAxLjQ0OC0xLjQ0OGMwLjggMCAxLjQ0OCAwLjY0OCAxLjQ0OCAxLjQ0OCAwIDAgMCAwIDAgMC4wMDF2LTBjLTAuMDAxIDAuNzk5LTAuNjQ4IDEuNDQ2LTEuNDQ3IDEuNDQ3aC0wek0yOS45MDQgMy43aC0xNi43ODZjLTAgMC0wIDAtMC4wMDEgMC0wLjE2NSAwLTAuMjk5IDAuMTM0LTAuMjk5IDAuMjk5IDAgMCAwIDAgMCAwLjAwMXYtMCAyNmMwIDAgMCAwIDAgMC4wMDEgMCAwLjE2NiAwLjEzNCAwLjMgMC4zIDAuM2gxLjA3N2MwLjE2Ni0wIDAuMy0wLjEzNCAwLjMtMC4zIDAtMCAwLTAuMDAxIDAtMC4wMDF2MC0xMS4wMjdoMTQuMDM2YzAuMTY2LTAgMC4zMDEtMC4xMzUgMC4zMDEtMC4zMDF2MC0xLjA3OGMtMC0wLjE2Ni0wLjEzNC0wLjMtMC4zLTAuMy0wIDAtMC4wMDEgMC0wLjAwMSAwaC0xNC4wMzZ2LTExLjkxNmgxNS40MDljMCAwIDAgMCAwLjAwMSAwIDAuMTY2IDAgMC4zLTAuMTM0IDAuMy0wLjN2MC0xLjA3OGMtMC0wLjE2Ni0wLjEzNC0wLjMtMC4zLTAuMy0wIDAtMC4wMDEgMC0wLjAwMSAwaDB6XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICBgO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlRm9yZWNhc3RUZW1wRGlzcGxheXModmFsdWUpIHtcbiAgICBjb25zdCBmb3JlY2FzdFRlbXBTcGFucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wLXNwYW4nKTtcblxuICAgIGZvcmVjYXN0VGVtcFNwYW5zLmZvckVhY2goc3BhbiA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBWYWx1ZSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gTWFuYWdlci5jb252ZXJ0VG9DZWxzaXVzKHRlbXBWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gTWFuYWdlci5jb252ZXJ0VG9GYWhyZW5oZWl0KHRlbXBWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDZWxzaXVzKCkge1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS1pY29uJyk7XG4gICAgY29uc3QgdGVtcGVyYXR1cmVCdG5EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlLWRpc3BsYXknKTtcblxuICAgIHRlbXBlcmF0dXJlSWNvbi5pbm5lckhUTUwgPSAnJztcbiAgICB0ZW1wZXJhdHVyZUJ0bkRpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG5cbiAgICB0ZW1wZXJhdHVyZUljb24uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCJ3aGl0ZVwiIGhlaWdodD1cIjIwXCIgd2lkdGg9XCIyMFwiIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ4My4wNzYgNDgzLjA3NlwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgc3Ryb2tlPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIwLjAwNDgzMDc2MDAwMDAwMDAwMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMDAsNTQuMDM4YzAtMjcuNTctMjIuNDMtNTAtNTAtNTBzLTUwLDIyLjQzLTUwLDUwczIyLjQzLDUwLDUwLDUwUzEwMCw4MS42MDgsMTAwLDU0LjAzOHogTTUwLDc0LjAzOCBjLTExLjAyOCwwLTIwLTguOTcyLTIwLTIwczguOTcyLTIwLDIwLTIwczIwLDguOTcyLDIwLDIwUzYxLjAyOCw3NC4wMzgsNTAsNzQuMDM4elwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI5Ny4yOTUsNDQ5LjAzOGMtMTAwLjkwNywwLTE4My04Mi4wOTQtMTgzLTE4M3M4Mi4wOTMtMTgzLDE4My0xODNjNjYuMDUyLDAsMTI3LjIxOCwzNS44MTYsMTU5LjYyOSw5My40NzJsMjYuMTUxLTE0LjcwMSBDNDQ1LjM1OSw5NC43MTcsMzc0LjE3Miw1My4wMzgsMjk3LjI5NSw1My4wMzhjLTExNy40NDksMC0yMTMsOTUuNTUxLTIxMywyMTNzOTUuNTUxLDIxMywyMTMsMjEzIGM3Ni44NzcsMCwxNDguMDY0LTQxLjY3OSwxODUuNzgxLTEwOC43NzFsLTI2LjE1MS0xNC43MDFDNDI0LjUxMyw0MTMuMjIxLDM2My4zNDcsNDQ5LjAzOCwyOTcuMjk1LDQ0OS4wMzh6XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgIGA7XG5cbiAgICB0ZW1wZXJhdHVyZUJ0bkRpc3BsYXkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGZpbGw9XCJ3aGl0ZVwiIGhlaWdodD1cIjI0XCIgd2lkdGg9XCIyNFwiIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ4My4wNzYgNDgzLjA3NlwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgc3Ryb2tlPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIwLjAwNDgzMDc2MDAwMDAwMDAwMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMDAsNTQuMDM4YzAtMjcuNTctMjIuNDMtNTAtNTAtNTBzLTUwLDIyLjQzLTUwLDUwczIyLjQzLDUwLDUwLDUwUzEwMCw4MS42MDgsMTAwLDU0LjAzOHogTTUwLDc0LjAzOCBjLTExLjAyOCwwLTIwLTguOTcyLTIwLTIwczguOTcyLTIwLDIwLTIwczIwLDguOTcyLDIwLDIwUzYxLjAyOCw3NC4wMzgsNTAsNzQuMDM4elwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI5Ny4yOTUsNDQ5LjAzOGMtMTAwLjkwNywwLTE4My04Mi4wOTQtMTgzLTE4M3M4Mi4wOTMtMTgzLDE4My0xODNjNjYuMDUyLDAsMTI3LjIxOCwzNS44MTYsMTU5LjYyOSw5My40NzJsMjYuMTUxLTE0LjcwMSBDNDQ1LjM1OSw5NC43MTcsMzc0LjE3Miw1My4wMzgsMjk3LjI5NSw1My4wMzhjLTExNy40NDksMC0yMTMsOTUuNTUxLTIxMywyMTNzOTUuNTUxLDIxMywyMTMsMjEzIGM3Ni44NzcsMCwxNDguMDY0LTQxLjY3OSwxODUuNzgxLTEwOC43NzFsLTI2LjE1MS0xNC43MDFDNDI0LjUxMyw0MTMuMjIxLDM2My4zNDcsNDQ5LjAzOCwyOTcuMjk1LDQ0OS4wMzh6XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgIGA7XG5cbn1cblxuZnVuY3Rpb24gZGlzcGxheUZhaHJlbmhlaXQoKSB7XG4gICAgY29uc3QgdGVtcGVyYXR1cmVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlLWljb24nKTtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZUJ0bkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUtZGlzcGxheScpO1xuXG4gICAgdGVtcGVyYXR1cmVJY29uLmlubmVySFRNTCA9ICcnO1xuICAgIHRlbXBlcmF0dXJlQnRuRGlzcGxheS5pbm5lckhUTUwgPSAnJztcblxuICAgIHRlbXBlcmF0dXJlSWNvbi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgZmlsbD1cIndoaXRlXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuMjhcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX3RyYWNlckNhcnJpZXJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj48L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQuMjkzIDEuMjVjLTAgMC0wIDAtMCAwLTEuNjI4IDAtMi45NDggMS4zMi0yLjk0OCAyLjk0OHMxLjMyIDIuOTQ4IDIuOTQ4IDIuOTQ4YzEuNjI4IDAgMi45NDctMS4zMTkgMi45NDgtMi45NDd2LTBjLTAuMDAyLTEuNjI3LTEuMzItMi45NDYtMi45NDctMi45NDhoLTB6TTQuMjkzIDUuNjQ2Yy0wIDAtMCAwLTAgMC0wLjggMC0xLjQ0OC0wLjY0OC0xLjQ0OC0xLjQ0OHMwLjY0OC0xLjQ0OCAxLjQ0OC0xLjQ0OGMwLjggMCAxLjQ0OCAwLjY0OCAxLjQ0OCAxLjQ0OCAwIDAgMCAwIDAgMC4wMDF2LTBjLTAuMDAxIDAuNzk5LTAuNjQ4IDEuNDQ2LTEuNDQ3IDEuNDQ3aC0wek0yOS45MDQgMy43aC0xNi43ODZjLTAgMC0wIDAtMC4wMDEgMC0wLjE2NSAwLTAuMjk5IDAuMTM0LTAuMjk5IDAuMjk5IDAgMCAwIDAgMCAwLjAwMXYtMCAyNmMwIDAgMCAwIDAgMC4wMDEgMCAwLjE2NiAwLjEzNCAwLjMgMC4zIDAuM2gxLjA3N2MwLjE2Ni0wIDAuMy0wLjEzNCAwLjMtMC4zIDAtMCAwLTAuMDAxIDAtMC4wMDF2MC0xMS4wMjdoMTQuMDM2YzAuMTY2LTAgMC4zMDEtMC4xMzUgMC4zMDEtMC4zMDF2MC0xLjA3OGMtMC0wLjE2Ni0wLjEzNC0wLjMtMC4zLTAuMy0wIDAtMC4wMDEgMC0wLjAwMSAwaC0xNC4wMzZ2LTExLjkxNmgxNS40MDljMCAwIDAgMCAwLjAwMSAwIDAuMTY2IDAgMC4zLTAuMTM0IDAuMy0wLjN2MC0xLjA3OGMtMC0wLjE2Ni0wLjEzNC0wLjMtMC4zLTAuMy0wIDAtMC4wMDEgMC0wLjAwMSAwaDB6XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICBgO1xuXG4gICAgdGVtcGVyYXR1cmVCdG5EaXNwbGF5LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBmaWxsPVwid2hpdGVcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS4yOFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJTVkdSZXBvX2JnQ2FycmllclwiIHN0cm9rZS13aWR0aD1cIjBcIj48L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNC4yOTMgMS4yNWMtMCAwLTAgMC0wIDAtMS42MjggMC0yLjk0OCAxLjMyLTIuOTQ4IDIuOTQ4czEuMzIgMi45NDggMi45NDggMi45NDhjMS42MjggMCAyLjk0Ny0xLjMxOSAyLjk0OC0yLjk0N3YtMGMtMC4wMDItMS42MjctMS4zMi0yLjk0Ni0yLjk0Ny0yLjk0OGgtMHpNNC4yOTMgNS42NDZjLTAgMC0wIDAtMCAwLTAuOCAwLTEuNDQ4LTAuNjQ4LTEuNDQ4LTEuNDQ4czAuNjQ4LTEuNDQ4IDEuNDQ4LTEuNDQ4YzAuOCAwIDEuNDQ4IDAuNjQ4IDEuNDQ4IDEuNDQ4IDAgMCAwIDAgMCAwLjAwMXYtMGMtMC4wMDEgMC43OTktMC42NDggMS40NDYtMS40NDcgMS40NDdoLTB6TTI5LjkwNCAzLjdoLTE2Ljc4NmMtMCAwLTAgMC0wLjAwMSAwLTAuMTY1IDAtMC4yOTkgMC4xMzQtMC4yOTkgMC4yOTkgMCAwIDAgMCAwIDAuMDAxdi0wIDI2YzAgMCAwIDAgMCAwLjAwMSAwIDAuMTY2IDAuMTM0IDAuMyAwLjMgMC4zaDEuMDc3YzAuMTY2LTAgMC4zLTAuMTM0IDAuMy0wLjMgMC0wIDAtMC4wMDEgMC0wLjAwMXYwLTExLjAyN2gxNC4wMzZjMC4xNjYtMCAwLjMwMS0wLjEzNSAwLjMwMS0wLjMwMXYwLTEuMDc4Yy0wLTAuMTY2LTAuMTM0LTAuMy0wLjMtMC4zLTAgMC0wLjAwMSAwLTAuMDAxIDBoLTE0LjAzNnYtMTEuOTE2aDE1LjQwOWMwIDAgMCAwIDAuMDAxIDAgMC4xNjYgMCAwLjMtMC4xMzQgMC4zLTAuM3YwLTEuMDc4Yy0wLTAuMTY2LTAuMTM0LTAuMy0wLjMtMC4zLTAgMC0wLjAwMSAwLTAuMDAxIDBoMHpcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgIGA7XG5cbn1cblxuZnVuY3Rpb24gdXBkYXRlQmFja2Ryb3BEaXNwbGF5KGljb24pIHtcbiAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kLXZpZGVvJyk7XG4gICAgY29uc3Qgc291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvLXNvdXJjZScpO1xuXG4gICAgY29uc3QgbmV3U291cmNlID0gTWFuYWdlci5jaGFuZ2VWaWRlb1NvdXJjZShpY29uKTtcblxuICAgIHNvdXJjZS5zcmMgPSBuZXdTb3VyY2U7XG4gICAgdmlkZW8ubG9hZCgpO1xuICAgIHZpZGVvLnBsYXkoKTtcblxufVxuXG5leHBvcnQgeyByZW5kZXJBbGwsIHVwZGF0ZUJhY2tkcm9wRGlzcGxheSwgdXBkYXRlRGlzcGxheSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgcXVldWUuZCA8IDEpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gLTEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgcXVldWUuZCA8IDAgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
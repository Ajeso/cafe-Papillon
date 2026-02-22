/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/herobg.jpg */ \"./src/images/herobg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/about.jpg */ \"./src/images/about.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/about-hero.avif */ \"./src/images/about-hero.avif\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* ======================\n   CSS Variables\n   ====================== */\n\n:root {\n  /* Backgrounds */\n  --bg-main: #f7f5f2;\n  --bg-section: #f1ebe1;\n\n  /* Text colors */\n  --text-dark: #4b3621;\n  --text-accent: #8c7b66;\n  --text-light: #6b5d52;\n\n  /* Button colors */\n  --btn-light: #ffffff;\n  --btn-hover: rgba(255, 255, 255, 0.1);\n\n  /* Fonts */\n  --font-heading: \"Playfair Display\", Georgia, serif;\n  --font-body: \"Lato\", \"Inter\", sans-serif;\n}\n\n/* ======================\n   Base Styles\n   ====================== */\n\nbody {\n  background-color: var(--bg-main);\n  font-family: var(--font-body);\n  color: var(--text-dark);\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: var(--font-heading);\n  font-weight: 400;\n}\n\nh2 {\n  font-size: 3rem;\n  font-style: italic;\n  letter-spacing: 2px;\n}\n\np {\n  line-height: 1.8;\n}\n\n/* ======================\n   Navigation\n   ====================== */\n\nnav {\n  display: flex;\n  justify-content: space-around;\n}\n\n.nav-link {\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: var(--text-dark);\n  text-decoration: none;\n  margin: 0 20px;\n  transition: color 0.3s ease;\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n\n.nav-link:hover {\n  color: var(--text-accent);\n}\n\n/* ======================\n   Hero Section\n   ====================== */\n\n.hero {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  background-position: center;\n  width: 100vw;\n  height: 60vh;\n  position: relative;\n}\n\n.hero::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: rgba(75, 54, 33, 0.35);\n}\n\n.hero-content {\n  position: absolute;\n  width: 100%;\n  color: white;\n  text-align: center;\n}\n\n.hero-content h2 {\n  font-size: 4rem;\n  font-weight: 600;\n}\n\n.hero-content button {\n  margin-top: 1rem;\n  padding: 12px;\n  width: 140px;\n  font-size: 16px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.hero-content .btn-primary {\n  background-color: transparent;\n  color: var(--btn-light);\n  border: 1px solid var(--btn-light);\n  margin-right: 1rem;\n}\n\n.hero-content .btn-primary:hover {\n  background-color: var(--btn-hover);\n}\n\n.hero-content .btn-secondary {\n  background-color: var(--btn-light);\n  color: var(--text-dark);\n  border: 1px solid var(--btn-light);\n}\n\n.hero-content .btn-secondary:hover {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n/* ======================\n   About Section (Home Page)\n   ====================== */\n\n.about {\n  width: 75%;\n  display: flex;\n  gap: 32px;\n  margin: auto;\n  padding-top: 3rem;\n  height: 30vh;\n}\n\n.about-img {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-size: cover;\n  background-position: center;\n  border-radius: 5px;\n  width: 35%;\n}\n\n.about-text {\n  width: 40%;\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 50px;\n  color: var(--text-accent);\n}\n\n/* ======================\n   Section Titles (Shared Styles)\n   ====================== */\n\n.offerings-title,\n.visit-us-title,\n.values-title {\n  font-family: var(--font-heading);\n  font-size: 2.5rem;\n  font-style: italic;\n  color: var(--text-dark);\n  margin-bottom: 50px;\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n\n/* Decorative lines before and after titles */\n.offerings-title::before,\n.offerings-title::after,\n.visit-us-title::before,\n.visit-us-title::after,\n.values-title::before,\n.values-title::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  height: 1px;\n  background-color: var(--text-accent);\n}\n\n.offerings-title::before,\n.visit-us-title::before,\n.values-title::before {\n  left: 0;\n  width: 30%;\n}\n\n.offerings-title::after,\n.visit-us-title::after,\n.values-title::after {\n  right: 0;\n  width: 30%;\n}\n\n.values-title::before,\n.values-title::after {\n  width: 25%;\n}\n\n/* ======================\n   What We Offer Section\n   ====================== */\n\n.offerings {\n  max-width: 1200px;\n  margin: 60px auto;\n  padding: 0 20px;\n  text-align: center;\n}\n\n.offerings-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 40px;\n  margin-top: 40px;\n}\n\n.offering-card {\n  background-color: var(--bg-section);\n  padding: 40px 30px;\n  border-radius: 12px;\n  text-align: center;\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease;\n}\n\n.offering-card:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n\n.offering-card img {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 20px;\n  filter: brightness(0) saturate(100%) invert(25%) sepia(20%) saturate(1000%)\n    hue-rotate(15deg);\n}\n\n.offering-card h3 {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--text-dark);\n  margin-bottom: 15px;\n}\n\n.offering-card p {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: var(--text-light);\n  margin: 0;\n}\n\n/* ======================\n   Quote Section\n   ====================== */\n\n.quote-section {\n  background-color: var(--bg-section);\n  padding: 60px 20px;\n  margin: 80px 0;\n  text-align: center;\n}\n\n.quote-section blockquote {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 0 40px;\n  font-family: var(--font-heading);\n  font-size: 1.8rem;\n  font-style: italic;\n  line-height: 1.6;\n  color: var(--text-dark);\n  position: relative;\n}\n\n.quote-section blockquote::before {\n  content: '\"';\n  position: absolute;\n  left: -10px;\n  top: -20px;\n  font-family: Georgia, serif;\n  font-size: 4rem;\n  color: var(--text-accent);\n}\n\n.quote-section blockquote::after {\n  content: '\"';\n  position: absolute;\n  right: -10px;\n  bottom: -40px;\n  font-family: Georgia, serif;\n  font-size: 4rem;\n  color: var(--text-accent);\n}\n\n/* ======================\n   Visit Us Section\n   ====================== */\n\n.visit-us {\n  max-width: 1200px;\n  margin: 60px auto;\n  padding: 0 20px;\n  text-align: center;\n}\n\n.visit-us-title {\n  margin-bottom: 30px;\n}\n\n.visit-us-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0;\n  margin-top: 20px;\n}\n\n.visit-card {\n  background-color: transparent;\n  padding: 20px 15px;\n  text-align: center;\n  border-right: 1px solid var(--text-accent);\n}\n\n.visit-card:last-child {\n  border-right: none;\n}\n\n.visit-card img {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 15px;\n  filter: brightness(0) saturate(100%) invert(25%) sepia(20%) saturate(1000%)\n    hue-rotate(15deg);\n}\n\n.visit-card i {\n  font-size: 2.5rem;\n  color: var(--text-accent);\n  margin-bottom: 15px;\n  display: block;\n}\n\n.visit-card h3 {\n  font-family: var(--font-heading);\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--text-dark);\n  margin-bottom: 8px;\n}\n\n.visit-card p {\n  font-size: 1rem;\n  color: var(--text-accent);\n  margin: 5px 0 0 0;\n}\n\n/* ======================\n   About Page Styles\n   ====================== */\n\n.about-hero {\n  background:\n    linear-gradient(rgba(75, 54, 33, 0.5), rgba(75, 54, 33, 0.5)),\n    url(${___CSS_LOADER_URL_REPLACEMENT_2___}) center/cover;\n  height: 40vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  text-align: center;\n}\n\n.about-hero-content h2 {\n  font-size: 3.5rem;\n  margin-bottom: 10px;\n}\n\n.about-hero-content p {\n  font-size: 1.3rem;\n  font-style: italic;\n}\n\n.story-section {\n  max-width: 1200px;\n  margin: 80px auto;\n  padding: 0 20px;\n}\n\n.story-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n\n.story-img-bg {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) center/cover;\n  height: 400px;\n  border-radius: 12px;\n}\n\n.story-text h3 {\n  font-family: var(--font-heading);\n  font-size: 2rem;\n  color: var(--text-dark);\n  margin-bottom: 20px;\n}\n\n.story-text p {\n  color: var(--text-accent);\n  font-size: 1.1rem;\n  line-height: 1.8;\n  margin-bottom: 20px;\n}\n\n.philosophy-section {\n  background-color: var(--bg-section);\n  padding: 80px 20px;\n  text-align: center;\n}\n\n.philosophy-content {\n  max-width: 900px;\n  margin: 0 auto;\n}\n\n.philosophy-content h3 {\n  font-family: var(--font-heading);\n  font-size: 2.5rem;\n  font-style: italic;\n  color: var(--text-dark);\n  margin-bottom: 30px;\n}\n\n.philosophy-quote {\n  font-size: 1.3rem;\n  line-height: 2;\n  color: var(--text-accent);\n  font-style: italic;\n}\n\n.values-section {\n  max-width: 1200px;\n  margin: 80px auto;\n  padding: 0 20px;\n  text-align: center;\n}\n\n.values-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 40px;\n  margin-top: 40px;\n}\n\n.value-card {\n  padding: 30px;\n  background-color: var(--bg-section);\n  border-radius: 12px;\n  transition: transform 0.3s ease;\n}\n\n.value-card:hover {\n  transform: translateY(-5px);\n}\n\n.value-card h4 {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  color: var(--text-dark);\n  margin-bottom: 15px;\n}\n\n.value-card p {\n  color: var(--text-accent);\n  line-height: 1.6;\n}\n\n.about-cta {\n  text-align: center;\n  padding: 80px 20px;\n  background-color: var(--bg-main);\n}\n\n.about-cta h3 {\n  font-family: var(--font-heading);\n  font-size: 2.5rem;\n  color: var(--text-dark);\n  margin-bottom: 15px;\n}\n\n.about-cta p {\n  font-size: 1.2rem;\n  color: var(--text-accent);\n  margin-bottom: 30px;\n}\n\n.cta-button {\n  padding: 15px 40px;\n  background-color: var(--text-dark);\n  color: white;\n  border: none;\n  border-radius: 5px;\n  font-size: 1.1rem;\n  font-family: var(--font-body);\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.cta-button:hover {\n  background-color: var(--text-accent);\n}\n\n/* ======================\n   Menu Page Styles\n   ====================== */\n\n.menu-hero {\n  text-align: center;\n  padding: 60px 20px 40px;\n  border-bottom: 1px solid var(--text-accent);\n}\n\n.menu-hero h2 {\n  font-size: 4rem;\n  font-weight: 400;\n  margin-bottom: 10px;\n  color: var(--text-dark);\n}\n\n.menu-hero p {\n  font-size: 1.2rem;\n  color: var(--text-accent);\n  font-style: italic;\n}\n\n.menu-tabs {\n  display: flex;\n  justify-content: center;\n  gap: 0;\n  max-width: 600px;\n  margin: 40px auto;\n  border: 1px solid #c9b896;\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.menu-tab {\n  flex: 1;\n  padding: 15px 30px;\n  background-color: transparent;\n  color: var(--text-accent);\n  border: none;\n  border-right: 1px solid #c9b896;\n  font-family: var(--font-body);\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.menu-tab:last-child {\n  border-right: none;\n}\n\n.menu-tab.active {\n  background-color: #8c7b66;\n  color: white;\n}\n\n.menu-tab:hover:not(.active) {\n  background-color: #f5f0e8;\n}\n\n.menu-content {\n  max-width: 1200px;\n  margin: 60px auto 100px;\n  padding: 0 20px;\n  position: relative;\n  min-height: 600px;\n}\n\n.menu-section {\n  display: none;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.menu-section.active {\n  display: block;\n  opacity: 1;\n}\n\n.menu-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: start;\n  min-height: 550px;\n}\n\n.menu-list {\n  padding: 20px 0;\n}\n\n.menu-category-title {\n  font-family: var(--font-heading);\n  font-size: 3rem;\n  font-style: italic;\n  color: var(--text-dark);\n  margin-bottom: 40px;\n  font-weight: 400;\n  position: relative;\n  padding-bottom: 20px;\n}\n\n.menu-category-title::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 60%;\n  height: 1px;\n  background-color: var(--text-accent);\n}\n\n.menu-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  margin-bottom: 35px;\n}\n\n.menu-icon {\n  width: 50px;\n  height: 50px;\n  flex-shrink: 0;\n  filter: brightness(0) saturate(100%) invert(25%) sepia(20%) saturate(1000%)\n    hue-rotate(15deg);\n}\n\n.menu-item-text h4 {\n  font-family: var(--font-heading);\n  font-size: 1.5rem;\n  color: var(--text-dark);\n  margin-bottom: 5px;\n  font-weight: 500;\n}\n\n.menu-item-text p {\n  font-size: 1rem;\n  color: var(--text-accent);\n  line-height: 1.6;\n  margin: 0;\n}\n\n.menu-image {\n  position: sticky;\n  top: 100px;\n  height: fit-content;\n}\n\n.menu-image img {\n  width: 100%;\n  height: auto;\n  max-height: 500px;\n  object-fit: cover;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n\n/* ======================\n   Responsive Design\n   ====================== */\n\n@media (max-width: 768px) {\n  /* Home Page */\n  .about {\n    flex-direction: column;\n    height: auto;\n  }\n\n  .about-img,\n  .about-text {\n    width: 100%;\n  }\n\n  /* Offerings */\n  .offerings-grid {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n\n  .offerings-title {\n    font-size: 2rem;\n  }\n\n  .offerings-title::before,\n  .offerings-title::after,\n  .visit-us-title::before,\n  .visit-us-title::after {\n    width: 20%;\n  }\n\n  /* Quote */\n  .quote-section blockquote {\n    font-size: 1.4rem;\n    padding: 0 20px;\n  }\n\n  .quote-section blockquote::before,\n  .quote-section blockquote::after {\n    font-size: 3rem;\n  }\n\n  /* Visit Us */\n  .visit-us-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .visit-card:nth-child(2n) {\n    border-right: none;\n  }\n\n  .visit-card:nth-child(odd):not(:last-child) {\n    border-right: 1px solid var(--text-accent);\n  }\n\n  /* About Page */\n  .story-content {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n\n  .values-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .about-hero-content h2 {\n    font-size: 2.5rem;\n  }\n\n  .values-title::before,\n  .values-title::after {\n    width: 15%;\n  }\n\n  /* Menu Page */\n  .menu-hero h2 {\n    font-size: 3rem;\n  }\n\n  .menu-tabs {\n    flex-direction: column;\n    max-width: 400px;\n  }\n\n  .menu-tab {\n    border-right: none;\n    border-bottom: 1px solid #c9b896;\n  }\n\n  .menu-tab:last-child {\n    border-bottom: none;\n  }\n\n  .menu-content {\n    min-height: auto;\n  }\n\n  .menu-grid {\n    grid-template-columns: 1fr;\n    gap: 40px;\n    min-height: auto;\n  }\n\n  .menu-image {\n    position: static;\n    order: -1;\n  }\n\n  .menu-category-title {\n    font-size: 2.5rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .visit-us-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .visit-card {\n    border-right: none;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about.js */ \"./src/pages/about.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\n\n\n\n\n\nconst container = document.getElementById(\"content\");\nconst homeTabs = document.querySelectorAll(\"button\");\ncontainer.innerHTML = (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__.renderHome)();\n\nfunction initHomeInteractions() {\n  container.addEventListener(\"click\", (e) => {\n    const button = e.target.closest(\"[data-action]\");\n    if (!button) return;\n    const action = button.dataset.action;\n    const tab = button.dataset.tab;\n\n    if (action === \"visit-us\") {\n      const visitUsSection = document.getElementById(\"visit-us-section\");\n      if (visitUsSection) {\n        visitUsSection.scrollIntoView({ behavior: \"smooth\" });\n      }\n    } else if (action === \"view-menu\") {\n      container.innerHTML = (0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_3__.renderMenu)();\n      initMenuTabs(\"coffee\");\n    } else if (action === \"menu-tab\") {\n      container.innerHTML = (0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_3__.renderMenu)();\n      initMenuTabs(tab);\n    } else if (action === \"about-page\") {\n      container.innerHTML = (0,_pages_about_js__WEBPACK_IMPORTED_MODULE_2__.renderAbout)();\n    }\n  });\n}\n\ninitHomeInteractions();\nfunction initMenuTabs() {\n  const menuTabs = document.querySelectorAll(\".menu-tab\");\n  const sections = document.querySelectorAll(\".menu-section\");\n\n  menuTabs.forEach((tab) => {\n    tab.addEventListener(\"click\", () => {\n      const category = tab.dataset.category;\n\n      menuTabs.forEach((t) => t.classList.remove(\"active\"));\n      sections.forEach((s) => s.classList.remove(\"active\"));\n\n      tab.classList.add(\"active\");\n      document.getElementById(category).classList.add(\"active\");\n    });\n  });\n}\n\nhomeTabs.forEach((tab) => {\n  tab.addEventListener(\"click\", (e) => {\n    const page = e.target.dataset.page;\n\n    if (page === \"home\") {\n      container.innerHTML = (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__.renderHome)();\n    } else if (page === \"menu\") {\n      container.innerHTML = (0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_3__.renderMenu)();\n      initMenuTabs();\n    } else if (page === \"about\") {\n      container.innerHTML = (0,_pages_about_js__WEBPACK_IMPORTED_MODULE_2__.renderAbout)();\n    }\n  });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?\n}");

/***/ },

/***/ "./src/pages/about.js"
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAbout: () => (/* binding */ renderAbout)\n/* harmony export */ });\nfunction renderAbout() {\n  return `\n    <!-- About Hero -->\n    <section class=\"about-hero\">\n      <div class=\"about-hero-content\">\n        <h2>Our Story</h2>\n        <p>Where every cup tells a story</p>\n      </div>\n    </section>\n\n    <!-- Story Section -->\n    <section class=\"story-section\">\n  <div class=\"story-content\">\n    <div class=\"story-image\">\n      <div class=\"story-img-bg\"></div>\n    </div>\n    <div class=\"story-text\">\n      <h3>A Love Letter to Tea and Tales</h3>\n      <p>\n        There are places built from brick and mortar, and then there are places built \n        from longing. Café des Livres belongs to the latter. Monicah dreamed it into \n        being—a space where the ancient ritual of tea meets the timeless communion of \n        reading, where two of life's gentlest pleasures intertwine like fingers around \n        a warm cup.\n      </p>\n      <p>\n        She believed that the world needed more slowness. More stillness. More moments \n        where the only sound is the rustle of pages and the soft clink of teaspoon \n        against porcelain. And so she created it: a haven for wanderers and dreamers, \n        for those seeking refuge in words and warmth.\n      </p>\n      <p>\n        Today, Café des Livres stands as a love letter to the quiet life—proof that \n        the most profound connections happen not in haste, but in the space between \n        sips and chapters, where strangers become friends and stories become memories.\n      </p>\n    </div>\n  </div>\n</section>\n\n    <!-- Philosophy Section -->\n<section class=\"philosophy-section\">\n  <div class=\"philosophy-content\">\n    <h3>Our Philosophy</h3>\n    <p class=\"philosophy-quote\">\n      \"In a world addicted to speed, we offer slowness. In the noise, we offer silence. \n      In the chaos, we offer a cup of tea, a good book, and the radical act of simply being. \n      Here, time doesn't pass—it deepens.\"\n    </p>\n  </div>\n</section>\n    <!-- Values Section -->\n    <section class=\"values-section\">\n      <h3 class=\"values-title\">What We Believe In</h3>\n      \n      <div class=\"values-grid\">\n        <div class=\"value-card\">\n          <h4>Quality</h4>\n          <p>From bean to cup, we source the finest ingredients and craft every drink with expertise.</p>\n        </div>\n        \n        <div class=\"value-card\">\n          <h4>Community</h4>\n          <p>We're more than a café – we're a gathering place where connections are made.</p>\n        </div>\n        \n        <div class=\"value-card\">\n          <h4>Literature</h4>\n          <p>Books are our passion. Our curated collection invites discovery and conversation.</p>\n        </div>\n        \n        <div class=\"value-card\">\n          <h4>Comfort</h4>\n          <p>Every corner is designed to feel like your favorite reading nook at home.</p>\n        </div>\n      </div>\n    </section>\n\n    <!-- CTA Section -->\n    <section class=\"about-cta\">\n      <h3>Experience the Difference</h3>\n      <p>Visit us and discover your new favorite place to unwind</p>\n      <button class=\"cta-button\">Find Us</button>\n    </section>\n  `;\n}\n\n\n//# sourceURL=webpack:///./src/pages/about.js?\n}");

/***/ },

/***/ "./src/pages/home.js"
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHome: () => (/* binding */ renderHome)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ \"./src/styles.css\");\n/* harmony import */ var _images_coffee_cup_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/coffee-cup.png */ \"./src/images/coffee-cup.png\");\n/* harmony import */ var _images_book_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/book.png */ \"./src/images/book.png\");\n/* harmony import */ var _images_croissant_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/croissant.png */ \"./src/images/croissant.png\");\n/* harmony import */ var _images_location_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/location.png */ \"./src/images/location.png\");\n/* harmony import */ var _images_clock_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/clock.png */ \"./src/images/clock.png\");\n/* harmony import */ var _images_wifi_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/wifi.png */ \"./src/images/wifi.png\");\n/* harmony import */ var _images_books_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/books.png */ \"./src/images/books.png\");\n\n\n\n\n\n\n\n\n\nfunction renderHome() {\n  return `\n  <!-- HERO SECTION -->\n  <section class=\"hero\">\n    <div class=\"hero-content\">\n      <h2>Café des Livres</h2>\n      <p>A quiet corner for coffee, books, and slow moments</p>\n      <button class=\"btn-primary\" data-action=\"view-menu\">View Menu</button>\n      <button class=\"btn-secondary\" data-action=\"visit-us\">Visit Us</button>\n    </div>\n  </section>\n\n  <!-- ABOUT SECTION -->\n  <section class=\"about\">\n    <div class=\"about-img\"></div>\n    <div class=\"about-text\">\n      <p>A gentle refuge from the noise of the world. Here, coffee is savoured slowly, pages turn softly, and time moves kindly.</p>\n    </div>\n  </section>\n\n  <!-- WHAT WE OFFER SECTION -->\n  <section class=\"offerings\">\n    <h2 class=\"offerings-title\">What We Offer</h2>\n    \n    <div class=\"offerings-grid\">\n        <div class=\"offering-card\" data-action=\"menu-tab\" data-tab=\"coffee\" style=\"cursor: pointer;\">\n        <img src=\"${_images_coffee_cup_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Coffee cup icon\">\n        <h3>Artisan Coffee</h3>\n        <p>Carefully brewed comfort in every cup.</p>\n      </div>\n      \n        <div class=\"offering-card\" data-action=\"about-page\" style=\"cursor: pointer;\">\n        <img src=\"${_images_book_png__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Books icon\">\n        <h3>Reading Corner</h3>\n        <p>A peaceful space to read and unwind.</p>\n      </div>\n      \n        <div class=\"offering-card\" data-action=\"menu-tab\" data-tab=\"pastries\" style=\"cursor: pointer;\">\n        <img src=\"${_images_croissant_png__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Croissant icon\">\n        <h3>Fresh Pastries</h3>\n        <p>Baked delights to sweeten your day.</p>\n      </div>\n    </div>\n  </section>\n\n  <!-- QUOTE SECTION -->\n  <section class=\"quote-section\">\n    <blockquote>\n      \"There is nothing finer than coffee and a good book on a quiet afternoon.\"\n    </blockquote>\n  </section>\n\n    <!-- VISIT US SECTION -->\n  <section id=\"visit-us\" class=\"visit-us\">\n    <h2 class=\"visit-us-title\">Visit Us</h2>\n    \n    <div class=\"visit-us-grid\">\n      <div class=\"visit-card\">\n        <img src=\"${_images_location_png__WEBPACK_IMPORTED_MODULE_4__}\" alt=\"Location icon\">\n        <h3>123 Rue de Lumière</h3>\n      </div>\n      \n      <div class=\"visit-card\">\n        <img src=\"${_images_clock_png__WEBPACK_IMPORTED_MODULE_5__}\" alt=\"Clock icon\">\n        <h3>Open Daily:</h3>\n        <p>8 AM - 6 PM</p>\n      </div>\n      \n      <div class=\"visit-card\">\n        <img src=\"${_images_wifi_png__WEBPACK_IMPORTED_MODULE_6__}\" alt=\"WiFi icon\">\n        <h3>Free Wi-Fi</h3>\n      </div>\n      \n      <div class=\"visit-card\">\n        <img src=\"${_images_books_png__WEBPACK_IMPORTED_MODULE_7__}\" alt=\"Bookshelf icon\">\n        <h3>Book Exchange Shelf</h3>\n      </div>\n    </div>\n  </section>\n`;\n}\n\n\n//# sourceURL=webpack:///./src/pages/home.js?\n}");

/***/ },

/***/ "./src/pages/menu.js"
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenu: () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _images_menu_latte_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/menu-latte.jpg */ \"./src/images/menu-latte.jpg\");\n/* harmony import */ var _images_icons_espresso_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icons/espresso.png */ \"./src/images/icons/espresso.png\");\n/* harmony import */ var _images_icons_cappuccino_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icons/cappuccino.png */ \"./src/images/icons/cappuccino.png\");\n/* harmony import */ var _images_icons_latte_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icons/latte.png */ \"./src/images/icons/latte.png\");\n/* harmony import */ var _images_icons_french_press_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/icons/french-press.png */ \"./src/images/icons/french-press.png\");\n/* harmony import */ var _images_croissant_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/croissant.png */ \"./src/images/croissant.png\");\n/* harmony import */ var _images_icons_challah_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/icons/challah.png */ \"./src/images/icons/challah.png\");\n/* harmony import */ var _images_icons_tart_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/icons/tart.png */ \"./src/images/icons/tart.png\");\n/* harmony import */ var _images_icons_madeleine_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/icons/madeleine.png */ \"./src/images/icons/madeleine.png\");\n/* harmony import */ var _images_icons_tea_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/icons/tea.png */ \"./src/images/icons/tea.png\");\n/* harmony import */ var _images_icons_hot_chocolate_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/icons/hot-chocolate.png */ \"./src/images/icons/hot-chocolate.png\");\n/* harmony import */ var _images_icons_matcha_latte_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/icons/matcha-latte.png */ \"./src/images/icons/matcha-latte.png\");\n// pages/menu.js\n\n\n// Coffee icons\n\n\n\n\n\n// Pastry icons\n\n\n\n\n\n// Tea & More icons\n\n\n\n\nfunction renderMenu() {\n  return `\n    <!-- Menu Hero -->\n    <section class=\"menu-hero\">\n      <h2>Menu</h2>\n      <p>Simple pleasures, thoughtfully prepared.</p>\n    </section>\n\n    <!-- Menu Tabs -->\n    <section class=\"menu-tabs\">\n      <button class=\"menu-tab active\" data-category=\"coffee\">Coffee</button>\n      <button class=\"menu-tab\" data-category=\"pastries\">Pastries</button>\n      <button class=\"menu-tab\" data-category=\"tea\">Tea & More</button>\n    </section>\n\n    <!-- Menu Content -->\n    <section class=\"menu-content\">\n      \n      <!-- Coffee Section -->\n      <div class=\"menu-section active\" id=\"coffee\">\n        <div class=\"menu-grid\">\n          <div class=\"menu-list\">\n            <h3 class=\"menu-category-title\">Coffee</h3>\n            \n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_espresso_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Espresso\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Espresso</h4>\n                <p>Rich and bold.</p>\n              </div>\n            </div>\n\n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_cappuccino_png__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Cappuccino\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Cappuccino</h4>\n                <p>Velvety milk with deep espresso.</p>\n              </div>\n            </div>\n\n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_latte_png__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Caffè Latte\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Caffè Latte</h4>\n                <p>Smooth, creamy comfort.</p>\n              </div>\n            </div>\n\n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_french_press_png__WEBPACK_IMPORTED_MODULE_4__}\" alt=\"French Press\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>French Press</h4>\n                <p>Slow brewed, full-bodied flavour.</p>\n              </div>\n            </div>\n\n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_espresso_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Americano\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Americano</h4>\n                <p>Espresso with hot water, pure and simple.</p>\n              </div>\n            </div>\n\n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_latte_png__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Mocha\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Mocha</h4>\n                <p>Chocolate and espresso in harmony.</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"menu-image\">\n            <img src=\"${_images_menu_latte_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Artisan coffee\">\n          </div>\n        </div>\n      </div>\n\n      <!-- Pastries Section -->\n      <div class=\"menu-section\" id=\"pastries\">\n        <div class=\"menu-grid\">\n          <div class=\"menu-list\">\n            <h3 class=\"menu-category-title\">Pastries</h3>\n            \n            <div class=\"menu-item\">\n              <img src=\"${_images_croissant_png__WEBPACK_IMPORTED_MODULE_5__}\" alt=\"Croissant\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Croissant</h4>\n                <p>Buttery, flaky perfection.</p>\n              </div>\n            </div>\n\n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_challah_png__WEBPACK_IMPORTED_MODULE_6__}\" alt=\"Pain au Chocolat\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Pain au Chocolat</h4>\n                <p>Chocolate wrapped in layers of bliss.</p>\n              </div>\n            </div>\n\n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_tart_png__WEBPACK_IMPORTED_MODULE_7__}\" alt=\"Almond Tart\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Almond Tart</h4>\n                <p>Sweet, nutty indulgence.</p>\n              </div>\n            </div>\n\n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_madeleine_png__WEBPACK_IMPORTED_MODULE_8__}\" alt=\"Madeleine\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Madeleine</h4>\n                <p>Delicate, buttery French classic.</p>\n              </div>\n            </div>\n\n            <div class=\"menu-item\">\n              <img src=\"${_images_croissant_png__WEBPACK_IMPORTED_MODULE_5__}\" alt=\"Blueberry Scone\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Blueberry Scone</h4>\n                <p>Tender crumb with bursts of berry.</p>\n              </div>\n            </div>\n\n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_tart_png__WEBPACK_IMPORTED_MODULE_7__}\" alt=\"Lemon Tart\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Lemon Tart</h4>\n                <p>Bright, zesty sweetness.</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"menu-image\">\n            <img src=\"${_images_menu_latte_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Fresh pastries\">\n          </div>\n        </div>\n      </div>\n\n      <!-- Tea & More Section -->\n      <div class=\"menu-section\" id=\"tea\">\n        <div class=\"menu-grid\">\n          <div class=\"menu-list\">\n            <h3 class=\"menu-category-title\">Tea & More</h3>\n            \n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_tea_png__WEBPACK_IMPORTED_MODULE_9__}\" alt=\"Earl Grey\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Earl Grey</h4>\n                <p>Classic bergamot elegance.</p>\n              </div>\n            </div>\n\n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_tea_png__WEBPACK_IMPORTED_MODULE_9__}\" alt=\"Chamomile\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Chamomile</h4>\n                <p>Soothing floral serenity.</p>\n              </div>\n            </div>\n\n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_tea_png__WEBPACK_IMPORTED_MODULE_9__}\" alt=\"English Breakfast\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>English Breakfast</h4>\n                <p>Robust, full-bodied morning blend.</p>\n              </div>\n            </div>\n\n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_matcha_latte_png__WEBPACK_IMPORTED_MODULE_11__}\" alt=\"Matcha Latte\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Matcha Latte</h4>\n                <p>Smooth, earthy indulgence.</p>\n              </div>\n            </div>\n\n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_hot_chocolate_png__WEBPACK_IMPORTED_MODULE_10__}\" alt=\"Hot Chocolate\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Hot Chocolate</h4>\n                <p>Rich, velvety decadence.</p>\n              </div>\n            </div>\n\n            <div class=\"menu-item\">\n              <img src=\"${_images_icons_tea_png__WEBPACK_IMPORTED_MODULE_9__}\" alt=\"Peppermint Tea\" class=\"menu-icon\">\n              <div class=\"menu-item-text\">\n                <h4>Peppermint Tea</h4>\n                <p>Refreshing, cool clarity.</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"menu-image\">\n            <img src=\"${_images_menu_latte_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Tea and beverages\">\n          </div>\n        </div>\n      </div>\n\n    </section>\n  `;\n}\n\n\n//# sourceURL=webpack:///./src/pages/menu.js?\n}");

/***/ },

/***/ "./src/images/about-hero.avif"
/*!************************************!*\
  !*** ./src/images/about-hero.avif ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3a6c9ddf8da71d150c55.avif\";\n\n//# sourceURL=webpack:///./src/images/about-hero.avif?\n}");

/***/ },

/***/ "./src/images/about.jpg"
/*!******************************!*\
  !*** ./src/images/about.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3ba940724305749a07c1.jpg\";\n\n//# sourceURL=webpack:///./src/images/about.jpg?\n}");

/***/ },

/***/ "./src/images/book.png"
/*!*****************************!*\
  !*** ./src/images/book.png ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"77ad8d2a89ce4337f792.png\";\n\n//# sourceURL=webpack:///./src/images/book.png?\n}");

/***/ },

/***/ "./src/images/books.png"
/*!******************************!*\
  !*** ./src/images/books.png ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"2e1b1328927f85db2fd4.png\";\n\n//# sourceURL=webpack:///./src/images/books.png?\n}");

/***/ },

/***/ "./src/images/clock.png"
/*!******************************!*\
  !*** ./src/images/clock.png ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"d31d4407f6dfa52d6ba5.png\";\n\n//# sourceURL=webpack:///./src/images/clock.png?\n}");

/***/ },

/***/ "./src/images/coffee-cup.png"
/*!***********************************!*\
  !*** ./src/images/coffee-cup.png ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"0f9e8ef71165ad20f15f.png\";\n\n//# sourceURL=webpack:///./src/images/coffee-cup.png?\n}");

/***/ },

/***/ "./src/images/croissant.png"
/*!**********************************!*\
  !*** ./src/images/croissant.png ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"56b773fcc875cf8181d4.png\";\n\n//# sourceURL=webpack:///./src/images/croissant.png?\n}");

/***/ },

/***/ "./src/images/herobg.jpg"
/*!*******************************!*\
  !*** ./src/images/herobg.jpg ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"dbab2cc977672b06105d.jpg\";\n\n//# sourceURL=webpack:///./src/images/herobg.jpg?\n}");

/***/ },

/***/ "./src/images/icons/cappuccino.png"
/*!*****************************************!*\
  !*** ./src/images/icons/cappuccino.png ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"820c87e0a89388fe7291.png\";\n\n//# sourceURL=webpack:///./src/images/icons/cappuccino.png?\n}");

/***/ },

/***/ "./src/images/icons/challah.png"
/*!**************************************!*\
  !*** ./src/images/icons/challah.png ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"fc5ba1a5c0520963dc90.png\";\n\n//# sourceURL=webpack:///./src/images/icons/challah.png?\n}");

/***/ },

/***/ "./src/images/icons/espresso.png"
/*!***************************************!*\
  !*** ./src/images/icons/espresso.png ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ec7371ea466366120912.png\";\n\n//# sourceURL=webpack:///./src/images/icons/espresso.png?\n}");

/***/ },

/***/ "./src/images/icons/french-press.png"
/*!*******************************************!*\
  !*** ./src/images/icons/french-press.png ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"189f737f7449867fd8e2.png\";\n\n//# sourceURL=webpack:///./src/images/icons/french-press.png?\n}");

/***/ },

/***/ "./src/images/icons/hot-chocolate.png"
/*!********************************************!*\
  !*** ./src/images/icons/hot-chocolate.png ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"81afcbdd22b11d2cac47.png\";\n\n//# sourceURL=webpack:///./src/images/icons/hot-chocolate.png?\n}");

/***/ },

/***/ "./src/images/icons/latte.png"
/*!************************************!*\
  !*** ./src/images/icons/latte.png ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"aeb62e26eb616dbee445.png\";\n\n//# sourceURL=webpack:///./src/images/icons/latte.png?\n}");

/***/ },

/***/ "./src/images/icons/madeleine.png"
/*!****************************************!*\
  !*** ./src/images/icons/madeleine.png ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"92a70fcd2ccbb0395d85.png\";\n\n//# sourceURL=webpack:///./src/images/icons/madeleine.png?\n}");

/***/ },

/***/ "./src/images/icons/matcha-latte.png"
/*!*******************************************!*\
  !*** ./src/images/icons/matcha-latte.png ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e9f7ba2a9d3ed5d13a03.png\";\n\n//# sourceURL=webpack:///./src/images/icons/matcha-latte.png?\n}");

/***/ },

/***/ "./src/images/icons/tart.png"
/*!***********************************!*\
  !*** ./src/images/icons/tart.png ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"77a1111abf962db00305.png\";\n\n//# sourceURL=webpack:///./src/images/icons/tart.png?\n}");

/***/ },

/***/ "./src/images/icons/tea.png"
/*!**********************************!*\
  !*** ./src/images/icons/tea.png ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"9b9a6a442035cf8f896d.png\";\n\n//# sourceURL=webpack:///./src/images/icons/tea.png?\n}");

/***/ },

/***/ "./src/images/location.png"
/*!*********************************!*\
  !*** ./src/images/location.png ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"5eac23a6e285e11df02b.png\";\n\n//# sourceURL=webpack:///./src/images/location.png?\n}");

/***/ },

/***/ "./src/images/menu-latte.jpg"
/*!***********************************!*\
  !*** ./src/images/menu-latte.jpg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"5d21d9a90a4a749b76c5.jpg\";\n\n//# sourceURL=webpack:///./src/images/menu-latte.jpg?\n}");

/***/ },

/***/ "./src/images/wifi.png"
/*!*****************************!*\
  !*** ./src/images/wifi.png ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b78795ba7ca024b64eb9.png\";\n\n//# sourceURL=webpack:///./src/images/wifi.png?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
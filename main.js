/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 22:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `dialog::backdrop {
	background-color: var(--scrim);
	opacity: 60%;
}

main > .dialog-form {
	background-color: var(--surface-container-lowest);
	width: 90vw;
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: var(--elevation-1);
	inset: 0;
	margin: auto;
}

.dialog-form > form > h3 {
	display: flex;
	align-items: center;
	font-size: 1.25rem;
	color: var(--primary);
	gap: 0.5rem;
}

/* H3 tag icon */
.dialog-form > form > h3 > span:first-child {
	font-size: 1.5rem;
}

.dialog-form > form > fieldset {
	display: grid;
	gap: 0.75rem;
	margin-top: 1.75rem;
}

/* Input containers */
.todo-form > fieldset > div {
	display: flex;
	gap: 2px;
	flex-direction: column;
}

.todo-form > fieldset > div > label {
	font-size: 1rem;
	color: var(--on-surface);
}

.todo-form > fieldset > div > input,
.todo-form > fieldset > div > select,
.todo-form > fieldset > div > textarea {
	font-size: 1rem;
	padding: 0.5rem 0.25rem;
	border: 1px solid var(--outline);
	border-radius: 0.25rem;
}

.todo-form > fieldset > div > textarea {
	resize: none;
}

.todo-form > .form-btn-container {
	margin-top: 1.75rem;
	display: flex;
	gap: 0.25rem;
}

.todo-form > .form-btn-container button {
	padding: 1rem;
	width: 100%;
}

.todo-form > .form-btn-container button > span {
	font-size: 1.25rem;
}

/* Button Icon */
.todo-form > .form-btn-container button > span:first-child {
	font-size: 1.5rem;
}

/* Small Devices */
@media (width >= 40rem) {
	main > .dialog-form {
		width: 80vw;
	}

	.dialog-form > form > h3 {
		font-size: 1.5rem;
	}

	.dialog-form > form > h3 > span:first-child {
		font-size: 1.75rem;
	}
}

/* Medium Devices */
@media (width >= 48rem) {
	main > .dialog-form {
		width: 70vw;
	}
}

/* Large Devices */
@media (width >= 64rem) {
	main > .dialog-form {
		width: 50vw;
	}
}

/* Extra Large Devices */
@media (width >= 80rem) {
	main > .dialog-form {
		width: 40vw;
	}
}

/* 2XL Devices */
@media (width >= 96rem) {
	main > .dialog-form {
		width: 30vw;
	}
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 54:
/***/ ((module) => {

"use strict";


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

/***/ 93:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 119:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* #region CSS Resets */

a {
	text-decoration: none;
	color: inherit;
}

button,
dialog {
	outline: none;
	border: none;
}

h2,
h3,
p {
	margin: 0;
	padding: 0;
}

table {
	border-collapse: collapse;
}

fieldset {
	border: 0;
	margin: 0;
	padding: 0;
	min-width: 0;
}

/* #endregion CSS Resets */

:root {
	font-family: "Raleway", system-ui, "Segoe UI", Roboto, Helvetica, Arial,
		sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	color: var(--on-surface);

	/* ---- Elevation styles ---- */
	--elevation-1: 0px 1px 2px rgba(0, 0, 0, 0.12),
		0px 1px 3px rgba(0, 0, 0, 0.08);
	--elevation-2: 0px 2px 4px rgba(0, 0, 0, 0.12),
		0px 3px 6px rgba(0, 0, 0, 0.08);
	--elevation-3: 0px 4px 8px rgba(0, 0, 0, 0.12),
		0px 6px 12px rgba(0, 0, 0, 0.08);
	--elevation-4: 0px 6px 12px rgba(0, 0, 0, 0.14),
		0px 10px 16px rgba(0, 0, 0, 0.1);
	--elevation-5: 0px 8px 16px rgba(0, 0, 0, 0.16),
		0px 14px 20px rgba(0, 0, 0, 0.12);
}

.material-symbols-filled {
	font-variation-settings: "FILL" 1, "wght" 400;
	font-size: 24px;
}

body {
	background-color: var(--surface);
}

main {
	padding: 0 1rem;
	position: relative;
}

main > h1 {
	color: var(--primary);
	text-align: center;
	text-shadow: var(--elevation-1);
}

main > .main-btn-container {
	display: flex;
	gap: 0.5rem;
	justify-content: center;
}

.todos-container {
	margin-top: 3rem;
}

.todos-container > .todos-table:not(:first-of-type) {
	margin-top: 1.25rem;
}

.todos-container > .high-priority {
	border: 1px solid var(--error);
}

.todos-container > .normal-priority {
	border: 1px solid var(--primary);
}

.todos-container > .low-priority {
	border: 1px solid var(--secondary);
}

.todos-table {
	height: 260px;
	background-color: var(--surface-container-lowest);
	/* border-radius: 0.25rem; */
	box-shadow: var(--elevation-1);
	overflow-x: scroll;
}

.todos-table > h2 {
	width: 100%;
	font-size: 1rem;
	padding: 0.5rem;
}

.todos-table > h2.high {
	background-color: var(--error);
	color: var(--on-error);
}

.todos-table > h2.normal {
	background-color: var(--primary);
	color: var(--on-primary);
}

.todos-table > h2.low {
	background-color: var(--secondary);
	color: var(--on-secondary);
}

.todos-table > .table-scroll {
	overflow-x: scroll;
}

.todos-table table {
	width: 100%;
	height: max-content;
	table-layout: fixed;
}

.todos-table table > thead {
	background-color: rgba(200, 197, 208, 0.3);
}

.todos-table table th {
	color: var(--outline);
	padding: 0.5rem;
	height: fit-content;
	text-align: left;
	vertical-align: middle;
	white-space: nowrap;
}

.todos-table table thead > tr > th:first-child {
	text-align: center;
	width: 3rem;
}

/* Name header */
.todos-table table thead > tr > th:nth-child(2),
.todos-table table thead > tr > th:last-child {
	width: 160px;
}

/* Priority Header */
.todos-table table thead > tr > th:nth-child(3) {
	width: 100px;
}

/* Due date Header */
.todos-table table thead > tr > th:last-child {
	width: 160px;
}

/* Description header */
.todos-table table thead > tr > th:nth-child(4) {
	width: 300px;
}

.todos-table table tbody tr {
	vertical-align: top;
}

.todos-table table tbody tr > td {
	padding: 0.5rem;
}

.todos-table table tbody tr > td:first-child {
	text-align: center;
}

.todos-table table tbody tr > td > .status-checkbox {
	height: 1rem;
	width: 1rem;
	cursor: pointer;
}

.todos-table table tbody tr > td > span {
	font-size: 1rem;
}

td > span.high {
	color: var(--error);
}

.todos-table table > tbody tr:hover {
	background-color: rgba(200, 197, 208, 0.5);
}

.todos-table table > tbody tr.completed {
	background-color: rgba(200, 197, 208, 0.5);
}

.todos-table table > tbody tr.completed > td {
	text-decoration: line-through;
}

.todos-table table .edit-todo-item-btn,
.todos-table table .delete-todo-item-btn {
	text-align: center;
	font-size: 0.75rem;
	padding: 0.25rem;
	border-radius: 0.25rem;
	box-shadow: var(--elevation-1);
}

.todos-table table .edit-todo-item-btn {
	background-color: var(--tertiary-container);
	color: var(--on-tertiary-container);
}

.todos-table table .delete-todo-item-btn {
	background-color: var(--error-container);
	color: var(--on-error-container);
}

footer {
	margin-top: 3rem;
	background-color: var(--primary-container);
	color: var(--on-primary-container);
	padding: 0.5rem 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: var(--elevation-2);
}

.copyright,
.author-link {
	display: flex;
	align-items: center;
	gap: 0.25rem;
	font-weight: bold;
}

.change-theme-btn {
	position: fixed;
	left: 1rem;
	bottom: 2.75rem;
}

/* Small Devices */
@media (width >= 40rem) {
	main {
		width: 90vw;
		padding: 0;
		margin: auto;
	}

	main > h1 {
		font-size: 2.25rem;
	}

	.todos-table {
		width: 80%;
		height: 340px;
		margin: auto;
	}

	footer {
		font-size: 1.25rem;
		padding: 1rem;
	}
}

/* Large Devices */
@media (width >= 64rem) {
	main {
		width: 70vw;
	}
}

/* Extra Large Devices */
@media (width >= 80rem) {
	main {
		width: 60vw;
	}

	.todos-table {
		height: 400px;
	}

	footer {
		padding: 1rem 1.5rem;
	}
}

/* 2XL Devices */
@media (width >= 96rem) {
	main {
		width: 50vw;
	}

	.todos-table {
		width: 640px;
	}
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 134:
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

/***/ 219:
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

/***/ 234:
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

/***/ 499:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! modern-normalize v3.0.1 | MIT License | https://github.com/sindresorhus/modern-normalize */

/*
Document
========
*/

/**
Use a better box model (opinionated).
*/

*,
::before,
::after {
	box-sizing: border-box;
}

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the line height in all browsers.
3. Prevent adjustments of font size after orientation changes in iOS.
4. Use a more readable tab size (opinionated).
*/

html {
	font-family:
		system-ui,
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji'; /* 1 */
	line-height: 1.15; /* 2 */
	-webkit-text-size-adjust: 100%; /* 3 */
	tab-size: 4; /* 4 */
}

/*
Sections
========
*/

/**
Remove the margin in all browsers.
*/

body {
	margin: 0;
}

/*
Text-level semantics
====================
*/

/**
Add the correct font weight in Chrome and Safari.
*/

b,
strong {
	font-weight: bolder;
}

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
	font-family:
		ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace; /* 1 */
	font-size: 1em; /* 2 */
}

/**
Add the correct font size in all browsers.
*/

small {
	font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

/*
Tabular data
============
*/

/**
Correct table border color inheritance in Chrome and Safari. (https://issues.chromium.org/issues/40615503, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

table {
	border-color: currentcolor;
}

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 1 */
	line-height: 1.15; /* 1 */
	margin: 0; /* 2 */
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
}

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
	padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
	vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
	-webkit-appearance: textfield; /* 1 */
	outline-offset: -2px; /* 2 */
}

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
	-webkit-appearance: none;
}

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
	-webkit-appearance: button; /* 1 */
	font: inherit; /* 2 */
}

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

summary {
	display: list-item;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 696:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://material-foundation.github.io/material-theme-builder/?primary=%236153E6&bodyFont=Raleway&displayFont=Raleway&colorMatch=false */

.dark {
	--primary: rgb(197 192 255);
	--surface-tint: rgb(197 192 255);
	--on-primary: rgb(45 41 96);
	--primary-container: rgb(68 64 120);
	--on-primary-container: rgb(227 223 255);
	--secondary: rgb(200 196 220);
	--on-secondary: rgb(48 46 66);
	--secondary-container: rgb(70 69 89);
	--on-secondary-container: rgb(228 223 249);
	--tertiary: rgb(235 184 208);
	--on-tertiary: rgb(71 37 56);
	--tertiary-container: rgb(96 59 79);
	--on-tertiary-container: rgb(255 216 233);
	--error: rgb(255 180 171);
	--on-error: rgb(105 0 5);
	--error-container: rgb(147 0 10);
	--on-error-container: rgb(255 218 214);
	--background: rgb(19 19 24);
	--on-background: rgb(229 225 233);
	--surface: rgb(19 19 24);
	--on-surface: rgb(229 225 233);
	--surface-variant: rgb(71 70 79);
	--on-surface-variant: rgb(200 197 208);
	--outline: rgb(146 143 153);
	--outline-variant: rgb(71 70 79);
	--shadow: rgb(0 0 0);
	--scrim: rgb(0 0 0);
	--inverse-surface: rgb(229 225 233);
	--inverse-on-surface: rgb(49 48 54);
	--inverse-primary: rgb(92 88 145);
	--primary-fixed: rgb(227 223 255);
	--on-primary-fixed: rgb(24 18 74);
	--primary-fixed-dim: rgb(197 192 255);
	--on-primary-fixed-variant: rgb(68 64 120);
	--secondary-fixed: rgb(228 223 249);
	--on-secondary-fixed: rgb(27 26 44);
	--secondary-fixed-dim: rgb(200 196 220);
	--on-secondary-fixed-variant: rgb(70 69 89);
	--tertiary-fixed: rgb(255 216 233);
	--on-tertiary-fixed: rgb(47 17 34);
	--tertiary-fixed-dim: rgb(235 184 208);
	--on-tertiary-fixed-variant: rgb(96 59 79);
	--surface-dim: rgb(19 19 24);
	--surface-bright: rgb(58 56 63);
	--surface-container-lowest: rgb(14 14 19);
	--surface-container-low: rgb(28 27 32);
	--surface-container: rgb(32 31 37);
	--surface-container-high: rgb(42 41 47);
	--surface-container-highest: rgb(53 52 58);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 699:
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

/***/ 714:
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

/***/ 854:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://material-foundation.github.io/material-theme-builder/?primary=%236153E6&bodyFont=Raleway&displayFont=Raleway&colorMatch=false */

.light {
	--primary: rgb(92 88 145);
	--surface-tint: rgb(92 88 145);
	--on-primary: rgb(255 255 255);
	--primary-container: rgb(227 223 255);
	--on-primary-container: rgb(68 64 120);
	--secondary: rgb(94 92 113);
	--on-secondary: rgb(255 255 255);
	--secondary-container: rgb(228 223 249);
	--on-secondary-container: rgb(70 69 89);
	--tertiary: rgb(123 82 103);
	--on-tertiary: rgb(255 255 255);
	--tertiary-container: rgb(255 216 233);
	--on-tertiary-container: rgb(96 59 79);
	--error: rgb(186 26 26);
	--on-error: rgb(255 255 255);
	--error-container: rgb(255 218 214);
	--on-error-container: rgb(147 0 10);
	--background: rgb(252 248 255);
	--on-background: rgb(28 27 32);
	--surface: rgb(252 248 255);
	--on-surface: rgb(28 27 32);
	--surface-variant: rgb(229 225 236);
	--on-surface-variant: rgb(71 70 79);
	--outline: rgb(120 118 128);
	--outline-variant: rgb(200 197 208);
	--shadow: rgb(0 0 0);
	--scrim: rgb(0 0 0);
	--inverse-surface: rgb(49 48 54);
	--inverse-on-surface: rgb(243 239 247);
	--inverse-primary: rgb(197 192 255);
	--primary-fixed: rgb(227 223 255);
	--on-primary-fixed: rgb(24 18 74);
	--primary-fixed-dim: rgb(197 192 255);
	--on-primary-fixed-variant: rgb(68 64 120);
	--secondary-fixed: rgb(228 223 249);
	--on-secondary-fixed: rgb(27 26 44);
	--secondary-fixed-dim: rgb(200 196 220);
	--on-secondary-fixed-variant: rgb(70 69 89);
	--tertiary-fixed: rgb(255 216 233);
	--on-tertiary-fixed: rgb(47 17 34);
	--tertiary-fixed-dim: rgb(235 184 208);
	--on-tertiary-fixed-variant: rgb(96 59 79);
	--surface-dim: rgb(220 216 224);
	--surface-bright: rgb(252 248 255);
	--surface-container-lowest: rgb(255 255 255);
	--surface-container-low: rgb(246 242 250);
	--surface-container: rgb(240 236 244);
	--surface-container-high: rgb(235 231 239);
	--surface-container-highest: rgb(229 225 233);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 881:
/***/ ((module) => {

"use strict";


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

/***/ 942:
/***/ (() => {

const change_theme_btn_element = document.querySelector(".change-theme-btn");
const body_element = document.querySelector("body");

change_theme_btn_element.addEventListener("click", () => {
	if (body_element.classList.contains("light")) {
		body_element.classList.remove("light");
		body_element.classList.add("dark");

		change_theme_btn_element.textContent = "bedtime";
	} else if (body_element.classList.contains("dark")) {
		body_element.classList.remove("dark");
		body_element.classList.add("light");

		change_theme_btn_element.textContent = "sunny";
	}
});


/***/ }),

/***/ 953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_102_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `button > span:first-child {
	font-size: 1.25rem;
}

.primary-fab-1,
.primary-fab-2,
.tertiary-fab-1,
.error-fab-1 {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 0.5rem;
	font-size: 0.75rem;
	font-weight: bold;
	width: 60px;
	height: 60px;
	gap: 0.5rem;
	box-shadow: var(--elevation-2);
}

.primary-fab-1 {
	background-color: var(--primary-container);
	color: var(--on-primary-container);
}

.primary-fab-2 {
	background-color: var(--primary);
	color: var(--on-primary);
	font-size: 1.5rem;
	width: 48px;
	height: 48px;
	border-radius: 0.5rem;
	box-shadow: var(--elevation-3);
}

.primary-fab-2:hover {
	box-shadow: var(--elevation-4);
	scale: 1.1;
}

.secondary-fab-1 {
	background-color: var(--secondary-container);
	color: var(--on-secondary-container);
}

.tertiary-fab-1 {
	background-color: var(--tertiary-container);
	color: var(--on-tertiary-container);
}

.error-fab-1 {
	background-color: var(--error-container);
	color: var(--on-error-container);
}

.primary-fab-1:hover,
.tertiary-fab-1:hover,
.error-fab-1:hover {
	box-shadow: var(--elevation-3);
	scale: 1.1;
}

.primary-btn-1,
.error-btn-1,
.error-btn-2 {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	padding: 0.75rem 1rem;
	border-radius: 0.25rem;
	font-weight: bold;
}

.primary-btn-1 {
	background-color: var(--primary);
	color: var(--on-primary);
}

.error-btn-1 {
	background-color: var(--error);
	color: var(--on-error);
}

.error-btn-2 {
	background-color: var(--error-container);
	border: 2px solid var(--error);
	color: var(--error);
}

/* Small Devices */
@media (width >= 40rem) {
	.primary-fab-1,
	.tertiary-fab-1,
	.error-fab-1 {
		font-size: 1rem;
		width: 70px;
		height: 70px;
	}

	button.primary-fab-1 > span,
	button.tertiary-fab-1 > span,
	button.error-fab-1 > span {
		font-size: 1.5rem;
	}
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ todoHandler)
});

// UNUSED EXPORTS: domHandler

// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.102.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(234);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.102.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(219);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.102.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(881);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.102.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(714);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.102.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(134);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.102.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(699);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.102.1/node_modules/css-loader/dist/cjs.js!./src/assets/styles/buttons.css
var buttons = __webpack_require__(953);
;// ./src/assets/styles/buttons.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(buttons/* default */.A, options);




       /* harmony default export */ const styles_buttons = (buttons/* default */.A && buttons/* default */.A.locals ? buttons/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.102.1/node_modules/css-loader/dist/cjs.js!./src/assets/styles/dark.css
var dark = __webpack_require__(696);
;// ./src/assets/styles/dark.css

      
      
      
      
      
      
      
      
      

var dark_options = {};

dark_options.styleTagTransform = (styleTagTransform_default());
dark_options.setAttributes = (setAttributesWithoutAttributes_default());
dark_options.insert = insertBySelector_default().bind(null, "head");
dark_options.domAPI = (styleDomAPI_default());
dark_options.insertStyleElement = (insertStyleElement_default());

var dark_update = injectStylesIntoStyleTag_default()(dark/* default */.A, dark_options);




       /* harmony default export */ const styles_dark = (dark/* default */.A && dark/* default */.A.locals ? dark/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.102.1/node_modules/css-loader/dist/cjs.js!./src/assets/styles/light.css
var light = __webpack_require__(854);
;// ./src/assets/styles/light.css

      
      
      
      
      
      
      
      
      

var light_options = {};

light_options.styleTagTransform = (styleTagTransform_default());
light_options.setAttributes = (setAttributesWithoutAttributes_default());
light_options.insert = insertBySelector_default().bind(null, "head");
light_options.domAPI = (styleDomAPI_default());
light_options.insertStyleElement = (insertStyleElement_default());

var light_update = injectStylesIntoStyleTag_default()(light/* default */.A, light_options);




       /* harmony default export */ const styles_light = (light/* default */.A && light/* default */.A.locals ? light/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.102.1/node_modules/css-loader/dist/cjs.js!./src/assets/styles/modals.css
var modals = __webpack_require__(22);
;// ./src/assets/styles/modals.css

      
      
      
      
      
      
      
      
      

var modals_options = {};

modals_options.styleTagTransform = (styleTagTransform_default());
modals_options.setAttributes = (setAttributesWithoutAttributes_default());
modals_options.insert = insertBySelector_default().bind(null, "head");
modals_options.domAPI = (styleDomAPI_default());
modals_options.insertStyleElement = (insertStyleElement_default());

var modals_update = injectStylesIntoStyleTag_default()(modals/* default */.A, modals_options);




       /* harmony default export */ const styles_modals = (modals/* default */.A && modals/* default */.A.locals ? modals/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.102.1/node_modules/css-loader/dist/cjs.js!./src/assets/styles/modern-normalize.css
var modern_normalize = __webpack_require__(499);
;// ./src/assets/styles/modern-normalize.css

      
      
      
      
      
      
      
      
      

var modern_normalize_options = {};

modern_normalize_options.styleTagTransform = (styleTagTransform_default());
modern_normalize_options.setAttributes = (setAttributesWithoutAttributes_default());
modern_normalize_options.insert = insertBySelector_default().bind(null, "head");
modern_normalize_options.domAPI = (styleDomAPI_default());
modern_normalize_options.insertStyleElement = (insertStyleElement_default());

var modern_normalize_update = injectStylesIntoStyleTag_default()(modern_normalize/* default */.A, modern_normalize_options);




       /* harmony default export */ const styles_modern_normalize = (modern_normalize/* default */.A && modern_normalize/* default */.A.locals ? modern_normalize/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.102.1/node_modules/css-loader/dist/cjs.js!./src/index.css
var cjs_js_src = __webpack_require__(119);
;// ./src/index.css

      
      
      
      
      
      
      
      
      

var src_options = {};

src_options.styleTagTransform = (styleTagTransform_default());
src_options.setAttributes = (setAttributesWithoutAttributes_default());
src_options.insert = insertBySelector_default().bind(null, "head");
src_options.domAPI = (styleDomAPI_default());
src_options.insertStyleElement = (insertStyleElement_default());

var src_update = injectStylesIntoStyleTag_default()(cjs_js_src/* default */.A, src_options);




       /* harmony default export */ const src = (cjs_js_src/* default */.A && cjs_js_src/* default */.A.locals ? cjs_js_src/* default */.A.locals : undefined);

;// ./node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/native.js
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const dist_native = ({ randomUUID });

;// ./node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/rng.js
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}

;// ./node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/stringify.js

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!validate(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
/* harmony default export */ const dist_stringify = ((/* unused pure expression or super */ null && (stringify)));

;// ./node_modules/.pnpm/uuid@13.0.0/node_modules/uuid/dist/v4.js



function _v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? rng();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return unsafeStringify(rnds);
}
function v4(options, buf, offset) {
    if (dist_native.randomUUID && !buf && !options) {
        return dist_native.randomUUID();
    }
    return _v4(options, buf, offset);
}
/* harmony default export */ const dist_v4 = (v4);

;// ./src/utils/date.js
function checkIfDateIsInPast(date) {
	const dateToday = new Date();

	if (
		date > dateToday ||
		(date.getDay() === dateToday.getDay() &&
			date.getMonth() === dateToday.getMonth() &&
			date.getYear() === dateToday.getYear())
	) {
		return false;
	} else {
		return true;
	}
}

function formatDateToString(date_string) {
	const date = new Date(date_string);

	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}



;// ./src/scripts/form.js


function getTodoFormInputsData(form_element) {
	const formData = new FormData(form_element);

	const data = Object.fromEntries(formData.entries());

	return data;
}

function isInputPriorityValid(form_element, priority) {
	const formPriorityInput = form_element.querySelector("select");

	if (typeof priority === "undefined") {
		reportInputValidity(formPriorityInput, "Please select a task priority");
		return false;
	} else {
		return true;
	}
}

function isInputDateValid(form_element, date) {
	const formDateInput = form_element.querySelector('input[name="due_date"]');

	if (checkIfDateIsInPast(new Date(date))) {
		reportInputValidity(
			formDateInput,
			"Please select a date that was not in the past"
		);

		return false;
	} else {
		return true;
	}
}

function validateTodoFormInputs(form_element, todo_data) {
	if (
		isInputPriorityValid(form_element, todo_data.priority) &&
		isInputDateValid(form_element, todo_data.due_date)
	) {
		return true;
	} else {
		return false;
	}
}

function reportInputValidity(input_element, message) {
	input_element.setCustomValidity(message);
	input_element.reportValidity();
}



;// ./src/utils/string.js
function toCapitalizeFirstLetter(string) {
	return (string = string.charAt(0).toUpperCase() + string.slice(1));
}



;// ./src/modules/TodoLocalStorageHandler.js



class TodoLocalStorageHandler {
	static TODOS_LOCAL_NAME = "todos_local";

	constructor() {}

	static initTodosToLocalStorage() {
		if (!this.isTodosLocalExists()) {
			this.createTodosLocal();
		}
	}

	isTodosLocalExists() {
		return localStorage.hasOwnProperty(this.TODOS_LOCAL_NAME);
	}

	static isTodosLocalExists() {
		return localStorage.hasOwnProperty(this.TODOS_LOCAL_NAME);
	}

	static isTodosLocalEmpty() {
		console.log(this.getTodosLocal(this.TODOS_LOCAL_NAME));

		return this.getTodosLocal(this.TODOS_LOCAL_NAME).length <= 0;
	}

	static createTodosLocal() {
		localStorage.setItem(this.TODOS_LOCAL_NAME, JSON.stringify([]));
	}

	static getTodosLocal() {
		let local_todos = JSON.parse(localStorage.getItem(this.TODOS_LOCAL_NAME));
		return this.sortToDoItems(local_todos);
	}

	static getSingleTodoLocal(todo_id) {
		const local_todos = JSON.parse(localStorage.getItem(this.TODOS_LOCAL_NAME));
		const target_index = local_todos.findIndex((todo) => todo.id === todo_id);

		return local_todos[target_index];
	}

	static updateTodosLocal(updated_local_todos) {
		localStorage.setItem("todos_local", JSON.stringify(updated_local_todos));
	}

	static updateTodosLocalItem(
		target_id,
		new_name,
		new_priority,
		new_due_date,
		new_description
	) {
		let updated_local_todos = this.getTodosLocal();
		const target_index = updated_local_todos.findIndex(
			(todo) => todo.id === target_id
		);

		updated_local_todos[target_index].name = new_name;
		updated_local_todos[target_index].new_priority = new_priority;
		updated_local_todos[target_index].due_date = new_due_date;
		updated_local_todos[target_index].description = new_description;

		this.updateTodosLocal(updated_local_todos);
	}

	static updateTodosLocalItemStatus(todo_id, new_status) {
		let updated_local_todos = this.getTodosLocal();
		const target_index = updated_local_todos.findIndex(
			(todo) => todo.id === todo_id
		);

		updated_local_todos[target_index].isDone = new_status;

		this.updateTodosLocal(updated_local_todos);
	}

	static deleteTodoLocal(todo_id) {
		let local_todos = this.getTodosLocal();

		const target_index = local_todos.findIndex((todo) => todo.id === todo_id);
		if (target_index !== -1) local_todos.splice(target_index, 1);

		this.updateTodosLocal(local_todos);
	}

	static sortToDoItems(todos_data) {
		const sorted_todos_by_date = this.sortTodoItemsByDate(todos_data);
		return this.sortTodoItemsByCompletion(sorted_todos_by_date);
	}

	static sortTodoItemsByCompletion(todos_data) {
		return todos_data.sort((a, b) => Number(a.isDone) - Number(b.isDone));
	}

	static sortTodoItemsByDate(todos_data) {
		return todos_data.sort(
			(a, b) => new Date(a.due_date) - new Date(b.due_date)
		);
	}
}

/* harmony default export */ const modules_TodoLocalStorageHandler = (TodoLocalStorageHandler);

;// ./src/modules/DomHandler.js







class DomHandler {
	#currentUserMode = 0;
	// #userModes = Object.freeze({
	// 	0: "normal",
	// 	1: "edit",
	// 	2: "deletion",
	// });

	#target_todo_id;
	#high_priority_todo_table = document.querySelector(
		".high-priority table > tbody"
	);
	#normal_priority_todo_table = document.querySelector(
		".normal-priority table > tbody"
	);
	#low_priority_todo_table = document.querySelector(
		".low-priority table > tbody"
	);
	PriorityFlagColor = Object.freeze({
		HIGH: "--error",
		NORMAL: "--primary",
		LOW: "--secondary",
	});
	add_todo_btn = document.querySelector(".add-todo-btn");
	add_todo_modal = document.querySelector(".add-todo-modal");
	add_todo_modal_form = document.querySelector(".add-todo-modal > form");
	add_todo_modal_cancel_btn = document.querySelector(
		".todo-form.add-todo .cancel-btn"
	);
	add_todo_modal_add_btn = document.querySelector(
		".todo-form.add-todo .add-btn"
	);

	update_todo_btn = document.querySelector(".edit-todo-btn");
	edit_todo_modal = document.querySelector(".edit-todo-modal");
	edit_todo_modal_form = document.querySelector(".edit-todo-modal > form");
	edit_todo_modal_cancel_btn = document.querySelector(
		".todo-form.edit-todo .cancel-btn"
	);
	edit_todo_modal_edit_btn = document.querySelector(
		".todo-form.edit-todo .edit-btn"
	);

	delete_todo_btn = document.querySelector(".delete-todo-btn");

	constructor() {}

	switchToNormalMode() {
		return (this.#currentUserMode = 0);
	}

	switchToEditMode() {
		return (this.#currentUserMode = 1);
	}

	switchToDeletionMode() {
		return (this.#currentUserMode = 2);
	}

	addTodoItemToTable(todo_data) {
		const table_row_structure = this.generateTableRowStructure(todo_data);

		this.renderTodoItemToCorrectTable(todo_data.priority, table_row_structure);
	}

	generateTableRowStructure(todo_data) {
		if (this.#currentUserMode === 0) {
			return `
								<tr
									${todo_data.isDone && 'class="completed"'}
									data-id="${todo_data.id}"
								>
									<td>
										<input
											class="status-checkbox"
											type="checkbox"
											name="isDone"
											data-id="${todo_data.id}" 
											${todo_data.isDone ? "checked" : ""}/>
									</td>
									<td>${todo_data.name}</td>
									<td>
										<span
											class="material-symbols-outlined high"
											style="font-variation-settings: 'FILL' 1;
											color: var(${this.changePriorityFlagColor(todo_data.priority)})"
											>flag_2</span
										>
										${toCapitalizeFirstLetter(todo_data.priority)}
									</td>
									<td>
										${todo_data.description}
									</td>
									<td>${todo_data.due_date}</td>
								</tr>
			`;
		} else if (this.#currentUserMode === 1) {
			return `
								<tr
									${todo_data.isDone && 'class="completed"'}
									data-id="${todo_data.id}"
								>
									<td>
										<button
											data-id="${todo_data.id}"
											class="material-symbols-outlined edit-todo-item-btn">
											edit_square
										</button>
									</td>
									<td>${todo_data.name}</td>
									<td>
										<span
											class="material-symbols-outlined high"
											style="font-variation-settings: 'FILL' 1;
											color: var(${this.changePriorityFlagColor(todo_data.priority)})"
											>flag_2</span
										>
										${toCapitalizeFirstLetter(todo_data.priority)}
									</td>
									<td>
										${todo_data.description}
									</td>
									<td>${todo_data.due_date}</td>
								</tr>
			`;
		} else {
			return `
								<tr
									${todo_data.isDone && 'class="completed"'}
									data-id="${todo_data.id}"
								>
									<td>
										<button
											data-id="${todo_data.id}"
											class="material-symbols-outlined delete-todo-item-btn">
											delete
										</button>
									</td>
									<td>${todo_data.name}</td>
									<td>
										<span
											class="material-symbols-outlined high"
											style="font-variation-settings: 'FILL' 1;
											color: var(${this.changePriorityFlagColor(todo_data.priority)})"
											>flag_2</span
										>
										${toCapitalizeFirstLetter(todo_data.priority)}
									</td>
									<td>
										${todo_data.description}
									</td>
									<td>${todo_data.due_date}</td>
								</tr>
			`;
		}
	}

	renderTodoItemToCorrectTable(priority, table_row_structure) {
		if (priority === "high") {
			this.#high_priority_todo_table.innerHTML += table_row_structure;
		} else if (priority === "normal") {
			this.#normal_priority_todo_table.innerHTML += table_row_structure;
		} else {
			this.#low_priority_todo_table.innerHTML += table_row_structure;
		}
	}

	changePriorityFlagColor(priority) {
		return this.PriorityFlagColor[priority.toUpperCase()];
	}

	clearTodoTableContents() {
		this.#high_priority_todo_table.innerHTML = "";
		this.#normal_priority_todo_table.innerHTML = "";
		this.#low_priority_todo_table.innerHTML = "";
	}

	initFABEventListeners() {
		this.add_todo_btn.addEventListener("click", () => {
			this.switchToNormalMode();
			this.clearTodoTableContents();
			this.initTodosTableItems();

			this.add_todo_modal.showModal();
			document.body.style.overflow = "hidden";
		});

		this.update_todo_btn.addEventListener("click", (e) => {
			e.preventDefault();

			if (this.#currentUserMode === 1) {
				this.switchToNormalMode();
				this.clearTodoTableContents();
			} else {
				this.switchToEditMode();
				this.clearTodoTableContents();
			}

			this.initTodosTableItems();
		});

		this.delete_todo_btn.addEventListener("click", () => {
			if (this.#currentUserMode === 2) {
				this.switchToNormalMode();
				this.clearTodoTableContents();
			} else {
				this.switchToDeletionMode();
				this.clearTodoTableContents();
			}

			this.initTodosTableItems();
		});
	}

	initToDoFormEventListeners() {
		this.add_todo_modal_add_btn.addEventListener("click", (e) => {
			e.preventDefault();
			const todo_item_id = dist_v4();

			let todo_data = getTodoFormInputsData(this.add_todo_modal_form);
			todo_data.id = todo_item_id;
			todo_data.due_date = formatDateToString(todo_data.due_date);

			if (validateTodoFormInputs(this.add_todo_modal_form, todo_data)) {
				todoHandler.addTodo(
					todo_data.id,
					todo_data.name,
					todo_data.priority,
					todo_data.due_date,
					todo_data.description
				);

				this.add_todo_modal_form.reset();
				this.add_todo_modal.close();
				document.body.style.overflow = "";

				this.clearTodoTableContents();
				this.initTodosTableItems();
			}
		});

		this.add_todo_modal_cancel_btn.addEventListener("click", () => {
			this.add_todo_modal.close();
			document.body.style.overflow = "";
		});

		this.edit_todo_modal_cancel_btn.addEventListener("click", () => {
			this.edit_todo_modal.close();
			document.body.style.overflow = "";
		});

		this.edit_todo_modal_edit_btn.addEventListener("click", (e) => {
			e.preventDefault();

			let updated_todo_data = getTodoFormInputsData(this.edit_todo_modal_form);
			updated_todo_data.due_date = formatDateToString(
				updated_todo_data.due_date
			);

			if (
				validateTodoFormInputs(this.edit_todo_modal_form, updated_todo_data)
			) {
				modules_TodoLocalStorageHandler.updateTodosLocalItem(
					this.#target_todo_id,
					updated_todo_data.name,
					updated_todo_data.priority,
					updated_todo_data.due_date,
					updated_todo_data.description
				);

				this.edit_todo_modal.close();
				document.body.style.overflow = "";

				// Render the updated item to UI
				this.clearTodoTableContents();
				this.initTodosTableItems();
			}
		});
	}

	initTodosTableItems() {
		if (modules_TodoLocalStorageHandler.isTodosLocalExists()) {
			const local_todos = modules_TodoLocalStorageHandler.getTodosLocal();

			if (local_todos.length <= 0)
				return console.warn("Local Todos is empty. No items to be rendered.");

			// Render Todo item to each table
			for (let i = 0; i < local_todos.length; i++) {
				this.addTodoItemToTable(local_todos[i]);
			}

			// Add the event listener for each To Do Item
			this.addEventListenerToEachToDoItems();
		} else {
			console.warn("Local Todos does not exists");
		}
	}

	addEventListenerToEachToDoItems() {
		if (this.#currentUserMode === 0) {
			this.addEventListenerToToDoStatusCheckbox();
		} else if (this.#currentUserMode === 1) {
			this.addEventListenerToToDoItemsEditBtn();
		} else {
			this.addEventListenerToToDoItemsDeleteBtn();
		}
	}

	addEventListenerToToDoStatusCheckbox() {
		const statusCheckboxElements = document.querySelectorAll(
			`tr > td:first-child > input[type="checkbox"]`
		);

		for (let i = 0; i < statusCheckboxElements.length; i++) {
			statusCheckboxElements[i].addEventListener("click", (e) => {
				modules_TodoLocalStorageHandler.updateTodosLocalItemStatus(
					statusCheckboxElements[i].dataset.id,
					e.target.checked
				);
				this.clearTodoTableContents();
				this.initTodosTableItems();
			});
		}
	}

	addEventListenerToToDoItemsEditBtn() {
		const editTodoBtnElements = document.querySelectorAll(
			`tr > td:first-child > button`
		);

		for (let i = 0; i < editTodoBtnElements.length; i++) {
			editTodoBtnElements[i].addEventListener("click", () => {
				const target_id = editTodoBtnElements[i].dataset.id;
				this.edit_todo_modal.show();
				this.renderEditFormModalInputValues(target_id);
				this.#target_todo_id = target_id;
				document.body.style.overflow = "hidden";
			});
		}
	}

	addEventListenerToToDoItemsDeleteBtn() {
		const deleteTodoBtnElements = document.querySelectorAll(
			`tr > td:first-child > button`
		);

		for (let i = 0; i < deleteTodoBtnElements.length; i++) {
			deleteTodoBtnElements[i].addEventListener("click", () => {
				const target_id = deleteTodoBtnElements[i].dataset.id;
				modules_TodoLocalStorageHandler.deleteTodoLocal(target_id);

				this.clearTodoTableContents();
				this.initTodosTableItems();
			});
		}
	}

	renderEditFormModalInputValues(id) {
		const target_todo_data = modules_TodoLocalStorageHandler.getSingleTodoLocal(id);

		const new_name_input =
			this.edit_todo_modal_form.querySelector(`input[name="name"]`);
		const new_priority_input = this.edit_todo_modal_form.querySelector(
			`select[name="priority"]`
		);
		const new_description_input = this.edit_todo_modal_form.querySelector(
			`textarea[name="description"]`
		);
		const new_due_date_input = this.edit_todo_modal_form.querySelector(
			`input[name="due_date"]`
		);

		new_name_input.value = target_todo_data.name;
		new_priority_input.value = target_todo_data.priority;
		new_description_input.value = target_todo_data.description;
		new_due_date_input.value = new Date(
			target_todo_data.due_date
		).toLocaleDateString("en-CA");
	}
}

/* harmony default export */ const modules_DomHandler = (DomHandler);

;// ./src/modules/TodoItems.js


class TodoItem {
	id;
	isDone = false;
	dateCreated;
	name;
	priority;
	due_date;
	description;

	constructor(id, name, priority, due_date, description) {
		const now = new Date();

		this.id = id;
		this.dateCreated = now.toLocaleDateString("en-US");

		this.name = name;
		this.priority = priority;
		this.due_date = due_date;
		this.description = description;
	}

	#editName(new_name) {
		this.name = new_name;
	}

	#editPriority(new_priority) {
		this.priority = new_priority;
	}

	#editDueDate(new_due_date) {
		this.due_date = new_due_date;
	}

	#editDescription(new_description) {
		this.description = new_description;
	}

	updateProperties(new_name, new_priority, new_due_date, new_description) {
		this.#editName(new_name);
		this.#editPriority(new_priority);
		this.#editDueDate(new_due_date);
		this.#editDescription(new_description);

		modules_TodoLocalStorageHandler.updateTodosLocalItem(
			this.id,
			new_name,
			new_priority,
			new_due_date,
			new_description
		);
	}
}

/* harmony default export */ const TodoItems = (TodoItem);

;// ./src/modules/TodoHandler.js



class TodoHandler {
	#todos = [];

	constructor() {
		if (modules_TodoLocalStorageHandler.isTodosLocalExists()) {
			this.#todos = modules_TodoLocalStorageHandler.getTodosLocal();
		}
	}

	addTodo(id, name, priority, due_date, description) {
		this.#todos.push(new TodoItems(id, name, priority, due_date, description));

		modules_TodoLocalStorageHandler.updateTodosLocal(this.#todos);
	}
}

/* harmony default export */ const modules_TodoHandler = (TodoHandler);

// EXTERNAL MODULE: ./src/scripts/changeTheme.js
var changeTheme = __webpack_require__(942);
;// ./src/index.js












const todoHandler = new modules_TodoHandler();
const domHandler = new modules_DomHandler();

modules_TodoLocalStorageHandler.initTodosToLocalStorage();
domHandler.initTodosTableItems();
domHandler.initFABEventListeners();
domHandler.initToDoFormEventListeners();

window.todoHandler = todoHandler;
window.TodoLocalStorageHandler = modules_TodoLocalStorageHandler;
window.domHandler = domHandler;



})();

/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const c = __webpack_require__(/*! ./c */ "./src/c.js");

module.exports = {
  x: 2 + c.x,
};


/***/ }),

/***/ "./src/b.js":
/*!******************!*\
  !*** ./src/b.js ***!
  \******************/
/***/ ((module) => {

module.exports = {
  x: 3,
};


/***/ }),

/***/ "./src/c.js":
/*!******************!*\
  !*** ./src/c.js ***!
  \******************/
/***/ ((module) => {

module.exports = {
  x: 7,
};


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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
const a = __webpack_require__(/*! ./a */ "./src/a.js");
const b = __webpack_require__(/*! ./b */ "./src/b.js");

console.log(a, b, a.x + b.x);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
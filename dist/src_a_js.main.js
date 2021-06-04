(self["webpackChunkbattle_with_webpack"] = self["webpackChunkbattle_with_webpack"] || []).push([["src_a_js"],{

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ "./src/b.js");
/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c */ "./src/c.js");



console.log("a");
const x = 2 + _c__WEBPACK_IMPORTED_MODULE_1__.x + _b__WEBPACK_IMPORTED_MODULE_0__.x;


/***/ }),

/***/ "./src/b.js":
/*!******************!*\
  !*** ./src/b.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ x)
/* harmony export */ });
console.log("b");
const x = 3.14;


/***/ })

}]);
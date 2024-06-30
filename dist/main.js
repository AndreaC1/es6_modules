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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Car{\r\n    constructor(id, make, model, year){\r\n        this.id = id;\r\n        this.make = make;\r\n        this.model = model;\r\n        this.year = year;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\r\n\r\nconsole.log(\"Hello World\");\r\n\r\n// TODO\r\n\r\nconst form = document.querySelector(\"#submitForm\");\r\nconst carMake = document.querySelector(\"#makeInput\");\r\nconst carModel = document.querySelector(\"#modelInput\");\r\nconst carYear = document.querySelector(\"#yearInput\");\r\nconst carMakePara = document.querySelector(\"#car-make\");\r\nconst carModelPara = document.querySelector(\"#car-model\");\r\nconst carYearPara = document.querySelector(\"#car-year\");\r\nconst removeButton = document.querySelector(\"#removeBtn\");\r\nconst wishListUl = document.querySelector(\"#wishListContainer > ul\");\r\nconst wishList = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nform.addEventListener(\"submit\", addCar);\r\nremoveButton.addEventListener(\"click\", removeCar);\r\n\r\nfunction showCarDetails(car){\r\n    carMakePara.textContent = car.make;\r\n    carModelPara.textContent = car.model;\r\n    carYearPara.textContent = car.year;\r\n    removeButton.disabled = false;\r\n    removeButton.setAttribute(\"data-carId\",car.id)\r\n\r\n}\r\n\r\nfunction updateDOMList(){\r\n    wishListUl.innerHTML = \"\";\r\n    wishList.list.forEach((car) => {\r\n        const newLi = document.createElement(\"li\");\r\n        newLi.textContent = `${car.make} ${car.model}`;\r\n        newLi.addEventListener(\"click\", () => {\r\n            showCarDetails(car);\r\n        });\r\n        wishListUl.append(newLi);\r\n    });\r\n}\r\n\r\nfunction addCar(submitEvent){\r\n    submitEvent.preventDefault();\r\n    console.log(\"car make\" + carMake.value);\r\n    console.log(\"car model\" + carModel.value);\r\n    console.log(\"car year\" + carYear.value);\r\n    wishList.add(carMake.value, carModel.value, carYear.value);\r\n    console.log(\" wishList\" + wishList);\r\n    updateDOMList();\r\n}\r\n\r\nfunction removeCar(){\r\n    const carId = Number(removeButton.getAttribute(\"data-carId\"));\r\n    wishList.remove(carId);\r\n    updateDOMList();\r\n    carModelPara.textContent = \"\";\r\n    carMakePara.textContent = \"\";\r\n    carYearPara.textContent = \"\";\r\n    removeButton.disabled = true;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\r\n\r\nclass Wishlist{\r\n    constructor(){\r\n        this.list = [];\r\n        this.nextId = 0;\r\n    }\r\n\r\n    add(make, model, year){\r\n        const car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId, make, model, year);\r\n        this.list.push(car);\r\n    }\r\n\r\n    remove(carId){\r\n        this.list = this.list.filter((car) => \r\n            {\r\n                return car.id !== carId;\r\n    });\r\n    }\r\n\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wishlist);\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
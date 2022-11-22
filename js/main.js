/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules.js */ "./src/js/import/modules.js");

$('#sliderRange').on("input", function () {
  $('.content-3__input').val(this.value); // $('.content-3__input').attr("placeholder", this.value);
}).trigger("change");
$(".header__button").click(function (e) {
  e.preventDefault();
  $(".popup").fadeIn(300, function () {
    $(this).focus();
  });
});
$('.popup__close-text').click(function () {
  $(".popup").fadeOut(300);
}); // $(".popup").on('blur',function(){
//     $(this).fadeOut(300);
// });

$(document).mouseup(function (e) {
  if ($(".popup__wrap").has(e.target).length === 0) {
    $(".popup").fadeOut(300);
  }

  if ($(".test__wrap").has(e.target).length === 0) {
    $(".test").fadeOut(300);
    $(".test__block-1").css("display", "flex");
    $(".test__block-2").css("display", "none");
    $(".test__block-3").css("display", "none");
    $(".test__block-4").css("display", "none");
    $(".test__block-5").css("display", "none");
  }
}); // Open screen 1

$(".content__btn").click(function (e) {
  e.preventDefault();
  $(".test").fadeIn(300, function () {
    $(this).focus();
  });
  $(".test__block-1").css("display", "flex");
}); // Open screen 1-1

$(".content-1__block-select-1-1").click(function (e) {
  e.preventDefault();
  $(".test").fadeIn(300, function () {
    $(this).focus();
  });
  $(".test__block-1").css("display", "none");
  $(".test__block-1-1").css("display", "flex");
}); // Close screen 1-1

$(".test__btn-1-1").click(function (e) {
  e.preventDefault();
  $(".test").fadeIn(300, function () {
    $(this).focus();
  });
  $(".test__block-1").css("display", "flex");
  $(".test__block-1-1").css("display", "none");
}); // Open screen 1-2

$(".content-1__block-select-1-2").click(function (e) {
  e.preventDefault();
  $(".test").fadeIn(300, function () {
    $(this).focus();
  });
  $(".test__block-1").css("display", "none");
  $(".test__block-1-2").css("display", "flex");
}); // Close screen 1-2

$(".test__btn-1-1").click(function (e) {
  e.preventDefault();
  $(".test").fadeIn(300, function () {
    $(this).focus();
  });
  $(".test__block-1").css("display", "flex");
  $(".test__block-1-2").css("display", "none");
}); // Open screen 1-3

$(".content-1__block-select-1-3").click(function (e) {
  e.preventDefault();
  $(".test").fadeIn(300, function () {
    $(this).focus();
  });
  $(".test__block-1").css("display", "none");
  $(".test__block-1-3").css("display", "flex");
}); // Close screen 1-3

$(".test__btn-1-1").click(function (e) {
  e.preventDefault();
  $(".test").fadeIn(300, function () {
    $(this).focus();
  });
  $(".test__block-1").css("display", "flex");
  $(".test__block-1-3").css("display", "none");
}); // Open screen 2

$(".test__btn-1").click(function (e) {
  e.preventDefault();
  $(".test").fadeIn(300, function () {
    $(this).focus();
  });
  $(".test__block-1").css("display", "none");
  $(".test__block-2").css("display", "flex");
}); // Open screen 3

$(".test__btn-2").click(function (e) {
  e.preventDefault();
  $(".test").fadeIn(300, function () {
    $(this).focus();
  });
  $(".test__block-2").css("display", "none");
  $(".test__block-3").css("display", "flex");
}); // Open screen 4

$(".test__btn-3").click(function (e) {
  e.preventDefault();
  $(".test").fadeIn(300, function () {
    $(this).focus();
  });
  $(".test__block-3").css("display", "none");
  $(".test__block-4").css("display", "flex");
}); // Open screen 5

$(".test__btn-4").click(function (e) {
  e.preventDefault();
  $(".test").fadeIn(300, function () {
    $(this).focus();
  });
  $(".test__block-4").css("display", "none");
  $(".test__block-5").css("display", "flex");
});
$('.test__block-close').click(function () {
  $(".test").fadeOut(300);
  $(".test__block-1").css("display", "flex");
  $(".test__block-2").css("display", "none");
  $(".test__block-3").css("display", "none");
  $(".test__block-4").css("display", "none");
  $(".test__block-5").css("display", "none");
}); // $(".content__btn")
// $(".test__block-1")
// $(".test__block-1-1")
// $(".test__block-1-2")
// $(".test__block-1-3")
// $(".test__block-2")
// $(".test__block-3")
// $(".test__block-4")
// $(".test__block-5")
// $(".test__btn-1)

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
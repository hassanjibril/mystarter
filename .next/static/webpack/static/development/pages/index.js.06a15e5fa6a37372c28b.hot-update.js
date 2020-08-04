webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/NavBarItem/NavBarItem.tsx":
/*!**********************************************!*\
  !*** ./components/NavBarItem/NavBarItem.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_styles */ "./components/NavBarItem/_styles.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const NavBarItem = ({
  title,
  products
}) => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleClick = product => {
    router.push(product.handle);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    button: true,
    onClick: toggleOpen,
    className: "nav-list-item"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: "sdsdf"
  })), products.length > 0 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Styled"].NavList, {
    component: "div",
    classes: {
      root: 'nav-list-item--inner'
    },
    disablePadding: true
  }, products.map((product, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    button: true,
    key: index,
    onClick: () => handleClick(product)
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: product.title
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBarItem);

/***/ })

})
//# sourceMappingURL=index.js.06a15e5fa6a37372c28b.hot-update.js.map
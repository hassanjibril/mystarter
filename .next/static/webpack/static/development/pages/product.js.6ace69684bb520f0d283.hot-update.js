webpackHotUpdate("static\\development\\pages\\product.js",{

/***/ "./components/NavBar/NavBar.tsx":
/*!**************************************!*\
  !*** ./components/NavBar/NavBar.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_types */ "./components/NavBar/_types.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_style.scss */ "./components/NavBar/_style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CartController_CartController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CartController/CartController */ "./components/CartController/CartController.tsx");
/* harmony import */ var _navItems_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navItems.json */ "./components/NavBar/navItems.json");
var _navItems_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./navItems.json */ "./components/NavBar/navItems.json", 1);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










/**
 * General component description.
 */
const NavBar = () => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    data,
    loading,
    error
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(_types__WEBPACK_IMPORTED_MODULE_5__["COLLECTIONS_QUERY"], {
    variables: {}
  });

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    position: "static"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    edge: "start",
    className: "navbar-button",
    color: "inherit",
    "aria-label": "menu",
    onClick: toggleDrawer
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_2___default.a, null)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Colgate Connect"), __jsx(_CartController_CartController__WEBPACK_IMPORTED_MODULE_7__["default"], null))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    className: "navbar-drawer",
    variant: "persistent",
    anchor: "left",
    open: open,
    classes: {
      paper: 'navbar-drawer'
    }
  }, __jsx("div", {
    className: "navbar-drawer--header"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Site Navigation"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: toggleDrawer
  }, __jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_3___default.a, null))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/NavBarItem/NavBarItem.tsx":
false,

/***/ "./components/NavBarItem/_styles.ts":
false

})
//# sourceMappingURL=product.js.6ace69684bb520f0d283.hot-update.js.map
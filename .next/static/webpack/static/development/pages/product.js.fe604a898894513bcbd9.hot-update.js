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
/* harmony import */ var _NavBarItem_NavBarItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../NavBarItem/NavBarItem */ "./components/NavBarItem/NavBarItem.tsx");
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
  }, __jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_3___default.a, null))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), !loading && !error && data && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, _navItems_json__WEBPACK_IMPORTED_MODULE_8__.navigationItems.map(({
    title,
    products
  }, key) => __jsx(_NavBarItem_NavBarItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: title,
    products: products
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NavBarItem = ({
  title,
  products
}) => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    button: true,
    onClick: toggleOpen,
    className: "nav-list-item"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: title
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
    key: index
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    primary: product.title
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBarItem);

/***/ }),

/***/ "./components/NavBarItem/_styles.ts":
/*!******************************************!*\
  !*** ./components/NavBarItem/_styles.ts ***!
  \******************************************/
/*! exports provided: Styled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Styled", function() { return Styled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


const NavList = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"])`
  &&& {
    padding-left: 30px !important;
    color: rgba(0, 0, 0, 0.7);
  }
`;
const Styled = {
  NavList
};

/***/ })

})
//# sourceMappingURL=product.js.fe604a898894513bcbd9.hot-update.js.map
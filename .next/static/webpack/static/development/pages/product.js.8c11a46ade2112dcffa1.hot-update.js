webpackHotUpdate("static\\development\\pages\\product.js",{

/***/ "./components/PDPComponent/PDPComponent.tsx":
/*!**************************************************!*\
  !*** ./components/PDPComponent/PDPComponent.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_styles */ "./components/PDPComponent/_styles.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_types */ "./components/PDPComponent/_types.ts");
/* harmony import */ var _ProductDetail_ProductDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ProductDetail/ProductDetail */ "./components/ProductDetail/ProductDetail.tsx");
/* harmony import */ var _pdp_ManualToothbrush__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pdp/ManualToothbrush */ "./components/pdp/ManualToothbrush/index.tsx");
/* harmony import */ var _viewsLay_PageContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~viewsLay/PageContainer */ "./views/layouts/PageContainer.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const PDPComponent = ({
  handle
}) => {
  let product = null;
  const queryVariables = {
    handle: `${handle}`
  };
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_types__WEBPACK_IMPORTED_MODULE_6__["PRODUCT_INFO_QUERY"], {
    variables: queryVariables
  });

  function extractProduct() {
    console.log(data);
    return {
      id: data.productByHandle.id,
      handle: data.productByHandle.handle,
      title: data.productByHandle.title,
      description: data.productByHandle.description,
      imageSrc: data.productByHandle.images.edges[0].node.transformedSrc,
      price: data.productByHandle.priceRange.minVariantPrice.amount,
      variants: data.productByHandle.variants
    };
  }

  if (!loading && !error && data) {
    product = extractProduct();
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Loading..."), !loading && !error && product && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", null, product.title), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), product.handle === 'm1' ? __jsx(_pdp_ManualToothbrush__WEBPACK_IMPORTED_MODULE_8__["default"], {
    product: product
  }) : __jsx(_viewsLay_PageContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: _viewsLay_PageContainer__WEBPACK_IMPORTED_MODULE_9__["PageSize"].medium,
    paddingTop: 45
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["Styled"].PDPContainer, null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["Styled"].PDPMain, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined",
    color: "secondary"
  }, "Back")), __jsx(_ProductDetail_ProductDetail__WEBPACK_IMPORTED_MODULE_7__["default"], {
    product: product
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PDPComponent);

/***/ }),

/***/ "./components/pdp/Whitening/_styles.ts":
false,

/***/ "./components/pdp/Whitening/index.tsx":
false

})
//# sourceMappingURL=product.js.8c11a46ade2112dcffa1.hot-update.js.map
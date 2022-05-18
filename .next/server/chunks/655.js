"use strict";
exports.id = 655;
exports.ids = [655];
exports.modules = {

/***/ 6655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(429);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);


const styles = {
    global: (props)=>({
            body: {
                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)("#FEFEFE", "#0B0F20")(props)
            }
        })
};
const components = {
    Heading: {
        variants: {
            "section-title": {
                // textDecoration: 'underline',
                fontSize: 40,
                // textUnderlineOffset: 6,
                fontWeight: "bold",
                textDecorationColor: "#525252",
                textDecorationThickness: 5,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Button: {
        baseStyle: ()=>({
                font: "Mark Pro"
            })
    }
};
// const textStyles = {
//   h1: {
//     letterSpacing: '30%'
//   }
// }
const fonts = {
    heading: "Mark Pro",
    body: "Mark Pro"
};
const colors = {
    grassTeal: "#88ccca"
};
const config = {
    initialColorMode: "light",
    useSystemColorMode: false
};
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    config,
    styles,
    components,
    fonts,
    colors
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ })

};
;
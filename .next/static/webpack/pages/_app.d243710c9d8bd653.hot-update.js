"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/MobileNavigation.js":
/*!****************************************!*\
  !*** ./components/MobileNavigation.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MobileNavigation\": function() { return /* binding */ MobileNavigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar openTransition = {\n    duration: 1.1,\n    delay: 1.2,\n    ease: [\n        0.6,\n        0.01,\n        -0.05,\n        0.9\n    ]\n};\nvar openTopTransition = {\n    duration: 1.1,\n    delay: 1.3,\n    ease: [\n        0.6,\n        0.01,\n        -0.05,\n        0.9\n    ]\n};\nvar openBottomTransition = {\n    duration: 1.1,\n    delay: 1.7,\n    ease: [\n        0.6,\n        0.01,\n        -0.05,\n        0.9\n    ]\n};\nvar closedTansition = {\n    duration: 1,\n    ease: [\n        0.6,\n        0.01,\n        -0.05,\n        0.9\n    ]\n};\nvar MobileNavigation = function(param) {\n    var variants = param.variants, isOpen = param.isOpen, toggleOpen = param.toggleOpen;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        // data-scroll\n        // data-scroll-sticky\n        // data-scroll-target=\"#menu-target\"\n        initial: \"closed\",\n        animate: isOpen ? \"open\" : \"closed\",\n        variants: variants,\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuWrapper),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            animate: isOpen ? {\n                opacity: 1,\n                transition: openTransition\n            } : {\n                opacity: 0,\n                transition: closedTansition\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    animate: isOpen ? {\n                        opacity: 1,\n                        transition: openTopTransition\n                    } : {\n                        opacity: 0,\n                        transition: closedTansition\n                    },\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationTop),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"navigation-top__left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"navigation-h4\",\n                                    children: \"DONT BE SHY\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"navigation-top__left--links\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"https://github.com/adeolaadeoti\",\n                                            rel: \"noopener\",\n                                            target: \"_blank\",\n                                            children: \"\\uD83D\\uDC7E GH\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 13\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"https://twitter.com/adeolajs\",\n                                            rel: \"noopener\",\n                                            target: \"_blank\",\n                                            children: \"\\uD83D\\uDC26 TW\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 13\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"https://www.linkedin.com/in/adeoladev\",\n                                            rel: \"noopener\",\n                                            target: \"_blank\",\n                                            children: \"\\uD83D\\uDCBC LD\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 13\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"https://www.instagram.com/adeolaadeoti_\",\n                                            rel: \"noopener\",\n                                            target: \"_blank\",\n                                            children: \"\\uD83D\\uDCF8 IN\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 13\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                            lineNumber: 57,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"navigation-top__right\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"navigation-h4\",\n                                    children: \"COLLABORATE OR SAY HI?\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"mailto:adeolaonigegeara@gmail.com\",\n                                    target: \"_blank\",\n                                    rel: \"nofollow noopener noreferrer\",\n                                    children: \"Tell me about it\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                            lineNumber: 74,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    animate: isOpen ? {\n                        opacity: 1,\n                        transition: openBottomTransition\n                    } : {\n                        opacity: 0,\n                        transition: closedTansition\n                    },\n                    className: \"navigation-bottom\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"navigation-h4\",\n                            children: \"NAVIGATE\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                            lineNumber: 94,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"navigation-bottom__projects\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    rel: \"noopener\",\n                                    href: \"https://alexxandria.vercel.app/\",\n                                    className: \"navigation-bottom__projects-card\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: [\n                                            \"Alexxandria\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                                lineNumber: 104,\n                                                columnNumber: 15\n                                            }, _this),\n                                            \"Forque\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 13\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    // href=\"https://pixelchef.netlify.app/\"\n                                    href: \"#about\",\n                                    onClick: toggleOpen,\n                                    // target=\"_blank\"\n                                    rel: \"noopener\",\n                                    className: \"navigation-bottom__projects-card\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"webp/pixelchef-nav.webp\",\n                                            alt: \"pixelChef\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                            lineNumber: 116,\n                                            columnNumber: 13\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"PixelChef\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                            lineNumber: 117,\n                                            columnNumber: 13\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 11\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://ngjingkang.netlify.app/\",\n                                    target: \"_blank\",\n                                    rel: \"noopener\",\n                                    className: \"navigation-bottom__projects-card\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"webp/adeola-1.webp\",\n                                            alt: \"adeola\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                            lineNumber: 125,\n                                            columnNumber: 13\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: [\n                                                \"AdeolaAdeoti\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                                    lineNumber: 128,\n                                                    columnNumber: 15\n                                                }, _this),\n                                                \"Version 1\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                            lineNumber: 126,\n                                            columnNumber: 13\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                            lineNumber: 95,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n                    lineNumber: 86,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n            lineNumber: 42,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n        lineNumber: 32,\n        columnNumber: 3\n    }, _this);\n};\n_c = MobileNavigation;\nvar _c;\n$RefreshReg$(_c, \"MobileNavigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLGtDQUFrQzs7c0RBRTVDLDhEQUFDYSxLQUFHOzRDQUFDQyxHQUFHLEVBQUMseUJBQXlCOzRDQUFDQyxHQUFHLEVBQUMsV0FBVzs7Ozs7aURBQUc7c0RBQ3JELDhEQUFDTCxJQUFFO3NEQUFDLFdBQVM7Ozs7O2lEQUFLOzs7Ozs7eUNBQ2hCOzhDQUNKLDhEQUFDSixHQUFDO29DQUNBQyxJQUFJLEVBQUMsaUNBQWlDO29DQUN0Q0UsTUFBTSxFQUFDLFFBQVE7b0NBQ2ZELEdBQUcsRUFBQyxVQUFVO29DQUNkUixTQUFTLEVBQUMsa0NBQWtDOztzREFFNUMsOERBQUNhLEtBQUc7NENBQUNDLEdBQUcsRUFBQyxvQkFBb0I7NENBQUNDLEdBQUcsRUFBQyxRQUFROzs7OztpREFBRztzREFDN0MsOERBQUNMLElBQUU7O2dEQUFDLGNBRUY7OERBQUEsOERBQUNDLElBQUU7Ozs7eURBQUc7Z0RBQUEsV0FFUjs7Ozs7O2lEQUFLOzs7Ozs7eUNBQ0g7Ozs7OztpQ0FDQTs7Ozs7O3lCQUNLOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0Y7Q0FDZCxDQUFDO0FBMUdXbEIsS0FBQUEsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW9iaWxlTmF2aWdhdGlvbi5qcz81NmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuY29uc3Qgb3BlblRyYW5zaXRpb24gPSB7XG4gIGR1cmF0aW9uOiAxLjEsXG4gIGRlbGF5OiAxLjIsXG4gIGVhc2U6IFswLjYsIDAuMDEsIC0wLjA1LCAwLjldLFxufTtcblxuY29uc3Qgb3BlblRvcFRyYW5zaXRpb24gPSB7XG4gIGR1cmF0aW9uOiAxLjEsXG4gIGRlbGF5OiAxLjMsXG4gIGVhc2U6IFswLjYsIDAuMDEsIC0wLjA1LCAwLjldLFxufTtcblxuY29uc3Qgb3BlbkJvdHRvbVRyYW5zaXRpb24gPSB7XG4gIGR1cmF0aW9uOiAxLjEsXG4gIGRlbGF5OiAxLjcsXG4gIGVhc2U6IFswLjYsIDAuMDEsIC0wLjA1LCAwLjldLFxufTtcblxuY29uc3QgY2xvc2VkVGFuc2l0aW9uID0ge1xuICBkdXJhdGlvbjogMSxcbiAgZWFzZTogWzAuNiwgMC4wMSwgLTAuMDUsIDAuOV0sXG59O1xuXG5cblxuZXhwb3J0IGNvbnN0IE1vYmlsZU5hdmlnYXRpb24gPSAoeyB2YXJpYW50cywgaXNPcGVuLCB0b2dnbGVPcGVuIH0pID0+IChcbiAgXG4gIDxtb3Rpb24uZGl2XG4gICAgLy8gZGF0YS1zY3JvbGxcbiAgICAvLyBkYXRhLXNjcm9sbC1zdGlja3lcbiAgICAvLyBkYXRhLXNjcm9sbC10YXJnZXQ9XCIjbWVudS10YXJnZXRcIlxuICAgIGluaXRpYWw9XCJjbG9zZWRcIlxuICAgIGFuaW1hdGU9e2lzT3BlbiA/ICdvcGVuJzonY2xvc2VkJ31cbiAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudVdyYXBwZXJ9XG4gID5cbiAgICBcbiAgICA8bW90aW9uLmRpdlxuICAgICAgYW5pbWF0ZT17XG4gICAgICAgIGlzT3BlblxuICAgICAgICAgID8geyBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiBvcGVuVHJhbnNpdGlvbiB9XG4gICAgICAgICAgOiB7IG9wYWNpdHk6IDAsIHRyYW5zaXRpb246IGNsb3NlZFRhbnNpdGlvbiB9XG4gICAgICB9XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgYW5pbWF0ZT17XG4gICAgICAgICAgaXNPcGVuXG4gICAgICAgICAgICA/IHsgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogb3BlblRvcFRyYW5zaXRpb24gfVxuICAgICAgICAgICAgOiB7IG9wYWNpdHk6IDAsIHRyYW5zaXRpb246IGNsb3NlZFRhbnNpdGlvbiB9XG4gICAgICAgIH1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvblRvcH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLXRvcF9fbGVmdFwiPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWg0XCI+RE9OVCBCRSBTSFk8L2g0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi10b3BfX2xlZnQtLWxpbmtzXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FkZW9sYWFkZW90aVwiIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIPCfkb4gR0hcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2FkZW9sYWpzXCIgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAg8J+QpiBUV1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hZGVvbGFkZXZcIiByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICDwn5K8IExEXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hZGVvbGFhZGVvdGlfXCIgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAg8J+TuCBJTlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLXRvcF9fcmlnaHRcIj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1oNFwiPkNPTExBQk9SQVRFIE9SIFNBWSBIST88L2g0PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwibWFpbHRvOmFkZW9sYW9uaWdlZ2VhcmFAZ21haWwuY29tXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBUZWxsIG1lIGFib3V0IGl0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgYW5pbWF0ZT17XG4gICAgICAgICAgaXNPcGVuXG4gICAgICAgICAgICA/IHsgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogb3BlbkJvdHRvbVRyYW5zaXRpb24gfVxuICAgICAgICAgICAgOiB7IG9wYWNpdHk6IDAsIHRyYW5zaXRpb246IGNsb3NlZFRhbnNpdGlvbiB9XG4gICAgICAgIH1cbiAgICAgICAgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1ib3R0b21cIlxuICAgICAgPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1oNFwiPk5BVklHQVRFPC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWJvdHRvbV9fcHJvamVjdHNcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FsZXh4YW5kcmlhLnZlcmNlbC5hcHAvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tYm90dG9tX19wcm9qZWN0cy1jYXJkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIEFsZXh4YW5kcmlhXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICBGb3JxdWVcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICAvLyBocmVmPVwiaHR0cHM6Ly9waXhlbGNoZWYubmV0bGlmeS5hcHAvXCJcbiAgICAgICAgICAgIGhyZWY9JyNhYm91dCdcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU9wZW59XG4gICAgICAgICAgICAvLyB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1ib3R0b21fX3Byb2plY3RzLWNhcmRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwid2VicC9waXhlbGNoZWYtbmF2LndlYnBcIiBhbHQ9XCJwaXhlbENoZWZcIiAvPlxuICAgICAgICAgICAgPGgyPlBpeGVsQ2hlZjwvaDI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9uZ2ppbmdrYW5nLm5ldGxpZnkuYXBwL1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1ib3R0b21fX3Byb2plY3RzLWNhcmRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwid2VicC9hZGVvbGEtMS53ZWJwXCIgYWx0PVwiYWRlb2xhXCIgLz5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgQWRlb2xhQWRlb3RpXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICBWZXJzaW9uIDFcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gIDwvbW90aW9uLmRpdj5cbik7Il0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwic3R5bGVzIiwib3BlblRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiZWFzZSIsIm9wZW5Ub3BUcmFuc2l0aW9uIiwib3BlbkJvdHRvbVRyYW5zaXRpb24iLCJjbG9zZWRUYW5zaXRpb24iLCJNb2JpbGVOYXZpZ2F0aW9uIiwidmFyaWFudHMiLCJpc09wZW4iLCJ0b2dnbGVPcGVuIiwiZGl2IiwiaW5pdGlhbCIsImFuaW1hdGUiLCJjbGFzc05hbWUiLCJtZW51V3JhcHBlciIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwibmF2aWdhdGlvblRvcCIsImg0IiwiYSIsImhyZWYiLCJyZWwiLCJ0YXJnZXQiLCJoMiIsImJyIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MobileNavigation.js\n");

/***/ })

});
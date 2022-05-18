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

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _menuToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuToggle */ \"./components/menuToggle.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./components/menu.js\");\n/* harmony import */ var _MobileNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MobileNavigation */ \"./components/MobileNavigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar variants = {\n    open: {\n        left: 0,\n        pointerEvent: \"none\",\n        transition: {\n            duration: 1,\n            ease: [\n                0.6,\n                0.01,\n                -0.05,\n                0.9\n            ]\n        }\n    },\n    closed: {\n        left: \"-100vw\",\n        pointerEvent: \"none\",\n        transition: {\n            delay: 1,\n            duration: 1,\n            ease: [\n                0.6,\n                0.01,\n                -0.05,\n                0.9\n            ]\n        }\n    }\n};\nvar NavBar = function() {\n    _s();\n    var ref = _slicedToArray((0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useCycle)(false, true), 2), isOpen = ref[0], toggleOpen = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        console.log(isOpen);\n    }, [\n        isOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().navigationWrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MobileNavigation__WEBPACK_IMPORTED_MODULE_4__.MobileNavigation, {\n                variants: variants,\n                isOpen: isOpen\n            }, void 0, false, {\n                fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/navbar.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().menuTop),\n                initial: {\n                    y: -100\n                },\n                animate: {\n                    y: 0\n                },\n                transition: {\n                    duration: 3,\n                    type: \"spring\",\n                    delay: 5\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    initial: false,\n                    animate: isOpen ? \"open\" : \"closed\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Container, {\n                        style: {\n                            border: \"1px solid white\",\n                            backdropFilter: \"blur(10px)\",\n                            borderRadius: \"20px\"\n                        },\n                        display: \"flex\",\n                        p: 2,\n                        maxW: \"container.xl\",\n                        wrap: \"wrap\",\n                        alignItems: \"center\",\n                        justifyContent: \"space-between\",\n                        color: \"silver\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().brandWrapper),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"jkbrand.png\",\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().brandLogo)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/navbar.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 33\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().brandReveal),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().banner),\n                                                children: \"JINGKANG\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/navbar.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 37\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/navbar.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 33\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/navbar.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 29\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/navbar.js\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuToggle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                toggle: function() {\n                                    return toggleOpen();\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/navbar.js\",\n                                lineNumber: 72,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/navbar.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/navbar.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/navbar.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/navbar.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, _this);\n};\n_s(NavBar, \"Ox/kOQk77U3sU4y4bskytBO+mPw=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useCycle\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsVUFFaEM7Ozs7O3FEQUFPOzs7OztpREFDTDs7Ozs7O3lDQUNOOzs7OztxQ0FDRDswQ0FDUCw4REFBQ0csbURBQVU7Z0NBQUM4QyxNQUFNLEVBQUU7MkNBQU0vQixVQUFVLEVBQUU7aUNBQUE7Ozs7O3FDQUFJOzs7Ozs7NkJBQ3RDOzs7Ozt5QkFDQzs7Ozs7cUJBQ0o7Ozs7OzthQUNKLENBQ2hCO0NBQ0o7R0FoREtGLE1BQU07O1FBQ3FCZCxtREFBUTs7O0FBRG5DYyxLQUFBQSxNQUFNO0FBa0RaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzPzViNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgbW90aW9uLCB1c2VDeWNsZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IE1lbnVUb2dnbGUgZnJvbSAnLi9tZW51VG9nZ2xlJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBNb2JpbGVOYXZpZ2F0aW9uIH0gZnJvbSAnLi9Nb2JpbGVOYXZpZ2F0aW9uJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gICAgb3Blbjoge1xuICAgICAgbGVmdDogMCxcbiAgICAgIHBvaW50ZXJFdmVudDogXCJub25lXCIsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBlYXNlOiBbMC42LCAwLjAxLCAtMC4wNSwgMC45XSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjbG9zZWQ6IHtcbiAgICAgIGxlZnQ6IFwiLTEwMHZ3XCIsXG4gICAgICBwb2ludGVyRXZlbnQ6IFwibm9uZVwiLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBkZWxheTogMSxcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIGVhc2U6IFswLjYsIDAuMDEsIC0wLjA1LCAwLjldLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzT3BlbiwgdG9nZ2xlT3Blbl0gPSB1c2VDeWNsZShmYWxzZSwgdHJ1ZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGlzT3BlbilcbiAgICB9LCBbaXNPcGVuXSlcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uV3JhcHBlcn1cbiAgICAgICAgPlxuICAgICAgICAgICAgPE1vYmlsZU5hdmlnYXRpb24gdmFyaWFudHM9e3ZhcmlhbnRzfSBpc09wZW49e2lzT3Blbn0vPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51VG9wfVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgeTogLTEwMH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAwIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMywgdHlwZTogJ3NwcmluZycsIGRlbGF5OiA1fX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCI6IFwiY2xvc2VkXCJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCB3aGl0ZScsIGJhY2tkcm9wRmlsdGVyOidibHVyKDEwcHgpJywgYm9yZGVyUmFkaXVzOicyMHB4J319XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCIgXG4gICAgICAgICAgICAgICAgICAgIHA9ezJ9IFxuICAgICAgICAgICAgICAgICAgICBtYXhXPVwiY29udGFpbmVyLnhsXCJcbiAgICAgICAgICAgICAgICAgICAgd3JhcD1cIndyYXBcIiBcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj0nc2lsdmVyJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiamticmFuZC5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5icmFuZExvZ299IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZXMuYnJhbmRSZXZlYWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFubmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKSU5HS0FOR1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudVRvZ2dsZSB0b2dnbGU9eygpID0+IHRvZ2dsZU9wZW4oKX0gLz5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhciAgICAgICAgICJdLCJuYW1lcyI6WyJMaW5rIiwiQ29udGFpbmVyIiwiQm94Iiwic3R5bGVzIiwibW90aW9uIiwidXNlQ3ljbGUiLCJNZW51VG9nZ2xlIiwiTWVudSIsIk1vYmlsZU5hdmlnYXRpb24iLCJ1c2VFZmZlY3QiLCJ2YXJpYW50cyIsIm9wZW4iLCJsZWZ0IiwicG9pbnRlckV2ZW50IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImNsb3NlZCIsImRlbGF5IiwiTmF2QmFyIiwiaXNPcGVuIiwidG9nZ2xlT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJuYXZpZ2F0aW9uV3JhcHBlciIsIm1lbnVUb3AiLCJpbml0aWFsIiwieSIsImFuaW1hdGUiLCJ0eXBlIiwic3R5bGUiLCJib3JkZXIiLCJiYWNrZHJvcEZpbHRlciIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJwIiwibWF4VyIsIndyYXAiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsImhyZWYiLCJhIiwiYnJhbmRXcmFwcGVyIiwiaW1nIiwic3JjIiwiYnJhbmRMb2dvIiwiYnJhbmRSZXZlYWwiLCJzcGFuIiwiYmFubmVyIiwidG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MobileNavigation\": function() { return /* binding */ MobileNavigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\n\nvar openTransition = {\n    duration: 1.1,\n    delay: 1.2,\n    ease: [\n        0.6,\n        0.01,\n        -0.05,\n        0.9\n    ]\n};\nvar openTopTransition = {\n    duration: 1.1,\n    delay: 1.3,\n    ease: [\n        0.6,\n        0.01,\n        -0.05,\n        0.9\n    ]\n};\nvar openBottomTransition = {\n    duration: 1.1,\n    delay: 1.7,\n    ease: [\n        0.6,\n        0.01,\n        -0.05,\n        0.9\n    ]\n};\nvar closedTansition = {\n    duration: 1,\n    ease: [\n        0.6,\n        0.01,\n        -0.05,\n        0.9\n    ]\n};\nvar MobileNavigation = function(param) {\n    var variants = param.variants, isOpen = param.isOpen;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        // data-scroll\n        // data-scroll-sticky\n        // data-scroll-target=\"#menu-target\"\n        variants: variants,\n        style: {\n            background: \"red\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/jingkangng/Documents/Projects/ngjingkang-homepage/components/MobileNavigation.js\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, _this);\n};\n_c = MobileNavigation;\nvar _c;\n$RefreshReg$(_c, \"MobileNavigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vYmlsZU5hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQStCO0FBQ1E7QUFDTztBQUU5QyxJQUFNRyxjQUFjLEdBQUc7SUFDckJDLFFBQVEsRUFBRSxHQUFHO0lBQ2JDLEtBQUssRUFBRSxHQUFHO0lBQ1ZDLElBQUksRUFBRTtBQUFDLFdBQUc7QUFBRSxZQUFJO1FBQUUsQ0FBQyxJQUFJO0FBQUUsV0FBRztLQUFDO0NBQzlCO0FBRUQsSUFBTUMsaUJBQWlCLEdBQUc7SUFDeEJILFFBQVEsRUFBRSxHQUFHO0lBQ2JDLEtBQUssRUFBRSxHQUFHO0lBQ1ZDLElBQUksRUFBRTtBQUFDLFdBQUc7QUFBRSxZQUFJO1FBQUUsQ0FBQyxJQUFJO0FBQUUsV0FBRztLQUFDO0NBQzlCO0FBRUQsSUFBTUUsb0JBQW9CLEdBQUc7SUFDM0JKLFFBQVEsRUFBRSxHQUFHO0lBQ2JDLEtBQUssRUFBRSxHQUFHO0lBQ1ZDLElBQUksRUFBRTtBQUFDLFdBQUc7QUFBRSxZQUFJO1FBQUUsQ0FBQyxJQUFJO0FBQUUsV0FBRztLQUFDO0NBQzlCO0FBRUQsSUFBTUcsZUFBZSxHQUFHO0lBQ3RCTCxRQUFRLEVBQUUsQ0FBQztJQUNYRSxJQUFJLEVBQUU7QUFBQyxXQUFHO0FBQUUsWUFBSTtRQUFFLENBQUMsSUFBSTtBQUFFLFdBQUc7S0FBQztDQUM5QjtBQUVNLElBQU1JLGdCQUFnQixHQUFHO1FBQUdDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxNQUFNLFNBQU5BLE1BQU07eUJBRWpELDhEQUFDWCxxREFBVTtRQUNULGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsb0NBQW9DO1FBQ3BDVSxRQUFRLEVBQUVBLFFBQVE7UUFDbEJHLEtBQUssRUFBRTtZQUNMQyxVQUFVLEVBQUMsS0FBSztTQUNqQjs7Ozs7YUFnR1U7Q0FDZCxDQUFDO0FBMUdXTCxLQUFBQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2JpbGVOYXZpZ2F0aW9uLmpzPzU2ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBvcGVuVHJhbnNpdGlvbiA9IHtcbiAgZHVyYXRpb246IDEuMSxcbiAgZGVsYXk6IDEuMixcbiAgZWFzZTogWzAuNiwgMC4wMSwgLTAuMDUsIDAuOV0sXG59O1xuXG5jb25zdCBvcGVuVG9wVHJhbnNpdGlvbiA9IHtcbiAgZHVyYXRpb246IDEuMSxcbiAgZGVsYXk6IDEuMyxcbiAgZWFzZTogWzAuNiwgMC4wMSwgLTAuMDUsIDAuOV0sXG59O1xuXG5jb25zdCBvcGVuQm90dG9tVHJhbnNpdGlvbiA9IHtcbiAgZHVyYXRpb246IDEuMSxcbiAgZGVsYXk6IDEuNyxcbiAgZWFzZTogWzAuNiwgMC4wMSwgLTAuMDUsIDAuOV0sXG59O1xuXG5jb25zdCBjbG9zZWRUYW5zaXRpb24gPSB7XG4gIGR1cmF0aW9uOiAxLFxuICBlYXNlOiBbMC42LCAwLjAxLCAtMC4wNSwgMC45XSxcbn07XG5cbmV4cG9ydCBjb25zdCBNb2JpbGVOYXZpZ2F0aW9uID0gKHsgdmFyaWFudHMsIGlzT3BlbiB9KSA9PiAoXG4gIFxuICA8bW90aW9uLmRpdlxuICAgIC8vIGRhdGEtc2Nyb2xsXG4gICAgLy8gZGF0YS1zY3JvbGwtc3RpY2t5XG4gICAgLy8gZGF0YS1zY3JvbGwtdGFyZ2V0PVwiI21lbnUtdGFyZ2V0XCJcbiAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmQ6J3JlZCdcbiAgICB9fVxuICAgIC8vIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVXcmFwcGVyfVxuICA+XG4gICAgXG4gICAgey8qIDxtb3Rpb24uZGl2XG4gICAgICBhbmltYXRlPXtcbiAgICAgICAgaXNPcGVuXG4gICAgICAgICAgPyB7IG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IG9wZW5UcmFuc2l0aW9uIH1cbiAgICAgICAgICA6IHsgb3BhY2l0eTogMCwgdHJhbnNpdGlvbjogY2xvc2VkVGFuc2l0aW9uIH1cbiAgICAgIH1cbiAgICA+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBhbmltYXRlPXtcbiAgICAgICAgICBpc09wZW5cbiAgICAgICAgICAgID8geyBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiBvcGVuVG9wVHJhbnNpdGlvbiB9XG4gICAgICAgICAgICA6IHsgb3BhY2l0eTogMCwgdHJhbnNpdGlvbjogY2xvc2VkVGFuc2l0aW9uIH1cbiAgICAgICAgfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uVG9wfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tdG9wX19sZWZ0XCI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24taDRcIj5ET05UIEJFIEEgU1RSQU5HRVI8L2g0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi10b3BfX2xlZnQtLWxpbmtzXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FkZW9sYWFkZW90aVwiIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIPCfkb4gR0hcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2FkZW9sYWpzXCIgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAg8J+QpiBUV1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hZGVvbGFkZXZcIiByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICDwn5K8IExEXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hZGVvbGFhZGVvdGlfXCIgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAg8J+TuCBJTlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLXRvcF9fcmlnaHRcIj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1oNFwiPkhBVkUgQU4gSURFQT88L2g0PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwibWFpbHRvOmFkZW9sYW9uaWdlZ2VhcmFAZ21haWwuY29tXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBUZWxsIG1lIGFib3V0IGl0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgYW5pbWF0ZT17XG4gICAgICAgICAgaXNPcGVuXG4gICAgICAgICAgICA/IHsgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogb3BlbkJvdHRvbVRyYW5zaXRpb24gfVxuICAgICAgICAgICAgOiB7IG9wYWNpdHk6IDAsIHRyYW5zaXRpb246IGNsb3NlZFRhbnNpdGlvbiB9XG4gICAgICAgIH1cbiAgICAgICAgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1ib3R0b21cIlxuICAgICAgPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1oNFwiPkZFQVRVUkVEIFBST0pFQ1RTPC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWJvdHRvbV9fcHJvamVjdHNcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FsZXh4YW5kcmlhLnZlcmNlbC5hcHAvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tYm90dG9tX19wcm9qZWN0cy1jYXJkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIndlYnAvYWxleHhhbmRyaWEtbmF2LndlYnBcIiBhbHQ9XCJhbGV4eGFuZHJpYVwiIC8+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIEFsZXh4YW5kcmlhXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICBGb3JxdWVcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9waXhlbGNoZWYubmV0bGlmeS5hcHAvXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWJvdHRvbV9fcHJvamVjdHMtY2FyZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJ3ZWJwL3BpeGVsY2hlZi1uYXYud2VicFwiIGFsdD1cInBpeGVsQ2hlZlwiIC8+XG4gICAgICAgICAgICA8aDI+UGl4ZWxDaGVmPC9oMj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2FkZW9sYWFkZW90aS5uZXRsaWZ5LmFwcC9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tYm90dG9tX19wcm9qZWN0cy1jYXJkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIndlYnAvYWRlb2xhLTEud2VicFwiIGFsdD1cImFkZW9sYVwiIC8+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIEFkZW9sYUFkZW90aVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgVmVyc2lvbiAxXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9tb3Rpb24uZGl2PiAqL31cbiAgPC9tb3Rpb24uZGl2PlxuKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJzdHlsZXMiLCJvcGVuVHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJlYXNlIiwib3BlblRvcFRyYW5zaXRpb24iLCJvcGVuQm90dG9tVHJhbnNpdGlvbiIsImNsb3NlZFRhbnNpdGlvbiIsIk1vYmlsZU5hdmlnYXRpb24iLCJ2YXJpYW50cyIsImlzT3BlbiIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MobileNavigation.js\n");

/***/ })

});
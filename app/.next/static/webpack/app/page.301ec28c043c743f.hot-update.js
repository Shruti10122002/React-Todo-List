"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst page = ()=>{\n    _s();\n    const [title, settitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [desc, setdesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mainTask, setmainTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const submitHandle = (e)=>{\n        e.preventDefault();\n        console.log(title);\n        console.log(desc);\n        settittle(\"\");\n        setdesc(\"\");\n    };\n    let render;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"bg-black text-white p-5 text-5xl font-bold text-center\",\n                children: \"Shruti's Todo List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitHandle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"text-2xl border-zinc-800 border-2 m-8 px-5 py-2\",\n                    placeholder: \"Enter Tittle Here\",\n                    value: title,\n                    onChange: (e)=>{\n                        settitle(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"text-2xl border-zinc-800 border-2 m-8 px-5 py-2 \",\n                        placeholder: \"Enter Description Here\",\n                        value: desc,\n                        onChange: (e)=>{\n                            setdesc(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5\",\n                        children: \"Add Tak\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-8 bg-slate-200\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"qRpw1ZYIeQM0gSYtVkALhASg924=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNxQztBQUVyQyxNQUFNRSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTVEsZUFBYyxDQUFDQztRQUNuQkEsRUFBRUMsY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDVjtRQUNaUyxRQUFRQyxHQUFHLENBQUNSO1FBQ1pTLFVBQVU7UUFDVlIsUUFBUTtJQUdWO0lBQ0EsSUFBSVM7SUFDSixxQkFDRTs7MEJBQ0EsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUEwRDs7Ozs7OzBCQUV0RSw4REFBQ0M7Z0JBQUtDLFVBQVVWOzBCQUNkLDRFQUFDVztvQkFBTUMsTUFBSztvQkFBT0osV0FBVTtvQkFDN0JLLGFBQVk7b0JBQ1pDLE9BQU9wQjtvQkFDUHFCLFVBQVUsQ0FBQ2Q7d0JBQ1ROLFNBQVNNLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSztvQkFDekI7Ozs7Ozs7Ozs7OzBCQU1GLDhEQUFDTDs7a0NBQ0MsOERBQUNFO3dCQUFNQyxNQUFLO3dCQUFPSixXQUFVO3dCQUM3QkssYUFBWTt3QkFDWkMsT0FBT2xCO3dCQUNQbUIsVUFBVyxDQUFDZDs0QkFDVkosUUFBUUksRUFBRWUsTUFBTSxDQUFDRixLQUFLO3dCQUN4Qjs7Ozs7O2tDQUVBLDhEQUFDRzt3QkFBT1QsV0FBVTtrQ0FBK0Q7Ozs7Ozs7Ozs7OzswQkFHbkYsOERBQUNVOzs7OzswQkFDRCw4REFBQ0M7Z0JBQUlYLFdBQVU7Ozs7Ozs7O0FBVXJCO0dBcERNZjtBQXNETiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0dGl0bGVdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2Rlc2MsIHNldGRlc2NdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW21haW5UYXNrLCBzZXRtYWluVGFza10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3Qgc3VibWl0SGFuZGxlID0oZSk9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZyh0aXRsZSlcbiAgICBjb25zb2xlLmxvZyhkZXNjKVxuICAgIHNldHRpdHRsZShcIlwiKVxuICAgIHNldGRlc2MoXCJcIilcbiAgICBcblxuICB9XG4gIGxldCByZW5kZXJcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxoMSBjbGFzc05hbWU9J2JnLWJsYWNrIHRleHQtd2hpdGUgcC01IHRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlcicgPlxuICAgICAgU2hydXRpJ3MgVG9kbyBMaXN0PC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGV9PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBib3JkZXItemluYy04MDAgYm9yZGVyLTIgbS04IHB4LTUgcHktMlwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVGl0dGxlIEhlcmVcIlxuICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSk9PntcbiAgICAgICAgICBzZXR0aXRsZShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgXG4gICAgICA8L2Zvcm0+XG4gICAgICBcbiAgXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBib3JkZXItemluYy04MDAgYm9yZGVyLTIgbS04IHB4LTUgcHktMiAnXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRGVzY3JpcHRpb24gSGVyZVwiXG4gICAgICAgIHZhbHVlPXtkZXNjfVxuICAgICAgICBvbkNoYW5nZSA9eyhlKT0+e1xuICAgICAgICAgIHNldGRlc2MoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmxhY2sgdGV4dC13aGl0ZSBweC00IHB5LTIgdGV4dC0yeGwgZm9udC1ib2xkIHJvdW5kZWQgbS01XCI+QWRkIFRhazwvYnV0dG9uPlxuICAgICAgICBcbiAgICAgIDwvZm9ybT5cbiAgICAgIDxociAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggYmctc2xhdGUtMjAwXCI+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICAgIFxuICAgICAgXG4gICAgPC8+XG4gICAgXG4gIFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwicGFnZSIsInRpdGxlIiwic2V0dGl0bGUiLCJkZXNjIiwic2V0ZGVzYyIsIm1haW5UYXNrIiwic2V0bWFpblRhc2siLCJzdWJtaXRIYW5kbGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic2V0dGl0dGxlIiwicmVuZGVyIiwiaDEiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJociIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});
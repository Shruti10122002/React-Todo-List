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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst page = ()=>{\n    _s();\n    const [title, settitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [desc, setdesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    react__WEBPACK_IMPORTED_MODULE_1__.useState;\n    const submitHandle = (e)=>{\n        e.preventDefault();\n        console.log(title);\n        console.log(desc);\n        settittle(\"\");\n        setdesc(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"bg-black text-white p-5 text-5xl font-bold text-center\",\n                children: \"Shruti's Todo List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitHandle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"text-2xl border-zinc-800 border-2 m-8 px-5 py-2\",\n                    placeholder: \"Enter Tittle Here\",\n                    value: title,\n                    onChange: (e)=>{\n                        settitle(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"text-2xl border-zinc-800 border-2 m-8 px-5 py-2 \",\n                        placeholder: \"Enter Description Here\",\n                        value: desc,\n                        onChange: (e)=>{\n                            setdesc(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5\",\n                        children: \"Add Tak\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"Jb/kcBb+BbFX+GXVLyUarMRTUto=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNxQztBQUVyQyxNQUFNRSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDakNBLDJDQUFRQTtJQUNSLE1BQU1NLGVBQWMsQ0FBQ0M7UUFDbkJBLEVBQUVDLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ1I7UUFDWk8sUUFBUUMsR0FBRyxDQUFDTjtRQUNaTyxVQUFVO1FBQ1ZOLFFBQVE7SUFHVjtJQUNBLHFCQUNFOzswQkFDQSw4REFBQ087Z0JBQUdDLFdBQVU7MEJBQTBEOzs7Ozs7MEJBRXRFLDhEQUFDQztnQkFBS0MsVUFBVVQ7MEJBQ2QsNEVBQUNVO29CQUFNQyxNQUFLO29CQUFPSixXQUFVO29CQUM3QkssYUFBWTtvQkFDWkMsT0FBT2pCO29CQUNQa0IsVUFBVSxDQUFDYjt3QkFDVEosU0FBU0ksRUFBRWMsTUFBTSxDQUFDRixLQUFLO29CQUN6Qjs7Ozs7Ozs7Ozs7MEJBS0YsOERBQUNMOztrQ0FDQyw4REFBQ0U7d0JBQU1DLE1BQUs7d0JBQU9KLFdBQVU7d0JBQzdCSyxhQUFZO3dCQUNaQyxPQUFPZjt3QkFDUGdCLFVBQVcsQ0FBQ2I7NEJBQ1ZGLFFBQVFFLEVBQUVjLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDeEI7Ozs7OztrQ0FFQSw4REFBQ0c7d0JBQU9ULFdBQVU7a0NBQStEOzs7Ozs7Ozs7Ozs7OztBQVV6RjtHQTlDTVo7QUFnRE4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBwYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdGl0bGUsIHNldHRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtkZXNjLCBzZXRkZXNjXSA9IHVzZVN0YXRlKFwiXCIpXG4gIHVzZVN0YXRlXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZSA9KGUpPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2codGl0bGUpXG4gICAgY29uc29sZS5sb2coZGVzYylcbiAgICBzZXR0aXR0bGUoXCJcIilcbiAgICBzZXRkZXNjKFwiXCIpXG4gICAgXG5cbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGgxIGNsYXNzTmFtZT0nYmctYmxhY2sgdGV4dC13aGl0ZSBwLTUgdGV4dC01eGwgZm9udC1ib2xkIHRleHQtY2VudGVyJyA+XG4gICAgICBTaHJ1dGkncyBUb2RvIExpc3Q8L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZX0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGJvcmRlci16aW5jLTgwMCBib3JkZXItMiBtLTggcHgtNSBweS0yXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUaXR0bGUgSGVyZVwiXG4gICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKT0+e1xuICAgICAgICAgIHNldHRpdGxlKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICBcbiAgICAgIDwvZm9ybT5cbiAgICAgXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBib3JkZXItemluYy04MDAgYm9yZGVyLTIgbS04IHB4LTUgcHktMiAnXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRGVzY3JpcHRpb24gSGVyZVwiXG4gICAgICAgIHZhbHVlPXtkZXNjfVxuICAgICAgICBvbkNoYW5nZSA9eyhlKT0+e1xuICAgICAgICAgIHNldGRlc2MoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmxhY2sgdGV4dC13aGl0ZSBweC00IHB5LTIgdGV4dC0yeGwgZm9udC1ib2xkIHJvdW5kZWQgbS01XCI+QWRkIFRhazwvYnV0dG9uPlxuICAgICAgICBcbiAgICAgIDwvZm9ybT5cbiAgICAgIFxuICAgICAgICBcbiAgICAgIFxuICAgIDwvPlxuICAgIFxuICBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJ0aXRsZSIsInNldHRpdGxlIiwiZGVzYyIsInNldGRlc2MiLCJzdWJtaXRIYW5kbGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic2V0dGl0dGxlIiwiaDEiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});
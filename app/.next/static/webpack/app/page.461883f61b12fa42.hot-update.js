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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst page = ()=>{\n    _s();\n    const [tittle, settitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [desc, setdesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const submitHandle = (e)=>{\n        e.preventDefault();\n        console.log(title);\n        console.log(describe(\"\", ()=>{}));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"bg-black text-white p-5 text-5xl font-bold text-center\",\n                children: \"Shruti's Todo List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitHandle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"text-2xl border-zinc-800 border-2 m-8 px-5 py-2\",\n                    placeholder: \"Enter Tittle Here\",\n                    value: tittle,\n                    onChange: (e)=>{\n                        settitle(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"text-2xl border-zinc-800 border-2 m-8 px-5 py-2 \",\n                        placeholder: \"Enter Description Here\",\n                        value: desc,\n                        onChange: (e)=>{\n                            setdesc(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5\",\n                        children: \"Add Tak\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"ia9SdgTc6wer2SQbfy6rlPFEaVw=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNxQztBQUVyQyxNQUFNRSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsUUFBUUMsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNwQyxNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDakMsTUFBTU0sZUFBYyxDQUFDQztRQUNuQkEsRUFBRUMsY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDQztRQUNaRixRQUFRQyxHQUFHLENBQUNFLFNBQVMsSUFBSSxLQUV6QjtJQUdGO0lBQ0EscUJBQ0U7OzBCQUNBLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBMEQ7Ozs7OzswQkFFdEUsOERBQUNDO2dCQUFLQyxVQUFVVjswQkFDZCw0RUFBQ1c7b0JBQU1DLE1BQUs7b0JBQU9KLFdBQVU7b0JBQzdCSyxhQUFZO29CQUNaQyxPQUFPbEI7b0JBQ1BtQixVQUFVLENBQUNkO3dCQUNUSixTQUFTSSxFQUFFZSxNQUFNLENBQUNGLEtBQUs7b0JBQ3pCOzs7Ozs7Ozs7OzswQkFLRiw4REFBQ0w7O2tDQUNDLDhEQUFDRTt3QkFBTUMsTUFBSzt3QkFBT0osV0FBVTt3QkFDN0JLLGFBQVk7d0JBQ1pDLE9BQU9oQjt3QkFDUGlCLFVBQVcsQ0FBQ2Q7NEJBQ1ZGLFFBQVFFLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDeEI7Ozs7OztrQ0FFQSw4REFBQ0c7d0JBQU9ULFdBQVU7a0NBQStEOzs7Ozs7Ozs7Ozs7OztBQVV6RjtHQTdDTWI7QUErQ04sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBwYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdGl0dGxlLCBzZXR0aXRsZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZGVzYywgc2V0ZGVzY10gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBzdWJtaXRIYW5kbGUgPShlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnNvbGUubG9nKHRpdGxlKVxuICAgIGNvbnNvbGUubG9nKGRlc2NyaWJlKCcnLCAoKSA9PiB7XG4gICAgICBcbiAgICB9KVxuICAgIClcblxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aDEgY2xhc3NOYW1lPSdiZy1ibGFjayB0ZXh0LXdoaXRlIHAtNSB0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1jZW50ZXInID5cbiAgICAgIFNocnV0aSdzIFRvZG8gTGlzdDwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlfT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgYm9yZGVyLXppbmMtODAwIGJvcmRlci0yIG0tOCBweC01IHB5LTJcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFRpdHRsZSBIZXJlXCJcbiAgICAgICAgdmFsdWU9e3RpdHRsZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKT0+e1xuICAgICAgICAgIHNldHRpdGxlKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICBcbiAgICAgIDwvZm9ybT5cbiAgICAgXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBib3JkZXItemluYy04MDAgYm9yZGVyLTIgbS04IHB4LTUgcHktMiAnXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRGVzY3JpcHRpb24gSGVyZVwiXG4gICAgICAgIHZhbHVlPXtkZXNjfVxuICAgICAgICBvbkNoYW5nZSA9eyhlKT0+e1xuICAgICAgICAgIHNldGRlc2MoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmxhY2sgdGV4dC13aGl0ZSBweC00IHB5LTIgdGV4dC0yeGwgZm9udC1ib2xkIHJvdW5kZWQgbS01XCI+QWRkIFRhazwvYnV0dG9uPlxuICAgICAgICBcbiAgICAgIDwvZm9ybT5cbiAgICAgIFxuICAgICAgICBcbiAgICAgIFxuICAgIDwvPlxuICAgIFxuICBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJ0aXR0bGUiLCJzZXR0aXRsZSIsImRlc2MiLCJzZXRkZXNjIiwic3VibWl0SGFuZGxlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiZGVzY3JpYmUiLCJoMSIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});
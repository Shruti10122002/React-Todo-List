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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst page = ()=>{\n    _s();\n    const [title, settitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [desc, setdesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mainTask, setmainTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const submitHandle = (e)=>{\n        e.preventDefault();\n        setmainTask([\n            ...mainTask,\n            {\n                title,\n                desc\n            }\n        ]);\n        settitle(\"\");\n        setdesc(\"\");\n        console.log(mainTask);\n    };\n    let renderTask = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"No Task Available\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n        lineNumber: 18,\n        columnNumber: 19\n    }, undefined);\n    renderTask = mainTask.map((t, i)=>{\n        return;\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: t.tittle\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                    children: t.desc\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n            lineNumber: 21,\n            columnNumber: 6\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"bg-black text-white p-5 text-5xl font-bold text-center\",\n                children: \"Shruti's Todo List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitHandle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"text-2xl border-zinc-800 border-2 m-8 px-5 py-2\",\n                        placeholder: \"Enter Tittle Here\",\n                        value: title,\n                        onChange: (e)=>{\n                            settitle(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"text-2xl border-zinc-800 border-2 m-8 px-5 py-2 \",\n                        placeholder: \"Enter Description Here\",\n                        value: desc,\n                        onChange: (e)=>{\n                            setdesc(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5\",\n                        children: \"Add Tak\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-8 bg-slate-200\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: renderTask\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"qRpw1ZYIeQM0gSYtVkALhASg924=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNxQztBQUVyQyxNQUFNRSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTVEsZUFBYyxDQUFDQztRQUNuQkEsRUFBRUMsY0FBYztRQUNoQkgsWUFBWTtlQUFJRDtZQUFTO2dCQUFDSjtnQkFBTUU7WUFBSTtTQUFFO1FBRXRDRCxTQUFTO1FBQ1RFLFFBQVE7UUFDUk0sUUFBUUMsR0FBRyxDQUFDTjtJQUdkO0lBQ0EsSUFBSU8sMkJBQVksOERBQUNDO2tCQUFHOzs7Ozs7SUFDcEJELGFBQVlQLFNBQVNTLEdBQUcsQ0FBQyxDQUFDQyxHQUFFQztRQUMxQjtzQkFDQyw4REFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2QsOERBQUNDOzhCQUFJSixFQUFFSyxNQUFNOzs7Ozs7OEJBQ2IsOERBQUNDOzhCQUFJTixFQUFFWixJQUFJOzs7Ozs7Ozs7Ozs7SUFHZjtJQUNBLHFCQUNFOzswQkFDQSw4REFBQ21CO2dCQUFHSixXQUFVOzBCQUEwRDs7Ozs7OzBCQUV0RSw4REFBQ0s7Z0JBQUtDLFVBQVVqQjs7a0NBQ2QsOERBQUNrQjt3QkFBTUMsTUFBSzt3QkFBT1IsV0FBVTt3QkFDN0JTLGFBQVk7d0JBQ1pDLE9BQU8zQjt3QkFDUDRCLFVBQVUsQ0FBQ3JCOzRCQUNUTixTQUFTTSxFQUFFc0IsTUFBTSxDQUFDRixLQUFLO3dCQUN6Qjs7Ozs7O2tDQUlBLDhEQUFDSDt3QkFBTUMsTUFBSzt3QkFBT1IsV0FBVTt3QkFDN0JTLGFBQVk7d0JBQ1pDLE9BQU96Qjt3QkFDUDBCLFVBQVcsQ0FBQ3JCOzRCQUNWSixRQUFRSSxFQUFFc0IsTUFBTSxDQUFDRixLQUFLO3dCQUN4Qjs7Ozs7O2tDQUVBLDhEQUFDRzt3QkFBT2IsV0FBVTtrQ0FBK0Q7Ozs7Ozs7Ozs7OzswQkFHbkYsOERBQUNjOzs7OzswQkFDRCw4REFBQ2Y7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNlOzhCQUNFckI7Ozs7Ozs7Ozs7Ozs7QUFXWDtHQTdETVo7QUErRE4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBwYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdGl0bGUsIHNldHRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtkZXNjLCBzZXRkZXNjXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFttYWluVGFzaywgc2V0bWFpblRhc2tdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZSA9KGUpPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0bWFpblRhc2soWy4uLm1haW5UYXNrLHt0aXRsZSxkZXNjfV0pO1xuICAgIFxuICAgIHNldHRpdGxlKFwiXCIpXG4gICAgc2V0ZGVzYyhcIlwiKVxuICAgIGNvbnNvbGUubG9nKG1haW5UYXNrKVxuICAgIFxuXG4gIH1cbiAgbGV0IHJlbmRlclRhc2sgPTxoMj5ObyBUYXNrIEF2YWlsYWJsZTwvaDI+XG4gIHJlbmRlclRhc2s9IG1haW5UYXNrLm1hcCgodCxpKT0+e1xuICAgIHJldHVyblxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIiA+XG4gICAgICA8aDU+e3QudGl0dGxlfTwvaDU+XG4gICAgICA8aDY+e3QuZGVzY308L2g2PlxuICAgIDwvZGl2PlxuXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aDEgY2xhc3NOYW1lPSdiZy1ibGFjayB0ZXh0LXdoaXRlIHAtNSB0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1jZW50ZXInID5cbiAgICAgIFNocnV0aSdzIFRvZG8gTGlzdDwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlfT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgYm9yZGVyLXppbmMtODAwIGJvcmRlci0yIG0tOCBweC01IHB5LTJcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFRpdHRsZSBIZXJlXCJcbiAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICBvbkNoYW5nZT17KGUpPT57XG4gICAgICAgICAgc2V0dGl0bGUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIFxuICAgICAgXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT0ndGV4dC0yeGwgYm9yZGVyLXppbmMtODAwIGJvcmRlci0yIG0tOCBweC01IHB5LTIgJ1xuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIERlc2NyaXB0aW9uIEhlcmVcIlxuICAgICAgICB2YWx1ZT17ZGVzY31cbiAgICAgICAgb25DaGFuZ2UgPXsoZSk9PntcbiAgICAgICAgICBzZXRkZXNjKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsYWNrIHRleHQtd2hpdGUgcHgtNCBweS0yIHRleHQtMnhsIGZvbnQtYm9sZCByb3VuZGVkIG0tNVwiPkFkZCBUYWs8L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICA8L2Zvcm0+XG4gICAgICA8aHIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IGJnLXNsYXRlLTIwMFwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3JlbmRlclRhc2t9XG4gICAgICAgICAgPC91bD5cblxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgICAgXG4gICAgICBcbiAgICA8Lz5cbiAgICBcbiAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJwYWdlIiwidGl0bGUiLCJzZXR0aXRsZSIsImRlc2MiLCJzZXRkZXNjIiwibWFpblRhc2siLCJzZXRtYWluVGFzayIsInN1Ym1pdEhhbmRsZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJUYXNrIiwiaDIiLCJtYXAiLCJ0IiwiaSIsImRpdiIsImNsYXNzTmFtZSIsImg1IiwidGl0dGxlIiwiaDYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsImhyIiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});
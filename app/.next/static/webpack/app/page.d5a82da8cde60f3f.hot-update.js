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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst page = ()=>{\n    _s();\n    const [title, settitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [desc, setdesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mainTask, setmainTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const submitHandler = (e)=>{\n        e.preventDefault();\n        setmainTask([\n            ...mainTask,\n            {\n                title,\n                desc\n            }\n        ]);\n        settitle(\"\");\n        setdesc(\"\");\n        console.log(mainTask);\n    };\n    let renderTask = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"No Task Available\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n        lineNumber: 18,\n        columnNumber: 19\n    }, undefined);\n    renderTask = mainTask.map((t, i)=>{\n        return;\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    children: t.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                    children: t.desc\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n            lineNumber: 21,\n            columnNumber: 6\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"bg-black text-white p-5 text-5xl font-bold text-center\",\n                children: \"Shruti's Todo List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"text-2xl border-zinc-800 border-2 m-8 px-5 py-2\",\n                    placeholder: \"Enter Tittle Here\",\n                    value: title,\n                    onChange: (e)=>{\n                        settitle(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"text-2xl border-zinc-800 border-2 m-8 px-5 py-2 \",\n                        placeholder: \"Enter Description Here\",\n                        value: desc,\n                        onChange: (e)=>{\n                            setdesc(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5\",\n                        children: \"Add Task\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-8 bg-slate-200\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: renderTask\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shruti Ranjan\\\\Desktop\\\\todolist\\\\app\\\\page.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"qRpw1ZYIeQM0gSYtVkALhASg924=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNxQztBQUVyQyxNQUFNRSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNJLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTVEsZ0JBQWUsQ0FBQ0M7UUFDcEJBLEVBQUVDLGNBQWM7UUFDaEJILFlBQVk7ZUFBSUQ7WUFBUztnQkFBRUo7Z0JBQU1FO1lBQUs7U0FBRTtRQUV4Q0QsU0FBUztRQUNURSxRQUFRO1FBQ1JNLFFBQVFDLEdBQUcsQ0FBQ047SUFHZDtJQUNBLElBQUlPLDJCQUFZLDhEQUFDQztrQkFBRzs7Ozs7O0lBQ3BCRCxhQUFZUCxTQUFTUyxHQUFHLENBQUMsQ0FBQ0MsR0FBRUM7UUFDMUI7c0JBQ0MsOERBQUNDO1lBQUlDLFdBQVU7OzhCQUNkLDhEQUFDQzs4QkFBSUosRUFBRWQsS0FBSzs7Ozs7OzhCQUNaLDhEQUFDbUI7OEJBQUlMLEVBQUVaLElBQUk7Ozs7Ozs7Ozs7OztJQUdmO0lBQ0EscUJBQ0U7OzBCQUNBLDhEQUFDa0I7Z0JBQUdILFdBQVU7MEJBQTBEOzs7Ozs7MEJBRXRFLDhEQUFDSTtnQkFBS0MsVUFBVWhCOzBCQUNkLDRFQUFDaUI7b0JBQU1DLE1BQUs7b0JBQU9QLFdBQVU7b0JBQzdCUSxhQUFZO29CQUNaQyxPQUFPMUI7b0JBQ1AyQixVQUFVLENBQUNwQjt3QkFDVE4sU0FBU00sRUFBRXFCLE1BQU0sQ0FBQ0YsS0FBSztvQkFDekI7Ozs7Ozs7Ozs7OzBCQUlBLDhEQUFDTDtnQkFBS0MsVUFBVWhCOztrQ0FFaEIsOERBQUNpQjt3QkFBTUMsTUFBSzt3QkFBT1AsV0FBVTt3QkFDN0JRLGFBQVk7d0JBQ1pDLE9BQU94Qjt3QkFDUHlCLFVBQVcsQ0FBQ3BCOzRCQUNWSixRQUFRSSxFQUFFcUIsTUFBTSxDQUFDRixLQUFLO3dCQUN4Qjs7Ozs7O2tDQUVBLDhEQUFDRzt3QkFBT1osV0FBVTtrQ0FBK0Q7Ozs7Ozs7Ozs7OzswQkFHbkYsOERBQUNhOzs7OzswQkFDRCw4REFBQ2Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNjOzhCQUNFcEI7Ozs7Ozs7Ozs7Ozs7QUFXWDtHQS9ETVo7QUFpRU4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBwYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdGl0bGUsIHNldHRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtkZXNjLCBzZXRkZXNjXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFttYWluVGFzaywgc2V0bWFpblRhc2tdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPShlKT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldG1haW5UYXNrKFsuLi5tYWluVGFzayx7IHRpdGxlLGRlc2MgfV0pO1xuICAgIFxuICAgIHNldHRpdGxlKFwiXCIpXG4gICAgc2V0ZGVzYyhcIlwiKVxuICAgIGNvbnNvbGUubG9nKG1haW5UYXNrKVxuICAgIFxuXG4gIH1cbiAgbGV0IHJlbmRlclRhc2sgPTxoMj5ObyBUYXNrIEF2YWlsYWJsZTwvaDI+XG4gIHJlbmRlclRhc2s9IG1haW5UYXNrLm1hcCgodCxpKT0+e1xuICAgIHJldHVyblxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCIgPlxuICAgICAgPGg1Pnt0LnRpdGxlfTwvaDU+XG4gICAgICA8aDY+e3QuZGVzY308L2g2PlxuICAgIDwvZGl2PlxuXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8aDEgY2xhc3NOYW1lPSdiZy1ibGFjayB0ZXh0LXdoaXRlIHAtNSB0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1jZW50ZXInID5cbiAgICAgIFNocnV0aSdzIFRvZG8gTGlzdDwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGJvcmRlci16aW5jLTgwMCBib3JkZXItMiBtLTggcHgtNSBweS0yXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUaXR0bGUgSGVyZVwiXG4gICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKT0+e1xuICAgICAgICAgIHNldHRpdGxlKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT0ndGV4dC0yeGwgYm9yZGVyLXppbmMtODAwIGJvcmRlci0yIG0tOCBweC01IHB5LTIgJ1xuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIERlc2NyaXB0aW9uIEhlcmVcIlxuICAgICAgICB2YWx1ZT17ZGVzY31cbiAgICAgICAgb25DaGFuZ2UgPXsoZSk9PntcbiAgICAgICAgICBzZXRkZXNjKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsYWNrIHRleHQtd2hpdGUgcHgtNCBweS0yIHRleHQtMnhsIGZvbnQtYm9sZCByb3VuZGVkIG0tNVwiPkFkZCBUYXNrPC9idXR0b24+XG4gICAgICAgIFxuICAgICAgPC9mb3JtPlxuICAgICAgPGhyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBiZy1zbGF0ZS0yMDBcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtyZW5kZXJUYXNrfVxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICAgIFxuICAgICAgXG4gICAgPC8+XG4gICAgXG4gIFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwicGFnZSIsInRpdGxlIiwic2V0dGl0bGUiLCJkZXNjIiwic2V0ZGVzYyIsIm1haW5UYXNrIiwic2V0bWFpblRhc2siLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlbmRlclRhc2siLCJoMiIsIm1hcCIsInQiLCJpIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDUiLCJoNiIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwiaHIiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/token/[address]/page",{

/***/ "(app-pages-browser)/./src/components/tables/TradeHistoryTable.tsx":
/*!*****************************************************!*\
  !*** ./src/components/tables/TradeHistoryTable.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TradeHistoryTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nextui_org_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextui-org/button */ \"(app-pages-browser)/./node_modules/.pnpm/@nextui-org+button@2.0.38_@nextui-org+system@2.2.6_@nextui-org+theme@2.2.11_tailwindcss@3.4.1_o233cpxullzzwznewffl7vmq4a/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs\");\n/* harmony import */ var _nextui_org_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextui-org/table */ \"(app-pages-browser)/./node_modules/.pnpm/@nextui-org+table@2.0.40_@nextui-org+system@2.2.6_@nextui-org+theme@2.2.11_tailwindcss@3.4.13_piqpceokiwavjbfe2curkhadee/node_modules/@nextui-org/table/dist/chunk-HAXD4P37.mjs\");\n/* harmony import */ var _nextui_org_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/table */ \"(app-pages-browser)/./node_modules/.pnpm/@nextui-org+table@2.0.40_@nextui-org+system@2.2.6_@nextui-org+theme@2.2.11_tailwindcss@3.4.13_piqpceokiwavjbfe2curkhadee/node_modules/@nextui-org/table/dist/chunk-YRZGWF2W.mjs\");\n/* harmony import */ var _nextui_org_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/table */ \"(app-pages-browser)/./node_modules/.pnpm/@nextui-org+table@2.0.40_@nextui-org+system@2.2.6_@nextui-org+theme@2.2.11_tailwindcss@3.4.13_piqpceokiwavjbfe2curkhadee/node_modules/@nextui-org/table/dist/chunk-TSPNSPCL.mjs\");\n/* harmony import */ var _nextui_org_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextui-org/table */ \"(app-pages-browser)/./node_modules/.pnpm/@nextui-org+table@2.0.40_@nextui-org+system@2.2.6_@nextui-org+theme@2.2.11_tailwindcss@3.4.13_piqpceokiwavjbfe2curkhadee/node_modules/@nextui-org/table/dist/chunk-FKPXBCGS.mjs\");\n/* harmony import */ var _nextui_org_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextui-org/table */ \"(app-pages-browser)/./node_modules/.pnpm/@nextui-org+table@2.0.40_@nextui-org+system@2.2.6_@nextui-org+theme@2.2.11_tailwindcss@3.4.13_piqpceokiwavjbfe2curkhadee/node_modules/@nextui-org/table/dist/chunk-CIL4Y7FA.mjs\");\n/* harmony import */ var _nextui_org_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextui-org/table */ \"(app-pages-browser)/./node_modules/.pnpm/@nextui-org+table@2.0.40_@nextui-org+system@2.2.6_@nextui-org+theme@2.2.11_tailwindcss@3.4.13_piqpceokiwavjbfe2curkhadee/node_modules/@nextui-org/table/dist/chunk-F3UDT23P.mjs\");\n/* harmony import */ var _nextui_org_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextui-org/table */ \"(app-pages-browser)/./node_modules/.pnpm/@nextui-org+shared-utils@2.0.8/node_modules/@nextui-org/shared-utils/dist/chunk-KARN4QIT.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst entriesPerPageOptions = [\n    10,\n    25,\n    50\n];\nfunction TradeHistoryTable(param) {\n    let { tokenAddress } = param;\n    _s();\n    const columns = [\n        {\n            key: \"type\",\n            label: \"TYPE\"\n        },\n        {\n            key: \"amount\",\n            label: \"AMOUNT\"\n        },\n        {\n            key: \"ticker\",\n            label: \"TICKER\"\n        },\n        {\n            key: \"near\",\n            label: \"NEAR\"\n        },\n        {\n            key: \"price\",\n            label: \"PRICE\"\n        },\n        {\n            key: \"maker\",\n            label: \"MAKER\"\n        },\n        {\n            key: \"txn\",\n            label: \"TXN\"\n        }\n    ];\n    const [entriesPerPage, setEntriesPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [firstId, setFirstId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [lastId, setLastId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [trades, setTrades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    async function updateTransactions(url) {\n        let sort = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;\n        console.log(url);\n        try {\n            fetch(url, {\n                method: \"GET\"\n            }).then((response)=>response.json()).then((data)=>{\n                data.forEach((date)=>{\n                    const { id } = date;\n                    const { block_timestamp_nanosec, balance_changes } = date.event;\n                    console.log(id, block_timestamp_nanosec, balance_changes);\n                });\n            /*          const transactions_temp: Trade[] = data.map((trade: any) => {\n            const temp_trade: Trade = {\n              id: 0,\n              date: 0,\n              type: \"buy\",\n              qtyFrom: 0,\n              qtyTo: 0,\n              otherTokenAddress: \"\",\n              maker: \"\",\n              txn: \"\",\n            };\n            return trade;\n          });\n          if (sort) {\n            transactions_temp.sort((a, b) => a.id - b.id);\n          }\n          setTrades(transactions_temp); */ });\n        } catch (error) {\n            console.log(error);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initialFetch = async ()=>{\n            updateTransactions(\"https://events.intear.tech/query/trade_swap?involved_token_account_ids=\".concat(tokenAddress, \"&pagination_by=Newest&limit=\").concat(entriesPerPage));\n        };\n        initialFetch();\n    }, []);\n    function previousPage() {}\n    function nextPage() {}\n    function updateEntriesPerPage(entries) {\n        setEntriesPerPage(entries);\n        updateTransactions(\"https://events.intear.tech/query/tx_transaction?pagination_by=AfterId&id=\".concat(lastId, \"&limit=\").concat(entries));\n    }\n    /* \n  Necessary Information\n  Token Ticker\n  Token Price\n  Current NEAR price\n  Current Token Price in NEAR\n  */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            trades && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_table__WEBPACK_IMPORTED_MODULE_2__.table_default, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_table__WEBPACK_IMPORTED_MODULE_3__.table_header_default, {\n                            columns: columns,\n                            children: (column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_table__WEBPACK_IMPORTED_MODULE_4__.table_column_default, {\n                                    children: column.label\n                                }, column.key, false, {\n                                    fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 17\n                                }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_table__WEBPACK_IMPORTED_MODULE_5__.table_body_default, {\n                            items: trades,\n                            children: (item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_table__WEBPACK_IMPORTED_MODULE_6__.table_row_default, {\n                                    children: (columnKey)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_table__WEBPACK_IMPORTED_MODULE_7__.table_cell_default, {\n                                            children: (0,_nextui_org_table__WEBPACK_IMPORTED_MODULE_8__.getKeyValue)(item, columnKey)\n                                        }, void 0, false, {\n                                            fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 21\n                                        }, this)\n                                }, item.id, false, {\n                                    fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 17\n                                }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-2 ml-4 my-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2\",\n                        children: [\n                            page === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_button__WEBPACK_IMPORTED_MODULE_9__.button_default, {\n                                isDisabled: true,\n                                children: \"Previous\"\n                            }, void 0, false, {\n                                fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 13\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_button__WEBPACK_IMPORTED_MODULE_9__.button_default, {\n                                onClick: previousPage,\n                                children: \"Previous\"\n                            }, void 0, false, {\n                                fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_button__WEBPACK_IMPORTED_MODULE_9__.button_default, {\n                                onClick: nextPage,\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n                                lineNumber: 139,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Results Per Page\"\n                    }, void 0, false, {\n                        fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2\",\n                        children: entriesPerPageOptions.map((amount)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_button__WEBPACK_IMPORTED_MODULE_9__.button_default, {\n                                onClick: ()=>updateEntriesPerPage(amount),\n                                children: amount\n                            }, amount, false, {\n                                fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/efte/Documents/projects/NEAR/REDACTED/nearblocks/near-explorer-redacted/nearblocks-clone/src/components/tables/TradeHistoryTable.tsx\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, this);\n}\n_s(TradeHistoryTable, \"jjRlnyxIkW+aCeJsJtIZFRSHZ+Q=\");\n_c = TradeHistoryTable;\nvar _c;\n$RefreshReg$(_c, \"TradeHistoryTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RhYmxlcy9UcmFkZUhpc3RvcnlUYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDQTtBQVVqQjtBQWEzQixNQUFNVSx3QkFBd0I7SUFBQztJQUFJO0lBQUk7Q0FBRztBQUUzQixTQUFTQyxrQkFBa0IsS0FJekM7UUFKeUMsRUFDeENDLFlBQVksRUFHYixHQUp5Qzs7SUFLeEMsTUFBTUMsVUFBVTtRQUNkO1lBQUVDLEtBQUs7WUFBUUMsT0FBTztRQUFPO1FBQzdCO1lBQUVELEtBQUs7WUFBVUMsT0FBTztRQUFTO1FBQ2pDO1lBQUVELEtBQUs7WUFBVUMsT0FBTztRQUFTO1FBQ2pDO1lBQUVELEtBQUs7WUFBUUMsT0FBTztRQUFPO1FBQzdCO1lBQUVELEtBQUs7WUFBU0MsT0FBTztRQUFRO1FBQy9CO1lBQUVELEtBQUs7WUFBU0MsT0FBTztRQUFRO1FBQy9CO1lBQUVELEtBQUs7WUFBT0MsT0FBTztRQUFNO0tBQzVCO0lBRUQsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHaEIsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDaUIsTUFBTUMsUUFBUSxHQUFHbEIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDbUIsU0FBU0MsV0FBVyxHQUFHcEIsK0NBQVFBLENBQWdCO0lBQ3RELE1BQU0sQ0FBQ3FCLFFBQVFDLFVBQVUsR0FBR3RCLCtDQUFRQSxDQUFnQjtJQUNwRCxNQUFNLENBQUN1QixRQUFRQyxVQUFVLEdBQUd4QiwrQ0FBUUEsQ0FBaUI7SUFFckQsZUFBZXlCLG1CQUFtQkMsR0FBVztZQUFFQyxPQUFBQSxpRUFBZ0I7UUFDN0RDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWixJQUFJO1lBQ0ZJLE1BQU1KLEtBQUs7Z0JBQ1RLLFFBQVE7WUFDVixHQUNHQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHO2dCQUNMQSxLQUFLQyxPQUFPLENBQUMsQ0FBQ0M7b0JBQ1osTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBR0Q7b0JBQ2YsTUFBTSxFQUFFRSx1QkFBdUIsRUFBRUMsZUFBZSxFQUFFLEdBQUdILEtBQUtJLEtBQUs7b0JBQy9EYixRQUFRQyxHQUFHLENBQUNTLElBQUlDLHlCQUF5QkM7Z0JBQzNDO1lBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBZ0I4QixHQUNoQztRQUNKLEVBQUUsT0FBT0UsT0FBTztZQUNkZCxRQUFRQyxHQUFHLENBQUNhO1FBQ2Q7SUFDRjtJQUVBM0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNNEMsZUFBZTtZQUNuQmxCLG1CQUNFLDBFQUFxSFYsT0FBM0NKLGNBQWEsZ0NBQTZDLE9BQWZJO1FBRXpIO1FBQ0E0QjtJQUNGLEdBQUcsRUFBRTtJQUVMLFNBQVNDLGdCQUFnQjtJQUN6QixTQUFTQyxZQUFZO0lBQ3JCLFNBQVNDLHFCQUFxQkMsT0FBZTtRQUMzQy9CLGtCQUFrQitCO1FBQ2xCdEIsbUJBQ0UsNEVBQTRGc0IsT0FBaEIxQixRQUFPLFdBQWlCLE9BQVIwQjtJQUVoRztJQUNBOzs7Ozs7RUFNQSxHQUNBLHFCQUNFLDhEQUFDQzs7WUFDRXpCLHdCQUNDLDhEQUFDeUI7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUMvQyw0REFBS0E7O3NDQUNKLDhEQUFDQyxtRUFBV0E7NEJBQUNTLFNBQVNBO3NDQUNuQixDQUFDc0MsdUJBQ0EsOERBQUM3QyxtRUFBV0E7OENBQW1CNkMsT0FBT3BDLEtBQUs7bUNBQXpCb0MsT0FBT3JDLEdBQUc7Ozs7Ozs7Ozs7c0NBR2hDLDhEQUFDVCxpRUFBU0E7NEJBQUMrQyxPQUFPNUI7c0NBQ2YsQ0FBQzZCLHFCQUNBLDhEQUFDOUMsZ0VBQVFBOzhDQUNOLENBQUMrQywwQkFDQSw4REFBQzlDLGlFQUFTQTtzREFBRUMsOERBQVdBLENBQUM0QyxNQUFNQzs7Ozs7O21DQUZuQkQsS0FBS2QsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVVoQyw4REFBQ1U7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7NEJBQ1poQyxTQUFTLGtCQUNSLDhEQUFDaEIsOERBQU1BO2dDQUFDcUQsVUFBVTswQ0FBQzs7Ozs7cURBRW5CLDhEQUFDckQsOERBQU1BO2dDQUFDc0QsU0FBU1g7MENBQWM7Ozs7OzswQ0FFakMsOERBQUMzQyw4REFBTUE7Z0NBQUNzRCxTQUFTVjswQ0FBVTs7Ozs7Ozs7Ozs7O2tDQUU3Qiw4REFBQ0c7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7d0JBQUlDLFdBQVU7a0NBQ1p4QyxzQkFBc0IrQyxHQUFHLENBQUMsQ0FBQ0MsdUJBQzFCLDhEQUFDeEQsOERBQU1BO2dDQUFjc0QsU0FBUyxJQUFNVCxxQkFBcUJXOzBDQUN0REE7K0JBRFVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpCO0dBNUh3Qi9DO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RhYmxlcy9UcmFkZUhpc3RvcnlUYWJsZS50c3g/ZTQwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbmV4dHVpLW9yZy9idXR0b25cIjtcblxuaW1wb3J0IHtcbiAgVGFibGUsXG4gIFRhYmxlSGVhZGVyLFxuICBUYWJsZUJvZHksXG4gIFRhYmxlQ29sdW1uLFxuICBUYWJsZVJvdyxcbiAgVGFibGVDZWxsLFxuICBnZXRLZXlWYWx1ZSxcbn0gZnJvbSBcIkBuZXh0dWktb3JnL3RhYmxlXCI7XG5cbnR5cGUgVHJhZGUgPSB7XG4gIGlkOiBudW1iZXI7XG4gIGRhdGU6IG51bWJlcjtcbiAgdHlwZTogXCJidXlcIiB8IFwic2VsbFwiO1xuICBxdHlGcm9tOiBudW1iZXI7XG4gIHF0eVRvOiBudW1iZXI7XG4gIG90aGVyVG9rZW5BZGRyZXNzOiBzdHJpbmc7XG4gIG1ha2VyOiBzdHJpbmc7XG4gIHR4bjogc3RyaW5nO1xufTtcblxuY29uc3QgZW50cmllc1BlclBhZ2VPcHRpb25zID0gWzEwLCAyNSwgNTBdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFkZUhpc3RvcnlUYWJsZSh7XG4gIHRva2VuQWRkcmVzcyxcbn06IHtcbiAgdG9rZW5BZGRyZXNzOiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAgeyBrZXk6IFwidHlwZVwiLCBsYWJlbDogXCJUWVBFXCIgfSxcbiAgICB7IGtleTogXCJhbW91bnRcIiwgbGFiZWw6IFwiQU1PVU5UXCIgfSxcbiAgICB7IGtleTogXCJ0aWNrZXJcIiwgbGFiZWw6IFwiVElDS0VSXCIgfSxcbiAgICB7IGtleTogXCJuZWFyXCIsIGxhYmVsOiBcIk5FQVJcIiB9LFxuICAgIHsga2V5OiBcInByaWNlXCIsIGxhYmVsOiBcIlBSSUNFXCIgfSxcbiAgICB7IGtleTogXCJtYWtlclwiLCBsYWJlbDogXCJNQUtFUlwiIH0sXG4gICAgeyBrZXk6IFwidHhuXCIsIGxhYmVsOiBcIlRYTlwiIH0sXG4gIF07XG5cbiAgY29uc3QgW2VudHJpZXNQZXJQYWdlLCBzZXRFbnRyaWVzUGVyUGFnZV0gPSB1c2VTdGF0ZSgxMCk7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZmlyc3RJZCwgc2V0Rmlyc3RJZF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2xhc3RJZCwgc2V0TGFzdElkXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdHJhZGVzLCBzZXRUcmFkZXNdID0gdXNlU3RhdGU8VHJhZGVbXSB8IG51bGw+KG51bGwpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRyYW5zYWN0aW9ucyh1cmw6IHN0cmluZywgc29ydDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgY29uc29sZS5sb2codXJsKTtcbiAgICB0cnkge1xuICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZGF0ZTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSBkYXRlO1xuICAgICAgICAgICAgY29uc3QgeyBibG9ja190aW1lc3RhbXBfbmFub3NlYywgYmFsYW5jZV9jaGFuZ2VzIH0gPSBkYXRlLmV2ZW50O1xuICAgICAgICAgICAgY29uc29sZS5sb2coaWQsIGJsb2NrX3RpbWVzdGFtcF9uYW5vc2VjLCBiYWxhbmNlX2NoYW5nZXMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLyogICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zX3RlbXA6IFRyYWRlW10gPSBkYXRhLm1hcCgodHJhZGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVtcF90cmFkZTogVHJhZGUgPSB7XG4gICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICBkYXRlOiAwLFxuICAgICAgICAgICAgICB0eXBlOiBcImJ1eVwiLFxuICAgICAgICAgICAgICBxdHlGcm9tOiAwLFxuICAgICAgICAgICAgICBxdHlUbzogMCxcbiAgICAgICAgICAgICAgb3RoZXJUb2tlbkFkZHJlc3M6IFwiXCIsXG4gICAgICAgICAgICAgIG1ha2VyOiBcIlwiLFxuICAgICAgICAgICAgICB0eG46IFwiXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHRyYWRlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgICAgICB0cmFuc2FjdGlvbnNfdGVtcC5zb3J0KChhLCBiKSA9PiBhLmlkIC0gYi5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNldFRyYWRlcyh0cmFuc2FjdGlvbnNfdGVtcCk7ICovXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsRmV0Y2ggPSBhc3luYyAoKSA9PiB7XG4gICAgICB1cGRhdGVUcmFuc2FjdGlvbnMoXG4gICAgICAgIGBodHRwczovL2V2ZW50cy5pbnRlYXIudGVjaC9xdWVyeS90cmFkZV9zd2FwP2ludm9sdmVkX3Rva2VuX2FjY291bnRfaWRzPSR7dG9rZW5BZGRyZXNzfSZwYWdpbmF0aW9uX2J5PU5ld2VzdCZsaW1pdD0ke2VudHJpZXNQZXJQYWdlfWBcbiAgICAgICk7XG4gICAgfTtcbiAgICBpbml0aWFsRmV0Y2goKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIHByZXZpb3VzUGFnZSgpIHt9XG4gIGZ1bmN0aW9uIG5leHRQYWdlKCkge31cbiAgZnVuY3Rpb24gdXBkYXRlRW50cmllc1BlclBhZ2UoZW50cmllczogbnVtYmVyKSB7XG4gICAgc2V0RW50cmllc1BlclBhZ2UoZW50cmllcyk7XG4gICAgdXBkYXRlVHJhbnNhY3Rpb25zKFxuICAgICAgYGh0dHBzOi8vZXZlbnRzLmludGVhci50ZWNoL3F1ZXJ5L3R4X3RyYW5zYWN0aW9uP3BhZ2luYXRpb25fYnk9QWZ0ZXJJZCZpZD0ke2xhc3RJZH0mbGltaXQ9JHtlbnRyaWVzfWBcbiAgICApO1xuICB9XG4gIC8qIFxuICBOZWNlc3NhcnkgSW5mb3JtYXRpb25cbiAgVG9rZW4gVGlja2VyXG4gIFRva2VuIFByaWNlXG4gIEN1cnJlbnQgTkVBUiBwcmljZVxuICBDdXJyZW50IFRva2VuIFByaWNlIGluIE5FQVJcbiAgKi9cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3RyYWRlcyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgIDxUYWJsZUhlYWRlciBjb2x1bW5zPXtjb2x1bW5zfT5cbiAgICAgICAgICAgICAgeyhjb2x1bW4pID0+IChcbiAgICAgICAgICAgICAgICA8VGFibGVDb2x1bW4ga2V5PXtjb2x1bW4ua2V5fT57Y29sdW1uLmxhYmVsfTwvVGFibGVDb2x1bW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgPFRhYmxlQm9keSBpdGVtcz17dHJhZGVzfT5cbiAgICAgICAgICAgICAgeyhpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICB7KGNvbHVtbktleSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntnZXRLZXlWYWx1ZShpdGVtLCBjb2x1bW5LZXkpfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIG1sLTQgbXktMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICB7cGFnZSA9PT0gMCA/IChcbiAgICAgICAgICAgIDxCdXR0b24gaXNEaXNhYmxlZD5QcmV2aW91czwvQnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3ByZXZpb3VzUGFnZX0+UHJldmlvdXM8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17bmV4dFBhZ2V9Pk5leHQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+UmVzdWx0cyBQZXIgUGFnZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgICAgICB7ZW50cmllc1BlclBhZ2VPcHRpb25zLm1hcCgoYW1vdW50KSA9PiAoXG4gICAgICAgICAgICA8QnV0dG9uIGtleT17YW1vdW50fSBvbkNsaWNrPXsoKSA9PiB1cGRhdGVFbnRyaWVzUGVyUGFnZShhbW91bnQpfT5cbiAgICAgICAgICAgICAge2Ftb3VudH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiVGFibGUiLCJUYWJsZUhlYWRlciIsIlRhYmxlQm9keSIsIlRhYmxlQ29sdW1uIiwiVGFibGVSb3ciLCJUYWJsZUNlbGwiLCJnZXRLZXlWYWx1ZSIsImVudHJpZXNQZXJQYWdlT3B0aW9ucyIsIlRyYWRlSGlzdG9yeVRhYmxlIiwidG9rZW5BZGRyZXNzIiwiY29sdW1ucyIsImtleSIsImxhYmVsIiwiZW50cmllc1BlclBhZ2UiLCJzZXRFbnRyaWVzUGVyUGFnZSIsInBhZ2UiLCJzZXRQYWdlIiwiZmlyc3RJZCIsInNldEZpcnN0SWQiLCJsYXN0SWQiLCJzZXRMYXN0SWQiLCJ0cmFkZXMiLCJzZXRUcmFkZXMiLCJ1cGRhdGVUcmFuc2FjdGlvbnMiLCJ1cmwiLCJzb3J0IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJmb3JFYWNoIiwiZGF0ZSIsImlkIiwiYmxvY2tfdGltZXN0YW1wX25hbm9zZWMiLCJiYWxhbmNlX2NoYW5nZXMiLCJldmVudCIsImVycm9yIiwiaW5pdGlhbEZldGNoIiwicHJldmlvdXNQYWdlIiwibmV4dFBhZ2UiLCJ1cGRhdGVFbnRyaWVzUGVyUGFnZSIsImVudHJpZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb2x1bW4iLCJpdGVtcyIsIml0ZW0iLCJjb2x1bW5LZXkiLCJpc0Rpc2FibGVkIiwib25DbGljayIsIm1hcCIsImFtb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/tables/TradeHistoryTable.tsx\n"));

/***/ })

});
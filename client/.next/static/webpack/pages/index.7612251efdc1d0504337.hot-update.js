"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\moony\\Documents\\reactproject_20210816\\client\\components\\MsgItem.js",
    _this = undefined;



var MsgItem = function MsgItem(_ref) {
  var id = _ref.id,
      userId = _ref.userId,
      timestamp = _ref.timestamp,
      text = _ref.text,
      onUpdate = _ref.onUpdate,
      isEditing = _ref.isEditing,
      startEdit = _ref.startEdit;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "messages__item",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: [userId, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("sub", {
        children: new Date(timestamp).toLocaleString('ko-KR', {
          year: 'numeric',
          month: "numeric",
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }, _this), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
        mutate: onUpdate,
        id: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)
    }, void 0, false) : text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "message__buttons",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: startEdit,
        children: "\uC218\uC815"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, _this);
};

_c = MsgItem;
/* harmony default export */ __webpack_exports__["default"] = (MsgItem);

var _c;

$RefreshReg$(_c, "MsgItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzYxMjI1MWVmZGMxZDA1MDQzMzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBR0MsRUFBSCxRQUFHQSxFQUFIO0FBQUEsTUFBT0MsTUFBUCxRQUFPQSxNQUFQO0FBQUEsTUFBZUMsU0FBZixRQUFlQSxTQUFmO0FBQUEsTUFBMEJDLElBQTFCLFFBQTBCQSxJQUExQjtBQUFBLE1BQWdDQyxRQUFoQyxRQUFnQ0EsUUFBaEM7QUFBQSxNQUEwQ0MsU0FBMUMsUUFBMENBLFNBQTFDO0FBQUEsTUFBcURDLFNBQXJELFFBQXFEQSxTQUFyRDtBQUFBLHNCQUNaO0FBQUksYUFBUyxFQUFDLGdCQUFkO0FBQUEsNEJBQ0k7QUFBQSxpQkFDS0wsTUFETCxFQUNhLEdBRGIsZUFFSTtBQUFBLGtCQUNLLElBQUlNLElBQUosQ0FBU0wsU0FBVCxFQUFvQk0sY0FBcEIsQ0FBbUMsT0FBbkMsRUFBNEM7QUFDekNDLFVBQUFBLElBQUksRUFBRSxTQURtQztBQUV6Q0MsVUFBQUEsS0FBSyxFQUFFLFNBRmtDO0FBR3pDQyxVQUFBQSxHQUFHLEVBQUUsU0FIb0M7QUFJekNDLFVBQUFBLElBQUksRUFBRSxTQUptQztBQUt6Q0MsVUFBQUEsTUFBTSxFQUFFLFNBTGlDO0FBTXpDQyxVQUFBQSxNQUFNLEVBQUU7QUFOaUMsU0FBNUM7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFlS1QsU0FBUyxnQkFDTjtBQUFBLDZCQUNJLDhEQUFDLDhDQUFEO0FBQVUsY0FBTSxFQUFFRCxRQUFsQjtBQUE0QixVQUFFLEVBQUVKO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixxQkFETSxHQUtORyxJQXBCUixlQXVCSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDZCQUNJO0FBQVEsZUFBTyxFQUFFRyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFk7QUFBQSxDQUFoQjs7S0FBTVA7QUE4Qk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiXHJcblxyXG5jb25zdCBNc2dJdGVtID0gKHsgaWQsIHVzZXJJZCwgdGltZXN0YW1wLCB0ZXh0LCBvblVwZGF0ZSwgaXNFZGl0aW5nLCBzdGFydEVkaXQgfSkgPT4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pdGVtXCI+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICB7dXNlcklkfXsnICd9XHJcbiAgICAgICAgICAgIDxzdWI+XHJcbiAgICAgICAgICAgICAgICB7bmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygna28tS1InLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cjEyOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9zdWI+XHJcbiAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAge2lzRWRpdGluZyA/IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uVXBkYXRlfSBpZD17aWR9Lz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICl9IFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VfX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydEVkaXR9PuyImOyglTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbSJdLCJuYW1lcyI6WyJNc2dJbnB1dCIsIk1zZ0l0ZW0iLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJvblVwZGF0ZSIsImlzRWRpdGluZyIsInN0YXJ0RWRpdCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiXSwic291cmNlUm9vdCI6IiJ9
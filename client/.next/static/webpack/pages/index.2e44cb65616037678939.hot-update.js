"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./fetcher.js":
/*!********************!*\
  !*** ./fetcher.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


 //axios.get('http://localhost:8000/messages') //baseURL을 지정하면 getURL 안 하고 라우트만 지정해줘도 됨

(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = 'http://localhost:8000';

var fetcher = /*#__PURE__*/function () {
  var _ref = (0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(method, url) {
    var _len,
        rest,
        _key,
        res,
        _args = arguments;

    return C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            for (_len = _args.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              rest[_key - 2] = _args[_key];
            }

            _context.next = 3;
            return (axios__WEBPACK_IMPORTED_MODULE_2___default())[method].apply((axios__WEBPACK_IMPORTED_MODULE_2___default()), [url].concat(rest));

          case 3:
            res = _context.sent;
            return _context.abrupt("return", res.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetcher(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (fetcher);
/*

//get, delete 메소드 뒤에는 url인자가 하나만 오고 post, put 메소드 뒤에는 url과 data인자 두개가 옴

//get과 delete는 뒤에 config로 옵션값을 지정
get: axios.get(url[, config]) 
delete: axios.delete(url[, config])

//post와 put 뒤에는 새로 쓰거나 변경할 내용인 data가 들어옴
post: axios.post(url, data[, config])
put: axios.put(url, data[, config])

 */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmU0NGNiNjU2MTYwMzc2Nzg5MzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQUEsK0RBQUEsR0FBeUIsdUJBQXpCOztBQUVBLElBQU1HLE9BQU87QUFBQSwyU0FBRyxpQkFBT0MsTUFBUCxFQUFlQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUF1QkMsSUFBdkI7QUFBdUJBLGNBQUFBLElBQXZCO0FBQUE7O0FBQUE7QUFBQSxtQkFDTU4sOENBQUssQ0FBQ0ksTUFBRCxDQUFMLE9BQUFKLDhDQUFLLEdBQVNLLEdBQVQsU0FBaUJDLElBQWpCLEVBRFg7O0FBQUE7QUFDTkMsWUFBQUEsR0FETTtBQUFBLDZDQUVMQSxHQUFHLENBQUNDLElBRkM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUEwsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiOztBQUtBLCtEQUFlQSxPQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmV0Y2hlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG4vL2F4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL21lc3NhZ2VzJykgLy9iYXNlVVJM7J2EIOyngOygle2VmOuptCBnZXRVUkwg7JWIIO2VmOqzoCDrnbzsmrDtirjrp4wg7KeA7KCV7ZW07KSY64+EIOuQqFxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCcgXHJcblxyXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKG1ldGhvZCwgdXJsLCAuLi5yZXN0KSA9PiB7IC8vZmV0Y2hlcuuKlCBheGlvc+ulvCDtjrjtlZjqsowg7JOw6riwIOychO2VtCDsnoTsnZjroZwg7KeA7KCV65CcIOyXmOumrOuovOy4oFxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIC4uLnJlc3QpIC8vLi4ucmVzdOuKlCBDUlVEIOuplOyGjOuTnCDrkqTsl5Ag7J247J6Q6rCAIO2VmOuCmCDrmJDripQg65GQ6rCcIOydtOyDgeydtCDrk6TslrTsmKwg7IiYIOyeiOuPhOuhnSDtlZjripQg7LKY66asXHJcbiAgICByZXR1cm4gcmVzLmRhdGFcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hlclxyXG5cclxuLypcclxuXHJcbi8vZ2V0LCBkZWxldGUg66mU7IaM65OcIOuSpOyXkOuKlCB1cmzsnbjsnpDqsIAg7ZWY64KY66eMIOyYpOqzoCBwb3N0LCBwdXQg66mU7IaM65OcIOuSpOyXkOuKlCB1cmzqs7wgZGF0YeyduOyekCDrkZDqsJzqsIAg7Ji0XHJcblxyXG4vL2dldOqzvCBkZWxldGXripQg65Kk7JeQIGNvbmZpZ+uhnCDsmLXshZjqsJLsnYQg7KeA7KCVXHJcbmdldDogYXhpb3MuZ2V0KHVybFssIGNvbmZpZ10pIFxyXG5kZWxldGU6IGF4aW9zLmRlbGV0ZSh1cmxbLCBjb25maWddKVxyXG5cclxuLy9wb3N07JmAIHB1dCDrkqTsl5DripQg7IOI66GcIOyTsOqxsOuCmCDrs4Dqsr3tlaAg64K07Jqp7J24IGRhdGHqsIAg65Ok7Ja07Ji0XHJcbnBvc3Q6IGF4aW9zLnBvc3QodXJsLCBkYXRhWywgY29uZmlnXSlcclxucHV0OiBheGlvcy5wdXQodXJsLCBkYXRhWywgY29uZmlnXSlcclxuXHJcbiAqLyJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImZldGNoZXIiLCJtZXRob2QiLCJ1cmwiLCJyZXN0IiwicmVzIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=
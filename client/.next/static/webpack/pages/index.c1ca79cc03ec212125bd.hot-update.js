"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/defineProperty */ "../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fetcher */ "./fetcher.js");
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "C:\\Users\\moony\\Documents\\reactproject_20210816\\client\\components\\MsgList.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var UserIds = ['moony', 'wooky'];

var getRandomUserId = function getRandomUserId() {
  return UserIds[Math.round(Math.random())];
};
/** forunderstanding.txt line number 56 ref */


var MsgList = function MsgList() {
  _s();

  /*
  이 query의 userId를 MsgItem에서도 사용해주면 로그인된 아이디 별로 수정삭제 버튼 기능을 구현할 수 있음 
  MsgList하단에 myId 추가 부분과 MsgItem.js의 ln3 참조
  */
  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(),
      _useRouter$query$user = _useRouter.query.userId,
      userId = _useRouter$query$user === void 0 ? '' : _useRouter$query$user;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      msgs = _useState[0],
      setMsgs = _useState[1]; //useState([originalMsgs]) -> useState([]) fetcher사용으로 빈배열로 변경


  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
      editingId = _useState2[0],
      setEditingId = _useState2[1]; //MsgItem 하단의 startEdit 수정버튼 기능구현
  //CREATE 

  /** forunderstanding.txt line number 32 ref */


  var onCreate = /*#__PURE__*/function () {
    var _ref = (0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(text) {
      var newMsg;
      return C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('post', '/messages', {
                text: text,
                userId: userId
              });

            case 2:
              newMsg = _context.sent;
              setMsgs(function (msgs) {
                return [newMsg].concat((0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs));
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onCreate(_x) {
      return _ref.apply(this, arguments);
    };
  }(); //UPDATE 

  /** forunderstanding.txt line number 71 ref */


  var onUpdate = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(text, id) {
      var newMsg;
      return C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('put', "/messages/".concat(id), {
                text: text,
                userId: userId
              });

            case 2:
              newMsg = _context2.sent;

              if (newMsg) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return");

            case 5:
              setMsgs(function (msgs) {
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === id;
                });
                if (targetIndex < 0) return msgs;

                var newMsgs = (0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs);

                newMsgs.splice(targetIndex, 1, newMsg);
                return newMsgs;
              });
              doneEdit();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onUpdate(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }(); //DELETE


  var _onDelete = function onDelete(id) {
    setMsgs(function (msgs) {
      var targetIndex = msgs.findIndex(function (msg) {
        return msg.id === id;
      });
      if (targetIndex < 0) return msgs;

      var newMsgs = (0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs);

      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  var doneEdit = function doneEdit() {
    return setEditingId(null);
  };
  /** forunderstanding.txt line number 1 ref */
  //useEffect로 최초 동작시에만 실행되도록 함


  var getMessages = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      var msgs;
      return C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('get', '/messages');

            case 2:
              msgs = _context3.sent;
              setMsgs(msgs);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getMessages() {
      return _ref3.apply(this, arguments);
    };
  }(); //useEffect(async () => { //await를 쓰려면 async를 불러와야하는데 useEffect 내에서는 직접 하지 않기때문에 윗줄과 같이 처리필요


  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    getMessages();
  }, []); //const startEdit = id => setEditingId(id)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_8__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread(_objectSpread({}, x), {}, {
          onUpdate: onUpdate,
          onDelete: function onDelete() {
            return _onDelete(x.id);
          },
          startEdit: function startEdit() {
            return setEditingId(x.id);
          },
          isEditing: editingId === x.id,
          myId: userId
        }), x.id, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "ApBq+BdEfv4ynoUU99BKI8kmy4A=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = MsgList;
/* harmony default export */ __webpack_exports__["default"] = (MsgList);

var _c;

$RefreshReg$(_c, "MsgList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzFjYTc5Y2MwM2VjMjEyMTI1YmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1NLE9BQU8sR0FBRyxDQUFDLE9BQUQsRUFBVSxPQUFWLENBQWhCOztBQUNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxTQUFNRCxPQUFPLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsRUFBWCxDQUFELENBQWI7QUFBQSxDQUF4QjtBQUVBOzs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ2xCO0FBQ0o7QUFDQTtBQUNBO0FBSnNCLG1CQUtpQlQsc0RBQVMsRUFMMUI7QUFBQSx5Q0FLVlUsS0FMVSxDQUtEQyxNQUxDO0FBQUEsTUFLREEsTUFMQyxzQ0FLUSxFQUxSOztBQUFBLGtCQU1NWiwrQ0FBUSxDQUFDLEVBQUQsQ0FOZDtBQUFBLE1BTVhhLElBTlc7QUFBQSxNQU1MQyxPQU5LLGlCQU1tQjs7O0FBTm5CLG1CQU9nQmQsK0NBQVEsQ0FBQyxJQUFELENBUHhCO0FBQUEsTUFPWGUsU0FQVztBQUFBLE1BT0FDLFlBUEEsa0JBTytCO0FBRWpEOztBQUNBOzs7QUFDQSxNQUFNQyxRQUFRO0FBQUEsNlNBQUcsaUJBQU1DLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDUWQsaURBQU8sQ0FBQyxNQUFELEVBQVMsV0FBVCxFQUFzQjtBQUFFYyxnQkFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFOLGdCQUFBQSxNQUFNLEVBQU5BO0FBQVIsZUFBdEIsQ0FEZjs7QUFBQTtBQUNQTyxjQUFBQSxNQURPO0FBRWJMLGNBQUFBLE9BQU8sQ0FBQyxVQUFBRCxJQUFJO0FBQUEsd0JBQUtNLE1BQUws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QSw0QkFDWCw4REFBQyw2Q0FBRCxrQ0FFU0EsQ0FGVDtBQUdJLGtCQUFRLEVBQUVYLFFBSGQ7QUFJSSxrQkFBUSxFQUFFO0FBQUEsbUJBQU1RLFNBQVEsQ0FBQ0csQ0FBQyxDQUFDVixFQUFILENBQWQ7QUFBQSxXQUpkO0FBS0ksbUJBQVMsRUFBRTtBQUFBLG1CQUFNTCxZQUFZLENBQUNlLENBQUMsQ0FBQ1YsRUFBSCxDQUFsQjtBQUFBLFdBTGY7QUFNSSxtQkFBUyxFQUFFTixTQUFTLEtBQUtnQixDQUFDLENBQUNWLEVBTi9CO0FBT0ksY0FBSSxFQUFFVDtBQVBWLFlBQ1NtQixDQUFDLENBQUNWLEVBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBLE9BQVY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxrQkFESjtBQWtCSCxDQTVFRDs7R0FBTVg7VUFLaUNUOzs7S0FMakNTO0FBOEVOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nXHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0J1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9mZXRjaGVyJ1xyXG5cclxuY29uc3QgVXNlcklkcyA9IFsnbW9vbnknLCAnd29va3knXVxyXG5jb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldXHJcblxyXG4vKiogZm9ydW5kZXJzdGFuZGluZy50eHQgbGluZSBudW1iZXIgNTYgcmVmICovXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gICAgLypcclxuICAgIOydtCBxdWVyeeydmCB1c2VySWTrpbwgTXNnSXRlbeyXkOyEnOuPhCDsgqzsmqntlbTso7zrqbQg66Gc6re47J2465CcIOyVhOydtOuUlCDrs4TroZwg7IiY7KCV7IKt7KCcIOuyhO2KvCDquLDriqXsnYQg6rWs7ZiE7ZWgIOyImCDsnojsnYwgXHJcbiAgICBNc2dMaXN07ZWY64uo7JeQIG15SWQg7LaU6rCAIOu2gOu2hOqzvCBNc2dJdGVtLmpz7J2YIGxuMyDssLjsobBcclxuICAgICovXHJcbiAgICBjb25zdCB7IHF1ZXJ5OiB7IHVzZXJJZCA9ICcnIH0gfSA9IHVzZVJvdXRlcigpIFxyXG4gICAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pIC8vdXNlU3RhdGUoW29yaWdpbmFsTXNnc10pIC0+IHVzZVN0YXRlKFtdKSBmZXRjaGVy7IKs7Jqp7Jy866GcIOu5iOuwsOyXtOuhnCDrs4Dqsr1cclxuICAgIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKSAvL01zZ0l0ZW0g7ZWY64uo7J2YIHN0YXJ0RWRpdCDsiJjsoJXrsoTtirwg6riw64ql6rWs7ZiEXHJcblxyXG4gICAgLy9DUkVBVEUgXHJcbiAgICAvKiogZm9ydW5kZXJzdGFuZGluZy50eHQgbGluZSBudW1iZXIgMzIgcmVmICovXHJcbiAgICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jIHRleHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3Bvc3QnLCAnL21lc3NhZ2VzJywgeyB0ZXh0LCB1c2VySWQgfSlcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4gW25ld01zZywgLi4ubXNnc10pXHJcbiAgICB9XHJcblxyXG4gICAgLy9VUERBVEUgXHJcbiAgICAvKiogZm9ydW5kZXJzdGFuZGluZy50eHQgbGluZSBudW1iZXIgNzEgcmVmICovXHJcbiAgICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KVxyXG4gICAgICAgIGlmICghbmV3TXNnKSByZXR1cm4gXHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZCkgXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzIFxyXG4gICAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWyAuLi5tc2dzIF0gXHJcbiAgICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdNc2dzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb25lRWRpdCgpXHJcbiAgICB9XHJcblxyXG4gICAgLy9ERUxFVEVcclxuICAgIGNvbnN0IG9uRGVsZXRlID0gKGlkKSA9PiB7XHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZCkgXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWyAuLi5tc2dzIF1cclxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdNc2dzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKVxyXG5cclxuICAgIC8qKiBmb3J1bmRlcnN0YW5kaW5nLnR4dCBsaW5lIG51bWJlciAxIHJlZiAqL1xyXG4gICAgLy91c2VFZmZlY3TroZwg7LWc7LSIIOuPmeyekeyLnOyXkOunjCDsi6TtlonrkJjrj4TroZ0g7ZWoXHJcbiAgICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBtc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycpXHJcbiAgICAgICAgc2V0TXNncyhtc2dzKVxyXG4gICAgfVxyXG4gICAgLy91c2VFZmZlY3QoYXN5bmMgKCkgPT4geyAvL2F3YWl066W8IOyTsOugpOuptCBhc3luY+ulvCDrtojrn6zsmYDslbztlZjripTrjbAgdXNlRWZmZWN0IOuCtOyXkOyEnOuKlCDsp4HsoJEg7ZWY7KeAIOyViuq4sOuVjOusuOyXkCDsnJfspITqs7wg6rCZ7J20IOyymOumrO2VhOyalFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRNZXNzYWdlcygpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICAvL2NvbnN0IHN0YXJ0RWRpdCA9IGlkID0+IHNldEVkaXRpbmdJZChpZClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgIHttc2dzLm1hcCh4ID0+IChcclxuICAgICAgICAgICAgICAgIDxNc2dJdGVtIFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17eC5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgeyAuLi54IH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9IFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfSBcclxuICAgICAgICAgICAgICAgICAgICBteUlkPXt1c2VySWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3QiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJNc2dJdGVtIiwiTXNnSW5wdXQiLCJmZXRjaGVyIiwiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIk1zZ0xpc3QiLCJxdWVyeSIsInVzZXJJZCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJ0ZXh0IiwibmV3TXNnIiwib25VcGRhdGUiLCJpZCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJnZXRNZXNzYWdlcyIsIm1hcCIsIngiXSwic291cmNlUm9vdCI6IiJ9
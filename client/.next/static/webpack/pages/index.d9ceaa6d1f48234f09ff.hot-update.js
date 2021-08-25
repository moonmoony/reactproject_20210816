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

              if (newMsg) {
                _context.next = 5;
                break;
              }

              throw Error('something wrong');

            case 5:
              //newMsg 데이타가 없다면 에러를 띄우도록 처리
              setMsgs(function (msgs) {
                return [newMsg].concat((0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs));
              });

            case 6:
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

              throw Error('something wrong');

            case 5:
              setMsgs(function (msgs) {
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === id;
                });
                if (targetIndex < 0) return msgs;

                var newMsgs = (0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs);

                newMsgs.splice(targetIndex, 1, newMsg); //server에서 온 온전한 newMsg 데이타로 바꿔줌

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

  /** forunderstanding.txt line number 89 ref */


  var _onDelete = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(id) {
      var receivedId;
      return C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('delete', "/messages/".concat(id), {
                params: {
                  userId: userId
                }
              });

            case 2:
              receivedId = _context3.sent;
              //messages.js에서 삭제된 id만 send해줬기 때문
              setMsgs(function (msgs) {
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === receivedId;
                });
                if (targetIndex < 0) return msgs;

                var newMsgs = (0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs);

                newMsgs.splice(targetIndex, 1);
                return newMsgs;
              });

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onDelete(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  var doneEdit = function doneEdit() {
    return setEditingId(null);
  };
  /** forunderstanding.txt line number 1 ref */
  //useEffect로 최초 동작시에만 실행되도록 함


  var getMessages = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var msgs;
      return C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('get', '/messages');

            case 2:
              msgs = _context4.sent;
              setMsgs(msgs);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getMessages() {
      return _ref4.apply(this, arguments);
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
      lineNumber: 75,
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
          lineNumber: 78,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDljZWFhNmQxZjQ4MjM0ZjA5ZmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1NLE9BQU8sR0FBRyxDQUFDLE9BQUQsRUFBVSxPQUFWLENBQWhCOztBQUNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxTQUFNRCxPQUFPLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsRUFBWCxDQUFELENBQWI7QUFBQSxDQUF4QjtBQUVBOzs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ2xCO0FBQ0o7QUFDQTtBQUNBO0FBSnNCLG1CQUtpQlQsc0RBQVMsRUFMMUI7QUFBQSx5Q0FLVlUsS0FMVSxDQUtEQyxNQUxDO0FBQUEsTUFLREEsTUFMQyxzQ0FLUSxFQUxSOztBQUFBLGtCQU1NWiwrQ0FBUSxDQUFDLEVBQUQsQ0FOZDtBQUFBLE1BTVhhLElBTlc7QUFBQSxNQU1MQyxPQU5LLGlCQU1tQjs7O0FBTm5CLG1CQU9nQmQsK0NBQVEsQ0FBQyxJQUFELENBUHhCO0FBQUEsTUFPWGUsU0FQVztBQUFBLE1BT0FDLFlBUEEsa0JBTytCO0FBRWpEOztBQUNBOzs7QUFDQSxNQUFNQyxRQUFRO0FBQUEsNlNBQUcsaUJBQU1DLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDUWQsaURBQU8sQ0FBQyxNQUFELEVBQVMsV0FBVCxFQUFzQjtBQUFFYyxnQkFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFOLGdCQUFBQSxNQUFNLEVBQU5BO0FBQVIsZUFBdEIsQ0FEZjs7QUFBQTtBQUNQTyxjQUFBQSxNQURPOztBQUFBLGtCQUVSQSxNQUZRO0FBQUE7QUFBQTtBQUFBOztBQUFBLG9CQUVNQyxLQUFL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RFU7QUFFaEJDLGNBQUFBLE9BQU8sQ0FBQ0QsSUFBRCxDQUFQOztBQUZnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFYbUIsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQixDQWxEa0IsQ0FzRGxCOzs7QUFDQWpDLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaaUMsSUFBQUEsV0FBVztBQUNkLEdBRlEsRUFFTixFQUZNLENBQVQsQ0F2RGtCLENBMkRsQjs7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLDhDQUFEO0FBQVUsWUFBTSxFQUFFZjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUEsZ0JBQ0tKLElBQUksQ0FBQ29CLEdBQUwsQ0FBUyxVQUFBQyxDQUFDO0FBQUEsNEJBQ1gsOERBQUMsNkNBQUQsa0NBRVNBLENBRlQ7QUFHSSxrQkFBUSxFQUFFYixRQUhkO0FBSUksa0JBQVEsRUFBRTtBQUFBLG1CQUFNUSxTQUFRLENBQUNLLENBQUMsQ0FBQ1osRUFBSCxDQUFkO0FBQUEsV0FKZDtBQUtJLG1CQUFTLEVBQUU7QUFBQSxtQkFBTU4sWUFBWSxDQUFDa0IsQ0FBQyxDQUFDWixFQUFILENBQWxCO0FBQUEsV0FMZjtBQU1JLG1CQUFTLEVBQUVQLFNBQVMsS0FBS21CLENBQUMsQ0FBQ1osRUFOL0I7QUFPSSxjQUFJLEVBQUVWO0FBUFYsWUFDU3NCLENBQUMsQ0FBQ1osRUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBVjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBLGtCQURKO0FBa0JILENBL0VEOztHQUFNWjtVQUtpQ1Q7OztLQUxqQ1M7QUFpRk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSdcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnXHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInXHJcblxyXG5jb25zdCBVc2VySWRzID0gWydtb29ueScsICd3b29reSddXHJcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV1cclxuXHJcbi8qKiBmb3J1bmRlcnN0YW5kaW5nLnR4dCBsaW5lIG51bWJlciA1NiByZWYgKi9cclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgICAvKlxyXG4gICAg7J20IHF1ZXJ57J2YIHVzZXJJZOulvCBNc2dJdGVt7JeQ7ISc64+EIOyCrOyaqe2VtOyjvOuptCDroZzqt7jsnbjrkJwg7JWE7J2065SUIOuzhOuhnCDsiJjsoJXsgq3soJwg67KE7Yq8IOq4sOuKpeydhCDqtaztmITtlaAg7IiYIOyeiOydjCBcclxuICAgIE1zZ0xpc3TtlZjri6jsl5AgbXlJZCDstpTqsIAg67aA67aE6rO8IE1zZ0l0ZW0uanPsnZggbG4zIOywuOyhsFxyXG4gICAgKi9cclxuICAgIGNvbnN0IHsgcXVlcnk6IHsgdXNlcklkID0gJycgfSB9ID0gdXNlUm91dGVyKCkgXHJcbiAgICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbXSkgLy91c2VTdGF0ZShbb3JpZ2luYWxNc2dzXSkgLT4gdXNlU3RhdGUoW10pIGZldGNoZXLsgqzsmqnsnLzroZwg67mI67Cw7Je066GcIOuzgOqyvVxyXG4gICAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpIC8vTXNnSXRlbSDtlZjri6jsnZggc3RhcnRFZGl0IOyImOygleuyhO2KvCDquLDriqXqtaztmIRcclxuXHJcbiAgICAvL0NSRUFURSBcclxuICAgIC8qKiBmb3J1bmRlcnN0YW5kaW5nLnR4dCBsaW5lIG51bWJlciAzMiByZWYgKi9cclxuICAgIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgdGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncG9zdCcsICcvbWVzc2FnZXMnLCB7IHRleHQsIHVzZXJJZCB9KVxyXG4gICAgICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJykgLy9uZXdNc2cg642w7J207YOA6rCAIOyXhuuLpOuptCDsl5Drn6zrpbwg652E7Jqw64+E66GdIOyymOumrFxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiBbbmV3TXNnLCAuLi5tc2dzXSlcclxuICAgIH1cclxuXHJcbiAgICAvL1VQREFURSBcclxuICAgIC8qKiBmb3J1bmRlcnN0YW5kaW5nLnR4dCBsaW5lIG51bWJlciA3MSByZWYgKi9cclxuICAgIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pXHJcbiAgICAgICAgLy9pZiAoIW5ld01zZykgcmV0dXJuIC8vbmV3TXNnIOuNsOydtO2DgOqwgCDsl4bri6TrqbQg7JWE66y06rKD64+EIO2VmOyngCDslYrrj4TroZ0g7LKY66asXHJcbiAgICAgICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKSBcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKSBcclxuICAgICAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3MgXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbIC4uLm1zZ3MgXSBcclxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZykgLy9zZXJ2ZXLsl5DshJwg7JioIOyYqOyghO2VnCBuZXdNc2cg642w7J207YOA66GcIOuwlOq/lOykjFxyXG4gICAgICAgICAgICByZXR1cm4gbmV3TXNnc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9uZUVkaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vREVMRVRFXHJcbiAgICAvKiogZm9ydW5kZXJzdGFuZGluZy50eHQgbGluZSBudW1iZXIgODkgcmVmICovXHJcbiAgICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIGlkID0+IHtcclxuICAgICAgICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgZmV0Y2hlcignZGVsZXRlJywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgcGFyYW1zOiB7IHVzZXJJZCB9IH0pIC8vbWVzc2FnZXMuanPsl5DshJwg7IKt7KCc65CcIGlk66eMIHNlbmTtlbTspKzquLAg65WM66y4XHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSByZWNlaXZlZElkKSBcclxuICAgICAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3NcclxuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsgLi4ubXNncyBdXHJcbiAgICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3TXNnc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbClcclxuXHJcbiAgICAvKiogZm9ydW5kZXJzdGFuZGluZy50eHQgbGluZSBudW1iZXIgMSByZWYgKi9cclxuICAgIC8vdXNlRWZmZWN066GcIOy1nOy0iCDrj5nsnpHsi5zsl5Drp4wg7Iuk7ZaJ65CY64+E66GdIO2VqFxyXG4gICAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbXNncyA9IGF3YWl0IGZldGNoZXIoJ2dldCcsICcvbWVzc2FnZXMnKVxyXG4gICAgICAgIHNldE1zZ3MobXNncylcclxuICAgIH1cclxuICAgIC8vdXNlRWZmZWN0KGFzeW5jICgpID0+IHsgLy9hd2FpdOulvCDsk7DroKTrqbQgYXN5bmPrpbwg67aI65+s7JmA7JW87ZWY64qU642wIHVzZUVmZmVjdCDrgrTsl5DshJzripQg7KeB7KCRIO2VmOyngCDslYrquLDrlYzrrLjsl5Ag7JyX7KSE6rO8IOqwmeydtCDsspjrpqztlYTsmpRcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0TWVzc2FnZXMoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy9jb25zdCBzdGFydEVkaXQgPSBpZCA9PiBzZXRFZGl0aW5nSWQoaWQpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICB7bXNncy5tYXAoeCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TXNnSXRlbSBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3guaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHsgLi4ueCB9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9IFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfSBcclxuICAgICAgICAgICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgbXlJZD17dXNlcklkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiZmV0Y2hlciIsIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJNc2dMaXN0IiwicXVlcnkiLCJ1c2VySWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwidGV4dCIsIm5ld01zZyIsIkVycm9yIiwib25VcGRhdGUiLCJpZCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJwYXJhbXMiLCJyZWNlaXZlZElkIiwiZ2V0TWVzc2FnZXMiLCJtYXAiLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==
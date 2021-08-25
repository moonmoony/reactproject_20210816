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





 //delete까지 axios로 구현 후에는 randomuserid를 쓸일이 없으니까 지워줌
//const UserIds = ['moony', 'wooky']
//const getRandomUserId = () => UserIds[Math.round(Math.random())]

/** forunderstanding.txt line number 56 ref */

var MsgList = function MsgList() {
  _s();

  /*
  이 query의 userId를 MsgItem에서도 사용해주면 로그인된 아이디 별로 수정삭제 버튼 기능을 구현할 수 있음 
  MsgList하단에 myId 추가 부분과 MsgItem.js의 ln3 참조
  */
  //const { query: { userId = '' } } = useRouter()  //주소창에 입력되는 대소문자 구분 처리
  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(),
      query = _useRouter.query;

  var userId = query.userId || query.userid || '';

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
              console.log(typeof receivedId, typeof id); //delete 후 삭제된 메시지가 안보여야 하는데 보여서 타입 확인 receivedId는 number이고 id는 string

              setMsgs(function (msgs) {
                var targetIndex = msgs.findIndex(function (msg) {
                  return msg.id === receivedId + '';
                }); //type이 자동형변환 되었으므로 receivedId를 string화 해줌

                if (targetIndex < 0) return msgs;

                var newMsgs = (0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs);

                newMsgs.splice(targetIndex, 1);
                return newMsgs;
              });

            case 5:
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
      lineNumber: 80,
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
          lineNumber: 83,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "R89cek33NXCaWDZTBnly28uiwZo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjRjMWFmMTFlMzFmNzFhMDhjNjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNsQjtBQUNKO0FBQ0E7QUFDQTtBQUNJO0FBTGtCLG1CQU1BSixzREFBUyxFQU5UO0FBQUEsTUFNVkssS0FOVSxjQU1WQSxLQU5VOztBQU9sQixNQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBTixJQUFnQkQsS0FBSyxDQUFDRSxNQUF0QixJQUFnQyxFQUEvQzs7QUFQa0Isa0JBU01SLCtDQUFRLENBQUMsRUFBRCxDQVRkO0FBQUEsTUFTWFMsSUFUVztBQUFBLE1BU0xDLE9BVEssaUJBU21COzs7QUFUbkIsbUJBVWdCViwrQ0FBUSxDQUFDLElBQUQsQ0FWeEI7QUFBQSxNQVVYVyxTQVZXO0FBQUEsTUFVQUMsWUFWQSxrQkFVK0I7QUFFakQ7O0FBQ0E7OztBQUNBLE1BQU1DLFFBQVE7QUFBQSw2U0FBRyxpQkFBTUMsSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNRVixpREFBTyxDQUFDLE1BQUQsRUFBUyxXQUFULEVBQXNCO0FBQUVVLGdCQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUVAsZ0JBQUFBLE1BQU0sRUFBTkE7QUFBUixlQUF0QixDQURmOztBQUFBO0FBQ1BRLGNBQUFBLE1BRE87O0FBQUEsa0JBRVJBLE1BRlE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBRU1DLEtBQUssQ0FBQyxpQkFBRCxDQUZYOztBQUFBO0FBRStCO0FBQzVDTixjQUFBQSxPQUFPLENBQUMsVUFBQUQsSUFBSTtBQUFBLHdCQUFLTSxNQUFMLHlKQUFnQk4sSUFBaEI7QUFBQSxlQUFMLENB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QUFBQSxPQUFPLENBQUNELElBQUQsQ0FBUDs7QUFGZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWHFCLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakIsQ0F0RGtCLENBMERsQjs7O0FBQ0EvQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWitCLElBQUFBLFdBQVc7QUFDZCxHQUZRLEVBRU4sRUFGTSxDQUFULENBM0RrQixDQStEbEI7O0FBRUEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyw4Q0FBRDtBQUFVLFlBQU0sRUFBRWpCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxnQkFDS0osSUFBSSxDQUFDc0IsR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSw0QkFDWCw4REFBQyw2Q0FBRCxrQ0FFU0EsQ0FGVDtBQUdJLGtCQUFRLEVBQUVmLFFBSGQ7QUFJSSxrQkFBUSxFQUFFO0FBQUEsbUJBQU1RLFNBQVEsQ0FBQ08sQ0FBQyxDQUFDZCxFQUFILENBQWQ7QUFBQSxXQUpkO0FBS0ksbUJBQVMsRUFBRTtBQUFBLG1CQUFNTixZQUFZLENBQUNvQixDQUFDLENBQUNkLEVBQUgsQ0FBbEI7QUFBQSxXQUxmO0FBTUksbUJBQVMsRUFBRVAsU0FBUyxLQUFLcUIsQ0FBQyxDQUFDZCxFQU4vQjtBQU9JLGNBQUksRUFBRVg7QUFQVixZQUNTeUIsQ0FBQyxDQUFDZCxFQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQSxPQUFWO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUEsa0JBREo7QUFrQkgsQ0FuRkQ7O0dBQU1iO1VBTWdCSjs7O0tBTmhCSTtBQXFGTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJ1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCdcclxuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vZmV0Y2hlcidcclxuXHJcbi8vZGVsZXRl6rmM7KeAIGF4aW9z66GcIOq1rO2YhCDtm4Tsl5DripQgcmFuZG9tdXNlcmlk66W8IOyTuOydvOydtCDsl4bsnLzri4jquYwg7KeA7JuM7KSMXHJcbi8vY29uc3QgVXNlcklkcyA9IFsnbW9vbnknLCAnd29va3knXVxyXG4vL2NvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV1cclxuXHJcbi8qKiBmb3J1bmRlcnN0YW5kaW5nLnR4dCBsaW5lIG51bWJlciA1NiByZWYgKi9cclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgICAvKlxyXG4gICAg7J20IHF1ZXJ57J2YIHVzZXJJZOulvCBNc2dJdGVt7JeQ7ISc64+EIOyCrOyaqe2VtOyjvOuptCDroZzqt7jsnbjrkJwg7JWE7J2065SUIOuzhOuhnCDsiJjsoJXsgq3soJwg67KE7Yq8IOq4sOuKpeydhCDqtaztmITtlaAg7IiYIOyeiOydjCBcclxuICAgIE1zZ0xpc3TtlZjri6jsl5AgbXlJZCDstpTqsIAg67aA67aE6rO8IE1zZ0l0ZW0uanPsnZggbG4zIOywuOyhsFxyXG4gICAgKi9cclxuICAgIC8vY29uc3QgeyBxdWVyeTogeyB1c2VySWQgPSAnJyB9IH0gPSB1c2VSb3V0ZXIoKSAgLy/so7zshozssL3sl5Ag7J6F66Cl65CY64qUIOuMgOyGjOusuOyekCDqtazrtoQg7LKY66asXHJcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgdXNlcklkID0gcXVlcnkudXNlcklkIHx8IHF1ZXJ5LnVzZXJpZCB8fCAnJ1xyXG5cclxuICAgIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKFtdKSAvL3VzZVN0YXRlKFtvcmlnaW5hbE1zZ3NdKSAtPiB1c2VTdGF0ZShbXSkgZmV0Y2hlcuyCrOyaqeycvOuhnCDruYjrsLDsl7TroZwg67OA6rK9XHJcbiAgICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCkgLy9Nc2dJdGVtIO2VmOuLqOydmCBzdGFydEVkaXQg7IiY7KCV67KE7Yq8IOq4sOuKpeq1rO2YhFxyXG5cclxuICAgIC8vQ1JFQVRFIFxyXG4gICAgLyoqIGZvcnVuZGVyc3RhbmRpbmcudHh0IGxpbmUgbnVtYmVyIDMyIHJlZiAqL1xyXG4gICAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyB0ZXh0ID0+IHtcclxuICAgICAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwb3N0JywgJy9tZXNzYWdlcycsIHsgdGV4dCwgdXNlcklkIH0pXHJcbiAgICAgICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKSAvL25ld01zZyDrjbDsnbTtg4DqsIAg7JeG64uk66m0IOyXkOufrOulvCDrnYTsmrDrj4TroZ0g7LKY66asXHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IFtuZXdNc2csIC4uLm1zZ3NdKVxyXG4gICAgfVxyXG5cclxuICAgIC8vVVBEQVRFIFxyXG4gICAgLyoqIGZvcnVuZGVyc3RhbmRpbmcudHh0IGxpbmUgbnVtYmVyIDcxIHJlZiAqL1xyXG4gICAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwdXQnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyB0ZXh0LCB1c2VySWQgfSlcclxuICAgICAgICAvL2lmICghbmV3TXNnKSByZXR1cm4gLy9uZXdNc2cg642w7J207YOA6rCAIOyXhuuLpOuptCDslYTrrLTqsoPrj4Qg7ZWY7KeAIOyViuuPhOuhnSDsspjrpqxcclxuICAgICAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbWV0aGluZyB3cm9uZycpIFxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpIFxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncyBcclxuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsgLi4ubXNncyBdIFxyXG4gICAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgbmV3TXNnKSAvL3NlcnZlcuyXkOyEnCDsmKgg7Jio7KCE7ZWcIG5ld01zZyDrjbDsnbTtg4DroZwg67CU6r+U7KSMXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdNc2dzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb25lRWRpdCgpXHJcbiAgICB9XHJcblxyXG4gICAgLy9ERUxFVEVcclxuICAgIC8qKiBmb3J1bmRlcnN0YW5kaW5nLnR4dCBsaW5lIG51bWJlciA4OSByZWYgKi9cclxuICAgIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY2VpdmVkSWQgPSBhd2FpdCBmZXRjaGVyKCdkZWxldGUnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyBwYXJhbXM6IHsgdXNlcklkIH0gfSkgLy9tZXNzYWdlcy5qc+yXkOyEnCDsgq3soJzrkJwgaWTrp4wgc2VuZO2VtOykrOq4sCDrlYzrrLhcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgcmVjZWl2ZWRJZCwgdHlwZW9mIGlkKSAvL2RlbGV0ZSDtm4Qg7IKt7KCc65CcIOuplOyLnOyngOqwgCDslYjrs7Tsl6zslbwg7ZWY64qU642wIOuztOyXrOyEnCDtg4DsnoUg7ZmV7J24IHJlY2VpdmVkSWTripQgbnVtYmVy7J206rOgIGlk64qUIHN0cmluZ1xyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gcmVjZWl2ZWRJZCArICcnKSAvL3R5cGXsnbQg7J6Q64+Z7ZiV67OA7ZmYIOuQmOyXiOycvOuvgOuhnCByZWNlaXZlZElk66W8IHN0cmluZ+2ZlCDtlbTspIxcclxuICAgICAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3NcclxuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsgLi4ubXNncyBdXHJcbiAgICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3TXNnc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbClcclxuXHJcbiAgICAvKiogZm9ydW5kZXJzdGFuZGluZy50eHQgbGluZSBudW1iZXIgMSByZWYgKi9cclxuICAgIC8vdXNlRWZmZWN066GcIOy1nOy0iCDrj5nsnpHsi5zsl5Drp4wg7Iuk7ZaJ65CY64+E66GdIO2VqFxyXG4gICAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbXNncyA9IGF3YWl0IGZldGNoZXIoJ2dldCcsICcvbWVzc2FnZXMnKVxyXG4gICAgICAgIHNldE1zZ3MobXNncylcclxuICAgIH1cclxuICAgIC8vdXNlRWZmZWN0KGFzeW5jICgpID0+IHsgLy9hd2FpdOulvCDsk7DroKTrqbQgYXN5bmPrpbwg67aI65+s7JmA7JW87ZWY64qU642wIHVzZUVmZmVjdCDrgrTsl5DshJzripQg7KeB7KCRIO2VmOyngCDslYrquLDrlYzrrLjsl5Ag7JyX7KSE6rO8IOqwmeydtCDsspjrpqztlYTsmpRcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0TWVzc2FnZXMoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy9jb25zdCBzdGFydEVkaXQgPSBpZCA9PiBzZXRFZGl0aW5nSWQoaWQpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICB7bXNncy5tYXAoeCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TXNnSXRlbSBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3guaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHsgLi4ueCB9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9IFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKHguaWQpfSBcclxuICAgICAgICAgICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgbXlJZD17dXNlcklkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiZmV0Y2hlciIsIk1zZ0xpc3QiLCJxdWVyeSIsInVzZXJJZCIsInVzZXJpZCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwib25DcmVhdGUiLCJ0ZXh0IiwibmV3TXNnIiwiRXJyb3IiLCJvblVwZGF0ZSIsImlkIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsInBhcmFtcyIsInJlY2VpdmVkSWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0TWVzc2FnZXMiLCJtYXAiLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==
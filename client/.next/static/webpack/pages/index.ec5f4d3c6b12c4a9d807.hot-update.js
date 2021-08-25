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
/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ "./hooks/useInfiniteScroll.js");
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


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),
      hasNext = _useState3[0],
      setHasNext = _useState3[1];

  var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__.default)(fetchMoreEl); //intersecting 값이 true인지 false인지 달라질 것!
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
      var _msgs;

      var newMsgs;
      return C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0,_fetcher__WEBPACK_IMPORTED_MODULE_9__.default)('get', '/messages', {
                params: {
                  cursor: ((_msgs = msgs[msgs.length - 1]) === null || _msgs === void 0 ? void 0 : _msgs.id) || ''
                }
              });

            case 2:
              newMsgs = _context4.sent;

              //cursor는 맨 마지막에 있는 메시지의 id값을 넘겨주기
              if (newMsgs.length === 0) {
                setHasNext(false);
              } //setMsgs(newMsgs)


              setMsgs(function (msgs) {
                return [].concat((0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs), (0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(newMsgs));
              }); //스크롤이 되었을때 새로 생기는 메시지 목록이 newMsgs이고 기존이 msgs이니 기존 뒤에 붙도록 처리

            case 5:
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

  /*
  useEffect(() => {
      getMessages()
  }, [])
  */


  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (intersecting && hasNext) getMessages();
  }, [intersecting]); //const startEdit = id => setEditingId(id)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_8__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 24
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
          lineNumber: 97,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "rhXsinqIO4JJEZ3lbrpJmHFJ5I0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_10__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWM1ZjRkM2M2YjEyYzRhOWQ4MDcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBTVEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNsQjtBQUNKO0FBQ0E7QUFDQTtBQUNJO0FBTGtCLG1CQU1BTCxzREFBUyxFQU5UO0FBQUEsTUFNVk0sS0FOVSxjQU1WQSxLQU5VOztBQU9sQixNQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBTixJQUFnQkQsS0FBSyxDQUFDRSxNQUF0QixJQUFnQyxFQUEvQzs7QUFQa0Isa0JBU01WLCtDQUFRLENBQUMsRUFBRCxDQVRkO0FBQUEsTUFTWFcsSUFUVztBQUFBLE1BU0xDLE9BVEssaUJBU21COzs7QUFUbkIsbUJBVWdCWiwrQ0FBUSxDQUFDLElBQUQsQ0FWeEI7QUFBQSxNQVVYYSxTQVZXO0FBQUEsTUFVQUMsWUFWQSxrQkFVK0I7OztBQVYvQixtQkFXWWQsK0NBQVEsQ0FBQyxJQUFELENBWHBCO0FBQUEsTUFXWGUsT0FYVztBQUFBLE1BV0ZDLFVBWEU7O0FBWWxCLE1BQU1DLFdBQVcsR0FBR2hCLDZDQUFNLENBQUMsSUFBRCxDQUExQjtBQUNBLE1BQU1pQixZQUFZLEdBQUdaLGtFQUFpQixDQUFDVyxXQUFELENBQXRDLENBYmtCLENBYWtDO0FBRXBEOztBQUNBOztBQUNBLE1BQU1FLFFBQVE7QUFBQSw2U0FBRyxpQkFBTUMsSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNRZixpREFBTyxDQUFDLE1BQUQsRUFBUyxXQUFULEVBQXNCO0FBQUVlLGdCQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUVgsZ0JBQUFBLE1BQU0sRUFBTkE7QUFBUixlQUF0QixDQURm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QUNLUixJQUFJLENBQUM0QixHQUFMLENBQVMsVUFBQUMsQ0FBQztBQUFBLDRCQUNYLDhEQUFDLDZDQUFELGtDQUVTQSxDQUZUO0FBR0ksa0JBQVEsRUFBRWpCLFFBSGQ7QUFJSSxrQkFBUSxFQUFFO0FBQUEsbUJBQU1RLFNBQVEsQ0FBQ1MsQ0FBQyxDQUFDaEIsRUFBSCxDQUFkO0FBQUEsV0FKZDtBQUtJLG1CQUFTLEVBQUU7QUFBQSxtQkFBTVYsWUFBWSxDQUFDMEIsQ0FBQyxDQUFDaEIsRUFBSCxDQUFsQjtBQUFBLFdBTGY7QUFNSSxtQkFBUyxFQUFFWCxTQUFTLEtBQUsyQixDQUFDLENBQUNoQixFQU4vQjtBQU9JLGNBQUksRUFBRWY7QUFQVixZQUNTK0IsQ0FBQyxDQUFDaEIsRUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBVjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQWVJO0FBQUssU0FBRyxFQUFFUDtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmSjtBQUFBLGtCQURKO0FBbUJILENBakdEOztHQUFNVjtVQU1nQkwsb0RBT0dJOzs7S0FibkJDO0FBbUdOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSdcclxuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnXHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInXHJcbmltcG9ydCB1c2VJbmZpbml0ZVNjcm9sbCBmcm9tICcuLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbCdcclxuXHJcbi8vZGVsZXRl6rmM7KeAIGF4aW9z66GcIOq1rO2YhCDtm4Tsl5DripQgcmFuZG9tdXNlcmlk66W8IOyTuOydvOydtCDsl4bsnLzri4jquYwg7KeA7JuM7KSMXHJcbi8vY29uc3QgVXNlcklkcyA9IFsnbW9vbnknLCAnd29va3knXVxyXG4vL2NvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV1cclxuXHJcbi8qKiBmb3J1bmRlcnN0YW5kaW5nLnR4dCBsaW5lIG51bWJlciA1NiByZWYgKi9cclxuXHJcbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XHJcbiAgICAvKlxyXG4gICAg7J20IHF1ZXJ57J2YIHVzZXJJZOulvCBNc2dJdGVt7JeQ7ISc64+EIOyCrOyaqe2VtOyjvOuptCDroZzqt7jsnbjrkJwg7JWE7J2065SUIOuzhOuhnCDsiJjsoJXsgq3soJwg67KE7Yq8IOq4sOuKpeydhCDqtaztmITtlaAg7IiYIOyeiOydjCBcclxuICAgIE1zZ0xpc3TtlZjri6jsl5AgbXlJZCDstpTqsIAg67aA67aE6rO8IE1zZ0l0ZW0uanPsnZggbG4zIOywuOyhsFxyXG4gICAgKi9cclxuICAgIC8vY29uc3QgeyBxdWVyeTogeyB1c2VySWQgPSAnJyB9IH0gPSB1c2VSb3V0ZXIoKSAgLy/so7zshozssL3sl5Ag7J6F66Cl65CY64qUIOuMgOyGjOusuOyekCDqtazrtoQg7LKY66asXHJcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgdXNlcklkID0gcXVlcnkudXNlcklkIHx8IHF1ZXJ5LnVzZXJpZCB8fCAnJ1xyXG5cclxuICAgIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKFtdKSAvL3VzZVN0YXRlKFtvcmlnaW5hbE1zZ3NdKSAtPiB1c2VTdGF0ZShbXSkgZmV0Y2hlcuyCrOyaqeycvOuhnCDruYjrsLDsl7TroZwg67OA6rK9XHJcbiAgICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCkgLy9Nc2dJdGVtIO2VmOuLqOydmCBzdGFydEVkaXQg7IiY7KCV67KE7Yq8IOq4sOuKpeq1rO2YhFxyXG4gICAgY29uc3QgW2hhc05leHQsIHNldEhhc05leHRdID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IGZldGNoTW9yZUVsID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbCkgLy9pbnRlcnNlY3Rpbmcg6rCS7J20IHRydWXsnbjsp4AgZmFsc2Xsnbjsp4Ag64us65287KeIIOqygyFcclxuXHJcbiAgICAvL0NSRUFURSBcclxuICAgIC8qKiBmb3J1bmRlcnN0YW5kaW5nLnR4dCBsaW5lIG51bWJlciAzMiByZWYgKi9cclxuICAgIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgdGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncG9zdCcsICcvbWVzc2FnZXMnLCB7IHRleHQsIHVzZXJJZCB9KVxyXG4gICAgICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJykgLy9uZXdNc2cg642w7J207YOA6rCAIOyXhuuLpOuptCDsl5Drn6zrpbwg652E7Jqw64+E66GdIOyymOumrFxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiBbbmV3TXNnLCAuLi5tc2dzXSlcclxuICAgIH1cclxuXHJcbiAgICAvL1VQREFURSBcclxuICAgIC8qKiBmb3J1bmRlcnN0YW5kaW5nLnR4dCBsaW5lIG51bWJlciA3MSByZWYgKi9cclxuICAgIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pXHJcbiAgICAgICAgLy9pZiAoIW5ld01zZykgcmV0dXJuIC8vbmV3TXNnIOuNsOydtO2DgOqwgCDsl4bri6TrqbQg7JWE66y06rKD64+EIO2VmOyngCDslYrrj4TroZ0g7LKY66asXHJcbiAgICAgICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKSBcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKSBcclxuICAgICAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3MgXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbIC4uLm1zZ3MgXSBcclxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZykgLy9zZXJ2ZXLsl5DshJwg7JioIOyYqOyghO2VnCBuZXdNc2cg642w7J207YOA66GcIOuwlOq/lOykjFxyXG4gICAgICAgICAgICByZXR1cm4gbmV3TXNnc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9uZUVkaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vREVMRVRFXHJcbiAgICAvKiogZm9ydW5kZXJzdGFuZGluZy50eHQgbGluZSBudW1iZXIgODkgcmVmICovXHJcbiAgICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIGlkID0+IHtcclxuICAgICAgICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgZmV0Y2hlcignZGVsZXRlJywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgcGFyYW1zOiB7IHVzZXJJZCB9IH0pIC8vbWVzc2FnZXMuanPsl5DshJwg7IKt7KCc65CcIGlk66eMIHNlbmTtlbTspKzquLAg65WM66y4XHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHJlY2VpdmVkSWQsIHR5cGVvZiBpZCkgLy9kZWxldGUg7ZuEIOyCreygnOuQnCDrqZTsi5zsp4DqsIAg7JWI67O07Jes7JW8IO2VmOuKlOuNsCDrs7Tsl6zshJwg7YOA7J6FIO2ZleyduCByZWNlaXZlZElk64qUIG51bWJlcuydtOqzoCBpZOuKlCBzdHJpbmdcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IHJlY2VpdmVkSWQgKyAnJykgLy90eXBl7J20IOyekOuPme2YleuzgO2ZmCDrkJjsl4jsnLzrr4DroZwgcmVjZWl2ZWRJZOulvCBzdHJpbmftmZQg7ZW07KSMXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbIC4uLm1zZ3MgXVxyXG4gICAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ld01zZ3NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpXHJcblxyXG4gICAgLyoqIGZvcnVuZGVyc3RhbmRpbmcudHh0IGxpbmUgbnVtYmVyIDEgcmVmICovXHJcbiAgICAvL3VzZUVmZmVjdOuhnCDstZzstIgg64+Z7J6R7Iuc7JeQ66eMIOyLpO2WieuQmOuPhOuhnSDtlahcclxuICAgIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld01zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJywgeyBwYXJhbXM6IHsgY3Vyc29yOiBtc2dzW21zZ3MubGVuZ3RoIC0gMV0/LmlkIHx8ICcnIH19KSAvL2N1cnNvcuuKlCDrp6gg66eI7KeA66eJ7JeQIOyeiOuKlCDrqZTsi5zsp4DsnZggaWTqsJLsnYQg64SY6rKo7KO86riwXHJcbiAgICAgICAgaWYgKG5ld01zZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHNldEhhc05leHQoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vc2V0TXNncyhuZXdNc2dzKVxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiBbLi4ubXNncywgLi4ubmV3TXNnc10pIC8v7Iqk7YGs66Gk7J20IOuQmOyXiOydhOuVjCDsg4jroZwg7IOd6riw64qUIOuplOyLnOyngCDrqqnroZ3snbQgbmV3TXNnc+ydtOqzoCDquLDsobTsnbQgbXNnc+ydtOuLiCDquLDsobQg65Kk7JeQIOu2meuPhOuhnSDsspjrpqxcclxuICAgIH1cclxuICAgIC8vdXNlRWZmZWN0KGFzeW5jICgpID0+IHsgLy9hd2FpdOulvCDsk7DroKTrqbQgYXN5bmPrpbwg67aI65+s7JmA7JW87ZWY64qU642wIHVzZUVmZmVjdCDrgrTsl5DshJzripQg7KeB7KCRIO2VmOyngCDslYrquLDrlYzrrLjsl5Ag7JyX7KSE6rO8IOqwmeydtCDsspjrpqztlYTsmpRcclxuICAgIC8qXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldE1lc3NhZ2VzKClcclxuICAgIH0sIFtdKVxyXG4gICAgKi9cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGludGVyc2VjdGluZyAmJiBoYXNOZXh0KSBnZXRNZXNzYWdlcygpXHJcbiAgICB9LCBbaW50ZXJzZWN0aW5nXSlcclxuXHJcbiAgICAvL2NvbnN0IHN0YXJ0RWRpdCA9IGlkID0+IHNldEVkaXRpbmdJZChpZClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHt1c2VySWQgJiYgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+fVxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgIHttc2dzLm1hcCh4ID0+IChcclxuICAgICAgICAgICAgICAgIDxNc2dJdGVtIFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17eC5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgeyAuLi54IH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9IFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfSBcclxuICAgICAgICAgICAgICAgICAgICBteUlkPXt1c2VySWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtmZXRjaE1vcmVFbH0gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdCJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZVJvdXRlciIsIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsImZldGNoZXIiLCJ1c2VJbmZpbml0ZVNjcm9sbCIsIk1zZ0xpc3QiLCJxdWVyeSIsInVzZXJJZCIsInVzZXJpZCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwiaGFzTmV4dCIsInNldEhhc05leHQiLCJmZXRjaE1vcmVFbCIsImludGVyc2VjdGluZyIsIm9uQ3JlYXRlIiwidGV4dCIsIm5ld01zZyIsIkVycm9yIiwib25VcGRhdGUiLCJpZCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJwYXJhbXMiLCJyZWNlaXZlZElkIiwiY29uc29sZSIsImxvZyIsImdldE1lc3NhZ2VzIiwiY3Vyc29yIiwibGVuZ3RoIiwibWFwIiwieCJdLCJzb3VyY2VSb290IjoiIn0=
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
              //setMsgs(newMsgs)
              setMsgs(function (msgs) {
                return [].concat((0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(msgs), (0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(newMsgs));
              }); //스크롤이 되었을때 새로 생기는 메시지 목록이 newMsgs이고 기존이 msgs이니 기존 뒤에 붙도록 처리

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
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (intersecting) getMessages();
  }, [intersecting]); //const startEdit = id => setEditingId(id)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_8__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
          lineNumber: 91,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "Vdms6o5rFB53Py9ML5hQSn1aGFQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTBhYTQ2M2YzMTE1NTZjZGExODguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBTVEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNsQjtBQUNKO0FBQ0E7QUFDQTtBQUNJO0FBTGtCLG1CQU1BTCxzREFBUyxFQU5UO0FBQUEsTUFNVk0sS0FOVSxjQU1WQSxLQU5VOztBQU9sQixNQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBTixJQUFnQkQsS0FBSyxDQUFDRSxNQUF0QixJQUFnQyxFQUEvQzs7QUFQa0Isa0JBU01WLCtDQUFRLENBQUMsRUFBRCxDQVRkO0FBQUEsTUFTWFcsSUFUVztBQUFBLE1BU0xDLE9BVEssaUJBU21COzs7QUFUbkIsbUJBVWdCWiwrQ0FBUSxDQUFDLElBQUQsQ0FWeEI7QUFBQSxNQVVYYSxTQVZXO0FBQUEsTUFVQUMsWUFWQSxrQkFVK0I7OztBQUNqRCxNQUFNQyxXQUFXLEdBQUdkLDZDQUFNLENBQUMsSUFBRCxDQUExQjtBQUNBLE1BQU1lLFlBQVksR0FBR1Ysa0VBQWlCLENBQUNTLFdBQUQsQ0FBdEMsQ0Faa0IsQ0FZa0M7QUFFcEQ7O0FBQ0E7O0FBQ0EsTUFBTUUsUUFBUTtBQUFBLDZTQUFHLGlCQUFNQyxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1FiLGlEQUFPLENBQUMsTUFBRCxFQUFTLFdBQVQsRUFBc0I7QUFBRWEsZ0JBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRVCxnQkFBQUEsTUFBTSxFQUFOQTtBQUFSLGVBQXRCLENBRGY7O0FBQUE7QUFDUFUsY0FBQUEsTUFETzs7QUFBQSxrQkFFUkEsTUFGUTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxvQkFFTUMs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LENBQUNoQixFQUFILENBQWQ7QUFBQSxXQUpkO0FBS0ksbUJBQVMsRUFBRTtBQUFBLG1CQUFNUixZQUFZLENBQUN3QixDQUFDLENBQUNoQixFQUFILENBQWxCO0FBQUEsV0FMZjtBQU1JLG1CQUFTLEVBQUVULFNBQVMsS0FBS3lCLENBQUMsQ0FBQ2hCLEVBTi9CO0FBT0ksY0FBSSxFQUFFYjtBQVBWLFlBQ1M2QixDQUFDLENBQUNoQixFQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQSxPQUFWO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBZUk7QUFBSyxTQUFHLEVBQUVQO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZKO0FBQUEsa0JBREo7QUFtQkgsQ0EzRkQ7O0dBQU1SO1VBTWdCTCxvREFNR0k7OztLQVpuQkM7QUE2Rk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJ1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCdcclxuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vZmV0Y2hlcidcclxuaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gJy4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsJ1xyXG5cclxuLy9kZWxldGXquYzsp4AgYXhpb3ProZwg6rWs7ZiEIO2bhOyXkOuKlCByYW5kb211c2VyaWTrpbwg7JO47J287J20IOyXhuycvOuLiOq5jCDsp4Dsm4zspIxcclxuLy9jb25zdCBVc2VySWRzID0gWydtb29ueScsICd3b29reSddXHJcbi8vY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxyXG5cclxuLyoqIGZvcnVuZGVyc3RhbmRpbmcudHh0IGxpbmUgbnVtYmVyIDU2IHJlZiAqL1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICAgIC8qXHJcbiAgICDsnbQgcXVlcnnsnZggdXNlcklk66W8IE1zZ0l0ZW3sl5DshJzrj4Qg7IKs7Jqp7ZW07KO866m0IOuhnOq3uOyduOuQnCDslYTsnbTrlJQg67OE66GcIOyImOygleyCreygnCDrsoTtirwg6riw64ql7J2EIOq1rO2YhO2VoCDsiJgg7J6I7J2MIFxyXG4gICAgTXNnTGlzdO2VmOuLqOyXkCBteUlkIOy2lOqwgCDrtoDrtoTqs7wgTXNnSXRlbS5qc+ydmCBsbjMg7LC47KGwXHJcbiAgICAqL1xyXG4gICAgLy9jb25zdCB7IHF1ZXJ5OiB7IHVzZXJJZCA9ICcnIH0gfSA9IHVzZVJvdXRlcigpICAvL+yjvOyGjOywveyXkCDsnoXroKXrkJjripQg64yA7IaM66y47J6QIOq1rOu2hCDsspjrpqxcclxuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB1c2VySWQgPSBxdWVyeS51c2VySWQgfHwgcXVlcnkudXNlcmlkIHx8ICcnXHJcblxyXG4gICAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pIC8vdXNlU3RhdGUoW29yaWdpbmFsTXNnc10pIC0+IHVzZVN0YXRlKFtdKSBmZXRjaGVy7IKs7Jqp7Jy866GcIOu5iOuwsOyXtOuhnCDrs4Dqsr1cclxuICAgIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKSAvL01zZ0l0ZW0g7ZWY64uo7J2YIHN0YXJ0RWRpdCDsiJjsoJXrsoTtirwg6riw64ql6rWs7ZiEXHJcbiAgICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgaW50ZXJzZWN0aW5nID0gdXNlSW5maW5pdGVTY3JvbGwoZmV0Y2hNb3JlRWwpIC8vaW50ZXJzZWN0aW5nIOqwkuydtCB0cnVl7J247KeAIGZhbHNl7J247KeAIOuLrOudvOyniCDqsoMhXHJcblxyXG4gICAgLy9DUkVBVEUgXHJcbiAgICAvKiogZm9ydW5kZXJzdGFuZGluZy50eHQgbGluZSBudW1iZXIgMzIgcmVmICovXHJcbiAgICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jIHRleHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3Bvc3QnLCAnL21lc3NhZ2VzJywgeyB0ZXh0LCB1c2VySWQgfSlcclxuICAgICAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbWV0aGluZyB3cm9uZycpIC8vbmV3TXNnIOuNsOydtO2DgOqwgCDsl4bri6TrqbQg7JeQ65+s66W8IOudhOyasOuPhOuhnSDsspjrpqxcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4gW25ld01zZywgLi4ubXNnc10pXHJcbiAgICB9XHJcblxyXG4gICAgLy9VUERBVEUgXHJcbiAgICAvKiogZm9ydW5kZXJzdGFuZGluZy50eHQgbGluZSBudW1iZXIgNzEgcmVmICovXHJcbiAgICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KVxyXG4gICAgICAgIC8vaWYgKCFuZXdNc2cpIHJldHVybiAvL25ld01zZyDrjbDsnbTtg4DqsIAg7JeG64uk66m0IOyVhOustOqyg+uPhCDtlZjsp4Ag7JWK64+E66GdIOyymOumrFxyXG4gICAgICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJykgXHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZCkgXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzIFxyXG4gICAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWyAuLi5tc2dzIF0gXHJcbiAgICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpIC8vc2VydmVy7JeQ7IScIOyYqCDsmKjsoITtlZwgbmV3TXNnIOuNsOydtO2DgOuhnCDrsJTqv5TspIxcclxuICAgICAgICAgICAgcmV0dXJuIG5ld01zZ3NcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvbmVFZGl0KClcclxuICAgIH1cclxuXHJcbiAgICAvL0RFTEVURVxyXG4gICAgLyoqIGZvcnVuZGVyc3RhbmRpbmcudHh0IGxpbmUgbnVtYmVyIDg5IHJlZiAqL1xyXG4gICAgY29uc3Qgb25EZWxldGUgPSBhc3luYyBpZCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoJ2RlbGV0ZScsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHBhcmFtczogeyB1c2VySWQgfSB9KSAvL21lc3NhZ2VzLmpz7JeQ7IScIOyCreygnOuQnCBpZOunjCBzZW5k7ZW07KSs6riwIOuVjOusuFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiByZWNlaXZlZElkLCB0eXBlb2YgaWQpIC8vZGVsZXRlIO2bhCDsgq3soJzrkJwg66mU7Iuc7KeA6rCAIOyViOuztOyXrOyVvCDtlZjripTrjbAg67O07Jes7IScIO2DgOyehSDtmZXsnbggcmVjZWl2ZWRJZOuKlCBudW1iZXLsnbTqs6AgaWTripQgc3RyaW5nXHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSByZWNlaXZlZElkICsgJycpIC8vdHlwZeydtCDsnpDrj5ntmJXrs4DtmZgg65CY7JeI7Jy866+A66GcIHJlY2VpdmVkSWTrpbwgc3RyaW5n7ZmUIO2VtOykjFxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNnc1xyXG4gICAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWyAuLi5tc2dzIF1cclxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdNc2dzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKVxyXG5cclxuICAgIC8qKiBmb3J1bmRlcnN0YW5kaW5nLnR4dCBsaW5lIG51bWJlciAxIHJlZiAqL1xyXG4gICAgLy91c2VFZmZlY3TroZwg7LWc7LSIIOuPmeyekeyLnOyXkOunjCDsi6TtlonrkJjrj4TroZ0g7ZWoXHJcbiAgICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdNc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycsIHsgcGFyYW1zOiB7IGN1cnNvcjogbXNnc1ttc2dzLmxlbmd0aCAtIDFdPy5pZCB8fCAnJyB9fSkgLy9jdXJzb3LripQg66eoIOuniOyngOunieyXkCDsnojripQg66mU7Iuc7KeA7J2YIGlk6rCS7J2EIOuEmOqyqOyjvOq4sFxyXG4gICAgICAgIC8vc2V0TXNncyhuZXdNc2dzKVxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiBbLi4ubXNncywgLi4ubmV3TXNnc10pIC8v7Iqk7YGs66Gk7J20IOuQmOyXiOydhOuVjCDsg4jroZwg7IOd6riw64qUIOuplOyLnOyngCDrqqnroZ3snbQgbmV3TXNnc+ydtOqzoCDquLDsobTsnbQgbXNnc+ydtOuLiCDquLDsobQg65Kk7JeQIOu2meuPhOuhnSDsspjrpqxcclxuICAgIH1cclxuICAgIC8vdXNlRWZmZWN0KGFzeW5jICgpID0+IHsgLy9hd2FpdOulvCDsk7DroKTrqbQgYXN5bmPrpbwg67aI65+s7JmA7JW87ZWY64qU642wIHVzZUVmZmVjdCDrgrTsl5DshJzripQg7KeB7KCRIO2VmOyngCDslYrquLDrlYzrrLjsl5Ag7JyX7KSE6rO8IOqwmeydtCDsspjrpqztlYTsmpRcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0TWVzc2FnZXMoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihpbnRlcnNlY3RpbmcpIGdldE1lc3NhZ2VzKClcclxuICAgIH0sIFtpbnRlcnNlY3RpbmddKVxyXG5cclxuICAgIC8vY29uc3Qgc3RhcnRFZGl0ID0gaWQgPT4gc2V0RWRpdGluZ0lkKGlkKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3VzZXJJZCAmJiA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz59XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAge21zZ3MubWFwKHggPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1zZ0l0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXt4LmlkfSBcclxuICAgICAgICAgICAgICAgICAgICB7IC4uLnggfSBcclxuICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfSBcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlUm91dGVyIiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiZmV0Y2hlciIsInVzZUluZmluaXRlU2Nyb2xsIiwiTXNnTGlzdCIsInF1ZXJ5IiwidXNlcklkIiwidXNlcmlkIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJmZXRjaE1vcmVFbCIsImludGVyc2VjdGluZyIsIm9uQ3JlYXRlIiwidGV4dCIsIm5ld01zZyIsIkVycm9yIiwib25VcGRhdGUiLCJpZCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJwYXJhbXMiLCJyZWNlaXZlZElkIiwiY29uc29sZSIsImxvZyIsImdldE1lc3NhZ2VzIiwiY3Vyc29yIiwibGVuZ3RoIiwibWFwIiwieCJdLCJzb3VyY2VSb290IjoiIn0=
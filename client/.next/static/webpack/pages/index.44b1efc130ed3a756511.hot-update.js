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
    children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_8__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDRiMWVmYzEzMGVkM2E3NTY1MTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNsQjtBQUNKO0FBQ0E7QUFDQTtBQUNJO0FBTGtCLG1CQU1BSixzREFBUyxFQU5UO0FBQUEsTUFNVkssS0FOVSxjQU1WQSxLQU5VOztBQU9sQixNQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBTixJQUFnQkQsS0FBSyxDQUFDRSxNQUF0QixJQUFnQyxFQUEvQzs7QUFQa0Isa0JBU01SLCtDQUFRLENBQUMsRUFBRCxDQVRkO0FBQUEsTUFTWFMsSUFUVztBQUFBLE1BU0xDLE9BVEssaUJBU21COzs7QUFUbkIsbUJBVWdCViwrQ0FBUSxDQUFDLElBQUQsQ0FWeEI7QUFBQSxNQVVYVyxTQVZXO0FBQUEsTUFVQUMsWUFWQSxrQkFVK0I7QUFFakQ7O0FBQ0E7OztBQUNBLE1BQU1DLFFBQVE7QUFBQSw2U0FBRyxpQkFBTUMsSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNRVixpREFBTyxDQUFDLE1BQUQsRUFBUyxXQUFULEVBQXNCO0FBQUVVLGdCQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBUVAsZ0JBQUFBLE1BQU0sRUFBTkE7QUFBUixlQUF0QixDQURmOztBQUFBO0FBQ1BRLGNBQUFBLE1BRE87O0FBQUEsa0JBRVJBLE1BRlE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsb0JBRU1DLEtBQUssQ0FBQyxpQkFBRCxDQUZYOztBQUFBO0FBRStCO0FBQzVDTixjQUFBQSxPQUFPLENBQUMsVUFBQUQsSUFBSTtBQUFBLHdCQUFLTSxNQUFMLHlKQUFnQk4sSUFBaEI7QUFBQSxlQUFMLENB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QUFBQSxPQUFPLENBQUNELElBQUQsQ0FBUDs7QUFGZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWHFCLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakIsQ0F0RGtCLENBMERsQjs7O0FBQ0EvQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWitCLElBQUFBLFdBQVc7QUFDZCxHQUZRLEVBRU4sRUFGTSxDQUFULENBM0RrQixDQStEbEI7O0FBRUEsc0JBQ0k7QUFBQSxlQUNLdkIsTUFBTSxpQkFBSSw4REFBQyw4Q0FBRDtBQUFVLFlBQU0sRUFBRU07QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURmLGVBRUk7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBLGdCQUNLSixJQUFJLENBQUNzQixHQUFMLENBQVMsVUFBQUMsQ0FBQztBQUFBLDRCQUNYLDhEQUFDLDZDQUFELGtDQUVTQSxDQUZUO0FBR0ksa0JBQVEsRUFBRWYsUUFIZDtBQUlJLGtCQUFRLEVBQUU7QUFBQSxtQkFBTVEsU0FBUSxDQUFDTyxDQUFDLENBQUNkLEVBQUgsQ0FBZDtBQUFBLFdBSmQ7QUFLSSxtQkFBUyxFQUFFO0FBQUEsbUJBQU1OLFlBQVksQ0FBQ29CLENBQUMsQ0FBQ2QsRUFBSCxDQUFsQjtBQUFBLFdBTGY7QUFNSSxtQkFBUyxFQUFFUCxTQUFTLEtBQUtxQixDQUFDLENBQUNkLEVBTi9CO0FBT0ksY0FBSSxFQUFFWDtBQVBWLFlBQ1N5QixDQUFDLENBQUNkLEVBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBLE9BQVY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxrQkFESjtBQWtCSCxDQW5GRDs7R0FBTWI7VUFNZ0JKOzs7S0FOaEJJO0FBcUZOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nXHJcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0J1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9mZXRjaGVyJ1xyXG5cclxuLy9kZWxldGXquYzsp4AgYXhpb3ProZwg6rWs7ZiEIO2bhOyXkOuKlCByYW5kb211c2VyaWTrpbwg7JO47J287J20IOyXhuycvOuLiOq5jCDsp4Dsm4zspIxcclxuLy9jb25zdCBVc2VySWRzID0gWydtb29ueScsICd3b29reSddXHJcbi8vY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxyXG5cclxuLyoqIGZvcnVuZGVyc3RhbmRpbmcudHh0IGxpbmUgbnVtYmVyIDU2IHJlZiAqL1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICAgIC8qXHJcbiAgICDsnbQgcXVlcnnsnZggdXNlcklk66W8IE1zZ0l0ZW3sl5DshJzrj4Qg7IKs7Jqp7ZW07KO866m0IOuhnOq3uOyduOuQnCDslYTsnbTrlJQg67OE66GcIOyImOygleyCreygnCDrsoTtirwg6riw64ql7J2EIOq1rO2YhO2VoCDsiJgg7J6I7J2MIFxyXG4gICAgTXNnTGlzdO2VmOuLqOyXkCBteUlkIOy2lOqwgCDrtoDrtoTqs7wgTXNnSXRlbS5qc+ydmCBsbjMg7LC47KGwXHJcbiAgICAqL1xyXG4gICAgLy9jb25zdCB7IHF1ZXJ5OiB7IHVzZXJJZCA9ICcnIH0gfSA9IHVzZVJvdXRlcigpICAvL+yjvOyGjOywveyXkCDsnoXroKXrkJjripQg64yA7IaM66y47J6QIOq1rOu2hCDsspjrpqxcclxuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB1c2VySWQgPSBxdWVyeS51c2VySWQgfHwgcXVlcnkudXNlcmlkIHx8ICcnXHJcblxyXG4gICAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pIC8vdXNlU3RhdGUoW29yaWdpbmFsTXNnc10pIC0+IHVzZVN0YXRlKFtdKSBmZXRjaGVy7IKs7Jqp7Jy866GcIOu5iOuwsOyXtOuhnCDrs4Dqsr1cclxuICAgIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKSAvL01zZ0l0ZW0g7ZWY64uo7J2YIHN0YXJ0RWRpdCDsiJjsoJXrsoTtirwg6riw64ql6rWs7ZiEXHJcblxyXG4gICAgLy9DUkVBVEUgXHJcbiAgICAvKiogZm9ydW5kZXJzdGFuZGluZy50eHQgbGluZSBudW1iZXIgMzIgcmVmICovXHJcbiAgICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jIHRleHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3Bvc3QnLCAnL21lc3NhZ2VzJywgeyB0ZXh0LCB1c2VySWQgfSlcclxuICAgICAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbWV0aGluZyB3cm9uZycpIC8vbmV3TXNnIOuNsOydtO2DgOqwgCDsl4bri6TrqbQg7JeQ65+s66W8IOudhOyasOuPhOuhnSDsspjrpqxcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4gW25ld01zZywgLi4ubXNnc10pXHJcbiAgICB9XHJcblxyXG4gICAgLy9VUERBVEUgXHJcbiAgICAvKiogZm9ydW5kZXJzdGFuZGluZy50eHQgbGluZSBudW1iZXIgNzEgcmVmICovXHJcbiAgICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KVxyXG4gICAgICAgIC8vaWYgKCFuZXdNc2cpIHJldHVybiAvL25ld01zZyDrjbDsnbTtg4DqsIAg7JeG64uk66m0IOyVhOustOqyg+uPhCDtlZjsp4Ag7JWK64+E66GdIOyymOumrFxyXG4gICAgICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJykgXHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSBpZCkgXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzIFxyXG4gICAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWyAuLi5tc2dzIF0gXHJcbiAgICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCBuZXdNc2cpIC8vc2VydmVy7JeQ7IScIOyYqCDsmKjsoITtlZwgbmV3TXNnIOuNsOydtO2DgOuhnCDrsJTqv5TspIxcclxuICAgICAgICAgICAgcmV0dXJuIG5ld01zZ3NcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvbmVFZGl0KClcclxuICAgIH1cclxuXHJcbiAgICAvL0RFTEVURVxyXG4gICAgLyoqIGZvcnVuZGVyc3RhbmRpbmcudHh0IGxpbmUgbnVtYmVyIDg5IHJlZiAqL1xyXG4gICAgY29uc3Qgb25EZWxldGUgPSBhc3luYyBpZCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoJ2RlbGV0ZScsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHBhcmFtczogeyB1c2VySWQgfSB9KSAvL21lc3NhZ2VzLmpz7JeQ7IScIOyCreygnOuQnCBpZOunjCBzZW5k7ZW07KSs6riwIOuVjOusuFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiByZWNlaXZlZElkLCB0eXBlb2YgaWQpIC8vZGVsZXRlIO2bhCDsgq3soJzrkJwg66mU7Iuc7KeA6rCAIOyViOuztOyXrOyVvCDtlZjripTrjbAg67O07Jes7IScIO2DgOyehSDtmZXsnbggcmVjZWl2ZWRJZOuKlCBudW1iZXLsnbTqs6AgaWTripQgc3RyaW5nXHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleChtc2cgPT4gbXNnLmlkID09PSByZWNlaXZlZElkICsgJycpIC8vdHlwZeydtCDsnpDrj5ntmJXrs4DtmZgg65CY7JeI7Jy866+A66GcIHJlY2VpdmVkSWTrpbwgc3RyaW5n7ZmUIO2VtOykjFxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNnc1xyXG4gICAgICAgICAgICBjb25zdCBuZXdNc2dzID0gWyAuLi5tc2dzIF1cclxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdNc2dzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKVxyXG5cclxuICAgIC8qKiBmb3J1bmRlcnN0YW5kaW5nLnR4dCBsaW5lIG51bWJlciAxIHJlZiAqL1xyXG4gICAgLy91c2VFZmZlY3TroZwg7LWc7LSIIOuPmeyekeyLnOyXkOunjCDsi6TtlonrkJjrj4TroZ0g7ZWoXHJcbiAgICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBtc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycpXHJcbiAgICAgICAgc2V0TXNncyhtc2dzKVxyXG4gICAgfVxyXG4gICAgLy91c2VFZmZlY3QoYXN5bmMgKCkgPT4geyAvL2F3YWl066W8IOyTsOugpOuptCBhc3luY+ulvCDrtojrn6zsmYDslbztlZjripTrjbAgdXNlRWZmZWN0IOuCtOyXkOyEnOuKlCDsp4HsoJEg7ZWY7KeAIOyViuq4sOuVjOusuOyXkCDsnJfspITqs7wg6rCZ7J20IOyymOumrO2VhOyalFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRNZXNzYWdlcygpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICAvL2NvbnN0IHN0YXJ0RWRpdCA9IGlkID0+IHNldEVkaXRpbmdJZChpZClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHt1c2VySWQgJiYgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+fVxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgIHttc2dzLm1hcCh4ID0+IChcclxuICAgICAgICAgICAgICAgIDxNc2dJdGVtIFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17eC5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgeyAuLi54IH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9IFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfSBcclxuICAgICAgICAgICAgICAgICAgICBteUlkPXt1c2VySWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3QiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJNc2dJdGVtIiwiTXNnSW5wdXQiLCJmZXRjaGVyIiwiTXNnTGlzdCIsInF1ZXJ5IiwidXNlcklkIiwidXNlcmlkIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsInRleHQiLCJuZXdNc2ciLCJFcnJvciIsIm9uVXBkYXRlIiwiaWQiLCJ0YXJnZXRJbmRleCIsImZpbmRJbmRleCIsIm1zZyIsIm5ld01zZ3MiLCJzcGxpY2UiLCJkb25lRWRpdCIsIm9uRGVsZXRlIiwicGFyYW1zIiwicmVjZWl2ZWRJZCIsImNvbnNvbGUiLCJsb2ciLCJnZXRNZXNzYWdlcyIsIm1hcCIsIngiXSwic291cmNlUm9vdCI6IiJ9
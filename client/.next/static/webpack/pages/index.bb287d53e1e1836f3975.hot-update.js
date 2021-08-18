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
/* harmony import */ var C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
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

var originalMsgs = Array(50).fill(0).map(function (_, i) {
  return {
    id: 50 - i,
    //id: i + 1,
    userId: getRandomUserId(),
    timestamp: 1234567890123 + (50 - i) * 1000 * 60,
    //timestamp: 1234567890123 + i * 1000 * 60,
    text: "".concat(50 - i, " mock text") //text: `${i + 1} mock text`,

  };
}); //.reverse()

var MsgList = function MsgList() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs),
      msgs = _useState[0],
      setMsgs = _useState[1]; //MsgItem 하단의 startEdit 수정버튼 기능구현
  //CREATE 


  var onCreate = function onCreate(text) {
    var newMsg = {
      id: msgs.length + 1,
      userId: getRandomUserId(),
      timestamp: Date.now(),
      text: "".concat(msgs.length + 1, " ").concat(text)
    };
    setMsgs(function (msgs) {
      return [newMsg].concat((0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs));
    }); //msgs.unshift(newMsg)

    console.log(msgs);
  }; //UPDATE 


  var onUpdate = function onUpdate(text, id) {
    setMsgs(function (msgs) {
      var targetIndex = msgs.findIndex(function (msg) {
        return msg.id === id;
      }); //입력받은 id랑 같은 msg.id를 찾기

      if (targetIndex < 0) return msgs; //같은 id가 없으면 -1이 나오는데 그 경우, msgs 처리(return msgs)

      var newMsgs = (0,C_Users_moony_Documents_reactproject_20210816_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(msgs); //msgs를 새로 펼쳐주기


      newMsgs.splice(targetIndex, 1, _objectSpread(_objectSpread({}, msgs[targetIndex]), {}, {
        //해당하는 msgs를 전부 가져오기
        text: text //새로운 text데이터로 set처리

      }));
      return newMsgs;
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_5__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(function (x) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, x), {}, {
          onUpdate: onUpdate
        }), x.id, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(MsgList, "0rHCd0+xzNh1d+KPpUdLMZZ9PRQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmIyODdkNTNlMWUxODM2ZjM5NzUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1HLE9BQU8sR0FBRyxDQUFDLE9BQUQsRUFBVSxPQUFWLENBQWhCOztBQUNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxTQUFNRCxPQUFPLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsRUFBWCxDQUFELENBQWI7QUFBQSxDQUF4Qjs7QUFFQSxJQUFNQyxZQUFZLEdBQUdDLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FDaEJDLElBRGdCLENBQ1gsQ0FEVyxFQUVoQkMsR0FGZ0IsQ0FFWixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFXO0FBQ1pDLElBQUFBLEVBQUUsRUFBRSxLQUFLRCxDQURHO0FBQ0E7QUFDWkUsSUFBQUEsTUFBTSxFQUFFWCxlQUFlLEVBRlg7QUFHWlksSUFBQUEsU0FBUyxFQUFFLGdCQUFnQixDQUFDLEtBQUtILENBQU4sSUFBVyxJQUFYLEdBQWtCLEVBSGpDO0FBR3FDO0FBQ2pESSxJQUFBQSxJQUFJLFlBQUssS0FBS0osQ0FBVixlQUpRLENBSWlCOztBQUpqQixHQUFYO0FBQUEsQ0FGWSxDQUFyQixFQVFBOztBQUVBLElBQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDTWxCLCtDQUFRLENBQUNRLFlBQUQsQ0FEZDtBQUFBLE1BQ1hXLElBRFc7QUFBQSxNQUNMQyxPQURLLGlCQUdsQjtBQUdBOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBSixJQUFJLEVBQUk7QUFDckIsUUFBTUssTUFBTSxHQUFHO0FBQ1hSLE1BQUFBLEVBQUUsRUFBRUssSUFBSSxDQUFDSSxNQUFMLEdBQWMsQ0FEUDtBQUVYUixNQUFBQSxNQUFNLEVBQUVYLGVBQWUsRUFGWjtBQUdYWSxNQUFBQSxTQUFTLEVBQUVRLElBQUksQ0FBQ0MsR0FBTCxFQUhBO0FBSVhSLE1BQUFBLElBQUksWUFBS0UsSUFBSSxDQUFDSSxNQUFMLEdBQWMsQ0FBbkIsY0FBd0JOLElBQXhCO0FBSk8sS0FBZjtBQU1BRyxJQUFBQSxPQUFPLENBQUMsVUFBQUQsSUFBSTtBQUFBLGNBQU1HLE1BQU4seUpBQWlCSCxJQUFqQjtBQUFBLEtBQUwsQ0FBUCxDQVBxQixDQVFyQjs7QUFDQU8sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlSLElBQVo7QUFDSCxHQVZELENBUGtCLENBbUJsQjs7O0FBQ0EsTUFBTVMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1gsSUFBRCxFQUFPSCxFQUFQLEVBQWM7QUFDM0JNLElBQUFBLE9BQU8sQ0FBQyxVQUFBRCxJQUFJLEVBQUk7QUFDWixVQUFNVSxXQUFXLEdBQUdWLElBQUksQ0FBQ1csU0FBTCxDQUFlLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLENBQUNqQixFQUFKLEtBQVdBLEVBQWY7QUFBQSxPQUFsQixDQUFwQixDQURZLENBQzZDOztBQUN6RCxVQUFJZSxXQUFXLEdBQUcsQ0FBbEIsRUFBcUIsT0FBT1YsSUFBUCxDQUZULENBRXNCOztBQUVsQyxVQUFNYSxPQUFPLEdBQUcsZ0pBQUtiLElBQVIsQ0FBYixDQUpZLENBSWdCOzs7QUFDNUJhLE1BQUFBLE9BQU8sQ0FBQ0MsTUFBUixDQUFlSixXQUFmLEVBQTRCLENBQTVCLGtDQUNPVixJQUFJLENBQUNVLFdBQUQsQ0FEWDtBQUMwQjtBQUN0QlosUUFBQUEsSUFBSSxFQUFKQSxJQUZKLENBRVM7O0FBRlQ7QUFJQSxhQUFPZSxPQUFQO0FBQ0gsS0FWTSxDQUFQO0FBV0gsR0FaRDs7QUFjQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLDhDQUFEO0FBQVUsWUFBTSxFQUFFWDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUEsZ0JBQ0tGLElBQUksQ0FBQ1IsR0FBTCxDQUFTLFVBQUF1QixDQUFDO0FBQUEsNEJBQ1gsOERBQUMsNkNBQUQsa0NBQXlCQSxDQUF6QjtBQUE2QixrQkFBUSxFQUFFTjtBQUF2QyxZQUFjTSxDQUFDLENBQUNwQixFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBVjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBLGtCQURKO0FBVUgsQ0E1Q0Q7O0dBQU1JOztLQUFBQTtBQThDTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJ1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCdcclxuXHJcbmNvbnN0IFVzZXJJZHMgPSBbJ21vb255JywgJ3dvb2t5J11cclxuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxyXG5cclxuY29uc3Qgb3JpZ2luYWxNc2dzID0gQXJyYXkoNTApXHJcbiAgICAuZmlsbCgwKVxyXG4gICAgLm1hcCgoXywgaSkgPT4gKHtcclxuICAgICAgICBpZDogNTAgLSBpLCAvL2lkOiBpICsgMSxcclxuICAgICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxyXG4gICAgICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArICg1MCAtIGkpICogMTAwMCAqIDYwLCAvL3RpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArIGkgKiAxMDAwICogNjAsXHJcbiAgICAgICAgdGV4dDogYCR7NTAgLSBpfSBtb2NrIHRleHRgLCAvL3RleHQ6IGAke2kgKyAxfSBtb2NrIHRleHRgLFxyXG59KSlcclxuLy8ucmV2ZXJzZSgpXHJcblxyXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUob3JpZ2luYWxNc2dzKVxyXG5cclxuICAgIC8vTXNnSXRlbSDtlZjri6jsnZggc3RhcnRFZGl0IOyImOygleuyhO2KvCDquLDriqXqtaztmIRcclxuICAgIFxyXG5cclxuICAgIC8vQ1JFQVRFIFxyXG4gICAgY29uc3Qgb25DcmVhdGUgPSB0ZXh0ID0+IHtcclxuICAgICAgICBjb25zdCBuZXdNc2cgPSB7XHJcbiAgICAgICAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXHJcbiAgICAgICAgICAgIHVzZXJJZDogZ2V0UmFuZG9tVXNlcklkKCksXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IChbbmV3TXNnLCAuLi5tc2dzXSkpXHJcbiAgICAgICAgLy9tc2dzLnVuc2hpZnQobmV3TXNnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1zZ3MpXHJcbiAgICB9XHJcblxyXG4gICAgLy9VUERBVEUgXHJcbiAgICBjb25zdCBvblVwZGF0ZSA9ICh0ZXh0LCBpZCkgPT4ge1xyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpIC8v7J6F66Cl67Cb7J2AIGlk656RIOqwmeydgCBtc2cuaWTrpbwg7LC+6riwXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzOyAvL+qwmeydgCBpZOqwgCDsl4bsnLzrqbQgLTHsnbQg64KY7Jik64qU642wIOq3uCDqsr3smrAsIG1zZ3Mg7LKY66asKHJldHVybiBtc2dzKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsgLi4ubXNncyBdIC8vbXNnc+ulvCDsg4jroZwg7Y687LOQ7KO86riwXHJcbiAgICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7IC8vbXNnc+ulvCBzcGxpY2XroZwg64KY64ig7KSAIO2bhCDsg4jroZzsmrQgbXNnc+ulvCDrp4zrk6TslrQg7KO864qUIOu2gOu2hFxyXG4gICAgICAgICAgICAgICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sIC8v7ZW064u57ZWY64qUIG1zZ3Prpbwg7KCE67aAIOqwgOyguOyYpOq4sFxyXG4gICAgICAgICAgICAgICAgdGV4dCAvL+yDiOuhnOyatCB0ZXh0642w7J207YSw66GcIHNldOyymOumrFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3TXNnc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICB7bXNncy5tYXAoeCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TXNnSXRlbSBrZXk9e3guaWR9IHsgLi4ueCB9IG9uVXBkYXRlPXtvblVwZGF0ZX0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTXNnSXRlbSIsIk1zZ0lucHV0IiwiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm9yaWdpbmFsTXNncyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0IiwiTXNnTGlzdCIsIm1zZ3MiLCJzZXRNc2dzIiwib25DcmVhdGUiLCJuZXdNc2ciLCJsZW5ndGgiLCJEYXRlIiwibm93IiwiY29uc29sZSIsImxvZyIsIm9uVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwieCJdLCJzb3VyY2VSb290IjoiIn0=
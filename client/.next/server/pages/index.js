"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/MsgInput.js":
/*!********************************!*\
  !*** ./components/MsgInput.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\moony\\Documents\\reactproject_20210816\\client\\components\\MsgInput.js";


const MsgInput = ({
  mutate,
  text = '',
  id = undefined
}) => {
  const textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    textRef.current.value = '';
    mutate(text, id);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    className: "messages__input",
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
      ref: textRef,
      defaultValue: text,
      placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "submit",
      children: "\uC644\uB8CC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgInput);

/***/ }),

/***/ "./components/MsgItem.js":
/*!*******************************!*\
  !*** ./components/MsgItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");


var _jsxFileName = "C:\\Users\\moony\\Documents\\reactproject_20210816\\client\\components\\MsgItem.js";


const MsgItem = ({
  id,
  userId,
  timestamp,
  text,
  onUpdate,
  onDelete,
  isEditing,
  startEdit,
  myId
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
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
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_1__.default, {
      mutate: onUpdate,
      text: text,
      id: id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, undefined)
  }, void 0, false) : text, myId === userId &&
  /*#__PURE__*/
  //주소창에 입력된 myId랑 userId랑 같으면 수정삭제버튼을 보여줘라!
  (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "messages__buttons",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: startEdit,
      children: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: onDelete,
      children: "\uC0AD\uC81C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 13
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgItem);

/***/ }),

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ "./components/MsgItem.js");
/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MsgInput */ "./components/MsgInput.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetcher */ "./fetcher.js");
/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ "./hooks/useInfiniteScroll.js");


var _jsxFileName = "C:\\Users\\moony\\Documents\\reactproject_20210816\\client\\components\\MsgList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 //delete까지 axios로 구현 후에는 randomuserid를 쓸일이 없으니까 지워줌
//const UserIds = ['moony', 'wooky']
//const getRandomUserId = () => UserIds[Math.round(Math.random())]

/** forunderstanding.txt line number 56 ref */

const MsgList = () => {
  /*
  이 query의 userId를 MsgItem에서도 사용해주면 로그인된 아이디 별로 수정삭제 버튼 기능을 구현할 수 있음 
  MsgList하단에 myId 추가 부분과 MsgItem.js의 ln3 참조
  */
  //const { query: { userId = '' } } = useRouter()  //주소창에 입력되는 대소문자 구분 처리
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const userId = query.userId || query.userid || '';
  const {
    0: msgs,
    1: setMsgs
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); //useState([originalMsgs]) -> useState([]) fetcher사용으로 빈배열로 변경

  const {
    0: editingId,
    1: setEditingId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); //MsgItem 하단의 startEdit 수정버튼 기능구현

  const {
    0: hasNext,
    1: setHasNext
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__.default)(fetchMoreEl); //intersecting 값이 true인지 false인지 달라질 것!
  //CREATE 

  /** forunderstanding.txt line number 32 ref */

  const onCreate = async text => {
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('post', '/messages', {
      text,
      userId
    });
    if (!newMsg) throw Error('something wrong'); //newMsg 데이타가 없다면 에러를 띄우도록 처리

    setMsgs(msgs => [newMsg, ...msgs]);
  }; //UPDATE 

  /** forunderstanding.txt line number 71 ref */


  const onUpdate = async (text, id) => {
    const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('put', `/messages/${id}`, {
      text,
      userId
    }); //if (!newMsg) return //newMsg 데이타가 없다면 아무것도 하지 않도록 처리

    if (!newMsg) throw Error('something wrong');
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, newMsg); //server에서 온 온전한 newMsg 데이타로 바꿔줌

      return newMsgs;
    });
    doneEdit();
  }; //DELETE

  /** forunderstanding.txt line number 89 ref */


  const onDelete = async id => {
    const receivedId = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('delete', `/messages/${id}`, {
      params: {
        userId
      }
    }); //messages.js에서 삭제된 id만 send해줬기 때문

    console.log(typeof receivedId, typeof id); //delete 후 삭제된 메시지가 안보여야 하는데 보여서 타입 확인 receivedId는 number이고 id는 string

    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === receivedId + ''); //type이 자동형변환 되었으므로 receivedId를 string화 해줌

      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  const doneEdit = () => setEditingId(null);
  /** forunderstanding.txt line number 1 ref */
  //useEffect로 최초 동작시에만 실행되도록 함


  const getMessages = async () => {
    var _msgs;

    const newMsgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_5__.default)('get', '/messages', {
      params: {
        cursor: ((_msgs = msgs[msgs.length - 1]) === null || _msgs === void 0 ? void 0 : _msgs.id) || ''
      }
    }); //cursor는 맨 마지막에 있는 메시지의 id값을 넘겨주기

    if (newMsgs.length === 0) {
      setHasNext(false);
      return;
    } //setMsgs(newMsgs)


    setMsgs(msgs => [...msgs, ...newMsgs]); //스크롤이 되었을때 새로 생기는 메시지 목록이 newMsgs이고 기존이 msgs이니 기존 뒤에 붙도록 처리
  }; //useEffect(async () => { //await를 쓰려면 async를 불러와야하는데 useEffect 내에서는 직접 하지 않기때문에 윗줄과 같이 처리필요

  /*
  useEffect(() => {
      getMessages()
  }, [])
  */


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (intersecting && hasNext) getMessages();
  }, [intersecting]); //const startEdit = id => setEditingId(id)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_4__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 24
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        onDelete: () => onDelete(x.id),
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id,
        myId: userId
      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MsgList);

/***/ }),

/***/ "./fetcher.js":
/*!********************!*\
  !*** ./fetcher.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //axios.get('http://localhost:8000/messages') //baseURL을 지정하면 getURL 안 하고 라우트만 지정해줘도 됨

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = 'http://localhost:8000';

const fetcher = async (method, url, ...rest) => {
  //fetcher는 axios를 편하게 쓰기 위해 임의로 지정된 엘리먼츠
  const res = await (axios__WEBPACK_IMPORTED_MODULE_0___default())[method](url, ...rest); //...rest는 CRUD 메소드 뒤에 인자가 하나 또는 두개 이상이 들어올 수 있도록 하는 처리

  return res.data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetcher);
/*

//get, delete 메소드 뒤에는 url인자가 하나만 오고 post, put 메소드 뒤에는 url과 data인자 두개가 옴

//get과 delete는 뒤에 config로 옵션값을 지정
get: axios.get(url[, config]) 
delete: axios.delete(url[, config])

//post와 put 뒤에는 새로 쓰거나 변경할 내용인 data가 들어옴
post: axios.post(url, data[, config])
put: axios.put(url, data[, config])

 */

/***/ }),

/***/ "./hooks/useInfiniteScroll.js":
/*!************************************!*\
  !*** ./hooks/useInfiniteScroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInfiniteScroll = targetEl => {
  const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: intersecting,
    1: setIntersecting
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  /* getObserver로 인해 주석처리됨
  const observer = new IntersectionObserver(entries => setIntersecting(
      entries.some(entry => entry.isIntersecting) //intersecting 한 것이 하나라도 있으면 setIntersecting을 true로 지정 아니면 false
  ))
  */

  const getObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(entries => setIntersecting(entries.some(entry => entry.isIntersecting)));
    }

    return observerRef.current;
  }, [observerRef.current]); //observerRef.current가 바뀔때만 변경사항을 감지하도록 처리
  //observer로 감시할 대상을 즉 target을 지정해주는 작업

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (targetEl.current) getObserver().observe(targetEl.current);
    return () => {
      getObserver().disconnect();
    };
  }, [targetEl.current]);
  return intersecting;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfiniteScroll);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MsgList */ "./components/MsgList.js");


var _jsxFileName = "C:\\Users\\moony\\Documents\\reactproject_20210816\\client\\pages\\index.js";


const Home = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: "SIMPLE SNS"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined)]
}, void 0, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBOztBQUVBLE1BQU1rRCxJQUFJLEdBQUcsbUJBQ1Q7QUFBQSwwQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUksOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUEsZ0JBREo7O0FBT0EsaUVBQWVBLElBQWY7Ozs7Ozs7Ozs7QUNUQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnSW5wdXQuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJdGVtLmpzIiwid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9mZXRjaGVyLmpzIiwid2VicGFjazovL2NsaWVudC8uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsLmpzIiwid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgTXNnSW5wdXQgPSAoeyBtdXRhdGUsIHRleHQgPSAnJywgaWQgPSB1bmRlZmluZWQgfSkgPT4ge1xyXG4gICAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gdGV4dFJlZi5jdXJyZW50LnZhbHVlXHJcbiAgICAgICAgdGV4dFJlZi5jdXJyZW50LnZhbHVlID0gJydcclxuXHJcbiAgICAgICAgbXV0YXRlKHRleHQsIGlkKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibWVzc2FnZXNfX2lucHV0XCIgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICByZWY9e3RleHRSZWZ9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RleHR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuCtOyaqeydhCDsnoXroKXtlZjshLjsmpQuXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7JmE66OMPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNc2dJbnB1dCIsImltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiXHJcblxyXG5jb25zdCBNc2dJdGVtID0gKHsgaWQsIHVzZXJJZCwgdGltZXN0YW1wLCB0ZXh0LCBvblVwZGF0ZSwgb25EZWxldGUsIGlzRWRpdGluZywgc3RhcnRFZGl0LCBteUlkIH0pID0+IChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJtZXNzYWdlc19faXRlbVwiPlxyXG4gICAgICAgIDxoMz5cclxuICAgICAgICAgICAge3VzZXJJZH17JyAnfVxyXG4gICAgICAgICAgICA8c3ViPlxyXG4gICAgICAgICAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2tvLUtSJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICBtb250aDogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdXIxMjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3N1Yj5cclxuICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICB7aXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0vPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgKX0gXHJcblxyXG4gICAgICAgIHtteUlkID09PSB1c2VySWQgJiYgKCAvL+yjvOyGjOywveyXkCDsnoXroKXrkJwgbXlJZOuekSB1c2VySWTrnpEg6rCZ7Jy866m0IOyImOygleyCreygnOuyhO2KvOydhCDrs7Tsl6zspJjrnbwhXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRFZGl0fT7siJjsoJU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgPC9saT5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbSIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJ1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCdcclxuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vZmV0Y2hlcidcclxuaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gJy4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsJ1xyXG5cclxuLy9kZWxldGXquYzsp4AgYXhpb3ProZwg6rWs7ZiEIO2bhOyXkOuKlCByYW5kb211c2VyaWTrpbwg7JO47J287J20IOyXhuycvOuLiOq5jCDsp4Dsm4zspIxcclxuLy9jb25zdCBVc2VySWRzID0gWydtb29ueScsICd3b29reSddXHJcbi8vY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxyXG5cclxuLyoqIGZvcnVuZGVyc3RhbmRpbmcudHh0IGxpbmUgbnVtYmVyIDU2IHJlZiAqL1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcclxuICAgIC8qXHJcbiAgICDsnbQgcXVlcnnsnZggdXNlcklk66W8IE1zZ0l0ZW3sl5DshJzrj4Qg7IKs7Jqp7ZW07KO866m0IOuhnOq3uOyduOuQnCDslYTsnbTrlJQg67OE66GcIOyImOygleyCreygnCDrsoTtirwg6riw64ql7J2EIOq1rO2YhO2VoCDsiJgg7J6I7J2MIFxyXG4gICAgTXNnTGlzdO2VmOuLqOyXkCBteUlkIOy2lOqwgCDrtoDrtoTqs7wgTXNnSXRlbS5qc+ydmCBsbjMg7LC47KGwXHJcbiAgICAqL1xyXG4gICAgLy9jb25zdCB7IHF1ZXJ5OiB7IHVzZXJJZCA9ICcnIH0gfSA9IHVzZVJvdXRlcigpICAvL+yjvOyGjOywveyXkCDsnoXroKXrkJjripQg64yA7IaM66y47J6QIOq1rOu2hCDsspjrpqxcclxuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB1c2VySWQgPSBxdWVyeS51c2VySWQgfHwgcXVlcnkudXNlcmlkIHx8ICcnXHJcblxyXG4gICAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pIC8vdXNlU3RhdGUoW29yaWdpbmFsTXNnc10pIC0+IHVzZVN0YXRlKFtdKSBmZXRjaGVy7IKs7Jqp7Jy866GcIOu5iOuwsOyXtOuhnCDrs4Dqsr1cclxuICAgIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKSAvL01zZ0l0ZW0g7ZWY64uo7J2YIHN0YXJ0RWRpdCDsiJjsoJXrsoTtirwg6riw64ql6rWs7ZiEXHJcbiAgICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgZmV0Y2hNb3JlRWwgPSB1c2VSZWYobnVsbClcclxuICAgIGNvbnN0IGludGVyc2VjdGluZyA9IHVzZUluZmluaXRlU2Nyb2xsKGZldGNoTW9yZUVsKSAvL2ludGVyc2VjdGluZyDqsJLsnbQgdHJ1ZeyduOyngCBmYWxzZeyduOyngCDri6zrnbzsp4gg6rKDIVxyXG5cclxuICAgIC8vQ1JFQVRFIFxyXG4gICAgLyoqIGZvcnVuZGVyc3RhbmRpbmcudHh0IGxpbmUgbnVtYmVyIDMyIHJlZiAqL1xyXG4gICAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyB0ZXh0ID0+IHtcclxuICAgICAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwb3N0JywgJy9tZXNzYWdlcycsIHsgdGV4dCwgdXNlcklkIH0pXHJcbiAgICAgICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKSAvL25ld01zZyDrjbDsnbTtg4DqsIAg7JeG64uk66m0IOyXkOufrOulvCDrnYTsmrDrj4TroZ0g7LKY66asXHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IFtuZXdNc2csIC4uLm1zZ3NdKVxyXG4gICAgfVxyXG5cclxuICAgIC8vVVBEQVRFIFxyXG4gICAgLyoqIGZvcnVuZGVyc3RhbmRpbmcudHh0IGxpbmUgbnVtYmVyIDcxIHJlZiAqL1xyXG4gICAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwdXQnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyB0ZXh0LCB1c2VySWQgfSlcclxuICAgICAgICAvL2lmICghbmV3TXNnKSByZXR1cm4gLy9uZXdNc2cg642w7J207YOA6rCAIOyXhuuLpOuptCDslYTrrLTqsoPrj4Qg7ZWY7KeAIOyViuuPhOuhnSDsspjrpqxcclxuICAgICAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoJ3NvbWV0aGluZyB3cm9uZycpIFxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gaWQpIFxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncyBcclxuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsgLi4ubXNncyBdIFxyXG4gICAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgbmV3TXNnKSAvL3NlcnZlcuyXkOyEnCDsmKgg7Jio7KCE7ZWcIG5ld01zZyDrjbDsnbTtg4DroZwg67CU6r+U7KSMXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdNc2dzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb25lRWRpdCgpXHJcbiAgICB9XHJcblxyXG4gICAgLy9ERUxFVEVcclxuICAgIC8qKiBmb3J1bmRlcnN0YW5kaW5nLnR4dCBsaW5lIG51bWJlciA4OSByZWYgKi9cclxuICAgIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY2VpdmVkSWQgPSBhd2FpdCBmZXRjaGVyKCdkZWxldGUnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyBwYXJhbXM6IHsgdXNlcklkIH0gfSkgLy9tZXNzYWdlcy5qc+yXkOyEnCDsgq3soJzrkJwgaWTrp4wgc2VuZO2VtOykrOq4sCDrlYzrrLhcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgcmVjZWl2ZWRJZCwgdHlwZW9mIGlkKSAvL2RlbGV0ZSDtm4Qg7IKt7KCc65CcIOuplOyLnOyngOqwgCDslYjrs7Tsl6zslbwg7ZWY64qU642wIOuztOyXrOyEnCDtg4DsnoUg7ZmV7J24IHJlY2VpdmVkSWTripQgbnVtYmVy7J206rOgIGlk64qUIHN0cmluZ1xyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgobXNnID0+IG1zZy5pZCA9PT0gcmVjZWl2ZWRJZCArICcnKSAvL3R5cGXsnbQg7J6Q64+Z7ZiV67OA7ZmYIOuQmOyXiOycvOuvgOuhnCByZWNlaXZlZElk66W8IHN0cmluZ+2ZlCDtlbTspIxcclxuICAgICAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3NcclxuICAgICAgICAgICAgY29uc3QgbmV3TXNncyA9IFsgLi4ubXNncyBdXHJcbiAgICAgICAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3TXNnc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbClcclxuXHJcbiAgICAvKiogZm9ydW5kZXJzdGFuZGluZy50eHQgbGluZSBudW1iZXIgMSByZWYgKi9cclxuICAgIC8vdXNlRWZmZWN066GcIOy1nOy0iCDrj5nsnpHsi5zsl5Drp4wg7Iuk7ZaJ65CY64+E66GdIO2VqFxyXG4gICAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TXNncyA9IGF3YWl0IGZldGNoZXIoJ2dldCcsICcvbWVzc2FnZXMnLCB7IHBhcmFtczogeyBjdXJzb3I6IG1zZ3NbbXNncy5sZW5ndGggLSAxXT8uaWQgfHwgJycgfX0pIC8vY3Vyc29y64qUIOunqCDrp4jsp4Drp4nsl5Ag7J6I64qUIOuplOyLnOyngOydmCBpZOqwkuydhCDrhJjqsqjso7zquLBcclxuICAgICAgICBpZiAobmV3TXNncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgc2V0SGFzTmV4dChmYWxzZSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vc2V0TXNncyhuZXdNc2dzKVxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiBbLi4ubXNncywgLi4ubmV3TXNnc10pIC8v7Iqk7YGs66Gk7J20IOuQmOyXiOydhOuVjCDsg4jroZwg7IOd6riw64qUIOuplOyLnOyngCDrqqnroZ3snbQgbmV3TXNnc+ydtOqzoCDquLDsobTsnbQgbXNnc+ydtOuLiCDquLDsobQg65Kk7JeQIOu2meuPhOuhnSDsspjrpqxcclxuICAgIH1cclxuICAgIC8vdXNlRWZmZWN0KGFzeW5jICgpID0+IHsgLy9hd2FpdOulvCDsk7DroKTrqbQgYXN5bmPrpbwg67aI65+s7JmA7JW87ZWY64qU642wIHVzZUVmZmVjdCDrgrTsl5DshJzripQg7KeB7KCRIO2VmOyngCDslYrquLDrlYzrrLjsl5Ag7JyX7KSE6rO8IOqwmeydtCDsspjrpqztlYTsmpRcclxuICAgIC8qXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldE1lc3NhZ2VzKClcclxuICAgIH0sIFtdKVxyXG4gICAgKi9cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGludGVyc2VjdGluZyAmJiBoYXNOZXh0KSBnZXRNZXNzYWdlcygpXHJcbiAgICB9LCBbaW50ZXJzZWN0aW5nXSlcclxuXHJcbiAgICAvL2NvbnN0IHN0YXJ0RWRpdCA9IGlkID0+IHNldEVkaXRpbmdJZChpZClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHt1c2VySWQgJiYgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+fVxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgIHttc2dzLm1hcCh4ID0+IChcclxuICAgICAgICAgICAgICAgIDxNc2dJdGVtIFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17eC5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgeyAuLi54IH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZSh4LmlkKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9IFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfSBcclxuICAgICAgICAgICAgICAgICAgICBteUlkPXt1c2VySWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtmZXRjaE1vcmVFbH0gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbi8vYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvbWVzc2FnZXMnKSAvL2Jhc2VVUkzsnYQg7KeA7KCV7ZWY66m0IGdldFVSTCDslYgg7ZWY6rOgIOudvOyasO2KuOunjCDsp4DsoJXtlbTspJjrj4Qg65CoXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJyBcclxuXHJcbmNvbnN0IGZldGNoZXIgPSBhc3luYyAobWV0aG9kLCB1cmwsIC4uLnJlc3QpID0+IHsgLy9mZXRjaGVy64qUIGF4aW9z66W8IO2OuO2VmOqyjCDsk7DquLAg7JyE7ZW0IOyehOydmOuhnCDsp4DsoJXrkJwg7JeY66as66i87LigXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvc1ttZXRob2RdKHVybCwgLi4ucmVzdCkgLy8uLi5yZXN064qUIENSVUQg66mU7IaM65OcIOuSpOyXkCDsnbjsnpDqsIAg7ZWY64KYIOuYkOuKlCDrkZDqsJwg7J207IOB7J20IOuTpOyWtOyYrCDsiJgg7J6I64+E66GdIO2VmOuKlCDsspjrpqxcclxuICAgIHJldHVybiByZXMuZGF0YVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyXHJcblxyXG4vKlxyXG5cclxuLy9nZXQsIGRlbGV0ZSDrqZTshozrk5wg65Kk7JeQ64qUIHVybOyduOyekOqwgCDtlZjrgpjrp4wg7Jik6rOgIHBvc3QsIHB1dCDrqZTshozrk5wg65Kk7JeQ64qUIHVybOqzvCBkYXRh7J247J6QIOuRkOqwnOqwgCDsmLRcclxuXHJcbi8vZ2V06rO8IGRlbGV0ZeuKlCDrkqTsl5AgY29uZmln66GcIOyYteyFmOqwkuydhCDsp4DsoJVcclxuZ2V0OiBheGlvcy5nZXQodXJsWywgY29uZmlnXSkgXHJcbmRlbGV0ZTogYXhpb3MuZGVsZXRlKHVybFssIGNvbmZpZ10pXHJcblxyXG4vL3Bvc3TsmYAgcHV0IOuSpOyXkOuKlCDsg4jroZwg7JOw6rGw64KYIOuzgOqyve2VoCDrgrTsmqnsnbggZGF0YeqwgCDrk6TslrTsmLRcclxucG9zdDogYXhpb3MucG9zdCh1cmwsIGRhdGFbLCBjb25maWddKVxyXG5wdXQ6IGF4aW9zLnB1dCh1cmwsIGRhdGFbLCBjb25maWddKVxyXG5cclxuICovIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgdXNlSW5maW5pdGVTY3JvbGwgPSB0YXJnZXRFbCA9PiB7XHJcbiAgICBjb25zdCBvYnNlcnZlclJlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW2ludGVyc2VjdGluZywgc2V0SW50ZXJzZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIC8qIGdldE9ic2VydmVy66GcIOyduO2VtCDso7zshJ3sspjrpqzrkKhcclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4gc2V0SW50ZXJzZWN0aW5nKFxyXG4gICAgICAgIGVudHJpZXMuc29tZShlbnRyeSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZykgLy9pbnRlcnNlY3Rpbmcg7ZWcIOqyg+ydtCDtlZjrgpjrnbzrj4Qg7J6I7Jy866m0IHNldEludGVyc2VjdGluZ+ydhCB0cnVl66GcIOyngOyglSDslYTri4jrqbQgZmFsc2VcclxuICAgICkpXHJcbiAgICAqL1xyXG5cclxuICAgIGNvbnN0IGdldE9ic2VydmVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmICghb2JzZXJ2ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlclJlZi5jdXJyZW50ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4gc2V0SW50ZXJzZWN0aW5nKFxyXG4gICAgICAgICAgICAgICAgZW50cmllcy5zb21lKGVudHJ5ID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JzZXJ2ZXJSZWYuY3VycmVudFxyXG4gICAgfSwgW29ic2VydmVyUmVmLmN1cnJlbnRdKSAvL29ic2VydmVyUmVmLmN1cnJlbnTqsIAg67CU64CU65WM66eMIOuzgOqyveyCrO2VreydhCDqsJDsp4DtlZjrj4TroZ0g7LKY66asXHJcblxyXG4gICAgLy9vYnNlcnZlcuuhnCDqsJDsi5ztlaAg64yA7IOB7J2EIOymiSB0YXJnZXTsnYQg7KeA7KCV7ZW07KO864qUIOyekeyXhVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodGFyZ2V0RWwuY3VycmVudCkgZ2V0T2JzZXJ2ZXIoKS5vYnNlcnZlKHRhcmdldEVsLmN1cnJlbnQpXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGdldE9ic2VydmVyKCkuZGlzY29ubmVjdCgpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RhcmdldEVsLmN1cnJlbnRdKVxyXG5cclxuICAgIHJldHVybiBpbnRlcnNlY3RpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5maW5pdGVTY3JvbGwgIiwiaW1wb3J0IE1zZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Nc2dMaXN0J1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IChcclxuICAgIDw+XHJcbiAgICAgICAgPGgxPlNJTVBMRSBTTlM8L2gxPlxyXG4gICAgICAgIDxNc2dMaXN0IC8+XHJcbiAgICA8Lz5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlUmVmIiwiTXNnSW5wdXQiLCJtdXRhdGUiLCJ0ZXh0IiwiaWQiLCJ1bmRlZmluZWQiLCJ0ZXh0UmVmIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwidmFsdWUiLCJNc2dJdGVtIiwidXNlcklkIiwidGltZXN0YW1wIiwib25VcGRhdGUiLCJvbkRlbGV0ZSIsImlzRWRpdGluZyIsInN0YXJ0RWRpdCIsIm15SWQiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiaG91cjEyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwidXNlSW5maW5pdGVTY3JvbGwiLCJNc2dMaXN0IiwicXVlcnkiLCJ1c2VyaWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImhhc05leHQiLCJzZXRIYXNOZXh0IiwiZmV0Y2hNb3JlRWwiLCJpbnRlcnNlY3RpbmciLCJvbkNyZWF0ZSIsIm5ld01zZyIsIkVycm9yIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJyZWNlaXZlZElkIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsImdldE1lc3NhZ2VzIiwiY3Vyc29yIiwibGVuZ3RoIiwibWFwIiwieCIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwibWV0aG9kIiwidXJsIiwicmVzdCIsInJlcyIsImRhdGEiLCJ1c2VDYWxsYmFjayIsInRhcmdldEVsIiwib2JzZXJ2ZXJSZWYiLCJzZXRJbnRlcnNlY3RpbmciLCJnZXRPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInNvbWUiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==
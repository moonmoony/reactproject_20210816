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
  myId,
  user
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
  className: "messages__item",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
    children: [user.nickname, ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("sub", {
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

const MsgList = ({
  smsgs,
  users
}) => {
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(smsgs); //useState([originalMsgs]) -> useState([]) fetcher사용으로 빈배열로 변경

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
  //console.log('render')

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [userId && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_4__.default, {
      mutate: onCreate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 24
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "messages",
      children: msgs.map(x => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, x), {}, {
        onUpdate: onUpdate,
        onDelete: () => onDelete(x.id),
        startEdit: () => setEditingId(x.id),
        isEditing: editingId === x.id,
        myId: userId,
        user: users[x.userId]
      }), x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: fetchMoreEl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
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
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MsgList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MsgList */ "./components/MsgList.js");
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetcher */ "./fetcher.js");


var _jsxFileName = "C:\\Users\\moony\\Documents\\reactproject_20210816\\client\\pages\\index.js";



const Home = ({
  smsgs,
  users
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
    children: "SIMPLE SNS"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MsgList__WEBPACK_IMPORTED_MODULE_1__.default, {
    smsgs: smsgs,
    users: users
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined)]
}, void 0, true);

const getServerSideProps = async () => {
  const smsgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_2__.default)('get', '/messages');
  const users = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_2__.default)('get', '/users');
  return {
    props: {
      smsgs,
      users
    }
  };
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNUb0UsTUFBQUEsV0FBVyxHQUFHTyxVQUFkO0FBQ0gsS0FGRDtBQUdILEdBTlEsRUFNTixDQUFDVixRQUFRLENBQUNqRSxPQUFWLENBTk0sQ0FBVDtBQVFBLFNBQU9xQyxZQUFQO0FBQ0gsQ0E3QkQ7O0FBK0JBLGlFQUFlYixpQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBOztBQUVBLE1BQU1vRCxJQUFJLEdBQUcsQ0FBQztBQUFFbEQsRUFBQUEsS0FBRjtBQUFTQyxFQUFBQTtBQUFULENBQUQsa0JBQ1Q7QUFBQSwwQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUksOERBQUMsd0RBQUQ7QUFBUyxTQUFLLEVBQUVELEtBQWhCO0FBQXVCLFNBQUssRUFBRUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUEsZ0JBREo7O0FBT08sTUFBTWtELGtCQUFrQixHQUFHLFlBQVk7QUFDMUMsUUFBTW5ELEtBQUssR0FBRyxNQUFNSCxpREFBTyxDQUFDLEtBQUQsRUFBUSxXQUFSLENBQTNCO0FBQ0EsUUFBTUksS0FBSyxHQUFHLE1BQU1KLGlEQUFPLENBQUMsS0FBRCxFQUFRLFFBQVIsQ0FBM0I7QUFDQSxTQUFPO0FBQ0h1RCxJQUFBQSxLQUFLLEVBQUU7QUFBRXBELE1BQUFBLEtBQUY7QUFBU0MsTUFBQUE7QUFBVDtBQURKLEdBQVA7QUFHSCxDQU5NO0FBUVAsaUVBQWVpRCxJQUFmOzs7Ozs7Ozs7O0FDbEJBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dJbnB1dC5qcyIsIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL01zZ0l0ZW0uanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9Nc2dMaXN0LmpzIiwid2VicGFjazovL2NsaWVudC8uL2ZldGNoZXIuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBNc2dJbnB1dCA9ICh7IG11dGF0ZSwgdGV4dCA9ICcnLCBpZCA9IHVuZGVmaW5lZCB9KSA9PiB7XHJcbiAgICBjb25zdCB0ZXh0UmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSB0ZXh0UmVmLmN1cnJlbnQudmFsdWVcclxuICAgICAgICB0ZXh0UmVmLmN1cnJlbnQudmFsdWUgPSAnJ1xyXG5cclxuICAgICAgICBtdXRhdGUodGV4dCwgaWQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtZXNzYWdlc19faW5wdXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHJlZj17dGV4dFJlZn1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi64K07Jqp7J2EIOyeheugpe2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7smYTro4w8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1zZ0lucHV0IiwiaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCJcclxuXHJcbmNvbnN0IE1zZ0l0ZW0gPSAoeyBpZCwgdXNlcklkLCB0aW1lc3RhbXAsIHRleHQsIG9uVXBkYXRlLCBvbkRlbGV0ZSwgaXNFZGl0aW5nLCBzdGFydEVkaXQsIG15SWQsIHVzZXIgfSkgPT4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19pdGVtXCI+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICB7dXNlci5uaWNrbmFtZX17JyAnfVxyXG4gICAgICAgICAgICA8c3ViPlxyXG4gICAgICAgICAgICAgICAge25ldyBEYXRlKHRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ2tvLUtSJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgICAgICBtb250aDogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdXIxMjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3N1Yj5cclxuICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICB7aXNFZGl0aW5nID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0vPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgKX0gXHJcblxyXG4gICAgICAgIHtteUlkID09PSB1c2VySWQgJiYgKCAvL+yjvOyGjOywveyXkCDsnoXroKXrkJwgbXlJZOuekSB1c2VySWTrnpEg6rCZ7Jy866m0IOyImOygleyCreygnOuyhO2KvOydhCDrs7Tsl6zspJjrnbwhXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXNfX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRFZGl0fT7siJjsoJU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgPC9saT5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnSXRlbSIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJ1xyXG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCdcclxuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vZmV0Y2hlcidcclxuaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gJy4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsJ1xyXG5cclxuLy9kZWxldGXquYzsp4AgYXhpb3ProZwg6rWs7ZiEIO2bhOyXkOuKlCByYW5kb211c2VyaWTrpbwg7JO47J287J20IOyXhuycvOuLiOq5jCDsp4Dsm4zspIxcclxuLy9jb25zdCBVc2VySWRzID0gWydtb29ueScsICd3b29reSddXHJcbi8vY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxyXG5cclxuLyoqIGZvcnVuZGVyc3RhbmRpbmcudHh0IGxpbmUgbnVtYmVyIDU2IHJlZiAqL1xyXG5cclxuY29uc3QgTXNnTGlzdCA9ICh7IHNtc2dzLCB1c2VycyB9KSA9PiB7XHJcbiAgICAvKlxyXG4gICAg7J20IHF1ZXJ57J2YIHVzZXJJZOulvCBNc2dJdGVt7JeQ7ISc64+EIOyCrOyaqe2VtOyjvOuptCDroZzqt7jsnbjrkJwg7JWE7J2065SUIOuzhOuhnCDsiJjsoJXsgq3soJwg67KE7Yq8IOq4sOuKpeydhCDqtaztmITtlaAg7IiYIOyeiOydjCBcclxuICAgIE1zZ0xpc3TtlZjri6jsl5AgbXlJZCDstpTqsIAg67aA67aE6rO8IE1zZ0l0ZW0uanPsnZggbG4zIOywuOyhsFxyXG4gICAgKi9cclxuICAgIC8vY29uc3QgeyBxdWVyeTogeyB1c2VySWQgPSAnJyB9IH0gPSB1c2VSb3V0ZXIoKSAgLy/so7zshozssL3sl5Ag7J6F66Cl65CY64qUIOuMgOyGjOusuOyekCDqtazrtoQg7LKY66asXHJcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgdXNlcklkID0gcXVlcnkudXNlcklkIHx8IHF1ZXJ5LnVzZXJpZCB8fCAnJ1xyXG5cclxuICAgIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKHNtc2dzKSAvL3VzZVN0YXRlKFtvcmlnaW5hbE1zZ3NdKSAtPiB1c2VTdGF0ZShbXSkgZmV0Y2hlcuyCrOyaqeycvOuhnCDruYjrsLDsl7TroZwg67OA6rK9XHJcbiAgICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCkgLy9Nc2dJdGVtIO2VmOuLqOydmCBzdGFydEVkaXQg7IiY7KCV67KE7Yq8IOq4sOuKpeq1rO2YhFxyXG4gICAgY29uc3QgW2hhc05leHQsIHNldEhhc05leHRdID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IGZldGNoTW9yZUVsID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbCkgLy9pbnRlcnNlY3Rpbmcg6rCS7J20IHRydWXsnbjsp4AgZmFsc2Xsnbjsp4Ag64us65287KeIIOqygyFcclxuXHJcbiAgICAvL0NSRUFURSBcclxuICAgIC8qKiBmb3J1bmRlcnN0YW5kaW5nLnR4dCBsaW5lIG51bWJlciAzMiByZWYgKi9cclxuICAgIGNvbnN0IG9uQ3JlYXRlID0gYXN5bmMgdGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncG9zdCcsICcvbWVzc2FnZXMnLCB7IHRleHQsIHVzZXJJZCB9KVxyXG4gICAgICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcignc29tZXRoaW5nIHdyb25nJykgLy9uZXdNc2cg642w7J207YOA6rCAIOyXhuuLpOuptCDsl5Drn6zrpbwg652E7Jqw64+E66GdIOyymOumrFxyXG4gICAgICAgIHNldE1zZ3MobXNncyA9PiBbbmV3TXNnLCAuLi5tc2dzXSlcclxuICAgIH1cclxuXHJcbiAgICAvL1VQREFURSBcclxuICAgIC8qKiBmb3J1bmRlcnN0YW5kaW5nLnR4dCBsaW5lIG51bWJlciA3MSByZWYgKi9cclxuICAgIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKHRleHQsIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncHV0JywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgdGV4dCwgdXNlcklkIH0pXHJcbiAgICAgICAgLy9pZiAoIW5ld01zZykgcmV0dXJuIC8vbmV3TXNnIOuNsOydtO2DgOqwgCDsl4bri6TrqbQg7JWE66y06rKD64+EIO2VmOyngCDslYrrj4TroZ0g7LKY66asXHJcbiAgICAgICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKCdzb21ldGhpbmcgd3JvbmcnKSBcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IGlkKSBcclxuICAgICAgICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3MgXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbIC4uLm1zZ3MgXSBcclxuICAgICAgICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZykgLy9zZXJ2ZXLsl5DshJwg7JioIOyYqOyghO2VnCBuZXdNc2cg642w7J207YOA66GcIOuwlOq/lOykjFxyXG4gICAgICAgICAgICByZXR1cm4gbmV3TXNnc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9uZUVkaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vREVMRVRFXHJcbiAgICAvKiogZm9ydW5kZXJzdGFuZGluZy50eHQgbGluZSBudW1iZXIgODkgcmVmICovXHJcbiAgICBjb25zdCBvbkRlbGV0ZSA9IGFzeW5jIGlkID0+IHtcclxuICAgICAgICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgZmV0Y2hlcignZGVsZXRlJywgYC9tZXNzYWdlcy8ke2lkfWAsIHsgcGFyYW1zOiB7IHVzZXJJZCB9IH0pIC8vbWVzc2FnZXMuanPsl5DshJwg7IKt7KCc65CcIGlk66eMIHNlbmTtlbTspKzquLAg65WM66y4XHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHJlY2VpdmVkSWQsIHR5cGVvZiBpZCkgLy9kZWxldGUg7ZuEIOyCreygnOuQnCDrqZTsi5zsp4DqsIAg7JWI67O07Jes7JW8IO2VmOuKlOuNsCDrs7Tsl6zshJwg7YOA7J6FIO2ZleyduCByZWNlaXZlZElk64qUIG51bWJlcuydtOqzoCBpZOuKlCBzdHJpbmdcclxuICAgICAgICBzZXRNc2dzKG1zZ3MgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KG1zZyA9PiBtc2cuaWQgPT09IHJlY2VpdmVkSWQgKyAnJykgLy90eXBl7J20IOyekOuPme2YleuzgO2ZmCDrkJjsl4jsnLzrr4DroZwgcmVjZWl2ZWRJZOulvCBzdHJpbmftmZQg7ZW07KSMXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01zZ3MgPSBbIC4uLm1zZ3MgXVxyXG4gICAgICAgICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ld01zZ3NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpXHJcblxyXG4gICAgLyoqIGZvcnVuZGVyc3RhbmRpbmcudHh0IGxpbmUgbnVtYmVyIDEgcmVmICovXHJcbiAgICAvL3VzZUVmZmVjdOuhnCDstZzstIgg64+Z7J6R7Iuc7JeQ66eMIOyLpO2WieuQmOuPhOuhnSDtlahcclxuICAgIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld01zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJywgeyBwYXJhbXM6IHsgY3Vyc29yOiBtc2dzW21zZ3MubGVuZ3RoIC0gMV0/LmlkIHx8ICcnIH0gfSkgLy9jdXJzb3LripQg66eoIOuniOyngOunieyXkCDsnojripQg66mU7Iuc7KeA7J2YIGlk6rCS7J2EIOuEmOqyqOyjvOq4sFxyXG4gICAgICAgIGlmIChuZXdNc2dzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZXRIYXNOZXh0KGZhbHNlKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9zZXRNc2dzKG5ld01zZ3MpXHJcbiAgICAgICAgc2V0TXNncyhtc2dzID0+IFsuLi5tc2dzLCAuLi5uZXdNc2dzXSkgLy/siqTtgazroaTsnbQg65CY7JeI7J2E65WMIOyDiOuhnCDsg53quLDripQg66mU7Iuc7KeAIOuqqeuhneydtCBuZXdNc2dz7J206rOgIOq4sOyhtOydtCBtc2dz7J2064uIIOq4sOyhtCDrkqTsl5Ag67aZ64+E66GdIOyymOumrFxyXG4gICAgfVxyXG4gICAgLy91c2VFZmZlY3QoYXN5bmMgKCkgPT4geyAvL2F3YWl066W8IOyTsOugpOuptCBhc3luY+ulvCDrtojrn6zsmYDslbztlZjripTrjbAgdXNlRWZmZWN0IOuCtOyXkOyEnOuKlCDsp4HsoJEg7ZWY7KeAIOyViuq4sOuVjOusuOyXkCDsnJfspITqs7wg6rCZ7J20IOyymOumrO2VhOyalFxyXG4gICAgLypcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0TWVzc2FnZXMoKVxyXG4gICAgfSwgW10pXHJcbiAgICAqL1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGludGVyc2VjdGluZyAmJiBoYXNOZXh0KSBnZXRNZXNzYWdlcygpXHJcbiAgICB9LCBbaW50ZXJzZWN0aW5nXSlcclxuXHJcbiAgICAvL2NvbnN0IHN0YXJ0RWRpdCA9IGlkID0+IHNldEVkaXRpbmdJZChpZClcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKCdyZW5kZXInKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3VzZXJJZCAmJiA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz59XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAge21zZ3MubWFwKHggPT4gKFxyXG4gICAgICAgICAgICAgICAgPE1zZ0l0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXt4LmlkfSBcclxuICAgICAgICAgICAgICAgICAgICB7IC4uLnggfSBcclxuICAgICAgICAgICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfSBcclxuICAgICAgICAgICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IHguaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cclxuICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2Vyc1t4LnVzZXJJZF19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtmZXRjaE1vcmVFbH0gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbi8vYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvbWVzc2FnZXMnKSAvL2Jhc2VVUkzsnYQg7KeA7KCV7ZWY66m0IGdldFVSTCDslYgg7ZWY6rOgIOudvOyasO2KuOunjCDsp4DsoJXtlbTspJjrj4Qg65CoXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJyBcclxuXHJcbmNvbnN0IGZldGNoZXIgPSBhc3luYyAobWV0aG9kLCB1cmwsIC4uLnJlc3QpID0+IHsgLy9mZXRjaGVy64qUIGF4aW9z66W8IO2OuO2VmOqyjCDsk7DquLAg7JyE7ZW0IOyehOydmOuhnCDsp4DsoJXrkJwg7JeY66as66i87LigXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvc1ttZXRob2RdKHVybCwgLi4ucmVzdCkgLy8uLi5yZXN064qUIENSVUQg66mU7IaM65OcIOuSpOyXkCDsnbjsnpDqsIAg7ZWY64KYIOuYkOuKlCDrkZDqsJwg7J207IOB7J20IOuTpOyWtOyYrCDsiJgg7J6I64+E66GdIO2VmOuKlCDsspjrpqxcclxuICAgIHJldHVybiByZXMuZGF0YVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmZXRjaGVyXHJcblxyXG4vKlxyXG5cclxuLy9nZXQsIGRlbGV0ZSDrqZTshozrk5wg65Kk7JeQ64qUIHVybOyduOyekOqwgCDtlZjrgpjrp4wg7Jik6rOgIHBvc3QsIHB1dCDrqZTshozrk5wg65Kk7JeQ64qUIHVybOqzvCBkYXRh7J247J6QIOuRkOqwnOqwgCDsmLRcclxuXHJcbi8vZ2V06rO8IGRlbGV0ZeuKlCDrkqTsl5AgY29uZmln66GcIOyYteyFmOqwkuydhCDsp4DsoJVcclxuZ2V0OiBheGlvcy5nZXQodXJsWywgY29uZmlnXSkgXHJcbmRlbGV0ZTogYXhpb3MuZGVsZXRlKHVybFssIGNvbmZpZ10pXHJcblxyXG4vL3Bvc3TsmYAgcHV0IOuSpOyXkOuKlCDsg4jroZwg7JOw6rGw64KYIOuzgOqyve2VoCDrgrTsmqnsnbggZGF0YeqwgCDrk6TslrTsmLRcclxucG9zdDogYXhpb3MucG9zdCh1cmwsIGRhdGFbLCBjb25maWddKVxyXG5wdXQ6IGF4aW9zLnB1dCh1cmwsIGRhdGFbLCBjb25maWddKVxyXG5cclxuICovIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgdXNlSW5maW5pdGVTY3JvbGwgPSB0YXJnZXRFbCA9PiB7XHJcbiAgICBjb25zdCBvYnNlcnZlclJlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW2ludGVyc2VjdGluZywgc2V0SW50ZXJzZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIC8qIGdldE9ic2VydmVy66GcIOyduO2VtCDso7zshJ3sspjrpqzrkKhcclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4gc2V0SW50ZXJzZWN0aW5nKFxyXG4gICAgICAgIGVudHJpZXMuc29tZShlbnRyeSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZykgLy9pbnRlcnNlY3Rpbmcg7ZWcIOqyg+ydtCDtlZjrgpjrnbzrj4Qg7J6I7Jy866m0IHNldEludGVyc2VjdGluZ+ydhCB0cnVl66GcIOyngOyglSDslYTri4jrqbQgZmFsc2VcclxuICAgICkpXHJcbiAgICAqL1xyXG5cclxuICAgIGNvbnN0IGdldE9ic2VydmVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmICghb2JzZXJ2ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlclJlZi5jdXJyZW50ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4gc2V0SW50ZXJzZWN0aW5nKFxyXG4gICAgICAgICAgICAgICAgZW50cmllcy5zb21lKGVudHJ5ID0+IGVudHJ5LmlzSW50ZXJzZWN0aW5nKVxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JzZXJ2ZXJSZWYuY3VycmVudFxyXG4gICAgfSwgW29ic2VydmVyUmVmLmN1cnJlbnRdKSAvL29ic2VydmVyUmVmLmN1cnJlbnTqsIAg67CU64CU65WM66eMIOuzgOqyveyCrO2VreydhCDqsJDsp4DtlZjrj4TroZ0g7LKY66asXHJcblxyXG4gICAgLy9vYnNlcnZlcuuhnCDqsJDsi5ztlaAg64yA7IOB7J2EIOymiSB0YXJnZXTsnYQg7KeA7KCV7ZW07KO864qUIOyekeyXhVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodGFyZ2V0RWwuY3VycmVudCkgZ2V0T2JzZXJ2ZXIoKS5vYnNlcnZlKHRhcmdldEVsLmN1cnJlbnQpXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGdldE9ic2VydmVyKCkuZGlzY29ubmVjdCgpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RhcmdldEVsLmN1cnJlbnRdKVxyXG5cclxuICAgIHJldHVybiBpbnRlcnNlY3RpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5maW5pdGVTY3JvbGwgIiwiaW1wb3J0IE1zZ0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Nc2dMaXN0J1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9mZXRjaGVyJ1xyXG5cclxuY29uc3QgSG9tZSA9ICh7IHNtc2dzLCB1c2VycyB9KSA9PiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxoMT5TSU1QTEUgU05TPC9oMT5cclxuICAgICAgICA8TXNnTGlzdCBzbXNncz17c21zZ3N9IHVzZXJzPXt1c2Vyc30gLz5cclxuICAgIDwvPlxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgc21zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJylcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy91c2VycycpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IHNtc2dzLCB1c2VycyB9LFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJNc2dJbnB1dCIsIm11dGF0ZSIsInRleHQiLCJpZCIsInVuZGVmaW5lZCIsInRleHRSZWYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJ2YWx1ZSIsIk1zZ0l0ZW0iLCJ1c2VySWQiLCJ0aW1lc3RhbXAiLCJvblVwZGF0ZSIsIm9uRGVsZXRlIiwiaXNFZGl0aW5nIiwic3RhcnRFZGl0IiwibXlJZCIsInVzZXIiLCJuaWNrbmFtZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJob3VyMTIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImZldGNoZXIiLCJ1c2VJbmZpbml0ZVNjcm9sbCIsIk1zZ0xpc3QiLCJzbXNncyIsInVzZXJzIiwicXVlcnkiLCJ1c2VyaWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImhhc05leHQiLCJzZXRIYXNOZXh0IiwiZmV0Y2hNb3JlRWwiLCJpbnRlcnNlY3RpbmciLCJvbkNyZWF0ZSIsIm5ld01zZyIsIkVycm9yIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJyZWNlaXZlZElkIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsImdldE1lc3NhZ2VzIiwiY3Vyc29yIiwibGVuZ3RoIiwibWFwIiwieCIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwibWV0aG9kIiwidXJsIiwicmVzdCIsInJlcyIsImRhdGEiLCJ1c2VDYWxsYmFjayIsInRhcmdldEVsIiwib2JzZXJ2ZXJSZWYiLCJzZXRJbnRlcnNlY3RpbmciLCJnZXRPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInNvbWUiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJIb21lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9
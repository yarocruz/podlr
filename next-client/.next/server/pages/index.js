/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts_Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/Base */ \"./layouts/Base.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/yaro/Desktop/dev/podlr/next-client/pages/index.js\";\n\n\nfunction Home() {\n  const {\n    0: auth,\n    1: setAuth\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const {\n    0: message,\n    1: setMessage\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    (async () => {\n      try {\n        const response = await fetch('http://localhost:8000/user', {\n          credentials: 'include'\n        });\n        const content = await response.json();\n        console.log(content);\n\n        if (content.name) {\n          setMessage(`Hi ${content.name}`);\n          setAuth(true);\n        }\n      } catch (e) {\n        console.log(e.message);\n        setAuth(false);\n        setMessage('You are not logged in');\n      }\n    })();\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_Base__WEBPACK_IMPORTED_MODULE_1__.default, {\n    auththenticated: auth,\n    children: message\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 7\n  }, this);\n} // export async function getStaticProps() {\n//     const res = await fetch('http://127.0.0.1:8000/api/podcast/')\n//     const podcasts = await res.json()\n//\n//     return {\n//         props: {\n//             podcasts\n//         }\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNsaWVudC8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOlsiSG9tZSIsImF1dGgiLCJzZXRBdXRoIiwidXNlU3RhdGUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInVzZUVmZmVjdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImNvbnRlbnQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzNCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQyxLQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFFREcsa0RBQVMsQ0FBQyxNQUFNO0FBQ1osS0FDSSxZQUFZO0FBQ1IsVUFBSTtBQUNBLGNBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsNEJBQUQsRUFBK0I7QUFDdkRDLHFCQUFXLEVBQUU7QUFEMEMsU0FBL0IsQ0FBNUI7QUFJQSxjQUFNQyxPQUFPLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxJQUFULEVBQXRCO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaOztBQUVBLFlBQUlBLE9BQU8sQ0FBQ0ksSUFBWixFQUFrQjtBQUNkVCxvQkFBVSxDQUFFLE1BQUtLLE9BQU8sQ0FBQ0ksSUFBSyxFQUFwQixDQUFWO0FBQ0FaLGlCQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0g7QUFFSixPQWJELENBYUUsT0FBT2EsQ0FBUCxFQUFVO0FBQ1JILGVBQU8sQ0FBQ0MsR0FBUixDQUFZRSxDQUFDLENBQUNYLE9BQWQ7QUFDQUYsZUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBRyxrQkFBVSxDQUFDLHVCQUFELENBQVY7QUFDSDtBQUNKLEtBcEJMO0FBc0JILEdBdkJRLENBQVQ7QUF5QkQsc0JBQ0ksOERBQUMsa0RBQUQ7QUFBTSxtQkFBZSxFQUFFSixJQUF2QjtBQUFBLGNBQ0tHO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZSBmcm9tIFwiLi4vbGF5b3V0cy9CYXNlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgKFxuICAgICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC91c2VyJywge1xuICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb250ZW50KVxuXG4gICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKGBIaSAke2NvbnRlbnQubmFtZX1gKVxuICAgICAgICAgICAgICAgICAgICAgICBzZXRBdXRoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICBzZXRBdXRoKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoJ1lvdSBhcmUgbm90IGxvZ2dlZCBpbicpXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH1cbiAgICAgICApKCk7XG4gICB9KTtcblxuICByZXR1cm4gKFxuICAgICAgPEJhc2UgYXV0aHRoZW50aWNhdGVkPXthdXRofT5cbiAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvQmFzZT5cbiAgKVxufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvcG9kY2FzdC8nKVxuLy8gICAgIGNvbnN0IHBvZGNhc3RzID0gYXdhaXQgcmVzLmpzb24oKVxuLy9cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBwcm9wczoge1xuLy8gICAgICAgICAgICAgcG9kY2FzdHNcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/icons");;

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","layouts_Base_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
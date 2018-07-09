/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Home = __webpack_require__(8);

var _Home2 = _interopRequireDefault(_Home);

var _News = __webpack_require__(10);

var _News2 = _interopRequireDefault(_News);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
    path: "/",
    component: _Home2.default,
    exact: true
}, {
    path: "/news",
    component: _News2.default
}];

exports.default = routes;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(6);

var _cors2 = _interopRequireDefault(_cors);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(1);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

var _api = __webpack_require__(13);

__webpack_require__(2);

var _serializeJavascript = __webpack_require__(14);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 3000;

var app = (0, _express2.default)();

app.use((0, _cors2.default)());

app.use(_express2.default.static("public"));

app.get("*", function (req, res, next) {
    var activeRoute = _routes2.default.find(function (route) {
        return (0, _reactRouterDom.matchPath)(req.url, route);
    }) || {};
    var promise = activeRoute.fetchData ? activeRoute.fetchData(req.path) : Promise.resolve();

    promise.then(function (data) {
        var context = { data: data };
        var markup = (0, _server.renderToString)(_react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.url, context: context },
            _react2.default.createElement(_App2.default, { data: data })
        ));
        res.send("\n            <!DOCTYPE html>\n            <head>\n                <title>React App</title>\n                <link rel=\"stylesheet\" href=\"/css/main.css>\n                <script src=\"/bundle.js\" defer></script>\n                <script>window.__INITIAL_DATA__=" + (0, _serializeJavascript2.default)(data) + "</script>\n            </head>\n            <body>\n                <div id=\"root\">" + markup + "</div>\n            </body>\n            </html>\n        ");
    }).catch(next);
});

app.listen(PORT, function () {
    console.log('Server is running at PORT:' + PORT);
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactBootstrap = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "home" },
        _react2.default.createElement("header", null),
        _react2.default.createElement(
          "aside",
          null,
          _react2.default.createElement(
            "p",
            { className: "selected" },
            "Home"
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/news" },
              "News"
            )
          )
        ),
        _react2.default.createElement(
          "article",
          null,
          _react2.default.createElement(
            "h1",
            null,
            "News page"
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: "primary", bsSize: "large" },
            "Click"
          )
        ),
        _react2.default.createElement("figure", null)
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var News = function (_Component) {
  _inherits(News, _Component);

  function News() {
    _classCallCheck(this, News);

    return _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).apply(this, arguments));
  }

  _createClass(News, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "news" },
        _react2.default.createElement(
          "h1",
          null,
          "News Page."
        )
      );
    }
  }]);

  return News;
}(_react.Component);

exports.default = News;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

__webpack_require__(12);

var _Navbar = __webpack_require__(15);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_Navbar2.default, null),
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    _routes2.default.map(function (_ref) {
                        var path = _ref.path,
                            exact = _ref.exact,
                            C = _ref.component,
                            rest = _objectWithoutProperties(_ref, ["path", "exact", "component"]);

                        return _react2.default.createElement(_reactRouterDom.Route, {
                            key: path,
                            path: path,
                            exact: exact,
                            render: function render(props) {
                                return _react2.default.createElement(C, _extends({}, props, rest));
                            }
                        });
                    })
                )
            );
        }
    }]);

    return App;
}(_react.Component);
// const App = () => {
//     return (
//         <Switch>
//             {routes.map((route, i) => <Route key={i} {...route} />)}
//         </Switch>
//     );
// }

exports.default = App;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/scss/bootstrap.scss");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchData = fetchData;

var _isomorphicFetch = __webpack_require__(2);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchData(req) {
    var baseUrl = req ? req.protocol + '://' + req.get('Host') : '';
    var encodedURI = encodeURI(baseUrl + '/data.json');
    console.log("*************", encodedURI);
    return (0, _isomorphicFetch2.default)(encodedURI).then(function (data) {
        return data.json();
    }).catch(function (error) {
        console.warn(error);
        return null;
    });
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var navbar = function (_Component) {
    _inherits(navbar, _Component);

    function navbar() {
        _classCallCheck(this, navbar);

        return _possibleConstructorReturn(this, (navbar.__proto__ || Object.getPrototypeOf(navbar)).apply(this, arguments));
    }

    _createClass(navbar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    _reactBootstrap.Navbar,
                    { inverse: true, collapseOnSelect: true },
                    React.createElement(
                        _reactBootstrap.Navbar.Header,
                        null,
                        React.createElement(
                            _reactBootstrap.Navbar.Brand,
                            null,
                            React.createElement(
                                "a",
                                { href: "#brand" },
                                "React-Bootstrap"
                            )
                        ),
                        React.createElement(_reactBootstrap.Navbar.Toggle, null)
                    ),
                    React.createElement(
                        _reactBootstrap.Navbar.Collapse,
                        null,
                        React.createElement(
                            Nav,
                            null,
                            React.createElement(
                                _reactBootstrap.NavItem,
                                { eventKey: 1, href: "#" },
                                "Link"
                            ),
                            React.createElement(
                                _reactBootstrap.NavItem,
                                { eventKey: 2, href: "#" },
                                "Link"
                            ),
                            React.createElement(
                                NavDropdown,
                                { eventKey: 3, title: "Dropdown", id: "basic-nav-dropdown" },
                                React.createElement(
                                    MenuItem,
                                    { eventKey: 3.1 },
                                    "Action"
                                ),
                                React.createElement(
                                    MenuItem,
                                    { eventKey: 3.2 },
                                    "Another action"
                                ),
                                React.createElement(
                                    MenuItem,
                                    { eventKey: 3.3 },
                                    "Something else here"
                                ),
                                React.createElement(MenuItem, { divider: true }),
                                React.createElement(
                                    MenuItem,
                                    { eventKey: 3.3 },
                                    "Separated link"
                                )
                            )
                        ),
                        React.createElement(
                            Nav,
                            { pullRight: true },
                            React.createElement(
                                _reactBootstrap.NavItem,
                                { eventKey: 1, href: "#" },
                                "Link Right"
                            ),
                            React.createElement(
                                _reactBootstrap.NavItem,
                                { eventKey: 2, href: "#" },
                                "Link Right"
                            )
                        )
                    )
                ),
                ";"
            );
        }
    }]);

    return navbar;
}(_react.Component);

/***/ })
/******/ ]);
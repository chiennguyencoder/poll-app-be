"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userRoute = _interopRequireDefault(require("./users/user.route.js"));
var _authRoute = _interopRequireDefault(require("./auth/auth.route.js"));
var _pollRoute = _interopRequireDefault(require("./poll/poll.route.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.use('/users', _userRoute["default"]);
router.use('/auth', _authRoute["default"]);
router.use('/polls', _pollRoute["default"]);
var _default = exports["default"] = router;
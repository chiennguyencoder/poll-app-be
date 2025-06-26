"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _validateMiddleware = _interopRequireDefault(require("../../middleware/validate.middleware.js"));
var _userController = _interopRequireDefault(require("./user.controller.js"));
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var userRoute = _express["default"].Router();
userRoute.route('/').get(_userController["default"].getAllUsers).post(_validateMiddleware["default"].validateUser, _userController["default"].postUser);
userRoute.route('/:id').get(_userController["default"].getUser).put(_validateMiddleware["default"].validateUser, _userController["default"].updateUser)["delete"](_userController["default"].deleteUser);
var _default = exports["default"] = userRoute;
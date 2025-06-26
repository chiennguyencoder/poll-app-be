"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _authController = _interopRequireDefault(require("./auth.controller.js"));
var _validateMiddleware = _interopRequireDefault(require("../../middleware/validate.middleware.js"));
var _verifyMiddleware = _interopRequireDefault(require("../../middleware/verify.middleware.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var AutherRouter = _express["default"].Router();
AutherRouter.route("/register").post(_validateMiddleware["default"].validateUser, _authController["default"].register);
AutherRouter.route("/login").post(_validateMiddleware["default"].validateLogin, _authController["default"].login);
AutherRouter.route("/profile").get(_verifyMiddleware["default"].checkAuth, _authController["default"].getProfile);
AutherRouter.route("/forgot").post(_validateMiddleware["default"].validateEmail, _authController["default"].forgotPassword);
AutherRouter.route("/reset").post(_authController["default"].resetPassword);
var _default = exports["default"] = AutherRouter;
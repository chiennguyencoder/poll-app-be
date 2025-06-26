"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _pollController = _interopRequireDefault(require("./poll.controller.js"));
var _verifyMiddleware = _interopRequireDefault(require("../../middleware/verify.middleware.js"));
var _validateMiddleware = _interopRequireDefault(require("../../middleware/validate.middleware.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PollRoute = _express["default"].Router();
PollRoute.route("/").post(_verifyMiddleware["default"].checkAuth, _validateMiddleware["default"].validateCreatePoll, _pollController["default"].createPoll).get(_pollController["default"].getAll);
PollRoute.route('/:id').get(_pollController["default"].getOne)["delete"](_verifyMiddleware["default"].checkAuth, _pollController["default"]["delete"]).put(_verifyMiddleware["default"].checkAuth, _pollController["default"].update);
PollRoute.route('/:id/vote').post(_verifyMiddleware["default"].checkAuth, _validateMiddleware["default"].validateCheckID, _pollController["default"].vote);
PollRoute.route('/:id/unvote').post(_verifyMiddleware["default"].checkAuth, _validateMiddleware["default"].validateCheckID, _pollController["default"].unvote);
PollRoute.route('/:id/lock').post(_verifyMiddleware["default"].checkAuth, _pollController["default"].lock);
PollRoute.route('/:id/unlock').post(_verifyMiddleware["default"].checkAuth, _pollController["default"].unlock);
PollRoute.route('/:id/find').post(_verifyMiddleware["default"].checkAuth, _pollController["default"].findVote);
var _default = exports["default"] = PollRoute;
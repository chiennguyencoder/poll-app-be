"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = void 0;
var errorHandler = exports.errorHandler = function errorHandler(err, req, res, next) {
  return res.status(err.statusCode || 500).json({
    status: "error",
    error: err.message,
    stack: err.stack
  });
};
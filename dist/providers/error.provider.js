"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var ErrorProvider = {
  formatError: function formatError(error) {
    error.statusCode = error.statusCode || 500;
    error.message = error.message || "Internal server error";
    return error;
  }
};
var _default = exports["default"] = ErrorProvider;
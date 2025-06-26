"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);
var templateEngineConfig = function templateEngineConfig(app) {
  app.set('view engine', 'ejs');
  app.set('views', _path["default"].join(_dirname, '../views'));
};
var _default = exports["default"] = templateEngineConfig;
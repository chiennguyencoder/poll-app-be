"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _url = require("url");
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);
var filePath = _path["default"].join(_dirname, './data.json');
var FileService = {
  getUsersFromFile: function getUsersFromFile() {
    try {
      var data = _fs["default"].readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      throw new Error("Read file error: ".concat(error));
    }
  },
  saveUsersToFile: function saveUsersToFile(users) {
    try {
      _fs["default"].writeFileSync(filePath, JSON.stringify(users), 'utf-8');
    } catch (error) {
      throw new Error("Write file error: ".concat(error));
    }
  }
};
var _default = exports["default"] = FileService;
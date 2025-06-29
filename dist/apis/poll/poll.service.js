"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongodb = require("mongodb");
var _pollModel = _interopRequireDefault(require("../../models/poll.model.js"));
var _userModel = _interopRequireDefault(require("../../models/user.model.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var PollServices = {
  create: function create(req) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var body, user, options, pollData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            body = req.body, user = req.user;
            options = body.options.map(function (option) {
              return _objectSpread({
                _id: new _mongodb.ObjectId()
              }, option);
            });
            if (!body.expiresAt) {
              body.expiresAt = null;
            }
            pollData = _objectSpread(_objectSpread({}, body), {}, {
              options: options,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              createdBy: new _mongodb.ObjectId(user.id),
              isLocked: false
            });
            _context.next = 6;
            return _pollModel["default"].create(pollData);
          case 6:
            return _context.abrupt("return", _context.sent);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  getAll: function getAll() {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var polls, _iterator, _step, item, votes, createdUser;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _pollModel["default"].getAll();
          case 2:
            polls = _context2.sent;
            _iterator = _createForOfIteratorHelper(polls);
            _context2.prev = 4;
            _iterator.s();
          case 6:
            if ((_step = _iterator.n()).done) {
              _context2.next = 18;
              break;
            }
            item = _step.value;
            _context2.next = 10;
            return _pollModel["default"].findVote({
              pollID: item._id
            });
          case 10:
            votes = _context2.sent;
            item["votes"] = votes.length;
            _context2.next = 14;
            return _userModel["default"].getUser({
              _id: item.createdBy
            });
          case 14:
            createdUser = _context2.sent;
            item["createdBy"] = {
              _id: createdUser._id,
              name: createdUser.name
            };
          case 16:
            _context2.next = 6;
            break;
          case 18:
            _context2.next = 23;
            break;
          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](4);
            _iterator.e(_context2.t0);
          case 23:
            _context2.prev = 23;
            _iterator.f();
            return _context2.finish(23);
          case 26:
            return _context2.abrupt("return", polls);
          case 27:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[4, 20, 23, 26]]);
    }))();
  },
  getOne: function getOne(id) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var poll, _iterator2, _step2, _loop, createdBy;
      return _regeneratorRuntime().wrap(function _callee3$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (_mongodb.ObjectId.isValid(id)) {
              _context4.next = 2;
              break;
            }
            throw Object.assign(new Error('Invalid Poll ID'), {
              statusCode: 400
            });
          case 2:
            _context4.next = 4;
            return _pollModel["default"].getOne({
              _id: new _mongodb.ObjectId(id)
            });
          case 4:
            poll = _context4.sent;
            if (poll) {
              _context4.next = 7;
              break;
            }
            throw Object.assign(new Error('Poll not found'), {
              statusCode: 404
            });
          case 7:
            _iterator2 = _createForOfIteratorHelper(poll.options);
            _context4.prev = 8;
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
              var item, votes, userVotes;
              return _regeneratorRuntime().wrap(function _loop$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    item = _step2.value;
                    _context3.next = 3;
                    return _pollModel["default"].findVote({
                      optionID: item._id
                    });
                  case 3:
                    votes = _context3.sent;
                    item["votes"] = votes.length;
                    if (!(votes.length !== 0)) {
                      _context3.next = 10;
                      break;
                    }
                    _context3.next = 8;
                    return _userModel["default"].getUser({
                      _id: votes[0].user
                    });
                  case 8:
                    userVotes = _context3.sent;
                    // uservote is array of objects
                    item["userVotes"] = votes.map(function (vote) {
                      return {
                        _id: vote.user,
                        name: userVotes.name
                      };
                    });
                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }, _loop);
            });
            _iterator2.s();
          case 11:
            if ((_step2 = _iterator2.n()).done) {
              _context4.next = 15;
              break;
            }
            return _context4.delegateYield(_loop(), "t0", 13);
          case 13:
            _context4.next = 11;
            break;
          case 15:
            _context4.next = 20;
            break;
          case 17:
            _context4.prev = 17;
            _context4.t1 = _context4["catch"](8);
            _iterator2.e(_context4.t1);
          case 20:
            _context4.prev = 20;
            _iterator2.f();
            return _context4.finish(20);
          case 23:
            _context4.next = 25;
            return _userModel["default"].getUser({
              _id: poll.createdBy
            });
          case 25:
            createdBy = _context4.sent;
            poll["createdBy"] = {
              _id: createdBy._id,
              name: createdBy.name
            };
            return _context4.abrupt("return", poll);
          case 28:
          case "end":
            return _context4.stop();
        }
      }, _callee3, null, [[8, 17, 20, 23]]);
    }))();
  },
  "delete": function _delete(id, user) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var poll;
      return _regeneratorRuntime().wrap(function _callee4$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (_mongodb.ObjectId.isValid(id)) {
              _context5.next = 2;
              break;
            }
            throw Object.assign(new Error('Invalid Poll ID'), {
              statusCode: 400
            });
          case 2:
            _context5.next = 4;
            return _pollModel["default"].getOne({
              _id: new _mongodb.ObjectId(id)
            });
          case 4:
            poll = _context5.sent;
            if (poll) {
              _context5.next = 7;
              break;
            }
            throw Object.assign(new Error('Poll not found'), {
              statusCode: 404
            });
          case 7:
            if (!(poll.createdBy.toString() !== user.id)) {
              _context5.next = 9;
              break;
            }
            throw Object.assign(new Error('You are not the creator of this poll'), {
              statusCode: 403
            });
          case 9:
            _context5.next = 11;
            return _pollModel["default"]["delete"]({
              _id: new _mongodb.ObjectId(id)
            });
          case 11:
          case "end":
            return _context5.stop();
        }
      }, _callee4);
    }))();
  },
  update: function update(id, data, user) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var poll;
      return _regeneratorRuntime().wrap(function _callee5$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (_mongodb.ObjectId.isValid(id)) {
              _context6.next = 2;
              break;
            }
            throw Object.assign(new Error('Invalid Poll ID'), {
              statusCode: 400
            });
          case 2:
            _context6.next = 4;
            return _pollModel["default"].getOne({
              _id: new _mongodb.ObjectId(id)
            });
          case 4:
            poll = _context6.sent;
            if (poll) {
              _context6.next = 7;
              break;
            }
            throw Object.assign(new Error('Poll not found'), {
              statusCode: 404
            });
          case 7:
            if (!(poll.createdBy.toString() !== user.id)) {
              _context6.next = 9;
              break;
            }
            throw Object.assign(new Error('You are not the creator of this poll'), {
              statusCode: 403
            });
          case 9:
            data.updatedAt = new Date().toISOString();
            _context6.next = 12;
            return _pollModel["default"].update({
              _id: new _mongodb.ObjectId(id)
            }, data);
          case 12:
          case "end":
            return _context6.stop();
        }
      }, _callee5);
    }))();
  },
  vote: function vote(optionID, pollID, user) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var poll, isVoted;
      return _regeneratorRuntime().wrap(function _callee6$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _pollModel["default"].getOne({
              _id: new _mongodb.ObjectId(String(pollID))
            });
          case 2:
            poll = _context7.sent;
            if (poll) {
              _context7.next = 5;
              break;
            }
            throw Object.assign(new Error('Poll not found'), {
              statusCode: 404
            });
          case 5:
            if (!poll.isLocked) {
              _context7.next = 7;
              break;
            }
            throw Object.assign(new Error('Poll is locked'), {
              statusCode: 400
            });
          case 7:
            _context7.next = 9;
            return _pollModel["default"].findVote({
              pollID: new _mongodb.ObjectId(String(pollID)),
              user: new _mongodb.ObjectId(String(user.id))
            });
          case 9:
            isVoted = _context7.sent;
            if (!(isVoted.length !== 0)) {
              _context7.next = 12;
              break;
            }
            throw Object.assign(new Error('You already voted on this poll.'), {
              statusCode: 409
            });
          case 12:
            if (!(poll.expiresAt && new Date(poll.expiresAt) < new Date())) {
              _context7.next = 14;
              break;
            }
            throw Object.assign(new Error('Poll has expired'), {
              statusCode: 400
            });
          case 14:
            _context7.next = 16;
            return _pollModel["default"].vote({
              optionID: new _mongodb.ObjectId(String(optionID)),
              pollID: new _mongodb.ObjectId(String(pollID)),
              createdAt: new Date().toISOString(),
              user: new _mongodb.ObjectId(String(user.id))
            });
          case 16:
          case "end":
            return _context7.stop();
        }
      }, _callee6);
    }))();
  },
  unvote: function unvote(pollID, optionID, user) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var poll, votes;
      return _regeneratorRuntime().wrap(function _callee7$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _pollModel["default"].getOne({
              _id: new _mongodb.ObjectId(pollID)
            });
          case 2:
            poll = _context8.sent;
            if (!(!poll || poll.length === 0)) {
              _context8.next = 5;
              break;
            }
            throw Object.assign(new Error('Poll not found'), {
              statusCode: 404
            });
          case 5:
            if (!poll.isLocked) {
              _context8.next = 7;
              break;
            }
            throw Object.assign(new Error('Poll is locked'), {
              statusCode: 400
            });
          case 7:
            _context8.next = 9;
            return _pollModel["default"].unvote({
              optionID: new _mongodb.ObjectId(optionID),
              pollID: new _mongodb.ObjectId(pollID),
              user: new _mongodb.ObjectId(user.id)
            });
          case 9:
            votes = _context8.sent;
            if (!(votes.deletedCount === 0)) {
              _context8.next = 12;
              break;
            }
            throw Object.assign(new Error('Vote not found'), {
              statusCode: 404
            });
          case 12:
          case "end":
            return _context8.stop();
        }
      }, _callee7);
    }))();
  },
  lock: function lock(id, user) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var poll;
      return _regeneratorRuntime().wrap(function _callee8$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            if (_mongodb.ObjectId.isValid(id)) {
              _context9.next = 2;
              break;
            }
            throw Object.assign(new Error('Invalid Poll ID'), {
              statusCode: 400
            });
          case 2:
            _context9.next = 4;
            return _pollModel["default"].getOne({
              _id: new _mongodb.ObjectId(id)
            });
          case 4:
            poll = _context9.sent;
            if (poll) {
              _context9.next = 7;
              break;
            }
            throw Object.assign(new Error('Poll not found'), {
              statusCode: 404
            });
          case 7:
            if (!poll.isLocked) {
              _context9.next = 9;
              break;
            }
            throw Object.assign(new Error('Poll is already locked'), {
              statusCode: 400
            });
          case 9:
            if (!(poll.createdBy.toString() !== user.id)) {
              _context9.next = 11;
              break;
            }
            throw Object.assign(new Error('You are not the creator of this poll'), {
              statusCode: 403
            });
          case 11:
            _context9.next = 13;
            return _pollModel["default"].update({
              _id: new _mongodb.ObjectId(id)
            }, {
              isLocked: true
            });
          case 13:
          case "end":
            return _context9.stop();
        }
      }, _callee8);
    }))();
  },
  unlock: function unlock(id, user) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var poll;
      return _regeneratorRuntime().wrap(function _callee9$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return _pollModel["default"].getOne({
              _id: new _mongodb.ObjectId(id)
            });
          case 2:
            poll = _context10.sent;
            if (poll) {
              _context10.next = 5;
              break;
            }
            throw Object.assign(new Error('Poll not found'), {
              statusCode: 404
            });
          case 5:
            if (poll.isLocked) {
              _context10.next = 7;
              break;
            }
            throw Object.assign(new Error('Poll is already unlocked'), {
              statusCode: 400
            });
          case 7:
            if (!(poll.createdBy.toString() !== user.id)) {
              _context10.next = 9;
              break;
            }
            throw Object.assign(new Error('You are not the creator of this poll'), {
              statusCode: 403
            });
          case 9:
            _context10.next = 11;
            return _pollModel["default"].update({
              _id: new _mongodb.ObjectId(id)
            }, {
              isLocked: false
            });
          case 11:
          case "end":
            return _context10.stop();
        }
      }, _callee9);
    }))();
  },
  findVote: function findVote(poll_id, option_id, user_id) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var vote;
      return _regeneratorRuntime().wrap(function _callee10$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return _pollModel["default"].findVote({
              pollID: new _mongodb.ObjectId(String(poll_id)),
              optionID: new _mongodb.ObjectId(String(option_id)),
              user: new _mongodb.ObjectId(String(user_id))
            });
          case 2:
            vote = _context11.sent;
            return _context11.abrupt("return", vote);
          case 4:
          case "end":
            return _context11.stop();
        }
      }, _callee10);
    }))();
  }
};
var _default = exports["default"] = PollServices;
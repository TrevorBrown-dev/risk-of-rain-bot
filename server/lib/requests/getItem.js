"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsdom = _interopRequireDefault(require("jsdom"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var JSDOM = _jsdom["default"].JSDOM;

var formatText = function formatText(text) {
  text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');
  text = text.replace(/\(/g, '*(');
  text = text.replace(/\)/g, ')*');
  return text;
};

var getItem = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(itemName) {
    var response, page, name, caption, description, image;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios["default"].get("https://riskofrain2.gamepedia.com/".concat(itemName))["catch"](function (error) {
              console.log(error);
            });

          case 2:
            response = _context.sent;
            page = new JSDOM(response.data);
            name = page.window.document.querySelector('.infoboxname').textContent;
            caption = page.window.document.querySelector('.infoboxcaption').textContent;
            description = formatText(page.window.document.querySelector('.infoboxdesc').textContent);
            image = page.window.document.querySelector('.infoboxtable img').src;
            return _context.abrupt("return", {
              name: name,
              caption: caption,
              description: description,
              image: image
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getItem(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getItem;
exports["default"] = _default;
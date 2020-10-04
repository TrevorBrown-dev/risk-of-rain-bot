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
  text = text.replace('Health', '**Health**');
  text = text.replace('Damage', '**Damage**');
  text = text.replace('Speed', '**Speed**');
  text = text.replace('Health Regen', '**Health Regen**');
  text = text.replace('Armor', '**Armor:**');
  text = text.replace(/\(/g, '*(');
  text = text.replace(/\)/g, ')*');
  return text;
};

var getSurvivor = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(survivorName) {
    var response, page, name, text, image;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios["default"].get("https://riskofrain2.gamepedia.com/".concat(survivorName))["catch"](function (error) {
              console.log(error);
            });

          case 2:
            response = _context.sent;
            page = new JSDOM(response.data);
            name = page.window.document.querySelector('.infoboxname').textContent;
            text = page.window.document.querySelector('.infoboxtable').textContent.trim();
            text = text.replace(name, '');
            text = formatText(text);
            image = page.window.document.querySelector('.infoboxtable img').src; // const description = page.window.document.querySelector('.infoboxtable').textContent;

            return _context.abrupt("return", {
              name: name,
              text: text,
              image: image
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSurvivor(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getSurvivor;
exports["default"] = _default;
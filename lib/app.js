"use strict";

require("@babel/polyfill");

var _getItem = _interopRequireDefault(require("./risk-of-rain/getItem"));

var _getMonster = _interopRequireDefault(require("./risk-of-rain/getMonster"));

var _getSurvivor = _interopRequireDefault(require("./risk-of-rain/getSurvivor.js"));

var _discord = _interopRequireDefault(require("discord.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var client = new _discord["default"].Client();
client.once('ready', function () {
  console.log('Ready to Risk of Rain');
});

var buildString = function buildString(args) {
  var string = '';
  var s;

  var _iterator = _createForOfIteratorHelper(args),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      s = _step.value;
      string += s + ' ';
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return string;
};

client.on('message', function (message) {
  var args = message.content.split(/ +/g);
  var command = args.shift();

  if (command === '!ritem') {
    var itemName = buildString(args);
    (0, _getItem["default"])(itemName).then(function (item) {
      var embed = new _discord["default"].MessageEmbed(); // embed.setTitle(item.name);

      embed.setThumbnail(item.image); // embed.setImage(item.image);

      embed.setAuthor('Risk of Rain 2 Wiki', client.user.avatar, "https://riskofrain2.gamepedia.com/".concat(item.name.replace(' ', '_')));
      embed.setDescription(item.caption);
      embed.addFields({
        name: 'Stats:',
        value: item.description
      });
      message.channel.send(embed);
    });
  }

  if (command === '!rmonster') {
    var monsterName = buildString(args);
    (0, _getMonster["default"])(monsterName).then(function (monster) {
      var embed = new _discord["default"].MessageEmbed();
      embed.setThumbnail(monster.image);
      embed.setTitle(monster.name);
      embed.setAuthor('Risk of Rain 2 Wiki', client.user.avatar, "https://riskofrain2.gamepedia.com/".concat(monster.name.replace(' ', '_')));
      embed.addFields({
        name: 'Stats:',
        value: monster.text
      });
      message.channel.send(embed);
    });
  }

  if (command === '!rsurvivor') {
    var survivorName = buildString(args);
    (0, _getSurvivor["default"])(survivorName).then(function (survivor) {
      var embed = new _discord["default"].MessageEmbed();
      embed.setThumbnail(survivor.image);
      embed.setTitle(survivor.name);
      embed.setAuthor('Risk of Rain 2 Wiki', client.user.avatar, "https://riskofrain2.gamepedia.com/".concat(survivor.name.replace(' ', '_')));
      embed.addFields({
        name: 'Stats:',
        value: survivor.text
      });
      message.channel.send(embed);
    });
  }
});
client.login(process.env.BOT_TOKEN);
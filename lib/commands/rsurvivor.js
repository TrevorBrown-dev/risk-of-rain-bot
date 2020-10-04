"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getSurvivor = _interopRequireDefault(require("../requests/getSurvivor"));

var _buildString = _interopRequireDefault(require("../helpers/buildString"));

var _discord = _interopRequireDefault(require("discord.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rsurvivor = function rsurvivor(message, args) {
  var survivorName = (0, _buildString["default"])(args);
  (0, _getSurvivor["default"])(survivorName).then(function (survivor) {
    var embed = new _discord["default"].MessageEmbed();
    embed.setThumbnail(survivor.image);
    embed.setTitle(survivor.name);
    embed.setAuthor('Risk of Rain 2 Wiki', '', "https://riskofrain2.gamepedia.com/".concat(survivor.name.replace(/ +/g, '_')));
    embed.addFields({
      name: 'Info:',
      value: survivor.text
    });
    message.channel.send(embed);
  });
};

var _default = rsurvivor;
exports["default"] = _default;
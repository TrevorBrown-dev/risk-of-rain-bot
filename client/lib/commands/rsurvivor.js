"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _discord = require("discord.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rsurvivor = function rsurvivor(message, survivorName) {
  _axios["default"].get("http://localhost:5000/survivors/".concat(survivorName)).then(function (response) {
    var survivor = response.data;
    var embed = new _discord.MessageEmbed();
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
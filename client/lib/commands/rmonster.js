"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _discord = require("discord.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rmonster = function rmonster(message, monsterName) {
  _axios["default"].get("http://localhost:5000/monsters/".concat(monsterName)).then(function (response) {
    var monster = response.data;
    var embed = new _discord.MessageEmbed();
    embed.setThumbnail(monster.image);
    embed.setTitle(monster.name);
    embed.setAuthor('Risk of Rain 2 Wiki', '', "https://riskofrain2.gamepedia.com/".concat(monster.name.replace(/ +/g, '_')));
    embed.addFields({
      name: 'Info:',
      value: monster.text
    });
    message.channel.send(embed);
  });
};

var _default = rmonster;
exports["default"] = _default;
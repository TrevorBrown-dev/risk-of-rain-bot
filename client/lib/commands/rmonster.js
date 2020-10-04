"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getMonster = _interopRequireDefault(require("../requests/getMonster"));

var _buildString = _interopRequireDefault(require("../helpers/buildString"));

var _discord = require("discord.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rmonster = function rmonster(message, args) {
  var monsterName = (0, _buildString["default"])(args);
  (0, _getMonster["default"])(monsterName).then(function (monster) {
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
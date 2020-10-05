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
    if (monster.caption) embed.setDescription("*".concat(monster.caption, "*"));
    embed.setThumbnail(monster.image);
    embed.setTitle(monster.name);
    embed.setAuthor('Risk of Rain 2 Wiki', '', "https://riskofrain2.gamepedia.com/".concat(monster.name.replace(/ +/g, '_')));
    if (monster.description) embed.addField('Description', monster.description, false);
    if (monster.health.value) embed.addField(monster.health.name, monster.health.value, false);
    if (monster.damage.value) embed.addField(monster.damage.name, monster.damage.value, false);
    if (monster.speed.value) embed.addField(monster.speed.name, monster.speed.value, false);
    if (monster.healthRegen.value) embed.addField(monster.healthRegen.name, monster.healthRegen.value, false);
    if (monster.armor.value) embed.addField(monster.armor.name, monster.armor.value, false);
    message.channel.send(embed);
  });
};

var _default = rmonster;
exports["default"] = _default;
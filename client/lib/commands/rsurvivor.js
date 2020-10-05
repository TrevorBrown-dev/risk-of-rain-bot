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
    embed.setDescription(survivor.description);
    embed.setAuthor('Risk of Rain 2 Wiki', '', "https://riskofrain2.gamepedia.com/".concat(survivor.name.replace(/ +/g, '_')));
    if (survivor.health.value) embed.addField(survivor.health.name, survivor.health.value, false);
    if (survivor.damage.value) embed.addField(survivor.damage.name, survivor.damage.value, false);
    if (survivor.speed.value) embed.addField(survivor.speed.name, survivor.speed.value, false);
    if (survivor.healthRegen.value) embed.addField(survivor.healthRegen.name, survivor.healthRegen.value, false);
    if (survivor.armor.value) embed.addField(survivor.armor.name, survivor.armor.value, false);
    if (survivor.unlock.value) embed.addField(survivor.unlock.name, survivor.unlock.value, false);
    if (survivor.umbraTitle.value) embed.addField(survivor.umbraTitle.name, survivor.umbraTitle.value, false);
    if (survivor.endingPhrase.value) embed.addField(survivor.endingPhrase.name, "*".concat(survivor.endingPhrase.value, "*"), false);
    message.channel.send(embed);
  });
};

var _default = rsurvivor;
exports["default"] = _default;
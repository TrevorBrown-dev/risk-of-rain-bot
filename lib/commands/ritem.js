"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _discord = require("discord.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ritem = function ritem(message, itemName) {
  _axios["default"].get("http://localhost:5000/items/".concat(itemName)).then(function (response) {
    var item = response.data;
    var embed = new _discord.MessageEmbed();
    embed.setTitle(item.name);
    embed.setThumbnail(item.image);
    embed.setAuthor('Risk of Rain 2 Wiki', '', "https://riskofrain2.gamepedia.com/".concat(item.name.replace(/ +/g, '_')));
    embed.setDescription(item.caption);
    embed.addFields({
      name: 'Details:',
      value: item.description
    });
    message.channel.send(embed);
  });
};

var _default = ritem;
exports["default"] = _default;
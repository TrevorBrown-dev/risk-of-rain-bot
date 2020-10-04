"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getItem = _interopRequireDefault(require("../requests/getItem"));

var _buildString = _interopRequireDefault(require("../helpers/buildString"));

var _discord = require("discord.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ritem = function ritem(message, args) {
  var itemName = (0, _buildString["default"])(args);
  (0, _getItem["default"])(itemName).then(function (item) {
    var embed = new _discord.MessageEmbed();
    embed.setTitle(item.name);
    embed.setThumbnail(item.image);
    embed.setAuthor('Risk of Rain 2 Wiki', '', "https://riskofrain2.gamepedia.com/".concat(item.name.replace(/ +/g, '_')));
    embed.setDescription(item.caption);
    embed.addFields({
      name: 'Info:',
      value: item.description
    });
    message.channel.send(embed);
  });
};

var _default = ritem;
exports["default"] = _default;
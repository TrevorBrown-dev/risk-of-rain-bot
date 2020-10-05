"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _discord = require("discord.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rinteractable = function rinteractable(message, interactableName) {
  _axios["default"].get("http://localhost:5000/interactables/".concat(interactableName)).then(function (response) {
    var interactable = response.data;
    var embed = new _discord.MessageEmbed();
    embed.setThumbnail(interactable.image);
    embed.setTitle(interactable.name);
    embed.setAuthor('Risk of Rain 2 Wiki', '', "https://riskofrain2.gamepedia.com/".concat(interactable.name.replace(/ +/g, '_')));
    embed.addFields({
      name: 'Description:',
      value: interactable.description + '\n'
    });
    message.channel.send(embed);
  });
};

var _default = rinteractable;
exports["default"] = _default;
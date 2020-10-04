"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getInteractable = _interopRequireDefault(require("../requests/getInteractable"));

var _buildString = _interopRequireDefault(require("../helpers/buildString"));

var _discord = require("discord.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rinteractable = function rinteractable(message, args) {
  var interactableName = (0, _buildString["default"])(args);
  (0, _getInteractable["default"])(interactableName).then(function (interactable) {
    var embed = new _discord.MessageEmbed();
    embed.setImage(interactable.image);
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
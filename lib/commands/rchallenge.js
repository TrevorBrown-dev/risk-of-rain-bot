"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _discord = require("discord.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rchallenge = function rchallenge(message, challengeName) {
  _axios["default"].get("http://localhost:5000/challenges/".concat(challengeName)).then(function (response) {
    var challenge = response.data;
    var embed = new _discord.MessageEmbed();
    embed.setThumbnail(challenge.image);
    embed.setTitle(challenge.name);
    embed.setAuthor('Risk of Rain 2 Wiki', '', "https://riskofrain2.gamepedia.com/".concat(challenge.name.replace(/ +/g, '_'))); //embed.setDescription(challenge.description);

    embed.addFields({
      name: 'Challenge:',
      value: challenge.text + '\n'
    });
    message.channel.send(embed);
  });
};

var _default = rchallenge;
exports["default"] = _default;
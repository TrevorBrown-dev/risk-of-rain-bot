"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _discord = require("discord.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var renvironment = function renvironment(message, environmentName) {
  _axios["default"].get("http://localhost:5000/ennvironments/".concat(environmentName)).then(function (response) {
    var environment = response.data;
    var embed = new _discord.MessageEmbed();
    embed.setImage(environment.image);
    embed.setTitle(environment.name);
    embed.setAuthor('Risk of Rain 2 Wiki', '', "https://riskofrain2.gamepedia.com/".concat(environment.name.replace(/ +/g, '_')));
    embed.addFields({
      name: 'Description:',
      value: environment.description + '\n' + environment.text
    });
    message.channel.send(embed);
  });
};

var _default = renvironment;
exports["default"] = _default;
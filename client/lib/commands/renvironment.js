"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getEnvironment = _interopRequireDefault(require("../requests/getEnvironment"));

var _buildString = _interopRequireDefault(require("../helpers/buildString"));

var _discord = require("discord.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var renvironment = function renvironment(message, args) {
  var environmentName = (0, _buildString["default"])(args);
  (0, _getEnvironment["default"])(environmentName).then(function (environment) {
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
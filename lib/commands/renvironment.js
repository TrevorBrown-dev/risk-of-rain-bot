"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _discord = require("discord.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var renvironment = function renvironment(message, environmentName) {
  _axios["default"].get("http://localhost:5000/environments/".concat(environmentName)).then(function (response) {
    var environment = response.data;
    var embed = new _discord.MessageEmbed();
    embed.setImage(environment.image);
    embed.setTitle(environment.name);
    if (environment.caption) embed.setDescription("*".concat(environment.caption, "*"));
    embed.setAuthor('Risk of Rain 2 Wiki', '', "https://riskofrain2.gamepedia.com/".concat(environment.name.replace(/ +/g, '_')));
    if (environment.description) embed.addField('Description', environment.description, false);
    if (environment.stage.value) embed.addField(environment.stage.name, environment.stage.value, false);
    if (environment.soundtrack.value) embed.addField(environment.soundtrack.name, environment.soundtrack.value, false);
    if (environment.quote.value) embed.addField(environment.quote.name, environment.quote.value, false);
    message.channel.send(embed);
  });
};

var _default = renvironment;
exports["default"] = _default;
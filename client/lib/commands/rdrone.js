"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _discord = require("discord.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rdrone = function rdrone(message, droneName) {
  _axios["default"].get("http://localhost:5000/drones/".concat(droneName)).then(function (response) {
    var drone = response.data;
    var embed = new _discord.MessageEmbed();
    embed.setThumbnail(drone.image);
    embed.setTitle(drone.name);
    embed.setAuthor('Risk of Rain 2 Wiki', '', "https://riskofrain2.gamepedia.com/".concat(drone.name.replace(/ +/g, '_')));
    embed.setDescription(drone.description);
    embed.addFields({
      name: 'Info:',
      value: drone.text + '\n'
    });
    message.channel.send(embed);
  });
};

var _default = rdrone;
exports["default"] = _default;
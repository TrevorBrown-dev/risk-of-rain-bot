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
    embed.setAuthor('Risk of Rain 2 Wiki', '', "https://riskofrain2.gamepedia.com/".concat(drone.name.replace(/ +/g, '_')));
    embed.setTitle(drone.name);
    embed.setThumbnail(drone.image);
    if (drone.description) embed.setDescription(drone.description);
    if (drone.health.value) embed.addField(drone.health.name, drone.health.value, false);
    if (drone.damage.value) embed.addField(drone.damage.name, drone.damage.value, false);
    if (drone.speed.value) embed.addField(drone.speed.name, drone.speed.value, false);
    if (drone.healthRegen.value) embed.addField(drone.healthRegen.name, drone.healthRegen.value, false);
    if (drone.armor.value) embed.addField(drone.armor.name, drone.armor.value, false);
    if (drone.cost.value) embed.addField(drone.cost.name, drone.cost.value, false);
    message.channel.send(embed);
  });
};

var _default = rdrone;
exports["default"] = _default;
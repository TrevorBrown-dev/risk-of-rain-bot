"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getDrone = _interopRequireDefault(require("../requests/getDrone"));

var _buildString = _interopRequireDefault(require("../helpers/buildString"));

var _discord = _interopRequireDefault(require("discord.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rdrone = function rdrone(message, args) {
  var droneName = (0, _buildString["default"])(args);
  (0, _getDrone["default"])(droneName).then(function (drone) {
    var embed = new _discord["default"].MessageEmbed();
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
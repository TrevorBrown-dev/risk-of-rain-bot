"use strict";

require("@babel/polyfill");

var _discord = _interopRequireDefault(require("discord.js"));

var _commands = require("./commands");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var client = new _discord["default"].Client();
client.once('ready', function () {
  console.log('Ready to Risk of Rain');
});
client.on('message', function (message) {
  var args = message.content.split(/ +/g);
  var command = args.shift();

  if (command === '!ritem') {
    (0, _commands.ritem)(message, args);
  }

  if (command === '!rmonster') {
    (0, _commands.rmonster)(message, args);
  }

  if (command === '!rsurvivor') {
    (0, _commands.rsurvivor)(message, args);
  }

  if (command === '!renv' || command === '!renvironment') {
    (0, _commands.renvironment)(message, args);
  }
});
client.login(process.env.BOT_TOKEN);
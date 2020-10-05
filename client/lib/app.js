"use strict";

require("@babel/polyfill");

var _discord = _interopRequireDefault(require("discord.js"));

var _commands = require("./commands");

var _buildString = _interopRequireDefault(require("./helpers/buildString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var client = new _discord["default"].Client();
client.once('ready', function () {
  console.log('Ready to Risk of Rain');
});
client.on('message', function (message) {
  var args = message.content.split(/ +/g);
  var command = args.shift();
  var name = (0, _buildString["default"])(args);

  if (command === '!ritem') {
    (0, _commands.ritem)(message, name);
  }

  if (command === '!rmonster') {
    (0, _commands.rmonster)(message, name);
  }

  if (command === '!rsurvivor') {
    (0, _commands.rsurvivor)(message, name);
  }

  if (command === '!renv' || command === '!renvironment') {
    (0, _commands.renvironment)(message, name);
  }

  if (command === '!rint' || command === '!rinteractable') {
    (0, _commands.rinteractable)(message, name);
  }

  if (command === '!rdrone') {
    (0, _commands.rdrone)(message, name);
  }

  if (command === '!rchallenge' || command === '!rchal') {
    (0, _commands.rchallenge)(message, name);
  }
});
client.login(process.env.BOT_TOKEN);
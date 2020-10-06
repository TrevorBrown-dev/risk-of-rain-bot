"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _discord = require("discord.js");

var rhelp = function rhelp(message) {
  var embed = new _discord.MessageEmbed();
  embed.setAuthor('Risk of Rain 2 Wiki', '', "https://riskofrain2.gamepedia.com/");
  embed.setColor('12EED6');
  embed.setDescription("\n**!rhelp** => List all commands\n\n**!rchallenge**  <challenge> => Lists the challenge, way to achieve, and what it unlocks.\n\n**!rdrone**  <drone> => List the drone and stats.\n\n**!renvironment** (or **!renv**)  <enviroment> => Gives Description and image of the environment.\n\n**!rinteractable** (or **!rint**)  <interactable> => Gives Description and image\n\n**!ritem**  <item> => Gives Description and Stats\n\n**!rmonster**  <monster> => Gives description and stats\n\n**!rsurvivor**  <survivor> => Gives Caption and stats\n\n**!rskills**  ( <survivor> => too return all skills or)  <skill> => Gives description and stats\n\n    ");
  embed.addFields({
    name: 'Legend:',
    value: "= <> = user inputed\nAll commands autocorrect to the closest in their respective field.\nLeaving it blank autogenerates a random part of the database.\n    "
  });
  message.channel.send(embed);
};

var _default = rhelp;
exports["default"] = _default;
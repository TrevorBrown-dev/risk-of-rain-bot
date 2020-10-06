import { MessageEmbed } from 'discord.js';

const rhelp = () => {
    const embed = new MessageEmbed();
    embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/`);
    embed.setTitle('All commands');

    embed.setDescription(`rhelp => List all commands`);
};

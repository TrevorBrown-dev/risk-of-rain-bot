import getMonster from '../requests/getMonster';
import buildString from '../helpers/buildString';
import Discord from 'discord.js';
const rmonster = (message, args) => {
    const monsterName = buildString(args);
    getMonster(monsterName).then((monster) => {
        const embed = new Discord.MessageEmbed();
        embed.setThumbnail(monster.image);
        embed.setTitle(monster.name);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${monster.name.replace(/ +/g, '_')}`);
        embed.addFields({
            name: 'Info:',
            value: monster.text,
        });
        message.channel.send(embed);
    });
};

export default rmonster;

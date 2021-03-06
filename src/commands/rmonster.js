import RoR from '../api/RoR';
import { MessageEmbed } from 'discord.js';

const rmonster = (message, monsterName) => {
    RoR.get(`/monsters/${monsterName}`).then(({ data: monster }) => {
        const embed = new MessageEmbed();
        if (monster.caption) embed.setDescription(`*${monster.caption}*`);
        embed.setColor('C84F4F');
        embed.setThumbnail(monster.image);
        embed.setTitle(monster.name);
        embed.setAuthor(`Risk of Rain 2 Wiki - ${monster.name}`, '', `https://riskofrain2.gamepedia.com/${monster.name.replace(/ +/g, '_')}`);
        if (monster.description) embed.addField('Description', monster.description, false);
        embed.addFields(...monster.stats);
        message.channel.send(embed);
    });
};

export default rmonster;

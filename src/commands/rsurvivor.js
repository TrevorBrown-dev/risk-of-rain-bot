import RoR from '../api/RoR';
import { MessageEmbed } from 'discord.js';

const rsurvivor = (message, survivorName) => {
    RoR.get(`/survivors/${survivorName}`).then((response) => {
        const survivor = response.data;
        const embed = new MessageEmbed();
        embed.setColor('363995');
        embed.setThumbnail(survivor.image);
        embed.setTitle(survivor.name);
        embed.setDescription(survivor.description);
        embed.setAuthor(`Risk of Rain 2 Wiki - ${survivor.name}`, '', `https://riskofrain2.gamepedia.com/${survivor.name.replace(/ +/g, '_')}`);
        embed.addFields(...survivor.body);
        message.channel.send(embed);
    });
};

export default rsurvivor;

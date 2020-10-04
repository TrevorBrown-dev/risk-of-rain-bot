import axios from 'axios';
import { MessageEmbed } from 'discord.js';

const rsurvivor = (message, survivorName) => {
    axios.get(`http://localhost:5000/survivors/${survivorName}`).then((response) => {
        const survivor = response.data;
        const embed = new MessageEmbed();
        embed.setThumbnail(survivor.image);
        embed.setTitle(survivor.name);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${survivor.name.replace(/ +/g, '_')}`);
        embed.addFields({
            name: 'Info:',
            value: survivor.text,
        });
        message.channel.send(embed);
    });
};

export default rsurvivor;

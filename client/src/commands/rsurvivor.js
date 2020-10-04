import getSurvivor from '../requests/getSurvivor';
import buildString from '../helpers/buildString';
import { MessageEmbed } from 'discord.js';

const rsurvivor = (message, args) => {
    const survivorName = buildString(args);
    getSurvivor(survivorName).then((survivor) => {
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

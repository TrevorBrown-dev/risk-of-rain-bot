import RoR from '../api/RoR';
import { MessageEmbed } from 'discord.js';

const ritem = (message, itemName) => {
    RoR.get(`/items/${itemName}`).then(({ data: item }) => {
        const embed = new MessageEmbed();
        embed.setColor('E0784E');
        embed.setTitle(item.name);
        embed.setThumbnail(item.image);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${item.name.replace(/ +/g, '_')}`);
        embed.setDescription(item.caption);
        embed.addFields({
            name: 'Details:',
            value: item.description,
        });
        message.channel.send(embed);
    });
};

export default ritem;

import axios from 'axios';
import { MessageEmbed } from 'discord.js';
const ritem = (message, itemName) => {
    axios.get(`http://localhost:5000/items/${itemName}`).then((response) => {
        const item = response.data;
        const embed = new MessageEmbed();
        embed.setTitle(item.name);
        embed.setThumbnail(item.image);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${item.name.replace(/ +/g, '_')}`);
        embed.setDescription(item.caption);
        embed.addFields({
            name: 'Info:',
            value: item.description,
        });
        message.channel.send(embed);
    });
};

export default ritem;

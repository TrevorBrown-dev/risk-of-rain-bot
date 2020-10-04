import getItem from '../requests/getItem';
import buildString from '../helpers/buildString';
import Discord from 'discord.js';
const ritem = (message, args) => {
    const itemName = buildString(args);
    getItem(itemName).then((item) => {
        const embed = new Discord.MessageEmbed();
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

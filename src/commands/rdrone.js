import getDrone from '../requests/getDrone';
import buildString from '../helpers/buildString';
import Discord from 'discord.js';

const rdrone = (message, args) => {
    const droneName = buildString(args);
    getDrone(droneName).then((drone) => {
        const embed = new Discord.MessageEmbed();
        embed.setThumbnail(drone.image);
        embed.setTitle(drone.name);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${drone.name.replace(/ +/g, '_')}`);
        embed.setDescription(drone.description);
        embed.addFields({
            name: 'Info:',
            value: drone.text + '\n'
        });
        message.channel.send(embed);
    });
};

export default rdrone;
import axios from 'axios';
import { MessageEmbed } from 'discord.js';

const rdrone = (message, droneName) => {
    axios.get(`http://localhost:5000/drones/${droneName}`).then(({ data: drone }) => {
        const embed = new MessageEmbed();
        embed.setColor('EC88B0');
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${drone.name.replace(/ +/g, '_')}`);
        embed.setTitle(drone.name);
        embed.setThumbnail(drone.image);
        if (drone.description) embed.setDescription(drone.description);
        for (let stat of drone.stats) {
            embed.addField(stat.name, stat.value, false);
        }
        message.channel.send(embed);
    });
};

export default rdrone;

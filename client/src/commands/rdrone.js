import axios from 'axios';
import { MessageEmbed } from 'discord.js';

const rdrone = (message, droneName) => {
    axios.get(`http://localhost:5000/drones/${droneName}`).then((response) => {
        const drone = response.data;
        const embed = new MessageEmbed();
        embed.setThumbnail(drone.image);
        embed.setTitle(drone.name);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${drone.name.replace(/ +/g, '_')}`);
        embed.setDescription(drone.description);
        embed.addFields({
            name: 'Info:',
            value: drone.text + '\n',
        });
        message.channel.send(embed);
    });
};

export default rdrone;

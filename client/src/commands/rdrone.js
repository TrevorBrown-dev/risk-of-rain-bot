import axios from 'axios';
import { MessageEmbed } from 'discord.js';

const rdrone = (message, droneName) => {
    axios.get(`http://localhost:5000/drones/${droneName}`).then((response) => {
        const drone = response.data;
        const embed = new MessageEmbed();
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${drone.name.replace(/ +/g, '_')}`);
        embed.setTitle(drone.name);
        embed.setThumbnail(drone.image);
        if (drone.description) embed.setDescription(drone.description);
        if (drone.health.value) embed.addField(drone.health.name, drone.health.value, false);
        if (drone.damage.value) embed.addField(drone.damage.name, drone.damage.value, false);
        if (drone.speed.value) embed.addField(drone.speed.name, drone.speed.value, false);
        if (drone.healthRegen.value) embed.addField(drone.healthRegen.name, drone.healthRegen.value, false);
        if (drone.armor.value) embed.addField(drone.armor.name, drone.armor.value, false);
        if (drone.cost.value) embed.addField(drone.cost.name, drone.cost.value, false);
        message.channel.send(embed);
    });
};

export default rdrone;

import axios from 'axios';

import { MessageEmbed } from 'discord.js';

const rinteractable = (message, interactableName) => {
    axios.get(`http://localhost:5000/interactables/${interactableName}`).then((response) => {
        const interactable = response.data;
        const embed = new MessageEmbed();
        embed.setColor('A0E04E');
        embed.setThumbnail(interactable.image);
        embed.setTitle(interactable.name);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${interactable.name.replace(/ +/g, '_')}`);
        embed.addFields({
            name: 'Description:',
            value: interactable.description + '\n',
        });
        message.channel.send(embed);
    });
};

export default rinteractable;

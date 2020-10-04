import axios from 'axios';

import { MessageEmbed } from 'discord.js';

const renvironment = (message, environmentName) => {
    axios.get(`http://localhost:5000/ennvironments/${environmentName}`).then((response) => {
        const environment = response.data;
        const embed = new MessageEmbed();
        embed.setImage(environment.image);
        embed.setTitle(environment.name);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${environment.name.replace(/ +/g, '_')}`);
        embed.addFields({
            name: 'Description:',
            value: environment.description + '\n' + environment.text,
        });
        message.channel.send(embed);
    });
};

export default renvironment;

import axios from 'axios';

import { MessageEmbed } from 'discord.js';

const renvironment = (message, environmentName) => {
    axios.get(`http://localhost:5000/environments/${environmentName}`).then((response) => {
        const environment = response.data;
        const embed = new MessageEmbed();
        embed.setImage(environment.image);
        embed.setTitle(environment.name);
        if (environment.caption) embed.setDescription(`*${environment.caption}*`);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${environment.name.replace(/ +/g, '_')}`);
        if (environment.description) embed.addField('Description', environment.description, false);
        if (environment.stage.value) embed.addField(environment.stage.name, environment.stage.value, false);
        if (environment.soundtrack.value) embed.addField(environment.soundtrack.name, environment.soundtrack.value, false);
        if (environment.quote.value) embed.addField(environment.quote.name, environment.quote.value, false);

        message.channel.send(embed);
    });
};

export default renvironment;

import RoR from '../api/RoR';
import { MessageEmbed } from 'discord.js';

const renvironment = (message, environmentName) => {
    RoR.get(`/environments/${environmentName}`).then(({ data: environment }) => {
        const embed = new MessageEmbed();
        embed.setColor('D1C768');
        embed.setImage(environment.image);
        embed.setTitle(environment.name);
        if (environment.caption) embed.setDescription(`*${environment.caption}*`);
        embed.setAuthor(`Risk of Rain 2 Wiki - ${environment.name}`, '', `https://riskofrain2.gamepedia.com/${environment.name.replace(/ +/g, '_')}`);
        if (environment.description) embed.addField('Description', environment.description, false);
        if (environment.stage.value) embed.addField(environment.stage.name, environment.stage.value, false);
        if (environment.soundtrack.value) embed.addField(environment.soundtrack.name, environment.soundtrack.value, false);
        if (environment.quote.value) embed.addField(environment.quote.name, environment.quote.value, false);

        message.channel.send(embed);
    });
};

export default renvironment;

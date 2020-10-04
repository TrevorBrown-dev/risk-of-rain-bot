import getEnvironment from '../requests/getEnvironment';
import buildString from '../helpers/buildString';
import Discord from 'discord.js';

const renvironment = (message, args) => {
    const environmentName = buildString(args);
    getEnvironment(environmentName).then((environment) => {
        const embed = new Discord.MessageEmbed();
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

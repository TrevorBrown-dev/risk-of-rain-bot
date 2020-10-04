import getInteractable from '../requests/getInteractable';
import buildString from '../helpers/buildString';
import Discord from 'discord.js';

const rinteractable = (message, args) => {
    const interactableName = buildString(args);
    getInteractable(interactableName).then((interactable) => {
        const embed = new Discord.MessageEmbed();
        embed.setImage(interactable.image);
        embed.setTitle(interactable.name);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${interactable.name.replace(/ +/g, '_')}`);
        embed.addFields({
            name: 'Description:',
            value: interactable.description + '\n'// + interactable.text,
        });
        message.channel.send(embed);
    });
};

export default rinteractable;
import RoR from '../api/RoR';
import { MessageEmbed } from 'discord.js';

const rinteractable = (message, interactableName) => {
    RoR.get(`/interactables/${interactableName}`).then(({ data: interactable }) => {
        const embed = new MessageEmbed();
        embed.setColor('A0E04E');
        embed.setThumbnail(interactable.image);
        embed.setTitle(interactable.name);
        embed.setAuthor(`Risk of Rain 2 Wiki - ${interactable.name}`, '', `https://riskofrain2.gamepedia.com/${interactable.name.replace(/ +/g, '_')}`);
        embed.addFields({
            name: 'Description:',
            value: interactable.description + '\n',
        });
        message.channel.send(embed);
    });
};

export default rinteractable;

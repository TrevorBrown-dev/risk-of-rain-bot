import RoR from '../api/RoR';
import { MessageEmbed } from 'discord.js';

const rchallenge = (message, challengeName) => {
    RoR.get(`/challenges/${challengeName}`).then(({ data: challenge }) => {
        const embed = new MessageEmbed();
        embed.setColor('BCE8D2');
        embed.setTitle(challenge.title);
        embed.setThumbnail(challenge.image);
        embed.setDescription(challenge.description);
        embed.setAuthor(`Risk of Rain 2 Wiki - ${challenge.title}`, '', `https://riskofrain2.gamepedia.com/${challenge.title.replace(/ +/g, '_')}`);
        embed.addField('Unlocks', `[${challenge.unlock.value}](https://riskofrain2.gamepedia.com/${challenge.unlock.value.replace(/ +/g, '_')})`, false);

        message.channel.send(embed);
    });
};

export default rchallenge;

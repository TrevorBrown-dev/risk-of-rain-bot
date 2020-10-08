import RoR from '../api/RoR';
import { MessageEmbed } from 'discord.js';

const rchallenge = (message, challengeName) => {
    RoR.get(`/challenges/${challengeName}`).then(({ data: challenge }) => {
        const embed = new MessageEmbed();
        embed.setColor('BCE8D2');
        embed.setThumbnail(challenge.image);
        embed.setTitle(challenge.name);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${challenge.name.replace(/ +/g, '_')}`);
        embed.addField('Challenge:', `${challenge.text}\n`, false);

        message.channel.send(embed);
    });
};

export default rchallenge;

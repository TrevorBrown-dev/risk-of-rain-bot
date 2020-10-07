import axios from 'axios';
import { MessageEmbed } from 'discord.js';

const rchallenge = (message, challengeName) => {
    axios.get(`http://localhost:5000/challenges/${challengeName}`).then(({ data: challenge }) => {
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

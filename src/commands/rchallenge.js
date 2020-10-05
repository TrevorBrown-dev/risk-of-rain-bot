import axios from 'axios';
import { MessageEmbed } from 'discord.js';

const rchallenge = (message, challengeName) => {
    axios.get(`http://localhost:5000/challenges/${challengeName}`).then((response) => {
        const challenge = response.data;
        const embed = new MessageEmbed();
        embed.setThumbnail(challenge.image);
        embed.setTitle(challenge.name);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${challenge.name.replace(/ +/g, '_')}`);
        //embed.setDescription(challenge.description);
        embed.addFields({
            name: 'Challenge:',
            value: challenge.text + '\n',
        });
        message.channel.send(embed);
    });
};

export default rchallenge;

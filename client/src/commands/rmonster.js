import axios from 'axios';
import { MessageEmbed } from 'discord.js';

const rmonster = (message, monsterName) => {
    axios.get(`http://localhost:5000/monsters/${monsterName}`).then((response) => {
        const monster = response.data;
        const embed = new MessageEmbed();
        embed.setThumbnail(monster.image);
        embed.setTitle(monster.name);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${monster.name.replace(/ +/g, '_')}`);
        embed.addFields({
            name: 'Info:',
            value: monster.text,
        });
        message.channel.send(embed);
    });
};

export default rmonster;

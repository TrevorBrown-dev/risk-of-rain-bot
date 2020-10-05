import axios from 'axios';
import { MessageEmbed } from 'discord.js';

const rmonster = (message, monsterName) => {
    axios.get(`http://localhost:5000/monsters/${monsterName}`).then((response) => {
        const monster = response.data;
        const embed = new MessageEmbed();
        if (monster.caption) embed.setDescription(`*${monster.caption}*`);
        embed.setThumbnail(monster.image);
        embed.setTitle(monster.name);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${monster.name.replace(/ +/g, '_')}`);
        if (monster.description) embed.addField('Description', monster.description, false);
        if (monster.health.value) embed.addField(monster.health.name, monster.health.value, false);
        if (monster.damage.value) embed.addField(monster.damage.name, monster.damage.value, false);
        if (monster.speed.value) embed.addField(monster.speed.name, monster.speed.value, false);
        if (monster.healthRegen.value) embed.addField(monster.healthRegen.name, monster.healthRegen.value, false);
        if (monster.armor.value) embed.addField(monster.armor.name, monster.armor.value, false);
        message.channel.send(embed);
    });
};

export default rmonster;

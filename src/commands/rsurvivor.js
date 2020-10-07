import axios from 'axios';
import { MessageEmbed } from 'discord.js';

const rsurvivor = (message, survivorName) => {
    axios.get(`http://localhost:5000/survivors/${survivorName}`).then((response) => {
        const survivor = response.data;
        const embed = new MessageEmbed();
        embed.setColor('363995');
        embed.setThumbnail(survivor.image);
        embed.setTitle(survivor.name);
        embed.setDescription(survivor.description);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${survivor.name.replace(/ +/g, '_')}`);
        if (survivor.health.value) embed.addField(survivor.health.name, survivor.health.value, false);
        if (survivor.damage.value) embed.addField(survivor.damage.name, survivor.damage.value, false);
        if (survivor.speed.value) embed.addField(survivor.speed.name, survivor.speed.value, false);
        if (survivor.healthRegen.value) embed.addField(survivor.healthRegen.name, survivor.healthRegen.value, false);
        if (survivor.armor.value) embed.addField(survivor.armor.name, survivor.armor.value, false);
        if (survivor.unlock.value) embed.addField(survivor.unlock.name, survivor.unlock.value, false);
        if (survivor.umbraTitle.value) embed.addField(survivor.umbraTitle.name, survivor.umbraTitle.value, false);
        if (survivor.endingPhrase.value) embed.addField(survivor.endingPhrase.name, `*${survivor.endingPhrase.value}*`, false);
        message.channel.send(embed);
    });
};

export default rsurvivor;

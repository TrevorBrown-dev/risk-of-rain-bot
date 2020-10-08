import RoR from '../api/RoR';
import { MessageEmbed } from 'discord.js';

const rlore = (message, loreName) => {
    RoR.get(`/lores/${loreName}`).then(({ data: lore }) => {
        const embed = new MessageEmbed();
        embed.setColor('EC88B0');
        embed.setAuthor(`Risk of Rain 2 Wiki - Lore: ${lore.name}`, '', `https://riskofrain2.gamepedia.com/${lore.name.replace(/ +/g, '_')}#Lore`);
        embed.setTitle(lore.name);
        const loreText = (lore.value.length > 2000) ? `\`\`\`${lore.value.substring(0, 1600)}...\`\`\`\n[Continue Reading](https://riskofrain2.gamepedia.com/${lore.name.replace(/ +/g, '_')}#Lore)` : `\`\`\`${lore.value}\`\`\``;
        embed.setDescription(`${ loreText }`);
       
        message.channel.send(embed);
    });
};

export default rlore;
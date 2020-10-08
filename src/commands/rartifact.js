import RoR from '../api/RoR';
import { MessageEmbed } from 'discord.js';
const rartifact = (message, artifactName) => {
    RoR.get(`/artifacts/${artifactName}`).then(({ data: artifact }) => {
        const embed = new MessageEmbed();
        embed.setColor('815fb2');
        embed.setTitle(artifact.title);
        embed.setThumbnail(artifact.image);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/Artifacts`);
        embed.setDescription(artifact.description);
        embed.addFields({
            name: 'Code:',
            value: `||${artifact.password}||`,
        });
        message.channel.send(embed);
    });
};

export default rartifact;

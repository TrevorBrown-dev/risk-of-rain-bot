import axios from 'axios';
import { MessageEmbed } from 'discord.js';
const rartifact = (message, artifactName) => {
    axios.get(`http://localhost:5000/artifacts/${artifactName}`).then((response) => {
        const artifact = response.data;
        const embed = new MessageEmbed();
        embed.setColor('E0784E');
        embed.setTitle(artifact.title);
        embed.setThumbnail(artifact.image);
        embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/Artifacts`);
        embed.setDescription(artifact.description);
        embed.addFields({
            name: 'Password:',
            value: `||${artifact.password}||`,
        });
        message.channel.send(embed);
    });
};

export default rartifact;

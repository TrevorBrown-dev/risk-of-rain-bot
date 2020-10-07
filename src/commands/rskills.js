import axios from 'axios';
import { MessageEmbed } from 'discord.js';
const rskills = (message, skillsName) => {
    axios.get(`http://localhost:5000/skills/${skillsName}?singleSkill=false`).then((response) => {
        const skills = response.data;
        const embeds = [];
        // embed.setColor('E0784E');
        // embed.setTitle(skills.survivor);
        // embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/${skills.name.replace(/ +/g, '_')}`);
        // embed.setThumbnail(skills.image);
        // embed.setDescription(skills.caption);
        let embed;
        for (let skill of skills.skills) {
            embed = new MessageEmbed();
            embed.setColor('3B953A');
            embed.setTitle(skill.heading);
            embed.setThumbnail(skill.image);
            for (let skillRow of skill.skillRows) {
                embed.addField(skillRow.name, skillRow.value, false);
            }
            embeds.push(embed);
        }
        // console.log(embeds);
        for (let embed of embeds) {
            message.channel.send(embed);
        }
    });
};

export default rskills;

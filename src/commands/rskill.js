import RoR from '../api/RoR';
import { MessageEmbed } from 'discord.js';

const rskill = (message, skillsName) => {
    RoR.get(`/skills/${skillsName}?singleSkill=true`).then(({ data: skillResponse }) => {
        let result = skillResponse.skills.find((skill) => {
            return skill.heading.includes(skillResponse.reroute);
        });

        let embed = new MessageEmbed();
        embed.setColor('3B953A');
        embed.setTitle(result.heading);
        embed.setThumbnail(result.image);
        embed.setAuthor(`Risk of Rain 2 Wiki - ${result.heading}`, '', `https://riskofrain2.gamepedia.com/${skillResponse.survivor.replace(/ +/g, '_')}`);

        for (let skillRow of result.skillRows) {
            embed.addField(skillRow.name, skillRow.value, false);
        }

        message.channel.send(embed);
    });
};

export default rskill;

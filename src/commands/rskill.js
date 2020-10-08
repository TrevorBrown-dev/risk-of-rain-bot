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

        for (let skillRow of result.skillRows) {
            embed.addField(skillRow.name, skillRow.value, false);
        }

        message.channel.send(embed);
    });
};

export default rskill;

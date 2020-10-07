import axios from 'axios';
import { MessageEmbed } from 'discord.js';
const rskill = (message, skillsName) => {
    axios.get(`http://localhost:5000/skills/${skillsName}?singleSkill=true`).then((response) => {
        const skillResponse = response.data;
        console.log(response.data);
        let embed;

        let result = skillResponse.skills.find((skill) => {
            return skill.heading.includes(skillResponse.reroute);
        });

        embed = new MessageEmbed();
        embed.setColor('E0784E');
        embed.setTitle(result.heading);
        embed.setThumbnail(result.image);
        for (let skillRow of result.skillRows) {
            embed.addField(skillRow.name, skillRow.value, false);
        }

        message.channel.send(embed);
    });
};

export default rskill;

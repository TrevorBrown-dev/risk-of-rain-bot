import { MessageEmbed } from 'discord.js';

const rhelp = (message) => {
    const embed = new MessageEmbed();
    embed.setAuthor('Risk of Rain 2 Wiki', '', `https://riskofrain2.gamepedia.com/`);
    embed.setColor('539791');
    embed.setDescription(`
**!rhelp** => List all commands\n
**!rchallenge**  <challenge> => Lists the challenge, way to achieve, and what it unlocks.\n
**!rdrone**  <drone> => List the drone and stats.\n
**!renvironment** (or **!renv**)  <enviroment> => Gives Description and image of the environment.\n
**!rinteractable** (or **!rint**)  <interactable> => Gives Description and image\n
**!ritem**  <item> => Gives Description and Stats\n
**!rmonster**  <monster> => Gives description and stats\n
**!rsurvivor**  <survivor> => Gives Caption and stats\n
**!rskills**  <survivor> => Too return all skills of that survivor.\n
**!rskill**  <skills> => Shows an individual skill.\n
**!artifact**  <artifact> => Gives the description and password.\n
    `);
    embed.addFields({
        name: 'Legend:',
        value: `<> = user inputed
All commands autocorrect to the closest in their respective field.
Leaving it blank autogenerates a random item of the database.
    `,
    });
    message.channel.send(embed);
};

export default rhelp;

import '@babel/polyfill';
import { getMonster, getItem, getSurvivor } from './risk-of-rain';
import Discord from 'discord.js';

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready to Risk of Rain');
});

const buildString = (args) => {
    let string = '';
    let s;
    for (s of args) {
        string += s + ' ';
    }
    return string;
};

client.on('message', (message) => {
    const args = message.content.split(/ +/g);
    const command = args.shift();
    if (command === '!ritem') {
        const itemName = buildString(args);
        getItem(itemName).then((item) => {
            const embed = new Discord.MessageEmbed();
            // embed.setTitle(item.name);
            embed.setThumbnail(item.image);
            // embed.setImage(item.image);
            embed.setAuthor('Risk of Rain 2 Wiki', client.user.avatar, `https://riskofrain2.gamepedia.com/${item.name.replace(' ', '_')}`);
            embed.setDescription(item.caption);
            embed.addFields({
                name: 'Stats:',
                value: item.description,
            });
            message.channel.send(embed);
        });
    }

    if (command === '!rmonster') {
        const monsterName = buildString(args);
        getMonster(monsterName).then((monster) => {
            const embed = new Discord.MessageEmbed();
            embed.setThumbnail(monster.image);
            embed.setTitle(monster.name);
            embed.setAuthor('Risk of Rain 2 Wiki', client.user.avatar, `https://riskofrain2.gamepedia.com/${monster.name.replace(' ', '_')}`);
            embed.addFields({
                name: 'Stats:',
                value: monster.text,
            });
            message.channel.send(embed);
        });
    }

    if (command === '!rsurvivor') {
        const survivorName = buildString(args);
        getSurvivor(survivorName).then((survivor) => {
            const embed = new Discord.MessageEmbed();
            embed.setThumbnail(survivor.image);
            embed.setTitle(survivor.name);
            embed.setAuthor('Risk of Rain 2 Wiki', client.user.avatar, `https://riskofrain2.gamepedia.com/${survivor.name.replace(' ', '_')}`);
            embed.addFields({
                name: 'Stats:',
                value: survivor.text,
            });
            message.channel.send(embed);
        });
    }
});
client.login(process.env.BOT_TOKEN);

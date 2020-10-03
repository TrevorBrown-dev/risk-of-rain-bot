import '@babel/polyfill';
import getItem from './risk-of-rain/getItem';
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
            embed.setTitle(item.name);
            embed.setThumbnail(item.image);
            // embed.setImage(item.image);
            embed.setAuthor('RiskBot-9000', client.user.avatar, 'https://riskofrain2.gamepedia.com/');
            embed.setDescription(item.caption);
            embed.addFields({
                name: 'Stats:',
                value: item.description,
            });
            const string = `**${item.name}**
${item.caption}
${item.description}
${item.image}
            `;
            message.channel.send(embed);
        });
    }
});
client.login(process.env.BOT_TOKEN);

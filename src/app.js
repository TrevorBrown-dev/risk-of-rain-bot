import '@babel/polyfill';
import Discord from 'discord.js';

import { ritem, rmonster, rsurvivor, renvironment, rinteractable, rdrone, rchallenge, rhelp, rskill, rskills, rartifact, rlore} from './commands';
import buildString from './helpers/buildString';

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready to Risk of Rain');
    client.user.setActivity("!rhelp",{
        type: "WATCHING"
    });
});

client.on('message', (message) => {
    const args = message.content.split(/ +/g);
    const command = args.shift();
    const name = buildString(args);

    if (command === '!ritem') {
        ritem(message, name);
    }

    if (command === '!rmonster') {
        rmonster(message, name);
    }

    if (command === '!rsurvivor') {
        rsurvivor(message, name);
    }

    if (command === '!renv' || command === '!renvironment') {
        renvironment(message, name);
    }

    if (command === '!rint' || command === '!rinteractable') {
        rinteractable(message, name);
    }

    if (command === '!rdrone') {
        rdrone(message, name);
    }

    if (command === '!rchallenge' || command === '!rchal') {
        rchallenge(message, name);
    }

    if (command === '!rskill') {
        rskill(message, name);
    }

    if (command === '!rskills') {
        rskills(message, name);
    }
    if (command === '!rartifact') {
        rartifact(message, name);
    }
    if (command === '!rlore') {
        rlore(message, name);
    }

    if (command === '!rhelp') {
        rhelp(message);
    }

    if (command === '!rshare') {
        message.channel.send(`Bot invite link: https://discord.com/api/oauth2/authorize?client_id=762075284849426453&permissions=2048&scope=bot`);
    }
});
client.login(process.env.BOT_TOKEN);

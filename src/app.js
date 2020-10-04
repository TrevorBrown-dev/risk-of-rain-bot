import '@babel/polyfill';
import Discord from 'discord.js';

import { ritem, rmonster, rsurvivor, renvironment, rinteractable} from './commands';

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready to Risk of Rain');
});

client.on('message', (message) => {
    const args = message.content.split(/ +/g);
    const command = args.shift();

    if (command === '!ritem') {
        ritem(message, args);
    }

    if (command === '!rmonster') {
        rmonster(message, args);
    }

    if (command === '!rsurvivor') {
        rsurvivor(message, args);
    }

    if (command === '!renv' || command === '!renvironment') {
        renvironment(message, args);
    }

    if (command === '!rint' || command === '!rinteractable') {
        rinteractable(message, args);
    }
});
client.login(process.env.BOT_TOKEN);

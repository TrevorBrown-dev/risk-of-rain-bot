import '@babel/polyfill';
import Discord from 'discord.js';

import { ritem, rmonster, rsurvivor, renvironment, rinteractable, rdrone } from './commands';
import buildString from './helpers/buildString';

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready to Risk of Rain');
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
});
client.login(process.env.BOT_TOKEN);
